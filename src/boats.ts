import * as THREE from 'three';
import { world, reduceMotion } from './render';
import { boat, boatGeo, wave, WATER } from './sea';
import { isSailing, girlModel, GIRL_LIFT } from './hero';
import { tool } from './input';
import { fam, sendLive, COLORS } from './net';
import { nameSprite, writeName, offsetOf, myPlace, setMoored } from './islands';
import { baseMat } from './render';
import { sfx } from './audio';

/* ---------- friends' boats out on the water, and the horn ----------
   While a child sails, her boat's place is sent a few times a second, in the archipelago's own frame
   (her garden's place plus her boat's spot), and passed on to the others; nothing of it is stored.
   Each device draws the friends' boats gliding smoothly between the places it hears. */

interface Remote { id: string; group: THREE.Group; hull: THREE.Mesh; label: THREE.Sprite; color: number; name: string;
  x: number; z: number; a: number; tx: number; tz: number; ta: number; seen: number; shown: boolean }
const remotes = new Map<string, Remote>();
const STALE = 6000;   // no word from a boat for this long: it is taken to be back at its pier

function remoteFor(id: string): Remote | null {
  const m = fam.members.find(x => x.id === id); if (!m) return null;
  let r = remotes.get(id);
  if (!r) {
    const group = new THREE.Group(), hull = new THREE.Mesh(boatGeo(COLORS[m.color] ?? COLORS[0]), baseMat); hull.castShadow = true;
    const girl = girlModel(); girl.position.set(0, -.12 + GIRL_LIFT, 1.02);
    const label = nameSprite(); label.position.set(0, 4.2, 0);
    group.add(hull, girl, label); group.visible = false; world.add(group);
    r = { id, group, hull, label, color: -1, name: '', x: 0, z: 0, a: 0, tx: 0, tz: 0, ta: 0, seen: 0, shown: false };
    remotes.set(id, r);
  }
  if (r.color !== m.color || r.name !== m.name) {
    if (r.color !== m.color) { r.hull.geometry.dispose(); r.hull.geometry = boatGeo(COLORS[m.color] ?? COLORS[0]); }
    r.color = m.color; r.name = m.name; writeName(r.label, m.name, COLORS[m.color] ?? COLORS[0], false);
  }
  return r;
}

/* ---------- news from the others ---------- */
export function liveNews(m: any) {
  const r = remoteFor(m.id); if (!r) return;
  if (m.t === 'horn') {
    // heard louder near the middle of the view, not at all from far away
    if (!r.shown) return;
    const d = Math.hypot(r.x - view.x, r.z - view.z);
    if (d < 90) { sfx.horn(Math.max(.25, 1 - d / 90)); ripple(r.x, r.z); }
    return;
  }
  if (m.docked) { hide(r); return; }
  const me = myPlace();
  // their place in the archipelago, seen from this garden
  const x = m.x - me[0], z = m.z - me[1];
  if (!r.shown) { r.x = x; r.z = z; r.a = m.a; r.shown = true; r.group.visible = true; setMoored(r.id, false); }
  r.tx = x; r.tz = z; r.ta = m.a; r.seen = performance.now();
}
function hide(r: Remote) { r.shown = false; r.group.visible = false; setMoored(r.id, true); }

/* ---------- each frame ---------- */
const view = { x: 0, z: 0 };
let lastSent = 0, wasSailing = false, hornShown = false;
const $horn = document.getElementById('hornBtn') as HTMLButtonElement;
export function initBoats() { $horn.onclick = honk; }

// cx, cz: the middle of the view, in garden cells
export function updateBoats(dt: number, now: number, cx: number, cz: number) {
  view.x = cx; view.z = cz;
  const sailing = isSailing();
  if (now < lastSent) lastSent = 0;   // the clock went back (a test, or a restarted page)
  // tell the family where this boat is: a few times a second while it moves, now and then while it rests
  if (fam.status === 'member' && fam.connected) {
    if (sailing && now - lastSent > (boat.v > .05 ? 250 : 1500)) {
      lastSent = now; const me = myPlace();
      sendLive({ t: 'pos', x: boat.x + me[0], z: boat.z + me[1], a: boat.a });
    }
    if (!sailing && wasSailing) sendLive({ t: 'pos', docked: true });
  }
  wasSailing = sailing;
  const showHorn = sailing && tool.mode === 'walk';
  if (showHorn !== hornShown) { hornShown = showHorn; $horn.hidden = !showHorn; }

  for (const r of remotes.values()) {
    const m = fam.members.find(x => x.id === r.id);
    if (!m || !offsetOf(r.id)) { world.remove(r.group); r.hull.geometry.dispose(); remotes.delete(r.id); setMoored(r.id, true); continue; }
    if (r.shown && (!m.online || now - r.seen > STALE)) hide(r);
    if (!r.shown) continue;
    // glide towards the last place heard, turning the short way round
    const k = Math.min(1, dt * 4);
    r.x += (r.tx - r.x) * k; r.z += (r.tz - r.z) * k;
    r.a += (((r.ta - r.a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI) * k;
    const s = Math.sin(r.a), c = Math.cos(r.a), y = WATER + wave(r.x, r.z) + .05;
    r.group.position.set(r.x, y, r.z);
    r.group.rotation.set(reduceMotion ? 0 : (wave(r.x - s, r.z - c) - wave(r.x + s, r.z + c)) * .35, r.a, 0, 'YXZ');
  }
  for (let i = rings.length - 1; i >= 0; i--) {
    const g = rings[i], t = (now - g.userData.t0) / 1400;
    if (t >= 1) { world.remove(g); (g.material as THREE.Material).dispose(); rings.splice(i, 1); continue; }
    g.visible = t >= 0; if (t < 0) continue;
    g.scale.setScalar(1 + t * 7); (g.material as THREE.MeshBasicMaterial).opacity = .7 * (1 - t);
  }
}

/* ---------- the horn: a sound, and rings spreading on the water around the boat ---------- */
const ringGeo = new THREE.RingGeometry(.9, 1.15, 40).rotateX(-Math.PI / 2);
const rings: THREE.Mesh[] = [];
function ripple(x: number, z: number) {
  if (reduceMotion) return;
  for (let i = 0; i < 2; i++) {
    const g = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .7, depthWrite: false }));
    g.position.set(x, WATER + .25, z); g.userData.t0 = performance.now() + i * 350; g.scale.setScalar(1); g.renderOrder = 2;
    world.add(g); rings.push(g);
  }
}
let lastHonk = 0;
function honk() {
  const now = performance.now(); if (now - lastHonk < 700) return;   // one honk at a time
  lastHonk = now;
  sfx.horn(); ripple(boat.x, boat.z);
  sendLive({ t: 'horn' });
}

// for tests from the console
export const remoteBoats = () => [...remotes.values()].map(r => ({ id: r.id, shown: r.shown, x: +r.x.toFixed(1), z: +r.z.toFixed(1), rings: rings.length }));
