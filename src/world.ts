import { TYPES, isBlock } from './types';

export const N = 32, H = 10;
// the starter garden keeps its original 20×20 size, in the middle of the land
export const G = 20, OFF = (N - G) / 2;

// r: rotation in steps of 45° (0–7). c: optional paint colour (0xRRGGBB).
// of: set on the extra cells of a piece larger than one cell; it holds the key of the piece's anchor cell.
// f: the floor piece lying under this one. A floor stays when furniture is put on it and shows again when the furniture goes.
export interface Voxel { t: string; r: number; c?: number; of?: number; f?: string }
export type Entry = [number, number, number, string, number, number?];
export interface Edit { k: number; a: Voxel | null; b: Voxel | null }
export type Op = Edit[];
export type Cell = [number, number, number];

export const voxels = new Map<number, Voxel>();
export const K = (x: number, y: number, z: number) => x + N * (z + N * y);
export const unK = (k: number): Cell => { const x = k % N, z = Math.floor(k / N) % N, y = Math.floor(k / (N * N)); return [x, y, z]; };
export const inB = (x: number, y: number, z: number) => x >= 0 && x < N && z >= 0 && z < N && y >= 0 && y < H;
export const dirty = new Set<string>();
// view options that are not part of the saved world
// hidden: anchor keys of pieces not drawn or tapped right now (see inside.ts)
export const view = { hideRoofs: false, hidden: new Set<number>() };

// wired in main.ts so this module stays free of UI, audio and rendering
export const hooks = { afterChange: () => {}, syncUndo: () => {} };

/* ---------- pieces larger than one cell ---------- */
const ONE: Cell = [1, 1, 1];
export const sizeOf = (t: string): Cell => TYPES[t].size || ONE;
// a piece with a 1×1 footprint turns in steps of 45°; a wider one in quarter turns, so it stays on the grid
export const turnStep = (t: string) => { const s = sizeOf(t); return s[0] === 1 && s[2] === 1 ? 1 : 2; };
// every cell a piece covers, anchor first. It extends from the anchor along its own +x, +y and +z.
// the cell at offset o = [i, j, k] (along the piece's own x, y, z) from an anchor, for a piece turned to r
export function offCell(x: number, y: number, z: number, o: number[], r: number): Cell {
  const q = (r >> 1) & 3, i = o[0], k = o[2];
  return [x + (q === 0 ? i : q === 1 ? k : q === 2 ? -i : -k), y + o[1], z + (q === 0 ? k : q === 1 ? -i : q === 2 ? -k : i)];
}
export function cellsOf(x: number, y: number, z: number, t: string, r: number): Cell[] {
  const custom = TYPES[t].cells;
  if (custom) return custom.map(o => offCell(x, y, z, o, r));
  const [w, h, d] = sizeOf(t), out: Cell[] = [];
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) for (let k = 0; k < d; k++) out.push(offCell(x, y, z, [i, j, k], r));
  return out;
}
export const anchorKey = (k: number) => { const v = voxels.get(k); return v && v.of != null ? v.of : k; };
// the keys of all cells of the piece anchored at ak
export function pieceKeys(ak: number): number[] {
  const v = voxels.get(ak); if (!v) return [];
  const a = unK(ak);
  return cellsOf(a[0], a[1], a[2], v.t, v.r).filter(c => inB(c[0], c[1], c[2])).map(c => K(c[0], c[1], c[2]))
    .filter(k => k === ak || voxels.get(k)?.of === ak);
}
export interface Placement { x: number; y: number; z: number; t: string; r: number; c?: number }
// One undoable step that clears some cells and optionally puts a piece down.
// Returns null when the new piece does not fit (off the land, or over something that is not being cleared).
export function swapOp(removeKeys: number[], place: Placement | null): Op | null {
  const m = new Map<number, Edit>();
  // a removed piece leaves the floor it stood on
  removeKeys.forEach(k => { const a = voxels.get(k)!; m.set(k, { k, a, b: a.f ? { t: a.f, r: 0 } : null }); });
  if (place) {
    const ak = K(place.x, place.y, place.z), cells = cellsOf(place.x, place.y, place.z, place.t, place.r), flat = !!TYPES[place.t].flat;
    for (let i = 0; i < cells.length; i++) {
      const c = cells[i]; if (!inB(c[0], c[1], c[2])) return null;
      const k = K(c[0], c[1], c[2]), e = m.get(k), cur = voxels.get(k);
      // a floor in the way is no obstacle: the piece stands on it
      if (!e && cur && !(TYPES[cur.t].flat && cur.of == null)) return null;
      const under = cur ? cur.f || (TYPES[cur.t].flat ? cur.t : undefined) : undefined;
      const b: Voxel = { t: place.t, r: place.r, c: place.c }; if (i) b.of = ak;
      if (under && !flat) b.f = under;
      if (e) e.b = b; else m.set(k, { k, a: cur || null, b });
    }
  }
  return [...m.values()];
}

/* ---------- starting garden ---------- */
export function defaultWorld(): Entry[] {
  const w: Entry[] = []; const set = (x: number, y: number, z: number, t: string, r?: number) => w.push([x + OFF, y, z + OFF, t, r || 0]);
  for (let i = 0; i < G; i++) { set(i, 0, 0, 'fence', 0); if (i < 8 || i > 11) set(i, 0, G - 1, 'fence', 0); }
  for (let i = 1; i < G - 1; i++) { set(0, 0, i, 'fence', 2); set(G - 1, 0, i, 'fence', 2); }
  for (let y = 0; y < 3; y++) { set(8, y, G - 1, 'white'); set(11, y, G - 1, 'white'); }
  for (let x = 8; x <= 11; x++) set(x, 3, G - 1, 'pink');
  for (let z = 12; z < G; z++) { set(9, 0, z, 'tile'); set(10, 0, z, 'tile'); }
  for (let x = 7; x <= 12; x++) for (let z = 6; z <= 11; z++) { if (!((x === 9 || x === 10) && (z === 8 || z === 9))) set(x, 0, z, 'tile'); }
  set(2, 0, 2, 'tree'); set(17, 0, 2, 'blossom'); set(2, 0, 16, 'blossom'); set(17, 0, 16, 'bush'); set(16, 0, 17, 'bush');
  return w;
}
// turn a saved list (one entry per piece) into cells; a piece that does not fit is left out
function build(list: Entry[]): Map<number, Voxel> {
  const m = new Map<number, Voxel>();
  const opening = (e: Entry) => !!TYPES[e[3]]?.opening;
  // openings go in last, and may take the place of plain wall cubes
  [...list.filter(e => !opening(e)), ...list.filter(opening)].forEach(e => {
    if (!TYPES[e[3]] || !inB(e[0], e[1], e[2])) return;
    const v: Voxel = { t: e[3], r: (((e[4] || 0) % 8) + 8) % 8 };
    if (turnStep(v.t) === 2) v.r &= 6;
    if (typeof e[5] === 'number') v.c = e[5];
    const cells = cellsOf(e[0], e[1], e[2], v.t, v.r), ak = K(e[0], e[1], e[2]);
    const over = opening(e);
    if (cells.some(c => { if (!inB(c[0], c[1], c[2])) return true; const o = m.get(K(c[0], c[1], c[2])); return !!o && !(over && TYPES[o.t].cat === 'cube'); })) return;
    cells.forEach((c, i) => m.set(K(c[0], c[1], c[2]), i ? { ...v, of: ak } : v));
  });
  return m;
}
// floors: [x, y, z, type] for every cell where a floor lies under another piece
export function loadWorld(list: Entry[], floors?: [number, number, number, string][]) {
  voxels.clear();
  build(list).forEach((v, k) => voxels.set(k, v));
  (floors || []).forEach(e => { const v = inB(e[0], e[1], e[2]) ? voxels.get(K(e[0], e[1], e[2])) : undefined; if (v && TYPES[e[3]]?.flat && !TYPES[v.t].flat) v.f = e[3]; });
  Object.keys(TYPES).forEach(t => dirty.add(t));
}

/* ---------- editing with undo ---------- */
export const undoStack: Op[] = [], redoStack: Op[] = [];
export function applyOp(op: Op, fwd: boolean) {
  dirty.add('fence');
  op.forEach(e => {
    const v = fwd ? e.b : e.a, old = voxels.get(e.k);
    if (old) { dirty.add(old.t); if (old.f) dirty.add(old.f); }
    if (v) { voxels.set(e.k, { ...v }); dirty.add(v.t); if (v.f) dirty.add(v.f); } else voxels.delete(e.k);
  });
  hooks.afterChange();
}
export function commit(op: Op) { applyOp(op, true); undoStack.push(op); if (undoStack.length > 200) undoStack.shift(); redoStack.length = 0; hooks.syncUndo(); }
export function undo(): boolean { const op = undoStack.pop(); if (!op) return false; applyOp(op, false); redoStack.push(op); hooks.syncUndo(); return true; }
export function redo(): boolean { const op = redoStack.pop(); if (!op) return false; applyOp(op, true); undoStack.push(op); hooks.syncUndo(); return true; }
// swap the whole world for another one as a single undoable step
export function replaceWorld(list: Entry[]) {
  const next = build(list), op: Op = [];
  voxels.forEach((v, k) => { const b = next.get(k) || null; if (!b || b.t !== v.t || b.r !== v.r || b.c !== v.c || b.of !== v.of || b.f !== v.f) op.push({ k, a: v, b }); });
  next.forEach((b, k) => { if (!voxels.has(k)) op.push({ k, a: null, b }); });
  if (op.length) commit(op);
}
// Walls around the rectangle and a floor inside it. Existing blocks are kept, so a room drawn
// against another shares its wall; flowers and other small pieces in the way of a wall are cleared.
export function roomOp(x0: number, z0: number, x1: number, z1: number, h: number, wall: string, floor: string): Op {
  const m = new Map<number, Edit>();
  const clear = (k: number) => { for (const q of pieceKeys(anchorKey(k))) if (!m.has(q)) m.set(q, { k: q, a: voxels.get(q)!, b: null }); };
  for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
    if (x === x0 || x === x1 || z === z0 || z === z1) {
      for (let y = 0; y < h && y < H; y++) {
        const k = K(x, y, z), v = voxels.get(k);
        if (v && isBlock(v.t)) continue;
        if (v) clear(k);
        const e = m.get(k), b: Voxel = { t: wall, r: 0 };
        if (e) e.b = b; else m.set(k, { k, a: null, b });
      }
    } else {
      const k = K(x, 0, z);
      if (!voxels.has(k) && !m.has(k)) m.set(k, { k, a: null, b: { t: floor, r: 0 } });
      // each upper storey gets a floor: a slab in the top row of the storey below
      for (let y = 2; y + 1 < h && y < H; y += 3) { const s = K(x, y, z); if (!voxels.has(s) && !m.has(s)) m.set(s, { k: s, a: null, b: { t: 'floorSlab', r: 0 } }); }
    }
  }
  return [...m.values()];
}

/* ---------- automatic roofs ---------- */
export type RoofShape = 'gable' | 'hip' | 'shed' | 'flat' | 'none';
// Roof the building whose wall (or old roof) is at the given cell. The footprint is the ring of wall tops
// connected to that wall plus whatever it encloses. An existing roof over it is replaced.
// Returns null when there is no wall there or no room above it.
export function roofOp(cx: number, cy: number, cz: number, shape: RoofShape, color?: number): Op | null {
  const wall = (x: number, y: number, z: number) => { const v = voxels.get(K(x, y, z)); return inB(x, y, z) && !!v && isBlock(v.t) && !TYPES[v.t].roof; };
  let top = cy; while (top > 0 && !wall(cx, top, cz)) top--;
  if (!wall(cx, top, cz)) return null;
  while (wall(cx, top + 1, cz)) top++;
  const id = (x: number, z: number) => x + N * z;
  // the connected run of wall tops at this height
  const ring = new Set<number>(), todo: [number, number][] = [[cx, cz]];
  let x0 = cx, x1 = cx, z0 = cz, z1 = cz;
  while (todo.length) {
    const [x, z] = todo.pop()!;
    if (ring.has(id(x, z)) || !wall(x, top, z) || wall(x, top + 1, z)) continue;
    ring.add(id(x, z)); x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
    todo.push([x + 1, z], [x - 1, z], [x, z + 1], [x, z - 1]);
  }
  // everything the ring encloses: what a flood from outside its bounding box cannot reach
  const out = new Set<number>(), go: [number, number][] = [[x0 - 1, z0 - 1]];
  while (go.length) {
    const [x, z] = go.pop()!;
    if (x < x0 - 1 || x > x1 + 1 || z < z0 - 1 || z > z1 + 1 || out.has(id(x, z)) || ring.has(id(x, z))) continue;
    out.add(id(x, z)); go.push([x + 1, z], [x - 1, z], [x, z + 1], [x, z - 1]);
  }
  const R: [number, number][] = [];
  for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) if (!out.has(id(x, z))) R.push([x, z]);
  const inR = (x: number, z: number) => x >= x0 && x <= x1 && z >= z0 && z <= z1 && !out.has(id(x, z));

  const m = new Map<number, Edit>();
  // take away the old roof
  for (const [x, z] of R) for (let y = top + 1; y < H; y++) {
    const k = K(x, y, z), v = voxels.get(k);
    if (v && TYPES[v.t].roof) for (const q of pieceKeys(anchorKey(k))) if (!m.has(q)) m.set(q, { k: q, a: voxels.get(q)!, b: null });
  }
  const put = (x: number, y: number, z: number, t: string, r: number, c?: number) => {
    if (!inB(x, y, z)) return;
    const k = K(x, y, z), e = m.get(k), b: Voxel = { t, r, c };
    if (e) e.b = b; else if (!voxels.has(k)) m.set(k, { k, a: null, b });
  };
  const maxL = H - 1 - top;
  if (shape !== 'none' && maxL < 1) return null;
  // the gable wall takes the colour of the wall it stands on
  const wv = voxels.get(anchorKey(K(cx, top, cz)))!, wt = TYPES[wv.t];
  const wallC = wv.c != null ? wv.c : wt.cat === 'cube' && wv.t !== 'white' ? wt.color : undefined;

  if (shape === 'flat') {
    for (const [x, z] of R) {
      const edge = !inR(x + 1, z) || !inR(x - 1, z) || !inR(x, z + 1) || !inR(x, z - 1);
      put(x, top + 1, z, edge ? 'roofEdge' : 'roofSlab', 0, color);
    }
  } else if (shape !== 'none') {
    // d: how many cells in from the eaves, which is also how many levels up the piece sits
    const d = new Map<number, number>();
    const run = (x: number, z: number, dx: number, dz: number) => { let n = 0; while (inR(x + dx * (n + 1), z + dz * (n + 1))) n++; return n; };
    // slopes run across the shorter side, so the ridge follows the longer one
    const ax: [number, number] = z1 - z0 <= x1 - x0 ? [0, 1] : [1, 0];
    if (shape === 'hip') {
      let layer = R.filter(([x, z]) => { for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) if (!inR(x + i, z + j)) return true; return false; });
      for (let n = 1; layer.length; n++) {
        layer.forEach(([x, z]) => d.set(id(x, z), n));
        const next = new Map<number, [number, number]>();
        for (const [x, z] of layer) for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++)
          if (inR(x + i, z + j) && !d.has(id(x + i, z + j))) next.set(id(x + i, z + j), [x + i, z + j]);
        layer = [...next.values()];
      }
    } else for (const [x, z] of R) {
      const lo = run(x, z, -ax[0], -ax[1]), hi = run(x, z, ax[0], ax[1]);
      d.set(id(x, z), 1 + (shape === 'shed' ? lo : Math.min(lo, hi)));
    }
    // end pieces come in one set per roofing material
    const sfx = color === 0x9a6b3f ? 'Wood' : color === 0x6b7280 ? 'Slate' : '';
    const edge = (x: number, z: number) => !inR(x + 1, z) || !inR(x - 1, z) || !inR(x, z + 1) || !inR(x, z - 1);
    const gableEnd = (x: number, z: number) => !inR(x + ax[1], z + ax[0]) || !inR(x - ax[1], z - ax[0]);   // open towards the ridge direction
    const lower = (x: number, z: number, dx: number, dz: number) => !inR(x + dx, z + dz) || d.get(id(x + dx, z + dz))! < d.get(id(x, z))!;
    const facing = (dx: number, dz: number) => dz === 1 ? 0 : dx === 1 ? 2 : dz === -1 ? 4 : 6;           // a slope coming down towards (dx, dz)
    const diagonal = (sx: number, sz: number) => sx === 1 ? (sz === 1 ? 0 : 2) : sz === -1 ? 4 : 6;      // a corner coming down towards (sx, sz)
    for (const [x, z] of R) {
      const dd = d.get(id(x, z))!, L = Math.min(dd, maxL), y = top + L;
      // gable and lean-to roofs leave an open triangle at the sides: close it with wall
      if (shape !== 'hip' && (!inR(x + 1, z) || !inR(x - 1, z) || !inR(x, z + 1) || !inR(x, z - 1))) for (let f = top + 1; f < y; f++) put(x, f, z, 'gableFill', 0, wallC);
      if (dd > maxL) { put(x, y, z, 'roofFlat', 0, color); continue; }
      if (shape === 'shed') { if (edge(x, z)) put(x, y, z, 'gableSlope' + sfx, facing(-ax[0], -ax[1]), wallC); else put(x, y, z, 'roof', facing(-ax[0], -ax[1]), color); continue; }
      if (shape === 'gable') {
        const a = lower(x, z, ax[0], ax[1]), b = lower(x, z, -ax[0], -ax[1]);
        const end = gableEnd(x, z), r = a && b ? (ax[1] ? 0 : 2) : a ? facing(ax[0], ax[1]) : facing(-ax[0], -ax[1]);
        if (end) put(x, y, z, (a && b ? 'gableTop' : 'gableSlope') + sfx, r, wallC);
        else put(x, y, z, a && b ? 'roofTop' : 'roof', r, color);
        continue;
      }
      const px = lower(x, z, 1, 0), nx = lower(x, z, -1, 0), pz = lower(x, z, 0, 1), nz = lower(x, z, 0, -1), n = +px + +nx + +pz + +nz;
      if (n === 4) put(x, y, z, 'roofPeak', 0, color);
      else if (n === 3) put(x, y, z, 'roofEnd', !nx ? 0 : !pz ? 2 : !px ? 4 : 6, color);       // the ridge carries on towards the side that is not lower
      else if (n === 2 && pz && nz) put(x, y, z, 'roofTop', 0, color);
      else if (n === 2 && px && nx) put(x, y, z, 'roofTop', 2, color);
      else if (n === 2) put(x, y, z, 'roofCorner', diagonal(px ? 1 : -1, pz ? 1 : -1), color);
      else if (n === 1) put(x, y, z, 'roof', px ? 2 : nx ? 6 : pz ? 0 : 4, color);
      else {
        // an inside corner of an L-shaped house: lower only towards one diagonal
        const v = [[1, 1], [1, -1], [-1, -1], [-1, 1]].find(s => lower(x, z, s[0], s[1]));
        if (v) put(x, y, z, 'roofValley', diagonal(v[0], v[1]), color); else put(x, y, z, 'roofFlat', 0, color);
      }
    }
  }
  const op = [...m.values()];
  return op.length ? op : null;
}
