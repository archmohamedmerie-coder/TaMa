import * as THREE from 'three';
import { TYPES, isBlock, b, M } from './types';
import { N, H, OFF, K, inB, voxels, view, type Voxel } from './world';
import { state, save } from './save';
import { world, baseMat, canvas, reduceMotion } from './render';
import { planePoint } from './pick';
import { cam, tool } from './input';

/* ---------- the walking character: a girl about a cell and a half tall, facing +z ----------
   A cell is about one metre: a storey is three cells, a door two, and she stands 1.5 high. */
const SKIN = 0xf2c9a0, HAIR = 0x5a3a22, DRESS = 0xe2477f, DRESS2 = 0xc93a6e, SHOE = 0x6a3fa6, DARK = 0x2b2140;
const SPEED = 3.4;  // cells per second
const R = .3;       // half her width, for bumping into things
const S = 1.85;     // the model is drawn one cell tall and shown at this scale
const EYE = 1.38;   // her eyes above the floor she stands on

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
hero.scale.setScalar(S);

// where she is: x and z anywhere on the ground, y the level she stands on
let px = 9.5 + OFF, pz = 14.5 + OFF, py = 0, shownY = 0, facing = 0;
// the finger she is walking towards, in screen pixels
let finger: { x: number; y: number } | null = null;
const v3 = new THREE.Vector3();

/* ---------- where she can stand ---------- */
// flat pieces and flowers can be walked over, and doors can be walked through
const passable = (v: Voxel | undefined) => !v || !!TYPES[v.t].flat || TYPES[v.t].cat === 'flower' || !!TYPES[v.t].door || !!TYPES[v.t].thin;
const clear = (x: number, y: number, z: number) => inB(x, y, z) && passable(voxels.get(K(x, y, z)));
// she is taller than one cell: the cell at her feet and the one at her head must both be open
const free = (x: number, y: number, z: number) => clear(x, y, z) && (y + 1 >= H || clear(x, y + 1, z));
const floorAt = (x: number, y: number, z: number) => { if (y === 0) return true; const u = voxels.get(K(x, y - 1, z)); return !!u && isBlock(u.t); };
const corners = (x: number, z: number) => [[x - R, z - R], [x + R, z - R], [x - R, z + R], [x + R, z + R]].map(c => [Math.floor(c[0]), Math.floor(c[1])]);
// she fits at this spot when nothing solid touches her on that level
const fits = (x: number, z: number, y: number) => corners(x, z).every(c => free(c[0], y, c[1]));
// and she has footing when any part of her is over the ground or a block
const footing = (x: number, z: number, y: number) => corners(x, z).some(c => floorAt(c[0], y, c[1]));

// one small step; she climbs a single block and steps down from any height
function tryMove(dx: number, dz: number): boolean {
  if (Math.abs(dx) + Math.abs(dz) < 1e-5) return false;
  const nx = px + dx, nz = pz + dz;
  if (fits(nx, nz, py)) {
    let ny = py;
    while (ny > 0 && !footing(nx, nz, ny)) { if (!fits(nx, nz, ny - 1)) return false; ny--; }
    px = nx; pz = nz; py = ny; return true;
  }
  if (fits(nx, nz, py + 1) && fits(px, pz, py + 1) && footing(nx, nz, py + 1)) { px = nx; pz = nz; py++; return true; }
  return false;
}

function nearestOpen(): [number, number, number] {
  let best: [number, number, number] = [Math.floor(px), py, Math.floor(pz)], bestD = Infinity;
  for (let y = 0; y < H; y++) for (let x = 0; x < N; x++) for (let z = 0; z < N; z++) {
    if (!free(x, y, z) || !floorAt(x, y, z)) continue;
    const d = (x + .5 - px) ** 2 + (z + .5 - pz) ** 2 + ((y - py) * 2) ** 2;
    if (d < bestD) { bestD = d; best = [x, y, z]; }
  }
  return best;
}
// after the world changes: move out of the way if she was built over, or step down if her floor is gone
export function settleHero() {
  if (fits(px, pz, py)) while (py > 0 && !footing(px, pz, py) && fits(px, pz, py - 1)) py--;
  if (!fits(px, pz, py) || !footing(px, pz, py)) { const c = nearestOpen(); px = c[0] + .5; py = c[1]; pz = c[2] + .5; }
}

export function setFinger(x: number, y: number) { finger = { x, y }; }
export function clearFinger() {
  if (!finger) return;
  finger = null; state.hero = [px, py, pz]; save();
}

export function initHero() {
  const h = state.hero;
  if (Array.isArray(h) && h.length === 3 && h.every(n => typeof n === 'number')) {
    // older saves stored a whole cell; stand her in its middle
    px = Number.isInteger(h[0]) ? h[0] + .5 : h[0]; py = Math.round(h[1]); pz = Number.isInteger(h[2]) ? h[2] + .5 : h[2];
  }
  world.add(hero);
  settleHero();
  shownY = py; hero.position.set(px, py + .5 * S, pz);
}

export function updateHero(dt: number, now: number) {
  let walking = false;
  if (finger && tool.mode !== 'walk') clearFinger();
  if (!view.fp) { goal = null; pitch = -.05; }
  if (goal) {
    // through her eyes: she walks to the spot that was tapped, turning to face it
    let dx = goal.x - px, dz = goal.z - pz; const d = Math.hypot(dx, dz);
    if (d < .25 || stuck > 20 || --goal.left < 0) goal = null;
    else {
      const want = Math.atan2(dx, dz), df = ((want - facing + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
      facing += df * Math.min(1, dt * 4);
      const step = Math.min(d, SPEED * .8 * dt); dx *= step / d; dz *= step / d;
      walking = tryMove(dx, dz) || tryMove(dx, 0) || tryMove(0, dz);
      stuck = walking ? 0 : stuck + 1;
    }
    cam.target.lerp(v3.set(px - N / 2, py, pz - N / 2), Math.min(1, dt * 3));
  }
  mark.visible = !!goal; if (goal) mark.position.set(goal.x, py + .03, goal.z);
  if (finger && !view.fp) {
    // she heads for the spot under the finger, on the level she is standing on
    const p = planePoint(finger.x, finger.y, py);
    if (p) {
      let dx = p[0] - px, dz = p[1] - pz; const d = Math.hypot(dx, dz);
      if (d > .2) {
        facing = Math.atan2(dx, dz);
        const step = Math.min(d - .1, SPEED * dt * Math.min(1, .35 + d / 2));
        dx *= step / d; dz *= step / d;
        // slide along whatever is in the way instead of stopping dead
        walking = tryMove(dx, dz) || tryMove(dx, 0) || tryMove(0, dz);
      }
    }
    // the camera keeps her in view, so a still finger means "keep going this way"
    cam.target.lerp(v3.set(px - N / 2, py, pz - N / 2), Math.min(1, dt * 3));
  }
  shownY += (py - shownY) * Math.min(1, dt * 14);
  hero.position.set(px, shownY + .5 * S, pz);
  hero.visible = !view.fp;
  bob = walking && !reduceMotion ? Math.sin(now * .011) * .03 : 0;
  const turn = ((facing - hero.rotation.y + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  hero.rotation.y += turn * Math.min(1, dt * 12);
  const swing = walking && !reduceMotion ? Math.sin(now * .011) * .7 : 0;
  legL.rotation.x = swing; legR.rotation.x = -swing; armL.rotation.x = -swing * .8; armR.rotation.x = swing * .8;
}

let bob = 0;
// where her eyes are and which way she looks, in world cells
export const heroEye = () => ({ x: px, y: shownY + EYE + bob, z: pz, f: facing, p: pitch });
// through her eyes: the spot she is walking to, her head tilt, and a marker on the ground
let goal: { x: number; z: number; left: number } | null = null, pitch = -.05, stuck = 0;
const mark = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, .03, 16), new THREE.MeshBasicMaterial({ color: 0xffc22e, transparent: true, opacity: .75 }));
mark.visible = false; world.add(mark);
// a drag across the screen turns her head: right and left to look around, up and down a little
export function lookBy(dx: number, dy: number) {
  facing -= dx * .006; pitch = Math.max(-.7, Math.min(.5, pitch - dy * .004));
}
// a tap sends her to that spot on the ground; a tap at the sky or far away walks her a few steps that way
export function walkToScreen(sx: number, sy: number) {
  const p = planePoint(sx, sy, py);
  if (p && Math.hypot(p[0] - px, p[1] - pz) < 12) goal = { x: p[0], z: p[1], left: 600 };
  else {
    const r = canvas.getBoundingClientRect(), a = facing - ((sx - r.left) / r.width - .5) * 1.1;
    goal = { x: px + Math.sin(a) * 6, z: pz + Math.cos(a) * 6, left: 600 };
  }
  stuck = 0;
}
// for tests from the console
export const heroCell = () => [px, py, pz];
