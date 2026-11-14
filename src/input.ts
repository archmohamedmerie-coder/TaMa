import * as THREE from 'three';
import { isBlock } from './types';
import { N, H, K, unK, voxels, commit, swapOp, pieceKeys, anchorKey, turnStep } from './world';
import { canvas, camera, ghost } from './render';
import { pick, targetFor } from './pick';
import { sfx } from './audio';
import { say, undo, redo } from './ui';
import { setFinger, clearFinger } from './hero';

// current tool, shared with the palette in ui.ts
export type Mode = 'build' | 'erase' | 'paint' | 'turn' | 'walk';
// color: the paint colour, or null to give a piece its own colours back
export const tool: { mode: Mode; selected: string; color: number | null } = { mode: 'build', selected: 'rose', color: 0xe5383b };

function turnPiece(ak: number) {
  const v = voxels.get(ak)!, a = unK(ak);
  const op = swapOp(pieceKeys(ak), { x: a[0], y: a[1], z: a[2], t: v.t, r: ((v.r || 0) + turnStep(v.t)) % 8, c: v.c });
  if (!op) { sfx.no(); say('لا يوجد مكان كافٍ للتدوير هنا.'); return; }
  commit(op); sfx.turn();
}
export function tap(px: number, py: number) {
  const hit = pick(px, py);
  if (!hit) return;
  if (tool.mode === 'walk') return;
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
    commit(swapOp(pieceKeys(hit.k), { x: a[0], y: a[1], z: a[2], t: hit.v.t, r: hit.v.r, c })!); sfx.turn(); return;
  }
  if (tool.mode === 'turn') { if (!hit.ground) turnPiece(hit.k); return; }
  const selected = tool.selected;
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
  const op = swapOp(old ? pieceKeys(k) : [], { x: tg.cell[0], y: tg.cell[1], z: tg.cell[2], t: selected, r });
  if (!op) { sfx.no(); say('لا يوجد مكان كافٍ هنا. جرّبي مكانًا أوسع.'); return; }
  commit(op); selected === 'fountain' || selected === 'water' ? sfx.splash() : sfx.place(selected);
}

/* ---------- camera & input ---------- */
export const cam = { theta: -.5, phi: .9, dist: 34, target: new THREE.Vector3(-1.5, 0, 3.5) };
export function placeCamera() {
  cam.phi = Math.min(1.42, Math.max(.18, cam.phi)); cam.dist = Math.min(72, Math.max(9, cam.dist));
  cam.target.x = Math.min(N / 2, Math.max(-N / 2, cam.target.x)); cam.target.z = Math.min(N / 2, Math.max(-N / 2, cam.target.z));
  const s = Math.sin(cam.phi);
  camera.position.set(cam.target.x + cam.dist * s * Math.sin(cam.theta), cam.target.y + cam.dist * Math.cos(cam.phi), cam.target.z + cam.dist * s * Math.cos(cam.theta));
  camera.lookAt(cam.target);
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
  | { type: 'done' };
const ptrs = new Map<number, Ptr>(); let gest: Gest | null = null;

function hover(px: number, py: number) {
  const hit = pick(px, py); ghost.visible = false;
  if (!hit || tool.mode === 'walk') return;
  let c: number[] | null = null;
  if (tool.mode === 'erase') { if (!hit.ground) c = hit.cell; ghost.material.color.set(0xff4d6d); }
  else if (tool.mode === 'paint' || tool.mode === 'turn') { if (!hit.ground) c = hit.cell; ghost.material.color.set(0xffffff); }
  else { const tg = targetFor(hit, tool.selected); if (tg && 'cell' in tg) c = tg.cell; ghost.material.color.set(0xffffff); }
  if (c) { ghost.position.set(c[0] + .5, c[1] + .5, c[2] + .5); ghost.visible = true; }
}

export function initInput() {
  canvas.addEventListener('pointerdown', e => {
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
    if (ptrs.size === 1) {
      // with the walk tool, a finger on the screen is where she walks to
      if (tool.mode === 'walk' && e.button !== 2 && !e.shiftKey) { gest = { type: 'walk' }; setFinger(e.clientX, e.clientY); }
      else gest = { type: 'tap', moved: false, pan: e.button === 2 || e.shiftKey };
    }
    else if (ptrs.size === 2) { const a = [...ptrs.values()]; gest = { type: 'pinch', d0: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1, dist0: cam.dist, mx: (a[0].x + a[1].x) / 2, my: (a[0].y + a[1].y) / 2, a: Math.atan2(a[1].y - a[0].y, a[1].x - a[0].x) }; clearFinger(); }
    ghost.visible = false;
  });
  canvas.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId);
    if (!p) { if (e.pointerType === 'mouse') hover(e.clientX, e.clientY); return; }
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (!gest) return;
    if (gest.type === 'walk') { if (ptrs.size === 1) setFinger(p.x, p.y); return; }
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
    const wasTap = gest && gest.type === 'tap' && !gest.moved && ptrs.size === 1 && performance.now() - p.t < 700 && e.type === 'pointerup';
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
