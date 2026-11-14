import * as THREE from 'three';

export type Cat = 'cube' | 'flower' | 'decor' | 'open' | 'house' | 'furniture' | 'bath' | 'light' | 'animal' | 'street';
export interface PieceType {
  name: string;
  cat: Cat;
  geo: () => THREE.BufferGeometry;
  stars?: number;
  flat?: boolean;
  glow?: boolean;
  cells?: number[][];  // for a piece that does not fill its whole box: the cells it does fill, as [x, y, z] offsets, anchor first
  clears?: number[][]; // cells where a floor slab gives way when the piece is placed
  hang?: boolean;      // a ceiling light: it goes just under the first thing above the tapped spot
  thin?: boolean;      // hangs on the wall: the girl can walk past it
  size?: [number, number, number]; // cells along its own x, y and z when larger than one cell
  color?: number;    // the main colour of a cube, passed on to an opening made in it
  opening?: boolean; // a window or door: tapping a wall puts it in the wall instead of beside it
  door?: boolean;    // the girl can walk through it, and its leaves open when she is near
  glass?: () => THREE.BufferGeometry; // see-through panes, drawn separately
  // moving parts: a leaf swings around a hinge (x, z in the piece's own space); with top set it rolls up instead
  leaves?: { geo: () => THREE.BufferGeometry; glass?: boolean; hinge?: [number, number]; dir?: number; top?: number }[];
  hidden?: boolean;  // not offered in the palette
  alive?: boolean;   // an animal: it shuffles and hops where it stands
  roof?: boolean; // hidden while the player looks inside the houses
  solid?: boolean; // fills its cell like a cube: other pieces can be built on and beside it
  keep?: number[]; // part colours that paint does not cover
}
type V3 = [number, number, number];
type Geo = THREE.BufferGeometry;

/* ---------- geometry helpers ---------- */
function P(geo: Geo, color: number, pos: V3, rot?: V3): Geo {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const m = new THREE.Matrix4().compose(new THREE.Vector3(pos[0], pos[1], pos[2]),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rot ? rot[0] : 0, rot ? rot[1] : 0, rot ? rot[2] : 0)), new THREE.Vector3(1, 1, 1));
  g.applyMatrix4(m);
  const n = g.attributes.position.count, c = new Float32Array(n * 3), col = new THREE.Color(color);
  for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
// box with its bottom at height yb above the cell floor
export const b = (w: number, h: number, d: number, color: number, x: number, yb: number, z: number, rot?: V3) =>
  P(new THREE.BoxGeometry(w, h, d), color, [x, -0.5 + yb + h / 2, z], rot);
const cyl = (rt: number, rb: number, h: number, color: number, yb: number, seg?: number) =>
  P(new THREE.CylinderGeometry(rt, rb, h, seg || 8), color, [0, -0.5 + yb + h / 2, 0]);
export function M(parts: Geo[]): Geo {
  let n = 0; parts.forEach(p => n += p.attributes.position.count);
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), col = new Float32Array(n * 3); let o = 0;
  parts.forEach(p => {
    pos.set(p.attributes.position.array as ArrayLike<number>, o);
    nor.set(p.attributes.normal.array as ArrayLike<number>, o);
    col.set(p.attributes.color.array as ArrayLike<number>, o);
    o += p.attributes.position.count * 3; p.dispose();
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeBoundingBox(); g.computeBoundingSphere();
  return g;
}
const cube = (color: number) => M([b(1, 1, 1, color, 0, 0, 0)]);
const STEM = 0x3c9a45, LEAF = 0x57b85a;
const WALL = 0xf6f2ea, GLASS = 0x8fd3f4, ROOF = 0xc8553d, ROOF2 = 0xb5482f, DARK = 0x2b2140, STEPS = [0, 1, 2, 3];
const WOOD = 0xb07a45, WOOD2 = 0x8a5a33, BOOKS = [0xe5383b, 0xffd24a, 0x4fb35a, 0x3a66d6, 0x9b6fd6];
const stem = (x: number, z: number, h: number, t?: number): Geo[] =>
  [b(t || .06, h, t || .06, STEM, x, 0, z), b(.16, .04, .09, LEAF, x + .09, h * .4, z)];
const SPOTS = [[-.22, -.16, .34], [.2, -.04, .46], [-.03, .22, .28]];
const grow = (g: Geo) => { g.translate(0, .5, 0); g.scale(1.25, 1.35, 1.25); g.translate(0, -.5, 0); g.computeBoundingBox(); g.computeBoundingSphere(); return g; };
const cluster = (fn: (x: number, z: number, h: number) => Geo[]) => grow(M(SPOTS.flatMap(s => fn(s[0], s[1], s[2]))));
const petals4 = (x: number, z: number, y: number, color: number, r: number, s: number): Geo[] =>
  [b(s, .05, s, color, x + r, y, z), b(s, .05, s, color, x - r, y, z), b(s, .05, s, color, x, y, z + r), b(s, .05, s, color, x, y, z - r)];

/* ---------- openings: wall blocks with a hole through them ---------- */
const WHITE = 0xffffff, DOORWOOD = 0x8a5a33, DOORWOOD2 = 0xa9683a;
// a wall w cells wide and h cells high, one cell deep, with a rectangular hole (heights measured from the floor)
function holed(w: number, h: number, x0: number, x1: number, y0: number, y1: number): Geo[] {
  const L = -.5, R = w - .5, out: Geo[] = [];
  if (x0 > L) out.push(b(x0 - L, h, 1, WALL, (x0 + L) / 2, 0, 0));
  if (x1 < R) out.push(b(R - x1, h, 1, WALL, (x1 + R) / 2, 0, 0));
  if (y0 > 0) out.push(b(x1 - x0, y0, 1, WALL, (x0 + x1) / 2, 0, 0));
  if (y1 < h) out.push(b(x1 - x0, h - y1, 1, WALL, (x0 + x1) / 2, y1, 0));
  return out;
}
// a thin white border lining the hole
function trim(x0: number, x1: number, y0: number, y1: number): Geo[] {
  const out = [b(.05, y1 - y0, 1.04, WHITE, x0 + .025, y0, 0), b(.05, y1 - y0, 1.04, WHITE, x1 - .025, y0, 0), b(x1 - x0, .05, 1.04, WHITE, (x0 + x1) / 2, y1 - .05, 0)];
  if (y0 > 0) out.push(b(x1 - x0, .05, 1.04, WHITE, (x0 + x1) / 2, y0, 0));
  return out;
}
// stepped fillers that round the top corners of a hole into an arch, or all four into a circle
function arch(x0: number, x1: number, y0: number, y1: number, all?: boolean): Geo[] {
  const out: Geo[] = [];
  for (const [wx, hy] of [[.1, .3], [.2, .15]]) {
    out.push(b(wx, hy, 1, WALL, x0 + wx / 2, y1 - hy, 0), b(wx, hy, 1, WALL, x1 - wx / 2, y1 - hy, 0));
    if (all) out.push(b(wx, hy, 1, WALL, x0 + wx / 2, y0, 0), b(wx, hy, 1, WALL, x1 - wx / 2, y0, 0));
  }
  return out;
}
const pane = (x0: number, x1: number, y0: number, y1: number) => M([b(x1 - x0, y1 - y0, .04, GLASS, (x0 + x1) / 2, y0, 0)]);
const barV = (x: number, y0: number, y1: number) => b(.05, y1 - y0, .07, WHITE, x, y0, 0);
const barH = (x0: number, x1: number, y: number) => b(x1 - x0, .05, .07, WHITE, (x0 + x1) / 2, y - .025, 0);
// a panelled door leaf centred on xc; the knob sits on the side given by knob (1 or -1)
const leaf = (xc: number, wd: number, knob: number, col = DOORWOOD, col2 = DOORWOOD2) => M([b(wd, 1.78, .08, col, xc, 0, 0),
  b(wd - .24, .6, .1, col2, xc, 1, 0), b(wd - .24, .6, .1, col2, xc, .2, 0), b(.06, .06, .14, 0xffd24a, xc + knob * (wd / 2 - .11), .85, 0)]);
const barnLeaf = (xc: number) => M([b(.89, 1.83, .08, 0xb5382f, xc, 0, 0), b(.89, .1, .1, WHITE, xc, 0, 0), b(.89, .1, .1, WHITE, xc, 1.73, 0), b(.89, .1, .1, WHITE, xc, .87, 0),
  b(.1, 1.83, .1, WHITE, xc - .395, 0, 0), b(.1, 1.83, .1, WHITE, xc + .395, 0, 0)]);

/* ---------- smooth roof pieces ---------- */
// A faceted solid from corner points (heights measured from the cell floor) and faces listed by point index.
// Every face is turned to look away from the point "inside".
function solid(color: number, pts: number[][], faces: number[][], inside: number[]): Geo {
  const pos: number[] = [];
  for (const f of faces) for (let i = 1; i < f.length - 1; i++) {
    const a = pts[f[0]]; let p = pts[f[i]], q = pts[f[i + 1]];
    const ux = p[0] - a[0], uy = p[1] - a[1], uz = p[2] - a[2], vx = q[0] - a[0], vy = q[1] - a[1], vz = q[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const mx = (a[0] + p[0] + q[0]) / 3 - inside[0], my = (a[1] + p[1] + q[1]) / 3 - inside[1], mz = (a[2] + p[2] + q[2]) / 3 - inside[2];
    if (nx * mx + ny * my + nz * mz < 0) { const t = p; p = q; q = t; }
    pos.push(a[0], a[1] - .5, a[2], p[0], p[1] - .5, p[2], q[0], q[1] - .5, q[2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  const col = new THREE.Color(color), c = new Float32Array(pos.length);
  for (let i = 0; i < c.length; i += 3) { c[i] = col.r; c[i + 1] = col.g; c[i + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
const BASE = [[-.5, 0, -.5], [.5, 0, -.5], [.5, 0, .5], [-.5, 0, .5]];
// all pieces are given turned to r = 0: a slope comes down towards +z, a corner towards +x and +z
const slopeGeo = (color = ROOF) => solid(color, [...BASE, [-.5, 1, -.5], [.5, 1, -.5]], [[0, 1, 2, 3], [0, 1, 5, 4], [3, 2, 5, 4], [0, 3, 4], [1, 2, 5]], [0, .2, -.2]);
const tentGeo = (color = ROOF) => solid(color, [...BASE, [-.5, .5, 0], [.5, .5, 0]], [[0, 1, 2, 3], [3, 2, 5, 4], [0, 1, 5, 4], [0, 3, 4], [1, 2, 5]], [0, .1, 0]);
// the roofing that lies on top of a wall-coloured end piece
const ROOF_MATS: [string, number][] = [['', ROOF], ['Wood', 0x9a6b3f], ['Slate', 0x6b7280]];

/* ---------- block & item types ---------- */
export const TYPES: Record<string, PieceType> = {
  grass: { name: 'عشب', cat: 'cube', color: 0x62b84f, geo: () => M([b(1, .78, 1, 0x9a6b3f, 0, 0, 0), b(1, .22, 1, 0x62b84f, 0, .78, 0)]) },
  stone: { name: 'حجر', cat: 'cube', color: 0xa9a9b6, geo: () => cube(0xa9a9b6) },
  wood: { name: 'خشب', cat: 'cube', color: 0xb07a45, geo: () => cube(0xb07a45) },
  white: { name: 'أبيض', cat: 'cube', color: 0xf6f2ea, geo: () => cube(0xf6f2ea) },
  pink: { name: 'وردي', cat: 'cube', color: 0xf08fb6, geo: () => cube(0xf08fb6) },
  purple: { name: 'بنفسجي', cat: 'cube', color: 0x9b6fd6, geo: () => cube(0x9b6fd6) },
  yellow: { name: 'أصفر', cat: 'cube', color: 0xffd24a, geo: () => cube(0xffd24a) },
  brick: { name: 'طوب', cat: 'cube', color: 0xb85c44, geo: () => M([b(1, 1, 1, 0xb85c44, 0, 0, 0), b(1.004, .03, 1.004, 0xd9b8a3, 0, .31, 0), b(1.004, .03, 1.004, 0xd9b8a3, 0, .65, 0)]) },
  barn: { name: 'خشب أحمر', cat: 'cube', color: 0xb5382f, geo: () => M([b(1, 1, 1, 0xb5382f, 0, 0, 0), b(.02, 1, 1.004, 0x8f2a23, .25, 0, 0), b(.02, 1, 1.004, 0x8f2a23, -.25, 0, 0), b(1.004, 1, .02, 0x8f2a23, 0, 0, .25), b(1.004, 1, .02, 0x8f2a23, 0, 0, -.25)]) },
  water: { name: 'ماء', cat: 'cube', color: 0x4fb7ee, geo: () => cube(0x4fb7ee) },

  rose: { name: 'وردة', cat: 'flower', geo: () => cluster((x, z, h) => stem(x, z, h).concat([b(.2, .14, .2, 0xe02d43, x, h, z), b(.12, .09, .12, 0xb81d35, x, h + .14, z)])) },
  tulip: { name: 'توليب', cat: 'flower', geo: () => cluster((x, z, h) => stem(x, z, h).concat([b(.16, .2, .16, 0xffcf2e, x, h, z), b(.08, .06, .08, 0xff9a2e, x, h + .2, z)])) },
  daisy: { name: 'أقحوان', cat: 'flower', geo: () => cluster((x, z, h) => stem(x, z, h).concat([b(.1, .08, .1, 0xffc531, x, h, z)], petals4(x, z, h, 0xffffff, .11, .11))) },
  violet: { name: 'بنفسج', cat: 'flower', geo: () => cluster((x, z, h) => stem(x, z, h * .7).concat([b(.08, .08, .08, 0xffe066, x, h * .7, z)], petals4(x, z, h * .7, 0x7a48d8, .1, .12))) },
  carnation: { name: 'قرنفل', cat: 'flower', geo: () => cluster((x, z, h) => stem(x, z, h).concat([b(.2, .1, .2, 0xff7fb0, x, h, z), b(.26, .05, .26, 0xff4f93, x, h + .03, z), b(.1, .08, .1, 0xffd6e6, x, h + .1, z)])) },
  sunflower: { name: 'عبّاد الشمس', cat: 'flower', geo: () => M(stem(0, 0, .8, .08).concat([b(.2, .05, .1, LEAF, -.12, .5, 0), b(.24, .09, .24, 0x6b4423, 0, .8, 0)],
    [[.2, 0], [-.2, 0], [0, .2], [0, -.2]].map(p => b(.18, .06, .18, 0xffc81e, p[0], .8, p[1])),
    [[.16, .16], [-.16, .16], [.16, -.16], [-.16, -.16]].map(p => b(.13, .06, .13, 0xffdd55, p[0], .8, p[1])))) },

  bench: { name: 'مقعد', cat: 'decor', geo: () => M([b(.92, .07, .36, 0xc98a4b, 0, .26, .02), b(.92, .3, .06, 0xc98a4b, 0, .36, -.17),
    b(.07, .26, .07, 0x6e4a2a, -.38, 0, .14), b(.07, .26, .07, 0x6e4a2a, .38, 0, .14), b(.07, .4, .07, 0x6e4a2a, -.38, 0, -.17), b(.07, .4, .07, 0x6e4a2a, .38, 0, -.17),
    b(.07, .05, .36, 0x6e4a2a, -.42, .42, .02), b(.07, .05, .36, 0x6e4a2a, .42, .42, .02)]) },
  tree: { name: 'شجرة', cat: 'decor', geo: () => M([b(.22, .9, .22, 0x8a5a33, 0, 0, 0), b(1.1, .5, 1.1, 0x3f9b4b, 0, .8, 0), b(.8, .42, .8, 0x4fb35a, 0, 1.3, 0), b(.45, .3, .45, 0x66c56c, 0, 1.72, 0)]) },
  blossom: { name: 'شجرة مزهرة', cat: 'decor', geo: () => M([b(.22, .9, .22, 0x8a5a33, 0, 0, 0), b(1.1, .5, 1.1, 0xf48fb8, 0, .8, 0), b(.8, .42, .8, 0xf9a9c9, 0, 1.3, 0), b(.45, .3, .45, 0xfcc6dc, 0, 1.72, 0)]) },
  bush: { name: 'شجيرة', cat: 'decor', geo: () => M([b(.84, .4, .84, 0x3f9b4b, 0, 0, 0), b(.54, .24, .54, 0x55b65e, 0, .4, 0), b(.1, .1, .1, 0xff7fb0, .3, .4, .3), b(.1, .1, .1, 0xff7fb0, -.32, .4, -.2)]) },
  fence: { name: 'سياج', cat: 'decor', geo: () => M([b(1, .07, .05, 0xffffff, 0, .16, 0), b(1, .07, .05, 0xffffff, 0, .4, 0)].concat([-.4, -.2, 0, .2, .4].map(x => b(.1, .56, .07, 0xfbf7ef, x, 0, 0)))) },
  tile: { name: 'بلاطة', cat: 'decor', flat: true, geo: () => M([b(.98, .06, .98, 0xd9c7a3, 0, 0, 0), b(.8, .075, .8, 0xe8d9b8, 0, 0, 0)]) },
  fountain: { name: 'نافورة', cat: 'decor', stars: 1, geo: () => M([cyl(.48, .5, .24, 0xb9b9c6, 0), cyl(.4, .4, .03, 0x55bdf2, .24), cyl(.07, .1, .5, 0xc9c9d4, .24), cyl(.26, .12, .1, 0xb9b9c6, .7), cyl(.21, .21, .03, 0x55bdf2, .8), b(.08, .14, .08, 0x9adbfa, 0, .83, 0)]) },
  lantern: { name: 'فانوس', cat: 'decor', stars: 2, glow: true, geo: () => M([b(.22, .06, .22, 0x4a4458, 0, 0, 0), b(.08, .8, .08, 0x4a4458, 0, .06, 0), b(.24, .24, .24, 0xffe38a, 0, .86, 0), b(.3, .05, .3, 0x4a4458, 0, 1.1, 0)]) },
  bunny: { name: 'أرنب', cat: 'animal', stars: 3, geo: () => M([b(.3, .26, .4, 0xffffff, 0, .05, -.04), b(.1, .05, .14, 0xf2ece0, -.1, 0, .1), b(.1, .05, .14, 0xf2ece0, .1, 0, .1), b(.26, .24, .24, 0xffffff, 0, .28, .14),
    b(.07, .26, .05, 0xffffff, -.07, .52, .12), b(.07, .26, .05, 0xffffff, .07, .52, .12), b(.03, .18, .02, 0xf7a8c4, -.07, .55, .146), b(.03, .18, .02, 0xf7a8c4, .07, .55, .146),
    b(.1, .1, .1, 0xffffff, 0, .14, -.28), b(.04, .05, .02, 0x2b2140, -.07, .4, .26), b(.04, .05, .02, 0x2b2140, .07, .4, .26), b(.05, .04, .02, 0xf06a9b, 0, .33, .26)]) },

  /* ---------- house parts ---------- */
  /* ---------- windows: tap a wall to open one in it ---------- */
  window: { name: 'نافذة مربعة', cat: 'open', solid: true, opening: true, keep: [WHITE], geo: () => M([...holed(1, 1, -.3, .3, .2, .8), ...trim(-.3, .3, .2, .8), barV(0, .2, .8), barH(-.3, .3, .5)]), glass: () => pane(-.3, .3, .2, .8) },
  winWide: { name: 'نافذة عريضة', cat: 'open', solid: true, opening: true, size: [2, 1, 1], keep: [WHITE], geo: () => M([...holed(2, 1, -.3, 1.3, .2, .8), ...trim(-.3, 1.3, .2, .8), barV(.5, .2, .8)]), glass: () => pane(-.3, 1.3, .2, .8) },
  winTall: { name: 'نافذة طويلة', cat: 'open', solid: true, opening: true, size: [1, 2, 1], keep: [WHITE], geo: () => M([...holed(1, 2, -.3, .3, .3, 1.7), ...trim(-.3, .3, .3, 1.7), barH(-.3, .3, 1)]), glass: () => pane(-.3, .3, .3, 1.7) },
  winArch: { name: 'نافذة مقوّسة', cat: 'open', solid: true, opening: true, size: [1, 2, 1], keep: [WHITE], geo: () => M([...holed(1, 2, -.32, .32, .3, 1.75), ...arch(-.32, .32, .3, 1.75), barV(0, .3, 1.75), barH(-.32, .32, 1.3)]), glass: () => pane(-.32, .32, .3, 1.75) },
  winRound: { name: 'نافذة دائرية', cat: 'open', solid: true, opening: true, keep: [WHITE], geo: () => M([...holed(1, 1, -.34, .34, .16, .84), ...arch(-.34, .34, .16, .84, true), barV(0, .16, .84), barH(-.34, .34, .5)]), glass: () => pane(-.34, .34, .16, .84) },
  winShutter: { name: 'نافذة بمصاريع', cat: 'open', solid: true, opening: true, keep: [WHITE, 0x3f9b4b, 0x2f7d3a], geo: () => M([...holed(1, 1, -.2, .2, .2, .8), ...trim(-.2, .2, .2, .8), barH(-.2, .2, .5),
    b(.16, .62, .05, 0x3f9b4b, .31, .19, .52), b(.16, .62, .05, 0x3f9b4b, -.31, .19, .52), ...[.3, .45, .6].flatMap(y => [b(.12, .03, .06, 0x2f7d3a, .31, y, .525), b(.12, .03, .06, 0x2f7d3a, -.31, y, .525)])]), glass: () => pane(-.2, .2, .2, .8) },
  winBig: { name: 'نافذة كبيرة', cat: 'open', solid: true, opening: true, size: [2, 2, 1], keep: [WHITE], geo: () => M([...holed(2, 2, -.3, 1.3, .3, 1.7), ...trim(-.3, 1.3, .3, 1.7), barV(.5, .3, 1.7), barH(-.3, 1.3, 1)]), glass: () => pane(-.3, 1.3, .3, 1.7) },

  /* ---------- doors: two cells high, they open when the girl comes near ---------- */
  door: { name: 'باب خشبي', cat: 'open', solid: true, opening: true, door: true, size: [1, 2, 1], keep: [WHITE], geo: () => M([...holed(1, 2, -.38, .38, 0, 1.8), ...trim(-.38, .38, 0, 1.8)]),
    leaves: [{ geo: () => leaf(0, .74, 1), hinge: [-.37, 0], dir: 1 }] },
  doorGlass: { name: 'باب زجاجي', cat: 'open', solid: true, opening: true, door: true, size: [1, 2, 1], keep: [WHITE], geo: () => M([...holed(1, 2, -.38, .38, 0, 1.8), ...trim(-.38, .38, 0, 1.8)]),
    leaves: [{ geo: () => M([b(.1, 1.78, .08, WHITE, .32, 0, 0), b(.1, 1.78, .08, WHITE, -.32, 0, 0), b(.54, .14, .08, WHITE, 0, 0, 0), b(.54, .14, .08, WHITE, 0, 1.64, 0), b(.54, .06, .08, WHITE, 0, .86, 0), b(.04, .2, .14, 0x8c8c99, .3, .8, 0)]), hinge: [-.37, 0], dir: 1 },
      { geo: () => M([b(.54, 1.5, .03, GLASS, 0, .14, 0)]), glass: true, hinge: [-.37, 0], dir: 1 }] },
  doorDouble: { name: 'باب مزدوج', cat: 'open', solid: true, opening: true, door: true, size: [2, 2, 1], keep: [WHITE], geo: () => M([...holed(2, 2, -.3, 1.3, 0, 1.8), ...trim(-.3, 1.3, 0, 1.8)]),
    leaves: [{ geo: () => leaf(.1, .78, 1), hinge: [-.29, 0], dir: 1 }, { geo: () => leaf(.9, .78, -1), hinge: [1.29, 0], dir: -1 }] },
  doorArch: { name: 'باب مقوّس', cat: 'open', solid: true, opening: true, door: true, size: [1, 2, 1], keep: [WHITE], geo: () => M([...holed(1, 2, -.38, .38, 0, 1.85), ...arch(-.38, .38, 0, 1.85)]),
    leaves: [{ geo: () => leaf(0, .74, 1, 0x2f8f83, 0x3fa99b), hinge: [-.37, 0], dir: 1 }] },
  barnDoor: { name: 'باب حظيرة', cat: 'open', solid: true, opening: true, door: true, size: [2, 2, 1], keep: [WHITE], geo: () => M(holed(2, 2, -.4, 1.4, 0, 1.85)),
    leaves: [{ geo: () => barnLeaf(.05), hinge: [-.4, 0], dir: 1 }, { geo: () => barnLeaf(.95), hinge: [1.4, 0], dir: -1 }] },
  garageDoor: { name: 'باب موقف', cat: 'open', solid: true, opening: true, door: true, size: [2, 2, 1], keep: [WHITE], geo: () => M(holed(2, 2, -.4, 1.4, 0, 1.75)),
    leaves: [{ geo: () => M([b(1.78, 1.73, .08, 0xdfe3e8, .5, 0, 0), ...[.43, .86, 1.3].map(y => b(1.78, .03, .1, 0xaab2bd, .5, y, 0))]), top: 1.75 }] },
  gate: { name: 'باب حديقة', cat: 'open', door: true, geo: () => M([b(.1, .7, .1, 0xfbf7ef, .45, 0, 0), b(.1, .7, .1, 0xfbf7ef, -.45, 0, 0)]),
    leaves: [{ geo: () => M([...[-.3, -.15, 0, .15, .3].map(x => b(.1, .5, .06, 0xfbf7ef, x, .04, 0)), b(.8, .06, .05, 0xffffff, 0, .14, 0), b(.8, .06, .05, 0xffffff, 0, .38, 0)]), hinge: [-.4, 0], dir: 1 }] },

  plank: { name: 'أرضية خشب', cat: 'house', flat: true, geo: () => M([b(1, .05, 1, 0xc98a4b, 0, 0, 0), b(1, .055, .02, 0x8a5a33, 0, 0, -.25), b(1, .055, .02, 0x8a5a33, 0, 0, .25)]) },
  /* ---------- details around the house ---------- */
  railing: { name: 'درابزين', cat: 'house', geo: () => M([b(1, .06, .06, WHITE, 0, .6, 0), b(1, .05, .06, WHITE, 0, .04, 0), ...[-.4, -.2, 0, .2, .4].map(x => b(.05, .6, .05, 0xf4f1ec, x, 0, 0))]) },
  column: { name: 'عمود', cat: 'house', solid: true, geo: () => M([b(.6, .12, .6, 0xe8e4dc, 0, 0, 0), cyl(.2, .2, .76, 0xf4f1ec, .12, 10), b(.6, .12, .6, 0xe8e4dc, 0, .88, 0)]) },
  awning: { name: 'مظلة مدخل', cat: 'house', thin: true, keep: [WHITE], geo: () => M([b(.06, 1.9, .06, WHITE, .44, 0, .44), b(.06, 1.9, .06, WHITE, -.44, 0, .44),
    b(1, .08, 1.1, 0xe5383b, 0, 2, 0, [.25, 0, 0]), b(.2, .085, 1.1, WHITE, .3, 2, 0, [.25, 0, 0]), b(.2, .085, 1.1, WHITE, -.3, 2, 0, [.25, 0, 0])]) },
  stoop: { name: 'درجات المدخل', cat: 'house', flat: true, geo: () => M([b(1, .14, 1, 0xb9b9c6, 0, 0, 0), b(1, .28, .5, 0xc9c9d4, 0, 0, -.25)]) },
  mailbox: { name: 'صندوق بريد', cat: 'house', keep: [WOOD2, 0xffd24a], geo: () => M([b(.08, .7, .08, WOOD2, 0, 0, 0), b(.3, .22, .44, 0xe5383b, 0, .7, 0), b(.04, .16, .04, 0xffd24a, .17, .78, .1)]) },
  wallLamp: { name: 'مصباح حائط', cat: 'light', thin: true, glow: true, keep: [0x4a4458], geo: () => M([b(.06, .06, .3, 0x4a4458, 0, 1.3, -.34), b(.18, .22, .18, 0xffe38a, 0, 1.14, -.2), b(.22, .04, .22, 0x4a4458, 0, 1.36, -.2)]) },
  flowerBox: { name: 'أصيص نافذة', cat: 'house', thin: true, keep: [LEAF, 0xe02d43, 0xffcf2e, 0xff7fb0], geo: () => M([b(.8, .18, .2, WOOD2, 0, .8, -.38), b(.7, .06, .16, LEAF, 0, .95, -.38),
    b(.1, .12, .1, 0xe02d43, -.25, .98, -.38), b(.1, .12, .1, 0xffcf2e, 0, .98, -.38), b(.1, .12, .1, 0xff7fb0, .25, .98, -.38)]) },
  /* ---------- roofs (the roof tool lays these out; they can also be placed by hand) ---------- */
  floorTile: { name: 'بلاط', cat: 'house', flat: true, geo: () => M([b(1, .05, 1, 0xe9eef2, 0, 0, 0), b(.5, .055, .5, 0xb9c2cc, -.25, 0, -.25), b(.5, .055, .5, 0xb9c2cc, .25, 0, .25)]) },
  floorMarble: { name: 'رخام', cat: 'house', flat: true, geo: () => M([b(1, .05, 1, 0xf4f1ec, 0, 0, 0), b(.6, .055, .03, 0xcfc8bd, 0, 0, -.2, [0, .5, 0]), b(.4, .055, .03, 0xcfc8bd, .15, 0, .25, [0, -.4, 0])]) },
  carpet: { name: 'سجاد', cat: 'house', flat: true, geo: () => M([b(1, .06, 1, 0xc93a6e, 0, 0, 0), b(.9, .065, .9, 0xe2477f, 0, 0, 0)]) },
  // the floor of an upper storey: it fills the top row of the storey below
  floorSlab: { name: 'أرضية طابق', cat: 'house', solid: true, geo: () => M([b(1, .9, 1, 0xe8dfd0, 0, 0, 0), b(1, .1, 1, 0xc98a4b, 0, .9, 0)]) },
  // three cells long and three high, rising towards +z; it makes its own opening in a floor slab above
  stairs: { name: 'درج', cat: 'house', solid: true, size: [1, 3, 3], cells: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 0, 2], [0, 1, 2], [0, 2, 2]], clears: [[0, 2, -1], [0, 2, 0], [0, 2, 1], [0, 2, 2]],
    geo: () => M([0, 1, 2, 3, 4, 5].flatMap(i => [b(1, (i + 1) * .5 - .06, .5, 0xb07a45, 0, 0, -.25 + i * .5), b(1, .06, .5, 0xc98a4b, 0, (i + 1) * .5 - .06, -.25 + i * .5)])) },
  roof: { name: 'سقف مائل', cat: 'house', solid: true, roof: true, geo: () => M([slopeGeo()]) },
  roofCorner: { name: 'زاوية سقف', cat: 'house', solid: true, roof: true, geo: () => M([solid(ROOF, [...BASE, [-.5, 1, -.5]], [[0, 1, 2, 3], [0, 3, 4], [0, 1, 4], [4, 3, 2], [4, 2, 1]], [-.2, .15, -.2])]) },
  roofValley: { name: 'زاوية داخلية', cat: 'house', solid: true, roof: true, geo: () => M([solid(ROOF, [...BASE, [-.5, 1, -.5], [.5, 1, -.5], [-.5, 1, .5]], [[0, 1, 2, 3], [0, 3, 6, 4], [0, 1, 5, 4], [1, 2, 5], [3, 2, 6], [2, 5, 4], [2, 4, 6]], [-.2, .2, -.2])]) },
  roofTop: { name: 'قمة سقف', cat: 'house', solid: true, roof: true, geo: () => M([tentGeo()]) },
  roofEnd: { name: 'نهاية قمة', cat: 'house', solid: true, roof: true, geo: () => M([solid(ROOF, [...BASE, [-.5, .5, 0], [0, .5, 0]], [[0, 1, 2, 3], [1, 2, 5], [3, 2, 5, 4], [0, 1, 5, 4], [0, 3, 4]], [-.1, .1, 0])]) },
  roofPeak: { name: 'قمة برج', cat: 'house', solid: true, roof: true, geo: () => M([solid(ROOF, [...BASE, [0, .5, 0]], [[0, 1, 2, 3], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]], [0, .1, 0])]) },
  roofFlat: { name: 'سقف مكعب', cat: 'house', solid: true, roof: true, geo: () => cube(ROOF) },
  roofSlab: { name: 'سقف مسطّح', cat: 'house', solid: true, roof: true, geo: () => M([b(1, .25, 1, ROOF, 0, 0, 0)]) },
  roofEdge: { name: 'حافة سقف', cat: 'house', solid: true, roof: true, geo: () => M([b(1, .6, 1, ROOF, 0, 0, 0), b(1.04, .08, 1.04, ROOF2, 0, .6, 0)]) },
  skylight: { name: 'نافذة سقف', cat: 'house', solid: true, roof: true, keep: [WHITE], geo: () => M([slopeGeo(), b(.6, .05, .7, WHITE, 0, .49, 0, [Math.PI / 4, 0, 0])]), glass: () => M([b(.48, .05, .58, GLASS, 0, .52, 0, [Math.PI / 4, 0, 0])]) },
  // the wall under a gable or lean-to roof; put in and taken out with the roof
  gableFill: { name: 'جدار السقف', cat: 'house', solid: true, roof: true, hidden: true, geo: () => cube(WALL) },
  chimney: { name: 'مدخنة', cat: 'house', roof: true, keep: [DARK], geo: () => M([b(.4, 1.6, .4, 0xa8523a, 0, -.9, 0), b(.5, .1, .5, 0x8c3f2b, 0, .7, 0), b(.3, .04, .3, DARK, 0, .8, 0)]) },

  /* ---------- furniture and kitchen (all face +z) ---------- */
  bed: { name: 'سرير', cat: 'furniture', keep: [WOOD2, 0xffffff], geo: () => M([b(.9, .18, .98, WOOD2, 0, 0, 0), b(.9, .5, .08, WOOD2, 0, 0, -.45),
    b(.82, .12, .86, 0xffffff, 0, .18, .04), b(.84, .14, .5, 0xf08fb6, 0, .19, .2), b(.5, .09, .2, 0xffffff, 0, .3, -.26)]) },
  table: { name: 'طاولة', cat: 'furniture', geo: () => M([b(.92, .08, .92, 0xc98a4b, 0, .48, 0)].concat(
    [[.38, .38], [-.38, .38], [.38, -.38], [-.38, -.38]].map(p => b(.08, .48, .08, WOOD2, p[0], 0, p[1])))) },
  chair: { name: 'كرسي', cat: 'furniture', geo: () => M([b(.46, .06, .46, 0xc98a4b, 0, .28, .02), b(.46, .42, .06, 0xc98a4b, 0, .34, -.2)].concat(
    [[.19, .21], [-.19, .21], [.19, -.17], [-.19, -.17]].map(p => b(.06, .28, .06, WOOD2, p[0], 0, p[1])))) },
  sofa: { name: 'كنبة', cat: 'furniture', keep: [DARK], geo: () => M([b(.94, .2, .52, 0x4fb7ee, 0, .08, .04), b(.94, .46, .16, 0x4fb7ee, 0, .08, -.3),
    b(.13, .34, .52, 0x3a9ad6, .405, .08, .04), b(.13, .34, .52, 0x3a9ad6, -.405, .08, .04)].concat(
    [[.38, .2], [-.38, .2], [.38, -.3], [-.38, -.3]].map(p => b(.08, .08, .08, DARK, p[0], 0, p[1])))) },
  wardrobe: { name: 'خزانة', cat: 'furniture', keep: [0xffd24a], geo: () => M([b(.9, 1.3, .46, WOOD, 0, 0, -.22), b(.4, 1.12, .03, 0xc98a4b, .21, .1, .02), b(.4, 1.12, .03, 0xc98a4b, -.21, .1, .02),
    b(.05, .08, .04, 0xffd24a, .06, .6, .05), b(.05, .08, .04, 0xffd24a, -.06, .6, .05)]) },
  bookshelf: { name: 'مكتبة', cat: 'furniture', keep: BOOKS, geo: () => M([b(.06, 1.2, .36, WOOD2, .42, 0, -.28), b(.06, 1.2, .36, WOOD2, -.42, 0, -.28), b(.9, 1.2, .04, WOOD2, 0, 0, -.44)].concat(
    [0, .38, .76, 1.15].map(y => b(.9, .05, .36, WOOD2, 0, y, -.28)),
    ...[.05, .43, .81].map((y, row) => [-.3, -.15, 0, .15, .3].map((x, i) => b(.12, .22 + ((i + row) % 3) * .03, .24, BOOKS[(i + row * 2) % 5], x, y, -.28))))) },
  lamp: { name: 'مصباح أرضي', cat: 'light', glow: true, keep: [0x4a4458], geo: () => M([b(.24, .05, .24, 0x4a4458, 0, 0, 0), b(.05, .9, .05, 0x4a4458, 0, .05, 0), b(.34, .26, .34, 0xffe38a, 0, .9, 0)]) },
  rug: { name: 'سجادة', cat: 'furniture', flat: true, geo: () => M([b(.98, .04, .98, 0xe2477f, 0, 0, 0), b(.74, .05, .74, 0xffd6e6, 0, 0, 0)]) },
  curtain: { name: 'ستارة', cat: 'furniture', thin: true, keep: [0x4a4458], geo: () => M([b(1, .05, .05, 0x4a4458, 0, .92, -.43), b(.3, .9, .07, 0xe2477f, .34, .03, -.43), b(.3, .9, .07, 0xe2477f, -.34, .03, -.43),
    b(.96, .14, .08, 0xc93a6e, 0, .8, -.43)]) },
  tv: { name: 'تلفاز', cat: 'furniture', keep: [DARK, 0x4fb7ee], geo: () => M([b(.84, .3, .36, WOOD, 0, 0, -.1), b(.8, .46, .05, DARK, 0, .32, -.1), b(.7, .36, .02, 0x4fb7ee, 0, .37, -.07)]) },
  plant: { name: 'نبتة', cat: 'furniture', keep: [STEM, LEAF], geo: () => M([b(.3, .24, .3, 0xc8553d, 0, 0, 0), b(.06, .3, .06, STEM, 0, .24, 0), b(.4, .16, .4, LEAF, 0, .44, 0), b(.26, .14, .26, STEM, 0, .6, 0)]) },
  stove: { name: 'فرن', cat: 'furniture', keep: [DARK, 0x4a4458, 0xe5383b], geo: () => M([b(.92, .72, .84, WALL, 0, 0, -.04), b(.92, .03, .84, 0x4a4458, 0, .72, -.04), b(.6, .3, .02, DARK, 0, .2, .385)].concat(
    [[.2, .14], [-.2, .14], [.2, -.22], [-.2, -.22]].map(p => b(.2, .02, .2, DARK, p[0], .75, p[1])),
    [-.3, -.1, .1, .3].map(x => b(.06, .06, .03, 0xe5383b, x, .6, .39)))) },
  fridge: { name: 'ثلاجة', cat: 'furniture', keep: [0x8c8c99], geo: () => M([b(.82, 1.4, .74, 0xe9eef2, 0, 0, -.08), b(.82, .02, .02, 0x8c8c99, 0, .9, .295),
    b(.04, .3, .04, 0x8c8c99, .3, .5, .31), b(.04, .2, .04, 0x8c8c99, .3, 1, .31)]) },
  sink: { name: 'مغسلة', cat: 'furniture', keep: [0x55bdf2, 0x8c8c99, 0xb9b9c6], geo: () => M([b(.92, .7, .84, WALL, 0, 0, -.04), b(.92, .05, .84, 0xb9b9c6, 0, .7, -.04), b(.5, .02, .4, 0x55bdf2, 0, .75, 0),
    b(.05, .2, .05, 0x8c8c99, 0, .75, -.32), b(.05, .05, .18, 0x8c8c99, 0, .92, -.25), b(.02, .5, .02, 0x8c8c99, 0, .1, .385)]) },
  counter: { name: 'خزانة مطبخ', cat: 'furniture', keep: [0xc98a4b, 0x8c8c99], geo: () => M([b(.92, .7, .84, WALL, 0, 0, -.04), b(.96, .06, .88, 0xc98a4b, 0, .7, -.04),
    b(.2, .04, .03, 0x8c8c99, .22, .5, .39), b(.2, .04, .03, 0x8c8c99, -.22, .5, .39)]) },

  desk: { name: 'مكتب', cat: 'furniture', keep: [0x3a66d6], geo: () => M([b(.94, .07, .6, 0xc98a4b, 0, .52, -.12), b(.3, .52, .56, WOOD, .3, 0, -.12), b(.07, .52, .07, WOOD2, -.4, 0, .1), b(.07, .52, .07, WOOD2, -.4, 0, -.34),
    b(.22, .04, .16, 0x3a66d6, -.2, .59, -.1), b(.04, .06, .03, 0xffd24a, .3, .3, .17)]) },
  kidBed: { name: 'سرير طفل', cat: 'furniture', keep: [WHITE, 0x4fb7ee], geo: () => M([b(.8, .16, .98, 0x4fb7ee, 0, 0, 0), b(.8, .46, .08, 0x4fb7ee, 0, 0, -.45), b(.8, .3, .06, 0x4fb7ee, 0, 0, .46),
    b(.72, .1, .84, WHITE, 0, .16, 0), b(.74, .12, .5, 0xffd24a, 0, .17, .16), b(.44, .08, .18, WHITE, 0, .26, -.28)]) },
  toyBox: { name: 'صندوق ألعاب', cat: 'furniture', keep: [0xffd24a, 0x4fb35a, 0x3a66d6], geo: () => M([b(.7, .4, .5, 0xe5383b, 0, 0, 0), b(.74, .06, .54, 0xffd24a, 0, .4, 0),
    b(.16, .16, .16, 0x4fb35a, -.15, .46, 0), b(.14, .14, .14, 0x3a66d6, .15, .46, .05)]) },
  fireplace: { name: 'مدفأة', cat: 'furniture', keep: [DARK, 0xff8c2e, 0xffd24a, 0xc98a4b], geo: () => M([b(.94, 1, .4, 0xb85c44, 0, 0, -.28), b(.5, .5, .06, DARK, 0, 0, -.07), b(.3, .25, .06, 0xff8c2e, 0, .02, -.05),
    b(.16, .16, .07, 0xffd24a, 0, .04, -.04), b(1, .08, .5, 0xc98a4b, 0, 1, -.25), b(.6, .8, .3, 0xb85c44, 0, 1.08, -.33)]) },
  clock: { name: 'ساعة حائط', cat: 'furniture', thin: true, keep: [WHITE, DARK], geo: () => M([b(.46, .46, .03, 0x6a3fa6, 0, .87, -.47), b(.4, .4, .05, WHITE, 0, .9, -.46),
    b(.03, .16, .02, DARK, 0, 1.1, -.42), b(.12, .03, .02, DARK, .05, 1.085, -.42)]) },
  painting: { name: 'لوحة', cat: 'furniture', thin: true, keep: [0x8fd3f4, 0xffd24a, 0x4fb35a], geo: () => M([b(.7, .5, .05, 0xc98a4b, 0, .8, -.46), b(.6, .4, .03, 0x8fd3f4, 0, .85, -.43),
    b(.12, .12, .02, 0xffd24a, .15, 1.07, -.41), b(.6, .14, .02, 0x4fb35a, 0, .85, -.41)]) },
  shelf: { name: 'رفّ', cat: 'furniture', thin: true, keep: BOOKS, geo: () => M([b(.9, .05, .24, WOOD2, 0, .95, -.36), b(.05, .16, .2, WOOD2, .35, .79, -.38), b(.05, .16, .2, WOOD2, -.35, .79, -.38),
    ...[-.3, -.2, -.1].map((x, i) => b(.08, .2 + i * .02, .16, BOOKS[i], x, 1, -.36)), b(.14, .12, .14, 0xc8553d, .25, 1, -.36)]) },

  /* ---------- bathroom ---------- */
  bathtub: { name: 'حوض استحمام', cat: 'bath', size: [1, 1, 2], keep: [0x7cc8ee, 0x8c8c99], geo: () => M([b(.9, .5, 1.8, WHITE, 0, .05, .5), b(.74, .03, 1.64, 0x7cc8ee, 0, .55, .5),
    b(.1, .05, .1, 0x8c8c99, .35, 0, -.3), b(.1, .05, .1, 0x8c8c99, -.35, 0, -.3), b(.1, .05, .1, 0x8c8c99, .35, 0, 1.3), b(.1, .05, .1, 0x8c8c99, -.35, 0, 1.3),
    b(.06, .22, .06, 0x8c8c99, 0, .55, -.32), b(.06, .06, .2, 0x8c8c99, 0, .74, -.25)]) },
  toilet: { name: 'مرحاض', cat: 'bath', keep: [0x8c8c99], geo: () => M([b(.4, .3, .5, WHITE, 0, 0, .05), b(.46, .06, .52, 0xf4f1ec, 0, .3, .08), b(.5, .5, .2, WHITE, 0, .25, -.3), b(.1, .03, .08, 0x8c8c99, 0, .75, -.3)]) },
  basin: { name: 'مغسلة', cat: 'bath', keep: [0x7cc8ee, 0x8c8c99], geo: () => M([b(.2, .6, .2, WHITE, 0, 0, -.15), b(.6, .16, .5, WHITE, 0, .6, -.1), b(.44, .02, .34, 0x7cc8ee, 0, .76, -.08),
    b(.05, .16, .05, 0x8c8c99, 0, .76, -.3), b(.05, .05, .14, 0x8c8c99, 0, .9, -.25)]) },
  shower: { name: 'دش', cat: 'bath', keep: [0x8c8c99], geo: () => M([b(.94, .08, .94, WHITE, 0, 0, 0), b(.05, 1.7, .05, 0x8c8c99, -.4, .08, -.4), b(.25, .04, .25, 0x8c8c99, -.28, 1.7, -.28)]),
    glass: () => M([b(.04, 1.6, .9, GLASS, .45, .08, 0), b(.9, 1.6, .04, GLASS, 0, .08, .45)]) },
  mirror: { name: 'مرآة', cat: 'bath', thin: true, keep: [0xcfeaf7], geo: () => M([b(.6, .8, .05, 0xc98a4b, 0, .6, -.46), b(.5, .7, .03, 0xcfeaf7, 0, .65, -.43)]) },

  /* ---------- lights: they glow at night; ceiling ones hang under whatever is above ---------- */
  tableLamp: { name: 'أباجورة', cat: 'light', glow: true, keep: [0x4a4458, WOOD], geo: () => M([b(.4, .4, .4, WOOD, 0, 0, 0), b(.12, .04, .12, 0x4a4458, 0, .4, 0), b(.04, .2, .04, 0x4a4458, 0, .44, 0), b(.26, .2, .26, 0xffe38a, 0, .62, 0)]) },
  tripodLamp: { name: 'مصباح ثلاثي', cat: 'light', glow: true, keep: [WOOD2], geo: () => M([b(.04, 1, .04, WOOD2, .15, 0, .1), b(.04, 1, .04, WOOD2, -.15, 0, .1), b(.04, 1, .04, WOOD2, 0, 0, -.15), b(.36, .3, .36, 0xffe38a, 0, 1, 0)]) },
  wallBar: { name: 'إنارة جدارية', cat: 'light', thin: true, glow: true, keep: [0x4a4458], geo: () => M([b(.56, .12, .03, 0x4a4458, 0, 1.48, -.48), b(.5, .08, .08, 0xffe38a, 0, 1.5, -.44)]) },
  sconce: { name: 'شمعة جدارية', cat: 'light', thin: true, glow: true, keep: [0x4a4458, 0xffc22e], geo: () => M([b(.14, .3, .03, 0x4a4458, 0, 1.1, -.48), b(.04, .04, .2, 0x4a4458, 0, 1.14, -.38), b(.07, .18, .07, 0xf6f2ea, 0, 1.18, -.3), b(.05, .08, .05, 0xffc22e, 0, 1.36, -.3)]) },
  ceilingLamp: { name: 'مصباح سقفي', cat: 'light', thin: true, glow: true, hang: true, keep: [0x4a4458], geo: () => M([b(.2, .04, .2, 0x4a4458, 0, .96, 0), b(.03, .4, .03, 0x4a4458, 0, .58, 0), b(.34, .2, .34, 0xffe38a, 0, .4, 0)]) },
  chandelier: { name: 'ثريا', cat: 'light', thin: true, glow: true, hang: true, keep: [0xc9a227], geo: () => M([b(.04, .42, .04, 0xc9a227, 0, .58, 0), b(.7, .05, .7, 0xc9a227, 0, .55, 0), b(.16, .16, .16, 0xffe38a, 0, .4, 0),
    ...[[.3, .3], [-.3, .3], [.3, -.3], [-.3, -.3]].map(p => b(.1, .14, .1, 0xffe38a, p[0], .6, p[1]))]) },
  ceilingSpot: { name: 'سبوت سقفي', cat: 'light', thin: true, glow: true, hang: true, keep: [0xf6f2ea], geo: () => M([b(.3, .06, .3, 0xf6f2ea, 0, .94, 0), b(.2, .04, .2, 0xffe38a, 0, .9, 0)]) },

  /* ---------- street (two cells long, front towards +z) ---------- */
  car: { name: 'سيارة', cat: 'street', size: [1, 1, 2], keep: [DARK, GLASS, 0xffe38a, 0xb81d35, 0x8c8c99], geo: () => M([b(.8, .3, 1.7, 0xe5383b, 0, .14, .5), b(.72, .28, .8, GLASS, 0, .44, .4), b(.74, .05, .84, 0xe5383b, 0, .72, .4),
    b(.14, .3, .3, DARK, .37, 0, 0), b(.14, .3, .3, DARK, -.37, 0, 0), b(.14, .3, .3, DARK, .37, 0, 1), b(.14, .3, .3, DARK, -.37, 0, 1),
    b(.16, .08, .03, 0xffe38a, .26, .28, 1.36), b(.16, .08, .03, 0xffe38a, -.26, .28, 1.36), b(.16, .08, .03, 0xb81d35, .26, .28, -.36), b(.16, .08, .03, 0xb81d35, -.26, .28, -.36),
    b(.5, .06, .04, 0x8c8c99, 0, .14, 1.36), b(.5, .06, .04, 0x8c8c99, 0, .14, -.36)]) },

  bike: { name: 'دراجة', cat: 'street', keep: [DARK, 0x8c8c99], geo: () => M([b(.06, .4, .4, DARK, 0, 0, .3), b(.06, .4, .4, DARK, 0, 0, -.3), b(.05, .06, .6, 0xe5383b, 0, .36, 0),
    b(.04, .2, .04, 0x8c8c99, 0, .4, -.15), b(.12, .04, .18, DARK, 0, .6, -.15), b(.04, .3, .04, 0x8c8c99, 0, .4, .25), b(.36, .04, .04, DARK, 0, .7, .25)]) },
  road: { name: 'طريق', cat: 'street', flat: true, keep: [WHITE], geo: () => M([b(1, .04, 1, 0x55595f, 0, 0, 0), b(.08, .045, .5, WHITE, 0, 0, 0)]) },
  parking: { name: 'موقف', cat: 'street', flat: true, keep: [WHITE], geo: () => M([b(1, .04, 1, 0x6b7280, 0, 0, 0), b(.06, .045, 1, WHITE, .47, 0, 0), b(.06, .045, 1, WHITE, -.47, 0, 0)]) },
  crossing: { name: 'ممر مشاة', cat: 'street', flat: true, keep: [WHITE], geo: () => M([b(1, .04, 1, 0x55595f, 0, 0, 0), ...[-.36, -.12, .12, .36].map(x => b(.16, .045, 1, WHITE, x, 0, 0))]) },
  streetLamp: { name: 'عمود إنارة', cat: 'street', glow: true, keep: [0x4a4458], geo: () => M([b(.24, .06, .24, 0x4a4458, 0, 0, 0), b(.07, 1.8, .07, 0x4a4458, 0, .06, 0), b(.07, .07, .4, 0x4a4458, 0, 1.8, .17), b(.2, .14, .2, 0xffe38a, 0, 1.66, .34)]) },
  sign: { name: 'إشارة', cat: 'street', keep: [WHITE, 0x8c8c99], geo: () => M([b(.06, 1.1, .06, 0x8c8c99, 0, 0, 0), b(.44, .44, .05, 0xe5383b, 0, 1, 0), b(.3, .08, .06, WHITE, 0, 1.18, 0)]) },
  cone: { name: 'مخروط', cat: 'street', keep: [WHITE], geo: () => M([b(.4, .05, .4, 0xff8c2e, 0, 0, 0), cyl(.04, .16, .5, 0xff8c2e, .05, 8), cyl(.105, .13, .1, WHITE, .2, 8)]) },

  /* ---------- farm ---------- */
  hay: { name: 'كومة قش', cat: 'animal', solid: true, geo: () => M([b(.9, .6, .7, 0xe6c35c, 0, 0, 0), b(.92, .62, .06, 0xb8923a, 0, 0, .2), b(.92, .62, .06, 0xb8923a, 0, 0, -.2)]) },
  trough: { name: 'معلف', cat: 'animal', keep: [0xe6c35c], geo: () => M([b(.9, .3, .5, WOOD, 0, .25, 0), b(.8, .08, .4, 0xe6c35c, 0, .55, 0),
    ...[[.38, .18], [-.38, .18], [.38, -.18], [-.38, -.18]].map(p => b(.08, .25, .08, WOOD2, p[0], 0, p[1]))]) },
  waterTrough: { name: 'حوض ماء', cat: 'animal', keep: [0x7cc8ee], geo: () => M([b(.9, .4, .5, 0x8c8c99, 0, 0, 0), b(.78, .03, .38, 0x7cc8ee, 0, .4, 0)]) },
  coop: { name: 'قنّ دجاج', cat: 'animal', keep: [DARK, ROOF, WOOD2], geo: () => M([b(.8, .5, .7, WOOD, 0, .2, 0), b(.9, .12, .8, ROOF, 0, .7, 0), b(.6, .12, .8, ROOF, 0, .82, 0), b(.2, .26, .03, DARK, 0, .2, .36),
    b(.2, .04, .4, WOOD2, 0, .08, .5, [-.5, 0, 0]), ...[[.34, .28], [-.34, .28], [.34, -.28], [-.34, -.28]].map(p => b(.06, .2, .06, WOOD2, p[0], 0, p[1]))]) },
  dogHouse: { name: 'بيت كلب', cat: 'animal', keep: [DARK, WOOD2], geo: () => M([b(.7, .5, .8, 0xb5382f, 0, 0, 0), b(.84, .12, .9, WOOD2, 0, .5, 0), b(.5, .12, .9, WOOD2, 0, .62, 0), b(.3, .34, .03, DARK, 0, 0, .4)]) },
  wheelbarrow: { name: 'عربة يد', cat: 'animal', keep: [DARK, WOOD2], geo: () => M([b(.5, .2, .6, 0x4fb35a, 0, .25, -.05), b(.08, .26, .26, DARK, 0, 0, .36),
    b(.05, .05, .5, WOOD2, .2, .3, -.5), b(.05, .05, .5, WOOD2, -.2, .3, -.5), b(.05, .25, .05, DARK, .2, 0, -.25), b(.05, .25, .05, DARK, -.2, 0, -.25)]) },
  dog: { name: 'كلب', cat: 'animal', geo: () => M([b(.22, .22, .5, 0xb07a45, 0, .2, -.05), b(.07, .2, .07, 0xb07a45, .08, 0, .14), b(.07, .2, .07, 0xb07a45, -.08, 0, .14), b(.07, .2, .07, 0xb07a45, .08, 0, -.24), b(.07, .2, .07, 0xb07a45, -.08, 0, -.24),
    b(.24, .22, .22, 0xb07a45, 0, .36, .26), b(.12, .1, .1, 0xd9a066, 0, .36, .4), b(.05, .04, .02, DARK, 0, .43, .455), b(.06, .14, .05, 0x6e4a2a, .13, .44, .24), b(.06, .14, .05, 0x6e4a2a, -.13, .44, .24),
    b(.04, .04, .02, DARK, .06, .5, .375), b(.04, .04, .02, DARK, -.06, .5, .375), b(.05, .2, .05, 0xb07a45, 0, .36, -.32)]) },

  /* ---------- garden play ---------- */
  pool: { name: 'مسبح', cat: 'decor', size: [2, 1, 2], keep: [0x4fb7ee, 0x8c8c99], geo: () => M([b(1.9, .3, 1.9, WHITE, .5, 0, .5), b(1.66, .04, 1.66, 0x4fb7ee, .5, .28, .5),
    b(.04, .5, .04, 0x8c8c99, -.3, .2, -.2), b(.04, .5, .04, 0x8c8c99, -.3, .2, 0), b(.04, .04, .2, 0x8c8c99, -.3, .5, -.1), b(.04, .04, .2, 0x8c8c99, -.3, .36, -.1)]) },
  swing: { name: 'أرجوحة', cat: 'decor', keep: [DARK, 0xffd24a], geo: () => M([b(.07, 1.4, .07, 0xe5383b, .44, 0, 0), b(.07, 1.4, .07, 0xe5383b, -.44, 0, 0), b(.95, .07, .07, 0xe5383b, 0, 1.4, 0),
    b(.02, .9, .02, DARK, .15, .5, 0), b(.02, .9, .02, DARK, -.15, .5, 0), b(.4, .05, .2, 0xffd24a, 0, .45, 0)]) },
  slide: { name: 'زحليقة', cat: 'decor', size: [1, 1, 2], keep: [0xffd24a, 0xff8c2e], geo: () => M([b(.06, 1.1, .06, 0x3a66d6, .25, 0, -.35), b(.06, 1.1, .06, 0x3a66d6, -.25, 0, -.35),
    ...[.3, .6, .9].map(y => b(.5, .04, .04, 0x3a66d6, 0, y, -.35)), b(.56, .06, .4, 0x3a66d6, 0, 1, -.2),
    b(.5, .06, 1.7, 0xffd24a, 0, .5, .72, [.58, 0, 0]), b(.05, .14, 1.7, 0xff8c2e, .25, .5, .72, [.58, 0, 0]), b(.05, .14, 1.7, 0xff8c2e, -.25, .5, .72, [.58, 0, 0])]) },
  picnic: { name: 'طاولة نزهة', cat: 'decor', geo: () => M([b(.9, .06, .5, 0xc98a4b, 0, .5, 0), b(.9, .05, .18, 0xc98a4b, 0, .28, .42), b(.9, .05, .18, 0xc98a4b, 0, .28, -.42),
    ...[[.38, .18], [-.38, .18], [.38, -.18], [-.38, -.18]].map(p => b(.06, .5, .06, WOOD2, p[0], 0, p[1])), ...[[.38, .42], [-.38, .42], [.38, -.42], [-.38, -.42]].map(p => b(.06, .28, .06, WOOD2, p[0], 0, p[1]))]) },
  well: { name: 'بئر', cat: 'decor', keep: [0x4fb7ee, DARK, ROOF, WOOD2, WOOD], geo: () => M([cyl(.42, .44, .5, 0xa9a9b6, 0, 10), cyl(.34, .34, .02, 0x4fb7ee, .49, 10), b(.07, .9, .07, WOOD2, .38, .4, 0), b(.07, .9, .07, WOOD2, -.38, .4, 0),
    b(1, .1, .6, ROOF, 0, 1.3, 0), b(.7, .1, .6, ROOF, 0, 1.4, 0), b(.14, .14, .14, WOOD, 0, .8, 0), b(.02, .4, .02, DARK, 0, .92, 0)]) },

  /* ---------- animals (all face +z) ---------- */
  cow: { name: 'بقرة', cat: 'animal', geo: () => M([b(.5, .38, .8, 0xffffff, 0, .28, -.05),
    b(.02, .18, .25, DARK, .255, .4, -.1), b(.02, .14, .2, DARK, -.255, .42, .05), b(.25, .02, .25, DARK, .05, .66, -.2),
    b(.12, .28, .12, 0xffffff, .17, 0, .25), b(.12, .28, .12, 0xffffff, -.17, 0, .25), b(.12, .28, .12, 0xffffff, .17, 0, -.33), b(.12, .28, .12, 0xffffff, -.17, 0, -.33),
    b(.34, .3, .28, 0xffffff, 0, .5, .4), b(.26, .14, .08, 0xf7b6c4, 0, .5, .56), b(.05, .06, .02, DARK, .1, .68, .545), b(.05, .06, .02, DARK, -.1, .68, .545),
    b(.05, .1, .05, 0xe8dcc0, .14, .8, .38), b(.05, .1, .05, 0xe8dcc0, -.14, .8, .38), b(.08, .06, .05, DARK, .2, .72, .36), b(.08, .06, .05, DARK, -.2, .72, .36),
    b(.04, .25, .04, 0xffffff, 0, .4, -.47), b(.16, .06, .16, 0xf7b6c4, 0, .22, -.2)]) },
  sheep: { name: 'خروف', cat: 'animal', geo: () => M([b(.5, .42, .66, 0xf4efe6, 0, .2, -.05), b(.4, .1, .5, 0xf4efe6, 0, .62, -.05),
    b(.09, .2, .09, 0x4a4458, .15, 0, .18), b(.09, .2, .09, 0x4a4458, -.15, 0, .18), b(.09, .2, .09, 0x4a4458, .15, 0, -.28), b(.09, .2, .09, 0x4a4458, -.15, 0, -.28),
    b(.24, .24, .2, 0x4a4458, 0, .4, .36), b(.26, .08, .16, 0xf4efe6, 0, .64, .32), b(.04, .05, .02, 0xfffffe, .07, .52, .465), b(.04, .05, .02, 0xfffffe, -.07, .52, .465),
    b(.07, .05, .05, 0x4a4458, .155, .54, .36), b(.07, .05, .05, 0x4a4458, -.155, .54, .36)]) },
  chicken: { name: 'دجاجة', cat: 'animal', geo: () => M([b(.26, .24, .34, 0xffffff, 0, .12, -.02), b(.14, .2, .08, 0xffffff, 0, .26, -.2), b(.18, .18, .18, 0xffffff, 0, .34, .14),
    b(.05, .07, .12, 0xe5383b, 0, .52, .14), b(.08, .05, .07, 0xff9a2e, 0, .4, .26), b(.05, .06, .03, 0xe5383b, 0, .33, .245),
    b(.02, .04, .04, DARK, .095, .44, .18), b(.02, .04, .04, DARK, -.095, .44, .18), b(.04, .12, .04, 0xff9a2e, .07, 0, 0), b(.04, .12, .04, 0xff9a2e, -.07, 0, 0),
    b(.04, .14, .2, 0xeee6d8, .14, .18, -.02), b(.04, .14, .2, 0xeee6d8, -.14, .18, -.02)]) },
  duck: { name: 'بطة', cat: 'animal', geo: () => M([b(.26, .2, .38, 0xffd94a, 0, .1, -.02), b(.12, .08, .08, 0xffd94a, 0, .24, -.22), b(.18, .18, .18, 0xffd94a, 0, .28, .16),
    b(.14, .04, .1, 0xff9a2e, 0, .32, .29), b(.02, .04, .04, DARK, .095, .38, .2), b(.02, .04, .04, DARK, -.095, .38, .2),
    b(.05, .1, .05, 0xff9a2e, .07, 0, 0), b(.05, .1, .05, 0xff9a2e, -.07, 0, 0), b(.04, .1, .22, 0xf2c530, .14, .14, -.02), b(.04, .1, .22, 0xf2c530, -.14, .14, -.02)]) },
  horse: { name: 'حصان', cat: 'animal', geo: () => M([b(.36, .36, .78, 0xa9683a, 0, .42, -.08),
    b(.1, .42, .1, 0xa9683a, .12, 0, .22), b(.1, .42, .1, 0xa9683a, -.12, 0, .22), b(.1, .42, .1, 0xa9683a, .12, 0, -.38), b(.1, .42, .1, 0xa9683a, -.12, 0, -.38),
    b(.2, .4, .2, 0xa9683a, 0, .62, .3), b(.2, .2, .36, 0xa9683a, 0, .9, .42), b(.06, .42, .1, 0x3d2a1c, 0, .7, .17), b(.08, .36, .08, 0x3d2a1c, 0, .38, -.5),
    b(.02, .05, .05, DARK, .1, .99, .42), b(.02, .05, .05, DARK, -.1, .99, .42), b(.05, .08, .05, 0xa9683a, .07, 1.1, .3), b(.05, .08, .05, 0xa9683a, -.07, 1.1, .3)]) },
  cat: { name: 'قطة', cat: 'animal', geo: () => M([b(.2, .2, .42, 0xff9d3c, 0, .14, -.06), b(.21, .02, .06, 0xd97a1e, 0, .34, -.05), b(.21, .02, .06, 0xd97a1e, 0, .34, -.18),
    b(.06, .14, .06, 0xff9d3c, .07, 0, .1), b(.06, .14, .06, 0xff9d3c, -.07, 0, .1), b(.06, .14, .06, 0xff9d3c, .07, 0, -.22), b(.06, .14, .06, 0xff9d3c, -.07, 0, -.22),
    b(.24, .2, .2, 0xff9d3c, 0, .28, .2), b(.07, .08, .05, 0xff9d3c, .08, .48, .2), b(.07, .08, .05, 0xff9d3c, -.08, .48, .2),
    b(.04, .05, .02, 0x3f9b4b, .06, .38, .3), b(.04, .05, .02, 0x3f9b4b, -.06, .38, .3), b(.04, .03, .02, 0xf06a9b, 0, .34, .3), b(.06, .3, .06, 0xff9d3c, 0, .2, -.3)]) },
};
// End pieces for gable and lean-to roofs: the body is wall (and takes the wall's colour),
// with a layer of roofing on its slope. One set per roofing material.
for (const [sfx, col] of ROOF_MATS) {
  TYPES['gableSlope' + sfx] = { name: 'طرف سقف', cat: 'house', solid: true, roof: true, hidden: true, keep: [col],
    geo: () => M([slopeGeo(WALL), b(1, .1, 1.42, col, 0, .485, .035, [Math.PI / 4, 0, 0])]) };
  TYPES['gableTop' + sfx] = { name: 'طرف قمة', cat: 'house', solid: true, roof: true, hidden: true, keep: [col],
    geo: () => M([tentGeo(WALL), b(1, .1, .72, col, 0, .235, .285, [Math.PI / 4, 0, 0]), b(1, .1, .72, col, 0, .235, -.285, [-Math.PI / 4, 0, 0])]) };
}
// A fence piece that reaches towards its neighbours. mask: 1 = +x, 2 = -x, 4 = +z, 8 = -z.
export function fenceGeo(mask: number): Geo {
  const parts = [b(.1, .56, .1, 0xfbf7ef, 0, 0, 0)];
  const arm = (sx: number, sz: number) => {
    for (const y of [.16, .4]) parts.push(sx ? b(.5, .07, .05, 0xffffff, sx * .25, y, 0) : b(.05, .07, .5, 0xffffff, 0, y, sz * .25));
    for (const d of [.2, .4]) parts.push(sx ? b(.1, .56, .07, 0xfbf7ef, sx * d, 0, 0) : b(.07, .56, .1, 0xfbf7ef, 0, 0, sz * d));
  };
  if (mask & 1) arm(1, 0); if (mask & 2) arm(-1, 0); if (mask & 4) arm(0, 1); if (mask & 8) arm(0, -1);
  return stretch(M(parts), 1, 1.25, 1);
}
for (const t of ['bunny', 'cow', 'sheep', 'chicken', 'duck', 'horse', 'cat', 'dog']) TYPES[t].alive = true;
export const CATS: [Cat, string][] = [['flower', 'زهور'], ['cube', 'مكعبات'], ['open', 'فتحات'], ['house', 'بيت'], ['furniture', 'أثاث'], ['bath', 'حمّام'], ['light', 'إنارة'], ['decor', 'حديقة'], ['animal', 'مزرعة'], ['street', 'شارع']];
for (const t in TYPES) if (TYPES[t].cat === 'flower') TYPES[t].keep = [STEM, LEAF, 0x6b4423];
TYPES.tree.keep = TYPES.blossom.keep = [0x8a5a33];
TYPES.fountain.keep = [0x55bdf2, 0x9adbfa];
TYPES.lantern.keep = [0x4a4458];
// animals keep their faces, beaks, combs and manes
for (const t in TYPES) if (TYPES[t].cat === 'animal') TYPES[t].keep = [DARK, 0xf06a9b, 0xf7a8c4, 0xf7b6c4, 0xff9a2e, 0xe5383b, 0x3d2a1c, 0x4a4458, 0x3f9b4b, 0xfffffe, 0xe8dcc0];
/* ---------- human scale ----------
   A cell is about one metre and the girl stands 1.5 high. Pieces first drawn for a smaller figure
   are stretched here to fit her: tall things taller, big animals bigger, wall pieces hung at eye level. */
function stretch(g: Geo, sx: number, sy: number, sz: number, lift = 0): Geo {
  g.translate(0, .5, 0); g.scale(sx, sy, sz); g.translate(0, -.5 + lift, 0);
  g.computeBoundingBox(); g.computeBoundingSphere(); return g;
}
function fit(t: string, sx: number, sy = sx, sz = sx, lift = 0) {
  const T = TYPES[t], g0 = T.geo, gl = T.glass;
  T.geo = () => stretch(g0(), sx, sy, sz, lift);
  if (gl) T.glass = () => stretch(gl(), sx, sy, sz, lift);
  if (T.leaves) T.leaves = T.leaves.map(l => { const lg = l.geo; return { ...l, geo: () => stretch(lg(), sx, sy, sz, lift) }; });
}
// taller
for (const [t, sy] of [['wardrobe', 1.35], ['bookshelf', 1.35], ['fridge', 1.18], ['lamp', 1.25], ['tripodLamp', 1.15], ['lantern', 1.15], ['streetLamp', 1.4], ['sign', 1.35],
  ['railing', 1.3], ['fence', 1.25], ['gate', 1.2], ['bench', 1.3], ['shower', 1.12], ['swing', 1.4], ['slide', 1.35], ['well', 1.2], ['mailbox', 1.2]] as [string, number][]) fit(t, 1, sy, 1);
// bigger all round
for (const [t, s] of [['cow', 1.3], ['horse', 1.3], ['sheep', 1.15], ['chicken', .8], ['bunny', .8], ['bike', 1.2], ['plant', 1.2]] as [string, number][]) fit(t, s);
// hung higher on the wall
for (const [t, up] of [['wallLamp', .35], ['wallBar', .25], ['sconce', .3], ['clock', .4], ['painting', .35], ['shelf', .3], ['mirror', .25]] as [string, number][]) fit(t, 1, 1, 1, up);
// trees stand three cells tall and take that room
for (const t of ['tree', 'blossom']) { fit(t, 1.55); TYPES[t].size = [1, 3, 1]; }
// a car is two cells wide, three long and higher than one cell
{
  const g0 = TYPES.car.geo;
  TYPES.car.geo = () => { const g = g0(); g.translate(0, .5, -.5); g.scale(1.75, 1.7, 1.75); g.translate(.5, -.5, 1); g.computeBoundingBox(); g.computeBoundingSphere(); return g; };
  TYPES.car.size = [2, 2, 3];
}
// a block fills its cell: cubes and solid house parts
export const isBlock = (t: string) => TYPES[t].cat === 'cube' || !!TYPES[t].solid;
export const isFlower = (t: string) => TYPES[t].cat === 'flower';
