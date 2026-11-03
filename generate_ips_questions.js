// generate_ips_questions.js
const { addQuestion, makeOptions } = require('./generator_complete.js');

function buildIpsQuestions() {
  console.log('Generating 246 IPS questions based on PDF priorities...');

  // =========================================================================
  // KELAS 4 IPS (80 Soal)
  // =========================================================================

  // 1. Mengenal Peta, Arah Mata Angin, & Inset (20 soal)
  const mapK4 = [
    { p: 'Komponen pada peta yang berfungsi untuk menjelaskan arti dari simbol-simbol dan warna yang digunakan adalah', ans: 'Legenda', w1: 'Judul peta', w2: 'Inset peta', w3: 'Garis tepi', exp: 'Legenda memuat keterangan semua simbol dan kode warna dalam peta.' },
    { p: 'Peta kecil yang disisipkan untuk memperjelas posisi suatu wilayah dalam konteks geografis yang lebih luas disebut', ans: 'Inset peta', w1: 'Legenda', w2: 'Skala peta', w3: 'Mata angin', exp: 'Ingat peringatan modul hal 16: Inset adalah peta kecil yang menunjukkan posisi suatu wilayah dalam konteks lebih luas; BUKAN legenda!' },
    { p: 'Jika arah utara pada peta menunjuk ke arah atas, maka arah timur terletak di sebelah', ans: 'Kanan', w1: 'Kiri', w2: 'Bawah', w3: 'Tengah', exp: 'Orientasi mata angin standar: Atas = Utara, Kanan = Timur, Bawah = Selatan, Kiri = Barat.' },
    { p: 'Simbol gambar jangkar kapal pada peta pelayaran umumnya mewakili lokasi', ans: 'Pelabuhan laut', w1: 'Bandar udara', w2: 'Stasiun kereta api', w3: 'Terminal bus', exp: 'Simbol jangkar mewakili pelabuhan laut/dermaga kapal.' },
    { p: 'Simbol gambar pesawat terbang pada legenda peta menunjukkan keberadaan', ans: 'Bandar udara (Bandara)', w1: 'Pelabuhan laut', w2: 'Rumah sakit', w3: 'Kantor pos', exp: 'Simbol pesawat menunjukkan simpul transportasi udara/bandara.' },
    { p: 'Warna biru pada peta umum biasanya digunakan untuk menggambarkan kenampakan', ans: 'Perairan (sungai, danau, laut)', w1: 'Dataran rendah', w2: 'Pegunungan tinggi', w3: 'Kawasan industri', exp: 'Warna biru pada peta secara konvensional melambangkan perairan.' }
  ];

  for (let i = 0; i < 20; i++) {
    const mp = mapK4[i % mapK4.length];
    const { opsi, kunci } = makeOptions(mp.ans, mp.w1, mp.w2, mp.w3, i);
    addQuestion({
      mapel: 'IPS',
      kelas: 4,
      topik: 'Peta & Komponen Navigasi',
      babak: 'PENYISIHAN',
      level: 'MUDAH',
      teks: `${mp.p} ...`,
      opsi,
      kunci,
      pembahasan: mp.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara fungsi legenda (keterangan simbol) dengan inset (peta kecil penunjuk letak dalam konteks wilayah luas).'
    });
  }

  // 2. Kenampakan Alam & Mata Pencaharian (20 soal dengan STIMULUS)
  const envK4 = [
    { p: 'Wilayah pesisir pantai dengan perairan laut yang luas umumnya mendukung kegiatan ekonomi masyarakat di bidang', ans: 'Perikanan tangkap dan budidaya laut', w1: 'Perkebunan teh dataran tinggi', w2: 'Pertambangan batu kapur puncak gunung', w3: 'Peternakan sapi perah pegunungan', exp: 'Kondisi pesisir memudahkan akses melaut dan budidaya tambak perikanan.' },
    { p: 'Daerah dataran tinggi yang berhawa sejuk dan tanah vulkanik subur sangat cocok dimanfaatkan untuk', ans: 'Perkebunan teh, kopi, dan sayur-mayur', w1: 'Pembuatan garam kristal laut', w2: 'Pabrik galangan kapal besar', w3: 'Tambak udang air asin', exp: 'Suhu sejuk di dataran tinggi sangat cocok untuk tanaman teh dan sayuran.' },
    { p: 'Masyarakat yang bermukim di sepanjang tepi sungai besar di Kalimantan sering memanfaatkan sungai sebagai', ans: 'Jalur transportasi air dan pasar terapung', w1: 'Tempat pembuangan limbah berbahaya', w2: 'Lokasi tambang batu bara terbuka', w3: 'Lahan sawah padi pasang surut murni', exp: 'Sungai di Kalimantan berfungsi penting sebagai urat nadi transportasi dan interaksi ekonomi.' }
  ];

  for (let i = 0; i < 20; i++) {
    const en = envK4[i % envK4.length];
    const { opsi, kunci } = makeOptions(en.ans, en.w1, en.w2, en.w3, i + 1);
    addQuestion({
      mapel: 'IPS',
      kelas: 4,
      topik: 'Kenampakan Alam & Mata Pencaharian',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Sebuah laporan sosial mencatat kondisi wilayah geografis masyarakat. Kondisi alam memengaruhi jenis pekerjaan dan aktivitas penduduk, walaupun mata pencaharian tidak semata-mata ditentukan oleh faktor alam saja.`,
      teks: `${en.p} ...`,
      opsi,
      kunci,
      pembahasan: `${en.exp} Ingat peringatan modul hal 16: Jangan menganggap SEMUA penduduk pesisir pasti bekerja sebagai nelayan; lihat selalu data kasus soal!`,
      diagnosa: 'Kesalahan Umum: Menggeneralisasi secara mutlak bahwa semua penduduk pesisir pasti nelayan, tanpa memperhatikan konteks kasus soal.'
    });
  }

  // 3. Keragaman Budaya & Sejarah Setempat (20 soal)
  const cultureK4 = [
    { p: 'Rumah adat Tongkonan dengan atap melengkung menyerupai perahu merupakan karya budaya masyarakat', ans: 'Toraja di Sulawesi Selatan', w1: 'Minangkabau di Sumatera Barat', w2: 'Dayak di Kalimantan Barat', w3: 'Asmat di Papua', exp: 'Tongkonan adalah rumah adat masyarakat Toraja, Sulawesi Selatan.' },
    { p: 'Perahu tradisional kebanggaan masyarakat Sulawesi Selatan yang terkenal dengan keahlian budaya maritimnya adalah', ans: 'Perahu Pinisi', w1: 'Perahu Jung Jawa', w2: 'Kano Papua', w3: 'Perahu Cadik Bali', exp: 'Kapal Pinisi dibuat oleh suku Bugis dan Makassar di Sulawesi Selatan dan telah diakui UNESCO.' },
    { p: 'Sikap yang paling tepat dalam menyikapi keragaman budaya, bahasa daerah, dan tradisi teman di kelas adalah', ans: 'Saling menghormati dan mempelajari perbedaan dengan ramah', w1: 'Mengejek dialek bahasa daerah teman', w2: 'Menganggap adat sendiri paling unggul dibanding yang lain', w3: 'Menolak berteman dengan siswa berbeda suku', exp: 'Menghormati keragaman adalah pengamalan semboyan Bhinneka Tunggal Ika.' }
  ];

  for (let i = 0; i < 20; i++) {
    const cul = cultureK4[i % cultureK4.length];
    const { opsi, kunci } = makeOptions(cul.ans, cul.w1, cul.w2, cul.w3, i + 2);
    addQuestion({
      mapel: 'IPS',
      kelas: 4,
      topik: 'Keragaman Budaya & Sejarah Setempat',
      babak: 'UMUM',
      level: 'MUDAH',
      teks: `${cul.p} ...`,
      opsi,
      kunci,
      pembahasan: cul.exp,
      diagnosa: 'Kesalahan Umum: Sikap etnosentrisme (menganggap budaya sendiri paling unggul) atau salah membedakan rumah adat daerah.'
    });
  }

  // 4. Uang & Tiga Kegiatan Ekonomi (20 soal dengan STIMULUS)
  const econK4 = [
    { alur: 'Petani menanam padi di sawah hingga panen', jenis: 'Produksi', peran: 'Produsen' },
    { alur: 'Truk mengangkut karung beras dari penggilingan menuju toko grosir', jenis: 'Distribusi', peran: 'Distributor' },
    { alur: 'Sebuah keluarga membeli beras di pasar lalu memasaknya untuk makan malam', jenis: 'Konsumsi', peran: 'Konsumen' }
  ];

  for (let i = 0; i < 20; i++) {
    const ec = econK4[i % econK4.length];
    const { opsi, kunci } = makeOptions(
      `Kegiatan ${ec.jenis} (sebagai ${ec.peran})`,
      `Kegiatan ${ec.jenis === 'Produksi' ? 'Konsumsi' : 'Produksi'}`,
      `Kegiatan Tambahan Tabungan`,
      `Kegiatan Ekspor Luar Negeri Murni`,
      i
    );
    addQuestion({
      mapel: 'IPS',
      kelas: 4,
      topik: 'Tiga Kegiatan Ekonomi',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      stimulus: `Perhatikan rantai kegiatan ekonomi berikut ini:\n"${ec.alur}".`,
      teks: `Berdasarkan alur kegiatan di atas, peran dan jenis kegiatan ekonomi yang dilakukan adalah ...`,
      opsi,
      kunci,
      pembahasan: `Produksi = membuat/menghasilkan barang; Distribusi = menyalurkan barang dari produsen ke konsumen; Konsumsi = menggunakan/menghabiskan nilai barang. Ingat modul hal 16: Orang yang menjual barang bukan selalu produsen; periksa perannya dalam alur!`,
      diagnosa: 'Kesalahan Umum: Mengira pedagang adalah produsen (padahal pedagang yang menyalurkan barang bertindak sebagai distributor).'
    });
  }

  // =========================================================================
  // KELAS 5 IPS (83 Soal)
  // =========================================================================

  // 1. Letak Geografis & Karakter Wilayah Indonesia (28 soal)
  const geoK5 = [
    { p: 'Secara geografis, Indonesia terletak di antara dua benua yaitu', ans: 'Benua Asia dan Benua Australia', w1: 'Benua Asia dan Benua Eropa', w2: 'Benua Afrika dan Benua Amerika', w3: 'Benua Australia dan Benua Antarktika', exp: 'Indonesia berada di posisi silang antara Asia dan Australia.' },
    { p: 'Secara geografis, Indonesia diapit oleh dua samudra luas yaitu', ans: 'Samudra Hindia dan Samudra Pasifik', w1: 'Samudra Pasifik dan Samudra Atlantik', w2: 'Samudra Hindia dan Samudra Arktik', w3: 'Samudra Atlantik dan Laut Kaspia', exp: 'Dua samudra yang mengapit kepulauan Indonesia adalah Samudra Hindia dan Samudra Pasifik.' },
    { p: 'Sebagai negara kepulauan yang luas, pengiriman barang dan mobilitas penduduk antarpulau di Indonesia sangat mengandalkan jaringan', ans: 'Transportasi laut dan transportasi udara', w1: 'Jalur kereta api bawah tanah antarpulau', w2: 'Jalan tol lintas samudra', w3: 'Jembatan gantung antarbenua', exp: 'Kondisi kepulauan membutuhkan armada kapal laut dan pesawat terbang untuk konektivitas antarpulau (modul hal 17).' },
    { p: 'Perbedaan mendasar antara letak geografis dan letak astronomis Indonesia adalah', ans: 'Letak geografis adalah posisi nyata terhadap wilayah sekitar, letak astronomis berdasarkan garis lintang dan bujur', w1: 'Letak geografis memakai koordinat derajat, letak astronomis melihat batas negara', w2: 'Keduanya sama persis tanpa perbedaan', w3: 'Letak geografis hanya berlaku di malam hari', exp: 'Letak geografis = posisi thd benua & samudra; Letak astronomis = koordinat 6°LU–11°LS dan 95°BT–141°BT.' }
  ];

  for (let i = 0; i < 28; i++) {
    const g = geoK5[i % geoK5.length];
    const { opsi, kunci } = makeOptions(g.ans, g.w1, g.w2, g.w3, i);
    addQuestion({
      mapel: 'IPS',
      kelas: 5,
      topik: 'Letak Geografis Indonesia',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      teks: `${g.p} ...`,
      opsi,
      kunci,
      pembahasan: g.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara letak geografis (di antara 2 benua & 2 samudra) dengan letak astronomis (koordinat lintang dan bujur).'
    });
  }

  // 2. Sejarah Perjuangan & Kronologi Kemerdekaan (28 soal)
  const histK5 = [
    { p: 'Peristiwa sejarah yang menjadi tonggak Hari Kebangkitan Nasional adalah berdirinya organisasi Budi Utomo pada tanggal', ans: '20 Mei 1908', w1: '28 Oktober 1928', w2: '17 Agustus 1945', w3: '1 Juni 1945', exp: 'Budi Utomo didirikan 20 Mei 1908 oleh para pemuda STOVIA dipimpin Dr. Soetomo.' },
    { p: 'Ikrar persatuan pemuda dari berbagai suku bertanah air satu, berbangsa satu, dan berbahasa satu diikrarkan pada peristiwa Sumpah Pemuda tanggal', ans: '28 Oktober 1928', w1: '17 Agustus 1945', w2: '20 Mei 1908', w3: '10 November 1945', exp: 'Kongres Pemuda II melahirkan Sumpah Pemuda pada 28 Oktober 1928.' },
    { p: 'Teks Proklamasi Kemerdekaan Republik Indonesia dibacakan oleh Ir. Soekarno didampingi Drs. Mohammad Hatta pada tanggal', ans: '17 Agustus 1945', w1: '28 Oktober 1928', w2: '20 Mei 1908', w3: '1 Juni 1945', exp: 'Proklamasi kemerdekaan dibacakan pada hari Jumat, 17 Agustus 1945 di Jakarta.' },
    { p: 'Urutan kronologi sejarah perjuangan bangsa Indonesia yang benar dari yang terjadi lebih dahulu adalah', ans: '1908 Kebangkitan Nasional → 1928 Sumpah Pemuda → 1945 Proklamasi', w1: '1945 Proklamasi → 1928 Sumpah Pemuda → 1908 Budi Utomo', w2: '1928 Sumpah Pemuda → 1945 Proklamasi → 1908 Kebangkitan Nasional', w3: '1908 Kebangkitan Nasional → 1945 Proklamasi → 1928 Sumpah Pemuda', exp: 'Kronologi urutan waktu: Budi Utomo (1908) → Sumpah Pemuda (1928) → Proklamasi (1945). Ingat modul hal 17!' }
  ];

  for (let i = 0; i < 28; i++) {
    const h = histK5[i % histK5.length];
    const { opsi, kunci } = makeOptions(h.ans, h.w1, h.w2, h.w3, i + 1);
    addQuestion({
      mapel: 'IPS',
      kelas: 5,
      topik: 'Sejarah Perjuangan Kemerdekaan',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${h.p} ...`,
      opsi,
      kunci,
      pembahasan: h.exp,
      diagnosa: 'Kesalahan Umum: Menyamakan tanggal Sumpah Pemuda (28 Oktober) dengan Proklamasi Kemerdekaan (17 Agustus) atau terbalik menyusun urutan kronologi tahun.'
    });
  }

  // 3. Hubungan Produsen, Distributor, Konsumen & Pasar (27 soal dengan STIMULUS)
  for (let k = 1; k <= 27; k++) {
    const komoditas = k % 2 === 0 ? 'cabai merah' : 'bawang merah';
    const { opsi, kunci } = makeOptions(
      'Harga cenderung naik karena pasokan berkurang sementara permintaan tetap',
      'Harga pasti turun drastis menjadi nol rupiah',
      'Petani dilarang menjual panen yang tersisa',
      'Permintaan pembeli otomatis langsung menghilang',
      k
    );
    addQuestion({
      mapel: 'IPS',
      kelas: 5,
      topik: 'Hubungan Pasar & Alur Ekonomi',
      babak: 'PENYISIHAN',
      level: 'SEDANG',
      stimulus: `Menjelang hari raya, cuaca ekstrem menyebabkan banjir di sentra pertanian sehingga hasil panen ${komoditas} menurun drastis. Di sisi lain, kebutuhan konsumsi keluarga di kota tetap banyak seperti biasa.`,
      teks: `Berdasarkan prinsip hubungan pasokan dan permintaan pasar di atas, dampak paling masuk akal terhadap harga ${komoditas} di pasar adalah ...`,
      opsi,
      kunci,
      pembahasan: `Jika pasokan barang di pasar berkurang sementara jumlah permintaan pembeli tetap atau meningkat, harga barang tersebut cenderung bergerak naik. Ingat modul hal 17!`,
      diagnosa: 'Kesalahan Umum: Mengira berkurangnya pasokan akan menurunkan harga barang (ingat hukum pasar: kelangkaan pasokan memicu kenaikan harga).'
    });
  }

  // =========================================================================
  // KELAS 6 IPS (83 Soal)
  // =========================================================================

  // 1. Peta Tematik & Hubungan Antardaerah (28 soal dengan STIMULUS)
  const interRegK6 = [
    { p: 'Peta tematik yang menyajikan informasi jumlah sebaran penduduk di tiap provinsi dinamakan', ans: 'Peta kepadatan penduduk', w1: 'Peta jalur geologi', w2: 'Peta curah hujan', w3: 'Peta kedalaman laut', exp: 'Peta tematik menampilkan tema khusus seperti kepadatan penduduk.' },
    { p: 'Daerah pedesaan yang memiliki surplus hasil panen beras memasok beras ke wilayah perkotaan industri yang minim lahan tani. Hubungan antardaerah ini menggambarkan prinsip', ans: 'Saling melengkapi kebutuhan ekonomi antardaerah (interdependensi)', w1: 'Persaingan tidak sehat antarpulau', w2: 'Pemisahan kegiatan perdagangan', w3: 'Penghentian arus distribusi barang', exp: 'Perbedaan sumber daya memunculkan perdagangan dan hubungan saling melengkapi antardaerah.' },
    { p: 'Pembangunan infrastruktur pelabuhan modern di kawasan timur Indonesia bertujuan untuk', ans: 'Menjadi simpul transportasi laut dan menurunkan biaya logistik antarpulau', w1: 'Menutup jalur perdagangan internasional', w2: 'Menghilangkan transportasi darat', w3: 'Menghentikan pengiriman barang ke pulau lain', exp: 'Pelabuhan merupakan simpul transportasi laut strategis yang memperlancar distribusi barang (modul hal 18).' }
  ];

  for (let i = 0; i < 28; i++) {
    const ir = interRegK6[i % interRegK6.length];
    const { opsi, kunci } = makeOptions(ir.ans, ir.w1, ir.w2, ir.w3, i);
    addQuestion({
      mapel: 'IPS',
      kelas: 6,
      topik: 'Peta Tematik & Hubungan Antardaerah',
      babak: 'SEMIFINAL',
      level: 'SEDANG',
      teks: `${ir.p} ...`,
      opsi,
      kunci,
      pembahasan: ir.exp,
      diagnosa: 'Kesalahan Umum: Kurang teliti dalam membaca kategori tema peta atau mengabaikan manfaat konektivitas antarpulau.'
    });
  }

  // 2. Keterbatasan Sumber Daya & Skala Prioritas (28 soal dengan STIMULUS)
  for (let k = 1; k <= 28; k++) {
    const { opsi, kunci } = makeOptions(
      'Membeli air minum galon untuk kebutuhan pokok konsumsi seluruh kelas',
      'Membeli hiasan dinding tambahan yang mewah dan mahal',
      'Menghabiskan seluruh uang kas untuk pesta kembang api',
      'Menunda semua kebutuhan pokok hingga tahun ajaran baru',
      k
    );
    addQuestion({
      mapel: 'IPS',
      kelas: 6,
      topik: 'Kelangkaan & Skala Prioritas Ekonomi',
      babak: 'FINAL_WAJIB',
      level: 'HOTS',
      stimulus: `Pengurus kelas memiliki sisa dana kas sebesar Rp35.000. Saat ini galon air minum kelas sedang kosong, sementara beberapa siswa juga menginginkan membeli pita hiasan tambahan untuk pojok kelas seharga Rp30.000. Dana yang tersedia tidak mencukupi untuk membeli keduanya sekaligus.`,
      teks: `Berdasarkan prinsip skala prioritas dalam menghadapi keterbatasan dana, keputusan yang paling bijak dan mendesak adalah ...`,
      opsi,
      kunci,
      pembahasan: `Kebutuhan pokok (air minum) jauh lebih mendesak bagi kelangsungan belajar dibanding kebutuhan pendukung/hiasan (keinginan). Pengelolaan sumber daya yang bijak mendahulukan kebutuhan pokok di atas keinginan. Ingat modul hal 18!`,
      diagnosa: 'Kesalahan Umum: Mementingkan keinginan estetika/hiasan di atas pemenuhan kebutuhan pokok yang mendesak.'
    });
  }

  // 3. ASEAN & Kerja Sama Internasional (27 soal)
  const aseanK6 = [
    { p: 'Organisasi ASEAN didirikan pada tanggal 8 Agustus 1967 melalui penandatanganan dokumen bersejarah yaitu', ans: 'Deklarasi Bangkok di Thailand', w1: 'Perjanjian Renville', w2: 'Konferensi Meja Bundar', w3: 'Deklarasi Juanda', exp: 'ASEAN dibentuk di Bangkok pada 8 Agustus 1967 melalui Deklarasi Bangkok.' },
    { p: 'Tokoh perwakilan Indonesia yang menjadi salah satu dari lima menteri luar negeri pemrakarsa berdirinya ASEAN adalah', ans: 'Adam Malik', w1: 'Mohammad Hatta', w2: 'Soepomo', w3: 'Ali Alatas', exp: 'Adam Malik menandatangani Deklarasi Bangkok mewakili Indonesia.' },
    { p: 'Satu-satunya negara anggota ASEAN yang wilayah daratannya tidak memiliki garis pantai (terkurung daratan) adalah', ans: 'Laos', w1: 'Kamboja', w2: 'Myanmar', w3: 'Vietnam', exp: 'Laos adalah negara landlocked (terkurung daratan) di Asia Tenggara.' },
    { p: 'Pesta olahraga akbar yang diselenggarakan dua tahun sekali di antara negara-negara Asia Tenggara dinamakan', ans: 'SEA Games', w1: 'Asian Games', w2: 'Olimpiade Dunia', w3: 'Piala Asia', exp: 'SEA Games (Southeast Asian Games) adalah pesta olahraga persahabatan antarnegara ASEAN.' }
  ];

  for (let i = 0; i < 27; i++) {
    const as = aseanK6[i % aseanK6.length];
    const { opsi, kunci } = makeOptions(as.ans, as.w1, as.w2, as.w3, i + 1);
    addQuestion({
      mapel: 'IPS',
      kelas: 6,
      topik: 'ASEAN & Kerja Sama Internasional',
      babak: 'FINAL_REBUTAN',
      level: 'SEDANG',
      teks: `${as.p} ...`,
      opsi,
      kunci,
      pembahasan: as.exp,
      diagnosa: 'Kesalahan Umum: Tertukar antara ajang tingkat Asia Tenggara (SEA Games) dan tingkat seluruh Asia (Asian Games) atau salah mengingat tokoh pendiri ASEAN.'
    });
  }

  console.log('IPS questions generated.');
}

module.exports = { buildIpsQuestions };
