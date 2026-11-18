import { DurableObject } from 'cloudflare:workers';

/* The family archipelago.
   A parent creates an archipelago and gets an eight-letter family code. Another parent enters the code
   on their child's device; that island waits until the creator's device approves it. Up to four islands.
   Each device keeps its own island; the server keeps only the last copy each island sent, so friends
   can see it while its owner is away. No accounts, no e-mail: a device is known by a random token. */

export interface Env {
  ARCH: DurableObjectNamespace<Archipelago>;
  LIMIT: DurableObjectNamespace<Limiter>;
  // optional: a Cloudflare TURN key, for voices that cannot reach each other directly (set with wrangler secret put)
  TURN_KEY_ID?: string;
  TURN_KEY_TOKEN?: string;
}

const MAX_ISLANDS = 4;
const MAX_SNAPSHOT = 900_000;          // characters of one island's saved garden
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // no 0/O or 1/I to mix up

const random = (n: number) => crypto.getRandomValues(new Uint8Array(n));
const newCode = () => Array.from(random(8), b => ALPHA[b % 32]).join('');
const newToken = () => Array.from(random(24), b => b.toString(16).padStart(2, '0')).join('');
const newId = () => 'm' + Array.from(random(6), b => b.toString(16).padStart(2, '0')).join('');
async function hash(s: string) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(d), b => b.toString(16).padStart(2, '0')).join('');
}
const cleanCode = (s: unknown) => String(s ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
const cleanName = (s: unknown) => String(s ?? '').replace(/[\u0000-\u001f<>&"'`]/g, '').replace(/\s+/g, ' ').trim().slice(0, 14);
const cleanColor = (c: unknown) => { const n = Number(c); return Number.isInteger(n) && n >= 0 && n <= 7 ? n : 0; };

/* ---------- who may call: the published game and local testing ---------- */
function allowed(origin: string | null) {
  if (!origin) return false;
  if (origin === 'https://archmohamedmerie-coder.github.io') return true;
  return /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)(:\d+)?$/.test(origin);
}
function cors(origin: string | null): Record<string, string> {
  return allowed(origin) ? { 'Access-Control-Allow-Origin': origin!, 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' } : {};
}
const json = (o: unknown, origin: string | null, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url), origin = req.headers.get('Origin');
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (!allowed(origin)) return new Response('forbidden', { status: 403 });
    const ip = req.headers.get('CF-Connecting-IP') || 'local';
    const limiter = env.LIMIT.get(env.LIMIT.idFromName('all'));

    if (url.pathname === '/api/create' && req.method === 'POST') {
      if (!(await limiter.hit(ip, 'create', 5))) return json({ err: 'slow' }, origin, 429);
      const b = await req.json<any>().catch(() => ({}));
      const name = cleanName(b.name); if (!name) return json({ err: 'name' }, origin, 400);
      for (let i = 0; i < 5; i++) {
        const code = newCode(), r = await env.ARCH.get(env.ARCH.idFromName(code)).create(code, name, cleanColor(b.color));
        if (r) return json({ code, ...r }, origin);
      }
      return json({ err: 'busy' }, origin, 503);
    }
    if (url.pathname === '/api/join' && req.method === 'POST') {
      // guessing codes is slow: a few tries per address every ten minutes
      if (!(await limiter.hit(ip, 'join', 10))) return json({ err: 'slow' }, origin, 429);
      const b = await req.json<any>().catch(() => ({}));
      const code = cleanCode(b.code), name = cleanName(b.name);
      if (code.length !== 8) return json({ err: 'nocode' }, origin, 404);
      if (!name) return json({ err: 'name' }, origin, 400);
      const r = await env.ARCH.get(env.ARCH.idFromName(code)).join(name, cleanColor(b.color));
      return json(r, origin, 'err' in r ? (r.err === 'nocode' ? 404 : 409) : 200);
    }
    if (url.pathname === '/api/ws') {
      if (req.headers.get('Upgrade') !== 'websocket') return new Response('expected websocket', { status: 426 });
      const code = cleanCode(url.searchParams.get('code'));
      if (code.length !== 8) return new Response('no', { status: 404 });
      return env.ARCH.get(env.ARCH.idFromName(code)).fetch(req);
    }
    return new Response('not found', { status: 404 });
  },
};

/* ---------- a simple count of attempts per address ---------- */
export class Limiter extends DurableObject<Env> {
  private seen = new Map<string, { n: number; t: number }>();
  async hit(ip: string, kind: string, max: number): Promise<boolean> {
    const k = kind + ':' + ip, now = Date.now(), e = this.seen.get(k);
    if (!e || now - e.t > 600_000) { this.seen.set(k, { n: 1, t: now }); return true; }
    e.n++; return e.n <= max;
  }
}

/* ---------- one family ---------- */
interface Member { id: string; name: string; color: number; slot: number | null; status: 'pending' | 'member'; tok: string; at: number }
interface Meta { code: string; admin: string; at: number }

export class Archipelago extends DurableObject<Env> {
  private async meta() { return this.ctx.storage.get<Meta>('meta'); }
  private async members() { return (await this.ctx.storage.get<Record<string, Member>>('members')) || {}; }

  async create(code: string, name: string, color: number) {
    if (await this.meta()) return null;          // that code is taken; the caller tries another
    const id = newId(), token = newToken();
    const m: Member = { id, name, color, slot: 0, status: 'member', tok: await hash(token), at: Date.now() };
    await this.ctx.storage.put({ meta: { code, admin: id, at: Date.now() } satisfies Meta, members: { [id]: m } });
    return { id, token };
  }

  async join(name: string, color: number): Promise<{ id: string; token: string } | { err: string }> {
    if (!(await this.meta())) return { err: 'nocode' };
    const ms = await this.members();
    if (Object.keys(ms).length >= MAX_ISLANDS) return { err: 'full' };
    const id = newId(), token = newToken();
    ms[id] = { id, name, color, slot: null, status: 'pending', tok: await hash(token), at: Date.now() };
    await this.ctx.storage.put('members', ms);
    await this.broadcast();
    return { id, token };
  }

  async fetch(req: Request): Promise<Response> {
    const meta = await this.meta(), ms = await this.members();
    const tok = new URL(req.url).searchParams.get('token') || '';
    const h = await hash(tok), me = Object.values(ms).find(m => m.tok === h);
    const pair = new WebSocketPair();
    this.ctx.acceptWebSocket(pair[1], me ? [me.id] : ['nobody']);
    if (!meta || !me) {
      // unknown or removed: tell the device so it forgets this family
      pair[1].send(JSON.stringify({ t: 'gone', why: meta ? 'removed' : 'nocode' })); pair[1].close(4000, 'gone');
    } else {
      pair[1].serializeAttachment({ id: me.id });
      await this.broadcast();
      if (me.status === 'member') await this.sendSnaps(pair[1], me.id);
    }
    return new Response(null, { status: 101, webSocket: pair[0] });
  }

  async webSocketMessage(ws: WebSocket, raw: string | ArrayBuffer) {
    if (typeof raw !== 'string' || raw.length > MAX_SNAPSHOT + 200) return;
    const { id } = (ws.deserializeAttachment() || {}) as { id?: string };
    const meta = await this.meta(), ms = await this.members(), me = id ? ms[id] : undefined;
    if (!meta || !me) { ws.close(4000, 'gone'); return; }
    let msg: any; try { msg = JSON.parse(raw); } catch { return; }
    const admin = meta.admin === me.id;

    if (msg.t === 'snap' && me.status === 'member' && typeof msg.d === 'string' && msg.d.length <= MAX_SNAPSHOT) {
      await this.ctx.storage.put('snap:' + me.id, msg.d);
      const out = JSON.stringify({ t: 'snap', id: me.id, d: msg.d });
      for (const o of this.memberSockets(ms)) if (o !== ws) o.send(out);
    }
    // where a boat is and the sound of its horn: passed on to the others as they come, never stored
    else if ((msg.t === 'pos' || msg.t === 'horn') && me.status === 'member') {
      const num = (v: unknown) => { const n = Number(v); return Number.isFinite(n) && Math.abs(n) < 1e4 ? Math.round(n * 100) / 100 : 0; };
      const out = JSON.stringify(msg.t === 'horn' ? { t: 'horn', id: me.id }
        : msg.docked ? { t: 'pos', id: me.id, docked: true } : msg.m === 'walk' ? { t: 'pos', id: me.id, m: 'walk', x: num(msg.x), y: num(msg.y), z: num(msg.z), a: num(msg.a), bx: num(msg.bx), bz: num(msg.bz), ba: num(msg.ba) }
        : { t: 'pos', id: me.id, m: 'boat', x: num(msg.x), z: num(msg.z), a: num(msg.a) });
      for (const o of this.memberSockets(ms)) if (o !== ws) { try { o.send(out); } catch { /* closed */ } }
    }
    /* ---------- visits: the bell at the pier, the answer, the sign, goodbye ---------- */
    /* ---------- voices ----------
       The sound itself goes from device to device (WebRTC); the server only introduces them (rtc),
       says who is speaking (talk) and who is listening (voice), and hands out the ways to connect (ice). */
    else if (msg.t === 'rtc' && me.status === 'member' && ms[msg.to]?.status === 'member' && msg.to !== me.id) {
      const d = JSON.stringify(msg.d ?? null);
      if (d.length <= 16000) this.tell(msg.to, { t: 'rtc', from: me.id, d: JSON.parse(d) });
    }
    else if (msg.t === 'talk' && me.status === 'member') {
      const out = JSON.stringify({ t: 'talk', id: me.id, on: !!msg.on });
      for (const o of this.memberSockets(ms)) if (o !== ws) { try { o.send(out); } catch { /* closed */ } }
    }
    else if (msg.t === 'voice' && me.status === 'member') {
      await this.ctx.storage.put('voice:' + me.id, { on: !!msg.on, listen: !!msg.listen });
      await this.broadcast();
    }
    else if (msg.t === 'ice' && me.status === 'member') ws.send(JSON.stringify({ t: 'ice', servers: await this.iceServers() }));
    /* ---------- building together ----------
       A visitor's step goes only to the island she is visiting; that island's cells go only to its visitors. */
    else if (msg.t === 'edit' && me.status === 'member' && Array.isArray(msg.d)) {
      const host = await this.ctx.storage.get<string>('visit:' + me.id);
      if (host) this.tell(host, { t: 'edit', from: me.id, d: msg.d });
    }
    else if (msg.t === 'cells' && me.status === 'member' && Array.isArray(msg.d)) {
      const out = { t: 'cells', from: me.id, d: msg.d };
      for (const [k, h] of await this.ctx.storage.list<string>({ prefix: 'visit:' })) {
        const g = k.slice(6);
        if (h === me.id && (msg.to ? g === msg.to : g !== msg.skip)) this.tell(g, out);
      }
    }
    else if (me.status === 'member' && ['knock', 'unknock', 'answer', 'invite', 'door', 'bye', 'endVisit'].includes(msg.t)) await this.visits(ws, ms, me, msg);
    else if (msg.t === 'approve' && admin && ms[msg.id]?.status === 'pending') {
      const used = new Set(Object.values(ms).map(m => m.slot));
      let slot = 0; while (used.has(slot)) slot++;
      ms[msg.id].status = 'member'; ms[msg.id].slot = slot;
      await this.ctx.storage.put('members', ms);
      await this.broadcast();
      for (const o of this.ctx.getWebSockets(msg.id)) await this.sendSnaps(o, msg.id);
    }
    else if (msg.t === 'remove' && admin && ms[msg.id] && msg.id !== me.id) await this.drop(ms, msg.id, 'removed');
    else if (msg.t === 'leave' && !admin) await this.drop(ms, me.id, 'left');
    else if (msg.t === 'dissolve' && admin) {
      for (const o of this.ctx.getWebSockets()) { try { o.send(JSON.stringify({ t: 'gone', why: 'dissolved' })); o.close(4000, 'gone'); } catch { /* already closed */ } }
      await this.ctx.storage.deleteAll();
    }
  }
  async webSocketClose(ws: WebSocket) { try { ws.close(); } catch { /* closed */ } await this.gone(ws); }
  async webSocketError(ws: WebSocket) { await this.gone(ws); }
  // a device went away: if that was the child's last connection, end her visits and knocks
  private async gone(ws: WebSocket) {
    const { id } = (ws.deserializeAttachment() || {}) as { id?: string };
    if (id && !this.ctx.getWebSockets(id).some(w => w !== ws && w.readyState === WebSocket.OPEN)) await this.endAll(id, 'away', ws);
    await this.broadcast(ws);
  }
  // a free public meeting point for direct connections, and a relay too when the family has a TURN key
  private async iceServers(): Promise<unknown[]> {
    const stun = [{ urls: 'stun:stun.cloudflare.com:3478' }];
    if (!this.env.TURN_KEY_ID || !this.env.TURN_KEY_TOKEN) return stun;
    try {
      const r = await fetch('https://rtc.live.cloudflare.com/v1/turn/keys/' + this.env.TURN_KEY_ID + '/credentials/generate-ice-servers', {
        method: 'POST', headers: { Authorization: 'Bearer ' + this.env.TURN_KEY_TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify({ ttl: 86400 }) });
      const j = await r.json<{ iceServers?: { urls: string | string[]; username?: string; credential?: string }[] }>();
      if (!j.iceServers) return stun;
      // browsers block port 53, so that address would only make them wait
      return j.iceServers.map(sv => ({ ...sv, urls: (Array.isArray(sv.urls) ? sv.urls : [sv.urls]).filter(u => !/:53(\?|$)/.test(u)) }));
    } catch { return stun; }
  }
  private tell(id: string, m: unknown, except?: WebSocket) {
    const s = JSON.stringify(m);
    for (const o of this.ctx.getWebSockets(id)) if (o !== except) { try { o.send(s); } catch { /* closed */ } }
  }
  private async door(id: string) { return (await this.ctx.storage.get<{ closed: boolean; muted: string[] }>('door:' + id)) || { closed: false, muted: [] }; }
  // end every visit and knock this child is part of, as guest or as host
  private async endAll(id: string, why: string, except?: WebSocket) {
    const all = await this.ctx.storage.list<string>({ prefix: 'visit:' });
    for (const [k, host] of all) {
      const guest = k.slice(6);
      if (guest === id) { await this.ctx.storage.delete(k); this.tell(host, { t: 'visitEnd', id }, except); }
      else if (host === id) { await this.ctx.storage.delete(k); this.tell(guest, { t: 'bye', host: id, why }, except); }
    }
    const knocks = await this.ctx.storage.list<string>({ prefix: 'knock:' });
    for (const [k, host] of knocks) {
      const guest = k.slice(6);
      if (guest === id) { await this.ctx.storage.delete(k); this.tell(host, { t: 'unknock', from: id }, except); }
      else if (host === id) { await this.ctx.storage.delete(k); this.tell(guest, { t: 'knockNo', host: id, why: 'away' }, except); }
    }
  }
  private async visits(ws: WebSocket, ms: Record<string, Member>, me: Member, msg: any) {
    const other = typeof msg.host === 'string' ? msg.host : typeof msg.to === 'string' ? msg.to : typeof msg.id === 'string' ? msg.id : '';
    const isMember = (id: string) => ms[id]?.status === 'member';
    const online = (id: string) => this.ctx.getWebSockets(id).some(w => w.readyState === WebSocket.OPEN);
    if (msg.t === 'knock') {
      // she rings at a friend's pier
      const host = other, d = await this.door(host);
      const why = !isMember(host) || host === me.id || !online(host) ? 'away' : d.closed ? 'closed' : d.muted.includes(me.id) ? 'muted'
        : (await this.ctx.storage.get('visit:' + me.id)) ? 'busy' : '';
      if (why) { ws.send(JSON.stringify({ t: 'knockNo', host, why })); return; }
      await this.ctx.storage.put('knock:' + me.id, host);
      this.tell(host, { t: 'knock', from: me.id });
      ws.send(JSON.stringify({ t: 'knockOk', host }));
    }
    else if (msg.t === 'unknock') {
      const host = await this.ctx.storage.get<string>('knock:' + me.id);
      if (host) { await this.ctx.storage.delete('knock:' + me.id); this.tell(host, { t: 'unknock', from: me.id }); }
    }
    else if (msg.t === 'answer') {
      // the owner of the island answers the bell
      const guest = other;
      if ((await this.ctx.storage.get<string>('knock:' + guest)) !== me.id) return;
      await this.ctx.storage.delete('knock:' + guest);
      if (msg.yes) { await this.ctx.storage.put('visit:' + guest, me.id); this.tell(guest, { t: 'welcome', host: me.id }); }
      else {
        // not now: her bell stays silent for this friend until she invites her
        const d = await this.door(me.id); if (!d.muted.includes(guest)) d.muted.push(guest);
        await this.ctx.storage.put('door:' + me.id, d); this.tell(guest, { t: 'notNow', host: me.id });
      }
      await this.broadcast();
    }
    else if (msg.t === 'invite' && isMember(other)) {
      const d = await this.door(me.id); d.muted = d.muted.filter(x => x !== other);
      await this.ctx.storage.put('door:' + me.id, d);
      this.tell(other, { t: 'invited', host: me.id });
      await this.broadcast();
    }
    else if (msg.t === 'door') {
      const d = await this.door(me.id); d.closed = !!msg.closed;
      await this.ctx.storage.put('door:' + me.id, d);
      await this.broadcast();
    }
    else if (msg.t === 'bye') {
      if ((await this.ctx.storage.get<string>('visit:' + other)) !== me.id) return;
      await this.ctx.storage.delete('visit:' + other);
      this.tell(other, { t: 'bye', host: me.id, why: 'host' });
      await this.broadcast();
    }
    else if (msg.t === 'endVisit') {
      const host = await this.ctx.storage.get<string>('visit:' + me.id);
      if (host) { await this.ctx.storage.delete('visit:' + me.id); this.tell(host, { t: 'visitEnd', id: me.id }); await this.broadcast(); }
    }
  }

  private async drop(ms: Record<string, Member>, id: string, why: string) {
    await this.endAll(id, 'away'); await this.ctx.storage.delete('door:' + id); await this.ctx.storage.delete('voice:' + id);
    delete ms[id];
    await this.ctx.storage.put('members', ms); await this.ctx.storage.delete('snap:' + id);
    for (const o of this.ctx.getWebSockets(id)) { try { o.send(JSON.stringify({ t: 'gone', why })); o.close(4000, 'gone'); } catch { /* closed */ } }
    await this.broadcast();
  }
  private memberSockets(ms: Record<string, Member>) {
    return Object.values(ms).filter(m => m.status === 'member').flatMap(m => this.ctx.getWebSockets(m.id));
  }
  private async sendSnaps(ws: WebSocket, except: string) {
    const ms = await this.members();
    for (const m of Object.values(ms)) {
      if (m.id === except || m.status !== 'member') continue;
      const d = await this.ctx.storage.get<string>('snap:' + m.id);
      if (d) ws.send(JSON.stringify({ t: 'snap', id: m.id, d }));
    }
  }
  // tell every connected device who is in the family and who is here; a pending island learns only that it waits
  private async broadcast(closing?: WebSocket) {
    const meta = await this.meta(); if (!meta) return;
    const ms = await this.members();
    const online = (id: string) => this.ctx.getWebSockets(id).some(w => w !== closing && w.readyState === WebSocket.OPEN);
    const list = Object.values(ms).filter(m => m.status === 'member').map(m => ({ id: m.id, name: m.name, color: m.color, slot: m.slot, online: online(m.id) }));
    const pending = Object.values(ms).filter(m => m.status === 'pending').map(m => ({ id: m.id, name: m.name }));
    const doors = new Map<string, { closed: boolean; muted: string[] }>();
    for (const m of list) doors.set(m.id, await this.door(m.id));
    const visits = [...(await this.ctx.storage.list<string>({ prefix: 'visit:' }))].map(([k, h]) => ({ guest: k.slice(6), host: h }));
    const voices = new Map<string, { on: boolean; listen: boolean }>();
    for (const m of list) voices.set(m.id, (await this.ctx.storage.get<{ on: boolean; listen: boolean }>('voice:' + m.id)) || { on: false, listen: false });
    const members = list.map(m => ({ ...m, closed: !!doors.get(m.id)?.closed, voice: !!voices.get(m.id)?.on, listen: !!voices.get(m.id)?.listen && m.online }));
    for (const m of Object.values(ms)) {
      const admin = meta.admin === m.id;
      const msg = m.status === 'pending' ? { t: 'state', me: m.id, status: 'pending' }
        : { t: 'state', me: m.id, status: 'member', admin, code: admin ? meta.code : undefined, members, pending: admin ? pending : [], visits,
            muted: doors.get(m.id)?.muted || [], mutedBy: list.filter(h => doors.get(h.id)?.muted.includes(m.id)).map(h => h.id) };
      const s = JSON.stringify(msg);
      for (const o of this.ctx.getWebSockets(m.id)) if (o !== closing) { try { o.send(s); } catch { /* closed */ } }
    }
  }
}
