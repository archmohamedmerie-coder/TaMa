import { TYPES, isBlock } from './types';
import { H, K, unK, inB, voxels, view, dirty, anchorKey, type Voxel } from './world';
import { setGhostCells } from './render';

/* ---------- looking inside a house ----------
   While the girl is indoors, everything above her storey is hidden (roof, upper floor),
   and the walls between her and the camera are shown as faint boxes, so the room can be
   seen and furnished from any side. Hidden pieces are still there: only drawing and tapping skip them. */
const STOREY = 3;
let last = '';
// call when the world changes, so the next update works it out again
export function refreshInside() { last = ''; }

export function updateInside(px: number, py: number, pz: number, theta: number, mode: string) {
  const cx = Math.floor(px), cz = Math.floor(pz), sector = Math.round(theta / (Math.PI / 8));
  const sig = cx + ',' + py + ',' + cz + ',' + sector + ',' + mode;
  if (sig === last) return;
  last = sig;
  const hidden = new Set<number>(), ghost: number[] = [];
  const base = py - py % STOREY;
  // above her storey: anything from the next storey up, and the floor slab that is her ceiling
  const above = (v: Voxel | undefined, y: number) => !!v && (y >= base + STOREY || (y === base + STOREY - 1 && v.t === 'floorSlab'));
  // with the roof tool the roof must stay visible, or a new roof would seem not to appear
  if (mode !== 'roof') {
    let seed = -1;
    for (let y = py + 1; y < H && seed < 0; y++) if (above(voxels.get(K(cx, y, cz)), y)) seed = K(cx, y, cz);
    if (seed >= 0) {
      // everything above her storey that hangs together with what is over her head
      const seen = new Set<number>([seed]), todo = [seed];
      while (todo.length && seen.size < 4000) {
        const k = todo.pop()!, c = unK(k);
        hidden.add(anchorKey(k));
        for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let l = -1; l <= 1; l++) {
          const x = c[0] + i, y = c[1] + j, z = c[2] + l; if (!inB(x, y, z)) continue;
          const q = K(x, y, z);
          if (!seen.has(q) && above(voxels.get(q), y)) { seen.add(q); todo.push(q); }
        }
      }
      // the room she is in: the floor cells she could reach without passing a wall or a door
      const room = new Set<number>([K(cx, py, cz)]), walk: [number, number][] = [[cx, cz]];
      const open = (x: number, z: number) => { const v = voxels.get(K(x, py, z)); return inB(x, py, z) && !(v && isBlock(v.t)); };
      for (let i = 0; i < walk.length && room.size <= 400; i++) {
        const [x, z] = walk[i];
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const q = K(x + dx, py, z + dz);
          if (!room.has(q) && open(x + dx, z + dz)) { room.add(q); walk.push([x + dx, z + dz]); }
        }
      }
      // a room that is not closed off is not treated as a room; otherwise fade the walls on the camera's side
      if (room.size <= 400) {
        const sx = Math.sin(theta), sz = Math.cos(theta), done = new Set<number>();
        for (const [x, z] of walk) for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
          const wx = x + i, wz = z + j, col = wx + 1000 * wz;
          if (done.has(col) || !inB(wx, py, wz)) continue;
          const v = voxels.get(K(wx, py, wz)); if (!v || !isBlock(v.t)) continue;
          done.add(col);
          if ((wx + .5 - px) * sx + (wz + .5 - pz) * sz < .3) continue;
          for (let y = base; y < H; y++) {
            const k = K(wx, y, wz), w = voxels.get(k);
            if (!w || !isBlock(w.t) || TYPES[w.t].roof) continue;
            if (!hidden.has(anchorKey(k)) || y < base + STOREY) ghost.push(k);
            hidden.add(anchorKey(k));
          }
        }
      }
    }
  }
  // redraw only the kinds of piece whose hidden state changed
  const mark = (k: number) => { const v = voxels.get(k); if (v) dirty.add(v.t); };
  hidden.forEach(k => { if (!view.hidden.has(k)) mark(k); });
  view.hidden.forEach(k => { if (!hidden.has(k)) mark(k); });
  view.hidden = hidden;
  setGhostCells(ghost);
}
