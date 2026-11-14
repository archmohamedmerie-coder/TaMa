import { TYPES, isFlower, type Cat } from './types';
import { voxels } from './world';
import { state } from './save';
import { sfx } from './audio';
import { $, say, toast, confetti, buildPalette, setTab } from './ui';

/* ---------- mission, stars, rewards ---------- */
interface Stats { kinds: number; flowers: number; bench: number }
interface Goal { text: string; max: number; val: (s: Stats) => number; hint: string; tab: Cat }
export const GOALS: Goal[] = [
  { text: 'ازرعي 4 أنواع مختلفة من الزهور', max: 4, val: s => s.kinds, hint: 'افتحي قائمة الزهور في الأسفل. اختاري زهرة ثم اضغطي على العشب، وبعدها جرّبي نوعًا آخر.', tab: 'flower' },
  { text: 'ضعي مقعدًا للراحة', max: 1, val: s => s.bench, hint: 'المقعد موجود في قائمة الحديقة. اضغطي عليه مرة ثانية لتدويره.', tab: 'decor' },
  { text: 'ازرعي 12 زهرة أو أكثر', max: 12, val: s => s.flowers, hint: 'عدّي زهوركِ! أضيفي زهورًا حتى يصبح العدد 12.', tab: 'flower' }
];
export const STAR_PATH = '<svg viewBox="0 0 24 24"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.2l1.5-7L2 9.4l7-.8z"/></svg>';
export function stats(): Stats {
  const kinds = new Set<string>(); let flowers = 0, bench = 0;
  voxels.forEach(v => { if (isFlower(v.t)) { kinds.add(v.t); flowers++; } else if (v.t === 'bench') bench++; });
  return { kinds: kinds.size, flowers, bench };
}
export const starTotal = () => state.stars.filter(Boolean).length;
export function checkGoals(silent: boolean) {
  const s = stats(); let gained = false;
  $('goals').innerHTML = GOALS.map((g, i) => {
    const v = Math.min(g.max, g.val(s));
    if (!state.stars[i] && v >= g.max) { state.stars[i] = true; gained = true; }
    return '<li class="' + (state.stars[i] ? 'done' : '') + '">' + STAR_PATH + '<span>' + g.text + '</span><span class="n">' + (g.max > 1 ? v + ' / ' + g.max : '') + '</span></li>';
  }).join('');
  $('starCount').textContent = starTotal() + ' / 3';
  if (gained) {
    buildPalette();
    if (!silent) {
      const n = starTotal(), un = Object.keys(TYPES).find(t => TYPES[t].stars === n)!;
      sfx.star(); toast('نجمة جديدة! فتحتِ: ' + TYPES[un].name);
      if (n === 3 && !state.winShown) { state.winShown = true; setTimeout(() => { $('win').classList.add('open'); confetti(); sfx.win(); }, 1200); }
      else say(n === 1 ? 'رائع! ظهرت الفراشات في حديقتكِ.' : 'أحسنتِ! بقيت نجمة واحدة.');
    }
  }
}
let hintStep = 0;
export function hint() {
  const i = state.stars.findIndex(v => !v);
  if (i < 0) { say('حديقتكِ جميلة جدًا! جرّبي زر القمر لتري الفوانيس في الليل.'); return; }
  const g = GOALS[i];
  if (hintStep % 2 === 0) say(g.text + '.');
  else { say(g.hint, 7000); setTab(g.tab); const el = document.querySelector<HTMLElement>('.tab[data-cat="' + g.tab + '"]'); if (el) { el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); } }
  hintStep++;
}
