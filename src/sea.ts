import * as THREE from 'three';
import { b, M } from './types';
import { N } from './world';
import { world, baseMat, reduceMotion } from './render';

/* ---------- the islands in their sea ----------
   Each garden is the middle of an island. Around it lies a sandy beach that slopes into shallow water,
   then the open sea. A wooden pier runs out from the front of the island, and a boat waits beside it.
   All positions here are in this child's garden cells, like the voxels: her garden covers 0..N on x and z.
   Friends' islands sit at other offsets in the same sea (see islands.ts). */

export const WATER = -.45;                 // the height of the calm sea
const BEACH_OUT = 9;                       // how far the sand reaches out under the water
const DRY = 3.1;                           // how far out the sand is dry enough to walk on
export const PIER = { x0: N / 2 - 1, x1: N / 2 + 1, z0: N, z1: N + 11 };
export const DOCK = { x: N / 2 + 2.4, z: N + 8.6, a: 0 };   // where the boat is moored, its bow out to sea
export const STEP = { x: N / 2 + .45, z: N + 8.6 };          // the spot on the pier beside the boat

// the islands in the sea, by where their garden starts; this child's own island is always at 0, 0
export let isles: { x: number; z: number }[] = [{ x: 0, z: 0 }];

// how far a spot is from the edge of a garden (0 inside it)
export const shoreDist = (x: number, z: number) => Math.hypot(Math.max(-x, 0, x - N), Math.max(-z, 0, z - N));
// the height of the sand at that distance: a gentle dry beach, then a steeper slope under the water
const sandH = (d: number) => d <= 0 ? 0 : d <= 3 ? -.06 - .1 * d : -.36 - .25 * (d - 3);
export const onPier = (x: number, z: number) => x >= PIER.x0 && x <= PIER.x1 && z >= PIER.z0 && z <= PIER.z1;
// where she can walk outside her garden: the dry sand and the pier of her own island
export const onLand = (x: number, z: number) => shoreDist(x, z) <= DRY || onPier(x, z);
// the height of the ground under her feet outside the garden
export const groundAt = (x: number, z: number) => onPier(x, z) ? 0 : sandH(shoreDist(x, z));

/* ---------- waves: the same small swell in the water shader and for the boat ---------- */
let T = 0;
const SWELL = 'float swell(vec2 p, float t) { return .07 * sin(.35 * p.x + 1.1 * t) + .05 * sin(.27 * p.y - .8 * t + 1.3) + .03 * sin(.6 * (p.x + p.y) + 1.7 * t); }';
export function wave(x: number, z: number) {
  const lx = x - N / 2, lz = z - N / 2;
  return .07 * Math.sin(.35 * lx + 1.1 * T) + .05 * Math.sin(.27 * lz - .8 * T + 1.3) + .03 * Math.sin(.6 * (lx + lz) + 1.7 * T);
}

const box = (w: number, h: number, d: number, c: number, x: number, y0: number, z: number) => b(w, h, d, c, x, y0 + .5, z);

/* ---------- water: gentle waves, turquoise over the sand, deep blue further out, foam along each shore ----------
   The patch of waves follows the view, so a sea with several islands costs no more than one. */
const SIZE = 240, SEG = 100, CELL = SIZE / SEG;
const uTime = { value: 0 }, uOrigin = { value: new THREE.Vector2() };
const uIsl = { value: [0, 1, 2, 3].map(() => new THREE.Vector2(9999, 9999)) }, uCount = { value: 1 };
const water = new THREE.Mesh(new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG).rotateX(-Math.PI / 2),
  new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, flatShading: true, shininess: 70, specular: 0x9fdcff }));
(water.material as THREE.MeshPhongMaterial).onBeforeCompile = sh => {
  Object.assign(sh.uniforms, { uTime, uOrigin, uIsl, uCount });
  sh.vertexShader = 'uniform float uTime;\nuniform vec2 uOrigin;\nuniform vec2 uIsl[4];\nuniform int uCount;\nvarying float vD;\n' + SWELL + '\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
    vec2 gp = transformed.xz + uOrigin;            // garden cells
    // the swell fades out towards the edge of the patch, where it meets the flat far sea
    transformed.y += swell(gp - vec2(${N / 2}.0), uTime) * (1.0 - smoothstep(${SIZE / 2 - 30}.0, ${SIZE / 2 - 6}.0, max(abs(transformed.x), abs(transformed.z))));
    vD = 999.0;
    for (int i = 0; i < 4; i++) {
      if (i >= uCount) break;
      vec2 q = gp - uIsl[i];
      vD = min(vD, length(max(max(-q, vec2(0.0)), q - vec2(${N}.0))));
    }`);
  sh.fragmentShader = 'uniform float uTime;\nvarying float vD;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
    float shallow = 1.0 - smoothstep(3.0, 14.0, vD);
    diffuseColor.rgb = mix(vec3(.023, .212, .552), vec3(.115, .672, .716), shallow);
    float foam = (1.0 - smoothstep(0.0, .45, abs(vD - (3.45 + .18 * sin(uTime * 1.3))))) * .8;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), foam);
    diffuseColor.a = max(mix(.93, .6, shallow), foam);`);
};
water.renderOrder = 1; world.add(water);
// the open sea beyond the patch of waves, flat out to the horizon, and the sea floor seen dimly through it
const far = new THREE.Mesh(new THREE.RingGeometry(SIZE / 2 - 8, 1000, 64, 1), new THREE.MeshLambertMaterial({ color: 0x2a7fc4 }));
far.rotation.x = -Math.PI / 2; world.add(far);
const bed = new THREE.Mesh(new THREE.PlaneGeometry(SIZE + 40, SIZE + 40), new THREE.MeshLambertMaterial({ color: 0x1d5f96 }));
bed.rotation.x = -Math.PI / 2; world.add(bed);

/* ---------- one island's beach, pier, flag and moored boat ---------- */
const WOOD = 0xb98250, WOOD2 = 0xa8743f, DARKWOOD = 0x7a5232;
let sandGeo: THREE.BufferGeometry | null = null, pierGeo: THREE.BufferGeometry | null = null;
function makeSand() {
  const S = N + 2 * BEACH_OUT, g = new THREE.PlaneGeometry(S, S, S, S);
  g.rotateX(-Math.PI / 2); g.translate(N / 2, 0, N / 2);
  const p = g.attributes.position, col = new Float32Array(p.count * 3), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), d = shoreDist(x, z);
    p.setY(i, d <= 0 ? -.07 : sandH(d));
    const j = ((Math.round(x) * 7 + Math.round(z) * 13) % 5) * .012;
    c.set(d < 2.2 ? 0xf3e1a9 : d < 3.4 ? 0xdcc187 : 0xe8d49d).offsetHSL(0, 0, j - .024);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  g.userData.shared = true; return g;
}
function makePier() {
  const parts: THREE.BufferGeometry[] = [], cx = N / 2;
  for (let z = PIER.z0 + .25, i = 0; z < PIER.z1; z += .5, i++) parts.push(box(2.1, .12, .44, i % 2 ? WOOD : WOOD2, cx, -.12, z));
  parts.push(box(.16, .16, PIER.z1 - PIER.z0, DARKWOOD, cx - .85, -.28, (PIER.z0 + PIER.z1) / 2), box(.16, .16, PIER.z1 - PIER.z0, DARKWOOD, cx + .85, -.28, (PIER.z0 + PIER.z1) / 2));
  for (let z = PIER.z0 + 2; z <= PIER.z1; z += 2.5) parts.push(box(.24, 3.25, .24, DARKWOOD, cx - 1.02, -3, z), box(.24, 3.25, .24, DARKWOOD, cx + 1.02, -3, z));
  // posts at the far end to tie the boats to
  parts.push(box(.3, .4, .3, DARKWOOD, cx + .82, 0, PIER.z1 - .35), box(.3, .4, .3, DARKWOOD, cx - .82, 0, PIER.z1 - .35));
  // the flagpole stands on the sand beside the start of the pier
  const fy = groundAt(cx - 1.6, N + 1.2);
  parts.push(box(.12, 4.2, .12, 0xf4f1ea, cx - 1.6, fy, N + 1.2), box(.26, .1, .26, 0xffc22e, cx - 1.6, fy + 4.2, N + 1.2));
  const g = M(parts); g.userData.shared = true; return g;
}
const FLAG_AT = { x: N / 2 - 1.6, z: N + 1.2 };
const FLAG_UP = groundAt(FLAG_AT.x, FLAG_AT.z) + 3.25, FLAG_DOWN = groundAt(FLAG_AT.x, FLAG_AT.z) + .9;
const flagGeo = (color: number) => M([box(1.3, .8, .05, color, .65, 0, 0), box(.36, .36, .07, 0xffffff, .65, .22, 0)]);

export interface Scenery { group: THREE.Group; flag: THREE.Mesh; boat: THREE.Mesh; color: number }
// everything around a garden except the garden itself; added to the given group, which sits where the garden starts
export function islandScenery(group: THREE.Group, color: number): Scenery {
  const sand = new THREE.Mesh(sandGeo || (sandGeo = makeSand()), new THREE.MeshLambertMaterial({ vertexColors: true }));
  sand.receiveShadow = true;
  const pier = new THREE.Mesh(pierGeo || (pierGeo = makePier()), baseMat); pier.castShadow = pier.receiveShadow = true;
  const flag = new THREE.Mesh(flagGeo(color), baseMat); flag.castShadow = true; flag.position.set(FLAG_AT.x, FLAG_UP, FLAG_AT.z);
  const boat = new THREE.Mesh(boatGeo(color), baseMat); boat.castShadow = true;
  boat.position.set(DOCK.x, WATER + .05, DOCK.z); boat.rotation.y = DOCK.a;
  group.add(sand, pier, flag, boat);
  return { group, flag, boat, color };
}
// a new colour for an island's flag and sail
export function paintIsland(s: Scenery, color: number) {
  if (s.color === color) return;
  s.color = color;
  s.flag.geometry.dispose(); s.flag.geometry = flagGeo(color);
  s.boat.geometry.dispose(); s.boat.geometry = boatGeo(color);
}
// the flag is up while the island's owner is here, and down while she is away
export const raiseFlag = (s: Scenery, up: boolean) => { s.flag.userData.up = up; };
const sceneries: Scenery[] = [];
export function waveFlags(list: Scenery[]) { sceneries.length = 0; sceneries.push(...list); }

/* ---------- a little sailing boat, facing +z, its sail in the island's colour ---------- */
const HULL = 0x4fa8e0, TRIM = 0xffffff;
function boatGeo(sail: number) {
  const p: THREE.BufferGeometry[] = [];
  p.push(box(1.0, .2, 2.6, TRIM, 0, -.3, 0));                                             // bottom
  p.push(box(.14, .55, 2.8, HULL, .62, -.25, 0), box(.14, .55, 2.8, HULL, -.62, -.25, 0)); // sides
  p.push(box(1.38, .55, .14, HULL, 0, -.25, -1.4));                                       // stern
  p.push(box(1.0, .55, .3, HULL, 0, -.25, 1.5), box(.62, .55, .3, HULL, 0, -.25, 1.78), box(.26, .5, .26, HULL, 0, -.2, 2.0)); // bow
  p.push(box(.16, .08, 2.84, TRIM, .63, .22, 0), box(.16, .08, 2.84, TRIM, -.63, .22, 0)); // white trim
  p.push(box(1.1, .08, .4, WOOD, 0, -.02, -1.05));                                        // seat
  p.push(box(1.0, .05, 2.4, WOOD2, 0, -.11, 0));                                          // floorboards
  p.push(box(.1, 3.1, .1, WOOD, 0, -.1, .45));                                            // mast
  p.push(box(.07, .07, 1.8, WOOD, 0, .42, -.45));                                         // boom
  for (let i = 0; i < 8; i++) { const d = 1.7 * (1 - i / 8.5); p.push(box(.05, .33, d, sail, 0, .5 + i * .32, .4 - d / 2)); } // a stepped sail
  p.push(box(.03, .2, .36, 0xffc22e, 0, 2.82, .27));                                      // pennant
  return M(p);
}

/* ---------- this child's own island ---------- */
const ownGroup = new THREE.Group(); world.add(ownGroup);
export const own = islandScenery(ownGroup, 0xff6fa5);
own.flag.userData.up = true;
export const boat = { x: DOCK.x, z: DOCK.z, a: DOCK.a, v: 0, y: WATER, docking: false, mesh: own.boat };

// where the islands are, as offsets of their gardens from this child's garden (her own first)
export function setIsles(list: { x: number; z: number }[]) {
  isles = list.length ? list : [{ x: 0, z: 0 }];
  uCount.value = Math.min(4, isles.length);
  isles.slice(0, 4).forEach((o, i) => uIsl.value[i].set(o.x, o.z));
}

/* ---------- sailing ---------- */
const MAX = 5.2, TURN = 1.7;
const wrap = (a: number) => ((a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
// open water: deep enough near every island, clear of every pier, and not too far from them all
function waterOK(x: number, z: number) {
  let near = false;
  for (const o of isles) {
    const lx = x - o.x, lz = z - o.z;
    if (shoreDist(lx, lz) < 5.3) return false;
    if (lx >= PIER.x0 - .9 && lx <= PIER.x1 + .9 && lz >= PIER.z0 && lz <= PIER.z1 + .9) return false;
    if (Math.hypot(lx - N / 2, lz - N / 2) <= 64) near = true;
  }
  return near;
}
// the boat fits here when its middle, bow and stern are all in open water
const boatFree = (x: number, z: number, a: number) => waterOK(x, z) && waterOK(x + Math.sin(a) * 1.7, z + Math.cos(a) * 1.7) && waterOK(x - Math.sin(a) * 1.4, z - Math.cos(a) * 1.4);

// steer towards a point (or let the boat glide to a stop); returns false when it bumped the shore
export function steer(dt: number, tx: number | null, tz: number) {
  boat.docking = false;
  let want = 0;
  if (tx != null) {
    const dx = tx - boat.x, dz = tz - boat.z, d = Math.hypot(dx, dz);
    if (d > 1.2) {
      const df = wrap(Math.atan2(dx, dz) - boat.a), na = boat.a + Math.sign(df) * Math.min(Math.abs(df), TURN * dt);
      if (boatFree(boat.x, boat.z, na)) boat.a = na;
      want = MAX * Math.min(1, d / 6) * Math.max(.25, Math.cos(df));
    }
  }
  boat.v += (want - boat.v) * Math.min(1, dt * (want > boat.v ? 1.2 : .8));
  if (boat.v < .01) return true;
  const nx = boat.x + Math.sin(boat.a) * boat.v * dt, nz = boat.z + Math.cos(boat.a) * boat.v * dt;
  if (boatFree(nx, nz, boat.a)) { boat.x = nx; boat.z = nz; return true; }
  // slide along the shore instead of stopping dead
  if (boatFree(nx, boat.z, boat.a)) { boat.x = nx; boat.v *= .92; return true; }
  if (boatFree(boat.x, nz, boat.a)) { boat.z = nz; boat.v *= .92; return true; }
  boat.v = 0; return false;
}
// close enough to her pier to step off; generous, since the boat cannot always turn into its berth
export const nearDock = () => Math.hypot(boat.x - DOCK.x, boat.z - DOCK.z) < 5.5;

// cx, cz: the middle of the view, in garden cells
export function updateSea(dt: number, now: number, cx: number, cz: number) {
  if (!reduceMotion) { T += dt; uTime.value = T; }
  // the waves follow the view in whole steps of their own grid, so they never seem to slide
  water.position.set(Math.round(cx / CELL) * CELL, WATER, Math.round(cz / CELL) * CELL);
  uOrigin.value.set(water.position.x, water.position.z);
  far.position.set(water.position.x, WATER - .01, water.position.z);
  bed.position.set(water.position.x, -3, water.position.z);
  for (const s of sceneries) {
    const want = s.flag.userData.up === false ? FLAG_DOWN : FLAG_UP;
    s.flag.position.y += (want - s.flag.position.y) * Math.min(1, dt * 1.5);
    s.flag.rotation.y = reduceMotion ? 0 : Math.sin(now * .002 + s.group.position.x) * .25;
  }
  if (boat.docking) {
    const k = Math.min(1, dt * 3);
    boat.x += (DOCK.x - boat.x) * k; boat.z += (DOCK.z - boat.z) * k; boat.a += wrap(DOCK.a - boat.a) * k; boat.v = 0;
  }
  // her boat rides the swell, rocking a little with its slope
  const s = Math.sin(boat.a), c = Math.cos(boat.a);
  boat.y = WATER + wave(boat.x, boat.z) + .05;
  boat.mesh.position.set(boat.x, boat.y, boat.z);
  boat.mesh.rotation.set((wave(boat.x - s, boat.z - c) - wave(boat.x + s, boat.z + c)) * .35, boat.a, (wave(boat.x + c * .6, boat.z - s * .6) - wave(boat.x - c * .6, boat.z + s * .6)) * .4, 'YXZ');
}
waveFlags([own]);
