// enrich_rangkuman_svgs.js
const fs = require('fs');

const dataFile = './data_rangkuman.js';
const data = require(dataFile).RANGKUMAN_DATA;

const EXTRA_SVGS = {
  'mtk-4-6': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">📐 BANGUN DATAR: PERSEGI, PERSEGI PANJANG &amp; SEGITIGA</text>
    <g transform="translate(25, 40)">
      <rect x="0" y="0" width="65" height="65" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
      <text x="32" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">Persegi</text>
      <text x="32" y="46" text-anchor="middle" font-size="8" fill="#2563eb">sisi (s)</text>
      <text x="32" y="80" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">L = s × s</text>
      <text x="32" y="94" text-anchor="middle" font-size="8" fill="#475569">K = 4 × s</text>
    </g>
    <g transform="translate(145, 40)">
      <rect x="0" y="8" width="105" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4"/>
      <text x="52" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Persegi Panjang</text>
      <text x="52" y="44" text-anchor="middle" font-size="8" fill="#b45309">p × l</text>
      <text x="52" y="80" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">L = p × l</text>
      <text x="52" y="94" text-anchor="middle" font-size="8" fill="#475569">K = 2 × (p + l)</text>
    </g>
    <g transform="translate(295, 40)">
      <polygon points="45,0 0,65 90,65" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <line x1="45" y1="0" x2="45" y2="65" stroke="#15803d" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="48" y="38" font-size="7.5" fill="#15803d">t</text>
      <text x="45" y="80" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#15803d">L = ½ × a × t</text>
      <text x="45" y="94" text-anchor="middle" font-size="8" fill="#475569">K = a + b + c</text>
    </g>
    <text x="210" y="148" text-anchor="middle" font-size="9" fill="#64748b">Ingat: Pada segitiga, tinggi (t) selalu tegak lurus (90°) dengan alas (a)!</text>
  </svg>`,
    caption: 'Visualisasi Rumus Luas dan Keliling Persegi, Persegi Panjang, dan Segitiga.'
  },

  'ipa-5-1': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">🌈 SIFAT CAHAYA: PEMBIASAN &amp; SPEKTRUM WARNA</text>
    <g transform="translate(25, 35)">
      <rect x="0" y="15" width="160" height="75" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
      <rect x="0" y="45" width="160" height="45" fill="#e0f2fe" opacity="0.8"/>
      <text x="80" y="32" text-anchor="middle" font-size="8.5" fill="#64748b">Udara (Kurang Rapat)</text>
      <text x="80" y="65" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">Air (Lebih Rapat)</text>
      <line x1="45" y1="20" x2="80" y2="45" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
      <line x1="80" y1="45" x2="105" y2="82" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
      <text x="80" y="104" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Pensil Tampak Patah (Pembiasan)</text>
    </g>
    <g transform="translate(210, 35)">
      <rect x="0" y="15" width="185" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="92" y="30" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">DISPERSI (PENGURAIAN CAHAYA)</text>
      <rect x="15" y="38" width="22" height="22" rx="3" fill="#ef4444"/><text x="26" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Me</text>
      <rect x="38" y="38" width="22" height="22" rx="3" fill="#f97316"/><text x="49" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Ji</text>
      <rect x="61" y="38" width="22" height="22" rx="3" fill="#eab308"/><text x="72" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Ku</text>
      <rect x="84" y="38" width="22" height="22" rx="3" fill="#22c55e"/><text x="95" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Hi</text>
      <rect x="107" y="38" width="22" height="22" rx="3" fill="#06b6d4"/><text x="118" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Bi</text>
      <rect x="130" y="38" width="22" height="22" rx="3" fill="#3b82f6"/><text x="141" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Ni</text>
      <rect x="153" y="38" width="22" height="22" rx="3" fill="#8b5cf6"/><text x="164" y="53" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">U</text>
      <text x="92" y="76" text-anchor="middle" font-size="8" fill="#64748b">Cahaya Putih → 7 Warna Pelangi</text>
      <text x="92" y="104" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Singkatan: ME-JI-KU-HI-BI-NI-U</text>
    </g>
    <text x="210" y="150" text-anchor="middle" font-size="8.5" fill="#64748b">Cahaya merambat lurus, menembus benda bening, dipantulkan, dibiaskan, &amp; diuraikan.</text>
  </svg>`,
    caption: 'Pembiasan Cahaya (pensil bengkok di air) dan Dispersi Cahaya (spektrum MEJIKUHIBINIU).'
  },

  'ipa-5-3': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">🫁 URUTAN SALURAN PENCERNAAN MAKANAN MANUSIA</text>
    <g transform="translate(10, 36)">
      <rect x="0" y="0" width="60" height="70" rx="6" fill="#fef3c7" stroke="#d97706"/>
      <text x="30" y="22" text-anchor="middle" font-size="14">👄</text>
      <text x="30" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">1. MULUT</text>
      <text x="30" y="52" text-anchor="middle" font-size="7.5" fill="#78350f">Mekanik (gigi)</text>
      <text x="30" y="62" text-anchor="middle" font-size="7.5" fill="#78350f">Kimiawi (ptialin)</text>
      <text x="65" y="38" font-size="12" font-weight="bold" fill="#ea580c">→</text>

      <rect x="73" y="0" width="64" height="70" rx="6" fill="#ffedd5" stroke="#ea580c"/>
      <text x="105" y="22" text-anchor="middle" font-size="14">🥖</text>
      <text x="105" y="38" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#9a3412">2. ESOPHAGUS</text>
      <text x="105" y="52" text-anchor="middle" font-size="7.5" fill="#7c2d12">Kerongkongan</text>
      <text x="105" y="62" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#c2410c">Gerak peristaltik</text>
      <text x="142" y="38" font-size="12" font-weight="bold" fill="#ea580c">→</text>

      <rect x="150" y="0" width="60" height="70" rx="6" fill="#fee2e2" stroke="#dc2626"/>
      <text x="180" y="22" text-anchor="middle" font-size="14">🥣</text>
      <text x="180" y="38" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">3. LAMBUNG</text>
      <text x="180" y="52" text-anchor="middle" font-size="7.5" fill="#7f1d1d">Asam HCl (kuman)</text>
      <text x="180" y="62" text-anchor="middle" font-size="7.5" fill="#7f1d1d">Pepsin &amp; Renin</text>
      <text x="215" y="38" font-size="12" font-weight="bold" fill="#ea580c">→</text>

      <rect x="223" y="0" width="60" height="70" rx="6" fill="#ecfdf5" stroke="#059669"/>
      <text x="253" y="22" text-anchor="middle" font-size="14">🧬</text>
      <text x="253" y="38" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#065f46">4. USUS HALUS</text>
      <text x="253" y="52" text-anchor="middle" font-size="7.5" fill="#047857">Penyerapan sari</text>
      <text x="253" y="62" text-anchor="middle" font-size="7.5" fill="#047857">Amilase/Lipase</text>
      <text x="288" y="38" font-size="12" font-weight="bold" fill="#ea580c">→</text>

      <rect x="296" y="0" width="56" height="70" rx="6" fill="#f0fdf4" stroke="#16a34a"/>
      <text x="324" y="22" text-anchor="middle" font-size="14">🧻</text>
      <text x="324" y="38" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#166534">5. USUS BESAR</text>
      <text x="324" y="52" text-anchor="middle" font-size="7.5" fill="#15803d">Serap air sisa</text>
      <text x="324" y="62" text-anchor="middle" font-size="7.5" fill="#15803d">Bakteri E. coli</text>
      <text x="357" y="38" font-size="12" font-weight="bold" fill="#ea580c">→</text>

      <rect x="365" y="0" width="38" height="70" rx="6" fill="#f1f5f9" stroke="#64748b"/>
      <text x="384" y="22" text-anchor="middle" font-size="14">🚪</text>
      <text x="384" y="42" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#334155">6. ANUS</text>
      <text x="384" y="58" text-anchor="middle" font-size="7" fill="#475569">Pembuangan</text>
    </g>
    <text x="210" y="142" text-anchor="middle" font-size="9" fill="#475569">Sari makanan diserap di Usus Halus, air diserap di Usus Besar, lalu dibuang lewat Anus.</text>
  </svg>`,
    caption: 'Urutan 6 Saluran Utama Pencernaan Manusia dan Enzim Pencernaan Penting.'
  },

  'ipa-6-4': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#f8fafc">🌕 POSISI GERHANA MATAHARI VS GERHANA BULAN</text>
    <g transform="translate(15, 36)">
      <rect x="0" y="0" width="185" height="85" rx="6" fill="#1e293b" stroke="#475569"/>
      <text x="92" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fde047">☀️ GERHANA MATAHARI</text>
      <text x="92" y="32" text-anchor="middle" font-size="8" fill="#94a3b8">(Matahari - Bulan - Bumi sejajar)</text>
      <circle cx="30" cy="55" r="14" fill="#fbbf24"/>
      <text x="30" y="58" text-anchor="middle" font-size="7" font-weight="bold" fill="#78350f">Mth</text>
      <circle cx="92" cy="55" r="7" fill="#94a3b8"/>
      <text x="92" y="57" text-anchor="middle" font-size="6" font-weight="bold" fill="#0f172a">Bln</text>
      <circle cx="152" cy="55" r="12" fill="#38bdf8"/>
      <text x="152" y="58" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#082f49">Bumi</text>
      <text x="92" y="80" text-anchor="middle" font-size="7.5" fill="#fef08a">Bulan di tengah menghalangi sinar matahari</text>
    </g>
    <g transform="translate(220, 36)">
      <rect x="0" y="0" width="185" height="85" rx="6" fill="#1e293b" stroke="#475569"/>
      <text x="92" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#cbd5e1">🌑 GERHANA BULAN</text>
      <text x="92" y="32" text-anchor="middle" font-size="8" fill="#94a3b8">(Matahari - Bumi - Bulan sejajar)</text>
      <circle cx="30" cy="55" r="14" fill="#fbbf24"/>
      <text x="30" y="58" text-anchor="middle" font-size="7" font-weight="bold" fill="#78350f">Mth</text>
      <circle cx="92" cy="55" r="12" fill="#38bdf8"/>
      <text x="92" y="58" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#082f49">Bumi</text>
      <circle cx="152" cy="55" r="7" fill="#f87171"/>
      <text x="152" y="57" text-anchor="middle" font-size="6" font-weight="bold" fill="#450a0a">Bln</text>
      <text x="92" y="80" text-anchor="middle" font-size="7.5" fill="#e2e8f0">Bumi di tengah menutupi sinar ke Bulan</text>
    </g>
    <text x="210" y="145" text-anchor="middle" font-size="9" fill="#94a3b8">Umbra = bayangan inti gelap total. Penumbra = bayangan kabur gerhana sebagian.</text>
  </svg>`,
    caption: 'Perbandingan Susunan Posisi Gerhana Matahari vs Gerhana Bulan.'
  },

  'ips-5-2': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">🦏 PEMBAGIAN FAUNA NUSANTARA (WALLACE &amp; WEBER)</text>
    <g transform="translate(15, 34)">
      <rect x="0" y="0" width="118" height="85" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="59" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">1. ASIATIS (BARAT)</text>
      <text x="59" y="32" text-anchor="middle" font-size="8" fill="#15803d">Sumatera, Jawa, Kalim.</text>
      <text x="59" y="52" text-anchor="middle" font-size="13">🐘 🦏 🐅 🦧</text>
      <text x="59" y="68" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#166534">Gajah, Badak, Harimau,</text>
      <text x="59" y="78" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#166534">Orangutan, Mamalia Besar</text>

      <line x1="126" y1="5" x2="126" y2="85" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="126" y="98" text-anchor="middle" font-size="7" font-weight="bold" fill="#dc2626">Garis Wallace</text>

      <rect x="135" y="0" width="120" height="85" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="195" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">2. PERALIHAN (TENGAH)</text>
      <text x="195" y="32" text-anchor="middle" font-size="8" fill="#854d0e">Sulawesi, NTB, NTT</text>
      <text x="195" y="52" text-anchor="middle" font-size="13">🦎 🐃 🐗 🦃</text>
      <text x="195" y="68" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#713f12">Komodo, Anoa,</text>
      <text x="195" y="78" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#713f12">Babirusa, Burung Maleo</text>

      <line x1="264" y1="5" x2="264" y2="85" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="264" y="98" text-anchor="middle" font-size="7" font-weight="bold" fill="#2563eb">Garis Weber</text>

      <rect x="272" y="0" width="118" height="85" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="331" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">3. AUSTRALIS (TIMUR)</text>
      <text x="331" y="32" text-anchor="middle" font-size="8" fill="#1d4ed8">Maluku &amp; Papua</text>
      <text x="331" y="52" text-anchor="middle" font-size="13">🦤 🦘 🦜 🦫</text>
      <text x="331" y="68" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#1e3a8a">Cenderawasih, Kasuari,</text>
      <text x="331" y="78" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#1e3a8a">Kanguru Pohon, Kuskus</text>
    </g>
    <text x="210" y="148" text-anchor="middle" font-size="8.5" fill="#475569">Garis Wallace membatasi Asiatis &amp; Peralihan. Garis Weber membatasi Peralihan &amp; Australis.</text>
  </svg>`,
    caption: 'Pembagian 3 Zona Persebaran Fauna di Indonesia berdasarkan Garis Wallace dan Weber.'
  },

  'ips-6-1': {
    svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">🌏 10 NEGARA ANGGOTA ASEAN (BANGKOK, 8 AGUSTUS 1967)</text>
    <g transform="translate(15, 34)">
      <rect x="0" y="0" width="185" height="85" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="92" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">🌟 5 NEGARA PENDIRI (1967):</text>
      <text x="15" y="36" font-size="8.5" fill="#1e3a8a">🇮🇩 <b>Indonesia</b> (Adam Malik)</text>
      <text x="15" y="50" font-size="8.5" fill="#1e3a8a">🇲🇾 <b>Malaysia</b> (Tun Abdul Razak)</text>
      <text x="15" y="64" font-size="8.5" fill="#1e3a8a">🇸🇬 <b>Singapura</b> (S. Rajaratnam)</text>
      <text x="105" y="36" font-size="8.5" fill="#1e3a8a">🇹🇭 <b>Thailand</b> (Thanat Khoman)</text>
      <text x="105" y="50" font-size="8.5" fill="#1e3a8a">🇵🇭 <b>Filipina</b> (Narciso Ramos)</text>
    </g>
    <g transform="translate(220, 34)">
      <rect x="0" y="0" width="185" height="85" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="92" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">🤝 5 ANGGOTA BERIKUTNYA:</text>
      <text x="15" y="36" font-size="8.5" fill="#475569">🇧🇳 <b>Brunei</b> (Ke-6: 1984)</text>
      <text x="15" y="50" font-size="8.5" fill="#475569">🇻🇳 <b>Vietnam</b> (Ke-7: 1995)</text>
      <text x="15" y="64" font-size="8.5" fill="#475569">🇱🇦 <b>Laos</b> &amp; 🇲🇲 <b>Myanmar</b> (1997)</text>
      <text x="15" y="78" font-size="8.5" fill="#475569">🇰🇭 <b>Kamboja</b> (Ke-10: 1999)</text>
    </g>
    <text x="210" y="145" text-anchor="middle" font-size="9" fill="#2563eb">Semboyan: Satu Visi, Satu Identitas, Satu Komunitas (One Vision, One Identity, One Community)</text>
  </svg>`,
    caption: '10 Negara Anggota ASEAN: 5 Tokoh & Negara Pendiri 1967 dan 5 Anggota Berikutnya.'
  }
};

let updatedCount = 0;
data.forEach(item => {
  if (EXTRA_SVGS[item.id]) {
    item.svgIllustration = EXTRA_SVGS[item.id].svg;
    item.captionGambar = EXTRA_SVGS[item.id].caption;
    updatedCount++;
    console.log(`Enriched SVG for: [${item.id}] ${item.judul}`);
  }
});

const fileContent = `// data_rangkuman.js - Rangkuman Materi Lengkap Cerdas Cermat SD (Kelas 4-6)
// Terbagi Rapi & Murni Menjadi 3 Mapel: MATEMATIKA, IPA, dan IPS
// 100% Sesuai Kurikulum Merdeka & Silabus Resmi Olimpiade Sains
// Auto-generated with interactive diagrams & child-friendly language

const RANGKUMAN_DATA = ${JSON.stringify(data, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANGKUMAN_DATA };
}
`;

fs.writeFileSync(dataFile, fileContent, 'utf8');
console.log(`Successfully injected ${updatedCount} extra SVGs into ${dataFile}!`);
