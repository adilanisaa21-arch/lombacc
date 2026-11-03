// generate_math_questions.js
const { addQuestion, makeOptions } = require('./generator_complete.js');

function buildMathQuestions() {
  console.log('Generating 270 Math questions...');

  // =========================================================================
  // KELAS 4 MATEMATIKA (90 Soal)
  // =========================================================================

  // 1. Bilangan cacah & nilai tempat (20 soal)
  const numsK4 = [
    [7405, 4, 'ratusan', 400, 40, 4, 4000],
    [47285, 7, 'ribuan', 7000, 700, 70, 70000],
    [58319, 8, 'ribuan', 8000, 800, 80, 80000],
    [92640, 9, 'puluh ribuan', 90000, 9000, 900, 90],
    [31450, 1, 'ribuan', 1000, 100, 10, 10000],
    [65278, 2, 'ratusan', 200, 20, 2, 2000],
    [84931, 3, 'puluhan', 30, 300, 3, 3000],
    [50672, 6, 'ratusan', 600, 60, 6000, 6],
    [19845, 9, 'ribuan', 9000, 900, 90000, 90],
    [73420, 7, 'puluh ribuan', 70000, 7000, 700, 70]
  ];

  numsK4.forEach(([val, digit, tempat, correct, w1, w2, w3], i) => {
    const { opsi, kunci } = makeOptions(correct.toLocaleString('id-ID'), w1.toLocaleString('id-ID'), w2.toLocaleString('id-ID'), w3.toLocaleString('id-ID'), i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Nilai Tempat & Bilangan Cacah',
      babak: i < 5 ? 'PENYISIHAN' : 'UMUM',
      level: 'MUDAH',
      teks: `Pada bilangan ${val.toLocaleString('id-ID')}, nilai dari angka ${digit} adalah ...`,
      opsi,
      kunci,
      pembahasan: `Angka ${digit} pada bilangan ${val.toLocaleString('id-ID')} menempati posisi ${tempat}, sehingga bernilai ${correct.toLocaleString('id-ID')}.`,
      diagnosa: 'Kesalahan Umum: Tertukar antara nilai tempat (posisi angka) dengan nilai angka itu sendiri, atau salah membaca letak ribuan dan ratusan.'
    });
  });

  // Dekomposisi & Operasi Campuran Perpustakaan/Toko (10 soal dengan STIMULUS)
  const libCases = [
    { awal: 365, terima: 248, pinjam: 179, sisa: 434, nama: 'SD Inpres Tangkala' },
    { awal: 420, terima: 185, pinjam: 215, sisa: 390, nama: 'SD Nusantara' },
    { awal: 550, terima: 320, pinjam: 240, sisa: 630, nama: 'Perpustakaan Cendekia' },
    { awal: 610, terima: 190, pinjam: 350, sisa: 450, nama: 'Taman Baca Melati' },
    { awal: 280, terima: 140, pinjam: 125, sisa: 295, nama: 'Pojok Baca Pintar' },
    { awal: 750, terima: 250, pinjam: 420, sisa: 580, nama: 'Perpustakaan Daerah' },
    { awal: 830, terima: 170, pinjam: 310, sisa: 690, nama: 'Koleksi Buku Sekolah' },
    { awal: 390, terima: 260, pinjam: 180, sisa: 470, nama: 'Perpustakaan Sahabat' },
    { awal: 480, terima: 310, pinjam: 290, sisa: 500, nama: 'Ruang Literasi' },
    { awal: 900, terima: 150, pinjam: 430, sisa: 620, nama: 'Pustaka Hebat' }
  ];

  libCases.forEach((item, i) => {
    const { opsi, kunci } = makeOptions(item.sisa + ' buku', (item.sisa - 20) + ' buku', (item.sisa + 30) + ' buku', (item.sisa - 100) + ' buku', i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Operasi Campuran Bilangan Cacah',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Perpustakaan ${item.nama} pada awal bulan memiliki persediaan ${item.awal} buku cerita. Pengurus perpustakaan kemudian menerima sumbangan sebanyak ${item.terima} buku baru dari para donatur. Pada minggu kedua, sebanyak ${item.pinjam} buku dipinjam oleh para siswa untuk kegiatan membaca terarah.`,
      teks: `Berapa banyak buku yang saat ini tersisa di rak perpustakaan ${item.nama}?`,
      opsi,
      kunci,
      pembahasan: `Hitung bertahap: Jumlah buku awal + sumbangan buku = ${item.awal} + ${item.terima} = ${item.awal + item.terima}. Kemudian kurangi dengan buku yang dipinjam: ${item.awal + item.terima} − ${item.pinjam} = ${item.sisa} buku.`,
      diagnosa: 'Kesalahan Umum: Salah menjumlahkan nilai satuan atau puluhan saat menyimpan, atau terbalik mengurangkan jumlah sumbangan.'
    });
  });

  // Operasi Campuran Kabataku Murni (10 soal)
  const kabatakuCases = [
    { expr: '120 - (8 × 9) + 15', ans: 63, w1: 48, w2: 57, w3: 135, step: '8 × 9 = 72; 120 - 72 = 48; 48 + 15 = 63' },
    { expr: '150 + 25 × 4 - 80 : 2', ans: 210, w1: 180, w2: 310, w3: 160, step: '25 × 4 = 100 dan 80 : 2 = 40; 150 + 100 - 40 = 210' },
    { expr: '200 - 15 × 6 + 45 : 3', ans: 125, w1: 110, w2: 140, w3: 95, step: '15 × 6 = 90 dan 45 : 3 = 15; 200 - 90 + 15 = 125' },
    { expr: '80 + 120 : 4 × 3 - 50', ans: 120, w1: 100, w2: 90, w3: 140, step: '120 : 4 = 30; 30 × 3 = 90; 80 + 90 - 50 = 120' },
    { expr: '75 - (6 × 8) + 90 : 5', ans: 45, w1: 35, w2: 55, w3: 25, step: '6 × 8 = 48 dan 90 : 5 = 18; 75 - 48 + 18 = 45' },
    { expr: '300 : (15 + 10) × 8 - 16', ans: 80, w1: 72, w2: 96, w3: 64, step: 'Kurung dulu: 15 + 10 = 25; 300 : 25 = 12; 12 × 8 = 96; 96 - 16 = 80' },
    { expr: '90 + 40 × 3 - 100 : 4', ans: 185, w1: 165, w2: 175, w3: 200, step: '40 × 3 = 120 dan 100 : 4 = 25; 90 + 120 - 25 = 185' },
    { expr: '240 - 80 : 4 + 12 × 5', ans: 280, w1: 240, w2: 260, w3: 300, step: '80 : 4 = 20 dan 12 × 5 = 60; 240 - 20 + 60 = 280' },
    { expr: '50 × 4 - (120 : 6) + 35', ans: 215, w1: 195, w2: 205, w3: 225, step: '50 × 4 = 200 dan 120 : 6 = 20; 200 - 20 + 35 = 215' },
    { expr: '180 : 9 × 5 + 60 - 25', ans: 135, w1: 125, w2: 145, w3: 115, step: '180 : 9 = 20; 20 × 5 = 100; 100 + 60 - 25 = 135' }
  ];

  kabatakuCases.forEach((k, i) => {
    const { opsi, kunci } = makeOptions(String(k.ans), String(k.w1), String(k.w2), String(k.w3), i + 2);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Operasi Campuran (Aturan Kabataku)',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `Hasil perhitungan dari ${k.expr} adalah ...`,
      opsi,
      kunci,
      pembahasan: `Terapkan aturan hierarki operasi (Kabataku): Selesaikan tanda kurung, lalu perkalian/pembagian dari kiri ke kanan, dilanjutkan penjumlahan/pengurangan dari kiri ke kanan: ${k.step}.`,
      diagnosa: 'Kesalahan Umum: Menghitung secara berurutan dari kiri tanpa mendahulukan perkalian atau pembagian, atau salah mengutamakan tanda kurung.'
    });
  });

  // 2. Faktor, kelipatan, KPK, FPB dasar, pola bilangan (20 soal)
  const kpkFpbK4 = [
    { p: 'KPK dari 6 dan 8', ans: 24, w1: 12, w2: 14, w3: 48, exp: 'Kelipatan 6: 6, 12, 18, 24... Kelipatan 8: 8, 16, 24... Kelipatan persekutuan terkecil = 24.' },
    { p: 'FPB dari 18 dan 24', ans: 6, w1: 3, w2: 12, w3: 2, exp: 'Faktor 18: 1, 2, 3, 6, 9, 18. Faktor 24: 1, 2, 3, 4, 6, 8, 12, 24. Faktor persekutuan terbesar = 6.' },
    { p: 'KPK dari 4 dan 6', ans: 12, w1: 24, w2: 18, w3: 8, exp: 'Kelipatan 4: 4, 8, 12, 16... Kelipatan 6: 6, 12, 18... KPK = 12.' },
    { p: 'FPB dari 12 dan 18', ans: 6, w1: 4, w2: 3, w3: 2, exp: 'Faktor persekutuan terbesar 12 dan 18 adalah 6.' },
    { p: 'KPK dari 8 dan 12', ans: 24, w1: 48, w2: 36, w3: 16, exp: 'Kelipatan 8 dan 12 yang pertama bertemu di 24.' },
    { p: 'FPB dari 16 dan 20', ans: 4, w1: 2, w2: 8, w3: 5, exp: 'Faktor persekutuan terbesar 16 dan 20 adalah 4.' },
    { p: 'Faktor dari 18 yang merupakan bilangan prima', ans: '2 dan 3', w1: '2 dan 9', w2: '3 dan 6', w3: '1 dan 18', exp: 'Faktor 18 = 1, 2, 3, 6, 9, 18. Yang prima hanyalah 2 dan 3.' },
    { p: 'Kelipatan 6 yang berada di antara 20 dan 30', ans: '24', w1: '22', w2: '26', w3: '28', exp: '6 × 4 = 24, terletak antara 20 dan 30.' },
    { p: 'Suku berikutnya dari pola bilangan 5, 9, 13, 17, ...', ans: '21', w1: '20', w2: '22', w3: '23', exp: 'Pola memiliki beda tetap bertambah 4 (+4). Maka 17 + 4 = 21.' },
    { p: 'Suku berikutnya dari pola bilangan 3, 6, 12, 24, ...', ans: '48', w1: '36', w2: '42', w3: '50', exp: 'Pola kelipatan dua (dikali 2). 24 × 2 = 48.' }
  ];

  kpkFpbK4.forEach((it, i) => {
    const { opsi, kunci } = makeOptions(String(it.ans), String(it.w1), String(it.w2), String(it.w3), i + 3);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Faktor, Kelipatan, & Pola Bilangan',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${it.p} adalah ...`,
      opsi,
      kunci,
      pembahasan: it.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara KPK (mencari kelipatan yang sama) dan FPB (mencari pembagi yang sama).'
    });
  });

  // Tambahan 10 variasi pola & FPB/KPK Kelas 4
  const polaCases = [
    { p: 'Pola bilangan 2, 5, 8, 11, ... Tiga bilangan berikutnya berturut-turut adalah', ans: '14, 17, 20', w1: '13, 16, 19', w2: '14, 16, 18', w3: '15, 18, 21', exp: 'Pola bertambah 3 (+3).' },
    { p: 'Pola bilangan 40, 35, 30, 25, ... Bilangan pada suku ke-6 adalah', ans: '15', w1: '20', w2: '10', w3: '5', exp: 'Pola berkurang 5: 40, 35, 30, 25, 20 (ke-5), 15 (ke-6).' },
    { p: 'Bilangan prima di antara 20 dan 30 adalah', ans: '23 dan 29', w1: '21 dan 27', w2: '23 dan 27', w3: '21 dan 29', exp: '21 habis dibagi 3, 27 habis dibagi 3. Yang prima hanya 23 dan 29.' },
    { p: 'Faktor prima dari bilangan 30 adalah', ans: '2, 3, dan 5', w1: '2 dan 15', w2: '3 dan 10', w3: '1, 2, 3, 5', exp: 'Faktorisasi prima 30 = 2 × 3 × 5. Angka 1 bukan bilangan prima.' },
    { p: 'KPK dari 5 dan 7 adalah', ans: '35', w1: '12', w2: '25', w3: '42', exp: 'Karena 5 dan 7 keduanya bilangan prima, KPK-nya langsung 5 × 7 = 35.' },
    { p: 'FPB dari 15 dan 25 adalah', ans: '5', w1: '3', w2: '1', w3: '15', exp: 'Faktor persekutuan terbesar 15 dan 25 adalah 5.' },
    { p: 'Jumlah semua faktor dari bilangan 12 adalah', ans: '28', w1: '24', w2: '26', w3: '30', exp: 'Faktor 12: 1 + 2 + 3 + 4 + 6 + 12 = 28.' },
    { p: 'Banyak faktor bilangan 20 adalah', ans: '6 buah', w1: '4 buah', w2: '5 buah', w3: '7 buah', exp: 'Faktor 20: 1, 2, 4, 5, 10, 20 (ada 6 faktor).' },
    { p: 'Pola bilangan 1, 4, 9, 16, ... Bilangan ke-6 dari pola tersebut adalah', ans: '36', w1: '25', w2: '30', w3: '49', exp: 'Pola kuadrat bilangan asli: 1², 2², 3², 4², 5²=25, 6²=36.' },
    { p: 'FPB dari 24 dan 32 adalah', ans: '8', w1: '4', w2: '6', w3: '12', exp: '24 = 2³ × 3 dan 32 = 2⁵. FPB = 2³ = 8.' }
  ];

  polaCases.forEach((pc, i) => {
    const { opsi, kunci } = makeOptions(pc.ans, pc.w1, pc.w2, pc.w3, i + 1);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Faktor, Kelipatan, & Pola Bilangan',
      babak: 'UMUM',
      level: 'SEDANG',
      teks: `${pc.p} ...`,
      opsi,
      kunci,
      pembahasan: pc.exp,
      diagnosa: 'Kesalahan Umum: Kurang teliti dalam mengidentifikasi pola beda atau memasukkan angka 1 sebagai bilangan prima.'
    });
  });

  // 3. Pecahan sederhana, senilai, membandingkan, desimal (15 soal)
  const fracK4 = [
    { p: 'Pecahan yang senilai dengan 2/3 adalah', ans: '4/6', w1: '3/6', w2: '2/6', w3: '4/9', exp: 'Kalikan pembilang dan penyebut dengan 2: (2×2)/(3×2) = 4/6.' },
    { p: 'Pecahan yang senilai dengan 3/4 adalah', ans: '9/12', w1: '6/12', w2: '8/12', w3: '9/16', exp: '3/4 = (3×3)/(4×3) = 9/12.' },
    { p: 'Bentuk paling sederhana dari pecahan 12/16 adalah', ans: '3/4', w1: '6/8', w2: '2/3', w3: '4/5', exp: 'Bagi pembilang dan penyebut dengan FPB-nya yaitu 4: 12:4 / 16:4 = 3/4.' },
    { p: 'Di antara pecahan 3/8 dan 5/8, pecahan yang lebih besar adalah', ans: '5/8', w1: '3/8', w2: 'Keduanya sama', w3: '1/8', exp: 'Penyebut sama (8), maka pembilang lebih besar bernilai lebih besar (5 > 3).' },
    { p: 'Pecahan 1/2 jika diubah ke bentuk desimal dan persen adalah', ans: '0,5 dan 50%', w1: '0,2 dan 20%', w2: '0,05 dan 5%', w3: '0,5 dan 5%', exp: '1/2 = 5/10 = 0,5 = 50%.' },
    { p: 'Pecahan 3/4 jika diubah ke bentuk persen adalah', ans: '75%', w1: '50%', w2: '25%', w3: '80%', exp: '3/4 × 100% = 75%.' },
    { p: 'Bentuk desimal dari pecahan 1/4 adalah', ans: '0,25', w1: '0,4', w2: '0,5', w3: '0,14', exp: '1/4 = 25/100 = 0,25.' },
    { p: 'Pecahan yang nilainya lebih besar dari 2/3 adalah', ans: '3/4', w1: '1/2', w2: '2/4', w3: '3/6', exp: 'Samakan penyebut per 12: 2/3 = 8/12, sedangkan 3/4 = 9/12. Maka 3/4 > 2/3.' },
    { p: 'Hasil dari 2/7 + 3/7 adalah', ans: '5/7', w1: '5/14', w2: '6/7', w3: '1/7', exp: 'Penyebut sama, langsung jumlahkan pembilang: 2 + 3 = 5 -> 5/7.' },
    { p: 'Hasil dari 7/9 − 4/9 adalah', ans: '3/9 = 1/3', w1: '3/18', w2: '11/9', w3: '4/9', exp: '7/9 - 4/9 = 3/9. Sederhanakan bagi 3 menjadi 1/3.' },
    { p: 'Pecahan senilai dari 5/10 dalam bentuk paling sederhana adalah', ans: '1/2', w1: '2/5', w2: '1/5', w3: '5/2', exp: '5/10 dibagi 5 menjadi 1/2.' },
    { p: 'Tanda perbandingan yang tepat untuk 3/5 ... 4/5 adalah', ans: '< (lebih kecil)', w1: '> (lebih besar)', w2: '= (sama dengan)', w3: '>= (tidak tentu)', exp: '3/5 lebih kecil dari 4/5 karena 3 < 4.' },
    { p: 'Pecahan 2/5 jika diubah ke bentuk desimal adalah', ans: '0,4', w1: '0,2', w2: '0,25', w3: '0,5', exp: '2/5 = 4/10 = 0,4.' },
    { p: 'Urutan pecahan 1/4, 1/2, 3/4 dari yang terkecil adalah', ans: '1/4, 1/2, 3/4', w1: '1/2, 1/4, 3/4', w2: '3/4, 1/2, 1/4', w3: '1/4, 3/4, 1/2', exp: '1/4 = 0,25; 1/2 = 0,50; 3/4 = 0,75.' },
    { p: 'Ibu memotong semangka menjadi 8 bagian sama besar. Budi memakan 3 bagian. Bagian semangka yang dimakan Budi bernilai', ans: '3/8', w1: '8/3', w2: '5/8', w3: '3/5', exp: '3 bagian dari 8 bagian sama bernilai 3/8.' }
  ];

  fracK4.forEach((fr, i) => {
    const { opsi, kunci } = makeOptions(fr.ans, fr.w1, fr.w2, fr.w3, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Pecahan Sederhana & Desimal',
      babak: 'PENYISIHAN',
      level: 'MUDAH',
      teks: `${fr.p} ...`,
      opsi,
      kunci,
      pembahasan: fr.exp,
      diagnosa: 'Kesalahan Umum: Menganggap pecahan dengan penyebut lebih besar nilainya otomatis lebih besar (contoh keliru: 2/3 dianggap lebih kecil dari 2/7).'
    });
  });

  // 4. Pengukuran, Bangun Datar, & Membaca Data (25 soal)
  const geomK4 = [
    { p: 'Keliling persegi panjang berukuran panjang 12 cm dan lebar 7 cm adalah', ans: '38 cm', w1: '19 cm', w2: '84 cm', w3: '144 cm', exp: 'Keliling = 2 × (p + l) = 2 × (12 + 7) = 2 × 19 = 38 cm.' },
    { p: 'Luas persegi panjang dengan panjang 12 cm dan lebar 7 cm adalah', ans: '84 cm²', w1: '38 cm²', w2: '19 cm²', w3: '96 cm²', exp: 'Luas = p × l = 12 × 7 = 84 cm².' },
    { p: 'Keliling persegi dengan panjang sisi 13 cm adalah', ans: '52 cm', w1: '26 cm', w2: '39 cm', w3: '169 cm', exp: 'Keliling persegi = 4 × sisi = 4 × 13 = 52 cm.' },
    { p: 'Luas persegi dengan sisi 13 cm adalah', ans: '169 cm²', w1: '52 cm²', w2: '26 cm²', w3: '144 cm²', exp: 'Luas persegi = s × s = 13 × 13 = 169 cm².' },
    { p: 'Panjang tali 3 meter 20 cm sama dengan', ans: '320 cm', w1: '32 cm', w2: '3.200 cm', w3: '302 cm', exp: '3 m = 300 cm, ditambah 20 cm = 320 cm.' },
    { p: 'Berat beras 2 kg 500 gram sama dengan', ans: '2.500 gram', w1: '250 gram', w2: '25.000 gram', w3: '2.050 gram', exp: '2 kg = 2.000 g, ditambah 500 g = 2.500 g.' },
    { p: 'Sebuah taman berbentuk persegi memiliki keliling 64 m. Panjang sisi taman tersebut adalah', ans: '16 m', w1: '32 m', w2: '8 m', w3: '64 m', exp: 'Sisi = Keliling : 4 = 64 : 4 = 16 m.' },
    { p: 'Sebuah taman persegi berkeliling 64 m memiliki luas sebesar', ans: '256 m²', w1: '128 m²', w2: '64 m²', w3: '1.024 m²', exp: 'Sisi = 64 : 4 = 16 m. Luas = 16 × 16 = 256 m².' },
    { p: 'Film dimulai pukul 08.35 dan selesai pukul 10.10. Lama pemutaran film adalah', ans: '95 menit', w1: '85 menit', w2: '105 menit', w3: '75 menit', exp: 'Dari 08.35 ke 09.35 = 60 menit. Dari 09.35 ke 10.10 = 35 menit. Total = 60 + 35 = 95 menit.' },
    { p: 'Sebuah segitiga memiliki sisi-sisi 6 cm, 8 cm, dan 10 cm. Keliling segitiga tersebut adalah', ans: '24 cm', w1: '48 cm', w2: '14 cm', w3: '30 cm', exp: 'Keliling = 6 + 8 + 10 = 24 cm.' }
  ];

  geomK4.forEach((gm, i) => {
    const { opsi, kunci } = makeOptions(gm.ans, gm.w1, gm.w2, gm.w3, i + 1);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Pengukuran & Bangun Datar',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${gm.p} ...`,
      opsi,
      kunci,
      pembahasan: gm.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara rumus keliling (memakai satuan panjang cm/m) dan rumus luas (memakai satuan persegi cm²/m²).'
    });
  });

  // Tambahan 15 soal membaca tabel & diagram Kelas 4 dengan Stimulus Kasus
  for (let k = 1; k <= 15; k++) {
    const s1 = 12 + k * 2;
    const s2 = 8 + k;
    const s3 = 15 - (k % 4);
    const s4 = 10 + (k % 5);
    const total = s1 + s2 + s3 + s4;
    const { opsi, kunci } = makeOptions(total + ' buku', (total - 5) + ' buku', (total + 10) + ' buku', (total - 12) + ' buku', k);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 4,
      topik: 'Membaca Data Tabel & Diagram',
      babak: 'UMUM',
      level: 'MUDAH',
      stimulus: `Tabel Peminjaman Buku Perpustakaan Kelas IV (Senin – Kamis):\n- Senin: ${s1} buku\n- Selasa: ${s2} buku\n- Rabu: ${s3} buku\n- Kamis: ${s4} buku`,
      teks: `Berdasarkan tabel di atas, jumlah seluruh buku yang dipinjam siswa dari hari Senin sampai Kamis adalah ...`,
      opsi,
      kunci,
      pembahasan: `Jumlahkan seluruh data peminjaman buku: ${s1} + ${s2} + ${s3} + ${s4} = ${total} buku.`,
      diagnosa: 'Kesalahan Umum: Kurang teliti dalam menjumlahkan data dari tabel atau salah membaca data baris tertentu.'
    });
  }

  console.log('Math Kelas 4 generated.');
}

module.exports = { buildMathQuestions };
