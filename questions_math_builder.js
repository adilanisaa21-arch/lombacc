// =============================================================================
// BUILDER 1.000 SOAL MATEMATIKA BERKUALITAS TINGGI (100% UNIK & BEBAS DUPLIKAT)
// 10 Topik Kurikulum × (20 Mudah + 40 Sedang + 20 Sulit + 20 HOTS) = 1.000 Soal
// Setiap soal memiliki variasi target, angka, objek, dan konteks berbeda
// =============================================================================

const {
  renderPersegi, renderPersegiPanjang, renderSegitiga, renderJajarGenjang,
  renderBelahKetupat, renderLayangLayang, renderTrapesium, renderLingkaran,
  renderJamSudut, renderKubus, renderBalok, renderPrismaSegitiga,
  renderTabung, renderKerucut, renderLimas, renderDiagramLingkaran,
  renderDiagramGaris, renderPiktogram, renderTabelTurus, renderDiagramBatang
} = require('./svg_helpers');

function createSafeOptions(correct, w1, w2, w3, seed) {
  let list = [String(correct).trim()];
  const cand = [String(w1).trim(), String(w2).trim(), String(w3).trim()];
  let delta = 1;

  cand.forEach(c => {
    let finalOpt = c;
    while (list.includes(finalOpt) || !finalOpt) {
      const numMatch = finalOpt.match(/-?\d+(\.\d+)?/);
      if (numMatch) {
        const val = parseFloat(numMatch[0]);
        const nextVal = val + delta;
        finalOpt = finalOpt.replace(numMatch[0], String(nextVal));
        delta++;
      } else {
        finalOpt = finalOpt + ' (alternatif ' + delta + ')';
        delta++;
      }
    }
    list.push(finalOpt);
  });

  const s = Math.abs(seed || 1);
  const p1 = s % 4;
  const p2 = (s + 1) % 4;
  const temp = list[p1];
  list[p1] = list[p2];
  list[p2] = temp;

  const correctIndex = list.indexOf(String(correct).trim());
  const kunci = 'ABCD'[correctIndex >= 0 ? correctIndex : 0];

  return { A: list[0], B: list[1], C: list[2], D: list[3], kunci };
}

function buildMathQuestions() {
  const list = [];
  const globalUsedText = new Set();

  function addQ(q) {
    let cleanText = q.PERTANYAAN.trim();
    let norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (globalUsedText.has(norm)) {
      throw new Error('DUPLICATE MATH QUESTION DETECTED: ' + cleanText);
    }
    globalUsedText.add(norm);
    list.push(q);
  }

  // ===========================================================================
  // TOPIK 1: Bangun Datar Segiempat (Persegi, Persegi Panjang, Jajar Genjang)
  // ===========================================================================
  const T1 = 'Bangun Datar Segiempat (Persegi, Persegi Panjang, Jajar Genjang)';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 7;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    
    if (i <= 5) {
      const s = 4 + i;
      svg = renderPersegi(s);
      qTxt = `Perhatikan gambar persegi di atas! Panjang sisi persegi tersebut adalah ${s} cm. Keliling persegi adalah ...`;
      ans = `${4 * s} cm`; w1 = `${s * s} cm`; w2 = `${4 * s + 4} cm`; w3 = `${4 * s - 4} cm`;
      exp = `Keliling persegi = 4 × sisi = 4 × ${s} = ${4 * s} cm.`;
      diag = 'Keliling persegi dihitung dengan mengalikan panjang sisi dengan 4.';
    } else if (i <= 10) {
      const p = 8 + i, l = 3 + (i % 3);
      svg = renderPersegiPanjang(p, l);
      qTxt = `Perhatikan gambar persegi panjang di atas! Diketahui panjang ${p} cm dan lebar ${l} cm. Keliling bangun tersebut adalah ...`;
      ans = `${2 * (p + l)} cm`; w1 = `${p * l} cm`; w2 = `${p + l} cm`; w3 = `${2 * (p + l) + 6} cm`;
      exp = `Keliling = 2 × (p + l) = 2 × (${p} + ${l}) = ${2 * (p + l)} cm.`;
      diag = 'Keliling persegi panjang adalah 2 kali jumlah panjang dan lebar.';
    } else if (i <= 15) {
      const kel = (5 + i) * 4;
      const s = kel / 4;
      const obj = ['sapu tangan', 'taplak meja kecil', 'bingkai foto', 'ubin teras', 'kertas lipat origami'][i - 11];
      qTxt = `Sebuah ${obj} berbentuk persegi memiliki keliling ${kel} cm. Panjang sisi ${obj} tersebut adalah ...`;
      ans = `${s} cm`; w1 = `${s + 3} cm`; w2 = `${kel / 2} cm`; w3 = `${s * 2} cm`;
      exp = `Panjang sisi = Keliling : 4 = ${kel} : 4 = ${s} cm.`;
      diag = 'Untuk mencari panjang sisi persegi dari keliling, bagi nilai keliling dengan 4.';
    } else {
      const a = 10 + i, t = 4 + (i % 4);
      svg = renderJajarGenjang(a, t);
      qTxt = `Perhatikan gambar jajar genjang di atas! Diketahui panjang alas ${a} cm dan tinggi ${t} cm. Luas bangun tersebut adalah ...`;
      ans = `${a * t} cm²`; w1 = `${(a * t) / 2} cm²`; w2 = `${2 * (a + t)} cm²`; w3 = `${a * t + 8} cm²`;
      exp = `Luas jajar genjang = alas × tinggi = ${a} × ${t} = ${a * t} cm².`;
      diag = 'Luas jajar genjang dihitung dengan mengalikan panjang alas dengan tingginya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T1, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 11;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const s = 9 + i;
      svg = renderPersegi(s);
      const objects = ['ubin granit lantai', 'papan catur kayu', 'kanvas lukisan', 'meja kopi persegi', 'panel surya mini', 'jendela kamar', 'keset lantai', 'bantal kursi', 'pigura kayu', 'papan pengumuman'];
      qTxt = `Sebuah ${objects[i - 1]} berbentuk persegi memiliki panjang sisi ${s} cm. Luas permukaan benda tersebut adalah ...`;
      ans = `${s * s} cm²`; w1 = `${4 * s} cm²`; w2 = `${s * s - 10} cm²`; w3 = `${s * s + 15} cm²`;
      exp = `Luas persegi = sisi × sisi = ${s} × ${s} = ${s * s} cm².`;
      diag = 'Luas persegi diperoleh dari perkalian sisi dengan sisi.';
    } else if (i <= 20) {
      const p = 12 + i, l = 6 + (i % 4);
      svg = renderPersegiPanjang(p, l);
      const rooms = ['kebun cabai Pak Budi', 'lapangan bulu tangkis', 'aula pertemuan sekolah', 'ruang perpustakaan', 'teras depan rumah', 'lapangan futsal mini', 'gudang perlengkapan', 'halaman samping', 'kolam renang anak', 'garasi mobil'];
      qTxt = `Sebidang ${rooms[i - 11]} berbentuk persegi panjang berukuran panjang ${p} meter dan lebar ${l} meter. Luas tanah tersebut adalah ...`;
      ans = `${p * l} m²`; w1 = `${2 * (p + l)} m²`; w2 = `${p * l - 8} m²`; w3 = `${p * l + 12} m²`;
      exp = `Luas = panjang × lebar = ${p} × ${l} = ${p * l} m².`;
      diag = 'Luas persegi panjang dihitung dengan mengalikan panjang dan lebar.';
    } else if (i <= 30) {
      const p = 15 + i, l = 5 + (i % 3);
      const luas = p * l, kel = 2 * (p + l);
      const selisih = Math.abs(luas - kel);
      qTxt = `Sebuah pelat baja persegi panjang berukuran panjang ${p} cm dan lebar ${l} cm. Selisih antara nilai luas (cm²) dan kelilingnya (cm) adalah ...`;
      ans = `${selisih}`; w1 = `${luas}`; w2 = `${kel}`; w3 = `${selisih + 10}`;
      exp = `Luas = ${p} × ${l} = ${luas} cm². Keliling = 2 × (${p} + ${l}) = ${kel} cm. Selisih = ${luas} - ${kel} = ${selisih}.`;
      diag = 'Hitung nilai luas dan keliling masing-masing, kemudian cari selisih nilainya.';
    } else {
      const p = 10 + i;
      const l = 4 + (i % 5);
      const luas = p * l;
      const areas = ['kebun jagung', 'ruang kelas 5A', 'taman bermain', 'lapangan voli', 'halaman sekolah', 'kebun singkong', 'toko kelontong', 'kolam ikan hias', 'kebun sayuran', 'area parkir'];
      qTxt = `Sebuah ${areas[i - 31]} berbentuk persegi panjang memiliki luas ${luas} m² dan panjang ${p} meter. Lebar tempat tersebut adalah ...`;
      ans = `${l} meter`; w1 = `${l + 2} meter`; w2 = `${l - 1} meter`; w3 = `${p / 2} meter`;
      exp = `Lebar = Luas : Panjang = ${luas} : ${p} = ${l} meter.`;
      diag = 'Lebar diperoleh dari luas dibagi panjang.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T1, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 13;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    
    if (i <= 10) {
      const kel = 36 + i * 4;
      const s = kel / 4;
      const luas = s * s;
      const owners = ['Pak Joko', 'Pak Hadi', 'Bu Rahayu', 'Pak Slamet', 'Pak Wahyu', 'Bu Endang', 'Pak Tri', 'Bu Ratna', 'Pak Bambang', 'Pak Surya'];
      qTxt = `Pekarangan milik ${owners[i - 1]} berbentuk persegi dengan keliling pagar bambu sepanjang ${kel} meter. Luas tanah pekarangan tersebut adalah ...`;
      ans = `${luas} m²`; w1 = `${kel} m²`; w2 = `${luas - 15} m²`; w3 = `${s * 2} m²`;
      exp = `Sisi pekarangan = ${kel} : 4 = ${s} m. Luas pekarangan = ${s} × ${s} = ${luas} m².`;
      diag = 'Cari panjang sisi terlebih dahulu dengan membagi keliling dengan 4, lalu hitung sisi dikalikan sisi.';
    } else {
      const idx = i - 10;
      const p = 5 + idx, l = 4 + (idx % 3);
      const luasLantai = p * l;
      const biayaM2 = 25000 + idx * 5000;
      const totalBiaya = luasLantai * biayaM2;
      const rooms = ['kamar tidur utama', 'ruang tamu', 'teras samping', 'dapur bersih', 'ruang keluarga', 'kamar tamu', 'ruang kerja', 'teras atas', 'balkon depan', 'ruang makan'];
      qTxt = `Lantai ${rooms[idx - 1]} berukuran panjang ${p} meter dan lebar ${l} meter akan dipasangi keramik dengan biaya Rp ${biayaM2.toLocaleString('id-ID')} per m². Biaya total pemasangan keramik adalah ...`;
      ans = `Rp ${totalBiaya.toLocaleString('id-ID')}`;
      w1 = `Rp ${(totalBiaya - 50000).toLocaleString('id-ID')}`;
      w2 = `Rp ${(totalBiaya + 75000).toLocaleString('id-ID')}`;
      w3 = `Rp ${(luasLantai * 20000).toLocaleString('id-ID')}`;
      exp = `Luas lantai = ${p} × ${l} = ${luasLantai} m². Total biaya = ${luasLantai} × Rp ${biayaM2.toLocaleString('id-ID')} = Rp ${totalBiaya.toLocaleString('id-ID')}.`;
      diag = 'Kalikan luas ruangan dengan biaya pemasangan per meter persegi.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T1, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 17;
    const pTaman = 10 + i;
    const lTaman = 6 + Math.floor(i / 2);
    const lebarJalan = (i % 2 === 0) ? 2 : 1;
    const pTotal = pTaman + 2 * lebarJalan;
    const lTotal = lTaman + 2 * lebarJalan;
    const luasTotal = pTotal * lTotal;
    const luasTaman = pTaman * lTaman;
    const luasJalan = luasTotal - luasTaman;
    const locations = ['taman kota bunga', 'kolam renang publik', 'lapangan futsal komplek', 'panggung pertunjukan seni', 'kebun anggrek asri', 'arena skateboard', 'lapangan tenis', 'taman bermain anak', 'kolam pemancingan', 'kebun hidroponik', 'lapangan voli outdoor', 'arena panahan mini', 'taman lalu lintas', 'area parkir VIP', 'kebun herbal sekolah', 'kolam hias teratai', 'panggung terbuka RT', 'lapangan basket 3x3', 'kebun buah melon', 'area santai gazebo'];

    const qTxt = `Sebuah ${locations[i - 1]} berukuran ${pTaman} m × ${lTaman} m dikelilingi jalan setapak selebar ${lebarJalan} meter di sekeliling luarnya. Luas area jalan setapak tersebut adalah ...`;
    ans = `${luasJalan} m²`; w1 = `${luasTotal} m²`; w2 = `${luasTaman} m²`; w3 = `${luasJalan + 12} m²`;
    exp = `Dimensi luar = (${pTaman} + ${2 * lebarJalan}) × (${lTaman} + ${2 * lebarJalan}) = ${pTotal} × ${lTotal} = ${luasTotal} m².
Luas area dalam = ${luasTaman} m².
Luas jalan setapak = ${luasTotal} - ${luasTaman} = ${luasJalan} m².`;
    diag = 'Tambahkan 2 kali lebar jalan ke panjang dan lebar taman untuk mencari luas total luar, lalu kurangkan dengan luas taman dalam.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T1, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 2: Bangun Datar Segitiga, Belah Ketupat, & Layang-Layang
  // ===========================================================================
  const T2 = 'Bangun Datar Segitiga, Belah Ketupat, & Layang-Layang';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 23;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 7) {
      const a = 6 + i, t = 4 + (i % 3);
      const luas = (a * t) / 2;
      svg = renderSegitiga(a, t);
      qTxt = `Perhatikan gambar segitiga di atas! Diketahui panjang alas ${a} cm dan tinggi ${t} cm. Luas segitiga tersebut adalah ...`;
      ans = `${luas} cm²`; w1 = `${a * t} cm²`; w2 = `${luas + 5} cm²`; w3 = `${luas - 3} cm²`;
      exp = `Luas segitiga = (alas × tinggi) : 2 = (${a} × ${t}) : 2 = ${luas} cm².`;
      diag = 'Luas segitiga adalah setengah dari hasil kali alas dan tinggi.';
    } else if (i <= 14) {
      const d1 = 10 + 2 * i, d2 = 6 + 2 * (i % 3);
      const luas = (d1 * d2) / 2;
      svg = renderBelahKetupat(d1, d2);
      qTxt = `Perhatikan gambar belah ketupat di atas! Panjang diagonal d1 = ${d1} cm dan d2 = ${d2} cm. Luas bangun tersebut adalah ...`;
      ans = `${luas} cm²`; w1 = `${d1 * d2} cm²`; w2 = `${luas + 8} cm²`; w3 = `${luas - 6} cm²`;
      exp = `Luas belah ketupat = (d1 × d2) : 2 = (${d1} × ${d2}) : 2 = ${luas} cm².`;
      diag = 'Luas belah ketupat adalah setengah hasil kali kedua diagonalnya.';
    } else {
      const d1 = 12 + 2 * i, d2 = 8 + 2 * (i % 4);
      const luas = (d1 * d2) / 2;
      svg = renderLayangLayang(d1, d2);
      qTxt = `Perhatikan gambar layang-layang di atas! Panjang diagonal horizontal ${d1} cm dan vertikal ${d2} cm. Luas layang-layang tersebut adalah ...`;
      ans = `${luas} cm²`; w1 = `${d1 * d2} cm²`; w2 = `${luas + 10} cm²`; w3 = `${luas - 8} cm²`;
      exp = `Luas layang-layang = (d1 × d2) : 2 = (${d1} × ${d2}) : 2 = ${luas} cm².`;
      diag = 'Luas layang-layang dihitung dengan membagi dua hasil perkalian diagonalnya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T2, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 29;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const a = 8 + 2 * i, s = 6 + i;
      const kel = a + 2 * s;
      qTxt = `Sebuah segitiga sama kaki memiliki panjang alas ${a} cm dan panjang masing-masing sisi kakinya ${s} cm. Keliling segitiga tersebut adalah ...`;
      ans = `${kel} cm`; w1 = `${a + s} cm`; w2 = `${kel + 4} cm`; w3 = `${3 * s} cm`;
      exp = `Keliling segitiga sama kaki = alas + (2 × sisi kaki) = ${a} + (2 × ${s}) = ${kel} cm.`;
      diag = 'Keliling adalah penjumlahan seluruh sisi pembatas segitiga.';
    } else if (i <= 20) {
      const s = 10 + i;
      const kel = 4 * s;
      const objects = ['hiasan ketupat lebaran', 'liontin perak motif intan', 'rambu lalu lintas peringatan', 'bingkai cermin belah ketupat', 'potongan ubin teras', 'motif kain batik', 'gantungan kunci akrilik', 'plakat penghargaan', 'ornamen dinding kayu', 'lambang regu pramuka'];
      qTxt = `Sebuah ${objects[i - 11]} berbentuk belah ketupat memiliki panjang sisi ${s} cm. Keliling benda tersebut adalah ...`;
      ans = `${kel} cm`; w1 = `${s * s} cm`; w2 = `${2 * s} cm`; w3 = `${kel + 6} cm`;
      exp = `Keliling belah ketupat = 4 × sisi = 4 × ${s} = ${kel} cm.`;
      diag = 'Keempat sisi belah ketupat sama panjang sehingga kelilingnya 4 kali sisi.';
    } else if (i <= 30) {
      const a = 7 + i, b = 13 + i;
      const kel = 2 * (a + b);
      qTxt = `Sebuah layang-layang memiliki dua pasang sisi yang sama panjang, yaitu ${a} cm dan ${b} cm. Keliling layang-layang tersebut adalah ...`;
      ans = `${kel} cm`; w1 = `${a + b} cm`; w2 = `${a * b} cm`; w3 = `${kel + 8} cm`;
      exp = `Keliling = 2 × (${a} + ${b}) = 2 × ${a + b} = ${kel} cm.`;
      diag = 'Jumlahkan pasangan sisi layang-layang lalu kalikan dua.';
    } else {
      const a = (10 + i) * 2;
      const t = 5 + (i % 4);
      const luas = (a * t) / 2;
      qTxt = `Sebuah bidang papan reklame segitiga memiliki luas ${luas} m² dan panjang alas ${a} meter. Tinggi papan reklame segitiga tersebut adalah ...`;
      ans = `${t} meter`; w1 = `${t + 2} meter`; w2 = `${t - 1} meter`; w3 = `${a / 2} meter`;
      exp = `Tinggi = (2 × Luas) : alas = (2 × ${luas}) : ${a} = ${2 * luas} : ${a} = ${t} meter.`;
      diag = 'Tinggi segitiga diperoleh dari dua kali luas dibagi alas.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T2, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 31;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const k = 2 + i;
      const a = 3 * k, b = 4 * k, c = 5 * k;
      const kel = a + b + c;
      const biaya = 20000 + i * 2000;
      const total = kel * biaya;
      const owners = ['Pak Hasan', 'Bu Siti', 'Pak Darmo', 'Bu Dewi', 'Pak Anwar', 'Pak Hendra', 'Bu Maya', 'Pak Kuncoro', 'Bu Lilis', 'Pak Fajar'];
      qTxt = `Tanah pekarangan milik ${owners[i - 1]} berbentuk segitiga siku-siku dengan panjang sisi masing-masing ${a} m, ${b} m, dan ${c} m. Jika sekeliling tanah dipasangi pagar dengan biaya Rp ${biaya.toLocaleString('id-ID')} per meter, biaya totalnya adalah ...`;
      ans = `Rp ${total.toLocaleString('id-ID')}`;
      w1 = `Rp ${(total - 40000).toLocaleString('id-ID')}`;
      w2 = `Rp ${(total + 50000).toLocaleString('id-ID')}`;
      w3 = `Rp ${(kel * 15000).toLocaleString('id-ID')}`;
      exp = `Keliling tanah = ${a} + ${b} + ${c} = ${kel} m.
Total biaya = ${kel} × Rp ${biaya.toLocaleString('id-ID')} = Rp ${total.toLocaleString('id-ID')}.`;
      diag = 'Cari keliling segitiga dengan menjumlahkan ketiga sisi, lalu kalikan biaya per meter.';
    } else {
      const idx = i - 10;
      const n = 3 + (idx % 3);
      const d1 = 16 + 2 * idx, d2 = 12 + 2 * (idx % 4);
      const luasSatu = (d1 * d2) / 2;
      const totalLuas = n * luasSatu;
      qTxt = `Adit membuat ${n} buah layang-layang tradisional berukuran diagonal ${d1} cm dan ${d2} cm. Luas total kertas minyak yang dibutuhkan untuk melapisi seluruh layang-layang adalah ...`;
      ans = `${totalLuas} cm²`; w1 = `${luasSatu} cm²`; w2 = `${totalLuas + 50} cm²`; w3 = `${n * d1 * d2} cm²`;
      exp = `Luas 1 layang-layang = (${d1} × ${d2}) : 2 = ${luasSatu} cm².
Luas ${n} buah = ${n} × ${luasSatu} = ${totalLuas} cm².`;
      diag = 'Hitung luas satu layang-layang lalu kalikan dengan banyaknya layang-layang yang dibuat.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T2, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 37;
    const sPersegi = 8 + i;
    const tSegitiga = 6 + (i % 4);
    const luasPersegi = sPersegi * sPersegi;
    const luasSegitiga = (sPersegi * tSegitiga) / 2;
    const luasTotal = luasPersegi + luasSegitiga;
    const objects = ['papan nama pramuka', 'hiasan dinding rumah gadang', 'maket gapura sekolah', 'plakat akrilik juara', 'motif bordir busana', 'ikon rambu petunjuk jalan', 'model miniatur rumah', 'papan petunjuk arah', 'maket atap pos ronda', 'ornamen panggung pentas', 'stiker dinding kamar', 'logo tenda kemah', 'desain bendera panji', 'model tugu batas desa', 'kap lampu gantung hias', 'desain kemasan cokelat', 'spanduk segitiga toko', 'kain slayer regu', 'banner sudut kelas', 'papan informasi mading'];

    const qTxt = `Sebuah ${objects[i - 1]} merupakan gabungan bangun persegi dengan sisi ${sPersegi} cm dan atap berbentuk segitiga dengan alas ${sPersegi} cm serta tinggi ${tSegitiga} cm. Luas total bangun gabungan tersebut adalah ...`;
    ans = `${luasTotal} cm²`; w1 = `${luasPersegi} cm²`; w2 = `${luasTotal + 15} cm²`; w3 = `${luasPersegi + sPersegi * tSegitiga} cm²`;
    exp = `Luas persegi = ${sPersegi} × ${sPersegi} = ${luasPersegi} cm².
Luas segitiga atap = (${sPersegi} × ${tSegitiga}) : 2 = ${luasSegitiga} cm².
Luas gabungan = ${luasPersegi} + ${luasSegitiga} = ${luasTotal} cm².`;
    diag = 'Hitung luas masing-masing bangun pembentuk kemudian jumlahkan keduanya.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T2, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 3: Bangun Datar Trapesium & Lingkaran (Keliling & Luas)
  // ===========================================================================
  const T3 = 'Bangun Datar Trapesium & Lingkaran (Keliling & Luas)';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 41;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const r = 7 * i;
      const d = 2 * r;
      const kel = Math.round(2 * (22 / 7) * r);
      svg = renderLingkaran(r);
      qTxt = `Perhatikan gambar lingkaran di atas! Diketahui jari-jari lingkaran r = ${r} cm (diameter ${d} cm). Keliling lingkaran tersebut adalah ...`;
      ans = `${kel} cm`; w1 = `${kel + 14} cm`; w2 = `${kel - 14} cm`; w3 = `${Math.round((22 / 7) * r * r)} cm`;
      exp = `Keliling = 2 × (22/7) × ${r} = ${kel} cm.`;
      diag = 'Gunakan rumus keliling lingkaran 2 × π × r.';
    } else {
      const r = 7 * (i - 10);
      const luas = Math.round((22 / 7) * r * r);
      svg = renderLingkaran(r);
      qTxt = `Perhatikan gambar lingkaran di atas! Jika panjang jari-jari r = ${r} cm, luas daerah lingkaran tersebut adalah ...`;
      ans = `${luas} cm²`; w1 = `${2 * (22 / 7) * r} cm²`; w2 = `${luas + 28} cm²`; w3 = `${luas - 35} cm²`;
      exp = `Luas = π × r² = (22/7) × ${r} × ${r} = ${luas} cm².`;
      diag = 'Gunakan rumus luas lingkaran π × r × r.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T3, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 43;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const r = 7 * i;
      const luasSetengah = Math.round(0.5 * (22 / 7) * r * r);
      qTxt = `Sebuah cetakan kue berbentuk setengah lingkaran memiliki jari-jari r = ${r} cm. Luas permukaan cetakan kue tersebut adalah ...`;
      ans = `${luasSetengah} cm²`; w1 = `${luasSetengah * 2} cm²`; w2 = `${luasSetengah + 20} cm²`; w3 = `${luasSetengah - 15} cm²`;
      exp = `Luas setengah lingkaran = 1/2 × π × r² = 1/2 × (22/7) × ${r}² = ${luasSetengah} cm².`;
      diag = 'Kalikan luas lingkaran penuh dengan 1/2.';
    } else if (i <= 20) {
      const a = 10 + 2 * i, b = 18 + 2 * i, t = 6 + (i % 3);
      const luas = Math.round(((a + b) * t) / 2);
      svg = renderTrapesium(a, b, t);
      qTxt = `Perhatikan gambar trapesium di atas! Panjang sisi sejajar adalah ${a} cm dan ${b} cm serta tingginya ${t} cm. Luas trapesium tersebut adalah ...`;
      ans = `${luas} cm²`; w1 = `${(a + b) * t} cm²`; w2 = `${luas + 16} cm²`; w3 = `${luas - 12} cm²`;
      exp = `Luas trapesium = ((a + b) × t) : 2 = ((${a} + ${b}) × ${t}) : 2 = ${luas} cm².`;
      diag = 'Jumlahkan kedua sisi sejajar, kalikan tinggi, lalu bagi dua.';
    } else if (i <= 30) {
      const r = 14 + 7 * (i - 20);
      const luas34 = Math.round(0.75 * (22 / 7) * r * r);
      qTxt = `Sebuah taman bunga berbentuk 3/4 lingkaran memiliki jari-jari r = ${r} meter. Luas tanah taman bunga tersebut adalah ...`;
      ans = `${luas34} m²`; w1 = `${Math.round((22 / 7) * r * r)} m²`; w2 = `${luas34 + 30} m²`; w3 = `${luas34 - 25} m²`;
      exp = `Luas 3/4 lingkaran = 3/4 × (22/7) × ${r}² = ${luas34} m².`;
      diag = 'Kalikan luas lingkaran penuh dengan pecahan 3/4.';
    } else {
      const r = 14 + 7 * (i - 30);
      const n = 40 + i * 10;
      const kelilingCm = 2 * (22 / 7) * r;
      const jarakMeter = Math.round((n * kelilingCm) / 100);
      qTxt = `Sebuah roda sepeda anak berjari-jari ${r} cm berputar di jalan lurus sebanyak ${n} putaran penuh. Jarak tempuh sepeda tersebut adalah ...`;
      ans = `${jarakMeter} meter`; w1 = `${jarakMeter + 15} meter`; w2 = `${jarakMeter - 20} meter`; w3 = `${Math.round(jarakMeter / 2)} meter`;
      exp = `Keliling roda = 2 × (22/7) × ${r} = ${kelilingCm} cm = ${kelilingCm / 100} m.
Jarak total = ${n} × ${kelilingCm / 100} m = ${jarakMeter} meter.`;
      diag = 'Hitung keliling roda terlebih dahulu, lalu kalikan dengan banyaknya putaran dan ubah cm ke meter.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T3, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 47;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const d = 70 + i * 14;
      const r = d / 2;
      const kel = Math.round((22 / 7) * d);
      const biayaPerMeter = 15000 + i * 1000;
      const totalBiaya = Math.round((kel / 100) * biayaPerMeter);
      const owners = ['Ibu Sinta', 'Ibu Ratna', 'Ibu Mirna', 'Ibu Laksmi', 'Ibu Wati', 'Ibu Nurul', 'Ibu Anita', 'Ibu Farida', 'Ibu Kusuma', 'Ibu Dania'];
      qTxt = `${owners[i - 1]} memiliki taplak meja bundar berdiameter ${d} cm. Di sekeliling tepi taplak akan dijahit renda seharga Rp ${biayaPerMeter.toLocaleString('id-ID')} per meter. Biaya renda yang dibutuhkan adalah ...`;
      ans = `Rp ${totalBiaya.toLocaleString('id-ID')}`;
      w1 = `Rp ${(totalBiaya - 15000).toLocaleString('id-ID')}`;
      w2 = `Rp ${(totalBiaya + 20000).toLocaleString('id-ID')}`;
      w3 = `Rp ${Math.round(totalBiaya * 1.5).toLocaleString('id-ID')}`;
      exp = `Keliling taplak = π × d = (22/7) × ${d} = ${kel} cm = ${kel / 100} m.
Total biaya = ${kel / 100} × Rp ${biayaPerMeter.toLocaleString('id-ID')} = Rp ${totalBiaya.toLocaleString('id-ID')}.`;
      diag = 'Cari keliling lingkaran π × d, ubah satuan cm ke meter, lalu kalikan harga renda per meter.';
    } else if (i <= 15) {
      const idx = i - 10;
      const d = 28 + idx * 14;
      const r = d / 2;
      const luasPenuh = Math.round((22 / 7) * r * r);
      const luasPotong = Math.round(luasPenuh / 8);
      const foods = ['kue tart ulang tahun', 'pizza keju spesial', 'martabak manis pandan', 'kue bolu karamel', 'puding cokelat busa'];
      qTxt = `Sebuah ${foods[idx - 1]} berbentuk lingkaran dengan diameter ${d} cm dipotong menjadi 8 bagian sama besar untuk dibagikan kepada anak-anak. Luas permukaan satu potong ${foods[idx - 1]} tersebut adalah ...`;
      ans = `${luasPotong} cm²`;
      w1 = `${luasPenuh} cm²`;
      w2 = `${luasPotong + 18} cm²`;
      w3 = `${luasPotong - 14} cm²`;
      exp = `Jari-jari (r) = ${d} : 2 = ${r} cm.
Luas lingkaran penuh = (22/7) × ${r}² = ${luasPenuh} cm².
Luas satu potong (1/8 bagian) = ${luasPenuh} : 8 = ${luasPotong} cm².`;
      diag = 'Hitung jari-jari dari diameter, cari luas lingkaran penuh, lalu bagi dengan 8.';
    } else {
      const idx = i - 15;
      const d = 14 + idx * 14;
      const kelBusur = Math.round(0.5 * (22 / 7) * d);
      const kelTotal = kelBusur + d;
      const places = ['panggung pementasan seni', 'kolam ikan hias taman', 'arena bermain pasir', 'taman tanaman obat keluarga', 'pelataran gazebo sekolah'];
      qTxt = `Sebuah ${places[idx - 1]} berbentuk bangun datar setengah lingkaran tertutup memiliki panjang garis tengah (diameter) ${d} meter. Di sekeliling tepi area tersebut akan dipasang pagar pembatas. Panjang total pagar pembatas yang dibutuhkan adalah ...`;
      ans = `${kelTotal} meter`;
      w1 = `${kelBusur} meter`;
      w2 = `${kelTotal + 12} meter`;
      w3 = `${Math.round((22 / 7) * d)} meter`;
      exp = `Keliling busur lengkung = 1/2 × π × d = 1/2 × (22/7) × ${d} = ${kelBusur} meter.
Karena bangun setengah lingkaran tertutup dibatasi busur dan diameter, maka keliling total = ${kelBusur} + ${d} = ${kelTotal} meter.`;
      diag = 'Ingat bahwa keliling bangun setengah lingkaran tertutup adalah jumlah panjang busur lengkung ditambah panjang diameter lurusnya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T3, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 53;
    const R = 14 + 7 * i;
    const r = 7;
    const luasBesar = Math.round((22 / 7) * R * R);
    const luasKecil = Math.round((22 / 7) * r * r);
    const luasArsir = luasBesar - luasKecil;
    const parks = ['taman kota bundar', 'bundaran air mancur monumen', 'lapangan terbuka hijau', 'pelataran tugu pahlawan', 'taman bermain perumahan', 'taman bunga balai kota', 'area rekreasi danau', 'plaza melati komplek', 'bundaran lalu lintas asri', 'halaman paviliun pusaka', 'taman flora nusantara', 'pelataran istana cagar', 'taman rusa lestari', 'area gazebo kenanga', 'bundaran kampus hijau', 'taman kolam teratai raya', 'plaza budaya nusantara', 'taman santai cendana', 'area memorial taman pahlawan', 'taman ekologi pesona'];

    const qTxt = `Sebuah ${parks[i - 1]} berbentuk lingkaran berjari-jari ${R} meter. Di tengah taman tersebut dibangun kolam air mancur bundar dengan jari-jari ${r} meter. Luas area taman di luar kolam yang ditanami rumput adalah ...`;
    ans = `${luasArsir} m²`; w1 = `${luasBesar} m²`; w2 = `${luasKecil} m²`; w3 = `${luasArsir + 35} m²`;
    exp = `Luas lingkaran besar = (22/7) × ${R}² = ${luasBesar} m².
Luas kolam tengah = (22/7) × ${r}² = ${luasKecil} m².
Luas rumput = ${luasBesar} - ${luasKecil} = ${luasArsir} m².`;
    diag = 'Kurangkan luas lingkaran besar luar dengan luas lingkaran kecil di dalamnya.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T3, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 4: Pengukuran Sudut, Waktu, & Busur Derajat
  // ===========================================================================
  const T4 = 'Pengukuran Sudut, Waktu, & Busur Derajat';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 59;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const jam = i; // 1 s.d 10
      const jamStr = String(jam).padStart(2, '0') + '.00';
      const derajat = jam <= 6 ? jam * 30 : (12 - jam) * 30;
      svg = renderJamSudut(jamStr);
      qTxt = `Perhatikan gambar jam analog di atas! Jarum jam menunjukkan tepat pukul ${jamStr}. Sudut terkecil yang dibentuk kedua jarum jam adalah ...`;
      ans = `${derajat}°`; w1 = `${derajat + 15}°`; w2 = `${derajat - 15}°`; w3 = `${jam * 15}°`;
      exp = `Setiap lompatan 1 jam pada jam bernilai 360° : 12 = 30°. Sudut terkecil pada pukul ${jamStr} adalah ${derajat}°.`;
      diag = 'Kalikan jarak antar angka jam dengan 30 derajat.';
    } else {
      const idx = i - 10;
      const angleTypes = [
        ['Sudut yang besarnya tepat 90° dinamakan sudut ...', 'Siku-siku', 'Lancip', 'Tumpul', 'Lurus', 'Sudut siku-siku memiliki besar tepat 90 derajat.'],
        ['Sudut yang besarnya antara 0° sampai kurang dari 90° dinamakan sudut ...', 'Lancip', 'Tumpul', 'Siku-siku', 'Refleks', 'Sudut lancip lebih kecil dari 90 derajat.'],
        ['Sudut yang besarnya lebih dari 90° tetapi kurang dari 180° dinamakan sudut ...', 'Tumpul', 'Lancip', 'Siku-siku', 'Lurus', 'Sudut tumpul lebih besar dari 90 derajat dan kurang dari 180 derajat.'],
        ['Sudut yang besarnya tepat 180° membentuk garis lurus dinamakan sudut ...', 'Lurus', 'Siku-siku', 'Refleks', 'Tumpul', 'Sudut lurus bernilai 180 derajat.'],
        ['Sudut yang besarnya lebih dari 180° tetapi kurang dari 360° dinamakan sudut ...', 'Refleks', 'Tumpul', 'Lurus', 'Lancip', 'Sudut refleks berada di antara 180° dan 360°.'],
        ['Alat standar yang digunakan untuk mengukur dan menggambar besar sudut derajat adalah ...', 'Busur derajat', 'Jangka sorong', 'Penggaris siku', 'Mikrometer sekrup', 'Busur derajat memiliki skala 0 sampai 180 derajat.'],
        ['Jumlah besar seluruh sudut dalam bangun datar segitiga sembarang selalu sama dengan ...', '180°', '360°', '90°', '270°', 'Jumlah ketiga sudut dalam segitiga selalu 180 derajat.'],
        ['Jumlah besar seluruh sudut dalam bangun datar segiempat sembarang selalu sama dengan ...', '360°', '180°', '270°', '540°', 'Segiempat terdiri dari dua segitiga sehingga jumlah sudutnya 360 derajat.'],
        ['Besar masing-masing sudut pada segitiga sama sisi adalah ...', '60°', '45°', '90°', '30°', 'Segitiga sama sisi memiliki 3 sudut yang sama besar yaitu 180° : 3 = 60°.'],
        ['Jika sebuah sudut siku-siku dibagi menjadi dua bagian yang sama besar, maka masing-masing sudut bernilai ...', '45°', '30°', '60°', '90°', '90° : 2 = 45°.']
      ][idx - 1];
      qTxt = angleTypes[0];
      ans = angleTypes[1]; w1 = angleTypes[2]; w2 = angleTypes[3]; w3 = angleTypes[4];
      exp = angleTypes[5];
      diag = 'Pahami klasifikasi sudut berdasarkan besar derajatnya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 61;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const times = [
        ['01.30', 135], ['02.30', 105], ['03.30', 75], ['04.30', 45], ['05.30', 15],
        ['07.30', 45], ['08.30', 75], ['09.30', 105], ['10.30', 135], ['11.30', 165],
        ['01.20', 80], ['02.20', 50], ['03.20', 20], ['04.20', 10], ['05.20', 40],
        ['07.20', 100], ['08.20', 130], ['09.20', 160], ['10.20', 170], ['11.20', 140]
      ][i - 1];
      const jamStr = times[0];
      const deg = times[1];
      svg = renderJamSudut(jamStr);
      qTxt = `Perhatikan posisi jarum jam analog di atas! Jarum menunjukkan pukul ${jamStr}. Besar sudut terkecil yang terbentuk antara jarum pendek dan jarum panjang adalah ...`;
      ans = `${deg}°`; w1 = `${deg + 15}°`; w2 = `${deg - 15}°`; w3 = `${deg + 30}°`;
      exp = `Pada pukul ${jamStr}, pergeseran jarum pendek dan panjang menghasilkan sudut terkecil ${deg}°.`;
      diag = 'Perhitungkan pergeseran jarum pendek sebesar 0,5 derajat per menit.';
    } else {
      const idx = i - 20;
      const a1 = 30 + (idx * 2);
      const a2 = 40 + (idx * 3);
      const a3 = 180 - (a1 + a2);
      qTxt = `Sebuah bangun segitiga memiliki dua buah sudut dengan besar masing-masing ${a1}° dan ${a2}°. Besar sudut ketiga dari segitiga tersebut adalah ...`;
      ans = `${a3}°`; w1 = `${a3 + 10}°`; w2 = `${a3 - 10}°`; w3 = `${180 - a1}°`;
      exp = `Jumlah ketiga sudut dalam sebuah segitiga adalah 180°. Sudut ketiga = 180° - (${a1}° + ${a2}°) = 180° - ${a1 + a2}° = ${a3}°.`;
      diag = 'Jumlah seluruh sudut pada bangun segitiga selalu sama dengan 180 derajat.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Sudut Segitiga Sama Kaki & Segi Empat (180° & 360°)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 67;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    if (i <= 10) {
      const puncak = 30 + i * 4;
      const alas = (180 - puncak) / 2;
      qTxt = `Sebuah segitiga sama kaki memiliki sudut puncak sebesar ${puncak}°. Besar salah satu sudut pada alas segitiga tersebut adalah ...`;
      ans = `${alas}°`; w1 = `${alas + 10}°`; w2 = `${alas - 10}°`; w3 = `${180 - puncak}°`;
      exp = `Pada segitiga sama kaki, kedua sudut alas memiliki besar yang sama. Besar sudut alas = (180° - ${puncak}°) : 2 = ${180 - puncak}° : 2 = ${alas}°.`;
      diag = 'Kurangkan 180 derajat dengan sudut puncak, lalu bagi dua untuk mencari sudut alas.';
    } else {
      const idx = i - 10;
      const s1 = 70 + idx * 2;
      const s2 = 80 + idx * 3;
      const s3 = 90 + idx * 2;
      const s4 = 360 - (s1 + s2 + s3);
      qTxt = `Sebuah bangun segi empat sembarang memiliki tiga sudut dengan besar masing-masing ${s1}°, ${s2}°, dan ${s3}°. Besar sudut keempat dari bangun tersebut adalah ...`;
      ans = `${s4}°`; w1 = `${s4 + 15}°`; w2 = `${s4 - 15}°`; w3 = `${180 - s1}°`;
      exp = `Jumlah seluruh sudut dalam bangun segi empat adalah 360°. Sudut keempat = 360° - (${s1}° + ${s2}° + ${s3}°) = 360° - ${s1 + s2 + s3}° = ${s4}°.`;
      diag = 'Jumlah seluruh sudut pada bangun segi empat selalu sama dengan 360 derajat.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Sudut Jarum Jam Terkecil pada Waktu Tertentu (SD)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 71;
    const times = [
      { time: '01.00', deg: 30, desc: 'pukul satu tepat' },
      { time: '02.00', deg: 60, desc: 'pukul dua tepat' },
      { time: '03.00', deg: 90, desc: 'pukul tiga tepat' },
      { time: '04.00', deg: 120, desc: 'pukul empat tepat' },
      { time: '05.00', deg: 150, desc: 'pukul lima tepat' },
      { time: '07.00', deg: 150, desc: 'pukul tujuh tepat' },
      { time: '08.00', deg: 120, desc: 'pukul delapan tepat' },
      { time: '09.00', deg: 90, desc: 'pukul sembilan tepat' },
      { time: '10.00', deg: 60, desc: 'pukul sepuluh tepat' },
      { time: '11.00', deg: 30, desc: 'pukul sebelas tepat' },
      { time: '01.30', deg: 135, desc: 'pukul satu lebih tiga puluh menit' },
      { time: '02.30', deg: 105, desc: 'pukul dua lebih tiga puluh menit' },
      { time: '03.30', deg: 75, desc: 'pukul tiga lebih tiga puluh menit' },
      { time: '04.30', deg: 45, desc: 'pukul empat lebih tiga puluh menit' },
      { time: '07.30', deg: 45, desc: 'pukul tujuh lebih tiga puluh menit' },
      { time: '08.30', deg: 75, desc: 'pukul delapan lebih tiga puluh menit' },
      { time: '09.30', deg: 105, desc: 'pukul sembilan lebih tiga puluh menit' },
      { time: '10.30', deg: 135, desc: 'pukul sepuluh lebih tiga puluh menit' },
      { time: '06.00', deg: 180, desc: 'pukul enam tepat' },
      { time: '12.00', deg: 0, desc: 'pukul dua belas tepat saat jarum berimpit' }
    ];
    const item = times[i - 1];
    const clocks = ['jam dinding ruang tamu', 'jam lonceng sekolah', 'arloji mekanik', 'jam meja belajar', 'jam menara kota', 'jam pendulum antik', 'jam stasiun kereta', 'jam dinding perpustakaan', 'jam dinding masjid', 'arloji saku kakek', 'jam dinding kantor pos', 'jam dinding balai desa', 'jam dinding ruang guru', 'jam dinding gedung olahraga', 'jam dinding asrama', 'jam dinding sanggar tari', 'jam dinding ruang rapat', 'jam dinding laboratorium', 'jam dinding museum', 'jam dinding studio musik'];

    const qTxt = item.deg === 0
      ? `Pada sebuah ${clocks[i - 1]} yang menunjukkan pukul 12.00, jarum pendek dan jarum panjang saling berimpit. Besar sudut yang dibentuk oleh kedua jarum jam tersebut adalah ...`
      : `Pada sebuah ${clocks[i - 1]} yang menunjukkan pukul ${item.time} (${item.desc}), besar sudut terkecil yang dibentuk oleh jarum jam pendek dan jarum jam panjang adalah ...`;
    ans = `${item.deg}°`;
    w1 = `${(item.deg + 30) % 180 || 60}°`;
    w2 = `${Math.abs(item.deg - 30)}°`;
    w3 = `${(item.deg + 45) % 180 || 90}°`;
    exp = `Setiap 1 jam (angka jam) mewakili sudut 360° : 12 = 30°. Pada pukul ${item.time}, posisi jarum jam menghasilkan sudut terkecil ${item.deg}°.`;
    diag = 'Hitung selisih posisi jarum jam dan jarum menit dikalikan 30 derajat per jam serta pergeseran jarum pendek.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    const clockSvg = renderJamSudut(item.time);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T4, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: clockSvg
    });
  }

  // ===========================================================================
  // TOPIK 5: Bangun Ruang Kubus & Balok
  // ===========================================================================
  const T5 = 'Bangun Ruang Kubus & Balok';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 73;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const s = 3 + i;
      const vol = s * s * s;
      svg = renderKubus(s);
      qTxt = `Perhatikan gambar kubus di atas! Panjang rusuk kubus adalah ${s} cm. Volume bangun kubus tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${6 * s * s} cm³`; w2 = `${vol + 15} cm³`; w3 = `${vol - 10} cm³`;
      exp = `Volume kubus = rusuk × rusuk × rusuk = ${s}³ = ${vol} cm³.`;
      diag = 'Volume kubus adalah pangkat tiga dari panjang rusuknya.';
    } else {
      const p = 6 + i, l = 4 + (i % 3), t = 3 + (i % 2);
      const vol = p * l * t;
      svg = renderBalok(p, l, t);
      qTxt = `Perhatikan gambar balok di atas! Diketahui panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm. Volume balok tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${2 * (p * l + p * t + l * t)} cm³`; w2 = `${vol + 20} cm³`; w3 = `${vol - 16} cm³`;
      exp = `Volume balok = panjang × lebar × tinggi = ${p} × ${l} × ${t} = ${vol} cm³.`;
      diag = 'Volume balok adalah hasil kali panjang, lebar, dan tinggi.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T5, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 79;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 15) {
      const s = 5 + i;
      const lp = 6 * s * s;
      const objects = ['kotak kado ulang tahun', 'celengan kayu jati', 'dadu permainan raksasa', 'kotak aksesoris perhiasan', 'wadah tisu kubus', 'kotak mainan balok', 'sarang burung kayu kubus', 'kotak brankas mini', 'wadah kapur tulis', 'kotak bekal makan', 'kotak amplop surat', 'wadah keramik hias', 'kotak kancing penjahit', 'kotak obat P3K kubus', 'kotak souvenir pernikahan'];
      qTxt = `Sebuah ${objects[i - 1]} berbentuk kubus memiliki panjang rusuk ${s} cm. Luas seluruh permukaan benda tersebut adalah ...`;
      ans = `${lp} cm²`; w1 = `${s * s * s} cm²`; w2 = `${4 * s * s} cm²`; w3 = `${lp + 24} cm²`;
      exp = `Luas permukaan kubus = 6 × sisi² = 6 × ${s}² = 6 × ${s * s} = ${lp} cm².`;
      diag = 'Kubus memiliki 6 sisi persegi yang kongruen sehingga luas permukaannya 6 × s².';
    } else if (i <= 30) {
      const idx = i - 15;
      const p = 8 + idx, l = 5 + (idx % 3), t = 4 + (idx % 2);
      const lp = 2 * (p * l + p * t + l * t);
      const objects = ['kotak sepatu kulit', 'kotak kardus mie instan', 'kotak perkakas tukang', 'peti kayu buah apel', 'kotak baterai aki', 'lemari pakaian mini', 'wadah bekal makan siang', 'kotak speaker musik', 'kotak kertas arsip', 'kotak cetakan bata', 'kotak perkakas kunci', 'kotak mainan lego', 'kotak kosmetik rias', 'kotak pemanggang kue', 'wadah filter akuarium'];
      qTxt = `Sebuah ${objects[idx - 1]} berbentuk balok berukuran panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm. Luas permukaan benda tersebut adalah ...`;
      ans = `${lp} cm²`; w1 = `${p * l * t} cm²`; w2 = `${lp + 28} cm²`; w3 = `${lp - 20} cm²`;
      exp = `Luas permukaan balok = 2 × (pl + pt + lt) = 2 × (${p * l} + ${p * t} + ${l * t}) = ${lp} cm².`;
      diag = 'Gunakan rumus luas permukaan balok 2(pl + pt + lt).';
    } else {
      const idx = i - 30;
      const s = 40 + idx * 5; // cm
      const volTotalLiter = (s * s * s) / 1000;
      const sisaLiter = volTotalLiter / 2;
      const houses = ['Keluarga Pak Anto', 'Asrama santri Al-Hidayah', 'Keluarga Bu Dewi', 'Pondok pesantren Bina Insan', 'Keluarga Pak Danu', 'Rumah dinas guru', 'Keluarga Bu Rina', 'Asrama atlet remaja', 'Keluarga Pak Haris', 'Pondok yatim piatu'];
      qTxt = `Bak mandi di rumah ${houses[idx - 1]} berbentuk kubus dengan rusuk bagian dalam ${s} cm terisi air separuh (1/2 bagian). Volume air yang dibutuhkan agar bak mandi tersebut terisi penuh adalah ...`;
      ans = `${sisaLiter} liter`; w1 = `${volTotalLiter} liter`; w2 = `${sisaLiter + 15} liter`; w3 = `${Math.round(sisaLiter * 1.5)} liter`;
      exp = `Volume total bak = ${s}³ = ${s * s * s} cm³ = ${volTotalLiter} liter.
Air yang dibutuhkan untuk mengisi penuh (1/2 bagian) = 1/2 × ${volTotalLiter} = ${sisaLiter} liter.`;
      diag = 'Hitung volume kubus dalam cm³, konversi ke liter (dibagi 1.000), lalu kalikan dengan sisa bagian.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T5, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 83;
    const pKardus = 40 + (i % 5) * 10;
    const lKardus = 30;
    const tKardus = 20;
    const volKardus = pKardus * lKardus * tKardus;
    const pKotak = 10, lKotak = 5, tKotak = 4;
    const volKotak = pKotak * lKotak * tKotak;
    const kapasitas = volKardus / volKotak;
    const products = ['sabun mandi herbal', 'biskuit cokelat renyah', 'pasta gigi keluarga', 'roti lapis keju', 'susu kotak mini', 'kotak baterai senter', 'teh celup wangi', 'permen jahe manis', 'obat tetes mata', 'korengan korek api', 'minyak angin aroma', 'kue kering salju', 'bubuk kopi saset', 'puding rasa melon', 'selai stroberi jar', 'krim pelembap kulit', 'sabun cuci piring', 'margarin serbaguna', 'sarden kaleng mini', 'keju batangan gurih'];

    const qTxt = `Sebuah industri rumah tangga mengemas ${products[i - 1]} dalam kotak kecil berukuran 10 cm × 5 cm × 4 cm. Kotak-kotak tersebut dimasukkan ke dalam kardus besar berukuran ${pKardus} cm × ${lKardus} cm × ${tKardus} cm. Jumlah maksimal kotak kecil yang muat ke dalam kardus adalah ...`;
    ans = `${kapasitas} kotak`; w1 = `${kapasitas - 10} kotak`; w2 = `${kapasitas + 20} kotak`; w3 = `${kapasitas / 2} kotak`;
    exp = `Volume kardus besar = ${pKardus} × ${lKardus} × ${tKardus} = ${volKardus} cm³.
Volume kotak kecil = 10 × 5 × 4 = ${volKotak} cm³.
Banyak kotak yang muat = ${volKardus} : ${volKotak} = ${kapasitas} kotak.`;
    diag = 'Bagi volume kardus besar dengan volume satu kotak kecil.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T5, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Kenaikan Air Akuarium Balok Bulat Pas (SD)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 89;
    const p = 50;
    const l = 40; // luas alas = 2000 cm²
    const kenaikanInt = 1 + (i % 5); // 1, 2, 3, 4, 5 cm (bilangan bulat pas!)
    const volumeBatu = p * l * kenaikanInt; // 2000, 4000, 6000, 8000, 10000 cm³
    const aquariums = ['akuarium ikan arwana', 'akuarium koki pelangi', 'wadah lobster air tawar', 'akuarium ikan guppy', 'akuarium ikan cupang hias', 'akuarium kura-kura brazil', 'akuarium ikan koi mini', 'akuarium aquascape tanaman', 'akuarium ikan molly', 'akuarium ikan discus', 'akuarium ikan louhan', 'akuarium ikan neon tetra', 'akuarium udang hias red cherry', 'akuarium ikan mas kancra', 'akuarium ikan manfish', 'akuarium kura-kura leher panjang', 'akuarium ikan platy', 'akuarium ikan komet', 'akuarium ikan sumatra', 'akuarium ikan sapu-sapu hias'];

    const qTxt = `Sebuah ${aquariums[i - 1]} berbentuk balok memiliki panjang ${p} cm dan lebar ${l} cm. Ke dalam akuarium tersebut dimasukkan batu karang hiasan bervolume ${volumeBatu} cm³ hingga tenggelam sempurna. Kenaikan permukaan air di dalam akuarium adalah ...`;
    ans = `${kenaikanInt} cm`; w1 = `${kenaikanInt + 2} cm`; w2 = `${kenaikanInt + 4} cm`; w3 = `${kenaikanInt + 6} cm`;
    exp = `Kenaikan air = Volume batu : Luas alas akuarium = ${volumeBatu} : (${p} × ${l}) = ${volumeBatu} : 2000 = ${kenaikanInt} cm.`;
    diag = 'Bagi volume benda yang dimasukkan dengan luas bidang alas wadah penampung.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T5, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 6: Bangun Ruang Prisma, Tabung, Kerucut, & Limas
  // ===========================================================================
  const T6 = 'Bangun Ruang Prisma, Tabung, Kerucut, & Limas';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 97;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const r = 7 * i, t = 10 + i;
      const vol = Math.round((22 / 7) * r * r * t);
      svg = renderTabung(r, t);
      qTxt = `Perhatikan gambar bangun tabung di atas! Jari-jari alas r = ${r} cm dan tinggi tabung t = ${t} cm. Volume tabung tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${Math.round(vol / 3)} cm³`; w2 = `${vol + 150} cm³`; w3 = `${vol - 120} cm³`;
      exp = `Volume tabung = π × r² × t = (22/7) × ${r}² × ${t} = ${vol} cm³.`;
      diag = 'Volume tabung adalah luas alas lingkaran dikalikan dengan tingginya.';
    } else {
      const idx = i - 10;
      const r = 7 * idx, t = 9 + 3 * idx;
      const vol = Math.round((1 / 3) * (22 / 7) * r * r * t);
      svg = renderKerucut(r, t);
      qTxt = `Perhatikan gambar bangun kerucut di atas! Jari-jari alas r = ${r} cm dan tinggi kerucut t = ${t} cm. Volume kerucut tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${vol * 3} cm³`; w2 = `${vol + 80} cm³`; w3 = `${vol - 50} cm³`;
      exp = `Volume kerucut = 1/3 × π × r² × t = 1/3 × (22/7) × ${r}² × ${t} = ${vol} cm³.`;
      diag = 'Volume kerucut adalah sepertiga dari volume tabung dengan alas dan tinggi yang sama.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T6, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 101;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 15) {
      const s = 4 + 2 * i;
      const t = 6 + 3 * (i % 3);
      const vol = Math.round((1 / 3) * s * s * t);
      svg = renderLimas(s, t);
      qTxt = `Perhatikan gambar limas segiempat di atas! Sisi alas persegi ${s} cm dan tinggi limas ${t} cm. Volume limas tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${s * s * t} cm³`; w2 = `${vol + 30} cm³`; w3 = `${vol - 20} cm³`;
      exp = `Volume limas = 1/3 × luas alas × tinggi = 1/3 × (${s} × ${s}) × ${t} = ${vol} cm³.`;
      diag = 'Gunakan rumus sepertiga luas alas dikalikan tinggi limas.';
    } else if (i <= 30) {
      const idx = i - 15;
      const a = 6 + idx, tSeg = 4 + (idx % 3), tPrisma = 10 + idx;
      const vol = Math.round(0.5 * a * tSeg * tPrisma);
      svg = renderPrismaSegitiga(a, tSeg, tPrisma);
      const objects = ['kemasan cokelat toblerone', 'tenda pramuka regu rajawali', 'atap rumah joglo mini', 'potongan keju segitiga', 'gabus penahan pintu', 'wadah aksesoris mika', 'penahan roda mobil', 'kotak tisu segitiga', 'plakat prisma kaca', 'miniatur tenda kemah', 'maket atap paviliun', 'cetakan lilin aroma', 'pembatas buku akrilik', 'kotak kado piramida', 'tempat pensil prisma'];
      qTxt = `Sebuah ${objects[idx - 1]} berbentuk prisma segitiga memiliki alas segitiga ${a} cm, tinggi segitiga ${tSeg} cm, dan tinggi prisma ${tPrisma} cm. Volume bangun tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${a * tSeg * tPrisma} cm³`; w2 = `${vol + 40} cm³`; w3 = `${vol - 30} cm³`;
      exp = `Volume prisma = Luas alas × tinggi prisma = (1/2 × ${a} × ${tSeg}) × ${tPrisma} = ${vol} cm³.`;
      diag = 'Hitung luas alas segitiga terlebih dahulu, lalu kalikan dengan tinggi prisma.';
    } else {
      const idx = i - 30;
      const r = 35; // cm
      const t = 80 + idx * 10; // cm
      const volLiter = Math.round(((22 / 7) * r * r * t) / 1000);
      const fuels = ['minyak tanah', 'minyak goreng curah', 'solar industri', 'oli mesin pabrik', 'bensin pertalite', 'minyak kelapa murni', 'cairan pembersih lantai', 'air mineral cadangan', 'minyak sawit mentah', 'cairan disinfektan'];
      qTxt = `Sebuah drum penampungan ${fuels[idx - 1]} berbentuk tabung memiliki jari-jari alas 35 cm dan tinggi ${t} cm. Kapasitas maksimum drum tersebut dalam satuan liter adalah ...`;
      ans = `${volLiter} liter`; w1 = `${volLiter + 50} liter`; w2 = `${volLiter - 40} liter`; w3 = `${volLiter * 2} liter`;
      exp = `Volume drum = π × r² × t = (22/7) × 35² × ${t} = ${(22 / 7) * r * r * t} cm³ = ${volLiter} liter.`;
      diag = 'Hitung volume tabung dalam cm³, kemudian bagi 1.000 untuk mengubah ke satuan liter.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T6, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 103;
    const r = 7 * (1 + (i % 3));
    const t = 10 + i;
    const ls = Math.round(2 * (22 / 7) * r * t);
    const containers = ['kaleng biskuit astor', 'pipa paralon saluran air', 'cerobong asap pabrik', 'drum oli pelumas', 'tempat pensil silinder', 'kaleng susu kental manis', 'tabung pemadam api mini', 'tiang pilar teras silinder', 'kaleng sarden keluarga', 'wadah kok bulutangkis', 'kaleng cat tembok', 'tempat shuttlecock', 'wadah keripik kentang', 'silinder tangki gas mini', 'tabung filter air sumur', 'cetakan kue silinder', 'kaleng permen mint', 'tempat payung silinder', 'botol termos stainless', 'wadah poster gulung'];

    const qTxt = `Sebuah ${containers[i - 1]} berbentuk tabung memiliki jari-jari alas ${r} cm dan tinggi ${t} cm. Luas selimut tabung (bagian sisi lengkung) tersebut adalah ...`;
    ans = `${ls} cm²`; w1 = `${Math.round((22 / 7) * r * r * t)} cm²`; w2 = `${ls + 44} cm²`; w3 = `${ls - 30} cm²`;
    exp = `Luas selimut tabung = 2 × π × r × t = 2 × (22/7) × ${r} × ${t} = ${ls} cm².`;
    diag = 'Gunakan rumus luas selimut tabung 2 × π × r × t.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T6, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Volume Air dalam Wadah Balok & Pengambilan Air (SD)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 107;
    const p = 50 + (i % 3) * 10;
    const l = 40;
    const t = 50;
    const volTotalLiter = (p * l * t) / 1000; // liter bulat
    const terpakaiLiter = 15 + i * 2;
    const sisaLiter = volTotalLiter - terpakaiLiter;
    const wadahs = ['bak penampungan air wudhu', 'tandon air bersih sekolah', 'bak mandi kamar siswa', 'kolam penampungan air hujan', 'bak cuci tangan kantin', 'wadah air peternakan kelinci', 'bak penampung air kebun sayur', 'tandon air laboratorium sains', 'bak mandi asrama putra', 'bak mandi asrama putri', 'kolam ikan hias sekolah', 'bak perendaman bibit tanaman', 'tandon air rumah guru', 'bak air tempat cuci piring', 'bak penampung air mushola', 'tandon air darurat puskesmas', 'bak penampung air taman bunga', 'tandon air gedung serbaguna', 'bak air kamar mandi perpustakaan', 'wadah tandon air dapur sekolah'];

    const qTxt = `Sebuah ${wadahs[i - 1]} berbentuk balok memiliki ukuran panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm. Mula-mula wadah tersebut terisi penuh air. Jika air di dalam wadah diambil sebanyak ${terpakaiLiter} liter untuk kebutuhan harian, maka sisa volume air di dalam wadah adalah ...`;
    ans = `${sisaLiter} liter`; w1 = `${volTotalLiter} liter`; w2 = `${sisaLiter + 10} liter`; w3 = `${terpakaiLiter} liter`;
    exp = `Volume total wadah = ${p} × ${l} × ${t} = ${p * l * t} cm³ = ${volTotalLiter} liter (karena 1 liter = 1.000 cm³).
Sisa volume air = ${volTotalLiter} liter - ${terpakaiLiter} liter = ${sisaLiter} liter.`;
    diag = 'Hitung volume balok dalam cm kubik, ubah ke liter (bagi 1.000), lalu kurangkan dengan volume air yang diambil.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T6, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 7: Penyajian Data Diagram Batang & Diagram Garis
  // (VARIASI LENGKAP: Tertinggi, Terendah, Selisih, Kenaikan, Total, Rata-rata)
  // ===========================================================================
  const T7 = 'Penyajian Data Diagram Batang & Diagram Garis';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 109;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    const themes = [
      { name: 'Toko Buku Pelangi', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'buku' },
      { name: 'Kebun Binatang Ria', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'pengunjung' },
      { name: 'Klinik Sehat Bugar', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'pasien' },
      { name: 'Koperasi Siswa Mandiri', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'pensil' },
      { name: 'Toko Buah Segar Harum', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'kg buah' },
      { name: 'Posko Donasi Membaca', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'eksemplar' },
      { name: 'Kolam Budidaya Lele', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'kg ikan' },
      { name: 'Bengkel Motor Bersaudara', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'motor' },
      { name: 'Kedai Susu Sapi Alami', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'liter' },
      { name: 'Wahana Air Ceria Indah', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'tiket' },
      { name: 'Peternakan Ayam Makmur', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'butir telur' },
      { name: 'Sentra Batik Nusantara', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'lembar kain' },
      { name: 'Sentra Sepatu Cibaduyut', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'pasang' },
      { name: 'Toko Perlengkapan Olahraga', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'bola' },
      { name: 'Kantin Sekolah Kejujuran', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'porsi' },
      { name: 'Perpustakaan Desa Pintar', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'pengunjung' },
      { name: 'Pangkalan Minyak Bumi', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'tabung gas' },
      { name: 'Depo Air Minum Sehat', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'galon' },
      { name: 'Pusat Daur Ulang Plastik', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'kg botol' },
      { name: 'Pusat Bibit Tanaman Asri', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], unit: 'bibit' }
    ][i - 1];

    const v1 = 20 + i, v2 = 35 + (i % 3) * 5, v3 = 15, v4 = 45 + (i % 4) * 2;
    const vals = [v1, v2, v3, v4];
    svg = renderDiagramBatang(themes.labels, vals, `Data Harian ${themes.name}`, themes.unit);

    if (i % 2 === 1) {
      qTxt = `Perhatikan diagram batang di atas! Hasil pencatatan harian ${themes.name} paling banyak terjadi pada hari ...`;
      ans = `Kamis (${v4} ${themes.unit})`;
      w1 = `Selasa (${v2} ${themes.unit})`;
      w2 = `Senin (${v1} ${themes.unit})`;
      w3 = `Rabu (${v3} ${themes.unit})`;
      exp = `Batang paling tinggi pada diagram batang adalah hari Kamis dengan ${v4} ${themes.unit}.`;
      diag = 'Amati batang grafik paling menjulang pada sumbu nilai.';
    } else {
      qTxt = `Perhatikan diagram batang di atas! Hasil pencatatan harian ${themes.name} paling sedikit terjadi pada hari ...`;
      ans = `Rabu (${v3} ${themes.unit})`;
      w1 = `Senin (${v1} ${themes.unit})`;
      w2 = `Selasa (${v2} ${themes.unit})`;
      w3 = `Kamis (${v4} ${themes.unit})`;
      exp = `Batang paling rendah pada diagram batang adalah hari Rabu dengan ${v3} ${themes.unit}.`;
      diag = 'Amati batang grafik paling pendek pada diagram.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40) - 10 Subjek Berbeda × 4 Pertanyaan (Tertinggi, Terendah, Selisih, Kenaikan)
  const lineSubjects = [
    { title: 'Suhu Tubuh Pasien Rawat Inap', labels: ['Pagi', 'Siang', 'Sore', 'Malam'], vals: [36.0, 37.0, 38.5, 37.0], unit: '°C' },
    { title: 'Ketinggian Air Sungai Bengawan', labels: ['06.00', '12.00', '18.00', '24.00'], vals: [2.5, 3.2, 4.8, 3.5], unit: 'meter' },
    { title: 'Penjualan Motor Dealer Jaya', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis'], vals: [12, 18, 25, 20], unit: 'unit' },
    { title: 'Tinggi Bibit Jagung Hibrida', labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'], vals: [5, 12, 22, 35], unit: 'cm' },
    { title: 'Berat Badan Balita di Posyandu', labels: ['Bulan 1', 'Bulan 2', 'Bulan 3', 'Bulan 4'], vals: [3.5, 4.8, 6.2, 7.5], unit: 'kg' },
    { title: 'Pengunjung Situs Candi Prambanan', labels: ['Kamis', 'Jumat', 'Sabtu', 'Minggu'], vals: [150, 220, 480, 550], unit: 'orang' },
    { title: 'Pemakaian Daya Listrik Keluarga', labels: ['Minggu I', 'Minggu II', 'Minggu III', 'Minggu IV'], vals: [45, 52, 68, 55], unit: 'kWh' },
    { title: 'Kecepatan Kereta Cepat Jakarta', labels: ['Stasiun 1', 'Stasiun 2', 'Stasiun 3', 'Stasiun 4'], vals: [120, 250, 350, 280], unit: 'km/jam' },
    { title: 'Curah Hujan Stasiun Meteorologi', labels: ['Januari', 'Februari', 'Maret', 'April'], vals: [280, 320, 190, 110], unit: 'mm' },
    { title: 'Produksi Madu Hutan Peternakan', labels: ['Maret', 'April', 'Mei', 'Juni'], vals: [40, 65, 90, 75], unit: 'liter' }
  ];

  for (let i = 1; i <= 40; i++) {
    const seed = i * 113;
    const subIdx = Math.floor((i - 1) / 4);
    const varIdx = (i - 1) % 4;
    const sObj = lineSubjects[subIdx];
    const svg = renderDiagramGaris(sObj.labels, sObj.vals, sObj.title, sObj.unit);

    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    const maxVal = Math.max(...sObj.vals);
    const minVal = Math.min(...sObj.vals);
    const maxLabel = sObj.labels[sObj.vals.indexOf(maxVal)];
    const minLabel = sObj.labels[sObj.vals.indexOf(minVal)];
    const selisih = (maxVal - minVal).toFixed(1).replace('.0', '').replace('.', ',');

    if (varIdx === 0) {
      qTxt = `Perhatikan diagram garis ${sObj.title} di atas! Nilai tertinggi tercatat pada periode ...`;
      ans = `${maxLabel} (${maxVal} ${sObj.unit})`;
      w1 = `${minLabel} (${minVal} ${sObj.unit})`;
      w2 = `${sObj.labels[1]} (${sObj.vals[1]} ${sObj.unit})`;
      w3 = `${sObj.labels[0]} (${sObj.vals[0]} ${sObj.unit})`;
      exp = `Titik grafik tertinggi berada pada periode ${maxLabel} sebesar ${maxVal} ${sObj.unit}.`;
      diag = 'Amati titik plot paling puncak pada garis grafik.';
    } else if (varIdx === 1) {
      qTxt = `Perhatikan diagram garis ${sObj.title} di atas! Nilai terendah tercatat pada periode ...`;
      ans = `${minLabel} (${minVal} ${sObj.unit})`;
      w1 = `${maxLabel} (${maxVal} ${sObj.unit})`;
      w2 = `${sObj.labels[2]} (${sObj.vals[2]} ${sObj.unit})`;
      w3 = `${sObj.labels[3]} (${sObj.vals[3]} ${sObj.unit})`;
      exp = `Titik grafik paling dasar berada pada periode ${minLabel} sebesar ${minVal} ${sObj.unit}.`;
      diag = 'Amati titik plot paling bawah pada garis grafik.';
    } else if (varIdx === 2) {
      qTxt = `Perhatikan diagram garis ${sObj.title} di atas! Selisih antara nilai tertinggi dan nilai terendah adalah ...`;
      ans = `${selisih} ${sObj.unit}`;
      w1 = `${(parseFloat(selisih.replace(',', '.')) + 1.5).toFixed(1).replace('.0', '').replace('.', ',')} ${sObj.unit}`;
      w2 = `${(parseFloat(selisih.replace(',', '.')) - 0.8).toFixed(1).replace('.0', '').replace('.', ',')} ${sObj.unit}`;
      w3 = `${maxVal} ${sObj.unit}`;
      exp = `Nilai tertinggi = ${maxVal} ${sObj.unit}, terendah = ${minVal} ${sObj.unit}. Selisih = ${maxVal} - ${minVal} = ${selisih} ${sObj.unit}.`;
      diag = 'Kurangkan nilai tertinggi dengan nilai terendah pada grafik.';
    } else {
      const kenaikan = (sObj.vals[2] - sObj.vals[1]).toFixed(1).replace('.0', '').replace('.', ',');
      qTxt = `Perhatikan diagram garis ${sObj.title} di atas! Perubahan nilai dari ${sObj.labels[1]} ke ${sObj.labels[2]} adalah sebesar ...`;
      ans = `${kenaikan} ${sObj.unit}`;
      w1 = `${(parseFloat(kenaikan.replace(',', '.')) + 1.2).toFixed(1).replace('.0', '').replace('.', ',')} ${sObj.unit}`;
      w2 = `${(parseFloat(kenaikan.replace(',', '.')) - 0.7).toFixed(1).replace('.0', '').replace('.', ',')} ${sObj.unit}`;
      w3 = `${sObj.vals[2]} ${sObj.unit}`;
      exp = `Perubahan = ${sObj.vals[2]} - ${sObj.vals[1]} = ${kenaikan} ${sObj.unit}.`;
      diag = 'Kurangkan nilai pada titik kedua dengan titik pertama.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Diagram Batang Multidata Desa
  for (let i = 1; i <= 20; i++) {
    const seed = i * 127;
    const vA = 30 + i * 2, vB = 45 + (i % 3) * 5, vC = 65 + i * 2, vD = 50;
    const totPanen = vA + vB + vC + vD;
    const selisih = vC - vA;
    const villages = ['Desa Sukamaju', 'Desa Mekarsari', 'Desa Karanganyar', 'Desa Sumbermulyo', 'Desa Wanasari', 'Desa Tanjungrejo', 'Desa Sidodadi', 'Desa Tirtoagung', 'Desa Margasari', 'Desa Banjarwangi', 'Desa Kalirejo', 'Desa Girimulyo', 'Desa Purwosari', 'Desa Kedungjati', 'Desa Baturetno', 'Desa Candirejo', 'Desa Kemuning', 'Desa Ngadiluwih', 'Desa Tlogomas', 'Desa Wonosobo'];
    const vName = villages[i - 1];
    const svg = renderDiagramBatang(['Wilayah A', 'Wilayah B', 'Wilayah C', 'Wilayah D'], [vA, vB, vC, vD], `Panen Padi ${vName}`, 'ton');

    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    if (i % 2 === 1) {
      qTxt = `Perhatikan diagram batang panen padi ${vName} di atas! Selisih hasil panen padi antara Wilayah C (tertinggi) dan Wilayah A (terendah) adalah ...`;
      ans = `${selisih} ton`; w1 = `${selisih + 10} ton`; w2 = `${selisih - 5} ton`; w3 = `${vC} ton`;
      exp = `Panen Wilayah C = ${vC} ton, Wilayah A = ${vA} ton. Selisih = ${vC} - ${vA} = ${selisih} ton.`;
      diag = 'Kurangkan nilai batang Wilayah C dengan Wilayah A.';
    } else {
      qTxt = `Perhatikan diagram batang panen padi ${vName} di atas! Jumlah total seluruh hasil panen padi dari keempat wilayah tersebut adalah ...`;
      ans = `${totPanen} ton`; w1 = `${totPanen - 25} ton`; w2 = `${totPanen + 30} ton`; w3 = `${totPanen * 2} ton`;
      exp = `Total = ${vA} + ${vB} + ${vC} + ${vD} = ${totPanen} ton.`;
      diag = 'Jumlahkan seluruh nilai data dari keempat batang wilayah.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // HOTS (20) - Rata-rata dari Grafik Garis
  for (let i = 1; i <= 20; i++) {
    const seed = i * 131;
    const base = 40 + i * 2;
    const d = [base, base + 10, base + 5, base + 20, base + 15];
    const total = d.reduce((a, b) => a + b, 0);
    const mean = total / 5;
    const places = ['Perpustakaan Daerah', 'Museum Geologi', 'Planetarium Angkasa', 'Galeri Seni Rupa', 'Pusat Sains Iptek', 'Taman Kupu-kupu', 'Kebun Raya Biologi', 'Pameran Buku Edukasi', 'Balai Konservasi Alam', 'Museum Sejarah Bahari', 'Gedung Bioskop Ceria', 'Taman Wisata Satwa', 'Arena Kolam Renang', 'Pusat Kerajinan Batik', 'Pentas Wayang Kulit', 'Wahana Rumah Kaca', 'Pameran Robotika Sekolah', 'Balai Arkeologi Purba', 'Museum Dirgantara Udara', 'Pameran Flora Anggrek'];
    const pName = places[i - 1];
    const svg = renderDiagramGaris(['Sen', 'Sel', 'Rab', 'Kam', 'Jum'], d, `Pengunjung ${pName}`, 'orang');

    const qTxt = `Perhatikan diagram garis di atas! Rata-rata pengunjung harian ${pName} selama 5 hari pengamatan (Senin-Jumat) adalah ...`;
    const ans = `${mean} orang`; w1 = `${mean + 6} orang`; w2 = `${mean - 4} orang`; w3 = `${total} orang`;
    exp = `Total pengunjung = ${d.join(' + ')} = ${total} orang.
Rata-rata = ${total} : 5 = ${mean} orang/hari.`;
    diag = 'Jumlahkan seluruh data pengunjung lalu bagi dengan banyaknya hari (5).';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T7, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // ===========================================================================
  // TOPIK 8: Penyajian Data Diagram Lingkaran, Piktogram, & Tabel Turus
  // ===========================================================================
  const T8 = 'Penyajian Data Diagram Lingkaran, Piktogram, & Tabel Turus';

  // Mudah (20) - Piktogram dengan 20 Variasi Tema & Skala
  for (let i = 1; i <= 20; i++) {
    const seed = i * 137;
    const skala = [5, 10, 15, 20, 25, 10, 5, 20, 15, 10, 5, 10, 20, 25, 15, 10, 5, 20, 15, 10][i - 1];
    const itemNames = ['buku ensiklopedia', 'pohon cemara', 'sepeda motor', 'paket sembako', 'karung beras', 'ikan gurami', 'dus biskuit', 'bola sepak', 'bibit cabai', 'buku cerita', 'telur ayam', 'sepatu bot', 'meja lipat', 'helm proyek', 'botol madu', 'kardus mie', 'pohon mangga', 'jaket pramuka', 'kamera digital', 'tas ransel'][i - 1];
    const j1 = skala * (2 + (i % 3));
    const j2 = skala * (4 + (i % 2));
    const j3 = skala * (5 + (i % 3));
    const svg = renderPiktogram(['Regu A', 'Regu B', 'Regu C'], [j1, j2, j3], itemNames, skala);

    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';
    if (i % 3 === 1) {
      qTxt = `Perhatikan piktogram di atas! Setiap 1 gambar simbol mewakili ${skala} buah ${itemNames}. Jumlah ${itemNames} milik Regu B adalah ...`;
      ans = `${j2} buah`; w1 = `${j2 / skala} buah`; w2 = `${j2 + skala} buah`; w3 = `${j1} buah`;
      exp = `Regu B memiliki ${j2 / skala} simbol × ${skala} = ${j2} buah.`;
      diag = 'Kalikan banyak simbol pada baris dengan skala legenda.';
    } else if (i % 3 === 2) {
      const selisih = j3 - j1;
      qTxt = `Perhatikan piktogram di atas! Selisih perolehan ${itemNames} antara Regu C (terbanyak) dan Regu A (tersedikit) adalah ...`;
      ans = `${selisih} buah`; w1 = `${selisih + skala} buah`; w2 = `${selisih - skala} buah`; w3 = `${j3} buah`;
      exp = `Selisih = ${j3} - ${j1} = ${selisih} buah.`;
      diag = 'Kurangkan perolehan Regu C dengan Regu A.';
    } else {
      const total = j1 + j2 + j3;
      qTxt = `Perhatikan piktogram di atas! Jumlah total seluruh ${itemNames} dari ketiga regu tersebut adalah ...`;
      ans = `${total} buah`; w1 = `${total - 2 * skala} buah`; w2 = `${total + 2 * skala} buah`; w3 = `${total / skala} buah`;
      exp = `Total = ${j1} + ${j2} + ${j3} = ${total} buah.`;
      diag = 'Jumlahkan seluruh item dari ketiga regu.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40) - 10 Tema Diagram Lingkaran × 4 Pertanyaan Unik
  const pieThemes = [
    { name: 'Ekstrakurikuler Siswa', items: [{ label: 'Sepak Bola', pct: 40 }, { label: 'Renang', pct: 25 }, { label: 'Musik', pct: 20 }, { label: 'Melukis', pct: 15 }] },
    { name: 'Moda Transportasi ke Sekolah', items: [{ label: 'Sepeda', pct: 35 }, { label: 'Jalan Kaki', pct: 30 }, { label: 'Angkot', pct: 20 }, { label: 'Diantar Motor', pct: 15 }] },
    { name: 'Kegemaran Hobi Waktu Luang', items: [{ label: 'Membaca', pct: 45 }, { label: 'Menggambar', pct: 25 }, { label: 'Menyanyi', pct: 20 }, { label: 'Menari', pct: 10 }] },
    { name: 'Pilihan Makanan Kantin Sehat', items: [{ label: 'Nasi Soto', pct: 40 }, { label: 'Gado-gado', pct: 30 }, { label: 'Nasi Kuning', pct: 20 }, { label: 'Roti Bakar', pct: 10 }] },
    { name: 'Buah Kesukaan Siswa Kelas V', items: [{ label: 'Mangga', pct: 35 }, { label: 'Jeruk', pct: 30 }, { label: 'Apel', pct: 25 }, { label: 'Pisang', pct: 10 }] },
    { name: 'Cita-Cita Profesi Masa Depan', items: [{ label: 'Dokter', pct: 40 }, { label: 'Guru', pct: 25 }, { label: 'Insinyur', pct: 20 }, { label: 'Pilot', pct: 15 }] },
    { name: 'Pilihan Warna Kaos Olahraga', items: [{ label: 'Biru', pct: 35 }, { label: 'Merah', pct: 30 }, { label: 'Hijau', pct: 20 }, { label: 'Kuning', pct: 15 }] },
    { name: 'Minuman Sehat Favorit', items: [{ label: 'Susu Kedelai', pct: 40 }, { label: 'Jus Alpukat', pct: 30 }, { label: 'Air Kelapa', pct: 20 }, { label: 'Teh Hijau', pct: 10 }] },
    { name: 'Buku Bacaan Favorit di Mading', items: [{ label: 'Komik Sains', pct: 45 }, { label: 'Cerita Rakyat', pct: 25 }, { label: 'Ensiklopedia', pct: 20 }, { label: 'Biografi', pct: 10 }] },
    { name: 'Pilihan Cabang Atletik', items: [{ label: 'Lari Cepat', pct: 40 }, { label: 'Lompat Jauh', pct: 25 }, { label: 'Lempar Lembing', pct: 20 }, { label: 'Tolak Peluru', pct: 15 }] }
  ];

  for (let i = 1; i <= 40; i++) {
    const seed = i * 139;
    const subIdx = Math.floor((i - 1) / 4);
    const varIdx = (i - 1) % 4;
    const pObj = pieThemes[subIdx];
    const totalSiswa = 40 + subIdx * 10;
    const items = pObj.items;
    const svg = renderDiagramLingkaran(items, pObj.name);

    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (varIdx === 0) {
      const topItem = items[0];
      const count = Math.round((topItem.pct / 100) * totalSiswa);
      qTxt = `Perhatikan diagram lingkaran ${pObj.name} di atas! Jika total responden berjumlah ${totalSiswa} orang, banyak siswa yang memilih ${topItem.label} adalah ...`;
      ans = `${count} orang`; w1 = `${count + 4} orang`; w2 = `${count - 4} orang`; w3 = `${topItem.pct} orang`;
      exp = `Pemilih ${topItem.label} = ${topItem.pct}% × ${totalSiswa} = ${count} orang.`;
      diag = 'Kalikan persentase dengan total responden.';
    } else if (varIdx === 1) {
      const lowItem = items[items.length - 1];
      qTxt = `Perhatikan diagram lingkaran ${pObj.name} di atas! Kategori yang paling sedikit peminatnya adalah ...`;
      ans = `${lowItem.label} (${lowItem.pct}%)`;
      w1 = `${items[1].label} (${items[1].pct}%)`;
      w2 = `${items[2].label} (${items[2].pct}%)`;
      w3 = `${items[0].label} (${items[0].pct}%)`;
      exp = `Kategori dengan persentase terendah adalah ${lowItem.label} yaitu ${lowItem.pct}%.`;
      diag = 'Cari kategori dengan persentase paling kecil.';
    } else if (varIdx === 2) {
      const count1 = Math.round((items[0].pct / 100) * totalSiswa);
      const countLast = Math.round((items[items.length - 1].pct / 100) * totalSiswa);
      const selisih = count1 - countLast;
      qTxt = `Perhatikan diagram lingkaran ${pObj.name} di atas! Selisih banyak siswa pemilih ${items[0].label} dan ${items[items.length - 1].label} adalah ...`;
      ans = `${selisih} orang`; w1 = `${selisih + 3} orang`; w2 = `${selisih - 2} orang`; w3 = `${count1} orang`;
      exp = `${items[0].label} = ${count1} orang, ${items[items.length - 1].label} = ${countLast} orang. Selisih = ${count1} - ${countLast} = ${selisih} orang.`;
      diag = 'Hitung banyak siswa kedua kategori lalu kurangkan keduanya.';
    } else {
      const itemA = items[0];
      const itemB = items[1];
      const totalPct = itemA.pct + itemB.pct;
      const countGabungan = Math.round((totalPct / 100) * totalSiswa);
      qTxt = `Perhatikan diagram lingkaran ${pObj.name} di atas! Jika total responden berjumlah ${totalSiswa} orang, jumlah gabungan siswa pemilih ${itemA.label} dan ${itemB.label} adalah ...`;
      ans = `${countGabungan} orang`;
      w1 = `${countGabungan - 6} orang`;
      w2 = `${countGabungan + 8} orang`;
      w3 = `${Math.round((itemA.pct / 100) * totalSiswa)} orang`;
      exp = `Persentase gabungan = ${itemA.pct}% + ${itemB.pct}% = ${totalPct}%.
Jumlah siswa = ${totalPct}% × ${totalSiswa} = ${countGabungan} orang.`;
      diag = 'Jumlahkan persentase kedua kategori lalu kalikan dengan total seluruh responden.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Menentukan Kategori Sisa & Nilai Nyata Diagram Lingkaran (Standar SD)
  const sdSurveys = [
    { title: 'ekstrakurikuler olahraga', cats: ['Sepak Bola', 'Bulu Tangkis', 'Renang', 'Bola Voli'], pcts: [35, 25, 20] },
    { title: 'kegemaran seni siswa', cats: ['Menggambar', 'Seni Musik', 'Tari Tradisional', 'Seni Kriya'], pcts: [30, 25, 25] },
    { title: 'mata pelajaran favorit', cats: ['Matematika', 'IPA', 'Bahasa Indonesia', 'IPS'], pcts: [35, 30, 15] },
    { title: 'hasil panen buah kebun sekolah', cats: ['Mangga', 'Pepaya', 'Pisang', 'Jambu Air'], pcts: [40, 20, 25] },
    { title: 'pilihan bekal makan siang', cats: ['Nasi Goreng', 'Roti Lapis', 'Nasi Kuning', 'Mie Goreng Sehat'], pcts: [40, 30, 15] },
    { title: 'moda transportasi siswa', cats: ['Jalan Kaki', 'Sepeda Santai', 'Angkutan Kota', 'Sepeda Motor'], pcts: [25, 35, 20] },
    { title: 'buku bacaan di perpustakaan', cats: ['Buku Cerita Fabel', 'Ensiklopedi Sains', 'Komik Edukasi', 'Majalah Anak'], pcts: [30, 30, 20] },
    { title: 'hewan peliharaan di rumah', cats: ['Kucing', 'Ikan Hias', 'Burung Kenari', 'Kelinci'], pcts: [45, 25, 15] },
    { title: 'cita-cita siswa kelas VI', cats: ['Dokter', 'Guru', 'Tentara/Polisi', 'Arsitek'], pcts: [35, 25, 25] },
    { title: 'minuman sehat favorit', cats: ['Susu Segar', 'Jus Buah', 'Air Kelapa', 'Madu Hangat'], pcts: [30, 35, 20] },
    { title: 'kegiatan liburan akhir semester', cats: ['Wisata Alam', 'Mengunjungi Nenek', 'Bermain di Rumah', 'Belajar Kesenian'], pcts: [40, 25, 20] },
    { title: 'jenis sampah daur ulang sekolah', cats: ['Kertas & Kardus', 'Botol Plastik', 'Kaleng Bekas', 'Kaca'], pcts: [45, 30, 15] },
    { title: 'warna seragam regu pramuka', cats: ['Cokelat', 'Hijau Daun', 'Biru Langit', 'Kuning Emas'], pcts: [35, 30, 20] },
    { title: 'permainan tradisional favorit', cats: ['Gobak Sodor', 'Egrang', 'Bentengan', 'Congklak'], pcts: [30, 25, 25] },
    { title: 'sayuran yang paling disukai', cats: ['Wortel', 'Bayam', 'Kangkung', 'Jagung Manis'], pcts: [35, 35, 15] },
    { title: 'alat musik tradisional pilihan', cats: ['Angklung', 'Gamelan', 'Kolintang', 'Suling Bambu'], pcts: [40, 25, 20] },
    { title: 'cabang lomba pramuka siaga', cats: ['PBB Tongkat', 'Sandi Morse', 'Pentas Seni', 'Menaksir Tinggi'], pcts: [30, 30, 25] },
    { title: 'pilihan karya hasta karya', cats: ['Anyaman Bambu', 'Origami Kertas', 'Bonsai Kawat', 'Gerabah Tanah Liat'], pcts: [35, 25, 20] },
    { title: 'jenis olahraga atletik', cats: ['Lari Estafet', 'Lompat Jauh', 'Tolak Peluru', 'Lempar Roket'], pcts: [40, 30, 15] },
    { title: 'kegiatan peduli lingkungan', cats: ['Menanam Pohon', 'Membersihkan Selokan', 'Membuat Kompos', 'Memilah Sampah'], pcts: [30, 35, 20] }
  ];

  for (let i = 1; i <= 20; i++) {
    const seed = i * 149;
    const s = sdSurveys[i - 1];
    const totalSiswa = 100 + i * 20; // 120, 140, 160, 180, 200, 220, 240...
    const sumPcts = s.pcts[0] + s.pcts[1] + s.pcts[2];
    const sisaPct = 100 - sumPcts;
    const targetCat = s.cats[3];
    const targetCount = Math.round((sisaPct / 100) * totalSiswa);

    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i % 2 === 1) {
      qTxt = `Diagram lingkaran data ${s.title} di suatu sekolah menunjukkan: ${s.cats[0]} ${s.pcts[0]}%, ${s.cats[1]} ${s.pcts[1]}%, ${s.cats[2]} ${s.pcts[2]}%, dan sisanya memilih ${targetCat}. Jika jumlah seluruh responden ada ${totalSiswa} siswa, banyak siswa yang memilih ${targetCat} adalah ...`;
      ans = `${targetCount} siswa`;
      w1 = `${targetCount + 10} siswa`;
      w2 = `${targetCount - 8} siswa`;
      w3 = `${Math.round((s.pcts[0] / 100) * totalSiswa)} siswa`;
      exp = `Persentase total lingkaran = 100%.
Persentase pemilih ${targetCat} = 100% - (${s.pcts[0]}% + ${s.pcts[1]}% + ${s.pcts[2]}%) = 100% - ${sumPcts}% = ${sisaPct}%.
Banyak siswa pemilih ${targetCat} = (${sisaPct} : 100) × ${totalSiswa} = ${targetCount} siswa.`;
      diag = 'Cari persentase kategori sisa dengan mengurangkan 100% dengan jumlah persentase kategori lain, lalu kalikan dengan total siswa.';
    } else {
      const count1 = Math.round((s.pcts[0] / 100) * totalSiswa);
      const selisih = count1 - targetCount;
      qTxt = `Dalam diagram lingkaran ${s.title} dari ${totalSiswa} siswa, tercatat: ${s.cats[0]} ${s.pcts[0]}%, ${s.cats[1]} ${s.pcts[1]}%, ${s.cats[2]} ${s.pcts[2]}%, dan sisanya memilih ${targetCat}. Selisih banyak siswa pemilih ${s.cats[0]} dan ${targetCat} adalah ...`;
      ans = `${selisih} siswa`;
      w1 = `${selisih + 12} siswa`;
      w2 = `${selisih - 10} siswa`;
      w3 = `${targetCount} siswa`;
      exp = `Persentase ${targetCat} = 100% - (${s.pcts[0]}% + ${s.pcts[1]}% + ${s.pcts[2]}%) = ${sisaPct}%.
Pemilih ${s.cats[0]} = ${s.pcts[0]}% × ${totalSiswa} = ${count1} siswa.
Pemilih ${targetCat} = ${sisaPct}% × ${totalSiswa} = ${targetCount} siswa.
Selisih keduanya = ${count1} - ${targetCount} = ${selisih} siswa.`;
      diag = 'Tentukan persentase kategori sisa terlebih dahulu, hitung banyak siswa pada masing-masing kategori, lalu kurangkan keduanya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    const pieSlices = [
      { label: s.cats[0], pct: s.pcts[0] },
      { label: s.cats[1], pct: s.pcts[1] },
      { label: s.cats[2], pct: s.pcts[2] },
      { label: targetCat, labelVal: '? %', pct: sisaPct }
    ];
    const svg = renderDiagramLingkaran(pieSlices, `Diagram Data ${s.title}`);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // HOTS (20) - Proporsi Diagram Lingkaran Siswa SD Bulat Pas
  for (let i = 1; i <= 20; i++) {
    const seed = i * 151;
    const totalSiswa = 200 + (i % 4) * 100; // 200, 300, 400, 500
    const pctA = 20 + (i % 3) * 10; // 20, 30, 40%
    const pctB = 25; // 25%
    const countA = (pctA / 100) * totalSiswa;
    const countB = (pctB / 100) * totalSiswa;
    const orgs = ['Regu Pramuka Siaga SD', 'Klub Sains Cilik SD', 'Palang Merah Remaja SD', 'Klub Literasi Cilik', 'Sanggar Tari Tradisional SD', 'Klub Paduan Suara Pelajar', 'Klub Futsal Cilik', 'Klub Dokter Kecil Sekolah', 'Klub Matematika Kreatif SD', 'Klub Jurnalistik Cilik', 'Komunitas Cilik Pecinta Alam', 'Klub Catur Siswa SD', 'Klub Bahasa Inggris Ceria', 'Sanggar Musik Angklung SD', 'Klub Senam Ceria Pelajar', 'Klub Taekwondo Usia Dini', 'Komunitas Sahabat Bumi SD', 'Klub Menggambar Ceria', 'Klub Robotika Cilik', 'Klub Bulu Tangkis Harapan'];

    const qTxt = `Dalam diagram lingkaran pemilihan ketua ${orgs[i - 1]}, kandidat A memperoleh ${pctA}% suara sah yang setara dengan ${countA} siswa. Jika kandidat B memperoleh ${pctB}% suara sah, banyak suara yang diperoleh kandidat B adalah ...`;
    ans = `${countB} siswa`; w1 = `${countB + 10} siswa`; w2 = `${countB - 10} siswa`; w3 = `${totalSiswa} siswa`;
    exp = `Total seluruh pemilih = ${countA} : (${pctA}/100) = ${totalSiswa} siswa.
Perolehan kandidat B = ${pctB}% × ${totalSiswa} = ${countB} siswa.`;
    diag = 'Cari total pemilih terlebih dahulu melalui persentase dan suara kandidat A, lalu hitung perolehan kandidat B.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    const sisaLain = 100 - (pctA + pctB);
    const pieSlices = [
      { label: 'Kandidat A', pct: pctA },
      { label: 'Kandidat B', pct: pctB },
      { label: 'Lainnya', pct: sisaLain }
    ];
    const svg = renderDiagramLingkaran(pieSlices, `Pemilihan ${orgs[i - 1]}`);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T8, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // ===========================================================================
  // TOPIK 9: Statistika Dasar: Mean (Rata-rata), Median, & Modus
  // ===========================================================================
  const T9 = 'Statistika Dasar: Mean (Rata-rata), Median, & Modus';

  // Mudah (20) - Modus Data Tunggal
  for (let i = 1; i <= 20; i++) {
    const seed = i * 157;
    const base = 65 + i;
    const modus = base + 5;
    const data = [base, modus, base + 2, modus, modus, base + 8];
    const subjects = ['matematika', 'IPA', 'bahasa Indonesia', 'IPS', 'PPKn', 'seni budaya', 'bahasa Inggris', 'penjaskes', 'agama', 'TIK', 'matematika', 'IPA', 'bahasa Indonesia', 'IPS', 'PPKn', 'seni budaya', 'bahasa Inggris', 'penjaskes', 'agama', 'TIK'];

    const qTxt = `Diberikan data nilai ulangan harian ${subjects[i - 1]} siswa: ${data.join(', ')}. Nilai modus dari data tersebut adalah ...`;
    ans = `${modus}`; w1 = `${base}`; w2 = `${base + 2}`; w3 = `${base + 8}`;
    exp = `Nilai ${modus} muncul paling sering yaitu sebanyak 3 kali, sehingga modusnya adalah ${modus}.`;
    diag = 'Modus adalah nilai data yang memiliki frekuensi kemunculan terbanyak.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sedang (40) - Median Data Ganjil (20) & Rata-rata Nilai (20)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 163;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const base = 30 + i;
      const sorted = [base, base + 2, base + 3, base + 5, base + 7, base + 8, base + 10];
      const median = sorted[3];
      const shuffled = [sorted[1], sorted[4], sorted[0], sorted[3], sorted[6], sorted[2], sorted[5]];
      const metrics = ['berat badan (kg) 7 atlet renang cilik', 'tinggi badan (cm) 7 bibit tanaman cabe', 'waktu lari (detik) 7 pelari estafet', 'usia (tahun) 7 peserta lomba menyanyi', 'skor ujian 7 siswa kelas V', 'berat panen melon (ons) 7 buah', 'tebal buku cerita (halaman) 7 komik', 'jumlah kelereng 7 anak komplek', 'hasil lompatan (cm) 7 atlet loncat', 'nilai praktikum 7 kelompok sains', 'panjang ikan lele (cm) 7 ekor', 'berat badan (kg) 7 siswa perempuan', 'tinggi badan (cm) 7 bibit tomat', 'skor kuis 7 peserta olimpiade', 'waktu renang (detik) 7 perenang gaya dada', 'banyak halaman novel 7 buku', 'jumlah stiker 7 kolektor anak', 'hasil lemparan (meter) 7 pelempar', 'usia (bulan) 7 balita di posyandu', 'nilai remedial 7 siswa'];

      qTxt = `Berikut data ${metrics[i - 1]}: ${shuffled.join(', ')}. Nilai median (nilai tengah) dari data tersebut adalah ...`;
      ans = `${median}`; w1 = `${median + 2}`; w2 = `${median - 2}`; w3 = `${sorted[0]}`;
      exp = `Urutkan data dari terkecil: ${sorted.join(', ')}.
Karena banyak data ganjil (n = 7), median adalah data ke-4 yaitu ${median}.`;
      diag = 'Urutkan seluruh data terlebih dahulu dari terkecil ke terbesar, lalu ambil nilai di posisi tengah.';
    } else {
      const idx = i - 20;
      const base = 70 + (idx % 5) * 2;
      const d = [base, base + 5, base + 10, base + 15, base + 20];
      const total = d.reduce((a, b) => a + b, 0);
      const mean = total / 5;
      const groups = ['kelompok mawar', 'kelompok melati', 'kelompok dahlia', 'kelompok anggrek', 'kelompok kenanga', 'kelompok cempaka', 'kelompok teratai', 'kelompok kamboja', 'kelompok tulip', 'kelompok edelweiss', 'kelompok rajawali', 'kelompok garuda', 'kelompok elang', 'kelompok merpati', 'kelompok kancil', 'kelompok singa', 'kelompok harimau', 'kelompok banteng', 'kelompok serigala', 'kelompok gajah'];

      qTxt = `Data nilai tugas matematika 5 siswa pada ${groups[idx - 1]} adalah ${d.join(', ')}. Nilai rata-rata (mean) dari data tersebut adalah ...`;
      ans = `${mean}`; w1 = `${mean + 2}`; w2 = `${mean - 2}`; w3 = `${total}`;
      exp = `Total nilai = ${d.join(' + ')} = ${total}.
Rata-rata = ${total} : 5 = ${mean}.`;
      diag = 'Jumlahkan semua nilai lalu bagi dengan banyak data (5).';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sulit (20) - Nilai Ulangan Susulan
  for (let i = 1; i <= 20; i++) {
    const seed = i * 167;
    const names = ['Rani', 'Budi', 'Siti', 'Edo', 'Lani', 'Dayu', 'Udin', 'Beni', 'Maya', 'Farhan', 'Zahra', 'Dimas', 'Tiara', 'Kevin', 'Nadia', 'Rizky', 'Salma', 'Arga', 'Putri', 'Fikri'];
    const sName = names[i - 1];
    const targetMean = 80 + (i % 4) * 2; // 80, 82, 84, 86
    const d1 = targetMean - 4 + (i % 3);
    const d2 = targetMean - 2;
    const d3 = targetMean + 1;
    const d4 = targetMean - 3;
    const sumAwal = d1 + d2 + d3 + d4;
    const butuhNilai = (targetMean * 5) - sumAwal;

    const qTxt = `${sName} telah mengikuti 4 kali ulangan matematika dengan perolehan nilai ${d1}, ${d2}, ${d3}, dan ${d4}. Agar nilai rata-rata dari 5 kali ulangan menjadi tepat ${targetMean}, nilai yang harus diperoleh ${sName} pada ulangan kelima adalah ...`;
    ans = `${butuhNilai}`; w1 = `${butuhNilai - 4}`; w2 = `${butuhNilai + 3}`; w3 = `${targetMean}`;
    exp = `Target total nilai = 5 × ${targetMean} = ${targetMean * 5}.
Total 4 ulangan awal = ${sumAwal}.
Nilai ulangan ke-5 = ${targetMean * 5} - ${sumAwal} = ${butuhNilai}.`;
    diag = 'Kalikan target rata-rata dengan 5 lalu kurangkan jumlah 4 nilai yang sudah diperoleh.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Median Data Genap & Jangkauan
  for (let i = 1; i <= 20; i++) {
    const seed = i * 173;
    const base = 145 + i;
    const sorted = [base, base + 2, base + 4, base + 6, base + 8, base + 10];
    const median = (sorted[2] + sorted[3]) / 2;
    const medianStr = String(median).replace('.', ',');
    const athletics = ['atlet loncat tinggi', 'atlet renang estafet', 'siswa tim voli inti', 'peserta paskibra sekolah', 'atlet bulutangkis junior', 'siswa regu senam irama', 'peserta tari kolosal', 'atlet karate cilik', 'siswa regu drum band', 'peserta pramuka garuda', 'atlet sepak takraw', 'atlet lompat jauh', 'peserta panahan junior', 'atlet anggar cilik', 'siswa paduan suara', 'atlet judo usia muda', 'peserta bela diri silat', 'atlet tenis meja', 'peserta baris-berbaris', 'siswa tim futsal'];

    const qTxt = `Data urut tinggi badan (cm) 6 ${athletics[i - 1]} adalah ${sorted.join(', ')}. Nilai median dari tinggi badan tersebut adalah ...`;
    ans = `${medianStr} cm`; w1 = `${sorted[2]} cm`; w2 = `${sorted[3]} cm`; w3 = `${median + 3} cm`;
    exp = `Karena jumlah data genap (n = 6), median adalah rata-rata data ke-3 dan ke-4: (${sorted[2]} + ${sorted[3]}) : 2 = ${medianStr} cm.`;
    diag = 'Jumlahkan dua data posisi tengah lalu bagi dua.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ===========================================================================
  // TOPIK 10: Aritmetika Sosial, Pecahan, Skala, KPK/FPB, Debit
  // ===========================================================================
  const T10 = 'Aritmetika Sosial, Pecahan, Skala, KPK/FPB, Debit';

  // Mudah (20) - FPB (10) & KPK (10)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 179;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const pairs = [
        [12, 18, 6], [14, 21, 7], [16, 24, 8], [20, 30, 10], [15, 25, 5],
        [18, 27, 9], [24, 36, 12], [28, 42, 14], [30, 45, 15], [32, 48, 16]
      ][i - 1];
      const a = pairs[0], b = pairs[1], fpb = pairs[2];
      qTxt = `Faktor persekutuan terbesar (FPB) dari pasangan bilangan ${a} dan ${b} adalah ...`;
      ans = `${fpb}`; w1 = `${fpb * 2}`; w2 = `${fpb - 1}`; w3 = `${a * b}`;
      exp = `Faktorisasi prima dari ${a} dan ${b} menghasilkan FPB = ${fpb}.`;
      diag = 'FPB diperoleh dari perkalian faktor prima sekutu berpangkat terkecil.';
    } else {
      const idx = i - 10;
      const pairs = [
        [4, 6, 12], [6, 8, 24], [6, 9, 18], [8, 12, 24], [9, 12, 36],
        [10, 15, 30], [12, 16, 48], [12, 18, 36], [15, 20, 60], [14, 21, 42]
      ][idx - 1];
      const a = pairs[0], b = pairs[1], kpk = pairs[2];
      qTxt = `Kelipatan persekutuan terkecil (KPK) dari pasangan bilangan ${a} dan ${b} adalah ...`;
      ans = `${kpk}`; w1 = `${kpk / 2}`; w2 = `${kpk + a}`; w3 = `${a * b}`;
      exp = `Faktorisasi prima dari ${a} dan ${b} menghasilkan KPK = ${kpk}.`;
      diag = 'KPK diperoleh dari perkalian semua faktor prima berpangkat terbesar.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sedang (40) - Skala Peta (15), Debit (15), Pecahan (10)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 181;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 15) {
      const cityPairs = [
        ['Jakarta', 'Bogor', 6, 1000000],
        ['Bandung', 'Cirebon', 8, 1500000],
        ['Semarang', 'Solo', 5, 2000000],
        ['Surabaya', 'Malang', 9, 1000000],
        ['Yogyakarta', 'Magelang', 7, 600000],
        ['Medan', 'Binjai', 4, 750000],
        ['Padang', 'Bukittinggi', 8, 1200000],
        ['Makassar', 'Maros', 5, 800000],
        ['Denpasar', 'Singaraja', 6, 1400000],
        ['Palembang', 'Prabumulih', 7, 1500000],
        ['Pontianak', 'Mempawah', 6, 1200000],
        ['Banjarmasin', 'Banjarbaru', 5, 700000],
        ['Balikpapan', 'Samarinda', 8, 1500000],
        ['Manado', 'Bitung', 6, 800000],
        ['Mataram', 'Praya', 5, 600000]
      ][i - 1];
      const c1 = cityPairs[0], c2 = cityPairs[1], cm = cityPairs[2], scaleVal = cityPairs[3];
      const jarakKm = (cm * scaleVal) / 100000;
      qTxt = `Jarak antara Kota ${c1} dan Kota ${c2} pada peta berskala 1 : ${scaleVal.toLocaleString('id-ID')} adalah ${cm} cm. Jarak sebenarnya kedua kota tersebut adalah ...`;
      ans = `${jarakKm} km`; w1 = `${jarakKm + 15} km`; w2 = `${jarakKm - 10} km`; w3 = `${jarakKm * 10} km`;
      exp = `Jarak sebenarnya = Jarak peta × skala = ${cm} × ${scaleVal} cm = ${cm * scaleVal} cm = ${jarakKm} km.`;
      diag = 'Kalikan jarak pada peta dengan faktor skala peta lalu ubah cm ke km (dibagi 100.000).';
    } else if (i <= 30) {
      const idx = i - 15;
      const vol = 600 + idx * 120; // liter
      const debit = 20 + (idx % 4) * 5; // liter/menit
      const waktuMenit = Math.round(vol / debit);
      const objects = ['tandon air mushola', 'kolam ikan koi', 'bak penampungan air sekolah', 'tangki air kebun', 'kolam pemandian anak', 'bak cuci pakaian asrama', 'tandon air rumah sakit', 'kolam hidroponik melon', 'tangki siram taman', 'bak penampungan air hujan', 'drum cadangan air bersih', 'kolam benih gurami', 'tangki pengabut tanaman', 'bak penampungan air kantin', 'kolam terpal lele'];

      qTxt = `Sebuah ${objects[idx - 1]} bervolume ${vol} liter dalam keadaan kosong diisi air melalui pipa dengan debit ${debit} liter/menit. Waktu yang diperlukan hingga terisi penuh adalah ...`;
      ans = `${waktuMenit} menit`; w1 = `${waktuMenit + 10} menit`; w2 = `${waktuMenit - 8} menit`; w3 = `${Math.round(waktuMenit / 2)} menit`;
      exp = `Waktu = Volume : Debit = ${vol} : ${debit} = ${waktuMenit} menit.`;
      diag = 'Bagi volume total wadah dengan debit aliran air.';
    } else {
      const idx = i - 30;
      const a = 1 + idx, b = 2 + idx;
      // Operasi pecahan
      qTxt = `Hasil perhitungan operasi pecahan 2 1/${a} + 1 1/${b} dalam bentuk pecahan paling sederhana adalah ...`;
      const num = 2 * a * b + b + a * b + a;
      const den = a * b;
      const bulat = Math.floor(num / den);
      const sisaNum = num % den;
      ans = `${bulat} ${sisaNum}/${den}`;
      w1 = `${bulat + 1} 1/${den}`;
      w2 = `${bulat} ${sisaNum + 1}/${den}`;
      w3 = `${bulat - 1} ${sisaNum}/${den}`;
      exp = `Ubah ke pecahan biasa lalu samakan penyebutnya: (2 + 1) + (1/${a} + 1/${b}) = 3 + (${a + b}/${den}) = ${bulat} ${sisaNum}/${den}.`;
      diag = 'Samakan penyebut kedua pecahan sebelum menjumlahkan pembilangnya.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sulit (20) - Soal Cerita KPK & FPB Nyata
  for (let i = 1; i <= 20; i++) {
    const seed = i * 191;
    let qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const t1 = 3 + i, t2 = 4 + (i % 3);
      // find KPK of t1 and t2
      function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
      const kpkSec = (t1 * t2) / gcd(t1, t2);
      const colors = ['Lampu merah dan lampu biru', 'Lampu hias kuning dan hijau', 'Lampu mercusuar dan menara', 'Lampu strobo ambulans dan damkar', 'Lampu reklame neon merah dan ungu', 'Lampu taman bundar dan tiang', 'Lampu indikator mesin A dan mesin B', 'Lampu penerangan jalan timur dan barat', 'Lampu panggung biru dan jingga', 'Lampu hazard truk dan mobil'];

      qTxt = `${colors[i - 1]} diatur menyala berkala. Lampu pertama menyala setiap ${t1} detik sekali dan lampu kedua menyala setiap ${t2} detik sekali. Jika keduanya menyala bersama pada detik ke-0, kedua lampu akan menyala bersamaan kembali pada detik ke-...`;
      ans = `${kpkSec} detik`; w1 = `${kpkSec * 2} detik`; w2 = `${t1 * t2} detik`; w3 = `${kpkSec + t1} detik`;
      exp = `Cari KPK dari ${t1} dan ${t2} = ${kpkSec} detik.`;
      diag = 'Gunakan kelipatan persekutuan terkecil (KPK) untuk menentukan waktu berulang bersamaan.';
    } else {
      const idx = i - 10;
      const n1 = 24 + idx * 4, n2 = 36 + idx * 6;
      function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
      const fpbVal = gcd(n1, n2);
      const goods = ['buku tulis dan pensil warna', 'kue bolu dan donat cokelat', 'apel malang dan jeruk manis', 'bungkus mie dan kaleng sarden', 'biskuit gandum dan permen susu', 'kotak pensil dan penghapus karet', 'seragam kaos dan topi pramuka', 'sabun mandi dan pasta gigi', 'botol kecap dan saus tomat', 'minyak goreng dan gula pasir'];

      qTxt = `Ibu guru ingin membagikan ${n1} buah dan ${n2} buah ${goods[idx - 1]} kepada sebanyak mungkin murid secara merata tanpa bersisa. Jumlah murid terbanyak yang dapat menerima paket bingkisan tersebut adalah ...`;
      ans = `${fpbVal} orang`; w1 = `${fpbVal / 2} orang`; w2 = `${fpbVal * 2} orang`; w3 = `${fpbVal + 4} orang`;
      exp = `Cari FPB dari ${n1} dan ${n2} = ${fpbVal} orang.`;
      diag = 'Gunakan faktor persekutuan terbesar (FPB) untuk pembagian bingkisan merata terbanyak.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Aritmetika Sosial: Diskon, Untung, Rugi
  for (let i = 1; i <= 20; i++) {
    const seed = i * 197;
    const hargaAwal = 100000 + i * 25000;
    const diskonPct = 10 + (i % 4) * 5; // 10%, 15%, 20%, 25%
    const potongan = (diskonPct / 100) * hargaAwal;
    const hargaBayar = hargaAwal - potongan;
    const items = ['sepasang sepatu lari', 'jaket parasut musim dingin', 'tas ransel laptop', 'kemeja batik lengan panjang', 'helm keselamatan bersepeda', 'celana jeans denim', 'jam tangan petualang', 'raket bulutangkis karbon', 'kompor gas portabel', 'kamera saku digital', 'koper pakaian roda empat', 'headphone peredam bising', 'speaker nirkabel bluetooth', 'tenda kemah kapasitas 4', 'sleeping bag hangat', 'sepatu sepak bola rumput', 'gitar akustik pemula', 'papan luncur skateboard', 'jaket kulit berkendara', 'alat pemanggang listrik'];

    const qTxt = `Sebuah toko perlengkapan memberikan potongan harga (diskon) sebesar ${diskonPct}% untuk pembelian ${items[i - 1]} yang memiliki label harga Rp ${hargaAwal.toLocaleString('id-ID')}. Uang yang harus dibayarkan pembeli di kasir adalah ...`;
    ans = `Rp ${hargaBayar.toLocaleString('id-ID')}`;
    w1 = `Rp ${(hargaBayar + 15000).toLocaleString('id-ID')}`;
    w2 = `Rp ${potongan.toLocaleString('id-ID')}`;
    w3 = `Rp ${(hargaAwal - 10000).toLocaleString('id-ID')}`;
    exp = `Potongan harga = ${diskonPct}% × Rp ${hargaAwal.toLocaleString('id-ID')} = Rp ${potongan.toLocaleString('id-ID')}.
Uang yang harus dibayar = Rp ${hargaAwal.toLocaleString('id-ID')} - Rp ${potongan.toLocaleString('id-ID')} = Rp ${hargaBayar.toLocaleString('id-ID')}.`;
    diag = 'Hitung nominal diskon dari persentase dikalikan harga awal, lalu kurangkan harga awal dengan nilai diskon.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T10, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  return list;
}

module.exports = { buildMathQuestions };
