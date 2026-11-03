/**
 * RANGKUMAN MATERI LENGKAP MATEMATIKA (MTK) & IPAS (IPA & IPS)
 * Modul Prioritas Cerdas Cermat MIPAS 2026 - SD Kelas 4, 5, dan 6
 * UPTD SPF SD Inpres Tangkala II & Kurikulum Nasional / Merdeka
 */

const RANGKUMAN_DATA = [
  {
    "id": "mtk-4-1",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Bilangan & Operasi Hitung",
    "judul": "Bilangan Cacah Besar, Nilai Tempat & Dekomposisi",
    "icon": "🔢",
    "ringkasan": "Bilangan cacah besar dipelajari hingga ratusan ribu (100.000). Setiap angka pada bilangan memiliki nilai tempat tergantung pada posisinya: Satuan, Puluhan, Ratusan, Ribuan, Puluh Ribuan, dan Ratus Ribuan.",
    "poinPenting": [
      "Nilai tempat pada bilangan 47.285: Angka 4 = Puluh Ribuan (40.000), 7 = Ribuan (7.000), 2 = Ratusan (200), 8 = Puluhan (80), 5 = Satuan (5).",
      "Bentuk panjang (dekomposisi): 47.285 = 40.000 + 7.000 + 200 + 80 + 5.",
      "Membandingkan bilangan: Bandingkan angka dari nilai tempat paling kiri (terbesar). Jika sama, geser ke kanan satu per satu.",
      "Pembulatan ke puluhan terdekat: Jika satuan < 5 bulatkan ke bawah, jika >= 5 bulatkan ke atas. Ke ratusan terdekat: lihat angka puluhan."
    ],
    "rumus": [
      "Nilai Angka = Angka × Nilai Tempat",
      "Contoh Dekomposisi: 73.420 = (7 × 10.000) + (3 × 1.000) + (4 × 100) + (2 × 10) + (0 × 1)",
      "Aturan Pembulatan: Angka penentu 0,1,2,3,4 -> turun; 5,6,7,8,9 -> naik."
    ],
    "perhatikan": [
      "Jangan mencampuradukkan angka ratusan dan ribuan saat menulis lambang bilangan dari bentuk terbilang (contoh: \"tiga puluh ribu lima puluh\" ditulis 30.050, BUKAN 30.500).",
      "Perhatikan nilai nol (0) di tengah bilangan; nol tetap menempati posisi nilai tempat tetapi bernilai 0."
    ],
    "contohSoal": {
      "tanya": "Nilai angka 7 pada bilangan 73.420 adalah ...",
      "kunci": "70.000 (Tujuh Puluh Ribu)",
      "bahas": "Angka 7 menempati posisi puluh ribuan, sehingga bernilai 7 × 10.000 = 70.000."
    },
    "tags": [
      "bilangan cacah",
      "nilai tempat",
      "dekomposisi",
      "ribuan",
      "puluh ribuan",
      "pembulatan"
    ]
  },
  {
    "id": "mtk-4-2",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Bilangan & Operasi Hitung",
    "judul": "Operasi Hitung Campuran (Aturan Kabataku)",
    "icon": "➕",
    "ringkasan": "Operasi hitung campuran menggabungkan penjumlahan, pengurangan, perkalian, dan pembagian. Urutan pengerjaan harus mematuhi hierarki matematika (Kabataku) agar hasilnya benar.",
    "poinPenting": [
      "Urutan hierarki pengerjaan: 1. Operasi di dalam tanda kurung ( ... ) -> 2. Perkalian (×) dan Pembagian (:) dari kiri ke kanan -> 3. Penjumlahan (+) dan Pengurangan (-) dari kiri ke kanan.",
      "Perkalian dan pembagian sama kuat; kerjakan mana yang muncul lebih dahulu di sebelah kiri.",
      "Penjumlahan dan pengurangan sama kuat; kerjakan mana yang muncul lebih dahulu di sebelah kiri.",
      "Sifat operasi: Komutatif (a + b = b + a; a × b = b × a), Asosiatif ((a + b) + c = a + (b + c)), Distributif (a × (b + c) = (a × b) + (a × c))."
    ],
    "rumus": [
      "Hierarki: ( Tanda Kurung )  >>  ( × dan : )  >>  ( + dan - )",
      "Distributif: a × (b + c) = (a × b) + (a × c)",
      "Contoh: 120 - (8 × 9) + 15 = 120 - 72 + 15 = 48 + 15 = 63"
    ],
    "perhatikan": [
      "Jangan menjumlahkan sebelum mengalikan! Pada soal 50 + 25 × 4, JANGAN menghitung (50 + 25) dulu, tetapi kalikan 25 × 4 = 100 terlebih dahulu.",
      "Jika ada tanda kurung, operasi di dalam kurung WAJIB diselesaikan paling awal tanpa memandang jenis operasinya."
    ],
    "contohSoal": {
      "tanya": "Berapakah hasil dari 50 + 25 × 4 - 30 : 2 ?",
      "kunci": "135",
      "bahas": "Kerjakan × dan : dulu: 25 × 4 = 100 dan 30 : 2 = 15. Lalu jumlah & kurang dari kiri: 50 + 100 - 15 = 150 - 15 = 135."
    },
    "tags": [
      "operasi campuran",
      "kabataku",
      "tanda kurung",
      "perkalian",
      "pembagian",
      "distributif"
    ]
  },
  {
    "id": "mtk-4-3",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Teori Bilangan",
    "judul": "Kelipatan, Faktor, & Bilangan Prima",
    "icon": "🎯",
    "ringkasan": "Kelipatan diperoleh dengan mengalikan suatu bilangan dengan bilangan asli berturut-turut. Faktor adalah semua bilangan yang dapat membagi habis bilangan tersebut tanpa sisa.",
    "poinPenting": [
      "Kelipatan suatu bilangan: Kelipatan 6 = 6, 12, 18, 24, 30, ...",
      "Faktor dari bilangan: Faktor dari 18 = 1, 2, 3, 6, 9, 18 (karena 1×18, 2×9, 3×6 menghasilkan 18).",
      "Bilangan Prima: Bilangan yang hanya mempunyai tepat 2 faktor, yaitu 1 dan bilangan itu sendiri (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...). Angka 2 adalah satu-satunya bilangan prima genap.",
      "Angka 1 BUKAN bilangan prima karena hanya memiliki 1 faktor.",
      "Faktor Prima: Faktor-faktor dari suatu bilangan yang merupakan bilangan prima (faktor prima 18 adalah 2 dan 3)."
    ],
    "rumus": [
      "Daftar Bilangan Prima < 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
      "Faktor 24 = {1, 2, 3, 4, 6, 8, 12, 24}",
      "Faktor Prima 24 = {2, 3}",
      "Faktorisasi Prima 24 = 2³ × 3"
    ],
    "perhatikan": [
      "Angka 1 bukan bilangan prima, dan angka 9 bukan bilangan prima (karena habis dibagi 3).",
      "Pahami perbedaan antara \"Faktor\", \"Faktor Prima\", dan \"Faktorisasi Prima\" pada soal lomba."
    ],
    "contohSoal": {
      "tanya": "Faktor dari 24 yang merupakan bilangan prima adalah ...",
      "kunci": "2 dan 3",
      "bahas": "Faktor dari 24 adalah 1, 2, 3, 4, 6, 8, 12, 24. Di antara faktor tersebut, yang merupakan bilangan prima hanya 2 dan 3."
    },
    "tags": [
      "kelipatan",
      "faktor",
      "bilangan prima",
      "faktor prima",
      "pohon faktor"
    ]
  },
  {
    "id": "mtk-4-4",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Pecahan",
    "judul": "Pecahan Senilai, Bentuk Sederhana, & Konversi",
    "icon": "🍰",
    "ringkasan": "Pecahan terdiri dari pembilang (atas) dan penyebut (bawah). Pecahan senilai adalah pecahan yang nilainya sama meskipun lambang bilangannya berbeda.",
    "poinPenting": [
      "Menentukan pecahan senilai: Kalikan atau bagikan pembilang dan penyebut dengan bilangan yang sama (bukan nol). Contoh: 2/3 = (2×2)/(3×2) = 4/6.",
      "Menyederhanakan pecahan: Bagi pembilang dan penyebut dengan FPB keduanya hingga tidak dapat dibagi lagi. Contoh: 12/16 = (12:4)/(16:4) = 3/4.",
      "Membandingkan pecahan berpenyebut sama: Pecahan dengan pembilang lebih besar bernilai lebih besar (5/8 > 3/8).",
      "Hubungan Pecahan, Desimal & Persen: 1/2 = 0,5 = 50%; 1/4 = 0,25 = 25%; 3/4 = 0,75 = 75%; 1/5 = 0,2 = 20%; 2/5 = 0,4 = 40%."
    ],
    "rumus": [
      "Pecahan Senilai: a/b = (a × n) / (b × n) = (a : m) / (b : m)",
      "Konversi Penting: 1/2 = 0,5 = 50%  |  1/4 = 0,25 = 25%  |  3/4 = 0,75 = 75%",
      "1/5 = 0,2 = 20%  |  2/5 = 0,4 = 40%  |  1/10 = 0,1 = 10%"
    ],
    "perhatikan": [
      "Jangan menjumlahkan penyebut saat menjumlahkan pecahan berpenyebut sama: 2/7 + 3/7 = 5/7, BUKAN 5/14!",
      "Selalu pastikan hasil akhir pecahan ditulis dalam bentuk paling sederhana."
    ],
    "contohSoal": {
      "tanya": "Pecahan 12/16 jika disederhanakan ke bentuk paling sederhana menjadi ...",
      "kunci": "3/4",
      "bahas": "FPB dari 12 dan 16 adalah 4. Bagi pembilang dan penyebut dengan 4: 12:4 = 3, 16:4 = 4 -> 3/4."
    },
    "tags": [
      "pecahan",
      "pecahan senilai",
      "penyederhanaan pecahan",
      "desimal",
      "persen"
    ]
  },
  {
    "id": "mtk-4-5",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Pengukuran",
    "judul": "Pengukuran Satuan Baku (Panjang, Berat, & Waktu)",
    "icon": "📏",
    "ringkasan": "Pengukuran satuan baku untuk panjang (meter), massa/berat (gram/kilogram), dan waktu (jam, menit, detik) menggunakan tangga satuan konversi.",
    "poinPenting": [
      "Tangga Satuan Panjang: km - hm - dam - m - dm - cm - mm (Turun 1 tingkat dikali 10, naik 1 tingkat dibagi 10). 1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm.",
      "Tangga Satuan Berat: kg - hg (ons) - dag - g - dg - cg - mg. 1 kg = 1.000 g; 1 kg = 10 ons; 1 ons = 100 g; 1 ton = 1.000 kg; 1 kuintal = 100 kg; 1 ton = 10 kuintal.",
      "Satuan Waktu: 1 jam = 60 menit; 1 menit = 60 detik; 1 jam = 3.600 detik; 1 hari = 24 jam; 1 minggu = 7 hari; 1 tahun = 12 bulan = 52 minggu = 365 hari."
    ],
    "rumus": [
      "Panjang: 1 km = 100 dam = 1.000 m = 100.000 cm",
      "Berat: 1 ton = 10 kuintal = 1.000 kg  |  1 kg = 10 ons = 1.000 g  |  1 kuintal = 100 kg",
      "Waktu: 1 jam = 60 menit = 3.600 detik  |  Durasi = Waktu Selesai - Waktu Mulai"
    ],
    "perhatikan": [
      "Ingat: 1 ons = 1 hg = 100 gram, sehingga 1 kg = 10 ons.",
      "Saat menjumlahkan satuan waktu, jika menit mencapai 60 atau lebih, konversikan ke 1 jam tambahan (contoh: 1 jam 75 menit = 2 jam 15 menit)."
    ],
    "contohSoal": {
      "tanya": "Jarak 3 km 250 m sama dengan berapa meter?",
      "kunci": "3.250 meter",
      "bahas": "3 km = 3 × 1.000 m = 3.000 m. Ditambah 250 m = 3.250 meter."
    },
    "tags": [
      "pengukuran",
      "satuan panjang",
      "satuan berat",
      "satuan waktu",
      "konversi satuan",
      "ton",
      "kuintal"
    ]
  },
  {
    "id": "mtk-4-6",
    "kelas": 4,
    "mapel": "MATEMATIKA",
    "kategori": "Geometri",
    "judul": "Keliling & Luas Bangun Datar Dasar (Persegi, Persegi Panjang, Segitiga)",
    "icon": "📐",
    "ringkasan": "Keliling adalah panjang seluruh garis pembatas suatu bangun datar. Luas adalah besarnya daerah permukaan yang dibatasi oleh bangun datar.",
    "poinPenting": [
      "Persegi: 4 sisi sama panjang dan 4 sudut siku-siku (90°). Keliling K = 4 × s; Luas L = s × s = s².",
      "Persegi Panjang: Memiliki 2 pasang sisi berhadapan sama panjang dan 4 sudut siku-siku. Keliling K = 2 × (p + l); Luas L = p × l.",
      "Segitiga: Memiliki 3 sisi dan 3 sudut (jumlah seluruh sudut segitiga selalu 180°). Keliling K = a + b + c; Luas L = 1/2 × alas × tinggi.",
      "Sifat alas dan tinggi pada segitiga: Tinggi segitiga selalu TEGAK LURUS (membentuk sudut siku-siku 90°) terhadap alasnya."
    ],
    "rumus": [
      "Persegi: Keliling = 4 × s  |  Luas = s²",
      "Sisi Persegi jika Luas diketahui: s = √Luas  |  s = Keliling / 4",
      "Persegi Panjang: Keliling = 2 × (p + l)  |  Luas = p × l",
      "Segitiga: Keliling = a + b + c  |  Luas = 1/2 × a × t"
    ],
    "perhatikan": [
      "Pada segitiga siku-siku, sisi miring (hipotenusa) BUKAN tinggi segitiga! Gunakan dua sisi yang saling tegak lurus untuk menghitung luas.",
      "Jangan tertukar antara rumus keliling persegi panjang 2 × (p + l) dengan rumus luas p × l."
    ],
    "contohSoal": {
      "tanya": "Sebuah taman berbentuk persegi memiliki keliling 64 m. Berapakah luas taman tersebut?",
      "kunci": "256 m²",
      "bahas": "Sisi persegi = K : 4 = 64 : 4 = 16 m. Luas = s × s = 16 × 16 = 256 m²."
    },
    "tags": [
      "bangun datar",
      "keliling",
      "luas",
      "persegi",
      "persegi panjang",
      "segitiga",
      "siku-siku"
    ]
  },
  {
    "id": "mtk-5-1",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Pecahan",
    "judul": "Operasi Pecahan Berbeda Penyebut & Pecahan Campuran",
    "icon": "⚖️",
    "ringkasan": "Untuk menjumlahkan atau mengurangkan pecahan dengan penyebut berbeda, penyebut harus disamakan terlebih dahulu menggunakan KPK dari kedua penyebut.",
    "poinPenting": [
      "Langkah Penjumlahan/Pengurangan: 1. Cari KPK dari penyebut-penyebutnya. 2. Ubah pembilang sesuai kelipatan penyebut. 3. Operasikan pembilangnya. 4. Sederhanakan.",
      "Perkalian Pecahan: Kalikan pembilang dengan pembilang, dan penyebut dengan penyebut: (a/b) × (c/d) = (a×c)/(b×d).",
      "Pembagian Pecahan: Balikkan pecahan kedua (pembagi) lalu ubah operasi menjadi perkalian: (a/b) : (c/d) = (a/b) × (d/c).",
      "Pecahan Campuran: Ubah menjadi pecahan biasa terlebih dahulu: a b/c = (a × c + b) / c."
    ],
    "rumus": [
      "Penjumlahan: a/b + c/d = (a×d + b×c) / (b×d) [samakan penyebut dengan KPK(b, d)]",
      "Perkalian: a/b × c/d = (a × c) / (b × d)",
      "Pembagian: a/b : c/d = a/b × d/c = (a × d) / (b × c)",
      "Konversi Campuran: a b/c = (a × c + b) / c"
    ],
    "perhatikan": [
      "Jebakan Fatal: 2/3 + 1/4 BUKAN 3/7! Penyebut TIDAK BOLEH langsung dijumlahkan. Samakan penyebut ke KPK(3,4)=12 -> 8/12 + 3/12 = 11/12.",
      "Pada pembagian pecahan, jangan lupa MEMBALIK pecahan kedua sebelum dikalikan."
    ],
    "contohSoal": {
      "tanya": "Berapakah hasil dari 5/6 - 1/3 ?",
      "kunci": "1/2",
      "bahas": "KPK 6 dan 3 adalah 6. 1/3 = 2/6. Maka: 5/6 - 2/6 = 3/6 = 1/2."
    },
    "tags": [
      "pecahan",
      "pecahan campuran",
      "perkalian pecahan",
      "pembagian pecahan",
      "kpk penyebut"
    ]
  },
  {
    "id": "mtk-5-2",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Pecahan, Persen & Aritmetika Sosial",
    "judul": "Desimal, Persen, Diskon & Nilai Uang",
    "icon": "🪙",
    "ringkasan": "Desimal adalah pecahan dengan penyebut kelipatan 10. Persen berarti per seratus. Konsep persen banyak diterapkan pada diskon belanja, keuntungan, dan potongan harga.",
    "poinPenting": [
      "Pecahan ke Desimal: Bagi pembilang dengan penyebut (3/4 = 0,75; 1/2 = 0,5; 1/4 = 0,25; 1/5 = 0,2).",
      "Persen ke Pecahan Biasa: Jadikan per 100 lalu sederhanakan (25% = 25/100 = 1/4; 50% = 1/2; 75% = 3/4).",
      "Menghitung Diskon: Diskon = % Diskon × Harga Awal.",
      "Menghitung Harga Bayar: Harga Bayar = Harga Awal - Diskon = (100% - % Diskon) × Harga Awal."
    ],
    "rumus": [
      "Besar Diskon = (% Diskon / 100) × Harga Normal",
      "Harga Akhir / Bayar = Harga Normal - Besar Diskon",
      "Atau langsung: Harga Bayar = (100 - p)% × Harga Normal",
      "Contoh: Diskon 20% dari Rp150.000 -> Bayar = 80% × Rp150.000 = Rp120.000"
    ],
    "perhatikan": [
      "Jangan tertukar antara \"Besar Potongan Diskon\" dengan \"Harga yang Harus Dibayar\"!",
      "Pada penjumlahan bilangan desimal, tanda koma harus lurus sejajar ke bawah."
    ],
    "contohSoal": {
      "tanya": "Sebuah tas berharga Rp80.000 mendapat diskon 15%. Berapakah harga tas setelah diskon?",
      "kunci": "Rp68.000",
      "bahas": "Diskon = 15/100 × Rp80.000 = Rp12.000. Harga bayar = Rp80.000 - Rp12.000 = Rp68.000."
    },
    "tags": [
      "desimal",
      "persen",
      "diskon",
      "aritmetika sosial",
      "harga bayar"
    ]
  },
  {
    "id": "mtk-5-3",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Teori Bilangan",
    "judul": "KPK & FPB: Faktorisasi Prima & Aplikasi Soal Cerita",
    "icon": "🌳",
    "ringkasan": "KPK (Kelipatan Persekutuan Terkecil) digunakan untuk menentukan waktu berulang bersama. FPB (Faktor Persekutuan Terbesar) digunakan untuk membagi benda menjadi kelompok merata terbanyak.",
    "poinPenting": [
      "Faktorisasi Prima: Mengurai bilangan menjadi perkalian bilangan prima menggunakan pohon faktor.",
      "Aturan FPB: Kalikan faktor prima yang SAMA dengan pangkat TERKECIL.",
      "Aturan KPK: Kalikan SEMUA faktor prima; untuk faktor yang sama, pilih pangkat TERBESAR.",
      "Kata Kunci KPK: \"bersama-sama lagi\", \"bertemu kembali\", \"berkedip bersamaan\", \"setiap n hari sekali\".",
      "Kata Kunci FPB: \"dibagikan sama rata/banyak\", \"jumlah kantong/bingkisan terbanyak\", \"isi jenis sama rata\"."
    ],
    "rumus": [
      "FPB = Faktor prima yang SAMA dengan pangkat TERKECIL",
      "KPK = SEMUA faktor prima dengan pangkat TERBESAR",
      "Hubungan: KPK(a, b) × FPB(a, b) = a × b"
    ],
    "perhatikan": [
      "Jika soal menanyakan \"Kapan mereka berenang bersama untuk KEDUA kalinya?\", hitung Tanggal Mulai + (1 × KPK). Jika KETIGA kalinya, hitung Tanggal Mulai + (2 × KPK).",
      "Perhatikan jumlah hari dalam bulan (Jan=31, Feb=28/29, Mar=31, Apr=30, Mei=31, Jun=30, Jul=31, Ags=31, Sep=30, Okt=31, Nov=30, Des=31)."
    ],
    "contohSoal": {
      "tanya": "Lampu merah menyala setiap 12 detik dan hijau setiap 18 detik. Kapan menyala bersama lagi setelah pukul 08.00?",
      "kunci": "Pukul 08.00 lebih 36 detik (08.00.36)",
      "bahas": "KPK dari 12 (2²×3) dan 18 (2×3²) adalah 2²×3² = 36 detik."
    },
    "tags": [
      "kpk",
      "fpb",
      "pohon faktor",
      "faktorisasi prima",
      "soal cerita kpk fpb",
      "jadwal bersama"
    ]
  },
  {
    "id": "mtk-5-4",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Perbandingan & Skala",
    "judul": "Perbandingan (Rasio) & Skala Peta",
    "icon": "🗺️",
    "ringkasan": "Perbandingan menyatakan relasi ukuran dua atau lebih besaran sejenis. Skala adalah rasio antara ukuran pada gambar/peta dengan ukuran sebenarnya.",
    "poinPenting": [
      "Perbandingan Sederhana: Disederhanakan seperti pecahan biasa (contoh: 20 : 30 = 2 : 3).",
      "Mencari nilai jika JUMLAH diketahui: Bagian A = (Rasio A / Total Rasio) × Jumlah Sebenarnya.",
      "Mencari nilai jika SELISIH diketahui: Bagian A = (Rasio A / Selisih Rasio) × Selisih Sebenarnya.",
      "Skala Peta: Ditulis 1 : n (artinya 1 cm pada peta mewakili n cm di lapangan). Selalu konversikan km ke cm dengan mengalikan 100.000!"
    ],
    "rumus": [
      "Skala = Jarak pada Peta (JP) / Jarak Sebenarnya (JS)  [satuan harus sama, biasanya cm]",
      "Jarak Sebenarnya (JS) = JP / Skala = JP × Angka Skala",
      "Jarak Peta (JP) = JS × Skala = JS / Angka Skala",
      "1 km = 100.000 cm  |  1 m = 100 cm",
      "Nilai 1 Bagian Rasio = Total Nyata / Jumlah Rasio"
    ],
    "perhatikan": [
      "Jangan lupa mengubah kilometer ke sentimeter saat menghitung skala peta (1 km = 100.000 cm, tambah 5 angka nol).",
      "Pada soal perbandingan selisih, penyebut rumus adalah SELISIH angka rasio, bukan jumlahnya!"
    ],
    "contohSoal": {
      "tanya": "Jarak kota A ke B pada peta 5 cm. Skala peta 1 : 1.200.000. Berapa km jarak sebenarnya?",
      "kunci": "60 km",
      "bahas": "JS = 5 cm × 1.200.000 = 6.000.000 cm = 60 km (dibagi 100.000)."
    },
    "tags": [
      "rasio",
      "perbandingan",
      "skala",
      "jarak peta",
      "jarak sebenarnya",
      "selisih rasio"
    ]
  },
  {
    "id": "mtk-5-5",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Pengukuran",
    "judul": "Kecepatan & Debit (Segitiga Rumus & Konversi Satuan)",
    "icon": "⚡",
    "ringkasan": "Kecepatan mengukur jarak yang ditempuh per satuan waktu. Debit mengukur volume zat cair yang mengalir per satuan waktu.",
    "poinPenting": [
      "Segitiga JOKOWI (Jarak - Kecepatan - Waktu): Jarak (J) di atas, Kecepatan (K) dan Waktu (W) di bawah.",
      "Konversi Kecepatan: 1 km/jam = 1.000 m / 3.600 detik = 5/18 m/detik. Sebaliknya 1 m/detik = 3,6 km/jam.",
      "Segitiga Debit (Volume - Debit - Waktu): Volume (V) di atas, Debit (D) dan Waktu (W) di bawah.",
      "Konversi Volume: 1 liter = 1 dm³ = 1.000 cm³ (cc) = 1.000 mL. 1 m³ = 1.000 liter = 1.000 dm³."
    ],
    "rumus": [
      "Jarak = Kecepatan × Waktu  (J = K × W)",
      "Kecepatan = Jarak / Waktu  (K = J / W)",
      "Waktu = Jarak / Kecepatan  (W = J / K)",
      "Volume = Debit × Waktu  (V = D × W)",
      "Debit = Volume / Waktu  (D = V / W)",
      "Waktu Mengalir = Volume / Debit  (W = V / D)",
      "1 liter = 1 dm³ = 1.000 cm³ (mL)  |  1 m³ = 1.000 dm³ = 1.000 liter"
    ],
    "perhatikan": [
      "Satuan waktu harus selaras dengan satuan kecepatan! Jika kecepatan dalam km/jam dan waktu 30 menit, ubah 30 menit = 1/2 jam.",
      "1 liter SAMA DENGAN 1 dm³, bukan 1 m³!"
    ],
    "contohSoal": {
      "tanya": "Sebuah mobil melaju dengan kecepatan 60 km/jam selama 2 jam 30 menit. Berapakah jarak tempuhnya?",
      "kunci": "150 km",
      "bahas": "Waktu = 2 jam + 30/60 jam = 2,5 jam. Jarak = Kecepatan × Waktu = 60 × 2,5 = 150 km."
    },
    "tags": [
      "kecepatan",
      "debit",
      "jokowi",
      "jarak",
      "waktu",
      "volume",
      "liter",
      "dm3"
    ]
  },
  {
    "id": "mtk-5-6",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Geometri",
    "judul": "Bangun Datar Gabungan (Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat)",
    "icon": "📐",
    "ringkasan": "Bangun datar segiempat memiliki sifat-sifat khusus terkait sisi, sudut, diagonal, dan rumus perhitungan luas serta kelilingnya.",
    "poinPenting": [
      "Jajar Genjang: 2 pasang sisi sejajar dan sama panjang, sudut yang berhadapan sama besar. Luas L = a × t.",
      "Trapesium: Memiliki sepasang sisi sejajar (a dan b). Luas L = 1/2 × (a + b) × t.",
      "Layang-layang: Memiliki 2 pasang sisi sama panjang dan diagonal saling tegak lurus. Luas L = 1/2 × d1 × d2.",
      "Belah Ketupat: Keempat sisinya sama panjang, diagonal berpotongan tegak lurus dan saling membagi dua sama panjang. Keliling K = 4 × s; Luas L = 1/2 × d1 × d2."
    ],
    "rumus": [
      "Jajar Genjang: L = alas × tinggi  |  K = 2 × (sisi miring + alas)",
      "Trapesium: L = 1/2 × (jumlah sisi sejajar) × t = 1/2 × (a + b) × t",
      "Belah Ketupat: L = 1/2 × d1 × d2  |  K = 4 × s",
      "Layang-layang: L = 1/2 × d1 × d2  |  K = 2 × (s1 + s2)"
    ],
    "perhatikan": [
      "Pada jajar genjang dan trapesium, \"tinggi\" adalah jarak tegak lurus antara dua sisi sejajar, BUKAN panjang sisi miringnya!",
      "Diagonal layang-layang dan belah ketupat dihitung dari ujung ke ujung (panjang penuh)."
    ],
    "contohSoal": {
      "tanya": "Sebuah trapesium memiliki sisi sejajar 14 cm dan 20 cm serta tinggi 8 cm. Luas trapesium tersebut adalah ...",
      "kunci": "136 cm²",
      "bahas": "Luas = 1/2 × (14 + 20) × 8 = 1/2 × 34 × 8 = 17 × 8 = 136 cm²."
    },
    "tags": [
      "trapesium",
      "jajar genjang",
      "belah ketupat",
      "layang-layang",
      "diagonal",
      "luas gabungan"
    ]
  },
  {
    "id": "mtk-5-7",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Geometri Ruang",
    "judul": "Bangun Ruang Kubus & Balok (Volume, Luas Permukaan, & Jaring-jaring)",
    "icon": "📦",
    "ringkasan": "Kubus dan balok adalah bangun ruang beraturan. Kubus dibatasi oleh 6 persegi identik, sedangkan balok dibatasi oleh 3 pasang persegi panjang.",
    "poinPenting": [
      "Sifat Kubus: Memiliki 6 sisi berbentuk persegi kongruen, 12 rusuk sama panjang, dan 8 titik sudut.",
      "Sifat Balok: Memiliki 6 sisi (3 pasang berhadapan kongruen), 12 rusuk (4 panjang, 4 lebar, 4 tinggi), dan 8 titik sudut.",
      "Kerangka Balok: K = 4 × (p + l + t). Kerangka Kubus: K = 12 × s.",
      "Jaring-jaring: Pola bentangan bangun ruang jika dibelah sepanjang rusuk-rusuknya."
    ],
    "rumus": [
      "Volume Kubus: V = s³ = s × s × s",
      "Luas Permukaan Kubus: L_p = 6 × s²",
      "Panjang Rusuk Kubus jika Volume diketahui: s = ∛V",
      "Volume Balok: V = p × l × t",
      "Luas Permukaan Balok: L_p = 2 × (p×l + p×t + l×t)",
      "Panjang Kawat Kerangka Balok = 4 × (p + l + t)"
    ],
    "perhatikan": [
      "Jangan tertukar antara \"Panjang Rusuk (Kerangka)\" dengan \"Luas Permukaan\". Kerangka dihitung dengan menjumlahkan panjang rusuk, sedangkan luas permukaan menghitung luas seluruh sisi penutupnya.",
      "Kubus tanpa tutup hanya memiliki 5 sisi, sehingga luas permukaannya 5 × s²."
    ],
    "contohSoal": {
      "tanya": "Sebuah balok berukuran panjang 12 cm, lebar 8 cm, dan tinggi 5 cm. Berapakah volume dan luas permukaannya?",
      "kunci": "Volume = 480 cm³, Luas Permukaan = 392 cm²",
      "bahas": "Volume = 12 × 8 × 5 = 480 cm³. Luas = 2 × (12×8 + 12×5 + 8×5) = 2 × (96 + 60 + 40) = 2 × 196 = 392 cm²."
    },
    "tags": [
      "kubus",
      "balok",
      "volume",
      "luas permukaan",
      "kerangka balok",
      "jaring-jaring",
      "rusuk"
    ]
  },
  {
    "id": "mtk-5-8",
    "kelas": 5,
    "mapel": "MATEMATIKA",
    "kategori": "Statistika",
    "judul": "Statistika Dasar (Mean, Modus, & Median)",
    "icon": "📊",
    "ringkasan": "Statistika adalah ilmu pengumpulan, penyajian, dan penganalisisan data. Ukuran pemusatan data meliputi rata-rata (mean), nilai yang paling sering muncul (modus), dan nilai tengah (median).",
    "poinPenting": [
      "Mean (Rata-rata): Jumlah seluruh nilai data dibagi dengan banyaknya data.",
      "Modus: Nilai atau data yang frekuensi kemunculannya paling banyak.",
      "Median: Nilai tengah setelah data DIURUTKAN dari terkecil ke terbesar. Jika jumlah data ganjil, ambil tepat nilai tengahnya. Jika genap, jumlahkan dua nilai tengah lalu bagi 2.",
      "Tabel Frekuensi: Menyajikan data dalam bentuk baris dan kolom yang menunjukkan seberapa sering tiap nilai muncul."
    ],
    "rumus": [
      "Mean (Rata-rata) = Jumlah Seluruh Nilai Data / Banyaknya Data",
      "Modus = Data dengan frekuensi terbanyak",
      "Median (n ganjil) = Data ke-( (n + 1) / 2 ) setelah diurutkan",
      "Median (n genap) = ( Data ke-(n/2) + Data ke-(n/2 + 1) ) / 2"
    ],
    "perhatikan": [
      "Sebelum menentukan median, data WAJIB DIURUTKAN dari yang terkecil terlebih dahulu!",
      "Modus bisa lebih dari satu nilai jika ada beberapa data yang memiliki frekuensi tertinggi sama banyak."
    ],
    "contohSoal": {
      "tanya": "Nilai ulangan matematika 7 siswa: 7, 8, 6, 9, 8, 7, 8. Tentukan rata-rata dan modusnya!",
      "kunci": "Rata-rata = 7,57 (atau 53/7); Modus = 8",
      "bahas": "Jumlah nilai = 7+8+6+9+8+7+8 = 53. Rata-rata = 53 : 7 ≈ 7,57. Angka 8 muncul 3 kali, paling banyak sehingga Modus = 8."
    },
    "tags": [
      "statistika",
      "mean",
      "modus",
      "median",
      "rata-rata",
      "frekuensi",
      "data terurut"
    ]
  },
  {
    "id": "mtk-6-1",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Bilangan Bulat",
    "judul": "Bilangan Bulat Negatif & Operasi Campuran",
    "icon": "🌡️",
    "ringkasan": "Bilangan bulat terdiri dari bilangan positif, nol, dan negatif. Bilangan negatif terletak di sebelah kiri angka 0 pada garis bilangan. Semakin ke kiri, nilainya semakin kecil.",
    "poinPenting": [
      "Operasi Penjumlahan & Pengurangan: Mengurangi bilangan sama dengan menjumlahkan lawannya: a - (-b) = a + b.",
      "Aturan Tanda Perkalian & Pembagian: (+) × (+) = (+); (-) × (-) = (+); (+) × (-) = (-); (-) × (+) = (-). Tandanya sama hasilnya positif, tandanya beda hasilnya negatif.",
      "Aplikasi Suhu: Di bawah nol derajat ditulis negatif (-5°C). Selisih suhu = Suhu Tinggi - Suhu Rendah.",
      "Aplikasi Kedalaman: Di bawah permukaan laut ditulis negatif (-120 m)."
    ],
    "rumus": [
      "a - (-b) = a + b  |  -a + (-b) = -(a + b)",
      "(+) × (+) = (+)  |  (-) × (-) = (+)",
      "(+) × (-) = (-)  |  (-) × (+) = (-)",
      "Selisih Suhu = Suhu Maksimal - Suhu Minimal"
    ],
    "perhatikan": [
      "Tanda minus bertemu minus berubah menjadi PLUS: 15 - (-8) = 15 + 8 = 23, BUKAN 7!",
      "Hati-hati: -10 LEBIH KECIL daripada -2 karena letaknya lebih jauh di sebelah kiri pada garis bilangan."
    ],
    "contohSoal": {
      "tanya": "Suhu di dalam lemari es mula-mula -4°C. Ketika listrik padam, suhu naik 7°C. Berapakah suhu lemari es sekarang?",
      "kunci": "3°C",
      "bahas": "Suhu akhir = Suhu awal + Kenaikan = -4°C + 7°C = 3°C."
    },
    "tags": [
      "bilangan bulat",
      "negatif",
      "suhu",
      "selisih",
      "kabataku negatif",
      "garis bilangan"
    ]
  },
  {
    "id": "mtk-6-2",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Pecahan & Logika Soal Cerita",
    "judul": "Soal Cerita Pecahan Bertingkat & Konsep \"Dari Sisa\"",
    "icon": "🧩",
    "ringkasan": "Soal cerita olimpiade sering menggunakan kata kunci \"dari sisa\". Pengambilan kedua dihitung dari jumlah yang tersisa setelah pengambilan pertama, BUKAN dari jumlah keseluruhan awal.",
    "poinPenting": [
      "Pahami Alur Cerita: 1. Hitung bagian pertama. 2. Cari SISA = Total - Bagian Pertama. 3. Hitung bagian kedua dari SISA tersebut. 4. Tentukan sisa akhir.",
      "Model Pecahan: Jika bagian pertama mengambil 1/3, maka sisa = 1 - 1/3 = 2/3 bagian awal. Jika bagian kedua mengambil 1/2 \"dari sisa\", maka bagian kedua = 1/2 × 2/3 = 1/3 bagian awal.",
      "Mencari Total Awal jika Sisa Akhir Diketahui: Bagi sisa akhir dengan fraksi sisa yang mewakilinya."
    ],
    "rumus": [
      "Sisa Tahap 1 = Total Awal - Pengeluaran 1",
      "Pengeluaran 2 = Pecahan 2 × Sisa Tahap 1  (BUKAN Pecahan 2 × Total Awal)",
      "Sisa Akhir = Sisa Tahap 1 - Pengeluaran 2",
      "Total Awal = Sisa Uang Nyata / Pecahan Sisa Akhir"
    ],
    "perhatikan": [
      "⚠️ JEBAKAN UTAMA: Jangan langsung menjumlahkan pecahan 1/3 + 1/2 jika soal menyebutkan \"1/2 dari sisa\"! Kata \"dari sisa\" berarti nilainya mengalikan sisa, bukan nilai awal!",
      "Jika uang mula-mula Rp120.000, dipakai 1/3 = Rp40.000 (sisa Rp80.000). Dipakai lagi 1/2 DARI SISA = 1/2 × Rp80.000 = Rp40.000, sisa akhir = Rp40.000."
    ],
    "contohSoal": {
      "tanya": "Ibu memiliki uang Rp120.000. Sebanyak 1/3 bagian dibelikan beras, lalu 1/2 dari sisa uang dibelikan minyak goreng. Berapakah sisa uang Ibu?",
      "kunci": "Rp40.000",
      "bahas": "Beras = 1/3 × 120.000 = Rp40.000. Sisa pertama = 120.000 - 40.000 = Rp80.000. Minyak = 1/2 × Rp80.000 = Rp40.000. Sisa akhir = 80.000 - 40.000 = Rp40.000."
    },
    "tags": [
      "pecahan bertingkat",
      "dari sisa",
      "soal cerita pecahan",
      "jebakan olimpiade",
      "logika pecahan"
    ]
  },
  {
    "id": "mtk-6-3",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Perbandingan Lanjutan",
    "judul": "Perbandingan Senilai & Berbalik Nilai",
    "icon": "⚖️",
    "ringkasan": "Perbandingan senilai terjadi saat kenaikan satu besaran mengakibatkan kenaikan besaran lain. Perbandingan berbalik nilai terjadi saat kenaikan satu besaran justru mengakibatkan penurunan besaran lain.",
    "poinPenting": [
      "Perbandingan Senilai: Jika kuantitas A bertambah, kuantitas B ikut bertambah. Contoh: jumlah bensin dan jarak tempuh, jumlah buku dan harga total.",
      "Perbandingan Berbalik Nilai: Jika kuantitas A bertambah, kuantitas B justru berkurang. Contoh: jumlah pekerja dan waktu penyelesaian proyek, kecepatan kendaraan dan lama perjalanan.",
      "Rumus Senilai: a1 / b1 = a2 / b2  ->  a1 × b2 = a2 × b1.",
      "Rumus Berbalik Nilai: a1 × b1 = a2 × b2  ->  b2 = (a1 × b1) / a2."
    ],
    "rumus": [
      "Perbandingan Senilai: a1 / b1 = a2 / b2  |  x = (Jumlah Nyata / Kuantitas Awal) × Kuantitas Baru",
      "Perbandingan Berbalik Nilai: Pekerja1 × Hari1 = Pekerja2 × Hari2",
      "Pekerja Tambahan = Pekerja Baru - Pekerja Awal"
    ],
    "perhatikan": [
      "Identifikasi dulu apakah soal bernilai senilai atau berbalik nilai sebelum menghitung!",
      "Pada soal pekerja yang terhenti: hitung sisa pekerjaan terlebih dahulu, lalu bagi dengan sisa waktu yang tersedia."
    ],
    "contohSoal": {
      "tanya": "Sebuah proyek dapat diselesaikan oleh 12 pekerja dalam 20 hari. Jika ingin selesai dalam 15 hari, berapa jumlah pekerja yang dibutuhkan?",
      "kunci": "16 pekerja (tambahan 4 pekerja)",
      "bahas": "Gunakan berbalik nilai: 12 × 20 = n × 15 -> 240 = 15n -> n = 240 : 15 = 16 pekerja."
    },
    "tags": [
      "perbandingan senilai",
      "berbalik nilai",
      "pekerja dan waktu",
      "proyek"
    ]
  },
  {
    "id": "mtk-6-4",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Geometri",
    "judul": "Lingkaran Lengkap (Unsur, Keliling, Luas, Busur & Juring)",
    "icon": "⭕",
    "ringkasan": "Lingkaran adalah himpunan semua titik yang berjarak sama dari titik pusat. Garis tengah disebut diameter (d = 2r), jarak pusat ke busur disebut jari-jari (r).",
    "poinPenting": [
      "Unsur Lingkaran: Titik pusat, jari-jari (r), diameter (d = 2r), busur, tali busur, juring (daerah dibatasi 2 jari-jari dan busur), tembereng (daerah dibatasi busur dan tali busur), apotema.",
      "Nilai Pi (π): Bernilai 22/7 jika r atau d merupakan kelipatan 7. Bernilai 3,14 jika BUKAN kelipatan 7.",
      "Keliling Lingkaran: K = 2 × π × r = π × d.",
      "Luas Lingkaran: L = π × r² = 1/4 × π × d².",
      "Panjang Busur: (Sudut Pusat / 360°) × Keliling Lingkaran.",
      "Luas Juring: (Sudut Pusat / 360°) × Luas Lingkaran."
    ],
    "rumus": [
      "Diameter = 2 × r  |  Jari-jari = d / 2",
      "Keliling: K = 2 × π × r  |  K = π × d",
      "Luas: L = π × r²  (Ingat: r² = r × r)",
      "Panjang Busur = (α / 360°) × (2 × π × r)",
      "Luas Juring = (α / 360°) × (π × r²)"
    ],
    "perhatikan": [
      "⚠️ JANGAN MENGALIKAN 2 KALI JARI-JARI PADA RUMUS LUAS! Luas menggunakan r² (r dikali r), BUKAN 2 × r! (Contoh: jika r=7, r²=49, bukan 14!).",
      "Keliling bangun setengah lingkaran tertutup = (1/2 × π × d) + d. Jangan lupa menjumlahkan garis diameternya!"
    ],
    "contohSoal": {
      "tanya": "Sebuah lingkaran memiliki diameter 28 cm. Berapakah keliling dan luas lingkaran tersebut?",
      "kunci": "Keliling = 88 cm, Luas = 616 cm²",
      "bahas": "r = 28 : 2 = 14 cm. K = π × d = 22/7 × 28 = 88 cm. L = π × r² = 22/7 × 14 × 14 = 22 × 2 × 14 = 616 cm²."
    },
    "tags": [
      "lingkaran",
      "diameter",
      "jari-jari",
      "keliling",
      "luas",
      "pi",
      "busur",
      "juring"
    ]
  },
  {
    "id": "mtk-6-5",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Geometri Ruang Lanjutan",
    "judul": "Bangun Ruang Lengkap & Luas Permukaan (Prisma, Limas, Tabung, Kerucut, Bola)",
    "icon": "🔮",
    "ringkasan": "Bangun ruang tiga dimensi memiliki volume (kapasitas ruang) dan luas permukaan (seluruh luas sisi pembungkus).",
    "poinPenting": [
      "Prisma Segitiga: Memiliki alas dan tutup segitiga kongruen. V = Luas alas × t = (1/2 × a × t_segitiga) × t_prisma.",
      "Limas: Bangun ruang yang mengerucut ke satu puncak. V = 1/3 × Luas alas × tinggi.",
      "Tabung: Prisma lingkaran. V = π × r² × t. Luas Permukaan = 2 × π × r × (r + t). Luas Selimut = 2 × π × r × t.",
      "Kerucut: Limas lingkaran. V = 1/3 × π × r² × t. Garis pelukis s = √(r² + t²). Luas Permukaan = π × r × (r + s).",
      "Bola: Bangun ruang lengkung simetris sempurna. V = 4/3 × π × r³. Luas Permukaan = 4 × π × r²."
    ],
    "rumus": [
      "Prisma: V = Luas_alas × t  |  L_p = (2 × Luas_alas) + (Keliling_alas × t)",
      "Limas: V = 1/3 × Luas_alas × t",
      "Tabung: V = π × r² × t  |  L_selimut = 2 × π × r × t  |  L_p = 2πr(r + t)",
      "Kerucut: V = 1/3 × π × r² × t  |  L_selimut = π × r × s  |  s = √(r² + t²)",
      "Bola: V = 4/3 × π × r³  |  L_p = 4 × π × r²"
    ],
    "perhatikan": [
      "Volume limas dan kerucut SELALU memiliki faktor sepertiga (1/3)!",
      "Pada kerucut, tinggi (t) dan garis pelukis (s) berbeda: s adalah sisi miring kerucut yang dihitung dengan Pythagoras s² = r² + t²."
    ],
    "contohSoal": {
      "tanya": "Sebuah kaleng berbentuk tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Berapakah volume kaleng tersebut?",
      "kunci": "1.540 cm³ (atau 1,54 liter)",
      "bahas": "V = π × r² × t = 22/7 × 7 × 7 × 10 = 22 × 7 × 10 = 1.540 cm³."
    },
    "tags": [
      "bangun ruang",
      "tabung",
      "kerucut",
      "bola",
      "prisma",
      "limas",
      "volume",
      "luas permukaan"
    ]
  },
  {
    "id": "mtk-6-6",
    "kelas": 6,
    "mapel": "MATEMATIKA",
    "kategori": "Statistika Lanjutan",
    "judul": "Statistika Lanjutan: Menentukan Nilai Hilang & Diagram Lingkaran",
    "icon": "📈",
    "ringkasan": "Soal olimpiade statistika sering menguji penentuan nilai ujian susulan agar rata-rata mencapai target tertentu, serta konversi data pada diagram lingkaran (derajat vs persen).",
    "poinPenting": [
      "Konsep Nilai Susulan: Jumlah Total Baru = Rata-rata Target × Banyak Siswa Baru. Nilai Siswa Baru = Jumlah Total Baru - Jumlah Total Lama.",
      "Diagram Lingkaran Derajat: 1 lingkaran penuh = 360°. Nilai = (Sudut Kategori / 360°) × Total Nilai.",
      "Diagram Lingkaran Persen: 1 lingkaran penuh = 100%. Nilai = (Persentase Kategori / 100%) × Total Nilai.",
      "Konversi: Sudut Derajat = Persentase × 3,6°."
    ],
    "rumus": [
      "Nilai Hilang / Susulan = (Rata-rata Baru × n_baru) - (Rata-rata Lama × n_lama)",
      "Derajat: Nilai = (Besar Sudut / 360°) × Jumlah Data Total",
      "Persen: Nilai = (Persen / 100) × Jumlah Data Total",
      "Sudut Pusat (°) = (Persen / 100) × 360°"
    ],
    "perhatikan": [
      "Pada diagram lingkaran, cek apakah data disajikan dalam PERSEN (%) atau DERAJAT (°). Jangan memasukkan per 100 jika lambangnya derajat!",
      "Saat menghitung nilai siswa susulan, banyaknya data n BERTAMBAH 1!"
    ],
    "contohSoal": {
      "tanya": "Nilai rata-rata 4 ulangan Budi adalah 80. Agar nilai rata-ratanya menjadi 82 setelah ulangan kelima, berapa nilai yang harus didapat Budi?",
      "kunci": "90",
      "bahas": "Total 4 ulangan = 4 × 80 = 320. Total 5 ulangan = 5 × 82 = 410. Nilai ke-5 = 410 - 320 = 90."
    },
    "tags": [
      "statistika",
      "nilai rata-rata susulan",
      "diagram lingkaran",
      "derajat",
      "persen",
      "nilai hilang"
    ]
  },
  {
    "id": "ipas-4-1",
    "kelas": 4,
    "mapel": "IPAS",
    "kategori": "IPA - Tumbuhan",
    "judul": "Bagian Tubuh Tumbuhan, Fotosintesis, & Pembuluh Angkut",
    "icon": "🌱",
    "ringkasan": "Tumbuhan adalah produsen utama yang mampu memasak makanannya sendiri melalui fotosintesis dengan bantuan klorofil dan cahaya matahari.",
    "poinPenting": [
      "Bagian Utama Tumbuhan: Akar (menyerap air & zat hara dari tanah, menopang tumbuhan), Batang (penopang & jalan transportasi zat), Daun (tempat fotosintesis), Bunga (alat perkembangbiakan generatif), Buah & Biji.",
      "Proses Fotosintesis: Bahan yang dibutuhkan: Air (H2O) diserap akar + Karbon Dioksida (CO2) diserap lewat stomata daun. Dengan bantuan klorofil (zat hijau daun) dan sinar matahari.",
      "Hasil Fotosintesis: Glukosa/Karbohidrat (energi bagi tumbuhan) dan Oksigen (O2) yang dilepas ke udara.",
      "Pembuluh Angkut: Xilem (mengangkut air dan mineral dari akar ke daun), Floem (mengedarkan hasil fotosintesis dari daun ke seluruh bagian tumbuhan)."
    ],
    "rumus": [
      "Reaksi Fotosintesis: Karbon Dioksida (CO2) + Air (H2O) + Cahaya/Klorofil -> Glukosa (C6H12O6) + Oksigen (O2)",
      "Xilem = Akar ke Daun (Air & Mineral)  |  Floem = Daun ke Seluruh Tubuh (Hasil Makanan)"
    ],
    "perhatikan": [
      "Jangan terbalik antara fungsi Xilem dan Floem! Cara ingat: \"Xi\" = Air (bawah ke atas), \"Floem\" = Food/Makanan (daun ke seluruh tubuh).",
      "Gas yang dibutuhkan untuk fotosintesis adalah Karbon Dioksida (CO2), sedangkan gas yang DIHASILKAN adalah Oksigen (O2)."
    ],
    "contohSoal": {
      "tanya": "Bagian daun yang berfungsi sebagai tempat keluar masuknya udara pernapasan pada tumbuhan adalah ...",
      "kunci": "Stomata (mulut daun)",
      "bahas": "Stomata adalah celah-celah kecil pada permukaan daun yang berfungsi sebagai organ respirasi dan transpirasi tumbuhan."
    },
    "tags": [
      "tumbuhan",
      "fotosintesis",
      "klorofil",
      "xilem",
      "floem",
      "stomata",
      "akar",
      "daun"
    ]
  },
  {
    "id": "ipas-4-2",
    "kelas": 4,
    "mapel": "IPAS",
    "kategori": "IPA - Materi & Energi",
    "judul": "Wujud Zat, Perubahan Wujud, & Perpindahan Kalor",
    "icon": "🧊",
    "ringkasan": "Zat memiliki 3 wujud: padat, cair, dan gas. Perubahan wujud dipengaruhi oleh pelepasan atau penyerapan energi panas (kalor).",
    "poinPenting": [
      "Sifat Wujud Zat: Padat (bentuk & volume tetap), Cair (bentuk mengikuti wadah, volume tetap, mengalir ke tempat rendah), Gas (bentuk & volume berubah-ubah menekan ke segala arah).",
      "Menyerap Kalor: Mencair (padat -> cair), Menguap (cair -> gas), Menyublim (padat -> gas, contoh: kamper/kapur barus).",
      "Melepas Kalor: Membeku (cair -> padat), Mengembun (gas -> cair, contoh: titik air di luar gelas dingin), Mengkristal/Mendeposisi (gas -> padat, contoh: salju, jelaga).",
      "Perpindahan Kalor: Konduksi (melalui zat padat tanpa perpindahan partikel, contoh: sendok panas di kopi), Konveksi (melalui zat cair/gas disertai aliran partikel, contoh: mendidihkan air, angin darat/laut), Radiasi (pancaran langsung tanpa zat perantara, contoh: panas matahari, api unggun)."
    ],
    "rumus": [
      "Menyerap Kalor: Padat -> Cair (Mencair) | Cair -> Gas (Menguap) | Padat -> Gas (Menyublim)",
      "Melepas Kalor: Cair -> Padat (Membeku) | Gas -> Cair (Mengembun) | Gas -> Padat (Mengkristal)",
      "Konduksi = Tanpa zat berpindah  |  Konveksi = Zat perantara mengalir  |  Radiasi = Pancaran gelombang"
    ],
    "perhatikan": [
      "⚠️ Titik-titik air di dinding luar gelas berisi es BUKAN berasal dari air dalam gelas yang bocor, melainkan uap air di udara luar yang melepaskan kalor dan mengembun saat menyentuh permukaan gelas yang dingin!",
      "Kamper yang habis di lemari adalah peristiwa MENYUBLIM (padat menjadi gas)."
    ],
    "contohSoal": {
      "tanya": "Peristiwa terbentuknya butiran air di luar gelas berisi es disebut perubahan wujud ...",
      "kunci": "Mengembun (kondensasi)",
      "bahas": "Uap air di udara sekitar gelas kehilangan panas (melepas kalor) saat bersentuhan dengan dinding gelas yang dingin, sehingga berubah menjadi butiran air cair."
    },
    "tags": [
      "wujud zat",
      "mencair",
      "membeku",
      "menguap",
      "mengembun",
      "menyublim",
      "konduksi",
      "konveksi",
      "radiasi"
    ]
  },
  {
    "id": "ipas-4-3",
    "kelas": 4,
    "mapel": "IPAS",
    "kategori": "IPA - Gaya & Energi",
    "judul": "Gaya di Sekitar Kita & Transformasi Energi",
    "icon": "⚡",
    "ringkasan": "Gaya adalah tarikan atau dorongan yang dapat mengubah bentuk, arah gerak, dan kecepatan benda. Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat diubah bentuknya.",
    "poinPenting": [
      "Macam Gaya: Gaya otot, gaya pegas (ketapel/panah), gaya gesek (menghambat gerak), gaya gravitasi (menarik ke pusat bumi), gaya magnet, dan gaya listrik.",
      "Pengaruh Gaya: Mengubah benda diam menjadi bergerak, benda bergerak menjadi diam, mengubah arah gerak, dan mengubah bentuk benda (plastisin).",
      "Gaya Gesek: Merugikan (mengikis ban/sepatu, menimbulkan panas mesin), Menguntungkan (rem sepeda, sol sepatu beralur agar tidak licin).",
      "Transformasi Energi: Energi kimia ke listrik ke cahaya (senter baterai), energi listrik ke gerak (kipas angin), energi listrik ke panas (setrika), energi cahaya ke listrik (panel surya)."
    ],
    "rumus": [
      "Hukum Kekekalan Energi: Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat berubah bentuk.",
      "Panel Surya: Energi Cahaya Matahari -> Energi Listrik",
      "Setrika / Rice Cooker: Energi Listrik -> Energi Panas (Kalor)",
      "Kipas Angin / Blender: Energi Listrik -> Energi Gerak (Kinetik)"
    ],
    "perhatikan": [
      "Gaya gesek selalu berlawanan arah dengan arah gerak benda.",
      "Baterai dan makanan menyimpan ENERGI KIMIA, bukan energi listrik langsung."
    ],
    "contohSoal": {
      "tanya": "Perubahan energi yang terjadi saat menyalakan senter dengan baterai adalah ...",
      "kunci": "Energi kimia -> energi listrik -> energi cahaya",
      "bahas": "Baterai menyimpan energi kimia, dialirkan sebagai arus listrik, lalu diubah bohlam menjadi cahaya."
    },
    "tags": [
      "gaya",
      "gaya gesek",
      "gravitasi",
      "magnet",
      "transformasi energi",
      "energi listrik",
      "energi kimia"
    ]
  },
  {
    "id": "ipas-4-4",
    "kelas": 4,
    "mapel": "IPAS",
    "kategori": "IPS - Geografi & Budaya",
    "judul": "Peta, Kenampakan Alam, & Kearifan Budaya Sulawesi Selatan",
    "icon": "🗺️",
    "ringkasan": "Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu. Kenampakan alam memengaruhi mata pencaharian dan kebudayaan masyarakat.",
    "poinPenting": [
      "Komponen Peta: Judul, Skala, Arah Mata Angin (orientasi), Legenda (keterangan simbol), Simbol peta (titik, garis, area), Inset (peta kecil penunjuk kedudukan wilayah), Garis Astronomis (lintang & bujur).",
      "Kenampakan Alam & Pekerjaan: Dataran rendah (pertanian padi, perkantoran, industri), Dataran tinggi (perkebunan sayur, teh, wisata), Pesisir pantai (nelayan, garam, budidaya rumput laut).",
      "Kearifan Budaya Sulawesi Selatan: Rumah Adat Tongkonan (Toraja), Rumah Panggung Kayu (Bugis-Makassar), Perahu Layar Pinisi dari Bulukumba (warisan mahakarya maritim dunia UNESCO).",
      "Tarian & Musik Sulsel: Tari Kipas Pakarena (Gowa/Makassar), Tari Gandrang Bulo, Alat musik Mandolin & Gandrang."
    ],
    "rumus": [
      "Fungsi Inset Peta: Menjelaskan posisi wilayah yang dipetakan dalam lingkup daerah yang lebih luas.",
      "Legenda = Kamus simbol arti gambar pada peta",
      "Skala = Perbandingan jarak peta dengan jarak nyata"
    ],
    "perhatikan": [
      "Jangan tertukar antara Legenda dan Inset! Legenda berisi penjelasan simbol, sedangkan Inset adalah peta mini penunjuk lokasi.",
      "Perahu Pinisi adalah karya suku Konjo/Bugis dari Bulukumba, Sulawesi Selatan."
    ],
    "contohSoal": {
      "tanya": "Bagian pada peta yang berfungsi memperjelas posisi wilayah yang dipetakan terhadap daerah sekitarnya yang lebih luas disebut ...",
      "kunci": "Peta Inset",
      "bahas": "Peta inset digambar dalam ukuran kecil di sudut peta untuk memperlihatkan konteks letak geografis wilayah tersebut."
    },
    "tags": [
      "peta",
      "inset",
      "legenda",
      "kenampakan alam",
      "sulawesi selatan",
      "tongkonan",
      "pinisi",
      "budaya"
    ]
  },
  {
    "id": "ipas-4-5",
    "kelas": 4,
    "mapel": "IPAS",
    "kategori": "IPS - Ekonomi",
    "judul": "Kegiatan Ekonomi, Pelaku Usaha, & Pemenuhan Kebutuhan",
    "icon": "🛒",
    "ringkasan": "Kegiatan ekonomi dilakukan manusia untuk memenuhi kebutuhan hidup yang meliputi produksi, distribusi, dan konsumsi.",
    "poinPenting": [
      "Produksi: Kegiatan menghasilkan barang atau jasa untuk menambah nilai guna. Pelakunya disebut Produsen (contoh: petani, pabrik baju, dokter, guru).",
      "Distribusi: Kegiatan menyalurkan barang/jasa dari produsen ke konsumen. Pelakunya disebut Distributor (contoh: agen, grosir, kurir ekspedisi, pedagang eceran).",
      "Konsumsi: Kegiatan memakai atau menghabiskan nilai guna barang/jasa. Pelakunya disebut Konsumen (contoh: membeli makanan di kantin, menaiki angkutan umum).",
      "Jenis Usaha: Usaha ekstraktif (mengambil langsung dari alam: tambang, garam), agraris (pertanian, perkebunan), industri (mengolah bahan mentah jadi barang jadi), perdagangan, dan jasa."
    ],
    "rumus": [
      "Alur Ekonomi: Produsen -> Distributor -> Konsumen",
      "Nilai Guna Barang: Ditambah oleh Produsen, Disalurkan oleh Distributor, Dihabiskan oleh Konsumen"
    ],
    "perhatikan": [
      "Dokter, sopir bus, dan guru adalah produsen di bidang JASA, bukan barang fisik.",
      "Pedagang sayur di pasar tradisional bertindak sebagai DISTRIBUTOR karena menyalurkan barang dari petani ke pembeli rumah tangga."
    ],
    "contohSoal": {
      "tanya": "Seorang penjahit membeli kain lalu membuat baju seragam sekolah untuk dijual. Kegiatan penjahit tersebut termasuk ...",
      "kunci": "Produksi",
      "bahas": "Penjahit mengolah bahan mentah (kain) menjadi barang jadi yang memiliki nilai guna lebih tinggi (seragam), sehingga merupakan kegiatan produksi."
    },
    "tags": [
      "kegiatan ekonomi",
      "produksi",
      "distribusi",
      "konsumsi",
      "produsen",
      "distributor",
      "konsumen"
    ]
  },
  {
    "id": "ipas-5-1",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPA - Organ Tubuh Manusia",
    "judul": "Sistem Pernapasan, Pencernaan, & Peredaran Darah",
    "icon": "🫀",
    "ringkasan": "Tubuh manusia memiliki sistem organ yang bekerja saling mendukung: sistem pernapasan mengambil oksigen, sistem pencernaan menyerap nutrisi, dan peredaran darah mendistribusikannya.",
    "poinPenting": [
      "Sistem Pernapasan: Hidung (penyaringan debu oleh rambut hidung & penyesuaian suhu) -> Faring -> Laring -> Trakea (batang tenggorokan) -> Bronkus -> Bronkiolus -> Alveolus (tempat difusi/pertukaran O2 dan CO2).",
      "Sistem Pencernaan: Mulut (enzim ptialin/amilase mencerna karbohidrat) -> Kerongkongan (gerak peristaltik meremas makanan) -> Lambung (asam lambung HCl membunuh kuman, enzim pepsin mencerna protein, renin mengendapkan kasein susu) -> Usus Halus (penyerapan sari makanan oleh jonjot usus) -> Usus Besar (penyerapan air & pembusukan sisa makanan oleh bakteri E. coli) -> Anus.",
      "Sistem Peredaran Darah: Jantung memiliki 4 ruang: Serambi Kanan (menerima darah kotor CO2 dari seluruh tubuh), Bilik Kanan (memompa darah kotor ke paru-paru), Serambi Kiri (menerima darah bersih O2 dari paru-paru), Bilik Kiri (memompa darah bersih kaya O2 ke SELURUH TUBUH, memiliki dinding paling tebal).",
      "Pembuluh Darah: Arteri/Nadi (membawa darah KELUAR dari jantung, aliran deras, denyut terasa), Vena/Balik (membawa darah MENUJU jantung, aliran lambat, dekat permukaan kulit)."
    ],
    "rumus": [
      "Alur Pernapasan: Hidung -> Trakea -> Bronkus -> Alveolus (Tempat Pertukaran O2 & CO2)",
      "Alur Pencernaan: Mulut -> Kerongkongan -> Lambung -> Usus Halus -> Usus Besar -> Anus",
      "Peredaran Darah Besar: Bilik Kiri (O2) -> Seluruh Tubuh -> Serambi Kanan (CO2)",
      "Peredaran Darah Kecil: Bilik Kanan (CO2) -> Paru-paru -> Serambi Kiri (O2)"
    ],
    "perhatikan": [
      "⚠️ Ruang jantung dengan dinding otot PALING TEBAL adalah BILIK KIRI karena harus memompa darah ke seluruh tubuh dari ujung kepala hingga kaki!",
      "Pertukaran gas oksigen dan karbon dioksida terjadi di ALVEOLUS, bukan di bronkus atau tenggorokan.",
      "Pencernaan mekanik dan kimiawi pertama kali terjadi di MULUT."
    ],
    "contohSoal": {
      "tanya": "Ruang jantung yang berfungsi memompa darah bersih kaya oksigen ke seluruh bagian tubuh adalah ...",
      "kunci": "Bilik Kiri (Ventrikel Kiri)",
      "bahas": "Bilik kiri memiliki otot dinding paling tebal dan kuat untuk memompa darah bersih ke seluruh jaringan tubuh."
    },
    "tags": [
      "sistem pernapasan",
      "alveolus",
      "sistem pencernaan",
      "lambung",
      "usus halus",
      "jantung",
      "bilik kiri",
      "arteri",
      "vena"
    ]
  },
  {
    "id": "ipas-5-2",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPA - Ekosistem",
    "judul": "Ekosistem, Jaring Makanan, Aliran Energi, & Simbiosis",
    "icon": "🌾",
    "ringkasan": "Ekosistem adalah hubungan timbal balik antara makhluk hidup (biotik) dengan lingkungannya (abiotik). Energi mengalir dari produsen ke konsumen melalui rantai makanan.",
    "poinPenting": [
      "Tingkatan Rantai Makanan: Produsen (tumbuhan hijau/fitoplankton penghasil makanan) -> Konsumen I (herbivora pemakan tumbuhan) -> Konsumen II (karnivora/omnivora) -> Konsumen Puncak -> Pengurai/Dekomposer (bakteri, jamur).",
      "Arah Panah Rantai Makanan: Arah panah menunjukkan ALIRAN ENERGI (artinya \"dimakan oleh\"). Contoh: Padi -> Belalang -> Katak -> Ular -> Elang.",
      "Jaring-jaring Makanan: Kumpulan dari beberapa rantai makanan yang saling berhubungan di alam.",
      "Simbiosis: Mutualisme (saling menguntungkan: lebah & bunga, kerbau & burung jalak), Komensalisme (satu untung, satu tidak dirugikan/diuntungkan: ikan remora & hiu, anggrek & pohon inang), Parasitisme (satu untung, satu dirugikan: benalu & pohon inang, cacing pita di perut manusia, kutu pada kucing)."
    ],
    "rumus": [
      "Aliran Energi: Matahari -> Produsen -> Konsumen I -> Konsumen II -> Konsumen Puncak -> Pengurai",
      "Arah Panah: Menunjuk ke pihak PEMANGSA / KONSUMEN (aliran energi makanan)"
    ],
    "perhatikan": [
      "Arah panah pada rantai makanan selalu mengarah ke PEMAKAN, bukan yang dimakan! (Rumput -> Kelinci berarti energi rumput mengalir ke kelinci).",
      "Jika populasi katak mendadak punah, maka populasi belalang akan melonjak pesat dan populasi ular akan kelaparan/menurun drastis."
    ],
    "contohSoal": {
      "tanya": "Hubungan antara tanaman anggrek yang menempel pada pohon mangga merupakan contoh simbiosis ...",
      "kunci": "Komensalisme",
      "bahas": "Anggrek mendapat tempat menempel untuk menyerap cahaya matahari (untung), sedangkan pohon mangga tidak dirugikan dan tidak diuntungkan."
    },
    "tags": [
      "ekosistem",
      "rantai makanan",
      "jaring makanan",
      "produsen",
      "konsumen",
      "simbiosis",
      "mutualisme",
      "parasitisme"
    ]
  },
  {
    "id": "ipas-5-3",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPA - Fisika Gelombang",
    "judul": "Sifat Gelombang Cahaya & Gelombang Bunyi",
    "icon": "🌈",
    "ringkasan": "Cahaya adalah gelombang elektromagnetik yang dapat merambat di ruang hampa, sedangkan bunyi adalah gelombang mekanik yang memerlukan medium untuk merambat.",
    "poinPenting": [
      "Sifat Cahaya: 1. Merambat lurus (contoh: berkas cahaya senter, bayang-bayang). 2. Menembus benda bening (kaca akuarium). 3. Dapat dipantulkan (cermin). 4. Dapat dibiaskan/dibelokkan (pensil terlihat patah di dalam gelas air). 5. Dapat diuraikan/dispersi (pelangi akibat pembiasan tetes hujan).",
      "Sifat Bunyi: 1. Merambat melalui medium perantara (padat, cair, gas). 2. Tidak dapat merambat di ruang hampa udara (vakum luar angkasa). 3. Dapat dipantulkan (gaung/kerdil dan gema). 4. Cepat rambat bunyi: Paling cepat di zat padat > zat cair > gas.",
      "Jenis Bunyi Berdasarkan Frekuensi: Infrasonik (< 20 Hz, anjing & jangkrik), Audiosonik (20 - 20.000 Hz, didengar manusia), Ultrasonik (> 20.000 Hz, kelelawar & lumba-lumba untuk ekolokasi)."
    ],
    "rumus": [
      "Cepat Rambat Bunyi: Zat Padat > Zat Cair > Zat Gas (Udara)",
      "Ruang Hampa (Vakum): Bunyi = TIDAK DAPAT MERAMBAT | Cahaya = DAPAT MERAMBAT (300.000 km/s)",
      "Gema = Bunyi pantul terdengar jelas SETELAH bunyi asli (jarak jauh)",
      "Gaung = Bunyi pantul terdengar BERSAMAAN sehingga mengaburkan bunyi asli (ruang sempit)"
    ],
    "perhatikan": [
      "⚠️ Pensil terlihat patah atau kolam terlihat lebih dangkal adalah bukti PEMBIASAN (refraksi) cahaya karena perbedaan kerapatan optik antara udara dan air!",
      "Di luar angkasa, para astronot tidak dapat mendengar suara secara langsung karena ruang angkasa hampa udara (tidak ada medium rambat bunyi)."
    ],
    "contohSoal": {
      "tanya": "Mengapa sendok yang dicelupkan ke dalam gelas berisi air bening tampak patah?",
      "kunci": "Terjadi peristiwa pembiasan (refraksi) cahaya",
      "bahas": "Berkas cahaya merambat melewati dua medium berbeda kerapatan optiknya (udara dan air), sehingga berkas cahaya dibelokkan."
    },
    "tags": [
      "cahaya",
      "pembiasan",
      "refraksi",
      "bunyi",
      "medium rambat",
      "ruang hampa",
      "ultrasonik",
      "gema"
    ]
  },
  {
    "id": "ipas-5-4",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPA - Bumi & Lingkungan",
    "judul": "Daur Air (Siklus Hidrologi) & Pelestarian Air Bersih",
    "icon": "🌧️",
    "ringkasan": "Air di bumi bergerak secara terus-menerus melalui siklus hidrologi yang digerakkan oleh panas matahari. Menjaga daerah resapan air sangat penting untuk ketersediaan air bersih.",
    "poinPenting": [
      "Tahapan Siklus Air: 1. Evaporasi (penguapan air laut, danau, sungai akibat panas matahari). 2. Transpirasi (penguapan air dari jaringan tumbuhan). 3. Kondensasi (uap air naik dan mendingin membentuk awan butiran air). 4. Presipitasi (titik air awan jatuh ke bumi sebagai hujan). 5. Infiltrasi (peresapan air ke dalam tanah menjadi air tanah). 6. Perkolasi/Limpasan (air mengalir di permukaan kembali ke laut/sungai).",
      "Pentingnya Daerah Resapan Air: Hutan dan vegetasi menahan air hujan agar meresap ke tanah, mencegah banjir dan tanah longsor, serta menjaga cadangan air saat kemarau.",
      "Dampak Pengaspalan & Beton Berlebih: Menutup pori-pori tanah sehingga air tidak bisa meresap (infiltrasi terhambat), menyebabkan air meluap menjadi banjir."
    ],
    "rumus": [
      "Siklus Air: Evaporasi/Transpirasi -> Kondensasi (Awan) -> Presipitasi (Hujan) -> Infiltrasi (Air Tanah)",
      "Evaporasi = Penguapan air laut/sungai  |  Transpirasi = Penguapan daun tumbuhan"
    ],
    "perhatikan": [
      "Penguapan dari tubuh tumbuhan disebut TRANSPIRASI, sedangkan penguapan dari badan air (sungai/laut) disebut EVAPORASI.",
      "Awan terbentuk melalui proses KONDENSASI (pengembunan uap air di atmosfer)."
    ],
    "contohSoal": {
      "tanya": "Proses penguapan air yang berasal dari jaringan makhluk hidup (tumbuhan) pada siklus air disebut ...",
      "kunci": "Transpirasi",
      "bahas": "Transpirasi adalah proses pelepasan uap air oleh tumbuhan melalui stomata daun ke udara akibat panas matahari."
    },
    "tags": [
      "daur air",
      "siklus hidrologi",
      "evaporasi",
      "transpirasi",
      "kondensasi",
      "presipitasi",
      "infiltrasi"
    ]
  },
  {
    "id": "ipas-5-5",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPS - Geografi & Sejarah",
    "judul": "Letak Geografis, Letak Astronomis, & Kronologi Kemerdekaan",
    "icon": "🇮🇩",
    "ringkasan": "Letak wilayah memengaruhi iklim, waktu, dan lalu lintas perekonomian. Sejarah bangsa Indonesia ditandai oleh kebangkitan persatuan pemuda hingga proklamasi kemerdekaan.",
    "poinPenting": [
      "Letak Geografis Indonesia: Terletak di antara 2 Benua (Benua Asia dan Benua Australia) dan 2 Samudra (Samudra Pasifik dan Samudra Hindia). Indonesia berada pada jalur persilangan perdagangan dunia.",
      "Letak Astronomis: 6° LU - 11° LS dan 95° BT - 141° BT. Dilalui garis khatulistiwa (0°), menyebabkan iklim tropis dengan 2 musim (kemarau dan hujan).",
      "Pembagian Waktu di Indonesia (Garis Bujur): WIB (UTC+7: Jawa, Madura, Sumatra, Kalbar, Kalteng), WITA (UTC+8: Sulsel, Bali, NTB, NTT, Kalsel, Kaltim, Kaltara, Sulawesi), WIT (UTC+9: Maluku, Papua). Selisih antarwilayah bersebelahan adalah 1 jam.",
      "Kronologi Kemerdekaan: 20 Mei 1908 (Hari Kebangkitan Nasional, lahirnya Budi Utomo) -> 28 Oktober 1928 (Sumpah Pemuda: Satu Nusa, Satu Bangsa, Satu Bahasa Indonesia) -> 17 Agustus 1945 (Proklamasi Kemerdekaan oleh Ir. Soekarno & Drs. Moh. Hatta)."
    ],
    "rumus": [
      "Selisih Waktu: WIB (+7) -> WITA (+8) -> WIT (+9)  [Tiap zona beda 1 jam]",
      "Contoh: Pukul 09.00 WIB = 10.00 WITA (Sulsel) = 11.00 WIT (Papua)",
      "Garis Lintang -> Menentukan Iklim (Tropis)  |  Garis Bujur -> Menentukan Zona Waktu"
    ],
    "perhatikan": [
      "Sulawesi Selatan (Makassar) berada di zona WAKTU INDONESIA TENGAH (WITA), lebih cepat 1 jam dari Jakarta (WIB).",
      "Sumpah Pemuda diperingati setiap 28 OKTOBER, sedangkan Kebangkitan Nasional 20 MEI."
    ],
    "contohSoal": {
      "tanya": "Jika di Jakarta (WIB) menunjukkan pukul 08.00 pagi, maka di Makassar (WITA) menunjukkan pukul ...",
      "kunci": "09.00 WITA",
      "bahas": "WITA lebih cepat 1 jam dibanding WIB, sehingga 08.00 + 1 jam = 09.00 WITA."
    },
    "tags": [
      "letak geografis",
      "letak astronomis",
      "zona waktu",
      "wib",
      "wita",
      "wit",
      "sumpah pemuda",
      "budi utomo",
      "proklamasi"
    ]
  },
  {
    "id": "ipas-5-6",
    "kelas": 5,
    "mapel": "IPAS",
    "kategori": "IPS - Ekonomi Pasar",
    "judul": "Ekonomi Pasar, Hukum Permintaan-Penawaran, & Koperasi",
    "icon": "🏷️",
    "ringkasan": "Harga barang di pasar terbentuk dari interaksi antara penawaran produsen dan permintaan pembeli. Koperasi adalah lembaga ekonomi berazas kekeluargaan.",
    "poinPenting": [
      "Hukum Permintaan: Jika harga barang naik, maka jumlah permintaan akan turun. Jika harga turun, permintaan naik (berbanding terbalik).",
      "Hukum Penawaran: Jika harga barang naik, maka produsen akan menawarkan barang lebih banyak. Jika harga turun, penawaran berkurang (berbanding lurus).",
      "Faktor Bencana Alam: Jika terjadi banjir/gagal panen, pasokan (penawaran) cabai/beras berkurang di pasar, sedangkan permintaan tetap -> Akibatnya harga barang MELONJAK NAIK.",
      "Koperasi: Lembaga ekonomi yang bertujuan menyejahterakan anggota berlandaskan azas kekeluargaan. Bapak Koperasi Indonesia adalah Drs. Mohammad Hatta."
    ],
    "rumus": [
      "Pasokan Turun + Permintaan Tetap/Naik -> Harga Pasar NAIK",
      "Pasokan Melimpah + Permintaan Turun -> Harga Pasar TURUN",
      "Asas Koperasi = Kekeluargaan (Pasal 33 UUD 1945)"
    ],
    "perhatikan": [
      "Hati-hati: Bunyi hukum permintaan berbanding terbalik dengan hukum penawaran!",
      "Gagal panen mengakibatkan pasokan/penawaran barang MENURUN, sehingga harga barang di pasar NAIK."
    ],
    "contohSoal": {
      "tanya": "Banjir besar merendam sentra persawahan sehingga pasokan beras ke pasar berkurang drastis, sedangkan kebutuhan warga tetap. Hal ini menyebabkan harga beras ...",
      "kunci": "Naik melonjak",
      "bahas": "Ketika pasokan (penawaran) berkurang sementara permintaan tetap tinggi, harga barang akan mengalami kenaikan sesuai hukum pasar."
    },
    "tags": [
      "ekonomi pasar",
      "permintaan",
      "penawaran",
      "hukum pasar",
      "koperasi",
      "bapak koperasi",
      "kelangkaan"
    ]
  },
  {
    "id": "ipas-6-1",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPA - Perkembangbiakan Makhluk Hidup",
    "judul": "Perkembangbiakan Tumbuhan, Hewan, & Metamorfosis",
    "icon": "🦋",
    "ringkasan": "Makhluk hidup berkembang biak untuk melestarikan keturunannya agar tidak punah. Perkembangbiakan dapat berlangsung secara kawin (generatif) maupun tak kawin (vegetatif).",
    "poinPenting": [
      "Perkembangbiakan Tumbuhan Generatif: Melalui penyerbukan (jatuhnya serbuk sari ke kepala putik) pada bunga. Alat kelamin jantan = benang sari, alat kelamin betina = putik.",
      "Vegetatif Alami Tumbuhan: Spora (paku, lumut), Tunas (pisang, bambu), Tunas adventif (cocor bebek), Umbi batang (kentang, ubi jalar), Umbi lapis (bawang merah), Akar tinggal/Rhizoma (jahe, kunyit, lengkuas), Geragih/Stolon (stroberi, rumput teki).",
      "Vegetatif Buatan: Cangkok (mempertahankan sifat unggul), Stek (batang singkong), Okulasi/menempel mata tunas, Merunduk (melati, apel).",
      "Perkembangbiakan Hewan: Ovipar (bertelur: ayam, burung, ikan), Vivipar (melahirkan: sapi, paus, lumba-lumba, kucing), Ovovivipar (bertelur-melahirkan: kadal, hiu, ular boa, platipus).",
      "Metamorfosis Sempurna: Mengalami tahap PUPA/KEPOMPONG dan bentuk larva sangat berbeda dengan imago (Telur -> Larva/Ulat -> Pupa -> Imago/Dewasa: Kupu-kupu, Nyamuk, Katak, Lalat).",
      "Metamorfosis Tidak Sempurna: TANPA tahap pupa (Telur -> Nimfa -> Imago: Kecoak, Belalang, Capung, Jangkrik)."
    ],
    "rumus": [
      "Metamorfosis Sempurna = Telur -> Larva -> PUPA (Kepompong) -> Imago",
      "Metamorfosis Tidak Sempurna = Telur -> NIMFA -> Imago  (Tanpa Pupa)",
      "Ovipar = Telur  |  Vivipar = Beranak  |  Ovovivipar = Telur dalam tubuh lalu menetas saat keluar"
    ],
    "perhatikan": [
      "⚠️ Kunci pembeda utama metamorfosis sempurna dan tidak sempurna adalah ADA ATAU TIDAKNYA FASE PUPA (KEPOMPONG)!",
      "Paus dan lumba-lumba adalah MAMALIA yang berkembang biak dengan MELAHIRKAN (Vivipar) dan bernapas dengan paru-paru, BUKAN bertelur."
    ],
    "contohSoal": {
      "tanya": "Hewan berikut yang mengalami tahapan metamorfosis sempurna dalam daur hidupnya adalah ...",
      "kunci": "Kupu-kupu, nyamuk, dan katak",
      "bahas": "Ketiganya mengalami fase larva dan pupa dengan bentuk muda yang sangat berbeda jauh dengan bentuk dewasanya."
    },
    "tags": [
      "perkembangbiakan",
      "generatif",
      "vegetatif",
      "ovipar",
      "vivipar",
      "metamorfosis sempurna",
      "pupa",
      "nimfa"
    ]
  },
  {
    "id": "ipas-6-2",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPA - Pubertas & Pertumbuhan",
    "judul": "Ciri-ciri Masa Pubertas pada Remaja",
    "icon": "🧑‍🤝‍🧑",
    "ringkasan": "Pubertas adalah masa peralihan dari anak-anak menuju dewasa yang ditandai dengan matangnya organ reproduksi dan perubahan fisik serta emosional.",
    "poinPenting": [
      "Ciri Primer (Kematangan Reproduksi): Laki-laki mengalami mimpi basah (produksi sperma). Perempuan mengalami menstruasi/haid (produksi sel telur).",
      "Ciri Sekunder Laki-laki: Suara membesar/berat, tumbuh jakun di leher, dada membidang, tumbuh rambut halus di ketiak dan kemaluan, timbul jerawat.",
      "Ciri Sekunder Perempuan: Payudara membesar, pinggul melebar, suara melengking/nyaring, tumbuh rambut halus di ketiak dan kemaluan, timbul jerawat.",
      "Menjaga Kebersihan Reproduksi: Mandi teratur, mengganti pakaian dalam minimal 2 kali sehari berbahan katun menyerap keringat, membasuh organ reproduksi dengan air bersih dari depan ke belakang."
    ],
    "rumus": [
      "Primer = Matangnya organ reproduksi (Mimpi basah / Menstruasi)",
      "Sekunder = Perubahan bentuk fisik tubuh luar (Jakun, Pinggul, Suara)"
    ],
    "perhatikan": [
      "Bedakan antara ciri primer (pematangan organ reproduksi dalam) dengan ciri sekunder (perubahan fisik luar).",
      "Munculnya jerawat dan produksi keringat berlebih adalah wajar akibat perubahan hormon, jaga kebersihan kulit wajah secara teratur."
    ],
    "contohSoal": {
      "tanya": "Ciri pubertas primer pada anak laki-laki ditandai dengan ...",
      "kunci": "Mulai diproduksinya sel sperma (mimpi basah)",
      "bahas": "Ciri primer berkaitan langsung dengan kematangan organ reproduksi, yaitu produksi sel sperma."
    },
    "tags": [
      "pubertas",
      "reproduksi",
      "jakun",
      "menstruasi",
      "mimpi basah",
      "perubahan sekunder"
    ]
  },
  {
    "id": "ipas-6-3",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPA - Fisika Listrik & Energi",
    "judul": "Rangkaian Listrik (Seri & Paralel), Magnet, & Energi Alternatif",
    "icon": "💡",
    "ringkasan": "Arus listrik mengalir dalam rangkaian tertutup. Rangkaian listrik dapat disusun secara seri (berurutan) atau paralel (bercabang).",
    "poinPenting": [
      "Rangkaian Seri: Disusun berurutan tanpa cabang. Arus listrik di semua lampu sama besar. Kelebihan: hemat kabel. Kekurangan: nyala lampu lebih redup; jika 1 lampu mati/putus, SEMUA lampu ikut padam.",
      "Rangkaian Paralel: Disusun bercabang. Tegangan pada tiap cabang sama. Kelebihan: nyala lampu lebih terang; jika 1 lampu mati, lampu di cabang lain TETAP MENYALA. Digunakan pada instalasi listrik rumah dan lampu lalu lintas.",
      "Sifat Magnet: Memiliki 2 kutub (Utara dan Selatan). Kutub senama tolak-menolak, kutub tidak senama tarik-menarik. Gaya magnet terbesar berada di kedua ujung kutubnya.",
      "Energi Alternatif (Terbarukan): Energi yang ramah lingkungan dan tidak habis dipakai: Matahari (solar cell), Angin (aerogenerator), Air (PLTA), Panas Bumi (geotermal), Biomassa."
    ],
    "rumus": [
      "Rangkaian Seri: 1 Lampu Putus -> Semua Lampu Padam",
      "Rangkaian Paralel: 1 Lampu Putus -> Lampu Cabang Lain Tetap Menyala",
      "Kutub Magnet: U - U (Tolak) | S - S (Tolak) | U - S (Tarik-menarik)"
    ],
    "perhatikan": [
      "Lampu di rumah kita dirangkai secara PARALEL agar saat mematikan lampu kamar, lampu ruang tamu tidak ikut padam.",
      "Batu bara dan minyak bumi BUKAN energi alternatif karena menghasilkan polusi dan tidak dapat diperbarui."
    ],
    "contohSoal": {
      "tanya": "Mengapa instalasi listrik di rumah tangga menggunakan rangkaian paralel?",
      "kunci": "Agar jika satu peralatan listrik dimatikan, peralatan di ruangan lain tetap menyala.",
      "bahas": "Rangkaian paralel memiliki percabangan jalur arus tersendiri sehingga peralatan bekerja secara mandiri."
    },
    "tags": [
      "listrik",
      "rangkaian seri",
      "rangkaian paralel",
      "magnet",
      "energi alternatif",
      "terbarukan"
    ]
  },
  {
    "id": "ipas-6-4",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPA - Astronomi",
    "judul": "Tata Surya, Rotasi-Revolusi Bumi, & Gerhana",
    "icon": "🪐",
    "ringkasan": "Tata surya berpusat pada Matahari sebagai bintang. Bumi berputar pada porosnya (rotasi) dan mengelilingi matahari (revolusi).",
    "poinPenting": [
      "Urutan 8 Planet dari Matahari: Merkurius (terdekat & terkecil), Venus (terpanas, bintang fajar/kejora), Bumi (planet kehidupan), Mars (planet merah), Yupiter (planet terbesar), Saturnus (memiliki cincin cincin es terindah), Uranus (berotasi miring/menggelinding), Neptunus (terjauh dan terdingin).",
      "Sabuk Asteroid: Kumpulan bongkahan batu luar angkasa yang berada di antara orbit MARS dan YUPITER.",
      "Rotasi Bumi (Kala rotasi 24 jam): Menyebabkan terjadinya siang dan malam, gerak semu harian matahari (terbit di timur, tenggelam di barat), perbedaan zona waktu.",
      "Revolusi Bumi (Kala revolusi 365 1/4 hari): Menyebabkan pergantian musim di belahan bumi, gerak semu tahunan matahari, perbedaan lama waktu siang dan malam, terlihatnya rasi bintang yang berbeda.",
      "Gerhana Matahari: Terjadi saat posisi Matahari - Bulan - Bumi berada dalam satu garis lurus (terjadi siang hari saat fase bulan baru).",
      "Gerhana Bulan: Terjadi saat posisi Matahari - Bumi - Bulan berada dalam satu garis lurus (terjadi malam hari saat fase bulan purnama)."
    ],
    "rumus": [
      "Planet Dalam: Merkurius, Venus, Bumi, Mars  (Di dalam sabuk asteroid)",
      "Planet Luar: Yupiter, Saturnus, Uranus, Neptunus  (Di luar sabuk asteroid)",
      "Rotasi Bumi (24 Jam) -> Siang-Malam & Gerak Semu Harian",
      "Revolusi Bumi (365,25 Hari) -> Musim & Gerak Semu Tahunan",
      "Gerhana Matahari: Matahari - BULAN - Bumi  (Bulan di tengah)",
      "Gerhana Bulan: Matahari - BUMI - Bulan  (Bumi di tengah)"
    ],
    "perhatikan": [
      "⚠️ Bulan BUKAN planet, melainkan SATELIT ALAMI Bumi.",
      "Posisi yang berada di tengah pada Gerhana Matahari adalah BULAN; sedangkan pada Gerhana Bulan yang di tengah adalah BUMI.",
      "Pluto bukan lagi planet utama sejak 2006 (ditetapkan sebagai planet kerdil)."
    ],
    "contohSoal": {
      "tanya": "Peristiwa pergantian siang dan malam serta gerak semu harian matahari diakibatkan oleh ...",
      "kunci": "Rotasi Bumi",
      "bahas": "Bumi berputar pada porosnya dari barat ke timur membutuhkan waktu 24 jam sehingga bagian bumi bergantian menghadap matahari."
    },
    "tags": [
      "tata surya",
      "planet",
      "sabuk asteroid",
      "rotasi bumi",
      "revolusi bumi",
      "gerhana matahari",
      "gerhana bulan"
    ]
  },
  {
    "id": "ipas-6-5",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPA - Penyelidikan Ilmiah",
    "judul": "Metode Ilmiah & Variabel Eksperimen Sains",
    "icon": "🔬",
    "ringkasan": "Penyelidikan ilmiah dilakukan secara sistematis melalui pengamatan, perumusan masalah, hipotesis, eksperimen, dan penarikan kesimpulan dengan mengontrol variabel-variabel pengujian.",
    "poinPenting": [
      "Variabel Bebas (Independen): Faktor atau kondisi yang sengaja diubah-ubah oleh peneliti untuk melihat pengaruhnya (contoh: takaran pupuk yang berbeda-beda).",
      "Variabel Terikat (Dependen): Faktor yang diukur atau diamati sebagai respon/akibat dari perubahan variabel bebas (contoh: tinggi tanaman atau jumlah daun).",
      "Variabel Kontrol: Faktor-faktor lain yang dijaga tetap sama/konstan agar eksperimen berlangsung secara adil dan valid (contoh: jenis tanaman sama, volume air siraman sama, intensitas cahaya sama).",
      "Langkah Metode Ilmiah: 1. Merumuskan Masalah -> 2. Mengumpulkan Informasi -> 3. Menyusun Hipotesis -> 4. Melakukan Eksperimen -> 5. Menganalisis Data -> 6. Menarik Kesimpulan."
    ],
    "rumus": [
      "Variabel Bebas = Faktor yang DIUBAH sengaja oleh peneliti",
      "Variabel Terikat = Hasil yang DIUKUR / DIAMATI",
      "Variabel Kontrol = Faktor yang DIBUAT SAMA agar pengujian adil"
    ],
    "perhatikan": [
      "Dalam sebuah eksperimen sains yang baik, hanya boleh ada SATU variabel bebas yang diuji dalam satu waktu.",
      "Jika menguji pengaruh cahaya terhadap pertumbuhan kecambah, maka jenis wadah, kapas, dan air siraman harus menjadi VARIABEL KONTROL (dibuat sama persis)."
    ],
    "contohSoal": {
      "tanya": "Siswa menguji pengaruh pemberian jenis pupuk terhadap tinggi tanaman cabai dengan takaran air yang sama. Tinggi tanaman cabai yang diukur setiap hari merupakan variabel ...",
      "kunci": "Variabel Terikat (Dependen)",
      "bahas": "Tinggi tanaman merupakan hasil respon yang diamati dan diukur akibat dari pemberian pupuk, sehingga berperan sebagai variabel terikat."
    },
    "tags": [
      "metode ilmiah",
      "variabel bebas",
      "variabel terikat",
      "variabel kontrol",
      "eksperimen",
      "penelitian"
    ]
  },
  {
    "id": "ipas-6-6",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPS - Hubungan Internasional",
    "judul": "ASEAN & Kerja Sama Internasional di Era Globalisasi",
    "icon": "🌏",
    "ringkasan": "ASEAN (Association of Southeast Asian Nations) adalah organisasi kerja sama regional negara-negara di kawasan Asia Tenggara di bidang ekonomi, sosial, budaya, dan keamanan.",
    "poinPenting": [
      "Latar Belakang Berdirinya ASEAN: Didirikan pada 8 Agustus 1967 di Bangkok, Thailand melalui penandatanganan DEKLARASI BANGKOK.",
      "5 Tokoh & Negara Pendiri ASEAN: 1. Indonesia: Adam Malik. 2. Malaysia: Tun Abdul Razak. 3. Filipina: Narciso Ramos. 4. Singapura: S. Rajaratnam. 5. Thailand: Thanat Khoman.",
      "Prinsip ASEAN: Menghormati kemerdekaan dan kedaulatan tiap negara, tidak campur tangan urusan dalam negeri (non-intervensi), dan penyelesaian sengketa secara damai.",
      "Peran Indonesia di ASEAN: Tuan rumah KTT ASEAN pertama di Bali (1976), pemrakarsa pembentukan Komunitas Keamanan ASEAN, penengah konflik di kawasan (Kamboja), dan lokasi Gedung Sekretariat ASEAN di Jakarta.",
      "Dampak Globalisasi: Mempercepat pertukaran informasi dan teknologi, memperluas pasar ekspor, namun harus dibentengi dengan melestarikan kebudayaan dan nilai luhur bangsa."
    ],
    "rumus": [
      "Berdirinya ASEAN: 8 Agustus 1967 (Deklarasi Bangkok)",
      "5 Negara Pendiri: Indonesia, Malaysia, Filipina, Singapura, Thailand",
      "Tokoh Indonesia: Adam Malik  |  Gedung Sekretariat: Jakarta"
    ],
    "perhatikan": [
      "⚠️ Negara di Asia Tenggara yang TIDAK PERNAH DIJAJAH oleh bangsa barat adalah THAILAND.",
      "Sekretariat Jenderal ASEAN bertempat di JAKARTA, Indonesia."
    ],
    "contohSoal": {
      "tanya": "Tokoh perwakilan dari Indonesia yang menandatangani Deklarasi Bangkok pada pembentukan ASEAN adalah ...",
      "kunci": "Adam Malik",
      "bahas": "Adam Malik yang saat itu menjabat Menteri Luar Negeri Republik Indonesia adalah salah satu dari 5 tokoh pemrakarsa ASEAN."
    },
    "tags": [
      "asean",
      "deklarasi bangkok",
      "adam malik",
      "globalisasi",
      "kerja sama internasional",
      "asia tenggara"
    ]
  },
  {
    "id": "ipas-6-7",
    "kelas": 6,
    "mapel": "IPAS",
    "kategori": "IPS - Literasi Finansial & Kesejahteraan",
    "judul": "Skala Prioritas Kebutuhan Hidup & Literasi Finansial",
    "icon": "💰",
    "ringkasan": "Kebutuhan manusia tidak terbatas, sedangkan alat pemuas kebutuhan berupa uang dan sumber daya alam terbatas. Oleh karena itu, manusia harus menyusun skala prioritas.",
    "poinPenting": [
      "Kebutuhan Primer (Pokok): Kebutuhan mutlak yang harus dipenuhi terlebih dahulu untuk bertahan hidup. Contoh: makanan pokok, air bersih, pakaian layak, tempat tinggal, akses kesehatan.",
      "Kebutuhan Sekunder: Kebutuhan tambahan pelengkap kenyamanan hidup yang dipenuhi setelah kebutuhan primer terpenuhi. Contoh: sepeda, meja belajar, lemari pendingin, smartphone untuk belajar.",
      "Kebutuhan Tersier: Kebutuhan barang mewah atau prestise/kehormatan yang dipenuhi setelah kebutuhan primer dan sekunder terpenuhi. Contoh: mobil mewah, liburan ke luar negeri, perhiasan emas.",
      "Menyusun Skala Prioritas: Urutkan daftar belanja berdasarkan tingkat kepentingan mendesak: 1. Sangat mendesak & penting -> 2. Penting tapi tidak mendesak -> 3. Kurang penting tapi mendesak -> 4. Tidak penting & tidak mendesak."
    ],
    "rumus": [
      "Hierarki Skala Prioritas: Kebutuhan Primer (Wajib) >> Kebutuhan Sekunder (Pelengkap) >> Kebutuhan Tersier (Kemewahan)",
      "Manajemen Uang: Pendapatan - Tabungan = Belanja Kebutuhan  (Bukan sebaliknya)"
    ],
    "perhatikan": [
      "Air bersih dan makanan pokok adalah kebutuhan PRIMER. Membeli mainan atau gawai mahal adalah kebutuhan SEKUNDER atau TERSIER.",
      "Skala prioritas mendahulukan kebutuhan (needs), BUKAN keinginan (wants)."
    ],
    "contohSoal": {
      "tanya": "Di antara kebutuhan berikut, yang harus didahulukan dalam skala prioritas seorang pelajar adalah ...",
      "kunci": "Buku pelajaran sekolah dan alat tulis",
      "bahas": "Buku pelajaran dan alat tulis merupakan kebutuhan primer penunjang belajar, yang lebih penting dan mendesak dibanding gawai baru atau mainan."
    },
    "tags": [
      "skala prioritas",
      "kebutuhan primer",
      "kebutuhan sekunder",
      "kebutuhan tersier",
      "literasi finansial",
      "keuangan"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANGKUMAN_DATA };
}
