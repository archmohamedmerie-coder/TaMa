import * as THREE from 'three';
import { b, M } from './types';
import { N } from './world';
import { world, baseMat, reduceMotion } from './render';

/* ---------- the island in its sea ----------
   The garden is the middle of an island. Around it lies a sandy beach that slopes into shallow water,
   then the open sea. A wooden pier runs out from the front of the island, and her boat waits beside it.
   All positions here are in garden cells, like the voxels: the garden covers 0..N on x and z. */

export const WATER = -.45;                 // the height of the calm sea
const BEACH_OUT = 9;                       // how far the sand reaches out under the water
const DRY = 3.1;                           // how far out the sand is dry enough to walk on
export const SEA_R = 64;                   // how far from the island the boat may sail
export const PIER = { x0: N / 2 - 1, x1: N / 2 + 1, z0: N, z1: N + 11 };
export const DOCK = { x: N / 2 + 2.4, z: N + 8.6, a: 0 };   // where the boat is moored, its bow out to sea
export const STEP = { x: N / 2 + .45, z: N + 8.6 };          // the spot on the pier beside the boat

// how far a spot is from the edge of the garden (0 inside it)
export const shoreDist = (x: number, z: number) => Math.hypot(Math.max(-x, 0, x - N), Math.max(-z, 0, z - N));
// the height of the sand at that distance: a gentle dry beach, then a steeper slope under the water
const sandH = (d: number) => d <= 0 ? 0 : d <= 3 ? -.06 - .1 * d : -.36 - .25 * (d - 3);
export const onPier = (x: number, z: number) => x >= PIER.x0 && x <= PIER.x1 && z >= PIER.z0 && z <= PIER.z1;
// where she can walk outside the garden: the dry sand and the pier
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

const uTime = { value: 0 };
const box = (w: number, h: number, d: number, c: number, x: number, y0: number, z: number) => b(w, h, d, c, x, y0 + .5, z);

/* ---------- sand ---------- */
{
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
  const sand = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
  sand.receiveShadow = true; world.add(sand);
}

/* ---------- water: gentle waves, turquoise over the sand, deep blue further out, foam along the shore ---------- */
{
  const SIZE = 200;
  const g = new THREE.PlaneGeometry(SIZE, SIZE, 100, 100); g.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, flatShading: true, shininess: 70, specular: 0x9fdcff });
  mat.onBeforeCompile = sh => {
    sh.uniforms.uTime = uTime;
    sh.vertexShader = 'uniform float uTime;\nvarying float vD;\n' + SWELL + '\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vec2 lp = transformed.xz;
      // the swell fades out towards the edge, where it meets the flat far sea
      transformed.y += swell(lp, uTime) * (1.0 - smoothstep(70.0, 95.0, length(lp)));
      vec2 q = lp + vec2(${N / 2}.0);
      vD = length(max(max(-q, vec2(0.0)), q - vec2(${N}.0)));`);
    sh.fragmentShader = 'uniform float uTime;\nvarying float vD;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      float shallow = 1.0 - smoothstep(3.0, 14.0, vD);
      diffuseColor.rgb = mix(vec3(.023, .212, .552), vec3(.115, .672, .716), shallow);
      float foam = (1.0 - smoothstep(0.0, .45, abs(vD - (3.45 + .18 * sin(uTime * 1.3))))) * .8;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), foam);
      diffuseColor.a = max(mix(.93, .6, shallow), foam);`);
  };
  const water = new THREE.Mesh(g, mat); water.position.set(N / 2, WATER, N / 2); water.renderOrder = 1; world.add(water);
  // the open sea beyond, flat out to the horizon
  const far = new THREE.Mesh(new THREE.RingGeometry(95, 900, 64, 1), new THREE.MeshLambertMaterial({ color: 0x2a7fc4 }));
  far.rotation.x = -Math.PI / 2; far.position.set(N / 2, WATER - .01, N / 2); world.add(far);
  // the sea floor, seen dimly through the deep water
  const bed = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshLambertMaterial({ color: 0x1d5f96 }));
  bed.rotation.x = -Math.PI / 2; bed.position.set(N / 2, -3, N / 2); world.add(bed);
}

/* ---------- the pier and the island's flag ---------- */
const WOOD = 0xb98250, WOOD2 = 0xa8743f, DARKWOOD = 0x7a5232;
{
  const parts: THREE.BufferGeometry[] = [], cx = N / 2;
  for (let z = PIER.z0 + .25, i = 0; z < PIER.z1; z += .5, i++) parts.push(box(2.1, .12, .44, i % 2 ? WOOD : WOOD2, cx, -.12, z));
  parts.push(box(.16, .16, PIER.z1 - PIER.z0, DARKWOOD, cx - .85, -.28, (PIER.z0 + PIER.z1) / 2), box(.16, .16, PIER.z1 - PIER.z0, DARKWOOD, cx + .85, -.28, (PIER.z0 + PIER.z1) / 2));
  for (let z = PIER.z0 + 2; z <= PIER.z1; z += 2.5) parts.push(box(.24, 3.25, .24, DARKWOOD, cx - 1.02, -3, z), box(.24, 3.25, .24, DARKWOOD, cx + 1.02, -3, z));
  // posts at the far end to tie the boat to
  parts.push(box(.3, .4, .3, DARKWOOD, cx + .82, 0, PIER.z1 - .35), box(.3, .4, .3, DARKWOOD, cx - .82, 0, PIER.z1 - .35));
  // the flagpole stands on the sand beside the start of the pier
  parts.push(box(.12, 4.2, .12, 0xf4f1ea, cx - 1.6, groundAt(cx - 1.6, N + 1.2), N + 1.2), box(.26, .1, .26, 0xffc22e, cx - 1.6, groundAt(cx - 1.6, N + 1.2) + 4.2, N + 1.2));
  const pier = new THREE.Mesh(M(parts), baseMat); pier.castShadow = pier.receiveShadow = true; world.add(pier);
}
const flag = new THREE.Group();
{
  const g = M([box(1.3, .8, .05, 0xff6fa5, .65, 0, 0), box(.36, .36, .07, 0xffffff, .65, .22, 0)]);
  const m = new THREE.Mesh(g, baseMat); m.castShadow = true; flag.add(m);
  flag.position.set(N / 2 - 1.6, groundAt(N / 2 - 1.6, N + 1.2) + 3.25, N + 1.2); world.add(flag);
}

/* ---------- her boat: a little sailing boat, facing +z ---------- */
const HULL = 0x4fa8e0, TRIM = 0xffffff, SAIL = 0xff8ab8;
function boatGeo() {
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
  for (let i = 0; i < 8; i++) { const d = 1.7 * (1 - i / 8.5); p.push(box(.05, .33, d, SAIL, 0, .5 + i * .32, .4 - d / 2)); } // a stepped sail
  p.push(box(.03, .2, .36, 0xffc22e, 0, 2.82, .27));                                      // pennant
  return M(p);
}
export const boat = { x: DOCK.x, z: DOCK.z, a: DOCK.a, v: 0, y: WATER, docking: false, mesh: new THREE.Mesh(boatGeo(), baseMat) };
boat.mesh.castShadow = true; world.add(boat.mesh);

/* ---------- sailing ---------- */
const MAX = 5.2, TURN = 1.7;
const wrap = (a: number) => ((a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
// open water: deep enough, clear of the pier, and not past the edge of the sea
const waterOK = (x: number, z: number) => shoreDist(x, z) >= 5.3 && Math.hypot(x - N / 2, z - N / 2) <= SEA_R
  && !(x >= PIER.x0 - .9 && x <= PIER.x1 + .9 && z >= PIER.z0 && z <= PIER.z1 + .9);
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
// close enough to the pier to step off; generous, since the boat cannot always turn into its berth
export const nearDock = () => Math.hypot(boat.x - DOCK.x, boat.z - DOCK.z) < 5.5;

export function updateSea(dt: number, now: number) {
  if (!reduceMotion) { T += dt; uTime.value = T; flag.rotation.y = Math.sin(now * .002) * .25; }
  if (boat.docking) {
    const k = Math.min(1, dt * 3);
    boat.x += (DOCK.x - boat.x) * k; boat.z += (DOCK.z - boat.z) * k; boat.a += wrap(DOCK.a - boat.a) * k; boat.v = 0;
  }
  // the boat rides the swell, rocking a little with its slope
  const s = Math.sin(boat.a), c = Math.cos(boat.a);
  boat.y = WATER + wave(boat.x, boat.z) + .05;
  boat.mesh.position.set(boat.x, boat.y, boat.z);
  boat.mesh.rotation.set((wave(boat.x - s, boat.z - c) - wave(boat.x + s, boat.z + c)) * .35, boat.a, (wave(boat.x + c * .6, boat.z - s * .6) - wave(boat.x - c * .6, boat.z + s * .6)) * .4, 'YXZ');
}
