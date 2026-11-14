import { TYPES } from './types';
import { state } from './save';

let actx: AudioContext | null = null;
function beep(f: number, d: number, slide?: number, type?: OscillatorType, vol?: number) {
  if (state.muted) return;
  try {
    actx = actx || new (window.AudioContext || (window as any).webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(f * slide, t + d);
    g.gain.setValueAtTime(vol || .09, t); g.gain.exponentialRampToValueAtTime(.001, t + d);
    o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + d);
  } catch (e) { /* audio unavailable */ }
}
function chirp() { [0, .11, .22].forEach((d, i) => setTimeout(() => beep(2300 + i * 260, .07, 1.25, 'sine', .022), d * 1000)); }
function cricket() { for (let i = 0; i < 5; i++) setTimeout(() => beep(4300, .03, 1, 'sine', .012), i * 60); }
export const sfx = {
  place: (t: string) => {
    const c = TYPES[t].cat;
    if (c === 'flower') { beep(880, .16, 1, 'sine', .07); setTimeout(() => beep(1320, .22, 1, 'sine', .06), 90); }
    else if (c === 'cube') { beep(190, .1, .7, 'triangle', .16); }
    else { beep(320, .07, .8, 'square', .045); setTimeout(() => beep(420, .08, .8, 'triangle', .09), 70); }
  },
  remove: () => beep(420, .13, .45, 'sine', .1),
  turn: () => beep(700, .06, 1.2, 'sine', .07),
  tick: () => beep(980, .035, 1, 'sine', .04),
  no: () => beep(200, .12, .9, 'triangle', .09),
  splash: () => { beep(600, .25, 2.2, 'sine', .05); setTimeout(() => beep(900, .2, 1.8, 'sine', .04), 80); },
  star: () => { [660, 880, 1175, 1568].forEach((f, i) => setTimeout(() => beep(f, .26, 1, 'triangle', .11), i * 120)); },
  win: () => { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => setTimeout(() => beep(f, .3, 1, 'triangle', .11), i * 150)); }
};
// soft garden ambience: birds by day, crickets by night
let ambTimer: number | undefined;
export function ambience() {
  clearTimeout(ambTimer);
  ambTimer = window.setTimeout(() => { if (!document.hidden && actx) { state.night ? cricket() : chirp(); } ambience(); }, 3500 + Math.random() * 5000);
}
