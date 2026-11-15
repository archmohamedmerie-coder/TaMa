import * as THREE from 'three';
import { TYPES, isBlock } from './types';
import { N, H, K, unK, inB, voxels, view, anchorKey, type Voxel } from './world';
import { canvas, camera } from './render';

export type Hit =
  | { ground: true; cell: number[] }
  // cell: the cell under the pointer. k and v: the anchor key and voxel of the piece it belongs to.
  | { ground?: false; cell: number[]; k: number; v: Voxel; normal: number[] | null };
export type Target =
  | { cell: number[]; act: 'place' | 'turn' | 'replace' }
  | { err: 'high' | 'edge' | 'support' };

/* ---------- picking (grid ray walk) ---------- */
const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
export function pick(px: number, py: number): Hit | null {
  const r = canvas.getBoundingClientRect();
  ndc.set((px - r.left) / r.width * 2 - 1, -((py - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const o = [raycaster.ray.origin.x + N / 2, raycaster.ray.origin.y, raycaster.ray.origin.z + N / 2];
  const d = [raycaster.ray.direction.x, raycaster.ray.direction.y, raycaster.ray.direction.z];
  const lo = [0, 0, 0], hi = [N, H, N];
  let t0 = 0, t1 = 1e9, axis = -1;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-9) { if (o[i] < lo[i] || o[i] > hi[i]) return null; }
    else { let a = (lo[i] - o[i]) / d[i], c = (hi[i] - o[i]) / d[i]; if (a > c) { const s = a; a = c; c = s; } if (a > t0) { t0 = a; axis = i; } if (c < t1) t1 = c; }
  }
  if (t0 > t1) return null;
  const p = [0, 1, 2].map(i => o[i] + d[i] * (t0 + 1e-4));
  const cell = [0, 1, 2].map(i => Math.min(hi[i] - 1, Math.max(0, Math.floor(p[i]))));
  const step = d.map(v => v > 0 ? 1 : -1);
  const tMax = [0, 1, 2].map(i => Math.abs(d[i]) < 1e-9 ? 1e9 : ((step[i] > 0 ? cell[i] + 1 : cell[i]) - o[i]) / d[i]);
  const tDelta = d.map(v => Math.abs(v) < 1e-9 ? 1e9 : Math.abs(1 / v));
  for (let n = 0; n < 200; n++) {
    const k = K(cell[0], cell[1], cell[2]), v = voxels.get(k);
    // hidden roofs let the tap through to the rooms below
    // eaves hang over the walls; taps go through them to the wall behind
    if (v && v.t !== 'eave' && v.t !== 'eaveCorner' && !(view.hideRoofs && TYPES[v.t].roof) && !view.hidden.has(anchorKey(k))) { const nrm = [0, 0, 0]; if (axis >= 0) nrm[axis] = -step[axis]; const ak = anchorKey(k); return { cell: cell.slice(), k: ak, v: voxels.get(ak) || v, normal: axis >= 0 ? nrm : null }; }
    axis = tMax[0] < tMax[1] ? (tMax[0] < tMax[2] ? 0 : 2) : (tMax[1] < tMax[2] ? 1 : 2);
    const prev = cell.slice();
    cell[axis] += step[axis]; tMax[axis] += tDelta[axis];
    if (cell[1] < 0) return { ground: true, cell: prev };
    if (!inB(cell[0], cell[1], cell[2])) return null;
  }
  return null;
}
export function targetFor(hit: Hit | null, sel: string): Target | null {
  if (!hit) return null;
  if (hit.ground) return { cell: hit.cell, act: 'place' };
  if (!isBlock(hit.v.t)) return { cell: unK(hit.k), act: hit.v.t === sel ? 'turn' : 'replace' };
  if (!hit.normal) return null;
  const c = [hit.cell[0] + hit.normal[0], hit.cell[1] + hit.normal[1], hit.cell[2] + hit.normal[2]];
  if (c[1] >= H) return { err: 'high' };
  if (!inB(c[0], c[1], c[2])) return { err: 'edge' };
  if (voxels.has(K(c[0], c[1], c[2]))) return null;
  if (!isBlock(sel)) {
    while (c[1] > 0 && !voxels.has(K(c[0], c[1] - 1, c[2]))) c[1]--;
    if (c[1] > 0 && !isBlock(voxels.get(K(c[0], c[1] - 1, c[2]))!.t)) return { err: 'support' };
  }
  return { cell: c, act: 'place' };
}
// where the ray under a screen point crosses the horizontal plane at height h (world cells), or null above the horizon
export function planePoint(px: number, py: number, h: number): [number, number] | null {
  const r = canvas.getBoundingClientRect();
  ndc.set((px - r.left) / r.width * 2 - 1, -((py - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const o = raycaster.ray.origin, d = raycaster.ray.direction;
  if (d.y > -1e-3) return null;
  const t = (h - o.y) / d.y;
  return [o.x + d.x * t + N / 2, o.z + d.z * t + N / 2];
}
