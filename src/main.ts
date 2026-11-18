import { N, voxels, dirty, hooks, view, defaultWorld, loadWorld } from './world';
import { state, save, restore } from './save';
import { ambience } from './audio';
import { renderer, scene, camera, flushDirty, pop, lightAt, lowerQuality, updateDoors, updateLife, applyNight, animate, resize, reduceMotion } from './render';
import { pick } from './pick';
import { tap, cam, tool, placeCamera, initInput } from './input';
import { updateInside, refreshInside } from './inside';
import { checkGoals, stats } from './mission';
import { $, buildPalette, syncUndo, initUI } from './ui';
import { updateSea } from './sea';
import { saveHooks, snapshot } from './save';
import { fam, famHooks, connect, shareIsland } from './net';
import { syncIslands, islandArrived, copyOf, here } from './islands';
import { initFamily, familyChanged } from './family';
import { initBoats, updateBoats, liveNews, remoteBoats } from './boats';
import { visiting, visitNews, visitStateChanged, familyGone, initVisitors } from './visit';
import { buildNews, buildersChanged } from './together';
import { initVoice, voiceNews, voiceStateChanged, voiceConnected, voiceDebug } from './voice';
import { initHero, settleHero, updateHero, heroCell, setFinger, clearFinger } from './hero';

// on a friend's island her stars do not count and nothing is saved (save.ts holds the lock)
hooks.afterChange = () => { if (!visiting()) checkGoals(false); updateLife(); settleHero(); refreshInside(); save(); };
hooks.syncUndo = syncUndo;
hooks.placed = pop;

ambience();
initInput();
initUI();
initFamily();

/* ---------- the family archipelago ---------- */
saveHooks.saved = shareIsland;
famHooks.state = () => { syncIslands(); familyChanged(); visitStateChanged(); voiceStateChanged(); buildersChanged(); };
famHooks.build = buildNews;
famHooks.voice = voiceNews;
famHooks.connected = voiceConnected;
initVoice();
famHooks.visit = visitNews;
famHooks.gone = () => familyGone();
initVisitors();
famHooks.snap = islandArrived;
famHooks.live = liveNews;
initBoats();
syncIslands();
connect();

/* ---------- start ---------- */
if (!restore()) loadWorld(defaultWorld());
$('soundBtn').classList.toggle('off', state.muted);
buildPalette(); checkGoals(true); applyNight(); initHero();
if (window.innerWidth >= 700) $('mission').classList.add('open');
if (!state.seenIntro) $('intro').classList.add('open');

window.addEventListener('resize', resize); resize();
// the top row of buttons may wrap on a phone; the tools column follows its height
{ const top = document.querySelector<HTMLElement>('.top .actions')!; new ResizeObserver(() => document.documentElement.style.setProperty('--toph', top.offsetHeight + 'px')).observe(top); }
if (window.innerWidth < window.innerHeight) cam.dist = 44;

let last = performance.now();
function tick(now: number) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  flushDirty(dirty);
  lightAt.copy(cam.target);
  updateSea(dt, now, cam.target.x + N / 2, cam.target.z + N / 2);
  updateHero(dt, now);
  updateBoats(dt, now, cam.target.x + N / 2, cam.target.z + N / 2);
  { const h = heroCell(); updateDoors(dt, h[0], h[1], h[2]); updateInside(h[0], h[1], h[2], cam.theta, view.fp ? 'fp' : tool.mode); }
  placeCamera();
  if (!reduceMotion) animate(dt, now);
  renderer.render(scene, camera);
}
// If frames keep coming slowly, give up some picture quality for smoothness.
let slow = 0, counted = 0, prev = 0;
function frame(now: number) {
  const gap = now - prev; prev = now;
  if (gap > 0 && gap < 250 && !document.hidden) {
    counted++; if (gap > 30) slow++;
    if (counted >= 150) { if (slow > 90) lowerQuality(); slow = counted = 0; }
  }
  tick(now); requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
(window as any).__garden = { tap, pick, voxels, state, cam, stats, heroCell, tick, fam, remoteBoats, voiceDebug, copyOf, here, snapshot, setFinger, clearFinger, camera, view };
