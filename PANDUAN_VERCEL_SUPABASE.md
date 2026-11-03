# 🚀 PANDUAN LENGKAP MIGRASI: VERCEL & SUPABASE
## Arena Cerdas Cermat MIPAS 2026 (SD Kelas 4, 5, 6)

Panduan ini memandu Anda memindahkan aplikasi dari Google Spreadsheet + Google Apps Script ke **Vercel** (hosting web super cepat dan gratis) dan **Supabase** (database cloud PostgreSQL modern dan andal), serta memanfaatkan **Halaman Rangkuman Materi MTK & IPAS**.

---

## 📑 DAFTAR ISI
1. [Mengapa Vercel & Supabase?](#1-mengapa-vercel--supabase)
2. [Langkah 1: Setup Database Supabase](#langkah-1-setup-database-supabase)
3. [Langkah 2: Menjalankan Skrip Schema & Seed (234 Soal)](#langkah-2-menjalankan-skrip-schema--seed-234-soal)
4. [Langkah 3: Mengambil URL & API Key Supabase](#langkah-3-mengambil-url--api-key-supabase)
5. [Langkah 4: Deploy Aplikasi ke Vercel](#langkah-4-deploy-aplikasi-ke-vercel)
6. [Langkah 5: Menghubungkan Supabase di Web App](#langkah-5-menghubungkan-supabase-di-web-app)
7. [Fitur Baru: Halaman Rangkuman Materi MTK & IPAS](#fitur-baru-halaman-rangkuman-materi-mtk--ipas)

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

## 3. Langkah 2: Menjalankan Skrip Schema & Seed (234 Soal)

Proyek ini telah menyediakan dua skrip SQL siap pakai di dalam folder `supabase/`:

### A. Membuat Tabel Database (`supabase/schema.sql`)
1. Di Dashboard Supabase, buka menu **"SQL Editor"** di bilah sisi kiri (ikon terminal `>_`).
2. Klik **"New query"**.
3. Buka file `supabase/schema.sql` pada proyek ini, salin seluruh kodenya, lalu tempel (*paste*) ke SQL Editor Supabase.
4. Klik tombol **"Run"** (atau tekan `Ctrl + Enter`).
5. Akan muncul pesan `Success. No rows returned`. Tabel `cc_questions`, `cc_sessions`, `cc_teams`, `cc_final_matches`, dan `cc_settings` berhasil dibuat beserta aturan keamanannya (RLS).

### B. Memasukkan 234 Bank Soal Olimpiade (`supabase/seed.sql`)
1. Di SQL Editor Supabase, klik **"New query"** lagi.
2. Buka file `supabase/seed.sql` pada proyek ini, salin seluruh isinya (berisi 234 soal lengkap beserta opsi, kunci, dan pembahasan edukatif).
3. Tempel ke SQL Editor Supabase dan klik **"Run"**.
4. Tunggu beberapa detik hingga proses selesai. Anda dapat memeriksa tabel `cc_questions` pada menu **Table Editor** untuk melihat semua soal sudah tersimpan rapi di cloud!

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
6. Jika database Supabase Anda masih kosong, cukup klik tombol **"🚀 Sinkronkan 234 Soal Awal ke Supabase"** untuk mengunggah seluruh bank soal secara otomatis.

---

## 7. Fitur Baru: Halaman Rangkuman Materi MTK & IPAS

Sesuai kebutuhan belajar murid menghadapi kompetisi sains dan ujian sekolah, kini tersedia menu **"📖 Rangkuman Materi"**:

### Apa saja isinya?
- **31 Bab Materi Lengkap** mencakup:
  - **Matematika (MTK) Kelas 4, 5, 6**:
    - Bilangan Cacah Besar, Nilai Tempat & Dekomposisi
    - Aturan Operasi Campuran (Kabataku)
    - Kelipatan, Faktor, & Bilangan Prima
    - Pecahan Senilai, Pecahan Campuran, Desimal & Persen
    - KPK & FPB (Pohon Faktor & Soal Cerita)
    - Kecepatan & Debit Air
    - Perbandingan & Skala Peta
    - Geometri Datar & Ruang (Persegi, Persegi Panjang, Segitiga, Kubus, Balok, Prisma, Limas, Tabung, Kerucut, Bola)
    - Lingkaran (Unsur, Keliling, Luas)
    - Statistika (Mean, Modus, Median, Diagram Lingkaran)
  - **IPAS (IPA & IPS) Kelas 4, 5, 6**:
    - Bagian Tubuh Tumbuhan & Fotosintesis
    - Wujud Zat & 6 Perubahan Wujud Zat
    - Gaya & Pengaruhnya (Otot, Gesek, Gravitasi, Magnet, Pegas)
    - Bentuk Energi & Transformasi Energi
    - Organ Tubuh Manusia (Pernapasan, Pencernaan, Peredaran Darah Besar/Kecil)
    - Ekosistem, Jaring Makanan, & 3 Simbiosis (Mutualisme, Komensalisme, Parasitisme)
    - Sifat Gelombang Cahaya & Gelombang Bunyi
    - Daur Air (Siklus Hidrologi) & Pelestariannya
    - Perkembangbiakan Tumbuhan (Generatif & Vegetatif) serta Hewan (Ovipar, Vivipar, Ovovivipar)
    - Pubertas & Kesehatan Reproduksi
    - Rangkaian Listrik Seri vs Paralel & Energi Terbarukan
    - Tata Surya (8 Planet), Rotasi & Revolusi Bumi/Bulan, Gerhana
    - Kenampakan Alam & Peta Indonesia
    - Keragaman Budaya & Rumah Adat Nusantara
    - Kegiatan Ekonomi (Produksi, Distribusi, Konsumsi) & Koperasi
    - Geografi Indonesia & Zona Waktu (WIB, WITA, WIT)
    - Sejarah Perjuangan Bangsa (Budi Utomo, Sumpah Pemuda, Proklamasi)
    - ASEAN (5 Tokoh Pendiri, Negara Anggota, Bentuk Kerja Sama) & Globalisasi

### Fitur Interaktif pada Halaman Rangkuman:
1. **Filter Instan**: Tombol filter Mapel (Semua / MTK / IPAS) dan Kelas (Semua / IV / V / VI).
2. **Pencarian Cepat (Live Search)**: Ketik istilah apa pun (misal: `fotosintesis`, `kpk`, `lingkaran`, `asean`) dan materi yang cocok akan langsung ditampilkan.
3. **Kaidah & Rumus Emas**: Kotak rumus terpisah dengan warna kontras untuk mempermudah hafalan cepat.
4. **Uji Pemahaman Kilat**: Setiap bab dilengkapi contoh soal dan tombol pembahasannya.
5. **Tombol "🎯 Latih Soal Terkait"**: Sekali klik, murid langsung diarahkan ke sesi latihan mandiri dengan filter mapel dan kelas bab tersebut!
6. **Cetak Lembar Rangkuman**: Tombol cetak ramah printer (`print-friendly`) untuk membuat rangkuman fisik pegangan di kelas.

---

Selamat berlatih dan mencetak generasi juara! 🏆
