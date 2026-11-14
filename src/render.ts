import * as THREE from 'three';
import { TYPES, isBlock, isFlower, fenceGeo } from './types';
import { N, K, inB, voxels, unK, view, cellsOf } from './world';
import { state } from './save';

export const reduceMotion = !!window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------- renderer & scene ---------- */
export const canvas = document.getElementById('c') as HTMLCanvasElement;
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(42, 1, .2, 400);
const hemi = new THREE.HemisphereLight(0xe6f6ff, 0x8fb86a, 1.7); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1d0, 2.6);
sun.position.set(20, 26, 7); sun.castShadow = true;
const touch = !!window.matchMedia && matchMedia('(pointer:coarse)').matches;
sun.shadow.mapSize.set(touch ? 1024 : 2048, touch ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 90 });
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
const glassMat = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: .4, depthWrite: false, emissive: 0xffd98a, emissiveIntensity: 0 });
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
/* ---------- redrawing ---------- */
// The cells of every kind of piece, gathered once and reused until the world next changes.
// 'f:' + type lists the cells where that floor lies under another piece.
let index: Map<string, number[]> | null = null;
function byType(t: string): number[] {
  if (!index) {
    const m = index = new Map<string, number[]>();
    const add = (key: string, k: number) => { const l = m.get(key); if (l) l.push(k); else m.set(key, [k]); };
    voxels.forEach((v, k) => { if (v.of == null) add(v.t, k); if (v.f) add('f:' + v.f, k); });
  }
  return index.get(t) || [];
}
// redraw every kind of piece that changed
export function flushDirty(dirty: Set<string>) {
  const now = performance.now();
  // pieces still growing in are redrawn each frame until they reach full size
  pops.forEach((t0, k) => { const v = voxels.get(k); if (!v || now - t0 > POP_MS) pops.delete(k); if (v) dirty.add(v.t); });
  if (!dirty.size) return;
  index = null;
  dirty.forEach(t => rebuild(t)); dirty.clear();
}
// newly placed pieces pop in: they grow from 60% to full size with a little overshoot
const POP_MS = 220, pops = new Map<number, number>();
export function pop(keys: number[]) { if (reduceMotion) return; const now = performance.now(); keys.forEach(k => pops.set(k, now)); }
function popScale(k: number) {
  const t0 = pops.get(k); if (t0 == null) return 1;
  const t = Math.min(1, (performance.now() - t0) / POP_MS) - 1;
  return .6 + .4 * (1 + 2.70158 * t * t * t + 1.70158 * t * t);
}
// where the middle of a piece is drawn: its cell, its own offset, or the finger carrying it
const spot = { x: 0, y: 0, z: 0 };
function place(k: number, c: number[], v: { o?: [number, number] }) {
  const d = view.drag;
  if (d && d.k === k) { spot.x = d.x; spot.y = d.y; spot.z = d.z; }
  else { spot.x = c[0] + .5 + (v.o ? v.o[0] : 0); spot.y = c[1]; spot.z = c[2] + .5 + (v.o ? v.o[1] : 0); }
  return spot;
}
// The point a piece grows from when its size changes, in its own space: the floor under it,
// the ceiling for a hanging light, and the wall behind it for a piece that hangs on a wall.
const PIVOT: Record<string, number[]> = {};
function pivot(t: string): number[] {
  if (PIVOT[t]) return PIVOT[t];
  const T = TYPES[t]; let p = [0, -.5, 0];
  if (T.hang) p = [0, .5, 0];
  else if (T.thin) { const g = GEO[t]; if (!g.boundingBox) g.computeBoundingBox(); p = [0, (g.boundingBox!.min.y + g.boundingBox!.max.y) / 2, -.5]; }
  return PIVOT[t] = p;
}
// the middle of a piece's cell box when it is drawn at size s, turned by angle a
function sized(q: { x: number; y: number; z: number }, t: string, s: number, a: number) {
  const p = pivot(t), k = 1 - s;
  dummy.position.set(q.x + p[2] * Math.sin(a) * k, q.y + .5 + p[1] * k, q.z + p[2] * Math.cos(a) * k);
}
function fill(key: string, geo: THREE.BufferGeometry, t: string, list: number[], painted: boolean, mat?: THREE.Material, floor?: boolean, fixed?: boolean) {
  let m = MESH[key];
  if (!m || m.userData.cap < list.length) {
    if (m) { world.remove(m); m.dispose(); }
    const cap = Math.max(64, Math.pow(2, Math.ceil(Math.log2(list.length + 1))));
    m = new THREE.InstancedMesh(geo, mat || (TYPES[t].glow ? glowMat : baseMat), cap);
    m.userData.cap = cap; m.frustumCulled = false; m.castShadow = !TYPES[t].flat && mat !== glassMat; m.receiveShadow = true;
    world.add(m); MESH[key] = m;
  }
  list.forEach((k, i) => {
    const c = unK(k), v = voxels.get(k)!;
    // a floor under a piece keeps its own direction and is never hidden with the piece; a new piece grows up from the floor
    const z = view.sizing && view.sizing.k === k ? view.sizing.s : v.s || 1;
    const s = floor ? 1 : view.hidden.has(k) ? 0 : popScale(k) * z;
    if (floor) dummy.position.set(c[0] + .5, c[1] + .5, c[2] + .5);
    else sized(place(k, c, v), t, s, fixed ? 0 : (v.r || 0) * Math.PI / 4);
    dummy.rotation.set(0, floor || fixed ? 0 : (v.r || 0) * Math.PI / 4, 0); dummy.scale.setScalar(s); dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix);
    const j = isBlock(t) ? .95 + ((c[0] * 7 + c[1] * 13 + c[2] * 29) % 10) / 100 : 1;
    m.setColorAt(i, painted || (fixed && v.c != null) ? tint.setHex(v.c!).multiplyScalar(j) : tint.setRGB(j, j, j));
  });
  m.visible = !(view.hideRoofs && !!TYPES[t].roof);
  m.userData.keys = list;
  m.count = list.length; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
}
// show or hide every roof piece
export function applyRoofs() {
  for (const key in MESH) MESH[key].visible = !(view.hideRoofs && !!TYPES[key.split(/[#@]/)[0]].roof);
}
// Fences reach towards neighbouring fences, gates and walls, so a run needs no turning by hand.
// One mesh per combination of sides joined; a fence on its own stays a straight piece.
const FENCE: Record<number, THREE.BufferGeometry> = {};
function rebuildFence() {
  const groups: number[][] = []; for (let i = 0; i < 16; i++) groups.push([]);
  const joins = (x: number, y: number, z: number) => { const v = inB(x, y, z) ? voxels.get(K(x, y, z)) : undefined; return !!v && (v.t === 'fence' || v.t === 'gate' || isBlock(v.t)); };
  byType('fence').forEach(k => {
    const v = voxels.get(k)!, c = unK(k);
    const mask = (joins(c[0] + 1, c[1], c[2]) ? 1 : 0) | (joins(c[0] - 1, c[1], c[2]) ? 2 : 0) | (joins(c[0], c[1], c[2] + 1) ? 4 : 0) | (joins(c[0], c[1], c[2] - 1) ? 8 : 0);
    groups[mask || (v.r & 2 ? 12 : 3)].push(k);
  });
  for (let m = 1; m < 16; m++) if (groups[m].length || MESH['fence@' + m]) fill('fence@' + m, FENCE[m] || (FENCE[m] = fenceGeo(m)), 'fence', groups[m], false, undefined, false, true);
}
function rebuildBase(t: string) {
  if (t === 'fence') { rebuildFence(); return; }
  const plain: number[] = [], painted: number[] = [], under = byType('f:' + t);   // under: a floor lying beneath another piece
  byType(t).forEach(k => (voxels.get(k)!.c == null ? plain : painted).push(k));
  if (under.length || MESH[t + '#u']) fill(t + '#u', GEO[t], t, under, false, undefined, true);
  fill(t, GEO[t], t, plain, false);
  if (painted.length || MESH[t + '#p']) {
    const s = SPLIT[t] || (SPLIT[t] = splitPaint(t));
    fill(t + '#p', s.paint, t, painted, true);
    if (s.keep) fill(t + '#k', s.keep, t, painted, false);
  }
}

/* ---------- the chosen piece: a yellow frame around it, so it stands apart from its neighbours ---------- */
const selGroup = new THREE.Group();
{
  const box = new THREE.BoxGeometry(1, 1, 1);
  selGroup.add(new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xffc22e, transparent: true, opacity: .2, depthWrite: false })),
    new THREE.LineSegments(new THREE.EdgesGeometry(box), new THREE.LineBasicMaterial({ color: 0xff9a1e })));
  selGroup.visible = false; world.add(selGroup);
}
// frame the piece anchored at k (or nothing); returns false when there is no such piece
export function showSelection(k: number | null): boolean {
  const v = k == null ? undefined : voxels.get(k);
  if (k == null || !v || v.of != null) { selGroup.visible = false; return false; }
  const g = GEO[v.t]; if (!g.boundingBox) g.computeBoundingBox();
  const bb = g.boundingBox!, z = view.sizing && view.sizing.k === k ? view.sizing.s : v.s || 1, q = place(k, unK(k), v);
  sized(q, v.t, z, (v.r || 0) * Math.PI / 4); selGroup.position.copy(dummy.position); selGroup.rotation.y = (v.r || 0) * Math.PI / 4; selGroup.scale.setScalar(z);
  for (const c of selGroup.children) {
    c.position.set((bb.min.x + bb.max.x) / 2, (bb.min.y + bb.max.y) / 2, (bb.min.z + bb.max.z) / 2);
    c.scale.set(bb.max.x - bb.min.x + .1, bb.max.y - bb.min.y + .1, bb.max.z - bb.min.z + .1);
  }
  selGroup.visible = true; return true;
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
// the point the lamps are chosen around; main.ts keeps it at the camera target
export const lightAt = new THREE.Vector3();
export function updateLife() {
  flowerCells = []; const lamps: number[][] = [];   // x, y, z and how far above the cell the light sits
  voxels.forEach((v, k) => { if (isFlower(v.t)) flowerCells.push(unK(k)); else if (TYPES[v.t].glow && v.of == null) { const c = unK(k); lamps.push([c[0] + (v.o ? v.o[0] : 0), c[1], c[2] + (v.o ? v.o[1] : 0), TYPES[v.t].hang ? .3 : 1.2]); } });
  // only four lights are lit: those nearest the middle of the view
  const cx = lightAt.x + N / 2, cz = lightAt.z + N / 2, far = (c: number[]) => (c[0] - cx) ** 2 + (c[2] - cz) ** 2;
  lamps.sort((a, b) => far(a) - far(b));
  const want = Math.min(9, Math.floor(flowerCells.length / 2));
  while (flies.length < want) { const f = makeFly(flies.length); newTarget(f); flies.push(f); }
  while (flies.length > want) { world.remove(flies.pop()!); }
  lampLights.forEach((l, i) => { const c = lamps[i]; if (c && state.night) { l.position.set(c[0] + .5, c[1] + c[3], c[2] + .5); l.intensity = 14; } else l.intensity = 0; });
}
export function applyNight() {
  document.body.classList.toggle('night', state.night);
  hemi.intensity = state.night ? .55 : 1.7; hemi.color.set(state.night ? 0x8fa0ff : 0xe6f6ff);
  sun.intensity = state.night ? .7 : 2.6; sun.color.set(state.night ? 0xa9b8ff : 0xfff1d0);
  glowMat.emissiveIntensity = state.night ? .9 : 0;
  // windows glow warm at night
  glassMat.emissiveIntensity = state.night ? .85 : 0; glassMat.opacity = state.night ? .75 : .4;
  updateLife();
}

// clouds drifting and butterflies flying; skipped when the user prefers reduced motion
function animals(now: number) {
  for (const key in MESH) {
    const t = key.split(/[#@]/)[0], m = MESH[key]; if (!TYPES[t].alive || !m.count) continue;
    const keys: number[] = m.userData.keys;
    for (let i = 0; i < m.count; i++) {
      const k = keys[i], c = unK(k), v = voxels.get(k); if (!v || view.hidden.has(k) || pops.has(k)) continue;
      const ph = (k * 37) % 100;
      // a slow look around, and now and then a small hop
      const hop = Math.pow(Math.max(0, Math.sin(now * .0021 + ph)), 14) * .14;
      const z = view.sizing && view.sizing.k === k ? view.sizing.s : v.s || 1;
      const q = place(k, c, v); dummy.position.set(q.x, q.y + .5 * z + hop * z, q.z);
      dummy.rotation.set(0, (v.r || 0) * Math.PI / 4 + Math.sin(now * .0009 + ph) * .3, 0); dummy.scale.setScalar(z); dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  }
}
export function animate(dt: number, now: number) {
  animals(now);
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
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = view.fp ? 74 : w < h ? 52 : 42; camera.updateProjectionMatrix();
}

const roomGhost = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .35, depthWrite: false }));
roomGhost.visible = false; world.add(roomGhost);
export function setRoomPreview(r: { x0: number; z0: number; x1: number; z1: number; h: number } | null) {
  roomGhost.visible = !!r; if (!r) return;
  const w = r.x1 - r.x0 + 1, d = r.z1 - r.z0 + 1;
  roomGhost.scale.set(w + .04, r.h, d + .04);
  roomGhost.position.set(r.x0 + w / 2, r.h / 2, r.z0 + d / 2);
  // too small to be a room: show it in red
  roomGhost.material.color.set(w < 2 || d < 2 ? 0xff4d6d : 0xffffff);
}

/* ---------- glass panes and door leaves ---------- */
const XGEO: Record<string, THREE.BufferGeometry> = {};
const xgeo = (key: string, make: () => THREE.BufferGeometry) => XGEO[key] || (XGEO[key] = make());
// the extra parts of a type, so the palette thumbnails can show them too
export function extras(t: string) {
  const T = TYPES[t], out: { geo: THREE.BufferGeometry; mat: THREE.Material }[] = [];
  if (T.glass) out.push({ geo: xgeo(t + '#g', T.glass), mat: glassMat });
  T.leaves?.forEach((l, i) => out.push({ geo: xgeo(t + '#l' + i, l.geo), mat: l.glass ? glassMat : baseMat }));
  return out;
}
interface Door { t: string; k: number; idx: number; open: number; shown: number; x: number; y: number; z: number; r: number; cx: number; cz: number }
let doors: Door[] = [];
export function rebuild(t: string) {
  rebuildBase(t);
  const T = TYPES[t]; if (!T.glass && !T.leaves) return;
  const all = byType(t);
  if (T.glass) fill(t + '#g', xgeo(t + '#g', T.glass), t, all, false, glassMat);
  if (!T.leaves) return;
  T.leaves.forEach((l, i) => fill(t + '#l' + i, xgeo(t + '#l' + i, l.geo), t, all, false, l.glass ? glassMat : baseMat));
  // the leaves were just redrawn closed; remember how far each door was open so it swings back
  const was = new Map(doors.filter(d => d.t === t).map(d => [d.k, d.open]));
  doors = doors.filter(d => d.t !== t).concat(all.map((k, idx) => {
    const c = unK(k), v = voxels.get(k)!, cells = cellsOf(c[0], c[1], c[2], t, v.r);
    let cx = 0, cz = 0; cells.forEach(p => { cx += p[0] + .5; cz += p[2] + .5; });
    return { t, k, idx, open: was.get(k) || 0, shown: 0, x: c[0], y: c[1], z: c[2], r: v.r, cx: cx / cells.length, cz: cz / cells.length };
  }));
}
const mA = new THREE.Matrix4(), mB = new THREE.Matrix4();
// doors open while the girl is close, and close behind her
export function updateDoors(dt: number, hx: number, hy: number, hz: number) {
  for (const d of doors) {
    const near = Math.abs(hy - d.y) < 1.6 && Math.hypot(hx - d.cx, hz - d.cz) < 1.7;
    d.open += ((near ? 1 : 0) - d.open) * Math.min(1, dt * 7);
    if (Math.abs(d.open - d.shown) < .002) continue;
    d.shown = d.open;
    TYPES[d.t].leaves!.forEach((l, i) => {
      const m = MESH[d.t + '#l' + i]; if (!m) return;
      mA.makeRotationY(d.r * Math.PI / 4).setPosition(d.x + .5, d.y + .5, d.z + .5);
      if (l.top != null) {
        const top = -.5 + l.top;
        mA.multiply(mB.makeTranslation(0, top, 0)).multiply(mB.makeScale(1, 1 - d.open * .92, 1)).multiply(mB.makeTranslation(0, -top, 0));
      } else if (l.hinge) {
        mA.multiply(mB.makeTranslation(l.hinge[0], 0, l.hinge[1])).multiply(mB.makeRotationY((l.dir || 1) * d.open * 1.45)).multiply(mB.makeTranslation(-l.hinge[0], 0, -l.hinge[1]));
      }
      m.setMatrixAt(d.idx, mA); m.instanceMatrix.needsUpdate = true;
    });
  }
}

/* ---------- faint boxes in place of walls faded for the view inside ---------- */
const GHOSTS = 600;
const wallGhost = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .16, depthWrite: false }), GHOSTS);
wallGhost.count = 0; wallGhost.frustumCulled = false; world.add(wallGhost);
export function setGhostCells(keys: number[]) {
  const n = Math.min(GHOSTS, keys.length);
  for (let i = 0; i < n; i++) { const c = unK(keys[i]); dummy.position.set(c[0] + .5, c[1] + .5, c[2] + .5); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); wallGhost.setMatrixAt(i, dummy.matrix); }
  wallGhost.count = n; wallGhost.instanceMatrix.needsUpdate = true;
}

/* ---------- quality that adapts to the device ---------- */
// Called when frames are running slow. First step: fewer pixels. Second step: no shadows. Returns false when nothing is left to give up.
let qualityStep = 0;
export function lowerQuality(): boolean {
  if (qualityStep === 0) { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25)); resize(); }
  else if (qualityStep === 1) {
    renderer.shadowMap.enabled = false; sun.castShadow = false;
    scene.traverse(o => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
  } else return false;
  qualityStep++;
  return true;
}
