import * as THREE from 'three';
import { TYPES, CATS, type Cat } from './types';
import { defaultWorld, replaceWorld, view, undoStack, redoStack, undo as undoOp, redo as redoOp } from './world';
import { state, save } from './save';
import { sfx } from './audio';
import { GEO, baseMat, ghost, applyNight, applyRoofs, reduceMotion } from './render';
import { STAR_PATH, starTotal, hint } from './mission';
import { tool, type Mode } from './input';

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
    const bb = GEO[t].boundingBox!, ctr = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
    const s = Math.max(sz.x, sz.y, sz.z) * .78 + .08;
    oc.left = -s; oc.right = s; oc.top = s; oc.bottom = -s; oc.updateProjectionMatrix();
    oc.position.set(ctr.x + 5, ctr.y + 4.4, ctr.z + 6.5); oc.lookAt(ctr);
    r.render(sc, oc); THUMB[t] = cv.toDataURL('image/png'); sc.remove(m);
  });
  r.dispose();
}
// paint colours; null gives a piece its own colours back
const PAINTS: [string, number | null][] = [['الأصلي', null], ['أحمر', 0xe5383b], ['برتقالي', 0xff8c2e], ['أصفر', 0xffd24a], ['أخضر', 0x4fb35a], ['سماوي', 0x4fb7ee],
  ['أزرق', 0x3a66d6], ['بنفسجي', 0x9b6fd6], ['وردي', 0xf08fb6], ['أبيض', 0xf6f2ea], ['بني', 0x9a6b3f], ['رمادي', 0x8c8c99]];
const hex = (c: number) => '#' + c.toString(16).padStart(6, '0');
let tab: Cat = 'flower';
export function setTab(c: Cat) { tab = c; buildPalette(); }
export function buildPalette() {
  const paint = tool.mode === 'paint';
  $('tabs').innerHTML = CATS.map(c => '<button class="tab' + (c[0] === tab && !paint ? ' on' : '') + '" data-cat="' + c[0] + '">' + c[1] + '</button>').join('');
  if (paint) {
    $('items').innerHTML = PAINTS.map(p => '<button class="item swatch' + (p[1] === tool.color ? ' on' : '') + '" data-c="' + (p[1] == null ? '' : p[1]) + '"><span class="dot' +
      (p[1] == null ? ' none"' : '" style="background:' + hex(p[1]) + '"') + '></span><span>' + p[0] + '</span></button>').join('');
    return;
  }
  const n = starTotal();
  $('items').innerHTML = Object.keys(TYPES).filter(t => TYPES[t].cat === tab).map(t => {
    const T = TYPES[t], locked = !!T.stars && n < T.stars;
    return '<button class="item' + (t === tool.selected && tool.mode === 'build' ? ' on' : '') + (locked ? ' locked' : '') + '" data-t="' + t + '"><img alt="" src="' + THUMB[t] + '"><span>' + T.name + '</span>' + (locked ? '<span class="lock">' + T.stars + STAR_PATH + '</span>' : '') + '</button>';
  }).join('');
}

function setMode(m: Mode) { tool.mode = m; $('tBuild').classList.toggle('on', m === 'build'); $('tErase').classList.toggle('on', m === 'erase'); $('tPaint').classList.toggle('on', m === 'paint'); $('tTurn').classList.toggle('on', m === 'turn'); ghost.visible = false; buildPalette(); }
export function syncUndo() { ($('tUndo') as HTMLButtonElement).disabled = !undoStack.length; ($('tRedo') as HTMLButtonElement).disabled = !redoStack.length; }
export function undo() { if (undoOp()) sfx.turn(); }
export function redo() { if (redoOp()) sfx.turn(); }

export function initUI() {
  makeThumbs();
  $('tabs').addEventListener('click', e => { const el = (e.target as HTMLElement).closest<HTMLElement>('.tab'); if (el) { if (tool.mode === 'paint') tool.mode = 'build'; setTab(el.dataset.cat as Cat); setMode(tool.mode); sfx.tick(); } });
  $('items').addEventListener('click', e => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('.item'); if (!el) return;
    if (el.dataset.c !== undefined) { tool.color = el.dataset.c === '' ? null : Number(el.dataset.c); buildPalette(); sfx.tick(); return; }
    const t = el.dataset.t!, T = TYPES[t];
    if (T.stars && starTotal() < T.stars) { sfx.no(); say(T.stars === 1 ? 'هذه القطعة تُفتح بعد أول نجمة.' : 'هذه القطعة تُفتح عندما تجمعين ' + T.stars + ' نجوم.'); return; }
    tool.selected = t; setMode('build'); sfx.tick();
  });
  $('tBuild').onclick = () => setMode('build');
  $('tErase').onclick = () => { setMode('erase'); say('اضغطي على أي قطعة لإزالتها.', 3000); };
  $('tPaint').onclick = () => { setMode('paint'); say('اختاري لونًا ثم اضغطي على أي قطعة.', 3000); };
  $('tTurn').onclick = () => { setMode('turn'); say('اضغطي على أي قطعة لتدويرها.', 3000); };
  $('tUndo').onclick = undo; $('tRedo').onclick = redo;
  $('makkoBtn').onclick = hint;
  $('missionBtn').onclick = () => { const o = $('mission').classList.toggle('open'); $('missionBtn').setAttribute('aria-expanded', String(o)); };
  $('nightBtn').onclick = () => { state.night = !state.night; applyNight(); save(); say(state.night ? 'حلّ الليل. الفوانيس تضيء الحديقة.' : 'أشرقت الشمس من جديد.', 3000); };
  $('roofBtn').onclick = () => { view.hideRoofs = !view.hideRoofs; applyRoofs(); ghost.visible = false; $('roofBtn').classList.toggle('off', view.hideRoofs); say(view.hideRoofs ? 'أخفيتُ الأسقف. الآن ترين داخل البيوت.' : 'عادت الأسقف إلى مكانها.', 3000); };
  $('soundBtn').onclick = () => { state.muted = !state.muted; $('soundBtn').classList.toggle('off', state.muted); save(); };
  $('resetBtn').onclick = () => $('confirm').classList.add('open');
  $('confirmNo').onclick = () => $('confirm').classList.remove('open');
  $('confirmYes').onclick = () => { $('confirm').classList.remove('open'); replaceWorld(defaultWorld()); say('حديقة جديدة جاهزة!'); };
  $('confirmEmpty').onclick = () => { $('confirm').classList.remove('open'); replaceWorld([]); say('أرض فارغة! ابني ما تحبين.'); };
  $('winBtn').onclick = () => { $('win').classList.remove('open'); save(); };
  $('startBtn').onclick = () => { sfx.star(); $('intro').classList.remove('open'); state.seenIntro = true; save(); say('مرحبًا! أنا مكّو. هيا نملأ الحديقة بالزهور.', 6000); };
}
