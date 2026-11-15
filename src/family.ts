import { fam, SERVER, COLORS, createFamily, joinFamily, leaveFamily, approve, removeMember } from './net';
import { say } from './ui';
import { voiceAllowed, setVoiceAllowed } from './voice';

/* ---------- the parents' screen: create a family archipelago, join one with its code, let islands in ----------
   A small sum keeps fingers from opening it by accident. The real protection is the family code itself,
   which only the parents know. */

const $ = (id: string) => document.getElementById(id)!;
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
const hex = (n: number) => '#' + (COLORS[n] ?? COLORS[0]).toString(16).padStart(6, '0');
const ERR: Record<string, string> = {
  nocode: 'هذا الكود غير موجود. تأكدوا من الحروف الثمانية.',
  full: 'الأرخبيل ممتلئ: فيه أربع جزر.',
  slow: 'محاولات كثيرة. انتظروا قليلًا ثم حاولوا من جديد.',
  name: 'اكتبوا اسمًا للطفلة.',
  net: 'لا يوجد اتصال بالخادم الآن.',
  busy: 'الخادم مشغول. حاولوا بعد قليل.',
};

let view: 'gate' | 'home' | 'create' | 'join' | 'confirmLeave' = 'gate';
let answer = 0, note = '', color = 0, busy = false;

export function initFamily() {
  const btn = $('familyBtn');
  if (!SERVER) { btn.hidden = true; return; }
  btn.onclick = () => { view = 'gate'; note = ''; render(); $('family').classList.add('open'); };
  $('family').addEventListener('click', e => { if (e.target === $('family')) close(); });
}
const close = () => $('family').classList.remove('open');
// called whenever the family changes; redraws the screen if it is open, and marks the button when someone waits
// what the server last said; empty until it first answers, so a reload is not mistaken for being let in
let lastStatus = '', lastOnline = new Map<string, boolean>();
export function familyChanged() {
  $('familyBtn').classList.toggle('dot', fam.admin && fam.pending.length > 0);
  if (lastStatus === 'pending' && fam.status === 'member') say('صار لجزيرتكِ جيران! أبحري بالقارب لتريهم.', 5000);
  if (fam.status === 'member') for (const m of fam.members) {
    if (m.id !== fam.me && m.online && lastOnline.get(m.id) === false) say(m.name + ' وصلت إلى جزيرتها.', 3500);
  }
  lastOnline = new Map(fam.members.map(m => [m.id, m.online]));
  lastStatus = fam.status;
  if ($('family').classList.contains('open') && view !== 'gate' && view !== 'create' && view !== 'join') render();
}

function swatches() {
  return '<div class="swatches">' + COLORS.map((_, i) => `<button class="sw${i === color ? ' on' : ''}" data-color="${i}" style="background:${hex(i)}" aria-label="لون ${i + 1}"></button>`).join('') + '</div>';
}
function render() {
  const card = $('familyCard');
  let h = '';
  if (view === 'gate') {
    const a = 6 + Math.floor(Math.random() * 4), b = 6 + Math.floor(Math.random() * 4); answer = a * b;
    h = `<h1>للأهل</h1><p>هذه الصفحة لربط جزيرة الطفلة بجزر العائلة والأصدقاء.</p>
      <label class="field">كم يساوي ${a} × ${b}؟<input id="fGate" inputmode="numeric" autocomplete="off"></label>
      <p class="note">${esc(note)}</p>
      <div class="row"><button class="btn" id="fGo">دخول</button><button class="btn ghost" id="fClose">إغلاق</button></div>`;
  } else if (view === 'home' && fam.status === 'none') {
    h = `<h1>أرخبيل العائلة</h1><p>جزر الأطفال تظهر متجاورة في بحر واحد. لا يدخله إلا من يملك كود العائلة.</p>
      <p class="note">${esc(note)}</p>
      <div class="col"><button class="btn" id="fNew">أرخبيل جديد</button><button class="btn" id="fHave">لدينا كود عائلة</button><button class="btn ghost" id="fClose">إغلاق</button></div>`;
  } else if (view === 'create' || view === 'join') {
    h = `<h1>${view === 'create' ? 'أرخبيل جديد' : 'الانضمام بكود'}</h1>
      ${view === 'join' ? '<label class="field">كود العائلة<input id="fCode" maxlength="9" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX" dir="ltr"></label>' : ''}
      <label class="field">اسم الطفلة<input id="fName" maxlength="14" autocomplete="off" value="${esc(fam.name)}"></label>
      <p class="hint">يكفي الاسم الأول أو لقب.</p>
      <div class="field">لون العلم والشراع${swatches()}</div>
      <p class="note">${esc(note)}</p>
      <div class="row"><button class="btn" id="fSend"${busy ? ' disabled' : ''}>${view === 'create' ? 'إنشاء' : 'إرسال الطلب'}</button><button class="btn ghost" id="fBack">رجوع</button></div>`;
  } else if (view === 'home' && fam.status === 'pending') {
    h = `<h1>ننتظر الموافقة</h1><p>أُرسل الطلب. تظهر الجزر حين يوافق من أنشأ الأرخبيل على جهازه.</p>
      ${fam.connected ? '' : '<p class="note">لا يوجد اتصال بالخادم الآن.</p>'}
      <div class="row"><button class="btn ghost" id="fLeave">إلغاء الطلب</button><button class="btn" id="fClose">إغلاق</button></div>`;
  } else if (view === 'home') {
    const code = fam.code ? fam.code.slice(0, 4) + '-' + fam.code.slice(4) : '';
    h = `<h1>أرخبيل العائلة</h1>
      ${code ? `<div class="code" dir="ltr">${code}</div><p class="hint">أعطوا هذا الكود لأهل الصديقة فقط، لا للأطفال.</p>` : ''}
      ${fam.connected ? '' : '<p class="note">لا يوجد اتصال بالخادم الآن. الجزيرة تعمل وحدها.</p>'}
      ${fam.pending.length ? '<h2>ينتظرون الموافقة</h2>' + fam.pending.map(p => `<div class="mem"><span class="nm">${esc(p.name)}</span><button class="mini ok" data-ok="${p.id}">موافقة</button><button class="mini" data-no="${p.id}">رفض</button></div>`).join('') : ''}
      <h2>الجزر</h2>
      ${fam.members.map(m => `<div class="mem"><span class="dot" style="background:${hex(m.color)}"></span><span class="nm">${esc(m.name)}${m.id === fam.me ? ' (هذا الجهاز)' : ''}</span><span class="st">${m.online ? 'حاضرة' : 'نائمة'}</span>${fam.admin && m.id !== fam.me ? `<button class="mini" data-no="${m.id}">إخراج</button>` : ''}</div>`).join('')}
      <h2>الصوت لهذه الطفلة</h2>
      <div class="row seg"><button class="btn${voiceAllowed() ? '' : ' ghost'}" id="fVoiceOn">مسموح</button><button class="btn${voiceAllowed() ? ' ghost' : ''}" id="fVoiceOff">مغلق</button></div>
      <p class="hint">مع «مغلق» لا تتكلم ولا تسمع. يفيد وقت النوم أو الواجبات.</p>
      <div class="row"><button class="btn" id="fClose">إغلاق</button><button class="btn ghost" id="fLeave">${fam.admin ? 'حذف الأرخبيل' : 'مغادرة الأرخبيل'}</button></div>`;
  } else if (view === 'confirmLeave') {
    h = fam.admin
      ? `<h1>حذف الأرخبيل؟</h1><p>تختفي جزر الجميع من البحر، ويبطل الكود. حدائق الأطفال تبقى على أجهزتهم.</p>`
      : `<h1>مغادرة الأرخبيل؟</h1><p>تعود الجزيرة وحدها في البحر. الحديقة تبقى كما هي.</p>`;
    h += `<div class="row"><button class="btn danger" id="fLeaveYes">${fam.admin ? 'نعم، احذفه' : 'نعم، غادروا'}</button><button class="btn ghost" id="fBack">لا</button></div>`;
  }
  card.innerHTML = h;
  wire();
}

function wire() {
  const on = (id: string, f: () => void) => { const el = document.getElementById(id); if (el) el.onclick = f; };
  on('fClose', close);
  on('fGo', () => {
    if (Number(($('fGate') as HTMLInputElement).value) === answer) { view = 'home'; note = ''; } else note = 'ليست هذه الإجابة.';
    render();
  });
  const gate = document.getElementById('fGate') as HTMLInputElement | null;
  if (gate) { gate.focus(); gate.onkeydown = e => { if (e.key === 'Enter') ($('fGo') as HTMLButtonElement).click(); }; }
  on('fNew', () => { view = 'create'; note = ''; color = fam.color; render(); });
  on('fHave', () => { view = 'join'; note = ''; color = fam.color; render(); });
  on('fBack', () => { view = 'home'; note = ''; render(); });
  on('fLeave', () => { view = 'confirmLeave'; render(); });
  on('fVoiceOn', () => { setVoiceAllowed(true); render(); });
  on('fVoiceOff', () => { setVoiceAllowed(false); render(); });
  on('fLeaveYes', () => { leaveFamily(); view = 'home'; note = ''; render(); });
  document.querySelectorAll<HTMLElement>('#familyCard .sw').forEach(el => el.onclick = () => {
    color = Number(el.dataset.color);
    document.querySelectorAll('#familyCard .sw').forEach(s => s.classList.toggle('on', s === el));
  });
  document.querySelectorAll<HTMLElement>('#familyCard [data-ok]').forEach(el => el.onclick = () => approve(el.dataset.ok!));
  document.querySelectorAll<HTMLElement>('#familyCard [data-no]').forEach(el => el.onclick = () => removeMember(el.dataset.no!));
  on('fSend', async () => {
    if (busy) return;
    const name = ($('fName') as HTMLInputElement).value.trim();
    if (!name) { note = ERR.name; render(); return; }
    busy = true; ($('fSend') as HTMLButtonElement).disabled = true;
    const err = view === 'create' ? await createFamily(name, color) : await joinFamily(($('fCode') as HTMLInputElement).value, name, color);
    busy = false;
    if (err) { note = ERR[err] || ERR.net; render(); return; }
    view = 'home'; note = ''; render();
  });
}
