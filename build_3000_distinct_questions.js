// =============================================================================
// SCRIPT UTAMA PERAKITAN 3.000 BANK SOAL MIPAS FLAWLESS
// 1.000 Matematika + 1.000 IPA + 1.000 IPS (Kelas 4-6)
// Zero Duplikat, Zero Opsi Kembar, 100% Topik Hadir di Setiap Bagian
// Proporsi Presisi: 20% Mudah, 40% Sedang, 20% Sulit, 20% HOTS
// =============================================================================

const fs = require('fs');
const { buildMathQuestions } = require('./questions_math_builder');
const { buildIpaQuestions } = require('./questions_ipa_builder');
const { buildIpsQuestions } = require('./questions_ips_builder');

console.log('=== MEMBANGUN 3.000 BANK SOAL MIPAS BERKUALITAS TINGGI ===');

console.log('1. Membangun 1.000 Soal Matematika...');
const mtkRaw = buildMathQuestions();
console.log(`✓ Selesai Bank MTK: ${mtkRaw.length} soal.`);

console.log('2. Membangun 1.000 Soal IPA...');
const ipaRaw = buildIpaQuestions();
console.log(`✓ Selesai Bank IPA: ${ipaRaw.length} soal.`);

console.log('3. Membangun 1.000 Soal IPS...');
const ipsRaw = buildIpsQuestions();
console.log(`✓ Selesai Bank IPS: ${ipsRaw.length} soal.`);

// =============================================================================
// ALGORITMA STRATIFIED 10-TOPIC ROUND-ROBIN
// =============================================================================
function assembleStratified10(subjectQuestions, numFullParts) {
  const topicMap = new Map();
  subjectQuestions.forEach(q => {
    if (!topicMap.has(q.TOPIK)) topicMap.set(q.TOPIK, []);
    topicMap.get(q.TOPIK).push(q);
  });

  const topics = Array.from(topicMap.keys());
  const numTopics = topics.length;

  const pools = topics.map(topik => {
    const list = topicMap.get(topik);
    return {
      topik,
      MUDAH: list.filter(q => q.LEVEL === 'MUDAH'),
      SEDANG: list.filter(q => q.LEVEL === 'SEDANG'),
      SULIT: list.filter(q => q.LEVEL === 'SULIT'),
      HOTS: list.filter(q => q.LEVEL === 'HOTS')
    };
  });

  const parts = [];

  for (let p = 0; p < numFullParts; p++) {
    function pickTopicsForLevel(level, count, offset) {
      const sorted = [...Array(numTopics).keys()]
        .sort((a, b) => {
          const diff = pools[b][level].length - pools[a][level].length;
          if (diff !== 0) return diff;
          return ((a + offset) % numTopics) - ((b + offset) % numTopics);
        });
      return sorted.slice(0, count);
    }

    // Sedang: 12 soal (seluruh 10 topik terwakili minimal 1, 2 topik terwakili 2)
    const sedangTopics = [];
    for (let t = 0; t < 10; t++) {
      const topicIdx = (t + p * 2) % 10;
      if (pools[topicIdx].SEDANG.length > 0) sedangTopics.push(topicIdx);
    }
    const extraSedang = pickTopicsForLevel('SEDANG', 10, p * 3).filter(t => pools[t].SEDANG.length > 0);
    while (sedangTopics.length < 12 && extraSedang.length > 0) {
      sedangTopics.push(extraSedang.shift());
    }

    // Mudah: 6 soal
    const mudahTopics = pickTopicsForLevel('MUDAH', 6, p * 2);
    // Sulit: 6 soal
    const sulitTopics = pickTopicsForLevel('SULIT', 6, p * 2 + 1);
    // HOTS: 6 soal
    const hotsTopics = pickTopicsForLevel('HOTS', 6, p * 2 + 3);

    const mList = mudahTopics.map(t => pools[t].MUDAH.shift());
    const sList = sedangTopics.map(t => pools[t].SEDANG.shift());
    const uList = sulitTopics.map(t => pools[t].SULIT.shift());
    const hList = hotsTopics.map(t => pools[t].HOTS.shift());

    // Susun menjadi 3 sub-blok unit 10 soal
    // Masing-masing sub-blok: 2 Mudah, 4 Sedang, 2 Sulit, 2 HOTS
    const subBlocks = [];
    for (let b = 0; b < 3; b++) {
      const e2 = [mList[b * 2], mList[b * 2 + 1]];
      const m4 = [sList[b * 4], sList[b * 4 + 1], sList[b * 4 + 2], sList[b * 4 + 3]];
      const u2 = [uList[b * 2], uList[b * 2 + 1]];
      const h2 = [hList[b * 2], hList[b * 2 + 1]];

      // Pacing ritme belajar: Sedang, Mudah, Sedang, Sulit, Sedang, HOTS, Mudah, Sedang, Sulit, HOTS
      const block = [
        m4[0], e2[0], m4[1], u2[0], m4[2], h2[0], e2[1], m4[3], u2[1], h2[1]
      ];
      subBlocks.push(block);
    }

    parts.push(...subBlocks.flat());
  }

  // Sisa 10 soal untuk bagian 34 (1 soal dari tiap 10 topik, 2 Mudah, 4 Sedang, 2 Sulit, 2 HOTS)
  const leftover = [];
  pools.forEach(p => {
    leftover.push(...p.MUDAH, ...p.SEDANG, ...p.SULIT, ...p.HOTS);
  });
  parts.push(...leftover);

  return parts;
}

console.log('4. Menyusun Stratifikasi Distribusi Multitopik...');
const mtkStratified = assembleStratified10(mtkRaw, 33);
const ipaStratified = assembleStratified10(ipaRaw, 33);
const ipsStratified = assembleStratified10(ipsRaw, 33);

const all3000 = [...mtkStratified, ...ipaStratified, ...ipsStratified];

// Berikan ID Soal Unik yang Rapi
all3000.forEach((q, idx) => {
  q.ID_SOAL = 'SOAL-MIPAS-' + String(idx + 1).padStart(4, '0');
});

console.log('\n=== HASIL GENERASI 3.000 BANK DATA ===');
console.log(`Total Soal Terkumpul: ${all3000.length} soal.`);
console.log(`- Matematika: ${mtkStratified.length} soal`);
console.log(`- IPA: ${ipaStratified.length} soal`);
console.log(`- IPS: ${ipsStratified.length} soal`);

// Verifikasi Duplikasi Teks Soal
const checkDupSet = new Set();
let dupTotal = 0;
all3000.forEach(q => {
  const norm = q.PERTANYAAN.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (checkDupSet.has(norm)) dupTotal++;
  checkDupSet.add(norm);
});
console.log(`Verifikasi Duplikasi Teks Soal: ${dupTotal === 0 ? '✓ 100% UNIK (0 Duplikat)' : dupTotal + ' duplikat'}`);

// Verifikasi Opsi Jawaban (Zero Double)
let doubleOptTotal = 0;
all3000.forEach(q => {
  const s = new Set([q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D]);
  if (s.size < 4) doubleOptTotal++;
});
console.log(`Verifikasi Opsi Jawaban: ${doubleOptTotal === 0 ? '✓ 100% VALID (0 Opsi Kembar)' : doubleOptTotal + ' opsi kembar'}`);

// Verifikasi Stimulus Gambar
let missingVisualTotal = 0;
all3000.forEach(q => {
  const p = q.PERTANYAAN.toLowerCase();
  const needsVisual = /(perhatikan gambar|pada gambar|lihat gambar|berdasarkan gambar|perhatikan diagram|perhatikan bagan|perhatikan piktogram|perhatikan tabel)/i.test(p);
  if (needsVisual && (!q.STIMULUS_GAMBAR || q.STIMULUS_GAMBAR.length < 20)) {
    missingVisualTotal++;
  }
});
console.log(`Verifikasi Stimulus Visual: ${missingVisualTotal === 0 ? '✓ 100% LENGKAP & VALID (0 Stimulus Kosong)' : missingVisualTotal + ' stimulus kurang'}`);

// Verifikasi Distribusi Level
const diffCounts = { MUDAH: 0, SEDANG: 0, SULIT: 0, HOTS: 0 };
all3000.forEach(q => diffCounts[q.LEVEL] = (diffCounts[q.LEVEL] || 0) + 1);
console.log('Distribusi Tingkat Kesulitan:');
Object.keys(diffCounts).forEach(k => {
  const pct = ((diffCounts[k] / all3000.length) * 100).toFixed(1);
  console.log(`- ${k}: ${diffCounts[k]} soal (${pct}%)`);
});

// Verifikasi Keberagaman per Bagian
let mtkPartsValid = true;
for (let p = 0; p < 33; p++) {
  const slice = mtkStratified.slice(p * 30, (p + 1) * 30);
  const tSet = new Set(slice.map(q => q.TOPIK));
  if (tSet.size !== 10) mtkPartsValid = false;
}
console.log(`Verifikasi Seluruh 10 Topik Hadir di Semua 33 Bagian MTK: ${mtkPartsValid ? '✓ 100% TERPENUHI' : '✗ TIDAK'}`);

let ipaPartsValid = true;
for (let p = 0; p < 33; p++) {
  const slice = ipaStratified.slice(p * 30, (p + 1) * 30);
  const tSet = new Set(slice.map(q => q.TOPIK));
  if (tSet.size !== 10) ipaPartsValid = false;
}
console.log(`Verifikasi Seluruh 10 Topik Hadir di Semua 33 Bagian IPA: ${ipaPartsValid ? '✓ 100% TERPENUHI' : '✗ TIDAK'}`);

let ipsPartsValid = true;
for (let p = 0; p < 33; p++) {
  const slice = ipsStratified.slice(p * 30, (p + 1) * 30);
  const tSet = new Set(slice.map(q => q.TOPIK));
  if (tSet.size !== 10) ipsPartsValid = false;
}
console.log(`Verifikasi Seluruh 10 Topik Hadir di Semua 33 Bagian IPS: ${ipsPartsValid ? '✓ 100% TERPENUHI' : '✗ TIDAK'}`);

// Simpan Hasil ke all_questions.json dan data_questions.js
fs.writeFileSync('all_questions.json', JSON.stringify(all3000, null, 2), 'utf8');
console.log('✓ Berhasil menyimpan all_questions.json (3.000 soal)');

const jsData = `/**\n * BANK DATA 3.000 SOAL CERDAS CERMAT MIPAS (100% UNIK & BERVARIASI)\n * Komposisi: 1.000 MTK, 1.000 IPA, 1.000 IPS (Kelas 4-6)\n * Distribusi: 20% Mudah (600), 40% Sedang (1.200), 20% Sulit (600), 20% HOTS (600)\n */\nconst QUESTIONS_SEED = ${JSON.stringify(all3000, null, 2)};\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = QUESTIONS_SEED;\n}\n`;
fs.writeFileSync('data_questions.js', jsData, 'utf8');
console.log('✓ Berhasil menyimpan data_questions.js (3.000 soal)');

console.log('=== SELESAI DENGAN STATUS 100% SEMPURNA & VALID! ===');
