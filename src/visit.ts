import { loadWorld, undoStack, redoStack, hooks, type Op } from './world';
import { saveNow, saveLock, snapshot, state } from './save';
import { applyNight } from './render';
import { boat, DOCK, GUEST, GUEST_STEP, STEP, nearDock } from './sea';
import { boatHooks, nearBoat, board, land, isSailing } from './hero';
import { tool } from './input';
import { fam, sendVisit } from './net';
import { here, offsetOf, setOwnCopy, copyOf, syncIslands, islandHooks } from './islands';
import { say } from './ui';
import { sentLately } from './together';
import { sfx } from './audio';

/* ---------- visiting a friend's island ----------
   The visitor rings the bell at her friend's pier; the friend answers "welcome" or "not now".
   On "welcome" the visitor's own garden is put safely aside and her friend's island becomes the world
   she walks in. While she is there, NOTHING is saved or shared as hers (saveLock), her undo history is
   set aside. She may build with her friend (together.ts), but what she builds stays on her friend's island. When she sails off, or her friend says goodbye or
   goes away, her own garden comes back exactly as it was, and only then is the lock opened again. */

const nameOf = (id: string) => fam.members.find(m => m.id === id)?.name || '';
const $ = (id: string) => document.getElementById(id)!;
let knocking = '';          // the friend whose bell she rang and who has not answered yet
let backup: { snap: ReturnType<typeof snapshot>; undo: Op[]; redo: Op[]; state: string } | null = null;

export const visiting = () => !!here.id;

/* ---------- arriving ---------- */
function enterVisit(host: string) {
  knocking = '';
  const data = copyOf(host), o = offsetOf(host);
  if (!data || !o) { sendVisit({ t: 'endVisit' }); say('لم تصل جزيرة صديقتكِ بعد. جرّبي بعد قليل.', 4000); return; }
  // her own garden is stored first, then set aside; from here on nothing is saved until she is home
  saveNow();
  backup = { snap: snapshot(), undo: undoStack.splice(0), redo: redoStack.splice(0), state: JSON.stringify(state) };
  saveLock.on = true;
  setOwnCopy(backup.snap);
  here.id = host;
  syncIslands();
  // the world is now measured from her friend's garden: her boat moves with it, to the guest side of the pier
  boat.x -= o[0]; boat.z -= o[1]; boat.berth = GUEST;
  loadWorld(data.voxels, Array.isArray(data.floors) ? data.floors : []);
  hooks.syncUndo();
  land(GUEST_STEP);
  hooks.afterChange();
  document.body.classList.add('visiting');
  if (tool.mode !== 'walk') ($('tWalk') as HTMLButtonElement).click();
  sfx.star();
  say('أهلًا بكِ في جزيرة ' + nameOf(host) + '! تجوّلي وابني معها. قاربكِ ينتظركِ عند الرصيف.', 5000);
}

/* ---------- going home ---------- */
// why: 'self' when she sails off, 'host' when her friend says goodbye, 'away' when her friend or the connection went
export function leaveVisit(why: 'self' | 'host' | 'away') {
  if (!here.id || !backup) return;
  const host = here.id, b = backup;
  leftFrom = host;
  if (why === 'self') sendVisit({ t: 'endVisit' });
  here.id = '';
  syncIslands();
  // measured from her own garden again
  const o = offsetOf(host) || [0, 0];
  boat.x += o[0]; boat.z += o[1]; boat.berth = DOCK;
  // her own garden, exactly as it was put aside
  loadWorld(b.snap.voxels, b.snap.floors);
  undoStack.length = 0; undoStack.push(...b.undo); redoStack.length = 0; redoStack.push(...b.redo);
  Object.assign(state, JSON.parse(b.state));
  setOwnCopy(null);
  backup = null;
  hooks.syncUndo(); applyNight();
  document.body.classList.remove('visiting');
  // she leaves in her boat from her friend's pier
  if (!isSailing()) board(true);
  saveLock.on = false;
  hooks.afterChange();
  const n = nameOf(host);
  if (why === 'host') say(n + ' ودّعتكِ. إلى اللقاء!', 4000);
  else if (why === 'away') say(n ? n + ' ذهبت. أنتِ في قاربكِ الآن.' : 'أنتِ في قاربكِ الآن.', 4000);
  else say('أبحري إلى جزيرتكِ أو إلى صديقة أخرى.', 3500);
}

// her friend built something while she is there: the world follows, a moment later
let hostTimer = 0;
islandHooks.hostChanged = data => {
  clearTimeout(hostTimer);
  const later = () => { hostTimer = window.setTimeout(() => {
    // a step of hers may not be in this copy yet: wait for it rather than make it vanish for a moment
    if (sentLately()) { later(); return; }
    if (here.id && data && Array.isArray(data.voxels)) { loadWorld(data.voxels, Array.isArray(data.floors) ? data.floors : []); hooks.afterChange(); }
  }, 600); };
  later();
};

/* ---------- the big boat button ---------- */
const $sail = $('sailBtn') as HTMLButtonElement;
let shown = '', act: () => void = () => {};
$sail.onclick = () => act();
function button(key: string, label: string, f: () => void, disabled = false) {
  act = f;
  if (key === shown) return;
  shown = key; $sail.hidden = !key; $sail.disabled = disabled;
  $sail.classList.toggle('bell', key.startsWith('bell') || key.startsWith('wait'));
  $sail.querySelector('span')!.textContent = label;
}
// the friend's pier her boat is beside, if any: an online friend whose guest berth is close
function friendBerth(): string {
  if (here.id) return '';
  for (const m of fam.members) {
    if (m.id === fam.me || !m.online) continue;
    const o = offsetOf(m.id); if (!o) continue;
    if (Math.hypot(boat.x - (o[0] + GUEST.x), boat.z - (o[1] + GUEST.z)) < 7) return m.id;
  }
  return '';
}
let told = '', leftFrom = '';
boatHooks.ui = () => {
  if (tool.mode !== 'walk') { button('', '', () => {}); return; }
  if (!isSailing()) {
    if (here.id && nearBoat(GUEST_STEP)) button('leave', 'أبحري بالقارب', () => leaveVisit('self'));
    else if (!here.id && nearBoat(STEP)) button('board', 'أبحري بالقارب', () => board());
    else button('', '', () => {});
    return;
  }
  if (!here.id && nearDock()) { button('land', 'انزلي إلى الرصيف', () => land()); return; }
  let f = fam.status === 'member' ? friendBerth() : '';
  if (f !== leftFrom) leftFrom = ''; else f = '';
  // sailed away from a bell nobody answered: the ringing stops
  if (knocking && f !== knocking) { sendVisit({ t: 'unknock' }); knocking = ''; }
  if (!f) { told = ''; button('', '', () => {}); return; }
  const m = fam.members.find(x => x.id === f)!;
  if (knocking === f) { button('wait' + f, 'ننتظر ' + m.name + '…', () => {}, true); return; }
  if (m.closed || fam.mutedBy.includes(f)) {
    // her friend is not receiving now: say so once, gently, and show no bell
    if (told !== f) { told = f; say(m.closed ? m.name + ' لا تستقبل زوارًا الآن.' : m.name + ' مشغولة الآن. يمكنكِ زيارتها حين تدعوكِ.', 4000); }
    button('', '', () => {}); return;
  }
  told = '';   // her bell is open again: a later "not now" or sign is said afresh
  button('bell' + f, 'اطرقي جرس ' + m.name, () => { knocking = f; sfx.bell(); sendVisit({ t: 'knock', host: f }); });
};
// bumping the beach far from any pier
boatHooks.bumped = () => say(here.id ? 'أوصلي القارب إلى الرصيف.' : 'أوصلي القارب إلى رصيفكِ لتنزلي، أو إلى رصيف صديقة لتطرقي جرسها.', 4000);

/* ---------- news from the family ---------- */
const queue: string[] = [];     // friends ringing her bell, first come first answered
export function visitNews(m: any) {
  const n = nameOf(m.host || m.from || m.id);
  switch (m.t) {
    case 'knockOk': say('رنّ الجرس. ننتظر ' + n + '…', 4000); break;
    case 'knockNo':
      if (knocking === m.host) knocking = '';
      say(m.why === 'closed' ? n + ' لا تستقبل زوارًا الآن.' : m.why === 'muted' ? n + ' مشغولة الآن.' : m.why === 'busy' ? 'أنتِ في زيارة الآن.' : n + ' ليست على جزيرتها الآن.', 4000);
      break;
    case 'notNow': if (knocking === m.host) knocking = ''; say(n + ' مشغولة الآن. يمكنكِ زيارتها حين تدعوكِ.', 4500); break;
    case 'welcome': if (!here.id) enterVisit(m.host); break;
    case 'invited': sfx.bell(); say(n + ' تدعوكِ لزيارة جزيرتها! أبحري إلى رصيفها.', 5000); break;
    case 'bye':
      if (here.id === m.host) leaveVisit(m.why === 'host' ? 'host' : 'away');
      else if (knocking === m.host) knocking = '';
      break;
    // at her own island: a friend rings, gives up, or leaves
    case 'knock': if (!queue.includes(m.from)) queue.push(m.from); sfx.bell(); showKnock(); break;
    case 'unknock': { const i = queue.indexOf(m.from); if (i >= 0) queue.splice(i, 1); showKnock(); break; }
    case 'visitEnd': say(n + ' عادت إلى قاربها.', 3500); break;
  }
}
// the family changed: if her visit is no longer known to the server (a lost connection), she goes home
export function visitStateChanged() {
  if (here.id && fam.connected && !fam.visits.some(v => v.guest === fam.me && v.host === here.id)) leaveVisit('away');
  if (fam.status !== 'member') { queue.length = 0; showKnock(); knocking = ''; }
  renderVisitors();
}
export function familyGone() { if (here.id) leaveVisit('away'); }

/* ---------- the bell at her own pier: who is ringing ---------- */
function showKnock() {
  const box = $('knock'), from = queue[0];
  box.hidden = !from; if (!from) return;
  $('knockText').textContent = nameOf(from) + ' تطرق جرس رصيفكِ';
  ($('knockYes') as HTMLButtonElement).onclick = () => answer(from, true);
  ($('knockNo') as HTMLButtonElement).onclick = () => answer(from, false);
}
function answer(id: string, yes: boolean) {
  queue.splice(queue.indexOf(id), 1); showKnock();
  sendVisit({ t: 'answer', to: id, yes });
  sfx.tick();
  if (yes) say('أهلًا بـ' + nameOf(id) + '! ستصل إلى رصيفكِ.', 4000);
}

/* ---------- her visitors' panel: the sign at the pier, who is here, who can be invited back ---------- */
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export function initVisitors() {
  $('visitBtn').onclick = () => { renderVisitors(true); $('visitors').classList.add('open'); };
  $('visitors').addEventListener('click', e => { if (e.target === $('visitors')) $('visitors').classList.remove('open'); });
}
function renderVisitors(force?: boolean) {
  $('visitBtn').hidden = fam.status !== 'member' || !!here.id;
  if (!force && !$('visitors').classList.contains('open')) return;
  const me = fam.members.find(m => m.id === fam.me), closed = !!me?.closed;
  const guests = fam.visits.filter(v => v.host === fam.me).map(v => v.guest);
  let h = `<h1>زوار جزيرتكِ</h1>
    <div class="row seg"><button class="btn${closed ? ' ghost' : ''}" id="vOpen">أستقبل الزوار</button><button class="btn${closed ? '' : ' ghost'}" id="vClose">لا أستقبل الآن</button></div>`;
  if (guests.length) h += '<h2>على جزيرتكِ الآن</h2>' + guests.map(g => `<div class="mem"><span class="nm">${esc(nameOf(g))}</span><button class="mini" data-bye="${g}">وداعًا</button></div>`).join('');
  if (fam.muted.length) h += '<h2>قلتِ لهن «ليس الآن»</h2>' + fam.muted.filter(nameOf).map(g => `<div class="mem"><span class="nm">${esc(nameOf(g))}</span><button class="mini ok" data-inv="${g}">ادعيها</button></div>`).join('');
  h += '<div class="row"><button class="btn" id="vDone">تم</button></div>';
  $('visitorsCard').innerHTML = h;
  ($('vOpen') as HTMLButtonElement).onclick = () => { sendVisit({ t: 'door', closed: false }); sfx.tick(); };
  ($('vClose') as HTMLButtonElement).onclick = () => { sendVisit({ t: 'door', closed: true }); sfx.tick(); };
  ($('vDone') as HTMLButtonElement).onclick = () => $('visitors').classList.remove('open');
  document.querySelectorAll<HTMLElement>('#visitorsCard [data-bye]').forEach(el => el.onclick = () => { sendVisit({ t: 'bye', id: el.dataset.bye }); sfx.tick(); });
  document.querySelectorAll<HTMLElement>('#visitorsCard [data-inv]').forEach(el => el.onclick = () => { sendVisit({ t: 'invite', id: el.dataset.inv }); sfx.tick(); say('أرسلتِ دعوة إلى ' + nameOf(el.dataset.inv!) + '.', 3000); });
}
