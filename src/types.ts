import * as THREE from 'three';

export type Cat = 'cube' | 'flower' | 'decor' | 'house' | 'furniture' | 'animal';
export interface PieceType {
  name: string;
  cat: Cat;
  geo: () => THREE.BufferGeometry;
  stars?: number;
  flat?: boolean;
  glow?: boolean;
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
const WALL = 0xf6f2ea, GLASS = 0x8fd3f4, ROOF = 0xc8553d, ROOF2 = 0xb5482f, DARK = 0x2b2140, STEPS = [0, 1, 2, 3];
const WOOD = 0xb07a45, WOOD2 = 0x8a5a33, BOOKS = [0xe5383b, 0xffd24a, 0x4fb35a, 0x3a66d6, 0x9b6fd6];
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
  bunny: { name: 'أرنب', cat: 'animal', stars: 3, geo: () => M([b(.3, .26, .4, 0xffffff, 0, .05, -.04), b(.1, .05, .14, 0xf2ece0, -.1, 0, .1), b(.1, .05, .14, 0xf2ece0, .1, 0, .1), b(.26, .24, .24, 0xffffff, 0, .28, .14),
    b(.07, .26, .05, 0xffffff, -.07, .52, .12), b(.07, .26, .05, 0xffffff, .07, .52, .12), b(.03, .18, .02, 0xf7a8c4, -.07, .55, .146), b(.03, .18, .02, 0xf7a8c4, .07, .55, .146),
    b(.1, .1, .1, 0xffffff, 0, .14, -.28), b(.04, .05, .02, 0x2b2140, -.07, .4, .26), b(.04, .05, .02, 0x2b2140, .07, .4, .26), b(.05, .04, .02, 0xf06a9b, 0, .33, .26)]) },

  /* ---------- house parts ---------- */
  window: { name: 'نافذة', cat: 'house', solid: true, keep: [GLASS], geo: () => M([b(1, 1, 1, WALL, 0, 0, 0)].concat(...[.505, -.505].map(o => [
    b(.56, .56, .02, GLASS, 0, .22, o), b(.06, .56, .03, 0xffffff, 0, .22, o * 1.01), b(.56, .06, .03, 0xffffff, 0, .47, o * 1.01),
    b(.02, .56, .56, GLASS, o, .22, 0), b(.03, .56, .06, 0xffffff, o * 1.01, .22, 0), b(.03, .06, .56, 0xffffff, o * 1.01, .47, 0)]))) },
  door: { name: 'باب', cat: 'house', solid: true, keep: [0x8a5a33, 0xa9683a, 0xffd24a], geo: () => M([b(1, 1, 1, WALL, 0, 0, 0)].concat(...[1, -1].map(s => [
    b(.5, .86, .03, 0x8a5a33, 0, 0, s * .505), b(.34, .3, .02, 0xa9683a, 0, .46, s * .52), b(.06, .06, .04, 0xffd24a, s * .15, .38, s * .53)]))) },
  roof: { name: 'سقف مائل', cat: 'house', solid: true, roof: true, geo: () => M(STEPS.map(i => b(1, .25, 1 - i * .25, i % 2 ? ROOF2 : ROOF, 0, i * .25, -i * .125))) },
  roofCorner: { name: 'زاوية سقف', cat: 'house', solid: true, roof: true, geo: () => M(STEPS.map(i => b(1 - i * .25, .25, 1 - i * .25, i % 2 ? ROOF2 : ROOF, -i * .125, i * .25, -i * .125))) },
  roofTop: { name: 'قمة سقف', cat: 'house', solid: true, roof: true, geo: () => M(STEPS.map(i => b(1, .25, 1 - i * .25, i % 2 ? ROOF2 : ROOF, 0, i * .25, 0))) },
  roofPeak: { name: 'قمة برج', cat: 'house', solid: true, roof: true, geo: () => M(STEPS.map(i => b(1 - i * .25, .25, 1 - i * .25, i % 2 ? ROOF2 : ROOF, 0, i * .25, 0))) },
  chimney: { name: 'مدخنة', cat: 'house', roof: true, keep: [DARK], geo: () => M([b(.4, .7, .4, 0xa8523a, 0, 0, 0), b(.5, .1, .5, 0x8c3f2b, 0, .7, 0), b(.3, .04, .3, DARK, 0, .8, 0)]) },

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
  lamp: { name: 'مصباح', cat: 'furniture', glow: true, keep: [0x4a4458], geo: () => M([b(.24, .05, .24, 0x4a4458, 0, 0, 0), b(.05, .9, .05, 0x4a4458, 0, .05, 0), b(.34, .26, .34, 0xffe38a, 0, .9, 0)]) },
  rug: { name: 'سجادة', cat: 'furniture', flat: true, geo: () => M([b(.98, .04, .98, 0xe2477f, 0, 0, 0), b(.74, .05, .74, 0xffd6e6, 0, 0, 0)]) },
  curtain: { name: 'ستارة', cat: 'furniture', keep: [0x4a4458], geo: () => M([b(1, .05, .05, 0x4a4458, 0, .92, -.43), b(.3, .9, .07, 0xe2477f, .34, .03, -.43), b(.3, .9, .07, 0xe2477f, -.34, .03, -.43),
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
export const CATS: [Cat, string][] = [['flower', 'زهور'], ['cube', 'مكعبات'], ['house', 'بيت'], ['furniture', 'أثاث'], ['decor', 'زينة'], ['animal', 'حيوانات']];
for (const t in TYPES) if (TYPES[t].cat === 'flower') TYPES[t].keep = [STEM, LEAF, 0x6b4423];
TYPES.tree.keep = TYPES.blossom.keep = [0x8a5a33];
TYPES.fountain.keep = [0x55bdf2, 0x9adbfa];
TYPES.lantern.keep = [0x4a4458];
// animals keep their faces, beaks, combs and manes
for (const t in TYPES) if (TYPES[t].cat === 'animal') TYPES[t].keep = [DARK, 0xf06a9b, 0xf7a8c4, 0xf7b6c4, 0xff9a2e, 0xe5383b, 0x3d2a1c, 0x4a4458, 0x3f9b4b, 0xfffffe, 0xe8dcc0];
// a block fills its cell: cubes and solid house parts
export const isBlock = (t: string) => TYPES[t].cat === 'cube' || !!TYPES[t].solid;
export const isFlower = (t: string) => TYPES[t].cat === 'flower';
