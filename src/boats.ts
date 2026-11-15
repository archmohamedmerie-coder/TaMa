import * as THREE from 'three';
import { world, reduceMotion, baseMat } from './render';
import { boat, boatGeo, wave, WATER, DOCK } from './sea';
import { isSailing, girlModel, GIRL_LIFT, heroFeet } from './hero';
import { tool } from './input';
import { fam, sendLive, COLORS } from './net';
import { nameSprite, writeName, offsetOf, myPlace, setMoored } from './islands';
import { sfx } from './audio';

/* ---------- friends out and about: their boats on the water, the girls walking on the islands, the horn ----------
   Each child's place is sent a few times a second while she moves (rarely while she stands still), in the
   archipelago's own frame (the place of the garden she is on, plus her spot), and passed on to the others;
   nothing of it is stored. Each device draws the friends gliding smoothly between the places it hears. */

interface Remote {
  id: string; color: number; name: string; seen: number;
  boatG: THREE.Group; hull: THREE.Mesh; rider: THREE.Group; walker: THREE.Group; label: THREE.Sprite;
  mode: '' | 'boat' | 'walk';
  x: number; y: number; z: number; a: number; tx: number; ty: number; tz: number; ta: number;     // the girl, or her boat while sailing
  bx: number; bz: number; ba: number; boatShown: boolean;                                          // her boat while she walks
}
const remotes = new Map<string, Remote>();
const STALE = 6000;   // no word for this long: she is taken to be resting, her boat back at its pier

function remoteFor(id: string): Remote | null {
  const m = fam.members.find(x => x.id === id); if (!m) return null;
  let r = remotes.get(id);
  if (!r) {
    const boatG = new THREE.Group(), hull = new THREE.Mesh(boatGeo(COLORS[m.color] ?? COLORS[0]), baseMat); hull.castShadow = true;
    const rider = girlModel(); rider.position.set(0, -.12 + GIRL_LIFT, 1.02);
    boatG.add(hull, rider); boatG.visible = false;
    const walker = girlModel(); walker.visible = false;
    const label = nameSprite(); label.visible = false; label.scale.set(4, 1, 1);   // smaller than an island's name: seen close up
    world.add(boatG, walker, label);
    r = { id, color: -1, name: '', seen: 0, boatG, hull, rider, walker, label, mode: '', x: 0, y: 0, z: 0, a: 0, tx: 0, ty: 0, tz: 0, ta: 0, bx: 0, bz: 0, ba: 0, boatShown: false };
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
  if (m.id === fam.me) return;
  const r = remoteFor(m.id); if (!r) return;
  if (m.t === 'horn') {
    // heard louder near the middle of the view, not at all from far away
    if (r.mode !== 'boat') return;
    const d = Math.hypot(r.x - view.x, r.z - view.z);
    if (d < 90) { sfx.horn(Math.max(.25, 1 - d / 90)); ripple(r.x, r.z); }
    return;
  }
  if (m.docked) { rest(r); return; }
  const me = myPlace(), mode: 'boat' | 'walk' = m.m === 'walk' ? 'walk' : 'boat';
  // their place in the archipelago, seen from the garden that is "here"
  const x = m.x - me[0], z = m.z - me[1], y = Number(m.y) || 0;
  if (r.mode !== mode) { r.mode = mode; r.x = x; r.y = y; r.z = z; r.a = m.a; }
  r.tx = x; r.ty = y; r.tz = z; r.ta = m.a; r.seen = performance.now();
  if (mode === 'walk' && Number.isFinite(m.bx)) {
    r.bx = m.bx - me[0]; r.bz = m.bz - me[1]; r.ba = m.ba || 0;
    // her boat waits at her own pier (drawn there already), or at a friend's where she is visiting
    const o = offsetOf(r.id);
    r.boatShown = !o || Math.hypot(r.bx - (o[0] + DOCK.x), r.bz - (o[1] + DOCK.z)) > 1.2;
  }
}
function rest(r: Remote) { r.mode = ''; r.boatShown = false; }

/* ---------- each frame ---------- */
const view = { x: 0, z: 0 };
let lastSent = 0, lastKey = '', wasSailing = false, hornShown = false;
const $horn = document.getElementById('hornBtn') as HTMLButtonElement;
export function initBoats() { $horn.onclick = honk; }

function sendMine(now: number) {
  if (now < lastSent) lastSent = 0;   // the clock went back (a test, or a restarted page)
  const me = myPlace(), sailing = isSailing();
  if (sailing) {
    if (now - lastSent < (boat.v > .05 ? 250 : 1500)) return;
    lastSent = now; sendLive({ t: 'pos', m: 'boat', x: boat.x + me[0], z: boat.z + me[1], a: boat.a });
    return;
  }
  const f = heroFeet(), key = f.x.toFixed(1) + ',' + f.y.toFixed(1) + ',' + f.z.toFixed(1) + ',' + f.f.toFixed(1);
  // while she walks a few times a second; standing still, now and then so the others know she is there
  if (now - lastSent < (key !== lastKey ? 250 : 2000)) return;
  lastSent = now; lastKey = key;
  sendLive({ t: 'pos', m: 'walk', x: f.x + me[0], y: f.y, z: f.z + me[1], a: f.f, bx: boat.x + me[0], bz: boat.z + me[1], ba: boat.a });
}

// cx, cz: the middle of the view, in garden cells
export function updateBoats(dt: number, now: number, cx: number, cz: number) {
  view.x = cx; view.z = cz;
  const sailing = isSailing();
  if (sailing !== wasSailing) lastSent = 0;   // tell the others at once when she boards or steps off
  wasSailing = sailing;
  if (fam.status === 'member' && fam.connected) sendMine(now);
  const showHorn = sailing && tool.mode === 'walk';
  if (showHorn !== hornShown) { hornShown = showHorn; $horn.hidden = !showHorn; }

  const k = Math.min(1, dt * 5);
  for (const r of remotes.values()) {
    const m = fam.members.find(x => x.id === r.id);
    if (!m) { world.remove(r.boatG, r.walker, r.label); r.hull.geometry.dispose(); remotes.delete(r.id); continue; }
    if (r.mode && (!m.online || now - r.seen > STALE)) rest(r);
    // glide towards the last place heard, turning the short way round
    r.x += (r.tx - r.x) * k; r.y += (r.ty - r.y) * k; r.z += (r.tz - r.z) * k;
    r.a += (((r.ta - r.a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI) * k;
    const inBoat = r.mode === 'boat', walking = r.mode === 'walk';
    r.boatG.visible = inBoat || (walking && r.boatShown); r.rider.visible = inBoat;
    r.walker.visible = walking; r.label.visible = inBoat || walking;
    setMoored(r.id, !r.boatG.visible);
    if (r.boatG.visible) {
      const bx = inBoat ? r.x : r.bx, bz = inBoat ? r.z : r.bz, ba = inBoat ? r.a : r.ba;
      const s = Math.sin(ba), c = Math.cos(ba);
      r.boatG.position.set(bx, WATER + wave(bx, bz) + .05, bz);
      r.boatG.rotation.set(reduceMotion ? 0 : (wave(bx - s, bz - c) - wave(bx + s, bz + c)) * .35, ba, 0, 'YXZ');
      if (inBoat) r.label.position.set(bx, WATER + 4.6, bz);
    }
    if (walking) {
      r.walker.position.set(r.x, r.y + GIRL_LIFT, r.z); r.walker.rotation.y = r.a;
      // her legs and arms swing while she moves
      const moving = Math.hypot(r.tx - r.x, r.tz - r.z) > .03, sw = moving && !reduceMotion ? Math.sin(now * .011) * .7 : 0;
      const ch = r.walker.children; if (ch.length >= 5) { ch[1].rotation.x = sw; ch[2].rotation.x = -sw; ch[3].rotation.x = -sw * .8; ch[4].rotation.x = sw * .8; }
      r.label.position.set(r.x, r.y + 2.1, r.z);
    }
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
    g.position.set(x, WATER + .25, z); g.userData.t0 = performance.now() + i * 350; g.renderOrder = 2;
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
export const remoteBoats = () => [...remotes.values()].map(r => ({ id: r.id, mode: r.mode, x: +r.x.toFixed(1), y: +r.y.toFixed(1), z: +r.z.toFixed(1), boat: r.boatG.visible, rings: rings.length }));
