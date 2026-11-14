import * as THREE from 'three';
import { TYPES, isBlock, b, M } from './types';
import { N, K, inB, voxels, type Voxel } from './world';
import { state, save } from './save';
import { world, baseMat, reduceMotion } from './render';
import { cam, tool } from './input';
import type { Hit } from './pick';

/* ---------- the walking character: a small girl, one cell tall, facing +z ---------- */
type Cell = [number, number, number];
const SKIN = 0xf2c9a0, HAIR = 0x5a3a22, DRESS = 0xe2477f, DRESS2 = 0xc93a6e, SHOE = 0x6a3fa6, DARK = 0x2b2140;
const SPEED = 3.2; // cells per second

// a limb that swings around a pivot at height pivotY above the cell floor
function limb(parts: THREE.BufferGeometry[], pivotY: number) {
  const g = M(parts); g.translate(0, .5 - pivotY, 0);
  const m = new THREE.Mesh(g, baseMat); m.position.y = -.5 + pivotY; m.castShadow = true;
  return m;
}
const hero = new THREE.Group();
const body = new THREE.Mesh(M([
  b(.3, .28, .2, DRESS, 0, .22, 0), b(.38, .12, .26, DRESS2, 0, .2, 0),
  b(.28, .26, .26, SKIN, 0, .5, 0), b(.3, .08, .28, HAIR, 0, .74, 0), b(.3, .24, .06, HAIR, 0, .52, -.13),
  b(.08, .2, .08, HAIR, .19, .46, -.02), b(.08, .2, .08, HAIR, -.19, .46, -.02), b(.08, .06, .06, 0xffc22e, .19, .66, -.02), b(.08, .06, .06, 0xffc22e, -.19, .66, -.02),
  b(.04, .05, .02, DARK, .07, .6, .135), b(.04, .05, .02, DARK, -.07, .6, .135), b(.1, .02, .02, 0xc9584c, 0, .54, .135)]), baseMat);
body.castShadow = true;
const leg = (x: number) => limb([b(.1, .22, .1, SKIN, x, 0, 0), b(.12, .06, .16, SHOE, x, 0, .02)], .24);
const arm = (x: number) => limb([b(.08, .24, .08, SKIN, x, .24, 0)], .48);
const legL = leg(.08), legR = leg(-.08), armL = arm(.2), armR = arm(-.2);
hero.add(body, legL, legR, armL, armR);

let cell: Cell = [9, 0, 14];
let path: Cell[] = [];
const pos = new THREE.Vector3(), aim = new THREE.Vector3(), v3 = new THREE.Vector3();
let facing = 0;

/* ---------- where she can stand ---------- */
// flat pieces and flowers can be walked over, and doors can be walked through
const passable = (v: Voxel | undefined) => !v || !!TYPES[v.t].flat || TYPES[v.t].cat === 'flower' || v.t === 'door';
const free = (x: number, y: number, z: number) => inB(x, y, z) && passable(voxels.get(K(x, y, z)));
function open(x: number, y: number, z: number) {
  if (!free(x, y, z)) return false;
  if (y === 0) return true;
  const u = voxels.get(K(x, y - 1, z));
  return !!u && isBlock(u.t);
}
const dist = (a: Cell, c: Cell) => (a[0] - c[0]) ** 2 + (a[2] - c[2]) ** 2 + ((a[1] - c[1]) * 2) ** 2;
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

// shortest walk from start to goal; if the goal cannot be reached, to the reachable cell nearest to it
function route(start: Cell, goal: Cell): Cell[] {
  const key = (c: Cell) => K(c[0], c[1], c[2]);
  const prev = new Map<number, number>(), cells = new Map<number, Cell>(), q: Cell[] = [start];
  prev.set(key(start), -1); cells.set(key(start), start);
  let best = start, bestD = dist(start, goal);
  for (let i = 0; i < q.length && bestD > 0; i++) {
    const [x, y, z] = q[i];
    for (const [dx, dz] of DIRS) for (const dy of [0, 1, -1]) {
      const n: Cell = [x + dx, y + dy, z + dz], diagonal = dx !== 0 && dz !== 0;
      if (prev.has(key(n)) || !open(n[0], n[1], n[2])) continue;
      if (dy === 0) { if (diagonal && !(open(x + dx, y, z) && open(x, y, z + dz))) continue; }
      else if (diagonal) continue;                               // steps up and down go straight
      else if (dy === 1) { if (!free(x, y + 1, z)) continue; }   // room above her head to climb
      else if (!free(n[0], y, n[2])) continue;                   // room to step out before going down
      prev.set(key(n), key(q[i])); cells.set(key(n), n); q.push(n);
      const d = dist(n, goal); if (d < bestD) { best = n; bestD = d; }
    }
  }
  const out: Cell[] = [];
  for (let k = key(best); k !== key(start); k = prev.get(k)!) out.unshift(cells.get(k)!);
  return out;
}

function place() { pos.set(cell[0] + .5, cell[1] + .5, cell[2] + .5); hero.position.copy(pos); }
function nearestOpen(c: Cell): Cell {
  let best = c, bestD = Infinity;
  for (let y = 0; y < 10; y++) for (let x = 0; x < N; x++) for (let z = 0; z < N; z++) {
    if (!open(x, y, z)) continue;
    const d = dist([x, y, z], c); if (d < bestD) { bestD = d; best = [x, y, z]; }
  }
  return best;
}
// after the world changes: stop, and move out of the way if her cell was built over or lost its floor
export function settleHero() {
  path = [];
  if (!open(cell[0], cell[1], cell[2])) cell = nearestOpen(cell);
  place();
}

export function walkTo(hit: Hit): boolean {
  let goal: Cell;
  if (hit.ground || !isBlock(hit.v.t) || !hit.normal) goal = [hit.cell[0], hit.cell[1], hit.cell[2]];
  else goal = [hit.cell[0] + hit.normal[0], hit.cell[1] + hit.normal[1], hit.cell[2] + hit.normal[2]];
  // keep finishing the current step, then head for the new goal
  const from = path.length ? path[0] : cell, next = route(from, goal);
  path = path.length ? [from, ...next] : next;
  return path.length > 0;
}

export function initHero() {
  const h = state.hero;
  if (Array.isArray(h) && h.length === 3 && inB(h[0], h[1], h[2])) cell = [h[0], h[1], h[2]];
  world.add(hero);
  settleHero();
}

export function updateHero(dt: number, now: number) {
  const walking = path.length > 0;
  if (walking) {
    aim.set(path[0][0] + .5, path[0][1] + .5, path[0][2] + .5);
    v3.copy(aim).sub(pos);
    const d = v3.length(), step = SPEED * dt;
    if (Math.abs(v3.x) + Math.abs(v3.z) > 1e-3) facing = Math.atan2(v3.x, v3.z);
    if (d <= step) {
      pos.copy(aim); cell = path.shift()!;
      if (!path.length) { state.hero = cell.slice(); save(); }
    } else pos.addScaledVector(v3, step / d);
    hero.position.copy(pos);
    // the camera follows her while the walk tool is on
    if (tool.mode === 'walk') cam.target.lerp(v3.set(pos.x - N / 2, pos.y - .5, pos.z - N / 2), Math.min(1, dt * 2.5));
  }
  const turn = ((facing - hero.rotation.y + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  hero.rotation.y += turn * Math.min(1, dt * 12);
  const swing = walking && !reduceMotion ? Math.sin(now * .012) * .7 : 0;
  legL.rotation.x = swing; legR.rotation.x = -swing; armL.rotation.x = -swing * .8; armR.rotation.x = swing * .8;
}
// for tests from the console
export const heroCell = () => cell.slice();
