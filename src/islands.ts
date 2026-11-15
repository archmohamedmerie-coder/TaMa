import * as THREE from 'three';
import { N } from './world';
import { world, groundMeshes, staticIsland } from './render';
import { islandScenery, paintIsland, raiseFlag, waveFlags, setIsles, own, type Scenery } from './sea';
import { fam, COLORS } from './net';

/* ---------- the friends' islands around this child's own ----------
   Each member of the family has a place in the archipelago (slot 0 to 3). This child's own island is always
   drawn where it is; the others are placed around it by the difference of their places. A friend's island is
   drawn from the last copy it sent: live while she is here (her flag up), as she left it while she is away. */

const GAP = 96;   // from one garden to the next: about ten to fifteen seconds of sailing between beaches
const SLOT = [[0, 0], [GAP, 0], [0, GAP], [GAP, GAP]];

interface Isle { id: string; group: THREE.Group; scenery: Scenery; pieces: THREE.Group | null; label: THREE.Sprite; text: string; timer: number }
const isles = new Map<string, Isle>();
const snaps = new Map<string, any>();      // the latest copy of each friend's island

/* ---------- a name floating above the flag ---------- */
export function nameSprite(): THREE.Sprite {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128;
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  s.scale.set(6.4, 1.6, 1); s.position.set(N / 2 - 1.6, 5.8, N + 1.2); s.renderOrder = 5; s.userData.cv = cv;
  return s;
}
export function writeName(s: THREE.Sprite, text: string, color: number, away: boolean) {
  const cv = s.userData.cv as HTMLCanvasElement, c = cv.getContext('2d')!;
  c.clearRect(0, 0, 512, 128);
  c.font = '800 62px "Baloo Bhaijaan 2", system-ui, sans-serif';
  const w = Math.min(500, c.measureText(text).width + 110);
  c.fillStyle = away ? 'rgba(255,255,255,.7)' : '#fff';
  c.beginPath(); c.roundRect(256 - w / 2, 14, w, 100, 50); c.fill();
  c.fillStyle = '#' + color.toString(16).padStart(6, '0');
  c.beginPath(); c.arc(256 + w / 2 - 44, 64, 20, 0, Math.PI * 2); c.fill();
  c.fillStyle = away ? '#8a80a8' : '#2b2140'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.direction = 'rtl';
  c.fillText(text, 256 - 18, 68, w - 100);
  (s.material.map as THREE.Texture).needsUpdate = true;
}
const ownLabel = nameSprite(); ownLabel.visible = false; own.group.add(ownLabel);

/* ---------- keeping the islands in step with the family ---------- */
export function syncIslands() {
  const member = fam.status === 'member';
  const meSlot = fam.members.find(m => m.id === fam.me)?.slot ?? 0;
  const others = member ? fam.members.filter(m => m.id !== fam.me && m.slot != null && SLOT[m.slot]) : [];
  for (const [id, isle] of isles) if (!others.some(m => m.id === id)) { drop(isle); isles.delete(id); snaps.delete(id); }
  for (const m of others) {
    let isle = isles.get(m.id);
    if (!isle) {
      const group = new THREE.Group(); group.add(...groundMeshes());
      isle = { id: m.id, group, scenery: islandScenery(group, COLORS[m.color]), pieces: null, label: nameSprite(), text: '', timer: 0 };
      group.add(isle.label); world.add(group); isles.set(m.id, isle);
      if (snaps.has(m.id)) rebuild(isle);
    }
    isle.group.position.set(SLOT[m.slot][0] - SLOT[meSlot][0], 0, SLOT[m.slot][1] - SLOT[meSlot][1]);
    paintIsland(isle.scenery, COLORS[m.color] ?? COLORS[0]);
    raiseFlag(isle.scenery, m.online);
    const key = m.name + '|' + m.color + '|' + m.online;
    if (isle.text !== key) { isle.text = key; writeName(isle.label, m.name, COLORS[m.color] ?? COLORS[0], !m.online); }
  }
  // her own island wears her family colour and her name once she belongs to a family
  paintIsland(own, COLORS[fam.color] ?? COLORS[0]);
  ownLabel.visible = member;
  if (member) writeName(ownLabel, fam.name, COLORS[fam.color] ?? COLORS[0], false);
  setIsles([{ x: 0, z: 0 }, ...[...isles.values()].map(i => ({ x: i.group.position.x, z: i.group.position.z }))]);
  waveFlags([own, ...[...isles.values()].map(i => i.scenery)]);
}

export function islandArrived(id: string, data: any) {
  if (!data || !Array.isArray(data.voxels)) return;
  snaps.set(id, data);
  const isle = isles.get(id); if (!isle) return;
  // a friend building quickly sends many copies; draw only the latest
  clearTimeout(isle.timer); isle.timer = window.setTimeout(() => rebuild(isle), 300);
}
function rebuild(isle: Isle) {
  const d = snaps.get(isle.id); if (!d || !isles.has(isle.id)) return;
  if (isle.pieces) { isle.group.remove(isle.pieces); disposeAll(isle.pieces); isle.pieces = null; }
  try { isle.pieces = staticIsland(d.voxels, Array.isArray(d.floors) ? d.floors : []); isle.group.add(isle.pieces); } catch { /* a broken copy draws nothing */ }
}
function drop(isle: Isle) { clearTimeout(isle.timer); world.remove(isle.group); disposeAll(isle.group); }
function disposeAll(o: THREE.Object3D) {
  o.traverse(x => {
    const m = x as THREE.Mesh;
    // the beach and pier shapes are shared by every island and stay; what was built for this island goes
    if (m.isMesh && !m.geometry.userData.shared) m.geometry.dispose();
    if ((x as THREE.Sprite).isSprite) { const s = x as THREE.Sprite; s.material.map?.dispose(); s.material.dispose(); }
  });
}

// where a family member's garden starts, seen from this child's garden (null if not in the family)
export function offsetOf(id: string): [number, number] | null {
  const meSlot = fam.members.find(m => m.id === fam.me)?.slot ?? 0, m = fam.members.find(x => x.id === id);
  if (!m || m.slot == null || !SLOT[m.slot]) return null;
  return [SLOT[m.slot][0] - SLOT[meSlot][0], SLOT[m.slot][1] - SLOT[meSlot][1]];
}
// where this child's garden starts in the archipelago, so positions can be shared in one frame for everyone
export const myPlace = (): [number, number] => { const s = SLOT[fam.members.find(m => m.id === fam.me)?.slot ?? 0] || SLOT[0]; return [s[0], s[1]]; };
// a friend's boat is shown at her pier, or hidden there while she sails it
export function setMoored(id: string, shown: boolean) { const i = isles.get(id); if (i) i.scenery.boat.visible = shown; }
