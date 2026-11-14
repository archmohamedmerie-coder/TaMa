import * as THREE from 'three';
import { TYPES, CATS, type Cat } from './types';
import { defaultWorld, loadWorld, undoStack, redoStack, hooks, undo as undoOp, redo as redoOp } from './world';
import { state, save } from './save';
import { sfx } from './audio';
import { GEO, baseMat, ghost, applyNight, reduceMotion } from './render';
import { STAR_PATH, starTotal, hint } from './mission';
import { tool } from './input';

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
let tab: Cat = 'flower';
export function setTab(c: Cat) { tab = c; buildPalette(); }
export function buildPalette() {
  $('tabs').innerHTML = CATS.map(c => '<button class="tab' + (c[0] === tab ? ' on' : '') + '" data-cat="' + c[0] + '">' + c[1] + '</button>').join('');
  const n = starTotal();
  $('items').innerHTML = Object.keys(TYPES).filter(t => TYPES[t].cat === tab).map(t => {
    const T = TYPES[t], locked = !!T.stars && n < T.stars;
    return '<button class="item' + (t === tool.selected && tool.mode === 'build' ? ' on' : '') + (locked ? ' locked' : '') + '" data-t="' + t + '"><img alt="" src="' + THUMB[t] + '"><span>' + T.name + '</span>' + (locked ? '<span class="lock">' + T.stars + STAR_PATH + '</span>' : '') + '</button>';
  }).join('');
}

function setMode(m: 'build' | 'erase') { tool.mode = m; $('tBuild').classList.toggle('on', m === 'build'); $('tErase').classList.toggle('on', m === 'erase'); ghost.visible = false; buildPalette(); }
export function syncUndo() { ($('tUndo') as HTMLButtonElement).disabled = !undoStack.length; ($('tRedo') as HTMLButtonElement).disabled = !redoStack.length; }
export function undo() { if (undoOp()) sfx.turn(); }
export function redo() { if (redoOp()) sfx.turn(); }

export function initUI() {
  makeThumbs();
  $('tabs').addEventListener('click', e => { const el = (e.target as HTMLElement).closest<HTMLElement>('.tab'); if (el) { setTab(el.dataset.cat as Cat); sfx.tick(); } });
  $('items').addEventListener('click', e => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('.item'); if (!el) return;
    const t = el.dataset.t!, T = TYPES[t];
    if (T.stars && starTotal() < T.stars) { sfx.no(); say(T.stars === 1 ? 'هذه القطعة تُفتح بعد أول نجمة.' : 'هذه القطعة تُفتح عندما تجمعين ' + T.stars + ' نجوم.'); return; }
    tool.selected = t; setMode('build'); sfx.tick();
  });
  $('tBuild').onclick = () => setMode('build');
  $('tErase').onclick = () => { setMode('erase'); say('اضغطي على أي قطعة لإزالتها.', 3000); };
  $('tUndo').onclick = undo; $('tRedo').onclick = redo;
  $('makkoBtn').onclick = hint;
  $('missionBtn').onclick = () => { const o = $('mission').classList.toggle('open'); $('missionBtn').setAttribute('aria-expanded', String(o)); };
  $('nightBtn').onclick = () => { state.night = !state.night; applyNight(); save(); say(state.night ? 'حلّ الليل. الفوانيس تضيء الحديقة.' : 'أشرقت الشمس من جديد.', 3000); };
  $('soundBtn').onclick = () => { state.muted = !state.muted; $('soundBtn').classList.toggle('off', state.muted); save(); };
  $('resetBtn').onclick = () => $('confirm').classList.add('open');
  $('confirmNo').onclick = () => $('confirm').classList.remove('open');
  $('confirmYes').onclick = () => { $('confirm').classList.remove('open'); loadWorld(defaultWorld()); undoStack.length = 0; redoStack.length = 0; syncUndo(); hooks.afterChange(); say('حديقة جديدة جاهزة!'); };
  $('winBtn').onclick = () => { $('win').classList.remove('open'); save(); };
  $('startBtn').onclick = () => { sfx.star(); $('intro').classList.remove('open'); state.seenIntro = true; save(); say('مرحبًا! أنا مكّو. هيا نملأ الحديقة بالزهور.', 6000); };
}
