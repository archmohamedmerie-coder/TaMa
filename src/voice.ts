import { fam, sendLive, COLORS } from './net';
import { storeKey, PROFILE } from './profile';
import { say } from './ui';
import { mix } from './audio';

/* ---------- talking with the family ----------
   Every child in the family can hear every other, wherever they are in the archipelago. No one has to ask:
   whoever does not want to listen turns her speaker off, and anyone may speak whenever she likes.

   - The sound goes from device to device (WebRTC). The server only introduces the devices, says who is
     speaking and who is listening, and hands out the addresses to connect through. Nothing is recorded.
   - The microphone is opened only while she holds the talk button (like a walkie-talkie) and is closed the
     moment she lets go, so the phone does not show a microphone in use the rest of the time. Sliding her
     finger up locks it open for a longer chat; a locked microphone closes by itself after a minute of
     silence, or when the game is hidden.
   - The connections between devices are kept ready while the game is open, so the first words are not lost.
   - Voices play through audio elements, which the phone's silent switch does not mute.
   - Parents can switch the voice off for their child on the parents' screen. */

const KEY = storeKey('makabi-voice-v1');
const set = { allowed: true, listen: true, muted: [] as string[] };
try { Object.assign(set, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { /* defaults */ }
const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(set)); } catch { /* storage unavailable */ } };
const $ = (id: string) => document.getElementById(id)!;
const nameOf = (id: string) => fam.members.find(m => m.id === id)?.name || '';

/* ---------- the ways to connect ---------- */
let ice: RTCIceServer[] = [{ urls: 'stun:stun.cloudflare.com:3478' }], iceReady = false;

/* ---------- one connection per friend ----------
   The child whose id sorts first starts each connection; the other answers. If a connection breaks,
   the one who started it tells the other to drop it ("reset") and starts afresh. */
interface Peer { id: string; pc: RTCPeerConnection; audio: HTMLAudioElement; sender: RTCRtpSender | null; starter: boolean; tries: number; timer: number }
const peers = new Map<string, Peer>();
const send = (to: string, d: unknown) => sendLive({ t: 'rtc', to, d });

function makePeer(id: string, starter: boolean): Peer {
  const pc = new RTCPeerConnection({ iceServers: ice });
  const audio = document.createElement('audio'); audio.autoplay = true; (audio as any).playsInline = true; audio.hidden = true;
  document.body.appendChild(audio);
  const p: Peer = { id, pc, audio, sender: null, starter, tries: 0, timer: 0 };
  pc.onicecandidate = e => { if (e.candidate) send(id, { candidate: e.candidate.toJSON() }); };
  pc.ontrack = e => { audio.srcObject = e.streams[0] || new MediaStream([e.track]); applyListening(); play(audio); };
  pc.onconnectionstatechange = () => {
    const s = pc.connectionState;
    if (s === 'connected') p.tries = 0;
    // broken: the starter tries again a little later, then less often
    if ((s === 'failed' || s === 'disconnected') && p.starter) {
      clearTimeout(p.timer);
      p.timer = window.setTimeout(() => { if (peers.get(id) === p && p.pc.connectionState !== 'connected') restart(id); }, s === 'failed' ? 1000 : 5000);
    }
  };
  if (starter) {
    p.sender = pc.addTransceiver('audio', { direction: 'sendrecv' }).sender;
    pc.onnegotiationneeded = async () => {
      try { await pc.setLocalDescription(); send(id, { description: pc.localDescription }); } catch { /* the next try will do */ }
    };
  }
  if (track && p.sender) p.sender.replaceTrack(track).catch(() => {});
  peers.set(id, p);
  return p;
}
function dropPeer(id: string) {
  const p = peers.get(id); if (!p) return;
  clearTimeout(p.timer); p.pc.onconnectionstatechange = null; p.pc.close();
  p.audio.srcObject = null; p.audio.remove(); peers.delete(id);
}
function restart(id: string) {
  const p = peers.get(id), tries = p ? p.tries + 1 : 0;
  dropPeer(id); send(id, { reset: true });
  if (tries > 6) return;                       // given up until the family changes again
  const n = makePeer(id, true); n.tries = tries;
}

// a message from a friend's device about their connection with this one
async function onRtc(from: string, d: any) {
  if (!d || !wanted().includes(from)) return;
  if (d.reset) { if (!starts(from)) dropPeer(from); return; }
  let p = peers.get(from);
  try {
    if (d.description) {
      if (d.description.type === 'offer') {
        // she starts our connection: answer it (a fresh one if the old one cannot take it)
        if (!p || p.starter || p.pc.signalingState === 'closed') { if (p) dropPeer(from); p = makePeer(from, false); }
        await p.pc.setRemoteDescription(d.description);
        const tr = p.pc.getTransceivers()[0];
        if (tr && !p.sender) { tr.direction = 'sendrecv'; p.sender = tr.sender; if (track) await p.sender.replaceTrack(track); }
        await p.pc.setLocalDescription();
        send(from, { description: p.pc.localDescription });
      } else if (p && p.starter && p.pc.signalingState === 'have-local-offer') await p.pc.setRemoteDescription(d.description);
    } else if (d.candidate && p) await p.pc.addIceCandidate(d.candidate);
  } catch { if (p && p.starter) restart(from); }
}

/* ---------- who to be connected with ---------- */
const starts = (id: string) => fam.me < id;
function wanted(): string[] {
  if (!set.allowed || fam.status !== 'member' || !fam.connected) return [];
  return fam.members.filter(m => m.id !== fam.me && m.online && m.voice).map(m => m.id);
}
export function syncVoices() {
  const want = wanted();
  for (const id of [...peers.keys()]) if (!want.includes(id)) dropPeer(id);
  if (iceReady) for (const id of want) if (!peers.has(id) && starts(id)) makePeer(id, true);
  announce(); showMic(); applyListening();
}
// tell the family whether this child has voices on and is listening
let said = '';
function announce() {
  if (fam.status !== 'member' || !fam.connected) { said = ''; return; }
  const on = set.allowed, listen = set.allowed && set.listen && !document.hidden, key = on + ',' + listen;
  if (key === said) return;
  said = key; sendLive({ t: 'voice', on, listen });
}
export function voiceConnected() {
  said = ''; iceReady = false;
  sendLive({ t: 'ice' });
  // if no answer comes, the free meeting point alone will do
  window.setTimeout(() => { if (!iceReady) { iceReady = true; syncVoices(); } }, 2500);
  announce();
}

/* ---------- listening ---------- */
const pending = new Set<HTMLAudioElement>();
function play(a: HTMLAudioElement) { a.play().then(() => pending.delete(a), () => pending.add(a)); }
// phones play sound only after a touch: the first touch starts any voice still waiting
document.addEventListener('pointerdown', () => { if (pending.size) [...pending].forEach(play); }, true);
function applyListening() {
  for (const p of peers.values()) p.audio.muted = !set.allowed || !set.listen || document.hidden || set.muted.includes(p.id);
  const b = $('speakerBtn'); b.classList.toggle('off', !set.listen); b.setAttribute('aria-pressed', String(set.listen));
}
function toggleSpeaker() {
  set.listen = !set.listen; keep(); applyListening(); announce();
  say(set.listen ? 'تسمعين صديقاتكِ الآن.' : 'أطفأتِ السمّاعة. صديقاتكِ يعرفن أنكِ لا تسمعين.', 3500);
}

/* ---------- who is speaking: a bar under the title, with a button to quiet one friend ---------- */
const talking = new Set<string>();
function showTalkers() {
  const bar = $('talkers');
  const ids = [...talking].filter(id => fam.members.some(m => m.id === id));
  bar.hidden = !ids.length || !set.allowed;
  bar.innerHTML = '';
  for (const id of ids) {
    const m = fam.members.find(x => x.id === id)!, quiet = set.muted.includes(id);
    const row = document.createElement('div'); row.className = 'talker' + (quiet ? ' quiet' : '');
    const dot = document.createElement('span'); dot.className = 'wave'; dot.style.background = '#' + (COLORS[m.color] ?? COLORS[0]).toString(16).padStart(6, '0');
    const nm = document.createElement('span'); nm.textContent = m.name + (quiet ? ' (مكتومة)' : ' تتكلم');
    const btn = document.createElement('button'); btn.className = 'mini'; btn.textContent = quiet ? 'أسمعيها' : 'اكتميها';
    btn.onclick = () => { set.muted = quiet ? set.muted.filter(x => x !== id) : [...set.muted, id]; keep(); applyListening(); showTalkers(); };
    row.append(dot, nm, btn); bar.appendChild(row);
  }
  // the garden's own sounds step back while a friend is heard
  mix.duck = ids.some(id => !set.muted.includes(id)) && set.listen;
}

/* ---------- speaking: hold the button, or slide up to lock it open ---------- */
let track: MediaStreamTrack | null = null, holding = false, locked = false, opening = false, quietSince = 0, meter = 0;
const fake = /(^|[?&])fakemic=1/.test(location.search) && (PROFILE !== '' || location.hostname === 'localhost');
async function openMic(): Promise<MediaStreamTrack | null> {
  if (fake) {
    // for testing on one computer: a soft tone instead of a microphone
    const ac = new AudioContext(), o = ac.createOscillator(), g = ac.createGain(), d = ac.createMediaStreamDestination();
    o.frequency.value = 440; g.gain.value = .2; o.connect(g); g.connect(d); o.start();
    return d.stream.getAudioTracks()[0];
  }
  const s = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
  return s.getAudioTracks()[0];
}
async function startTalking() {
  if (track || opening || !set.allowed) return;
  const here = fam.members.filter(m => m.id !== fam.me && m.online && m.voice);
  if (!here.length) { say('لا أحد من صديقاتكِ هنا الآن ليسمعكِ.', 3500); return; }
  opening = true; $('micBtn').classList.add('opening');
  try { track = await openMic(); }
  catch { opening = false; $('micBtn').classList.remove('opening'); say('الميكروفون غير مسموح. اطلبي من أهلكِ السماح له في إعدادات المتصفح.', 5000); return; }
  opening = false; $('micBtn').classList.remove('opening');
  if (!holding && !locked) { stopTalking(); return; }      // she let go before the microphone was ready
  for (const p of peers.values()) p.sender?.replaceTrack(track).catch(() => {});
  sendLive({ t: 'talk', on: true });
  $('micBtn').classList.add('on');
  quietSince = performance.now(); watchQuiet(track!);
  const deaf = here.filter(m => !m.listen).map(m => m.name);
  if (deaf.length) say('لا تسمعكِ الآن: ' + deaf.join('، ') + '.', 3500);
}
function stopTalking() {
  locked = false; holding = false;
  $('micBtn').classList.remove('on', 'locked');
  clearInterval(meter);
  if (!track) return;
  for (const p of peers.values()) p.sender?.replaceTrack(null).catch(() => {});
  track.stop(); track = null;
  sendLive({ t: 'talk', on: false });
}
// a locked microphone closes by itself after a minute with nobody speaking
function watchQuiet(t: MediaStreamTrack) {
  clearInterval(meter);
  try {
    const ac = new AudioContext(), an = ac.createAnalyser(), buf = new Float32Array(512);
    ac.createMediaStreamSource(new MediaStream([t])).connect(an);
    meter = window.setInterval(() => {
      if (track !== t) { clearInterval(meter); ac.close(); return; }
      an.getFloatTimeDomainData(buf); let e = 0; for (const v of buf) e += v * v;
      if (Math.sqrt(e / buf.length) > .02) quietSince = performance.now();
      if (locked && performance.now() - quietSince > 60000) { stopTalking(); say('أغلقتُ الميكروفون لأن أحدًا لم يتكلم.', 3500); }
    }, 500);
  } catch { /* no meter: the lock simply stays until she taps */ }
}
function wireMic() {
  const b = $('micBtn') as HTMLButtonElement;
  let y0 = 0;
  b.addEventListener('contextmenu', e => e.preventDefault());
  b.addEventListener('pointerdown', e => {
    e.preventDefault(); try { b.setPointerCapture(e.pointerId); } catch { /* a pointer the browser does not track */ }
    if (locked) { stopTalking(); return; }          // a tap on a locked microphone closes it
    holding = true; y0 = e.clientY; startTalking();
  });
  b.addEventListener('pointermove', e => {
    if (holding && !locked && y0 - e.clientY > 50) { locked = true; b.classList.add('locked'); say('الميكروفون مفتوح. اضغطي عليه مرة لإغلاقه.', 3500); }
  });
  const up = () => { if (!holding) return; holding = false; if (!locked) stopTalking(); };
  b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up);
}
// the talk button shows when this child may speak and someone is there to hear
function showMic() {
  const someone = fam.members.some(m => m.id !== fam.me && m.online && m.voice);
  const on = set.allowed && fam.status === 'member' && someone;
  $('micBtn').hidden = !on; $('speakerBtn').hidden = !(set.allowed && fam.status === 'member');
  document.body.classList.toggle('voices', on);
  if (!on && (track || locked)) stopTalking();
}

/* ---------- news from the family ---------- */
export function voiceNews(m: any) {
  if (m.t === 'ice') { if (Array.isArray(m.servers) && m.servers.length) ice = m.servers; iceReady = true; syncVoices(); }
  else if (m.t === 'rtc') onRtc(m.from, m.d);
  else if (m.t === 'talk') { if (m.on) talking.add(m.id); else talking.delete(m.id); showTalkers(); }
}
export function voiceStateChanged() {
  for (const id of [...talking]) if (!fam.members.some(m => m.id === id && m.online)) talking.delete(id);
  syncVoices(); showTalkers();
}

/* ---------- the parents' switch ---------- */
export const voiceAllowed = () => set.allowed;
export function setVoiceAllowed(on: boolean) {
  set.allowed = on; keep();
  if (!on) { stopTalking(); talking.clear(); showTalkers(); }
  syncVoices();
}

export function initVoice() {
  wireMic();
  $('speakerBtn').onclick = toggleSpeaker;
  // hidden game: the microphone closes and the others learn she is not listening; back again: all as before
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopTalking(); announce(); applyListening(); });
  syncVoices();
}

// for tests from the console: each connection's state and how much sound has arrived through it
export async function voiceDebug() {
  const out: any[] = [];
  for (const p of peers.values()) {
    let energy = 0, bytes = 0;
    try { (await p.pc.getStats()).forEach((r: any) => { if (r.type === 'inbound-rtp' && r.kind === 'audio') { energy = r.totalAudioEnergy || 0; bytes = r.bytesReceived || 0; } }); } catch { /* none */ }
    out.push({ id: p.id, state: p.pc.connectionState, starter: p.starter, sending: !!p.sender?.track, energy: +energy.toFixed(4), bytes, muted: p.audio.muted });
  }
  return { allowed: set.allowed, listen: set.listen, talking: [...talking], peers: out, ice: ice.length };
}
