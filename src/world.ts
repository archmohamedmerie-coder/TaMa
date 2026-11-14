import { TYPES } from './types';

export const N = 32, H = 10;
// the starter garden keeps its original 20×20 size, in the middle of the land
export const G = 20, OFF = (N - G) / 2;

// r: rotation in steps of 45° (0–7). c: optional paint colour (0xRRGGBB).
// of: set on the extra cells of a piece larger than one cell; it holds the key of the piece's anchor cell.
export interface Voxel { t: string; r: number; c?: number; of?: number }
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
export const view = { hideRoofs: false };

// wired in main.ts so this module stays free of UI, audio and rendering
export const hooks = { afterChange: () => {}, syncUndo: () => {} };

/* ---------- pieces larger than one cell ---------- */
const ONE: Cell = [1, 1, 1];
export const sizeOf = (t: string): Cell => TYPES[t].size || ONE;
// a piece with a 1×1 footprint turns in steps of 45°; a wider one in quarter turns, so it stays on the grid
export const turnStep = (t: string) => { const s = sizeOf(t); return s[0] === 1 && s[2] === 1 ? 1 : 2; };
// every cell a piece covers, anchor first. It extends from the anchor along its own +x, +y and +z.
export function cellsOf(x: number, y: number, z: number, t: string, r: number): Cell[] {
  const [w, h, d] = sizeOf(t), q = (r >> 1) & 3, out: Cell[] = [];
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) for (let k = 0; k < d; k++) {
    const dx = q === 0 ? i : q === 1 ? k : q === 2 ? -i : -k, dz = q === 0 ? k : q === 1 ? -i : q === 2 ? -k : i;
    out.push([x + dx, y + j, z + dz]);
  }
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
  removeKeys.forEach(k => m.set(k, { k, a: voxels.get(k)!, b: null }));
  if (place) {
    const ak = K(place.x, place.y, place.z), cells = cellsOf(place.x, place.y, place.z, place.t, place.r);
    for (let i = 0; i < cells.length; i++) {
      const c = cells[i]; if (!inB(c[0], c[1], c[2])) return null;
      const k = K(c[0], c[1], c[2]), e = m.get(k);
      if (!e && voxels.has(k)) return null;
      const b: Voxel = { t: place.t, r: place.r, c: place.c }; if (i) b.of = ak;
      if (e) e.b = b; else m.set(k, { k, a: null, b });
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
  list.forEach(e => {
    if (!TYPES[e[3]] || !inB(e[0], e[1], e[2])) return;
    const v: Voxel = { t: e[3], r: (((e[4] || 0) % 8) + 8) % 8 };
    if (turnStep(v.t) === 2) v.r &= 6;
    if (typeof e[5] === 'number') v.c = e[5];
    const cells = cellsOf(e[0], e[1], e[2], v.t, v.r), ak = K(e[0], e[1], e[2]);
    if (cells.some(c => !inB(c[0], c[1], c[2]) || m.has(K(c[0], c[1], c[2])))) return;
    cells.forEach((c, i) => m.set(K(c[0], c[1], c[2]), i ? { ...v, of: ak } : v));
  });
  return m;
}
export function loadWorld(list: Entry[]) {
  voxels.clear();
  build(list).forEach((v, k) => voxels.set(k, v));
  Object.keys(TYPES).forEach(t => dirty.add(t));
}

/* ---------- editing with undo ---------- */
export const undoStack: Op[] = [], redoStack: Op[] = [];
export function applyOp(op: Op, fwd: boolean) {
  op.forEach(e => {
    const v = fwd ? e.b : e.a, old = voxels.get(e.k);
    if (old) dirty.add(old.t);
    if (v) { voxels.set(e.k, { ...v }); dirty.add(v.t); } else voxels.delete(e.k);
  });
  hooks.afterChange();
}
export function commit(op: Op) { applyOp(op, true); undoStack.push(op); if (undoStack.length > 200) undoStack.shift(); redoStack.length = 0; hooks.syncUndo(); }
export function undo(): boolean { const op = undoStack.pop(); if (!op) return false; applyOp(op, false); redoStack.push(op); hooks.syncUndo(); return true; }
export function redo(): boolean { const op = redoStack.pop(); if (!op) return false; applyOp(op, true); undoStack.push(op); hooks.syncUndo(); return true; }
// swap the whole world for another one as a single undoable step
export function replaceWorld(list: Entry[]) {
  const next = build(list), op: Op = [];
  voxels.forEach((v, k) => { const b = next.get(k) || null; if (!b || b.t !== v.t || b.r !== v.r || b.c !== v.c || b.of !== v.of) op.push({ k, a: v, b }); });
  next.forEach((b, k) => { if (!voxels.has(k)) op.push({ k, a: null, b }); });
  if (op.length) commit(op);
}
