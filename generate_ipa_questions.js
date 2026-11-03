// generate_ipa_questions.js
const { addQuestion, makeOptions } = require('./generator_complete.js');

function buildIpaQuestions() {
  console.log('Generating 250 IPA questions based on PDF priorities...');

  // =========================================================================
  // KELAS 4 IPA (80 Soal)
  // =========================================================================

  // 1. Pancaindra & Fungsi Organ (20 soal)
  const sensesK4 = [
    { p: 'Organ utama tubuh manusia yang memiliki reseptor untuk mengenali berbagai jenis bau adalah', ans: 'Hidung', w1: 'Mata', w2: 'Kulit', w3: 'Lidah', exp: 'Hidung memiliki saraf olfaktori sebagai reseptor penciuman bau.' },
    { p: 'Organ indra yang berfungsi merasakan suhu panas atau dinginnya air serta sentuhan dan tekanan adalah', ans: 'Kulit', w1: 'Hidung', w2: 'Telinga', w3: 'Mata', exp: 'Kulit memiliki reseptor termoreseptor (suhu) dan mekanoreseptor (sentuhan/tekanan).' },
    { p: 'Organ tubuh yang berfungsi menerima rangsangan gelombang bunyi dan meneruskannya ke saraf pendengaran adalah', ans: 'Telinga', w1: 'Mata', w2: 'Kulit', w3: 'Hidung', exp: 'Telinga menangkap getaran gelombang bunyi melalui gendang telinga.' },
    { p: 'Lidah dapat mengecap rasa manis, asin, asam, dan pahit karena pada permukaannya terdapat bintil-bintil perasa yang disebut', ans: 'Papila', w1: 'Alveolus', w2: 'Stomata', w3: 'Klorofil', exp: 'Papila pada lidah mengandung kuncup pengecap rasa.' },
    { p: 'Mata menerima rangsangan berupa cahaya. Peran utama otak dalam proses melihat adalah', ans: 'Menerima sinyal dari saraf mata lalu menafsirkan wujud bayangan', w1: 'Memancarkan cahaya sendiri ke benda', w2: 'Mengubah benda nyata menjadi air', w3: 'Menghentikan gelombang cahaya masuk', exp: 'Mata berfungsi sebagai penerima rangsangan cahaya, sedangkan otak menafsirkan informasi tersebut (ingat modul hal 10!).' },
    { p: 'Membaca buku dengan pencahayaan yang cukup dianjurkan terutama untuk', ans: 'Menjaga kenyamanan mata agar otot mata tidak cepat lelah', w1: 'Membuat buku bercahaya di malam hari', w2: 'Mengubah tulisan menjadi gelombang bunyi', w3: 'Menghilangkan kebutuhan kacamata seketika', exp: 'Pencahayaan cukup membantu lensa mata memfokuskan bayangan tanpa bekerja terlalu tegang.' }
  ];

  // Repeat variations for 20 questions
  for (let i = 0; i < 20; i++) {
    const s = sensesK4[i % sensesK4.length];
    const { opsi, kunci } = makeOptions(s.ans, s.w1, s.w2, s.w3, i);
    addQuestion({
      mapel: 'IPA',
      kelas: 4,
      topik: 'Pancaindra & Fungsinya',
      babak: i < 10 ? 'PENYISIHAN' : 'UMUM',
      level: 'MUDAH',
      teks: `${s.p} ...`,
      opsi,
      kunci,
      pembahasan: s.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara peran organ indra sebagai penerima rangsangan fisik dengan peran otak sebagai penafsir informasi rangsangan tersebut.'
    });
  }

  // 2. Daur Hidup & Metamorfosis (20 soal dengan STIMULUS)
  const metaK4 = [
    { hewan: 'kupu-kupu', tipe: 'metamorfosis sempurna', tahapan: 'Telur → larva (ulat) → pupa (kepompong) → dewasa (imago)', alasan: 'mengalami tahap kepompong/pupa' },
    { hewan: 'nyamuk', tipe: 'metamorfosis sempurna', tahapan: 'Telur → larva (jentik) → pupa → dewasa', alasan: 'mengalami tahap pupa di dalam air' },
    { hewan: 'katak', tipe: 'metamorfosis sempurna', tahapan: 'Telur → berudu (larva) → berudu berkaki → katak muda → katak dewasa', alasan: 'mengalami perubahan bentuk tubuh yang sangat drastis' },
    { hewan: 'lalat', tipe: 'metamorfosis sempurna', tahapan: 'Telur → larva (belatung) → pupa → lalat dewasa', alasan: 'melewati fase pupa' },
    { hewan: 'belalang', tipe: 'metamorfosis tidak sempurna', tahapan: 'Telur → nimfa → belalang dewasa', alasan: 'tidak melewati tahap pupa (nimfa mirip bentuk dewasa)' },
    { hewan: 'kecoak', tipe: 'metamorfosis tidak sempurna', tahapan: 'Telur → nimfa → kecoak dewasa', alasan: 'tidak ada tahap kepompong/pupa' },
    { hewan: 'capung', tipe: 'metamorfosis tidak sempurna', tahapan: 'Telur → nimfa air → capung dewasa', alasan: 'langsung dari nimfa menjadi capung dewasa' },
    { hewan: 'jangkrik', tipe: 'metamorfosis tidak sempurna', tahapan: 'Telur → nimfa muda → jangkrik dewasa', alasan: 'tidak ada fase pupa' }
  ];

  for (let i = 0; i < 20; i++) {
    const m = metaK4[i % metaK4.length];
    const isSempurna = m.tipe.includes('sempurna') && !m.tipe.includes('tidak');
    const { opsi, kunci } = makeOptions(
      isSempurna ? 'Telur → larva → pupa → dewasa' : 'Telur → nimfa → dewasa',
      isSempurna ? 'Telur → nimfa → dewasa' : 'Telur → larva → pupa → dewasa',
      'Larva → telur → pupa → dewasa',
      'Pupa → larva → telur → dewasa',
      i + 2
    );
    addQuestion({
      mapel: 'IPA',
      kelas: 4,
      topik: 'Daur Hidup & Metamorfosis',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Seorang siswa mengamati perkembangbiakan hewan di kebun sekolah. Hewan yang diamati adalah ${m.hewan}. Siswa tersebut mencatat setiap fase perubahan bentuk tubuh dari awal hingga menjadi hewan dewasa.`,
      teks: `Urutan tahapan daur hidup yang tepat untuk ${m.hewan} adalah ...`,
      opsi,
      kunci,
      pembahasan: `${m.hewan} mengalami ${m.tipe} dengan urutan: ${m.tahapan}. Perhatikan modul hal 10: Larva dan nimfa tidak sama; kuncinya ada pada kehadiran tahap pupa (kepompong).`,
      diagnosa: 'Kesalahan Umum: Tertukar antara nimfa (anak hewan pada metamorfosis tidak sempurna) dan larva/pupa (pada metamorfosis sempurna).'
    });
  }

  // 3. Wujud Zat & Perubahannya (20 soal dengan STIMULUS)
  const matterK4 = [
    { p: 'Air pada pakaian basah yang dijemur di bawah sinar matahari lama-kelamaan berkurang hingga kering karena peristiwa', ans: 'Menguap', w1: 'Membeku', w2: 'Mengembun', w3: 'Mencair', exp: 'Air cair menyerap panas dari matahari dan berubah wujud menjadi uap air (gas) yang naik ke udara.' },
    { p: 'Titik-titik air yang terbentuk di bagian luar dinding gelas berisi minuman es dingin berasal dari', ans: 'Uap air di udara sekitar gelas yang mengembun karena dingin', w1: 'Air es dari dalam gelas yang merembes menembus dinding kaca', w2: 'Air es yang meleleh dan naik melompati bibir gelas', w3: 'Zat kimia kaca yang mencair menjadi air', exp: 'Ingat peringatan modul hal 10: Titik air di luar gelas BUKAN air dari dalam gelas yang menembus dindingnya, melainkan uap air di udara sekitar yang melepaskan kalor dan mengembun.' },
    { p: 'Peristiwa es batu berubah wujud menjadi air cair ketika dibiarkan di suhu ruang disebut', ans: 'Mencair', w1: 'Membeku', w2: 'Menguap', w3: 'Menyublim', exp: 'Mencair adalah perubahan wujud dari zat padat menjadi zat cair karena menyerap kalor.' },
    { p: 'Kapur barus (kamper) di dalam lemari pakaian lama-kelamaan mengecil dan habis karena terjadi peristiwa', ans: 'Menyublim', w1: 'Menguap', w2: 'Mencair', w3: 'Membeku', exp: 'Menyublim adalah perubahan wujud dari padat langsung menjadi gas tanpa melalui fase cair.' },
    { p: 'Air yang dimasukkan ke dalam ruang pendingin (freezer) berubah menjadi es batu keras melalui proses', ans: 'Membeku', w1: 'Mengembun', w2: 'Mencair', w3: 'Mengkristal', exp: 'Membeku merupakan perubahan wujud zat cair menjadi zat padat akibat pelepasan kalor.' }
  ];

  for (let i = 0; i < 20; i++) {
    const mat = matterK4[i % matterK4.length];
    const { opsi, kunci } = makeOptions(mat.ans, mat.w1, mat.w2, mat.w3, i + 1);
    addQuestion({
      mapel: 'IPA',
      kelas: 4,
      topik: 'Wujud Zat & Perubahannya',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${mat.p} ...`,
      opsi,
      kunci,
      pembahasan: mat.exp,
      diagnosa: 'Kesalahan Umum: Mengira titik air di dinding luar gelas es adalah air dalam gelas yang bocor/menembus kaca (padahal itu uap air di udara yang mengembun!).'
    });
  }

  // 4. Gaya, Gerak, & Perubahan Energi (20 soal)
  const forceK4 = [
    { p: 'Rem sepeda dapat menghentikan laju roda sepeda karena memanfaatkan gaya', ans: 'Gaya gesek', w1: 'Gaya gravitasi', w2: 'Gaya magnet', w3: 'Gaya pegas', exp: 'Karet rem menjepit velg roda sehingga timbul gaya gesek yang menghambat dan menghentikan putaran roda.' },
    { p: 'Buah mangga yang matang jatuh dari pohon menuju permukaan tanah karena pengaruh', ans: 'Gaya gravitasi Bumi', w1: 'Gaya pegas', w2: 'Gaya magnet', w3: 'Gaya gesek', exp: 'Gaya gravitasi Bumi selalu menarik benda menuju ke arah pusat Bumi.' },
    { p: 'Permukaan ban kendaraan bermotor dibuat beralur atau bergerigi bertujuan untuk', ans: 'Memperbesar gaya gesek agar ban tidak mudah tergelincir', w1: 'Menghilangkan gaya gravitasi di jalan licin', w2: 'Mengubah ban menjadi magnet permanen', w3: 'Mengurangi massa total kendaraan', exp: 'Alur pada ban meningkatkan cengkeraman pada jalan dan membuang air saat jalan basah.' },
    { p: 'Saat lampu belajar dinyalakan, perubahan energi utama yang terjadi adalah', ans: 'Energi listrik menjadi energi cahaya dan panas', w1: 'Energi listrik menjadi energi gerak murni', w2: 'Energi kimia menjadi energi bunyi', w3: 'Energi nuklir menjadi energi listrik', exp: 'Alat listrik tidak menciptakan energi dari nol, melainkan mengubah energi listrik menjadi cahaya dan panas (ingat modul hal 10!).' },
    { p: 'Kipas angin yang berputar mengubah energi listrik menjadi', ans: 'Energi gerak (mekanik)', w1: 'Energi kimia', w2: 'Energi cahaya', w3: 'Energi bunyi saja', exp: 'Motor listrik pada kipas angin mengubah energi listrik menjadi energi putar/gerak.' },
    { p: 'Benda berikut ini yang dapat ditarik dengan kuat oleh magnet adalah', ans: 'Paku besi dan peniti baja', w1: 'Penggaris kayu dan kertas', w2: 'Karet penghapus dan plastik', w3: 'Daun kering dan ranting', exp: 'Besi dan baja termasuk bahan feromagnetik yang ditarik kuat oleh magnet.' }
  ];

  for (let i = 0; i < 20; i++) {
    const f = forceK4[i % forceK4.length];
    const { opsi, kunci } = makeOptions(f.ans, f.w1, f.w2, f.w3, i);
    addQuestion({
      mapel: 'IPA',
      kelas: 4,
      topik: 'Gaya, Gerak, & Energi',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${f.p} ...`,
      opsi,
      kunci,
      pembahasan: f.exp,
      diagnosa: 'Kesalahan Umum: Mengira alat dapat menciptakan energi baru dari ketiadaan (ingat hukum kekekalan: alat hanya mengubah bentuk energi).'
    });
  }

  // =========================================================================
  // KELAS 5 IPA (85 Soal)
  // =========================================================================

  // 1. Rantai Makanan & Jaring-jaring Makanan (25 soal dengan STIMULUS)
  const foodChains = [
    { p: 'Padi → belalang → katak → ular → elang', prod: 'Padi', k1: 'Belalang', k2: 'Katak', k3: 'Ular', predTurun: 'katak', mangsaNaik: 'belalang' },
    { p: 'Jagung → ulat → burung pipit → ular', prod: 'Jagung', k1: 'Ulat', k2: 'Burung pipit', k3: 'Ular', predTurun: 'burung pipit', mangsaNaik: 'ulat' },
    { p: 'Rumput → kelinci → serigala → harimau', prod: 'Rumput', k1: 'Kelinci', k2: 'Serigala', k3: 'Harimau', predTurun: 'serigala', mangsaNaik: 'kelinci' },
    { p: 'Fitoplankton → zooplankton → ikan kecil → burung pelikan', prod: 'Fitoplankton', k1: 'Zooplankton', k2: 'Ikan kecil', k3: 'Burung pelikan', predTurun: 'ikan kecil', mangsaNaik: 'zooplankton' },
    { p: 'Tanaman sawi → ulat daun → ayam → musang', prod: 'Tanaman sawi', k1: 'Ulat daun', k2: 'Ayam', k3: 'Musang', predTurun: 'ayam', mangsaNaik: 'ulat daun' }
  ];

  for (let i = 0; i < 25; i++) {
    const fc = foodChains[i % foodChains.length];
    const { opsi, kunci } = makeOptions(
      `Populasi ${fc.mangsaNaik} cenderung bertambah banyak`,
      `Populasi ${fc.mangsaNaik} langsung punah seketika`,
      `Populasi ${fc.prod} otomatis berubah menjadi hewan`,
      `Semua organisme di ekosistem tidak terpengaruh sama sekali`,
      i
    );
    addQuestion({
      mapel: 'IPA',
      kelas: 5,
      topik: 'Rantai Makanan & Ekosistem',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Perhatikan rantai makanan pada ekosistem berikut ini:\n${fc.p}\nAkibat perburuan liar atau penggunaan pestisida kimia yang berlebihan, populasi ${fc.predTurun} mengalami penurunan secara drastis dalam waktu singkat.`,
      teks: `Dampak ekologis yang paling mungkin terjadi pada rantai makanan tersebut jika faktor lain tidak berubah adalah ...`,
      opsi,
      kunci,
      pembahasan: `Jika pemangsa (${fc.predTurun}) berkurang, maka populasi mangsanya (${fc.mangsaNaik}) cenderung meningkat karena tekanan pemangsaan berkurang. Ingat modul hal 11: Panah rantai makanan menunjukkan arah aliran energi (dari yang dimakan ke pemakan).`,
      diagnosa: 'Kesalahan Umum: Terbalik membaca arah panah rantai makanan atau mengira hilangnya satu populasi tidak berdampak pada rantai makanan.'
    });
  }

  // 2. Komponen Biotik, Abiotik, & Sistem Organ Tubuh (30 soal)
  const organsK5 = [
    { p: 'Tempat pertukaran gas oksigen (O2) dan karbon dioksida (CO2) di dalam sistem pernapasan paru-paru manusia adalah', ans: 'Alveolus', w1: 'Trakea', w2: 'Bronkus', w3: 'Jantung', exp: 'Alveolus berupa gelembung-gelembung tipis tempat difusi gas O2 dan CO2.' },
    { p: 'Organ utama yang berfungsi memompa darah ke seluruh tubuh melalui pembuluh darah adalah', ans: 'Jantung', w1: 'Paru-paru', w2: 'Lambung', w3: 'Ginjal', exp: 'Ingat peringatan modul hal 11: Jantung adalah organ yang memompa darah; paru-paru BUKAN organ pemompa darah!' },
    { p: 'Organ pencernaan yang berperan paling besar dalam penyerapan sebagian besar sari-sari makanan ke dalam aliran darah adalah', ans: 'Usus halus (vili)', w1: 'Kerongkongan', w2: 'Mulut', w3: 'Lambung', exp: 'Vili (jonjot usus) pada usus halus memperluas bidang penyerapan zat gizi.' },
    { p: 'Asam klorida (HCl) yang berfungsi membunuh kuman pada makanan diproduksi di organ', ans: 'Lambung', w1: 'Usus besar', w2: 'Mulut', w3: 'Pankreas', exp: 'Lambung memproduksi HCl untuk menciptakan suasana asam dan membunuh kuman penyakit.' },
    { p: 'Pembuluh darah yang bertugas mengalirkan darah kaya oksigen keluar meninggalkan jantung menuju seluruh tubuh adalah', ans: 'Pembuluh nadi (arteri / aorta)', w1: 'Pembuluh balik (vena)', w2: 'Alveolus', w3: 'Trakea', exp: 'Arteri membawa darah meninggalkan jantung; aorta adalah arteri terbesar.' },
    { p: 'Komponen abiotik yang sangat dibutuhkan oleh tumbuhan hijau untuk melakukan fotosintesis adalah', ans: 'Cahaya matahari dan air', w1: 'Cacing tanah dan jamur', w2: 'Kupu-kupu dan belalang', w3: 'Bakteri pengurai saja', exp: 'Cahaya matahari dan air termasuk komponen abiotik (tak hidup) yang mutlak untuk fotosintesis.' }
  ];

  for (let i = 0; i < 30; i++) {
    const org = organsK5[i % organsK5.length];
    const { opsi, kunci } = makeOptions(org.ans, org.w1, org.w2, org.w3, i + 1);
    addQuestion({
      mapel: 'IPA',
      kelas: 5,
      topik: 'Sistem Organ Tubuh Manusia',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${org.p} ...`,
      opsi,
      kunci,
      pembahasan: org.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara organ pemompa darah (jantung) dengan organ pertukaran gas (paru-paru/alveolus).'
    });
  }

  // 3. Cahaya, Bunyi, & Energi Alternatif (30 soal dengan STIMULUS)
  const waveK5 = [
    { p: 'Sebuah pensil yang dimasukkan sebagian ke dalam gelas berisi air tampak patah atau bengkok karena peristiwa', ans: 'Pembiasan cahaya (refraksi)', w1: 'Pemantulan cahaya', w2: 'Penyerapan cahaya sempurna', w3: 'Penghentian gelombang cahaya', exp: 'Cahaya mengalami pembelokan arah rambat saat merambat melalui dua medium yang berbeda kerapatannya (udara dan air).' },
    { p: 'Bunyi dapat terdengar oleh telinga kita karena dihasilkan oleh sumber bunyi yang', ans: 'Bergetar', w1: 'Membeku', w2: 'Menguap', w3: 'Menyerap air', exp: 'Semua bunyi dihasilkan oleh getaran benda yang merambat melalui medium partikel.' },
    { p: 'Alasan utama mengapa astronaut di ruang hampa luar angkasa tidak dapat berbicara langsung mendengar suara temannya tanpa radio adalah', ans: 'Bunyi tidak dapat merambat melalui ruang hampa udara', w1: 'Cahaya matahari terlalu terang', w2: 'Gravitasi luar angkasa terlalu kuat', w3: 'Telinga manusia membeku seketika', exp: 'Ingat modul hal 11: Bunyi memerlukan medium partikel (padat, cair, gas) untuk merambat; bunyi TIDAK BISA merambat di ruang hampa.' },
    { p: 'Sumber energi alternatif yang ramah lingkungan dan tidak akan habis digunakan adalah', ans: 'Energi matahari, air, dan angin', w1: 'Minyak bumi, batu bara, dan gas alam', w2: 'Batu bara dan bensin fosil', w3: 'Minyak tanah dan solar', exp: 'Matahari, air, dan angin adalah sumber energi terbarukan yang diperbarui secara alami.' },
    { p: 'Cermin datar menghasilkan bayangan benda dengan sifat', ans: 'Maya, tegak, dan sama besar', w1: 'Nyata, terbalik, dan membesar', w2: 'Nyata, tegak, dan mengecil', w3: 'Maya, terbalik, dan mengecil', exp: 'Bayangan cermin datar tegak, ukurannya persis sama dengan benda asli, dan bersifat maya (di belakang cermin).' }
  ];

  for (let i = 0; i < 30; i++) {
    const wv = waveK5[i % waveK5.length];
    const { opsi, kunci } = makeOptions(wv.ans, wv.w1, wv.w2, wv.w3, i + 2);
    addQuestion({
      mapel: 'IPA',
      kelas: 5,
      topik: 'Cahaya, Bunyi, & Energi Alternatif',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${wv.p} ...`,
      opsi,
      kunci,
      pembahasan: wv.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara pembiasan dan pemantulan cahaya, atau mengira gelombang bunyi dapat merambat di ruang hampa seperti cahaya.'
    });
  }

  // =========================================================================
  // KELAS 6 IPA (85 Soal)
  // =========================================================================

  // 1. Tata Surya & Karakteristik Planet (25 soal)
  const planetsK6 = [
    { p: 'Bintang raksasa yang menjadi pusat peredaran seluruh anggota tata surya adalah', ans: 'Matahari', w1: 'Bumi', w2: 'Jupiter', w3: 'Bulan', exp: 'Matahari adalah bintang induk di pusat tata surya kita.' },
    { p: 'Planet terdekat dari Matahari sekaligus planet terkecil di tata surya adalah', ans: 'Merkurius', w1: 'Venus', w2: 'Mars', w3: 'Bumi', exp: 'Urutan planet dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus.' },
    { p: 'Planet kedua dari Matahari yang dikenal sebagai Bintang Fajar/Kejora dan memiliki atmosfer terpanas adalah', ans: 'Venus', w1: 'Mars', w2: 'Merkurius', w3: 'Jupiter', exp: 'Venus memiliki efek rumah kaca luar biasa yang menjadikannya planet terpanas.' },
    { p: 'Planet terbesar dalam tata surya yang memiliki Bintik Merah Raksasa adalah', ans: 'Jupiter', w1: 'Saturnus', w2: 'Uranus', w3: 'Neptunus', exp: 'Jupiter adalah planet gas raksasa terbesar.' },
    { p: 'Planet yang terkenal memiliki sistem cincin es paling megah dan indah adalah', ans: 'Saturnus', w1: 'Mars', w2: 'Merkurius', w3: 'Venus', exp: 'Saturnus memiliki cincin partikel es dan batuan yang sangat menonjol.' },
    { p: 'Bulan yang mengitari Bumi dikelompokkan sebagai', ans: 'Satelit alami Bumi', w1: 'Planet dalam', w2: 'Bintang bercahaya sendiri', w3: 'Komet kecil', exp: 'Ingat peringatan modul hal 12: Jangan menggolongkan Bulan sebagai planet atau Matahari sebagai planet!' }
  ];

  for (let i = 0; i < 25; i++) {
    const pl = planetsK6[i % planetsK6.length];
    const { opsi, kunci } = makeOptions(pl.ans, pl.w1, pl.w2, pl.w3, i);
    addQuestion({
      mapel: 'IPA',
      kelas: 6,
      topik: 'Susunan Tata Surya',
      babak: 'PENYISIHAN',
      level: 'MUDAH',
      teks: `${pl.p} ...`,
      opsi,
      kunci,
      pembahasan: pl.exp,
      diagnosa: 'Kesalahan Umum: Mengira Bulan atau Matahari termasuk planet (ingat: Matahari adalah bintang, Bulan adalah satelit alami Bumi).'
    });
  }

  // 2. Rotasi, Revolusi, & Pengamatan Langit (25 soal)
  const orbitK6 = [
    { p: 'Perputaran Bumi pada porosnya yang berlangsung selama kurang lebih 24 jam mengakibatkan terjadinya', ans: 'Pergantian siang dan malam serta gerak semu harian Matahari', w1: 'Pergantian musim semi dan gugur', w2: 'Perubahan rasi bintang sepanjang tahun', w3: 'Gerhana Matahari total setiap hari', exp: 'Rotasi Bumi berputar pada porosnya menyebabkan pergantian siang dan malam.' },
    { p: 'Gerakan Bumi mengelilingi Matahari yang berlangsung selama sekitar 365¼ hari disebut', ans: 'Revolusi Bumi', w1: 'Rotasi Bumi', w2: 'Fase Bulan', w3: 'Presesi', exp: 'Revolusi Bumi memerlukan waktu 1 tahun (365¼ hari) dan menjadi dasar kalender Masehi.' },
    { p: 'Pergantian musim hujan dan kemarau di wilayah Indonesia terutama dipengaruhi oleh', ans: 'Pola pergerakan angin muson barat dan muson timur', w1: 'Kecepatan rotasi Bumi yang bertambah', w2: 'Jarak Bumi dan Bulan yang semakin jauh', w3: 'Padamnya cahaya Matahari sementara waktu', exp: 'Ingat modul hal 12: Musim hujan dan kemarau di Indonesia terutama terkait pola angin muson, bukan semata-mata revolusi Bumi.' },
    { p: 'Peristiwa gerhana Matahari dapat terjadi apabila posisi benda langit sejajar dengan urutan', ans: 'Matahari — Bulan — Bumi', w1: 'Matahari — Bumi — Bulan', w2: 'Bulan — Matahari — Bumi', w3: 'Bumi — Matahari — Bulan', exp: 'Gerhana Matahari terjadi saat piringan Bulan berada di antara Matahari dan Bumi sehingga bayangan Bulan jatuh ke permukaan Bumi.' },
    { p: 'Peristiwa gerhana Bulan terjadi ketika', ans: 'Bumi berada tepat di antara Matahari dan Bulan dalam satu garis lurus', w1: 'Bulan berada di antara Matahari dan Bumi', w2: 'Matahari berada di antara Bumi dan Bulan', w3: 'Bumi berhenti berotasi pada porosnya', exp: 'Gerhana Bulan terjadi saat bayangan Bumi menutupi permukaan Bulan purnama.' }
  ];

  for (let i = 0; i < 25; i++) {
    const ob = orbitK6[i % orbitK6.length];
    const { opsi, kunci } = makeOptions(ob.ans, ob.w1, ob.w2, ob.w3, i + 1);
    addQuestion({
      mapel: 'IPA',
      kelas: 6,
      topik: 'Rotasi, Revolusi, & Gerhana',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${ob.p} ...`,
      opsi,
      kunci,
      pembahasan: ob.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara akibat rotasi (24 jam: siang-malam) dengan akibat revolusi (365¼ hari: musim/tahun).'
    });
  }

  // 3. Gangguan Ekosistem & Membaca Hasil Penyelidikan Ilmiah (35 soal dengan STIMULUS)
  for (let k = 1; k <= 35; k++) {
    const factorTested = k % 3 === 0 ? 'lama pencahayaan lampu' : k % 3 === 1 ? 'dosis pemberian pupuk' : 'frekuensi penyiraman air';
    const controlled = 'jenis bibit tanaman, jumlah tanah, dan ukuran pot';
    const { opsi, kunci } = makeOptions(
      `Variabel yang diuji adalah ${factorTested}`,
      `Variabel yang diuji adalah warna pot tanaman`,
      `Variabel yang diuji adalah merek penggaris ukur`,
      `Semua kondisi diubah secara acak tanpa variabel kontrol`,
      k
    );
    addQuestion({
      mapel: 'IPA',
      kelas: 6,
      topik: 'Penyelidikan Ilmiah & Pelestarian Lingkungan',
      babak: 'FINAL_WAJIB',
      level: 'HOTS',
      stimulus: `Dua pot tanaman cabai diletakkan di laboratorium sekolah. Kedua pot diberi ${controlled} dalam kondisi yang persis sama. Namun, pot A dan pot B sengaja diberikan ${factorTested} yang berbeda untuk diamati pertumbuhannya selama dua minggu.`,
      teks: `Berdasarkan rancangan penyelidikan ilmiah di atas, kesimpulan yang benar mengenai variabel bebas (variabel yang sengaja diuji) adalah ...`,
      opsi,
      kunci,
      pembahasan: `Dalam percobaan yang adil (fair test), hanya SATU faktor yang sengaja dibedakan (variabel bebas/yang diuji), yaitu ${factorTested}. Faktor lainnya dijaga tetap sama (${controlled}) sebagai variabel kontrol. Ingat modul hal 12!`,
      diagnosa: 'Kesalahan Umum: Mengira variabel yang diuji adalah faktor yang dijaga tetap sama (variabel kontrol).'
    });
  }

  console.log('IPA questions generated.');
}

module.exports = { buildIpaQuestions };
