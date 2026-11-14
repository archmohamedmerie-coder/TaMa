import { voxels, unK, loadWorld, type Entry } from './world';

export const SAVE_KEY = 'makabi-garden-v1';
export const state = { stars: [false, false, false], night: false, muted: false, seenIntro: false, winShown: false };

let saveTimer: number | undefined;
export function saveNow() {
  try {
    const list: Entry[] = []; voxels.forEach((v, k) => { const c = unK(k); const e: Entry = [c[0], c[1], c[2], v.t, v.r || 0]; if (v.c != null) e.push(v.c); list.push(e); });
    localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 2, voxels: list, state }));
  } catch (e) { /* storage unavailable */ }
}
export function save() { clearTimeout(saveTimer); saveTimer = window.setTimeout(saveNow, 400); }
export function restore(): boolean {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (d && (d.v === 1 || d.v === 2) && Array.isArray(d.voxels)) {
      Object.assign(state, d.state || {});
      // v1 stored rotation in quarter turns; v2 stores steps of 45°
      loadWorld(d.v === 1 ? d.voxels.map((e: Entry) => [e[0], e[1], e[2], e[3], (e[4] || 0) * 2]) : d.voxels);
      return true;
    }
  } catch (e) { /* corrupt save */ }
  return false;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); });
window.addEventListener('pagehide', saveNow);
