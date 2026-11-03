/**
 * RANGKUMAN MATERI LENGKAP MATEMATIKA (MTK) & IPAS (IPA & IPS)
 * Kurikulum Merdeka & Kurikulum Nasional untuk SD Kelas 4, 5, dan 6
 */

const RANGKUMAN_DATA = [
  // =========================================================================
  // MATEMATIKA - KELAS 4
  // =========================================================================
  {
    id: 'mtk-4-1',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Bilangan & Operasi Hitung',
    judul: 'Bilangan Cacah Besar & Nilai Tempat',
    icon: '🔢',
    ringkasan: 'Bilangan cacah besar dipelajari hingga ratusan ribu (100.000). Setiap angka pada bilangan memiliki nilai tempat tergantung pada posisinya: Satuan, Puluhan, Ratusan, Ribuan, Puluh Ribuan, dan Ratus Ribuan.',
    poinPenting: [
      'Nilai tempat pada bilangan 47.285: Angka 4 = Puluh Ribuan (40.000), 7 = Ribuan (7.000), 2 = Ratusan (200), 8 = Puluhan (80), 5 = Satuan (5).',
      'Bentuk panjang (dekomposisi): 47.285 = 40.000 + 7.000 + 200 + 80 + 5.',
      'Membandingkan bilangan: Bandingkan angka dari nilai tempat paling kiri (terbesar). Jika sama, geser ke kanan satu per satu.'
    ],
    rumus: [
      'Dekomposisi Bilangan: Nilai Angka = Angka × Nilai Tempat',
      'Contoh: 7 pada posisi ribuan = 7 × 1.000 = 7.000'
    ],
    contohSoal: {
      tanya: 'Nilai angka 7 pada bilangan 73.420 adalah ...',
      kunci: '70.000 (Tujuh Puluh Ribu)',
      bahas: 'Angka 7 menempati posisi puluh ribuan, sehingga bernilai 7 × 10.000 = 70.000.'
    },
    tags: ['bilangan cacah', 'nilai tempat', 'dekomposisi', 'ribuan', 'puluh ribuan']
  },
  {
    id: 'mtk-4-2',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Bilangan & Operasi Hitung',
    judul: 'Operasi Hitung Campuran (Aturan Kabataku)',
    icon: '➕',
    ringkasan: 'Operasi hitung campuran menggabungkan penjumlahan, pengurangan, perkalian, dan pembagian. Urutan pengerjaan harus mematuhi hierarki matematika (Kabataku) agar hasilnya benar.',
    poinPenting: [
      'Urutan pengerjaan: 1. Operasi di dalam tanda kurung ( ... ) -> 2. Perkalian (×) dan Pembagian (:) dari kiri ke kanan -> 3. Penjumlahan (+) dan Pengurangan (-) dari kiri ke kanan.',
      'Perkalian dan pembagian sama kuat, kerjakan yang muncul lebih dahulu di sebelah kiri.',
      'Penjumlahan dan pengurangan sama kuat, kerjakan yang muncul lebih dahulu di sebelah kiri.'
    ],
    rumus: [
      'Hierarki: ( )  >>  ( × dan : )  >>  ( + dan - )',
      'Contoh: 120 - (8 × 9) + 15 = 120 - 72 + 15 = 48 + 15 = 63'
    ],
    contohSoal: {
      tanya: 'Berapakah hasil dari 50 + 25 × 4 - 30 : 2 ?',
      kunci: '135',
      bahas: 'Kerjakan × dan : dulu: 25 × 4 = 100 dan 30 : 2 = 15. Lalu jumlah & kurang dari kiri: 50 + 100 - 15 = 150 - 15 = 135.'
    },
    tags: ['operasi campuran', 'kabataku', 'tanda kurung', 'perkalian', 'pembagian']
  },
  {
    id: 'mtk-4-3',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Teori Bilangan',
    judul: 'Kelipatan, Faktor, & Bilangan Prima',
    icon: '🎯',
    ringkasan: 'Kelipatan diperoleh dengan mengalikan suatu bilangan dengan bilangan asli berturut-turut. Faktor adalah semua bilangan yang dapat membagi habis bilangan tersebut tanpa sisa.',
    poinPenting: [
      'Kelipatan suatu bilangan: Kelipatan 6 = 6, 12, 18, 24, 30, ...',
      'Faktor dari bilangan: Faktor dari 18 = 1, 2, 3, 6, 9, 18 (karena 1×18, 2×9, 3×6 menghasilkan 18).',
      'Bilangan Prima: Bilangan yang hanya mempunyai 2 faktor, yaitu 1 dan bilangan itu sendiri (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...). 2 adalah satu-satunya bilangan prima genap.',
      'Faktor Prima: Faktor-faktor dari suatu bilangan yang merupakan bilangan prima (faktor prima 18 adalah 2 dan 3).'
    ],
    rumus: [
      'Bilangan Prima < 20: 2, 3, 5, 7, 11, 13, 17, 19',
      'Faktor 12 = {1, 2, 3, 4, 6, 12}; Faktor Prima 12 = {2, 3}'
    ],
    contohSoal: {
      tanya: 'Faktor dari 24 yang merupakan bilangan prima adalah ...',
      kunci: '2 dan 3',
      bahas: 'Faktor dari 24 adalah 1, 2, 3, 4, 6, 8, 12, 24. Di antara faktor tersebut, yang merupakan bilangan prima hanya 2 dan 3.'
    },
    tags: ['kelipatan', 'faktor', 'bilangan prima', 'faktor prima']
  },
  {
    id: 'mtk-4-4',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan',
    judul: 'Pecahan Senilai & Membandingkan Pecahan',
    icon: '🍰',
    ringkasan: 'Pecahan terdiri dari pembilang (atas) dan penyebut (bawah). Pecahan senilai adalah pecahan yang nilainya sama meskipun lambang bilangannya berbeda.',
    poinPenting: [
      'Menentukan pecahan senilai: Kalikan atau bagikan pembilang dan penyebut dengan bilangan yang sama (bukan nol). Contoh: 2/3 = (2×2)/(3×2) = 4/6.',
      'Menyederhanakan pecahan: Bagi pembilang dan penyebut dengan FPB keduanya hingga tidak dapat dibagi lagi. Contoh: 6/8 = (6:2)/(8:2) = 3/4.',
      'Membandingkan pecahan berpenyebut sama: Jika penyebut sama, pecahan dengan pembilang lebih besar nilainya lebih besar (5/8 > 3/8).',
      'Penjumlahan/Pengurangan berpenyebut sama: Cukup jumlahkan/kurangkan pembilangnya, penyebut tetap (2/7 + 3/7 = 5/7).'
    ],
    rumus: [
      'Pecahan Senilai: a/b = (a × n)/(b × n) = (a : m)/(b : m)',
      'Penjumlahan: a/c + b/c = (a + b)/c'
    ],
    contohSoal: {
      tanya: 'Pecahan 12/16 jika disederhanakan ke bentuk paling sederhana menjadi ...',
      kunci: '3/4',
      bahas: 'FPB dari 12 dan 16 adalah 4. Bagi pembilang dan penyebut dengan 4: 12:4 = 3, 16:4 = 4 -> 3/4.'
    },
    tags: ['pecahan', 'pecahan senilai', 'penyederhanaan pecahan', 'pembilang', 'penyebut']
  },
  {
    id: 'mtk-4-5',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Pengukuran',
    judul: 'Pengukuran Panjang, Berat, & Waktu',
    icon: '📏',
    ringkasan: 'Pengukuran satuan baku untuk panjang (meter), massa/berat (gram/kilogram), dan waktu (jam, menit, detik) menggunakan tangga satuan konversi.',
    poinPenting: [
      'Tangga Satuan Panjang: km - hm - dam - m - dm - cm - mm (Turun 1 tingkat dikali 10, naik 1 tingkat dibagi 10). Contoh: 1 km = 1.000 m; 1 m = 100 cm.',
      'Tangga Satuan Berat: kg - hg (ons) - dag - g - dg - cg - mg. 1 kg = 1.000 g; 1 kg = 10 ons; 1 ton = 1.000 kg; 1 kuintal = 100 kg.',
      'Satuan Waktu: 1 jam = 60 menit; 1 menit = 60 detik; 1 jam = 3.600 detik; 1 hari = 24 jam.'
    ],
    rumus: [
      '1 km = 10 hm = 100 dam = 1.000 m = 100.000 cm',
      '1 ton = 10 kuintal = 1.000 kg; 1 kg = 10 ons = 1.000 g',
      'Durasi = Waktu Selesai - Waktu Mulai'
    ],
    contohSoal: {
      tanya: 'Jarak 3 km 250 m sama dengan berapa meter?',
      kunci: '3.250 meter',
      bahas: '3 km = 3 × 1.000 m = 3.000 m. Ditambah 250 m = 3.250 meter.'
    },
    tags: ['pengukuran', 'satuan panjang', 'satuan berat', 'satuan waktu', 'konversi satuan']
  },
  {
    id: 'mtk-4-6',
    kelas: 4,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri',
    judul: 'Keliling & Luas Bangun Datar (Persegi, Persegi Panjang, Segitiga)',
    icon: '📐',
    ringkasan: 'Keliling adalah panjang seluruh garis pembatas suatu bangun datar. Luas adalah besarnya daerah permukaan yang dibatasi oleh bangun datar.',
    poinPenting: [
      'Persegi: Memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90°). Keliling K = 4 × s; Luas L = s × s = s².',
      'Persegi Panjang: Memiliki 2 pasang sisi berhadapan sama panjang dan 4 sudut siku-siku. Keliling K = 2 × (p + l); Luas L = p × l.',
      'Segitiga: Memiliki 3 sisi dan 3 sudut (jumlah seluruh sudut segitiga = 180°). Keliling K = a + b + c; Luas L = 1/2 × alas × tinggi.'
    ],
    rumus: [
      'Persegi: K = 4 × s  |  L = s²',
      'Persegi Panjang: K = 2 × (p + l)  |  L = p × l',
      'Segitiga: K = a + b + c  |  L = 1/2 × a × t'
    ],
    contohSoal: {
      tanya: 'Sebuah taman berbentuk persegi memiliki keliling 64 m. Berapakah luas taman tersebut?',
      kunci: '256 m²',
      bahas: 'Sisi persegi = K : 4 = 64 : 4 = 16 m. Luas = s × s = 16 × 16 = 256 m².'
    },
    tags: ['bangun datar', 'keliling', 'luas', 'persegi', 'persegi panjang', 'segitiga']
  },

  // =========================================================================
  // MATEMATIKA - KELAS 5
  // =========================================================================
  {
    id: 'mtk-5-1',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan',
    judul: 'Operasi Pecahan Berbeda Penyebut & Pecahan Campuran',
    icon: '⚖️',
    ringkasan: 'Untuk menjumlahkan atau mengurangkan pecahan dengan penyebut berbeda, penyebut harus disamakan terlebih dahulu menggunakan KPK dari kedua penyebut.',
    poinPenting: [
      'Langkah Penjumlahan/Pengurangan: 1. Cari KPK dari penyebut-penyebutnya. 2. Sesuaikan pembilangnya. 3. Operasikan pembilangnya. 4. Sederhanakan jika perlu.',
      'Perkalian Pecahan: Kalikan pembilang dengan pembilang, dan penyebut dengan penyebut: (a/b) × (c/d) = (a×c)/(b×d).',
      'Pembagian Pecahan: Balikkan pecahan kedua (pembagi) lalu kalikan: (a/b) : (c/d) = (a/b) × (d/c).',
      'Pecahan Campuran: Ubah menjadi pecahan biasa sebelum dikali atau dibagi. Contoh: 2 1/3 = (2×3 + 1)/3 = 7/3.'
    ],
    rumus: [
      'Penjumlahan: a/b + c/d = (a×d + b×c) / (b×d)',
      'Perkalian: a/b × c/d = (a × c) / (b × d)',
      'Pembagian: a/b : c/d = a/b × d/c = (a × d) / (b × c)'
    ],
    contohSoal: {
      tanya: 'Berapakah hasil dari 5/6 - 1/3 ?',
      kunci: '1/2',
      bahas: 'KPK 6 dan 3 adalah 6. 1/3 = 2/6. Maka: 5/6 - 2/6 = 3/6 = 1/2.'
    },
    tags: ['pecahan', 'pecahan campuran', 'perkalian pecahan', 'pembagian pecahan', 'kpk penyebut']
  },
  {
    id: 'mtk-5-2',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Pecahan & Desimal',
    judul: 'Desimal, Persen, & Hubungannya dengan Pecahan',
    icon: '🪙',
    ringkasan: 'Desimal adalah pecahan dengan penyebut 10, 100, 1.000, dst. yang ditulis menggunakan tanda koma. Persen berarti per seratus (disimbolkan %).',
    poinPenting: [
      'Pecahan ke Desimal: Bagi pembilang dengan penyebut. Contoh: 3/4 = 3 : 4 = 0,75; 1/2 = 0,5; 1/4 = 0,25; 1/5 = 0,2.',
      'Desimal ke Persen: Kalikan dengan 100%. Contoh: 0,75 × 100% = 75%; 0,4 = 40%.',
      'Persen ke Pecahan Biasa: Jadikan per 100 lalu sederhanakan. Contoh: 25% = 25/100 = 1/4; 50% = 1/2.',
      'Operasi Desimal: Pada penjumlahan/pengurangan desimal, tanda koma HARUS diletakkan lurus vertikal.'
    ],
    rumus: [
      '1/2 = 0,5 = 50%  |  1/4 = 0,25 = 25%  |  3/4 = 0,75 = 75%',
      '1/5 = 0,2 = 20%  |  2/5 = 0,4 = 40%   |  3/8 = 0,375 = 37,5%',
      'Nilai Persentase: p% × Total = (p/100) × Total'
    ],
    contohSoal: {
      tanya: 'Sebuah tas berharga Rp80.000 mendapat potongan harga (diskon) 15%. Berapakah harga tas setelah diskon?',
      kunci: 'Rp68.000',
      bahas: 'Diskon = 15/100 × Rp80.000 = Rp12.000. Harga bayar = Rp80.000 - Rp12.000 = Rp68.000.'
    },
    tags: ['desimal', 'persen', 'konversi pecahan', 'diskon', 'nilai pecahan']
  },
  {
    id: 'mtk-5-3',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Teori Bilangan',
    judul: 'KPK & FPB (Faktorisasi Prima & Soal Cerita)',
    icon: '🌳',
    ringkasan: 'KPK (Kelipatan Persekutuan Terkecil) digunakan untuk mencari waktu/pertemuan bersama. FPB (Faktor Persekutuan Terbesar) digunakan untuk membagi sejumlah barang menjadi paket-paket sama rata.',
    poinPenting: [
      'Menentukan dengan Pohon Faktor: Buat faktorisasi prima dari masing-masing bilangan (contoh: 24 = 2³ × 3; 36 = 2² × 3²).',
      'Aturan FPB: Kalikan faktor prima yang SAMA dengan pangkat TERKECIL -> FPB(24, 36) = 2² × 3 = 12.',
      'Aturan KPK: Kalikan SEMUA faktor prima yang ada; jika ada faktor sama, pilih pangkat TERBESAR -> KPK(24, 36) = 2³ × 3² = 8 × 9 = 72.',
      'Kata Kunci Soal Cerita KPK: "bersama-sama lagi", "setiap ... hari sekali", "bertemu kembali".',
      'Kata Kunci Soal Cerita FPB: "dibagikan sama banyak", "jumlah kantong terbanyak", "isi sama rata".'
    ],
    rumus: [
      'FPB = Faktor prima sekutu berpangkat terendah',
      'KPK = Semua faktor prima dengan pangkat tertinggi',
      'KPK(a, b) × FPB(a, b) = a × b'
    ],
    contohSoal: {
      tanya: 'Lampu merah menyala setiap 12 detik dan lampu hijau setiap 18 detik. Jika kedua lampu menyala bersamaan pukul 08.00, kapan menyala bersama lagi?',
      kunci: 'Pukul 08.00 lebih 36 detik (08.00.36)',
      bahas: 'Gunakan KPK dari 12 dan 18. 12 = 2² × 3, 18 = 2 × 3². KPK = 2² × 3² = 36 detik.'
    },
    tags: ['kpk', 'fpb', 'pohon faktor', 'faktorisasi prima', 'soal cerita kpk fpb']
  },
  {
    id: 'mtk-5-4',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Perbandingan & Skala',
    judul: 'Perbandingan (Rasio) & Skala Peta',
    icon: '🗺️',
    ringkasan: 'Perbandingan menyatakan relasi ukuran dua atau lebih besaran sejenis. Skala adalah perbandingan antara jarak pada peta/denah dengan jarak sebenarnya di lapangan.',
    poinPenting: [
      'Perbandingan Sederhana: Ditulis A : B. Jika total diketahui, cari nilai 1 bagian = Total / (A + B).',
      'Skala Peta: Ditulis 1 : n, artinya 1 cm pada peta mewakili n cm pada jarak sebenarnya. 1 km = 100.000 cm.',
      'Segitiga Rumus Skala: JP (Jarak Peta) = S × JS; JS (Jarak Sebenarnya) = JP : S; S (Skala) = JP : JS.'
    ],
    rumus: [
      'Skala (S) = Jarak Peta (JP) / Jarak Sebenarnya (JS)',
      'Jarak Sebenarnya (JS) = Jarak Peta (JP) / Skala (S)',
      'Jarak Peta (JP) = Skala (S) × Jarak Sebenarnya (JS)',
      'Ingat: 1 km = 100.000 cm  |  1 m = 100 cm'
    ],
    contohSoal: {
      tanya: 'Jarak kota A dan B pada peta berskala 1 : 250.000 adalah 6 cm. Berapa km jarak sebenarnya?',
      kunci: '15 km',
      bahas: 'JS = JP : S = 6 cm × 250.000 = 1.500.000 cm. Ubah ke km: 1.500.000 : 100.000 = 15 km.'
    },
    tags: ['perbandingan', 'rasio', 'skala', 'jarak peta', 'jarak sebenarnya']
  },
  {
    id: 'mtk-5-5',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Pengukuran',
    judul: 'Kecepatan & Debit',
    icon: '⚡',
    ringkasan: 'Kecepatan mengukur jarak yang ditempuh per satuan waktu. Debit mengukur volume zat cair yang mengalir per satuan waktu.',
    poinPenting: [
      'Segitiga Rumus Kecepatan: s = v × t (Jarak = Kecepatan × Waktu); v = s / t (Kecepatan = Jarak : Waktu); t = s / v (Waktu = Jarak : Kecepatan).',
      'Satuan Kecepatan umum: km/jam atau m/detik. 1 km/jam = 1.000 m / 3.600 detik = 5/18 m/detik.',
      'Debit Zat Cair: D = V / t (Debit = Volume : Waktu); V = D × t; t = V / D.',
      'Hubungan Satuan Volume: 1 liter = 1 dm³ = 1.000 mL = 1.000 cm³; 1 m³ = 1.000 liter.'
    ],
    rumus: [
      'Kecepatan: v = s / t  |  Jarak: s = v × t  |  Waktu: t = s / v',
      'Debit: D = V / t  |  Volume: V = D × t  |  Waktu: t = V / D',
      '1 liter = 1 dm³ = 1.000 mL = 1.000 cm³'
    ],
    contohSoal: {
      tanya: 'Sebuah mobil menempuh jarak 180 km dalam waktu 2 jam 30 menit. Berapakah kecepatan rata-ratanya?',
      kunci: '72 km/jam',
      bahas: '2 jam 30 menit = 2,5 jam. Kecepatan v = s / t = 180 km : 2,5 jam = 72 km/jam.'
    },
    tags: ['kecepatan', 'jarak', 'waktu', 'debit', 'volume zat cair', 'liter']
  },
  {
    id: 'mtk-5-6',
    kelas: 5,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Ruang',
    judul: 'Bangun Ruang Kubus & Balok (Volume & Jaring-jaring)',
    icon: '📦',
    ringkasan: 'Kubus dan balok adalah bangun ruang sisi datar dengan 6 sisi, 12 rusuk, dan 8 titik sudut. Kubus dibatasi oleh 6 persegi kongruen, balok dibatasi oleh 3 pasang persegi panjang.',
    poinPenting: [
      'Kubus: Panjang rusuk s. Volume V = s × s × s = s³; Luas Permukaan LP = 6 × s²; Jumlah panjang rusuk = 12 × s.',
      'Balok: Panjang p, lebar l, tinggi t. Volume V = p × l × t; Luas Permukaan LP = 2 × (p×l + p×t + l×t); Jumlah panjang rusuk = 4 × (p + l + t).',
      'Jaring-jaring: Pola bentangan bidang sisi bangun ruang jika dipotong sepanjang rusuk-rusuknya.'
    ],
    rumus: [
      'Kubus: V = s³  |  LP = 6 × s²  |  Panjang Rusuk = 12 × s',
      'Balok: V = p × l × t  |  LP = 2 × (pl + pt + lt)  |  Panjang Rusuk = 4 × (p + l + t)'
    ],
    contohSoal: {
      tanya: 'Volume sebuah balok adalah 720 cm³. Jika panjangnya 12 cm dan lebarnya 10 cm, berapa tingginya?',
      kunci: '6 cm',
      bahas: 'Tinggi t = V : (p × l) = 720 : (12 × 10) = 720 : 120 = 6 cm.'
    },
    tags: ['bangun ruang', 'kubus', 'balok', 'volume kubus', 'volume balok', 'luas permukaan']
  },

  // =========================================================================
  // MATEMATIKA - KELAS 6
  // =========================================================================
  {
    id: 'mtk-6-1',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Bilangan Bulat',
    judul: 'Bilangan Bulat Negatif & Operasi Hitungnya',
    icon: '❄️',
    ringkasan: 'Bilangan bulat terdiri dari bilangan bulat positif, nol, dan bilangan bulat negatif. Pada garis bilangan, bilangan negatif berada di sebelah kiri nol (semakin ke kiri semakin kecil).',
    poinPenting: [
      'Konsep Negatif: Digunakan untuk suhu di bawah 0°C, kedalaman di bawah permukaan laut, atau kerugian finansial.',
      'Penjumlahan & Pengurangan: Mengurangi bilangan negatif sama dengan menambah bilangan positif: a - (-b) = a + b. Contoh: 5 - (-3) = 5 + 3 = 8.',
      'Aturan Tanda Perkalian & Pembagian: (+) × (+) = (+) ; (-) × (-) = (+) ; (+) × (-) = (-) ; (-) × (+) = (-).',
      'Sama tanda menghasilkan positif (+), beda tanda menghasilkan negatif (-).'
    ],
    rumus: [
      'a - (-b) = a + b',
      '(-a) + (-b) = -(a + b)',
      'Tanda sama: (-) × (-) = (+)  |  (+) : (+) = (+)',
      'Tanda beda: (+) × (-) = (-)  |  (-) : (+) = (-)'
    ],
    contohSoal: {
      tanya: 'Hitung hasil dari -12 + 25 - 8 !',
      kunci: '5',
      bahas: 'Kerjakan dari kiri: -12 + 25 = 13. Lalu 13 - 8 = 5.'
    },
    tags: ['bilangan bulat', 'bilangan negatif', 'garis bilangan', 'operasi tanda']
  },
  {
    id: 'mtk-6-2',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri',
    judul: 'Lingkaran (Unsur-unsur, Keliling, & Luas)',
    icon: '⭕',
    ringkasan: 'Lingkaran adalah bangun datar yang setiap titik tepinya berjarak sama terhadap titik pusat. Nilai pi (π) didekati dengan 22/7 (jika r kelipatan 7) atau 3,14.',
    poinPenting: [
      'Unsur-unsur Lingkaran: Titik Pusat, Jari-jari (r), Diameter (d = 2r), Busur (garis lengkung lingkaran), Tali Busur (ruas garis penghubung dua titik lengkung), Juring (daerah dibatasi 2 jari-jari dan busur), Tembereng (daerah dibatasi busur dan tali busur), Apotema (jarak tegak lurus pusat ke tali busur).',
      'Keliling Lingkaran: K = 2 × π × r = π × d.',
      'Luas Lingkaran: L = π × r × r = π × r².'
    ],
    rumus: [
      'Diameter: d = 2 × r  |  Jari-jari: r = d / 2',
      'Keliling: K = π × d = 2 × π × r',
      'Luas: L = π × r²',
      'Nilai π = 22/7 (untuk r kelipatan 7) atau 3,14'
    ],
    contohSoal: {
      tanya: 'Sebuah lingkaran berjari-jari 7 cm. Hitunglah keliling dan luas lingkaran tersebut (π = 22/7)!',
      kunci: 'Keliling = 44 cm, Luas = 154 cm²',
      bahas: 'K = 2 × π × r = 2 × 22/7 × 7 = 44 cm. L = π × r² = 22/7 × 7 × 7 = 154 cm².'
    },
    tags: ['lingkaran', 'jari-jari', 'diameter', 'keliling lingkaran', 'luas lingkaran', 'pi']
  },
  {
    id: 'mtk-6-3',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Geometri Ruang',
    judul: 'Bangun Ruang Lanjutan (Prisma, Limas, Tabung, Kerucut, Bola)',
    icon: '🏛️',
    ringkasan: 'Bangun ruang tiga dimensi meliputi bangun ruang sisi datar (prisma dan limas) serta bangun ruang sisi lengkung (tabung, kerucut, dan bola).',
    poinPenting: [
      'Prisma: Memiliki alas dan tutup sejajar serta kongruen. Volume = Luas Alas × Tinggi.',
      'Limas: Memiliki 1 alas dan titik puncak. Volume = 1/3 × Luas Alas × Tinggi.',
      'Tabung: Prisma dengan alas lingkaran. Volume = π × r² × t; Luas Permukaan = 2 × π × r × (r + t).',
      'Kerucut: Limas dengan alas lingkaran. Volume = 1/3 × π × r² × t.',
      'Bola: Bangun ruang sisi lengkung murni. Volume = 4/3 × π × r³; Luas Permukaan = 4 × π × r².'
    ],
    rumus: [
      'Prisma: V = Luas Alas × t',
      'Limas: V = 1/3 × Luas Alas × t',
      'Tabung: V = π × r² × t',
      'Kerucut: V = 1/3 × π × r² × t',
      'Bola: V = 4/3 × π × r³  |  LP = 4 × π × r²'
    ],
    contohSoal: {
      tanya: 'Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Berapakah volumenya (π = 22/7)?',
      kunci: '1.540 cm³',
      bahas: 'V = π × r² × t = 22/7 × 7 × 7 × 10 = 154 × 10 = 1.540 cm³.'
    },
    tags: ['bangun ruang', 'prisma', 'limas', 'tabung', 'kerucut', 'bola', 'volume']
  },
  {
    id: 'mtk-6-4',
    kelas: 6,
    mapel: 'MATEMATIKA',
    kategori: 'Statistika & Peluang',
    judul: 'Statistika (Mean, Modus, Median) & Diagram Lingkaran',
    icon: '📊',
    ringkasan: 'Statistika digunakan untuk mengolah, menganalisis, dan menyajikan data. Ukuran pemusatan data meliputi Mean (rata-rata), Modus (sering muncul), dan Median (nilai tengah).',
    poinPenting: [
      'Mean (Rata-rata hitung): Jumlah seluruh data dibagi dengan banyaknya data.',
      'Modus: Nilai atau data yang paling sering muncul (frekuensi tertinggi). Suatu data bisa memiliki lebih dari 1 modus atau tidak memiliki modus sama sekali.',
      'Median: Nilai tengah setelah data DIURUTKAN dari terkecil ke terbesar. Jika banyak data ganjil, ambil nilai tepat di tengah. Jika genap, ambil rata-rata dari dua nilai di tengah.',
      'Diagram Lingkaran: Menggunakan derajat (total 360°) atau persen (total 100%). Besar Sudut = (Nilai / Total) × 360°; Persentase = (Nilai / Total) × 100%.'
    ],
    rumus: [
      'Mean = Jumlah Seluruh Nilai / Banyak Data',
      'Median (Ganjil) = Data ke-(n+1)/2 setelah diurutkan',
      'Sudut Diagram = (Frekuensi / Total) × 360°',
      'Persen Diagram = (Frekuensi / Total) × 100%'
    ],
    contohSoal: {
      tanya: 'Tentukan median dari data: 8, 4, 9, 7, 12, 6 !',
      kunci: '7,5',
      bahas: 'Urutkan data terlebih dahulu: 4, 6, 7, 8, 9, 12. Karena ada 6 data (genap), median adalah rata-rata data ke-3 dan ke-4: (7 + 8) / 2 = 15 / 2 = 7,5.'
    },
    tags: ['statistika', 'mean', 'rata-rata', 'modus', 'median', 'diagram lingkaran']
  },

  // =========================================================================
  // IPAS (IPA & IPS) - KELAS 4
  // =========================================================================
  {
    id: 'ipas-4-1',
    kelas: 4,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Bagian Tubuh Tumbuhan & Fotosintesis',
    icon: '🌱',
    ringkasan: 'Tumbuhan adalah produsen utama di bumi. Melalui bagian-bagian tubuhnya (akar, batang, daun, bunga, buah), tumbuhan menyerap nutrisi dan melakukan fotosintesis untuk memproduksi makanan sendiri.',
    poinPenting: [
      'Fungsi Akar: Menyerap air dan zat hara dari dalam tanah melalui rambut akar, serta memperkokoh berdirinya tumbuhan. Pada beberapa tumbuhan akar juga menjadi tempat cadangan makanan (wortel, singkong).',
      'Fungsi Batang: Menopang tubuh tumbuhan dan mengangkut air/mineral dari akar ke daun (xilem/pembuluh kayu) serta menyebarkan hasil fotosintesis ke seluruh tubuh (floem/pembuluh tapis).',
      'Fungsi Daun: Tempat berlangsungnya fotosintesis karena mengandung klorofil (zat hijau daun) dan stomata (mulut daun untuk pertukaran gas).',
      'Bahan Fotosintesis: Air (H2O diserap akar) + Karbon Dioksida (CO2 diserap stomata) dengan bantuan Cahaya Matahari yang diserap Klorofil.',
      'Hasil Fotosintesis: Glukosa/Karbohidrat (makanan bagi tumbuhan) + Oksigen (O2 dilepaskan ke udara untuk pernapasan makhluk hidup).'
    ],
    rumus: [
      'Reaksi Fotosintesis: Air + Karbon Dioksida ──(Cahaya + Klorofil)──> Glukosa + Oksigen',
      'Jaringan Pengangkut: Xilem = Air & Mineral naik; Floem = Hasil Makanan menyebar'
    ],
    contohSoal: {
      tanya: 'Gas apakah yang diserap dan gas apa yang dihasilkan tumbuhan selama proses fotosintesis?',
      kunci: 'Menyerap Karbon Dioksida (CO2) dan Menghasilkan Oksigen (O2)',
      bahas: 'Fotosintesis menyerap CO2 dari udara untuk membentuk karbohidrat dan melepaskan O2 sebagai produk sampingan.'
    },
    tags: ['tumbuhan', 'akar', 'daun', 'batang', 'fotosintesis', 'klorofil', 'xilem', 'floem']
  },
  {
    id: 'ipas-4-2',
    kelas: 4,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Wujud Zat & Perubahannya',
    icon: '🧊',
    ringkasan: 'Materi/zat di sekitar kita memiliki tiga wujud utama: padat, cair, dan gas. Perubahan wujud terjadi karena pengaruh penyerapan atau pelepasan kalor (panas).',
    poinPenting: [
      'Sifat Padat: Bentuk dan volume tetap, partikel sangat rapat dan teratur.',
      'Sifat Cair: Bentuk mengikuti wadahnya, volume tetap, partikel agak renggang dan dapat bergerak bebas.',
      'Sifat Gas: Bentuk dan volume berubah memenuhi wadah, partikel sangat berjauhan dan bergerak sangat bebas ke segala arah.',
      'Mencair (Padat -> Cair): Menyerap kalor. Contoh: Es mencair, mentega dipanaskan.',
      'Membeku (Cair -> Padat): Melepas kalor. Contoh: Air dimasukkan freezer menjadi es batu.',
      'Menguap (Cair -> Gas): Menyerap kalor. Contoh: Air mendidih, bensin dibiarkan terbuka, baju basah dijemur kering.',
      'Mengembun (Gas -> Cair): Melepas kalor. Contoh: Titik air pada tutup panci panas, embun pagi hari, dinding luar gelas dingin.',
      'Menyublim (Padat -> Gas): Menyerap kalor. Contoh: Kapur barus/kamper mengecil di lemari.',
      'Mengkristal/Deposisi (Gas -> Padat): Melepas kalor. Contoh: Pembentukan salju, bunga es di freezer.'
    ],
    rumus: [
      'Menyerap Kalor: Mencair, Menguap, Menyublim',
      'Melepas Kalor: Membeku, Mengembun, Mengkristal'
    ],
    contohSoal: {
      tanya: 'Peristiwa terbentuknya titik-titik air di bagian luar gelas yang berisi es disebut ...',
      kunci: 'Mengembun',
      bahas: 'Uap air di udara luar yang panas bersentuhan dengan dinding gelas es yang dingin, melepaskan kalor dan berubah menjadi cair (titik air).'
    },
    tags: ['wujud zat', 'padat cair gas', 'mencair', 'membeku', 'menguap', 'mengembun', 'menyublim']
  },
  {
    id: 'ipas-4-3',
    kelas: 4,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Gaya di Sekitar Kita & Pengaruhnya',
    icon: '🧲',
    ringkasan: 'Gaya adalah tarikan atau dorongan yang dapat menyebabkan benda bergerak, berhenti, berubah arah, atau berubah bentuk.',
    poinPenting: [
      'Macam-macam Gaya: Gaya Otot (mengayuh sepeda, mengangkat tas), Gaya Gesek (antara ban dan aspal), Gaya Gravitasi (benda jatuh ke tanah ditarik bumi), Gaya Pegas (ketapel, busur panah, kasur per), Gaya Magnet (menarik besi), Gaya Listrik Statis (penggaris mika digosok rambut menarik sobekan kertas).',
      'Sifat Magnet: Memiliki dua kutub (Utara dan Selatan). Kutub sejenis tolak-menolak, kutub berlawanan tarik-menarik. Menarik kuat bahan feromagnetik (besi, baja, nikel).',
      'Manfaat Gaya Gesek: Membantu kita berjalan tanpa tergelincir, pengereman kendaraan (alur ban dibuat kasar). Kerugian gaya gesek: Mengikis sol sepatu dan mesin cepat panas.'
    ],
    rumus: [
      'Pengaruh Gaya: 1. Diam -> Bergerak  2. Bergerak -> Diam  3. Ubah Arah  4. Ubah Bentuk',
      'Kutub Magnet: U-S tarik-menarik | U-U atau S-S tolak-menolak'
    ],
    contohSoal: {
      tanya: 'Mengapa permukaan ban kendaraan dibuat berulir/beralur?',
      kunci: 'Memperbesar gaya gesek agar kendaraan tidak selip atau tergelincir',
      bahas: 'Alur pada ban meningkatkan cengkeraman pada aspal dan membuang air saat jalanan basah.'
    },
    tags: ['gaya', 'gaya otot', 'gaya gesek', 'gaya gravitasi', 'magnet', 'gaya pegas']
  },
  {
    id: 'ipas-4-4',
    kelas: 4,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Sosial (IPS)',
    judul: 'Peta, Kenampakan Alam, & Kearifan Budaya',
    icon: '🗺️',
    ringkasan: 'Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu. Indonesia memiliki keragaman kenampakan alam dan kekayaan budaya yang tersebar dari Sabang sampai Merauke.',
    poinPenting: [
      'Komponen Peta: Judul Peta (tema peta), Skala (perbandingan jarak peta vs lapangan), Penunjuk Arah/Mata Angin (utara selalu di atas), Simbol Peta, Legenda (keterangan arti simbol dan warna), Inset (peta kecil penunjuk lokasi dalam konteks luas).',
      'Warna Peta: Biru = perairan (laut, danau, sungai), Hijau = dataran rendah (0-200 m), Kuning = dataran tinggi, Cokelat = pegunungan.',
      'Kenampakan Alam (Alami): Gunung, lembah, sungai, danau, tanjung, selat, teluk.',
      'Kenampakan Buatan (Manusia): Waduk/bendungan, jembatan, bandara, pelabuhan, jalan tol, permukiman.',
      'Rumah Adat Terkenal: Tongkonan (Toraja, Sulsel), Rumah Gadang (Minangkabau, Sumbar), Joglo (Jawa Tengah/Yogyakarta), Honai (Papua).'
    ],
    rumus: [
      'Mata Angin Utama: Utara (U), Timur (T), Selatan (S), Barat (B)',
      'Legenda = Kamus simbol peta | Skala = Perbandingan jarak'
    ],
    contohSoal: {
      tanya: 'Komponen pada peta yang berfungsi untuk menjelaskan arti simbol-simbol dan warna adalah ...',
      kunci: 'Legenda',
      bahas: 'Legenda memuat daftar seluruh simbol dan keterangannya agar peta mudah dibaca dan dipahami.'
    },
    tags: ['peta', 'simbol peta', 'legenda', 'kenampakan alam', 'kenampakan buatan', 'rumah adat']
  },
  {
    id: 'ipas-4-5',
    kelas: 4,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Sosial (IPS)',
    judul: 'Kegiatan Ekonomi & Pemenuhan Kebutuhan Hidup',
    icon: '🌾',
    ringkasan: 'Manusia melakukan kegiatan ekonomi untuk memenuhi kebutuhan hidupnya yang beraneka ragam melalui kegiatan produksi, distribusi, dan konsumsi.',
    poinPenting: [
      'Tiga Kegiatan Ekonomi: 1. Produksi (menghasilkan barang/jasa, pelakunya produsen seperti petani, pabrik), 2. Distribusi (menyalurkan barang dari produsen ke konsumen, pelakunya distributor/pedagang), 3. Konsumsi (menggunakan/menghabiskan barang/jasa, pelakunya konsumen).',
      'Jenis Kebutuhan: Primer (kebutuhan mutlak: pangan, sandang, papan), Sekunder (pelengkap: radio, kipas, meja), Tersier (barang mewah: mobil mewah, perhiasan mahal).',
      'Pengaruh Bentang Alam pada Profesi: Pesisir/pantai = nelayan, petani garam, pemandu wisata laut; Dataran rendah = petani padi, buruh pabrik, pegawai; Dataran tinggi/pegunungan = petani teh/sayur, peternak sapi perah.'
    ],
    rumus: [
      'Alur Ekonomi: Produsen (Membuat) -> Distributor (Menyalurkan) -> Konsumen (Memakai)',
      'Kebutuhan: Primer (Pangan, Sandang, Papan) >> Sekunder >> Tersier'
    ],
    contohSoal: {
      tanya: 'Seseorang yang membeli roti di toko untuk sarapan pagi sedang melakukan kegiatan ...',
      kunci: 'Konsumsi (sebagai konsumen)',
      bahas: 'Membeli dan memakan barang untuk memenuhi kebutuhan hidup adalah inti dari kegiatan konsumsi.'
    },
    tags: ['kegiatan ekonomi', 'produksi', 'distribusi', 'konsumsi', 'kebutuhan primer']
  },

  // =========================================================================
  // IPAS (IPA & IPS) - KELAS 5
  // =========================================================================
  {
    id: 'ipas-5-1',
    kelas: 5,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Sistem Organ Tubuh Manusia (Napas, Cerna, & Darah)',
    icon: '🫁',
    ringkasan: 'Tubuh manusia tersusun atas sistem organ yang bekerja harmonis, termasuk sistem pernapasan untuk pertukaran gas, sistem pencernaan untuk mengolah nutrisi, dan sistem peredaran darah untuk transportasi zat.',
    poinPenting: [
      'Sistem Pernapasan: Hidung (penyaringan debu oleh silia & penyesuaian suhu/kelembaban) -> Faring -> Laring -> Trakea (tenggorokan) -> Bronkus -> Bronkiolus -> Alveolus (tempat pertukaran O2 dan CO2 secara difusi).',
      'Sistem Pencernaan: Mulut (mekanik oleh gigi dan kimiawi enzim amilase/ptialin) -> Kerongkongan (gerak peristaltik meremas makanan ke lambung) -> Lambung (asam lambung HCl membunuh kuman, enzim pepsin mencerna protein, renin mengendapkan kasein) -> Usus Halus (penyerapan sari makanan oleh vili) -> Usus Besar (penyerapan air dan pembusukan sisa makanan oleh bakteri E. coli) -> Anus.',
      'Sistem Peredaran Darah: Jantung memiliki 4 ruang (Serambi Kanan, Serambi Kiri, Bilik Kanan, Bilik Kiri).',
      'Peredaran Darah Kecil: Bilik Kanan -> Arteri Pulmonalis -> Paru-paru -> Vena Pulmonalis -> Serambi Kiri.',
      'Peredaran Darah Besar: Bilik Kiri -> Aorta -> Seluruh Tubuh -> Vena Cava -> Serambi Kanan.'
    ],
    rumus: [
      'Darah Kecil: Jantung (Bilik Kanan) -> Paru-Paru -> Jantung (Serambi Kiri)',
      'Darah Besar: Jantung (Bilik Kiri) -> Seluruh Tubuh -> Jantung (Serambi Kanan)',
      'Alveolus: O2 masuk kapiler darah, CO2 dikeluarkan ke rongga paru'
    ],
    contohSoal: {
      tanya: 'Tempat terjadinya pertukaran gas oksigen (O2) dan karbon dioksida (CO2) di dalam paru-paru adalah ...',
      kunci: 'Alveolus',
      bahas: 'Alveolus berdinding sangat tipis dan diselimuti jaring kapiler darah, memungkinkan difusi gas berlangsung cepat.'
    },
    tags: ['sistem pernapasan', 'sistem pencernaan', 'sistem peredaran darah', 'alveolus', 'jantung', 'usus halus']
  },
  {
    id: 'ipas-5-2',
    kelas: 5,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Ekosistem, Jaring Makanan, & Simbiosis',
    icon: '🕸️',
    ringkasan: 'Ekosistem merupakan hubungan timbal balik antara komponen biotik (makhluk hidup) dan abiotik (benda tak hidup). Aliran energi terjadi melalui rantai dan jaring-jaring makanan.',
    poinPenting: [
      'Komponen Ekosistem: Biotik (hewan, tumbuhan, mikroba) dan Abiotik (cahaya matahari, air, tanah, udara, suhu, bebatuan).',
      'Tingkatan Trofik: Produsen (tumbuhan hijau berklorofil penghasil energi) -> Konsumen I (herbivora pemakan produsen) -> Konsumen II (karnivora/omnivora) -> Konsumen III/Puncak (predator atas) -> Pengurai/Dekomposer (bakteri, jamur yang menguraikan bangkai menjadi mineral tanah).',
      'Simbiosis Mutualisme: Kedua pihak saling untung (Lebah dan bunga; Kerbau dan burung jalak; Ikan badut dan anemon).',
      'Simbiosis Komensalisme: Satu untung, pihak lain tidak dirugikan/diuntungkan (Ikan remora dan hiu; Tanaman anggrek/paku pada pohon inang).',
      'Simbiosis Parasitisme: Satu untung, pihak lain dirugikan (Nyamuk menggigit manusia; Benalu pada pohon mangga; Kutu pada anjing).'
    ],
    rumus: [
      'Rantai Makanan: Padi (Produsen) -> Belalang (Konsumen I) -> Katak (Konsumen II) -> Ular (Konsumen III) -> Elang (Puncak) -> Jamur (Dekomposer)',
      'Mutualisme: (+, +) | Komensalisme: (+, 0) | Parasitisme: (+, -)'
    ],
    contohSoal: {
      tanya: 'Jika pada sawah populasi ular diburu hingga habis, apa dampak pertama pada populasi tikus dan tanaman padi?',
      kunci: 'Populasi tikus meningkat pesat dan produksi padi menurun rusak',
      bahas: 'Hilangnya predator alami (ular) menyebabkan mangsanya (tikus) berkembang biak tak terkendali dan memakan tanaman padi.'
    },
    tags: ['ekosistem', 'rantai makanan', 'jaring makanan', 'biotik abiotik', 'simbiosis mutualisme', 'parasitisme']
  },
  {
    id: 'ipas-5-3',
    kelas: 5,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Sifat Gelombang Cahaya & Bunyi',
    icon: '🌈',
    ringkasan: 'Cahaya dan bunyi adalah bentuk energi gelombang yang memungkinkan kita melihat dan mendengar. Keduanya memiliki sifat perambatan yang khas.',
    poinPenting: [
      'Sifat-sifat Cahaya: 1. Merambat lurus (menghasilkan bayangan jika terhalang), 2. Menembus benda bening, 3. Dapat dipantulkan (pada cermin datar menghasilkan bayangan maya, tegak, sama besar; cermin cembung maya, tegak, diperkecil), 4. Dapat dibiaskan/refraksi (pensil tampak patah di dalam gelas air karena cahaya berpindah medium berbeda kerapatan), 5. Dapat diuraikan/dispersi (cahaya putih matahari terurai menjadi pelangi MEJIKUHIBINIU).',
      'Sifat-sifat Bunyi: 1. Dihasilkan oleh benda yang bergetar, 2. Merambat melalui medium padat, cair, dan gas (paling cepat merambat di zat padat), 3. TIDAK DAPAT merambat di ruang hampa udara (vakum luar angkasa), 4. Dapat dipantulkan.',
      'Gema vs Gaung: Gaung/kerdil terdengar sebagian bersamaan dengan bunyi asli (merusak kejelasan suara di ruangan tertutup), sedangkan Gema terdengar jelas setelah bunyi asli selesai (terjadi di tebing/lembah jauh).'
    ],
    rumus: [
      'Kecepatan Bunyi: Padat > Cair > Gas (Ruang hampa = 0)',
      'Refraksi: Cahaya dari udara ke air dibelokkan mendekati garis normal',
      'Gema = Pantulan di tebing jauh | Gaung = Pantulan di ruang sempit'
    ],
    contohSoal: {
      tanya: 'Mengapa astronaut di luar angkasa tidak dapat berbicara langsung mendengar suara rekannya tanpa radio?',
      kunci: 'Karena ruang angkasa adalah ruang hampa (tidak ada udara/medium perambat bunyi)',
      bahas: 'Bunyi adalah gelombang mekanik yang mutlak membutuhkan partikel medium untuk merambat.'
    },
    tags: ['sifat cahaya', 'pembiasan', 'pemantulan', 'bunyi', 'getaran', 'gema', 'ruang hampa']
  },
  {
    id: 'ipas-5-4',
    kelas: 5,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Daur Air (Siklus Hidrologi) & Pelestariannya',
    icon: '🌧️',
    ringkasan: 'Air di bumi tidak pernah habis karena terus bersirkulasi dalam siklus hidrologi yang digerakkan oleh panas energi matahari.',
    poinPenting: [
      'Tahapan Siklus Air: 1. Evaporasi (penguapan air dari laut, danau, sungai ke atmosfer oleh panas matahari), 2. Transpirasi (penguapan air dari jaringan tumbuhan), 3. Kondensasi (uap air mendingin dan berubah menjadi titik-titik air pembentuk awan), 4. Presipitasi (turunnya air ke permukaan bumi berupa hujan/salju), 5. Infiltrasi (peresapan air hujan ke pori-pori tanah menjadi cadangan air tanah), 6. Limpasan/Run-off (aliran air di permukaan tanah kembali ke sungai dan laut).',
      'Dampak Penggundulan Hutan & Betonisasi: Mengurangi daerah resapan air (infiltrasi menurun), meningkatkan limpasan permukaan yang memicu erosi, longsor, dan banjir bandang saat hujan, serta kekeringan saat kemarau.'
    ],
    rumus: [
      'Siklus Air: Evaporasi/Transpirasi -> Kondensasi (Awan) -> Presipitasi (Hujan) -> Infiltrasi & Limpasan',
      'Air Bersih: Dijaga melalui reboisasi dan hemat penggunaan air'
    ],
    contohSoal: {
      tanya: 'Peristiwa masuk dan meresapnya air hujan ke dalam pori-pori tanah disebut ...',
      kunci: 'Infiltrasi',
      bahas: 'Infiltrasi mengisi kembali akuifer (cadangan air tanah) yang menjadi sumber air sumur dan mata air.'
    },
    tags: ['daur air', 'siklus hidrologi', 'evaporasi', 'kondensasi', 'presipitasi', 'infiltrasi', 'reboisasi']
  },
  {
    id: 'ipas-5-5',
    kelas: 5,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Sosial (IPS)',
    judul: 'Geografi Indonesia, Sejarah Bangsa, & Koperasi',
    icon: '🇮🇩',
    ringkasan: 'Indonesia memiliki posisi geografis yang sangat strategis. Sejarah perjuangan kemerdekaan melahirkan persatuan bangsa dan fondasi ekonomi kerakyatan melalui koperasi.',
    poinPenting: [
      'Letak Geografis: Terletak di antara 2 Benua (Asia dan Australia) dan 2 Samudra (Hindia dan Pasifik). Beriklim tropis dengan dua musim (hujan dan kemarau).',
      'Letak Astronomis: 6° LU – 11° LS dan 95° BT – 141° BT. Dilalui garis khatulistiwa (0°).',
      'Zona Waktu: WIB (GMT+7: Jawa, Madura, Sumatera, Kalbar, Kalteng), WITA (GMT+8: Bali, NTB, NTT, Kalsel, Kaltim, Kaltara, Sulawesi), WIT (GMT+9: Maluku, Papua). Selisih waktu masing-masing zona adalah 1 jam.',
      'Tonggak Sejarah: Budi Utomo (20 Mei 1908 - Kebangkitan Nasional), Sumpah Pemuda (28 Oktober 1928 - Bertanah air, berbangsa, dan berbahasa satu: Indonesia), Proklamasi Kemerdekaan (17 Agustus 1945 oleh Soekarno dan Mohammad Hatta).',
      'Koperasi: Badan usaha berasaskan kekeluargaan untuk kesejahteraan bersama. Bapak Koperasi Indonesia adalah Drs. Mohammad Hatta.'
    ],
    rumus: [
      'Waktu: WIB (GMT+7) + 1 jam = WITA (GMT+8) + 1 jam = WIT (GMT+9)',
      'Posisi Silang: 2 Benua (Asia & Australia) × 2 Samudra (Hindia & Pasifik)'
    ],
    contohSoal: {
      tanya: 'Jika di kota Jakarta (WIB) menunjukkan pukul 09.00, maka di Makassar (WITA) menunjukkan pukul ...',
      kunci: 'Pukul 10.00 WITA',
      bahas: 'WITA lebih cepat 1 jam daripada WIB (09.00 + 1 jam = 10.00).'
    },
    tags: ['letak indonesia', 'astronomis', 'zona waktu wib wita wit', 'sumpah pemuda', 'proklamasi', 'koperasi']
  },

  // =========================================================================
  // IPAS (IPA & IPS) - KELAS 6
  // =========================================================================
  {
    id: 'ipas-6-1',
    kelas: 6,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Perkembangbiakan Makhluk Hidup (Tumbuhan & Hewan)',
    icon: '🦋',
    ringkasan: 'Makhluk hidup berkembang biak untuk mempertahankan kelestarian jenisnya. Perkembangbiakan dapat terjadi secara kawin (generatif) maupun tanpa kawin (vegetatif).',
    poinPenting: [
      'Generatif Tumbuhan: Melalui proses penyerbukan (jatuhnya serbuk sari ke kepala putik) dilanjutkan pembuahan pada bunga. Penyerbukan dibantu angin (anemofili), serangga (zoidiofili), air (hidrofili), atau manusia (antropofili).',
      'Vegetatif Alami Tumbuhan: Tunas (pisang, bambu), Tunas Adventif daun (cocor bebek), Spora (lumut, paku-pakuan), Umbi Batang (kentang, ubi jalar), Umbi Lapis (bawang merah), Umbi Akar (wortel, singkong), Rizoma/Akar Tinggal (kunyit, jahe, lengkuas), Geragih/Stolon (stroberi, rumput teki).',
      'Vegetatif Buatan Tumbuhan: Mencangkok (membutuhkan batang berkambium/dikotil), Stek (stek batang pada singkong, stek daun pada lidah mertua), Okulasi (menempel mata tunas), Kopulasi (menyambung batang atas dan bawah), Merunduk (melati, apel).',
      'Perkembangbiakan Hewan: 1. Ovipar (bertelur, tanpa daun telinga, mengerami telur: unggas, reptil, ikan), 2. Vivipar (melahirkan, memiliki daun telinga dan kelenjar susu/mamalia: sapi, kucing, paus, lumba-lumba), 3. Ovovivipar (embrio berkembang dalam telur di dalam tubuh induk lalu menetas saat keluar: hiu, beberapa jenis ular, kadal, platipus).'
    ],
    rumus: [
      'Perkembangbiakan: Generatif (Kawin/Biji) vs Vegetatif (Tanpa Kawin)',
      'Hewan: Ovipar = Bertelur | Vivipar = Melahirkan | Ovovivipar = Bertelur-Melahirkan'
    ],
    contohSoal: {
      tanya: 'Tumbuhan pisang dan bambu berkembang biak secara vegetatif alami menggunakan ...',
      kunci: 'Tunas',
      bahas: 'Tunas tumbuh dari pangkal batang tumbuhan induk membentuk rumpun baru.'
    },
    tags: ['perkembangbiakan', 'generatif vegetatif', 'mencangkok', 'tunas', 'ovipar', 'vivipar', 'ovovivipar']
  },
  {
    id: 'ipas-6-2',
    kelas: 6,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Pubertas & Pertumbuhan Manusia',
    icon: '🧍',
    ringkasan: 'Pubertas adalah masa peralihan dari anak-anak menuju remaja di mana organ reproduksi mulai aktif dan terjadi perubahan fisik yang signifikan.',
    poinPenting: [
      'Penyebab Pubertas: Kelenjar pituitari memproduksi hormon (testosteron pada laki-laki, estrogen & progesteron pada perempuan).',
      'Ciri Primer (Tanda Utama Matangnya Reproduksi): Laki-laki mengalami mimpi basah; Perempuan mengalami menstruasi/haid pertama.',
      'Ciri Sekunder Laki-laki: Tumbuh jakun di leher, suara membesar/berat, tumbuh kumis/janggut dan rambut di ketiak/kemaluan, dada membidang, bahu melebar.',
      'Ciri Sekunder Perempuan: Payudara membesar, pinggul melebar, suara melengking halus, tumbuh rambut di ketiak/kemaluan, kulit menjadi lebih halus.',
      'Menjaga Kebersihan saat Pubertas: Mandi teratur 2× sehari, ganti pakaian dalam minimal 2× sehari berbahan katun menyerap keringat, mencuci organ reproduksi dengan air bersih.'
    ],
    rumus: [
      'Primer = Fungsi organ reproduksi matang (Mimpi basah / Menstruasi)',
      'Sekunder = Perubahan fisik luar tubuh (Suara, jakun, pinggul, dll.)'
    ],
    contohSoal: {
      tanya: 'Manakah tanda perkembangan primer pada masa pubertas anak perempuan?',
      kunci: 'Mengalami menstruasi pertama (menarche)',
      bahas: 'Menstruasi adalah tanda utama (primer) bahwa sel telur sudah mulai diproduksi oleh ovarium.'
    },
    tags: ['pubertas', 'reproduksi', 'primer sekunder', 'menstruasi', 'jakun', 'kebersihan diri']
  },
  {
    id: 'ipas-6-3',
    kelas: 6,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Rangkaian Listrik, Magnet, & Energi Terbarukan',
    icon: '💡',
    ringkasan: 'Arus listrik mengalir dalam rangkaian tertutup. Rangkaian seri dan paralel memiliki karakteristik berbeda dalam mendistribusikan energi listrik.',
    poinPenting: [
      'Rangkaian Seri: Komponen dipasang sejajar satu lintasan lurus. Ciri: Kuat arus sama di setiap titik, tegangan terbagi, nyala lampu lebih redup, jika satu lampu putus maka SEMUA lampu ikut padam. Contoh: Lampu hias pohon natal.',
      'Rangkaian Paralel: Komponen dipasang bersusun/bercabang. Ciri: Tegangan di setiap cabang sama besar, nyala lampu lebih terang, jika satu cabang putus maka lampu di cabang lain TETAP menyala. Contoh: Instalasi listrik rumah, lampu lalu lintas.',
      'Konduktor vs Isolator: Konduktor (penghantar listrik yang baik: tembaga, perak, besi, aluminium). Isolator (penghambat listrik: karet, plastik, kayu kering, kaca).',
      'Energi Terbarukan: Sumber energi ramah lingkungan yang tidak akan habis (Cahaya Matahari/PLTS, Aliran Air/PLTA, Angin/PLTB, Panas Bumi/PLTP, Biomassa).',
      'Efek Rumah Kaca & Pemanasan Global: Gas CO2 dan metana berlebih menahan panas matahari di atmosfer bumi, menyebabkan suhu rata-rata global naik dan kutub mencair.'
    ],
    rumus: [
      'Seri: 1 lampu mati -> Semua padam (1 jalur)',
      'Paralel: 1 lampu mati -> Lainnya tetap nyala (Banyak jalur/cabang)',
      'Energi Terbarukan: Matahari, Air, Angin, Geotermal'
    ],
    contohSoal: {
      tanya: 'Mengapa instalasi listrik di rumah-rumah selalu menggunakan rangkaian paralel?',
      kunci: 'Agar jika satu peralatan/lampu dimatikan, peralatan listrik lainnya tetap dapat menyala',
      bahas: 'Rangkaian paralel memiliki percabangan independen sehingga tegangan merata dan tidak saling memadamkan.'
    },
    tags: ['rangkaian listrik', 'rangkaian seri', 'rangkaian paralel', 'konduktor isolator', 'energi terbarukan', 'efek rumah kaca']
  },
  {
    id: 'ipas-6-4',
    kelas: 6,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Alam (IPA)',
    judul: 'Tata Surya, Gerak Bumi & Bulan, serta Gerhana',
    icon: '🪐',
    ringkasan: 'Tata surya berpusat pada Matahari yang dikelilingi oleh 8 planet, sabuk asteroid, dan komet. Gerakan rotasi dan revolusi bumi menimbulkan berbagai fenomena alam penting.',
    poinPenting: [
      'Urutan 8 Planet: Merkurius (terdekat & terkecil), Venus (terpanas, bintang fajar/kejora, arah rotasi searah jarum jam), Bumi (satu-satunya planet berpenghuni), Mars (planet merah), Yupiter (planet terbesar, bintik merah raksasa), Saturnus (memiliki cincin cincin es paling megah), Uranus (planet terdingin, berotasi miring), Neptunus (planet terjauh, planet biru pembuat badai).',
      'Rotasi Bumi (Bumi berputar pada porosnya selama 24 jam): Menyebabkan terjadinya siang dan malam, gerak semu harian matahari/bintang, pembagian perbedaan waktu di bumi, dan pembelokan arus laut/angin.',
      'Revolusi Bumi (Bumi mengitari matahari selama 365 1/4 hari): Menyebabkan pergantian musim di bumi, perbedaan lamanya waktu siang dan malam, gerak semu tahunan matahari, terlihatnya rasi bintang yang berbeda, dan dasar perhitungan Kalender Masehi/Syamsiah.',
      'Gerhana Bulan: Terjadi saat posisi Matahari - Bumi - Bulan berada pada satu garis lurus. Bayangan bumi menutupi bulan (terjadi pada malam bulan purnama).',
      'Gerhana Matahari: Terjadi saat posisi Matahari - Bulan - Bumi berada pada satu garis lurus. Bayangan bulan menutupi sebagian bumi (terjadi pada siang hari bulan mati/baru).'
    ],
    rumus: [
      'Rotasi Bumi (24 jam) = Siang/Malam, Gerak Semu Harian, Zona Waktu',
      'Revolusi Bumi (365 1/4 hari) = Musim, Gerak Semu Tahunan, Kalender Masehi',
      'Gerhana Bulan: Matahari ─── BUMI ─── Bulan',
      'Gerhana Matahari: Matahari ─── BULAN ─── Bumi'
    ],
    contohSoal: {
      tanya: 'Posisi apakah yang terjadi saat berlangsung gerhana matahari?',
      kunci: 'Bulan berada di antara Matahari dan Bumi pada satu garis lurus',
      bahas: 'Cahaya matahari menuju bumi terhalang oleh piringan bulan sehingga bayangan umbra/penumbra bulan jatuh ke bumi.'
    },
    tags: ['tata surya', 'planet', 'rotasi bumi', 'revolusi bumi', 'gerhana bulan', 'gerhana matahari']
  },
  {
    id: 'ipas-6-5',
    kelas: 6,
    mapel: 'IPAS',
    kategori: 'Ilmu Pengetahuan Sosial (IPS)',
    judul: 'ASEAN & Kerja Sama Internasional di Era Globalisasi',
    icon: '🌏',
    ringkasan: 'ASEAN adalah organisasi geopolitik dan ekonomi negara-negara di Asia Tenggara. Di era globalisasi, kerja sama antarnegara sangat diperlukan untuk kemajuan dan perdamaian bersama.',
    poinPenting: [
      'Berdirinya ASEAN: Didirikan pada 8 Agustus 1967 di Bangkok melalui Deklarasi Bangkok oleh 5 negara pemrakarsa.',
      '5 Tokoh Pendiri ASEAN: Adam Malik (Indonesia), Tun Abdul Razak (Malaysia), S. Rajaratnam (Singapura), Narciso Ramos (Filipina), Thanat Khoman (Thailand).',
      'Negara Anggota ASEAN (11 negara): Indonesia (Jakarta), Malaysia (Kuala Lumpur), Singapura (Singapura), Filipina (Manila), Thailand (Bangkok), Brunei Darussalam (Bandar Seri Begawan), Vietnam (Hanoi), Laos (Vientiane - satu-satunya tanpa laut), Myanmar (Naypyidaw), Kamboja (Phnom Penh), dan Timor Leste (Dili).',
      'Bentuk Kerja Sama ASEAN: 1. Bidang Pendidikan (pertukaran pelajar, beasiswa ASEAN, olimpiade sains SEAMEO), 2. Bidang Ekonomi (Masyarakat Ekonomi ASEAN/MEA, perjanjian perdagangan bebas AFTA), 3. Bidang Sosial-Budaya (pesta olahraga SEA Games, penanggulangan kabut asap lintas batas), 4. Bidang Politik & Keamanan (Kawasan Bebas Senjata Nuklir/SEANWFZ, perjanjian ekstradisi).',
      'Sikap terhadap Globalisasi: Menyerap ilmu pengetahuan dan teknologi positif, melestarikan budaya luhur bangsa sendiri, mencintai produk dalam negeri, serta menolak gaya hidup konsumtif/individualis.'
    ],
    rumus: [
      'Deklarasi Bangkok: 8 Agustus 1967 (5 Negara: Indo, Malay, Sing, Fil, Thai)',
      'Kerja Sama: Pendidikan (SEAMEO), Ekonomi (MEA), Olahraga (SEA Games)'
    ],
    contohSoal: {
      tanya: 'Negara di kawasan Asia Tenggara yang secara geografis terkurung oleh daratan (tidak memiliki batas laut) adalah ...',
      kunci: 'Laos',
      bahas: 'Laos berbatasan darat dengan Myanmar, Tiongkok, Vietnam, Kamboja, dan Thailand tanpa memiliki akses laut langsung.'
    },
    tags: ['asean', 'deklarasi bangkok', 'tokoh pendiri asean', 'negara anggota', 'mea', 'sea games', 'globalisasi']
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RANGKUMAN_DATA;
}
