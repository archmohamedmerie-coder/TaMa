import * as THREE from 'three';
import { TYPES, CATS, type Cat } from './types';
import { defaultWorld, replaceWorld, view, type RoofShape, undoStack, redoStack, undo as undoOp, redo as redoOp } from './world';
import { state, save } from './save';
import { sfx } from './audio';
import { GEO, baseMat, ghost, applyNight, applyRoofs, extras, reduceMotion } from './render';
import { STAR_PATH, starTotal, hint } from './mission';
import { tool, setFP, type Mode } from './input';
import { setRoomPreview } from './render';

export const $ = (id: string) => document.getElementById(id) as HTMLElement;

/* ---------- makko bubble, toast, confetti ---------- */
let sayTimer: number | undefined;
export function say(text: string, ms?: number) { const el = $('bubble'); el.textContent = text; el.classList.add('show'); clearTimeout(sayTimer); sayTimer = window.setTimeout(() => el.classList.remove('show'), ms || 5000); }
let toastTimer: number | undefined;
export function toast(text: string) { const el = $('toast'); el.textContent = text; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = window.setTimeout(() => el.classList.remove('show'), 3200); }
export function confetti() {
  if (reduceMotion) return;
  const cols = ['#e2477f', '#ffc22e', '#6a3fa6', '#3f9b4b', '#4fb7ee'];
  for (let i = 0; i < 46; i++) { const d = document.createElement('div'); d.className = 'confetti'; d.style.left = (Math.random() * 100) + '%'; d.style.background = cols[i % 5]; d.style.animationDelay = (Math.random() * .9) + 's'; $('app').appendChild(d); setTimeout(() => d.remove(), 4000); }
}

/* ---------- palette ---------- */
const THUMB: Record<string, string> = {};
function makeThumbs() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 112;
  const r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight(0xffffff, 0x99aa88, 1.9));
  const dl = new THREE.DirectionalLight(0xffffff, 2.2); dl.position.set(2, 4, 3); sc.add(dl);
  const oc = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 50);
  Object.keys(TYPES).forEach(t => {
    const m = new THREE.Mesh(GEO[t], baseMat); sc.add(m);
    const xs = extras(t).map(e => { const x = new THREE.Mesh(e.geo, e.mat); sc.add(x); return x; });
    const bb = GEO[t].boundingBox!, ctr = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
    const s = Math.max(sz.x, sz.y, sz.z) * .78 + .08;
    oc.left = -s; oc.right = s; oc.top = s; oc.bottom = -s; oc.updateProjectionMatrix();
    oc.position.set(ctr.x + 5, ctr.y + 4.4, ctr.z + 6.5); oc.lookAt(ctr);
    r.render(sc, oc); THUMB[t] = cv.toDataURL('image/png'); sc.remove(m, ...xs);
  });
  r.dispose();
}
// paint colours; null gives a piece its own colours back
const PAINTS: [string, number | null][] = [['الأصلي', null], ['أحمر', 0xe5383b], ['برتقالي', 0xff8c2e], ['أصفر', 0xffd24a], ['أخضر', 0x4fb35a], ['سماوي', 0x4fb7ee],
  ['أزرق', 0x3a66d6], ['بنفسجي', 0x9b6fd6], ['وردي', 0xf08fb6], ['أبيض', 0xf6f2ea], ['بني', 0x9a6b3f], ['رمادي', 0x8c8c99]];
const hex = (c: number) => '#' + c.toString(16).padStart(6, '0');
// wall materials offered by the room tool
const WALLS = ['wallWhite', 'wallBrick', 'wallWood', 'wallStone', 'wallBarn'];
// roof tool: shapes (with the piece whose picture stands for them) and materials
const ROOF_SHAPES: [string, string, string | null][] = [['gable', 'جملون', 'roofTop'], ['hip', 'هرمي', 'roofPeak'], ['shed', 'مائل', 'roof'], ['flat', 'مسطّح', 'roofEdge'], ['none', 'بلا سقف', null]];
const ROOF_MATS: [string, number | null, string][] = [['قرميد', null, '#c8553d'], ['خشب', 0x9a6b3f, '#9a6b3f'], ['أردواز', 0x6b7280, '#6b7280']];
let tab: Cat = 'flower';
export function setTab(c: Cat) { tab = c; buildPalette(); }
export function buildPalette() {
  const paint = tool.mode === 'paint' || tool.mode === 'room' || tool.mode === 'roof';
  $('tabs').innerHTML = CATS.map(c => '<button class="tab' + (c[0] === tab && !paint && tool.mode !== 'erase' ? ' on' : '') + '" data-cat="' + c[0] + '">' + c[1] + '</button>').join('');
  if (tool.mode === 'roof') {
    $('items').innerHTML = ROOF_SHAPES.map(s => '<button class="item' + (s[2] ? '' : ' swatch') + (s[0] === tool.roof.shape ? ' on' : '') + '" data-shape="' + s[0] + '">' +
      (s[2] ? '<img alt="" src="' + THUMB[s[2]] + '">' : '<span class="dot none"></span>') + '<span>' + s[1] + '</span></button>').join('') +
      ROOF_MATS.map((o, i) => '<button class="item swatch' + (o[1] === tool.roof.color ? ' on' : '') + '" data-mat="' + i + '"><span class="dot" style="background:' + o[2] + '"></span><span>' + o[0] + '</span></button>').join('');
    return;
  }
  if (tool.mode === 'room') {
    $('items').innerHTML = WALLS.map(t => '<button class="item' + (t === tool.room.wall && !tool.room.demolish ? ' on' : '') + '" data-wall="' + t + '"><img alt="" src="' + THUMB[t] + '"><span>' + TYPES[t].name + '</span></button>').join('') +
      [[1, 'طابق'], [2, 'طابقان'], [3, 'ثلاثة']].map(o => '<button class="item swatch' + (o[0] === tool.room.storeys && !tool.room.demolish ? ' on' : '') + '" data-storeys="' + o[0] + '"><span class="dot num">' + o[0] + '</span><span>' + o[1] + '</span></button>').join('') +
      '<button class="item swatch' + (tool.room.demolish ? ' on' : '') + '" data-demolish="1"><span class="dot none"></span><span>هدم</span></button>';
    return;
  }
  if (tool.mode === 'erase') {
    // the eraser takes pieces; floors and paths only with the second choice, so a missed tap never lifts a floor
    $('items').innerHTML = [['pieces', 'القطع', 'chair'], ['floors', 'الأرضيات', 'plank']].map(o => '<button class="item' + ((o[0] === 'floors') === tool.eraseFloors ? ' on' : '') + '" data-erase="' + o[0] + '"><img alt="" src="' + THUMB[o[2]] + '"><span>' + o[1] + '</span></button>').join('');
    return;
  }
  if (paint) {
    $('items').innerHTML = PAINTS.map(p => '<button class="item swatch' + (p[1] === tool.color ? ' on' : '') + '" data-c="' + (p[1] == null ? '' : p[1]) + '"><span class="dot' +
      (p[1] == null ? ' none"' : '" style="background:' + hex(p[1]) + '"') + '></span><span>' + p[0] + '</span></button>').join('');
    return;
  }
  document.querySelector('.tab.on')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  const n = starTotal();
  $('items').innerHTML = Object.keys(TYPES).filter(t => TYPES[t].cat === tab && !TYPES[t].hidden).map(t => {
    const T = TYPES[t], locked = !!T.stars && n < T.stars;
    return '<button class="item' + (t === tool.selected && tool.mode === 'build' ? ' on' : '') + (locked ? ' locked' : '') + '" data-t="' + t + '"><img alt="" src="' + THUMB[t] + '"><span>' + T.name + '</span>' + (locked ? '<span class="lock">' + T.stars + STAR_PATH + '</span>' : '') + '</button>';
  }).join('');
}

function setMode(m: Mode) {
  // the view through her eyes belongs to walking; any other tool returns to the garden view
  if (m !== 'walk' && view.fp) { setFP(false); $('fpBtn').classList.remove('on'); }
  tool.mode = m; $('tBuild').classList.toggle('on', m === 'build'); $('tErase').classList.toggle('on', m === 'erase'); $('tPaint').classList.toggle('on', m === 'paint'); $('tTurn').classList.toggle('on', m === 'turn'); $('tMove').classList.toggle('on', m === 'move'); $('tSize').classList.toggle('on', m === 'size'); $('tWalk').classList.toggle('on', m === 'walk'); $('tRoom').classList.toggle('on', m === 'room'); $('tRoof').classList.toggle('on', m === 'roof'); setRoomPreview(null); ghost.visible = false; ghost.scale.set(1, 1, 1); buildPalette(); }
export function syncUndo() { ($('tUndo') as HTMLButtonElement).disabled = !undoStack.length; ($('tRedo') as HTMLButtonElement).disabled = !redoStack.length; }
export function undo() { if (undoOp()) sfx.turn(); }
export function redo() { if (redoOp()) sfx.turn(); }

export function initUI() {
  makeThumbs();
  const pal = document.querySelector<HTMLElement>('.palette')!;
  new ResizeObserver(() => document.documentElement.style.setProperty('--pal', pal.offsetHeight + 'px')).observe(pal);
  $('tabs').addEventListener('click', e => { const el = (e.target as HTMLElement).closest<HTMLElement>('.tab'); if (el) { if (tool.mode === 'paint' || tool.mode === 'walk' || tool.mode === 'room' || tool.mode === 'roof' || tool.mode === 'erase') tool.mode = 'build'; setTab(el.dataset.cat as Cat); setMode(tool.mode); sfx.tick(); } });
  $('items').addEventListener('click', e => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('.item'); if (!el) return;
    if (el.dataset.shape) { tool.roof.shape = el.dataset.shape as RoofShape; buildPalette(); sfx.tick(); return; }
    if (el.dataset.mat) { tool.roof.color = ROOF_MATS[Number(el.dataset.mat)][1]; buildPalette(); sfx.tick(); return; }
    if (el.dataset.wall) { tool.room.wall = el.dataset.wall; tool.room.demolish = false; buildPalette(); sfx.tick(); return; }
    if (el.dataset.storeys) { tool.room.storeys = Number(el.dataset.storeys); tool.room.demolish = false; buildPalette(); sfx.tick(); return; }
    if (el.dataset.demolish) { tool.room.demolish = true; buildPalette(); sfx.tick(); say('اضغطي على جدار الغرفة التي تريدين هدمها. الأثاث يبقى مكانه.', 4500); return; }
    if (el.dataset.erase) { tool.eraseFloors = el.dataset.erase === 'floors'; buildPalette(); sfx.tick(); say(tool.eraseFloors ? 'اضغطي على أرضية أو ممر لإزالته.' : 'اضغطي على أي قطعة لإزالتها.', 3000); return; }
    if (el.dataset.c !== undefined) { tool.color = el.dataset.c === '' ? null : Number(el.dataset.c); buildPalette(); sfx.tick(); return; }
    const t = el.dataset.t!, T = TYPES[t];
    if (T.stars && starTotal() < T.stars) { sfx.no(); say(T.stars === 1 ? 'هذه القطعة تُفتح بعد أول نجمة.' : 'هذه القطعة تُفتح عندما تجمعين ' + T.stars + ' نجوم.'); return; }
    tool.selected = t; setMode('build'); sfx.tick();
  });
  $('tBuild').onclick = () => setMode('build');
  $('tErase').onclick = () => { tool.eraseFloors = false; setMode('erase'); say('اضغطي على أي قطعة لإزالتها. الجدران والأرضيات لا تُمحى بالخطأ.', 4000); };
  $('tPaint').onclick = () => { setMode('paint'); say('اختاري لونًا ثم اضغطي على أي قطعة.', 3000); };
  $('tTurn').onclick = () => { setMode('turn'); say('اضغطي على أي قطعة لتدويرها.', 3000); };
  $('tMove').onclick = () => { setMode('move'); say('ضعي إصبعكِ على القطعة واسحبيها إلى مكانها الجديد.', 4000); };
  $('tSize').onclick = () => { setMode('size'); say('اضغطي على القطعة لتختاريها، ثم اسحبي إصبعكِ للأعلى لتكبيرها وللأسفل لتصغيرها.', 5000); };
  $('tWalk').onclick = () => { setMode('walk'); say('ضعي إصبعكِ على الشاشة لتمشي صديقتكِ نحوه. قاربكِ ينتظركِ عند الرصيف.', 5000); };
  $('tRoom').onclick = () => { tool.room.demolish = false; setMode('room'); say('اسحبي إصبعكِ على الأرض لترسمي غرفة.', 4000); };
  $('tRoof').onclick = () => { setMode('roof'); say('اختاري شكل السقف ثم اضغطي على البيت.', 4000); };
  $('tUndo').onclick = undo; $('tRedo').onclick = redo;
  $('makkoBtn').onclick = hint;
  $('missionBtn').onclick = () => { const o = $('mission').classList.toggle('open'); $('missionBtn').setAttribute('aria-expanded', String(o)); };
  $('nightBtn').onclick = () => { state.night = !state.night; applyNight(); save(); say(state.night ? 'حلّ الليل. الفوانيس تضيء الحديقة.' : 'أشرقت الشمس من جديد.', 3000); };
  $('roofBtn').onclick = () => { view.hideRoofs = !view.hideRoofs; applyRoofs(); ghost.visible = false; $('roofBtn').classList.toggle('off', view.hideRoofs); say(view.hideRoofs ? 'أخفيتُ الأسقف. الآن ترين داخل البيوت.' : 'عادت الأسقف إلى مكانها.', 3000); };
  $('fpBtn').onclick = () => {
    const on = !view.fp;
    if (on) setMode('walk');
    setFP(on); $('fpBtn').classList.toggle('on', on);
    say(on ? 'أنتِ ترين الآن بعينَي صديقتكِ. اسحبي إصبعكِ لتنظري حولكِ، واضغطي على المكان الذي تريدين المشي إليه.' : 'عدتِ إلى منظر الحديقة.', on ? 7000 : 3000);
  };
  $('soundBtn').onclick = () => { state.muted = !state.muted; $('soundBtn').classList.toggle('off', state.muted); save(); };
  $('resetBtn').onclick = () => $('confirm').classList.add('open');
  $('confirmNo').onclick = () => $('confirm').classList.remove('open');
  $('confirmYes').onclick = () => { $('confirm').classList.remove('open'); replaceWorld(defaultWorld()); say('حديقة جديدة جاهزة!'); };
  $('confirmEmpty').onclick = () => { $('confirm').classList.remove('open'); replaceWorld([]); say('أرض فارغة! ابني ما تحبين.'); };
  $('winBtn').onclick = () => { $('win').classList.remove('open'); save(); };
  $('startBtn').onclick = () => { sfx.star(); $('intro').classList.remove('open'); state.seenIntro = true; save(); say('مرحبًا! أنا مكّو. هيا نملأ الحديقة بالزهور.', 6000); };
}
