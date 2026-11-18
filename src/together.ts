import { TYPES } from './types';
import { N, H, voxels, hooks, applyCells, type Op, type Voxel } from './world';
import { fam, sendLive } from './net';
import { here } from './islands';
import { say } from './ui';

/* ---------- building together on a friend's island ----------
   A visitor builds freely, without asking. What she builds is marked as hers (w), and she may change or take
   away only her own pieces: never what her friend, or another visitor, built. She may put a piece down on her
   friend's floor; taking it away again leaves the floor as it was.
   The friend's device holds the island. The visitor's steps go to it; it checks each one against the island as
   it really is, keeps and saves it, and tells the other visitors. A step it cannot keep is undone on the
   visitor's screen by the cells as they really are. The friend's own steps go to her visitors the same way. */

const MAX = 1500;                          // cells in one step on a friend's island
const nameOf = (id: string) => fam.members.find(m => m.id === id)?.name || '';
const isFloor = (v: Voxel | null) => !!v && v.of == null && !!TYPES[v.t]?.flat;

// may visitor `me` turn this cell from a into b?
export function guestMay(a: Voxel | null, b: Voxel | null, me: string): boolean {
  const from = !a || a.w === me || (isFloor(a) && !a.w && !!b && b.w === me && b.f === a.t);
  const to = !b || b.w === me || (!!a && a.w === me && isFloor(b) && b.t === a.f && !b.w);
  return from && to;
}
const same = (a: Voxel | null | undefined, b: Voxel | null | undefined) => {
  if (!a || !b) return !a && !b;
  return a.t === b.t && (a.r || 0) === (b.r || 0) && a.c === b.c && a.of === b.of && a.f === b.f && a.s === b.s && a.w === b.w
    && (a.o?.[0] || 0) === (b.o?.[0] || 0) && (a.o?.[1] || 0) === (b.o?.[1] || 0);
};
// a cell state from another device, kept only when it makes sense here
function clean(v: any): Voxel | null | undefined {
  if (v === null) return null;
  if (!v || typeof v !== 'object' || typeof v.t !== 'string' || !TYPES[v.t]) return undefined;
  const out: Voxel = { t: v.t, r: (((Number(v.r) || 0) % 8) + 8) % 8 };
  if (typeof v.c === 'number') out.c = v.c;
  if (typeof v.of === 'number') out.of = v.of;
  if (typeof v.f === 'string' && TYPES[v.f]?.flat) out.f = v.f;
  if (Array.isArray(v.o)) out.o = [Math.max(-.5, Math.min(.5, Number(v.o[0]) || 0)), Math.max(-.5, Math.min(.5, Number(v.o[1]) || 0))];
  if (typeof v.s === 'number' && v.s > 0) out.s = v.s;
  if (typeof v.w === 'string' && v.w) out.w = v.w.slice(0, 40);
  return out;
}
const okKey = (k: unknown): k is number => Number.isInteger(k) && (k as number) >= 0 && (k as number) < N * N * H;
const hosting = () => fam.status === 'member' && fam.visits.some(v => v.host === fam.me);

/* ---------- the visitor: her steps are marked as hers, and checked before they are taken ---------- */
hooks.mayCommit = op => {
  if (!here.id) return true;
  const me = fam.me;
  if (op.length > MAX) { say('هذا كبير على جزيرة صديقتكِ. ابني شيئًا أصغر.', 4000); return false; }
  // a floor coming back from under her own piece stays her friend's floor; everything else she puts down is hers
  for (const e of op) if (e.b && !(e.a && e.a.w === me && isFloor(e.b) && e.b.t === e.a.f && !e.b.w)) e.b = { ...e.b, w: me };
  const bad = op.find(e => !guestMay(e.a, e.b, me));
  if (bad) {
    const who = bad.a?.w ? nameOf(bad.a.w) : nameOf(here.id);
    say(who ? 'هذا من بناء ' + who + '. غيّري ما بنيتِه أنتِ فقط.' : 'غيّري ما بنيتِه أنتِ فقط.', 4000);
    return false;
  }
  return true;
};

let lastSent = 0;
// the visitor sent a step her friend may not have kept yet: her friend's copy of the island is not trusted till then
export const sentLately = () => performance.now() - lastSent < 4000;

hooks.edited = (op: Op, fwd: boolean) => {
  if (here.id) {
    // [cell, as it was, as it is now]: her friend checks the first against her island
    lastSent = performance.now();
    sendLive({ t: 'edit', d: op.map(e => [e.k, fwd ? e.a : e.b, fwd ? e.b : e.a]) });
  } else if (hosting()) sendLive({ t: 'cells', d: op.map(e => [e.k, fwd ? e.b : e.a]) });
};

/* ---------- news ---------- */
const greeted = new Set<string>();
export function buildNews(m: any) {
  if (!Array.isArray(m.d) || m.d.length > MAX) return;
  if (m.t === 'edit' && !here.id && fam.visits.some(v => v.guest === m.from && v.host === fam.me)) {
    // at her own island: a visitor's step, kept only if the island still is as the visitor saw it and the piece is hers
    const list: [number, Voxel | null, Voxel | null][] = [];
    let ok = true;
    for (const row of m.d) {
      if (!Array.isArray(row) || !okKey(row[0])) { ok = false; break; }
      const a = clean(row[1]), b = clean(row[2]);
      if (a === undefined || b === undefined) { ok = false; break; }
      list.push([row[0], a, b]);
      if (!same(voxels.get(row[0]) || null, a) || !guestMay(a, b, m.from)) ok = false;
    }
    if (ok) {
      applyCells(list.map(r => [r[0], r[2]]));
      sendLive({ t: 'cells', skip: m.from, d: list.map(r => [r[0], r[2]]) });
      if (!greeted.has(m.from)) { greeted.add(m.from); say(nameOf(m.from) + ' تبني في جزيرتكِ!', 3500); }
    } else {
      // not kept: the visitor's screen goes back to the island as it is
      sendLive({ t: 'cells', to: m.from, d: m.d.filter((r: any) => Array.isArray(r) && okKey(r[0])).map((r: any) => [r[0], voxels.get(r[0]) || null]) });
    }
  } else if (m.t === 'cells' && here.id && m.from === here.id) {
    // on a friend's island: her friend's island as it is now, cell by cell
    const list: [number, Voxel | null][] = [];
    for (const row of m.d) {
      if (!Array.isArray(row) || !okKey(row[0])) continue;
      const v = clean(row[1]); if (v !== undefined) list.push([row[0], v]);
    }
    if (list.length) applyCells(list);
  }
}
// a visit ended: she will be greeted afresh next time
export function buildersChanged() {
  for (const g of [...greeted]) if (!fam.visits.some(v => v.guest === g && v.host === fam.me)) greeted.delete(g);
}
