/**
 * SVG HELPERS LENGKAP & BERVARIASI UNTUK SOAL MIPAS SD (KELAS 4, 5, 6)
 * Menghasilkan visual presisi tinggi, responsive viewBox, dan warna profesional.
 */

// 1. Persegi
function renderPersegi(s, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="160" style="max-width:260px;margin:10px auto;display:block">
    <rect x="50" y="25" width="130" height="130" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5" rx="4"/>
    <text x="115" y="15" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">s = ${s} ${unit}</text>
    <text x="115" y="172" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">s = ${s} ${unit}</text>
    <text x="35" y="94" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 35 94)">s = ${s} ${unit}</text>
    <path d="M50 35 L60 35 L60 25 M180 35 L170 35 L170 25 M50 145 L60 145 L60 155 M180 145 L170 145 L170 155" fill="none" stroke="#0284c7" stroke-width="1.5"/>
  </svg>`;
}

// 2. Persegi Panjang
function renderPersegiPanjang(p, l, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 170" width="100%" height="150" style="max-width:280px;margin:10px auto;display:block">
    <rect x="40" y="30" width="180" height="100" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5" rx="4"/>
    <text x="130" y="20" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle">p = ${p} ${unit}</text>
    <text x="130" y="150" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle">p = ${p} ${unit}</text>
    <text x="25" y="85" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 25 85)">l = ${l} ${unit}</text>
    <text x="235" y="85" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(90 235 85)">l = ${l} ${unit}</text>
    <path d="M40 40 L50 40 L50 30 M220 40 L210 40 L210 30 M40 120 L50 120 L50 130 M220 120 L210 120 L210 130" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
  </svg>`;
}

// 3. Segitiga (Siku-siku, Sama Kaki, Sama Sisi)
function renderSegitiga(alas, tinggi, tipe = 'siku', unit = 'cm') {
  if (tipe === 'siku') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="160" style="max-width:250px;margin:10px auto;display:block">
      <polygon points="50,140 190,140 50,30" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <path d="M50,128 L62,128 L62,140" fill="none" stroke="#b45309" stroke-width="1.5"/>
      <text x="120" y="160" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">alas = ${alas} ${unit}</text>
      <text x="32" y="85" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 32 85)">tinggi = ${tinggi} ${unit}</text>
    </svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="160" style="max-width:250px;margin:10px auto;display:block">
      <polygon points="40,140 200,140 120,30" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <line x1="120" y1="30" x2="120" y2="140" stroke="#b45309" stroke-width="1.8" stroke-dasharray="4 3"/>
      <path d="M120,130 L130,130 L130,140" fill="none" stroke="#b45309" stroke-width="1.5"/>
      <text x="120" y="160" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">alas = ${alas} ${unit}</text>
      <text x="135" y="90" fill="#b45309" font-size="12" font-weight="bold">t = ${tinggi} ${unit}</text>
    </svg>`;
  }
}

// 4. Jajar Genjang
function renderJajarGenjang(alas, tinggi, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 160" width="100%" height="145" style="max-width:270px;margin:10px auto;display:block">
    <polygon points="60,130 200,130 160,40 20,40" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
    <line x1="60" y1="40" x2="60" y2="130" stroke="#15803d" stroke-width="1.8" stroke-dasharray="4 3"/>
    <path d="M60,120 L70,120 L70,130" fill="none" stroke="#15803d" stroke-width="1.5"/>
    <text x="130" y="150" fill="#166534" font-size="13" font-weight="bold" text-anchor="middle">alas = ${alas} ${unit}</text>
    <text x="75" y="85" fill="#15803d" font-size="12" font-weight="bold">t = ${tinggi} ${unit}</text>
  </svg>`;
}

// 5. Belah Ketupat & Layang-Layang
function renderBelahKetupat(d1, d2, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" height="170" style="max-width:250px;margin:10px auto;display:block">
    <polygon points="120,20 205,95 120,170 35,95" fill="#fdf4ff" stroke="#c026d3" stroke-width="2.5"/>
    <line x1="120" y1="20" x2="120" y2="170" stroke="#a21caf" stroke-width="1.8" stroke-dasharray="4 3"/>
    <line x1="35" y1="95" x2="205" y2="95" stroke="#a21caf" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="120" y="186" fill="#86198f" font-size="12" font-weight="bold" text-anchor="middle">d₁ = ${d1} ${unit} (vertikal)</text>
    <text x="120" y="12" fill="#86198f" font-size="12" font-weight="bold" text-anchor="middle">d₂ = ${d2} ${unit} (horizontal)</text>
  </svg>`;
}

function renderLayangLayang(d1, d2, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" height="170" style="max-width:250px;margin:10px auto;display:block">
    <polygon points="120,15 190,75 120,175 50,75" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5"/>
    <line x1="120" y1="15" x2="120" y2="175" stroke="#4338ca" stroke-width="1.8" stroke-dasharray="4 3"/>
    <line x1="50" y1="75" x2="190" y2="75" stroke="#4338ca" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="120" y="188" fill="#3730a3" font-size="12" font-weight="bold" text-anchor="middle">d₁ = ${d1} ${unit}</text>
    <text x="120" y="10" fill="#3730a3" font-size="12" font-weight="bold" text-anchor="middle">d₂ = ${d2} ${unit}</text>
  </svg>`;
}

// 6. Trapesium (Sama Kaki & Siku-siku)
function renderTrapesium(a, b, t, tipe = 'samakaki', unit = 'cm') {
  if (tipe === 'siku') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 160" width="100%" height="145" style="max-width:270px;margin:10px auto;display:block">
      <polygon points="50,130 200,130 140,40 50,40" fill="#fff1f2" stroke="#e11d48" stroke-width="2.5"/>
      <path d="M50,50 L60,50 L60,40 M50,120 L60,120 L60,130" fill="none" stroke="#be123c" stroke-width="1.5"/>
      <text x="95" y="28" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">a = ${a} ${unit}</text>
      <text x="125" y="150" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">b = ${b} ${unit}</text>
      <text x="32" y="85" fill="#be123c" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 32 85)">t = ${t} ${unit}</text>
    </svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 160" width="100%" height="145" style="max-width:270px;margin:10px auto;display:block">
      <polygon points="30,130 220,130 170,40 80,40" fill="#fff1f2" stroke="#e11d48" stroke-width="2.5"/>
      <line x1="80" y1="40" x2="80" y2="130" stroke="#be123c" stroke-width="1.8" stroke-dasharray="4 3"/>
      <path d="M80,120 L90,120 L90,130" fill="none" stroke="#be123c" stroke-width="1.5"/>
      <text x="125" y="28" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">sisi atas (a) = ${a} ${unit}</text>
      <text x="125" y="150" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">sisi bawah (b) = ${b} ${unit}</text>
      <text x="95" y="85" fill="#be123c" font-size="12" font-weight="bold">t = ${t} ${unit}</text>
    </svg>`;
  }
}

// 7. Lingkaran (Penuh, Setengah, Tiga Perempat, Juring)
function renderLingkaran(r, bentuk = 'penuh', unit = 'cm') {
  if (bentuk === 'setengah') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="100%" height="140" style="max-width:240px;margin:10px auto;display:block">
      <path d="M 40,110 A 80,80 0 0,1 200,110 Z" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.5"/>
      <circle cx="120" cy="110" r="3.5" fill="#0f766e"/>
      <line x1="120" y1="110" x2="200" y2="110" stroke="#0f766e" stroke-width="2"/>
      <text x="160" y="102" fill="#0f766e" font-size="12" font-weight="bold" text-anchor="middle">r = ${r} ${unit}</text>
      <text x="120" y="132" fill="#115e59" font-size="13" font-weight="bold" text-anchor="middle">Setengah (½) Lingkaran</text>
    </svg>`;
  } else if (bentuk === 'juring') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180" width="100%" height="160" style="max-width:220px;margin:10px auto;display:block">
      <circle cx="110" cy="90" r="70" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <path d="M 110,90 L 180,90 A 70,70 0 0,0 110,20 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.2"/>
      <circle cx="110" cy="90" r="3.5" fill="#15803d"/>
      <text x="145" y="82" fill="#15803d" font-size="12" font-weight="bold">r = ${r} ${unit}</text>
      <text x="125" y="55" fill="#166534" font-size="11" font-weight="bold">90°</text>
      <text x="110" y="174" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Juring Sudut Siku-Siku (¼ Lingkaran)</text>
    </svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180" width="100%" height="160" style="max-width:220px;margin:10px auto;display:block">
      <circle cx="110" cy="90" r="70" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.5"/>
      <circle cx="110" cy="90" r="3.5" fill="#0f766e"/>
      <line x1="110" y1="90" x2="180" y2="90" stroke="#0f766e" stroke-width="2"/>
      <text x="145" y="82" fill="#0f766e" font-size="12" font-weight="bold" text-anchor="middle">r = ${r} ${unit}</text>
      <text x="110" y="175" fill="#115e59" font-size="13" font-weight="bold" text-anchor="middle">d = ${r * 2} ${unit}</text>
    </svg>`;
  }
}

// 8. Jam Analog (Sudut Jam)
function renderJamSudut(jam, menit = 0) {
  let h = 0, m = 0;
  if (typeof jam === 'string' && (jam.includes('.') || jam.includes(':'))) {
    const parts = jam.split(/[.:]/);
    h = parseInt(parts[0], 10) || 0;
    m = parseInt(parts[1], 10) || 0;
  } else {
    h = parseInt(jam, 10) || 0;
    m = parseInt(menit, 10) || 0;
  }
  const angleHour = ((h % 12) + m / 60) * 30;
  const angleMin = (m / 60) * 360;
  const jamLabel = String(h).padStart(2, '0') + '.' + String(m).padStart(2, '0');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="100%" height="180" style="max-width:220px;margin:10px auto;display:block">
    <circle cx="110" cy="100" r="80" fill="#f8fafc" stroke="#334155" stroke-width="4"/>
    <circle cx="110" cy="100" r="4.5" fill="#0f172a"/>
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => {
      const a = (n * 30 - 90) * (Math.PI / 180);
      const x = 110 + 64 * Math.cos(a);
      const y = 104 + 64 * Math.sin(a);
      return `<text x="${x}" y="${y}" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">${n}</text>`;
    }).join('')}
    <!-- Jarum Pendek (Jam) - Biru -->
    <g transform="rotate(${angleHour} 110 100)">
      <line x1="110" y1="100" x2="110" y2="55" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
    </g>
    <!-- Jarum Panjang (Menit) - Merah -->
    <g transform="rotate(${angleMin} 110 100)">
      <line x1="110" y1="100" x2="110" y2="35" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <text x="110" y="195" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Pukul ${jamLabel}</text>
  </svg>`;
}

// 9. Bangun Ruang: Kubus & Balok
function renderKubus(s, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" height="170" style="max-width:240px;margin:10px auto;display:block">
    <polygon points="50,150 140,150 140,60 50,60" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/>
    <polygon points="50,60 140,60 180,25 90,25" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.2"/>
    <polygon points="140,150 180,115 180,25 140,60" fill="#93c5fd" stroke="#2563eb" stroke-width="2.2"/>
    <text x="95" y="168" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">s = ${s} ${unit}</text>
    <text x="175" y="145" fill="#1d4ed8" font-size="12" font-weight="bold">s = ${s} ${unit}</text>
    <text x="35" y="105" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">s = ${s} ${unit}</text>
  </svg>`;
}

function renderBalok(p, l, t, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" width="100%" height="160" style="max-width:260px;margin:10px auto;display:block">
    <polygon points="35,145 165,145 165,65 35,65" fill="#fef3c7" stroke="#d97706" stroke-width="2.2"/>
    <polygon points="35,65 165,65 215,25 85,25" fill="#fde68a" stroke="#d97706" stroke-width="2.2"/>
    <polygon points="165,145 215,105 215,25 165,65" fill="#fcd34d" stroke="#d97706" stroke-width="2.2"/>
    <text x="100" y="163" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">p = ${p} ${unit}</text>
    <text x="200" y="132" fill="#92400e" font-size="12" font-weight="bold">l = ${l} ${unit}</text>
    <text x="20" y="110" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">t = ${t} ${unit}</text>
  </svg>`;
}

// 10. Bangun Ruang: Prisma Segitiga, Tabung, Kerucut, Limas
function renderPrismaSegitiga(a, tAlas, tPrisma, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" height="170" style="max-width:240px;margin:10px auto;display:block">
    <polygon points="40,150 140,150 90,110" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
    <polygon points="40,60 140,60 90,20" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
    <line x1="40" y1="150" x2="40" y2="60" stroke="#4f46e5" stroke-width="2"/>
    <line x1="140" y1="150" x2="140" y2="60" stroke="#4f46e5" stroke-width="2"/>
    <line x1="90" y1="110" x2="90" y2="20" stroke="#4f46e5" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="90" y="168" fill="#3730a3" font-size="11" font-weight="bold" text-anchor="middle">alas Δ = ${a} ${unit}</text>
    <text x="150" y="105" fill="#3730a3" font-size="11" font-weight="bold">t prisma = ${tPrisma} ${unit}</text>
  </svg>`;
}

function renderTabung(r, t, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" height="170" style="max-width:220px;margin:10px auto;display:block">
    <ellipse cx="110" cy="140" rx="65" ry="22" fill="#dcfce7" stroke="#16a34a" stroke-width="2.2"/>
    <rect x="45" y="50" width="130" height="90" fill="#dcfce7" stroke="none"/>
    <line x1="45" y1="50" x2="45" y2="140" stroke="#16a34a" stroke-width="2.2"/>
    <line x1="175" y1="50" x2="175" y2="140" stroke="#16a34a" stroke-width="2.2"/>
    <ellipse cx="110" cy="50" rx="65" ry="22" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.2"/>
    <line x1="110" y1="50" x2="175" y2="50" stroke="#15803d" stroke-width="2"/>
    <circle cx="110" cy="50" r="3" fill="#15803d"/>
    <text x="142" y="44" fill="#15803d" font-size="11" font-weight="bold">r = ${r} ${unit}</text>
    <text x="182" y="100" fill="#15803d" font-size="11" font-weight="bold">t = ${t} ${unit}</text>
    <text x="110" y="178" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">Tabung / Silinder</text>
  </svg>`;
}

function renderKerucut(r, t, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" height="170" style="max-width:220px;margin:10px auto;display:block">
    <ellipse cx="110" cy="145" rx="65" ry="20" fill="#fee2e2" stroke="#dc2626" stroke-width="2.2"/>
    <polygon points="45,145 175,145 110,25" fill="#fecaca" stroke="none"/>
    <line x1="45" y1="145" x2="110" y2="25" stroke="#dc2626" stroke-width="2.2"/>
    <line x1="175" y1="145" x2="110" y2="25" stroke="#dc2626" stroke-width="2.2"/>
    <line x1="110" y1="25" x2="110" y2="145" stroke="#b91c1c" stroke-width="1.8" stroke-dasharray="3 3"/>
    <line x1="110" y1="145" x2="175" y2="145" stroke="#b91c1c" stroke-width="2"/>
    <circle cx="110" cy="145" r="3" fill="#b91c1c"/>
    <text x="142" y="140" fill="#b91c1c" font-size="11" font-weight="bold">r = ${r} ${unit}</text>
    <text x="115" y="85" fill="#b91c1c" font-size="11" font-weight="bold">t = ${t} ${unit}</text>
  </svg>`;
}

function renderLimas(sAlas, tLimas, unit = 'cm') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" height="170" style="max-width:240px;margin:10px auto;display:block">
    <polygon points="50,140 170,140 200,105 80,105" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
    <line x1="50" y1="140" x2="125" y2="20" stroke="#ea580c" stroke-width="2.2"/>
    <line x1="170" y1="140" x2="125" y2="20" stroke="#ea580c" stroke-width="2.2"/>
    <line x1="200" y1="105" x2="125" y2="20" stroke="#ea580c" stroke-width="2.2"/>
    <line x1="80" y1="105" x2="125" y2="20" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="3 3"/>
    <line x1="125" y1="20" x2="125" y2="120" stroke="#c2410c" stroke-width="1.8" stroke-dasharray="3 3"/>
    <text x="110" y="156" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">sisi alas = ${sAlas} ${unit}</text>
    <text x="132" y="70" fill="#c2410c" font-size="11" font-weight="bold">t = ${tLimas} ${unit}</text>
  </svg>`;
}

// 11. Diagram Lingkaran (Persen & Derajat)
function renderDiagramLingkaran(slices, title = 'Diagram Lingkaran Data Siswa') {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];
  let currentAngle = 0;
  const paths = [];
  const legend = [];

  const normalizedSlices = (slices || []).map(s => {
    const rawVal = (s.value !== undefined && s.value !== null) ? Number(s.value) : (s.pct !== undefined ? Number(s.pct) : 1);
    const val = isNaN(rawVal) || rawVal <= 0 ? 1 : rawVal;
    const labelVal = s.labelVal || (s.pct !== undefined ? `${s.pct}%` : `${val}`);
    return { label: s.label || 'Data', value: val, displayVal: labelVal };
  });

  const total = normalizedSlices.reduce((acc, s) => acc + s.value, 0) || 100;

  normalizedSlices.forEach((s, idx) => {
    const sliceAngle = (s.value / total) * 360;
    const startRad = (currentAngle - 90) * (Math.PI / 180);
    const endRad = (currentAngle + sliceAngle - 90) * (Math.PI / 180);

    const x1 = (100 + 70 * Math.cos(startRad)).toFixed(2);
    const y1 = (95 + 70 * Math.sin(startRad)).toFixed(2);
    const x2 = (100 + 70 * Math.cos(endRad)).toFixed(2);
    const y2 = (95 + 70 * Math.sin(endRad)).toFixed(2);

    const largeArc = sliceAngle > 180 ? 1 : 0;
    const d = `M 100,95 L ${x1},${y1} A 70,70 0 ${largeArc},1 ${x2},${y2} Z`;

    const c = colors[idx % colors.length];
    paths.push(`<path d="${d}" fill="${c}" stroke="#fff" stroke-width="1.5"/>`);
    legend.push(`<div style="display:flex;align-items:center;gap:6px;font-size:11px;margin:2px 0">
      <span style="width:10px;height:10px;border-radius:2px;background:${c};display:inline-block"></span>
      <span>${s.label}: <b>${s.displayVal}</b></span>
    </div>`);

    currentAngle += sliceAngle;
  });

  return `<div style="max-width:320px;margin:10px auto;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:12px">
    <div style="font-size:12.5px;font-weight:bold;color:#0f172a;text-align:center;margin-bottom:8px">${title}</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 190" width="140" height="140">
        ${paths.join('')}
      </svg>
      <div style="min-width:110px">
        ${legend.join('')}
      </div>
    </div>
  </div>`;
}

// 12. Diagram Garis
function renderDiagramGaris(labels, values, title = 'Diagram Garis Perkembangan', unit = '') {
  const max = Math.max(...values, 10);
  const h = 120;
  const w = 220;
  const pts = values.map((v, i) => {
    const x = 40 + i * (w / (values.length - 1));
    const y = 140 - (v / max) * h;
    return { x, y, v };
  });

  const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 190" width="100%" height="165" style="max-width:320px;margin:10px auto;display:block;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px">
    <text x="150" y="20" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">${title}</text>
    <line x1="35" y1="25" x2="35" y2="150" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="35" y1="150" x2="280" y2="150" stroke="#cbd5e1" stroke-width="1.5"/>
    <polyline points="${polyline}" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    ${pts.map((p, idx) => `
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="#1d4ed8"/>
      <text x="${p.x}" y="${p.y - 7}" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">${p.v}</text>
      <text x="${p.x}" y="166" fill="#64748b" font-size="10.5" text-anchor="middle">${labels[idx]}</text>
    `).join('')}
  </svg>`;
}

// 13. Piktogram
function renderPiktogram(labels, counts, itemType = 'buku', scale = 10) {
  const icon = itemType === 'buku' ? '📚' : (itemType === 'beras' ? '🌾' : (itemType === 'orang' ? '👤' : '📦'));
  return `<div style="max-width:320px;margin:10px auto;background:#fff;border:1.5px solid #cbd5e1;border-radius:10px;padding:12px;font-size:12px">
    <div style="font-weight:bold;color:#0f172a;margin-bottom:8px;text-align:center">Piktogram Data (${itemType.toUpperCase()})</div>
    <table style="width:100%;border-collapse:collapse">
      ${labels.map((lbl, idx) => {
        const fullIcons = Math.floor(counts[idx] / scale);
        const iconStr = icon.repeat(Math.min(fullIcons, 8));
        return `<tr style="border-bottom:1px solid #f1f5f9">
          <td style="padding:6px;font-weight:bold;color:#334155;width:90px">${lbl}</td>
          <td style="padding:6px;font-size:15px">${iconStr} <span style="font-size:11px;color:#64748b">(${counts[idx]})</span></td>
        </tr>`;
      }).join('')}
    </table>
    <div style="margin-top:8px;font-size:11px;color:#0369a1;background:#f0f9ff;padding:4px 8px;border-radius:6px;text-align:center">
      Keterangan: Tiap 1 simbol ${icon} mewakili <b>${scale}</b> unit.
    </div>
  </div>`;
}

// 14. Tabel Turus
function renderTabelTurus(rows, title = 'Tabel Distribusi Data & Turus') {
  return `<div style="max-width:320px;margin:10px auto;background:#fff;border:1.5px solid #cbd5e1;border-radius:10px;padding:12px;font-size:12px">
    <div style="font-weight:bold;color:#0f172a;margin-bottom:8px;text-align:center">${title}</div>
    <table style="width:100%;border-collapse:collapse;text-align:center">
      <thead>
        <tr style="background:#f1f5f9;border-bottom:1.5px solid #cbd5e1">
          <th style="padding:6px;border:1px solid #cbd5e1">Kategori</th>
          <th style="padding:6px;border:1px solid #cbd5e1">Turus (Tally)</th>
          <th style="padding:6px;border:1px solid #cbd5e1">Frekuensi</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => {
          const tallyFives = Math.floor(r.count / 5);
          const tallyRem = r.count % 5;
          const tallyStr = ('卌 '.repeat(tallyFives) + '|'.repeat(tallyRem)).trim() || '-';
          return `<tr>
            <td style="padding:5px;border:1px solid #e2e8f0;font-weight:bold;text-align:left">${r.label}</td>
            <td style="padding:5px;border:1px solid #e2e8f0;color:#0284c7;font-family:monospace;font-size:13px">${tallyStr}</td>
            <td style="padding:5px;border:1px solid #e2e8f0;font-weight:bold">${r.count}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

// 15. Diagram Batang (Tunggal & Ganda)
function renderDiagramBatang(labels, values, title = 'Diagram Batang', unit = '') {
  const max = Math.max(...values, 10);
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
  const chartHeight = 120;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="100%" height="175" style="max-width:330px;margin:10px auto;display:block;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px">
    <text x="160" y="22" fill="#0f172a" font-size="12.5" font-weight="bold" text-anchor="middle">${title}</text>
    <line x1="40" y1="35" x2="40" y2="160" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="40" y1="160" x2="305" y2="160" stroke="#cbd5e1" stroke-width="1.5"/>
    ${values.map((v, i) => {
      const barH = Math.round((v / max) * chartHeight);
      const x = 55 + i * 62;
      const y = 160 - barH;
      const c = colors[i % colors.length];
      return `
        <rect x="${x}" y="${y}" width="38" height="${barH}" fill="${c}" rx="3"/>
        <text x="${x + 19}" y="${y - 6}" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">${v}</text>
        <text x="${x + 19}" y="178" fill="#475569" font-size="11" text-anchor="middle">${labels[i]}</text>
      `;
    }).join('')}
    <text x="35" y="30" fill="#64748b" font-size="10" text-anchor="end">${unit}</text>
  </svg>`;
}

// 16. IPA: Rantai Makanan (Beragam Habitat)
function renderRantaiMakanan(p1, k1, k2, k3, habitat = 'Sawah') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 120" width="100%" height="110" style="max-width:350px;margin:10px auto;display:block;background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:10px;padding:6px">
    <text x="170" y="16" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Ekosistem ${habitat}</text>
    
    <!-- P1 -->
    <rect x="10" y="30" width="65" height="42" fill="#dcfce7" stroke="#16a34a" rx="6"/>
    <text x="42" y="56" fill="#15803d" font-size="10.5" font-weight="bold" text-anchor="middle">${p1}</text>
    <text x="42" y="85" fill="#64748b" font-size="9" text-anchor="middle">Produsen</text>

    <text x="83" y="56" fill="#0284c7" font-size="14" font-weight="bold">→</text>

    <!-- K1 -->
    <rect x="95" y="30" width="65" height="42" fill="#fef3c7" stroke="#d97706" rx="6"/>
    <text x="127" y="56" fill="#b45309" font-size="10.5" font-weight="bold" text-anchor="middle">${k1}</text>
    <text x="127" y="85" fill="#64748b" font-size="9" text-anchor="middle">Konsumen I</text>

    <text x="168" y="56" fill="#0284c7" font-size="14" font-weight="bold">→</text>

    <!-- K2 -->
    <rect x="180" y="30" width="65" height="42" fill="#fee2e2" stroke="#dc2626" rx="6"/>
    <text x="212" y="56" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">${k2}</text>
    <text x="212" y="85" fill="#64748b" font-size="9" text-anchor="middle">Konsumen II</text>

    <text x="253" y="56" fill="#0284c7" font-size="14" font-weight="bold">→</text>

    <!-- K3 -->
    <rect x="265" y="30" width="65" height="42" fill="#ede9fe" stroke="#7c3aed" rx="6"/>
    <text x="297" y="56" fill="#6d28d9" font-size="10.5" font-weight="bold" text-anchor="middle">${k3}</text>
    <text x="297" y="85" fill="#64748b" font-size="9" text-anchor="middle">Puncak</text>
  </svg>`;
}

// 17. IPA: Tata Surya
function renderTataSurya() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 140" width="100%" height="130" style="max-width:350px;margin:10px auto;display:block;background:#0f172a;border-radius:10px;padding:8px">
    <circle cx="15" cy="70" r="28" fill="#f59e0b"/>
    <text x="15" y="74" fill="#78350f" font-size="8" font-weight="bold" text-anchor="middle">Matahari</text>

    <!-- Merkurius -->
    <circle cx="58" cy="70" r="4" fill="#94a3b8"/>
    <text x="58" y="85" fill="#cbd5e1" font-size="6.5" text-anchor="middle">1</text>

    <!-- Venus -->
    <circle cx="82" cy="70" r="7" fill="#fde047"/>
    <text x="82" y="88" fill="#cbd5e1" font-size="6.5" text-anchor="middle">2</text>

    <!-- Bumi -->
    <circle cx="112" cy="70" r="7.5" fill="#38bdf8"/>
    <text x="112" y="89" fill="#cbd5e1" font-size="6.5" text-anchor="middle">3</text>

    <!-- Mars -->
    <circle cx="142" cy="70" r="5.5" fill="#ef4444"/>
    <text x="142" y="87" fill="#cbd5e1" font-size="6.5" text-anchor="middle">4</text>

    <!-- Sabuk Asteroid -->
    <line x1="162" y1="20" x2="162" y2="120" stroke="#64748b" stroke-dasharray="2 3" stroke-width="1.5"/>

    <!-- Yupiter -->
    <circle cx="192" cy="70" r="16" fill="#d97706"/>
    <text x="192" y="98" fill="#cbd5e1" font-size="6.5" text-anchor="middle">5</text>

    <!-- Saturnus -->
    <ellipse cx="240" cy="70" rx="19" ry="5" fill="none" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="240" cy="70" r="12" fill="#eab308"/>
    <text x="240" y="94" fill="#cbd5e1" font-size="6.5" text-anchor="middle">6</text>

    <!-- Uranus -->
    <circle cx="285" cy="70" r="9" fill="#2dd4bf"/>
    <text x="285" y="91" fill="#cbd5e1" font-size="6.5" text-anchor="middle">7</text>

    <!-- Neptunus -->
    <circle cx="325" cy="70" r="8.5" fill="#3b82f6"/>
    <text x="325" y="91" fill="#cbd5e1" font-size="6.5" text-anchor="middle">8</text>

    <text x="175" y="132" fill="#94a3b8" font-size="9" text-anchor="middle">Susunan 8 Planet dalam Tata Surya</text>
  </svg>`;
}

// 18. IPS: Linimasa Sejarah
function renderLinimasaSejarah() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 140" width="100%" height="130" style="max-width:350px;margin:10px auto;display:block;background:#fff;border:1.5px solid #cbd5e1;border-radius:10px;padding:8px">
    <text x="170" y="18" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Linimasa Tonggak Sejarah Bangsa Indonesia</text>
    <line x1="25" y1="70" x2="315" y2="70" stroke="#0284c7" stroke-width="3"/>
    
    <!-- 1908 -->
    <circle cx="45" cy="70" r="6" fill="#0284c7"/>
    <text x="45" y="55" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">20 Mei 1908</text>
    <text x="45" y="90" fill="#334155" font-size="8.5" text-anchor="middle">Budi Utomo</text>

    <!-- 1928 -->
    <circle cx="125" cy="70" r="6" fill="#0284c7"/>
    <text x="125" y="55" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">28 Okt 1928</text>
    <text x="125" y="90" fill="#334155" font-size="8.5" text-anchor="middle">Sumpah Pemuda</text>

    <!-- 17 Ags 1945 -->
    <circle cx="215" cy="70" r="6" fill="#dc2626"/>
    <text x="215" y="55" fill="#b91c1c" font-size="9.5" font-weight="bold" text-anchor="middle">17 Ags 1945</text>
    <text x="215" y="90" fill="#334155" font-size="8.5" text-anchor="middle">Proklamasi</text>

    <!-- 10 Nov 1945 -->
    <circle cx="295" cy="70" r="6" fill="#0284c7"/>
    <text x="295" y="55" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">10 Nov 1945</text>
    <text x="295" y="90" fill="#334155" font-size="8.5" text-anchor="middle">Surabaya</text>
  </svg>`;
}

// 19. IPS: Peta Zona Waktu (WIB, WITA, WIT)
function renderPetaZonaWaktu() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 140" width="100%" height="130" style="max-width:350px;margin:10px auto;display:block;background:#f0f9ff;border:1.5px solid #bae6fd;border-radius:10px;padding:6px">
    <text x="170" y="18" fill="#0369a1" font-size="11.5" font-weight="bold" text-anchor="middle">Pembagian 3 Zona Waktu Indonesia</text>
    
    <rect x="20" y="32" width="90" height="75" fill="#dbeafe" stroke="#3b82f6" rx="6"/>
    <text x="65" y="55" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">WIB</text>
    <text x="65" y="75" fill="#1e40af" font-size="9.5" text-anchor="middle">UTC +7</text>
    <text x="65" y="95" fill="#475569" font-size="8" text-anchor="middle">Sumatera, Jawa</text>

    <rect x="125" y="32" width="90" height="75" fill="#dcfce7" stroke="#10b981" rx="6"/>
    <text x="170" y="55" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">WITA</text>
    <text x="170" y="75" fill="#065f46" font-size="9.5" text-anchor="middle">UTC +8</text>
    <text x="170" y="95" fill="#475569" font-size="8" text-anchor="middle">Kalimantan, Sulawesi, Bali</text>

    <rect x="230" y="32" width="90" height="75" fill="#fef3c7" stroke="#f59e0b" rx="6"/>
    <text x="275" y="55" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">WIT</text>
    <text x="275" y="75" fill="#92400e" font-size="9.5" text-anchor="middle">UTC +9</text>
    <text x="275" y="95" fill="#475569" font-size="8" text-anchor="middle">Maluku & Papua</text>

    <text x="170" y="126" fill="#64748b" font-size="8.5" text-anchor="middle">Selisih waktu masing-masing zona adalah 1 jam</text>
  </svg>`;
}

// Helper Pembuatan Opsi A, B, C, D dengan Posisi Kunci Acak Terkontrol
function createOptions(correct, wrong1, wrong2, wrong3, seed) {
  const letters = ['A', 'B', 'C', 'D'];
  const targetIdx = Math.abs(seed) % 4;
  const kunci = letters[targetIdx];

  const wrongs = [String(wrong1), String(wrong2), String(wrong3)];
  const result = {};

  let wIdx = 0;
  letters.forEach((l, idx) => {
    if (idx === targetIdx) {
      result['OPSI_' + l] = String(correct);
    } else {
      result['OPSI_' + l] = wrongs[wIdx++] || 'Lainnya';
    }
  });

  return {
    kunci,
    A: result.OPSI_A,
    B: result.OPSI_B,
    C: result.OPSI_C,
    D: result.OPSI_D
  };
}

module.exports = {
  renderPersegi,
  renderPersegiPanjang,
  renderSegitiga,
  renderJajarGenjang,
  renderBelahKetupat,
  renderLayangLayang,
  renderTrapesium,
  renderLingkaran,
  renderJamSudut,
  renderKubus,
  renderBalok,
  renderPrismaSegitiga,
  renderTabung,
  renderKerucut,
  renderLimas,
  renderDiagramLingkaran,
  renderDiagramGaris,
  renderPiktogram,
  renderTabelTurus,
  renderDiagramBatang,
  renderRantaiMakanan,
  renderTataSurya,
  renderLinimasaSejarah,
  renderPetaZonaWaktu,
  createOptions
};
