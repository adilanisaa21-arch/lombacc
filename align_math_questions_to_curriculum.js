// align_math_questions_to_curriculum.js
// Menyesuaikan seluruh 348 soal matematika di data_questions.js
// agar persis mengikuti 21 materi resmi:
// KELAS 4:
// 1. Bilangan Cacah sampai 10.000
// 2. Kelipatan dan Faktor
// 3. Pecahan
// 4. Pengukuran
// 5. Pola Gambar dan Pola Bilangan
// 6. Geometri (Bangun Datar)
// 7. Piktogram dan Diagram Batang
//
// KELAS 5:
// 1. Bilangan Cacah sampai 100.000 (dan 1.000.000)
// 2. KPK dan FPB
// 3. Bilangan Pecahan
// 4. Keliling dan Luas Bangun Datar
// 5. Sudut
// 6. Volume Bangun Ruang
// 7. Data dan Diagram
//
// KELAS 6:
// 1. Pecahan dan Desimal Lanjutan
// 2. Rasio dan Skala
// 3. Kubus dan Balok (Luas Permukaan & Volume)
// 4. Debit
// 5. Koordinat Kartesius
// 6. Pengolahan Data (Mean, Median, Modus)
// 7. Peluang

const fs = require('fs');
const questions = require('./data_questions.js');

console.log('Total questions in database:', questions.length);

const mtkQuestions = questions.filter(q => q.MAPEL === 'MATEMATIKA');
console.log('Total MTK questions to update:', mtkQuestions.length);

// Fungsi render SVG Kontekstual untuk soal visual baru
function svgBusurSudut(derajat, jenis) {
  return `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
    <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">📐 PENGUKURAN SUDUT (${derajat}°)</text>
    <g transform="translate(100, 45)">
      <line x1="20" y1="70" x2="110" y2="70" stroke="#b45309" stroke-width="2.5"/>
      ${derajat === 90 ? `
        <line x1="20" y1="70" x2="20" y2="5" stroke="#b45309" stroke-width="2.5"/>
        <rect x="20" y="55" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      ` : (derajat < 90 ? `
        <line x1="20" y1="70" x2="80" y2="20" stroke="#b45309" stroke-width="2.5"/>
        <path d="M 45 70 A 25 25 0 0 0 40 50" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      ` : `
        <line x1="60" y1="70" x2="10" y2="20" stroke="#b45309" stroke-width="2.5"/>
        <path d="M 85 70 A 25 25 0 0 0 45 50" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      `)}
      <text x="60" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">${derajat}° (${jenis})</text>
    </g>
  </svg>`;
}

function svgPola(angkaArray, aturan) {
  return `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" style="max-height:140px;margin:0 auto">
    <rect width="340" height="140" rx="10" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5"/>
    <text x="170" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#6b21a8">🧩 POLA BILANGAN</text>
    <g transform="translate(15, 38)">
      ${angkaArray.map((num, i) => {
        const x = i * 75 + 30;
        const isTanya = num === '?';
        return `
          <circle cx="${x}" cy="30" r="22" fill="${isTanya ? '#fbcfe8' : '#f3e8ff'}" stroke="${isTanya ? '#db2777' : '#9333ea'}" stroke-width="2" ${isTanya ? 'stroke-dasharray="3,2"' : ''}/>
          <text x="${x}" cy="36" text-anchor="middle" font-size="15" font-weight="bold" fill="${isTanya ? '#9d174d' : '#581c87'}">${num}</text>
          ${i < angkaArray.length - 1 ? `<text x="${x + 38}" y="35" text-anchor="middle" font-size="16" font-weight="bold" fill="#9333ea">→</text>` : ''}
        `;
      }).join('')}
    </g>
    <text x="170" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Aturan: ${aturan}</text>
  </svg>`;
}

function svgKartesiusTitik(x, y, label) {
  return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px;margin:0 auto">
    <rect width="320" height="170" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">🗺️ KOORDINAT KARTESIUS: TITIK ${label}(${x}, ${y})</text>
    <g transform="translate(50, 30)">
      <!-- Sumbu -->
      <line x1="0" y1="100" x2="180" y2="100" stroke="#0f172a" stroke-width="2"/>
      <line x1="20" y1="10" x2="20" y2="110" stroke="#0f172a" stroke-width="2"/>
      <text x="185" y="104" font-size="10" font-weight="bold" fill="#0f172a">X</text>
      <text x="15" y="5" font-size="10" font-weight="bold" fill="#0f172a">Y</text>
      <!-- Titik -->
      <line x1="${20 + x * 25}" y1="100" x2="${20 + x * 25}" y2="${100 - y * 20}" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <line x1="20" y1="${100 - y * 20}" x2="${20 + x * 25}" y2="${100 - y * 20}" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <circle cx="${20 + x * 25}" cy="${100 - y * 20}" r="4.5" fill="#dc2626"/>
      <text x="${28 + x * 25}" y="${95 - y * 20}" font-size="11" font-weight="bold" fill="#dc2626">${label}(${x}, ${y})</text>
      <text x="${20 + x * 25}" y="114" text-anchor="middle" font-size="9" fill="#334155">${x}</text>
      <text x="8" y="${104 - y * 20}" font-size="9" fill="#334155">${y}</text>
    </g>
    <text x="160" y="156" text-anchor="middle" font-size="9.5" fill="#64748b">Format koordinat selalu (x mendatar, y tegak)</text>
  </svg>`;
}

function svgPeluangKoinDadu(jenis, info) {
  return `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">🎲 PELUANG SEDERHANA: ${jenis.toUpperCase()}</text>
    <g transform="translate(60, 42)">
      ${jenis === 'dadu' ? `
        <rect x="0" y="0" width="55" height="55" rx="8" fill="#fff" stroke="#e11d48" stroke-width="2"/>
        <circle cx="27" cy="27" r="5" fill="#dc2626"/>
        <text x="27" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#881337">Dadu (1-6)</text>
      ` : `
        <circle cx="30" cy="28" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="30" y="33" text-anchor="middle" font-size="12" font-weight="bold" fill="#713f12">KOIN</text>
        <text x="30" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#713f12">Angka/Gambar</text>
      `}
    </g>
    <g transform="translate(145, 45)">
      <text x="0" y="16" font-size="11" font-weight="bold" fill="#9f1239">${info.tanya}</text>
      <text x="0" y="34" font-size="11" font-weight="bold" fill="#be123c">Peluang: ${info.peluang}</text>
      <text x="0" y="52" font-size="9" fill="#475569">Total Kemungkinan: ${info.total}</text>
    </g>
  </svg>`;
}

// 1. Pemetaan & Pembaruan Soal Matematika
let mappedCount = 0;

mtkQuestions.forEach(q => {
  const k = Number(q.KELAS);
  const text = q.PERTANYAAN;
  const textLower = text.toLowerCase();
  const topikOld = q.TOPIK;

  // =========================================================================
  // KELAS 4
  // =========================================================================
  if (k === 4) {
    if (textLower.includes('piktogram') || textLower.includes('diagram batang') || textLower.includes('tabel peminjaman') || textLower.includes('diagram gambar')) {
      q.TOPIK = 'Piktogram dan Diagram Batang';
    } else if (textLower.includes('pola') || textLower.includes('lanjutan dari') || textLower.includes('barisan')) {
      q.TOPIK = 'Pola Gambar dan Pola Bilangan';
      const mPola = text.match(/(\d+),\s*(\d+),\s*(\d+),\s*(\d+)/);
      if (mPola && !q.STIMULUS_GAMBAR) {
        const selisih = Number(mPola[2]) - Number(mPola[1]);
        q.STIMULUS_GAMBAR = svgPola([mPola[1], mPola[2], mPola[3], '?'], `Lompat +${selisih}`);
      }
    } else if (textLower.includes('sudut') || textLower.includes('derajat') || textLower.includes('busur')) {
      q.TOPIK = 'Pengukuran';
      if (!q.STIMULUS_GAMBAR) {
        q.STIMULUS_GAMBAR = svgBusurSudut(90, 'Siku-siku');
      }
    } else if (textLower.includes('keliling') || textLower.includes('luas persegi') || textLower.includes('segitiga') || textLower.includes('persegi panjang') || textLower.includes('bangun datar')) {
      q.TOPIK = 'Geometri (Bangun Datar)';
    } else if (textLower.includes('panjang') || textLower.includes('berat') || textLower.includes('waktu') || textLower.includes('jam') || textLower.includes('kg') || textLower.includes('meter') || textLower.includes('pengukuran')) {
      q.TOPIK = 'Pengukuran';
    } else if (textLower.includes('pecahan') || textLower.includes('senilai')) {
      q.TOPIK = 'Pecahan';
    } else if (textLower.includes('kelipatan') || textLower.includes('faktor') || textLower.includes('prima') || textLower.includes('kpk') || textLower.includes('fpb')) {
      q.TOPIK = 'Kelipatan dan Faktor';
    } else {
      q.TOPIK = 'Bilangan Cacah sampai 10.000';
    }
  }

  // =========================================================================
  // KELAS 5
  // =========================================================================
  else if (k === 5) {
    if (textLower.includes('sudut') || textLower.includes('derajat') || textLower.includes('busur')) {
      q.TOPIK = 'Sudut';
      if (textLower.includes('siku-siku')) q.STIMULUS_GAMBAR = svgBusurSudut(90, 'Siku-siku');
      else if (textLower.includes('lancip')) q.STIMULUS_GAMBAR = svgBusurSudut(45, 'Lancip');
      else if (textLower.includes('tumpul')) q.STIMULUS_GAMBAR = svgBusurSudut(120, 'Tumpul');
    } else if (textLower.includes('kubus satuan') || (textLower.includes('volume') && (textLower.includes('kubus') || textLower.includes('balok') || textLower.includes('prisma')))) {
      q.TOPIK = 'Volume Bangun Ruang';
    } else if (textLower.includes('piktogram') || textLower.includes('diagram') || textLower.includes('tabel') || textLower.includes('data')) {
      q.TOPIK = 'Data dan Diagram';
    } else if (textLower.includes('keliling') || textLower.includes('luas') || textLower.includes('lingkaran') || textLower.includes('trapesium') || textLower.includes('jajar genjang') || textLower.includes('segitiga') || textLower.includes('bangun datar')) {
      q.TOPIK = 'Keliling dan Luas Bangun Datar';
    } else if (textLower.includes('pecahan') || textLower.includes('desimal')) {
      q.TOPIK = 'Bilangan Pecahan';
    } else if (textLower.includes('kpk') || textLower.includes('fpb') || textLower.includes('faktorisasi')) {
      q.TOPIK = 'KPK dan FPB';
    } else {
      q.TOPIK = 'Bilangan Cacah sampai 100.000 (dan 1.000.000)';
    }
  }

  // =========================================================================
  // KELAS 6
  // =========================================================================
  else if (k === 6) {
    if (textLower.includes('koordinat') || textLower.includes('kartesius') || textLower.includes('sumbu x') || textLower.includes('titik')) {
      q.TOPIK = 'Koordinat Kartesius';
      q.STIMULUS_GAMBAR = svgKartesiusTitik(3, 2, 'A');
    } else if (textLower.includes('peluang') || textLower.includes('dadu') || textLower.includes('koin') || textLower.includes('kemungkinan')) {
      q.TOPIK = 'Peluang';
      q.STIMULUS_GAMBAR = svgPeluangKoinDadu('dadu', { tanya: 'Mata Dadu 1 dari 6', peluang: '1/6', total: '6 sisi' });
    } else if (textLower.includes('debit') || textLower.includes('liter/menit') || textLower.includes('liter/detik') || textLower.includes('kran') || textLower.includes('aliran')) {
      q.TOPIK = 'Debit';
    } else if (textLower.includes('mean') || textLower.includes('median') || textLower.includes('modus') || textLower.includes('rata-rata') || textLower.includes('pengolahan data')) {
      q.TOPIK = 'Pengolahan Data (Mean, Median, Modus)';
    } else if (textLower.includes('rasio') || textLower.includes('skala') || textLower.includes('perbandingan') || textLower.includes('senilai') || textLower.includes('berbalik nilai')) {
      q.TOPIK = 'Rasio dan Skala';
    } else if (textLower.includes('kubus') || textLower.includes('balok') || textLower.includes('luas permukaan') || textLower.includes('volume gabungan') || textLower.includes('bangun ruang')) {
      q.TOPIK = 'Kubus dan Balok (Luas Permukaan & Volume)';
    } else {
      q.TOPIK = 'Pecahan dan Desimal Lanjutan';
    }
  }

  mappedCount++;
});

console.log('Successfully mapped topics for', mappedCount, 'MTK questions.');

// Verifikasi distribusi baru
[4, 5, 6].forEach(k => {
  console.log(`\n=== DISTRIBUSI TOPIK KELAS ${k} BARU ===`);
  const inK = mtkQuestions.filter(q => Number(q.KELAS) === k);
  const counts = {};
  inK.forEach(q => { counts[q.TOPIK] = (counts[q.TOPIK] || 0) + 1; });
  Object.entries(counts).forEach(([t, n]) => console.log(`- ${t}: ${n} soal`));
});

// Tulis kembali data_questions.js
const fileContent = `// data_questions.js - 1000 Soal Terpadu MIPAS SD (Kelas 4-6)
// Disesuaikan dengan Kurikulum Matematika & IPAS Resmi 2026
// Dilengkapi Stimulus Gambar SVG Kontekstual
// Auto-generated by align_math_questions_to_curriculum.js

const QUESTIONS_SEED = ${JSON.stringify(questions, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS_SEED;
}
`;

fs.writeFileSync('data_questions.js', fileContent, 'utf-8');
console.log('data_questions.js updated successfully!');

// Tulis all_questions.json
fs.writeFileSync('all_questions.json', JSON.stringify(questions, null, 2), 'utf-8');
console.log('all_questions.json updated successfully!');
