/**
 * ARENA CERDAS CERMAT MIPAS 2026
 * Google Apps Script (bound to a Google Spreadsheet).
 * Install: run setupDatabase(), fill PENGATURAN > PIN_GURU, then deploy Web App.
 */

const CC = Object.freeze({
  VERSION: '1.5.0',
  ADMIN_TTL: 21600,
  MAX_QUESTIONS: 50,
  PRELIMINARY_SECONDS: 2700,
  SEMIFINAL_SECONDS: 2700,
  FINAL_SECONDS: 30,
  FINAL_REBUTAN_SECONDS: 180,
  HEADERS: {
    SOAL: ['ID_SOAL', 'MAPEL', 'KELAS', 'TOPIK', 'BABAK', 'LEVEL', 'TIPE', 'PERTANYAAN', 'OPSI_A', 'OPSI_B', 'OPSI_C', 'OPSI_D', 'KUNCI', 'PEMBAHASAN', 'STATUS'],
    TIM: ['ID_TIM', 'NAMA_TIM', 'ANGGOTA_1', 'ANGGOTA_2', 'ANGGOTA_3', 'JURU_BICARA', 'DIBUAT_MS'],
    SESI: ['ID_SESI', 'ID_TIM', 'NAMA_TIM', 'MODE', 'MULAI_MS', 'BATAS_MS', 'SELESAI_MS', 'SKOR', 'MAKS_SKOR', 'STATUS', 'SOAL_IDS_JSON', 'JAWABAN_JSON'],
    LOG_FINAL: ['ID_LOG', 'ID_PERTANDINGAN', 'SESI', 'ID_SOAL', 'ID_TIM', 'HASIL', 'PERUBAHAN_SKOR', 'WAKTU_MS'],
    FINAL: ['ID_PERTANDINGAN', 'DIBUAT_MS', 'STATE_JSON'],
    PENGATURAN: ['KEY', 'VALUE']
  }
});

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Arena Cerdas Cermat MIPAS 2026')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}

/** Menu appears for editors when the database Spreadsheet is opened. */
function onOpen() {
  SpreadsheetApp.getUi().createMenu('🏆 Arena MIPAS')
    .addItem('Lihat / Ubah PIN Guru', 'openPinSettingsFromSheet')
    .addItem('Periksa Status PIN', 'showAdminPinStatus')
    .addToUi();
}

/**
 * Help a Spreadsheet editor locate the PIN row. Does not change the PIN.
 * Protect the Spreadsheet: anyone with edit/view rights can see the PIN.
 */
function openPinSettingsFromSheet() {
  const ui = SpreadsheetApp.getUi();
  const sheet = sh_('PENGATURAN');
  const row = rows_('PENGATURAN').find(r => r.KEY === 'PIN_GURU');
  if (row) sheet.getRange(row._row, 2).setNumberFormat('@');
  sheet.activate();
  if (row) sheet.getRange(row._row, 2).activate();
  ui.alert('PIN Guru di Spreadsheet',
    'Pada tab PENGATURAN, cari baris PIN_GURU. Isi kolom VALUE dengan PIN pilihan Bapak (6–72 karakter). Bapak dapat melihat dan mengubahnya kapan pun. Simpan perubahan, lalu masuk kembali ke Web App.\n\nJANGAN bagikan akses Spreadsheet kepada murid.',
    ui.ButtonSet.OK);
  return true;
}

function showAdminPinStatus() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(adminConfigured_()
    ? 'PIN guru SUDAH AKTIF. PIN dapat dilihat atau diganti pada tab PENGATURAN, baris PIN_GURU, kolom VALUE.'
    : 'PIN guru BELUM AKTIF. Isi baris PIN_GURU pada tab PENGATURAN, kolom VALUE, minimal 6 karakter.');
  return adminConfigured_();
}

/** Run once from the Apps Script editor; safe to run again. */
function setupDatabase() {
  const ss = getDb_();
  Object.keys(CC.HEADERS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const headers = CC.HEADERS[name];
    if (!sh.getLastRow()) {
      sh.getRange(1, 1, 1, headers.length).setValues([headers]);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#dbeafe');
    } else {
      const actual = sh.getRange(1, 1, 1, headers.length).getValues()[0];
      if (actual.join('|') !== headers.join('|')) throw new Error('Header sheet ' + name + ' tidak sesuai. Data tidak diubah.');
    }
  });
  const props = PropertiesService.getScriptProperties();
  props.setProperty('CC_SPREADSHEET_ID', ss.getId());
  const settings = getSettings_();
  if (!settings.NAMA_SEKOLAH) saveSettingsRows_({
    NAMA_SEKOLAH: 'UPTD SPF SD Inpres Tangkala II',
    NAMA_PEMBINA: 'Budianto, S.Pd., Gr.',
    JUDUL: 'ARENA CERDAS CERMAT MIPAS 2026'
  });
  // Only create this row once; never overwrite a teacher's chosen PIN.
  const pinRow = rows_('PENGATURAN').find(r => r.KEY === 'PIN_GURU');
  if (pinRow) sh_('PENGATURAN').getRange(pinRow._row, 2).setNumberFormat('@');
  else {
    sh_('PENGATURAN').appendRow(['PIN_GURU', '']);
    sh_('PENGATURAN').getRange(sh_('PENGATURAN').getLastRow(), 2).setNumberFormat('@');
  }
  const inserted = seedQuestions_();
  const enriched = seedTkaQuestions_();
  return 'Database siap. ' + (inserted + enriched) + ' soal baru ditambahkan (' + enriched + ' soal model TKA/ANBK). Atur PIN pada PENGATURAN > PIN_GURU.';
}

/** Kept for old editor links; PIN must now be edited in the private Sheet. */
function setAdminPin() {
  throw new Error('PIN sekarang diatur langsung pada tab PENGATURAN, baris PIN_GURU, kolom VALUE. Jalankan setupDatabase() jika baris belum ada.');
}

function getDb_() {
  const id = PropertiesService.getScriptProperties().getProperty('CC_SPREADSHEET_ID');
  if (id) return SpreadsheetApp.openById(id);
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (!active) throw new Error('Buat Apps Script dari Spreadsheet (Extensions > Apps Script), lalu jalankan setupDatabase().');
  return active;
}

function sh_(name) {
  const sh = getDb_().getSheetByName(name);
  if (!sh) throw new Error('Sheet ' + name + ' belum ada. Jalankan setupDatabase().');
  return sh;
}

function rows_(name) {
  const sh = sh_(name);
  if (sh.getLastRow() < 2) return [];
  const headers = CC.HEADERS[name];
  return sh.getRange(2, 1, sh.getLastRow() - 1, headers.length).getValues().map((values, i) => {
    const o = { _row: i + 2 };
    headers.forEach((key, col) => { o[key] = values[col]; });
    return o;
  });
}

function toArray_(name, value) {
  return CC.HEADERS[name].map(key => {
    const item = value[key] === undefined || value[key] === null ? '' : value[key];
    return typeof item === 'string' && /^[=+@]/.test(item) ? "'" + item : item;
  });
}

function append_(name, object) { sh_(name).appendRow(toArray_(name, object)); }
function saveRow_(name, row, object) { sh_(name).getRange(row, 1, 1, CC.HEADERS[name].length).setValues([toArray_(name, object)]); }
function uid_() { return Utilities.getUuid(); }
function now_() { return Date.now(); }
function clean_(value, limit) { return String(value === undefined || value === null ? '' : value).trim().slice(0, limit || 3000); }
function fail_(message) { throw new Error(message); }

function digest_(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8)
    .map(b => ('0' + (b & 255).toString(16)).slice(-2)).join('');
}

function pinState_() {
  // A Sheet PIN takes priority even if an old one-time hash still exists.
  const row = rows_('PENGATURAN').find(r => r.KEY === 'PIN_GURU');
  if (row) {
    const pin = String(row.VALUE == null ? '' : row.VALUE).trim();
    const configured = pin.length >= 6 && pin.length <= 72;
    return { configured: configured, verifier: configured ? 'sheet:' + digest_('CC_SHEET_PIN:' + pin) : '', pin: pin };
  }
  // Upgrade compatibility until setupDatabase() adds the editable row.
  const props = PropertiesService.getScriptProperties();
  const hash = props.getProperty('CC_ADMIN_HASH');
  const salt = props.getProperty('CC_ADMIN_SALT');
  return { configured: !!(salt && hash), verifier: hash ? 'legacy:' + hash : '', hash: hash, salt: salt };
}

function adminConfigured_() { return pinState_().configured; }
function admin_(token) {
  const state = pinState_();
  if (!state.configured || !token || CacheService.getScriptCache().get('cc:admin:' + clean_(token, 100)) !== state.verifier) {
    fail_('Sesi guru kedaluwarsa. Silakan masuk kembali.');
  }
}

function loginAdmin(pin) {
  const state = pinState_();
  if (!state.configured) fail_('PIN guru belum diatur. Isi PENGATURAN > PIN_GURU pada Spreadsheet (minimal 6 karakter).');
  const candidate = String(pin == null ? '' : pin).trim();
  const matches = Object.prototype.hasOwnProperty.call(state, 'pin')
    ? digest_('CC_SHEET_PIN:' + candidate) === state.verifier.slice(6)
    : digest_(state.salt + ':' + candidate) === state.hash;
  if (!matches) fail_('PIN tidak sesuai.');
  const token = uid_();
  CacheService.getScriptCache().put('cc:admin:' + token, state.verifier, CC.ADMIN_TTL);
  return { token, expiresIn: CC.ADMIN_TTL };
}

function logoutAdmin(token) {
  if (token) CacheService.getScriptCache().remove('cc:admin:' + clean_(token, 100));
  return true;
}

function getSettings_() {
  const out = {};
  rows_('PENGATURAN').forEach(r => { out[r.KEY] = String(r.VALUE); });
  return out;
}

/** Only public identity fields, never PIN_GURU or future secret settings. */
function publicSettings_() {
  const s = getSettings_();
  return { NAMA_SEKOLAH: s.NAMA_SEKOLAH || '', NAMA_PEMBINA: s.NAMA_PEMBINA || '', JUDUL: s.JUDUL || '' };
}

function saveSettingsRows_(pairs) {
  const sh = sh_('PENGATURAN');
  const existing = rows_('PENGATURAN');
  Object.keys(pairs).forEach(key => {
    const value = clean_(pairs[key], 180);
    const old = existing.find(r => r.KEY === key);
    if (old) sh.getRange(old._row, 2).setValue(value);
    else sh.appendRow([key, value]);
  });
}

function getBootstrap() {
  const counts = { MATEMATIKA: 0, IPA: 0, IPS: 0 };
  rows_('SOAL').filter(q => q.STATUS === 'AKTIF').forEach(q => { if (counts[q.MAPEL] !== undefined) counts[q.MAPEL]++; });
  const cfg = publicSettings_();
  return {
    version: CC.VERSION,
    settings: cfg,
    serverNow: now_(),
    counts,
    totalQuestions: Object.values(counts).reduce((a, b) => a + b, 0),
    adminConfigured: adminConfigured_()
  };
}

function publicQuestion_(q) {
  // Sheets can infer dates/numbers from teacher edits; RPC responses must
  // contain only JSON-safe primitive values, never native Date objects.
  return {
    id: clean_(q.ID_SOAL, 100), mapel: clean_(q.MAPEL, 30), kelas: Number(q.KELAS), topik: clean_(q.TOPIK, 200),
    babak: clean_(q.BABAK, 30), level: clean_(q.LEVEL, 30), tipe: clean_(q.TIPE, 20), text: clean_(q.PERTANYAAN, 3000),
    options: [q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D].map(item => clean_(item, 1000))
  };
}

function validateQuestion_(input) {
  const q = {
    ID_SOAL: clean_(input.id, 100) || uid_(),
    MAPEL: clean_(input.mapel, 20).toUpperCase(),
    KELAS: Number(input.kelas), TOPIK: clean_(input.topik, 120),
    BABAK: clean_(input.babak, 30).toUpperCase(), LEVEL: clean_(input.level, 20).toUpperCase(),
    TIPE: clean_(input.tipe || 'PG', 12).toUpperCase(), PERTANYAAN: clean_(input.text, 2000),
    OPSI_A: clean_((input.options || [])[0], 500), OPSI_B: clean_((input.options || [])[1], 500),
    OPSI_C: clean_((input.options || [])[2], 500), OPSI_D: clean_((input.options || [])[3], 500),
    KUNCI: clean_(input.answer, 500).toUpperCase(), PEMBAHASAN: clean_(input.explanation, 2500),
    STATUS: input.active === false ? 'NONAKTIF' : 'AKTIF'
  };
  if (!['MATEMATIKA', 'IPA', 'IPS'].includes(q.MAPEL)) fail_('Mapel harus MATEMATIKA, IPA, atau IPS.');
  if (![4, 5, 6].includes(q.KELAS)) fail_('Kelas harus 4, 5, atau 6.');
  if (!['PENYISIHAN', 'SEMIFINAL', 'FINAL_WAJIB', 'FINAL_REBUTAN', 'UMUM'].includes(q.BABAK)) fail_('Babak tidak dikenal.');
  if (!['MUDAH', 'SEDANG', 'SULIT', 'HOTS'].includes(q.LEVEL)) fail_('Level tidak dikenal.');
  if (!['PG', 'PGK', 'BS', 'JODOH', 'LISAN'].includes(q.TIPE)) fail_('Tipe harus PG, PGK, BS, JODOH, atau LISAN.');
  if (!q.PERTANYAAN || !q.TOPIK || !q.KUNCI) fail_('Pertanyaan, topik, dan kunci wajib diisi.');
  if (q.TIPE !== 'LISAN') {
    if (![q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D].every(Boolean)) fail_('Empat opsi harus diisi.');
    if (new Set([q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D]).size < 4) fail_('Pilihan jawaban tidak boleh duplikat.');
  }
  if (q.TIPE === 'PG' && !/^[ABCD]$/.test(q.KUNCI)) fail_('Kunci PG harus A, B, C, atau D.');
  if (q.TIPE === 'PGK' && (!/^[ABCD]{2,4}$/.test(q.KUNCI) || new Set(q.KUNCI).size !== q.KUNCI.length || q.KUNCI.split('').sort().join('') !== q.KUNCI)) fail_('Kunci PGK minimal dua huruf berbeda, urut A sampai D (contoh AC).');
  if (q.TIPE === 'BS' && !/^[BS]{4}$/.test(q.KUNCI)) fail_('Kunci Benar/Salah harus empat huruf B/S (contoh BSSB).');
  if (q.TIPE === 'JODOH' && (q.KUNCI.length !== 4 || q.KUNCI.split('').sort().join('') !== 'ABCD')) fail_('Kunci Menjodohkan harus permutasi ABCD (contoh CADB).');
  if (['PGK', 'BS', 'JODOH'].includes(q.TIPE) && q.BABAK !== 'UMUM') fail_('Soal PGK, Benar/Salah, dan Menjodohkan harus menggunakan babak UMUM (latihan TKA/ANBK).');
  return q;
}

function listQuestions(token, filter) {
  admin_(token);
  filter = filter || {};
  const query = clean_(filter.search, 200).toLowerCase();
  const result = rows_('SOAL').filter(q =>
    (!filter.mapel || q.MAPEL === filter.mapel) &&
    (!filter.kelas || Number(q.KELAS) === Number(filter.kelas)) &&
    (!filter.babak || q.BABAK === filter.babak) &&
    (!query || (q.PERTANYAAN + ' ' + q.TOPIK).toLowerCase().includes(query))
  );
  const page = Math.max(0, Number(filter.page) || 0);
  const limit = 30;
  return { total: result.length, page, items: result.slice(page * limit, (page + 1) * limit).map(q => ({
    id: q.ID_SOAL, mapel: q.MAPEL, kelas: Number(q.KELAS), topik: q.TOPIK,
    babak: q.BABAK, level: q.LEVEL, tipe: q.TIPE, text: q.PERTANYAAN,
    options: [q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D], answer: q.KUNCI,
    explanation: q.PEMBAHASAN, active: q.STATUS === 'AKTIF'
  })) };
}

function exportQuestions(token) {
  admin_(token);
  return rows_('SOAL').map(q => ({
    id: q.ID_SOAL, mapel: q.MAPEL, kelas: Number(q.KELAS), topik: q.TOPIK,
    babak: q.BABAK, level: q.LEVEL, tipe: q.TIPE, text: q.PERTANYAAN,
    options: [q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D], answer: q.KUNCI,
    explanation: q.PEMBAHASAN, active: q.STATUS === 'AKTIF'
  }));
}

function saveQuestion(token, question) {
  admin_(token);
  const q = validateQuestion_(question || {});
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const existing = rows_('SOAL').find(r => r.ID_SOAL === q.ID_SOAL);
    if (existing) saveRow_('SOAL', existing._row, q);
    else append_('SOAL', q);
    return { id: q.ID_SOAL, updated: !!existing };
  } finally { lock.releaseLock(); }
}

function disableQuestion(token, id) {
  admin_(token);
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const q = rows_('SOAL').find(r => r.ID_SOAL === id);
    if (!q) fail_('Soal tidak ditemukan.');
    q.STATUS = 'NONAKTIF'; saveRow_('SOAL', q._row, q);
    return true;
  } finally { lock.releaseLock(); }
}

function importQuestions(token, inputs) {
  admin_(token);
  if (!Array.isArray(inputs) || !inputs.length || inputs.length > 250) fail_('Impor 1 sampai 250 soal setiap kali.');
  const validated = inputs.map(validateQuestion_);
  const ids = validated.map(q => q.ID_SOAL);
  if (new Set(ids).size !== ids.length) fail_('Ada ID ganda dalam berkas impor.');
  const lock = LockService.getScriptLock(); lock.waitLock(25000);
  try {
    const existing = new Set(rows_('SOAL').map(r => r.ID_SOAL));
    const news = validated.filter(q => !existing.has(q.ID_SOAL));
    if (news.length) {
      const sh = sh_('SOAL');
      sh.getRange(sh.getLastRow() + 1, 1, news.length, CC.HEADERS.SOAL.length)
        .setValues(news.map(q => toArray_('SOAL', q)));
    }
    return { imported: news.length, skipped: validated.length - news.length };
  } finally { lock.releaseLock(); }
}

function saveSettings(token, values) {
  admin_(token);
  const allowed = ['NAMA_SEKOLAH', 'NAMA_PEMBINA', 'JUDUL'];
  const clean = {};
  allowed.forEach(key => { if (Object.prototype.hasOwnProperty.call(values || {}, key)) clean[key] = values[key]; });
  saveSettingsRows_(clean);
  return publicSettings_();
}

function getAllActive_() { return rows_('SOAL').filter(q => q.STATUS === 'AKTIF'); }
function shuffle_(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function takeQuestions_(all, mapel, count, stage, excluded, filter) {
  filter = filter || {};
  const candidates = all.filter(q => !excluded.has(q.ID_SOAL) &&
    (!mapel || q.MAPEL === mapel) &&
    (!filter.kelas || Number(q.KELAS) === Number(filter.kelas)) &&
    (!filter.level || q.LEVEL === filter.level) &&
    (!filter.type || q.TIPE === filter.type) &&
    (!filter.types || filter.types.includes(q.TIPE)) &&
    (!filter.topik || q.TOPIK === filter.topik));
  const stageQuestions = shuffle_(candidates.filter(q => !stage || q.BABAK === stage));
  const fallback = shuffle_(candidates.filter(q => !stage || q.BABAK !== stage));
  const selected = stageQuestions.concat(fallback).slice(0, count);
  if (selected.length !== count) fail_('Bank soal belum cukup untuk ' + (mapel || 'pilihan') + ': butuh ' + count + ', tersedia ' + candidates.length + '.');
  selected.forEach(q => excluded.add(q.ID_SOAL));
  return selected;
}

function createSession(payload) {
  payload = payload || {};
  const mode = clean_(payload.mode, 30).toUpperCase();
  if (!['LATIHAN', 'PENYISIHAN', 'SEMIFINAL', 'CEPAT', 'AKM'].includes(mode)) fail_('Mode latihan tidak dikenal.');
  // The browser supplies a one-time UUID so that a session already written to
  // Sheets can be recovered even when an RPC success response is lost.
  const requestId = clean_(payload.requestId, 100);
  if (requestId && !/^CC-[a-zA-Z0-9-]{20,80}$/.test(requestId)) fail_('ID permintaan latihan tidak valid. Segarkan halaman lalu coba lagi.');
  if (requestId && rows_('SESI').some(r => r.ID_SESI === requestId)) return getSession(requestId);
  const teamName = clean_(payload.teamName, 90) || 'Tim Latihan';
  const members = (payload.members || []).map(n => clean_(n, 70)).slice(0, 3);
  const all = getAllActive_();
  const excluded = new Set(Array.isArray(payload.excludeIds) ? payload.excludeIds.slice(0, 500) : []);
  let selected = [], seconds = 0;
  if (mode === 'PENYISIHAN' || mode === 'SEMIFINAL') {
    const stage = mode;
    ['MATEMATIKA', 'IPA', 'IPS'].forEach(m => { selected.push(...takeQuestions_(all, m, 10, stage, excluded, { type: 'PG' })); });
    selected = shuffle_(selected);
    seconds = mode === 'PENYISIHAN' ? CC.PRELIMINARY_SECONDS : CC.SEMIFINAL_SECONDS;
  } else {
    const count = Math.min(CC.MAX_QUESTIONS, Math.max(1, Number(payload.count) || 10));
    const subject = ['MATEMATIKA', 'IPA', 'IPS'].includes(payload.mapel) ? payload.mapel : null;
    const kelas = [4, 5, 6].includes(Number(payload.kelas)) ? Number(payload.kelas) : null;
    const filter = { kelas, level: payload.level || null };
    if (mode === 'AKM') {
      const matched = all.filter(q => String(q.ID_SOAL).indexOf('TKA-') === 0 &&
        (!subject || q.MAPEL === subject) && (!kelas || Number(q.KELAS) === kelas) &&
        (!filter.level || q.LEVEL === filter.level) && !excluded.has(q.ID_SOAL));
      const richCount = Math.min(Math.ceil(count * 0.7), matched.length);
      if (richCount) selected.push(...takeQuestions_(matched, null, richCount, null, excluded));
      if (selected.length < count) selected.push(...takeQuestions_(all, subject, count - selected.length, null, excluded, Object.assign({}, filter, { type: 'PG' })));
      selected = shuffle_(selected);
    } else selected = shuffle_(takeQuestions_(all, subject, count, null, excluded, Object.assign({}, filter, { type: 'PG' })));
    seconds = mode === 'CEPAT' ? count * Math.min(30, Math.max(10, Number(payload.fastSeconds) || 15)) : (payload.timed ? count * 60 : 0);
  }
  const t = now_();
  const teamId = uid_();
  const id = requestId || uid_();
  let alreadyCreated = false;
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    alreadyCreated = rows_('SESI').some(r => r.ID_SESI === id);
    if (!alreadyCreated) {
      append_('TIM', { ID_TIM: teamId, NAMA_TIM: teamName, ANGGOTA_1: members[0] || '', ANGGOTA_2: members[1] || '', ANGGOTA_3: members[2] || '', JURU_BICARA: members[0] || '', DIBUAT_MS: t });
      append_('SESI', { ID_SESI: id, ID_TIM: teamId, NAMA_TIM: teamName, MODE: mode, MULAI_MS: t, BATAS_MS: seconds ? t + seconds * 1000 : 0, SELESAI_MS: '', SKOR: '', MAKS_SKOR: '', STATUS: 'BERJALAN', SOAL_IDS_JSON: JSON.stringify(selected.map(q => q.ID_SOAL)), JAWABAN_JSON: '{}' });
    }
  } finally { lock.releaseLock(); }
  if (alreadyCreated) return getSession(id);
  const response = { id, mode, teamName, startedAt: t, deadline: seconds ? t + seconds * 1000 : null, questions: selected.map(publicQuestion_), answers: {} };
  if (!response.id || response.questions.length !== selected.length) fail_('Data sesi latihan gagal dibuat dengan lengkap.');
  return response;
}

function sessionById_(id) {
  const found = rows_('SESI').find(r => r.ID_SESI === id);
  if (!found) fail_('Sesi tidak ditemukan.');
  return found;
}

function getSession(id) {
  const r = sessionById_(clean_(id, 100));
  const ids = JSON.parse(r.SOAL_IDS_JSON || '[]');
  const byId = new Map(rows_('SOAL').map(q => [q.ID_SOAL, q]));
  const qs = ids.map(i => byId.get(i)).filter(Boolean);
  const answers = JSON.parse(r.JAWABAN_JSON || '{}');
  const result = { id: r.ID_SESI, mode: r.MODE, teamName: r.NAMA_TIM, startedAt: Number(r.MULAI_MS), deadline: Number(r.BATAS_MS) || null, questions: qs.map(publicQuestion_), answers, finished: r.STATUS === 'SELESAI' };
  if (result.finished) result.review = review_(r, qs, answers);
  return result;
}

/** Validate answers for all written item types; incomplete grids may be saved. */
function studentAnswer_(q, value) {
  const s = clean_(value, 10).toUpperCase();
  const type = clean_(q.TIPE, 12).toUpperCase();
  if (type === 'PG') return /^[ABCD]$/.test(s) ? s : '';
  if (type === 'PGK') return /^[ABCD]{1,4}$/.test(s) && new Set(s).size === s.length ? s.split('').sort().join('') : '';
  if (type === 'BS') return /^[BS-]{4}$/.test(s) ? s : '';
  if (type === 'JODOH') return /^[ABCD-]{4}$/.test(s) && new Set(s.replace(/-/g, '')).size === s.replace(/-/g, '').length ? s : '';
  return '';
}

function saveAnswers(id, submitted) {
  if (!submitted || typeof submitted !== 'object' || Array.isArray(submitted)) fail_('Format jawaban tidak benar.');
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const r = sessionById_(clean_(id, 100));
    if (r.STATUS !== 'BERJALAN') return { saved: false, finished: true };
    const ids = new Set(JSON.parse(r.SOAL_IDS_JSON || '[]'));
    const questions = new Map(rows_('SOAL').filter(q => ids.has(q.ID_SOAL)).map(q => [q.ID_SOAL, q]));
    const sanitized = {};
    Object.keys(submitted).forEach(qid => {
      const q = questions.get(qid);
      if (q) {
        const a = studentAnswer_(q, submitted[qid]);
        if (a) sanitized[qid] = a;
      }
    });
    r.JAWABAN_JSON = JSON.stringify(sanitized);
    saveRow_('SESI', r._row, r);
    return { saved: true };
  } finally { lock.releaseLock(); }
}

function review_(r, qs, answers) {
  const points = r.MODE === 'PENYISIHAN' || r.MODE === 'SEMIFINAL' ? 4 : 1;
  const items = qs.map(q => {
    const chosen = studentAnswer_(q, answers[q.ID_SOAL]);
    const correct = !!chosen && chosen === clean_(q.KUNCI, 12).toUpperCase();
    return Object.assign(publicQuestion_(q), {
      chosen, correct, answer: q.KUNCI, explanation: q.PEMBAHASAN,
      points: correct ? points : 0
    });
  });
  const score = items.reduce((sum, q) => sum + q.points, 0);
  return { score, maximum: qs.length * points, correct: items.filter(q => q.correct).length, total: qs.length, items, finishedAt: Number(r.SELESAI_MS) || null };
}

function submitSession(id, submitted) {
  const lock = LockService.getScriptLock(); lock.waitLock(25000);
  try {
    const r = sessionById_(clean_(id, 100));
    const ids = JSON.parse(r.SOAL_IDS_JSON || '[]');
    const byId = new Map(rows_('SOAL').map(q => [q.ID_SOAL, q]));
    const qs = ids.map(i => {
      const q = byId.get(i);
      if (!q) fail_('Soal pada sesi tidak ditemukan: ' + i);
      return q;
    });
    if (r.STATUS === 'SELESAI') return review_(r, qs, JSON.parse(r.JAWABAN_JSON || '{}'));
    const known = new Set(ids);
    const byQuestion = new Map(qs.map(q => [q.ID_SOAL, q]));
    const answers = {};
    Object.keys(submitted || {}).forEach(qid => {
      const q = known.has(qid) ? byQuestion.get(qid) : null;
      if (q) {
        const a = studentAnswer_(q, submitted[qid]);
        if (a) answers[qid] = a;
      }
    });
    // A client could omit pending answers; merge previously saved answers.
    const serverTime = now_();
    // After a brief network grace period, only previously saved answers count.
    const expired = Number(r.BATAS_MS) > 0 && serverTime > Number(r.BATAS_MS) + 15000;
    const merged = expired ? JSON.parse(r.JAWABAN_JSON || '{}') : answers;
    const t = now_();
    r.STATUS = 'SELESAI'; r.SELESAI_MS = t;
    r.JAWABAN_JSON = JSON.stringify(merged);
    const review = review_(r, qs, merged);
    r.SKOR = review.score; r.MAKS_SKOR = review.maximum;
    saveRow_('SESI', r._row, r);
    return review;
  } finally { lock.releaseLock(); }
}

function getStatistics(token) {
  admin_(token);
  const completed = rows_('SESI').filter(r => r.STATUS === 'SELESAI').sort((a, b) => Number(b.SELESAI_MS) - Number(a.SELESAI_MS));
  const recent = completed.slice(0, 50).map(r => ({ id: r.ID_SESI, team: r.NAMA_TIM, mode: r.MODE, score: Number(r.SKOR), max: Number(r.MAKS_SKOR), finished: Number(r.SELESAI_MS), duration: (Number(r.SELESAI_MS) - Number(r.MULAI_MS)) / 1000 }));
  const questionById = new Map(rows_('SOAL').map(q => [q.ID_SOAL, q]));
  const subjectStats = { MATEMATIKA: { correct: 0, total: 0 }, IPA: { correct: 0, total: 0 }, IPS: { correct: 0, total: 0 } };
  const topicStats = {};
  completed.slice(0, 200).forEach(r => {
    const answers = JSON.parse(r.JAWABAN_JSON || '{}');
    JSON.parse(r.SOAL_IDS_JSON || '[]').forEach(id => {
      const q = questionById.get(id);
      if (q && subjectStats[q.MAPEL]) {
        subjectStats[q.MAPEL].total++;
        if (answers[id] === q.KUNCI) subjectStats[q.MAPEL].correct++;
        const topicKey = q.MAPEL + ' • ' + q.TOPIK;
        if (!topicStats[topicKey]) topicStats[topicKey] = { topic: topicKey, total: 0, correct: 0 };
        topicStats[topicKey].total++;
        if (answers[id] === q.KUNCI) topicStats[topicKey].correct++;
      }
    });
  });
  const weakTopics = Object.values(topicStats).filter(t => t.total >= 2)
    .sort((a, b) => a.correct / a.total - b.correct / b.total || b.total - a.total).slice(0, 8);
  return { sessions: completed.length, average: completed.length ? Math.round(completed.reduce((s, r) => s + 100 * Number(r.SKOR) / Math.max(1, Number(r.MAKS_SKOR)), 0) / completed.length) : 0, recent, subjectStats, weakTopics };
}

function leaderboard(token, mode) {
  admin_(token);
  if (!['PENYISIHAN', 'SEMIFINAL'].includes(mode)) fail_('Babak tidak benar.');
  const all = rows_('SESI').filter(r => r.MODE === mode && r.STATUS === 'SELESAI');
  const latestByTeam = new Map();
  all.forEach(r => {
    const previous = latestByTeam.get(r.NAMA_TIM);
    if (!previous || Number(r.SELESAI_MS) > Number(previous.SELESAI_MS)) latestByTeam.set(r.NAMA_TIM, r);
  });
  const ranked = Array.from(latestByTeam.values()).sort((a, b) => Number(b.SKOR) - Number(a.SKOR) || (Number(a.SELESAI_MS) - Number(a.MULAI_MS)) - (Number(b.SELESAI_MS) - Number(b.MULAI_MS)));
  return ranked.map((r, i) => ({ rank: i + 1, team: r.NAMA_TIM, score: Number(r.SKOR), seconds: Math.round((Number(r.SELESAI_MS) - Number(r.MULAI_MS)) / 1000), qualified: i < (mode === 'PENYISIHAN' ? 8 : 3) }));
}

function createFinalMatch(token, teamNames) {
  admin_(token);
  if (!Array.isArray(teamNames) || teamNames.length !== 3 || teamNames.some(n => !clean_(n, 70))) fail_('Isi nama tiga tim finalis.');
  // Multi-select, true/false and matching items belong to written AKM practice,
  // never to the 30-second oral final.
  const all = getAllActive_().filter(q => ['PG', 'LISAN'].includes(q.TIPE));
  const used = new Set();
  const mandatory = [];
  for (let round = 0; round < 2; round++) {
    for (let team = 0; team < 3; team++) {
      ['MATEMATIKA', 'IPA', 'IPS'].forEach(subject => {
        mandatory.push({ team, id: takeQuestions_(all, subject, 1, 'FINAL_WAJIB', used)[0].ID_SOAL });
      });
    }
  }
  const rebutan = [];
  ['MATEMATIKA', 'IPA', 'IPS'].forEach(subject => rebutan.push(...takeQuestions_(all, subject, 5, 'FINAL_REBUTAN', used).map(q => q.ID_SOAL)));
  const extra = shuffle_(all.filter(q => !used.has(q.ID_SOAL)).map(q => q.ID_SOAL));
  const match = {
    id: uid_(), teams: teamNames.map((name, i) => ({ id: 'T' + (i + 1), name: clean_(name, 70), score: 0 })),
    phase: 'WAJIB', wajib: mandatory, wajibIndex: 0, rebutan: shuffle_(rebutan), rebutanIndex: 0,
    extra, extraIndex: 0, blockedTeams: [], logs: []
  };
  append_('FINAL', { ID_PERTANDINGAN: match.id, DIBUAT_MS: now_(), STATE_JSON: JSON.stringify(match) });
  return matchView_(match, all);
}

function matchRow_(id) {
  const row = rows_('FINAL').find(r => r.ID_PERTANDINGAN === id);
  if (!row) fail_('Pertandingan tidak ditemukan.');
  return row;
}

function tiedTeams_(match) {
  const points = match.teams.map(t => t.score);
  return match.teams.map((_, index) => index).filter(i => points.filter(s => s === points[i]).length > 1);
}

function nextFinalQuestion_(match) {
  if (match.phase === 'WAJIB') return match.wajib[match.wajibIndex] || null;
  if (match.phase === 'REBUTAN') return match.rebutan[match.rebutanIndex] ? { id: match.rebutan[match.rebutanIndex] } : null;
  if (match.phase === 'TAMBAHAN') return match.extra[match.extraIndex] ? { id: match.extra[match.extraIndex] } : null;
  return null;
}

function matchView_(match, available) {
  const current = nextFinalQuestion_(match);
  const q = current && available.find(q => q.ID_SOAL === current.id);
  return {
    id: match.id, teams: match.teams, phase: match.phase,
    index: match.phase === 'WAJIB' ? match.wajibIndex : match.phase === 'REBUTAN' ? match.rebutanIndex : match.extraIndex,
    total: match.phase === 'WAJIB' ? match.wajib.length : match.phase === 'REBUTAN' ? match.rebutan.length : null,
    eligible: (match.phase === 'TAMBAHAN' ? tiedTeams_(match) : [0, 1, 2]).filter(i => !(match.blockedTeams || []).includes(i)),
    mandatoryTeam: match.phase === 'WAJIB' && current ? current.team : null,
    question: q ? Object.assign(publicQuestion_(q), { answer: q.KUNCI, answerText: ['A', 'B', 'C', 'D'].includes(q.KUNCI) ? q['OPSI_' + q.KUNCI] : q.KUNCI, explanation: q.PEMBAHASAN }) : null,
    logs: match.logs.slice(-12)
  };
}

function getFinalMatch(token, id) {
  admin_(token);
  const row = matchRow_(clean_(id, 100));
  return matchView_(JSON.parse(row.STATE_JSON), getAllActive_());
}

/** Action: BENAR, SALAH, KOSONG, or LEMPAR (rebutan only). */
function adjudicateFinal(token, matchId, teamIndex, action) {
  admin_(token);
  const lock = LockService.getScriptLock(); lock.waitLock(25000);
  try {
    const row = matchRow_(clean_(matchId, 100));
    const match = JSON.parse(row.STATE_JSON);
    const current = nextFinalQuestion_(match);
    if (!current || match.phase === 'SELESAI') fail_('Pertandingan sudah selesai.');
    const team = Number(teamIndex);
    if (![0, 1, 2].includes(team)) fail_('Tim tidak dikenal.');
    if (match.phase === 'WAJIB' && team !== current.team) fail_('Bukan giliran tim ini.');
    if (match.phase === 'TAMBAHAN' && !tiedTeams_(match).includes(team)) fail_('Tim ini tidak mengikuti babak tambahan.');
    if ((match.blockedTeams || []).includes(team)) fail_('Tim ini sudah melewatkan soal dan tidak dapat menekan buzzer lagi pada soal yang sama.');
    if (!['BENAR', 'SALAH', 'KOSONG', 'LEMPAR'].includes(action)) fail_('Penilaian tidak dikenal.');
    if (action === 'LEMPAR' && match.phase === 'WAJIB') fail_('Soal wajib tidak dilempar.');
    const change = action === 'BENAR' ? 10 : action === 'SALAH' && match.phase !== 'WAJIB' ? -5 : 0;
    match.teams[team].score += change;
    const log = { phase: match.phase, questionId: current.id, team, action, change, at: now_() };
    match.logs.push(log);
    append_('LOG_FINAL', { ID_LOG: uid_(), ID_PERTANDINGAN: match.id, SESI: match.phase, ID_SOAL: current.id, ID_TIM: match.teams[team].id, HASIL: action, PERUBAHAN_SKOR: change, WAKTU_MS: log.at });
    if (action === 'LEMPAR') {
      match.blockedTeams = (match.blockedTeams || []).concat(team);
      const eligible = (match.phase === 'TAMBAHAN' ? tiedTeams_(match) : [0, 1, 2]).filter(i => !match.blockedTeams.includes(i));
      if (!eligible.length) action = 'KOSONG';
    }
    if (action !== 'LEMPAR') {
      match.blockedTeams = [];
      if (match.phase === 'WAJIB') {
        match.wajibIndex++;
        if (match.wajibIndex >= match.wajib.length) match.phase = 'REBUTAN';
      } else if (match.phase === 'REBUTAN') {
        match.rebutanIndex++;
        if (match.rebutanIndex >= match.rebutan.length) match.phase = tiedTeams_(match).length ? 'TAMBAHAN' : 'SELESAI';
      } else {
        match.extraIndex++;
        if (!tiedTeams_(match).length) match.phase = 'SELESAI';
        else if (match.extraIndex >= match.extra.length) fail_('Soal tambahan habis. Tambah soal ke bank soal.');
      }
    }
    row.STATE_JSON = JSON.stringify(match);
    saveRow_('FINAL', row._row, row);
    return matchView_(match, getAllActive_());
  } finally { lock.releaseLock(); }
}

/** Curated 180-question starting bank: 60 each for Mathematics, Science and Social Studies. */
function makeSeedBank_() {
  const seeds = [];
  const counts = {};
  function add(subject, grade, topic, text, answer, wrong1, wrong2, wrong3, explanation) {
    const key = subject + ':' + grade;
    const index = counts[key] || 0;
    counts[key] = index + 1;
    const babak = index < 8 ? 'PENYISIHAN' : index < 14 ? 'SEMIFINAL' : index < 17 ? 'FINAL_WAJIB' : 'FINAL_REBUTAN';
    const level = index < 8 ? 'MUDAH' : index < 14 ? 'SEDANG' : index < 17 ? 'SULIT' : 'HOTS';
    const options = [String(answer), String(wrong1), String(wrong2), String(wrong3)];
    if (new Set(options).size !== 4) throw new Error('Opsi soal duplikat: ' + text);
    const offset = seeds.length % 4;
    const rotated = options.slice(offset).concat(options.slice(0, offset));
    const correct = 'ABCD'[rotated.indexOf(String(answer))];
    seeds.push({
      ID_SOAL: 'SEED-' + subject + grade + '-' + ('0' + (index + 1)).slice(-2),
      MAPEL: subject, KELAS: grade, TOPIK: topic, BABAK: babak, LEVEL: level, TIPE: 'PG',
      PERTANYAAN: text, OPSI_A: rotated[0], OPSI_B: rotated[1], OPSI_C: rotated[2], OPSI_D: rotated[3],
      KUNCI: correct, PEMBAHASAN: explanation, STATUS: 'AKTIF'
    });
  }
  const M = (grade, topic, q, a, b, c, d, exp) => add('MATEMATIKA', grade, topic, q, a, b, c, d, exp);

  // Matematika kelas IV (20 soal).
  M(4,'Bilangan','Nilai angka 7 pada bilangan 47.285 adalah ...','7.000','700','70','70.000','Angka 7 menempati nilai tempat ribuan.');
  M(4,'Penjumlahan','Hasil 2.475 + 1.386 adalah ...','3.861','3.761','3.851','4.861','Jumlahkan satuan sampai ribuan dengan teknik menyimpan.');
  M(4,'Pengurangan','Hasil 8.000 - 2.675 adalah ...','5.325','5.425','6.325','5.225','8.000 dikurangi 2.675 sama dengan 5.325.');
  M(4,'Perkalian','24 × 15 = ...','360','240','390','340','24 × (10 + 5) = 240 + 120 = 360.');
  M(4,'Pembagian','864 : 12 = ...','72','62','82','74','12 × 72 = 864.');
  M(4,'Pecahan','Pecahan yang senilai dengan 2/3 adalah ...','4/6','3/6','2/6','4/9','Pembilang dan penyebut 2/3 dikalikan dua menjadi 4/6.');
  M(4,'Pecahan','Di antara 3/8 dan 5/8, pecahan yang lebih besar adalah ...','5/8','3/8','1/8','2/8','Penyebut sama; pembilang lebih besar berarti nilai lebih besar.');
  M(4,'Pengukuran','3 km 250 m sama dengan ... meter.','3.250','325','3.025','32.500','3 km = 3.000 m, ditambah 250 m.');
  M(4,'Kelipatan','Bilangan kelipatan 6 yang terletak antara 20 dan 25 adalah ...','24','21','22','23','6 × 4 = 24.');
  M(4,'Faktor','Faktor dari bilangan 18 yang merupakan bilangan prima adalah ...','2 dan 3','2 dan 9','3 dan 6','1 dan 18','Faktor prima 18 adalah 2 dan 3.');
  M(4,'Keliling','Persegi dengan sisi 13 cm memiliki keliling ... cm.','52','26','39','169','Keliling persegi = 4 × 13 = 52 cm.');
  M(4,'Luas','Persegi panjang panjang 18 cm dan lebar 7 cm mempunyai luas ... cm².','126','50','25','112','Luas persegi panjang = 18 × 7 = 126 cm².');
  M(4,'Waktu','Film dimulai pukul 08.35 dan selesai pukul 10.10. Lama film ... menit.','95','85','105','75','Dari 08.35 ke 09.35 satu jam, lalu 35 menit.');
  M(4,'Data','Data banyak buku: 8, 12, 10, dan 14. Jumlah seluruh buku adalah ...','44','42','46','48','8 + 12 + 10 + 14 = 44.');
  M(4,'Operasi campuran','Nilai 120 - (8 × 9) + 15 adalah ...','63','48','57','135','Kerjakan perkalian dulu: 120 - 72 + 15 = 63.');
  M(4,'Soal cerita','Tiga kelas mengumpulkan masing-masing 125, 138, dan 147 botol. Jika 95 botol didaur ulang, sisanya ... botol.','315','410','305','325','Jumlah 410, lalu kurangi 95 menjadi 315.');
  M(4,'Luas','Sebuah taman berbentuk persegi berkeliling 64 m. Luas taman adalah ... m².','256','128','64','1.024','Sisi = 64 : 4 = 16 m; luas = 16 × 16 = 256 m².');
  M(4,'Pecahan','Dina memakan 2/8 kue dan Rafi 3/8 kue. Bagian kue yang tersisa adalah ...','3/8','5/8','2/8','1/8','Sisa = 8/8 - 2/8 - 3/8 = 3/8.');
  M(4,'Penalaran','Suatu bilangan dibagi 7 menghasilkan 36 sisa 4. Bilangan tersebut adalah ...','256','252','260','284','Bilangan = 7 × 36 + 4 = 256.');
  M(4,'Pola bilangan','Pola 3, 7, 15, 31, ... dilanjutkan dengan bilangan ...','63','47','61','65','Setiap suku = suku sebelumnya × 2 + 1.');

  // Matematika kelas V (20 soal).
  M(5,'Pecahan','1/4 + 2/4 = ...','3/4','3/8','1/2','2/4','Penyebut sama, sehingga pembilang dijumlahkan.');
  M(5,'Pecahan','5/6 - 1/3 = ...','1/2','2/3','4/3','1/3','1/3 = 2/6, jadi 5/6 - 2/6 = 3/6.');
  M(5,'Desimal','0,75 sama dengan pecahan sederhana ...','3/4','7/5','1/4','2/3','0,75 = 75/100 = 3/4.');
  M(5,'Persen','25% dari 240 adalah ...','60','50','80','90','25% adalah seperempat, jadi 240 : 4 = 60.');
  M(5,'FPB','FPB dari 24 dan 36 adalah ...','12','6','18','8','Faktor bersama terbesar 24 dan 36 adalah 12.');
  M(5,'KPK','KPK dari 8 dan 12 adalah ...','24','48','16','36','Kelipatan persekutuan terkecil 8 dan 12 ialah 24.');
  M(5,'Volume','Kubus bersisi 6 cm memiliki volume ... cm³.','216','36','72','126','Volume kubus = 6 × 6 × 6 = 216 cm³.');
  M(5,'Pengukuran','2,5 liter sama dengan ... mililiter.','2.500','250','25.000','2.050','1 liter = 1.000 mL.');
  M(5,'Pecahan','2/3 × 3/5 = ...','2/5','6/8','5/8','1/5','Pembilang dikalikan pembilang, penyebut dikalikan penyebut, lalu sederhanakan 6/15.');
  M(5,'Pecahan','3/4 : 1/2 = ...','1 1/2','3/8','2/3','1/4','3/4 × 2/1 = 6/4 = 1 1/2.');
  M(5,'Skala','Pada peta skala 1:100.000, jarak dua lokasi 4 cm. Jarak sebenarnya ... km.','4','40','400','0,4','4 × 100.000 cm = 400.000 cm = 4 km.');
  M(5,'Perbandingan','Rasio kelereng merah dan biru 3:5. Jika total 40, jumlah merah adalah ...','15','24','25','18','Merah = 3/(3+5) × 40 = 15.');
  M(5,'Volume','Balok berukuran 10 cm × 8 cm × 5 cm memiliki volume ... cm³.','400','230','800','300','Volume = panjang × lebar × tinggi = 10 × 8 × 5.');
  M(5,'Rata-rata','Rata-rata nilai 70, 80, 90, 80, dan 80 adalah ...','80','78','82','84','Jumlah 400 dibagi 5 = 80.');
  M(5,'Soal cerita','Sebuah barang seharga Rp80.000 mendapat diskon 15%. Harga setelah diskon adalah ...','Rp68.000','Rp72.000','Rp65.000','Rp12.000','Diskon Rp12.000; harga akhir Rp68.000.');
  M(5,'Kecepatan','Sepeda menempuh 36 km dalam 3 jam. Kecepatan rata-ratanya ... km/jam.','12','9','18','108','36 km dibagi 3 jam sama dengan 12 km/jam.');
  M(5,'Pecahan campuran','1 2/3 + 2 1/6 = ...','3 5/6','3 3/6','4 1/6','3 1/2','2/3 = 4/6, sehingga 1 4/6 + 2 1/6 = 3 5/6.');
  M(5,'Penalaran','Dua bel berbunyi tiap 12 dan 18 menit. Jika bersama pada 08.00, bersama lagi pukul ...','08.36','08.24','08.30','08.48','KPK dari 12 dan 18 ialah 36 menit.');
  M(5,'Data','Rata-rata empat bilangan adalah 25. Tiga bilangan pertama 18, 27, 24. Bilangan keempat ...','31','25','29','33','Jumlah seluruhnya 4 × 25 = 100; tiga bilangan berjumlah 69.');
  M(5,'Penalaran','Sebuah bak terisi 3/5. Setelah ditambah 24 liter, penuh. Kapasitas bak ... liter.','60','40','48','72','24 liter merupakan 2/5 kapasitas, jadi kapasitas 24 × 5/2 = 60 liter.');

  // Matematika kelas VI (20 soal).
  M(6,'Bilangan bulat','Hasil -12 + 25 - 8 adalah ...','5','-5','13','21','-12 + 25 = 13, lalu 13 - 8 = 5.');
  M(6,'Pecahan','0,375 sebagai pecahan paling sederhana adalah ...','3/8','3/5','5/8','7/20','375/1000 disederhanakan dengan membagi 125 menjadi 3/8.');
  M(6,'Persen','40% dari suatu bilangan adalah 96. Bilangan itu ...','240','200','260','384','Bilangan = 96 : 0,4 = 240.');
  M(6,'Perbandingan','Rasio umur Ani dan Budi 4:7. Jika umur Ani 12 tahun, umur Budi ...','21 tahun','18 tahun','24 tahun','28 tahun','Satu bagian = 12 : 4 = 3 tahun; Budi = 7 × 3.');
  M(6,'Lingkaran','Keliling lingkaran berdiameter 14 cm, dengan π = 22/7, adalah ...','44 cm','22 cm','154 cm','88 cm','Keliling = π × diameter = 22/7 × 14 = 44 cm.');
  M(6,'Lingkaran','Luas lingkaran berjari-jari 7 cm, π = 22/7, adalah ...','154 cm²','44 cm²','49 cm²','308 cm²','Luas = πr² = 22/7 × 7 × 7 = 154 cm².');
  M(6,'Data','Median dari 4, 9, 7, 12, 6 adalah ...','7','6','9','8','Urutkan data 4, 6, 7, 9, 12; nilai tengah 7.');
  M(6,'Volume','Volume balok 720 cm³, panjang 12 cm dan lebar 10 cm. Tingginya ... cm.','6','8','5','60','Tinggi = 720 : (12 × 10) = 6 cm.');
  M(6,'Persen','Harga Rp150.000 naik 20%. Harga baru menjadi ...','Rp180.000','Rp170.000','Rp175.000','Rp200.000','Kenaikan Rp30.000, sehingga harga baru Rp180.000.');
  M(6,'Kecepatan','Mobil melaju 72 km/jam selama 2 jam 30 menit. Jaraknya ... km.','180','144','150','216','2,5 jam × 72 km/jam = 180 km.');
  M(6,'Perbandingan','Perbandingan siswa laki-laki dan perempuan 5:4. Jika total 36, perempuan ada ...','16','20','15','18','Perempuan = 4/9 × 36 = 16.');
  M(6,'Peluang','Dadu enam sisi dilempar. Peluang memperoleh bilangan genap adalah ...','1/2','1/3','2/3','1/6','Ada tiga hasil genap dari enam kemungkinan.');
  M(6,'Operasi pecahan','3/5 dari 250 ditambah 25% dari 120 sama dengan ...','180','170','190','210','3/5 × 250 = 150, dan 25% × 120 = 30.');
  M(6,'Skala','Peta berskala 1:250.000 menunjukkan jarak 6 cm. Jarak sebenarnya ... km.','15','1,5','150','25','6 × 250.000 cm = 1.500.000 cm = 15 km.');
  M(6,'Data','Rata-rata enam nilai adalah 75. Jika satu nilai 90 dikeluarkan, rata-rata sisanya ...','72','70','74','78','Jumlah 450; setelah dikurangi 90 menjadi 360, bagi 5 = 72.');
  M(6,'Geometri','Luas gabungan dua persegi tanpa tumpang tindih dengan sisi 8 cm dan 5 cm adalah ... cm².','89','64','104','169','Luas = 8² + 5² = 64 + 25 = 89 cm².');
  M(6,'Penalaran','Tangki berisi 120 liter. Setiap menit keluar 8 liter dan masuk 3 liter. Setelah 15 menit sisa ... liter.','45','75','60','30','Berkurang bersih 5 liter tiap menit; 120 - 15 × 5 = 45.');
  M(6,'Penalaran','Nilai suatu bilangan dinaikkan 25% menjadi 200. Nilai mula-mula ...','160','150','175','180','200 adalah 125% nilai semula, jadi 200 : 1,25 = 160.');
  M(6,'Volume','Akuarium 50 cm × 30 cm × 40 cm terisi 3/4. Volume airnya ... liter.','45','60','40','30','Volume penuh 60.000 cm³ = 60 liter; 3/4 × 60 = 45 liter.');
  M(6,'Penalaran','Rata-rata empat bilangan 18. Jika ditambah satu bilangan, rata-rata menjadi 20. Bilangan tambahan ...','28','24','26','30','Jumlah awal 72; jumlah baru 100; selisih 28.');

  const I = (grade, topic, q, a, b, c, d, exp) => add('IPA', grade, topic, q, a, b, c, d, exp);
  // IPA kelas IV (20 soal).
  I(4,'Bagian tumbuhan','Bagian tumbuhan yang menyerap air dan mineral dari tanah adalah ...','Akar','Daun','Bunga','Buah','Akar menyerap air dan zat mineral melalui rambut akar.');
  I(4,'Fotosintesis','Energi utama yang digunakan tumbuhan saat fotosintesis berasal dari ...','Cahaya matahari','Angin','Bunyi','Listrik','Fotosintesis memanfaatkan energi cahaya untuk membuat makanan.');
  I(4,'Wujud benda','Peristiwa es berubah menjadi air dinamakan ...','Mencair','Membeku','Menguap','Mengembun','Mencair adalah perubahan dari padat ke cair.');
  I(4,'Wujud benda','Uap air berubah menjadi titik-titik air pada tutup panci disebut ...','Mengembun','Menyublim','Mencair','Membeku','Mengembun merupakan perubahan gas menjadi cair.');
  I(4,'Gaya','Gaya yang menyebabkan benda jatuh ke tanah adalah ...','Gravitasi','Magnet','Gesekan','Pegas','Gravitasi Bumi menarik benda ke arah pusat Bumi.');
  I(4,'Magnet','Benda berikut yang tertarik kuat oleh magnet adalah ...','Paku besi','Penggaris kayu','Kertas','Karet','Besi termasuk bahan feromagnetik.');
  I(4,'Energi','Kipas angin mengubah energi listrik terutama menjadi energi ...','Gerak','Kimia','Cahaya','Nuklir','Motor listrik menggerakkan baling-baling kipas.');
  I(4,'Bunyi','Bunyi dihasilkan oleh benda yang ...','Bergetar','Membeku','Menguap','Menyerap air','Getaran sumber bunyi merambat melalui medium.');
  I(4,'Rantai makanan','Pada rantai padi → tikus → ular, tikus adalah ...','Konsumen tingkat I','Produsen','Pengurai','Konsumen tingkat III','Tikus memakan padi sebagai produsen, jadi konsumen pertama.');
  I(4,'Adaptasi','Bebek memiliki kaki berselaput terutama untuk ...','Membantu berenang','Mencengkeram mangsa','Menggali tanah','Terbang lebih tinggi','Selaput memperluas bidang dorong ketika berenang.');
  I(4,'Daur hidup','Kupu-kupu mengalami metamorfosis sempurna dengan urutan ...','Telur–larva–pupa–dewasa','Telur–nimfa–dewasa','Larva–telur–pupa–dewasa','Telur–pupa–larva–dewasa','Metamorfosis sempurna melewati fase telur, larva, pupa, lalu imago.');
  I(4,'Perubahan energi','Pada senter, energi kimia baterai berubah menjadi energi listrik dan ...','Cahaya','Panas bumi','Gerak translasi','Bunyi saja','Baterai menyuplai listrik yang digunakan lampu menghasilkan cahaya.');
  I(4,'Sifat cahaya','Bayangan terbentuk ketika cahaya terhalang benda. Hal ini menunjukkan cahaya ...','Merambat lurus','Selalu melengkung','Tidak dapat dipantulkan','Memerlukan air','Cahaya merambat lurus dalam medium seragam.');
  I(4,'Gaya gesek','Mengapa permukaan ban kendaraan dibuat beralur?','Meningkatkan cengkeraman pada jalan','Menghilangkan gravitasi','Membuat ban menjadi magnet','Mengurangi massa kendaraan','Alur membantu pembuangan air dan menjaga gesekan pada jalan.');
  I(4,'Perpindahan panas','Sendok logam ikut panas saat diletakkan dalam teh panas karena ...','Konduksi','Radiasi tanpa medium','Fotosintesis','Evaporasi','Panas merambat melalui logam secara konduksi.');
  I(4,'Ekosistem','Jika jumlah ular berkurang drastis pada rantai padi → tikus → ular, dampak yang mungkin terjadi adalah ...','Populasi tikus meningkat','Populasi tikus langsung punah','Padi berubah menjadi ular','Semua organisme tidak terpengaruh','Berkurangnya predator dapat menyebabkan jumlah mangsanya meningkat.');
  I(4,'Pelestarian','Menanam kembali pohon di hutan gundul disebut ...','Reboisasi','Abrasi','Erosi','Urbanisasi','Reboisasi ialah penanaman kembali kawasan hutan yang gundul.');
  I(4,'Penalaran','Dua tanaman sama mendapat air cukup, tetapi satu disimpan lama di ruang gelap. Tanaman gelap cenderung lemah karena ...','Kekurangan cahaya untuk fotosintesis','Kelebihan oksigen dari tanah','Tidak membutuhkan klorofil','Akar berhenti menyerap mineral sepenuhnya','Tanaman memerlukan cahaya untuk produksi makanan.');
  I(4,'Gaya','Mengapa sepeda lebih sulit dihentikan di jalan licin?','Gesekan antara ban dan jalan berkurang','Gravitasi Bumi menghilang','Massa sepeda menjadi nol','Roda berhenti berputar sendiri','Gesekan lebih kecil mengurangi kemampuan pengereman.');
  I(4,'Rantai makanan','Jika produsen di suatu ekosistem rusak akibat pencemaran, kelompok yang terdampak berikutnya adalah ...','Konsumen yang bergantung pada produsen','Hanya batuan di sekitarnya','Hanya cahaya matahari','Tidak ada makhluk hidup','Produsen menjadi dasar aliran energi dalam banyak rantai makanan.');

  // IPA kelas V (20 soal).
  I(5,'Sistem pernapasan','Tempat pertukaran oksigen dan karbon dioksida pada paru-paru adalah ...','Alveolus','Trakea','Kerongkongan','Diafragma','Alveolus berdinding tipis dan dikelilingi kapiler darah.');
  I(5,'Sistem pencernaan','Organ utama penyerapan sebagian besar zat gizi hasil pencernaan adalah ...','Usus halus','Mulut','Kerongkongan','Usus besar','Vili pada usus halus memperluas permukaan penyerapan nutrisi.');
  I(5,'Sistem peredaran','Organ yang memompa darah ke seluruh tubuh adalah ...','Jantung','Lambung','Paru-paru','Ginjal','Jantung bekerja sebagai pompa dalam sistem peredaran darah.');
  I(5,'Rantai makanan','Organisme pengurai berperan untuk ...','Menguraikan sisa makhluk hidup','Membuat cahaya matahari','Menghasilkan batuan','Membekukan air','Pengurai mengembalikan unsur hara ke lingkungan.');
  I(5,'Ekosistem','Hubungan antara lebah dan bunga saat lebah mengambil nektar adalah ...','Mutualisme','Parasitisme','Kompetisi','Predasi','Lebah mendapat makanan, bunga terbantu penyerbukannya.');
  I(5,'Fotosintesis','Gas yang diserap tumbuhan saat fotosintesis adalah ...','Karbon dioksida','Oksigen','Nitrogen murni','Hidrogen','Tumbuhan menggunakan karbon dioksida bersama air untuk membentuk gula.');
  I(5,'Cahaya','Cermin datar membentuk bayangan yang bersifat ...','Maya, tegak, sama besar','Nyata, terbalik, membesar','Nyata, tegak, mengecil','Maya, terbalik, mengecil','Bayangan cermin datar tampak di belakang cermin dan sama besar.');
  I(5,'Bunyi','Bunyi tidak dapat merambat melalui ...','Ruang hampa','Udara','Air','Baja','Bunyi memerlukan medium partikel untuk merambat.');
  I(5,'Ekosistem','Pada jaring-jaring makanan, satu spesies dapat berada dalam beberapa rantai karena ...','Memiliki lebih dari satu hubungan makan-dimakan','Hanya memakan satu jenis makanan','Tidak membutuhkan energi','Tidak terpengaruh lingkungan','Jaring makanan merupakan gabungan beberapa rantai yang saling terhubung.');
  I(5,'Energi','Panel surya terutama mengubah energi cahaya menjadi energi ...','Listrik','Kimia pada bensin','Gerak mekanis langsung','Bunyi','Sel fotovoltaik menghasilkan listrik saat menerima cahaya.');
  I(5,'Daur air','Perubahan air permukaan menjadi uap air oleh panas matahari disebut ...','Evaporasi','Kondensasi','Presipitasi','Infiltrasi','Evaporasi merupakan penguapan air.');
  I(5,'Daur air','Air hujan meresap ke dalam tanah melalui proses ...','Infiltrasi','Kondensasi','Transpirasi','Sublimasi','Infiltrasi adalah masuknya air ke pori tanah.');
  I(5,'Sistem tubuh','Saat berolahraga, napas dan denyut jantung meningkat karena ...','Kebutuhan oksigen dan energi otot meningkat','Tubuh tidak lagi membutuhkan oksigen','Darah berhenti mengalir','Paru-paru berubah fungsi menjadi lambung','Aktivitas otot memerlukan pasokan oksigen lebih besar.');
  I(5,'Perpindahan panas','Permukaan aspal yang gelap biasanya terasa lebih panas daripada yang terang karena ...','Lebih banyak menyerap radiasi cahaya','Memantulkan semua cahaya','Tidak menerima panas matahari','Selalu memiliki massa lebih kecil','Warna gelap umumnya menyerap lebih banyak energi radiasi.');
  I(5,'Adaptasi','Kaktus memiliki daun berbentuk duri untuk membantu ...','Mengurangi penguapan air','Memperluas penguapan','Menarik ikan','Mempercepat pembekuan','Luas permukaan daun yang kecil membantu mengurangi kehilangan air.');
  I(5,'Ekosistem','Penangkapan ikan berlebihan dapat mengganggu ekosistem karena ...','Mengubah keseimbangan populasi dalam jaring makanan','Menambah semua ikan tanpa batas','Menghentikan pasang surut','Meningkatkan semua produsen secara pasti','Populasi yang berkurang memengaruhi predator dan mangsanya.');
  I(5,'Cahaya','Pensil dalam gelas berisi air tampak bengkok karena ...','Pembiasan cahaya','Pembekuan air','Perubahan massa pensil','Pemantulan bunyi','Cahaya berubah arah saat melewati dua medium berbeda.');
  I(5,'Sistem pencernaan','Mengapa makanan sebaiknya dikunyah sampai halus?','Memperluas permukaan untuk kerja enzim','Mengubah semua makanan menjadi darah di mulut','Menghilangkan kebutuhan lambung','Mencegah semua bakteri selamanya','Potongan lebih kecil memudahkan proses pencernaan berikutnya.');
  I(5,'Daur air','Jika banyak lahan hutan menjadi beton, dampak yang mungkin muncul ketika hujan deras adalah ...','Limpasan air dan risiko banjir meningkat','Infiltrasi selalu meningkat','Hujan pasti berhenti','Sungai berubah menjadi tanah','Permukaan kedap air mengurangi peresapan ke dalam tanah.');
  I(5,'Penalaran','Dalam percobaan, dua bibit diberi air dan cahaya sama, tetapi satu tidak diberi unsur hara cukup. Variabel yang diuji adalah ...','Ketersediaan unsur hara','Warna pot saja','Jumlah cahaya','Jumlah air','Hanya unsur hara yang sengaja dibedakan antara dua kelompok.');

  // IPA kelas VI (20 soal).
  I(6,'Perkembangbiakan','Perkembangbiakan tumbuhan dengan tunas terjadi pada ...','Pisang','Padi','Jagung','Mangga dari biji','Pisang menghasilkan tunas dari bagian pangkal tanaman.');
  I(6,'Perkembangbiakan','Penyerbukan adalah peristiwa ...','Jatuhnya serbuk sari ke kepala putik','Peleburan sel telur dan sperma','Pecahnya kulit biji','Tumbuhnya akar sekunder','Penyerbukan terjadi sebelum pembuahan pada tumbuhan berbunga.');
  I(6,'Listrik','Pada rangkaian seri, jika satu lampu putus maka lampu lain umumnya ...','Ikut padam','Menjadi dua kali lebih terang','Tetap menyala selalu','Berubah menjadi baterai','Rangkaian seri memiliki satu lintasan arus.');
  I(6,'Listrik','Bahan yang merupakan penghantar listrik baik adalah ...','Tembaga','Karet','Plastik','Kayu kering','Tembaga digunakan untuk kabel karena konduktivitas tinggi.');
  I(6,'Magnet','Jika dua kutub utara magnet didekatkan, keduanya ...','Tolak-menolak','Tarik-menarik','Melebur','Kehilangan massa','Kutub magnet sejenis saling menolak.');
  I(6,'Tata surya','Planet terdekat dari Matahari adalah ...','Merkurius','Venus','Bumi','Mars','Urutan planet dimulai Merkurius, Venus, Bumi, Mars.');
  I(6,'Tata surya','Gerak Bumi mengelilingi Matahari disebut ...','Revolusi','Rotasi','Evaporasi','Gerak semu harian','Revolusi Bumi berlangsung sekitar satu tahun.');
  I(6,'Rotasi Bumi','Pergantian siang dan malam terutama disebabkan oleh ...','Rotasi Bumi','Revolusi Bulan saja','Gerhana Matahari','Perubahan musim','Bumi berputar pada porosnya sehingga wilayah bergantian menghadap Matahari.');
  I(6,'Gerhana','Gerhana Bulan terjadi saat ...','Bumi berada di antara Matahari dan Bulan','Bulan berada di antara Matahari dan Bumi','Matahari berada di antara Bumi dan Bulan','Bumi berhenti berotasi','Bayangan Bumi jatuh ke Bulan saat susunannya sesuai.');
  I(6,'Energi','Contoh sumber energi terbarukan adalah ...','Angin','Batu bara','Minyak bumi','Gas alam fosil','Angin terus tersedia melalui proses alam.');
  I(6,'Adaptasi','Kemampuan unta bertahan di gurun didukung salah satunya oleh ...','Adaptasi menghemat kehilangan air','Kemampuan fotosintesis','Insang untuk bernapas','Tubuh yang selalu bersuhu 0°C','Unta memiliki sejumlah adaptasi fisiologis untuk menghemat air.');
  I(6,'Sistem tata surya','Planet yang terkenal dengan cincin paling mencolok adalah ...','Saturnus','Merkurius','Venus','Mars','Saturnus memiliki sistem cincin besar yang tampak jelas.');
  I(6,'Listrik','Pada rangkaian paralel, jika satu cabang lampu putus, lampu pada cabang lain dapat ...','Tetap menyala','Pasti ikut putus','Berubah menjadi sakelar','Menjadi magnet permanen','Setiap cabang memiliki lintasan arus tersendiri.');
  I(6,'Perkembangbiakan','Mencangkok biasanya dilakukan pada tumbuhan yang memiliki batang ...','Berkambium','Lunak tanpa jaringan pengangkut','Berupa rumput saja','Tidak memiliki kulit','Lapisan kambium membantu pembentukan akar pada cangkok.');
  I(6,'Tata surya','Mengapa Bulan terlihat bercahaya dari Bumi?','Memantulkan cahaya Matahari','Menghasilkan cahaya sendiri seperti bintang','Terbuat dari api','Memiliki lampu alami','Bulan memantulkan sinar Matahari ke arah pengamat di Bumi.');
  I(6,'Lingkungan','Gas rumah kaca berlebih dapat menyebabkan ...','Peningkatan suhu rata-rata Bumi','Penghentian semua hujan','Hilangnya gravitasi','Berhentinya rotasi Bumi','Peningkatan efek rumah kaca mengurangi pelepasan panas ke angkasa.');
  I(6,'Penalaran','Dua lampu identik dirangkai seri lalu paralel dengan baterai ideal yang sama. Pada rangkaian paralel, tiap lampu cenderung ...','Lebih terang dibanding saat seri','Selalu padam','Tidak dialiri arus','Menjadi penghantar panas saja','Pada paralel tiap lampu menerima tegangan sumber penuh.');
  I(6,'Penalaran','Saat Bulan berada di antara Matahari dan Bumi pada fase yang sesuai, fenomena yang mungkin terjadi adalah ...','Gerhana Matahari','Gerhana Bulan','Pergantian musim','Hujan meteor pasti','Bulan dapat menghalangi cahaya Matahari menuju sebagian Bumi.');
  I(6,'Lingkungan','Mengapa energi surya disebut terbarukan namun listrik panel surya tidak selalu stabil?','Intensitas sinar Matahari berubah menurut cuaca dan waktu','Matahari hanya menyala satu kali','Panel hanya bekerja pada malam hari','Cahaya tidak bisa menjadi listrik','Daya panel dipengaruhi jumlah cahaya yang diterima.');
  I(6,'Eksperimen','Sebuah lampu tidak menyala. Langkah ilmiah pertama yang tepat adalah ...','Memeriksa sambungan dan sumber listrik secara aman','Langsung menyimpulkan lampunya rusak','Mencelupkan kabel ke air','Membongkar instalasi rumah tanpa pendamping','Pemeriksaan sistematis dengan keselamatan menghasilkan informasi penyebab.');

  const S = (grade, topic, q, a, b, c, d, exp) => add('IPS', grade, topic, q, a, b, c, d, exp);
  // IPS kelas IV (20 soal).
  S(4,'Peta','Komponen peta yang menjelaskan arti simbol adalah ...','Legenda','Skala','Inset','Judul','Legenda memuat keterangan simbol dan warna dalam peta.');
  S(4,'Peta','Arah utara pada peta biasanya ditunjukkan dengan ...','Tanda arah atau mata angin','Judul peta','Tahun pembuatan','Garis tepi','Penunjuk arah membantu pembaca mengetahui orientasi peta.');
  S(4,'Peta','Warna biru pada peta umumnya menunjukkan ...','Perairan','Pegunungan tinggi','Dataran rendah','Permukiman padat','Biru biasanya digunakan untuk sungai, danau, dan laut.');
  S(4,'Kenampakan alam','Contoh kenampakan alam adalah ...','Gunung','Jembatan','Pelabuhan','Bendungan','Gunung terbentuk melalui proses alam.');
  S(4,'Kenampakan buatan','Contoh kenampakan buatan manusia adalah ...','Waduk','Sungai alami','Bukit','Lembah','Waduk dibangun manusia untuk mengatur atau menyimpan air.');
  S(4,'Ekonomi','Kegiatan menghasilkan barang atau jasa disebut ...','Produksi','Konsumsi','Distribusi','Migrasi','Produksi menciptakan barang dan jasa.');
  S(4,'Ekonomi','Kegiatan menyalurkan barang dari produsen ke konsumen adalah ...','Distribusi','Eksplorasi','Konsumsi','Evaporasi','Distribusi memindahkan barang menuju pembeli.');
  S(4,'Budaya','Contoh sikap menghargai keragaman budaya adalah ...','Menghormati bahasa dan tradisi daerah lain','Mengejek pakaian adat lain','Memaksakan satu tarian daerah','Melarang teman memakai bahasa daerah','Menghormati perbedaan membantu menjaga persatuan.');
  S(4,'Skala','Skala peta 1:50.000 berarti 1 cm di peta mewakili ... di lapangan.','500 meter','50 meter','5 kilometer','50 kilometer','50.000 cm sama dengan 500 meter.');
  S(4,'Sumber daya alam','Contoh sumber daya alam yang dapat diperbarui adalah ...','Air melalui siklus hidrologi','Batu bara','Minyak bumi','Gas alam fosil','Air diperbarui melalui proses siklus air, walau ketersediaan air bersih tetap perlu dijaga.');
  S(4,'Profesi','Penduduk pesisir banyak bekerja sebagai nelayan karena ...','Dekat sumber daya perikanan laut','Selalu berada di pegunungan','Tidak memiliki akses air','Semua lahannya sawah','Lingkungan alam memengaruhi jenis mata pencaharian.');
  S(4,'Keragaman','Rumah adat Tongkonan berasal dari ...','Toraja, Sulawesi Selatan','Bali','Sumatera Barat','Papua Barat','Tongkonan merupakan rumah adat masyarakat Toraja.');
  S(4,'Peta','Pada peta, garis lintang berfungsi menunjukkan ...','Posisi utara atau selatan dari khatulistiwa','Arah aliran listrik','Harga barang','Jenis tanaman saja','Garis lintang mengukur posisi terhadap ekuator.');
  S(4,'Peta','Pada peta, garis bujur berfungsi menunjukkan ...','Posisi timur atau barat dari meridian utama','Tinggi gedung saja','Jenis tanah','Jumlah penduduk selalu','Garis bujur diukur dari meridian Greenwich.');
  S(4,'Interaksi','Siswa dari berbagai suku bekerja sama membersihkan kelas. Sikap tersebut mencerminkan ...','Gotong royong dan toleransi','Persaingan tidak sehat','Diskriminasi','Sikap individualis','Kerja sama menghormati perbedaan memperkuat kebersamaan.');
  S(4,'Ekonomi','Petani menanam padi dan pedagang menjual beras. Urutan kegiatan utamanya adalah ...','Produksi lalu distribusi','Konsumsi lalu eksplorasi','Distribusi lalu penambangan','Produksi lalu erosi','Petani memproduksi, pedagang menyalurkan barang.');
  S(4,'Peta','Sebuah peta memiliki inset. Fungsi inset adalah ...','Memperjelas lokasi atau bagian peta tertentu','Mengganti seluruh legenda','Menghilangkan skala','Menunjukkan harga peta','Inset memberi konteks wilayah yang lebih luas atau detail lokasi.');
  S(4,'Sumber daya alam','Penggunaan air tanah berlebihan dapat menyebabkan ...','Penurunan cadangan air tanah','Bertambahnya air tanah tanpa batas','Hilangnya kebutuhan air','Semua sungai membeku','Pengambilan melebihi pengisian kembali menurunkan cadangan air tanah.');
  S(4,'Penalaran geografi','Mengapa permukiman banyak berkembang di dataran rendah dekat sungai?','Akses air dan transportasi relatif mudah','Semua sungai tidak pernah banjir','Tidak membutuhkan lahan','Suhu selalu di bawah nol','Air, lahan, dan jalur mobilitas dapat mendukung permukiman.');
  S(4,'Penalaran ekonomi','Jika jembatan penghubung ke pasar rusak, dampak paling langsung bagi petani adalah ...','Pengiriman hasil panen menjadi lebih sulit','Panen otomatis berlipat ganda','Harga pupuk pasti menjadi nol','Kebutuhan transportasi hilang','Infrastruktur memengaruhi kelancaran distribusi barang.');

  // IPS kelas V (20 soal).
  S(5,'Geografi Indonesia','Indonesia terletak di antara Benua Asia dan ...','Australia','Eropa','Amerika','Antarktika','Secara geografis Indonesia berada di antara Asia dan Australia.');
  S(5,'Geografi Indonesia','Indonesia diapit Samudra Hindia dan ...','Samudra Pasifik','Samudra Atlantik','Samudra Arktik','Laut Kaspia','Dua samudra utama di sekitar Indonesia adalah Hindia dan Pasifik.');
  S(5,'Sejarah','Proklamasi Kemerdekaan Indonesia dibacakan pada ...','17 Agustus 1945','1 Juni 1945','28 Oktober 1928','10 November 1945','Proklamasi dibacakan pada 17 Agustus 1945 di Jakarta.');
  S(5,'Sejarah','Tokoh yang membacakan teks proklamasi adalah ...','Soekarno','Ki Hajar Dewantara','Jenderal Sudirman','Mohammad Yamin','Soekarno membacakan proklamasi didampingi Mohammad Hatta.');
  S(5,'Sejarah','Peristiwa Sumpah Pemuda terjadi pada ...','28 Oktober 1928','17 Agustus 1945','1 Juni 1945','20 Mei 1908','Kongres Pemuda II menghasilkan ikrar Sumpah Pemuda 28 Oktober 1928.');
  S(5,'Budaya','Semboyan Bhinneka Tunggal Ika berarti ...','Berbeda-beda tetapi tetap satu','Semua daerah harus sama','Setiap pulau terpisah','Satu budaya lebih unggul','Semboyan menekankan persatuan dalam keberagaman.');
  S(5,'Ekonomi','Barang yang dijual ke luar negeri disebut ...','Ekspor','Impor','Konsumsi','Subsidi','Ekspor adalah penjualan barang/jasa ke negara lain.');
  S(5,'Ekonomi','Barang yang dibeli dari luar negeri disebut ...','Impor','Ekspor','Distribusi lokal','Produksi domestik','Impor memasukkan barang atau jasa dari negara lain.');
  S(5,'Sumber daya alam','Contoh kegiatan ekonomi yang memanfaatkan laut adalah ...','Perikanan tangkap','Perkebunan teh pegunungan','Pertambangan batu di bukit','Industri keramik tanah liat','Perikanan memanfaatkan sumber daya hayati laut.');
  S(5,'Sejarah','Tokoh yang dikenal sebagai Bapak Pendidikan Nasional adalah ...','Ki Hajar Dewantara','Pattimura','Sultan Hasanuddin','Cut Nyak Dien','Ki Hajar Dewantara berjasa besar dalam pendidikan nasional.');
  S(5,'Geografi','Garis khatulistiwa membagi Bumi menjadi belahan ...','Utara dan selatan','Timur dan barat','Darat dan laut','Asia dan Eropa','Khatulistiwa adalah garis lintang 0°.');
  S(5,'Ekonomi','Salah satu manfaat koperasi sekolah adalah ...','Melatih kerja sama dan memenuhi kebutuhan warga sekolah','Membuat semua barang gratis','Menghilangkan transaksi','Melarang kegiatan menabung','Koperasi mengajarkan kerja sama dan aktivitas ekonomi.');
  S(5,'Sejarah','Pertempuran 10 November 1945 diperingati sebagai Hari Pahlawan dan terjadi di ...','Surabaya','Bandung','Makassar','Semarang','Pertempuran besar di Surabaya diperingati setiap 10 November.');
  S(5,'Kebudayaan','Tari Kecak berkembang sebagai kesenian khas daerah ...','Bali','Aceh','Papua','Kalimantan Selatan','Tari Kecak dikenal sebagai pertunjukan tradisi Bali.');
  S(5,'Penalaran ekonomi','Ketika hasil panen cabai menurun drastis sementara permintaan tetap, harga cenderung ...','Naik','Selalu turun','Tetap nol','Tidak pernah berubah','Pasokan berkurang dengan permintaan tetap dapat mendorong harga naik.');
  S(5,'Geografi ekonomi','Mengapa daerah dataran tinggi banyak digunakan untuk perkebunan teh?','Suhu lebih sejuk dan kondisi tertentu cocok bagi teh','Selalu lebih dekat dengan laut','Tidak pernah menerima hujan','Tanahnya pasti seluruhnya pasir','Tanaman teh sesuai tumbuh pada banyak daerah sejuk di dataran tinggi.');
  S(5,'Sejarah','Apa peran penting Mohammad Hatta dalam proklamasi Indonesia?','Mendampingi Soekarno sebagai proklamator','Memimpin VOC','Menjadi gubernur jenderal kolonial','Menyusun Sumpah Pemuda sendirian','Soekarno dan Hatta dikenal sebagai dua proklamator Indonesia.');
  S(5,'Ekonomi','Jika suatu daerah mengolah hasil ikan menjadi ikan kaleng, manfaat ekonominya adalah ...','Nilai tambah dan daya simpan meningkat','Ikan menjadi tidak dapat dipasarkan','Harga pasti selalu turun','Distribusi menjadi mustahil','Pengolahan dapat menaikkan nilai produk dan memperpanjang masa simpan.');
  S(5,'Lingkungan sosial','Bagaimana cara paling tepat menyelesaikan perbedaan pendapat dalam musyawarah kelas?','Mendengarkan dan mencari kesepakatan bersama','Memaksa semua orang setuju','Meninggalkan rapat tanpa alasan','Mengejek pendapat berbeda','Musyawarah memerlukan saling menghormati dan kesepakatan.');
  S(5,'Penalaran geografi','Jika hutan mangrove pesisir ditebang, salah satu risiko yang meningkat adalah ...','Abrasi pantai','Berhentinya pasang surut','Hilangnya semua angin','Naiknya permukaan tanah secara pasti','Akar mangrove membantu meredam gelombang dan menahan sedimen.');

  // IPS kelas VI (20 soal).
  S(6,'ASEAN','ASEAN didirikan pada tanggal ...','8 Agustus 1967','17 Agustus 1945','28 Oktober 1928','1 Januari 2000','ASEAN dibentuk melalui Deklarasi Bangkok pada 8 Agustus 1967.');
  S(6,'ASEAN','Salah satu negara pendiri ASEAN adalah ...','Indonesia','Jepang','Korea Selatan','India','Indonesia termasuk lima pendiri ASEAN.');
  S(6,'ASEAN','Ibu kota Thailand adalah ...','Bangkok','Hanoi','Manila','Phnom Penh','Bangkok merupakan ibu kota Thailand.');
  S(6,'ASEAN','Ibu kota Filipina adalah ...','Manila','Vientiane','Yangon','Jakarta','Manila merupakan ibu kota Filipina.');
  S(6,'Globalisasi','Contoh pengaruh globalisasi dalam komunikasi adalah ...','Rapat video dengan orang dari negara lain','Hanya berkomunikasi dengan surat melalui kapal','Tidak boleh memakai internet','Membatasi informasi pada satu desa','Teknologi mempercepat komunikasi lintas negara.');
  S(6,'Ekonomi','Ekspor produk kerajinan Indonesia ke negara lain dapat ...','Menambah pendapatan pelaku usaha dan devisa','Menghapus seluruh budaya lokal','Menghentikan produksi','Menghilangkan kebutuhan kualitas','Ekspor memperluas pasar dan berpotensi menghasilkan devisa.');
  S(6,'Sejarah','Konferensi Asia Afrika tahun 1955 diselenggarakan di kota ...','Bandung','Jakarta','Surabaya','Medan','KAA berlangsung di Bandung pada April 1955.');
  S(6,'Sejarah','Sultan Hasanuddin dikenal sebagai pahlawan yang berjuang melawan VOC di wilayah ...','Gowa, Sulawesi Selatan','Aceh','Bali','Kalimantan Tengah','Sultan Hasanuddin adalah penguasa Gowa yang melawan VOC.');
  S(6,'Lingkungan','Salah satu cara mengurangi sampah plastik adalah ...','Menggunakan botol minum isi ulang','Membuang plastik ke sungai','Membakar semua sampah sembarangan','Memakai kantong sekali pakai sebanyak mungkin','Pemakaian ulang mengurangi kebutuhan plastik sekali pakai.');
  S(6,'ASEAN','Tujuan utama kerja sama ASEAN di bidang pendidikan antara lain ...','Meningkatkan mutu dan pertukaran pengetahuan','Menghapus semua sekolah','Membatasi seluruh penelitian','Melarang pertukaran pelajar','Kerja sama pendidikan memperluas akses dan kualitas pembelajaran.');
  S(6,'Ekonomi','Kegiatan usaha kecil yang berjualan lewat internet merupakan contoh ...','Pemanfaatan teknologi dalam pemasaran','Larangan distribusi','Berhentinya produksi','Kegiatan tanpa konsumen','Platform digital membantu produsen menjangkau pembeli.');
  S(6,'Geografi','Negara ASEAN yang tidak memiliki wilayah laut adalah ...','Laos','Indonesia','Filipina','Singapura','Laos merupakan negara terkurung daratan.');
  S(6,'Sejarah','Organisasi Budi Utomo didirikan pada tahun ...','1908','1928','1945','1967','Budi Utomo berdiri pada 20 Mei 1908, diperingati sebagai Kebangkitan Nasional.');
  S(6,'Keragaman sosial','Sikap yang tepat saat teman memiliki adat berbeda adalah ...','Menghargai dan mempelajarinya dengan sopan','Menganggap adat sendiri paling unggul','Mengejek kebiasaannya','Melarang teman merayakan tradisi','Toleransi membangun hubungan yang baik.');
  S(6,'Perubahan sosial','Dampak positif perkembangan transportasi terhadap ekonomi antardaerah adalah ...','Pengiriman barang lebih cepat','Hasil bumi tidak dapat dijual','Harga semua barang pasti nol','Masyarakat tidak perlu bekerja','Transportasi mempermudah distribusi produk.');
  S(6,'ASEAN','Mengapa negara ASEAN perlu bekerja sama menghadapi kabut asap lintas batas?','Dampaknya dapat menjangkau lebih dari satu negara','Asap hanya berhenti di garis perbatasan','Semua negara memiliki cuaca identik','Hutan tidak terkait kualitas udara','Polusi udara dapat terbawa angin melintasi perbatasan.');
  S(6,'Ekonomi','Jika nilai impor suatu produk naik karena kurs berubah, konsumen dapat menghadapi ...','Harga produk impor yang lebih mahal','Produk otomatis menjadi gratis','Penghapusan pajak otomatis','Hilangnya kebutuhan uang','Perubahan kurs memengaruhi biaya pembelian barang impor.');
  S(6,'Geografi ekonomi','Mengapa pembangunan jalan di wilayah terpencil dapat mengurangi kesenjangan?','Mempermudah akses layanan dan pasar','Membuat semua daerah menjadi ibu kota','Menghilangkan seluruh risiko bencana','Menyamakan kondisi alam semua daerah','Jalan membuka akses pendidikan, kesehatan, dan distribusi ekonomi.');
  S(6,'Penalaran sejarah','Mengapa mempelajari lebih dari satu sumber sejarah penting?','Untuk membandingkan informasi dan mengurangi bias','Agar semua cerita dianggap pasti benar','Untuk menghapus bukti yang berbeda','Agar tidak perlu memeriksa tanggal','Sumber yang beragam membantu memeriksa kesesuaian dan konteks peristiwa.');
  S(6,'Penalaran sosial','Jika suatu desa mengembangkan wisata budaya, langkah terbaik untuk menjaga manfaat jangka panjang adalah ...','Melibatkan warga serta melestarikan budaya dan lingkungan','Mengabaikan penduduk setempat','Merusak situs sejarah','Menutup semua usaha lokal','Wisata berkelanjutan memerlukan partisipasi masyarakat dan pelestarian.');

  if (seeds.length !== 180) throw new Error('Bank soal seharusnya 180, tetapi ada ' + seeds.length);
  return seeds;
}

function seedQuestions_() {
  const sh = sh_('SOAL');
  const existing = new Set(rows_('SOAL').map(r => r.ID_SOAL));
  const additions = makeSeedBank_().filter(q => !existing.has(q.ID_SOAL));
  if (additions.length) sh.getRange(sh.getLastRow() + 1, 1, additions.length, CC.HEADERS.SOAL.length)
    .setValues(additions.map(q => toArray_('SOAL', q)));
  return additions.length;
}

/** Original contextual question bank. Existing teacher rows are never overwritten. */
function makeTkaBank_() {
  const bank = [], counters = {};
  function A(mapel, kelas, topik, tipe, text, options, answer, explanation) {
    const key = mapel + kelas;
    counters[key] = (counters[key] || 0) + 1;
    const id = 'TKA-' + key + '-' + ('0' + counters[key]).slice(-2);
    bank.push(validateQuestion_({ id, mapel, kelas, topik, babak: 'UMUM',
      level: tipe === 'PG' ? 'SEDANG' : tipe === 'PGK' ? 'SULIT' : 'HOTS',
      tipe, text, options, answer, explanation, active: true }));
  }
  // Matematika kelas IV: operasi, pecahan, ukuran, dan klasifikasi bangun.
  A('MATEMATIKA',4,'Operasi hitung','PG','Kelas IV mendapat 3 kotak pensil. Setiap kotak berisi 24 pensil. Sebanyak 17 pensil dibagikan. Berapa pensil tersisa?',['45','55','65','72'],'B','3 × 24 − 17 = 55 pensil.');
  A('MATEMATIKA',4,'Analisis data','PG','Data buku yang dipinjam Senin sampai Kamis berturut-turut 12, 9, 15, dan 6. Jumlah seluruh buku yang dipinjam adalah ...',['36','39','42','45'],'C','12 + 9 + 15 + 6 = 42.');
  A('MATEMATIKA',4,'Satuan panjang','PGK','Pilih SEMUA pernyataan konversi panjang yang benar.',['2 meter = 200 cm','1 kilometer = 100 meter','3 meter = 300 cm','500 cm = 50 meter'],'AC','1 m = 100 cm dan 1 km = 1.000 m; yang benar A dan C.');
  A('MATEMATIKA',4,'Pecahan senilai','PGK','Perhatikan pecahan berikut. Pilih SEMUA pernyataan yang benar.',['1/2 senilai dengan 2/4','3/6 senilai dengan 1/2','2/3 lebih kecil daripada 1/3','4/8 senilai dengan 3/4'],'AB','1/2 = 2/4 = 3/6; 2/3 > 1/3, sedangkan 4/8 bukan 3/4.');
  A('MATEMATIKA',4,'Operasi bilangan','BS','Tentukan BENAR atau SALAH untuk setiap pernyataan operasi hitung.',['3.000 + 400 = 3.400','800 − 250 = 650','7 × 8 = 56','63 : 9 = 7'],'BSBB','Hasil 800 − 250 adalah 550, bukan 650. Pernyataan lain benar.');
  A('MATEMATIKA',4,'Bangun datar','JODOH','Jodohkan bentuk dengan cirinya.\n1. Segitiga\n2. Persegi\n3. Persegi panjang\n4. Lingkaran',['Memiliki empat sisi sama panjang','Tidak memiliki titik sudut','Memiliki tiga sisi','Dua pasang sisi berhadapan sama panjang'],'CADB','Segitiga→C, persegi→A, persegi panjang→D, lingkaran→B.');

  // Matematika kelas V: pecahan, KPK/FPB, sudut, dan penerapan data.
  A('MATEMATIKA',5,'Pecahan','PG','Di perpustakaan ada 24 buku sains. Sebanyak 3/4 buku sudah dibaca kelompok belajar. Berapa buku yang sudah dibaca?',['12','16','18','20'],'C','3/4 × 24 = 18 buku.');
  A('MATEMATIKA',5,'KPK','PG','Dua bus berangkat bersama pukul 08.00. Bus A berangkat setiap 12 menit dan bus B setiap 18 menit. Keduanya berangkat bersama lagi pada pukul ...',['08.36','08.24','08.30','08.48'],'A','KPK 12 dan 18 adalah 36 menit.');
  A('MATEMATIKA',5,'KPK dan FPB','PGK','Perhatikan bilangan 24 dan 36. Pilih SEMUA pernyataan yang benar.',['FPB-nya adalah 12','KPK-nya adalah 72','24 habis dibagi 6','36 habis dibagi 8'],'ABC','FPB = 12, KPK = 72, dan 24 : 6 = 4; 36 tidak habis dibagi 8.');
  A('MATEMATIKA',5,'Desimal dan persen','PGK','Pilih SEMUA kesetaraan bilangan yang benar.',['2/5 = 4/10','0,5 = 1/2','25% = 1/5','3/4 = 0,75'],'ABD','2/5 = 0,4; 0,5 = 1/2; 25% = 1/4, bukan 1/5; 3/4 = 0,75.');
  A('MATEMATIKA',5,'Sudut','BS','Tentukan BENAR atau SALAH untuk setiap pernyataan sudut.',['Sudut 90° adalah sudut siku-siku','Sudut 120° adalah sudut lancip','Sudut 45° adalah sudut lancip','Sudut 180° adalah sudut lurus'],'BSBB','120° adalah sudut tumpul; tiga pernyataan lain benar.');
  A('MATEMATIKA',5,'Konsep matematika','JODOH','Jodohkan istilah dengan definisinya.\n1. KPK\n2. FPB\n3. Keliling\n4. Luas',['Jumlah panjang semua sisi suatu bangun','Besar daerah yang ditutupi bangun','Kelipatan persekutuan yang paling kecil','Faktor persekutuan yang paling besar'],'CDAB','KPK→C, FPB→D, keliling→A, luas→B.');

  // Matematika kelas VI: rasio, geometri, probabilitas, dan interpretasi.
  A('MATEMATIKA',6,'Rasio','PG','Jumlah kelereng merah dan biru adalah 35 dengan rasio 2 : 3. Banyak kelereng merah adalah ...',['12','14','21','23'],'B','Jumlah bagian 2 + 3 = 5; merah = 2/5 × 35 = 14.');
  A('MATEMATIKA',6,'Peluang sederhana','PG','Sebuah kantong berisi 3 bola merah dan 2 bola biru dengan ukuran sama. Jika diambil satu secara acak, warna yang lebih mungkin diperoleh adalah ...',['Merah','Biru','Keduanya selalu keluar bersama','Tidak mungkin dipastikan peluangnya'],'A','Ada 3 bola merah dari 5, lebih banyak daripada bola biru.');
  A('MATEMATIKA',6,'Bangun datar','PGK','Sebuah persegi panjang berukuran 4 cm × 6 cm. Pilih SEMUA pernyataan yang benar.',['Luasnya 24 cm²','Kelilingnya 20 cm','Jika sisi 4 cm menjadi 8 cm, luasnya menjadi 48 cm²','Jika sisi 4 cm menjadi 8 cm, kelilingnya menjadi 24 cm'],'ABC','Luas 24, keliling 20; setelah panjang 8 cm, luas 48 dan keliling 28 cm.');
  A('MATEMATIKA',6,'Rasio','PGK','Perbandingan banyak murid kelompok A dan B adalah 2 : 5. Jumlah murid 21 orang. Pilih SEMUA pernyataan yang benar.',['Kelompok A berisi 6 orang','Kelompok B berisi 15 orang','Rasio kelompok A terhadap total adalah 2 : 7','Selisih anggota kedua kelompok 7 orang'],'ABC','Setiap bagian 3 murid, sehingga A = 6, B = 15, selisih = 9.');
  A('MATEMATIKA',6,'Pecahan dan desimal','BS','Tentukan BENAR atau SALAH untuk setiap pernyataan.',['1/4 = 0,25','3/5 = 0,8','50% = 1/2','0,75 = 3/4'],'BSBB','3/5 = 0,6, bukan 0,8. Tiga pernyataan lain benar.');
  A('MATEMATIKA',6,'Istilah numerasi','JODOH','Jodohkan istilah dengan artinya.\n1. Rasio\n2. Peluang\n3. Desimal\n4. Piktogram',['Penyajian data dengan gambar','Perbandingan dua besaran','Bilangan berbasis sepuluh dengan tanda koma','Ukuran kemungkinan suatu kejadian'],'BDCA','Rasio→B, peluang→D, desimal→C, piktogram→A.');

  // IPA kelas IV: tumbuhan, zat, energi dan gaya.
  A('IPA',4,'Perubahan wujud','PG','Ibu menjemur kain basah di bawah matahari. Setelah beberapa jam, kain kering. Perubahan wujud air yang terutama terjadi adalah ...',['Membeku','Mengembun','Menguap','Mencair'],'C','Air pada kain berubah dari cair menjadi uap.');
  A('IPA',4,'Tumbuhan','PG','Dua tanaman mendapat air yang sama. Tanaman pertama diletakkan dekat jendela, tanaman kedua dalam lemari gelap selama beberapa hari. Tanaman kedua menjadi lemah terutama karena ...',['Kelebihan cahaya','Kekurangan cahaya untuk fotosintesis','Udara berubah menjadi tanah','Akar tidak lagi membutuhkan air'],'B','Tumbuhan memerlukan cahaya untuk membuat makanan.');
  A('IPA',4,'Bagian tumbuhan','PGK','Pilih SEMUA pernyataan yang benar tentang bagian tumbuhan.',['Akar menyerap air dan mineral','Daun menjadi tempat utama fotosintesis','Bunga merupakan tempat utama penyerapan air dari tanah','Batang membantu menopang tumbuhan'],'ABD','Air terutama diserap akar, bukan bunga.');
  A('IPA',4,'Perubahan energi','PGK','Pilih SEMUA contoh perubahan energi yang tepat.',['Senter: energi kimia baterai menjadi cahaya','Kipas angin: energi listrik menjadi gerak','Setrika: energi listrik menjadi panas','Lampu meja: energi listrik terutama menjadi bunyi'],'ABC','Lampu meja utamanya menghasilkan cahaya dan panas, bukan bunyi.');
  A('IPA',4,'Wujud benda','BS','Tentukan BENAR atau SALAH untuk setiap peristiwa.',['Es berubah menjadi air disebut mencair','Air mendidih berubah menjadi es disebut membeku','Uap air menjadi titik air disebut mengembun','Garam larut dalam air adalah peristiwa mencair'],'BSBS','Mendidih adalah penguapan; pelarutan garam bukan perubahan wujud mencair.');
  A('IPA',4,'Macam gaya','JODOH','Jodohkan jenis gaya dan contohnya.\n1. Gravitasi\n2. Gesek\n3. Magnet\n4. Pegas',['Menarik benda dari besi','Menghambat gerak ketika dua permukaan bersentuhan','Menarik benda menuju Bumi','Memulihkan bentuk benda lentur setelah ditekan'],'CBAD','Gravitasi→C, gesek→B, magnet→A, pegas→D.');

  // IPA kelas V: cahaya, ekosistem, dan listrik.
  A('IPA',5,'Ekosistem','PG','Pada rantai makanan padi → belalang → katak → ular, penggunaan pestisida mengakibatkan belalang sangat berkurang. Akibat paling mungkin bagi katak adalah ...',['Jumlah katak menurun karena kekurangan makanan','Jumlah katak terus meningkat','Katak berubah menjadi produsen','Katak tidak lagi memerlukan energi'],'A','Belalang menjadi sumber makanan katak.');
  A('IPA',5,'Cahaya','PG','Sebuah pensil tampak bengkok ketika sebagian dimasukkan ke gelas berisi air. Peristiwa ini disebabkan oleh ...',['Pemantulan bunyi','Perubahan massa pensil','Pembiasan cahaya','Pembekuan air'],'C','Cahaya berubah arah saat melewati udara dan air.');
  A('IPA',5,'Komponen ekosistem','PGK','Pilih SEMUA pernyataan yang benar.',['Rumput dapat berperan sebagai produsen','Jamur dapat berperan sebagai pengurai','Batu termasuk komponen biotik','Cahaya matahari termasuk komponen abiotik'],'ABD','Batu merupakan komponen abiotik.');
  A('IPA',5,'Listrik dan magnet','PGK','Pilih SEMUA pernyataan yang benar.',['Magnet dapat menarik paku besi','Peralatan listrik harus dijauhkan dari air','Plastik merupakan penghantar listrik yang baik','Kabel rusak perlu dilaporkan kepada orang dewasa'],'ABD','Plastik umumnya bersifat isolator, bukan konduktor.');
  A('IPA',5,'Cahaya dan bunyi','BS','Tentukan BENAR atau SALAH untuk setiap pernyataan.',['Cahaya merambat lurus dalam medium seragam','Bunyi dapat merambat dalam ruang hampa','Gema terjadi akibat pemantulan bunyi','Benda opak meneruskan semua cahaya'],'BSBS','Bunyi memerlukan medium, dan benda opak tidak meneruskan cahaya.');
  A('IPA',5,'Peran makhluk hidup','JODOH','Jodohkan kelompok dengan perannya.\n1. Herbivora\n2. Karnivora\n3. Omnivora\n4. Dekomposer',['Memakan tumbuhan dan hewan','Menguraikan sisa makhluk hidup','Memakan tumbuhan','Memakan hewan'],'CDAB','Herbivora→C, karnivora→D, omnivora→A, pengurai→B.');

  // IPA kelas VI: tubuh, astronomi, energi, dan keberlanjutan.
  A('IPA',6,'Gerhana','PG','Ketika Bulan berada tepat di antara Matahari dan Bumi serta menghalangi cahaya menuju wilayah tertentu, fenomena yang terjadi adalah ...',['Gerhana Matahari','Gerhana Bulan','Pergantian musim','Pasang laut yang berhenti'],'A','Gerhana Matahari dapat terjadi ketika Bulan menghalangi cahaya Matahari ke Bumi.');
  A('IPA',6,'Energi surya','PG','Panel surya di atap sekolah menghasilkan listrik lebih sedikit saat langit sangat mendung. Penyebab paling masuk akal adalah ...',['Panel berubah menjadi magnet','Bumi berhenti berotasi','Cahaya Matahari yang diterima berkurang','Udara tidak mengandung oksigen'],'C','Daya panel surya dipengaruhi intensitas cahaya.');
  A('IPA',6,'Gerak Bumi','PGK','Pilih SEMUA pernyataan yang benar.',['Rotasi Bumi menyebabkan siang dan malam','Revolusi Bumi terjadi dalam waktu sekitar 24 jam','Bumi mengelilingi Matahari dalam gerak revolusi','Bulan menghasilkan cahaya sendiri seperti bintang'],'AC','Rotasi sekitar 24 jam, revolusi sekitar setahun, Bulan memantulkan sinar Matahari.');
  A('IPA',6,'Pelestarian lingkungan','PGK','Pilih SEMUA tindakan yang mendukung lingkungan lestari.',['Menanam kembali pohon di lahan gundul','Mengurangi penggunaan plastik sekali pakai','Membuang sampah ke sungai agar cepat terbawa','Menghemat listrik saat tidak dipakai'],'ABD','Membuang sampah ke sungai dapat mencemari air dan menyebabkan penyumbatan.');
  A('IPA',6,'Sistem gerak','BS','Tentukan BENAR atau SALAH.',['Rangka membantu menopang tubuh','Otot tidak berperan dalam pergerakan tulang','Sendi menghubungkan tulang','Sistem saraf sama sekali tidak memengaruhi gerak tubuh'],'BSBS','Otot menggerakkan tulang melalui kerja bersama; sistem saraf mengoordinasikannya.');
  A('IPA',6,'Bumi dan antariksa','JODOH','Jodohkan peristiwa dengan penjelasannya.\n1. Rotasi Bumi\n2. Revolusi Bumi\n3. Gerhana Bulan\n4. Gerhana Matahari',['Bumi berada di antara Matahari dan Bulan','Bulan berada di antara Matahari dan Bumi','Bumi berputar pada porosnya','Bumi mengelilingi Matahari'],'CDAB','Rotasi→C, revolusi→D, gerhana Bulan→A, gerhana Matahari→B.');

  // IPS kelas IV: peta, kegiatan ekonomi, dan lingkungan sosial.
  A('IPS',4,'Bentang alam','PG','Penduduk desa yang berada di tepi laut banyak bekerja sebagai nelayan. Alasan terkuat adalah ...',['Dekat dengan sumber daya ikan','Jauh dari semua perairan','Tidak tersedia sumber daya alam','Semua penduduk harus menjadi nelayan'],'A','Lingkungan pesisir memberikan akses pada kegiatan perikanan.');
  A('IPS',4,'Kebutuhan dan keinginan','PG','Dina memiliki uang Rp20.000. Ia harus membeli buku tulis Rp8.000 dan ingin membeli hiasan Rp15.000. Keputusan paling bijak adalah ...',['Membeli hiasan dahulu','Menghabiskan uang untuk jajanan','Membeli buku tulis dan menunda hiasan','Meminjam uang untuk semua keinginan'],'C','Utamakan kebutuhan belajar dan sesuaikan keinginan dengan kemampuan keuangan.');
  A('IPS',4,'Peta','PGK','Pilih SEMUA pernyataan yang benar tentang peta.',['Legenda menjelaskan arti simbol','Tanda mata angin menunjukkan arah','Skala membandingkan jarak peta dan jarak sebenarnya','Judul peta selalu menunjukkan arah utara'],'ABC','Judul menunjukkan tema/wilayah, bukan arah utara.');
  A('IPS',4,'Kegiatan ekonomi','PGK','Pilih SEMUA pernyataan yang benar.',['Petani yang menanam padi melakukan produksi','Pedagang yang menyalurkan beras melakukan distribusi','Keluarga yang membeli beras untuk dimakan melakukan konsumsi','Uang kertas termasuk bentang alam alami'],'ABC','Uang merupakan alat tukar, bukan bentang alam.');
  A('IPS',4,'Kenampakan alam','BS','Tentukan BENAR atau SALAH.',['Gunung merupakan kenampakan alam','Jembatan merupakan kenampakan alam','Pantai merupakan kenampakan alam','Waduk merupakan kenampakan alam alami'],'BSBS','Jembatan dan waduk dibangun manusia.');
  A('IPS',4,'Ekonomi sederhana','JODOH','Jodohkan istilah dengan kegiatannya.\n1. Produksi\n2. Distribusi\n3. Konsumsi\n4. Menabung',['Menggunakan barang untuk memenuhi kebutuhan','Menyalurkan barang ke pembeli','Menyisihkan uang untuk masa depan','Menghasilkan barang atau jasa'],'DBAC','Produksi→D, distribusi→B, konsumsi→A, menabung→C.');

  // IPS kelas V: geografi, sumber daya, ekonomi, dan kebinekaan.
  A('IPS',5,'Geografi dan ekonomi','PG','Sebuah daerah dataran tinggi menghasilkan banyak teh. Faktor alam yang paling mendukung kegiatan tersebut adalah ...',['Gelombang laut','Suhu yang lebih sejuk','Dekat dengan terumbu karang','Selalu tidak turun hujan'],'B','Tanaman teh cocok dibudidayakan di sejumlah daerah bersuhu sejuk.');
  A('IPS',5,'Lingkungan pesisir','PG','Warga menebang banyak pohon mangrove di tepi pantai. Dalam jangka panjang, risiko yang paling mungkin meningkat adalah ...',['Salju menutup pantai','Gunung api menjadi aktif','Abrasi pantai','Semua ikan menghilang seketika'],'C','Akar mangrove dapat membantu menahan sedimen dan meredam gelombang.');
  A('IPS',5,'Letak Indonesia','PGK','Pilih SEMUA pernyataan yang benar.',['Indonesia berada di antara Asia dan Australia','Indonesia berada di antara Samudra Hindia dan Pasifik','Semua pulau Indonesia mempunyai kondisi alam yang sama','Kondisi geografis dapat memengaruhi mata pencaharian'],'ABD','Keragaman kondisi alam membuat pekerjaan masyarakat berbeda-beda.');
  A('IPS',5,'Produksi dan distribusi','PGK','Pilih SEMUA pernyataan yang benar.',['Mengolah ikan menjadi ikan kaleng dapat menambah nilai jual','Pedagang menyalurkan hasil produksi kepada konsumen','Wisatawan dapat menggunakan jasa pemandu wisata','Menebang semua hutan pasti meningkatkan kesuburan tanah'],'ABC','Penebangan hutan tanpa pengelolaan dapat memperburuk kondisi lingkungan.');
  A('IPS',5,'Budaya dan ekonomi','BS','Tentukan BENAR atau SALAH.',['Bhinneka Tunggal Ika mengajarkan persatuan dalam keberagaman','Ekspor berarti membeli barang dari luar negeri','Impor berarti memasukkan barang dari luar negeri','Semua daerah di Indonesia memiliki kebudayaan yang persis sama'],'BSBS','Ekspor berarti menjual ke luar negeri, impor memasukkan dari luar negeri.');
  A('IPS',5,'Pelaku ekonomi','JODOH','Jodohkan peran dengan pengertiannya.\n1. Produsen\n2. Distributor\n3. Konsumen\n4. Sumber daya alam',['Pihak yang memakai barang atau jasa','Bahan atau potensi yang berasal dari alam','Pihak yang menghasilkan barang atau jasa','Pihak yang menyalurkan barang'],'CDAB','Produsen→C, distributor→D, konsumen→A, SDA→B.');

  // IPS kelas VI: sejarah, kerja sama, dan keberlanjutan.
  A('IPS',6,'Sumber sejarah','PG','Dua buku menceritakan satu peristiwa sejarah dengan rincian berbeda. Sikap paling tepat bagi pelajar adalah ...',['Memilih cerita yang paling pendek tanpa memeriksa bukti','Membandingkan informasi dan memeriksa sumbernya','Menganggap semua informasi pasti salah','Menghapus sumber yang berbeda'],'B','Membandingkan berbagai sumber dapat membantu mengurangi bias.');
  A('IPS',6,'Wisata berkelanjutan','PG','Desa mengembangkan wisata budaya. Kebijakan yang paling mendukung manfaat jangka panjang adalah ...',['Menutup usaha warga','Mengabaikan kondisi lingkungan','Melibatkan warga sambil melestarikan budaya dan alam','Mengganti semua tradisi lokal'],'C','Keterlibatan warga dan pelestarian budaya membuat wisata lebih berkelanjutan.');
  A('IPS',6,'Kerja sama antarnegara','PGK','Pilih SEMUA pernyataan yang benar tentang kerja sama antarnegara.',['Pertukaran pelajar dapat meningkatkan pengetahuan','Kabut asap lintas batas perlu ditangani bersama','Semua negara di Asia Tenggara memiliki kondisi geografis yang sama','Perdagangan antarnegara dapat memperluas pasar'],'ABD','Kerja sama menyikapi tantangan bersama; kondisi geografis setiap negara berbeda.');
  A('IPS',6,'Sejarah nasional','PGK','Pilih SEMUA pernyataan sejarah yang benar.',['Soekarno dan Hatta memproklamasikan kemerdekaan pada 17 Agustus 1945','Sumpah Pemuda diperingati setiap 28 Oktober','Konferensi Asia Afrika berlangsung di Bandung pada 1955','Semua wilayah Indonesia langsung bebas penjajahan pada 1942'],'ABC','Tahun 1942 menandai pendudukan Jepang, bukan kemerdekaan Indonesia.');
  A('IPS',6,'Hubungan internasional','BS','Tentukan BENAR atau SALAH.',['Indonesia termasuk negara di Benua Asia','Kerja sama internasional dapat menguntungkan kedua pihak','Semua negara memiliki sumber daya alam yang sama','Perbedaan kondisi geografis dapat mendorong perdagangan'],'BBSB','Negara-negara memiliki sumber daya dan potensi yang beragam.');
  A('IPS',6,'Istilah sejarah ekonomi','JODOH','Jodohkan istilah dengan maknanya.\n1. Proklamasi\n2. Ekspor\n3. Impor\n4. Perjanjian kerja sama',['Barang masuk dari luar negeri','Pernyataan resmi kemerdekaan','Kesepakatan yang dibuat antarpihak','Penjualan barang ke negara lain'],'BDAC','Proklamasi→B, ekspor→D, impor→A, perjanjian→C.');

  if (bank.length !== 54) throw new Error('Bank TKA/ANBK harus berisi 54 soal; ditemukan ' + bank.length);
  return bank;
}

function seedTkaQuestions_() {
  const sh = sh_('SOAL');
  const existing = new Set(rows_('SOAL').map(r => r.ID_SOAL));
  const additions = makeTkaBank_().filter(q => !existing.has(q.ID_SOAL));
  if (additions.length) sh.getRange(sh.getLastRow() + 1, 1, additions.length, CC.HEADERS.SOAL.length)
    .setValues(additions.map(q => toArray_('SOAL', q)));
  return additions.length;
}
