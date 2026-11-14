import { voxels, dirty, hooks, defaultWorld, loadWorld } from './world';
import { state, save, restore } from './save';
import { ambience } from './audio';
import { renderer, scene, camera, rebuild, updateLife, applyNight, animate, resize, reduceMotion } from './render';
import { pick } from './pick';
import { tap, cam, placeCamera, initInput } from './input';
import { checkGoals, stats } from './mission';
import { $, buildPalette, syncUndo, initUI } from './ui';

hooks.afterChange = () => { checkGoals(false); updateLife(); save(); };
hooks.syncUndo = syncUndo;

ambience();
initInput();
initUI();

/* ---------- start ---------- */
if (!restore()) loadWorld(defaultWorld());
$('soundBtn').classList.toggle('off', state.muted);
buildPalette(); checkGoals(true); applyNight();
if (window.innerWidth >= 700) $('mission').classList.add('open');
if (!state.seenIntro) $('intro').classList.add('open');

window.addEventListener('resize', resize); resize();
if (window.innerWidth < window.innerHeight) cam.dist = 44;

let last = performance.now();
function frame(now: number) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  if (dirty.size) { dirty.forEach(t => rebuild(t)); dirty.clear(); }
  placeCamera();
  if (!reduceMotion) animate(dt, now);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
(window as any).__garden = { tap, pick, voxels, state, cam, stats };
