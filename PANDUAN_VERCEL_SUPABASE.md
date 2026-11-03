# 🚀 PANDUAN LENGKAP MIGRASI: VERCEL & SUPABASE
## Arena Cerdas Cermat MIPAS 2026 (SD Kelas 4, 5, 6)

Panduan ini memandu Anda memindahkan aplikasi dari Google Spreadsheet + Google Apps Script ke **Vercel** (hosting web super cepat dan gratis) dan **Supabase** (database cloud PostgreSQL modern dan andal), serta memanfaatkan **Halaman Rangkuman Materi MTK & IPAS**.

---

## 📑 DAFTAR ISI
1. [Mengapa Vercel & Supabase?](#1-mengapa-vercel--supabase)
2. [Langkah 1: Setup Database Supabase](#langkah-1-setup-database-supabase)
3. [Langkah 2: Menjalankan Skrip Schema & Seed (1.000 Soal Prioritas)](#langkah-2-menjalankan-skrip-schema--seed-1000-soal-prioritas)
4. [Langkah 3: Mengambil URL & API Key Supabase](#langkah-3-mengambil-url--api-key-supabase)
5. [Langkah 4: Deploy Aplikasi ke Vercel](#langkah-4-deploy-aplikasi-ke-vercel)
6. [Langkah 5: Menghubungkan Supabase di Web App](#langkah-5-menghubungkan-supabase-di-web-app)
7. [Fitur Baru: 1.000 Soal Prioritas, Stimulus Kasus & Diagnosa Jawaban Salah](#7-fitur-baru-1000-soal-prioritas-stimulus-kasus--diagnosa-jawaban-salah)
8. [Fitur Baru: Rangkuman Materi Lengkap, Rumus Emas & Peringatan Jebakan](#8-fitur-baru-rangkuman-materi-lengkap-rumus-emas--peringatan-jebakan)

---

## 1. Mengapa Vercel & Supabase?

| Fitur | Spreadsheet + Apps Script (Lama) | Vercel + Supabase (Baru) |
|---|---|---|
| **Kecepatan / Loading** | Lambat (ada cold start 3–8 detik Google) | **Instan (< 1 detik)** melalui Vercel Edge Network |
| **Batas Kuota / Quota** | Kuota eksekusi harian Google terbatas | **Tinggi (Free tier Supabase 500MB DB, Vercel 100GB bandwith)** |
| **Skalabilitas** | Sering lock saat banyak murid kuis bersamaan | **Database PostgreSQL ACID berkecepatan tinggi** |
| **Offline-Ready** | Harus online penuh | **Bisa berjalan offline (Local-First fallback)** |
| **Kemudahan Akses** | URL Apps Script panjang | **Domain Vercel bersih & bisa custom domain sekolah** |

---

## 2. Langkah 1: Setup Database Supabase

1. Kunjungi situs resmi **[https://supabase.com](https://supabase.com)**.
2. Klik tombol **"Start your project"** atau **"Sign In"** (Anda dapat login langsung menggunakan akun GitHub atau Google).
3. Setelah masuk ke Dashboard, klik **"New Project"**.
4. Isi informasi proyek:
   - **Name**: `cerdas-cermat-mipas` (atau nama pilihan Anda)
   - **Database Password**: Buat password yang kuat dan catat.
   - **Region**: Pilih **Singapore (ap-southeast-1)** agar paling dekat dan cepat dari Indonesia.
   - **Pricing Plan**: Pilih **Free Plan**.
5. Klik **"Create new project"** dan tunggu sekitar 1–2 menit hingga database selesai disiapkan.

---

## 3. Langkah 2: Menjalankan Skrip Schema & Seed (1.000 Soal Prioritas)

Proyek ini telah menyediakan dua skrip SQL siap pakai di dalam folder `supabase/`:

### A. Membuat Tabel Database (`supabase/schema.sql`)
1. Di Dashboard Supabase, buka menu **"SQL Editor"** di bilah sisi kiri (ikon terminal `>_`).
2. Klik **"New query"**.
3. Buka file `supabase/schema.sql` pada proyek ini, salin seluruh kodenya, lalu tempel (*paste*) ke SQL Editor Supabase.
4. Klik tombol **"Run"** (atau tekan `Ctrl + Enter`).
5. Akan muncul pesan `Success. No rows returned`. Tabel `cc_questions`, `cc_sessions`, `cc_teams`, `cc_final_matches`, dan `cc_settings` berhasil dibuat beserta aturan keamanannya (RLS).

### B. Memasukkan 1.000 Bank Soal Olimpiade Prioritas (`supabase/seed.sql`)
1. Di SQL Editor Supabase, klik **"New query"** lagi.
2. Buka file `supabase/seed.sql` pada proyek ini, salin seluruh isinya (berisi 1.000 soal prioritas Matematika, IPA, dan IPS lengkap dengan stimulus soal, opsi, kunci, pembahasan mendalam, dan diagnosa kesalahan).
3. Tempel ke SQL Editor Supabase dan klik **"Run"**.
4. Tunggu beberapa detik hingga proses selesai. Anda dapat memeriksa tabel `cc_questions` pada menu **Table Editor** untuk melihat seluruh 1.000 soal sudah tersimpan rapi di cloud!
   *(Catatan: Anda juga dapat menggunakan tombol **"🚀 Sinkronkan 1.000 Soal ke Supabase"** langsung dari menu Pengaturan di dalam web app).*

---

## 4. Langkah 3: Mengambil URL & API Key Supabase

Untuk menghubungkan aplikasi web ke database Supabase Anda:
1. Di Dashboard Supabase, klik menu **Project Settings** (ikon gerigi ⚙️ di pojok kiri bawah).
2. Pilih submenu **"API"**.
3. Pada bagian **Project API keys**, salin dua data penting berikut:
   - **Project URL**: Contoh `https://abcdefghijklm.supabase.co`
   - **anon / public key**: String panjang yang berawalan `eyJhbGciOi...`

> ⚠️ **PENTING**: Cukup salin `anon` / `public` key. Jangan pernah membagikan `service_role` (secret key) kepada publik.

---

## 5. Langkah 4: Deploy Aplikasi ke Vercel

Ada dua cara mudah untuk mendeploy aplikasi ini ke Vercel:

### Opsi A: Deploy Melalui GitHub (Sangat Direkomendasikan)
1. Buat repositori baru di akun GitHub Anda (misal: `cerdas-cermat-mipas`).
2. Unggah/push seluruh file proyek ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi Arena Cerdas Cermat MIPAS Vercel & Supabase"
   git branch -M main
   git remote add origin https://github.com/USERNAME/cerdas-cermat-mipas.git
   git push -u origin main
   ```
3. Buka **[https://vercel.com](https://vercel.com)** dan login dengan akun GitHub Anda.
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repositori `cerdas-cermat-mipas` lalu klik **"Import"**.
6. Pada bagian **Environment Variables** (opsional), Anda dapat menambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL` = `URL_SUPABASE_ANDA`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `ANON_KEY_SUPABASE_ANDA`
7. Klik tombol **"Deploy"**.
8. Dalam hitungan detik, aplikasi Anda sudah live dengan URL seperti `https://cerdas-cermat-mipas.vercel.app`!

### Opsi B: Deploy Menggunakan Vercel CLI (Tanpa Git)
1. Buka terminal (PowerShell atau Command Prompt) di folder proyek ini.
2. Jalankan perintah:
   ```bash
   npx vercel
   ```
3. Ikuti panduan di layar:
   - Tekan `y` untuk login.
   - Pilih scope akun Anda.
   - Link to existing project? Tekan `n`.
   - Project name? Tekan Enter untuk nama default.
   - In which directory? Tekan Enter (`./`).
4. Vercel akan langsung mengunggah dan memberikan link produksi web Anda!

---

## 6. Langkah 5: Menghubungkan Supabase di Web App

Selain melalui Environment Variables di Vercel, Anda dapat menghubungkan Supabase langsung dari antarmuka aplikasi secara instan:

1. Buka aplikasi web yang sudah ter-deploy di browser.
2. Klik menu **"Pengaturan"** di sidebar.
3. Masukkan PIN Guru default: `123456`.
4. Pada kartu **"Koneksi Supabase Cloud Database"**:
   - Masukkan **Supabase Project URL**.
   - Masukkan **Supabase Anon / Public API Key**.
   - Klik **"🔌 Sambungkan & Simpan"**.
5. Indikator di pojok kanan atas akan berubah menjadi **🟢 Supabase Cloud Terhubung**!
6. Jika database Supabase Anda masih kosong, cukup klik tombol **"🚀 Sinkronkan 1.000 Soal ke Supabase"** untuk mengunggah seluruh bank soal secara otomatis.

---

## 7. Fitur Baru: 1.000 Soal Prioritas, Stimulus Kasus & Diagnosa Jawaban Salah

Sesuai arahan materi modul prioritas olimpiade MIPAS (*Buku Belajar Cerdas Cermat MIPAS 2026, UPTD SPF SD Inpres Tangkala II*), kini telah disematkan pembaruan besar:

### A. 1.000 Soal Siap Lomba dengan Stimulus Kontekstual
- **Total 1.000 Soal**: Terdiri dari 350 soal Matematika, 350 soal IPA, dan 300 soal IPS dari jenjang Kelas 4, 5, dan 6.
- **Stimulus Kasus Nyata (275+ Soal Berstimulus)**: Menampilkan kotak bacaan kasus naratif, cerita kontekstual, data eksperimen, dan tabel informasi dengan kartu visual hijau khusus (`📋 BACAAN STIMULUS / KASUS SOAL`) agar siswa terbiasa dengan model soal asesmen nasional dan olimpiade modern.

### B. Diagnosa & Penjelasan Mendalam untuk Soal yang Salah
Ketika murid menyelesaikan kuis atau latihan mandiri:
1. **Tombol Khusus "🔍 Evaluasi Soal yang Salah"**: Memfilter langsung hanya soal-soal yang belum tepat agar murid dapat fokus mengevaluasi kelemahannya.
2. **Kategori Diagnosa Kesalahan Otomatis**:
   - 🧮 **Ketelitian Hitung / Aturan Kabataku**: Menganalisis jika murid salah pada urutan pengerjaan kurung/kali-bagi atau penjumlahan pecahan beda penyebut.
   - 📐 **Pemahaman Konsep & Rumus**: Menganalisis jika murid tertukar antara rumus keliling dan luas, KPK dan FPB, atau konsep bangun ruang.
   - 🔍 **Membaca Informasi & Stimulus**: Menganalisis ketelitian murid dalam membaca data tabel atau narasi kasus.
   - 🧬 **Konsep Sains & Kronologi Sejarah**: Menganalisis fakta biologi (metamorfosis, organ alveolus/jantung) dan kronologi kebangsaan.
3. **Komparasi Visual**: Menampilkan secara berdampingan **Jawaban Siswa** vs **Kunci Jawaban yang Benar**.
4. **Saran Pencegahan / Rumus Kunci**: Tips khusus agar tidak terjebak lagi pada soal serupa di babak lomba berikutnya.

---

## 8. Fitur Baru: Rangkuman Materi Lengkap, Rumus Emas & Peringatan Jebakan

Kini tersedia **38 Bab Rangkuman Materi Terpadu** yang memuat seluruh teori prioritas, rumus-rumus emas, dan peringatan kesalahan umum (`⚠️ PERHATIKAN`):

### Apa saja isinya?
- **Matematika (MTK) Kelas 4, 5, 6**:
  - Bilangan Cacah Besar, Nilai Tempat & Dekomposisi *(Rumus Nilai Angka = Angka × Nilai Tempat)*
  - Aturan Operasi Campuran Kabataku *(Kurung >> Kali/Bagi >> Tambah/Kurang)*
  - Kelipatan, Faktor, FPB, KPK, & Bilangan Prima *(Daftar prima < 30)*
  - Pecahan Senilai, Bentuk Sederhana, Desimal & Persen *(1/2=0,5=50%, 1/4=0,25=25%, 3/4=0,75=75%, 1/5=0,2=20%)*
  - Pengukuran Satuan Baku *(km-m-cm, kg-ons-g, ton, kuintal, jam-menit-detik)*
  - Keliling & Luas Bangun Datar Dasar *(Persegi, Persegi Panjang, Segitiga)*
  - Operasi Pecahan Berbeda Penyebut & Pecahan Campuran *(Wajib KPK! 2/3 + 1/4 ≠ 3/7)*
  - Desimal, Persen, Diskon & Aritmetika Sosial *(Diskon = % × Harga Awal, Harga Bayar = Harga Awal - Diskon)*
  - Soal Cerita KPK vs FPB *(KPK = Waktu bersamaan berulang; FPB = Pembagian paket merata terbanyak)*
  - Rasio & Skala Peta *(Skala = JP / JS, samakan cm: 1 km = 100.000 cm)*
  - Kecepatan & Debit *(Segitiga JOKOWI & Segitiga Debit, 1 liter = 1 dm³ = 1.000 cm³)*
  - Bangun Datar Gabungan *(Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat)*
  - Bangun Ruang Kubus & Balok *(Volume, Luas Permukaan, Panjang Kerangka 4(p+l+t), Jaring-jaring)*
  - Bilangan Bulat Negatif *(Suhu, Garis Bilangan, Pengurangan lawan: a - (-b) = a + b)*
  - **Soal Cerita Pecahan Bertingkat & Konsep "Dari Sisa"** *(Jebakan cerdas cermat: sisa tahap 1 dikali fraksi tahap 2)*
  - Perbandingan Senilai & Berbalik Nilai *(Pekerja × Waktu)*
  - Lingkaran Lengkap *(d = 2r, Keliling K = 2πr = πd, Luas L = πr², Busur, Juring)*
  - Bangun Ruang Lengkap *(Prisma Segitiga, Limas Segiempat, Tabung V=πr²t, Kerucut V=1/3πr²t, Bola V=4/3πr³)*
  - Statistika *(Mean, Modus, Median, Menentukan Nilai Hilang/Susulan, Diagram Lingkaran Derajat 360° vs Persen 100%)*
- **IPAS (IPA & IPS) Kelas 4, 5, 6**:
  - Bagian Tubuh Tumbuhan, Fotosintesis (Reaksi & Klorofil), & Pembuluh Xilem/Floem
  - Wujud Zat, Perubahan Wujud Kalor, & Perpindahan Panas (Konduksi, Konveksi, Radiasi, Titik Embun Luar Gelas)
  - Gaya di Sekitar Kita & Transformasi Energi (Kimia -> Listrik -> Cahaya)
  - Peta, Inset Peta, Legenda, Kenampakan Alam Pesisir/Dataran Tinggi, & Budaya Sulsel (Tongkonan, Perahu Pinisi)
  - Kegiatan Ekonomi (Produksi, Distribusi, Konsumsi) & Pelaku Usaha
  - Sistem Organ Tubuh Manusia: Pernapasan (Alveolus), Pencernaan, Peredaran Darah (Bilik Kiri Jantung Paling Tebal)
  - Ekosistem, Jaring Makanan (Arah Panah Aliran Energi), & 3 Simbiosis
  - Sifat Gelombang Cahaya (Pembiasan Pensil Bengkok) & Bunyi (Butuh Medium, Tak Merambat di Ruang Hampa)
  - Daur Air (Evaporasi, Transpirasi, Kondensasi, Presipitasi, Infiltrasi)
  - Letak Geografis (2 Benua, 2 Samudra) & Astronomis (Khatulistiwa, Iklim Tropis, Pembagian Zona WIB-WITA-WIT)
  - Ekonomi Pasar (Hukum Permintaan & Penawaran saat Gagal Panen/Kelangkaan) & Koperasi (Moh. Hatta)
  - Perkembangbiakan Generatif & Vegetatif Tumbuhan/Hewan serta Metamorfosis Sempurna (Pupa) vs Tidak Sempurna
  - Ciri-ciri Pubertas Remaja (Primer vs Sekunder)
  - Rangkaian Listrik Seri vs Paralel (Instalasi Rumah), Magnet, & Energi Terbarukan
  - Tata Surya (8 Planet, Sabuk Asteroid), Rotasi (Siang-Malam 24 Jam) vs Revolusi (Musim 365,25 Hari), Gerhana
  - **Penyelidikan Ilmiah (Variabel Bebas, Variabel Terikat, Variabel Kontrol)**
  - ASEAN (Deklarasi Bangkok 8 Agustus 1967, 5 Tokoh Pendiri: Adam Malik, Peran Indonesia, Globalisasi)
  - **Skala Prioritas Kebutuhan Hidup (Primer, Sekunder, Tersier)**

### Fitur Interaktif pada Halaman Rangkuman:
1. **Kotak Peringatan Khusus (`⚠️ PERHATIKAN`)**: Menyoroti jebakan soal yang paling sering mengecoh murid dalam lomba.
2. **Kaidah & Rumus Emas Terpisah**: Ditampilkan dalam kotak bergaya monospaced yang mudah dihafal.
3. **Filter Instan & Live Search**: Pencarian kata kunci secepat kilat per mata pelajaran dan jenjang kelas.
4. **Uji Pemahaman Kilat**: Setiap bab dilengkapi contoh soal dan kunci pembahasan tersembunyi yang dapat dibuka-tutup.
5. **Tombol "🎯 Latih Soal Terkait"**: Sekali klik langsung membuka latihan soal yang relevan dengan bab materi tersebut.
6. **Cetak Lembar Rangkuman (`Print-Friendly`)**: Siap dicetak sebagai buku saku fisik pegangan siswa di kelas.

---

Selamat berlatih dan mencetak generasi juara! 🏆
