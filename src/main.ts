import { voxels, dirty, hooks, defaultWorld, loadWorld } from './world';
import { state, save, restore } from './save';
import { ambience } from './audio';
import { renderer, scene, camera, rebuild, updateDoors, updateLife, applyNight, animate, resize, reduceMotion } from './render';
import { pick } from './pick';
import { tap, cam, placeCamera, initInput } from './input';
import { checkGoals, stats } from './mission';
import { $, buildPalette, syncUndo, initUI } from './ui';
import { initHero, settleHero, updateHero, heroCell, setFinger, clearFinger } from './hero';

hooks.afterChange = () => { checkGoals(false); updateLife(); settleHero(); save(); };
hooks.syncUndo = syncUndo;

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
  if (dirty.size) { dirty.forEach(t => rebuild(t)); dirty.clear(); }
  updateHero(dt, now);
  { const h = heroCell(); updateDoors(dt, h[0], h[1], h[2]); }
  placeCamera();
  if (!reduceMotion) animate(dt, now);
  renderer.render(scene, camera);
}
function frame(now: number) { tick(now); requestAnimationFrame(frame); }
requestAnimationFrame(frame);
(window as any).__garden = { tap, pick, voxels, state, cam, stats, heroCell, tick, setFinger, clearFinger, camera };
