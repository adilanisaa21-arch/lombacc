// apply_contextual_svg_stimulus.js
// Mengisi STIMULUS_GAMBAR dengan diagram SVG yang 100% KONTEKSTUAL & AKURAT
// Setiap angka panjang, lebar, tinggi, rusuk, alas, tabel data, dan nama organisme DIAMBIL LANGSUNG DARI SOAL!
const fs = require('fs');

// =============================================================================
// GENERATOR SVG SPESIFIK & DINAMIS
// =============================================================================

function renderBalok(p, l, t, unit = 'cm', vol = null) {
  const isCariTinggi = t === '?' || !t;
  const tText = isCariTinggi ? 't = ?' : `${t} ${unit}`;
  const tColor = isCariTinggi ? '#dc2626' : '#6b21a8';

  return `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px;margin:0 auto">
    <rect width="380" height="180" rx="10" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5"/>
    <text x="190" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#581c87">📦 BANGUN RUANG BALOK</text>
    
    <g transform="translate(100, 48)">
      <!-- Sisi Depan -->
      <rect x="0" y="22" width="130" height="60" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <!-- Sisi Atas -->
      <polygon points="0,22 40,0 170,0 130,22" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <!-- Sisi Kanan -->
      <polygon points="130,22 170,0 170,60 130,82" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      
      <!-- Label Dimensi Nyata Sesuai Soal -->
      <!-- Panjang (Depan Bawah) -->
      <text x="65" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">p = ${p} ${unit}</text>
      <!-- Lebar (Samping Atas) -->
      <text x="160" y="10" font-size="11" font-weight="bold" fill="#6b21a8">l = ${l} ${unit}</text>
      <!-- Tinggi (Tegak Kanan) -->
      <text x="175" y="55" font-size="12" font-weight="bold" fill="${tColor}">${tText}</text>
      
      ${vol ? `<text x="65" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">V = ${vol} ${unit}³</text>` : ''}
    </g>
  </svg>`;
}

function renderKubus(s, unit = 'cm') {
  return `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px;margin:0 auto">
    <rect width="360" height="180" rx="10" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5"/>
    <text x="180" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#581c87">🎲 BANGUN RUANG KUBUS</text>
    
    <g transform="translate(130, 48)">
      <rect x="0" y="25" width="80" height="80" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="0,25 35,0 115,0 80,25" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="80,25 115,0 115,80 80,105" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      
      <!-- Label Rusuk Nyata Sesuai Soal -->
      <text x="40" y="122" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">s = ${s} ${unit}</text>
      <text x="120" y="55" font-size="11.5" font-weight="bold" fill="#6b21a8">${s} ${unit}</text>
      <text x="100" y="10" font-size="11" font-weight="bold" fill="#6b21a8">${s} ${unit}</text>
    </g>
  </svg>`;
}

function renderSegitiga(alas, tinggi, unit = 'cm') {
  return `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px;margin:0 auto">
    <rect width="360" height="180" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
    <text x="180" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534">📐 BANGUN DATAR SEGITIGA</text>
    
    <g transform="translate(60, 40)">
      <polygon points="0,100 130,10 240,100" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <!-- Garis Tinggi Tegak Lurus Putus-Putus -->
      <line x1="130" y1="10" x2="130" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      <!-- Siku-siku -->
      <rect x="130" y="90" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
      
      <!-- Keterangan Angka Nyata Sesuai Soal -->
      <text x="140" y="60" font-size="12" font-weight="bold" fill="#dc2626">t = ${tinggi} ${unit}</text>
      <text x="120" y="118" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">alas (a) = ${alas} ${unit}</text>
    </g>
  </svg>`;
}

function renderPersegiPanjang(p, l, unit = 'cm') {
  return `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px;margin:0 auto">
    <rect width="360" height="170" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
    <text x="180" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534">📐 BANGUN DATAR PERSEGI PANJANG</text>
    
    <g transform="translate(60, 42)">
      <rect x="0" y="0" width="240" height="90" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <!-- Panjang -->
      <text x="120" y="-8" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#15803d">Panjang = ${p} ${unit}</text>
      <text x="120" y="108" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#15803d">${p} ${unit}</text>
      <!-- Lebar -->
      <text x="248" y="50" font-size="12" font-weight="bold" fill="#15803d">l = ${l} ${unit}</text>
      <text x="-8" y="50" text-anchor="end" font-size="12" font-weight="bold" fill="#15803d">${l} ${unit}</text>
    </g>
  </svg>`;
}

function renderLingkaran(nilai, jenis = 'd', unit = 'cm') {
  const isD = jenis === 'd';
  return `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px;margin:0 auto">
    <rect width="360" height="180" rx="10" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.5"/>
    <text x="180" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9a3412">⭕ BANGUN DATAR LINGKARAN</text>
    
    <g transform="translate(180, 100)">
      <circle r="60" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#1e293b"/>
      
      ${isD ? `
        <!-- Diameter -->
        <line x1="-60" y1="0" x2="60" y2="0" stroke="#b91c1c" stroke-width="2.5"/>
        <text x="0" y="-8" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b91c1c">Diameter (d) = ${nilai} ${unit}</text>
        <text x="0" y="20" text-anchor="middle" font-size="10.5" fill="#7c2d12">Jari-jari (r) = ${nilai / 2} ${unit}</text>
      ` : `
        <!-- Jari-jari -->
        <line x1="0" y1="0" x2="60" y2="0" stroke="#047857" stroke-width="2.5"/>
        <text x="30" y="-8" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">r = ${nilai} ${unit}</text>
        <text x="0" y="25" text-anchor="middle" font-size="10.5" fill="#7c2d12">Diameter (d) = ${nilai * 2} ${unit}</text>
      `}
    </g>
  </svg>`;
}

function renderDiagramBatangPeminjaman(data) {
  // data: [{hari: 'Senin', jml: 14}, {hari: 'Selasa', jml: 9}, ...]
  const maxVal = Math.max(...data.map(d => d.jml), 10);
  const maxBarH = 75;

  return `<svg viewBox="0 0 380 185" xmlns="http://www.w3.org/2000/svg" style="max-height:185px;margin:0 auto">
    <rect width="380" height="185" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="190" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">📊 DIAGRAM PEMINJAMAN BUKU PERPUSTAKAAN</text>
    
    <!-- Sumbu X & Y -->
    <line x1="50" y1="35" x2="50" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <line x1="50" y1="140" x2="350" y2="140" stroke="#64748b" stroke-width="1.5"/>
    
    <!-- Batang Tiap Hari -->
    ${data.map((d, i) => {
      const h = Math.round((d.jml / maxVal) * maxBarH);
      const x = 75 + (i * 65);
      const y = 140 - h;
      const isMax = d.jml === maxVal;
      const barColor = isMax ? '#2563eb' : '#38bdf8';
      return `
        <rect x="${x}" y="${y}" width="42" height="${h}" fill="${barColor}" rx="3" stroke="#0284c7" stroke-width="1"/>
        <text x="${x + 21}" y="${y - 6}" text-anchor="middle" font-size="12" font-weight="bold" fill="${isMax ? '#1e40af' : '#0369a1'}">${d.jml}</text>
        <text x="${x + 21}" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">${d.hari}</text>
      `;
    }).join('')}
    
    <text x="190" y="174" text-anchor="middle" font-size="9.5" fill="#64748b">Angka di atas batang menunjukkan jumlah peminjaman buku</text>
  </svg>`;
}

function renderRantaiMakananSpesifik(rantaiStr) {
  // pecah rantai berdasarkan panah →
  const organisms = rantaiStr.split(/\s*→\s*/).map(s => s.trim()).filter(Boolean);
  if (organisms.length < 2) return null;

  const count = organisms.length;
  const boxW = count <= 3 ? 95 : (count <= 4 ? 75 : 62);
  const totalW = 420;
  const startX = 15;
  const gap = count <= 3 ? 35 : (count <= 4 ? 20 : 12);

  return `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="420" height="160" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
    <text x="210" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534">🌾 ALIRAN ENERGI RANTAI MAKANAN</text>
    
    <g transform="translate(0, 48)">
      ${organisms.map((org, i) => {
        const x = startX + i * (boxW + gap);
        const peran = i === 0 ? 'Produsen' : (i === count - 1 ? 'Puncak' : `Konsumen ${i}`);
        const boxFill = i === 0 ? '#dcfce7' : (i === count - 1 ? '#fee2e2' : '#fef9c3');
        const strokeColor = i === 0 ? '#16a34a' : (i === count - 1 ? '#dc2626' : '#ca8a04');
        const textColor = i === 0 ? '#14532d' : (i === count - 1 ? '#7f1d1d' : '#713f12');

        const arrow = i < count - 1 ? `
          <text x="${x + boxW + (gap / 2)}" y="35" text-anchor="middle" font-size="16" font-weight="bold" fill="#16a34a">→</text>
        ` : '';

        return `
          <rect x="${x}" y="10" width="${boxW}" height="52" rx="6" fill="${boxFill}" stroke="${strokeColor}" stroke-width="1.5"/>
          <text x="${x + boxW / 2}" y="32" text-anchor="middle" font-size="${count > 4 ? 9 : 10.5}" font-weight="bold" fill="${textColor}">${org}</text>
          <text x="${x + boxW / 2}" y="50" text-anchor="middle" font-size="8.5" fill="${strokeColor}">(${peran})</text>
          ${arrow}
        `;
      }).join('')}
    </g>
    <text x="210" y="142" text-anchor="middle" font-size="10" fill="#475569">Tanda panah (→) artinya "dimakan oleh" sekaligus arah aliran energi</text>
  </svg>`;
}

function renderSiklusAirNomor() {
  return `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" style="max-height:175px;margin:0 auto">
    <rect width="380" height="175" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="190" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">💧 BAGAN SIKLUS HIDROLOGI (DAUR AIR)</text>
    
    <!-- Matahari -->
    <circle cx="45" cy="50" r="18" fill="#fde047" stroke="#eab308" stroke-width="1.5"/>
    <text x="45" y="55" text-anchor="middle" font-size="14">☀️</text>

    <!-- (1) Evaporasi -->
    <g transform="translate(60, 95)">
      <circle cx="15" cy="0" r="10" fill="#ef4444"/>
      <text x="15" y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">1</text>
      <line x1="30" y1="15" x2="30" y2="-15" stroke="#f59e0b" stroke-width="2"/>
      <polyline points="26,-10 30,-16 34,-10" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="38" y="5" font-size="9" font-weight="bold" fill="#d97706">Evaporasi</text>
    </g>

    <!-- (2) Kondensasi -->
    <g transform="translate(160, 42)">
      <circle cx="15" cy="-8" r="10" fill="#ef4444"/>
      <text x="15" y="-4" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">2</text>
      <ellipse cx="45" cy="10" rx="30" ry="14" fill="#e2e8f0" stroke="#94a3b8"/>
      <text x="45" y="14" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#334155">Kondensasi</text>
    </g>

    <!-- (3) Presipitasi -->
    <g transform="translate(260, 45)">
      <circle cx="15" cy="-8" r="10" fill="#ef4444"/>
      <text x="15" y="-4" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">3</text>
      <ellipse cx="45" cy="10" rx="26" ry="12" fill="#94a3b8"/>
      <line x1="35" y1="28" x2="30" y2="46" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="50" y1="28" x2="45" y2="46" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="45" y="60" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">Presipitasi</text>
    </g>

    <!-- (4) Infiltrasi & Laut -->
    <path d="M 0 135 Q 90 125 180 135 T 380 135 L 380 175 L 0 175 Z" fill="#38bdf8"/>
    <text x="60" y="158" font-size="10" font-weight="bold" fill="#075985">Laut / Air Permukaan</text>
    
    <g transform="translate(260, 138)">
      <circle cx="0" cy="8" r="10" fill="#ef4444"/>
      <text x="0" y="12" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">4</text>
      <text x="15" y="12" font-size="9" font-weight="bold" fill="#0c4a6e">Infiltrasi (Meresap ke tanah)</text>
    </g>
  </svg>`;
}

// =============================================================================
// PROSES PENYALURAN STIMULUS GAMBAR KE SOAL
// =============================================================================

console.log('Loading questions from data_questions.js...');
const questions = require('./data_questions.js');

let updatedCount = 0;
let resetCount = 0;

questions.forEach(q => {
  const text = q.PERTANYAAN;
  const textLower = text.toLowerCase();
  let assignedSvg = null;

  // 1. BALOK (Panjang, Lebar, Tinggi nyata)
  if (textLower.includes('balok')) {
    const mP1 = text.match(/(\d+)\s*(cm|m|dm)\s*[×x*]\s*(\d+)\s*(cm|m|dm)\s*[×x*]\s*(\d+)\s*(cm|m|dm)/i);
    const mP2 = text.match(/panjang(?:nya)?\s*(\d+)\s*(cm|m|dm).*?lebar(?:nya)?\s*(\d+)\s*(cm|m|dm).*?tinggi(?:nya)?\s*(\d+)\s*(cm|m|dm)/i);
    const mCariTinggi = text.match(/volume\s*(?:balok)?\s*(\d+)\s*(?:cm³|m³|cm3|m3).*?panjang(?:nya)?\s*(\d+)\s*(cm|m|dm).*?lebar(?:nya)?\s*(\d+)\s*(cm|m|dm)/i) ||
                        text.match(/panjang(?:nya)?\s*(\d+)\s*(cm|m|dm).*?lebar(?:nya)?\s*(\d+)\s*(cm|m|dm).*?volume\s*(\d+)\s*(?:cm³|m³|cm3|m3)/i);

    if (mP1) {
      assignedSvg = renderBalok(mP1[1], mP1[3], mP1[5], mP1[2]);
    } else if (mP2) {
      assignedSvg = renderBalok(mP2[1], mP2[2], mP2[3], mP2[4]);
    } else if (mCariTinggi) {
      // Jika mencari tinggi dengan volume diketahui
      if (mCariTinggi[1] && mCariTinggi[2] && mCariTinggi[3]) {
        assignedSvg = renderBalok(mCariTinggi[2], mCariTinggi[3], '?', mCariTinggi[4] || 'cm', mCariTinggi[1]);
      }
    }
  }

  // 2. KUBUS (Rusuk / Sisi nyata)
  else if (textLower.includes('kubus')) {
    const mS = text.match(/(?:rusuk|sisi|berusuk|bersisi)\s*(\d+)\s*(cm|dm|m)/i);
    if (mS) {
      assignedSvg = renderKubus(mS[1], mS[2]);
    }
  }

  // 3. SEGITIGA (Alas & Tinggi nyata)
  else if (textLower.includes('segitiga') && (textLower.includes('alas') || textLower.includes('tinggi'))) {
    const mA = text.match(/(?:alas|beralas)\s*(\d+)\s*(cm|m)?/i);
    const mT = text.match(/(?:tinggi)\s*(\d+)\s*(cm|m)?/i);
    if (mA && mT) {
      assignedSvg = renderSegitiga(mA[1], mT[1], mA[2] || mT[2] || 'cm');
    }
  }

  // 4. PERSEGI PANJANG (Panjang & Lebar nyata)
  else if (textLower.includes('persegi panjang') && (textLower.includes('panjang') || textLower.includes('lebar'))) {
    const mPP1 = text.match(/panjang(?:nya)?\s*(\d+)\s*(cm|m)?\s*dan\s*lebar(?:nya)?\s*(\d+)\s*(cm|m)?/i);
    const mPP2 = text.match(/(\d+)\s*(?:cm|m)\s*[×x*]\s*(\d+)\s*(?:cm|m)/i);
    if (mPP1) {
      assignedSvg = renderPersegiPanjang(mPP1[1], mPP1[3], mPP1[2] || mPP1[4] || 'cm');
    } else if (mPP2) {
      assignedSvg = renderPersegiPanjang(mPP2[1], mPP2[2], 'cm');
    }
  }

  // 5. LINGKARAN (Diameter atau Jari-jari nyata)
  else if (textLower.includes('lingkaran')) {
    const mD = text.match(/diameter(?:nya)?\s*(\d+)\s*(cm|m)?/i);
    const mR = text.match(/jari-jari(?:nya)?\s*(\d+)\s*(cm|m)?/i);
    if (mD) {
      assignedSvg = renderLingkaran(mD[1], 'd', mD[2] || 'cm');
    } else if (mR) {
      assignedSvg = renderLingkaran(mR[1], 'r', mR[2] || 'cm');
    }
  }

  // 6. TABEL PEMINJAMAN BUKU PERPUSTAKAAN (Diagram Batang nyata per hari & angka)
  else if (text.includes('Tabel Peminjaman Buku Perpustakaan')) {
    const matches = [...text.matchAll(/-\s*(\w+):\s*(\d+)\s*buku/g)];
    if (matches.length > 0) {
      const data = matches.map(m => ({ hari: m[1], jml: parseInt(m[2], 10) }));
      assignedSvg = renderDiagramBatangPeminjaman(data);
    }
  }

  // 7. RANTAI MAKANAN SPESIFIK (Organisme persis dari teks soal)
  else if (text.includes('→')) {
    const mRantai = text.match(/([A-Z][a-zA-Z\s]+(?:\s*→\s*[A-Z][a-zA-Z\s]+)+)/);
    if (mRantai) {
      // Ambil baris rantai saja (jangan campur baris pertanyaan berikutnya)
      const firstLine = mRantai[1].split('\n')[0].replace(/^(?:Pada|Jika|Berdasarkan|Perhatikan)\s*(?:rantai makanan|ekosistem)?\s*/i, '').trim();
      assignedSvg = renderRantaiMakananSpesifik(firstLine);
    }
  }

  // 8. SIKLUS AIR / DAUR HIDROLOGI
  else if (textLower.includes('air hujan meresap ke dalam tanah') || textLower.includes('siklus hidrologi')) {
    assignedSvg = renderSiklusAirNomor();
  }

  // Terapkan hasil:
  if (assignedSvg) {
    q.STIMULUS_GAMBAR = assignedSvg;
    updatedCount++;
  } else {
    // RESET ke null jika tidak ada angka/data konkret yang cocok,
    // sehingga TIDAK ADA LAGI GAMBAR GENERIK YANG TIDAK NYAMBUNG!
    if (q.STIMULUS_GAMBAR) resetCount++;
    q.STIMULUS_GAMBAR = null;
  }
});

console.log(`Proses selesai:`);
console.log(`- ${updatedCount} soal kini memiliki stimulus gambar SVG 100% KONTEKSTUAL & SESUAI ANGKA/DATA SOAL.`);
console.log(`- ${resetCount} gambar generik lama yang tidak cocok telah DIBERSIHKAN (di-reset ke null).`);

// Tulis kembali data_questions.js
const fileContent = `// data_questions.js - 1000 Soal Terpadu MIPAS SD (Kelas 4-6)
// Dilengkapi Stimulus Gambar SVG Kontekstual (Angka & Data Nyata dari Soal)
// Auto-generated

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
