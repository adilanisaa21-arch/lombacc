# 🏆 Arena Cerdas Cermat MIPAS 2026 (SD Kelas 4, 5, 6)

Aplikasi Web Interaktif Latihan Cerdas Cermat, Olimpiade Sains, dan Asesmen Kompetensi Minimum (AKM/ANBK) untuk tingkat Sekolah Dasar (SD/MI) Kelas IV, V, dan VI.

Kini telah dimigrasi dari Google Spreadsheet & Apps Script ke **Vercel** dan **Supabase Cloud Database**, serta dilengkapi dengan **Halaman Rangkuman Materi MTK & IPAS**.

---

## 🌟 Fitur Unggulan

1. **📖 Halaman Rangkuman Materi Lengkap (38 Bab Terpadu)**
   - Rangkuman komprehensif Matematika (MTK) dan IPAS (Ilmu Pengetahuan Alam dan Sosial) untuk Kelas 4, 5, dan 6.
   - Dilengkapi **Kaidah & Rumus Emas**, peringatan jebakan lomba (**⚠️ PERHATIKAN**), dan contoh soal pembahasan.
   - Filter cepat berdasarkan mata pelajaran, tingkatan kelas, serta pencarian kata kunci interaktif (*live search*).
   - Tombol *One-Click* langsung melatih soal terkait dari bab yang dipelajari.

2. **📋 Bank Data 1.000 Soal Prioritas dengan Stimulus Kasus**
   - 1.000 soal terkurasi standar olimpiade dan AKM (350 Matematika, 350 IPA, 300 IPS).
   - **275+ Soal Berstimulus**: Dilengkapi kotak stimulus narasi kontekstual, studi kasus, data eksperimen, dan tabel.
   - **🔍 Diagnosa & Penjelasan Soal yang Salah**: Analisis otomatis kategori kesalahan (Ketelitian Kabataku, Pemahaman Rumus/Konsep, Membaca Stimulus, Kronologi/Fakta Sains) beserta tips pencegahannya.
   - Tombol filter khusus *"Lihat Soal yang Salah Saja"* pada halaman evaluasi hasil.

3. **🧠 Latihan Mandiri & Latihan Cepat**
   - Kustomisasi latihan: filter mata pelajaran (Matematika, IPA, IPS, Campuran), kelas (IV, V, VI), dan tingkat kesulitan (Mudah, Sedang, Sulit, HOTS).
   - Mode Cepat (*Fast-Quiz*) dengan timer 10–30 detik per soal untuk melatih kecepatan respons berpikir.

4. **🏆 Simulasi Cerdas Cermat Beregu**
   - Babak Penyisihan dan Semifinal (30 soal, 45 menit, 10 MTK + 10 IPA + 10 IPS).
   - Sistem penilaian standar olimpiade: Benar (+4), Salah/Kosong (0).
   - Papan klasemen otomatis (*leaderboard*).

5. **⚡ Babak Final & Buzzer Interaktif**
   - Papan skor langsung untuk 3 tim (Merah, Biru, Hijau).
   - Sesi I: Soal Wajib (6 soal per tim, batas waktu 30 detik).
   - Sesi II: Soal Rebutan dengan bel/buzzer interaktif dan efek suara *Web Audio Synthesis*.
   - Fitur penilaian juri: Benar (+10), Salah (−5), Lempar (Hening 3 Detik), atau Hangus (0).
   - Babak tambahan otomatis bila terjadi skor seri, serta podium penyerahan juara.

6. **📚 Bank Soal Guru & Cloud Sync**
   - Kelola 1.000 bank soal terkurasi.
   - Tambah, edit, dan nonaktifkan soal secara langsung.
   - Impor dan ekspor CSV dengan template bawaan.

7. **📊 Analitik & Evaluasi Belajar**
   - Rekam jejak ketepatan pengerjaan per mata pelajaran.
   - Deteksi otomatis topik-topik yang belum dikuasai murid (*weak topics*).

8. **☁️ Integrasi Supabase & Vercel**
   - Mendukung penyimpanan cloud Supabase PostgreSQL real-time.
   - Resilient *Local-First*: Tetap berjalan lancar secara offline menggunakan *browser cache* jika belum tersambung ke cloud.
   - Sinkronisasi instan satu klik untuk mengunggah 1.000 soal bawaan ke Supabase.

---

## 📁 Struktur Berkas

```
BELAJAR CC/
├── index.html                   # Aplikasi web utama (Vercel Entry Point)
├── data_questions.js            # Bank data 234 soal terkurasi (Local-First fallback)
├── data_rangkuman.js            # Modul data rangkuman materi MTK & IPAS (31 topik)
├── vercel.json                  # Konfigurasi deployment resmi Vercel
├── package.json                 # Metadata dan scripts proyek
├── .env.example                 # Panduan variabel lingkungan Supabase
├── build_seed.js                # Skrip pembuat file SQL seed
├── PANDUAN_VERCEL_SUPABASE.md   # Panduan langkah demi langkah setup Supabase & Vercel
├── supabase/
│   ├── schema.sql               # Skrip DDL tabel, indeks, & kebijakan RLS Supabase
│   └── seed.sql                 # Skrip SQL data awal 234 soal olimpiade
└── README.md
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. Cukup buka file `index.html` langsung di peramban web modern (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. Atau jalankan server lokal:
   ```bash
   npx serve .
   ```
   Lalu buka `http://localhost:3000` di peramban Anda.

---

## ☁️ Cara Deploy ke Vercel & Setup Supabase

Ikuti panduan lengkap berbahasa Indonesia di berkas **[PANDUAN_VERCEL_SUPABASE.md](PANDUAN_VERCEL_SUPABASE.md)**:
1. Buat proyek gratis di [Supabase](https://supabase.com).
2. Jalankan `supabase/schema.sql` dan `supabase/seed.sql` di SQL Editor Supabase.
3. Sambungkan repositori Anda ke [Vercel](https://vercel.com) untuk deploy otomatis.
4. Masukkan URL dan Anon Key Supabase di halaman **Pengaturan** aplikasi.

---

**Pembina**: Budianto, S.Pd., Gr.  
**Sekolah**: UPTD SPF SD Inpres Tangkala II  
*Arena Cerdas Cermat MIPAS 2026*
