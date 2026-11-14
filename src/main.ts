import { voxels, dirty, hooks, view, defaultWorld, loadWorld } from './world';
import { state, save, restore } from './save';
import { ambience } from './audio';
import { renderer, scene, camera, flushDirty, pop, lightAt, lowerQuality, updateDoors, updateLife, applyNight, animate, resize, reduceMotion } from './render';
import { pick } from './pick';
import { tap, cam, tool, placeCamera, initInput } from './input';
import { updateInside, refreshInside } from './inside';
import { checkGoals, stats } from './mission';
import { $, buildPalette, syncUndo, initUI } from './ui';
import { initHero, settleHero, updateHero, heroCell, setFinger, clearFinger } from './hero';

hooks.afterChange = () => { checkGoals(false); updateLife(); settleHero(); refreshInside(); save(); };
hooks.syncUndo = syncUndo;
hooks.placed = pop;

ambience();
initInput();
initUI();

/* ---------- start ---------- */
if (!restore()) loadWorld(defaultWorld());
$('soundBtn').classList.toggle('off', state.muted);
buildPalette(); checkGoals(true); applyNight(); initHero();
if (window.innerWidth >= 700) $('mission').classList.add('open');
if (!state.seenIntro) $('intro').classList.add('open');

window.addEventListener('resize', resize); resize();
if (window.innerWidth < window.innerHeight) cam.dist = 44;

let last = performance.now();
function tick(now: number) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  flushDirty(dirty);
  lightAt.copy(cam.target);
  updateHero(dt, now);
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
(window as any).__garden = { tap, pick, voxels, state, cam, stats, heroCell, tick, setFinger, clearFinger, camera, view };
