import * as THREE from 'three';

export type Cat = 'cube' | 'flower' | 'decor';
export interface PieceType {
  name: string;
  cat: Cat;
  geo: () => THREE.BufferGeometry;
  stars?: number;
  flat?: boolean;
  glow?: boolean;
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
const b = (w: number, h: number, d: number, color: number, x: number, yb: number, z: number, rot?: V3) =>
  P(new THREE.BoxGeometry(w, h, d), color, [x, -0.5 + yb + h / 2, z], rot);
const cyl = (rt: number, rb: number, h: number, color: number, yb: number, seg?: number) =>
  P(new THREE.CylinderGeometry(rt, rb, h, seg || 8), color, [0, -0.5 + yb + h / 2, 0]);
function M(parts: Geo[]): Geo {
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
const stem = (x: number, z: number, h: number, t?: number): Geo[] =>
  [b(t || .06, h, t || .06, STEM, x, 0, z), b(.16, .04, .09, LEAF, x + .09, h * .4, z)];
const SPOTS = [[-.22, -.16, .34], [.2, -.04, .46], [-.03, .22, .28]];
const grow = (g: Geo) => { g.translate(0, .5, 0); g.scale(1.25, 1.35, 1.25); g.translate(0, -.5, 0); g.computeBoundingBox(); g.computeBoundingSphere(); return g; };
const cluster = (fn: (x: number, z: number, h: number) => Geo[]) => grow(M(SPOTS.flatMap(s => fn(s[0], s[1], s[2]))));
const petals4 = (x: number, z: number, y: number, color: number, r: number, s: number): Geo[] =>
  [b(s, .05, s, color, x + r, y, z), b(s, .05, s, color, x - r, y, z), b(s, .05, s, color, x, y, z + r), b(s, .05, s, color, x, y, z - r)];

/* ---------- block & item types ---------- */
export const TYPES: Record<string, PieceType> = {
  grass: { name: 'عشب', cat: 'cube', geo: () => M([b(1, .78, 1, 0x9a6b3f, 0, 0, 0), b(1, .22, 1, 0x62b84f, 0, .78, 0)]) },
  stone: { name: 'حجر', cat: 'cube', geo: () => cube(0xa9a9b6) },
  wood: { name: 'خشب', cat: 'cube', geo: () => cube(0xb07a45) },
  white: { name: 'أبيض', cat: 'cube', geo: () => cube(0xf6f2ea) },
  pink: { name: 'وردي', cat: 'cube', geo: () => cube(0xf08fb6) },
  purple: { name: 'بنفسجي', cat: 'cube', geo: () => cube(0x9b6fd6) },
  yellow: { name: 'أصفر', cat: 'cube', geo: () => cube(0xffd24a) },
  water: { name: 'ماء', cat: 'cube', geo: () => cube(0x4fb7ee) },

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
  bunny: { name: 'أرنب', cat: 'decor', stars: 3, geo: () => M([b(.3, .26, .4, 0xffffff, 0, .05, -.04), b(.1, .05, .14, 0xf2ece0, -.1, 0, .1), b(.1, .05, .14, 0xf2ece0, .1, 0, .1), b(.26, .24, .24, 0xffffff, 0, .28, .14),
    b(.07, .26, .05, 0xffffff, -.07, .52, .12), b(.07, .26, .05, 0xffffff, .07, .52, .12), b(.03, .18, .02, 0xf7a8c4, -.07, .55, .146), b(.03, .18, .02, 0xf7a8c4, .07, .55, .146),
    b(.1, .1, .1, 0xffffff, 0, .14, -.28), b(.04, .05, .02, 0x2b2140, -.07, .4, .26), b(.04, .05, .02, 0x2b2140, .07, .4, .26), b(.05, .04, .02, 0xf06a9b, 0, .33, .26)]) }
};
export const CATS: [Cat, string][] = [['flower', 'زهور'], ['cube', 'مكعبات'], ['decor', 'زينة']];
export const isCube = (t: string) => TYPES[t].cat === 'cube';
export const isFlower = (t: string) => TYPES[t].cat === 'flower';
