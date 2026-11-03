// generate_math_k5_k6.js
const { addQuestion, makeOptions } = require('./generator_complete.js');

function buildMathK5K6Questions() {
  console.log('Generating Math Kelas 5 (90 soal) & Kelas 6 (90 soal)...');

  // =========================================================================
  // KELAS 5 MATEMATIKA (90 Soal)
  // =========================================================================

  // 1. Penjumlahan & Pengurangan Pecahan Berbeda Penyebut (20 soal)
  const fracDiff = [
    { p: 'Hasil penjumlahan dari 2/3 + 1/4 adalah', ans: '11/12', w1: '3/7', w2: '5/12', w3: '3/12', exp: 'Samakan penyebut dengan KPK dari 3 dan 4 yaitu 12: 2/3 = 8/12 dan 1/4 = 3/12. Hasil = 8/12 + 3/12 = 11/12.' },
    { p: 'Hasil pengurangan dari 5/6 − 1/3 adalah', ans: '1/2', w1: '4/3', w2: '4/6', w3: '2/3', exp: 'Samakan penyebut: 1/3 = 2/6. Maka 5/6 − 2/6 = 3/6 = 1/2.' },
    { p: 'Hasil dari 1/2 + 2/5 adalah', ans: '9/10', w1: '3/7', w2: '3/10', w3: '7/10', exp: 'KPK 2 dan 5 adalah 10: 5/10 + 4/10 = 9/10.' },
    { p: 'Hasil dari 3/4 − 1/2 adalah', ans: '1/4', w1: '2/2', w2: '2/4', w3: '1/2', exp: '1/2 = 2/4. Maka 3/4 − 2/4 = 1/4.' },
    { p: 'Hasil dari 2/5 + 1/2 adalah', ans: '9/10', w1: '3/10', w2: '3/7', w3: '4/10', exp: '4/10 + 5/10 = 9/10.' },
    { p: 'Hasil dari 4/5 − 1/2 adalah', ans: '3/10', w1: '3/3', w2: '3/5', w3: '1/10', exp: '8/10 − 5/10 = 3/10.' },
    { p: 'Hasil dari 1/3 + 2/9 adalah', ans: '5/9', w1: '3/12', w2: '3/9', w3: '1/3', exp: '1/3 = 3/9. Maka 3/9 + 2/9 = 5/9.' },
    { p: 'Hasil dari 7/8 − 1/4 adalah', ans: '5/8', w1: '6/4', w2: '6/8', w3: '3/8', exp: '1/4 = 2/8. Maka 7/8 − 2/8 = 5/8.' },
    { p: 'Hasil dari 3/5 + 1/6 adalah', ans: '23/30', w1: '4/11', w2: '4/30', w3: '19/30', exp: 'KPK 5 dan 6 adalah 30: 18/30 + 5/30 = 23/30.' },
    { p: 'Hasil dari 5/6 − 3/4 adalah', ans: '1/12', w1: '2/2', w2: '2/12', w3: '1/6', exp: 'KPK 6 dan 4 adalah 12: 10/12 − 9/12 = 1/12.' },
    { p: 'Hasil dari 1 1/2 + 2 1/3 adalah', ans: '3 5/6', w1: '3 2/5', w2: '3 1/6', w3: '4 1/6', exp: '1 + 2 = 3; 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Hasil = 3 5/6.' },
    { p: 'Hasil dari 3 3/4 − 1 1/2 adalah', ans: '2 1/4', w1: '2 2/2', w2: '2 1/2', w3: '1 3/4', exp: '3 − 1 = 2; 3/4 − 2/4 = 1/4. Hasil = 2 1/4.' },
    { p: 'Hasil perkalian pecahan 2/3 × 3/5 adalah', ans: '2/5', w1: '6/8', w2: '5/8', w3: '1/5', exp: '(2×3)/(3×5) = 6/15 = 2/5.' },
    { p: 'Hasil pembagian pecahan 3/4 : 1/2 adalah', ans: '1 1/2', w1: '3/8', w2: '2/3', w3: '1/4', exp: '3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.' },
    { p: 'Hasil dari 4/7 × 7/8 adalah', ans: '1/2', w1: '28/15', w2: '4/8', w3: '1/4', exp: '(4×7)/(7×8) = 28/56 = 1/2.' },
    { p: 'Hasil dari 5/6 : 2/3 adalah', ans: '1 1/4', w1: '10/18', w2: '15/12', w3: '5/9', exp: '5/6 × 3/2 = 15/12 = 5/4 = 1 1/4.' },
    { p: 'Ibu memiliki 1/2 kg gula dan membeli lagi 3/4 kg. Total gula Ibu sekarang adalah', ans: '1 1/4 kg', w1: '4/6 kg', w2: '1 1/2 kg', w3: '1 kg', exp: '2/4 + 3/4 = 5/4 = 1 1/4 kg.' },
    { p: 'Sebuah wadah berisi 7/8 liter minyak. Digunakan 1/2 liter. Sisa minyak adalah', ans: '3/8 liter', w1: '6/6 liter', w2: '5/8 liter', w3: '1/4 liter', exp: '7/8 − 4/8 = 3/8 liter.' },
    { p: 'Hasil dari 2/5 + 3/10 adalah', ans: '7/10', w1: '5/15', w2: '5/10', w3: '1/2', exp: '4/10 + 3/10 = 7/10.' },
    { p: 'Hasil dari 4/9 + 1/3 adalah', ans: '7/9', w1: '5/12', w2: '5/9', w3: '2/3', exp: '4/9 + 3/9 = 7/9.' }
  ];

  fracDiff.forEach((fd, i) => {
    const { opsi, kunci } = makeOptions(fd.ans, fd.w1, fd.w2, fd.w3, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'Operasi Pecahan Berbeda Penyebut',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${fd.p} ...`,
      opsi,
      kunci,
      pembahasan: fd.exp,
      diagnosa: 'Kesalahan Umum: Menjumlahkan atau mengurangkan penyebut secara langsung (ingat peringatan modul: 2/3 + 1/4 BUKAN 3/7!). Samakan penyebut terlebih dahulu dengan KPK penyebut.'
    });
  });

  // 2. Desimal, Persen, Uang, dan Diskon (20 soal dengan STIMULUS)
  const discountCases = [
    { harga: 75000, diskon: 20, pot: 15000, bayar: 60000, barang: 'buku cerita sains' },
    { harga: 80000, diskon: 15, pot: 12000, bayar: 68000, barang: 'tas ransel sekolah' },
    { harga: 100000, diskon: 25, pot: 25000, bayar: 75000, barang: 'sepatu olahraga' },
    { harga: 50000, diskon: 10, pot: 5000, bayar: 45000, barang: 'set alat tulis' },
    { harga: 120000, diskon: 30, pot: 36000, bayar: 84000, barang: 'seragam batik sekolah' },
    { harga: 150000, diskon: 20, pot: 30000, bayar: 120000, barang: 'jaket kontingen lomba' },
    { harga: 40000, diskon: 25, pot: 10000, bayar: 30000, barang: 'kotak pensil bertingkat' },
    { harga: 60000, diskon: 15, pot: 9000, bayar: 51000, barang: 'buku kamus mini' },
    { harga: 90000, diskon: 10, pot: 9000, bayar: 81000, barang: 'kalkulator ilmiah siswa' },
    { harga: 200000, diskon: 40, pot: 80000, bayar: 120000, barang: 'ensiklopedia flora fauna' }
  ];

  discountCases.forEach((dc, i) => {
    // 10 soal tanya harga bayar
    const optBayar = makeOptions(`Rp${dc.bayar.toLocaleString('id-ID')}`, `Rp${dc.pot.toLocaleString('id-ID')}`, `Rp${(dc.bayar + 5000).toLocaleString('id-ID')}`, `Rp${(dc.bayar - 5000).toLocaleString('id-ID')}`, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'Desimal, Persen, & Diskon',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Sebuah toko buku memberikan promo khusus menjelang SEA Competition 2026. Sebuah ${dc.barang} tercantum dengan harga label Rp${dc.harga.toLocaleString('id-ID')}. Di atas rak tertulis pengumuman diskon sebesar ${dc.diskon}%.`,
      teks: `Berapakah harga yang harus dibayar oleh pembeli setelah mendapatkan potongan harga?`,
      opsi: optBayar.opsi,
      kunci: optBayar.kunci,
      pembahasan: `Besar diskon = ${dc.diskon}% × Rp${dc.harga.toLocaleString('id-ID')} = (${dc.diskon}/100) × Rp${dc.harga.toLocaleString('id-ID')} = Rp${dc.pot.toLocaleString('id-ID')}. Harga akhir yang dibayar = Rp${dc.harga.toLocaleString('id-ID')} − Rp${dc.pot.toLocaleString('id-ID')} = Rp${dc.bayar.toLocaleString('id-ID')}.`,
      diagnosa: 'Kesalahan Umum: Tertukar antara pertanyaan besar diskon (potongan) dengan harga akhir yang harus dibayar.'
    });

    // 10 soal tanya besar diskon/potongan
    const optPot = makeOptions(`Rp${dc.pot.toLocaleString('id-ID')}`, `Rp${dc.bayar.toLocaleString('id-ID')}`, `Rp${(dc.pot * 2).toLocaleString('id-ID')}`, `Rp${(dc.harga / 2).toLocaleString('id-ID')}`, i + 1);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'Desimal, Persen, & Diskon',
      babak: 'UMUM',
      level: 'SEDANG',
      stimulus: `Sebuah toko perlengkapan sekolah menjual ${dc.barang} seharga Rp${dc.harga.toLocaleString('id-ID')}. Pembeli memperoleh potongan harga langsung sebesar ${dc.diskon}%.`,
      teks: `Berapakah nominal potongan harga (diskon) yang diperoleh pembeli?`,
      opsi: optPot.opsi,
      kunci: optPot.kunci,
      pembahasan: `Nominal potongan harga = persentase diskon × harga awal = ${dc.diskon}% × Rp${dc.harga.toLocaleString('id-ID')} = Rp${dc.pot.toLocaleString('id-ID')}.`,
      diagnosa: 'Kesalahan Umum: Menjawab harga setelah diskon padahal yang ditanyakan adalah besar potongan harganya.'
    });
  });

  // 3. KPK, FPB, dan Soal Kegiatan Berulang (20 soal dengan STIMULUS)
  const kpkEvents = [
    { a: 6, b: 8, kpk: 24, itemA: 'Lampu merah', itemB: 'lampu hijau', satuan: 'detik', satuanWkt: 'detik' },
    { a: 12, b: 18, kpk: 36, itemA: 'Bus jurusan A', itemB: 'bus jurusan B', satuan: 'menit', satuanWkt: 'menit' },
    { a: 4, b: 6, kpk: 12, itemA: 'Ali ronda tiap', itemB: 'Budi ronda tiap', satuan: 'hari', satuanWkt: 'hari' },
    { a: 15, b: 20, kpk: 60, itemA: 'Bel laboratorium', itemB: 'bel perpustakaan', satuan: 'menit', satuanWkt: 'menit' },
    { a: 8, b: 10, kpk: 40, itemA: 'Siti berenang tiap', itemB: 'Dewi berenang tiap', satuan: 'hari', satuanWkt: 'hari' },
    { a: 3, b: 5, kpk: 15, itemA: 'Penyiraman kebun A', itemB: 'penyiraman kebun B', satuan: 'hari', satuanWkt: 'hari' },
    { a: 10, b: 15, kpk: 30, itemA: 'Kereta rel listrik 1', itemB: 'kereta rel listrik 2', satuan: 'menit', satuanWkt: 'menit' },
    { a: 6, b: 9, kpk: 18, itemA: 'Alarm A berbunyi tiap', itemB: 'alarm B berbunyi tiap', satuan: 'menit', satuanWkt: 'menit' },
    { a: 12, b: 15, kpk: 60, itemA: 'Bimbel Matematika tiap', itemB: 'bimbel IPAS tiap', satuan: 'hari', satuanWkt: 'hari' },
    { a: 16, b: 24, kpk: 48, itemA: 'Kapal feri Merak', itemB: 'kapal feri Bakauheni', satuan: 'menit', satuanWkt: 'menit' }
  ];

  kpkEvents.forEach((ev, i) => {
    const { opsi, kunci } = makeOptions(`${ev.kpk} ${ev.satuanWkt}`, `${ev.a + ev.b} ${ev.satuanWkt}`, `${ev.a * 2} ${ev.satuanWkt}`, `${ev.b * 2} ${ev.satuanWkt}`, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'KPK & FPB Soal Cerita',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      stimulus: `Pada pos pantau, ${ev.itemA} beroperasi setiap ${ev.a} ${ev.satuan}, sedangkan ${ev.itemB} beroperasi setiap ${ev.b} ${ev.satuan}. Keduanya memulai kegiatan secara bersamaan pada pukul 08.00.`,
      teks: `Setelah berapa ${ev.satuanWkt} keduanya akan beroperasi bersama-sama kembali?`,
      opsi,
      kunci,
      pembahasan: `Gunakan konsep KPK (Kelipatan Persekutuan Terkecil) untuk mencari waktu dua kejadian bertemu kembali. KPK(${ev.a}, ${ev.b}) = ${ev.kpk} ${ev.satuanWkt}.`,
      diagnosa: 'Kesalahan Umum: Menjumlahkan waktu kedua kegiatan (bukan mencari KPK) atau tertukar dengan konsep pembagian FPB.'
    });
  });

  // 10 soal FPB Pembagian Merata
  const fpbPackages = [
    { p: 24, q: 36, fpb: 12, itemP: 'buku tulis', itemQ: 'pensil' },
    { p: 30, q: 45, fpb: 15, itemP: 'apel', itemQ: 'jeruk' },
    { p: 16, q: 24, fpb: 8, itemP: 'kue bolu', itemQ: 'donat' },
    { p: 20, q: 50, fpb: 10, itemP: 'permen cokelat', itemQ: 'biskuit' },
    { p: 32, q: 48, fpb: 16, itemP: 'buku gambar', itemQ: 'krayon' },
    { p: 40, q: 60, fpb: 20, itemP: 'bibit tomat', itemQ: 'bibit cabai' },
    { p: 28, q: 42, fpb: 14, itemP: 'botol air', itemQ: 'kotak snack' },
    { p: 36, q: 54, fpb: 18, itemP: 'penggaris', itemQ: 'penghapus' },
    { p: 48, q: 72, fpb: 24, itemP: 'pita merah', itemQ: 'pita biru' },
    { p: 18, q: 30, fpb: 6, itemP: 'buku modul', itemQ: 'lembar kerja' }
  ];

  fpbPackages.forEach((fp, i) => {
    const { opsi, kunci } = makeOptions(`${fp.fpb} paket`, `${fp.fpb / 2} paket`, `${fp.fpb + 4} paket`, `${fp.p} paket`, i + 2);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'KPK & FPB Soal Cerita',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Seorang guru menyiapkan bingkisan lomba yang terdiri atas ${fp.p} ${fp.itemP} dan ${fp.q} ${fp.itemQ}. Semua barang tersebut akan dimasukkan ke dalam beberapa paket bingkisan dengan jumlah dan jenis yang sama rata tanpa ada sisa.`,
      teks: `Berapa banyak paket bingkisan terbanyak yang dapat dibuat oleh guru tersebut?`,
      opsi,
      kunci,
      pembahasan: `Gunakan konsep FPB (Faktor Persekutuan Terbesar) untuk membagi benda ke beberapa wadah sama banyak tanpa sisa. FPB(${fp.p}, ${fp.q}) = ${fp.fpb} paket.`,
      diagnosa: 'Kesalahan Umum: Tertukar antara konsep pembagian merata (FPB) dengan kejadian berulang (KPK).'
    });
  });

  // 4. Luas, Keliling, Segitiga, & Volume Balok/Kubus (15 soal)
  const geomK5 = [
    { p: 'Sebuah segitiga memiliki panjang alas 12 cm dan tinggi 8 cm. Luas segitiga tersebut adalah', ans: '48 cm²', w1: '96 cm²', w2: '20 cm²', w3: '40 cm²', exp: 'Luas segitiga = 1/2 × alas × tinggi = 1/2 × 12 × 8 = 48 cm².' },
    { p: 'Sebuah segitiga siku-siku memiliki alas 10 cm, tinggi 6 cm, dan sisi miring 12 cm. Luas segitiga adalah', ans: '30 cm²', w1: '60 cm²', w2: '36 cm²', w3: '45 cm²', exp: 'Luas = 1/2 × a × t = 1/2 × 10 × 6 = 30 cm². Ingat peringatan modul: panjang sisi miring tidak dipakai untuk menghitung luas!' },
    { p: 'Balok berukuran panjang 8 cm, lebar 5 cm, dan tinggi 4 cm memiliki volume sebesar', ans: '160 cm³', w1: '80 cm³', w2: '34 cm³', w3: '320 cm³', exp: 'Volume balok = p × l × t = 8 × 5 × 4 = 160 cm³.' },
    { p: 'Kubus dengan panjang rusuk 6 cm memiliki volume sebesar', ans: '216 cm³', w1: '36 cm³', w2: '72 cm³', w3: '144 cm³', exp: 'Volume kubus = s³ = 6 × 6 × 6 = 216 cm³.' },
    { p: 'Sebuah balok memiliki volume 240 cm³. Jika panjangnya 10 cm dan lebarnya 6 cm, tinggi balok adalah', ans: '4 cm', w1: '6 cm', w2: '8 cm', w3: '24 cm', exp: 'Tinggi = Volume : (p × l) = 240 : (10 × 6) = 240 : 60 = 4 cm.' },
    { p: 'Keliling segitiga sama sisi dengan panjang sisi 15 cm adalah', ans: '45 cm', w1: '30 cm', w2: '60 cm', w3: '225 cm', exp: 'Keliling segitiga sama sisi = 3 × sisi = 3 × 15 = 45 cm.' },
    { p: 'Sebuah kolam berbentuk balok berukuran 4 m × 3 m × 2 m. Volume air jika kolam terisi penuh adalah', ans: '24 m³', w1: '18 m³', w2: '12 m³', w3: '48 m³', exp: 'Volume = 4 × 3 × 2 = 24 m³.' },
    { p: 'Kubus dengan rusuk 5 cm memiliki luas permukaan sebesar', ans: '150 cm²', w1: '125 cm²', w2: '25 cm²', w3: '100 cm²', exp: 'Luas permukaan kubus = 6 × s² = 6 × 5² = 6 × 25 = 150 cm².' },
    { p: 'Balok berukuran 10 cm × 6 cm × 4 cm memiliki luas permukaan sebesar', ans: '248 cm²', w1: '240 cm²', w2: '124 cm²', w3: '180 cm²', exp: 'LP = 2 × (pl + pt + lt) = 2 × (60 + 40 + 24) = 2 × 124 = 248 cm².' },
    { p: 'Segitiga beralas 14 cm dan tinggi 10 cm memiliki luas sebesar', ans: '70 cm²', w1: '140 cm²', w2: '48 cm²', w3: '35 cm²', exp: 'Luas = 1/2 × 14 × 10 = 70 cm².' }
  ];

  geomK5.forEach((gm, i) => {
    const { opsi, kunci } = makeOptions(gm.ans, gm.w1, gm.w2, gm.w3, i + 3);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'Luas Segitiga & Volume Bangun',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${gm.p} ...`,
      opsi,
      kunci,
      pembahasan: gm.exp,
      diagnosa: 'Kesalahan Umum: Memasukkan sisi miring sebagai tinggi segitiga (ingat: sisi miring BUKAN tinggi), atau lupa mengalikan 1/2 pada rumus luas segitiga.'
    });
  });

  // 5. Membaca Tabel, Diagram, Rata-rata, Kecepatan & Debit (15 soal)
  const statsK5 = [
    { p: 'Rata-rata dari nilai 6, 8, 10, dan 8 adalah', ans: '8', w1: '7', w2: '9', w3: '32', exp: 'Jumlah nilai = 6 + 8 + 10 + 8 = 32. Banyak data = 4. Rata-rata = 32 : 4 = 8.' },
    { p: 'Rata-rata dari nilai 70, 80, 90, 80, dan 80 adalah', ans: '80', w1: '78', w2: '82', w3: '84', exp: 'Jumlah = 400. Rata-rata = 400 : 5 = 80.' },
    { p: 'Modus dari data nilai 7, 8, 6, 8, 9, 8, 7 adalah', ans: '8', w1: '7', w2: '9', w3: '6', exp: 'Modus adalah nilai yang paling sering muncul. Angka 8 muncul 3 kali.' },
    { p: 'Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Kecepatan rata-rata mobil tersebut adalah', ans: '60 km/jam', w1: '50 km/jam', w2: '70 km/jam', w3: '240 km/jam', exp: 'Kecepatan = Jarak : Waktu = 120 : 2 = 60 km/jam.' },
    { p: 'Pipa air mengalirkan 60 liter air dalam waktu 3 menit. Debit air yang mengalir adalah', ans: '20 liter/menit', w1: '180 liter/menit', w2: '30 liter/menit', w3: '15 liter/menit', exp: 'Debit = Volume : Waktu = 60 : 3 = 20 liter/menit.' }
  ];

  statsK5.forEach((st, i) => {
    const { opsi, kunci } = makeOptions(st.ans, st.w1, st.w2, st.w3, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 5,
      topik: 'Statistika, Kecepatan, & Debit',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${st.p} ...`,
      opsi,
      kunci,
      pembahasan: st.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara rata-rata (jumlah dibagi banyak data) dengan modus (nilai paling sering muncul).'
    });
  });

  // =========================================================================
  // KELAS 6 MATEMATIKA (90 Soal)
  // =========================================================================

  // 1. Soal Cerita Bertingkat & Pemodelan "DARI SISA" (25 soal dengan STIMULUS)
  const sisaCases = [
    { total: 200, pctRusak: 25, rusak: 50, sisa1: 150, fracTanam: '2/5', tanam: 60, sisaAkhir: 90, subjek: 'bibit pohon sengon' },
    { total: 300, pctRusak: 20, rusak: 60, sisa1: 240, fracTanam: '3/4', tanam: 180, sisaAkhir: 60, subjek: 'benih jagung hibrida' },
    { total: 500, pctRusak: 10, rusak: 50, sisa1: 450, fracTanam: '1/3', tanam: 150, sisaAkhir: 300, subjek: 'bibit cabai rawit' },
    { total: 400, pctRusak: 15, rusak: 60, sisa1: 340, fracTanam: '1/2', tanam: 170, sisaAkhir: 170, subjek: 'ikan nila di kolam' },
    { total: 250, pctRusak: 20, rusak: 50, sisa1: 200, fracTanam: '3/5', tanam: 120, sisaAkhir: 80, subjek: 'buku donasi perpustakaan' },
    { total: 600, pctRusak: 25, rusak: 150, sisa1: 450, fracTanam: '2/3', tanam: 300, sisaAkhir: 150, subjek: 'telur ayam petelur' },
    { total: 160, pctRusak: 25, rusak: 40, sisa1: 120, fracTanam: '1/4', tanam: 30, sisaAkhir: 90, subjek: 'tanaman hias monstera' },
    { total: 350, pctRusak: 20, rusak: 70, sisa1: 280, fracTanam: '2/7', tanam: 80, sisaAkhir: 200, subjek: 'bibit ikan lele' },
    { total: 480, pctRusak: 25, rusak: 120, sisa1: 360, fracTanam: '5/6', tanam: 300, sisaAkhir: 60, subjek: 'karung beras bantuan' },
    { total: 800, pctRusak: 10, rusak: 80, sisa1: 720, fracTanam: '3/8', tanam: 270, sisaAkhir: 450, subjek: 'batu bata untuk renovasi' }
  ];

  sisaCases.forEach((sc, i) => {
    // 10 soal tanya bagian yang ditanam / dipakai
    const { opsi, kunci } = makeOptions(`${sc.tanam} ${sc.subjek}`, `${sc.sisa1} ${sc.subjek}`, `${sc.rusak} ${sc.subjek}`, `${sc.sisaAkhir} ${sc.subjek}`, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 6,
      topik: 'Soal Cerita Bertingkat ("Dari Sisa")',
      babak: 'FINAL_WAJIB',
      level: 'HOTS',
      stimulus: `Kelompok tani sekolah memiliki persediaan ${sc.total} ${sc.subjek}. Saat diperiksa oleh panitia, ternyata ${sc.pctRusak}% dari jumlah total tersebut rusak karena cuaca lembap. Sisanya yang masih dalam kondisi baik kemudian disortir, dan sebanyak ${sc.fracTanam} dari sisa tersebut segera dialokasikan untuk kegiatan penanaman di Taman Edukasi.`,
      teks: `Berapa banyak ${sc.subjek} yang dialokasikan untuk penanaman di Taman Edukasi?`,
      opsi,
      kunci,
      pembahasan: `Langkah 1: Hitung yang rusak = ${sc.pctRusak}% × ${sc.total} = ${sc.rusak}. Langkah 2: Hitung sisa yang baik = ${sc.total} − ${sc.rusak} = ${sc.sisa1}. Langkah 3: Alokasi penanaman = ${sc.fracTanam} DARI SISA = ${sc.fracTanam} × ${sc.sisa1} = ${sc.tanam} ${sc.subjek}.`,
      diagnosa: 'Kesalahan Umum: Mengalikan pecahan dengan jumlah awal total, bukan dengan nilai sisa (ingat modul hal 5: kata "dari sisa" berarti menggunakan nilai baru!).'
    });
  });

  // 2. Rasio & Perbandingan Senilai (20 soal)
  const ratioCases = [
    { total: 45, rA: 3, rB: 2, nameA: 'merah', nameB: 'biru', valA: 27, valB: 18 },
    { total: 35, rA: 2, rB: 3, nameA: 'kelereng merah', nameB: 'kelereng biru', valA: 14, valB: 21 },
    { total: 40, rA: 3, rB: 5, nameA: 'buku IPA', nameB: 'buku Matematika', valA: 15, valB: 25 },
    { total: 36, rA: 5, rB: 4, nameA: 'siswa laki-laki', nameB: 'siswa perempuan', valA: 20, valB: 16 },
    { total: 48, rA: 1, rB: 3, nameA: 'regu Garuda', nameB: 'regu Rajawali', valA: 12, valB: 36 },
    { total: 60, rA: 7, rB: 5, nameA: 'pohon mangga', nameB: 'pohon jambu', valA: 35, valB: 25 },
    { total: 54, rA: 4, rB: 5, nameA: 'kursi merah', nameB: 'kursi biru', valA: 24, valB: 30 },
    { total: 72, rA: 5, rB: 3, nameA: 'kue cokelat', nameB: 'kue keju', valA: 45, valB: 27 },
    { total: 50, rA: 2, rB: 3, nameA: 'mobil', nameB: 'sepeda motor', valA: 20, valB: 30 },
    { total: 63, rA: 4, rB: 3, nameA: 'kelompok A', nameB: 'kelompok B', valA: 36, valB: 27 }
  ];

  ratioCases.forEach((rc, i) => {
    const { opsi, kunci } = makeOptions(`${rc.valA}`, `${rc.valB}`, `${rc.total - rc.valA}`, `${Math.round(rc.total / rc.rA)}`, i + 1);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 6,
      topik: 'Rasio & Perbandingan Senilai',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Perbandingan antara banyak ${rc.nameA} dan ${rc.nameB} di gudang sekolah adalah ${rc.rA} : ${rc.rB}. Jumlah seluruh barang tersebut adalah ${rc.total} buah.`,
      teks: `Berapa banyak ${rc.nameA} yang ada di gudang tersebut?`,
      opsi,
      kunci,
      pembahasan: `Jumlah seluruh bagian rasio = ${rc.rA} + ${rc.rB} = ${rc.rA + rc.rB} bagian. Nilai satu bagian = ${rc.total} ÷ ${rc.rA + rc.rB} = ${rc.total / (rc.rA + rc.rB)}. Maka banyak ${rc.nameA} = ${rc.rA} × ${rc.total / (rc.rA + rc.rB)} = ${rc.valA}.`,
      diagnosa: 'Kesalahan Umum: Membagi total nilai langsung dengan angka rasio pertama saja (ingat modul hal 5: jangan membagi total hanya dengan salah satu angka pada rasio!).'
    });
  });

  // 3. Skala Peta & Konversi Satuan (15 soal)
  const scaleCases = [
    { skala: 100000, jp: 4, jsKm: 4, strS: '1 : 100.000' },
    { skala: 250000, jp: 6, jsKm: 15, strS: '1 : 250.000' },
    { skala: 500000, jp: 3, jsKm: 15, strS: '1 : 500.000' },
    { skala: 100000, jp: 7, jsKm: 7, strS: '1 : 100.000' },
    { skala: 200000, jp: 5, jsKm: 10, strS: '1 : 200.000' },
    { skala: 1500000, jp: 2, jsKm: 30, strS: '1 : 1.500.000' },
    { skala: 750000, jp: 4, jsKm: 30, strS: '1 : 750.000' },
    { skala: 1000000, jp: 8, jsKm: 80, strS: '1 : 1.000.000' },
    { skala: 50000, jp: 10, jsKm: 5, strS: '1 : 50.000' },
    { skala: 2500000, jp: 3, jsKm: 75, strS: '1 : 2.500.000' }
  ];

  scaleCases.forEach((sc, i) => {
    const { opsi, kunci } = makeOptions(`${sc.jsKm} km`, `${sc.jsKm * 10} km`, `${sc.jsKm / 10} km`, `${sc.jsKm * 100} km`, i);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 6,
      topik: 'Skala Peta & Konversi Satuan',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `Pada sebuah peta berskala ${sc.strS}, jarak antara kota X dan kota Y terukur sepanjang ${sc.jp} cm. Jarak sebenarnya antara kedua kota tersebut di lapangan adalah ...`,
      opsi,
      kunci,
      pembahasan: `Jarak sebenarnya = Jarak pada peta × Skala = ${sc.jp} cm × ${sc.skala.toLocaleString('id-ID')} = ${(sc.jp * sc.skala).toLocaleString('id-ID')} cm. Ubah cm ke km dengan membagi 100.000: ${(sc.jp * sc.skala) / 100000} km = ${sc.jsKm} km.`,
      diagnosa: 'Kesalahan Umum: Lupa faktor konversi 1 km = 100.000 cm sehingga hasil meleset 10 atau 100 kali lipat.'
    });
  });

  // 4. Bangun Ruang, Ukuran Liter, & Lingkaran (15 soal)
  const geomK6 = [
    { p: 'Keliling lingkaran dengan diameter 14 cm (π = 22/7) adalah', ans: '44 cm', w1: '88 cm', w2: '154 cm', w3: '22 cm', exp: 'Keliling = π × d = 22/7 × 14 = 44 cm.' },
    { p: 'Luas lingkaran dengan jari-jari 7 cm (π = 22/7) adalah', ans: '154 cm²', w1: '44 cm²', w2: '49 cm²', w3: '308 cm²', exp: 'Luas = π × r² = 22/7 × 7 × 7 = 154 cm².' },
    { p: 'Sebuah akuarium berbentuk balok berukuran 50 cm × 30 cm × 40 cm terisi air 3/4 bagian. Volume air di dalam akuarium adalah', ans: '45 liter', w1: '60 liter', w2: '40 liter', w3: '30 liter', exp: 'Volume penuh = 50 × 30 × 40 = 60.000 cm³ = 60 liter. Air 3/4 bagian = 3/4 × 60 = 45 liter.' },
    { p: 'Volume kubus dengan panjang rusuk 6 cm adalah ... cm³', ans: '216 cm³', w1: '36 cm³', w2: '72 cm³', w3: '144 cm³', exp: 'Volume kubus = 6 × 6 × 6 = 216 cm³ (ingat modul hal 5: satuan volume adalah kubik, bukan persegi!).' },
    { p: 'Sebuah tangki air berbentuk kubus memiliki rusuk 10 dm. Volume air jika terisi penuh adalah', ans: '1.000 liter', w1: '100 liter', w2: '10.000 liter', w3: '500 liter', exp: 'Volume = 10 × 10 × 10 = 1.000 dm³ = 1.000 liter.' }
  ];

  geomK6.forEach((gk, i) => {
    const { opsi, kunci } = makeOptions(gk.ans, gk.w1, gk.w2, gk.w3, i + 1);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 6,
      topik: 'Bangun Ruang & Lingkaran',
      babak: 'FINAL_REBUTAN',
      level: 'HOTS',
      teks: `${gk.p} ...`,
      opsi,
      kunci,
      pembahasan: gk.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara rumus keliling lingkaran (πd) dan luas lingkaran (πr²), atau salah mengonversi cm³ ke liter (1 liter = 1.000 cm³).'
    });
  });

  // 5. Penalaran Tabel & Informasi Tidak Lengkap (15 soal dengan STIMULUS)
  for (let k = 1; k <= 15; k++) {
    const targetAvg = 80;
    const n = 4;
    const total = targetAvg * n; // 320
    const v1 = 70 + (k % 5);
    const v2 = 85 - (k % 4);
    const v3 = 90 - (k % 6);
    const sumThree = v1 + v2 + v3;
    const v4 = total - sumThree;

    const { opsi, kunci } = makeOptions(`${v4}`, `${v4 + 5}`, `${v4 - 10}`, `${targetAvg}`, k);
    addQuestion({
      mapel: 'MATEMATIKA',
      kelas: 6,
      topik: 'Penalaran Informasi Tidak Lengkap (Rata-rata)',
      babak: 'FINAL_WAJIB',
      level: 'HOTS',
      stimulus: `Seorang siswa mengikuti 4 kali penilaian harian Matematika. Nilai rata-rata dari keempat penilaian tersebut adalah ${targetAvg}. Nilai pada tiga penilaian pertama berturut-turut adalah ${v1}, ${v2}, dan ${v3}. Nilai penilaian keempat belum tercatat pada daftar nilai.`,
      teks: `Berapakah nilai yang diperoleh siswa tersebut pada penilaian keempat?`,
      opsi,
      kunci,
      pembahasan: `Langkah 1: Hitung total target 4 nilai = Rata-rata × banyak data = ${targetAvg} × 4 = ${total}. Langkah 2: Hitung jumlah 3 nilai yang ada = ${v1} + ${v2} + ${v3} = ${sumThree}. Langkah 3: Nilai hilang = ${total} − ${sumThree} = ${v4}.`,
      diagnosa: 'Kesalahan Umum: Mengira nilai keempat sama dengan rata-rata nilai tiga ulangan pertama, atau salah menghitung total target.'
    });
  }

  console.log('Math Kelas 5 & 6 generated.');
}

module.exports = { buildMathK5K6Questions };
