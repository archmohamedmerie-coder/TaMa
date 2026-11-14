import * as THREE from 'three';
import { TYPES, isBlock } from './types';
import { N, H, K, unK, inB, voxels, commit, cellsOf, offCell, sizeOf, type Placement, type Op, type Cell, swapOp, pieceKeys, anchorKey, turnStep, roomOp, roofOp, view, dirty, isLoose, isSizable, SIZE_MIN, SIZE_MAX, type RoofShape } from './world';
import { canvas, camera, ghost, setRoomPreview, resize, showSelection } from './render';
import { pick, targetFor, planePoint, type Hit } from './pick';
import { sfx } from './audio';
import { say, undo, redo } from './ui';
import { setFinger, clearFinger, heroEye, lookBy, walkToScreen } from './hero';

// current tool, shared with the palette in ui.ts
export type Mode = 'build' | 'erase' | 'paint' | 'turn' | 'move' | 'size' | 'walk' | 'room' | 'roof';
// one storey is three cells high: room for a two-cell door under a lintel
export const STOREY = 3;
// color: the paint colour, or null to give a piece its own colours back
// room: the wall material and number of storeys used by the room tool
// roof: the shape and colour used by the roof tool (null colour = red tiles)
// sel: the piece chosen with the size tool (its anchor key)
export const tool: { sel: number | null; mode: Mode; selected: string; color: number | null; room: { wall: string; storeys: number }; roof: { shape: RoofShape; color: number | null } } =
  { sel: null, mode: 'build', selected: 'rose', color: 0xe5383b, room: { wall: 'white', storeys: 1 }, roof: { shape: 'gable', color: null } };

// Where a window or door goes when a wall is tapped: in the wall, facing out of the tapped side,
// in the wall's own colour. Returns null when it does not fit there.
function openingPlacement(hit: Hit, sel: string): { keys: number[]; place: Placement } | null {
  if (hit.ground) return null;
  const T = TYPES[sel], h = sizeOf(sel)[1], n = hit.normal;
  let [x, y, z] = hit.cell, r: number;
  const block = (bx: number, bz: number) => { const v = voxels.get(K(bx, y, bz)); return inB(bx, y, bz) && !!v && isBlock(v.t); };
  if (n && n[1] === 0) r = n[2] === 1 ? 0 : n[0] === 1 ? 2 : n[2] === -1 ? 4 : 6;
  else r = block(x - 1, z) || block(x + 1, z) ? 0 : 2;       // tapped from above: follow the run of the wall
  // tall pieces line up with the storey: doors stand on its floor, tall windows stay under its top
  if (h === 2) { const row = y % STOREY; y -= T.door ? row : row === 2 ? 1 : 0; }
  const keys: number[] = [];
  for (const c of cellsOf(x, y, z, sel, r)) {
    if (!inB(c[0], c[1], c[2])) return null;
    const k = K(c[0], c[1], c[2]); if (!voxels.has(k)) continue;
    const ak = anchorKey(k), av = TYPES[voxels.get(ak)!.t];
    if (av.cat !== 'cube' && !av.opening) return null;      // only walls and other openings give way
    for (const q of pieceKeys(ak)) if (!keys.includes(q)) keys.push(q);
  }
  const w = hit.v, wt = TYPES[w.t];
  const c = w.c != null ? w.c : wt.cat === 'cube' && w.t !== 'white' ? wt.color : undefined;
  return { keys, place: { x, y, z, t: sel, r, c } };
}
function turnPiece(ak: number) {
  const v = voxels.get(ak)!, a = unK(ak);
  const op = swapOp(pieceKeys(ak), { x: a[0], y: a[1], z: a[2], t: v.t, r: ((v.r || 0) + turnStep(v.t)) % 8, c: v.c, o: v.o, s: v.s });
  if (!op) { sfx.no(); say('لا يوجد مكان كافٍ للتدوير هنا.'); return; }
  commit(op); sfx.turn();
}
/* ---------- loose pieces stand anywhere, not only in the middle of a cell ---------- */
// The spot for a loose piece whose middle should be at (fx, fz) on level y: its cell and its offset inside it.
// Towards a neighbour that is taken (a wall, another piece) the offset stops at the middle, so nothing overlaps.
function looseSpot(fx: number, y: number, fz: number, t: string, r: number, own: number[]): { x: number; z: number; o: [number, number] } {
  const x = Math.floor(fx), z = Math.floor(fz);
  let ox = fx - x - .5, oz = fz - z - .5;
  const taken = (cx: number, cz: number) => { if (!inB(cx, y, cz)) return true; const k = K(cx, y, cz), v = voxels.get(k); return !!v && !own.includes(k) && !TYPES[v.t].flat; };
  const cells = cellsOf(x, y, z, t, r), mine = (cx: number, cz: number) => cells.some(c => c[0] === cx && c[2] === cz);
  for (const c of cells) {
    if (ox > 0 && !mine(c[0] + 1, c[2]) && taken(c[0] + 1, c[2])) ox = 0;
    if (ox < 0 && !mine(c[0] - 1, c[2]) && taken(c[0] - 1, c[2])) ox = 0;
    if (oz > 0 && !mine(c[0], c[2] + 1) && taken(c[0], c[2] + 1)) oz = 0;
    if (oz < 0 && !mine(c[0], c[2] - 1) && taken(c[0], c[2] - 1)) oz = 0;
  }
  return { x, z, o: [Math.round(ox * 100) / 100, Math.round(oz * 100) / 100] };
}
// the level a loose piece would rest on under this hit: the ground, the top of a block, or beside another piece
function looseLevel(hit: Hit): number | null {
  if (hit.ground) return 0;
  if (isBlock(hit.v.t)) return hit.normal && hit.normal[1] === 1 && hit.cell[1] + 1 < H ? hit.cell[1] + 1 : null;
  return unK(hit.k)[1];
}

/* ---------- moving a piece: press it, drag, and let go where it should stand ---------- */
// Where the piece anchored at ak would land for a finger at this screen point.
// cells: the cells it would cover there (for the preview). op: the step that moves it, or null when it does not fit.
function moveTarget(px: number, py: number, ak: number, gx = 0, gz = 0): { cells: Cell[]; op: Op | null; same: boolean; at?: [number, number, number] } | null {
  const v = voxels.get(ak); if (!v) return null;
  const T = TYPES[v.t], a = unK(ak), own = pieceKeys(ak);
  // look through the piece itself, to what lies behind and under it
  const had = view.hidden.has(ak); view.hidden.add(ak);
  const hit = pick(px, py);
  if (!had) view.hidden.delete(ak);
  if (!hit) return null;
  if (T.opening && !hit.ground && isBlock(hit.v.t)) {
    // a window or door moves along the walls: it opens the new spot and the old one is walled up again
    const o = openingPlacement(hit, v.t);
    if (!o) return { cells: [hit.cell as Cell], op: null, same: false };
    const p = o.place, cells = cellsOf(p.x, p.y, p.z, p.t, p.r);
    const same = p.x === a[0] && p.y === a[1] && p.z === a[2] && p.r === v.r;
    const op = swapOp([...new Set([...own, ...o.keys])], p);
    if (op) {
      const fill = Object.keys(TYPES).find(t => TYPES[t].cat === 'cube' && TYPES[t].color === v.c);
      for (const e of op) if (!e.b && own.includes(e.k)) e.b = fill ? { t: fill, r: 0 } : { t: 'white', r: 0, c: v.c };
    }
    return { cells, op, same };
  }
  const level = isLoose(v.t) && !T.hang ? looseLevel(hit) : null, fp = level == null ? null : planePoint(px, py, level);
  if (level != null && fp) {
    // a loose piece glides with the finger and rests exactly where it is let go
    const fx = fp[0] + gx, fz = fp[1] + gz;
    if (fx < 0 || fx >= N || fz < 0 || fz >= N) return null;
    const s = looseSpot(fx, level, fz, v.t, v.r, own), under = level > 0 ? voxels.get(K(s.x, level - 1, s.z)) : undefined;
    const cells = cellsOf(s.x, level, s.z, v.t, v.r).filter(c => inB(c[0], c[1], c[2]));
    const op = level === 0 || (under && isBlock(under.t)) ? swapOp(own, { x: s.x, y: level, z: s.z, t: v.t, r: v.r, c: v.c, o: s.o, s: v.s }) : null;
    // where it fits it is drawn at the spot it would take; where it does not, right under the finger
    return { cells, op, same: false, at: op ? [s.x + .5 + s.o[0], level, s.z + .5 + s.o[1]] : [fx, level, fz] };
  }
  const tg = targetFor(hit, v.t);
  if (!tg || 'err' in tg) return { cells: [hit.cell as Cell], op: null, same: false };
  let [x, y, z] = tg.cell, ok = true;
  if (T.hang) {
    // a ceiling light climbs to just under the first block above
    ok = false;
    for (; y < H - 1; y++) { const up = voxels.get(K(x, y + 1, z)); if (up && isBlock(up.t)) { ok = true; break; } }
    if (!ok) y = tg.cell[1];
  }
  const cells = cellsOf(x, y, z, v.t, v.r).filter(c => inB(c[0], c[1], c[2]));
  const same = x === a[0] && y === a[1] && z === a[2];
  return { cells, op: ok ? swapOp(own, { x, y, z, t: v.t, r: v.r, c: v.c, s: v.s }) : null, same };
}
// the preview box, stretched over the cells the piece would cover: green where it fits, red where it does not
function showMove(m: { cells: Cell[]; op: Op | null; at?: [number, number, number] } | null, ak: number) {
  // a loose piece is carried along itself; the box only shows, in red, where it cannot stand
  const v = voxels.get(ak);
  if (v && m && m.at) { view.drag = { k: ak, x: m.at[0], y: m.at[1], z: m.at[2] }; dirty.add(v.t); if (m.op) { ghost.visible = false; return; } }
  if (!m || !m.cells.length) { ghost.visible = false; return; }
  const lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  for (const c of m.cells) for (let i = 0; i < 3; i++) { lo[i] = Math.min(lo[i], c[i]); hi[i] = Math.max(hi[i], c[i] + 1); }
  ghost.position.set((lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2);
  ghost.scale.set(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]);
  ghost.material.color.set(m.op ? 0x6fe08a : 0xff4d6d); ghost.visible = true;
}
function endMove(ak: number, px: number, py: number, drop: boolean, gx = 0, gz = 0) {
  ghost.visible = false; ghost.scale.set(1, 1, 1);
  if (view.drag) { const d = voxels.get(view.drag.k); if (d) dirty.add(d.t); view.drag = null; }
  if (!drop) return;
  const m = moveTarget(px, py, ak, gx, gz), v = voxels.get(ak);
  if (!m || !v || m.same) return;
  if (!m.op) { sfx.no(); say('لا يوجد مكان كافٍ هنا. جرّبي مكانًا آخر.', 3000); return; }
  commit(m.op); sfx.place(v.t);
}
/* ---------- changing a piece's size: press it and drag up to grow it, down to shrink it ---------- */
const clampSize = (s: number) => Math.round(Math.max(SIZE_MIN, Math.min(SIZE_MAX, s)) * 100) / 100;
// one finger: up or right grows, down or left shrinks; whichever way the finger mostly goes decides
const sizeFor = (s0: number, dx: number, dy: number) => clampSize(s0 * Math.exp((Math.abs(dy) >= Math.abs(dx) ? -dy : dx) * .007));
function showSize(k: number, s: number) { view.sizing = { k, s }; const v = voxels.get(k); if (v) dirty.add(v.t); }
function endSize(ak: number, s: number | null) {
  const v = voxels.get(ak);
  view.sizing = null; if (v) dirty.add(v.t);
  if (!v || s == null || s === (v.s || 1)) return;
  const a = unK(ak), op = swapOp(pieceKeys(ak), { x: a[0], y: a[1], z: a[2], t: v.t, r: v.r, c: v.c, o: v.o, s });
  if (op) { commit(op); sfx.turn(); }
}
export function tap(px: number, py: number) {
  const hit = pick(px, py);
  if (!hit) return;
  if (tool.mode === 'size') {
    // the size tool: a tap chooses the piece; after that a drag anywhere changes its size
    if (hit.ground) { tool.sel = null; return; }
    if (!isSizable(hit.v.t)) { sfx.no(); say('المكعبات والنوافذ والأبواب والأرضيات والأسقف لا يتغيّر حجمها.', 3500); return; }
    tool.sel = hit.k; sfx.tick(); say('اخترتِ هذه القطعة. اسحبي إصبعكِ الآن في أي مكان: للأعلى تكبر، وللأسفل تصغر.', 5000);
    return;
  }
  if (tool.mode === 'walk' || tool.mode === 'room' || tool.mode === 'move') return;
  if (tool.mode === 'roof') {
    const op = hit.ground ? null : roofOp(hit.cell[0], hit.cell[1], hit.cell[2], tool.roof.shape, tool.roof.color == null ? undefined : tool.roof.color);
    if (!op) { sfx.no(); say(hit.ground ? 'اضغطي على جدار البيت لأضع له سقفًا.' : tool.roof.shape === 'none' ? 'لا يوجد سقف هنا.' : 'لا يوجد مكان لسقف فوق هذا الجدار.'); return; }
    commit(op); tool.roof.shape === 'none' ? sfx.remove() : sfx.place('roof'); return;
  }
  if (tool.mode === 'erase') {
    if (hit.ground) return;
    const keys = pieceKeys(hit.k);
    // anything standing on the removed piece goes with it
    for (const k of keys.slice()) {
      const c = unK(k); if (c[1] + 1 >= H) continue;
      const up = K(c[0], c[1] + 1, c[2]), uv = voxels.get(up);
      if (uv && !isBlock(uv.t)) for (const q of pieceKeys(anchorKey(up))) if (!keys.includes(q)) keys.push(q);
    }
    commit(swapOp(keys, null)!); sfx.remove(); return;
  }
  if (tool.mode === 'paint') {
    if (hit.ground) return;
    const c = tool.color == null ? undefined : tool.color;
    if (hit.v.c === c) return;
    const a = unK(hit.k);
    commit(swapOp(pieceKeys(hit.k), { x: a[0], y: a[1], z: a[2], t: hit.v.t, r: hit.v.r, c, o: hit.v.o, s: hit.v.s })!); sfx.turn(); return;
  }
  if (tool.mode === 'turn') { if (!hit.ground) turnPiece(hit.k); return; }
  const selected = tool.selected;
  if (selected === 'skylight' && !hit.ground && hit.v.t === 'roof') {
    // a roof window takes the place of the slope that was tapped
    const a = unK(hit.k);
    commit(swapOp(pieceKeys(hit.k), { x: a[0], y: a[1], z: a[2], t: selected, r: hit.v.r, c: hit.v.c })!); sfx.place(selected); return;
  }
  if (TYPES[selected].hang) {
    // a ceiling light goes just under the first block above the tapped spot
    const n = !hit.ground && isBlock(hit.v.t) ? hit.normal : null;
    const x = hit.cell[0] + (n ? n[0] : 0), z = hit.cell[2] + (n ? n[2] : 0);
    let y = hit.cell[1] + (n ? n[1] : 0), found = false;
    for (; y >= 0 && y < H - 1 && inB(x, y, z); y++) { const up = voxels.get(K(x, y + 1, z)); if (up && isBlock(up.t)) { found = true; break; } }
    const op = found && !voxels.has(K(x, y, z)) ? swapOp([], { x, y, z, t: selected, r: 0 }) : null;
    if (!op) { sfx.no(); say('المصباح السقفي يحتاج سقفًا فوقه.'); return; }
    commit(op); sfx.place(selected); return;
  }
  if (TYPES[selected].opening && !hit.ground && isBlock(hit.v.t)) {
    const o = openingPlacement(hit, selected), op = o && swapOp(o.keys, o.place);
    if (!op) { sfx.no(); say('لا يتسع هذا هنا. جرّبي جدارًا أوسع.'); return; }
    commit(op); sfx.place(selected); return;
  }
  const tg = targetFor(hit, selected);
  if (!tg) return;
  if ('err' in tg) {
    sfx.no();
    say(tg.err === 'high' ? 'وصلتِ إلى أعلى ارتفاع. ابني بجانبه.' : tg.err === 'edge' ? 'هنا نهاية الأرض. جرّبي مكانًا داخلها.' : 'الزهور والزينة تحتاج أرضًا أو مكعبًا تحتها.');
    return;
  }
  const k = K(tg.cell[0], tg.cell[1], tg.cell[2]), old = voxels.get(k) || null;
  if (tg.act === 'turn' && old) { turnPiece(k); return; }
  // a block built against the same kind of block continues its direction (a row of roof pieces)
  let r = !hit.ground && hit.v.t === selected ? hit.v.r : 0;
  if (turnStep(selected) === 2) r &= 6;
  // a staircase makes its own opening in the floor slab above
  const gone = old ? pieceKeys(k) : [];
  for (const o of TYPES[selected].clears || []) {
    const c = offCell(tg.cell[0], tg.cell[1], tg.cell[2], o, r), q = K(c[0], c[1], c[2]);
    if (inB(c[0], c[1], c[2]) && voxels.get(q)?.t === 'floorSlab' && !gone.includes(q)) gone.push(q);
  }
  let o: [number, number] | undefined;
  if (isLoose(selected) && !old && looseLevel(hit) === tg.cell[1]) {
    const p = planePoint(px, py, tg.cell[1]);
    if (p && Math.floor(p[0]) === tg.cell[0] && Math.floor(p[1]) === tg.cell[2]) o = looseSpot(p[0], tg.cell[1], p[1], selected, r, []).o;
  }
  const op = swapOp(gone, { x: tg.cell[0], y: tg.cell[1], z: tg.cell[2], t: selected, r, o });
  if (!op) { sfx.no(); say('لا يوجد مكان كافٍ هنا. جرّبي مكانًا أوسع.'); return; }
  commit(op); selected === 'fountain' || selected === 'water' ? sfx.splash() : sfx.place(selected);
}

/* ---------- camera & input ---------- */
export const cam = { theta: -.5, phi: .9, dist: 34, target: new THREE.Vector3(-1.5, 0, 3.5) };
// switch between the garden view and the view through the girl's eyes
export function setFP(on: boolean) {
  view.fp = on; camera.near = on ? .08 : .2;
  document.body.classList.toggle('fp', on);   // the palette steps aside for the view
  resize();
}
export function placeCamera() {
  // the frame around the chosen piece follows it; it goes when the piece does or when another tool is taken
  if (tool.mode !== 'size') tool.sel = null;
  if (!showSelection(tool.sel)) tool.sel = null;
  if (view.fp) {
    const e = heroEye(), x = e.x - N / 2, z = e.z - N / 2;
    const cp = Math.cos(e.p);
    camera.position.set(x, e.y, z); camera.lookAt(x + Math.sin(e.f) * cp, e.y + Math.sin(e.p), z + Math.cos(e.f) * cp);
    return;
  }
  cam.phi = Math.min(1.42, Math.max(.18, cam.phi)); cam.dist = Math.min(72, Math.max(2.6, cam.dist));
  cam.target.x = Math.min(N / 2, Math.max(-N / 2, cam.target.x)); cam.target.z = Math.min(N / 2, Math.max(-N / 2, cam.target.z));
  // zoomed right in, the view rises from the ground to the height of the girl and the furniture
  const s = Math.sin(cam.phi), ty = cam.target.y + Math.max(0, 1 - cam.dist / 14) * 1.2;
  camera.position.set(cam.target.x + cam.dist * s * Math.sin(cam.theta), ty + cam.dist * Math.cos(cam.phi), cam.target.z + cam.dist * s * Math.cos(cam.theta));
  camera.lookAt(cam.target.x, ty, cam.target.z);
}
function pan(dx: number, dy: number) {
  const k = cam.dist * .0016, c = Math.cos(cam.theta), s = Math.sin(cam.theta);
  cam.target.x += (-dx * c - dy * s) * k; cam.target.z += (dx * s - dy * c) * k;
}

interface Ptr { x: number; y: number; sx: number; sy: number; t: number }
type Gest =
  | { type: 'tap'; moved: boolean; pan: boolean }
  | { type: 'pinch'; d0: number; dist0: number; mx: number; my: number; a: number }
  | { type: 'walk' }
  | { type: 'look'; moved: boolean }
  | { type: 'room'; x0: number; z0: number; x1: number; z1: number }
  | { type: 'move'; k: number; moved: boolean; gx: number; gz: number }
  | { type: 'size'; k: number; s0: number; s: number; moved: boolean }
  | { type: 'size2'; k: number; s0: number; s: number; d0: number }
  | { type: 'done' };
const ptrs = new Map<number, Ptr>(); let gest: Gest | null = null;

function hover(px: number, py: number) {
  const hit = pick(px, py); ghost.visible = false; ghost.scale.set(1, 1, 1);
  if (!hit || tool.mode === 'walk' || tool.mode === 'room') return;
  let c: number[] | null = null;
  if (tool.mode === 'erase') { if (!hit.ground) c = hit.cell; ghost.material.color.set(0xff4d6d); }
  else if (tool.mode === 'paint' || tool.mode === 'turn' || tool.mode === 'move' || tool.mode === 'size' || tool.mode === 'roof') { if (!hit.ground) c = hit.cell; ghost.material.color.set(0xffffff); }
  else if (TYPES[tool.selected].opening && !hit.ground && isBlock(hit.v.t)) { c = hit.cell; ghost.material.color.set(0xffffff); }
  else { const tg = targetFor(hit, tool.selected); if (tg && 'cell' in tg) c = tg.cell; ghost.material.color.set(0xffffff); }
  if (c) { ghost.position.set(c[0] + .5, c[1] + .5, c[2] + .5); ghost.visible = true; }
}

/* ---------- drawing a room ---------- */
// the ground cell under a screen point; with clamp, a point beyond the land snaps to its edge
function groundCell(px: number, py: number, clamp: boolean): [number, number] | null {
  const p = planePoint(px, py, 0); if (!p) return null;
  let x = Math.floor(p[0]), z = Math.floor(p[1]);
  if (clamp) { x = Math.min(N - 1, Math.max(0, x)); z = Math.min(N - 1, Math.max(0, z)); }
  return x >= 0 && x < N && z >= 0 && z < N ? [x, z] : null;
}
type Rect = { x0: number; z0: number; x1: number; z1: number };
const sorted = (r: Rect) => ({ x0: Math.min(r.x0, r.x1), z0: Math.min(r.z0, r.z1), x1: Math.max(r.x0, r.x1), z1: Math.max(r.z0, r.z1), h: STOREY * tool.room.storeys });
function buildRoom(g: Rect) {
  const r = sorted(g);
  if (r.x1 - r.x0 < 1 || r.z1 - r.z0 < 1) { say('اسحبي إصبعكِ أبعد قليلًا لترسمي غرفة.', 3000); return; }
  const op = roomOp(r.x0, r.z0, r.x1, r.z1, r.h, tool.room.wall, 'plank');
  if (!op.length) return;
  commit(op); sfx.place(tool.room.wall); say('غرفة جديدة!', 2500);
}

export function initInput() {
  canvas.addEventListener('pointerdown', e => {
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
    if (ptrs.size === 1) {
      // with the walk tool, a finger on the screen is where she walks to
      if (tool.mode === 'walk' && e.button !== 2 && !e.shiftKey) {
        // through her eyes a drag looks around and a tap walks; in the garden view the finger leads her
        if (view.fp) gest = { type: 'look', moved: false };
        else { gest = { type: 'walk' }; setFinger(e.clientX, e.clientY); }
      }
      else if (tool.mode === 'room' && e.button !== 2 && !e.shiftKey) {
        // with the room tool, a drag across the ground draws the room
        const c = groundCell(e.clientX, e.clientY, false);
        if (c) { gest = { type: 'room', x0: c[0], z0: c[1], x1: c[0], z1: c[1] }; setRoomPreview(sorted(gest)); } else gest = { type: 'done' };
      }
      else if (tool.mode === 'move' && e.button !== 2 && !e.shiftKey) {
        // with the move tool, a finger on a piece picks it up; on empty ground it turns the view as usual
        const hit = pick(e.clientX, e.clientY);
        if (hit && !hit.ground) {
          // remember where on the piece the finger took hold, so it does not jump when the drag begins
          const a = unK(hit.k), o = hit.v.o, p = isLoose(hit.v.t) ? planePoint(e.clientX, e.clientY, a[1]) : null;
          gest = { type: 'move', k: hit.k, moved: false, gx: p ? a[0] + .5 + (o ? o[0] : 0) - p[0] : 0, gz: p ? a[2] + .5 + (o ? o[1] : 0) - p[1] : 0 };
        } else gest = { type: 'tap', moved: false, pan: false };
      }
      else if (tool.mode === 'size' && e.button !== 2 && !e.shiftKey) {
        // with the size tool and a piece chosen, a drag anywhere on the screen changes its size;
        // with none chosen the finger turns the view, and a tap chooses a piece
        const sv = tool.sel == null ? undefined : voxels.get(tool.sel);
        if (sv && tool.sel != null) { const s0 = sv.s || 1; gest = { type: 'size', k: tool.sel, s0, s: s0, moved: false }; }
        else gest = { type: 'tap', moved: false, pan: false };
      }
      else gest = { type: 'tap', moved: false, pan: e.button === 2 || e.shiftKey };
    }
    else if (ptrs.size === 2) { const a = [...ptrs.values()]; if (gest && gest.type === 'move') endMove(gest.k, 0, 0, false); // with the size tool, two fingers with one of them on a piece change its size instead of the view
      let sk: number | null = null;
      if (tool.mode === 'size') {
        if (tool.sel != null && voxels.get(tool.sel)) sk = tool.sel;
      }
      const d0 = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1;
      if (sk != null) { const s0 = voxels.get(sk)!.s || 1; view.sizing = null; gest = { type: 'size2', k: sk, s0, s: s0, d0 }; }
      else gest = { type: 'pinch', d0, dist0: cam.dist, mx: (a[0].x + a[1].x) / 2, my: (a[0].y + a[1].y) / 2, a: Math.atan2(a[1].y - a[0].y, a[1].x - a[0].x) }; clearFinger(); setRoomPreview(null); }
    ghost.visible = false;
  });
  canvas.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId);
    if (!p) { if (e.pointerType === 'mouse') hover(e.clientX, e.clientY); return; }
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (!gest) return;
    if (gest.type === 'walk') { if (ptrs.size === 1) setFinger(p.x, p.y); return; }
    if (gest.type === 'look') {
      if (ptrs.size === 1) { if (!gest.moved && Math.hypot(p.x - p.sx, p.y - p.sy) > 9) gest.moved = true; if (gest.moved) lookBy(dx, dy); }
      return;
    }
    if (gest.type === 'size') {
      if (ptrs.size !== 1) return;
      if (!gest.moved && Math.hypot(p.x - p.sx, p.y - p.sy) > 9) gest.moved = true;
      if (gest.moved) { gest.s = sizeFor(gest.s0, p.x - p.sx, p.y - p.sy); showSize(gest.k, gest.s); }
      return;
    }
    if (gest.type === 'size2') {
      // two fingers on a piece: spreading them grows it, bringing them together shrinks it
      if (ptrs.size === 2) { const a = [...ptrs.values()]; gest.s = clampSize(gest.s0 * (Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1) / gest.d0); showSize(gest.k, gest.s); }
      return;
    }
    if (gest.type === 'move') {
      if (ptrs.size !== 1) return;
      if (!gest.moved && Math.hypot(p.x - p.sx, p.y - p.sy) > 9) gest.moved = true;
      if (gest.moved) showMove(moveTarget(p.x, p.y, gest.k, gest.gx, gest.gz), gest.k);
      return;
    }
    if (gest.type === 'room') {
      const c = ptrs.size === 1 ? groundCell(p.x, p.y, true) : null;
      if (c) { gest.x1 = c[0]; gest.z1 = c[1]; setRoomPreview(sorted(gest)); }
      return;
    }
    if (gest.type === 'tap' && ptrs.size === 1) {
      if (!gest.moved && Math.hypot(p.x - p.sx, p.y - p.sy) > 9) gest.moved = true;
      if (gest.moved) { if (gest.pan) pan(dx, dy); else { cam.theta -= dx * .0065; cam.phi -= dy * .0055; } }
    } else if (gest.type === 'pinch' && ptrs.size === 2) {
      const a = [...ptrs.values()], d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1, mx = (a[0].x + a[1].x) / 2, my = (a[0].y + a[1].y) / 2;
      cam.dist = gest.dist0 * gest.d0 / d; pan(mx - gest.mx, my - gest.my); gest.mx = mx; gest.my = my;
      // twisting two fingers turns the garden
      const ang = Math.atan2(a[1].y - a[0].y, a[1].x - a[0].x);
      cam.theta += ((ang - gest.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI; gest.a = ang;
    }
  });
  function up(e: PointerEvent) {
    const p = ptrs.get(e.pointerId); if (!p) return;
    if (gest && gest.type === 'walk') clearFinger();
    if (gest && gest.type === 'look' && !gest.moved && e.type === 'pointerup' && ptrs.size === 1 && performance.now() - p.t < 700) walkToScreen(e.clientX, e.clientY);
    if (gest && gest.type === 'room') { if (e.type === 'pointerup') buildRoom(gest); setRoomPreview(null); }
    if (gest && gest.type === 'size') endSize(gest.k, gest.moved && e.type === 'pointerup' && ptrs.size === 1 ? gest.s : null);
    if (gest && gest.type === 'size2') endSize(gest.k, e.type === 'pointerup' ? gest.s : null);
    if (gest && gest.type === 'move') endMove(gest.k, e.clientX, e.clientY, gest.moved && e.type === 'pointerup' && ptrs.size === 1, gest.gx, gest.gz);
    const wasTap = gest && (gest.type === 'tap' || gest.type === 'size') && !gest.moved && ptrs.size === 1 && performance.now() - p.t < 700 && e.type === 'pointerup';
    ptrs.delete(e.pointerId);
    if (ptrs.size === 0) gest = null; else if (gest) gest = { type: 'done' };
    if (wasTap && e.button !== 2) tap(e.clientX, e.clientY);
  }
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('pointerleave', () => { ghost.visible = false; });
  canvas.addEventListener('wheel', e => { e.preventDefault(); cam.dist *= Math.exp(e.deltaY * .0012); }, { passive: false });
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); }
    else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
  });
}
