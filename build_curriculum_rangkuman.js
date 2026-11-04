// build_curriculum_rangkuman.js
// Menghasilkan 21 Modul Rangkuman Matematika (Kelas 4: 7 bab, Kelas 5: 7 bab, Kelas 6: 7 bab)
// Sesuai Kurikulum Baru yang Ditentukan User + 18 Modul IPAS yang sudah ada.
// Total 39 Modul Rangkuman dengan Bahasa Ramah Anak Kelas 5 SD & Ilustrasi Edukatif SVG.

const fs = require('fs');

// Koleksi SVG Edukatif untuk Rangkuman Matematika Baru
const SVG_MTK = {
  nilaiTempat: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e40af">🏠 RUMAH NILAI TEMPAT BILANGAN CACAH (Contoh: 8.425)</text>
    <g transform="translate(25, 40)">
      <!-- Ribuan -->
      <rect x="0" y="0" width="85" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="42" y="28" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e3a8a">8</text>
      <text x="42" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">RIBUAN</text>
      <text x="42" y="62" text-anchor="middle" font-size="9" fill="#3b82f6">(8.000)</text>

      <!-- Ratusan -->
      <rect x="95" y="0" width="85" height="70" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="137" y="28" text-anchor="middle" font-size="20" font-weight="bold" fill="#92400e">4</text>
      <text x="137" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">RATUSAN</text>
      <text x="137" y="62" text-anchor="middle" font-size="9" fill="#d97706">(400)</text>

      <!-- Puluhan -->
      <rect x="190" y="0" width="85" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="232" y="28" text-anchor="middle" font-size="20" font-weight="bold" fill="#14532d">2</text>
      <text x="232" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">PULUHAN</text>
      <text x="232" y="62" text-anchor="middle" font-size="9" fill="#16a34a">(20)</text>

      <!-- Satuan -->
      <rect x="285" y="0" width="85" height="70" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="327" y="28" text-anchor="middle" font-size="20" font-weight="bold" fill="#7f1d1d">5</text>
      <text x="327" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">SATUAN</text>
      <text x="327" y="62" text-anchor="middle" font-size="9" fill="#dc2626">(5)</text>
    </g>
    <text x="210" y="142" text-anchor="middle" font-size="10.5" fill="#475569">Dekomposisi: 8.425 = 8.000 + 400 + 20 + 5</text>
  </svg>`,

  polaBilangan: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">🧩 POLA BILANGAN & POLA GAMBAR LOMPAT ATURAN</text>
    <g transform="translate(20, 42)">
      <!-- Kotak 1: 3 -->
      <circle cx="35" cy="35" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="35" y="42" text-anchor="middle" font-size="18" font-weight="bold" fill="#581c87">3</text>
      
      <!-- Panah +4 -->
      <text x="85" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#c026d3">+4</text>
      <text x="85" y="40" text-anchor="middle" font-size="16" font-weight="bold" fill="#9333ea">→</text>

      <!-- Kotak 2: 7 -->
      <circle cx="135" cy="35" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="135" y="42" text-anchor="middle" font-size="18" font-weight="bold" fill="#581c87">7</text>

      <!-- Panah +4 -->
      <text x="185" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#c026d3">+4</text>
      <text x="185" y="40" text-anchor="middle" font-size="16" font-weight="bold" fill="#9333ea">→</text>

      <!-- Kotak 3: 11 -->
      <circle cx="235" cy="35" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="235" y="42" text-anchor="middle" font-size="18" font-weight="bold" fill="#581c87">11</text>

      <!-- Panah +4 -->
      <text x="285" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#c026d3">+4</text>
      <text x="285" y="40" text-anchor="middle" font-size="16" font-weight="bold" fill="#9333ea">→</text>

      <!-- Kotak 4: ? (15) -->
      <circle cx="335" cy="35" r="28" fill="#fbcfe8" stroke="#db2777" stroke-width="2" stroke-dasharray="4,2"/>
      <text x="335" y="42" text-anchor="middle" font-size="18" font-weight="bold" fill="#9d174d">15</text>
    </g>
    <text x="210" y="140" text-anchor="middle" font-size="10.5" fill="#475569">Kunci Detektif: Cari selisih antar-dua suku berturutan (Aturan: Tambah 4)</text>
  </svg>`,

  sudutBusur: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">📐 JENIS-JENIS SUDUT & BUSUR DERAJAT</text>
    <!-- Sudut Lancip -->
    <g transform="translate(20, 35)">
      <line x1="10" y1="70" x2="70" y2="70" stroke="#b45309" stroke-width="2"/>
      <line x1="10" y1="70" x2="55" y2="25" stroke="#b45309" stroke-width="2"/>
      <path d="M 30 70 A 20 20 0 0 0 25 55" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="40" y="90" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#78350f">LANCIP</text>
      <text x="40" y="103" text-anchor="middle" font-size="9" fill="#92400e">&lt; 90°</text>
    </g>
    <!-- Sudut Siku-Siku -->
    <g transform="translate(120, 35)">
      <line x1="10" y1="70" x2="70" y2="70" stroke="#b45309" stroke-width="2"/>
      <line x1="10" y1="70" x2="10" y2="15" stroke="#b45309" stroke-width="2"/>
      <rect x="10" y="55" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="40" y="90" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#78350f">SIKU-SIKU</text>
      <text x="40" y="103" text-anchor="middle" font-size="9" fill="#dc2626">Tepat 90°</text>
    </g>
    <!-- Sudut Tumpul -->
    <g transform="translate(220, 35)">
      <line x1="45" y1="70" x2="95" y2="70" stroke="#b45309" stroke-width="2"/>
      <line x1="45" y1="70" x2="10" y2="25" stroke="#b45309" stroke-width="2"/>
      <path d="M 65 70 A 20 20 0 0 0 30 55" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="50" y="90" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#78350f">TUMPUL</text>
      <text x="50" y="103" text-anchor="middle" font-size="9" fill="#92400e">90° - 180°</text>
    </g>
    <!-- Sudut Lurus -->
    <g transform="translate(325, 35)">
      <line x1="5" y1="70" x2="85" y2="70" stroke="#b45309" stroke-width="2"/>
      <circle cx="45" cy="70" r="3" fill="#b45309"/>
      <path d="M 65 70 A 20 20 0 0 0 25 70" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="45" y="90" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#78350f">LURUS</text>
      <text x="45" y="103" text-anchor="middle" font-size="9" fill="#92400e">Tepat 180°</text>
    </g>
  </svg>`,

  piktogram: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">📊 PIKTOGRAM (DIAGRAM GAMBAR) BUKU BACAAN</text>
    <g transform="translate(30, 35)">
      <text x="0" y="22" font-size="11" font-weight="bold" fill="#15803d">Senin</text>
      <text x="65" y="24" font-size="16">📘 📘 📘</text>
      <text x="200" y="22" font-size="11" fill="#166534">= 3 × 5 = 15 buku</text>

      <text x="0" y="52" font-size="11" font-weight="bold" fill="#15803d">Selasa</text>
      <text x="65" y="54" font-size="16">📘 📘</text>
      <text x="200" y="52" font-size="11" fill="#166534">= 2 × 5 = 10 buku</text>

      <text x="0" y="82" font-size="11" font-weight="bold" fill="#15803d">Rabu</text>
      <text x="65" y="84" font-size="16">📘 📘 📘 📘</text>
      <text x="200" y="82" font-size="11" fill="#166534">= 4 × 5 = 20 buku</text>
    </g>
    <rect x="25" y="125" width="370" height="24" rx="6" fill="#dcfce7"/>
    <text x="210" y="141" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#14532d">🔑 Keterangan: 1 simbol buku 📘 mewakili 5 buku nyata!</text>
  </svg>`,

  kubusSatuan: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">📦 MENGHITUNG VOLUME MENGGUNAKAN KUBUS SATUAN</text>
    <g transform="translate(60, 38)">
      <!-- Ilustrasi tumpukan 3x2x2 -->
      <rect x="0" y="25" width="90" height="50" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
      <line x1="30" y1="25" x2="30" y2="75" stroke="#9333ea" stroke-dasharray="2,2"/>
      <line x1="60" y1="25" x2="60" y2="75" stroke="#9333ea" stroke-dasharray="2,2"/>
      <line x1="0" y1="50" x2="90" y2="50" stroke="#9333ea" stroke-dasharray="2,2"/>
      
      <polygon points="0,25 30,5 120,5 90,25" fill="#e9d5ff" stroke="#9333ea" stroke-width="1.5"/>
      <line x1="30" y1="25" x2="60" y2="5" stroke="#9333ea" stroke-dasharray="2,2"/>
      <line x1="60" y1="25" x2="90" y2="5" stroke="#9333ea" stroke-dasharray="2,2"/>

      <polygon points="90,25 120,5 120,55 90,75" fill="#d8b4fe" stroke="#9333ea" stroke-width="1.5"/>
      <line x1="90" y1="50" x2="120" y2="30" stroke="#9333ea" stroke-dasharray="2,2"/>
      
      <text x="45" y="92" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">p = 3 kubus</text>
      <text x="110" y="15" font-size="10" font-weight="bold" fill="#6b21a8">l = 2</text>
      <text x="126" y="55" font-size="10" font-weight="bold" fill="#6b21a8">t = 2</text>
    </g>
    <g transform="translate(225, 45)">
      <text x="0" y="16" font-size="12" font-weight="bold" fill="#581c87">Rumus Menghitung:</text>
      <text x="0" y="36" font-size="11" fill="#475569">Volume = Panjang × Lebar × Tinggi</text>
      <text x="0" y="54" font-size="11" fill="#475569">Volume = 3 × 2 × 2</text>
      <text x="0" y="74" font-size="12" font-weight="bold" fill="#7e22ce">Total = 12 Kubus Satuan</text>
    </g>
  </svg>`,

  koordinatKartesius: `<svg viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style="max-height:165px">
    <rect width="420" height="165" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <text x="210" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">🗺️ BIDANG KOORDINAT KARTESIUS (Titik x, y)</text>
    <g transform="translate(70, 30)">
      <!-- Grid -->
      <line x1="0" y1="100" x2="140" y2="100" stroke="#0f172a" stroke-width="2"/>
      <line x1="20" y1="0" x2="20" y2="110" stroke="#0f172a" stroke-width="2"/>
      <text x="145" y="104" font-size="10" font-weight="bold" fill="#0f172a">X (Mendatar)</text>
      <text x="15" y="-5" font-size="10" font-weight="bold" fill="#0f172a">Y (Tegak)</text>
      
      <!-- Titik A(3, 2) -->
      <line x1="80" y1="100" x2="80" y2="40" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <line x1="20" y1="40" x2="80" y2="40" stroke="#3b82f6" stroke-dasharray="2,2"/>
      <circle cx="80" cy="40" r="4.5" fill="#ef4444"/>
      <text x="86" y="36" font-size="11" font-weight="bold" fill="#dc2626">A (3, 2)</text>
      
      <text x="50" y="112" font-size="9" fill="#64748b">1</text>
      <text x="80" y="112" font-size="9" fill="#64748b">3</text>
      <text x="110" y="112" font-size="9" fill="#64748b">4</text>
      <text x="8" y="44" font-size="9" fill="#64748b">2</text>
      <text x="8" y="70" font-size="9" fill="#64748b">1</text>
    </g>
    <g transform="translate(235, 42)">
      <text x="0" y="16" font-size="11.5" font-weight="bold" fill="#1e40af">Aturan Emas Koordinat:</text>
      <text x="0" y="34" font-size="10.5" fill="#334155">1. Sumbu X ditulis DULU (Mendatar)</text>
      <text x="0" y="50" font-size="10.5" fill="#334155">2. Sumbu Y ditulis KEDUA (Tegak)</text>
      <text x="0" y="68" font-size="11" font-weight="bold" fill="#dc2626">Format: (X, Y)</text>
      <text x="0" y="84" font-size="9.5" fill="#64748b">Jangan sampai terbalik menjadi (Y, X)!</text>
    </g>
  </svg>`,

  peluangSederhana: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="12" fill="#fff1f2" stroke="#fecdd3" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#9f1239">🎲 PELUANG SEDERHANA: KEMUNGKINAN SUATU KEJADIAN</text>
    <g transform="translate(40, 42)">
      <!-- Dadu -->
      <rect x="0" y="0" width="55" height="55" rx="8" fill="#fff" stroke="#e11d48" stroke-width="2"/>
      <circle cx="27" cy="27" r="5" fill="#dc2626"/>
      <text x="27" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#881337">Mata 1 dari 6</text>
      <text x="27" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">P = 1/6</text>
    </g>
    <g transform="translate(130, 42)">
      <!-- Koin -->
      <circle cx="30" cy="28" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="30" y="33" text-anchor="middle" font-size="13" font-weight="bold" fill="#713f12">ANGKA</text>
      <text x="30" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#713f12">Angka / Gambar</text>
      <text x="30" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="#ca8a04">P = 1/2</text>
    </g>
    <g transform="translate(235, 42)">
      <rect x="0" y="0" width="150" height="90" rx="8" fill="#fff" stroke="#fda4af"/>
      <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">Rumus Peluang (P):</text>
      <text x="75" y="42" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">P(A) = n(A) / n(S)</text>
      <text x="75" y="60" text-anchor="middle" font-size="9" fill="#475569">n(A) = Kejadian yang diharapkan</text>
      <text x="75" y="74" text-anchor="middle" font-size="9" fill="#475569">n(S) = Semua kemungkinan</text>
    </g>
  </svg>`
};

console.log('SVG templates ready.');

// Membaca data rangkuman yang sudah ada untuk mengambil modul IPAS
const existingData = require('./data_rangkuman.js').RANGKUMAN_DATA;
const ipasModules = existingData.filter(m => m.mapel === 'IPAS');
console.log('IPAS modules preserved:', ipasModules.length);

// Sekarang buat 21 Modul Matematika Baru
const newMtkModules = [
  // =========================================================================
  // KELAS 4 (7 MODUL)
  // =========================================================================
  {
    id: 'mtk-4-1',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Bilangan & Operasi Hitung',
    judul: '🔢 Bilangan Cacah sampai 10.000 & Bilangan Cacah Besar',
    icon: '🔢',
    ringkasan: 'Mengenal bilangan cacah sampai 10.000 dan angka raksasa! Bayangkan setiap angka punya "kamar rumah" sendiri: satuan, puluhan, ratusan, hingga ribuan. Dengan membedah rumah angka, kamu bisa membaca, membandingkan, dan mengoperasikan bilangan cacah dengan mudah!',
    poinPenting: [
      'Nilai Tempat: Angka 8 pada 8.425 bernilai 8.000 (ribuan), angka 4 bernilai 400 (ratusan), angka 2 bernilai 20 (puluhan), dan angka 5 bernilai 5 (satuan).',
      'Membaca & Menulis: 7.305 dibaca "tujuh ribu tiga ratus lima" (ingat: nol di puluhan tidak dibaca kata puluh).',
      'Membandingkan Bilangan: Bandingkan angka dari nilai tempat paling kiri (terbesar). Jika ribuan sama, lihat ratusan, puluhan, lalu satuan.',
      'Operasi Hitung Campuran: Penjumlahan dan pengurangan bersusun harus lurus nilai tempatnya (satuan lurus satuan). Perkalian dan pembagian dikerjakan teliti tahap demi tahap.'
    ],
    rumus: [
      'Bentuk Panjang (Dekomposisi): 8.425 = 8.000 + 400 + 20 + 5',
      'Simbol Pembanding: > (lebih besar), < (lebih kecil), = (sama dengan)',
      'Perkalian Bersusun: Kalikan satuan pengali terlebih dahulu, simpan puluhan jika ada, lalu kalikan ke digit berikutnya.'
    ],
    perhatikan: [
      'Jangan terbalik membaca angka yang ada nol di tengah! 5.040 dibaca "lima ribu empat puluh", BUKAN "lima ratus empat puluh".',
      'Saat penjumlahan bersusun menyimpan, jangan lupa menjumlahkan angka simpanannya di atas kolom berikutnya!'
    ],
    contohSoal: {
      tanya: 'Tentukan hasil dari 4.250 + 1.835 - 2.100 = ...',
      kunci: '3.985',
      bahas: 'Kerjakan berurutan dari kiri: 4.250 + 1.835 = 6.085. Kemudian 6.085 - 2.100 = 3.985.'
    },
    tags: ['bilangan cacah', 'nilai tempat', 'dekomposisi', 'ribuan', 'operasi hitung'],
    svgIllustration: SVG_MTK.nilaiTempat,
    captionGambar: 'Rumah Nilai Tempat: Membedah bilangan cacah berdasarkan ribuan, ratusan, puluhan, dan satuan.'
  },

  {
    id: 'mtk-4-2',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Teori Bilangan',
    judul: '🎯 Kelipatan dan Faktor: Detektif Angka & Bilangan Prima',
    icon: '🎯',
    ringkasan: 'Kelipatan itu seperti kamu melompat di atas batu bernomor (lompat 3: 3, 6, 9, 12...). Sedangkan faktor adalah angka-angka kunci yang habis membagi suatu bilangan tanpa sisa. Di sini kamu juga berkenalan dengan bilangan prima yang super mandiri!',
    poinPenting: [
      'Kelipatan: Hasil kali bilangan tersebut dengan bilangan asli 1, 2, 3, 4, dst. Kelipatan 4: 4, 8, 12, 16, 20...',
      'Faktor Bilangan: Semua bilangan yang dapat membagi habis bilangan itu. Faktor dari 12 adalah 1, 2, 3, 4, 6, 12.',
      'Bilangan Prima: Bilangan yang HANYA memiliki 2 faktor, yaitu 1 dan dirinya sendiri. Contoh prima: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...',
      'Angka 2 adalah SATU-SATUNYA bilangan prima yang genap!',
      'KPK (Kelipatan Persekutuan Terkecil) & FPB (Faktor Persekutuan Terbesar) dasar untuk 2 bilangan.'
    ],
    rumus: [
      'Kelipatan Bilangan a: a × 1, a × 2, a × 3, a × 4 ...',
      'Mencari Faktor: Pasangkan perkalian dua angka yang menghasilkan bilangan tersebut (misal 12: 1×12, 2×6, 3×4).',
      'KPK: Pilih kelipatan persekutuan yang paling kecil nilainya.',
      'FPB: Pilih faktor persekutuan yang paling besar nilainya.'
    ],
    perhatikan: [
      'Angka 1 BUKAN bilangan prima karena cuma punya 1 faktor (yaitu dirinya sendiri).',
      'Jangan mengira semua bilangan ganjil adalah prima! Contohnya 9 bukan prima karena bisa dibagi 3 (faktor: 1, 3, 9).'
    ],
    contohSoal: {
      tanya: 'Tentukan kelipatan persekutuan terkecil (KPK) dari 4 dan 6!',
      kunci: '12',
      bahas: 'Kelipatan 4: 4, 8, 12, 16, 20... Kelipatan 6: 6, 12, 18, 24... Kelipatan yang sama dan paling kecil adalah 12.'
    },
    tags: ['kelipatan', 'faktor', 'bilangan prima', 'kpk', 'fpb'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-4-3',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan',
    judul: '🍕 Pecahan: Mengenal Pecahan Senilai & Operasi Dasar',
    icon: '🍕',
    ringkasan: 'Makan pizza bareng teman jadi adil dengan pecahan! Pembilang (angka atas) menunjukkan berapa potong yang kamu ambil, dan penyebut (angka bawah) menunjukkan total seluruh potongan pizza. Pecahan senilai artinya kenyangnya sama persis!',
    poinPenting: [
      'Pecahan Senilai: Pecahan yang bernilai sama meski angkanya berbeda. Didapat dengan mengalikan atau membagi pembilang dan penyebut dengan angka yang sama.',
      'Contoh: 1/2 = 2/4 = 3/6 = 4/8.',
      'Menyederhanakan Pecahan: Bagi pembilang dan penyebut dengan FPB keduanya sampai tidak bisa dibagi lagi.',
      'Membandingkan Pecahan: Jika penyebutnya sama, cukup lihat pembilang yang lebih besar. Jika beda penyebut, gunakan jurus kali silang!',
      'Penjumlahan & Pengurangan Pecahan Berpenyebut Sama: Cukup jumlahkan pembilangnya, penyebutnya TETAP SAMA.'
    ],
    rumus: [
      'Pecahan Senilai: a/b = (a × n) / (b × n)',
      'Jurus Kali Silang Pembanding: Untuk a/b dan c/d, bandingkan (a × d) dengan (b × c).',
      'Penjumlahan Penyebut Sama: a/c + b/c = (a + b) / c',
      'Pengurangan Penyebut Sama: a/c - b/c = (a - b) / c'
    ],
    perhatikan: [
      'Awas Jebakan! 1/4 + 2/4 = 3/4, BUKAN 3/8! Penyebut yang sama jangan pernah dijumlahkan!',
      'Makin besar angka penyebut pada pecahan ber-pembilang 1, potongannya justru makin KECIL (1/8 lebih kecil daripada 1/2).'
    ],
    contohSoal: {
      tanya: 'Ibu memiliki 3/8 loyang kue, lalu adik membawa 2/8 loyang lagi. Berapa total kue sekarang?',
      kunci: '5/8 loyang',
      bahas: 'Karena penyebutnya sudah sama (8), jumlahkan pembilangnya: 3/8 + 2/8 = (3+2)/8 = 5/8 loyang.'
    },
    tags: ['pecahan senilai', 'membandingkan pecahan', 'penjumlahan pecahan', 'penyederhanaan'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-4-4',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Pengukuran',
    judul: '📏 Pengukuran Lengkap: Panjang, Berat, Waktu, & Sudut Busur Derajat',
    icon: '📏',
    ringkasan: 'Segala hal di dunia bisa diukur! Kita punya tangga satuan meter untuk panjang, kilogram untuk berat, jam-menit untuk waktu, hingga busur derajat berbentuk setengah lingkaran untuk mengukur bukaan sudut.',
    poinPenting: [
      'Tangga Panjang (km, hm, dam, m, dm, cm, mm): Turun 1 tangga dikali 10, naik 1 tangga dibagi 10. 1 m = 100 cm, 1 km = 1.000 m.',
      'Tangga Berat (kg, hg/ons, dag, g, dg, cg, mg): 1 kg = 1.000 g, 1 kg = 10 ons, 1 ton = 1.000 kg, 1 kuintal = 100 kg.',
      'Waktu: 1 jam = 60 menit, 1 menit = 60 detik, 1 jam = 3.600 detik.',
      'Pengukuran Sudut: Menggunakan alat busur derajat berputar dari 0° sampai 180°.',
      'Pusat busur diletakkan tepat pada titik sudut, garis alas busur lurus dengan salah satu kaki sudut.'
    ],
    rumus: [
      'Konversi Panjang: km → m (×1.000), m → cm (×100)',
      'Konversi Berat: kg → g (×1.000), ton → kg (×1.000)',
      'Konversi Waktu: Jam ke Menit (×60), Menit ke Detik (×60)',
      'Ukuran Sudut: Dinyatakan dalam satuan derajat (°)'
    ],
    perhatikan: [
      'Saat membaca busur derajat, perhatikan skala nolnya! Gunakan skala dalam jika kaki sudut di kanan, atau skala luar jika di kiri.',
      'Ingat: 1 kuintal = 100 kg, jangan tertukar dengan 1 ton = 1.000 kg.'
    ],
    contohSoal: {
      tanya: 'Panjang tali 3 meter lebih 45 cm. Berapa total panjang tali dalam satuan cm?',
      kunci: '345 cm',
      bahas: '3 meter = 3 × 100 cm = 300 cm. Total = 300 cm + 45 cm = 345 cm.'
    },
    tags: ['pengukuran', 'satuan panjang', 'satuan berat', 'busur derajat', 'sudut'],
    svgIllustration: SVG_MTK.sudutBusur,
    captionGambar: 'Pengukuran Sudut: Mengenal sudut lancip (<90°), siku-siku (90°), tumpul (90°-180°), dan lurus (180°).'
  },

  {
    id: 'mtk-4-5',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Pola Bilangan & Gambar',
    judul: '🧩 Pola Gambar dan Pola Bilangan: Menemukan Aturan Rahasia',
    icon: '🧩',
    ringkasan: 'Belajar menjadi detektif pola! Pola bilangan dan pola gambar adalah susunan teratur yang mengikuti aturan matematika tertentu—bisa membesar (bertambah atau dikalikan) atau mengecil (berkurang atau dibagi).',
    poinPenting: [
      'Pola Membesar: Nilai bilangan atau jumlah gambar pada suku berikutnya semakin banyak. Contoh: 2, 5, 8, 11... (aturannya selalu bertambah 3).',
      'Pola Mengecil: Nilai bilangan atau gambar semakin sedikit. Contoh: 30, 25, 20, 15... (aturannya selalu berkurang 5).',
      'Pola Gambar: Mengamati pertambahan baris dan kolom noktah/bintang (misal segitiga noktah: 1, 3, 6, 10...).',
      'Cara Mencari Suku Berikutnya: Cari selisih antara suku kedua dengan suku pertama, lalu buktikan apakah selisih itu sama pada suku ketiga.'
    ],
    rumus: [
      'Aturan Pola Tambah Tetap (Aritmetika Dasar): Un = suku sebelumnya + selisih (b)',
      'Pola Persegi: 1, 4, 9, 16, 25... (1×1, 2×2, 3×3, 4×4...)',
      'Pola Segitiga: 1, 3, 6, 10, 15... (bertambah +2, +3, +4, +5...)'
    ],
    perhatikan: [
      'Jangan cuma menebak dari 2 angka pertama! Selalu cek minimal 3 angka berturutan untuk memastikan aturannya konsisten.',
      'Perhatikan apakah pola melompat bertingkat atau perkalian lipat dua (contoh: 2, 4, 8, 16... aturannya dikali 2, bukan ditambah 2).'
    ],
    contohSoal: {
      tanya: 'Tentukan dua angka lanjutan dari pola: 4, 9, 14, 19, ..., ...!',
      kunci: '24 dan 29',
      bahas: 'Selisih antar-angka: 9 - 4 = 5, 14 - 9 = 5 (aturannya selalu +5). Suku berikutnya: 19 + 5 = 24, lalu 24 + 5 = 29.'
    },
    tags: ['pola bilangan', 'pola gambar', 'deret', 'aturan pola'],
    svgIllustration: SVG_MTK.polaBilangan,
    captionGambar: 'Pola Bilangan: Menemukan aturan lompatan bilangan membesar atau mengecil secara teratur.'
  },

  {
    id: 'mtk-4-6',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Bangun Datar',
    judul: '📐 Geometri Bangun Datar: Persegi, Persegi Panjang, Segitiga & Segi Empat',
    icon: '📐',
    ringkasan: 'Mengenal dunia bangun dua dimensi! Keliling adalah panjang garis pagar yang mengelilingi tepi bangun, sedangkan luas adalah jumlah petak satuan yang menutupi seluruh permukaannya.',
    poinPenting: [
      'Persegi: Memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90°). Keliling = 4 × s, Luas = s × s.',
      'Persegi Panjang: Memiliki 2 pasang sisi sejajar sama panjang (panjang dan lebar) dan 4 sudut siku-siku. Keliling = 2 × (p + l), Luas = p × l.',
      'Jenis Segitiga berdasarkan Panjang Sisi: Segitiga sama sisi (3 sisi sama), sama kaki (2 sisi sama), sembarang (tidak ada sisi yang sama).',
      'Jenis Segitiga berdasarkan Sudut: Segitiga lancip, siku-siku (ada 1 sudut 90°), dan tumpul.',
      'Total besar ketiga sudut pada SEMUA segitiga selalu tepat 180°!'
    ],
    rumus: [
      'Persegi: Keliling = 4 × s | Luas = s × s',
      'Persegi Panjang: Keliling = 2 × (p + l) | Luas = p × l',
      'Mencari Sisi Persegi dari Luas: s = √Luas',
      'Jumlah Sudut Segitiga: Sudut A + Sudut B + Sudut C = 180°'
    ],
    perhatikan: [
      'Jangan tertukar antara rumus keliling dan luas! Keliling dihitung dari pinggirnya (+), luas dihitung dari isinya (×).',
      'Satuan luas selalu memakai persegi (pangkat 2), contohnya cm² atau m².'
    ],
    contohSoal: {
      tanya: 'Sebuah persegi memiliki panjang sisi 8 cm. Hitung keliling dan luasnya!',
      kunci: 'Keliling = 32 cm, Luas = 64 cm²',
      bahas: 'Keliling = 4 × s = 4 × 8 cm = 32 cm. Luas = s × s = 8 cm × 8 cm = 64 cm².'
    },
    tags: ['geometri', 'bangun datar', 'persegi', 'persegi panjang', 'segitiga', 'keliling', 'luas'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-4-7',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Data & Statistika',
    judul: '📊 Piktogram dan Diagram Batang: Membaca & Menyajikan Data',
    icon: '📊',
    ringkasan: 'Data itu kumpulan fakta yang bisa diceritakan dengan gambar! Piktogram menggunakan simbol gambar mini lucu, sedangkan diagram batang menggunakan tiang balok tegak untuk membandingkan jumlah data dengan cepat.',
    poinPenting: [
      'Piktogram (Diagram Gambar): Penyajian data di mana setiap 1 gambar mewakili sejumlah benda tertentu (kunci keterangan).',
      'Contoh: 1 simbol bintang 🌟 mewakili 10 siswa berprestasi.',
      'Diagram Batang: Data disajikan dalam bentuk batang persegi panjang tegak atau mendatar. Tinggi batang menunjukkan frekuensi (jumlah).',
      'Sumbu Mendatar (X): Menunjukkan nama kategori (hari, nama buah, nama hobi).',
      'Sumbu Tegak (Y): Menunjukkan angka jumlah atau frekuensi.'
    ],
    rumus: [
      'Menghitung Nilai Nyata Piktogram: Jumlah Simbol Gambar × Nilai per Simbol',
      'Mencari Modus (Paling Banyak): Cari batang yang paling TINGGI di diagram batang.',
      'Mencari Selisih Data: Nilai Kategori A - Nilai Kategori B'
    ],
    perhatikan: [
      'Selalu cek KETERANGAN di bagian bawah piktogram! 1 gambar belum tentu bernilai 1, bisa mewakili 5, 10, atau 100!',
      'Saat membaca diagram batang, tarik garis pandang dari puncak batang ke arah sumbu tegak angka secara lurus.'
    ],
    contohSoal: {
      tanya: 'Pada piktogram, hari Senin digambar 4 buah apel 🍎. Jika 1 apel mewakili 10 buah apel nyata, berapa total apel hari Senin?',
      kunci: '40 apel',
      bahas: 'Total apel = 4 simbol × 10 apel per simbol = 40 apel.'
    },
    tags: ['piktogram', 'diagram batang', 'penyajian data', 'membaca data'],
    svgIllustration: SVG_MTK.piktogram,
    captionGambar: 'Piktogram: Membaca data dengan memperhatikan nilai kelipatan yang diwakili oleh setiap simbol gambar.'
  },

  // =========================================================================
  // KELAS 5 (7 MODUL)
  // =========================================================================
  {
    id: 'mtk-5-1',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Bilangan & Operasi Hitung',
    judul: '🔢 Bilangan Cacah sampai 100.000 & 1.000.000',
    icon: '🔢',
    ringkasan: 'Menaiki tangga bilangan jutaan! Di kelas 5 kamu menguasai bilangan cacah besar sampai 100.000 hingga 1.000.000. Kamu bisa membandingkan anggaran kota, membedah nilai tempat ratus ribuan, dan mengurutkan angka dalam hitungan detik!',
    poinPenting: [
      'Tingkatan Nilai Tempat Besar: Satuan, Puluhan, Ratusan, Ribuan, Puluh Ribuan, Ratus Ribuan, hingga Jutaan.',
      'Contoh: Pada angka 645.200, angka 6 bernilai 600.000 (ratus ribuan), angka 4 bernilai 40.000 (puluh ribuan).',
      'Membaca Angka: 450.075 dibaca "empat ratus lima puluh ribu tujuh puluh lima".',
      'Membandingkan Bilangan 6 Digit: Hitung jumlah digitnya. Jika sama-sama 6 digit, bandingkan digit paling kiri (ratus ribuan).'
    ],
    rumus: [
      'Dekomposisi Ratus Ribuan: 574.320 = 500.000 + 70.000 + 4.000 + 300 + 20',
      'Pembulatan ke Ribuan Terdekat: Lihat angka ratusan. Jika ≥ 5 bulatkan ke atas, jika < 5 bulatkan ke bawah.'
    ],
    perhatikan: [
      'Hati-hati tanda titik pemisah ribuan! Titik diletakkan setiap 3 angka dari kanan (contoh: 1.000.000).',
      'Jangan tertukar menuliskan nol yang ada di tengah bilangan!'
    ],
    contohSoal: {
      tanya: 'Urutkan bilangan berikut dari yang terkecil: 325.000, 318.500, 329.100!',
      kunci: '318.500, 325.000, 329.100',
      bahas: 'Bandingkan angka puluh ribuannya: 318.500 paling kecil, diikuti 325.000, dan terbesar 329.100.'
    },
    tags: ['bilangan besar', 'ratus ribuan', 'jutaan', 'nilai tempat', 'mengurutkan'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-5-2',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Teori Bilangan',
    judul: '⏰ KPK dan FPB Lanjutan: Faktorisasi Prima & Soal Cerita Nyata',
    icon: '⏰',
    ringkasan: 'Menjadi master pemecah teka-teki KPK dan FPB dengan senjata Pohon Faktor! KPK adalah jurus mencari jadwal bertemu bersama lagi, sedangkan FPB adalah jurus membagi bingkisan hadiah sama rata ke banyak orang.',
    poinPenting: [
      'Faktorisasi Prima: Menguraikan bilangan menjadi perkalian bilangan-bilangan prima menggunakan pohon faktor.',
      'Contoh: 24 = 2³ × 3, dan 36 = 2² × 3².',
      'Jurus Sakti KPK: Ambil SEMUA faktor prima. Jika ada faktor yang sama, pilih yang PANGKATNYA PALING BESAR.',
      'Jurus Sakti FPB: HANYA ambil faktor prima YANG SAMA di kedua bilangan, lalu pilih yang PANGKATNYA PALING KECIL.',
      'Ciri Soal Cerita KPK: Menanyakan waktu bertemu kembali bersamaan (detik, hari, tanggal, berkedip bareng).',
      'Ciri Soal Cerita FPB: Menanyakan jumlah kantong/bingkisan terbanyak yang dibagi sama rata.'
    ],
    rumus: [
      'KPK = Kalikan SEMUA faktor prima dengan pangkat TERTINGGI',
      'FPB = Kalikan faktor prima YANG SAMA dengan pangkat TERENDAH',
      'Menentukan Tanggal Bersama: Tanggal Awal + Nilai KPK'
    ],
    perhatikan: [
      'Ingat kata kuncinya: KPK = Pangkat Besar (Semua diambil), FPB = Pangkat Kecil (Hanya yang kembar).',
      'Saat menghitung tanggal bertemu pada KPK, perhatikan jumlah hari dalam bulan tersebut (ada yang 30, 31, atau 28/29 hari)!'
    ],
    contohSoal: {
      tanya: 'Lampu merah berkedip tiap 4 detik, lampu kuning tiap 6 detik. Tiap berapa detik kedua lampu menyala bersamaan?',
      kunci: '12 detik',
      bahas: 'Ini soal pertemuan bersama (KPK). 4 = 2², 6 = 2 × 3. KPK = 2² × 3 = 12 detik.'
    },
    tags: ['kpk', 'fpb', 'pohon faktor', 'faktorisasi prima', 'soal cerita'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-5-3',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan & Desimal',
    judul: '🍕 Operasi Lengkap Pecahan: Beda Penyebut, Perkalian, Pembagian & Desimal',
    icon: '🍕',
    ringkasan: 'Kuasai seluruh jurus pecahan! Di kelas 5 kamu bisa menjumlahkan dan mengurangkan pecahan beda penyebut (pakai KPK), mengalikan pecahan (atas kali atas, bawah kali bawah), hingga membagi pecahan dengan membalik penyebutnya!',
    poinPenting: [
      'Penjumlahan & Pengurangan Beda Penyebut: Wajib menyamakan penyebut terlebih dahulu menggunakan KPK dari kedua penyebut.',
      'Perkalian Pecahan: Sangat mudah! Pembilang dikali pembilang, penyebut dikali penyebut: (a/b) × (c/d) = (a×c) / (b×d).',
      'Pembagian Pecahan: Ubah tanda bagi (÷) menjadi kali (×), lalu pecahan kedua DIBALIK: (a/b) ÷ (c/d) = (a/b) × (d/c).',
      'Pecahan Campuran: Wajib diubah menjadi pecahan biasa terlebih dahulu sebelum dikalikan atau dibagi.',
      'Desimal: Perkalian desimal hitung seperti biasa, lalu jumlahkan total angka di belakang koma untuk menentukan posisi koma hasil.'
    ],
    rumus: [
      'Samakan Penyebut: a/b + c/d = (a×d + b×c) / (b×d)',
      'Perkalian: a/b × c/d = (a×c) / (b×d)',
      'Pembagian: a/b ÷ c/d = a/b × d/c',
      'Pecahan Campuran ke Biasa: A b/c = (A × c + b) / c'
    ],
    perhatikan: [
      'Awas saat pembagian pecahan! Hanya pecahan KEDUA yang posisinya dibalik, pecahan pertama tetap!',
      'Saat menjumlahkan desimal bersusun (misal 3,5 + 0,25), tanda koma wajib LURUS ke bawah!'
    ],
    contohSoal: {
      tanya: 'Hitung hasil dari 2/3 × 3/4 = ...',
      kunci: '1/2',
      bahas: '(2 × 3) / (3 × 4) = 6/12. Disederhanakan dengan membagi 6 atas dan bawah = 1/2.'
    },
    tags: ['operasi pecahan', 'beda penyebut', 'perkalian pecahan', 'pembagian pecahan', 'desimal'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-5-4',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Bangun Datar',
    judul: '🪁 Keliling & Luas Bangun Datar Lengkap: Segitiga, Jajar Genjang, Trapesium hingga Lingkaran',
    icon: '🪁',
    ringkasan: 'Keluarga bangun datar berkumpul lengkap! Selain persegi dan persegi panjang, kamu kini menguasai segitiga, jajar genjang, layang-layang, trapesium, hingga lingkaran dengan angka ajaib pi (π).',
    poinPenting: [
      'Segitiga: Luas = (alas × tinggi) ÷ 2. Alas dan tinggi WAJIB tegak lurus (membentuk siku-siku).',
      'Jajar Genjang: Mirip persegi panjang yang miring. Luas = alas × tinggi (tinggi adalah garis tegak, bukan sisi miring).',
      'Trapesium: Memiliki sepasang sisi sejajar (a dan b). Luas = ((a + b) × tinggi) ÷ 2.',
      'Belah Ketupat & Layang-layang: Memiliki dua garis diagonal menyilang. Luas = (d₁ × d₂) ÷ 2.',
      'Lingkaran: Jari-jari (r) adalah separuh dari diameter (d). Keliling = 2 × π × r atau π × d. Luas = π × r × r. Gunakan π = 22/7 jika r kelipatan 7, atau 3,14.'
    ],
    rumus: [
      'Segitiga: L = (a × t) ÷ 2',
      'Jajar Genjang: L = a × t | K = 2 × (sisi alas + sisi miring)',
      'Trapesium: L = ((a + b) × t) ÷ 2 | K = Jumlah seluruh 4 sisinya',
      'Layang-layang & Belah Ketupat: L = (d₁ × d₂) ÷ 2',
      'Lingkaran: K = 2 × π × r | L = π × r²'
    ],
    perhatikan: [
      'Pada jajar genjang dan segitiga, JANGAN PERNAH memakai sisi miring sebagai tinggi! Tinggi harus garis tegak lurus 90°!',
      'Pada rumus luas segitiga dan trapesium, jangan lupa dibagi 2!'
    ],
    contohSoal: {
      tanya: 'Trapesium memiliki sisi sejajar 10 cm dan 14 cm, serta tinggi 6 cm. Berapa luasnya?',
      kunci: '72 cm²',
      bahas: 'Luas = ((10 + 14) × 6) ÷ 2 = (24 × 6) ÷ 2 = 144 ÷ 2 = 72 cm².'
    },
    tags: ['keliling', 'luas', 'jajar genjang', 'trapesium', 'segitiga', 'lingkaran'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-5-5',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Pengukuran',
    judul: '📐 Sudut: Mengenal Jenis Sudut & Teknik Pengukuran Derajat',
    icon: '📐',
    ringkasan: 'Sudut terbentuk dari dua garis lurus yang bertemu di satu titik sudut. Di kelas 5 kamu mengidentifikasi sudut siku-siku sempurna, sudut lancip yang tajam, sudut tumpul yang lebar, hingga sudut putaran penuh 360°!',
    poinPenting: [
      'Sudut Siku-siku: Sudut yang besarnya tepat 90° (tegak lurus sempurna seperti pojok buku atau dinding).',
      'Sudut Lancip: Sudut yang besarnya lebih kecil dari 90° (antara 0° sampai 89°).',
      'Sudut Tumpul: Sudut yang besarnya lebih besar dari 90° dan kurang dari 180° (antara 91° sampai 179°).',
      'Sudut Lurus: Sudut berupa garis lurus sempurna berukuran tepat 180°.',
      'Satu Putaran Penuh: Bernilai tepat 360° (seperti jarum jam berputar penuh 12 jam).',
      'Arah Jarum Jam: Setiap pergerakan 1 angka pada jam dinding bernilai 30° (360° ÷ 12 = 30°).'
    ],
    rumus: [
      'Sudut Lancip: 0° < x < 90°',
      'Sudut Siku-Siku: x = 90°',
      'Sudut Tumpul: 90° < x < 180°',
      'Sudut Lurus: x = 180°',
      'Sudut 1 Jam pada Jarum Jam = 360° / 12 = 30° per angka'
    ],
    perhatikan: [
      'Pukul 03.00 membentuk sudut siku-siku 90° (jarum pendek di 3, jarum panjang di 12: 3 × 30° = 90°).',
      'Pukul 06.00 membentuk sudut lurus 180° (6 × 30° = 180°).'
    ],
    contohSoal: {
      tanya: 'Sudut yang dibentuk oleh kedua jarum jam pada pukul 04.00 adalah ...',
      kunci: '120° (Sudut Tumpul)',
      bahas: 'Jarak angka 12 ke 4 adalah 4 langkah. Tiap langkah 30°, maka 4 × 30° = 120°. Karena > 90°, maka jenisnya sudut tumpul.'
    },
    tags: ['sudut', 'busur derajat', 'sudut lancip', 'sudut tumpul', 'jarum jam'],
    svgIllustration: SVG_MTK.sudutBusur,
    captionGambar: 'Jenis-jenis Sudut: Mengenal klasifikasi sudut berdasarkan besar derajatnya.'
  },

  {
    id: 'mtk-5-6',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Bangun Ruang',
    judul: '📦 Volume Bangun Ruang: Kubus, Balok, & Prisma Kubus Satuan',
    icon: '📦',
    ringkasan: 'Masuk ke dunia tiga dimensi! Volume adalah kapasitas atau daya tampung suatu bangun ruang. Kita mulai dengan menyusun balok dan kubus menggunakan kubus-kubus satuan mini sampai penuh!',
    poinPenting: [
      'Kubus Satuan: Kubus kecil berukuran 1 satuan panjang, lebar, dan tinggi. Jumlah kubus satuan yang menyusun bangun ruang menunjukkan volumenya.',
      'Kubus: Memiliki 6 sisi persegi yang sama persis dan 12 rusuk sama panjang. Volume = rusuk × rusuk × rusuk (s³).',
      'Balok: Memiliki panjang (p), lebar (l), dan tinggi (t). Volume = p × l × t.',
      'Prisma Segitiga: Memiliki alas berbentuk segitiga. Volume = Luas Alas Segitiga × Tinggi Prisma = ((a × t_alas) ÷ 2) × t_prisma.',
      'Hubungan Kubus Satuan: Menghitung tumpukan balok kubus = hitung panjang baris × lebar kolom × tinggi lapisan.'
    ],
    rumus: [
      'Volume Kubus: V = s × s × s = s³',
      'Mencari Rusuk Kubus dari Volume: s = ∛V (Akar pangkat 3)',
      'Volume Balok: V = p × l × t',
      'Volume Prisma: V = Luas Alas × Tinggi'
    ],
    perhatikan: [
      'Satuan volume selalu memakai kubik (pangkat 3), misalnya cm³ atau m³.',
      '1 liter = 1 dm³, 1 ml = 1 cm³ = 1 cc. Jangan sampai lupa konversi ini!'
    ],
    contohSoal: {
      tanya: 'Sebuah balok tersusun atas 4 kubus satuan panjang, 3 kubus lebar, dan 2 kubus tinggi. Berapa volume balok dalam kubus satuan?',
      kunci: '24 kubus satuan',
      bahas: 'Volume = panjang × lebar × tinggi = 4 × 3 × 2 = 24 kubus satuan.'
    },
    tags: ['volume', 'kubus', 'balok', 'kubus satuan', 'prisma'],
    svgIllustration: SVG_MTK.kubusSatuan,
    captionGambar: 'Kubus Satuan: Menghitung kapasitas volume bangun ruang dengan mengalikan panjang, lebar, dan tinggi kubus penyusun.'
  },

  {
    id: 'mtk-5-7',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Data & Statistika',
    judul: '📊 Data dan Diagram: Piktogram, Diagram Batang, & Tabel Frekuensi',
    icon: '📊',
    ringkasan: 'Mengolah dan membaca data seperti ilmuwan cilik! Kamu belajar menyajikan sekumpulan data acak menjadi tabel frekuensi yang rapi, lalu mengubahnya menjadi piktogram atau diagram batang yang menarik dipandang.',
    poinPenting: [
      'Tabel Frekuensi: Mengumpulkan data mentah menggunakan turus (garis lidi) lalu menuliskan angka total frekuensinya.',
      'Piktogram: Mewakili data dengan simbol visual yang memiliki nilai perwakilan tetap.',
      'Diagram Batang Ganda: Dapat digunakan untuk membandingkan dua kelompok data sekaligus (misal nilai siswa laki-laki vs perempuan).',
      'Membaca Data: Menentukan data tertinggi (maksimum), data terendah (minimum), selisih data, dan total seluruh data.'
    ],
    rumus: [
      'Total Seluruh Data = Jumlahkan seluruh nilai pada frekuensi tabel',
      'Selisih Data = Nilai Tertinggi - Nilai Terendah',
      'Frekuensi Relatif = (Frekuensi Kategori / Total Seluruh Frekuensi)'
    ],
    perhatikan: [
      'Pastikan tidak ada data yang terlewat saat membuat tabel turus dari data mentah acak!',
      'Skala angka pada sumbu tegak diagram batang harus memiliki interval yang sama (misal loncat 2, loncat 5, atau loncat 10).'
    ],
    contohSoal: {
      tanya: 'Data nilai ulangan Matematika: 70 (3 anak), 80 (5 anak), 90 (4 anak), 100 (2 anak). Berapa jumlah seluruh siswa?',
      kunci: '14 siswa',
      bahas: 'Total siswa = 3 + 5 + 4 + 2 = 14 siswa.'
    },
    tags: ['data', 'tabel frekuensi', 'diagram batang', 'piktogram', 'mengolah data'],
    svgIllustration: null,
    captionGambar: null
  },

  // =========================================================================
  // KELAS 6 (7 MODUL)
  // =========================================================================
  {
    id: 'mtk-6-1',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan, Desimal & Persen',
    judul: '🎯 Pecahan dan Desimal Lanjutan: Operasi Campuran, Persen & Soal Kontekstual',
    icon: '🎯',
    ringkasan: 'Menghadapi pertempuran matematika tingkat tinggi! Di kelas 6, pecahan, desimal, dan persen saling berbaur dalam satu soal cerita. Trik rahasianya: ubah semua bilangan ke bentuk yang sama (paling mudah ubah ke pecahan biasa atau desimal)!',
    poinPenting: [
      'Mengubah Bentuk: Persen artinya per seratus (25% = 25/100 = 1/4 = 0,25).',
      'Hierarki Operasi: Dahulukan tanda kurung → perkalian/pembagian → penjumlahan/pengurangan.',
      'Soal Cerita Kontekstual "Dari Sisa": Awas! Jika uang dipakai 1/4 untuk buku lalu 1/3 "dari sisanya" untuk jajan, hitung sisa uang dulu baru kalikan 1/3.',
      'Menghitung Diskon & Nilai Uang: Diskon = Persen Diskon × Harga Asli. Harga Bayar = Harga Asli - Diskon.'
    ],
    rumus: [
      'Konversi Persen ke Pecahan: P% = P / 100',
      'Konversi Desimal ke Pecahan: 0,a = a/10 | 0,ab = ab/100',
      'Sisa Pecahan = 1 - Bagian yang sudah dipakai',
      'Diskon: Potongan Harga = (Persen Diskon / 100) × Harga Normal'
    ],
    perhatikan: [
      'Jangan langsung menjumlahkan pecahan dengan desimal tanpa mengubah salah satunya terlebih dahulu!',
      'Perhatikan kata "DARI SISA" pada soal cerita bertingkat! Ini jebakan nomor satu olimpiade matematika SD!'
    ],
    contohSoal: {
      tanya: 'Hitung: 0,5 + 1/4 × 20% = ...',
      kunci: '0,55 (atau 11/20)',
      bahas: 'Dahulukan perkalian: 1/4 × 20% = 1/4 × 20/100 = 5/100 = 0,05. Lalu jumlahkan: 0,5 + 0,05 = 0,55.'
    },
    tags: ['pecahan lanjutan', 'desimal', 'persen', 'operasi campuran', 'dari sisa'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-6-2',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Perbandingan & Skala',
    judul: '🗺️ Rasio dan Skala: Perbandingan Senilai, Berbalik Nilai & Peta Denah',
    icon: '🗺️',
    ringkasan: 'Melihat perbandingan dunia nyata! Rasio membandingkan dua besaran. Perbandingan senilai terjadi saat satu besaran naik, yang lain ikut naik (beli bensin). Berbalik nilai saat satu naik, yang lain justru turun (pekerja proyek). Dan skala memperkecil pulau besar ke atas petamu!',
    poinPenting: [
      'Konsep Rasio (Perbandingan a : b): Menyederhanakan dua nilai yang satuannya sudah sama.',
      'Perbandingan Senilai: Jika kuantitas bertambah, nilai hasil juga bertambah. Rumus kali silang: a₁ / b₁ = a₂ / b₂ → a₁ × b₂ = a₂ × b₁.',
      'Perbandingan Berbalik Nilai: Jika kuantitas bertambah, waktu atau bagian lain justru berkurang. Rumus kali lurus: a₁ × b₁ = a₂ × b₂.',
      'Skala Peta: Perbandingan jarak pada peta (JP) dengan jarak sebenarnya (JS). Skala 1 : 500.000 artinya 1 cm peta mewakili 500.000 cm (5 km) sebenarnya.',
      'Segitiga Skala (JPS): JP di atas, S dan JS di bawah. JP = S × JS, JS = JP / S.'
    ],
    rumus: [
      'Segitiga Skala: JP = S × JS | JS = JP ÷ S | S = JP : JS',
      'Perbandingan Senilai: x₂ = (x₁ / y₁) × y₂',
      'Perbandingan Berbalik Nilai: x₂ = (x₁ × y₁) / y₂',
      'Menghitung Jumlah jika Perbandingan & Total Diketahui: Nilai A = (Rasio A / Total Rasio) × Total Nilai'
    ],
    perhatikan: [
      'Pada skala peta, WAJIB samakan satuan ke sentimeter (cm) terlebih dahulu! (1 km = 100.000 cm).',
      'Hati-hati membedakan senilai vs berbalik nilai: waktu pengerjaan oleh pekerja bangunan SELALU berbalik nilai!'
    ],
    contohSoal: {
      tanya: 'Jarak kota A ke B pada peta 4 cm dengan skala 1 : 250.000. Berapa jarak sebenarnya dalam km?',
      kunci: '10 km',
      bahas: 'JS = JP ÷ Skala = 4 cm × 250.000 = 1.000.000 cm. Ubah ke km (bagi 100.000): 1.000.000 ÷ 100.000 = 10 km.'
    },
    tags: ['rasio', 'skala peta', 'perbandingan senilai', 'berbalik nilai', 'jarak sebenarnya'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-6-3',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Bangun Ruang',
    judul: '🎲 Kubus dan Balok: Luas Permukaan & Volume Gabungan',
    icon: '🎲',
    ringkasan: 'Membungkus kado dan menghitung ruang gabungan! Luas permukaan adalah total seluruh kulit luar bangun yang menyelimutinya, sedangkan volume gabungan adalah total seluruh isi ruang saat dua bangun bertumpuk.',
    poinPenting: [
      'Luas Permukaan Kubus: Memiliki 6 sisi persegi yang sama. Luas Permukaan = 6 × s².',
      'Luas Permukaan Balok: Memiliki 3 pasang sisi yang sama (depan-belakang, atas-bawah, kiri-kanan). Luas Permukaan = 2 × (p×l + p×t + l×t).',
      'Volume Gabungan: Cukup hitung volume bangun pertama, hitung volume bangun kedua, lalu jumlahkan keduanya: V_total = V₁ + V₂.',
      'Luas Permukaan Gabungan (Awas!): Bidang yang saling menempel (berimpit) di bagian dalam TIDAK DIHITUNG karena sudah bukan permukaan luar lagi!'
    ],
    rumus: [
      'Luas Permukaan Kubus: LP = 6 × s²',
      'Luas Permukaan Balok: LP = 2 × (p×l + p×t + l×t)',
      'Volume Gabungan = V_bangun1 + V_bangun2',
      'LP Gabungan = LP₁ + LP₂ - 2 × (Luas Bidang yang Berimpit)'
    ],
    perhatikan: [
      'Jebakan Luas Permukaan Gabungan: Jangan langsung menjumlahkan LP1 + LP2! Kurangkan 2 kali luas area yang saling menempel!',
      'Periksa apakah balok memiliki tutup atau tanpa tutup (misal kolam renang atau akuarium).'
    ],
    contohSoal: {
      tanya: 'Hitung luas permukaan kubus yang memiliki panjang rusuk 10 cm!',
      kunci: '600 cm²',
      bahas: 'LP = 6 × s² = 6 × (10 cm × 10 cm) = 6 × 100 cm² = 600 cm².'
    },
    tags: ['kubus', 'balok', 'luas permukaan', 'volume gabungan', 'bangun ruang'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-6-4',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Pengukuran',
    judul: '💧 Debit Air: Menghitung Aliran Volume dan Waktu',
    icon: '💧',
    ringkasan: 'Mengukur derasnya air mengalir! Debit adalah seberapa banyak volume zat cair yang mengalir keluar setiap satu satuan waktu (detik, menit, atau jam). Gunakan Segitiga Ajaib VDW untuk menguasainya!',
    poinPenting: [
      'Pengertian Debit (D): Volume air yang mengalir per satuan waktu (contoh: liter/menit, liter/detik, m³/jam).',
      'Segitiga VDW (Volume, Debit, Waktu): V di atas, D dan W di bawah sejajar.',
      'Mencari Volume: V = D × W (Debit dikali Waktu).',
      'Mencari Debit: D = V / W (Volume dibagi Waktu).',
      'Mencari Waktu Pengisian: W = V / D (Volume dibagi Debit).',
      'Konversi Satuan: 1 dm³ = 1 liter, 1 m³ = 1.000 liter, 1 liter = 1.000 ml = 1.000 cm³.'
    ],
    rumus: [
      'Segitiga VDW: Volume = Debit × Waktu (V = D × W)',
      'Debit = Volume / Waktu (D = V / W)',
      'Waktu = Volume / Debit (W = V / D)',
      'Konversi Waktu: Menit ke Detik (×60), Jam ke Menit (×60)'
    ],
    perhatikan: [
      'Wajib perhatikan kesamaan satuan! Jika debit dinyatakan dalam liter/detik tetapi waktu pengisian dalam menit, ubah menit ke detik dulu!',
      'Ingat: 1 liter setara dengan 1 dm³, bukan 1 m³.'
    ],
    contohSoal: {
      tanya: 'Kran air mengalirkan 60 liter air dalam waktu 2 menit. Berapa debit kran dalam liter/menit?',
      kunci: '30 liter/menit',
      bahas: 'D = V ÷ W = 60 liter ÷ 2 menit = 30 liter/menit.'
    },
    tags: ['debit', 'volume', 'waktu', 'aliran air', 'segitiga vdw'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-6-5',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri & Koordinat',
    judul: '🗺️ Koordinat Kartesius: Menentukan Posisi Titik & Bangun pada Bidang (X, Y)',
    icon: '🗺️',
    ringkasan: 'Membaca peta koordinat seperti navigator pesawat terbang! Bidang koordinat Kartesius dibentuk oleh dua garis tegak lurus: Sumbu X yang mendatar (horizontal) dan Sumbu Y yang tegak lurus (vertikal).',
    poinPenting: [
      'Sumbu X: Sumbu mendatar. Ke kanan bernilai positif (+), ke kiri bernilai negatif (-).',
      'Sumbu Y: Sumbu tegak. Ke atas bernilai positif (+), ke bawah bernilai negatif (-).',
      'Titik Pusat (Origin): Titik pertemuan kedua sumbu di koordinat (0, 0).',
      'Penulisan Pasangan Koordinat: Selalu ditulis dalam kurung (x, y). X selalu disebutkan pertama, baru Y.',
      'Menghubungkan Titik: Jika titik A(1,1), B(5,1), C(5,4), dan D(1,4) dihubungkan dengan garis lurus, akan membentuk bangun datar persegi panjang.'
    ],
    rumus: [
      'Format Titik Koordinat: (x, y)',
      'x = absis (jarak dari sumbu Y secara mendatar)',
      'y = ordinat (jarak dari sumbu X secara tegak)',
      'Jarak Horizontal antara dua titik = |x₂ - x₁|',
      'Jarak Vertikal antara dua titik = |y₂ - y₁|'
    ],
    perhatikan: [
      'Awas terbalik! Jangan pernah menuliskan koordinat (y, x). Ingat urutan abjad: X DULUAN baru Y!',
      'Titik yang terletak tepat pada sumbu X memiliki nilai y = 0 (contoh: (4, 0)). Titik pada sumbu Y memiliki nilai x = 0 (contoh: (0, 3)).'
    ],
    contohSoal: {
      tanya: 'Titik P terletak pada 3 satuan ke kanan dan 5 satuan ke atas dari titik pusat (0,0). Koordinat titik P adalah ...',
      kunci: '(3, 5)',
      bahas: 'Ke kanan artinya x = 3, ke atas artinya y = 5. Maka koordinat P adalah (3, 5).'
    },
    tags: ['koordinat kartesius', 'sumbu x', 'sumbu y', 'titik koordinat', 'absis', 'ordinat'],
    svgIllustration: SVG_MTK.koordinatKartesius,
    captionGambar: 'Bidang Koordinat Kartesius: Membaca titik (x, y) dengan mendahulukan sumbu X mendatar baru sumbu Y tegak.'
  },

  {
    id: 'mtk-6-6',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Data & Statistika',
    judul: '📈 Pengolahan Data Lanjutan: Rata-rata (Mean), Nilai Tengah (Median) & Modus',
    icon: '📈',
    ringkasan: 'Tiga serangkai penguasa statistik: Mean, Median, dan Modus! Mean adalah nilai rata-rata jika dibagi adil rata. Median adalah anak yang berdiri persis di tengah setelah semua nilai diurutkan. Modus adalah nilai yang paling populer dan paling sering muncul!',
    poinPenting: [
      'Mean (Rata-rata): Jumlah seluruh nilai data dibagi oleh banyaknya data.',
      'Median (Nilai Tengah): Nilai yang tepat berada di tengah SETELAH data diurutkan dari terkecil ke terbesar.',
      'Jika jumlah data GANJIL: Median adalah nilai ke-((n+1)/2).',
      'Jika jumlah data GENAP: Ambil dua angka yang di tengah, jumlahkan lalu bagi 2.',
      'Modus: Data yang paling sering muncul (frekuensinya paling besar).',
      'Mencari Nilai Hilang: Jika rata-rata sudah diketahui, kalikan rata-rata dengan banyak data, lalu kurangkan dengan jumlah data yang sudah ada.'
    ],
    rumus: [
      'Mean (Rata-rata) = Total Seluruh Nilai Data / Banyaknya Data',
      'Median (Data Genap) = (Data tengah 1 + Data tengah 2) / 2',
      'Modus = Nilai dengan frekuensi terbanyak',
      'Nilai yang Belum Diketahui = (Rata-rata Target × Total Data) - Jumlah Nilai yang Ada'
    ],
    perhatikan: [
      'Jebakan Median: Jangan langsung mencari angka tengah sebelum data DIURUTKAN! Wajib urutkan data dari yang terkecil dulu!',
      'Suatu kumpulan data bisa memiliki lebih dari satu modus, atau tidak memiliki modus sama sekali jika semua frekuensinya sama.'
    ],
    contohSoal: {
      tanya: 'Tentukan median dari data acak berikut: 7, 4, 9, 6, 8!',
      kunci: '7',
      bahas: 'Urutkan data dari terkecil: 4, 6, 7, 8, 9. Nilai yang berada persis di tengah (urutan ke-3) adalah 7.'
    },
    tags: ['mean', 'median', 'modus', 'rata-rata', 'pengolahan data', 'statistika'],
    svgIllustration: null,
    captionGambar: null
  },

  {
    id: 'mtk-6-7',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Peluang',
    judul: '🎲 Peluang Sederhana: Menghitung Kemungkinan Terjadinya Suatu Peristiwa',
    icon: '🎲',
    ringkasan: 'Menebak masa depan dengan logika matematika! Peluang adalah ukuran seberapa besar kemungkinan suatu kejadian bisa terjadi. Dari melempar mata uang koin, melempar dadu bernomor, hingga mengambil kelereng warna-warni dari dalam kantong tertutup.',
    poinPenting: [
      'Ruang Sampel (S): Himpunan seluruh kemungkinan hasil yang bisa terjadi. Jumlahnya disebut n(S).',
      'Titik Sampel Sebuah Koin: Ada 2 kemungkinan yaitu {Angka, Gambar}. n(S) = 2.',
      'Titik Sampel Sebuah Dadu: Ada 6 kemungkinan yaitu {1, 2, 3, 4, 5, 6}. n(S) = 6.',
      'Peluang Suatu Kejadian P(A): Perbandingan antara jumlah kejadian yang diharapkan n(A) dengan total seluruh kejadian n(S).',
      'Rentang Nilai Peluang: Selalu berada antara 0 sampai 1 (0 ≤ P ≤ 1).',
      'Peluang = 0 artinya kejadian tersebut MUSTAHIL terjadi (misal melempar dadu muncul angka 8).',
      'Peluang = 1 artinya kejadian tersebut PASTI terjadi (misal matahari terbit dari timur).'
    ],
    rumus: [
      'Rumus Peluang: P(A) = n(A) / n(S)',
      'Peluang Muncul 1 Sisi Koin = 1 / 2',
      'Peluang Muncul 1 Mata Dadu Tertentu = 1 / 6',
      'Peluang Mata Dadu Genap {2, 4, 6} = 3 / 6 = 1 / 2',
      'Peluang Mengambil Kelereng = Jumlah Kelereng Warna Tertentu / Total Seluruh Kelereng'
    ],
    perhatikan: [
      'Selalu sederhanakan pecahan peluang ke bentuk paling sederhana (contoh 3/6 menjadi 1/2)!',
      'Saat mengambil kelereng, pastikan penyebutnya adalah JUMLAH TOTAL seluruh kelereng yang ada di kantong!'
    ],
    contohSoal: {
      tanya: 'Sebuah kantong berisi 4 kelereng merah dan 6 kelereng biru. Berapa peluang terambilnya 1 kelereng merah?',
      kunci: '2/5 (atau 0,4)',
      bahas: 'Total kelereng n(S) = 4 + 6 = 10. Kelereng merah n(A) = 4. Maka peluang P(Merah) = 4/10 = disederhanakan jadi 2/5.'
    },
    tags: ['peluang', 'kemungkinan', 'dadu', 'koin', 'ruang sampel', 'titik sampel'],
    svgIllustration: SVG_MTK.peluangSederhana,
    captionGambar: 'Peluang Sederhana: Menghitung rasio kejadian yang diharapkan terhadap seluruh kemungkinan ruang sampel.'
  }
];

// Gabungkan 21 Modul Matematika Baru dengan 18 Modul IPAS
const combinedModules = [...newMtkModules, ...ipasModules];

console.log('Total modules combined:', combinedModules.length);
console.log('MTK modules count:', newMtkModules.length);
console.log('IPAS modules count:', ipasModules.length);

// Tulis ke data_rangkuman.js
const fileContent = `// data_rangkuman.js - Rangkuman Materi Terpadu MTK & IPAS Kelas 4, 5, dan 6
// Sesuai Kurikulum Silabus Resmi Cerdas Cermat 2026
// Dilengkapi Bahasa Ramah Anak Kelas 5 SD & Ilustrasi Edukatif Inline SVG
// Auto-generated by build_curriculum_rangkuman.js

const RANGKUMAN_DATA = ${JSON.stringify(combinedModules, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANGKUMAN_DATA };
}
`;

fs.writeFileSync('data_rangkuman.js', fileContent, 'utf-8');
console.log('data_rangkuman.js updated successfully!');
