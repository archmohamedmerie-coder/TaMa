import { voxels, unK, loadWorld, OFF, type Entry } from './world';

export const SAVE_KEY = 'makabi-garden-v1';
export const state = { stars: [false, false, false], night: false, muted: false, seenIntro: false, winShown: false, hero: null as number[] | null };

let saveTimer: number | undefined;
export function saveNow() {
  try {
    const list: Entry[] = []; voxels.forEach((v, k) => { if (v.of != null) return; const c = unK(k); const e: Entry = [c[0], c[1], c[2], v.t, v.r || 0]; if (v.c != null) e.push(v.c); list.push(e); });
    localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 3, voxels: list, state }));
  } catch (e) { /* storage unavailable */ }
}
export function save() { clearTimeout(saveTimer); saveTimer = window.setTimeout(saveNow, 400); }
export function restore(): boolean {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (d && (d.v === 1 || d.v === 2 || d.v === 3) && Array.isArray(d.voxels)) {
      Object.assign(state, d.state || {});
      let list: Entry[] = d.voxels;
      // v1 stored rotation in quarter turns; later versions store steps of 45°
      if (d.v === 1) list = list.map(e => [e[0], e[1], e[2], e[3], (e[4] || 0) * 2]);
      // v1 and v2 were a 20×20 garden; it now sits in the middle of the larger land
      if (d.v < 3) {
        list = list.map(e => [e[0] + OFF, e[1], e[2] + OFF, e[3], e[4] || 0, e[5]] as Entry);
        if (Array.isArray(state.hero)) state.hero = [state.hero[0] + OFF, state.hero[1], state.hero[2] + OFF];
      }
      loadWorld(list);
      return true;
    }
  } catch (e) { /* corrupt save */ }
  return false;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); });
window.addEventListener('pagehide', saveNow);
