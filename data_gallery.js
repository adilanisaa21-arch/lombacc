// data_gallery.js - Pustaka Gambar & Media Pembelajaran Cerdas Cermat MIPAS (SD Kelas 4, 5, 6)
// Memuat diagram konsep visual beresolusi tinggi, tajam, dan responsif

const DEFAULT_GALLERY_ITEMS = [
  // ==========================================
  // MATEMATIKA (MTK)
  // ==========================================
  {
    id: "img_mtk_1",
    judul: "Jaring-Jaring Kubus & Pola Sisi",
    mapel: "MATEMATIKA",
    kelas: "5",
    topik: "Geometri Bangun Ruang",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <defs>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1"/>
        </filter>
      </defs>
      <!-- Pola T jaring-jaring kubus -->
      <g filter="url(#shadow)" stroke="#1d4ed8" stroke-width="2.5" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">
        <!-- Kolom tengah: 4 persegi berderet -->
        <rect x="160" y="20" width="60" height="60" fill="#dbeafe" rx="4"/>
        <text x="190" y="55" fill="#1e40af">Atas</text>
        
        <rect x="160" y="80" width="60" height="60" fill="#bfdbfe" rx="4"/>
        <text x="190" y="115" fill="#1e40af">Depan</text>
        
        <!-- Sayap kiri -->
        <rect x="100" y="80" width="60" height="60" fill="#93c5fd" rx="4"/>
        <text x="130" y="115" fill="#1e40af">Kiri</text>
        
        <!-- Sayap kanan -->
        <rect x="220" y="80" width="60" height="60" fill="#93c5fd" rx="4"/>
        <text x="250" y="115" fill="#1e40af">Kanan</text>
        
        <rect x="160" y="140" width="60" height="60" fill="#dbeafe" rx="4"/>
        <text x="190" y="175" fill="#1e40af">Alas</text>
        
        <rect x="160" y="200" width="60" height="60" fill="#bfdbfe" rx="4"/>
        <text x="190" y="235" fill="#1e40af">Belakang</text>
      </g>
      <!-- Label info -->
      <text x="20" y="265" font-family="sans-serif" font-size="12" fill="#64748b" font-weight="bold">Kubus memiliki 6 sisi persegi identik &amp; 11 pola jaring-jaring yang valid.</text>
    </svg>`,
    keterangan: "Jaring-jaring kubus terdiri dari 6 buah bujur sangkar (persegi) yang kongruen. Jika dilipat menurut rusuk-rusuk pertemuannya, jaring-jaring ini akan membentuk bangun ruang kubus yang sempurna. Sisi Alas (bawah) selalu berhadapan dengan sisi Atas (tutup).",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_mtk_2",
    judul: "Bangun Ruang Balok & Dimensi (p, l, t)",
    mapel: "MATEMATIKA",
    kelas: "5",
    topik: "Volume & Luas Permukaan",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <g stroke="#7c3aed" stroke-width="2.5" font-family="sans-serif">
        <!-- Balok 3D -->
        <!-- Sisi Depan -->
        <polygon points="60,110 240,110 240,210 60,210" fill="#ede9fe"/>
        <!-- Sisi Atas -->
        <polygon points="60,110 240,110 320,60 140,60" fill="#ddd6fe"/>
        <!-- Sisi Kanan -->
        <polygon points="240,110 320,60 320,160 240,210" fill="#c4b5fd"/>
        <!-- Garis putus-putus rusuk belakang -->
        <line x1="60" y1="210" x2="140" y2="160" stroke="#a78bfa" stroke-dasharray="5,5" stroke-width="2"/>
        <line x1="140" y1="60" x2="140" y2="160" stroke="#a78bfa" stroke-dasharray="5,5" stroke-width="2"/>
        <line x1="140" y1="160" x2="320" y2="160" stroke="#a78bfa" stroke-dasharray="5,5" stroke-width="2"/>
        
        <!-- Label dimensi -->
        <text x="150" y="235" fill="#6d28d9" font-weight="bold" font-size="15" text-anchor="middle">Panjang (p)</text>
        <text x="295" y="195" fill="#6d28d9" font-weight="bold" font-size="14" text-anchor="middle">Lebar (l)</text>
        <text x="42" y="165" fill="#6d28d9" font-weight="bold" font-size="14" text-anchor="middle">Tinggi (t)</text>
        
        <!-- Box Rumus Emas -->
        <rect x="60" y="15" width="280" height="34" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.5" rx="8"/>
        <text x="200" y="38" fill="#5b21b6" font-weight="bold" font-size="14" text-anchor="middle">Volume Balok = p × l × t</text>
      </g>
    </svg>`,
    keterangan: "Balok memiliki 6 sisi berbentuk persegi panjang (dengan sisi berhadapan sama besar), 12 rusuk, dan 8 titik sudut. Volume balok dihitung dengan mengalikan panjang (p), lebar (l), dan tinggi (t). Luas Permukaannya = 2 × (p×l + p×t + l×t).",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_mtk_3",
    judul: "Bangun Tabung & Kerucut Serta Unsur-Unsurnya",
    mapel: "MATEMATIKA",
    kelas: "6",
    topik: "Bangun Ruang Sisi Lengkung",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <!-- TABUNG -->
      <g stroke="#0284c7" stroke-width="2" font-family="sans-serif">
        <ellipse cx="110" cy="80" rx="60" ry="22" fill="#e0f2fe"/>
        <path d="M 50,80 L 50,200 A 60 22 0 0 0 170,200 L 170,80" fill="#bae6fd"/>
        <ellipse cx="110" cy="200" rx="60" ry="22" fill="#e0f2fe" stroke-dasharray="4,4"/>
        <!-- Garis r dan t -->
        <line x1="110" y1="80" x2="170" y2="80" stroke="#0369a1" stroke-width="2.5"/>
        <text x="140" y="74" fill="#0369a1" font-size="12" font-weight="bold">r</text>
        <line x1="38" y1="80" x2="38" y2="200" stroke="#0369a1" stroke-width="1.5"/>
        <text x="25" y="145" fill="#0369a1" font-size="13" font-weight="bold">t</text>
        <text x="110" y="245" fill="#0369a1" font-weight="bold" font-size="14" text-anchor="middle">TABUNG</text>
        <text x="110" y="265" fill="#64748b" font-size="11" text-anchor="middle">V = π × r² × t</text>
      </g>
      <!-- KERUCUT -->
      <g stroke="#d97706" stroke-width="2" font-family="sans-serif">
        <ellipse cx="290" cy="200" rx="60" ry="22" fill="#fef3c7"/>
        <path d="M 230,200 L 290,60 L 350,200" fill="#fde68a" fill-opacity="0.7"/>
        <line x1="290" y1="60" x2="290" y2="200" stroke="#b45309" stroke-dasharray="3,3" stroke-width="2"/>
        <line x1="290" y1="200" x2="350" y2="200" stroke="#b45309" stroke-width="2.5"/>
        <text x="320" y="195" fill="#92400e" font-size="12" font-weight="bold">r</text>
        <text x="276" y="135" fill="#92400e" font-size="12" font-weight="bold">t</text>
        <text x="328" y="125" fill="#92400e" font-size="12" font-weight="bold">s</text>
        <text x="290" y="245" fill="#b45309" font-weight="bold" font-size="14" text-anchor="middle">KERUCUT</text>
        <text x="290" y="265" fill="#64748b" font-size="11" text-anchor="middle">V = ⅓ × π × r² × t</text>
      </g>
    </svg>`,
    keterangan: "Tabung memiliki 3 sisi (alas dan tutup lingkaran identik, serta selimut tabung persegi panjang). Kerucut memiliki 2 sisi (alas lingkaran dan selimut juring lingkaran) serta 1 titik puncak. Hubungan volume: Volume kerucut tepat sepertiga (⅓) dari volume tabung dengan jari-jari dan tinggi yang sama.",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_mtk_4",
    judul: "Pengukuran Sudut & Busur Jarum Jam",
    mapel: "MATEMATIKA",
    kelas: "4",
    topik: "Pengukuran Sudut",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <!-- Jam Siku-siku (Pukul 03.00) -->
      <g font-family="sans-serif">
        <circle cx="110" cy="130" r="70" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
        <circle cx="110" cy="130" r="4" fill="#1e3a8a"/>
        <!-- Angka 12, 3, 6, 9 -->
        <text x="110" y="78" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">12</text>
        <text x="165" y="135" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">3</text>
        <text x="110" y="190" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">6</text>
        <text x="55" y="135" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">9</text>
        <!-- Jarum jam 03.00 -->
        <line x1="110" y1="130" x2="110" y2="82" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="110" y1="130" x2="152" y2="130" stroke="#1d4ed8" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Kotak siku-siku -->
        <path d="M 110,115 L 125,115 L 125,130" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="110" y="228" fill="#1d4ed8" font-weight="bold" font-size="14" text-anchor="middle">Pukul 03.00</text>
        <text x="110" y="248" fill="#dc2626" font-weight="bold" font-size="13" text-anchor="middle">Sudut Siku-Siku (90°)</text>
      </g>
      <!-- Jam Sudut Lancip (Pukul 02.00) -->
      <g font-family="sans-serif">
        <circle cx="290" cy="130" r="70" fill="#ffffff" stroke="#10b981" stroke-width="3"/>
        <circle cx="290" cy="130" r="4" fill="#064e3b"/>
        <!-- Angka -->
        <text x="290" y="78" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">12</text>
        <text x="345" y="135" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">3</text>
        <text x="290" y="190" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">6</text>
        <text x="235" y="135" fill="#1e293b" font-weight="bold" font-size="13" text-anchor="middle">9</text>
        <!-- Jarum jam 02.00 (60 derajat) -->
        <line x1="290" y1="130" x2="290" y2="82" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="290" y1="130" x2="328" y2="98" stroke="#059669" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M 290,105 A 25 25 0 0 1 310,113" fill="none" stroke="#059669" stroke-width="2"/>
        <text x="290" y="228" fill="#047857" font-weight="bold" font-size="14" text-anchor="middle">Pukul 02.00</text>
        <text x="290" y="248" fill="#059669" font-weight="bold" font-size="13" text-anchor="middle">Sudut Lancip (60°)</text>
      </g>
    </svg>`,
    keterangan: "Lingkaran penuh memiliki besar sudut 360°. Karena jam dinding dibagi menjadi 12 bagian angka, maka jarak sudut antara setiap satu angka berdekatan bernilai 360° ÷ 12 = 30°. Contoh: Pukul 02.00 = 2 × 30° = 60° (Sudut Lancip), dan pukul 03.00 = 3 × 30° = 90° (Sudut Siku-Siku).",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },

  // ==========================================
  // IPA (SAINS)
  // ==========================================
  {
    id: "img_ipa_1",
    judul: "Daur Hidrologi & Siklus Air di Bumi",
    mapel: "IPA",
    kelas: "5",
    topik: "Bumi dan Alam Semesta",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#f0f9ff"/>
        </linearGradient>
      </defs>
      <!-- Langit & Laut -->
      <rect width="100%" height="180" fill="url(#skyGrad)"/>
      <path d="M 0,200 Q 100,180 200,210 T 400,200 L 400,280 L 0,280 Z" fill="#0284c7"/>
      <!-- Daratan Hijau / Gunung -->
      <polygon points="180,210 280,100 380,210" fill="#15803d"/>
      <polygon points="260,122 280,100 300,122" fill="#e2e8f0"/>
      <!-- Matahari Terik -->
      <circle cx="50" cy="50" r="28" fill="#f59e0b"/>
      <g stroke="#f59e0b" stroke-width="2.5">
        <line x1="50" y1="12" x2="50" y2="4"/>
        <line x1="50" y1="88" x2="50" y2="96"/>
        <line x1="12" y1="50" x2="4" y2="50"/>
        <line x1="88" y1="50" x2="96" y2="50"/>
      </g>
      <!-- Awan Kondensasi -->
      <ellipse cx="230" cy="55" rx="36" ry="20" fill="#ffffff" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
      <ellipse cx="260" cy="50" rx="30" ry="22" fill="#ffffff"/>
      <ellipse cx="205" cy="58" rx="22" ry="16" fill="#ffffff"/>
      
      <!-- Hujan (Presipitasi) -->
      <g stroke="#0284c7" stroke-width="2" stroke-linecap="round">
        <line x1="220" y1="85" x2="215" y2="105"/>
        <line x1="240" y1="85" x2="235" y2="105"/>
        <line x1="260" y1="85" x2="255" y2="105"/>
      </g>
      
      <!-- Panah Siklus -->
      <!-- Evaporasi -->
      <path d="M 90,190 Q 80,140 100,100" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
      <text x="105" y="145" fill="#dc2626" font-family="sans-serif" font-weight="bold" font-size="12">1. Evaporasi</text>
      
      <!-- Kondensasi -->
      <text x="240" y="30" fill="#0369a1" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">2. Kondensasi</text>
      
      <!-- Presipitasi -->
      <text x="300" y="95" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="12">3. Presipitasi</text>
      
      <!-- Infiltrasi -->
      <text x="310" y="240" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="12">4. Infiltrasi</text>
    </svg>`,
    keterangan: "Siklus air menjaga ketersediaan air tawar di bumi. 4 tahapan utamanya adalah: 1. Evaporasi (penguapan air laut/sungai oleh panas matahari) & Transpirasi (penguapan dari tumbuhan), 2. Kondensasi (uap air menjadi titik-titik awan dingin), 3. Presipitasi (jatuhnya tetesan air sebagai hujan), dan 4. Infiltrasi (penyerapan air ke dalam pori-pori tanah).",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_ipa_2",
    judul: "Rantai Makanan & Piramida Ekosistem Sawah",
    mapel: "IPA",
    kelas: "5",
    topik: "Ekosistem & Keseimbangan Hayati",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <g font-family="sans-serif" font-weight="bold" text-anchor="middle">
        <!-- Kotak Padi -->
        <rect x="20" y="60" width="70" height="70" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
        <text x="55" y="92" font-size="24">🌾</text>
        <text x="55" y="115" font-size="11" fill="#15803d">PADI</text>
        <text x="55" y="145" font-size="10" fill="#64748b">Produsen</text>
        
        <!-- Panah 1 -->
        <path d="M 95,95 L 115,95" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow)"/>
        
        <!-- Kotak Belalang -->
        <rect x="120" y="60" width="70" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/>
        <text x="155" y="92" font-size="24">🦗</text>
        <text x="155" y="115" font-size="11" fill="#b45309">BELALANG</text>
        <text x="155" y="145" font-size="10" fill="#64748b">Konsumen I</text>
        
        <!-- Panah 2 -->
        <path d="M 195,95 L 215,95" stroke="#d97706" stroke-width="3"/>
        
        <!-- Kotak Katak -->
        <rect x="220" y="60" width="70" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="8"/>
        <text x="255" y="92" font-size="24">🐸</text>
        <text x="255" y="115" font-size="11" fill="#1d4ed8">KATAK</text>
        <text x="255" y="145" font-size="10" fill="#64748b">Konsumen II</text>
        
        <!-- Panah 3 -->
        <path d="M 295,95 L 315,95" stroke="#2563eb" stroke-width="3"/>
        
        <!-- Kotak Ular -->
        <rect x="320" y="60" width="70" height="70" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="8"/>
        <text x="355" y="92" font-size="24">🐍</text>
        <text x="355" y="115" font-size="11" fill="#b91c1c">ULAR</text>
        <text x="355" y="145" font-size="10" fill="#64748b">Konsumen III</text>
        
        <!-- Pengurai / Jamur -->
        <rect x="150" y="190" width="100" height="50" fill="#f1f5f9" stroke="#475569" stroke-width="2" rx="8"/>
        <text x="200" y="215" font-size="20">🍄</text>
        <text x="200" y="232" font-size="11" fill="#334155">DEKOMPOSER</text>
        
        <!-- Garis putus ke pengurai -->
        <path d="M 355,140 Q 355,215 260,215" fill="none" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="2"/>
        <path d="M 55,140 Q 55,215 140,215" fill="none" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="2"/>
      </g>
    </svg>`,
    keterangan: "Rantai makanan menunjukkan perpindahan energi makanan dari organisme satu ke organisme berikutnya. Padi bertindak sebagai produsen klorofil fotosintesis. Herbivora (belalang) adalah Konsumen Tingkat I. Karnivora (katak) Konsumen Tingkat II, dan predator puncak (ular/elang) diurai kembali oleh jamur (dekomposer) menjadi humus tanah.",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_ipa_3",
    judul: "Tata Surya: Urutan 8 Planet dari Matahari",
    mapel: "IPA",
    kelas: "6",
    topik: "Tata Surya & Antariksa",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#0f172a" rx="12"/>
      <g font-family="sans-serif">
        <!-- Matahari di sisi kiri -->
        <path d="M -40,0 A 140 140 0 0 1 -40,280 Z" fill="#f59e0b"/>
        <text x="10" y="145" fill="#ffffff" font-weight="bold" font-size="12">Matahari</text>
        
        <!-- Planet-planet -->
        <!-- Merkurius -->
        <circle cx="70" cy="140" r="5" fill="#94a3b8"/>
        <text x="70" y="165" fill="#cbd5e1" font-size="9" text-anchor="middle">Merkurius</text>
        
        <!-- Venus -->
        <circle cx="100" cy="140" r="8" fill="#fde047"/>
        <text x="100" y="165" fill="#cbd5e1" font-size="9" text-anchor="middle">Venus</text>
        
        <!-- Bumi -->
        <circle cx="135" cy="140" r="9" fill="#38bdf8"/>
        <circle cx="137" cy="138" r="4" fill="#22c55e"/>
        <text x="135" y="165" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Bumi</text>
        
        <!-- Mars -->
        <circle cx="170" cy="140" r="7" fill="#ef4444"/>
        <text x="170" y="165" fill="#cbd5e1" font-size="9" text-anchor="middle">Mars</text>
        
        <!-- Yupiter (Terbesar) -->
        <circle cx="225" cy="140" r="22" fill="#fb923c"/>
        <text x="225" y="180" fill="#fed7aa" font-size="10" font-weight="bold" text-anchor="middle">Yupiter</text>
        
        <!-- Saturnus (Cincin) -->
        <ellipse cx="285" cy="140" rx="22" ry="7" fill="none" stroke="#ca8a04" stroke-width="2.5" transform="rotate(-15 285 140)"/>
        <circle cx="285" cy="140" r="14" fill="#eab308"/>
        <text x="285" y="175" fill="#fef08a" font-size="10" text-anchor="middle">Saturnus</text>
        
        <!-- Uranus -->
        <circle cx="335" cy="140" r="10" fill="#2dd4bf"/>
        <text x="335" y="165" fill="#99f6e4" font-size="9" text-anchor="middle">Uranus</text>
        
        <!-- Neptunus -->
        <circle cx="375" cy="140" r="10" fill="#3b82f6"/>
        <text x="375" y="165" fill="#bfdbfe" font-size="9" text-anchor="middle">Neptunus</text>
      </g>
      <!-- Garis pengingat -->
      <text x="200" y="240" fill="#94a3b8" font-family="sans-serif" font-size="11" text-anchor="middle">Jembatan Keledai: <b>Me-Ve-Bu-Ma-Yu-Sa-U-Ne</b></text>
      <text x="200" y="258" fill="#f59e0b" font-family="sans-serif" font-size="11" text-anchor="middle">Planet Terbesar: Yupiter | Planet Terpanas: Venus</text>
    </svg>`,
    keterangan: "Sistem tata surya kita memiliki 8 planet utama yang mengitari Matahari sesuai orbit elipsnya. Planet dalam (terestrial berbatu): Merkurius, Venus, Bumi, dan Mars. Planet luar (gas raksasa): Yupiter (terbesar), Saturnus (bercincin indah), Uranus, dan Neptunus (terjauh dan terdingin).",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },

  // ==========================================
  // IPS (SOSIAL)
  // ==========================================
  {
    id: "img_ips_1",
    judul: "8 Arah Mata Angin & Kompas Navigasi",
    mapel: "IPS",
    kelas: "4",
    topik: "Peta & Navigasi Lingkungan",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <g transform="translate(200, 140)" font-family="sans-serif" font-weight="bold" text-anchor="middle">
        <circle r="90" fill="#ffffff" stroke="#ca8a04" stroke-width="2.5"/>
        <circle r="98" fill="none" stroke="#eab308" stroke-dasharray="3,3" stroke-width="1.5"/>
        
        <!-- Bintang Kompas -->
        <!-- Utara - Selatan -->
        <polygon points="0,0 -12,-15 0,-85" fill="#dc2626"/>
        <polygon points="0,0 12,-15 0,-85" fill="#ef4444"/>
        <polygon points="0,0 -12,15 0,85" fill="#1e293b"/>
        <polygon points="0,0 12,15 0,85" fill="#475569"/>
        
        <!-- Timur - Barat -->
        <polygon points="0,0 15,-12 85,0" fill="#1e293b"/>
        <polygon points="0,0 15,12 85,0" fill="#475569"/>
        <polygon points="0,0 -15,-12 -85,0" fill="#1e293b"/>
        <polygon points="0,0 -15,12 -85,0" fill="#475569"/>
        
        <!-- Diagonal (TL, TG, BD, BL) -->
        <polygon points="0,0 0,-10 55,-55" fill="#ca8a04"/>
        <polygon points="0,0 0,10 55,55" fill="#ca8a04"/>
        <polygon points="0,0 0,-10 -55,-55" fill="#ca8a04"/>
        <polygon points="0,0 0,10 -55,55" fill="#ca8a04"/>
        
        <circle r="8" fill="#ca8a04"/>
        
        <!-- Label Arah -->
        <text x="0" y="-95" fill="#dc2626" font-size="17">U (Utara)</text>
        <text x="0" y="112" fill="#1e293b" font-size="14">S (Selatan)</text>
        <text x="115" y="5" fill="#1e293b" font-size="14">T (Timur)</text>
        <text x="-115" y="5" fill="#1e293b" font-size="14">B (Barat)</text>
        
        <text x="75" y="-65" fill="#854d0e" font-size="12">TL</text>
        <text x="75" y="75" fill="#854d0e" font-size="12">TG</text>
        <text x="-75" y="75" fill="#854d0e" font-size="12">BD</text>
        <text x="-75" y="-65" fill="#854d0e" font-size="12">BL</text>
      </g>
    </svg>`,
    keterangan: "Arah mata angin adalah panduan navigasi dasar di permukaan bumi. 4 arah pokok: Utara (U), Timur (T), Selatan (S), dan Barat (B). 4 arah perantara: Timur Laut (antara U & T), Tenggara (antara T & S), Barat Daya (antara S & B), dan Barat Laut (antara B & U). Pada peta standar, arah Utara selalu menunjuk ke atas.",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_ips_2",
    judul: "3 Zona Waktu Indonesia: WIB, WITA, dan WIT",
    mapel: "IPS",
    kelas: "5",
    topik: "Letak Geografis Indonesia",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <g font-family="sans-serif">
        <!-- 3 Kolom Warna -->
        <!-- WIB -->
        <rect x="20" y="30" width="115" height="180" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="10"/>
        <text x="77" y="65" fill="#1d4ed8" font-weight="bold" font-size="18" text-anchor="middle">WIB</text>
        <text x="77" y="85" fill="#2563eb" font-weight="bold" font-size="12" text-anchor="middle">GMT +7</text>
        <line x1="35" y1="95" x2="120" y2="95" stroke="#93c5fd"/>
        <text x="77" y="120" fill="#1e3a8a" font-size="11" text-anchor="middle">• Sumatra</text>
        <text x="77" y="140" fill="#1e3a8a" font-size="11" text-anchor="middle">• Jawa &amp; Madura</text>
        <text x="77" y="160" fill="#1e3a8a" font-size="11" text-anchor="middle">• Kalbar &amp; Kalteng</text>
        <rect x="35" y="175" width="85" height="24" fill="#2563eb" rx="6"/>
        <text x="77" y="191" fill="#ffffff" font-weight="bold" font-size="11" text-anchor="middle">Pukul 07.00</text>
        
        <!-- WITA -->
        <rect x="142" y="30" width="115" height="180" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="10"/>
        <text x="200" y="65" fill="#b45309" font-weight="bold" font-size="18" text-anchor="middle">WITA</text>
        <text x="200" y="85" fill="#d97706" font-weight="bold" font-size="12" text-anchor="middle">GMT +8</text>
        <line x1="157" y1="95" x2="242" y2="95" stroke="#fde68a"/>
        <text x="200" y="120" fill="#78350f" font-size="11" text-anchor="middle">• Bali &amp; NTB/NTT</text>
        <text x="200" y="140" fill="#78350f" font-size="11" text-anchor="middle">• Seluruh Sulawesi</text>
        <text x="200" y="160" fill="#78350f" font-size="11" text-anchor="middle">• Kalsel, Timur, Tara</text>
        <rect x="157" y="175" width="85" height="24" fill="#d97706" rx="6"/>
        <text x="200" y="191" fill="#ffffff" font-weight="bold" font-size="11" text-anchor="middle">Pukul 08.00</text>
        
        <!-- WIT -->
        <rect x="265" y="30" width="115" height="180" fill="#dcfce7" stroke="#10b981" stroke-width="2" rx="10"/>
        <text x="322" y="65" fill="#047857" font-weight="bold" font-size="18" text-anchor="middle">WIT</text>
        <text x="322" y="85" fill="#059669" font-weight="bold" font-size="12" text-anchor="middle">GMT +9</text>
        <line x1="280" y1="95" x2="365" y2="95" stroke="#a7f3d0"/>
        <text x="322" y="125" fill="#064e3b" font-size="11" text-anchor="middle">• Kep. Maluku</text>
        <text x="322" y="145" fill="#064e3b" font-size="11" text-anchor="middle">• Seluruh Papua</text>
        <rect x="280" y="175" width="85" height="24" fill="#059669" rx="6"/>
        <text x="322" y="191" fill="#ffffff" font-weight="bold" font-size="11" text-anchor="middle">Pukul 09.00</text>
        
        <!-- Info Bawah -->
        <text x="200" y="240" fill="#334155" font-weight="bold" font-size="12" text-anchor="middle">Selisih waktu antara zona yang berdekatan adalah 1 JAM.</text>
        <text x="200" y="260" fill="#64748b" font-size="11" text-anchor="middle">WIB ke WIT selisih 2 Jam (Jika WIB pk 07.00, maka WIT pk 09.00).</text>
      </g>
    </svg>`,
    keterangan: "Indonesia memiliki wilayah bujur yang luas (95° BT - 141° BT) sehingga dibagi menjadi 3 zona waktu: 1. WIB (Waktu Indonesia Barat = GMT+7), 2. WITA (Waktu Indonesia Tengah = GMT+8), dan 3. WIT (Waktu Indonesia Timur = GMT+9). Selisih antara WIB ke WITA adalah 1 jam, dan WIB ke WIT adalah 2 jam.",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  },
  {
    id: "img_ips_3",
    judul: "10 Negara Anggota ASEAN & Lambang Persatuan",
    mapel: "IPS",
    kelas: "6",
    topik: "Kerjasama Regional ASEAN",
    tipe: "svg",
    src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <g font-family="sans-serif">
        <!-- Lambang ASEAN -->
        <circle cx="100" cy="120" r="65" fill="#1e3a8a" stroke="#ffffff" stroke-width="3"/>
        <circle cx="100" cy="120" r="54" fill="#dc2626"/>
        <circle cx="100" cy="120" r="42" fill="#ffffff"/>
        <circle cx="100" cy="120" r="38" fill="#facc15"/>
        <!-- 10 Batang Padi -->
        <g stroke="#854d0e" stroke-width="2" stroke-linecap="round">
          <line x1="88" y1="135" x2="88" y2="105"/>
          <line x1="94" y1="137" x2="94" y2="103"/>
          <line x1="100" y1="138" x2="100" y2="102"/>
          <line x1="106" y1="137" x2="106" y2="103"/>
          <line x1="112" y1="135" x2="112" y2="105"/>
        </g>
        <ellipse cx="100" cy="122" rx="16" ry="4" fill="#713f12"/>
        <text x="100" y="210" fill="#1e3a8a" font-weight="bold" font-size="13" text-anchor="middle">LAMBANG ASEAN</text>
        <text x="100" y="228" fill="#64748b" font-size="10" text-anchor="middle">10 Batang Padi Terikat</text>
        
        <!-- Daftar 10 Negara -->
        <rect x="190" y="25" width="195" height="230" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="8"/>
        <text x="287" y="48" fill="#1e40af" font-weight="bold" font-size="13" text-anchor="middle">10 NEGARA ANGGOTA</text>
        <line x1="205" y1="56" x2="370" y2="56" stroke="#e2e8f0"/>
        
        <g font-size="11" fill="#334155" transform="translate(205, 75)">
          <text y="0">🇮🇩 1. Indonesia (Pendiri)</text>
          <text y="18">🇲🇾 2. Malaysia (Pendiri)</text>
          <text y="36">🇸🇬 3. Singapura (Pendiri)</text>
          <text y="54">🇹🇭 4. Thailand (Pendiri)</text>
          <text y="72">🇵🇭 5. Filipina (Pendiri)</text>
          <text y="90">🇧🇳 6. Brunei Darussalam</text>
          <text y="108">🇻🇳 7. Vietnam</text>
          <text y="126">🇱🇦 8. Laos</text>
          <text y="144">🇲🇲 9. Myanmar</text>
          <text y="162">🇰🇭 10. Kamboja</text>
        </g>
      </g>
    </svg>`,
    keterangan: "ASEAN didirikan pada 8 Agustus 1967 di Bangkok melalui Deklarasi Bangkok oleh 5 negara pelopor: Indonesia (Adam Malik), Malaysia (Tun Abdul Razak), Singapura (S. Rajaratnam), Thailand (Thanat Khoman), dan Filipina (Narciso Ramos). Lambang 10 batang padi terikat melambangkan impian para pendiri agar negara-negara Asia Tenggara terikat bersama dalam persahabatan dan solidaritas.",
    pembuat: "Sistem Arena MIPAS",
    status: "AKTIF",
    created_at: "2026-11-07"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_GALLERY_ITEMS };
}
