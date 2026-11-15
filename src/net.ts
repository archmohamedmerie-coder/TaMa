import { storeKey } from './profile';
import { saveNow } from './save';

/* ---------- the family archipelago: membership and the live connection ----------
   This device remembers which family it belongs to (code, its own id and secret token).
   Everything here fails quietly: without a server or a connection the island simply plays alone. */

export interface Member { id: string; name: string; color: number; slot: number; online: boolean }
export type Status = 'none' | 'pending' | 'member';

// the flag colours a family can choose from
export const COLORS = [0xff6fa5, 0x4fa8e0, 0xffc22e, 0x57b85a, 0x9b6bff, 0xff8a3d, 0x2bc4b4, 0xe2477f];

// where the server is: set when publishing, or the computer running the game while testing at home
const env = (import.meta as any).env || {};
const local = /^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)$/.test(location.hostname);
export const SERVER: string = env.VITE_ARCH_SERVER || (local ? `http://${location.hostname}:8787` : '');

const KEY = storeKey('makabi-family-v1');
interface Saved { code: string; id: string; token: string; name: string; color: number }
let saved: Saved | null = null;
try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { saved = null; }

export const fam = {
  status: (saved ? 'pending' : 'none') as Status,
  connected: false,
  admin: false,
  code: '',                                  // shown only to the device that created the family
  me: saved?.id || '',
  name: saved?.name || '',
  color: saved?.color ?? 0,
  members: [] as Member[],
  pending: [] as { id: string; name: string }[],
};
export const famHooks = {
  state: () => {},                            // membership or presence changed
  snap: (_id: string, _data: any) => {},      // a friend's island arrived or changed
  gone: (_why: string) => {},                 // this device is no longer in a family
  live: (_m: any) => {},                      // a friend's boat moved, docked or sounded its horn
};

/* ---------- joining ---------- */
async function post(path: string, body: unknown): Promise<any> {
  try {
    const r = await fetch(SERVER + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    return await r.json();
  } catch { return { err: 'net' }; }
}
function remember(code: string, id: string, token: string, name: string, color: number) {
  saved = { code, id, token, name, color };
  try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch { /* storage unavailable */ }
  fam.me = id; fam.name = name; fam.color = color;
}
// returns an error code, or '' when it worked
export async function createFamily(name: string, color: number): Promise<string> {
  const r = await post('/api/create', { name, color });
  if (r.err) return r.err;
  remember(r.code, r.id, r.token, name, color); fam.status = 'member'; connect(); return '';
}
export async function joinFamily(code: string, name: string, color: number): Promise<string> {
  const r = await post('/api/join', { code, name, color });
  if (r.err) return r.err;
  remember(code.toUpperCase().replace(/[^A-Z0-9]/g, ''), r.id, r.token, name, color); fam.status = 'pending'; connect(); return '';
}
export function leaveFamily() {
  send({ t: fam.admin ? 'dissolve' : 'leave' });
  forget('left');
}
export const approve = (id: string) => send({ t: 'approve', id });
export const removeMember = (id: string) => send({ t: 'remove', id });

function forget(why: string) {
  saved = null; try { localStorage.removeItem(KEY); } catch { /* storage unavailable */ }
  fam.status = 'none'; fam.admin = false; fam.code = ''; fam.members = []; fam.pending = []; fam.me = '';
  const w = ws; ws = null; if (w) { w.onclose = null; try { w.close(); } catch { /* closed */ } }
  fam.connected = false;
  famHooks.gone(why); famHooks.state();
}

/* ---------- the live connection ---------- */
let ws: WebSocket | null = null, retry = 2000, retryTimer = 0;
export function connect() {
  if (!SERVER || !saved || ws) return;
  clearTimeout(retryTimer);
  const s = saved, w = new WebSocket(SERVER.replace(/^http/, 'ws') + '/api/ws?code=' + s.code + '&token=' + s.token);
  ws = w;
  w.onopen = () => { fam.connected = true; retry = 2000; };
  w.onmessage = e => {
    let m: any; try { m = JSON.parse(e.data); } catch { return; }
    if (m.t === 'state') {
      const was = fam.status;
      fam.status = m.status; fam.admin = !!m.admin; fam.code = m.code || '';
      fam.members = m.members || []; fam.pending = m.pending || [];
      famHooks.state();
      // just let in, or back after being away: share the island as it is now
      if (fam.status === 'member' && (was !== 'member' || !sentOnce)) { sentOnce = true; saveNow(); }
    }
    else if (m.t === 'snap') { try { famHooks.snap(m.id, JSON.parse(m.d)); } catch { /* a bad copy is ignored */ } }
    else if (m.t === 'pos' || m.t === 'horn') famHooks.live(m);
    else if (m.t === 'gone') forget(m.why);
  };
  w.onclose = () => {
    if (ws !== w) return;
    ws = null; fam.connected = false; sentOnce = false;
    fam.members = fam.members.map(x => ({ ...x, online: x.id === fam.me ? false : x.online }));
    famHooks.state();
    // try again a little later, then less often
    retryTimer = window.setTimeout(connect, retry); retry = Math.min(30000, retry * 1.6);
  };
}
// passing news that is not kept: where the boat is, the horn
export function sendLive(m: unknown) { if (fam.status === 'member') send(m); }
function send(m: unknown) { if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m)); }
// come back quickly when the device wakes or the network returns
window.addEventListener('online', () => { retry = 2000; if (!ws) connect(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden && !ws) { retry = 2000; connect(); } });

/* ---------- sharing this island ---------- */
// the garden is sent at most every few seconds, as it was last saved
let sentOnce = false, waiting: unknown = null, shareTimer = 0;
export function shareIsland(data: unknown) {
  if (fam.status !== 'member') return;
  waiting = data;
  if (shareTimer) return;
  shareTimer = window.setTimeout(() => { shareTimer = 0; if (waiting) send({ t: 'snap', d: JSON.stringify(waiting) }); waiting = null; }, 2500);
}
