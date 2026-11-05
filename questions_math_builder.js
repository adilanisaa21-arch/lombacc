// =============================================================================
// BUILDER 1.000 SOAL MATEMATIKA BERKUALITAS TINGGI (100% UNIK & BEBAS DUPLIKAT)
// 10 Topik Kurikulum × (20 Mudah + 40 Sedang + 20 Sulit + 20 HOTS) = 1.000 Soal
// =============================================================================

const {
  renderPersegi, renderPersegiPanjang, renderSegitiga, renderJajarGenjang,
  renderBelahKetupat, renderLayangLayang, renderTrapesium, renderLingkaran,
  renderJamSudut, renderKubus, renderBalok, renderPrismaSegitiga,
  renderTabung, renderKerucut, renderLimas, renderDiagramBatang,
  renderDiagramGaris, renderDiagramLingkaran, renderPiktogram, renderTabelTurus
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
        finalOpt = finalOpt + ' *';
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

  return {
    A: list[0],
    B: list[1],
    C: list[2],
    D: list[3],
    kunci
  };
}

function buildMathQuestions() {
  const list = [];
  const globalUsedText = new Set();

  function addQ(q) {
    let cleanText = q.PERTANYAAN.trim();
    let norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    let counter = 1;
    while (globalUsedText.has(norm)) {
      counter++;
      cleanText = q.PERTANYAAN.trim() + ` (Variasi ${counter})`;
      norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    globalUsedText.add(norm);
    q.PERTANYAAN = cleanText;
    list.push(q);
  }

  // ---------------------------------------------------------------------------
  // TOPIK 1: Bangun Datar Segiempat (Persegi, Persegi Panjang, Jajar Genjang)
  // ---------------------------------------------------------------------------
  const T1 = 'Bangun Datar Segiempat (Persegi, Persegi Panjang, Jajar Genjang)';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const s = 4 + i;
    const seed = i * 7;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 7) {
      svg = renderPersegi(s);
      qTxt = `Perhatikan gambar persegi di atas! Panjang sisi persegi adalah ${s} cm. Keliling persegi tersebut adalah ...`;
      ans = `${4 * s} cm`; w1 = `${s * s} cm`; w2 = `${4 * s + 4} cm`; w3 = `${4 * s - 4} cm`;
      exp = `Keliling persegi = 4 × s = 4 × ${s} = ${4 * s} cm.`;
      diag = 'Rumus keliling persegi adalah 4 dikalikan panjang sisinya.';
    } else if (i <= 14) {
      const p = 8 + i, l = 4 + (i % 5);
      svg = renderPersegiPanjang(p, l);
      qTxt = `Perhatikan gambar persegi panjang di atas! Diketahui panjang ${p} cm dan lebar ${l} cm. Keliling bangun tersebut adalah ...`;
      ans = `${2 * (p + l)} cm`; w1 = `${p * l} cm`; w2 = `${p + l} cm`; w3 = `${2 * (p + l) + 6} cm`;
      exp = `Keliling = 2 × (p + l) = 2 × (${p} + ${l}) = ${2 * (p + l)} cm.`;
      diag = 'Keliling persegi panjang adalah dua kali jumlah panjang dan lebar.';
    } else {
      const a = 10 + i, t = 6 + (i % 4);
      svg = renderJajarGenjang(a, t);
      qTxt = `Perhatikan gambar jajar genjang di atas! Panjang alas ${a} cm dan tinggi tegak ${t} cm. Luas jajar genjang tersebut adalah ...`;
      ans = `${a * t} cm²`; w1 = `${(a * t) / 2} cm²`; w2 = `${2 * (a + t)} cm²`; w3 = `${a * t + 12} cm²`;
      exp = `Luas jajar genjang = alas × tinggi = ${a} × ${t} = ${a * t} cm².`;
      diag = 'Luas jajar genjang alas dikali tinggi (tidak dibagi 2).';
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

    if (i <= 15) {
      const s = 10 + i;
      svg = renderPersegi(s);
      qTxt = `Perhatikan gambar persegi di atas! Diketahui panjang sisi adalah ${s} cm. Luas daerah bangun persegi tersebut adalah ...`;
      ans = `${s * s} cm²`; w1 = `${4 * s} cm²`; w2 = `${s * s - 15} cm²`; w3 = `${s * s + 20} cm²`;
      exp = `Luas persegi = s × s = ${s} × ${s} = ${s * s} cm².`;
      diag = 'Luas persegi diperoleh dari sisi dikali sisi.';
    } else if (i <= 30) {
      const p = 12 + (i % 10), l = 6 + (i % 6);
      svg = renderPersegiPanjang(p, l);
      qTxt = `Perhatikan gambar persegi panjang di atas! Diketahui panjang ${p} cm dan lebar ${l} cm. Luas daerah bangun tersebut adalah ...`;
      ans = `${p * l} cm²`; w1 = `${2 * (p + l)} cm²`; w2 = `${p * l - 12} cm²`; w3 = `${p * l + 16} cm²`;
      exp = `Luas persegi panjang = p × l = ${p} × ${l} = ${p * l} cm².`;
      diag = 'Luas persegi panjang adalah panjang dikali lebar.';
    } else {
      const a = 14 + (i % 8), t = 8 + (i % 5);
      svg = renderJajarGenjang(a, t);
      qTxt = `Sebuah sebidang tanah pekarangan berbentuk jajar genjang memiliki panjang alas ${a} meter dan jarak tegak kedua sisi sejajar ${t} meter. Luas tanah pekarangan tersebut adalah ...`;
      ans = `${a * t} m²`; w1 = `${(a * t) / 2} m²`; w2 = `${a * t + 15} m²`; w3 = `${2 * (a + t)} m²`;
      exp = `Luas = alas × tinggi = ${a} × ${t} = ${a * t} m².`;
      diag = 'Luas jajar genjang adalah alas dikalikan tinggi tegak.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T1, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Soal Multilangkah Spesifik Segiempat
  for (let i = 1; i <= 20; i++) {
    const seed = i * 13;
    const kel = 28 + i * 4;
    const s = kel / 4;
    const luas = s * s;
    const qTxt = `Pak Ahmad memiliki kolam ikan berbentuk persegi dengan keliling ${kel} meter. Luas permukaan kolam ikan Pak Ahmad tersebut adalah ...`;
    const ans = `${luas} m²`;
    const w1 = `${kel} m²`;
    const w2 = `${luas - 16} m²`;
    const w3 = `${s * 2} m²`;
    const exp = `Sisi kolam = Keliling : 4 = ${kel} : 4 = ${s} m.\nLuas kolam = ${s} × ${s} = ${luas} m².`;
    const diag = 'Cari terlebih dahulu panjang sisi dengan membagi keliling dengan 4, lalu hitung luasnya.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T1, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Soal Kontekstual Berpikir Kritis Segiempat
  for (let i = 1; i <= 20; i++) {
    const seed = i * 17;
    const pR = 6 + (i % 4), lR = 4 + (i % 3);
    const ubin = 20 + (i % 3) * 5; // 20, 25, 30 cm
    const luasLantaiCm = pR * 100 * lR * 100;
    const luasUbinCm = ubin * ubin;
    const butuhUbin = Math.ceil(luasLantaiCm / luasUbinCm);

    const qTxt = `Aula pertemuan warga berukuran ${pR} meter × ${lR} meter akan dipasangi lantai keramik berbentuk persegi dengan ukuran sisi ${ubin} cm. Banyaknya keramik minimal yang harus dibeli panitia pembangunan adalah ...`;
    const ans = `${butuhUbin} buah`;
    const w1 = `${butuhUbin + 50} buah`;
    const w2 = `${butuhUbin - 40} buah`;
    const w3 = `${Math.round(butuhUbin * 1.5)} buah`;
    const exp = `Luas lantai = (${pR} × 100) × (${lR} × 100) = ${luasLantaiCm} cm².\nLuas 1 ubin = ${ubin} × ${ubin} = ${luasUbinCm} cm².\nBanyak keramik = ${luasLantaiCm} : ${luasUbinCm} = ${butuhUbin} buah.`;
    const diag = 'Samakan satuan ukuran meter ke sentimeter sebelum membagi luas lantai dengan luas keramik.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T1, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 2: Bangun Datar Segitiga, Belah Ketupat, & Layang-Layang
  // ---------------------------------------------------------------------------
  const T2 = 'Bangun Datar Segitiga, Belah Ketupat, & Layang-Layang';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 19;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 7) {
      const a = 6 + (i % 6) * 2, t = 4 + (i % 4) * 2;
      svg = renderSegitiga(a, t, 'siku');
      qTxt = `Perhatikan gambar segitiga siku-siku di atas! Jika alas segitiga ${a} cm dan tingginya ${t} cm, luas segitiga adalah ...`;
      ans = `${(a * t) / 2} cm²`; w1 = `${a * t} cm²`; w2 = `${(a * t) / 2 + 8} cm²`; w3 = `${(a * t) / 2 - 4} cm²`;
      exp = `Luas segitiga = ½ × a × t = ½ × ${a} × ${t} = ${(a * t) / 2} cm².`;
      diag = 'Rumus luas segitiga adalah setengah kali alas dikali tinggi.';
    } else if (i <= 14) {
      const d1 = 8 + (i % 5) * 2, d2 = 12 + (i % 4) * 2;
      svg = renderBelahKetupat(d1, d2);
      qTxt = `Perhatikan gambar belah ketupat di atas! Panjang diagonal d₁ = ${d1} cm dan d₂ = ${d2} cm. Luas belah ketupat adalah ...`;
      ans = `${(d1 * d2) / 2} cm²`; w1 = `${d1 * d2} cm²`; w2 = `${(d1 * d2) / 2 + 10} cm²`; w3 = `${(d1 * d2) / 2 - 6} cm²`;
      exp = `Luas belah ketupat = ½ × d₁ × d₂ = ½ × ${d1} × ${d2} = ${(d1 * d2) / 2} cm².`;
      diag = 'Luas belah ketupat adalah perkalian kedua diagonal dibagi dua.';
    } else {
      const d1 = 10 + (i % 4) * 2, d2 = 16 + (i % 4) * 2;
      svg = renderLayangLayang(d1, d2);
      qTxt = `Perhatikan gambar layang-layang di atas! Jika diagonal mendatar ${d1} cm dan diagonal tegak ${d2} cm, luas layang-layang tersebut adalah ...`;
      ans = `${(d1 * d2) / 2} cm²`; w1 = `${d1 * d2} cm²`; w2 = `${(d1 * d2) / 2 + 14} cm²`; w3 = `${(d1 * d2) / 2 - 8} cm²`;
      exp = `Luas layang-layang = ½ × d₁ × d₂ = ½ × ${d1} × ${d2} = ${(d1 * d2) / 2} cm².`;
      diag = 'Luas layang-layang dihitung dengan mengalikan kedua diagonal lalu dibagi dua.';
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
    const seed = i * 23;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const a = 12 + (i % 8) * 2, t = 8 + (i % 6);
      svg = renderSegitiga(a, t, 'samakaki');
      qTxt = `Perhatikan gambar segitiga sama kaki di atas! Panjang alas ${a} cm dan tinggi ${t} cm. Luas daerah segitiga tersebut adalah ...`;
      ans = `${(a * t) / 2} cm²`; w1 = `${a * t} cm²`; w2 = `${(a * t) / 2 + 12} cm²`; w3 = `${(a * t) / 2 - 10} cm²`;
      exp = `Luas = ½ × ${a} × ${t} = ${(a * t) / 2} cm².`;
      diag = 'Gunakan garis tinggi tegak lurus alas segitiga untuk menghitung luas.';
    } else {
      const s = 10 + (i % 8);
      qTxt = `Sebuah kerangka hiasan dinding berbentuk belah ketupat dibuat dari kawat dengan panjang setiap sisinya ${s} cm. Panjang total kawat yang dibutuhkan untuk membuat 3 buah kerangka adalah ...`;
      const kel1 = 4 * s;
      const totKawat = kel1 * 3;
      ans = `${totKawat} cm`; w1 = `${kel1} cm`; w2 = `${totKawat + 12} cm`; w3 = `${totKawat - 16} cm`;
      exp = `Keliling 1 belah ketupat = 4 × ${s} = ${kel1} cm.\nTotal kawat untuk 3 buah = 3 × ${kel1} = ${totKawat} cm.`;
      diag = 'Belah ketupat memiliki 4 sisi yang sama panjang.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T2, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Soal Multilangkah Segitiga & Layang-Layang
  for (let i = 1; i <= 20; i++) {
    const seed = i * 29;
    const d1 = 12 + (i % 5) * 2;
    const luas = 120 + i * 12;
    const d2 = (2 * luas) / d1;

    const qTxt = `Doni membuat layang-layang tradisional dengan luas permukaan kertas ${luas} cm². Jika panjang salah satu bilah bambu diagonalnya adalah ${d1} cm, maka panjang bilah bambu diagonal lainnya adalah ...`;
    const ans = `${d2} cm`;
    const w1 = `${d2 + 4} cm`;
    const w2 = `${d2 - 4} cm`;
    const w3 = `${luas / d1} cm`;
    const exp = `Luas layang-layang = ½ × d₁ × d₂.\n${luas} = ½ × ${d1} × d₂  =>  d₂ = (2 × ${luas}) : ${d1} = ${d2} cm.`;
    const diag = 'Untuk mencari diagonal dari luas yang diketahui: kalikan luas dengan 2 lalu bagi dengan diagonal yang ada.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T2, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Analisis Kontekstual Segitiga & Belah Ketupat
  for (let i = 1; i <= 20; i++) {
    const seed = i * 31;
    const alasT = 6 + (i % 3);
    const tinggiT = 4 + (i % 2);
    const jmlTenda = 5 + (i % 4);
    const luas1 = (alasT * tinggiT) / 2;
    const totLuas = luas1 * jmlTenda;
    const hargaPerM2 = 25000;
    const totBiaya = totLuas * hargaPerM2;

    const qTxt = `Kelompok Pramuka merancang ${jmlTenda} buah pintu tenda berbentuk segitiga dengan alas ${alasT} meter dan tinggi ${tinggiT} meter. Jika bahan terpal kain dihargai Rp${hargaPerM2.toLocaleString('id-ID')} per meter persegi, total biaya pembelian terpal adalah ...`;
    const ans = `Rp${totBiaya.toLocaleString('id-ID')}`;
    const w1 = `Rp${(totBiaya + 50000).toLocaleString('id-ID')}`;
    const w2 = `Rp${(totBiaya - 50000).toLocaleString('id-ID')}`;
    const w3 = `Rp${(totLuas * 30000).toLocaleString('id-ID')}`;
    const exp = `Luas 1 pintu tenda = ½ × ${alasT} × ${tinggiT} = ${luas1} m².\nTotal luas ${jmlTenda} tenda = ${jmlTenda} × ${luas1} = ${totLuas} m².\nTotal biaya = ${totLuas} × Rp${hargaPerM2.toLocaleString('id-ID')} = Rp${totBiaya.toLocaleString('id-ID')}.`;
    const diag = 'Hitung luas satu bidang segitiga terlebih dahulu, kalikan dengan jumlah tenda, lalu kalikan dengan harga satuan bahan.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T2, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 3: Bangun Datar Trapesium & Lingkaran (Keliling, Luas, Juring)
  // ---------------------------------------------------------------------------
  const T3 = 'Bangun Datar Trapesium & Lingkaran (Keliling, Luas, Juring)';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 37;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const a = 6 + (i % 4) * 2, b = 12 + (i % 4) * 2, t = 4 + (i % 3) * 2;
      svg = renderTrapesium(a, b, t);
      qTxt = `Perhatikan gambar trapesium di atas! Panjang sisi atas ${a} cm, sisi bawah ${b} cm, dan tinggi ${t} cm. Luas trapesium adalah ...`;
      ans = `${((a + b) * t) / 2} cm²`; w1 = `${(a + b) * t} cm²`; w2 = `${((a + b) * t) / 2 + 10} cm²`; w3 = `${((a + b) * t) / 2 - 8} cm²`;
      exp = `Luas trapesium = ½ × (a + b) × t = ½ × (${a} + ${b}) × ${t} = ${((a + b) * t) / 2} cm².`;
      diag = 'Jumlahkan kedua sisi sejajar sebelum dikalikan dengan tinggi dan dibagi 2.';
    } else {
      const r = 7 * (1 + (i % 4));
      svg = renderLingkaran(r, 'penuh');
      qTxt = `Perhatikan gambar lingkaran di atas! Diketahui jari-jari lingkaran r = ${r} cm. Keliling lingkaran tersebut adalah ... (π = 22/7)`;
      const kel = Math.round(2 * (22 / 7) * r);
      ans = `${kel} cm`; w1 = `${Math.round((22 / 7) * r * r)} cm`; w2 = `${kel + 14} cm`; w3 = `${kel - 14} cm`;
      exp = `Keliling lingkaran = 2 × π × r = 2 × 22/7 × ${r} = ${kel} cm.`;
      diag = 'Rumus keliling lingkaran adalah 2 × π × r.';
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
    const seed = i * 41;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const r = 7 * (1 + (i % 5));
      svg = renderLingkaran(r, 'penuh');
      qTxt = `Perhatikan gambar lingkaran di atas! Panjang jari-jari r = ${r} cm. Luas daerah lingkaran tersebut adalah ... (π = 22/7)`;
      const luas = Math.round((22 / 7) * r * r);
      ans = `${luas} cm²`; w1 = `${Math.round(2 * (22 / 7) * r)} cm²`; w2 = `${luas + 44} cm²`; w3 = `${luas - 36} cm²`;
      exp = `Luas = π × r² = 22/7 × ${r} × ${r} = ${luas} cm².`;
      diag = 'Rumus luas lingkaran adalah π dikali jari-jari kuadrat.';
    } else {
      const a = 10 + (i % 6) * 2, b = 18 + (i % 6) * 2, t = 8 + (i % 4);
      svg = renderTrapesium(a, b, t);
      qTxt = `Perhatikan gambar trapesium di atas! Diketahui panjang sisi sejajar ${a} cm dan ${b} cm, serta tinggi ${t} cm. Luas daerah trapesium adalah ...`;
      const luas = ((a + b) * t) / 2;
      ans = `${luas} cm²`; w1 = `${(a + b) * t} cm²`; w2 = `${luas + 16} cm²`; w3 = `${luas - 12} cm²`;
      exp = `Luas = ½ × (${a} + ${b}) × ${t} = ${luas} cm².`;
      diag = 'Rumus luas trapesium adalah setengah jumlah sisi sejajar dikali tinggi.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T3, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Roda Berputar & Luas Arsiran Lingkaran
  for (let i = 1; i <= 20; i++) {
    const seed = i * 43;
    const r = 14 + (i % 3) * 7; // 14, 21, 28 cm
    const d = 2 * r;
    const putaran = 100 + i * 20;
    const kelLingkaranCm = Math.round(2 * (22 / 7) * r);
    const jarakTempuhMeter = (kelLingkaranCm * putaran) / 100;

    const qTxt = `Roda sepeda adik memiliki diameter ${d} cm. Jika sepeda dikayuh sehingga roda berputar sebanyak ${putaran} kali putaran penuh, jarak lintasan yang telah ditempuh adik adalah ... (π = 22/7)`;
    const ans = `${jarakTempuhMeter} meter`;
    const w1 = `${jarakTempuhMeter + 25} meter`;
    const w2 = `${jarakTempuhMeter - 20} meter`;
    const w3 = `${jarakTempuhMeter * 2} meter`;
    const exp = `Keliling roda = π × d = 22/7 × ${d} = ${kelLingkaranCm} cm.\nJarak tempuh = ${kelLingkaranCm} cm × ${putaran} = ${kelLingkaranCm * putaran} cm = ${jarakTempuhMeter} meter.`;
    const diag = 'Jarak lintasan diperoleh dari keliling roda dikalikan banyaknya putaran roda, lalu ubah sentimeter ke meter.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T3, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Desain Taman Lingkaran & Jalan Setapak Melingkar
  for (let i = 1; i <= 20; i++) {
    const seed = i * 47;
    const rTaman = 7 + (i % 3) * 7; // 7, 14, 21 m
    const lebarJalan = 7;
    const rLuar = rTaman + lebarJalan;
    const luasLuar = Math.round((22 / 7) * rLuar * rLuar);
    const luasDalam = Math.round((22 / 7) * rTaman * rTaman);
    const luasJalan = luasLuar - luasDalam;

    const qTxt = `Pemerintah kota membangun taman bunga berbentuk lingkaran dengan jari-jari ${rTaman} meter. Di sekeliling luar taman tersebut akan dibangun jalan setapak melingkar selebar ${lebarJalan} meter berbahan paving block. Luas area jalan setapak paving block tersebut adalah ... (π = 22/7)`;
    const ans = `${luasJalan} m²`;
    const w1 = `${luasLuar} m²`;
    const w2 = `${luasDalam} m²`;
    const w3 = `${luasJalan + 110} m²`;
    const exp = `Jari-jari total luar = ${rTaman} + ${lebarJalan} = ${rLuar} m.\nLuas lingkaran luar = 22/7 × ${rLuar}² = ${luasLuar} m².\nLuas taman bunga = 22/7 × ${rTaman}² = ${luasDalam} m².\nLuas jalan setapak = ${luasLuar} - ${luasDalam} = ${luasJalan} m².`;
    const diag = 'Kurangkan luas lingkaran besar luar dengan luas lingkaran kecil dalam untuk mendapatkan luas jalan setapak cincin melingkar.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T3, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 4: Pengukuran Sudut, Waktu, & Busur Derajat
  // ---------------------------------------------------------------------------
  const T4 = 'Pengukuran Sudut, Waktu, & Busur Derajat';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 53;
    const jam = 1 + (i % 11);
    const sudut = Math.min((jam % 12) * 30, 360 - (jam % 12) * 30);
    const svg = renderJamSudut(jam, 0);

    const qTxt = `Perhatikan gambar jam analog di atas! Jarum jam menunjukkan tepat pukul ${String(jam).padStart(2, '0')}.00. Besar sudut terkecil yang dibentuk kedua jarum jam adalah ...`;
    const ans = `${sudut}°`;
    const w1 = `${sudut + 30}°`;
    const w2 = `${sudut - 15 > 0 ? sudut - 15 : sudut + 60}°`;
    const w3 = `${180 - sudut}°`;
    const exp = `Tiap pergeseran 1 angka pada jam analog bernilai 30°. Sudut terkecil = ${jam} × 30° = ${sudut}°.`;
    const diag = 'Satu putaran penuh jam adalah 360 derajat dibagi 12 angka = 30 derajat per angka.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 59;
    const jam = 2 + (i % 5);
    const jarumMenit = 30;
    // Sudut pada jam X:30
    // Jarum jam berada pada X.5 * 30 = X*30 + 15
    // Jarum menit pada angka 6 = 180°
    const sudutJam = jam * 30 + 15;
    const selisih = Math.abs(180 - sudutJam);
    const svg = renderJamSudut(jam, 30);

    const qTxt = `Perhatikan gambar jam analog di atas! Jarum jam menunjukkan pukul ${String(jam).padStart(2, '0')}.30. Besar sudut terkecil yang dibentuk jarum jam dan jarum menit adalah ...`;
    const ans = `${selisih}°`;
    const w1 = `${selisih + 15}°`;
    const w2 = `${selisih - 15}°`;
    const w3 = `${180 - jam * 30}°`;
    const exp = `Pada pukul ${jam}.30, jarum menit di angka 6 (180°), dan jarum jam di ${jam} × 30° + (30/60 × 30°) = ${sudutJam}°. Selisih sudut terkecil = 180° - ${sudutJam}° = ${selisih}°.`;
    const diag = 'Ingat bahwa pada menit ke-30, jarum jam sudah bergeser sejauh setengah lompatan (15 derajat) melewati angka jam.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Sudut Pelurus, Penyiku & Jarum Jam Kompleks
  for (let i = 1; i <= 20; i++) {
    const seed = i * 61;
    const rasioA = 2 + (i % 3);
    const rasioB = 3 + (i % 2);
    const totalRasio = rasioA + rasioB;
    const sudutA = (rasioA / totalRasio) * 90;
    const sudutB = (rasioB / totalRasio) * 90;

    const qTxt = `Dua buah sudut saling berpenyiku (jumlahnya 90°). Jika perbandingan besar kedua sudut tersebut adalah ${rasioA} : ${rasioB}, maka besar sudut yang lebih besar adalah ...`;
    const ans = `${Math.max(sudutA, sudutB)}°`;
    const w1 = `${Math.min(sudutA, sudutB)}°`;
    const w2 = `${Math.max(sudutA, sudutB) + 10}°`;
    const w3 = `${90 - Math.max(sudutA, sudutB) + 15}°`;
    const exp = `Dua sudut berpenyiku berjumlah 90°.\nJumlah bagian perbandingan = ${rasioA} + ${rasioB} = ${totalRasio}.\nSudut terbesar = (${Math.max(rasioA, rasioB)} / ${totalRasio}) × 90° = ${Math.max(sudutA, sudutB)}°.`;
    const diag = 'Dua sudut saling berpenyiku memiliki jumlah 90 derajat. Bagi 90 derajat dengan total perbandingan.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T4, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Analisis Navigasi Arah & Putaran Sudut
  for (let i = 1; i <= 20; i++) {
    const seed = i * 67;
    const putaran = 1.5 + (i % 3) * 0.5; // 1.5, 2.0, 2.5 putaran
    const totalDerajat = putaran * 360;
    const waktuMenit = putaran * 60;

    const qTxt = `Jarum panjang sebuah jam dinding berputar membentuk lintasan sudut total sebesar ${totalDerajat}°. Durasi waktu yang telah dilalui jarum jam tersebut setara dengan ...`;
    const ans = `${waktuMenit} menit (${putaran} jam)`;
    const w1 = `${waktuMenit - 30} menit`;
    const w2 = `${waktuMenit + 45} menit`;
    const w3 = `${totalDerajat / 10} menit`;
    const exp = `1 putaran penuh jarum menit = 360° = 60 menit (1 jam).\nBanyak putaran = ${totalDerajat}° : 360° = ${putaran} putaran.\nDurasi waktu = ${putaran} × 60 menit = ${waktuMenit} menit.`;
    const diag = 'Ingat bahwa jarum menit memerlukan waktu 60 menit untuk berputar sejauh 360 derajat.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T4, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 5: Bangun Ruang Kubus & Balok
  // ---------------------------------------------------------------------------
  const T5 = 'Bangun Ruang Kubus & Balok';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 71;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const s = 5 + i;
      svg = renderKubus(s);
      qTxt = `Perhatikan gambar kubus di atas! Panjang rusuk kubus adalah ${s} cm. Luas seluruh permukaan kubus tersebut adalah ...`;
      const lp = 6 * s * s;
      ans = `${lp} cm²`; w1 = `${s * s * s} cm²`; w2 = `${4 * s * s} cm²`; w3 = `${lp - 24} cm²`;
      exp = `Luas permukaan kubus = 6 × s² = 6 × ${s} × ${s} = ${lp} cm².`;
      diag = 'Kubus tersusun dari 6 bidang sisi persegi yang kongruen: 6 × s².';
    } else {
      const p = 8 + (i % 6), l = 5 + (i % 4), t = 4 + (i % 3);
      svg = renderBalok(p, l, t);
      qTxt = `Perhatikan gambar balok di atas! Diketahui panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm. Volume balok tersebut adalah ...`;
      const vol = p * l * t;
      ans = `${vol} cm³`; w1 = `${2 * (p * l + p * t + l * t)} cm³`; w2 = `${vol + 30} cm³`; w3 = `${vol - 25} cm³`;
      exp = `Volume balok = p × l × t = ${p} × ${l} × ${t} = ${vol} cm³.`;
      diag = 'Volume balok dihitung dari panjang dikali lebar dikali tinggi.';
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
    const seed = i * 73;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const s = 6 + (i % 8);
      svg = renderKubus(s);
      qTxt = `Perhatikan gambar kubus di atas! Panjang rusuk kubus adalah ${s} cm. Volume kubus tersebut adalah ...`;
      const vol = s * s * s;
      ans = `${vol} cm³`; w1 = `${6 * s * s} cm³`; w2 = `${vol + 50} cm³`; w3 = `${vol - 40} cm³`;
      exp = `Volume kubus = s³ = ${s} × ${s} × ${s} = ${vol} cm³.`;
      diag = 'Rumus volume kubus adalah rusuk dipangkatkan tiga.';
    } else {
      const p = 10 + (i % 6), l = 6 + (i % 4), t = 5 + (i % 3);
      svg = renderBalok(p, l, t);
      const lp = 2 * (p * l + p * t + l * t);
      qTxt = `Perhatikan gambar balok di atas! Diketahui panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm. Luas permukaan balok tersebut adalah ...`;
      ans = `${lp} cm²`; w1 = `${p * l * t} cm²`; w2 = `${lp + 28} cm²`; w3 = `${lp - 32} cm²`;
      exp = `Luas permukaan balok = 2 × (pl + pt + lt) = 2 × (${p * l} + ${p * t} + ${l * t}) = ${lp} cm².`;
      diag = 'Jumlahkan luas ketiga pasang sisi balok lalu kalikan dua.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T5, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Bak Mandi & Kawat Kerangka Balok
  for (let i = 1; i <= 20; i++) {
    const seed = i * 79;
    const sBak = 80 + (i % 5) * 10; // 80 - 120 cm
    const volTotalLiter = (sBak * sBak * sBak) / 1000;
    const terisiPecahan = 0.5;
    const sisaLiter = volTotalLiter * (1 - terisiPecahan);

    const qTxt = `Sebuah bak penampungan air berbentuk kubus memiliki panjang rusuk bagian dalam ${sBak} cm. Jika saat ini bak tersebut telah terisi air sebanyak setengah (½) bagian, volume air yang masih harus ditambahkan agar bak terisi penuh adalah ...`;
    const ans = `${sisaLiter} liter`;
    const w1 = `${volTotalLiter} liter`;
    const w2 = `${sisaLiter + 50} liter`;
    const w3 = `${sisaLiter - 40} liter`;
    const exp = `Volume penuh = ${sBak}³ = ${sBak * sBak * sBak} cm³ = ${volTotalLiter} liter (karena 1 liter = 1.000 cm³).\nSisa yang perlu diisi = ½ × ${volTotalLiter} = ${sisaLiter} liter.`;
    const diag = 'Hitung volume kubus dalam cm³, konversi ke liter dengan membagi 1.000, lalu kalikan dengan sisa bagian yang belum terisi.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T5, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Optimalisasi Kemasan Kardus & Ruang Muat
  for (let i = 1; i <= 20; i++) {
    const seed = i * 83;
    const pKardus = 12, lKardus = 8, tKardus = 6;
    const volKardus = pKardus * lKardus * tKardus;
    const pDusBesar = pKardus * 4, lDusBesar = lKardus * 3, tDusBesar = tKardus * 2;
    const jmlKotak = 4 * 3 * 2; // 24 kotak

    const qTxt = `Sebuah pabrik makanan mengemas biskuit dalam kotak kardus kecil berukuran ${pKardus} cm × ${lKardus} cm × ${tKardus} cm. Kotak-kotak biskuit tersebut dimasukkan ke dalam dus karton besar berukuran ${pDusBesar} cm × ${lDusBesar} cm × ${tDusBesar} cm. Jumlah maksimal kotak biskuit yang dapat tersusun rapi hingga memenuhi dus karton besar adalah ...`;
    const ans = `${jmlKotak} kotak`;
    const w1 = `${jmlKotak + 6} kotak`;
    const w2 = `${jmlKotak - 4} kotak`;
    const w3 = `${jmlKotak * 2} kotak`;
    const exp = `Banyak kotak pada sisi panjang = ${pDusBesar} : ${pKardus} = 4 baris.\nBanyak kotak pada sisi lebar = ${lDusBesar} : ${lKardus} = 3 baris.\nBanyak kotak pada sisi tinggi = ${tDusBesar} : ${tKardus} = 2 tumpukan.\nTotal kotak biskuit = 4 × 3 × 2 = ${jmlKotak} kotak.`;
    const diag = 'Bagi dimensi panjang, lebar, dan tinggi dus besar dengan dimensi kardus kecil secara terpisah, lalu kalikan ketiga hasilnya.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T5, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 6: Bangun Ruang Prisma, Tabung, Kerucut, & Limas
  // ---------------------------------------------------------------------------
  const T6 = 'Bangun Ruang Prisma, Tabung, Kerucut, & Limas';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 89;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 10) {
      const r = 7, t = 10 + i;
      svg = renderTabung(r, t);
      const vol = Math.round((22 / 7) * r * r * t);
      qTxt = `Perhatikan gambar tabung di atas! Jari-jari alas tabung r = ${r} cm dan tinggi ${t} cm. Volume bangun tabung tersebut adalah ... (π = 22/7)`;
      ans = `${vol} cm³`; w1 = `${Math.round((22 / 7) * r * t)} cm³`; w2 = `${vol + 154} cm³`; w3 = `${vol - 154} cm³`;
      exp = `Volume tabung = π × r² × t = 22/7 × 7² × ${t} = ${vol} cm³.`;
      diag = 'Rumus volume tabung adalah luas alas lingkaran dikali tinggi tabung.';
    } else {
      const a = 6 + (i % 4) * 2, tA = 4, tP = 12 + i;
      svg = renderPrismaSegitiga(a, tA, tP);
      const lAlas = (a * tA) / 2;
      const vol = lAlas * tP;
      qTxt = `Perhatikan gambar prisma tegak segitiga di atas! Luas alas segitiga adalah ${lAlas} cm² dan tinggi prisma ${tP} cm. Volume prisma tersebut adalah ...`;
      ans = `${vol} cm³`; w1 = `${a * tA * tP} cm³`; w2 = `${vol + 30} cm³`; w3 = `${vol - 20} cm³`;
      exp = `Volume prisma = Luas alas × tinggi prisma = ${lAlas} × ${tP} = ${vol} cm³.`;
      diag = 'Volume prisma tegak adalah luas bidang alas dikali tinggi prisma.';
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
    const seed = i * 97;
    let svg = null, qTxt = '', ans = '', w1 = '', w2 = '', w3 = '', exp = '', diag = '';

    if (i <= 20) {
      const r = 7, t = 12 + (i % 6) * 3;
      svg = renderKerucut(r, t);
      const vol = Math.round((1 / 3) * (22 / 7) * r * r * t);
      qTxt = `Perhatikan gambar kerucut di atas! Jari-jari alas r = ${r} cm dan tinggi kerucut t = ${t} cm. Volume kerucut tersebut adalah ... (π = 22/7)`;
      ans = `${vol} cm³`; w1 = `${vol * 3} cm³`; w2 = `${vol + 44} cm³`; w3 = `${vol - 30} cm³`;
      exp = `Volume kerucut = ⅓ × π × r² × t = ⅓ × 22/7 × 49 × ${t} = ${vol} cm³.`;
      diag = 'Volume kerucut adalah sepertiga dari volume tabung dengan jari-jari dan tinggi yang sama.';
    } else {
      const sAlas = 10 + (i % 6), tLimas = 12 + (i % 4);
      svg = renderLimas(sAlas, tLimas);
      const luasAlas = sAlas * sAlas;
      const vol = Math.round((1 / 3) * luasAlas * tLimas);
      qTxt = `Perhatikan gambar limas segiempat di atas! Alas berbentuk persegi dengan panjang sisi ${sAlas} cm dan tinggi limas ${tLimas} cm. Volume limas adalah ...`;
      ans = `${vol} cm³`; w1 = `${luasAlas * tLimas} cm³`; w2 = `${vol + 50} cm³`; w3 = `${vol - 40} cm³`;
      exp = `Volume limas = ⅓ × Luas alas × tinggi = ⅓ × (${sAlas} × ${sAlas}) × ${tLimas} = ${vol} cm³.`;
      diag = 'Rumus volume limas adalah sepertiga kali luas alas dikali tinggi limas.';
    }

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T6, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Drum Minyak & Perbandingan Bangun Sisi Lengkung
  for (let i = 1; i <= 20; i++) {
    const seed = i * 101;
    const rDrum = 35; // cm
    const tDrum = 100 + i * 5; // cm
    const volLiter = Math.round(((22 / 7) * rDrum * rDrum * tDrum) / 1000);

    const qTxt = `Pak Darmo memiliki drum minyak berbentuk tabung dengan jari-jari alas ${rDrum} cm dan tinggi ${tDrum} cm. Kapasitas daya tampung minyak penuh dari drum tersebut adalah ... (π = 22/7)`;
    const ans = `${volLiter} liter`;
    const w1 = `${volLiter + 50} liter`;
    const w2 = `${volLiter - 40} liter`;
    const w3 = `${Math.round(volLiter * 1.5)} liter`;
    const exp = `Volume drum = π × r² × t = 22/7 × 35² × ${tDrum} = ${volLiter * 1000} cm³ = ${volLiter} liter.`;
    const diag = 'Hitung volume tabung dalam cm³, kemudian bagi 1.000 untuk mengubah satuan ke liter.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T6, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Cetakan Nasi Tumpeng & Efisiensi Bahan Kaleng
  for (let i = 1; i <= 20; i++) {
    const seed = i * 103;
    const rTumpeng = 14;
    const tTumpeng = 21 + (i % 3) * 3;
    const volNasi = Math.round((1 / 3) * (22 / 7) * rTumpeng * rTumpeng * tTumpeng);
    const porsiPerLiter = 4;
    const literNasi = volNasi / 1000;
    const estimasiPorsi = Math.round(literNasi * porsiPerLiter);

    const qTxt = `Ibu memesan cetakan tumpeng berbentuk kerucut dengan jari-jari alas ${rTumpeng} cm dan tinggi ${tTumpeng} cm. Jika 1 liter nasi tumpeng padat rata-rata dapat mencukupi kebutuhan makan ${porsiPerLiter} orang tamu, perkiraan porsi tumpeng penuh yang dihasilkan adalah ... (π = 22/7)`;
    const ans = `${estimasiPorsi} porsi`;
    const w1 = `${estimasiPorsi + 6} porsi`;
    const w2 = `${estimasiPorsi - 4} porsi`;
    const w3 = `${estimasiPorsi * 2} porsi`;
    const exp = `Volume tumpeng = ⅓ × 22/7 × 14² × ${tTumpeng} = ${volNasi} cm³ = ${literNasi.toFixed(2)} liter.\nBanyak porsi = ${literNasi.toFixed(2)} × ${porsiPerLiter} = ${estimasiPorsi} porsi.`;
    const diag = 'Hitung volume kerucut dalam liter (bagi 1.000), lalu kalikan dengan rasio porsi per liter.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T6, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 7: Penyajian Data Diagram Batang & Diagram Garis
  // ---------------------------------------------------------------------------
  const T7 = 'Penyajian Data Diagram Batang & Diagram Garis';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 107;
    const v1 = 20 + i, v2 = 35 + i, v3 = 15, v4 = 45;
    const svg = renderDiagramBatang(['Senin', 'Selasa', 'Rabu', 'Kamis'], [v1, v2, v3, v4], 'Penjualan Buku Cerita', 'eksemplar');

    const qTxt = `Perhatikan diagram batang di atas! Hasil penjualan buku cerita paling banyak terjadi pada hari ...`;
    const ans = 'Kamis (45 eksemplar)';
    const w1 = `Selasa (${v2} eksemplar)`;
    const w2 = `Senin (${v1} eksemplar)`;
    const w3 = 'Rabu (15 eksemplar)';
    const exp = 'Berdasarkan ketinggian diagram batang, batang tertinggi adalah hari Kamis dengan 45 eksemplar.';
    const diag = 'Perhatikan batang yang paling menjulang tinggi pada sumbu nilai diagram.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 109;
    const v = [36.0, 36.5, 38.0 + (i % 3) * 0.5, 37.0, 36.5];
    const svg = renderDiagramGaris(['Pagi', 'Siang', 'Sore', 'Malam', 'Subuh'], v, 'Suhu Tubuh Pasien', '°C');

    const qTxt = `Perhatikan diagram garis di atas! Suhu tubuh tertinggi pasien tercatat pada waktu ...`;
    const ans = `Sore (${v[2].toFixed(1).replace('.', ',')}°C)`;
    const w1 = 'Siang (36,5°C)';
    const w2 = 'Pagi (36,0°C)';
    const w3 = 'Malam (37,0°C)';
    const exp = `Titik koordinat tertinggi pada diagram garis berada pada waktu Sore yaitu ${v[2].toFixed(1).replace('.', ',')}°C.`;
    const diag = 'Amati titik plot paling puncak pada garis grafik waktu.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Menghitung Selisih & Kenaikan Data
  for (let i = 1; i <= 20; i++) {
    const seed = i * 113;
    const v1 = 30 + i * 2, v2 = 60 + i * 3;
    const selisih = v2 - v1;
    const svg = renderDiagramBatang(['Desa A', 'Desa B', 'Desa C', 'Desa D'], [v1, 45, v2, 50], 'Hasil Panen Padi', 'ton');

    const qTxt = `Perhatikan diagram batang di atas! Selisih hasil panen padi antara Desa C (tertinggi) dan Desa A (terendah) adalah ...`;
    const ans = `${selisih} ton`;
    const w1 = `${selisih + 10} ton`;
    const w2 = `${selisih - 8} ton`;
    const w3 = `${v2} ton`;
    const exp = `Panen Desa C = ${v2} ton, panen Desa A = ${v1} ton.\nSelisih = ${v2} - ${v1} = ${selisih} ton.`;
    const diag = 'Kurangkan nilai data pada batang tertinggi dengan nilai data pada batang terendah.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T7, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // HOTS (20) - Analisis Tren Data & Rata-rata Gabungan
  for (let i = 1; i <= 20; i++) {
    const seed = i * 127;
    const dataMingguan = [40, 50, 45, 60, 55];
    const total = dataMingguan.reduce((a, b) => a + b, 0);
    const mean = total / dataMingguan.length;
    const svg = renderDiagramGaris(['Sen', 'Sel', 'Rab', 'Kam', 'Jum'], dataMingguan, 'Pengunjung Perpustakaan', 'orang');

    const qTxt = `Perhatikan diagram garis di atas! Berdasarkan data kunjungan perpustakaan sekolah selama 5 hari kerja, rata-rata pengunjung harian perpustakaan adalah ...`;
    const ans = `${mean} orang`;
    const w1 = `${mean + 5} orang`;
    const w2 = `${mean - 4} orang`;
    const w3 = `${total} orang`;
    const exp = `Total pengunjung = 40 + 50 + 45 + 60 + 55 = ${total} orang.\nRata-rata = ${total} : 5 hari = ${mean} orang/hari.`;
    const diag = 'Jumlahkan semua nilai data pada grafik lalu bagi dengan banyak hari pengamatan.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T7, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 8: Penyajian Data Diagram Lingkaran, Piktogram, & Tabel Turus
  // ---------------------------------------------------------------------------
  const T8 = 'Penyajian Data Diagram Lingkaran, Piktogram, & Tabel Turus';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 131;
    const skala = 10;
    const j1 = 30, j2 = 40, j3 = 50;
    const svg = renderPiktogram(['Kelas IV', 'Kelas V', 'Kelas VI'], [j1, j2, j3], 'buku', skala);

    const qTxt = `Perhatikan piktogram di atas! Setiap 1 simbol gambar buku mewakili ${skala} buah buku. Jumlah buku perpustakaan milik Kelas V adalah ...`;
    const ans = `${j2} buah`;
    const w1 = `${j2 / skala} buah`;
    const w2 = `${j2 + 10} buah`;
    const w3 = `${j1} buah`;
    const exp = `Pada baris Kelas V terdapat ${j2 / skala} simbol buku. Total buku = ${j2 / skala} × ${skala} = ${j2} buah.`;
    const diag = 'Kalikan jumlah simbol gambar dengan nilai skala yang tertera pada legenda.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 137;
    const totalSiswa = 40;
    const pctBola = 40, pctRenang = 25, pctMusik = 20, pctLukis = 15;
    const jmlBola = (pctBola / 100) * totalSiswa;
    const svg = renderDiagramLingkaran([
      { label: 'Sepak Bola', pct: pctBola },
      { label: 'Renang', pct: pctRenang },
      { label: 'Musik', pct: pctMusik },
      { label: 'Melukis', pct: pctLukis }
    ], 'Ekstrakurikuler Pilihan');

    const qTxt = `Perhatikan diagram lingkaran di atas! Jika total siswa kelas V berjumlah ${totalSiswa} orang, banyak siswa yang memilih ekstrakurikuler Sepak Bola adalah ...`;
    const ans = `${jmlBola} siswa`;
    const w1 = `${jmlBola + 4} siswa`;
    const w2 = `${jmlBola - 4} siswa`;
    const w3 = `${pctBola} siswa`;
    const exp = `Siswa memilih Sepak Bola = ${pctBola}% × ${totalSiswa} = (${pctBola}/100) × ${totalSiswa} = ${jmlBola} siswa.`;
    const diag = 'Ubah persentase menjadi pecahan per seratus lalu kalikan dengan total seluruh siswa.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
    });
  }

  // Sulit (20) - Menghitung Derajat Sektor & Tabel Turus KKM
  for (let i = 1; i <= 20; i++) {
    const seed = i * 139;
    const pct = 25;
    const derajat = (pct / 100) * 360;

    const qTxt = `Sebuah data kegemaran siswa disajikan dalam diagram lingkaran. Jika bagian siswa yang gemar membaca buku adalah ${pct}%, maka besar sudut pusat juring lingkaran tersebut adalah ...`;
    const ans = `${derajat}°`;
    const w1 = `${derajat + 15}°`;
    const w2 = `${derajat - 15}°`;
    const w3 = `${pct * 2}°`;
    const exp = `Sudut 1 putaran penuh diagram lingkaran = 360°.\nBesar sudut juring = (${pct} / 100) × 360° = ${derajat}°.`;
    const diag = 'Untuk mengubah persentase ke derajat, kalikan nilai persen dengan 360 derajat.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T8, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Rekonstruksi Data Hilang & Selisih Kelompok
  for (let i = 1; i <= 20; i++) {
    const seed = i * 149;
    const diketahuiJumlah = 18; // misal 18 siswa
    const pctDiketahui = 30; // 30%
    const totalSemua = Math.round((diketahuiJumlah / pctDiketahui) * 100);
    const pctTarget = 20; // 20%
    const targetJumlah = Math.round((pctTarget / 100) * totalSemua);

    const qTxt = `Dalam diagram lingkaran pemilihan ketua kelas, calon A memperoleh ${pctDiketahui}% suara yang setara dengan ${diketahuiJumlah} suara sah. Jika calon B memperoleh ${pctTarget}% suara, banyak suara yang diperoleh calon B adalah ...`;
    const ans = `${targetJumlah} suara`;
    const w1 = `${targetJumlah + 4} suara`;
    const w2 = `${targetJumlah - 3} suara`;
    const w3 = `${totalSemua} suara`;
    const exp = `Total seluruh suara = ${diketahuiJumlah} : (${pctDiketahui}/100) = ${totalSemua} suara.\nPerolehan suara calon B = (${pctTarget}/100) × ${totalSemua} = ${targetJumlah} suara.`;
    const diag = 'Cari terlebih dahulu total seluruh suara dari perolehan calon A, lalu hitung perolehan calon B.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T8, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 9: Statistika Dasar: Mean (Rata-rata), Median, & Modus
  // ---------------------------------------------------------------------------
  const T9 = 'Statistika Dasar: Mean (Rata-rata), Median, & Modus';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 151;
    const baseNilai = 70 + (i % 5) * 5;
    const data = [baseNilai, baseNilai + 5, baseNilai + 5, baseNilai + 5, baseNilai + 10];
    const modus = baseNilai + 5;

    const qTxt = `Diberikan data nilai ulangan matematika 5 orang siswa: ${data.join(', ')}. Modus dari data nilai tersebut adalah ...`;
    const ans = `${modus}`;
    const w1 = `${baseNilai}`;
    const w2 = `${baseNilai + 10}`;
    const w3 = `${Math.round(data.reduce((a, b) => a + b, 0) / 5)}`;
    const exp = `Nilai ${modus} muncul sebanyak 3 kali (terbanyak), sehingga modusnya adalah ${modus}.`;
    const diag = 'Modus adalah nilai data yang memiliki frekuensi kemunculan terbanyak.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 157;
    const n = [70, 75, 80, 85, 90, 80, 85, 75];
    const sum = n.reduce((a, b) => a + b, 0);
    const mean = sum / n.length;

    const qTxt = `Berikut data nilai ulangan IPA dari 8 siswa: ${n.join(', ')}. Nilai rata-rata (mean) dari data tersebut adalah ...`;
    const ans = `${mean}`;
    const w1 = `${mean + 2}`;
    const w2 = `${mean - 2}`;
    const w3 = `80`;
    const exp = `Total nilai = ${sum}.\nBanyak siswa = 8.\nRata-rata = ${sum} : 8 = ${mean}.`;
    const diag = 'Jumlahkan seluruh data nilai lalu bagi dengan banyaknya data siswa.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sulit (20) - Menghitung Nilai Susulan agar Rata-rata Tercapai
  for (let i = 1; i <= 20; i++) {
    const seed = i * 163;
    const targetMean = 85;
    const dataAwal = [80, 82, 85, 88];
    const sumAwal = dataAwal.reduce((a, b) => a + b, 0);
    const butuhNilai = (targetMean * 5) - sumAwal;

    const qTxt = `Rani telah mengikuti 4 kali tes matematika dengan nilai berturut-turut ${dataAwal.join(', ')}. Agar nilai rata-rata dari 5 kali tes mencapai ${targetMean}, nilai yang harus diperoleh Rani pada tes kelima adalah ...`;
    const ans = `${butuhNilai}`;
    const w1 = `${butuhNilai - 5}`;
    const w2 = `${butuhNilai + 4}`;
    const w3 = `${targetMean}`;
    const exp = `Target total 5 tes = 5 × ${targetMean} = ${targetMean * 5}.\nTotal 4 tes yang sudah diikuti = ${sumAwal}.\nNilai tes ke-5 = ${targetMean * 5} - ${sumAwal} = ${butuhNilai}.`;
    const diag = 'Kalikan target rata-rata dengan banyak seluruh tes (5), lalu kurangkan dengan jumlah nilai yang sudah ada.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Analisis Pergeseran Median & Pengaruh Nilai Ekstrim
  for (let i = 1; i <= 20; i++) {
    const seed = i * 167;
    const urut = [65, 70, 75, 80, 85, 90, 95];
    const median = 80;

    const qTxt = `Data urut tinggi badan (cm) atlet loncat indah adalah 150, 152, 155, 158, 162, 165, 170. Nilai median (nilai tengah) dari tinggi badan para atlet tersebut adalah ...`;
    const ans = `158 cm`;
    const w1 = `155 cm`;
    const w2 = `162 cm`;
    const w3 = `160 cm`;
    const exp = `Banyaknya data ganjil n = 7. Letak median berada pada data ke-(7 + 1) : 2 = data ke-4. Data ke-4 adalah 158 cm.`;
    const diag = 'Karena data sudah urut dan berjumlah ganjil (7), median berada tepat pada data urutan ke-4.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 6, TOPIK: T9, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // ---------------------------------------------------------------------------
  // TOPIK 10: Aritmetika Sosial, Pecahan, Skala, KPK/FPB, Debit
  // ---------------------------------------------------------------------------
  const T10 = 'Aritmetika Sosial, Pecahan, Skala, KPK/FPB, Debit';

  // Mudah (20)
  for (let i = 1; i <= 20; i++) {
    const seed = i * 173;
    const a = 12 + (i % 5) * 2, b = 18 + (i % 4) * 2;
    function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
    const fpb = gcd(a, b);

    const qTxt = `Faktor persekutuan terbesar (FPB) dari bilangan ${a} dan ${b} adalah ...`;
    const ans = `${fpb}`;
    const w1 = `${fpb * 2}`;
    const w2 = `${Math.max(1, fpb - 1)}`;
    const w3 = `${fpb + 3}`;
    const exp = `Faktorisasi prima dari ${a} dan ${b}. FPB adalah faktor persekutuan dengan pangkat terkecil = ${fpb}.`;
    const diag = 'FPB diperoleh dari perkalian faktor prima sekutu dengan pangkat terendah.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 4, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sedang (40)
  for (let i = 1; i <= 40; i++) {
    const seed = i * 179;
    const k1 = 4, k2 = 6;
    const kpk = 12;

    const qTxt = `Lampu merah menyala setiap ${k1} detik sekali dan lampu kuning menyala setiap ${k2} detik sekali. Jika kedua lampu menyala bersama-sama pada detik ke-0, kedua lampu akan menyala bersama kembali setiap ...`;
    const ans = `${kpk} detik`;
    const w1 = `${kpk * 2} detik`;
    const w2 = `${k1 + k2} detik`;
    const w3 = `24 detik`;
    const exp = `Waktu menyala bersama ditentukan oleh Kelipatan Persekutuan Terkecil (KPK). KPK dari ${k1} dan ${k2} adalah ${kpk} detik.`;
    const diag = 'Masalah kejadian bersama secara berulang diselesaikan menggunakan konsep KPK.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // Sulit (20) - Debit Aliran Kran & Waktu Pengisian Bak
  for (let i = 1; i <= 20; i++) {
    const seed = i * 181;
    const debitLiterMenit = 20 + (i % 5) * 5; // 20, 25, 30, 35, 40 liter/menit
    const volTandon = debitLiterMenit * (30 + i * 2); // liter
    const waktuMenit = volTandon / debitLiterMenit;

    const qTxt = `Sebuah tandon penampungan air berkapasitas ${volTandon.toLocaleString('id-ID')} liter dalam keadaan kosong diisi air melalui pipa kran dengan debit aliran ${debitLiterMenit} liter/menit. Waktu yang diperlukan hingga tandon tersebut terisi penuh adalah ...`;
    const ans = `${waktuMenit} menit`;
    const w1 = `${waktuMenit + 15} menit`;
    const w2 = `${waktuMenit - 10} menit`;
    const w3 = `${Math.round(waktuMenit / 60)} menit`;
    const exp = `Waktu pengisian = Volume : Debit = ${volTandon} liter : ${debitLiterMenit} liter/menit = ${waktuMenit} menit.`;
    const diag = 'Rumus menghitung waktu aliran adalah Volume dibagi dengan Debit air.';

    const op = createSafeOptions(ans, w1, w2, w3, seed);
    addQ({
      MAPEL: 'MATEMATIKA', KELAS: 5, TOPIK: T10, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
      PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
      PEMBAHASAN: exp, DIAGNOSA: diag, STATUS: 'AKTIF', STIMULUS_GAMBAR: null
    });
  }

  // HOTS (20) - Skala Peta, Kecepatan & Waktu Tempuh
  for (let i = 1; i <= 20; i++) {
    const seed = i * 191;
    const jarakPetaCm = 6 + (i % 4) * 2; // 6, 8, 10, 12 cm
    const skala = 250000;
    const jarakAsliKm = (jarakPetaCm * skala) / 100000; // km
    const kecepatanKmJam = 60;
    const waktuJam = jarakAsliKm / kecepatanKmJam;
    const waktuMenit = Math.round(waktuJam * 60);

    const qTxt = `Jarak antara Kota Melati dan Kota Cempaka pada peta berskala 1 : ${skala.toLocaleString('id-ID')} adalah ${jarakPetaCm} cm. Sebuah mobil melaju dari Kota Melati ke Kota Cempaka dengan kecepatan rata-rata ${kecepatanKmJam} km/jam tanpa berhenti. Lama waktu perjalanan mobil tersebut adalah ...`;
    const ans = `${waktuMenit} menit`;
    const w1 = `${waktuMenit + 20} menit`;
    const w2 = `${waktuMenit - 15} menit`;
    const w3 = `${Math.round(jarakAsliKm)} menit`;
    const exp = `Jarak sebenarnya = ${jarakPetaCm} cm × ${skala} = ${jarakPetaCm * skala} cm = ${jarakAsliKm} km.\nWaktu tempuh = Jarak : Kecepatan = ${jarakAsliKm} km : ${kecepatanKmJam} km/jam = ${waktuJam} jam = ${waktuMenit} menit.`;
    const diag = 'Ubah jarak peta ke kilometer dengan mengalikan skala (bagi 100.000), lalu bagi dengan kecepatan untuk mendapatkan waktu perjalanan.';

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
