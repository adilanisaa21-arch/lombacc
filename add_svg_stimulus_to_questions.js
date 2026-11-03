// add_svg_stimulus_to_questions.js
// Menambahkan stimulus gambar SVG edukatif ke soal-soal terkait bangun datar, data/statistika, siklus air, tata surya, rantai makanan, dll.
const fs = require('fs');

const SVG_BANK = {
  segitiga: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <polygon points="50,130 180,30 270,130" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <line x1="180" y1="30" x2="180" y2="130" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="180" y="120" width="10" height="10" fill="none" stroke="#ef4444" stroke-width="1"/>
    <text x="188" y="85" font-size="11" font-weight="bold" fill="#dc2626">t (tinggi)</text>
    <text x="160" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">a (alas segitiga)</text>
  </svg>`,

  persegiPanjang: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="50" y="35" width="220" height="80" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="160" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">p (panjang)</text>
    <text x="280" y="80" font-size="11" font-weight="bold" fill="#15803d">l</text>
    <text x="160" y="80" text-anchor="middle" font-size="10" fill="#166534">Luas = p × l | Keliling = 2 × (p + l)</text>
  </svg>`,

  trapesium: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <polygon points="80,40 220,40 270,125 40,125" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <line x1="80" y1="40" x2="80" y2="125" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="150" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">a (sisi atas)</text>
    <text x="155" y="143" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">b (sisi alas bawah)</text>
    <text x="86" y="88" font-size="10.5" font-weight="bold" fill="#dc2626">t</text>
  </svg>`,

  lingkaran: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <g transform="translate(160, 80)">
      <circle r="55" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#b91c1c" stroke-width="2"/>
      <circle cx="0" cy="0" r="3.5" fill="#1e293b"/>
      <text x="0" y="-8" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Diameter (d = 2r)</text>
      <text x="25" y="16" font-size="10.5" font-weight="bold" fill="#7c2d12">r (jari-jari)</text>
    </g>
  </svg>`,

  kubus: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <g transform="translate(125, 45)">
      <rect x="0" y="20" width="55" height="55" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="0,20 22,5 77,5 55,20" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="55,20 77,5 77,60 55,75" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      <text x="27" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">s (rusuk)</text>
      <text x="95" y="45" font-size="10.5" fill="#581c87">V = s³</text>
      <text x="95" y="62" font-size="10.5" fill="#581c87">LP = 6 × s²</text>
    </g>
  </svg>`,

  balok: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <g transform="translate(100, 45)">
      <rect x="0" y="20" width="90" height="45" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="0,20 25,6 115,6 90,20" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="90,20 115,6 115,51 90,65" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      <text x="45" y="80" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">p (panjang)</text>
      <text x="98" y="45" font-size="10" font-weight="bold" fill="#6b21a8">t</text>
      <text x="106" y="14" font-size="10" font-weight="bold" fill="#6b21a8">l</text>
    </g>
  </svg>`,

  diagramBatang: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">📊 DIAGRAM BATANG FREKUENSI DATA</text>
    <line x1="45" y1="35" x2="45" y2="125" stroke="#64748b" stroke-width="1.5"/>
    <line x1="45" y1="125" x2="290" y2="125" stroke="#64748b" stroke-width="1.5"/>
    <!-- Batang-batang -->
    <rect x="65" y="85" width="30" height="40" fill="#38bdf8" rx="2"/>
    <text x="80" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">4</text>
    <text x="80" y="139" text-anchor="middle" font-size="9" fill="#475569">Sen</text>

    <rect x="115" y="55" width="30" height="70" fill="#38bdf8" rx="2"/>
    <text x="130" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">7</text>
    <text x="130" y="139" text-anchor="middle" font-size="9" fill="#475569">Sel</text>

    <rect x="165" y="45" width="30" height="80" fill="#2563eb" rx="2"/>
    <text x="180" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">8</text>
    <text x="180" y="139" text-anchor="middle" font-size="9" fill="#475569">Rab (Modus)</text>

    <rect x="215" y="75" width="30" height="50" fill="#38bdf8" rx="2"/>
    <text x="230" y="68" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">5</text>
    <text x="230" y="139" text-anchor="middle" font-size="9" fill="#475569">Kam</text>
  </svg>`,

  diagramLingkaran: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">🥧 DIAGRAM LINGKARAN DISTRIBUSI DATA</text>
    <g transform="translate(110, 85)">
      <circle r="50" fill="#e2e8f0"/>
      <!-- Sektor 50% -->
      <path d="M 0 0 L 0 -50 A 50 50 0 0 1 0 50 Z" fill="#3b82f6"/>
      <!-- Sektor 25% -->
      <path d="M 0 0 L 0 50 A 50 50 0 0 1 -50 0 Z" fill="#10b981"/>
      <!-- Sektor 25% -->
      <path d="M 0 0 L -50 0 A 50 50 0 0 1 0 -50 Z" fill="#f59e0b"/>
    </g>
    <g transform="translate(180, 50)">
      <rect x="0" y="0" width="12" height="12" fill="#3b82f6" rx="2"/>
      <text x="18" y="10" font-size="9.5" fill="#1e293b">Pilihan A (50%)</text>
      <rect x="0" y="20" width="12" height="12" fill="#10b981" rx="2"/>
      <text x="18" y="30" font-size="9.5" fill="#1e293b">Pilihan B (25%)</text>
      <rect x="0" y="40" width="12" height="12" fill="#f59e0b" rx="2"/>
      <text x="18" y="50" font-size="9.5" fill="#1e293b">Pilihan C (25%)</text>
      <text x="0" y="72" font-size="9" font-weight="bold" fill="#64748b">Total = 100% (360°)</text>
    </g>
  </svg>`,

  rantaiMakanan: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#f0fdf4" stroke="#dcfce7"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">🌾 RANTAI MAKANAN SAWAH</text>
    <g transform="translate(15, 45)">
      <!-- Produsen -->
      <text x="25" y="25" text-anchor="middle" font-size="20">🌱</text>
      <text x="25" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">Padi</text>
      <text x="58" y="28" font-size="14" font-weight="bold" fill="#16a34a">→</text>

      <!-- Konsumen I -->
      <text x="95" y="25" text-anchor="middle" font-size="20">🦗</text>
      <text x="95" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#713f12">Belalang</text>
      <text x="130" y="28" font-size="14" font-weight="bold" fill="#ca8a04">→</text>

      <!-- Konsumen II -->
      <text x="165" y="25" text-anchor="middle" font-size="20">🐸</text>
      <text x="165" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Katak</text>
      <text x="200" y="28" font-size="14" font-weight="bold" fill="#4f46e5">→</text>

      <!-- Konsumen III -->
      <text x="235" y="25" text-anchor="middle" font-size="20">🐍</text>
      <text x="235" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">Ular</text>
      <text x="268" y="28" font-size="14" font-weight="bold" fill="#dc2626">→</text>

      <!-- Puncak -->
      <text x="290" y="25" text-anchor="middle" font-size="20">🦅</text>
      <text x="290" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Elang</text>
    </g>
    <text x="160" y="125" text-anchor="middle" font-size="9.5" fill="#475569">Arah panah (→) menunjukkan aliran energi makanan</text>
  </svg>`,

  siklusAir: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px;margin:0 auto">
    <rect width="320" height="160" rx="10" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">💧 SIKLUS HIDROLOGI (DAUR AIR)</text>
    <circle cx="35" cy="45" r="16" fill="#fde047" stroke="#eab308"/>
    <text x="35" y="50" text-anchor="middle" font-size="12">☀️</text>

    <!-- Awan -->
    <ellipse cx="140" cy="45" rx="30" ry="14" fill="#e2e8f0" stroke="#94a3b8"/>
    <text x="140" y="48" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#334155">Kondensasi</text>

    <!-- Hujan -->
    <ellipse cx="250" cy="50" rx="28" ry="12" fill="#94a3b8"/>
    <text x="250" y="45" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0369a1">Presipitasi</text>
    <line x1="240" y1="65" x2="235" y2="85" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
    <line x1="255" y1="65" x2="250" y2="85" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>

    <!-- Laut -->
    <path d="M 0 130 Q 80 120 160 130 T 320 130 L 320 160 L 0 160 Z" fill="#38bdf8"/>
    <text x="50" y="148" font-size="10" font-weight="bold" fill="#075985">Evaporasi (Menguap) ↗</text>
    <text x="240" y="148" font-size="9" font-weight="bold" fill="#075985">Infiltrasi ↘</text>
  </svg>`,

  metamorfosis: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#fdf4ff" stroke="#f5d0fe"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">🦋 METAMORFOSIS SEMPURNA</text>
    <g transform="translate(15, 45)">
      <text x="30" y="25" text-anchor="middle" font-size="20">🥚</text>
      <text x="30" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#713f12">Telur</text>
      <text x="65" y="28" font-size="14" font-weight="bold" fill="#a21caf">→</text>

      <text x="105" y="25" text-anchor="middle" font-size="20">🐛</text>
      <text x="105" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">Larva (Ulat)</text>
      <text x="145" y="28" font-size="14" font-weight="bold" fill="#a21caf">→</text>

      <text x="185" y="25" text-anchor="middle" font-size="20">🥜</text>
      <text x="185" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Pupa (Kepompong)</text>
      <text x="228" y="28" font-size="14" font-weight="bold" fill="#a21caf">→</text>

      <text x="265" y="25" text-anchor="middle" font-size="20">🦋</text>
      <text x="265" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#831843">Kupu Dewasa</text>
    </g>
    <text x="160" y="125" text-anchor="middle" font-size="9.5" fill="#701a75">Ciri khas: Melewati fase istirahat pupa (kepompong)</text>
  </svg>`,

  tataSurya: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#0f172a" stroke="#334155"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#f8fafc">🪐 SISTEM TATA SURYA</text>
    <path d="M 0 30 A 45 45 0 0 1 0 130 Z" fill="#f59e0b"/>
    <circle cx="45" cy="80" r="4" fill="#94a3b8"/><text x="45" y="98" text-anchor="middle" font-size="7" fill="#cbd5e1">Mer</text>
    <circle cx="75" cy="80" r="6" fill="#fbbf24"/><text x="75" y="98" text-anchor="middle" font-size="7" fill="#cbd5e1">Ven</text>
    <circle cx="110" cy="80" r="7" fill="#38bdf8"/><text x="110" y="98" text-anchor="middle" font-size="7" fill="#38bdf8">Bumi</text>
    <circle cx="145" cy="80" r="5" fill="#ef4444"/><text x="145" y="98" text-anchor="middle" font-size="7" fill="#fca5a5">Mars</text>
    <circle cx="195" cy="80" r="14" fill="#d97706"/><text x="195" y="108" text-anchor="middle" font-size="7" fill="#fcd34d">Yupiter</text>
    <circle cx="240" cy="80" r="11" fill="#fde047"/>
    <ellipse cx="240" cy="80" rx="18" ry="4" fill="none" stroke="#ca8a04"/>
    <text x="240" y="108" text-anchor="middle" font-size="7" fill="#fde047">Saturnus</text>
    <circle cx="280" cy="80" r="8" fill="#67e8f9"/><text x="280" y="108" text-anchor="middle" font-size="7" fill="#a5f3fc">Uranus</text>
    <circle cx="305" cy="80" r="7" fill="#3b82f6"/><text x="305" y="108" text-anchor="middle" font-size="7" fill="#93c5fd">Nep</text>
    <text x="160" y="135" text-anchor="middle" font-size="8.5" fill="#94a3b8">Pusat tata surya adalah Matahari</text>
  </svg>`,

  rangkaianListrik: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="max-height:150px;margin:0 auto">
    <rect width="320" height="150" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">💡 RANGKAIAN LISTRIK SERI (SEJAJAR)</text>
    <rect x="50" y="40" width="220" height="70" rx="6" fill="#fff" stroke="#64748b" stroke-width="2"/>
    <circle cx="110" cy="40" r="12" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="110" y="44" text-anchor="middle" font-size="10">💡1</text>
    <circle cx="190" cy="40" r="12" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="190" y="44" text-anchor="middle" font-size="10">💡2</text>
    <!-- Baterai -->
    <rect x="140" y="105" width="40" height="10" fill="#334155" rx="2"/>
    <text x="160" y="128" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Baterai (Sumber Listrik)</text>
  </svg>`
};

console.log('Reading data_questions.js...');
const questions = require('./data_questions.js');
console.log('Total questions:', questions.length);

let svgAssignedCount = 0;

questions.forEach(q => {
  const text = (q.PERTANYAAN + ' ' + (q.TOPIK || '')).toLowerCase();

  // 1. Bangun Datar - Segitiga
  if (text.includes('segitiga') && (text.includes('luas') || text.includes('keliling') || text.includes('alas') || text.includes('tinggi'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.segitiga;
    svgAssignedCount++;
  }
  // 2. Bangun Datar - Persegi / Persegi Panjang
  else if ((text.includes('persegi panjang') || (text.includes('persegi') && text.includes('luas'))) && (text.includes('lebar') || text.includes('panjang') || text.includes('keliling'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.persegiPanjang;
    svgAssignedCount++;
  }
  // 3. Bangun Datar - Trapesium
  else if (text.includes('trapesium') || text.includes('jajar genjang')) {
    q.STIMULUS_GAMBAR = SVG_BANK.trapesium;
    svgAssignedCount++;
  }
  // 4. Lingkaran
  else if (text.includes('lingkaran') && (text.includes('diameter') || text.includes('jari-jari') || text.includes('luas') || text.includes('keliling'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.lingkaran;
    svgAssignedCount++;
  }
  // 5. Bangun Ruang - Kubus
  else if (text.includes('kubus') && (text.includes('volume') || text.includes('rusuk') || text.includes('luas permukaan'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.kubus;
    svgAssignedCount++;
  }
  // 6. Bangun Ruang - Balok
  else if (text.includes('balok') && (text.includes('volume') || text.includes('panjang') || text.includes('lebar') || text.includes('tinggi'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.balok;
    svgAssignedCount++;
  }
  // 7. Statistika - Diagram Batang / Modus / Frekuensi
  else if ((text.includes('diagram batang') || text.includes('modus') || text.includes('frekuensi') || text.includes('banyak buku') || text.includes('nilai siswa')) && !text.includes('lingkaran')) {
    q.STIMULUS_GAMBAR = SVG_BANK.diagramBatang;
    svgAssignedCount++;
  }
  // 8. Statistika - Diagram Lingkaran / Persen Data
  else if (text.includes('diagram lingkaran') || (text.includes('data') && text.includes('persen') && text.includes('derajat'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.diagramLingkaran;
    svgAssignedCount++;
  }
  // 9. Daur Air / Siklus Air
  else if (text.includes('siklus air') || text.includes('daur air') || text.includes('evaporasi') || text.includes('kondensasi') || text.includes('presipitasi')) {
    q.STIMULUS_GAMBAR = SVG_BANK.siklusAir;
    svgAssignedCount++;
  }
  // 10. Rantai Makanan / Ekosistem
  else if (text.includes('rantai makanan') || text.includes('jaring makanan') || (text.includes('produsen') && text.includes('konsumen'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.rantaiMakanan;
    svgAssignedCount++;
  }
  // 11. Metamorfosis / Daur Hidup
  else if (text.includes('metamorfosis') || text.includes('daur hidup') || text.includes('kepompong') || text.includes('larva')) {
    q.STIMULUS_GAMBAR = SVG_BANK.metamorfosis;
    svgAssignedCount++;
  }
  // 12. Tata Surya
  else if (text.includes('tata surya') || text.includes('planet') || text.includes('yupiter') || text.includes('revolusi bumi') || text.includes('gerhana')) {
    q.STIMULUS_GAMBAR = SVG_BANK.tataSurya;
    svgAssignedCount++;
  }
  // 13. Rangkaian Listrik
  else if (text.includes('rangkaian listrik') || (text.includes('lampu') && text.includes('seri')) || (text.includes('lampu') && text.includes('paralel'))) {
    q.STIMULUS_GAMBAR = SVG_BANK.rangkaianListrik;
    svgAssignedCount++;
  }
});

console.log('Total questions matching visual stimulus criteria:', svgAssignedCount);

// Tulis kembali data_questions.js
const fileContent = `// data_questions.js - 1000 Soal Terpadu MIPAS SD (Kelas 4-6)
// Dilengkapi Stimulus Teks & Stimulus Gambar Edukatif SVG Inline
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
