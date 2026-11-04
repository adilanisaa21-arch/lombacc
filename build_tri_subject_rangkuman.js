// build_tri_subject_rangkuman.js
// Membangun Rangkuman Materi Terpadu Kurikulum Merdeka yang Terbagi Jelas Menjadi 3 Mapel:
// 1. MATEMATIKA (21 Modul: 7 Kelas 4, 7 Kelas 5, 7 Kelas 6)
// 2. IPA (14 Modul: 4 Kelas 4, 5 Kelas 5, 5 Kelas 6)
// 3. IPS (14 Modul: 4 Kelas 4, 5 Kelas 5, 5 Kelas 6)
// TOTAL: 49 Modul Lengkap dengan Bahasa Ramah Anak & Ilustrasi Edukatif Inline SVG

const fs = require('fs');

// Membaca modul Matematika yang sudah sempurna dari data_rangkuman.js
const currentData = require('./data_rangkuman.js').RANGKUMAN_DATA;
const mtkModules = currentData.filter(m => m.mapel === 'MATEMATIKA');
console.log('Existing MTK modules found:', mtkModules.length);

// Koleksi SVG untuk IPA dan IPS
const SVG_SCIENCE = {
  fotosintesis: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px">
    <rect width="420" height="170" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">🌿 DAPUR FOTOSINTESIS TUMBUHAN HIJAU</text>
    <g transform="translate(30, 38)">
      <!-- Bahan Masuk -->
      <rect x="0" y="15" width="105" height="65" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="52" y="34" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e3a8a">BAHAN:</text>
      <text x="52" y="50" text-anchor="middle" font-size="9" fill="#1d4ed8">• Air (H₂O) dari akar</text>
      <text x="52" y="64" text-anchor="middle" font-size="9" fill="#1d4ed8">• Gas CO₂ dari udara</text>

      <text x="125" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="#16a34a">+</text>

      <!-- Klorofil & Matahari -->
      <circle cx="175" cy="48" r="32" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="175" y="42" text-anchor="middle" font-size="14">☀️</text>
      <text x="175" y="58" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Klorofil Daun</text>

      <text x="225" y="52" text-anchor="middle" font-size="18" font-weight="bold" fill="#16a34a">→</text>

      <!-- Hasil Keluar -->
      <rect x="245" y="15" width="120" height="65" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="305" y="34" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#14532d">HASIL MASAKAN:</text>
      <text x="305" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">🍯 Glukosa (Energi)</text>
      <text x="305" y="66" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">💨 Oksigen (O₂) Segar</text>
    </g>
    <text x="210" y="145" text-anchor="middle" font-size="10.5" fill="#475569">Persamaan: Air + Karbon Dioksida + Cahaya Matahari → Karbohidrat/Glukosa + Oksigen</text>
  </svg>`,

  perubahanWujud: `<svg viewBox="0 0 420 175" xmlns="http://www.w3.org/2000/svg" style="max-height:175px">
    <rect width="420" height="175" rx="12" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#115e59">🧊 SEGITIGA PERUBAHAN WUJUD ZAT</text>
    <rect x="30" y="110" width="75" height="36" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
    <text x="67" y="133" text-anchor="middle" font-size="11" font-weight="bold" fill="#312e81">🧊 PADAT</text>
    <rect x="315" y="110" width="75" height="36" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="352" y="133" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e3a8a">💧 CAIR</text>
    <rect x="175" y="38" width="75" height="36" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="212" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">💨 GAS</text>
    <!-- Panah -->
    <text x="210" y="112" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Mencair (Butuh Panas) →</text>
    <text x="210" y="142" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">← Membeku (Lepas Panas)</text>
    <text x="325" y="78" font-size="8.5" font-weight="bold" fill="#ea580c">↖ Menguap</text>
    <text x="260" y="90" font-size="8.5" font-weight="bold" fill="#0284c7">Mengembun ↘</text>
    <text x="55" y="78" font-size="8.5" font-weight="bold" fill="#7c3aed">Menyublim ↗</text>
    <text x="110" y="90" font-size="8.5" font-weight="bold" fill="#059669">↙ Mengkristal</text>
    <text x="210" y="162" text-anchor="middle" font-size="9" fill="#64748b">Merah = Menyerap Kalor (Butuh Panas) | Biru = Melepas Kalor (Mendingin)</text>
  </svg>`,

  rantaiMakanan: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#f0fdf4" stroke="#dcfce7" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">🌾 ALIRAN ENERGI RANTAI MAKANAN SAWAH</text>
    <g transform="translate(15, 42)">
      <rect x="0" y="10" width="62" height="45" rx="6" fill="#dcfce7" stroke="#16a34a"/>
      <text x="31" y="28" text-anchor="middle" font-size="14">🌱</text>
      <text x="31" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">Padi</text>
      <text x="70" y="38" font-size="14" font-weight="bold" fill="#16a34a">→</text>

      <rect x="80" y="10" width="62" height="45" rx="6" fill="#fef9c3" stroke="#ca8a04"/>
      <text x="111" y="28" text-anchor="middle" font-size="14">🦗</text>
      <text x="111" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#713f12">Belalang</text>
      <text x="150" y="38" font-size="14" font-weight="bold" fill="#ca8a04">→</text>

      <rect x="160" y="10" width="62" height="45" rx="6" fill="#e0e7ff" stroke="#4f46e5"/>
      <text x="191" y="28" text-anchor="middle" font-size="14">🐸</text>
      <text x="191" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#312e81">Katak</text>
      <text x="230" y="38" font-size="14" font-weight="bold" fill="#4f46e5">→</text>

      <rect x="240" y="10" width="62" height="45" rx="6" fill="#fee2e2" stroke="#dc2626"/>
      <text x="271" y="28" text-anchor="middle" font-size="14">🐍</text>
      <text x="271" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">Ular</text>
      <text x="310" y="38" font-size="14" font-weight="bold" fill="#dc2626">→</text>

      <rect x="320" y="10" width="62" height="45" rx="6" fill="#ffedd5" stroke="#ea580c"/>
      <text x="351" y="28" text-anchor="middle" font-size="14">🦅</text>
      <text x="351" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Elang</text>
    </g>
    <text x="210" y="140" text-anchor="middle" font-size="10" fill="#475569">Produsen → Konsumen I (Herbivora) → Konsumen II → Konsumen III → Puncak → Pengurai</text>
  </svg>`,

  siklusAir: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px">
    <rect width="420" height="170" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">💧 SIKLUS HIDROLOGI (DAUR AIR ALAMI)</text>
    <circle cx="50" cy="50" r="18" fill="#fde047" stroke="#eab308"/>
    <text x="50" y="55" text-anchor="middle" font-size="14">☀️</text>
    <g transform="translate(170, 40)">
      <ellipse cx="30" cy="18" rx="35" ry="16" fill="#e2e8f0" stroke="#94a3b8"/>
      <text x="30" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">2. KONDENSASI (Awan)</text>
    </g>
    <g transform="translate(300, 48)">
      <ellipse cx="28" cy="14" rx="28" ry="12" fill="#94a3b8"/>
      <line x1="20" y1="30" x2="16" y2="45" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
      <line x1="32" y1="30" x2="28" y2="45" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="28" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">3. PRESIPITASI (Hujan)</text>
    </g>
    <path d="M 0 135 Q 100 125 200 135 T 420 135 L 420 170 L 0 170 Z" fill="#38bdf8"/>
    <text x="70" y="155" font-size="10" font-weight="bold" fill="#075985">Laut / Air Permukaan</text>
    <text x="70" y="105" font-size="9" font-weight="bold" fill="#d97706">1. EVAPORASI (Menguap) ↗</text>
    <text x="320" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#0c4a6e">4. INFILTRASI (Meresap ke tanah)</text>
  </svg>`,

  zonaWaktu: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" style="max-height:155px">
    <rect width="420" height="155" rx="12" fill="#f0fdfa" stroke="#99f6e4" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">🕒 3 ZONA WAKTU INDONESIA (SELISIH 1 JAM)</text>
    <g transform="translate(18, 35)">
      <rect x="0" y="0" width="115" height="72" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/>
      <text x="57" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#115e59">WIB (GMT+7)</text>
      <text x="57" y="42" text-anchor="middle" font-size="11" fill="#0f766e">Contoh: <b>07.00</b></text>
      <text x="57" y="60" text-anchor="middle" font-size="8.5" fill="#134e4a">Sumatera, Jawa, Kalbar</text>

      <text x="127" y="40" font-size="14" font-weight="bold" fill="#0d9488">+1j</text>

      <rect x="135" y="0" width="115" height="72" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="192" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">WITA (GMT+8)</text>
      <text x="192" y="42" text-anchor="middle" font-size="11" fill="#b45309">Contoh: <b>08.00</b></text>
      <text x="192" y="60" text-anchor="middle" font-size="8.5" fill="#78350f">Sulawesi, Bali, NTB, NTT</text>

      <text x="262" y="40" font-size="14" font-weight="bold" fill="#d97706">+1j</text>

      <rect x="270" y="0" width="112" height="72" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="326" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">WIT (GMT+9)</text>
      <text x="326" y="42" text-anchor="middle" font-size="11" fill="#4338ca">Contoh: <b>09.00</b></text>
      <text x="326" y="60" text-anchor="middle" font-size="8.5" fill="#1e1b4b">Maluku & Papua</text>
    </g>
    <text x="210" y="136" text-anchor="middle" font-size="10" fill="#475569">Makin ke Timur waktu makin siang (Matahari terbit lebih awal di wilayah WIT)</text>
  </svg>`,

  alurEkonomi: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" style="max-height:155px">
    <rect width="420" height="155" rx="12" fill="#fffbeb" stroke="#fef3c7" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">🛒 TIGA SERANGKAI KEGIATAN EKONOMI</text>
    <g transform="translate(15, 36)">
      <rect x="0" y="0" width="115" height="72" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="57" y="22" text-anchor="middle" font-size="16">🏭</text>
      <text x="57" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#713f12">1. PRODUKSI</text>
      <text x="57" y="54" text-anchor="middle" font-size="8.5" fill="#854d0e">Membuat barang/jasa</text>
      <text x="57" y="66" text-anchor="middle" font-size="8" font-weight="bold" fill="#a16207">(Pelaku: Produsen)</text>

      <text x="122" y="40" font-size="16" font-weight="bold" fill="#ca8a04">→</text>

      <rect x="135" y="0" width="120" height="72" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="195" y="22" text-anchor="middle" font-size="16">🚚</text>
      <text x="195" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e3a8a">2. DISTRIBUSI</text>
      <text x="195" y="54" text-anchor="middle" font-size="8.5" fill="#1d4ed8">Menyalurkan barang</text>
      <text x="195" y="66" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">(Pelaku: Distributor)</text>

      <text x="262" y="40" font-size="16" font-weight="bold" fill="#2563eb">→</text>

      <rect x="275" y="0" width="115" height="72" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="332" y="22" text-anchor="middle" font-size="16">🍽️</text>
      <text x="332" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">3. KONSUMSI</text>
      <text x="332" y="54" text-anchor="middle" font-size="8.5" fill="#15803d">Memakai/menghabiskan</text>
      <text x="332" y="66" text-anchor="middle" font-size="8" font-weight="bold" fill="#16a34a">(Pelaku: Konsumen)</text>
    </g>
    <text x="210" y="136" text-anchor="middle" font-size="10" fill="#475569">Contoh: Petani menanam padi → Pedagang mengantar beras → Kita makan nasi</text>
  </svg>`
};

// =============================================================================
// MODUL IPA (14 MODUL: KELAS 4: 4, KELAS 5: 5, KELAS 6: 5)
// =========================================================================
const ipaModules = [
  // KELAS 4 IPA
  {
    id: 'ipa-4-1',
    kelas: 4,
    mapel: 'IPA',
    kategori: 'IPA - Tumbuhan',
    judul: '🌿 Tumbuhan, Sumber Kehidupan di Bumi: Fotosintesis & Bagian Tubuh',
    icon: '🌿',
    ringkasan: 'Tumbuhan adalah koki terhebat di bumi! Melalui proses fotosintesis di daun, tumbuhan memasak makanan sendiri bermodalkan air dari akar, gas karbon dioksida dari udara, dan sinar matahari, menghasilkan makanan manis serta gas oksigen untuk kita bernapas!',
    poinPenting: [
      'Bagian Tubuh Tumbuhan: Akar (menyerap air & mineral), Batang (menopang & mengalirkan cairan), Daun (tempat fotosintesis), Bunga (alat perkembangbiakan), Buah & Biji.',
      'Jaringan Pengangkut: Xilem mengangkut air dan mineral dari akar ke daun. Floem mengedarkan hasil fotosintesis dari daun ke seluruh tubuh tumbuhan.',
      'Resep Fotosintesis: Air (H₂O) + Karbon Dioksida (CO₂) + Cahaya Matahari (diserap Klorofil) → Karbohidrat/Glukosa + Oksigen (O₂).',
      'Perkembangbiakan Generatif Bunga: Penyerbukan terjadi ketika serbuk sari (sel jantan) jatuh ke kepala putik (sel betina).'
    ],
    rumus: [
      'Persamaan Fotosintesis: 6CO₂ + 6H₂O + Cahaya → C₆H₁₂O₆ + 6O₂',
      'Fungsi Klorofil: Zat hijau daun penyerap energi foton cahaya matahari',
      'Alat Pernapasan Daun: Stomata (mulut daun yang membuka dan menutup)'
    ],
    perhatikan: [
      'Jangan tertukar pipa pengangkut! Xilem = dari akar ke daun (bawah ke atas). Floem = dari daun ke seluruh tubuh (mengedarkan makanan).',
      'Fotosintesis menghasilkan gas OKSIGEN, bukan karbon dioksida!'
    ],
    contohSoal: {
      tanya: 'Gas apa yang diserap oleh daun untuk proses fotosintesis dan gas apa yang dilepaskan ke udara?',
      kunci: 'Menyerap Karbon Dioksida (CO₂) dan melepaskan Oksigen (O₂)',
      bahas: 'Tumbuhan menyerap karbon dioksida dari udara melalui stomata, lalu melepaskan oksigen segar yang bermanfaat bagi manusia dan hewan.'
    },
    tags: ['fotosintesis', 'bagian tumbuhan', 'xilem', 'floem', 'klorofil', 'stomata'],
    svgIllustration: SVG_SCIENCE.fotosintesis,
    captionGambar: 'Proses Fotosintesis: Daun memasak air dan karbon dioksida dengan bantuan sinar matahari menghasilkan glukosa dan oksigen.'
  },

  {
    id: 'ipa-4-2',
    kelas: 4,
    mapel: 'IPA',
    kategori: 'IPA - Wujud Zat & Kalor',
    judul: '🧊 Wujud Zat dan Perubahannya: Padat, Cair, & Gas',
    icon: '🧊',
    ringkasan: 'Segala sesuatu di sekitar kita tersusun atas materi! Zat bisa berwujud padat, cair, atau gas. Zat dapat berubah bentuk jika menerima kalor (dipanaskan) atau melepaskan kalor (didinginkan).',
    poinPenting: [
      'Karakteristik Padat: Bentuk tetap dan volume tetap (contoh: batu, kayu).',
      'Karakteristik Cair: Bentuk berubah mengikuti wadahnya, tetapi volumenya tetap (contoh: air, minyak).',
      'Karakteristik Gas: Bentuk dan volumenya selalu berubah-ubah memenuhi seluruh ruangan (contoh: udara, asap).',
      '6 Perubahan Wujud: Mencair (padat ke cair), Membeku (cair ke padat), Menguap (cair ke gas), Mengembun (gas ke cair), Menyublim (padat ke gas: kapur barus mengecil), Mengkristal/Mendeposisi (gas ke padat: terbentuknya salju).'
    ],
    rumus: [
      'Perubahan Butuh/Menyerap Kalor: Mencair, Menguap, Menyublim',
      'Perubahan Melepas Kalor: Membeku, Mengembun, Mengkristal',
      'Massa Jenis (Kerapatan Partikel): Padat paling rapat > Cair > Gas paling renggang'
    ],
    perhatikan: [
      'Titik-titik air di dinding luar gelas es teh BUKAN es yang bocor, melainkan uap air di udara luar yang MENGEMBUN karena bersentuhan dengan dinding gelas yang dingin!',
      'Menyublim adalah perubahan padat langsung menjadi gas tanpa mencair terlebih dahulu.'
    ],
    contohSoal: {
      tanya: 'Kapur barus di dalam lemari lama-kelamaan mengecil dan akhirnya habis. Peristiwa ini disebut ...',
      kunci: 'Menyublim',
      bahas: 'Kapur barus adalah zat padat yang langsung berubah wujud menjadi gas berbau harum tanpa menjadi cair, sehingga prosesnya disebut menyublim.'
    },
    tags: ['wujud zat', 'mencair', 'membeku', 'menguap', 'mengembun', 'menyublim', 'kalor'],
    svgIllustration: SVG_SCIENCE.perubahanWujud,
    captionGambar: 'Segitiga Wujud Zat: Enam perubahan wujud benda berdasarkan penyerapan dan pelepasan kalor panas.'
  },

  {
    id: 'ipa-4-3',
    kelas: 4,
    mapel: 'IPA',
    kategori: 'IPA - Gaya & Gerak',
    judul: '🚀 Gaya di Sekitar Kita: Otot, Gesek, Magnet, Pegas & Gravitasi',
    icon: '🚀',
    ringkasan: 'Gaya adalah tarikan atau dorongan ajaib! Gaya bisa membuat bola diam menjadi melesat, membelokkan sepeda, menghentikan laju mobil dengan rem, hingga meremukkan plastisin menjadi pipih.',
    poinPenting: [
      'Pengaruh Gaya terhadap Benda: 1) Menggerakkan benda diam, 2) Menghentikan benda bergerak, 3) Mengubah kecepatan gerak, 4) Mengubah arah gerak, 5) Mengubah bentuk benda (contoh: membuat gerabah dari tanah liat).',
      'Gaya Otot: Gaya yang dihasilkan oleh otot tubuh manusia/hewan (mendorong meja, mengangkat ember).',
      'Gaya Gesek: Terjadi saat dua permukaan saling bersentuhan. Arahnya berlawanan dengan arah gerak benda. Contoh: rem sepeda, pul sepatu bola bergerigi agar tidak licin.',
      'Gaya Pegas: Dihasilkan oleh benda elastis yang diregangkan (ketapel, busur panah, per kasur).',
      'Gaya Gravitasi Bumi: Gaya tarik bumi yang membuat benda yang dilempar ke atas selalu jatuh kembali ke tanah.'
    ],
    rumus: [
      'Gaya (F) diukur dalam satuan Newton (N)',
      'Memperbesar Gaya Gesek: Memberi alur/motif pada ban kendaraan dan sol sepatu',
      'Memperkecil Gaya Gesek: Memberikan minyak pelumas/oli pada rantai sepeda'
    ],
    perhatikan: [
      'Gaya gesek selalu menghambat/melawan gerak benda!',
      'Gaya gravitasi di bumi membuat benda memiliki berat. Tanpa gravitasi, semua benda akan melayang-layang seperti astronot di luar angkasa.'
    ],
    contohSoal: {
      tanya: 'Mengapa ban mobil dan sepeda dibuat memiliki alur atau kembangan bergaris-garis?',
      kunci: 'Untuk memperbesar gaya gesek agar ban tidak licin dan mobil tidak tergelincir',
      bahas: 'Permukaan ban yang beralur membuat gesekan dengan aspal jalan semakin kuat, sehingga kendaraan dapat mengerem dengan aman tanpa selip.'
    },
    tags: ['gaya', 'gaya otot', 'gaya gesek', 'gaya pegas', 'gravitasi', 'pengaruh gaya'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-4-4',
    kelas: 4,
    mapel: 'IPA',
    kategori: 'IPA - Energi & Transformasi',
    judul: '⚡ Mengubah Bentuk Energi: Hukum Kekekalan & Bentuk Energi',
    icon: '⚡',
    ringkasan: 'Energi ada di mana-mana dan tidak pernah hilang! Hukum kekekalan energi menyatakan bahwa energi tidak bisa diciptakan dan tidak bisa dimusnahkan. Energi hanya bisa "berganti baju" alias berubah bentuk dari satu bentuk ke bentuk lainnya!',
    poinPenting: [
      'Bentuk-bentuk Energi: Energi kimia (makanan, baterai, bensin), energi listrik, energi panas (kalor), energi cahaya, energi bunyi, energi kinetik (gerak), dan energi potensial (ketinggian/tegangan).',
      'Transformasi Energi Sehari-hari: Baterai handphone (Kimia → Listrik → Cahaya & Bunyi), Setrika (Listrik → Panas), Kipas Angin (Listrik → Gerak), Radio (Listrik → Bunyi).',
      'Energi Kinetik: Energi yang dimiliki oleh benda yang sedang bergerak (mobil melaju, baling-baling berputar).',
      'Energi Potensial: Energi yang tersimpan pada benda karena kedudukannya (kelapa yang masih menggantung tinggi di pohon).'
    ],
    rumus: [
      'Hukum Kekekalan Energi: Energi Awal = Energi Akhir (Hanya Berubah Bentuk)',
      'Energi Mekanik = Energi Potensial + Energi Kinetik',
      'Panel Surya (PLTS): Mengubah Energi Cahaya Matahari → Energi Listrik'
    ],
    perhatikan: [
      'Makanan yang kita makan menyimpan ENERGI KIMIA, yang kemudian diubah tubuh menjadi energi panas dan energi kinetik/gerak untuk kita berjalan.',
      'Energi tidak pernah hilang begitu saja, melainkan sering terbuang menjadi energi panas/kalor dan bunyi.'
    ],
    contohSoal: {
      tanya: 'Perubahan bentuk energi yang terjadi pada setrika listrik yang sedang digunakan adalah ...',
      kunci: 'Energi listrik menjadi energi panas (kalor)',
      bahas: 'Arus listrik yang mengalir melalui elemen kawat di dalam setrika mengalami hambatan sehingga menghasilkan panas yang digunakan untuk merapikan pakaian.'
    },
    tags: ['energi', 'transformasi energi', 'energi kinetik', 'energi potensial', 'hukum kekekalan energi'],
    svgIllustration: null,
    captionGambar: null
  },

  // KELAS 5 IPA
  {
    id: 'ipa-5-1',
    kelas: 5,
    mapel: 'IPA',
    kategori: 'IPA - Cahaya & Bunyi',
    judul: '🌈 Melihat karena Cahaya, Mendengar karena Bunyi',
    icon: '🌈',
    ringkasan: 'Mata melihat berkat pantulan cahaya, telinga mendengar berkat gelombang bunyi! Cahaya merambat lurus dan bisa dibiaskan, sedangkan bunyi merambat lewat medium getaran dan bisa memantul menjadi gaung atau gema!',
    poinPenting: [
      '5 Sifat Cahaya: 1) Merambat lurus, 2) Menembus benda bening, 3) Dapat dipantulkan (pada cermin datar/cekung/cembung), 4) Dapat dibiaskan/dibelokkan (pensil dalam air tampak patah), 5) Dapat diuraikan (dispersi: cahaya putih matahari menjadi pelangi MEJIKUHIBINIU).',
      'Bagian Mata: Kornea (selaput terluar), Pupil (celah masuknya cahaya), Iris (pengatur lebar pupil & pemberi warna mata), Lensa (memfokuskan bayangan), Retina (layar penangkap bayangan nyata terbalik).',
      'Sifat Bunyi: Dihasilkan dari benda yang bergetar. Memerlukan medium perambatan (paling cepat di zat padat, lalu cair, paling lambat di gas). Bunyi TIDAK DAPAT merambat di ruang hampa udara.',
      'Bunyi Pantul: Gaung/Kerdil (terjadi di ruangan sempit, bunyi pantul datang bersamaan sehingga mengaburkan bunyi asli). Gema (terjadi di tebing/lembah luas, bunyi pantul terdengar jelas setelah bunyi asli selesai).'
    ],
    rumus: [
      'Kecepatan Rambat Bunyi: Zat Padat > Zat Cair > Zat Gas (Udara)',
      'Rentang Pendengaran Manusia: Audiosonik (20 Hz - 20.000 Hz)',
      'Infrasonik (< 20 Hz, didengar anjing/gajah) | Ultrasonik (> 20.000 Hz, kelelawar & lumba-lumba)'
    ],
    perhatikan: [
      'Di luar angkasa yang hampa udara, astronot tidak bisa saling mendengar suara secara langsung karena tidak ada molekul udara untuk merambatkan gelombang bunyi!',
      'Pembiasan terjadi karena cahaya merambat melalui dua medium yang berbeda kerapatan optiknya (udara ke air).'
    ],
    contohSoal: {
      tanya: 'Peristiwa kolam renang yang airnya jernih tampak lebih dangkal dari kedalaman aslinya merupakan contoh dari sifat cahaya yaitu ...',
      kunci: 'Cahaya dapat dibiaskan (mengalami pembiasan)',
      bahas: 'Cahaya yang merambat dari air (medium lebih rapat) ke udara (kurang rapat) dibelokkan menjauhi garis normal, sehingga dasar kolam tampak terangkat lebih dangkal.'
    },
    tags: ['sifat cahaya', 'pembiasan', 'pemantulan', 'gelombang bunyi', 'gaung', 'gema', 'mata', 'telinga'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-5-2',
    kelas: 5,
    mapel: 'IPA',
    kategori: 'IPA - Ekosistem',
    judul: '🦊 Harmoni dalam Ekosistem: Jaring Makanan & Simbiosis',
    icon: '🦊',
    ringkasan: 'Di alam raya, setiap makhluk hidup saling terhubung! Rantai makanan menunjukkan aliran energi: siapa memakan siapa. Jika salah satu hewan punah, seluruh rantai bisa terganggu. Makhluk hidup juga hidup berdampingan melalui simbiosis!',
    poinPenting: [
      'Komponen Ekosistem: Biotik (makhluk hidup: produsen, konsumen, dekomposer) dan Abiotik (benda tak hidup: air, tanah, udara, sinar matahari).',
      'Tingkatan Trofik: Produsen (tumbuhan hijau penghasil makanan sendiri) → Konsumen I (hewan herbivora pemakan tumbuhan) → Konsumen II & III (karnivora/omnivora) → Pengurai (bakteri/jamur).',
      'Jaring-jaring Makanan: Kumpulan beberapa rantai makanan yang saling terhubung dalam satu ekosistem.',
      'Piramida Makanan: Jumlah populasi produsen selalu paling besar di dasar piramida, makin ke atas konsumen puncak jumlahnya makin sedikit.',
      'Simbiosis Mutualisme: Hubungan saling menguntungkan (contoh: lebah dan bunga, kerbau dan burung jalak).',
      'Simbiosis Komensalisme: Satu pihak untung, pihak lain tidak rugi (ikan remora dan ikan hiu, anggrek pada pohon inang).',
      'Simbiosis Parasitisme: Satu pihak untung, pihak lain dirugikan (benalu pada pohon mangga, nyamuk pada manusia).'
    ],
    rumus: [
      'Tanda Panah Rantai Makanan (A → B): A dimakan oleh B (aliran energi dari A ke B)',
      'Peran Pengurai (Dekomposer): Mengurai jasad mati menjadi zat hara penyubur tanah'
    ],
    perhatikan: [
      'Jika populasi katak di sawah menurun drastis karena diburu manusia, maka populasi belalang akan melonjak pesat sehingga merusak tanaman padi petani!',
      'Puncak rantai makanan tidak memiliki predator alami selain mati dan diurai oleh dekomposer.'
    ],
    contohSoal: {
      tanya: 'Hubungan antara tanaman anggrek yang menempel pada batang pohon mangga merupakan contoh simbiosis ...',
      kunci: 'Simbiosis Komensalisme',
      bahas: 'Anggrek diuntungkan karena mendapat tempat tinggi untuk menyerap sinar matahari, sedangkan pohon mangga tidak dirugikan karena anggrek tidak mengambil makanan dari pohon inangnya.'
    },
    tags: ['ekosistem', 'rantai makanan', 'jaring makanan', 'simbiosis', 'mutualisme', 'komensalisme', 'parasitisme'],
    svgIllustration: SVG_SCIENCE.rantaiMakanan,
    captionGambar: 'Rantai Makanan: Aliran energi kehidupan dari produsen tumbuhan hijau hingga konsumen puncak.'
  },

  {
    id: 'ipa-5-3',
    kelas: 5,
    mapel: 'IPA',
    kategori: 'IPA - Organ Tubuh Manusia',
    judul: '🫁 Sistem Organ Tubuh Manusia: Pernapasan, Pencernaan & Peredaran Darah',
    icon: '🫁',
    ringkasan: 'Tubuhmu adalah mesin paling canggih di semesta! Paru-paru menukar oksigen segar, lambung dan usus mencerna makanan menjadi sari nutrisi, dan jantung memompa darah merah bersih ke seluruh tubuh tanpa henti setiap detik!',
    poinPenting: [
      'Sistem Pernapasan: Rongga hidung (bulu hidung menyaring debu, selaput lendir menyesuaikan suhu) → Faring/Laring → Trakea (batang tenggorokan dengan silia penyaring) → Bronkus → Bronkiolus → Alveolus (kantong udara tempat pertukaran gas O₂ dan CO₂ secara difusi).',
      'Sistem Pencernaan: Mulut (pencernaan mekanik oleh gigi & kimiawi oleh enzim ptialin/amilase) → Kerongkongan (gerak peristaltik meremas makanan) → Lambung (asam lambung HCl membunuh kuman, enzim pepsin & renin) → Usus Halus (penyerapan sari-sari makanan ke pembuluh darah) → Usus Besar (penyerapan air & pembentukan feses) → Anus.',
      'Sistem Peredaran Darah: Jantung memiliki 4 ruang: Serambi Kanan (menerima darah kotor kaya CO₂ dari seluruh tubuh), Bilik Kanan (memompa darah kotor ke paru-paru), Serambi Kiri (menerima darah bersih kaya O₂ dari paru-paru), Bilik Kiri (memompa darah bersih kaya O₂ ke seluruh tubuh).',
      'Pembuluh Darah: Arteri/Nadi (membawa darah KELUAR dari jantung, berdinding tebal dan elastis) vs Vena/Balik (membawa darah KEMBALI MENUJU jantung, berdinding tipis).'
    ],
    rumus: [
      'Peredaran Darah Kecil: Jantung (Bilik Kanan) → Paru-paru → Jantung (Serambi Kiri)',
      'Peredaran Darah Besar: Jantung (Bilik Kiri) → Seluruh Tubuh → Jantung (Serambi Kanan)',
      'Enzim Lambung (Jurus Pe-Re-As): Pepsin (protein → pepton), Renin (mengendapkan susu), Asam Lambung HCl'
    ],
    perhatikan: [
      'Pertukaran oksigen dan karbon dioksida di paru-paru terjadi tepat di ALVEOLUS, bukan di bronkus!',
      'Bilik kiri jantung memiliki dinding otot paling TEBAL karena bertugas memompa darah ke seluruh tubuh!'
    ],
    contohSoal: {
      tanya: 'Urutan peredaran darah kecil pada manusia yang benar adalah ...',
      kunci: 'Bilik Kanan → Arteri Pulmonalis → Paru-paru → Vena Pulmonalis → Serambi Kiri',
      bahas: 'Peredaran darah kecil bertugas membersihkan darah kotor dari bilik kanan menuju paru-paru untuk mengambil oksigen, lalu kembali ke serambi kiri jantung.'
    },
    tags: ['sistem pernapasan', 'alveolus', 'sistem pencernaan', 'jantung', 'peredaran darah besar', 'peredaran darah kecil'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-5-4',
    kelas: 5,
    mapel: 'IPA',
    kategori: 'IPA - Bumi & Lingkungan',
    judul: '🌧️ Bumi dan Daur Air: Siklus Hidrologi & Lapisan Bumi',
    icon: '🌧️',
    ringkasan: 'Air di bumi tidak pernah habis karena terus berputar dalam siklus hidrologi! Sinar matahari menguapkan air laut dan danau, uap air naik menjadi awan mendung, jatuh ke bumi sebagai hujan, meresap ke tanah, dan kembali mengalir ke samudra.',
    poinPenting: [
      'Tahapan Daur Air: 1) Evaporasi (penguapan air laut, danau, sungai oleh panas matahari), 2) Transpirasi (penguapan air dari tubuh tumbuhan), 3) Kondensasi (uap air mengalami pendinginan menjadi butiran air pembentuk awan), 4) Presipitasi (butiran air awan jatuh ke bumi sebagai hujan atau salju), 5) Infiltrasi (peresapan air hujan ke dalam pori-pori tanah).',
      'Lapisan Bumi: Litosfer (kerak bumi padat berbatu tempat kita berpijak), Hidrosfer (lapisan perairan: samudra, laut, danau, sungai), Atmosfer (selubung gas udara pelindung bumi: troposfer, stratosfer, mesosfer, termosfer, eksosfer).',
      'Dampak Pengaspalan & Penebangan Hutan: Mengurangi daerah resapan air sehingga air hujan tidak mengalami infiltrasi, memicu terjadinya banjir bandang dan erosi tanah.'
    ],
    rumus: [
      'Urutan Daur Air: Evaporasi/Transpirasi → Kondensasi (Awan) → Presipitasi (Hujan) → Infiltrasi/Limpasan Air',
      'Air Bersih: Air yang tidak berwarna, tidak berbau, tidak berasa, dan bebas kuman penyakit'
    ],
    perhatikan: [
      'Jangan tertukar antara evaporasi dan transpirasi! Evaporasi penguapan dari badan air (laut/sungai), transpirasi penguapan dari daun tumbuhan.',
      'Infiltrasi adalah kunci cadangan air tanah sumur kita.'
    ],
    contohSoal: {
      tanya: 'Peristiwa jatuhnya titik-titik air dari awan ke permukaan bumi dalam siklus air disebut ...',
      kunci: 'Presipitasi (Hujan)',
      bahas: 'Ketika butiran air di dalam awan sudah terlalu berat dan jenuh, butiran tersebut akan jatuh tertarik gravitasi bumi sebagai presipitasi (hujan).'
    },
    tags: ['daur air', 'siklus hidrologi', 'evaporasi', 'kondensasi', 'presipitasi', 'infiltrasi', 'lapisan bumi'],
    svgIllustration: SVG_SCIENCE.siklusAir,
    captionGambar: 'Daur Air Alami: Siklus hidrologi berkelanjutan yang menjaga ketersediaan air tawar di bumi.'
  },

  {
    id: 'ipa-5-5',
    kelas: 5,
    mapel: 'IPA',
    kategori: 'IPA - Listrik & Magnet',
    judul: '⚡ Magnet, Listrik, dan Teknologi untuk Kehidupan',
    icon: '⚡',
    ringkasan: 'Kekuatan magnet dan energi listrik menggerakkan dunia modern! Magnet memiliki dua kutub yang bisa tarik-menarik. Arus listrik mengalir dalam rangkaian seri dan paralel untuk menyalakan lampu di rumah kita.',
    poinPenting: [
      'Sifat Magnet: Memiliki dua kutub: Kutub Utara (U) dan Kutub Selatan (S).',
      'Hukum Kutub Magnet: Kutub senama (U-U atau S-S) saling TOLAK-MENOLAK. Kutub tidak senama (U-S) saling TARIK-MENARIK.',
      'Bahan Magnetik: Feromagnetik (ditarik sangat kuat: besi, baja, nikel) vs Non-magnetik (tidak dapat ditarik magnet: kayu, plastik, emas).',
      'Rangkaian Listrik Seri: Komponen dipasang sejajar dalam satu jalur kabel tanpa cabang. Kelebihan: hemat kabel. Kekurangan: jika satu lampu padam/putus, semua lampu lain ikut padam; nyala lampu lebih redup.',
      'Rangkaian Listrik Paralel: Komponen dipasang bersusun secara bercabang. Kelebihan: jika satu lampu padam, lampu di cabang lain tetap menyala terang (digunakan untuk instalasi listrik di rumah).',
      'Konduktor vs Isolator Listrik: Konduktor menghantarkan listrik (tembaga, seng, air), isolator menghambat aliran listrik (karet pembungkus kabel, plastik).'
    ],
    rumus: [
      'Kutub Senama = Tolak-menolak | Kutub Beda = Tarik-menarik',
      'Medan Magnet: Daerah di sekitar magnet yang masih dipengaruhi gaya magnet (paling rapat di kedua kutubnya)'
    ],
    perhatikan: [
      'Lampu di rumah kita SELALU dirangkai secara PARALEL agar jika lampu ruang tamu dimatikan, lampu kamar tidur tidak ikut padam!',
      'Gaya magnet dapat menembus benda tipis seperti kertas, kaca, dan kain.'
    ],
    contohSoal: {
      tanya: 'Mengapa rangkaian listrik di rumah-rumah dipasang secara paralel, bukan seri?',
      kunci: 'Agar jika salah satu lampu padam, lampu di ruangan lain tetap dapat menyala',
      bahas: 'Rangkaian paralel memiliki cabang arus mandiri untuk setiap alat listrik, sehingga putusnya salah satu saklar tidak menghentikan arus ke cabang lainnya.'
    },
    tags: ['magnet', 'kutub magnet', 'rangkaian seri', 'rangkaian paralel', 'konduktor', 'isolator'],
    svgIllustration: null,
    captionGambar: null
  },

  // KELAS 6 IPA
  {
    id: 'ipa-6-1',
    kelas: 6,
    mapel: 'IPA',
    kategori: 'IPA - Gerak Manusia',
    judul: '🦴 Bagaimana Tubuh Kita Bergerak: Sistem Rangka, Sendi & Otot',
    icon: '🦴',
    ringkasan: 'Kita bisa berlari, menari, dan melompat berkat kerja sama tim hebat: tulang rangka sebagai alat gerak pasif, sendi sebagai engsel penghubung, dan otot sebagai alat gerak aktif yang bisa berkontraksi!',
    poinPenting: [
      'Fungsi Rangka Tubuh: Memberi bentuk tubuh, menegakkan tubuh, melindungi organ vital (tengkorak melindungi otak, tulang rusuk melindungi jantung & paru-paru), dan tempat melekatnya otot.',
      'Macam-macam Sendi Diartrosis (Sendi Gerak):',
      '1) Sendi Engsel: Gerakan satu arah seperti engsel pintu (terdapat pada siku tangan dan lutut kaki).',
      '2) Sendi Peluru: Gerakan bebas ke segala arah (hubungan tulang lengan atas dengan gelang bahu, paha dengan panggul).',
      '3) Sendi Putar: Gerakan berputar/rotasi (hubungan tulang leher pertama/atlas dengan tulang tengkorak).',
      '4) Sendi Pelana: Gerakan dua arah (hubungan tulang pangkal ibu jari dengan telapak tangan).',
      '5) Sendi Geser: Gerakan bergeser datar (tulang pergelangan tangan dan pergelangan kaki).',
      'Macam Otot: Otot lurik (bekerja sadar menempel pada rangka), otot polos (bekerja otomatis pada dinding lambung & usus), otot jantung (bekerja terus menerus memompa jantung).'
    ],
    rumus: [
      'Alat Gerak Pasif = Tulang (tidak dapat bergerak sendiri tanpa otot)',
      'Alat Gerak Aktif = Otot (dapat memendek/berkontraksi dan memanjang/relaksasi)'
    ],
    perhatikan: [
      'Sendi engsel HANYA bergerak SATU ARAH, jangan disamakan dengan sendi peluru yang bisa berputar bebas ke segala arah!',
      'Tulang rusuk dan tulang dada melindungi jantung dan paru-paru dari benturan keras.'
    ],
    contohSoal: {
      tanya: 'Sendi yang memungkinkan gerakan ke segala arah pada tubuh manusia adalah sendi ...',
      kunci: 'Sendi Peluru',
      bahas: 'Sendi peluru mempertemukan ujung tulang berbentuk bonggol bola dengan mangkuk sendi (contoh: persendian antara tulang lengan atas dan tulang belikat/gelang bahu).'
    },
    tags: ['sistem gerak', 'rangka', 'sendi engsel', 'sendi peluru', 'sendi putar', 'otot lurik', 'otot polos'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-6-2',
    kelas: 6,
    mapel: 'IPA',
    kategori: 'IPA - Daur Hidup & Metamorfosis',
    judul: '🐣 Perkembangbiakan Makhluk Hidup & Metamorfosis',
    icon: '🐣',
    ringkasan: 'Agar tidak punah, makhluk hidup berkembang biak! Hewan ada yang bertelur (ovipar), melahirkan (vivipar), hingga bermetamorfosis sempurna dengan melewati fase kepompong tidur!',
    poinPenting: [
      'Perkembangbiakan Hewan: 1) Ovipar (bertelur: unggas, reptil, ikan, katak), 2) Vivipar (melahirkan: sapi, kambing, paus, lumba-lumba, kelelawar, kucing), 3) Ovovivipar (bertelur-melahirkan: telur menetas di dalam tubuh induk lalu dilahirkan, contoh: ikan hiu, ular boa, kadal).',
      'Ciri Hewan Vivipar (Mamalia): Memiliki daun telinga, memiliki kelenjar susu untuk menyusui anaknya, dan tubuhnya ditutupi rambut.',
      'Perkembangbiakan Tumbuhan Vegetatif Alami: Tunas (pisang, bambu), Tunas adventif (cocor bebek), Umbi batang (kentang), Umbi lapis (bawang merah), Geragih/stolon (stroberi), Rizoma/akar tinggal (jahe, kunyit), Spora (lumut, paku).',
      'Perkembangbiakan Vegetatif Buatan: Cangkok, Stek batang, Menempel (okulasi), Menyambung (enten), Merunduk.',
      'Metamorfosis Sempurna (4 Tahap): Telur → Larva (Ulat) → Pupa (Kepompong) → Imago (Dewasa). Ciri: ada tahap pupa dan bentuk anak beda total dari induk. Contoh: kupu-kupu, katak, nyamuk, lalat.',
      'Metamorfosis Tidak Sempurna (3 Tahap): Telur → Nimfa → Imago (Dewasa). Tanpa fase pupa. Contoh: belalang, kecoak, capung, jangkrik.'
    ],
    rumus: [
      'Metamorfosis Sempurna = Telur → Larva → Pupa → Dewasa',
      'Metamorfosis Tidak Sempurna = Telur → Nimfa → Dewasa'
    ],
    perhatikan: [
      'Paus dan lumba-lumba adalah MAMALIA (vivipar/melahirkan dan bernapas dengan paru-paru), BUKAN kelompok ikan bertelur!',
      'Kelelawar berkembang biak dengan melahirkan (vivipar).'
    ],
    contohSoal: {
      tanya: 'Hewan berikut yang mengalami metamorfosis sempurna adalah ...',
      kunci: 'Kupu-kupu, nyamuk, dan katak',
      bahas: 'Ketiga hewan tersebut mengalami tahap pupa/kepompong (pada nyamuk dan kupu-kupu) atau perubahan wujud total dari berudu menjadi katak dewasa bertungkai.'
    },
    tags: ['ovipar', 'vivipar', 'ovovivipar', 'vegetatif alami', 'metamorfosis sempurna', 'nimfa', 'pupa'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-6-3',
    kelas: 6,
    mapel: 'IPA',
    kategori: 'IPA - Pubertas',
    judul: '🌱 Ciri-ciri Masa Pubertas pada Remaja',
    icon: '🌱',
    ringkasan: 'Masa pubertas adalah anugerah alami saat tubuhmu bertumbuh menjadi dewasa! Hormon tubuh mulai aktif sehingga fisik anak laki-laki dan perempuan mengalami perubahan yang sehat dan normal.',
    poinPenting: [
      'Pengertian Pubertas: Masa transisi saat anak-anak mengalami perubahan fisik, psikologis, dan pematangan fungsi organ reproduksi.',
      'Ciri Fisik Primer (Tanda Utama Reproduksi): Anak laki-laki mulai mengalami mimpi basah (produksi sel sperma), anak perempuan mulai mengalami menstruasi (pematangan sel telur/ovum).',
      'Ciri Fisik Sekunder Laki-laki: Tumbuh jakun di tenggorokan, suara menjadi lebih berat/besar, dada bertambah bidang, tumbuh rambut halus di ketiak dan kemaluan, timbul jerawat.',
      'Ciri Fisik Sekunder Perempuan: Payudara membesar, pinggul melebar, suara melengking halus, tumbuh rambut di ketiak, kulit menjadi lebih halus.',
      'Menjaga Kebersihan Organ Reproduksi: Mandi teratur, mengganti pakaian dalam minimal 2 kali sehari dengan bahan katun menyerap keringat, membasuh dengan air bersih dari arah depan ke belakang.'
    ],
    rumus: [
      'Pubertas Laki-laki dipicu hormon Testosteron',
      'Pubertas Perempuan dipicu hormon Estrogen & Progesteron'
    ],
    perhatikan: [
      'Perubahan emosi seperti mudah tersinggung atau galau saat pubertas adalah hal wajar karena pengaruh fluktuasi hormon, salurkan ke hobi positif!',
      'Gunakan pakaian dalam yang bersih dan hindari penggunaan celana yang terlalu ketat.'
    ],
    contohSoal: {
      tanya: 'Perubahan fisik sekunder yang dialami oleh remaja laki-laki saat pubertas antara lain ...',
      kunci: 'Tumbuh jakun dan suara menjadi lebih besar/berat',
      bahas: 'Hormon testosteron merangsang pertumbuhan pita suara dan laring sehingga memicu tumbuhnya jakun dan nada suara yang memberat pada anak laki-laki.'
    },
    tags: ['pubertas', 'reproduksi', 'jakun', 'menstruasi', 'kebersihan diri'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-6-4',
    kelas: 6,
    mapel: 'IPA',
    kategori: 'IPA - Tata Surya & Gerhana',
    judul: '🌕 Tata Surya, Rotasi-Revolusi Bumi, & Peristiwa Gerhana',
    icon: '🌕',
    ringkasan: 'Menjelajah luar angkasa! Matahari adalah bintang raksasa pusat tata surya kita. Bumi berputar pada porosnya menyebabkan pergantian siang-malam, dan saat bulan menutupi matahari, langit seketika menjadi gelap gulita!',
    poinPenting: [
      'Planet Dalam (di dalam sabuk asteroid): Merkurius, Venus, Bumi, Mars. Tersusun dari batuan padat.',
      'Planet Luar (di luar sabuk asteroid): Yupiter (terbesar), Saturnus (bercincin megah), Uranus, Neptunus. Planet raksasa gas.',
      'Rotasi Bumi: Perputaran bumi pada porosnya selama 24 jam. Mengakibatkan: 1) Terjadinya siang dan malam, 2) Gerak semu harian matahari, 3) Pembagian zona waktu di bumi.',
      'Revolusi Bumi: Peredaran bumi mengitari matahari selama 365 ¼ hari (1 tahun). Mengakibatkan: 1) Pergantian musim, 2) Perubahan lamanya siang dan malam, 3) Gerak semu tahunan matahari.',
      'Gerhana Matahari: Terjadi saat posisi MATAHARI - BULAN - BUMI berada pada satu garis lurus. Bulan menghalangi cahaya matahari ke bumi pada fase bulan baru/mati.',
      'Gerhana Bulan: Terjadi saat posisi MATAHARI - BUMI - BULAN berada pada satu garis lurus. Bayangan bumi menutupi bulan pada fase bulan purnama.'
    ],
    rumus: [
      'Urutan Planet dari Matahari: Me-Ve-Bu-Ma | Yu-Sa-U-Nep',
      'Gerhana Matahari: Matahari - Bulan - Bumi (Bulan di tengah)',
      'Gerhana Bulan: Matahari - Bumi - Bulan (Bumi di tengah)',
      'Umbra: Bayangan inti yang sangat gelap | Penumbra: Bayangan samar/kabur'
    ],
    perhatikan: [
      'Planet terpanas adalah VENUS (karena efek rumah kaca tebal gas CO₂), bukan Merkurius!',
      'Planet yang memiliki julukan Planet Merah adalah MARS.'
    ],
    contohSoal: {
      tanya: 'Peristiwa yang terjadi akibat dari rotasi bumi pada porosnya adalah ...',
      kunci: 'Terjadinya pergantian siang dan malam serta perbedaan zona waktu',
      bahas: 'Bumi berputar dari barat ke timur selama 24 jam sehingga bagian bumi yang menghadap matahari mengalami siang dan bagian sebaliknya mengalami malam.'
    },
    tags: ['tata surya', 'rotasi bumi', 'revolusi bumi', 'gerhana matahari', 'gerhana bulan', 'umbra', 'penumbra'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ipa-6-5',
    kelas: 6,
    mapel: 'IPA',
    kategori: 'IPA - Energi Terbarukan & Sains',
    judul: '🔬 Energi Terbarukan & Variabel Eksperimen Sains',
    icon: '🔬',
    ringkasan: 'Ilmuwan cilik ramah lingkungan! Kita beralih dari bahan bakar fosil yang kotor ke energi alternatif matahari, angin, dan air yang tak pernah habis. Kita juga belajar melakukan eksperimen ilmiah dengan mengendalikan variabel!',
    poinPenting: [
      'Energi Alternatif Terbarukan: Sumber energi ramah lingkungan yang tidak akan habis dipakai terus menerus. Contoh: energi surya (cahaya matahari dengan panel sel surya), energi angin (aerogenerator kincir angin), energi air (PLTA), energi panas bumi (geotermal), biomassa (kotoran hewan menjadi biogas).',
      'Energi Tak Terbarukan: Sumber energi fosil yang jumlahnya terbatas dan butuh jutaan tahun terbentuk: minyak bumi, batu bara, gas alam.',
      'Metode Ilmiah: Langkah teratur ilmuwan: Mengamati masalah → Membuat hipotesis (dugaan sementara) → Melakukan eksperimen → Menganalisis data → Menarik kesimpulan.',
      'Variabel Bebas: Variabel yang sengaja diubah-ubah oleh peneliti (misal: banyaknya takaran pupuk 5 gram, 10 gram, 15 gram).',
      'Variabel Terikat: Hasil pengamatan yang diukur akibat perlakuan variabel bebas (misal: tinggi batang tanaman setelah 1 minggu).',
      'Variabel Kontrol: Faktor yang sengaja dibuat sama persis pada semua perlakuan agar adil (misal: jenis tanaman sama, jenis tanah sama, jumlah air siraman sama).'
    ],
    rumus: [
      'Variabel Bebas = Penyebab yang sengaja dimanipulasi',
      'Variabel Terikat = Akibat/respon yang diukur',
      'Variabel Kontrol = Kondisi yang dijaga konstan/sama'
    ],
    perhatikan: [
      'Eksperimen yang adil hanya boleh memiliki SATU variabel bebas yang berbeda di tiap kelompok uji!',
      'Biogas dihasilkan dari proses fermentasi anaerob kotoran ternak menghasilkan gas metana untuk memasak.'
    ],
    contohSoal: {
      tanya: 'Dalam percobaan menguji pengaruh jumlah pupuk terhadap pertumbuhan tinggi tanaman jagung, yang menjadi variabel bebas adalah ...',
      kunci: 'Takaran atau jumlah pupuk yang diberikan',
      bahas: 'Variabel bebas adalah faktor yang sengaja diubah-ubah variasinya oleh peneliti untuk melihat pengaruhnya terhadap pertumbuhan tanaman.'
    },
    tags: ['energi alternatif', 'terbarukan', 'biogas', 'metode ilmiah', 'variabel bebas', 'variabel terikat', 'variabel kontrol'],
    svgIllustration: null,
    captionGambar: null
  }
];

// =============================================================================
// MODUL IPS (14 MODUL: KELAS 4: 4, KELAS 5: 5, KELAS 6: 5)
// =============================================================================
const ipsModules = [
  // KELAS 4 IPS
  {
    id: 'ips-4-1',
    kelas: 4,
    mapel: 'IPS',
    kategori: 'IPS - Sejarah Daerah',
    judul: '🏛️ Cerita Daerahku: Kerajaan Nusantara & Peninggalan Sejarah',
    icon: '🏛️',
    ringkasan: 'Nusantara memiliki jejak sejarah yang agung! Dari kerajaan Hindu tertua Kutai di Kalimantan Timur, kerajaan Buddha Sriwijaya pusat maritim dunia, Majapahit pemersatu nusantara, hingga kerajaan Islam Samudera Pasai dan Gowa-Tallo.',
    poinPenting: [
      'Kerajaan Hindu Tertua: Kerajaan Kutai di Kalimantan Timur (Raja Mulawarman, peninggalan prasasti Yupa bertuliskan huruf Pallawa).',
      'Kerajaan Tarumanegara di Jawa Barat (Raja Purnawarman yang menggali Sungai Gomati, prasasti Ciaruteun dengan telapak kaki raja).',
      'Kerajaan Sriwijaya di Palembang: Kerajaan maritim dan pusat pendidikan agama Buddha terbesar di Asia Tenggara (Raja Balaputradewa).',
      'Kerajaan Majapahit di Jawa Timur: Mencapai puncak kejayaan pada masa Raja Hayam Wuruk dan Mahapatih Gajah Mada dengan Sumpah Palapa untuk mempersatukan wilayah Nusantara.',
      'Kerajaan Islam Nusantara: Samudera Pasai (kerajaan Islam pertama di Aceh, Sultan Malik As-Saleh), Demak di Jawa (Raden Patah), dan Kerajaan Gowa-Tallo di Makassar Sulawesi Selatan (Sultan Hasanuddin).'
    ],
    rumus: [
      'Sumpah Palapa Patih Gajah Mada: Tekad mempersatukan seluruh pulau di Nusantara di bawah panji Majapahit',
      'Julukan Sultan Hasanuddin: Ayam Jantan dari Timur (karena kegigihannya melawan monopoli penjajah Belanda)'
    ],
    perhatikan: [
      'Prasasti Yupa berbentuk tiang batu tugu pengorbanan tempat mengikat hewan kurban hadiah Raja Mulawarman.',
      'Candi Borobudur adalah peninggalan agama Buddha (Dinasti Syailendra), sedangkan Candi Prambanan adalah peninggalan agama Hindu (Rakai Pikatan).'
    ],
    contohSoal: {
      tanya: 'Mahapatih dari Kerajaan Majapahit yang mengucapkan Sumpah Palapa untuk mempersatukan Nusantara bernama ...',
      kunci: 'Gajah Mada',
      bahas: 'Patih Gajah Mada bersumpah tidak akan menikmati kesenangan duniawi (palapa) sebelum berhasil menyatukan wilayah kepulauan Nusantara di bawah Kerajaan Majapahit.'
    },
    tags: ['sejarah nusantara', 'kerajaan hindu buddha', 'sriwijaya', 'majapahit', 'sumpah palapa', 'gowa tallo', 'hasanuddin'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-4-2',
    kelas: 4,
    mapel: 'IPS',
    kategori: 'IPS - Geografi & Peta',
    judul: '🗺️ Peta dan Kenampakan Alam Lingkungan Kita',
    icon: '🗺️',
    ringkasan: 'Melihat bumi dari atas kertas! Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu. Kenampakan alam daratan dan perairan mempengaruhi mata pencaharian dan cara hidup masyarakat.',
    poinPenting: [
      'Komponen Lengkap Peta: 1) Judul Peta, 2) Skala (perbandingan jarak di peta dengan jarak nyata), 3) Petunjuk Arah Mata Angin (orientasi Utara), 4) Simbol Peta & Legenda (keterangan arti simbol), 5) Garis Astronomis (garis lintang & bujur), 6) Peta Inset (peta kecil penunjuk kedudukan wilayah luas).',
      'Warna pada Peta: Hijau (dataran rendah 0-200 m), Kuning (dataran tinggi), Cokelat (pegunungan), Biru muda (perairan dangkal), Biru tua (laut dalam).',
      'Kenampakan Alam Daratan: Dataran rendah (cocok untuk pertanian padi, industri, permukiman), Dataran tinggi (perkebunan teh, kopi, sayuran, tempat wisata sejuk), Pegunungan dan lembah.',
      'Kenampakan Alam Perairan: Sungai, danau, rawa, selat (laut sempit penghubung dua pulau), teluk (laut yang menjorok ke daratan), dan tanjung (daratan menjorok ke laut).'
    ],
    rumus: [
      'Skala Peta = Jarak Peta (JP) : Jarak Sebenarnya (JS)',
      'Inset Peta: Peta kecil tambahan untuk memperjelas posisi wilayah yang dipetakan terhadap kawasan yang lebih luas'
    ],
    perhatikan: [
      'Dataran tinggi memiliki suhu sejuk sehingga sangat cocok untuk kebun teh dan sayur, sedangkan dataran rendah dekat sungai adalah pusat permukiman warga.',
      'Legenda adalah kolom kotak khusus yang memuat arti dari seluruh simbol warna, garis, dan titik pada peta.'
    ],
    contohSoal: {
      tanya: 'Mata pencaharian penduduk yang tinggal di daerah dataran tinggi umumnya adalah ...',
      kunci: 'Petani perkebunan teh, kopi, atau sayur-sayuran',
      bahas: 'Suhu dingin dan tanah vulkanik yang subur di dataran tinggi sangat mendukung pertumbuhan tanaman subtropis seperti teh, sayuran kubis/wortel, dan kopi.'
    },
    tags: ['peta', 'komponen peta', 'legenda', 'inset', 'kenampakan alam', 'dataran rendah', 'dataran tinggi'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-4-3',
    kelas: 4,
    mapel: 'IPS',
    kategori: 'IPS - Budaya & Masyarakat',
    judul: '🇮🇩 Keragaman Budaya dan Kearifan Lokal Nusantara',
    icon: '🇮🇩',
    ringkasan: 'Indonesia adalah mozaik budaya terindah di dunia! Terbentang dari Sabang sampai Merauke dengan ribuan suku bangsa, rumah adat unik, tarian megah, dan kearifan lokal yang hidup harmonis dengan alam.',
    poinPenting: [
      'Bhinneka Tunggal Ika: Semboyan pemersatu bangsa dari Kitab Sutasoma karangan Mpu Tantular yang bermakna "Berbeda-beda tetapi tetap satu jua".',
      'Keragaman Suku: Suku Jawa, Sunda, Batak, Minangkabau, Bugis, Makassar, Toraja, Dayak, Asmat, Dani, dan ratusan suku lainnya.',
      'Rumah Adat Khas: Rumah Gadang (atap melengkung seperti tanduk kerbau dari Sumatera Barat), Rumah Tongkonan (Toraja Sulsel), Rumah Joglo (Jawa Tengah), Rumah Honai (Papua).',
      'Kearifan Lokal Penjaga Alam: Subak di Bali (sistem irigasi persawahan berbasis gotong royong dan spiritual), Tradisi Hutan Larangan (larangan menebang pohon keramat penjaga mata air), Pembuatan Perahu Pinisi (seni maritim masyarakat Bugis-Makassar di Bulukumba yang diakui UNESCO).',
      'Sikap Menghargai Keragaman: Toleransi, tidak meremehkan budaya suku lain, gotong royong, dan bangga mengenakan batik nusantara.'
    ],
    rumus: [
      'Semboyan Bangsa: Bhinneka Tunggal Ika (Kitab Sutasoma)',
      'Kearifan Lokal: Nilai luhur turun-temurun masyarakat setempat dalam menjaga keharmonisan dengan sesama dan alam sekitar'
    ],
    perhatikan: [
      'Menghormati perbedaan budaya dan agama adalah kunci menjaga keutuhan Negara Kesatuan Republik Indonesia (NKRI).',
      'Rumah adat panggung khas suku Bugis dan Makassar dibuat tinggi dari kayu tanpa paku besi agar tahan guncangan gempa.'
    ],
    contohSoal: {
      tanya: 'Sistem pengairan sawah tradisional di Bali yang mencerminkan kearifan lokal gotong royong disebut ...',
      kunci: 'Subak',
      bahas: 'Subak adalah organisasi kemasyarakatan petani di Bali yang mengatur pembagian air irigasi secara adil, demokratis, dan berlandaskan filosofi Tri Hita Karana.'
    },
    tags: ['keragaman budaya', 'rumah adat', 'suku bangsa', 'kearifan lokal', 'subak', 'pinisi', 'bhinneka tunggal ika'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-4-4',
    kelas: 4,
    mapel: 'IPS',
    kategori: 'IPS - Kegiatan Ekonomi',
    judul: '🍞 Kebutuhan Manusia & Kegiatan Ekonomi: Produksi, Distribusi, Konsumsi',
    icon: '🍞',
    ringkasan: 'Bagaimana roti sampai di mejamu setiap pagi? Ada pabrik yang mengolah tepung (Produksi), ada truk yang mengantarkannya ke toko (Distribusi), dan ada kamu yang membelinya untuk sarapan (Konsumsi)!',
    poinPenting: [
      'Tingkatan Kebutuhan Manusia:',
      '1) Kebutuhan Primer: Kebutuhan mutlak yang harus dipenuhi untuk bertahan hidup: sandang (pakaian), pangan (makanan), papan (tempat tinggal).',
      '2) Kebutuhan Sekunder: Kebutuhan pelengkap kenyamanan hidup setelah primer terpenuhi (meja belajar, lemari, sepeda, ponsel).',
      '3) Kebutuhan Tersier: Kebutuhan barang mewah untuk kesenangan atau status sosial (mobil mewah, liburan ke luar negeri, perhiasan emas).',
      'Tiga Serangkai Kegiatan Ekonomi:',
      '• Produksi: Kegiatan menghasilkan atau menambah nilai guna barang/jasa. Pelakunya disebut Produsen (petani menanam padi, pabrik tekstil).',
      '• Distribusi: Kegiatan menyalurkan barang dari produsen ke konsumen. Pelakunya disebut Distributor (pedagang grosir, kurir paket, sopir truk).',
      '• Konsumsi: Kegiatan memakai atau menghabiskan nilai guna barang/jasa. Pelakunya disebut Konsumen (kita yang memakan nasi, siswa yang memakai seragam).',
      'Perkembangan Alat Tukar: Dari sistem Barter (tukar menukar barang dengan barang yang sulit karena butuh kecocokan kehendak) berkembang menjadi Uang Kartal (uang kertas & logam resmi negara) dan Uang Digital modern.'
    ],
    rumus: [
      'Alur Kegiatan Ekonomi: Produsen → Distributor → Konsumen',
      'Faktor Produksi: Sumber daya alam (tanah/bahan baku), Tenaga kerja, Modal, dan Keterampilan wirausaha'
    ],
    perhatikan: [
      'Kebutuhan primer SELALU didahulukan sebelum membeli barang sekunder atau tersier!',
      'Kelemahan sistem barter di masa kuno adalah sulitnya menentukan nilai tukar yang seimbang antar-kedua barang.'
    ],
    contohSoal: {
      tanya: 'Ibu membeli beras di pasar tradisional lalu memasaknya menjadi nasi untuk sarapan keluarga. Kegiatan yang dilakukan ibu termasuk kegiatan ...',
      kunci: 'Konsumsi (Ibu sebagai Konsumen)',
      bahas: 'Membeli dan menghabiskan atau memanfaatkan barang kebutuhan untuk memenuhi keperluan hidup sehari-hari adalah definisi dari kegiatan konsumsi.'
    },
    tags: ['kebutuhan hidup', 'kebutuhan primer', 'produksi', 'distribusi', 'konsumsi', 'produsen', 'barter'],
    svgIllustration: SVG_SCIENCE.alurEkonomi,
    captionGambar: 'Kegiatan Ekonomi: Alur produksi membuat barang, distribusi menyalurkan, dan konsumsi menghabiskan barang.'
  },

  // KELAS 5 IPS
  {
    id: 'ips-5-1',
    kelas: 5,
    mapel: 'IPS',
    kategori: 'IPS - Geografi Indonesia',
    judul: '🇮🇩 Letak Geografis, Letak Astronomis, & 3 Zona Waktu Indonesia',
    icon: '🇮🇩',
    ringkasan: 'Indonesia berada di persimpangan emas dunia! Terjepit di antara dua benua besar dan dua samudra raya, negeri kita memiliki posisi silang strategis jalur perdagangan dunia, iklim tropis yang subur, serta tiga zona waktu yang unik.',
    poinPenting: [
      'Letak Geografis Indonesia: Terletak di antara 2 Benua (Benua Asia di utara dan Benua Australia di selatan) serta di antara 2 Samudra (Samudra Pasifik di timur laut dan Samudra Hindia di barat daya).',
      'Pengaruh Letak Geografis: 1) Berada di jalur lalu lintas perdagangan internasional dunia (Selat Malaka), 2) Mengalami angin muson barat (musim hujan) dan angin muson timur (musim kemarau).',
      'Letak Astronomis Indonesia: 6° LU – 11° LS dan 95° BT – 141° BT. Pengaruhnya: Indonesia beriklim tropis, mendapat sinar matahari sepanjang tahun, curah hujan tinggi, dan dilewati garis khatulistiwa (0°).',
      '3 Zona Waktu Indonesia (Garis Bujur 15° = Selisih 1 Jam):',
      '• WIB (Waktu Indonesia Barat, GMT+7): Sumatera, Jawa, Madura, Kalimantan Barat, Kalimantan Tengah.',
      '• WITA (Waktu Indonesia Tengah, GMT+8): Kalimantan Selatan, Kalimantan Timur, Kalimantan Utara, Sulawesi, Bali, NTB, NTT.',
      '• WIT (Waktu Indonesia Timur, GMT+9): Kepulauan Maluku dan Papua.',
      'Selisih Waktu: WIT lebih cepat 2 jam dari WIB, dan lebih cepat 1 jam dari WITA.'
    ],
    rumus: [
      'Letak Astronomis: 6° LU - 11° LS & 95° BT - 141° BT (Iklim Tropis)',
      'Rumus Zona Waktu: Jika Jakarta (WIB) jam 07.00, maka Makassar (WITA) jam 08.00, dan Jayapura (WIT) jam 09.00'
    ],
    perhatikan: [
      'Makin ke timur, matahari terbit lebih awal! Jika kamu menelepon teman di Papua dari Jakarta pukul 07.00 WIB, di Papua sudah pukul 09.00 WIT!',
      'Garis Lintang mempengaruhi iklim (tropis), sedangkan Garis Bujur mempengaruhi pembagian zona waktu.'
    ],
    contohSoal: {
      tanya: 'Jika pertandingan sepak bola di kota Padang (Sumatera Barat) dimulai pada pukul 15.00 WIB, maka penonton di kota Jayapura (Papua) dapat menyaksikannya pada pukul ...',
      kunci: '17.00 WIT',
      bahas: 'Padang berada di zona WIB dan Jayapura di zona WIT. Selisih waktu WIT adalah 2 jam lebih cepat dari WIB. Maka 15.00 + 2 jam = 17.00 WIT.'
    },
    tags: ['letak geografis', 'letak astronomis', 'zona waktu', 'wib', 'wita', 'wit', 'iklim tropis'],
    svgIllustration: SVG_SCIENCE.zonaWaktu,
    captionGambar: 'Tiga Zona Waktu Indonesia: Wilayah WIB, WITA, dan WIT yang memiliki selisih waktu 1 jam berurutan.'
  },

  {
    id: 'ips-5-2',
    kelas: 5,
    mapel: 'IPS',
    kategori: 'IPS - Flora & Fauna Nusantara',
    judul: '🦏 Kekayaan Hayati & Keragaman Flora Fauna Nusantara',
    icon: '🦏',
    ringkasan: 'Indonesia dijuluki Zamrud Khatulistiwa berkat hutan tropisnya yang kaya! Alfred Russel Wallace dan Max Weber meneliti bahwa satwa Indonesia terbagi menjadi tiga tipe unik: Tipe Asiatis, Tipe Peralihan khas, dan Tipe Australis berbulu indah.',
    poinPenting: [
      'Garis Khayal Wallace dan Weber: Garis Wallace memisahkan tipe Asiatis dengan Peralihan. Garis Weber memisahkan tipe Peralihan dengan Australis.',
      'Fauna Tipe Asiatis (Bagian Barat: Sumatera, Jawa, Kalimantan): Didominasi mamalia berukuran besar dan kera. Contoh: Gajah sumatera, Harimau sumatera, Badak bercula satu di Ujung Kulon, Orangutan, Bekantan.',
      'Fauna Tipe Peralihan / Endemik (Bagian Tengah: Sulawesi, Kepulauan Nusa Tenggara, Maluku): Satwa asli khas yang hanya ada di Indonesia dan tidak ada di tempat lain di dunia. Contoh: Komodo di Pulau Komodo, Anoa, Babirusa, Burung Maleo bertelur pasir hangat.',
      'Fauna Tipe Australis (Bagian Timur: Papua dan sekitarnya): Didominasi burung-burung berbulu indah dan hewan berkantung. Contoh: Burung Cendrawasih (burung surga), Burung Kasuari, Kuskus, Kanguru pohon.',
      'Flora Khas Nusantara: Bunga Rafflesia arnoldii (bunga bangkai raksasa endemik Bengkulu), Bunga Melati Putih (Puspa Bangsa), Bunga Anggrek Bulan (Puspa Pesona).'
    ],
    rumus: [
      'Garis Wallace = Batas Barat (Asiatis) vs Tengah (Peralihan)',
      'Garis Weber = Batas Tengah (Peralihan) vs Timur (Australis)',
      'Fauna Endemik = Satwa yang hanya hidup di wilayah tertentu di dunia'
    ],
    perhatikan: [
      'Komodo, Anoa, dan Babirusa adalah satwa TIPE PERALIHAN khas Sulawesi dan NTT, bukan Asiatis!',
      'Hewan berkantung seperti kanguru pohon berada di Papua (tipe Australis).'
    ],
    contohSoal: {
      tanya: 'Hewan endemik Indonesia seperti komodo, anoa, dan babirusa digolongkan ke dalam fauna tipe ...',
      kunci: 'Tipe Peralihan (Fauna Bagian Tengah)',
      bahas: 'Fauna di Kepulauan Sulawesi dan Nusa Tenggara berada di antara garis Wallace dan Weber sehingga disebut fauna tipe peralihan yang memiliki keunikan satwa endemik tersendiri.'
    },
    tags: ['flora fauna', 'garis wallace', 'garis weber', 'tipe asiatis', 'tipe peralihan', 'tipe australis', 'fauna endemik'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-5-3',
    kelas: 5,
    mapel: 'IPS',
    kategori: 'IPS - Sejarah Penjajahan',
    judul: '⚔️ Perjuangan Bangsa Melawan Penjajah & Kebangkitan Nasional',
    icon: '⚔️',
    ringkasan: 'Perjuangan panjang para pahlawan merebut kemerdekaan! Daya tarik rempah-rempah memikat bangsa Eropa datang menjajah. Awalnya perjuangan bersifat kedaerahan yang mudah diadu domba, hingga bangsa kita bersatu dalam Kebangkitan Nasional 1908 dan Sumpah Pemuda 1928!',
    poinPenting: [
      'Latar Belakang Penjajahan: Semboyan 3G (Gold: mencari kekayaan rempah-rempah, Glory: mencari kejayaan kekuasaan jajahan, Gospel: menyebarkan agama). Bangsa Portugis, Spanyol, dan Belanda berlayar ke Maluku.',
      'Kongsi Dagang VOC (1602): Didirikan Belanda dengan hak istimewa (Hak Octrooi) untuk memonopoli perdagangan rempah dan politik adu domba (Devide et Impera).',
      'Tanam Paksa (Cultuurstelsel, 1830): Diberlakukan oleh Gubernur Jenderal van den Bosch yang mewajibkan rakyat menanam komoditas ekspor kopi, tebu, dan nila sehingga rakyat sengsara dan kelaparan.',
      'Perlawanan Pahlawan Kedaerahan: Pattimura (Maluku), Pangeran Diponegoro (Perang Jawa 1825-1830), Tuanku Imam Bonjol (Perang Padri Sumatera Barat), Pangeran Antasari (Banjarmasin), I Gusti Ketut Jelantik (Bali), Sultan Hasanuddin (Makassar).',
      'Penyebab Kegagalan Perjuangan Sebelum 1908: Bersifat kedaerahan (belum bersatu), bergantung pada seorang pemimpin kharismatik (jika pemimpin tertangkap, perjuangan padam), dan persenjataan kalah modern.',
      'Titik Balik Kebangkitan Nasional: Berdirinya organisasi modern Budi Utomo pada 20 Mei 1908 dipelopori dr. Soetomo dan dr. Wahidin Sudirohusodo (diperingati sebagai Hari Kebangkitan Nasional).',
      'Ikrar Sumpah Pemuda (28 Oktober 1928): Kongres Pemuda II di Batavia mengikrarkan: Satu Tumpah Darah Tanah Air Indonesia, Satu Bangsa Bangsa Indonesia, dan Menjunjung Bahasa Persatuan Bahasa Indonesia. Lagu Indonesia Raya pertama kali dikumandangkan oleh W.R. Supratman.'
    ],
    rumus: [
      'Semboyan 3G: Gold (Kekayaan), Glory (Kejayaan), Gospel (Penyebaran Agama)',
      'Hari Kebangkitan Nasional: 20 Mei (Lahirnya Budi Utomo 1908)',
      'Hari Sumpah Pemuda: 28 Oktober (Kongres Pemuda II 1928)'
    ],
    perhatikan: [
      'Politik adu domba (Devide et Impera) VOC berhasil memecah belah kerajaan-kerajaan nusantara yang saling bersaudara.',
      'Sumpah Pemuda menyatukan organisasi kepemudaan daerah (Jong Java, Jong Sumatranen Bond, Jong Celebes, Jong Ambon) menjadi SATU nama: INDONESIA!'
    ],
    contohSoal: {
      tanya: 'Mengapa perjuangan bangsa Indonesia melawan penjajah sebelum tahun 1908 selalu mengalami kegagalan?',
      kunci: 'Karena perjuangan masih bersifat kedaerahan, belum bersatu secara nasional, dan persenjataan kalah modern',
      bahas: 'Sebelum tahun 1908, perlawanan rakyat masih terkotak-kotak di tiap daerah masing-masing sehingga penjajah Belanda dengan mudah mematahkan perlawanan satu per satu melalui taktik adu domba.'
    },
    tags: ['penjajahan', 'voc', 'tanam paksa', 'pahlawan kedaerahan', 'budi utomo', 'sumpah pemuda 1928', 'kebangkitan nasional'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-5-4',
    kelas: 5,
    mapel: 'IPS',
    kategori: 'IPS - Kemerdekaan Indonesia',
    judul: '🇮🇩 Detik-detik Menuju Proklamasi Kemerdekaan 17 Agustus 1945',
    icon: '🇮🇩',
    ringkasan: 'Momen paling menegangkan dalam sejarah bangsa! Menyerahnya Jepang dalam Perang Dunia II dimanfaatkan oleh para pemuda gagah berani untuk mendesak Bung Karno dan Bung Hatta memproklamasikan kemerdekaan Indonesia tanpa campur tangan bangsa asing!',
    poinPenting: [
      'Jepang Bertekuk Lutut (14 Agustus 1945): Kota Hiroshima dan Nagasaki di Jepang hancur dijatuhi bom atom oleh Sekutu Amerika Serikat, memaksa Jepang menyerah tanpa syarat.',
      'Peristiwa Rengasdengklok (16 Agustus 1945 dini hari): Golongan muda (Sukarni, Wikana, Chaerul Saleh) membawa Ir. Soekarno dan Drs. Moh. Hatta ke Rengasdengklok, Karawang. Tujuannya: menjauhkan kedua pemimpin dari pengaruh dan janji palsu kemerdekaan Jepang.',
      'Perumusan Teks Proklamasi: Disusun di ruang makan rumah Laksamana Tadashi Maeda di Jalan Imam Bonjol No. 1 Jakarta. Disusun oleh Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Achmad Soebardjo.',
      'Pengetikan Naskah: Naskah proklamasi yang ditulis tangan oleh Bung Karno diketik rapi oleh Sayuti Melik dengan beberapa perubahan kata (seperti kata "tempoh" menjadi "tempo").',
      'Penandatanganan Naskah: Atas usul Sukarni, naskah ditandatangani oleh Soekarno dan Hatta "atas nama bangsa Indonesia".',
      'Upacara Pembacaan Teks Proklamasi (Jumat, 17 Agustus 1945 pukul 10.00 WIB): Dibacakan oleh Bung Karno didampingi Bung Hatta di teras rumah Jalan Pegangsaan Timur No. 56 Jakarta.',
      'Pengibaran Sang Saka Merah Putih: Bendera dijahit tangan oleh Ibu Fatmawati Soekarno, dan dikibarkan oleh Latief Hendraningrat serta Suhud Sastrokusumo diiringi lagu Indonesia Raya.'
    ],
    rumus: [
      'Penyusun Teks Proklamasi: Soekarno, Hatta, Achmad Soebardjo',
      'Pengetik Teks: Sayuti Melik | Penjahit Bendera: Ibu Fatmawati',
      'Lokasi Bersejarah: Jl. Pegangsaan Timur No. 56 Jakarta (Pukul 10.00 WIB)'
    ],
    perhatikan: [
      'Teks proklamasi awalnya direncanakan dibacakan di Lapangan Ikada, tetapi dialihkan ke kediaman Bung Karno untuk menghindari bentrokan senjata dengan tentara militer Jepang.',
      'Kemerdekaan Indonesia adalah HASIL PERJUANGAN DAN DARAH SENDIRI, bukan hadiah pemberian dari Jepang!'
    ],
    contohSoal: {
      tanya: 'Tujuan utama para pemuda membawa Ir. Soekarno dan Drs. Moh. Hatta ke Rengasdengklok pada tanggal 16 Agustus 1945 adalah ...',
      kunci: 'Menjauhkan Soekarno-Hatta dari pengaruh dan intervensi tentara Jepang agar kemerdekaan segera diproklamasikan',
      bahas: 'Golongan pemuda ingin memastikan proklamasi lahir murni dari kekuatan dan kehendak bangsa Indonesia sendiri, bebas dari janji dan kendali militer Jepang.'
    },
    tags: ['proklamasi', 'rengasdengklok', 'soekarno hatta', 'sayuti melik', 'fatmawati', '17 agustus 1945'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-5-5',
    kelas: 5,
    mapel: 'IPS',
    kategori: 'IPS - Usaha Ekonomi & Pasar',
    judul: '🏷️ Bentuk Usaha Ekonomi Masyarakat, Koperasi, & Hukum Pasar',
    icon: '🏷️',
    ringkasan: 'Roda perekonomian berputar lewat aneka usaha! Ada usaha perseorangan seperti warung dan petani, ada badan usaha kelompok seperti PT dan CV, serta Koperasi yang berlandaskan gotong royong kekeluargaan.',
    poinPenting: [
      'Usaha Ekonomi Perseorangan: Dikelola sendiri dengan modal mandiri. Keuntungan dinikmati sendiri, tetapi kerugian ditanggung sendiri. Contoh: pedagang bakso keliling, toko kelontong, petani sawah.',
      'Usaha Ekonomi Kelompok: Dikelola bersama oleh beberapa orang pemodal: 1) Firma (didirikan minimal 2 orang yang saling kenal, risiko ditanggung bersama), 2) CV / Persekutuan Komanditer (ada sekutu aktif pengelola dan sekutu pasif penanam modal), 3) PT / Perseroan Terbatas (modal berupa kumpulan saham), 4) BUMN (Badan Usaha Milik Negara yang mengelola cabang produksi vital: PLN, Pertamina, PT KAI).',
      'Koperasi: Badan usaha yang beranggotakan orang-seorang berdasarkan asas KEKELUARGAAN dan GOTONG ROYONG untuk menyejahterakan anggota (Bapak Koperasi Indonesia: Drs. Moh. Hatta). Modal koperasi berasal dari simpanan pokok, simpanan wajib, dan simpanan sukarela.',
      'Hukum Penawaran dan Permintaan Pasar: 1) Jika pasokan barang banyak melimpah (musim panen) tetapi pembeli sedikit, maka harga barang akan TURUN (murah). 2) Sebaliknya jika barang langka/sedikit tetapi pembeli banyak menginginkannya, maka harga barang akan NAIK (mahal).'
    ],
    rumus: [
      'Asas Koperasi = Kekeluargaan (Pasal 33 UUD 1945 ayat 1)',
      'Tujuan Utama Koperasi = Menyejahterakan seluruh anggota, bukan semata-mata mencari keuntungan pribadi',
      'SHU (Sisa Hasil Usaha) = Keuntungan bersih koperasi yang dibagikan secara adil kepada seluruh anggota di akhir tahun'
    ],
    perhatikan: [
      'Tujuan utama PT adalah mencari keuntungan laba finansial dividen, sedangkan Koperasi tujuannya adalah kesejahteraan bersama anggotanya.',
      'Bapak Koperasi Indonesia adalah Wakil Presiden pertama kita: Drs. Mohammad Hatta.'
    ],
    contohSoal: {
      tanya: 'Bentuk badan usaha di Indonesia yang sesuai dengan UUD 1945 Pasal 33 ayat 1 dan berlandaskan asas kekeluargaan adalah ...',
      kunci: 'Koperasi',
      bahas: 'Koperasi adalah sokoguru perekonomian nasional Indonesia yang dibangun atas dasar usaha bersama dan gotong royong kekeluargaan untuk kepentingan seluruh anggota.'
    },
    tags: ['badan usaha', 'koperasi', 'bumn', 'pt', 'cv', 'hukum pasar', 'mohammad hatta'],
    svgIllustration: null,
    captionGambar: null
  },

  // KELAS 6 IPS
  {
    id: 'ips-6-1',
    kelas: 6,
    mapel: 'IPS',
    kategori: 'IPS - Kawasan ASEAN',
    judul: '🌏 Mengenal Negara-negara Anggota ASEAN di Asia Tenggara',
    icon: '🌏',
    ringkasan: 'Tetangga terdekat kita di Asia Tenggara bersatu dalam wadah ASEAN! Didirikan tahun 1967 untuk menjaga perdamaian dan stabilitas regional, kini 10 negara bersahabat erat membangun kemakmuran bersama.',
    poinPenting: [
      'Berdirinya ASEAN: Association of Southeast Asian Nations didirikan melalui penandatanganan Deklarasi Bangkok pada 8 Agustus 1967 di Bangkok, Thailand.',
      '5 Tokoh Menteri Luar Negeri Pendiri ASEAN: 1) Adam Malik (Indonesia), 2) Tun Abdul Razak (Malaysia), 3) Narciso Ramos (Filipina), 4) S. Rajaratnam (Singapura), 5) Thanat Khoman (Thailand).',
      '10 Negara Anggota ASEAN & Ibu Kotanya: Indonesia (Jakarta), Malaysia (Kuala Lumpur), Singapura (Singapura), Thailand (Bangkok), Filipina (Manila), Brunei Darussalam (Bandar Seri Begawan), Vietnam (Hanoi), Laos (Vientiane), Myanmar (Naypyidaw), Kamboja (Phnom Penh).',
      'Karakteristik Geografis Unik:',
      '• Thailand adalah satu-satunya negara di ASEAN yang TIDAK PERNAH DIJAJAH oleh bangsa Eropa (dijuluki Negeri Gajah Putih / Lumbung Padi Asia Tenggara).',
      '• Laos adalah satu-satunya negara ASEAN yang TIDAK MEMILIKI WILAYAH LAUT (*The Landlocked Country*), wilayahnya dikelilingi daratan negara lain.',
      '• Singapura adalah negara tersempit di ASEAN tetapi memiliki pelabuhan transit tersibuk dan perekonomian termaju.',
      '• Brunei Darussalam adalah negara monarki kaya raya penghasil minyak bumi dan gas alam.'
    ],
    rumus: [
      'Deklarasi Bangkok: 8 Agustus 1967 (Hari Lahir ASEAN)',
      '5 Negara Pelopor: Indonesia, Malaysia, Thailand, Filipina, Singapura',
      'Gedung Sekretariat Utama ASEAN terletak di Jakarta, Indonesia'
    ],
    perhatikan: [
      'Jangan sampai lupa! Satu-satunya negara ASEAN yang tidak memiliki laut adalah LAOS!',
      'Thailand dijuluki "Muang Thai" yang berarti "Negeri Kebebasan" karena tidak pernah dijajah.'
    ],
    contohSoal: {
      tanya: 'Satu-satunya negara anggota ASEAN yang wilayah daratannya terkurung dan tidak memiliki garis pantai atau laut sama sekali adalah ...',
      kunci: 'Laos',
      bahas: 'Wilayah Laos berbatasan langsung dengan daratan Tiongkok, Vietnam, Kamboja, Thailand, dan Myanmar, sehingga negara ini tidak memiliki akses laut terbuka.'
    },
    tags: ['asean', 'deklarasi bangkok 1967', 'tokoh pendiri', 'adam malik', 'thailand', 'laos', 'asia tenggara'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-6-2',
    kelas: 6,
    mapel: 'IPS',
    kategori: 'IPS - Kerjasama Internasional',
    judul: '🤝 Kerja Sama Indonesia dalam Lingkup ASEAN: Politik, Ekonomi, & Sosial',
    icon: '🤝',
    ringkasan: 'Sebagai negara terbesar di Asia Tenggara, Indonesia menjadi poros penggerak ASEAN! Kerja sama terjalin di bidang politik keamanan menjaga perdamaian, ekonomi bebas bea cukai, hingga pesta olahraga SEA Games!',
    poinPenting: [
      'Kerja Sama Bidang Politik & Keamanan: 1) Deklarasi ZOPFAN (Zone of Peace, Freedom, and Neutrality) kawasan bebas senjata nuklir dan damai, 2) Perjanjian ekstradisi penyerahan buronan kejahatan antar-negara ASEAN, 3) Penyelesaian sengketa Laut Natuna dan Laut Cina Selatan secara damai melalui hukum laut internasional UNCLOS.',
      'Kerja Sama Bidang Ekonomi: 1) Pembentukan kawasan perdagangan bebas AFTA (ASEAN Free Trade Area) untuk menurunkan tarif bea masuk barang antar-negara, 2) Pemberlakuan MEA (Masyarakat Ekonomi ASEAN) yang membebaskan arus barang, jasa, modal, dan tenaga kerja terampil, 3) Proyek industri bersama seperti pabrik pupuk ASEAN Urea Project di Aceh Indonesia dan Bintulu Malaysia.',
      'Kerja Sama Bidang Sosial Budaya: 1) Penyelenggaraan pesta olahraga negara-negara Asia Tenggara SEA Games setiap dua tahun sekali, 2) Pertukaran festival budaya dan seni nusantara, 3) Bantuan tanggap bencana darurat kemanusiaan melalui AHA Centre.',
      'Kerja Sama Bidang Pendidikan: Pertukaran pelajar antar-universitas ASEAN, beasiswa pendidikan ASEAN University Network (AUN), dan penyelarasan standar kurikulum ijazah.'
    ],
    rumus: [
      'ZOPFAN = Kawasan Damai, Bebas, dan Netral',
      'AFTA = ASEAN Free Trade Area (Kawasan Perdagangan Bebas ASEAN)',
      'MEA = Masyarakat Ekonomi ASEAN'
    ],
    perhatikan: [
      'MEA (Masyarakat Ekonomi ASEAN) membuat tenaga kerja profesional dari negara tetangga seperti dokter dan insinyur bisa bekerja di Indonesia, begitu juga sebaliknya!',
      'SEA Games adalah lambang persahabatan olahraga pemuda se-Asia Tenggara.'
    ],
    contohSoal: {
      tanya: 'Perjanjian kerja sama politik ASEAN yang menegaskan kawasan Asia Tenggara sebagai wilayah yang damai, bebas, dan netral dikenal dengan nama ...',
      kunci: 'ZOPFAN (Zone of Peace, Freedom, and Neutrality)',
      bahas: 'ZOPFAN ditandatangani di Kuala Lumpur pada tahun 1971 sebagai komitmen bersama untuk menjaga stabilitas kawasan Asia Tenggara agar bebas dari pengaruh campur tangan kekuatan luar.'
    },
    tags: ['kerja sama asean', 'zopfan', 'afta', 'mea', 'sea games', 'politik luar negeri'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-6-3',
    kelas: 6,
    mapel: 'IPS',
    kategori: 'IPS - Globalisasi',
    judul: '🌐 Indonesia di Era Globalisasi: Pengaruh & Sikap Bijak',
    icon: '🌐',
    ringkasan: 'Dunia kini ada di genggaman tanganmu! Globalisasi membuat batas antarnegara seolah sirna. Berita di benua Eropa bisa kita tonton detik itu juga lewat internet. Namun kita harus pandai menyaring budaya asing dengan benteng Pancasila!',
    poinPenting: [
      'Pengertian Globalisasi: Proses mendunia di mana informasi, pemikiran, gaya hidup, dan teknologi menyebar luas melintasi batas-batas geografis negara tanpa hambatan.',
      'Faktor Pemicu Globalisasi: Pesatnya perkembangan teknologi internet, telekomunikasi gawai pintar (smartphone), kemajuan transportasi udara modern (pesawat terbang), dan perdagangan bebas internasional.',
      'Dampak Positif Globalisasi: 1) Kemudahan mengakses ilmu pengetahuan dan informasi dunia, 2) Komunikasi lintas negara menjadi sangat cepat dan murah, 3) Produk kerajinan lokal (seperti batik dan kopi nusantara) bisa diekspor dan dikenal dunia, 4) Kemajuan teknologi medis dan industri.',
      'Dampak Negatif Globalisasi: 1) Masuknya budaya individualisme dan gaya hidup konsumtif/hedonisme yang bertentangan dengan adat timur, 2) Lunturnya kecintaan pada lagu dan tarian daerah sendiri, 3) Menjamurnya produk impor yang mengancam UMKM lokal jika produk lokal kalah bersaing.',
      'Sikap Bijak Menghadapi Globalisasi: Memilih dan menyaring budaya asing dengan pedoman nilai Pancasila, mencintai dan bangga membeli produk buatan dalam negeri (Gerakan Nasional Bangga Buatan Indonesia), serta melestarikan adat budaya leluhur.'
    ],
    rumus: [
      'Kunci Menyikapi Globalisasi: Terbuka pada kemajuan IPTEK, Teguh pada Jati Diri Bangsa & Budaya Pancasila',
      'Cinta Produk Lokal: Membeli produk UMKM dalam negeri memperkuat perekonomian bangsa'
    ],
    perhatikan: [
      'Menolak seluruh hal asing adalah sikap keliru, meniru mentah-mentah budaya barat juga salah. Yang benar adalah MENYARING (selektif) dengan nilai luhur Pancasila!',
      'Gunakan internet dan gawai untuk belajar hal positif, bukan untuk menyebarkan hoaks atau terjebak kecanduan game.'
    ],
    contohSoal: {
      tanya: 'Salah satu wujud nyata sikap positif seorang pelajar dalam menghadapi era globalisasi adalah ...',
      kunci: 'Memanfaatkan teknologi internet untuk belajar sambil tetap melestarikan budaya dan bangga produk lokal',
      bahas: 'Sikap selektif dan bijak dalam globalisasi adalah mengambil manfaat kemajuan teknologi modern untuk kemajuan diri, tanpa meninggalkan akar budaya dan cinta tanah air.'
    },
    tags: ['globalisasi', 'dampak positif', 'dampak negatif', 'teknologi informasi', 'cinta produk indonesia', 'pancasila'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-6-4',
    kelas: 6,
    mapel: 'IPS',
    kategori: 'IPS - Hubungan Internasional',
    judul: '🕊️ Peran Indonesia di Panggung Dunia: Politik Luar Negeri Bebas Aktif',
    icon: '🕊️',
    ringkasan: 'Indonesia adalah pelopor perdamaian dunia! Dengan pedoman politik luar negeri Bebas Aktif, Indonesia tidak memihak blok adidaya mana pun, melainkan aktif menjadi jembatan perdamaian di PBB, memprakarsai KAA Bandung 1955, hingga mengirim pasukan perdamaian Garuda!',
    poinPenting: [
      'Politik Luar Negeri "Bebas Aktif":',
      '• Bebas: Indonesia tidak memihak kepada salah satu blok kekuatan dunia mana pun (seperti Blok Barat atau Blok Timur pada masa Perang Dingin).',
      '• Aktif: Indonesia berperan secara nyata dan aktif dalam meredakan ketegangan konflik dunia dan memperjuangkan kemerdekaan bangsa-bangsa terjajah.',
      'Konferensi Asia Afrika (KAA) 1955 di Bandung: Diprakarsai oleh Perdana Menteri Indonesia Ali Sastroamidjojo bersama para pemimpin India, Myanmar, Pakistan, dan Sri Lanka. Menghasilkan "Dasa Sila Bandung" yang menginspirasi kemerdekaan banyak negara di benua Asia dan Afrika.',
      'Gerakan Non-Blok (GNB / NAM): Didirikan pada Konferensi Beograd 1961 dipelopori oleh Presiden Soekarno (Indonesia), Joseph Broz Tito (Yugoslavia), Gamal Abdul Nasser (Mesir), Jawaharlal Nehru (India), dan Kwame Nkrumah (Ghana).',
      'Pasukan Kontingen Garuda (Konga): Pasukan Tentara Nasional Indonesia yang dikirim ke berbagai negara konflik (Timur Tengah, Kongo, Lebanon) di bawah bendera perdamaian PBB (Perserikatan Bangsa-Bangsa).',
      'Peran dalam G20 dan ASEAN: Indonesia aktif menyuarakan keadilan ekonomi bagi negara berkembang.'
    ],
    rumus: [
      'Prinsip Hubungan Internasional Indonesia: Bebas Aktif (Dasar hukum: Pembukaan UUD 1945 alinea IV "ikut melaksanakan ketertiban dunia")',
      'KAA Bandung 1955 → Melahirkan Dasa Sila Bandung & Mengawali Gerakan Non-Blok (GNB)'
    ],
    perhatikan: [
      'Politik Bebas Aktif BUKAN berarti netral pasif tanpa peduli! Indonesia tetap aktif mengecam penjajahan dan membela hak kemerdekaan bangsa lain.',
      'Kontingen Garuda bertugas sebagai penjaga perdamaian (peacekeeper) PBB, bukan untuk berperang membela salah satu pihak.'
    ],
    contohSoal: {
      tanya: 'Konferensi bersejarah di kota Bandung pada tahun 1955 yang memelopori persatuan bangsa-bangsa Asia dan Afrika bernama ...',
      kunci: 'Konferensi Asia Afrika (KAA)',
      bahas: 'KAA di Gedung Merdeka Bandung tahun 1955 melahirkan Dasa Sila Bandung yang membangkitkan semangat kemerdekaan bagi negara-negara terjajah di benua Asia dan Afrika.'
    },
    tags: ['politik bebas aktif', 'kaa 1955', 'dasa sila bandung', 'gerakan non blok', 'kontingen garuda', 'pbb'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'ips-6-5',
    kelas: 6,
    mapel: 'IPS',
    kategori: 'IPS - Literasi Finansial',
    judul: '💰 Literasi Finansial: Mengelola Uang, Kebutuhan vs Keinginan, & Perbankan',
    icon: '💰',
    ringkasan: 'Cerdas mengelola uang sejak dini adalah kunci masa depan gemilang! Belajarlah membedakan antara kebutuhan penting dengan sekadar keinginan sesaat. Menabung di bank bukan hanya aman, tetapi juga membantu perekonomian negaramu!',
    poinPenting: [
      'Membedakan Kebutuhan vs Keinginan:',
      '• Kebutuhan: Hal mendasar yang wajib dipenuhi demi kelangsungan hidup dan pendidikan (makanan sehat, seragam sekolah, buku pelajaran, obat saat sakit). Jika tidak dipenuhi, hidupmu akan terganggu.',
      '• Keinginan: Hal tambahan yang ingin dimiliki untuk kesenangan atau hiburan sesaat (mainan terbaru, sepatu bermerek mahal, jajan berlebihan). Jika tidak dipenuhi, kamu tetap bisa hidup sehat dan belajar dengan baik.',
      'Menyusun Skala Prioritas: Mengurutkan daftar belanja dari yang paling mendesak dan penting di nomor satu, hingga yang kurang penting di nomor terbawah.',
      'Kiat Menabung yang Sukses: Menabung dilakukan DI AWAL saat menerima uang saku, bukan menunggu sisa uang di akhir hari! Terapkan prinsip: "Sisihkan, bukan sisakan!".',
      'Mengenal Lembaga Perbankan: Bank adalah badan usaha yang menghimpun dana masyarakat dalam bentuk simpanan (tabungan, deposito) dan menyalurkannya dalam bentuk kredit pembiayaan usaha.',
      'Keuntungan Menabung di Bank: Uang tersimpan aman dari pencurian/kebakaran, dijamin oleh LPS (Lembaga Penjamin Simpanan), mendapat buku tabungan dan kartu ATM, serta melatih kedisiplinan finansial.'
    ],
    rumus: [
      'Prinsip Cerdas Finansial: Dahulukan Kebutuhan Primer → Sisihkan Tabungan → Baru Penuhi Keinginan Wajar',
      'Menabung Cerdas: Pendapatan/Uang Saku - Tabungan = Uang Belanja (Bukan Belanja Dulu Baru Menabung)'
    ],
    perhatikan: [
      'Jangan tergiur membeli barang hanya karena melihat teman punya atau karena diskon iklan! Tanyakan pada dirimu: "Apakah aku benar-benar membutuhkannya sekarang?".',
      'Jaga selalu kerahasiaan nomor PIN kartu ATM dan kata sandi transaksi digital dari siapa pun.'
    ],
    contohSoal: {
      tanya: 'Andi memiliki uang tabungan Rp50.000. Sepatu sekolahnya sudah jebol dan sobek parah, sementara teman-temannya sedang ramai membeli mainan robot baru. Keputusan finansial yang paling bijak bagi Andi adalah ...',
      kunci: 'Membeli sepatu sekolah baru karena sepatu merupakan kebutuhan primer yang mendesak untuk sekolah',
      bahas: 'Sepatu sekolah adalah kebutuhan pokok untuk belajar, sedangkan mainan adalah keinginan rekreasional yang bisa ditunda pemenuhannya.'
    },
    tags: ['literasi finansial', 'skala prioritas', 'kebutuhan vs keinginan', 'menabung', 'perbankan', 'uang saku'],
    svgIllustration: null,
    captionGambar: null
  }
];

// Gabungkan seluruh 49 Modul Terpadu:
// 21 MTK + 14 IPA + 14 IPS
const allModules = [...mtkModules, ...ipaModules, ...ipsModules];

console.log('\n=== REKAP MODUL RANGKUMAN BARU ===');
console.log('Total Modul Rangkuman:', allModules.length);
console.log('1. MATEMATIKA:', allModules.filter(m => m.mapel === 'MATEMATIKA').length, 'modul');
console.log('2. IPA:', allModules.filter(m => m.mapel === 'IPA').length, 'modul');
console.log('3. IPS:', allModules.filter(m => m.mapel === 'IPS').length, 'modul');

[4, 5, 6].forEach(k => {
  console.log(`Kelas ${k}: MTK ${allModules.filter(m => m.mapel === 'MATEMATIKA' && m.kelas === k).length}, IPA ${allModules.filter(m => m.mapel === 'IPA' && m.kelas === k).length}, IPS ${allModules.filter(m => m.mapel === 'IPS' && m.kelas === k).length}`);
});

// Tulis kembali ke data_rangkuman.js
const fileContent = `// data_rangkuman.js - Rangkuman Materi Terpadu Matematika, IPA, dan IPS (SD Kelas 4, 5, 6)
// Sesuai Kurikulum Merdeka Resmi Kemendikbudristek 2026
// Terbagi Menjadi 3 Mapel Murni: MATEMATIKA (21 Bab), IPA (14 Bab), IPS (14 Bab)
// Total 49 Modul dengan Bahasa Ramah Anak & Ilustrasi Edukatif Inline SVG
// Auto-generated by build_tri_subject_rangkuman.js

const RANGKUMAN_DATA = ${JSON.stringify(allModules, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANGKUMAN_DATA };
}
`;

fs.writeFileSync('data_rangkuman.js', fileContent, 'utf-8');
console.log('\ndata_rangkuman.js updated successfully with 49 modules!');
