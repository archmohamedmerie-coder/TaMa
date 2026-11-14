import * as THREE from 'three';
import { TYPES, isBlock, isFlower } from './types';
import { N, voxels, unK } from './world';
import { state } from './save';

export const reduceMotion = !!window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------- renderer & scene ---------- */
export const canvas = document.getElementById('c') as HTMLCanvasElement;
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(42, 1, .5, 400);
const hemi = new THREE.HemisphereLight(0xe6f6ff, 0x8fb86a, 1.7); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1d0, 2.6);
sun.position.set(14, 26, 12); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 70 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = .03;
scene.add(sun);

export const world = new THREE.Group(); world.position.set(-N / 2, 0, -N / 2); scene.add(world);

// ground
(function () {
  const cv = document.createElement('canvas'); cv.width = cv.height = N; const cx = cv.getContext('2d')!;
  for (let x = 0; x < N; x++) for (let z = 0; z < N; z++) { cx.fillStyle = (x + z) % 2 ? '#74c75c' : '#69bd53'; cx.fillRect(x, z, 1, 1); }
  const tex = new THREE.CanvasTexture(cv); tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.NearestFilter; tex.colorSpace = THREE.SRGBColorSpace;
  const top = new THREE.Mesh(new THREE.PlaneGeometry(N, N), new THREE.MeshLambertMaterial({ map: tex }));
  top.rotation.x = -Math.PI / 2; top.position.set(N / 2, 0, N / 2); top.receiveShadow = true; world.add(top);
  const dirt = new THREE.Mesh(new THREE.BoxGeometry(N, 1.2, N), new THREE.MeshLambertMaterial({ color: 0x9a6b3f }));
  dirt.position.set(N / 2, -.61, N / 2); world.add(dirt);
  const sand = new THREE.Mesh(new THREE.BoxGeometry(N + 3, .5, N + 3), new THREE.MeshLambertMaterial({ color: 0xf0dfae }));
  sand.position.set(N / 2, -1.1, N / 2); sand.receiveShadow = true; world.add(sand);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshLambertMaterial({ color: 0x58c3ef }));
  sea.rotation.x = -Math.PI / 2; sea.position.y = -1.15; scene.add(sea);
})();

// clouds
const clouds: THREE.Group[] = [];
(function () {
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  for (let i = 0; i < 5; i++) {
    const g = new THREE.Group();
    [[0, 0, 0, 4, 1.2, 2.4], [2, .3, .4, 3, 1.4, 2], [-2, .1, -.3, 2.6, 1, 1.8]].forEach(c => { const m = new THREE.Mesh(new THREE.BoxGeometry(c[3], c[4], c[5]), mat); m.position.set(c[0], c[1], c[2]); g.add(m); });
    g.position.set(-40 + i * 20, 15 + ((i * 7) % 5), -26 + ((i * 13) % 9) * -2); scene.add(g); clouds.push(g);
  }
})();

/* ---------- materials, geometry, instanced meshes ---------- */
export const baseMat = new THREE.MeshLambertMaterial({ vertexColors: true });
const glowMat = new THREE.MeshLambertMaterial({ vertexColors: true, emissive: 0xffb648, emissiveIntensity: 0 });
export const GEO: Record<string, THREE.BufferGeometry> = {};
const MESH: Record<string, THREE.InstancedMesh> = {};
Object.keys(TYPES).forEach(t => GEO[t] = TYPES[t].geo());

const dummy = new THREE.Object3D(), tint = new THREE.Color();
// A painted piece is drawn from two geometries: the paintable parts in grey shades
// (tinted per instance with the chosen colour) and the parts that keep their own colour.
const SPLIT: Record<string, { paint: THREE.BufferGeometry; keep: THREE.BufferGeometry | null }> = {};
function splitPaint(t: string) {
  const g = GEO[t], keep = (TYPES[t].keep || []).map(h => new THREE.Color(h));
  const pos = g.attributes.position.array, nor = g.attributes.normal.array, col = g.attributes.color.array;
  const A = { p: [] as number[], n: [] as number[], c: [] as number[] }, B = { p: [] as number[], n: [] as number[], c: [] as number[] };
  let maxL = 0;
  for (let i = 0; i < g.attributes.position.count; i++) {
    const r = col[i * 3], gr = col[i * 3 + 1], bl = col[i * 3 + 2];
    const kept = keep.some(k => Math.abs(k.r - r) < 1e-4 && Math.abs(k.g - gr) < 1e-4 && Math.abs(k.b - bl) < 1e-4);
    const o = kept ? B : A;
    o.p.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]); o.n.push(nor[i * 3], nor[i * 3 + 1], nor[i * 3 + 2]);
    if (kept) o.c.push(r, gr, bl);
    else { const l = .2126 * r + .7152 * gr + .0722 * bl; maxL = Math.max(maxL, l); o.c.push(l, l, l); }
  }
  for (let i = 0; i < A.c.length; i++) A.c[i] /= maxL || 1;
  const make = (o: typeof A) => {
    const q = new THREE.BufferGeometry();
    q.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3));
    q.setAttribute('normal', new THREE.Float32BufferAttribute(o.n, 3));
    q.setAttribute('color', new THREE.Float32BufferAttribute(o.c, 3));
    return q;
  };
  return { paint: make(A), keep: B.p.length ? make(B) : null };
}
function fill(key: string, geo: THREE.BufferGeometry, t: string, list: number[], painted: boolean) {
  let m = MESH[key];
  if (!m || m.userData.cap < list.length) {
    if (m) { world.remove(m); m.dispose(); }
    const cap = Math.max(64, Math.pow(2, Math.ceil(Math.log2(list.length + 1))));
    m = new THREE.InstancedMesh(geo, TYPES[t].glow ? glowMat : baseMat, cap);
    m.userData.cap = cap; m.frustumCulled = false; m.castShadow = !TYPES[t].flat; m.receiveShadow = true;
    world.add(m); MESH[key] = m;
  }
  list.forEach((k, i) => {
    const c = unK(k), v = voxels.get(k)!;
    dummy.position.set(c[0] + .5, c[1] + .5, c[2] + .5); dummy.rotation.set(0, (v.r || 0) * Math.PI / 4, 0); dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix);
    const j = isBlock(t) ? .95 + ((c[0] * 7 + c[1] * 13 + c[2] * 29) % 10) / 100 : 1;
    m.setColorAt(i, painted ? tint.setHex(v.c!).multiplyScalar(j) : tint.setRGB(j, j, j));
  });
  m.count = list.length; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
}
export function rebuild(t: string) {
  const plain: number[] = [], painted: number[] = [];
  voxels.forEach((v, k) => { if (v.t === t) (v.c == null ? plain : painted).push(k); });
  fill(t, GEO[t], t, plain, false);
  if (painted.length || MESH[t + '#p']) {
    const s = SPLIT[t] || (SPLIT[t] = splitPaint(t));
    fill(t + '#p', s.paint, t, painted, true);
    if (s.keep) fill(t + '#k', s.keep, t, painted, false);
  }
}

// cell highlight under the pointer
export const ghost = new THREE.Mesh(new THREE.BoxGeometry(1.03, 1.03, 1.03), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .38, depthWrite: false }));
ghost.visible = false; world.add(ghost);

/* ---------- living garden: butterflies, lantern lights ---------- */
const flies: THREE.Group[] = [];
const flyGeo = new THREE.PlaneGeometry(.2, .26); flyGeo.translate(.1, 0, 0);
const FLY_COLORS = [0xff8a3d, 0xffd23f, 0xff6fa5, 0x8f6bff, 0x4fc3f7];
function makeFly(i: number) {
  const g = new THREE.Group(), mat = new THREE.MeshBasicMaterial({ color: FLY_COLORS[i % 5], side: THREE.DoubleSide });
  const a = new THREE.Mesh(flyGeo, mat), c = new THREE.Mesh(flyGeo, mat); c.scale.x = -1;
  g.add(a, c); g.userData = { a, c, target: new THREE.Vector3(), phase: i * 1.7 };
  g.position.set(N / 2 + (i % 3) - 1, 2 + i * .2, N / 2); world.add(g); return g;
}
let flowerCells: [number, number, number][] = [];
function newTarget(f: THREE.Group) {
  if (flowerCells.length) { const c = flowerCells[Math.floor(Math.random() * flowerCells.length)]; f.userData.target.set(c[0] + .5, c[1] + .9 + Math.random() * .8, c[2] + .5); }
  else f.userData.target.set(Math.random() * N, 2, Math.random() * N);
}
const lampLights: THREE.PointLight[] = [];
for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xffc56b, 0, 7, 1.6); world.add(l); lampLights.push(l); }
export function updateLife() {
  flowerCells = []; const lamps: [number, number, number][] = [];
  voxels.forEach((v, k) => { if (isFlower(v.t)) flowerCells.push(unK(k)); else if (v.t === 'lantern') lamps.push(unK(k)); });
  const want = Math.min(9, Math.floor(flowerCells.length / 2));
  while (flies.length < want) { const f = makeFly(flies.length); newTarget(f); flies.push(f); }
  while (flies.length > want) { world.remove(flies.pop()!); }
  lampLights.forEach((l, i) => { const c = lamps[i]; if (c && state.night) { l.position.set(c[0] + .5, c[1] + 1.2, c[2] + .5); l.intensity = 14; } else l.intensity = 0; });
}
export function applyNight() {
  document.body.classList.toggle('night', state.night);
  hemi.intensity = state.night ? .55 : 1.7; hemi.color.set(state.night ? 0x8fa0ff : 0xe6f6ff);
  sun.intensity = state.night ? .7 : 2.6; sun.color.set(state.night ? 0xa9b8ff : 0xfff1d0);
  glowMat.emissiveIntensity = state.night ? .9 : 0;
  updateLife();
}

// clouds drifting and butterflies flying; skipped when the user prefers reduced motion
export function animate(dt: number, now: number) {
  clouds.forEach(c => { c.position.x += dt * .6; if (c.position.x > 60) c.position.x = -60; });
  flies.forEach(f => {
    const u = f.userData, to = u.target.clone().sub(f.position), d = to.length();
    if (d < .25) newTarget(f); else { to.multiplyScalar(Math.min(1, dt * 1.3 / d)); f.position.add(to); f.rotation.y = Math.atan2(-to.z, to.x); }
    f.position.y += Math.sin(now * .004 + u.phase) * .004;
    const w = Math.sin(now * .02 + u.phase) * .9; u.a.rotation.z = w; u.c.rotation.z = -w;
  });
}

export function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 52 : 42; camera.updateProjectionMatrix();
}
