// Generator for 1,000 questions covering all PDF modules
const fs = require('fs');

const rawExisting = JSON.parse(fs.readFileSync('all_questions.json', 'utf8'));

// Enrich existing 234 questions with DIAGNOSA
const enrichedExisting = rawExisting.map((q, idx) => {
  let diag = 'Perhatikan konsep dasar materi, lakukan perhitungan bertahap, dan cermati informasi pada stimulus.';
  if (q.MAPEL === 'MATEMATIKA') {
    if (q.TOPIK.toLowerCase().includes('pecahan')) {
      diag = 'Kesalahan Umum: Menjumlahkan penyebut secara langsung tanpa mencari KPK penyebut, atau lupa menyederhanakan hasil akhir.';
    } else if (q.TOPIK.toLowerCase().includes('diskon') || q.TOPIK.toLowerCase().includes('persen')) {
      diag = 'Kesalahan Umum: Tertukar antara nilai potongan harga (diskon) dengan harga akhir yang harus dibayar setelah didiskon.';
    } else if (q.TOPIK.toLowerCase().includes('kpk') || q.TOPIK.toLowerCase().includes('fpb')) {
      diag = 'Kesalahan Umum: Tertukar antara kelipatan terkecil (KPK untuk waktu bersamaan) dengan faktor pembagi terbesar (FPB untuk pembagian paket merata).';
    } else if (q.TOPIK.toLowerCase().includes('rasio') || q.TOPIK.toLowerCase().includes('perbandingan')) {
      diag = 'Kesalahan Umum: Membagi total nilai hanya dengan salah satu angka perbandingan, bukan dengan jumlah seluruh bagian rasio.';
    } else if (q.TOPIK.toLowerCase().includes('skala')) {
      diag = 'Kesalahan Umum: Lupa konversi satuan panjang (ingat 1 km = 100.000 cm; 1 m = 100 cm).';
    } else if (q.TOPIK.toLowerCase().includes('luas') || q.TOPIK.toLowerCase().includes('keliling') || q.TOPIK.toLowerCase().includes('volume')) {
      diag = 'Kesalahan Umum: Tertukar antara rumus keliling (satuan panjang cm/m), luas (satuan persegi cm²/m²), dan volume (satuan kubik cm³/liter).';
    } else if (q.TOPIK.toLowerCase().includes('rata-rata') || q.TOPIK.toLowerCase().includes('data')) {
      diag = 'Kesalahan Umum: Mengira rata-rata adalah nilai yang sering muncul (modus), atau salah menjumlahkan total seluruh data.';
    }
  } else if (q.MAPEL === 'IPA') {
    if (q.TOPIK.toLowerCase().includes('cahaya')) {
      diag = 'Kesalahan Umum: Tertukar antara pembiasan (cahaya dibelokkan saat melewati medium beda kerapatan) dengan pemantulan.';
    } else if (q.TOPIK.toLowerCase().includes('wujud') || q.TOPIK.toLowerCase().includes('zat')) {
      diag = 'Kesalahan Umum: Mengira titik air di luar gelas es berasal dari dalam gelas yang menembus kaca, padahal uap air di udara sekitar yang mengembun.';
    } else if (q.TOPIK.toLowerCase().includes('rantai') || q.TOPIK.toLowerCase().includes('ekosistem')) {
      diag = 'Kesalahan Umum: Mengira panah rantai makanan terbalik (arah panah menunjukkan aliran energi: dari yang dimakan menuju pemakan).';
    } else if (q.TOPIK.toLowerCase().includes('tata surya') || q.TOPIK.toLowerCase().includes('bumi')) {
      diag = 'Kesalahan Umum: Tertukar antara akibat rotasi Bumi (siang-malam, 24 jam) dengan revolusi Bumi (pergantian musim, kalender masehi 365¼ hari).';
    } else if (q.TOPIK.toLowerCase().includes('organ') || q.TOPIK.toLowerCase().includes('tubuh')) {
      diag = 'Kesalahan Umum: Mengira organ paru-paru memompa darah (padahal organ pemompa darah adalah jantung; paru-paru tempat pertukaran gas di alveolus).';
    }
  } else if (q.MAPEL === 'IPS') {
    if (q.TOPIK.toLowerCase().includes('sejarah') || q.TOPIK.toLowerCase().includes('proklamasi')) {
      diag = 'Kesalahan Umum: Tertukar antara tanggal Sumpah Pemuda (28 Oktober 1928) dengan Proklamasi Kemerdekaan (17 Agustus 1945) atau Budi Utomo (20 Mei 1908).';
    } else if (q.TOPIK.toLowerCase().includes('peta')) {
      diag = 'Kesalahan Umum: Tertukar antara fungsi legenda (keterangan simbol) dengan inset (peta kecil penunjuk posisi wilayah dalam konteks luas).';
    } else if (q.TOPIK.toLowerCase().includes('ekonomi')) {
      diag = 'Kesalahan Umum: Menganggap penjual selalu produsen, padahal pedagang yang menyalurkan barang bertindak sebagai distributor.';
    } else if (q.TOPIK.toLowerCase().includes('geografis') || q.TOPIK.toLowerCase().includes('letak')) {
      diag = 'Kesalahan Umum: Tertukar antara letak geografis (di antara 2 benua dan 2 samudra) dengan letak astronomis (garis lintang dan bujur).';
    }
  }

  return {
    ...q,
    DIAGNOSA: diag
  };
});

console.log('Enriched base questions:', enrichedExisting.length);
