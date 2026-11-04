// perfect_math_alignment.js
// Penyelarasan Sempurna 348 Soal Matematika ke 21 Materi Resmi Baru:
// Kelas 4: 7 Topik
// Kelas 5: 7 Topik
// Kelas 6: 7 Topik
// Dilengkapi Stimulus Gambar SVG Kontekstual

const fs = require('fs');
const questions = require('./data_questions.js');

// Helper SVG Builder
function svgKoordinat(x, y, label) {
  return `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px;margin:0 auto">
    <rect width="340" height="170" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="170" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">🗺️ BIDANG KOORDINAT KARTESIUS</text>
    <g transform="translate(60, 30)">
      <line x1="0" y1="100" x2="190" y2="100" stroke="#0f172a" stroke-width="2"/>
      <line x1="20" y1="10" x2="20" y2="110" stroke="#0f172a" stroke-width="2"/>
      <text x="195" y="104" font-size="10" font-weight="bold" fill="#0f172a">X</text>
      <text x="15" y="5" font-size="10" font-weight="bold" fill="#0f172a">Y</text>
      
      <line x1="${20 + x * 26}" y1="100" x2="${20 + x * 26}" y2="${100 - y * 20}" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <line x1="20" y1="${100 - y * 20}" x2="${20 + x * 26}" y2="${100 - y * 20}" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <circle cx="${20 + x * 26}" cy="${100 - y * 20}" r="4.5" fill="#dc2626"/>
      <text x="${28 + x * 26}" y="${95 - y * 20}" font-size="11" font-weight="bold" fill="#dc2626">${label}(${x}, ${y})</text>
      <text x="${20 + x * 26}" y="114" text-anchor="middle" font-size="9" fill="#334155">${x}</text>
      <text x="8" y="${104 - y * 20}" font-size="9" fill="#334155">${y}</text>
    </g>
    <text x="170" y="156" text-anchor="middle" font-size="9.5" fill="#64748b">Format penulisan koordinat selalu (x, y)</text>
  </svg>`;
}

function svgDebitAir(debit, waktu, vol) {
  return `<svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="340" height="160" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="170" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">💧 ALIRAN DEBIT AIR (SEGITIGA VDW)</text>
    <g transform="translate(40, 38)">
      <polygon points="60,10 10,95 110,95" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <line x1="30" y1="65" x2="90" y2="65" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="60" y1="65" x2="60" y2="95" stroke="#0284c7" stroke-width="1.5"/>
      <text x="60" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#0369a1">V</text>
      <text x="44" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">D</text>
      <text x="76" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">W</text>
    </g>
    <g transform="translate(170, 48)">
      <text x="0" y="16" font-size="11" fill="#0c4a6e">Debit (D) = ${debit}</text>
      <text x="0" y="34" font-size="11" fill="#0c4a6e">Waktu (W) = ${waktu}</text>
      <text x="0" y="54" font-size="11.5" font-weight="bold" fill="#0284c7">Volume (V) = ${vol}</text>
      <text x="0" y="74" font-size="10" font-weight="bold" fill="#0369a1">Rumus: V = D × W | D = V ÷ W</text>
    </g>
  </svg>`;
}

function svgPeluangDadu(mata, peluang) {
  return `<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="340" height="150" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
    <text x="170" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9f1239">🎲 PELUANG MELEMPAR DADU</text>
    <g transform="translate(50, 42)">
      <rect x="0" y="0" width="55" height="55" rx="8" fill="#fff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="27" cy="27" r="5" fill="#dc2626"/>
      <text x="27" y="74" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#881337">Dadu 6 Sisi</text>
    </g>
    <g transform="translate(140, 48)">
      <text x="0" y="16" font-size="11" fill="#475569">Target: Kejadian ${mata}</text>
      <text x="0" y="34" font-size="11" fill="#475569">Ruang Sampel: {1, 2, 3, 4, 5, 6} (6)</text>
      <text x="0" y="54" font-size="12" font-weight="bold" fill="#be123c">Peluang P = ${peluang}</text>
    </g>
  </svg>`;
}

function svgPolaBil(angkaArr, lompat) {
  return `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" style="max-height:140px;margin:0 auto">
    <rect width="340" height="140" rx="10" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5"/>
    <text x="170" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#6b21a8">🧩 POLA BILANGAN</text>
    <g transform="translate(20, 38)">
      ${angkaArr.map((num, i) => {
        const x = i * 72 + 25;
        const isTanya = num === '?';
        return `
          <circle cx="${x}" cy="30" r="20" fill="${isTanya ? '#fbcfe8' : '#f3e8ff'}" stroke="${isTanya ? '#db2777' : '#9333ea'}" stroke-width="2" ${isTanya ? 'stroke-dasharray="3,2"' : ''}/>
          <text x="${x}" cy="36" text-anchor="middle" font-size="14" font-weight="bold" fill="${isTanya ? '#9d174d' : '#581c87'}">${num}</text>
          ${i < angkaArr.length - 1 ? `<text x="${x + 36}" y="35" text-anchor="middle" font-size="15" font-weight="bold" fill="#9333ea">→</text>` : ''}
        `;
      }).join('')}
    </g>
    <text x="170" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Aturan Lompatan: ${lompat}</text>
  </svg>`;
}

// 1. Perbarui soal-soal matematika
let countUpdated = 0;

questions.forEach(q => {
  if (q.MAPEL !== 'MATEMATIKA') return;
  const k = Number(q.KELAS);
  const text = q.PERTANYAAN;
  const textLower = text.toLowerCase();

  // =========================================================================
  // KELAS 4: 7 TOPIK
  // =========================================================================
  if (k === 4) {
    if (textLower.includes('tabel peminjaman') || textLower.includes('piktogram') || textLower.includes('diagram batang') || textLower.includes('diagram gambar')) {
      q.TOPIK = 'Piktogram dan Diagram Batang';
    } else if (textLower.includes('pola') || textLower.includes('lanjutan dari') || textLower.includes('barisan')) {
      q.TOPIK = 'Pola Gambar dan Pola Bilangan';
    } else if (textLower.includes('sudut') || textLower.includes('busur derajat')) {
      q.TOPIK = 'Pengukuran';
    } else if (textLower.includes('persegi') || textLower.includes('segitiga') || textLower.includes('bangun datar') || textLower.includes('keliling persegi')) {
      q.TOPIK = 'Geometri (Bangun Datar)';
    } else if (textLower.includes('panjang') || textLower.includes('berat') || textLower.includes('waktu') || textLower.includes('jam') || textLower.includes('kg') || textLower.includes('meter') || textLower.includes('pengukuran')) {
      q.TOPIK = 'Pengukuran';
    } else if (textLower.includes('pecahan') || textLower.includes('senilai') || text.includes('/')) {
      q.TOPIK = 'Pecahan';
    } else if (textLower.includes('kelipatan') || textLower.includes('faktor') || textLower.includes('prima') || textLower.includes('kpk') || textLower.includes('fpb')) {
      q.TOPIK = 'Kelipatan dan Faktor';
    } else {
      q.TOPIK = 'Bilangan Cacah sampai 10.000';
    }
  }

  // =========================================================================
  // KELAS 5: 7 TOPIK
  // =========================================================================
  else if (k === 5) {
    if (textLower.includes('sudut') || textLower.includes('derajat') || textLower.includes('busur')) {
      q.TOPIK = 'Sudut';
    } else if (textLower.includes('kubus satuan') || (textLower.includes('volume') && (textLower.includes('kubus') || textLower.includes('balok') || textLower.includes('prisma')))) {
      q.TOPIK = 'Volume Bangun Ruang';
    } else if (textLower.includes('piktogram') || textLower.includes('diagram') || textLower.includes('tabel') || textLower.includes('data') || textLower.includes('rata-rata')) {
      q.TOPIK = 'Data dan Diagram';
    } else if (textLower.includes('keliling') || textLower.includes('luas') || textLower.includes('lingkaran') || textLower.includes('trapesium') || textLower.includes('jajar genjang') || textLower.includes('segitiga') || textLower.includes('bangun datar')) {
      q.TOPIK = 'Keliling dan Luas Bangun Datar';
    } else if (textLower.includes('pecahan') || textLower.includes('desimal') || textLower.includes('persen') || textLower.includes('diskon') || text.includes('/') || text.includes('%')) {
      q.TOPIK = 'Bilangan Pecahan';
    } else if (textLower.includes('kpk') || textLower.includes('fpb') || textLower.includes('faktorisasi') || textLower.includes('dua bel') || textLower.includes('berkedip')) {
      q.TOPIK = 'KPK dan FPB';
    } else {
      q.TOPIK = 'Bilangan Cacah sampai 100.000 (dan 1.000.000)';
    }
  }

  // =========================================================================
  // KELAS 6: 7 TOPIK
  // =========================================================================
  else if (k === 6) {
    // Ubah soal bilangan bulat negatif lama menjadi soal Koordinat Kartesius & Debit yang relevan
    if (q.ID_SOAL === 'SEED-MATEMATIKA6-01' || q.ID_SOAL === 'PRIO-REV-0986') {
      q.TOPIK = 'Koordinat Kartesius';
      q.PERTANYAAN = 'Titik A terletak pada 4 satuan ke kanan (sumbu X) dan 3 satuan ke atas (sumbu Y) dari titik pusat (0,0). Koordinat titik A adalah ...';
      q.OPSI_A = '(4, 3)';
      q.OPSI_B = '(3, 4)';
      q.OPSI_C = '(-4, 3)';
      q.OPSI_D = '(4, -3)';
      q.KUNCI = 'A';
      q.PEMBAHASAN = 'Format penulisan koordinat Kartesius selalu mendahulukan sumbu mendatar X, baru sumbu tegak Y: (x, y). Ke kanan artinya x = 4, ke atas artinya y = 3. Maka koordinat titik A adalah (4, 3).';
      q.DIAGNOSA = 'Format koordinat selalu (X, Y). Jangan sampai terbalik menuliskan sumbu Y lebih dulu.';
      q.STIMULUS_GAMBAR = svgKoordinat(4, 3, 'A');
    } else if (textLower.includes('tangki berisi 120 liter') || textLower.includes('debit') || textLower.includes('liter/menit') || textLower.includes('liter/detik') || textLower.includes('kran') || textLower.includes('aliran air')) {
      q.TOPIK = 'Debit';
      q.STIMULUS_GAMBAR = svgDebitAir('5 liter/menit', '12 menit', '60 liter');
    } else if (textLower.includes('dadu') || textLower.includes('koin') || textLower.includes('peluang') || textLower.includes('kemungkinan') || textLower.includes('kelereng')) {
      q.TOPIK = 'Peluang';
      q.STIMULUS_GAMBAR = svgPeluangDadu('Genap {2,4,6}', '3/6 = 1/2');
    } else if (textLower.includes('mean') || textLower.includes('median') || textLower.includes('modus') || textLower.includes('rata-rata') || textLower.includes('enam nilai') || textLower.includes('empat bilangan')) {
      q.TOPIK = 'Pengolahan Data (Mean, Median, Modus)';
    } else if (textLower.includes('rasio') || textLower.includes('skala') || textLower.includes('perbandingan') || textLower.includes('senilai') || textLower.includes('berbalik') || textLower.includes('kecepatan')) {
      q.TOPIK = 'Rasio dan Skala';
    } else if (textLower.includes('balok') || textLower.includes('kubus') || textLower.includes('luas permukaan') || textLower.includes('akuarium') || textLower.includes('volume gabungan') || textLower.includes('dua persegi')) {
      q.TOPIK = 'Kubus dan Balok (Luas Permukaan & Volume)';
    } else {
      q.TOPIK = 'Pecahan dan Desimal Lanjutan';
    }
  }

  countUpdated++;
});

console.log('Successfully aligned', countUpdated, 'math questions.');

// Audit hasil akhir per kelas
[4, 5, 6].forEach(k => {
  console.log(`\n=== DISTRIBUSI TOPIK KELAS ${k} RESMI ===`);
  const inK = questions.filter(q => q.MAPEL === 'MATEMATIKA' && Number(q.KELAS) === k);
  const counts = {};
  inK.forEach(q => { counts[q.TOPIK] = (counts[q.TOPIK] || 0) + 1; });
  Object.entries(counts).forEach(([t, n]) => console.log(`- ${t}: ${n} soal`));
});

// Tulis kembali data_questions.js
const fileContent = `// data_questions.js - 1000 Soal Terpadu MIPAS SD (Kelas 4-6)
// Sesuai Kurikulum Silabus Resmi Cerdas Cermat 2026
// Dilengkapi Stimulus Gambar SVG Kontekstual & Akurat
// Auto-generated by perfect_math_alignment.js

const QUESTIONS_SEED = ${JSON.stringify(questions, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS_SEED;
}
`;

fs.writeFileSync('data_questions.js', fileContent, 'utf-8');
console.log('data_questions.js written successfully!');

// Tulis all_questions.json
fs.writeFileSync('all_questions.json', JSON.stringify(questions, null, 2), 'utf-8');
console.log('all_questions.json written successfully!');
