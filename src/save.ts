import { voxels, unK, loadWorld, type Entry } from './world';

export const SAVE_KEY = 'makabi-garden-v1';
export const state = { stars: [false, false, false], night: false, muted: false, seenIntro: false, winShown: false };

let saveTimer: number | undefined;
export function saveNow() {
  try {
    const list: Entry[] = []; voxels.forEach((v, k) => { const c = unK(k); list.push([c[0], c[1], c[2], v.t, v.r || 0]); });
    localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 1, voxels: list, state }));
  } catch (e) { /* storage unavailable */ }
}
export function save() { clearTimeout(saveTimer); saveTimer = window.setTimeout(saveNow, 400); }
export function restore(): boolean {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (d && d.v === 1 && Array.isArray(d.voxels)) { Object.assign(state, d.state || {}); loadWorld(d.voxels); return true; }
  } catch (e) { /* corrupt save */ }
  return false;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); });
window.addEventListener('pagehide', saveNow);
