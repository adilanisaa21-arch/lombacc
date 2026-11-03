// generator_complete.js
const fs = require('fs');
const { enrichedBase } = require('./build_1000_questions.js');

const allQuestions = [...enrichedBase];
let counter = enrichedBase.length;

function addQuestion({ mapel, kelas, topik, babak = 'UMUM', level = 'SEDANG', tipe = 'PG', teks, stimulus, opsi, kunci, pembahasan, diagnosa }) {
  counter++;
  const num = String(counter).padStart(4, '0');
  const code = mapel === 'MATEMATIKA' ? 'MTK' : mapel;
  const id = `PRIO-${code}${kelas}-${num}`;

  let fullTeks = teks;
  if (stimulus) {
    fullTeks = `[STIMULUS]\n${stimulus}\n\n[PERTANYAAN]\n${teks}`;
  }

  allQuestions.push({
    ID_SOAL: id,
    MAPEL: mapel,
    KELAS: Number(kelas),
    TOPIK: topik,
    BABAK: babak,
    LEVEL: level,
    TIPE: tipe,
    PERTANYAAN: fullTeks,
    OPSI_A: String(opsi[0]),
    OPSI_B: String(opsi[1]),
    OPSI_C: String(opsi[2]),
    OPSI_D: String(opsi[3]),
    KUNCI: kunci,
    PEMBAHASAN: pembahasan,
    DIAGNOSA: diagnosa || 'Perhatikan konsep dasar materi, lakukan perhitungan bertahap, dan cermati informasi pada stimulus.',
    STATUS: 'AKTIF'
  });
}

console.log('Building questions starting from count:', allQuestions.length);

// Helper for shuffling options while keeping track of correct key
function makeOptions(correctVal, w1, w2, w3, seed) {
  const arr = [
    { val: correctVal, isCorrect: true },
    { val: w1, isCorrect: false },
    { val: w2, isCorrect: false },
    { val: w3, isCorrect: false }
  ];
  // Deterministic rotation based on seed
  const offset = (seed || 0) % 4;
  const rotated = arr.slice(offset).concat(arr.slice(0, offset));
  const keys = ['A', 'B', 'C', 'D'];
  const correctKey = keys[rotated.findIndex(x => x.isCorrect)];
  return {
    opsi: rotated.map(x => x.val),
    kunci: correctKey
  };
}

module.exports = {
  allQuestions,
  addQuestion,
  makeOptions,
  getCounter: () => counter
};
