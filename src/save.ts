import { voxels, unK, loadWorld, OFF, type Entry } from './world';
import { storeKey } from './profile';

export const SAVE_KEY = storeKey('makabi-garden-v1');
// called after each save with the garden as saved, so it can be shared with the family
export const saveHooks = { saved: (_data: { voxels: Entry[]; floors: [number, number, number, string][] }) => {} };
export const state = { stars: [false, false, false], night: false, muted: false, seenIntro: false, winShown: false, hero: null as number[] | null };

/* While she visits a friend's island, the world on screen is her friend's. Then nothing may be saved
   or shared as hers: this lock is on for the whole visit, and only visit.ts turns it on and off. */
export const saveLock = { on: false };

// the world on screen as save entries
export function snapshot() {
  const list: Entry[] = []; voxels.forEach((v, k) => { if (v.of != null) return; const c = unK(k); const e: Entry = [c[0], c[1], c[2], v.t, v.r || 0]; if (v.c != null || v.o || v.s) e.push(v.c != null ? v.c : null); if (v.o || v.s) e.push(v.o ? v.o[0] : 0, v.o ? v.o[1] : 0); if (v.s) e.push(v.s); list.push(e); });
  const floors: [number, number, number, string][] = []; voxels.forEach((v, k) => { if (v.f) { const c = unK(k); floors.push([c[0], c[1], c[2], v.f]); } });
  return { voxels: list, floors };
}
let saveTimer: number | undefined;
export function saveNow() {
  clearTimeout(saveTimer);
  if (saveLock.on) return;
  try {
    const s = snapshot();
    try { localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 3, voxels: s.voxels, floors: s.floors, state })); } catch (e) { /* storage unavailable */ }
    saveHooks.saved(s);
  } catch (e) { /* nothing to save */ }
}
export function save() { clearTimeout(saveTimer); if (!saveLock.on) saveTimer = window.setTimeout(saveNow, 400); }
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
      loadWorld(list, Array.isArray(d.floors) ? d.floors : undefined);
      return true;
    }
  } catch (e) { /* corrupt save */ }
  return false;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); });
window.addEventListener('pagehide', saveNow);
