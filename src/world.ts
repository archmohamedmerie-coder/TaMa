import { TYPES } from './types';

export const N = 20, H = 10;
export interface Voxel { t: string; r: number }
export type Entry = [number, number, number, string, number];
export interface Edit { k: number; a: Voxel | null; b: Voxel | null }
export type Op = Edit[];

export const voxels = new Map<number, Voxel>(); // key -> {t,r}
export const K = (x: number, y: number, z: number) => x + N * (z + N * y);
export const unK = (k: number): [number, number, number] => { const x = k % N, z = Math.floor(k / N) % N, y = Math.floor(k / (N * N)); return [x, y, z]; };
export const inB = (x: number, y: number, z: number) => x >= 0 && x < N && z >= 0 && z < N && y >= 0 && y < H;
export const dirty = new Set<string>();

// wired in main.ts so this module stays free of UI, audio and rendering
export const hooks = { afterChange: () => {}, syncUndo: () => {} };

/* ---------- starting garden ---------- */
export function defaultWorld(): Entry[] {
  const w: Entry[] = []; const set = (x: number, y: number, z: number, t: string, r?: number) => w.push([x, y, z, t, r || 0]);
  for (let i = 0; i < N; i++) { set(i, 0, 0, 'fence', 0); if (i < 8 || i > 11) set(i, 0, N - 1, 'fence', 0); }
  for (let i = 1; i < N - 1; i++) { set(0, 0, i, 'fence', 1); set(N - 1, 0, i, 'fence', 1); }
  for (let y = 0; y < 3; y++) { set(8, y, N - 1, 'white'); set(11, y, N - 1, 'white'); }
  for (let x = 8; x <= 11; x++) set(x, 3, N - 1, 'pink');
  for (let z = 12; z < N; z++) { set(9, 0, z, 'tile'); set(10, 0, z, 'tile'); }
  for (let x = 7; x <= 12; x++) for (let z = 6; z <= 11; z++) { if (!((x === 9 || x === 10) && (z === 8 || z === 9))) set(x, 0, z, 'tile'); }
  set(2, 0, 2, 'tree'); set(17, 0, 2, 'blossom'); set(2, 0, 16, 'blossom'); set(17, 0, 16, 'bush'); set(16, 0, 17, 'bush');
  return w;
}
export function loadWorld(list: Entry[]) {
  voxels.clear();
  list.forEach(e => { if (TYPES[e[3]] && inB(e[0], e[1], e[2])) voxels.set(K(e[0], e[1], e[2]), { t: e[3], r: e[4] || 0 }); });
  Object.keys(TYPES).forEach(t => dirty.add(t));
}

/* ---------- editing with undo ---------- */
export const undoStack: Op[] = [], redoStack: Op[] = [];
export function applyOp(op: Op, fwd: boolean) {
  op.forEach(e => {
    const v = fwd ? e.b : e.a, old = voxels.get(e.k);
    if (old) dirty.add(old.t);
    if (v) { voxels.set(e.k, { t: v.t, r: v.r }); dirty.add(v.t); } else voxels.delete(e.k);
  });
  hooks.afterChange();
}
export function commit(op: Op) { applyOp(op, true); undoStack.push(op); if (undoStack.length > 200) undoStack.shift(); redoStack.length = 0; hooks.syncUndo(); }
export function undo(): boolean { const op = undoStack.pop(); if (!op) return false; applyOp(op, false); redoStack.push(op); hooks.syncUndo(); return true; }
export function redo(): boolean { const op = redoStack.pop(); if (!op) return false; applyOp(op, true); undoStack.push(op); hooks.syncUndo(); return true; }
