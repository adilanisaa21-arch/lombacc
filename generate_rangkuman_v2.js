// generate_rangkuman_v2.js
// Generator modul rangkuman ramah anak kelas 5 SD dengan ilustrasi SVG edukatif
const fs = require('fs');

// Koleksi Ilustrasi Edukatif SVG
const SVG = {
  kabataku: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <defs>
      <linearGradient id="gradK" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4f46e5" /><stop offset="100%" stop-color="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="420" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    <text x="210" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">👑 TANGGA KASTA KABATAKU (Siapa Lebih Kuat?)</text>
    
    <!-- Level 1: Kurung -->
    <rect x="30" y="40" width="360" height="28" rx="7" fill="#ef4444"/>
    <text x="45" y="59" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">1. DALAM KURUNG ( ... )</text>
    <text x="375" y="59" text-anchor="end" font-family="sans-serif" font-size="11" fill="#fee2e2">Raja Tertinggi: Wajib Dikerjakan Duluan!</text>

    <!-- Level 2: Kali & Bagi -->
    <rect x="50" y="74" width="320" height="28" rx="7" fill="#f59e0b"/>
    <text x="65" y="93" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">2. PERKALIAN (×) & PEMBAGIAN (÷)</text>
    <text x="355" y="93" text-anchor="end" font-family="sans-serif" font-size="11" fill="#fef3c7">Sama Kuat: Kerjakan dari KIRI</text>

    <!-- Level 3: Tambah & Kurang -->
    <rect x="70" y="108" width="280" height="28" rx="7" fill="#10b981"/>
    <text x="85" y="127" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">3. PENJUMLAHAN (+) & PENGURANGAN (-)</text>
    <text x="335" y="127" text-anchor="end" font-family="sans-serif" font-size="11" fill="#d1fae5">Tingkat Terakhir: Kerjakan Santai</text>

    <!-- Catatan kaki -->
    <text x="210" y="158" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">Contoh: 10 + 2 × 5 = 10 + 10 = 20 (BUKAN 12 × 5 = 60!)</text>
  </svg>`,

  pecahanPizza: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px">
    <rect width="420" height="170" rx="14" fill="#fdfbf7" stroke="#fed7aa" stroke-width="2"/>
    <text x="210" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#9a3412">🍕 RAHASIA PECAHAN SENILAI: UKURAN KENYANGNYA SAMA!</text>
    
    <!-- Lingkaran 1/2 -->
    <g transform="translate(70, 85)">
      <circle r="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <path d="M 0 0 L 0 -40 A 40 40 0 0 1 0 40 Z" fill="#f97316"/>
      <text x="0" y="56" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">1/2 Bagian</text>
      <text x="0" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">1 dari 2 potong</text>
    </g>

    <text x="145" y="92" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ea580c">=</text>

    <!-- Lingkaran 2/4 -->
    <g transform="translate(210, 85)">
      <circle r="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <path d="M 0 0 L 0 -40 A 40 40 0 0 1 40 0 Z" fill="#f97316"/>
      <path d="M 0 0 L 40 0 A 40 40 0 0 1 0 40 Z" fill="#fb923c"/>
      <line x1="-40" y1="0" x2="40" y2="0" stroke="#ea580c" stroke-width="1.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="#ea580c" stroke-width="1.5"/>
      <text x="0" y="56" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">2/4 Bagian</text>
      <text x="0" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">2 dari 4 potong</text>
    </g>

    <text x="275" y="92" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ea580c">=</text>

    <!-- Lingkaran 4/8 -->
    <g transform="translate(340, 85)">
      <circle r="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <path d="M 0 0 L 0 -40 A 40 40 0 0 1 40 0 L 0 0 L 40 0 A 40 40 0 0 1 0 40 Z" fill="#f97316"/>
      <line x1="-40" y1="0" x2="40" y2="0" stroke="#ea580c" stroke-width="1.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="#ea580c" stroke-width="1.5"/>
      <line x1="-28.28" y1="-28.28" x2="28.28" y2="28.28" stroke="#ea580c" stroke-width="1.5"/>
      <line x1="-28.28" y1="28.28" x2="28.28" y2="-28.28" stroke="#ea580c" stroke-width="1.5"/>
      <text x="0" y="56" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">4/8 Bagian</text>
      <text x="0" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">4 dari 8 potong</text>
    </g>
  </svg>`,

  bangunDatarDasar: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534">📐 KELUARGA BANGUN DATAR DASAR</text>
    
    <!-- Persegi -->
    <g transform="translate(25, 40)">
      <rect x="10" y="10" width="65" height="65" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="4"/>
      <text x="42" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">s</text>
      <text x="82" y="46" font-size="11" font-weight="bold" fill="#15803d">s</text>
      <text x="42" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">PERSEGI</text>
      <text x="42" y="106" text-anchor="middle" font-size="9.5" fill="#166534">L = s × s</text>
    </g>

    <!-- Persegi Panjang -->
    <g transform="translate(135, 40)">
      <rect x="5" y="18" width="100" height="50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="4"/>
      <text x="55" y="12" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">p (panjang)</text>
      <text x="112" y="48" font-size="11" font-weight="bold" fill="#15803d">l</text>
      <text x="55" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">PERSEGI PANJANG</text>
      <text x="55" y="106" text-anchor="middle" font-size="9.5" fill="#166534">L = p × l</text>
    </g>

    <!-- Segitiga -->
    <g transform="translate(275, 40)">
      <polygon points="10,68 65,10 115,68" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <line x1="65" y1="10" x2="65" y2="68" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="69" y="44" font-size="10.5" font-weight="bold" fill="#dc2626">t</text>
      <text x="62" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">a (alas)</text>
      <text x="62" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">SEGITIGA</text>
      <text x="62" y="106" text-anchor="middle" font-size="9.5" fill="#166534">L = (a × t) ÷ 2</text>
    </g>
  </svg>`,

  segitigaJokowi: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-height:170px">
    <rect width="420" height="170" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af">⚡ DUA SEGITIGA AJAIB: JOKOWI & DEBIT</text>

    <!-- Segitiga JOKOWI -->
    <g transform="translate(40, 32)">
      <polygon points="75,10 15,100 135,100" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="38" y1="65" x2="112" y2="65" stroke="#2563eb" stroke-width="2"/>
      <line x1="75" y1="65" x2="75" y2="100" stroke="#2563eb" stroke-width="2"/>
      <text x="75" y="50" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e3a8a">J (Jarak)</text>
      <text x="54" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">K</text>
      <text x="96" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">W</text>
      <text x="75" y="118" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">SEGITIGA JOKOWI</text>
      <text x="75" y="130" text-anchor="middle" font-size="9.5" fill="#3b82f6">J = K × W | K = J ÷ W</text>
    </g>

    <!-- Segitiga VDW (Volume Debit Waktu) -->
    <g transform="translate(230, 32)">
      <polygon points="75,10 15,100 135,100" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.5"/>
      <line x1="38" y1="65" x2="112" y2="65" stroke="#0d9488" stroke-width="2"/>
      <line x1="75" y1="65" x2="75" y2="100" stroke="#0d9488" stroke-width="2"/>
      <text x="75" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#134e4a">V (Volume)</text>
      <text x="54" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">D</text>
      <text x="96" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">W</text>
      <text x="75" y="118" text-anchor="middle" font-size="11" font-weight="bold" fill="#115e59">SEGITIGA DEBIT</text>
      <text x="75" y="130" text-anchor="middle" font-size="9.5" fill="#0d9488">V = D × W | D = V ÷ W</text>
    </g>
  </svg>`,

  bangunRuang: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#faf5ff" stroke="#e9d5ff" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6b21a8">📦 KUBUS & BALOK: ISI (VOLUME) & KULIT (LUAS PERMUKAAN)</text>

    <!-- Kubus 3D -->
    <g transform="translate(60, 38)">
      <rect x="0" y="20" width="50" height="50" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="0,20 20,5 70,5 50,20" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="50,20 70,5 70,55 50,70" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      <text x="25" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#581c87">s (rusuk)</text>
      <text x="35" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">KUBUS</text>
      <text x="35" y="113" text-anchor="middle" font-size="9" fill="#7e22ce">V = s³ | LP = 6 × s²</text>
    </g>

    <!-- Balok 3D -->
    <g transform="translate(230, 38)">
      <rect x="0" y="22" width="80" height="45" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="0,22 25,6 105,6 80,22" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <polygon points="80,22 105,6 105,51 80,67" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
      <text x="40" y="80" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#581c87">p</text>
      <text x="86" y="45" font-size="10.5" font-weight="bold" fill="#581c87">t</text>
      <text x="96" y="15" font-size="10" font-weight="bold" fill="#581c87">l</text>
      <text x="52" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">BALOK</text>
      <text x="52" y="113" text-anchor="middle" font-size="9" fill="#7e22ce">V = p × l × t | LP = 2(pl+pt+lt)</text>
    </g>
  </svg>`,

  lingkaranUnsur: `<svg viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style="max-height:165px">
    <rect width="420" height="165" rx="14" fill="#fff7ed" stroke="#ffedd5" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#9a3412">⭕ ANATOMI LINGKARAN LENGKAP</text>
    
    <g transform="translate(140, 90)">
      <circle r="55" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
      <!-- Juring pizza -->
      <path d="M 0 0 L 55 0 A 55 55 0 0 0 0 -55 Z" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#b91c1c" stroke-width="2"/>
      <circle cx="0" cy="0" r="3.5" fill="#1e293b"/>
      <line x1="0" y1="0" x2="38.89" y2="38.89" stroke="#047857" stroke-width="2"/>
      <text x="-25" y="-6" font-size="10" font-weight="bold" fill="#b91c1c">d = 2 × r</text>
      <text x="22" y="24" font-size="10" font-weight="bold" fill="#047857">r</text>
      <text x="22" y="-22" font-size="10" font-weight="bold" fill="#7c2d12">Juring</text>
    </g>

    <g transform="translate(245, 45)">
      <text x="0" y="16" font-size="11.5" font-weight="bold" fill="#c2410c">Kunci Utama:</text>
      <text x="0" y="34" font-size="11" fill="#431407">• Jari-jari (r) = 1/2 × Diameter (d)</text>
      <text x="0" y="52" font-size="11" fill="#431407">• Keliling = 2 × π × r atau π × d</text>
      <text x="0" y="70" font-size="11" fill="#431407">• Luas = π × r × r</text>
      <text x="0" y="88" font-size="10.5" fill="#ea580c" font-weight="bold">π = 22/7 (kelipatan 7) / 3,14</text>
    </g>
  </svg>`,

  perubahanWujud: `<svg viewBox="0 0 420 185" xmlns="http://www.w3.org/2000/svg" style="max-height:185px">
    <rect width="420" height="185" rx="14" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#115e59">🧊 SEGITIGA PERUBAHAN WUJUD BENDA</text>
    
    <!-- PADAT -->
    <rect x="30" y="115" width="80" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
    <text x="70" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">🧊 PADAT</text>

    <!-- CAIR -->
    <rect x="310" y="115" width="80" height="40" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="350" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">💧 CAIR</text>

    <!-- GAS -->
    <rect x="170" y="40" width="80" height="40" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="210" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">💨 GAS</text>

    <!-- Panah Mencair & Membeku -->
    <line x1="115" y1="125" x2="305" y2="125" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>
    <text x="210" y="120" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#dc2626">Mencair (Butuh Panas) →</text>
    <line x1="305" y1="145" x2="115" y2="145" stroke="#3b82f6" stroke-width="2"/>
    <text x="210" y="157" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">← Membeku (Lepas Panas)</text>

    <!-- Panah Menguap & Mengembun -->
    <text x="330" y="80" font-size="9" font-weight="bold" fill="#ea580c">↖ Menguap</text>
    <text x="260" y="95" font-size="9" font-weight="bold" fill="#0284c7">Mengembun ↘</text>

    <!-- Panah Menyublim & Mengkristal -->
    <text x="50" y="80" font-size="9" font-weight="bold" fill="#7c3aed">Menyublim ↗</text>
    <text x="110" y="95" font-size="9" font-weight="bold" fill="#059669">↙ Mengkristal</text>
  </svg>`,

  rantaiMakanan: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#f0fdf4" stroke="#dcfce7" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534">🌾 ALIRAN ENERGI: SIAPA MAKAN SIAPA?</text>
    
    <g transform="translate(15, 45)">
      <!-- Rumput -->
      <rect x="0" y="15" width="65" height="45" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="32" y="34" text-anchor="middle" font-size="14">🌱</text>
      <text x="32" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#14532d">Padi/Rumput</text>
      <text x="32" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Produsen</text>

      <text x="73" y="44" font-size="14" font-weight="bold" fill="#16a34a">→</text>

      <!-- Belalang -->
      <rect x="85" y="15" width="65" height="45" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="117" y="34" text-anchor="middle" font-size="14">🦗</text>
      <text x="117" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#713f12">Belalang</text>
      <text x="117" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#a16207">Konsumen I</text>

      <text x="158" y="44" font-size="14" font-weight="bold" fill="#ca8a04">→</text>

      <!-- Katak -->
      <rect x="170" y="15" width="65" height="45" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="202" y="34" text-anchor="middle" font-size="14">🐸</text>
      <text x="202" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#312e81">Katak</text>
      <text x="202" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#4338ca">Konsumen II</text>

      <text x="243" y="44" font-size="14" font-weight="bold" fill="#4f46e5">→</text>

      <!-- Ular -->
      <rect x="255" y="15" width="65" height="45" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="287" y="34" text-anchor="middle" font-size="14">🐍</text>
      <text x="287" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7f1d1d">Ular</text>
      <text x="287" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Konsumen III</text>

      <text x="328" y="44" font-size="14" font-weight="bold" fill="#dc2626">→</text>

      <!-- Elang -->
      <rect x="340" y="15" width="65" height="45" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
      <text x="372" y="34" text-anchor="middle" font-size="14">🦅</text>
      <text x="372" y="50" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7c2d12">Elang</text>
      <text x="372" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Puncak</text>
    </g>

    <text x="210" y="145" text-anchor="middle" font-size="10.5" fill="#475569">Bila elang mati diurai oleh <b>Jamur / Bakteri Pengurai (Dekomposer)</b> menjadi pupuk!</text>
  </svg>`,

  siklusAir: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <rect width="420" height="180" rx="14" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">💧 DAUR AIR ALAMI (SIKLUS HIDROLOGI)</text>
    
    <!-- Matahari -->
    <circle cx="50" cy="50" r="22" fill="#fde047" stroke="#eab308" stroke-width="2"/>
    <text x="50" y="55" text-anchor="middle" font-size="18">☀️</text>

    <!-- Awan & Kondensasi -->
    <g transform="translate(180, 40)">
      <ellipse cx="30" cy="20" rx="35" ry="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      <ellipse cx="60" cy="18" rx="25" ry="15" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="45" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">2. KONDENSASI</text>
      <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#475569">(Uap jadi awan)</text>
    </g>

    <!-- Hujan & Presipitasi -->
    <g transform="translate(300, 50)">
      <ellipse cx="30" cy="15" rx="30" ry="14" fill="#94a3b8"/>
      <line x1="20" y1="35" x2="15" y2="50" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="32" y1="35" x2="27" y2="50" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="44" y1="35" x2="39" y2="50" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="30" y="-3" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">3. PRESIPITASI</text>
      <text x="30" y="70" text-anchor="middle" font-size="8.5" fill="#0284c7">(Turun Hujan)</text>
    </g>

    <!-- Laut / Evaporasi -->
    <path d="M 0 145 Q 100 135 200 145 T 420 145 L 420 180 L 0 180 Z" fill="#38bdf8"/>
    <text x="70" y="165" font-size="11" font-weight="bold" fill="#075985">Laut / Sungai</text>
    
    <!-- Panah Evaporasi -->
    <line x1="80" y1="130" x2="80" y2="90" stroke="#f59e0b" stroke-width="2.5"/>
    <polyline points="75,95 80,88 85,95" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="90" y="112" font-size="10" font-weight="bold" fill="#d97706">1. EVAPORASI (Menguap)</text>

    <!-- Infiltrasi -->
    <text x="340" y="165" text-anchor="middle" font-size="9" font-weight="bold" fill="#0c4a6e">4. INFILTRASI (Meresap ke tanah)</text>
  </svg>`,

  metamorfosis: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#fdf4ff" stroke="#f5d0fe" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#86198f">🦋 METAMORFOSIS SEMPURNA KUPU-KUPU (4 TAHAP)</text>

    <g transform="translate(20, 42)">
      <!-- Telur -->
      <circle cx="35" cy="40" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="35" y="38" text-anchor="middle" font-size="16">🥚</text>
      <text x="35" y="55" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#713f12">1. Telur</text>

      <text x="75" y="45" font-size="16" font-weight="bold" fill="#a21caf">→</text>

      <!-- Ulat -->
      <circle cx="125" cy="40" r="28" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
      <text x="125" y="38" text-anchor="middle" font-size="16">🐛</text>
      <text x="125" y="55" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#14532d">2. Ulat (Larva)</text>

      <text x="165" y="45" font-size="16" font-weight="bold" fill="#a21caf">→</text>

      <!-- Kepompong -->
      <circle cx="215" cy="40" r="28" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="215" y="38" text-anchor="middle" font-size="16">🥜</text>
      <text x="215" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">3. Pupa (Kepompong)</text>

      <text x="255" y="45" font-size="16" font-weight="bold" fill="#a21caf">→</text>

      <!-- Kupu-kupu -->
      <circle cx="305" cy="40" r="28" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5"/>
      <text x="305" y="38" text-anchor="middle" font-size="16">🦋</text>
      <text x="305" y="55" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#831843">4. Kupu Dewasa</text>
    </g>

    <text x="210" y="138" text-anchor="middle" font-size="10.5" fill="#701a75">Ciri khas sempurna: <b>Ada tahap Pupa / Kepompong</b> (Bentuk anak beda total dari induk!)</text>
  </svg>`,

  rangkaianListrik: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">💡 RANGKAIAN LISTRIK: SERI VS PARALEL</text>

    <!-- Seri -->
    <g transform="translate(25, 35)">
      <rect x="0" y="0" width="170" height="80" rx="8" fill="#fff" stroke="#64748b" stroke-width="2"/>
      <text x="85" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">RANGKAIAN SERI (Satu Jalur)</text>
      <!-- Lampu 1 & 2 sejajar -->
      <circle cx="50" cy="40" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="50" y="44" text-anchor="middle" font-size="11">💡1</text>
      <circle cx="115" cy="40" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="115" y="44" text-anchor="middle" font-size="11">💡2</text>
      <text x="85" y="100" text-anchor="middle" font-size="9.5" fill="#475569">Satu padam, semua ikut padam!</text>
    </g>

    <!-- Paralel -->
    <g transform="translate(225, 35)">
      <rect x="0" y="0" width="170" height="80" rx="8" fill="#fff" stroke="#64748b" stroke-width="2"/>
      <text x="85" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">RANGKAIAN PARALEL (Bercabang)</text>
      <!-- Cabang atas & bawah -->
      <circle cx="85" cy="24" r="13" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="85" y="28" text-anchor="middle" font-size="10">💡1</text>
      <circle cx="85" cy="56" r="13" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="85" y="60" text-anchor="middle" font-size="10">💡2</text>
      <text x="85" y="100" text-anchor="middle" font-size="9.5" fill="#475569">Satu padam, lampu lain tetap nyala!</text>
    </g>
  </svg>`,

  tataSurya: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="max-height:160px">
    <rect width="420" height="160" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
    <text x="210" y="20" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#f8fafc">🪐 KELUARGA BESAR TATA SURYA KITA</text>

    <!-- Matahari -->
    <path d="M 0 30 A 60 60 0 0 1 0 150 Z" fill="#f59e0b"/>
    <text x="12" y="93" font-size="10" font-weight="bold" fill="#fff">Matahari</text>

    <!-- Planet-planet -->
    <!-- Merkurius -->
    <circle cx="60" cy="90" r="5" fill="#94a3b8"/><text x="60" y="112" text-anchor="middle" font-size="7.5" fill="#cbd5e1">Mer</text>
    <!-- Venus -->
    <circle cx="95" cy="90" r="8" fill="#fbbf24"/><text x="95" y="112" text-anchor="middle" font-size="7.5" fill="#cbd5e1">Ven</text>
    <!-- Bumi -->
    <circle cx="135" cy="90" r="9" fill="#38bdf8"/><text x="135" y="112" text-anchor="middle" font-size="7.5" fill="#38bdf8">Bumi</text>
    <!-- Mars -->
    <circle cx="175" cy="90" r="7" fill="#ef4444"/><text x="175" y="112" text-anchor="middle" font-size="7.5" fill="#fca5a5">Mars</text>
    <!-- Sabuk Asteroid -->
    <line x1="202" y1="40" x2="202" y2="140" stroke="#64748b" stroke-dasharray="2,3"/>
    <!-- Yupiter -->
    <circle cx="235" cy="90" r="18" fill="#d97706"/><text x="235" y="122" text-anchor="middle" font-size="7.5" fill="#fcd34d">Yupiter</text>
    <!-- Saturnus -->
    <circle cx="290" cy="90" r="14" fill="#fde047"/>
    <ellipse cx="290" cy="90" rx="22" ry="5" fill="none" stroke="#ca8a04" stroke-width="2"/>
    <text x="290" y="122" text-anchor="middle" font-size="7.5" fill="#fde047">Saturnus</text>
    <!-- Uranus -->
    <circle cx="345" cy="90" r="11" fill="#67e8f9"/><text x="345" y="122" text-anchor="middle" font-size="7.5" fill="#a5f3fc">Uranus</text>
    <!-- Neptunus -->
    <circle cx="390" cy="90" r="10" fill="#3b82f6"/><text x="390" y="122" text-anchor="middle" font-size="7.5" fill="#93c5fd">Neptunus</text>

    <text x="210" y="146" text-anchor="middle" font-size="9" fill="#94a3b8">Hafalan Cepat: <b>Me-Ve-Bu-Ma</b> (Planet Dalam) &amp; <b>Yu-Sa-U-Nep</b> (Planet Luar)</text>
  </svg>`,

  zonaWaktu: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" style="max-height:155px">
    <rect width="420" height="155" rx="14" fill="#f0fdfa" stroke="#99f6e4" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f766e">🕒 3 ZONA WAKTU INDONESIA (SELISIH 1 JAM)</text>

    <g transform="translate(20, 38)">
      <!-- WIB -->
      <rect x="0" y="0" width="115" height="75" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/>
      <text x="57" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#115e59">WIB (GMT+7)</text>
      <text x="57" y="44" text-anchor="middle" font-size="11" fill="#0f766e">Contoh: <b>07.00</b></text>
      <text x="57" y="62" text-anchor="middle" font-size="9" fill="#134e4a">Sumatera, Jawa, Kalbar</text>

      <text x="127" y="42" font-size="14" font-weight="bold" fill="#0d9488">+1j</text>

      <!-- WITA -->
      <rect x="135" y="0" width="115" height="75" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="192" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">WITA (GMT+8)</text>
      <text x="192" y="44" text-anchor="middle" font-size="11" fill="#b45309">Contoh: <b>08.00</b></text>
      <text x="192" y="62" text-anchor="middle" font-size="9" fill="#78350f">Sulsel, Bali, NTB, NTT</text>

      <text x="262" y="42" font-size="14" font-weight="bold" fill="#d97706">+1j</text>

      <!-- WIT -->
      <rect x="270" y="0" width="110" height="75" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="325" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#312e81">WIT (GMT+9)</text>
      <text x="325" y="44" text-anchor="middle" font-size="11" fill="#4338ca">Contoh: <b>09.00</b></text>
      <text x="325" y="62" text-anchor="middle" font-size="9" fill="#1e1b4b">Maluku & Papua</text>
    </g>

    <text x="210" y="136" text-anchor="middle" font-size="10.5" fill="#475569">Ingat: Makin ke TIMUR waktu makin CEPAT / LEBIH SIANG!</text>
  </svg>`,

  alurEkonomi: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" style="max-height:155px">
    <rect width="420" height="155" rx="14" fill="#fffbeb" stroke="#fef3c7" stroke-width="2"/>
    <text x="210" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#92400e">🛒 TIGA SERANGKAI KEGIATAN EKONOMI</text>

    <g transform="translate(15, 38)">
      <!-- Produksi -->
      <rect x="0" y="0" width="115" height="75" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="57" y="22" text-anchor="middle" font-size="16">🏭</text>
      <text x="57" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#713f12">1. PRODUKSI</text>
      <text x="57" y="56" text-anchor="middle" font-size="9" fill="#854d0e">Membuat barang/jasa</text>
      <text x="57" y="68" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#a16207">(Pelaku: Produsen)</text>

      <text x="122" y="40" font-size="16" font-weight="bold" fill="#ca8a04">→</text>

      <!-- Distribusi -->
      <rect x="135" y="0" width="120" height="75" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="195" y="22" text-anchor="middle" font-size="16">🚚</text>
      <text x="195" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e3a8a">2. DISTRIBUSI</text>
      <text x="195" y="56" text-anchor="middle" font-size="9" fill="#1d4ed8">Menyalurkan barang</text>
      <text x="195" y="68" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#2563eb">(Pelaku: Distributor)</text>

      <text x="262" y="40" font-size="16" font-weight="bold" fill="#2563eb">→</text>

      <!-- Konsumsi -->
      <rect x="275" y="0" width="115" height="75" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="332" y="22" text-anchor="middle" font-size="16">🍽️</text>
      <text x="332" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">3. KONSUMSI</text>
      <text x="332" y="56" text-anchor="middle" font-size="9" fill="#15803d">Memakai / menghabiskan</text>
      <text x="332" y="68" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#16a34a">(Pelaku: Konsumen)</text>
    </g>

    <text x="210" y="136" text-anchor="middle" font-size="10.5" fill="#475569">Contoh: Petani menanam padi → Truk mengantar beras ke pasar → Kamu makan nasi!</text>
  </svg>`
};

console.log('SVG templates ready. Loading raw data from build_full_rangkuman.js...');
const existingData = require('./data_rangkuman.js').RANGKUMAN_DATA;
console.log('Total existing modules:', existingData.length);

// Sekarang buat pemetaan modul bahasa ramah anak kelas 5
const kidFriendlyModules = existingData.map(mod => {
  const m = { ...mod };

  // Pemetaan ilustrasi SVG & Caption
  if (m.id === 'mtk-4-2') {
    m.svgIllustration = SVG.kabataku;
    m.captionGambar = 'Tangga Hierarki KABATAKU: Dahulukan tanda kurung, lalu kali & bagi, baru tambah & kurang.';
  } else if (m.id === 'mtk-4-4' || m.id === 'mtk-5-1') {
    m.svgIllustration = SVG.pecahanPizza;
    m.captionGambar = 'Analogi Kue Pizza: 1/2 pizza sama kenyangnya dengan 2/4 pizza dan 4/8 pizza!';
  } else if (m.id === 'mtk-4-6' || m.id === 'mtk-5-6') {
    m.svgIllustration = SVG.bangunDatarDasar;
    m.captionGambar = 'Bentuk dasar bangun datar: Persegi, Persegi Panjang, dan Segitiga (alas dan tinggi tegak lurus).';
  } else if (m.id === 'mtk-5-5') {
    m.svgIllustration = SVG.segitigaJokowi;
    m.captionGambar = 'Segitiga JOKOWI & Debit: Tutup huruf yang dicari dengan jarimu untuk tahu rumusnya!';
  } else if (m.id === 'mtk-5-7' || m.id === 'mtk-6-5') {
    m.svgIllustration = SVG.bangunRuang;
    m.captionGambar = 'Kubus dan Balok: Volume adalah isi air di dalamnya, Luas Permukaan adalah kertas kado pembungkusnya.';
  } else if (m.id === 'mtk-6-4') {
    m.svgIllustration = SVG.lingkaranUnsur;
    m.captionGambar = 'Unsur Lingkaran: Garis tengah adalah diameter (d), separuhnya adalah jari-jari (r).';
  } else if (m.id === 'ipas-4-2') {
    m.svgIllustration = SVG.perubahanWujud;
    m.captionGambar = 'Segitiga Perubahan Wujud Zat: Warna merah butuh panas/menyerap kalor, biru melepas kalor.';
  } else if (m.id === 'ipas-4-5') {
    m.svgIllustration = SVG.alurEkonomi;
    m.captionGambar = 'Alur Tiga Serangkai Ekonomi: Pabrik (Produksi) → Truk (Distribusi) → Kita yang makan (Konsumsi).';
  } else if (m.id === 'ipas-5-2') {
    m.svgIllustration = SVG.rantaiMakanan;
    m.captionGambar = 'Rantai Makanan: Tanda panah artinya "dimakan oleh" sekaligus arah mengalirnya energi kehidupan.';
  } else if (m.id === 'ipas-5-4') {
    m.svgIllustration = SVG.siklusAir;
    m.captionGambar = 'Siklus Air Bumi: Air laut menguap karena matahari, jadi awan, turun hujan, meresap, dan kembali ke laut.';
  } else if (m.id === 'ipas-5-5') {
    m.svgIllustration = SVG.zonaWaktu;
    m.captionGambar = 'Zona Waktu Indonesia: Wilayah WIT lebih siang 2 jam dibanding WIB, dan lebih siang 1 jam dibanding WITA.';
  } else if (m.id === 'ipas-6-1') {
    m.svgIllustration = SVG.metamorfosis;
    m.captionGambar = 'Daur Hidup Kupu-kupu: Mengalami fase kepompong (pupa) sehingga disebut metamorfosis sempurna.';
  } else if (m.id === 'ipas-6-3') {
    m.svgIllustration = SVG.rangkaianListrik;
    m.captionGambar = 'Perbandingan Listrik: Rangkaian seri seperti antrean satu baris, paralel punya jalan tol bercabang.';
  } else if (m.id === 'ipas-6-4') {
    m.svgIllustration = SVG.tataSurya;
    m.captionGambar = 'Tata Surya Kita: Planet terdekat dari matahari adalah Merkurius, terbesar adalah Yupiter.';
  }

  // Rewrite bahasa ramah anak untuk ringkasan & judul
  // Kelas 4 MTK
  if (m.id === 'mtk-4-1') {
    m.judul = '🔢 Bilangan Cacah Besar: Membaca & Membedah Rumah Angka';
    m.ringkasan = 'Bayangkan setiap angka punya "kamar rumah" sendiri! Kamar paling kanan dihuni satuan, lalu puluhan, ratusan, sampai jutaan. Dengan tahu kamarnya, kamu bisa membaca angka raksasa semudah membaca namamu sendiri!';
  } else if (m.id === 'mtk-4-2') {
    m.judul = '⚡ Jurus Sakti KABATAKU: Siapa Menang Duluan?';
    m.ringkasan = 'Di dunia matematika ada hukum rimba: perkalian dan pembagian itu "kakak", sedangkan penjumlahan dan pengurangan itu "adik". Jadi kalau ketemu barengan tanpa tanda kurung, si kakak wajib diselesaikan lebih dulu!';
  } else if (m.id === 'mtk-4-3') {
    m.judul = '🎯 Kelipatan, Faktor, & Sahabat Angka Prima';
    m.ringkasan = 'Faktor itu seperti anak-anak kunci yang pas membuka gembok sebuah angka. Sedangkan bilangan prima adalah angka super mandiri yang cuma punya 2 kunci: angka 1 dan dirinya sendiri!';
  } else if (m.id === 'mtk-4-4') {
    m.judul = '🍕 Pecahan Senilai: Makan Pizza Tanpa Ragu!';
    m.ringkasan = 'Satu loyang pizza dipotong 2 lalu kamu makan 1 potong, kenyangnya sama persis seperti kamu makan 2 potong dari pizza yang dipotong 4. Itulah rahasia pecahan senilai: angkanya beda, tapi nilainya kembar!';
  } else if (m.id === 'mtk-4-5') {
    m.judul = '📏 Tangga Satuan Ajaib: Panjang, Berat, & Detik Waktu';
    m.ringkasan = 'Setiap turun 1 anak tangga (km ke hm), kita kalikan 10 seperti mendapat bonus nol. Kalau naik tangga, nolnya dicoret satu karena dibagi 10. Begitu juga jam, menit, dan detik!';
  } else if (m.id === 'mtk-4-6') {
    m.judul = '📐 Keliling & Luas: Mengitari Lapangan vs Mengecat Lantai';
    m.ringkasan = 'Keliling itu seperti kamu lari jogging mengitari pagar luar lapangan. Sedangkan Luas itu jumlah ubin yang dibutuhkan untuk menutupi seluruh lantai di dalam ruangan sampai penuh!';
  }
  // Kelas 5 MTK
  else if (m.id === 'mtk-5-1') {
    m.judul = '🍕 Menjumlahkan Pecahan Beda Penyebut: Samakan Piring Dulu!';
    m.ringkasan = 'Kamu tidak bisa menjumlahkan 1 potong pizza besar dengan 1 potong pizza mini begitu saja. Samakan dulu ukuran potongannya (penyebutnya) pakai bantuan KPK, baru atasnya boleh dijumlah!';
  } else if (m.id === 'mtk-5-2') {
    m.judul = '🏷️ Rahasia Desimal, Persen & Diskon Belanja Murah';
    m.ringkasan = 'Persen artinya "per seratus". Jadi diskon 50% di toko baju artinya harganya dipotong separuh! Mengubah persen ke desimal tinggal geser koma dua langkah ke kiri.';
  } else if (m.id === 'mtk-5-3') {
    m.judul = '⏰ Detektif KPK & FPB: Kapan Bertemu & Berbagi Rata?';
    m.ringkasan = 'Kalau ada soal "Lampu berkedip bersamaan lagi setiap berapa detik?", itu pasti panggil detektif KPK! Tapi kalau "Membagikan permen dan kue ke dalam bingkisan sama rata", itu tugasnya FPB!';
  } else if (m.id === 'mtk-5-4') {
    m.judul = '🗺️ Perbandingan & Skala Peta: Menggambar Dunia di Kertas';
    m.ringkasan = 'Skala 1 : 500.000 artinya 1 cm di atas kertas petamu mewakili 500.000 cm (atau 5 km) di dunia nyata. Dengan skala, satu pulau Sulawesi bisa muat di buku gambarmu!';
  } else if (m.id === 'mtk-5-5') {
    m.judul = '🚗 Segitiga JOKOWI & Debit: Menghitung Laju Cepat!';
    m.ringkasan = 'Ingat presiden kita, Pak Jokowi! J di atas (Jarak), K (Kecepatan) dan W (Waktu) di bawah. Kalau mau cari Jarak, kalikan K dengan W. Mau cari Kecepatan? Bagi Jarak dengan Waktu!';
  } else if (m.id === 'mtk-5-6') {
    m.judul = '🪁 Bangun Datar Gabungan: Trapesium, Layang-layang & Sahabatnya';
    m.ringkasan = 'Bangun datar yang rumit sebenarnya cuma gabungan dari segitiga dan persegi panjang. Cukup cari garis tinggi tegak lurusnya, masukkan ke rumus ajaib, beres!';
  } else if (m.id === 'mtk-5-7') {
    m.judul = '🎲 Kubus & Balok: Menghitung Isi Air & Kertas Kado';
    m.ringkasan = 'Kubus itu punya 6 sisi persegi kembar yang sama persis. Menghitung volumenya semudah mengalikan rusuk tiga kali (s × s × s). Kalau balok, kalikan panjang × lebar × tinggi!';
  } else if (m.id === 'mtk-5-8') {
    m.judul = '📊 Statistika Keren: Rata-rata (Mean), Juara Terbanyak (Modus), & Nilai Tengah (Median)';
    m.ringkasan = 'Modus itu nilai yang paling sering muncul (paling populer). Median itu anak yang berdiri persis di tengah setelah semua teman diurutkan dari yang terpendek ke tertinggi. Mean itu nilai adil kalau dibagi rata!';
  }
  // Kelas 6 MTK
  else if (m.id === 'mtk-6-1') {
    m.judul = '❄️ Bilangan Bulat Negatif: Menyelam di Bawah Nol';
    m.ringkasan = 'Angka negatif itu seperti suhu kulkas yang membeku atau kapal selam yang menyelam ke dasar laut. Semakin besar angka negatifnya (misal -10 dibanding -2), nilainya justru semakin kecil dan dingin!';
  } else if (m.id === 'mtk-6-2') {
    m.judul = '🕵️ Soal Cerita Pecahan Bertingkat: Awas Kata "Dari Sisa"!';
    m.ringkasan = 'Jebakan paling sering di ujian lomba: uang Andi dipakai 1/3 untuk buku, lalu 1/2 "DARI SISANYA" untuk jajan. Hati-hati, setengahnya itu dihitung dari sisa uang, bukan dari total awal!';
  } else if (m.id === 'mtk-6-3') {
    m.judul = '⚖️ Perbandingan Senilai vs Berbalik Nilai: Makin Banyak atau Makin Cepat?';
    m.ringkasan = 'Beli bensin: makin jauh jalannya, bensin makin banyak (Senilai). Bangun rumah: makin banyak pekerjanya, harinya justru makin cepat selesai (Berbalik Nilai)!';
  } else if (m.id === 'mtk-6-4') {
    m.judul = '⭕ Lingkaran Lengkap: Menghitung Roda Berputar & Sepotong Pizza Juring';
    m.ringkasan = 'Roda sepeda berputar 1 putaran artinya roda itu sudah menggelinding sejauh 1 kali Keliling lingkaran. Pakai π = 22/7 kalau jari-jarinya kelipatan 7, atau 3,14 kalau angka lainnya.';
  } else if (m.id === 'mtk-6-5') {
    m.judul = '🏛️ Tabung, Kerucut, & Bola: Ruang Bangun Tiga Dimensi';
    m.ringkasan = 'Kaleng susu itu tabung, topi ulang tahun itu kerucut, dan bola kasti itu bola! Volume kerucut itu unik lho, isinya pas sepertiga (1/3) dari volume tabung yang seukuran!';
  } else if (m.id === 'mtk-6-6') {
    m.judul = '📈 Detektif Statistika: Membaca Diagram Lingkaran & Mencari Nilai Rahasia';
    m.ringkasan = 'Diagram lingkaran bisa berbentuk persen (total 100%) atau derajat sudut (total 360°). Kalau ada 1 nilai ujian yang belum ditulis tapi rata-ratanya sudah diketahui, kita bisa temukan nilainya dengan mudah!';
  }

  // IPAS KELAS 4
  else if (m.id === 'ipas-4-1') {
    m.judul = '🌿 Dapur Daun Tumbuhan: Fotosintesis & Pembuluh Pengangkut';
    m.ringkasan = 'Tumbuhan adalah koki terhebat di bumi! Dengan bermodalkan sinar matahari, air dari akar (lewat pipa Xilem), dan gas karbon dioksida, daun memasak makanan manis dan menghasilkan gas oksigen segar untuk kita hirup!';
  } else if (m.id === 'ipas-4-2') {
    m.judul = '🧊 Trik Sulap Wujud Zat: Mencair, Menguap, hingga Mengembun';
    m.ringkasan = 'Pernah lihat gelas es tehmu "berkeringat" di luar? Itu bukan esnya bocor lho, tapi uap air di udara yang menempel pada dinding gelas dingin lalu berubah jadi butiran air (mengembun)!';
  } else if (m.id === 'ipas-4-3') {
    m.judul = '🚀 Gaya & Perubahan Bentuk Energi: Tak Pernah Hilang!';
    m.ringkasan = 'Gaya itu tarikan atau dorongan: bisa menghentikan bola, mengubah arah sepeda, atau membuat plastisin gepeng. Dan ingat hukum alam: energi tidak bisa diciptakan atau dimusnahkan, cuma ganti baju (berubah bentuk)!';
  } else if (m.id === 'ipas-4-4') {
    m.judul = '🗺️ Membaca Peta Seperti Kapten Laut & Budaya Bugis-Makassar';
    m.ringkasan = 'Peta punya kompas arah mata angin, legenda simbol, dan skala jarak. Di Sulawesi Selatan kita bangga punya rumah panggung kayu tahan gempa dan kapal megah Pinisi yang diakui dunia!';
  } else if (m.id === 'ipas-4-5') {
    m.judul = '🍞 Alur Pabrik Roti Sampai Perutmu: Produksi, Distribusi, & Konsumsi';
    m.ringkasan = 'Pabrik membuat roti (Produksi oleh Produsen), sopir truk membawanya ke warung dekat rumahmu (Distribusi oleh Distributor), dan kamu membeli lalu memakannya dengan lahap (Konsumsi oleh Konsumen)!';
  }

  // IPAS KELAS 5
  else if (m.id === 'ipas-5-1') {
    m.judul = '🫁 Mesin Tubuh Manusia: Paru-paru, Lambung, & Pompa Jantung';
    m.ringkasan = 'Di dalam tubuhmu ada tim dokter canggih: Alveolus menukar oksigen, Lambung mencerna makanan dengan asam, Usus Halus menyerap sari makanan, dan Jantung memompa darah merah bersih tanpa henti!';
  } else if (m.id === 'ipas-5-2') {
    m.judul = '🦊 Jaring Kehidupan: Siapa Makan Siapa di Alam Raya?';
    m.ringkasan = 'Rumput dimakan belalang, belalang dimakan katak, katak dimakan ular, ular dimakan elang. Kalau petani membasmi semua katak, populasi belalang bakal meledak dan sawah bisa gagal panen!';
  } else if (m.id === 'ipas-5-3') {
    m.judul = '🌈 Keajaiban Cahaya & Bunyi: Menembus Kaca hingga Memantul Gema';
    m.ringkasan = 'Pensil di dalam gelas berisi air terlihat patah karena pembiasan cahaya. Dan bunyi itu merambat paling kilat di benda padat (misal menempelkan telinga di rel kereta api), tapi tidak bisa merambat di luar angkasa yang hampa!';
  } else if (m.id === 'ipas-5-4') {
    m.judul = '🌧️ Petualangan Tetes Air: Daur Hidrologi Bumi';
    m.ringkasan = 'Air yang kamu minum hari ini mungkin saja pernah diminum dinosaurus jutaan tahun lalu! Air laut menguap ke langit (evaporasi), membentuk awan tebal (kondensasi), jatuh jadi hujan (presipitasi), dan meresap ke tanah.';
  } else if (m.id === 'ipas-5-5') {
    m.judul = '🇮🇩 Zamrud Khatulistiwa & Detik-detik Proklamasi 1945';
    m.ringkasan = 'Indonesia diapit 2 samudra dan 2 benua, membuatnya punya 3 zona waktu (WIB, WITA, WIT). Sejarah mencatat keberanian para pemuda menculik Bung Karno ke Rengasdengklok agar kemerdekaan segera diproklamasikan!';
  } else if (m.id === 'ipas-5-6') {
    m.judul = '🏷️ Pasar Seru: Hukum Tawar Menawar & Gotong Royong Koperasi';
    m.ringkasan = 'Kalau musim panen mangga melimpah ruah, harga mangga bakal murah (penawaran naik). Sebaliknya kalau mangga langka tapi pembelinya banyak, harga jadi naik! Koperasi adalah usaha bersama berasas kekeluargaan.';
  }

  // IPAS KELAS 6
  else if (m.id === 'ipas-6-1') {
    m.judul = '🐣 Dari Biji Menjadi Pohon, Dari Telur Menjadi Kupu-kupu Cantik';
    m.ringkasan = 'Tumbuhan bisa berkembang biak kawin (penyerbukan serbuk sari ke putik) atau vegetatif (cangkok, stek, tunas). Hewan ada yang bertelur (ovipar), melahirkan (vivipar), dan bermetamorfosis sempurna!';
  } else if (m.id === 'ipas-6-2') {
    m.judul = '🌱 Menuju Remaja: Mengenal Perubahan Masa Pubertas';
    m.ringkasan = 'Pubertas adalah tanda alami bahwa tubuhmu sedang bertumbuh menjadi dewasa. Suara anak laki-laki menjadi lebih berat dan tumbuh jakun, sedangkan anak perempuan mulai mengalami menstruasi. Jangan takut, itu sehat dan normal!';
  } else if (m.id === 'ipas-6-3') {
    m.judul = '⚡ Kilat Energi: Rangkaian Lampu Seri-Paralel & Pembangkit Ramah Lingkungan';
    m.ringkasan = 'Lampu di rumahmu dipasang secara paralel: kalau lampu kamar mandi dimatikan, lampu kamarmu tetap menyala terang! Kita juga sekarang beralih ke energi alternatif matahari (PLTS) dan angin yang tak pernah habis.';
  } else if (m.id === 'ipas-6-4') {
    m.judul = '🌕 Gerhana Bulan, Gerhana Matahari, & Putaran Bumi';
    m.ringkasan = 'Bumi berputar pada porosnya (rotasi) bikin ada siang dan malam. Bumi mengitari matahari (revolusi) bikin ada pergantian musim! Dan kalau bulan berada di antara matahari dan bumi, terjadilah Gerhana Matahari!';
  } else if (m.id === 'ipas-6-5') {
    m.judul = '🔬 Detektif Sains: Eksperimen Cerdas dengan Variabel';
    m.ringkasan = 'Ilmuwan sejati tidak asal tebak! Variabel bebas itu yang sengaja kita ubah-ubah (misal takaran pupuk), variabel terikat itu hasil yang kita ukur (tinggi tanaman), dan variabel kontrol itu yang kita buat sama persis.';
  } else if (m.id === 'ipas-6-6') {
    m.judul = '🌏 Sahabat Se-Asia Tenggara: Mengenal ASEAN & Era Globalisasi';
    m.ringkasan = 'Indonesia bersama 4 negara tetangga mendirikan ASEAN di Bangkok tahun 1967 untuk menjaga perdamaian. Sekarang di era internet dan globalisasi, produk dan budaya dunia bisa saling terhubung dalam hitungan detik!';
  } else if (m.id === 'ipas-6-7') {
    m.judul = '💰 Cerdas Finansial: Membedakan KEBUTUHAN vs KEINGINAN';
    m.ringkasan = 'Kebutuhan primer itu makanan pokok, seragam sekolah, dan obat saat sakit (kalau tidak ada, kamu bahaya). Keinginan itu mainan mahal atau sepatu edisi terbaru. Dahulukan kebutuhan, baru sisihkan uang untuk menabung!';
  }

  return m;
});

// Tulis kembali file data_rangkuman.js
const fileContent = `// data_rangkuman.js - Rangkuman Materi Terpadu MTK & IPAS Kelas 4, 5, dan 6
// Bahasa Ramah Anak Kelas 5 SD dengan Ilustrasi Edukatif Inline SVG
// Auto-generated by generate_rangkuman_v2.js

const RANGKUMAN_DATA = ${JSON.stringify(kidFriendlyModules, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANGKUMAN_DATA };
}
`;

fs.writeFileSync('data_rangkuman.js', fileContent, 'utf-8');
console.log('Successfully generated data_rangkuman.js!');
console.log('Total modules:', kidFriendlyModules.length);
console.log('Modules with SVG illustration:', kidFriendlyModules.filter(m => m.svgIllustration).length);
