// Builder script to generate 1,000 questions based on the PDF priority syllabus
const fs = require('fs');

const questions = [];
let counter = 0;

function clean(s) {
  return String(s || '').trim();
}

function addQ({ mapel, kelas, topik, babak, level, tipe, teks, stimulus, opsi, kunci, pembahasan, diagnosa }) {
  counter++;
  const idNum = String(counter).padStart(4, '0');
  const codeMapel = mapel === 'MATEMATIKA' ? 'MTK' : mapel === 'IPA' ? 'IPA' : 'IPS';
  const id = `PRIO-${codeMapel}${kelas}-${idNum}`;

  let fullTeks = teks;
  if (stimulus) {
    fullTeks = `[STIMULUS]\n${stimulus}\n\n[PERTANYAAN]\n${teks}`;
  }

  // Ensure 4 unique options
  if (opsi.length !== 4) {
    throw new Error(`Soal ${id} harus memiliki tepat 4 opsi: ${teks}`);
  }

  questions.push({
    ID_SOAL: id,
    MAPEL: mapel,
    KELAS: Number(kelas),
    TOPIK: topik,
    BABAK: babak || 'UMUM',
    LEVEL: level || 'SEDANG',
    TIPE: tipe || 'PG',
    PERTANYAAN: fullTeks,
    OPSI_A: opsi[0],
    OPSI_B: opsi[1],
    OPSI_C: opsi[2],
    OPSI_D: opsi[3],
    KUNCI: kunci,
    PEMBAHASAN: pembahasan,
    DIAGNOSA: diagnosa || 'Perhatikan konsep dasar materi, lakukan perhitungan bertahap, dan cermati informasi pada stimulus.',
    STATUS: 'AKTIF'
  });
}

console.log('Generating 1000 prioritized questions...');
