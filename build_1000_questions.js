// Script to generate exactly 1000 prioritized questions
const fs = require('fs');

console.log('Loading base questions...');
const rawBase = JSON.parse(fs.readFileSync('all_questions.json', 'utf8'));

// Format base questions with DIAGNOSA
const enrichedBase = rawBase.map(q => {
  let diag = 'Perhatikan konsep dasar materi, lakukan perhitungan bertahap, dan cermati informasi pada stimulus.';
  const t = (q.TOPIK || '').toLowerCase();
  if (q.MAPEL === 'MATEMATIKA') {
    if (t.includes('pecahan')) diag = 'Kesalahan Umum: Menjumlahkan penyebut secara langsung tanpa menyamakan penyebut dengan KPK, atau lupa menyederhanakan.';
    else if (t.includes('diskon') || t.includes('persen')) diag = 'Kesalahan Umum: Tertukar antara nilai potongan harga (diskon) dengan harga akhir yang harus dibayar setelah diskon.';
    else if (t.includes('kpk') || t.includes('fpb')) diag = 'Kesalahan Umum: Tertukar antara kelipatan terkecil (KPK untuk kegiatan berulang) dengan faktor pembagi terbesar (FPB untuk pembagian paket merata).';
    else if (t.includes('rasio') || t.includes('perbandingan')) diag = 'Kesalahan Umum: Membagi total nilai hanya dengan salah satu angka perbandingan, bukan dengan jumlah total bagian rasio.';
    else if (t.includes('skala')) diag = 'Kesalahan Umum: Lupa konversi satuan panjang (ingat 1 km = 100.000 cm; 1 m = 100 cm).';
    else if (t.includes('luas') || t.includes('keliling') || t.includes('volume')) diag = 'Kesalahan Umum: Tertukar antara rumus keliling (cm/m), luas (cm²/m²), dan volume (cm³/liter).';
    else if (t.includes('rata-rata') || t.includes('data')) diag = 'Kesalahan Umum: Mengira rata-rata adalah nilai yang sering muncul (modus), atau salah menghitung total data.';
  } else if (q.MAPEL === 'IPA') {
    if (t.includes('cahaya')) diag = 'Kesalahan Umum: Tertukar antara pembiasan (cahaya dibelokkan saat melewati dua medium berbeda kerapatan) dengan pemantulan.';
    else if (t.includes('wujud') || t.includes('zat')) diag = 'Kesalahan Umum: Mengira titik air di luar gelas es berasal dari dalam gelas yang menembus kaca (padahal uap air di udara sekitar yang mengembun).';
    else if (t.includes('rantai') || t.includes('ekosistem')) diag = 'Kesalahan Umum: Mengira arah panah rantai makanan terbalik (arah panah menunjukkan perpindahan energi dari yang dimakan menuju pemakan).';
    else if (t.includes('tata surya') || t.includes('bumi')) diag = 'Kesalahan Umum: Tertukar antara akibat rotasi Bumi (siang-malam, 24 jam) dengan revolusi Bumi (pergantian musim, kalender masehi 365¼ hari).';
    else if (t.includes('organ') || t.includes('tubuh')) diag = 'Kesalahan Umum: Mengira paru-paru memompa darah (jantung yang memompa darah; paru-paru tempat pertukaran gas di alveolus).';
  } else if (q.MAPEL === 'IPS') {
    if (t.includes('sejarah') || t.includes('proklamasi')) diag = 'Kesalahan Umum: Tertukar antara urutan kronologi: 1908 (Budi Utomo) -> 1928 (Sumpah Pemuda 28 Okt) -> 1945 (Proklamasi 17 Ags).';
    else if (t.includes('peta')) diag = 'Kesalahan Umum: Tertukar antara legenda (keterangan arti simbol) dengan inset (peta kecil penunjuk posisi wilayah dalam konteks luas).';
    else if (t.includes('ekonomi')) diag = 'Kesalahan Umum: Menganggap penjual selalu produsen, padahal pedagang yang menyalurkan barang bertindak sebagai distributor.';
    else if (t.includes('geografi') || t.includes('letak')) diag = 'Kesalahan Umum: Tertukar antara letak geografis (di antara 2 benua & 2 samudra) dengan letak astronomis (garis lintang & bujur).';
  }

  return {
    ID_SOAL: q.ID_SOAL,
    MAPEL: q.MAPEL,
    KELAS: Number(q.KELAS),
    TOPIK: q.TOPIK,
    BABAK: q.BABAK || 'UMUM',
    LEVEL: q.LEVEL || 'SEDANG',
    TIPE: q.TIPE || 'PG',
    PERTANYAAN: q.PERTANYAAN,
    OPSI_A: q.OPSI_A,
    OPSI_B: q.OPSI_B,
    OPSI_C: q.OPSI_C,
    OPSI_D: q.OPSI_D,
    KUNCI: q.KUNCI,
    PEMBAHASAN: q.PEMBAHASAN,
    DIAGNOSA: diag,
    STATUS: q.STATUS || 'AKTIF'
  };
});

console.log('Base enriched questions count:', enrichedBase.length);

const generated = [];
let serial = enrichedBase.length;

function add(mapel, kelas, topik, babak, level, text, stimulus, a, b, c, d, ans, exp, diag) {
  serial++;
  const num = String(serial).padStart(4, '0');
  const code = mapel === 'MATEMATIKA' ? 'MTK' : mapel;
  const id = `PRIO-${code}${kelas}-${num}`;
  
  let fullText = text;
  if (stimulus) {
    fullText = `[STIMULUS]\n${stimulus}\n\n[PERTANYAAN]\n${text}`;
  }

  generated.push({
    ID_SOAL: id,
    MAPEL: mapel,
    KELAS: Number(kelas),
    TOPIK: topik,
    BABAK: babak,
    LEVEL: level,
    TIPE: 'PG',
    PERTANYAAN: fullText,
    OPSI_A: String(a),
    OPSI_B: String(b),
    OPSI_C: String(c),
    OPSI_D: String(d),
    KUNCI: ans,
    PEMBAHASAN: exp,
    DIAGNOSA: diag || 'Cermati informasi pada stimulus dan lakukan analisis secara bertahap.',
    STATUS: 'AKTIF'
  });
}

// Target: 1000 - 234 = 766 new questions!
// Let's create modular generator functions for MTK (270), IPA (250), IPS (246).

module.exports = {
  enrichedBase,
  generated,
  add
};
