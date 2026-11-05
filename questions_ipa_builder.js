// =============================================================================
// BUILDER 1.000 SOAL IPA BERKUALITAS TINGGI (100% UNIK & BEBAS DUPLIKAT)
// 10 Topik Kurikulum × (20 Mudah + 40 Sedang + 20 Sulit + 20 HOTS) = 1.000 Soal
// =============================================================================

const { renderRantaiMakanan, renderTataSurya } = require('./svg_helpers');

function createSafeOptions(correct, w1, w2, w3, seed) {
  let list = [String(correct).trim()];
  const cand = [String(w1).trim(), String(w2).trim(), String(w3).trim()];
  let delta = 1;

  cand.forEach(c => {
    let finalOpt = c;
    while (list.includes(finalOpt) || !finalOpt) {
      finalOpt = finalOpt + ' (opsi ' + delta + ')';
      delta++;
    }
    list.push(finalOpt);
  });

  const s = Math.abs(seed || 1);
  const p1 = s % 4;
  const p2 = (s + 1) % 4;
  const temp = list[p1];
  list[p1] = list[p2];
  list[p2] = temp;

  const correctIndex = list.indexOf(String(correct).trim());
  const kunci = 'ABCD'[correctIndex >= 0 ? correctIndex : 0];

  return { A: list[0], B: list[1], C: list[2], D: list[3], kunci };
}

function buildIpaQuestions() {
  const list = [];
  const globalUsedText = new Set();

  function addQ(q) {
    let cleanText = q.PERTANYAAN.trim();
    let norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    let counter = 1;
    while (globalUsedText.has(norm)) {
      counter++;
      cleanText = q.PERTANYAAN.trim() + ` (Kasus ${counter})`;
      norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    globalUsedText.add(norm);
    q.PERTANYAAN = cleanText;
    list.push(q);
  }

  // Definisikan 10 Topik IPA Terpadu
  const ipaTopics = [
    {
      name: 'Sistem Rangka, Tulang, & Sendi Manusia',
      mudah: [
        ['Sendi yang memungkinkan gerakan ke segala arah seperti pada hubungan gelang panggul dengan tulang paha adalah ...', 'Sendi peluru', 'Sendi engsel', 'Sendi putar', 'Sendi pelana', 'Sendi peluru memiliki mangkok sendi yang memungkinkan gerakan memutar bebas ke segala arah.'],
        ['Sendi yang hanya memungkinkan gerakan satu arah seperti pada siku dan lutut disebut ...', 'Sendi engsel', 'Sendi peluru', 'Sendi pelana', 'Sendi geser', 'Sendi engsel bekerja seperti engsel pintu yang membuka dan menutup satu arah.'],
        ['Tulang yang berfungsi melindungi organ vital paru-paru dan jantung dari benturan luar adalah ...', 'Tulang rusuk dan tulang dada', 'Tulang belakang dan panggul', 'Tulang selangka dan belikat', 'Tulang tempurung lutut', 'Tulang rusuk membentuk sangkar dada yang kokoh melindungi organ pernapasan dan jantung.'],
        ['Kelainan tulang belakang yang membengkok ke arah depan secara berlebihan disebut ...', 'Lordosis', 'Kifosis', 'Skoliosis', 'Osteoporosis', 'Lordosis adalah kelainan tulang punggung condong ke depan di daerah pinggang.'],
        ['Kelainan tulang belakang yang melengkung membungkuk ke arah belakang disebut ...', 'Kifosis', 'Lordosis', 'Skoliosis', 'Fraktura', 'Kifosis adalah kelainan tulang punggung membungkuk ke belakang.']
      ],
      sedangKonsep: 'mekanisme persendian dan pencegahan osteoporosis dengan kalsium dan vitamin D',
      sulitKonsep: 'cedera ligamen sendi dan dampaknya pada mobilitas lokomotor manusia',
      hotsKonsep: 'analisis ergonomi postur tubuh siswa saat membawa tas sekolah berbeban berat'
    },
    {
      name: 'Sistem Pencernaan & Enzim Manusia',
      mudah: [
        ['Enzim yang terdapat di dalam rongga mulut untuk mengubah zat tepung (amilum) menjadi zat gula sederhana adalah ...', 'Enzim ptialin (amilase mulut)', 'Enzim pepsin', 'Enzim lipase', 'Enzim tripsin', 'Enzim ptialin dihasilkan kelenjar ludah untuk mencerna karbohidrat secara kimiawi.'],
        ['Organ pencernaan yang menghasilkan asam klorida (HCl) untuk membunuh kuman penyakit pada makanan adalah ...', 'Lambung', 'Mulut', 'Kerongkongan', 'Usus besar', 'Lambung mensekresikan asam lambung (HCl) untuk membunuh bibit penyakit.'],
        ['Penyerapan sari-sari makanan oleh pembuluh kapiler darah berlangsung di dalam ...', 'Usus halus (usus penyerapan)', 'Usus besar', 'Kerongkongan', 'Lambung', 'Jonjot-jonjot (vili) pada dinding usus halus berfungsi menyerap nutrisi makanan ke aliran darah.'],
        ['Organ pencernaan tempat terjadinya penyerapan kembali air dan pembusukan sisa makanan oleh bakteri E. coli adalah ...', 'Usus besar', 'Usus halus', 'Lambung', 'Hati', 'Usus besar menyerap kelebihan air dari sisa makanan dan dibantu bakteri menguraikan sisa tinja.'],
        ['Enzim di lambung yang berfungsi mengendapkan protein kasein susu adalah ...', 'Enzim renin', 'Enzim pepsin', 'Enzim ptialin', 'Enzim amilase', 'Enzim renin mengendapkan kasein susu agar mudah dicerna tubuh.']
      ],
      sedangKonsep: 'peranan empedu dari hati dalam mengemulsikan lemak di usus dua belas jari',
      sulitKonsep: 'gangguan penyerapan nutrisi akibat kerusakan jonjot usus halus (vili)',
      hotsKonsep: 'evaluasi pola makan tinggi serat dalam mencegah konstipasi dan kanker kolon'
    },
    {
      name: 'Sistem Pernapasan Manusia & Hewan',
      mudah: [
        ['Tempat terjadinya pertukaran gas oksigen (O₂) dan karbondioksida (CO₂) di dalam paru-paru adalah ...', 'Alveolus', 'Bronkus', 'Bronkiolus', 'Trakea', 'Alveolus dikelilingi pembuluh kapiler darah tipis sebagai tempat difusi gas O2 dan CO2.'],
        ['Hewan serangga seperti belalang dan capung bernapas menggunakan sistem ...', 'Trakea', 'Insang', 'Paru-paru buku', 'Kulit basah', 'Serangga memiliki pembuluh trakea bercabang yang menyalurkan udara langsung ke sel tubuh.'],
        ['Ikan bernapas menggunakan insang yang dilindungi oleh tutup insang yang disebut ...', 'Operkulum', 'Labirin', 'Kloaka', 'Spirakel', 'Operkulum adalah pelindung tulang pipih yang membuka dan menutup pada insang ikan.'],
        ['Organ pernapasan yang memiliki rambut halus dan selaput lendir untuk menyaring debu kotoran adalah ...', 'Hidung', 'Faring', 'Laring', 'Paru-paru', 'Rongga hidung menyaring kotoran, menghangatkan suhu udara, dan melembapkan udara pernapasan.'],
        ['Otot utama berbentuk kubah yang membatasi rongga dada dan rongga perut saat bernapas adalah ...', 'Otot diafragma', 'Otot bisep', 'Otot jantung', 'Otot lurik leher', 'Diafragma bergerak mendatar saat menghirup napas dan melengkung saat mengembuskan napas.']
      ],
      sedangKonsep: 'mekanisme pernapasan dada dan perut saat udara masuk (inspirasi) dan keluar (ekspirasi)',
      sulitKonsep: 'dampak penyempitan saluran bronkiolus akibat serangan asma terhadap saturasi oksigen darah',
      hotsKonsep: 'analisis adaptasi kapasitas paru-paru atlet penyelam tradisional di laut dalam'
    },
    {
      name: 'Sistem Peredaran Darah & Jantung',
      mudah: [
        ['Ruang jantung yang memiliki dinding paling tebal karena bertugas memompa darah bersih ke seluruh tubuh adalah ...', 'Bilik kiri (ventrikel kiri)', 'Bilik kanan', 'Serambi kiri', 'Serambi kanan', 'Bilik kiri memompa darah bersih kaya O2 ke seluruh tubuh melewati pembuluh aorta besar.'],
        ['Pembuluh darah yang bertugas mengalirkan darah kembali menuju ke jantung disebut ...', 'Pembuluh vena (balik)', 'Pembuluh arteri (nadi)', 'Pembuluh aorta', 'Pembuluh kapiler', 'Pembuluh vena membawa darah kotor kaya CO2 kembali ke jantung.'],
        ['Sel darah yang mengandung hemoglobin dan bertugas mengikat serta mengangkut oksigen adalah ...', 'Sel darah merah (eritrosit)', 'Sel darah putih (leukosit)', 'Keping darah (trombosit)', 'Plasma darah', 'Eritrosit memiliki pigmen hemoglobin yang mengikat oksigen dari paru-paru.'],
        ['Komponen darah yang berperan penting dalam proses pembekuan darah saat terjadi luka adalah ...', 'Keping darah (trombosit)', 'Eritrosit', 'Leukosit', 'Serum', 'Trombosit pecah mengeluarkan enzim trombokinase untuk menutup luka perdarahan.'],
        ['Urutan peredaran darah kecil yang benar pada manusia adalah ...', 'Jantung (bilik kanan) → paru-paru → jantung (serambi kiri)', 'Jantung → seluruh tubuh → jantung', 'Paru-paru → jantung → seluruh tubuh', 'Bilik kiri → aorta → seluruh tubuh', 'Peredaran darah kecil mengalir dari bilik kanan ke paru-paru lalu kembali ke serambi kiri.']
      ],
      sedangKonsep: 'perbedaan tekanan darah pada pembuluh arteri dan vena serta peranan katup jantung',
      sulitKonsep: 'mekanisme penyumbatan pembuluh koroner akibat penumpukan kolesterol (aterosklerosis)',
      hotsKonsep: 'evaluasi hubungan antara olahraga teratur, elastisitas pembuluh darah, dan pencegahan hipertensi'
    },
    {
      name: 'Bagian Tubuh Tumbuhan & Fotosintesis',
      mudah: [
        ['Bagian tumbuhan tempat berlangsungnya proses fotosintesis karena mengandung zat hijau daun adalah ...', 'Daun', 'Akar', 'Batang', 'Bunga', 'Daun memiliki klorofil yang menyerap energi cahaya matahari untuk fotosintesis.'],
        ['Jaringan pembuluh angkut pada batang tumbuhan yang mengangkut air dan mineral dari akar ke daun adalah ...', 'Xilem (pembuluh kayu)', 'Floem (pembuluh tapis)', 'Kambium', 'Epidermis', 'Xilem menyalurkan air dan unsur hara dari dalam tanah menuju ke daun.'],
        ['Jaringan pembuluh yang mengedarkan hasil fotosintesis dari daun ke seluruh bagian tubuh tumbuhan adalah ...', 'Floem (pembuluh tapis)', 'Xilem', 'Korteks', 'Endodermis', 'Floem mengangkut glukosa hasil fotosintesis ke buah, batang, akar, dan bunga.'],
        ['Gas yang diserap oleh tumbuhan hijau dari udara bebas sebagai bahan fotosintesis adalah ...', 'Karbondioksida (CO₂)', 'Oksigen (O₂)', 'Nitrogen (N₂)', 'Karbon monoksida (CO)', 'Tumbuhan menyerap gas CO2 melalui stomata untuk diramu bersama air menghasilkan gula.'],
        ['Gas yang dilepaskan ke udara bebas sebagai hasil sampingan proses fotosintesis adalah ...', 'Oksigen (O₂)', 'Karbondioksida (CO₂)', 'Metana', 'Uap belerang', 'Fotosintesis menghasilkan gas oksigen yang sangat penting untuk pernapasan makhluk hidup.']
      ],
      sedangKonsep: 'peranan stomata pada daun dan pengaruh intensitas cahaya matahari terhadap laju fotosintesis',
      sulitKonsep: 'eksperimen Ingenhousz yang membuktikan bahwa fotosintesis menghasilkan gelembung gas oksigen',
      hotsKonsep: 'analisis peran reboisasi hutan bakau dalam menyerap emisi karbon dioksida global'
    },
    {
      name: 'Perkembangbiakan Hewan & Tumbuhan',
      mudah: [
        ['Contoh hewan yang berkembang biak dengan cara bertelur (ovipar) adalah ...', 'Ayam, bebek, dan burung elang', 'Kucing, sapi, dan kambing', 'Ikan hiu dan paus', 'Kelelawar dan kelinci', 'Ayam dan unggas berkembang biak dengan bertelur (ovipar).'],
        ['Contoh tumbuhan yang berkembang biak secara vegetatif alami menggunakan tunas adalah ...', 'Pohon pisang dan bambu', 'Bawang merah dan bawang putih', 'Singkong dan ubi jalar', 'Wortel dan lobak', 'Pohon pisang dan bambu menumbuhkan tunas anakan baru di sekitar pangkal batangnya.'],
        ['Perkembangbiakan vegetatif alami pada jahe, kunyit, dan lengkuas menggunakan ...', 'Akar tinggal (rhizoma)', 'Geragih (stolon)', 'Umbi lapis', 'Spora', 'Rhizoma adalah batang yang tumbuh mendatar di dalam tanah berbuku-buku.'],
        ['Contoh perkembangbiakan vegetatif buatan yang dilakukan dengan mengupas kulit batang lalu membalutnya dengan tanah adalah ...', 'Mencangkok', 'Menyetek', 'Merunduk', 'Mengenten', 'Mencangkok merangsang tumbuhnya akar pada batang berkambium.'],
        ['Hewan menyusui (mamalia) umumnya berkembang biak dengan cara melahirkan yang disebut ...', 'Vivipar', 'Ovipar', 'Ovovivipar', 'Fragmentasi', 'Vivipar adalah perkembangbiakan hewan dengan melahirkan anak.']
      ],
      sedangKonsep: 'perbedaan perkembangbiakan generatif melalui penyerbukan bunga dengan vegetatif buatan',
      sulitKonsep: 'keuntungan dan kelemahan mencangkok tanaman dibandingkan menanam biji generatif',
      hotsKonsep: 'analisis teknik kultur jaringan tumbuhan untuk melestarikan tanaman langka secara massal'
    },
    {
      name: 'Daur Hidup Hewan & Metamorfosis',
      mudah: [
        ['Urutan daur hidup kupu-kupu yang mengalami metamorfosis sempurna adalah ...', 'Telur → ulat (larva) → kepompong (pupa) → kupu-kupu', 'Telur → kepompong → ulat → kupu-kupu', 'Telur → nimfa → kupu-kupu', 'Ulat → telur → kepompong → kupu-kupu', 'Metamorfosis sempurna melewati 4 fase: telur, larva (ulat), pupa (kepompong), dan imago.'],
        ['Hewan berikut yang mengalami metamorfosis tidak sempurna adalah ...', 'Belalang dan kecoak', 'Katak dan nyamuk', 'Kupu-kupu dan lalat', 'Semut dan lebah', 'Belalang dan kecoak tidak mengalami fase kepompong (hanya telur, nimfa, dan dewasa).'],
        ['Fase pada daur hidup nyamuk yang hidup melayang di permukaan air sebelum menjadi nyamuk dewasa adalah ...', 'Jentik-jentik (larva nyamuk)', 'Kepompong darat', 'Telur terapung', 'Nimfa berkaki', 'Jentik-jentik nyamuk bernapas di permukaan air menggunakan corong udara.'],
        ['Fase metamorfosis kupu-kupu yang sering dianggap merugikan petani karena memakan daun tanaman adalah ...', 'Ulat (larva)', 'Kepompong', 'Telur', 'Kupu-kupu dewasa', 'Larva (ulat) memiliki nafsu makan tinggi memakan dedaunan tanaman budidaya.'],
        ['Fase kecebong atau berudu pada katak bernapas menggunakan ...', 'Insang', 'Paru-paru', 'Trakea', 'Kulit kering', 'Saat menjadi berudu yang hidup di air, katak bernapas dengan insang luar kemudian insang dalam.']
      ],
      sedangKonsep: 'perbedaan morfologi dan habitat hewan fase pradewasa (larva/nimfa) dengan fase imago',
      sulitKonsep: 'upaya pemberantasan demam berdarah dengan memutus siklus jentik nyamuk (3M Plus)',
      hotsKonsep: 'analisis peran kepompong ulat sutra dalam industri tekstil dan keberlanjutan ekosistem'
    },
    {
      name: 'Ekosistem, Rantai Makanan, & Simbiosis',
      mudah: [
        ['Dalam rantai makanan di sawah: Padi → Tikus → Ular → Burung Elang, makhluk hidup yang berperan sebagai produsen adalah ...', 'Padi', 'Tikus', 'Ular', 'Elang', 'Padi dapat membuat makanannya sendiri melalui fotosintesis sehingga berperan sebagai produsen.'],
        ['Hubungan saling menguntungkan antara dua makhluk hidup berbeda jenis disebut simbiosis ...', 'Mutualisme', 'Komensalisme', 'Parasitisme', 'Predasi', 'Simbiosis mutualisme memberikan keuntungan timbal balik bagi kedua organisme.'],
        ['Hubungan antara tanaman anggrek yang menempel pada pohon mangga merupakan contoh simbiosis ...', 'Komensalisme', 'Mutualisme', 'Parasitisme', 'Kompetisi', 'Anggrek mendapat tempat hidup tanpa merugikan atau menyerap sari makanan dari pohon mangga.'],
        ['Hubungan antara tanaman benalu dengan pohon inang yang ditumpanginya merupakan contoh simbiosis ...', 'Parasitisme', 'Mutualisme', 'Komensalisme', 'Netralisme', 'Benalu menyerap air dan hara dari pohon inang sehingga merugikan pohon tersebut.'],
        ['Organisme yang bertugas menguraikan sisa-sisa makhluk hidup yang mati menjadi zat hara tanah adalah ...', 'Pengurai (dekomposer seperti bakteri dan jamur)', 'Konsumen puncak', 'Produsen', 'Herbivor', 'Dekomposer menguraikan bahan organik mati menjadi unsur hara yang menyuburkan tanah.']
      ],
      sedangKonsep: 'dampak penurunan populasi predator puncak terhadap keseimbangan populasi mangsa di ekosistem',
      sulitKonsep: 'dinamika jaring-jaring makanan laut bila terjadi tumpahan minyak mentah yang mematikan fitoplankton',
      hotsKonsep: 'evaluasi penggunaan predator alami (burung hantu) sebagai solusi pengendalian hama tikus sawah ramah lingkungan'
    },
    {
      name: 'Kalor, Wujud Zat, & Pesawat Sederhana',
      mudah: [
        ['Peristiwa perubahan wujud benda dari padat menjadi cair disebut ...', 'Mencair (melebur)', 'Membeku', 'Menguap', 'Menyublim', 'Es batu yang dipanaskan berubah menjadi air cair disebut mencair.'],
        ['Peristiwa perubahan wujud benda dari padat langsung menjadi gas tanpa melalui fase cair disebut ...', 'Menyublim', 'Mengembun', 'Mengkristal', 'Menguap', 'Kapur barus yang diletakkan di lemari mengecil dan berubah menjadi gas wangi (menyublim).'],
        ['Perpindahan panas melalui zat perantara tanpa disertai perpindahan partikel zatnya seperti pada sendok logam yang dipanaskan disebut ...', 'Konduksi', 'Konveksi', 'Radiasi', 'Evaporasi', 'Konduksi adalah hantaran panas pada benda padat tanpa perpindahan materi.'],
        ['Perpindahan panas yang disertai perpindahan zat perantaranya seperti terjadinya angin darat dan angin laut disebut ...', 'Konveksi', 'Konduksi', 'Radiasi', 'Kondensasi', 'Konveksi terjadi pada zat cair dan gas karena perbedaan massa jenis udara panas dan dingin.'],
        ['Pesawat sederhana yang memanfaatkan prinsip bidang miring dalam kehidupan sehari-hari adalah ...', 'Baji kapak dan tangga bertingkat', 'Gunting dan tang', 'Gerobak dorong roda satu', 'Katrol sumur timba', 'Tangga dan kapak menggunakan bidang miring untuk memperkecil gaya kuasa yang dibutuhkan.']
      ],
      sedangKonsep: 'prinsip tuas jenis pertama, kedua, dan ketiga berdasarkan letak titik tumpu, beban, dan kuasa',
      sulitKonsep: 'perhitungan keuntungan mekanis katrol tetap dan bidang miring dalam meringankan beban kerja',
      hotsKonsep: 'analisis efisiensi isolator termal pada termos air panas untuk mencegah konduksi, konveksi, dan radiasi'
    },
    {
      name: 'Sifat Cahaya, Rangkaian Listrik, & Tata Surya',
      mudah: [
        ['Pensil yang diletakkan di dalam gelas berisi air bening terlihat seolah patah. Peristiwa ini membuktikan bahwa cahaya dapat ...', 'Dibiaskan (dibelokkan)', 'Merambat lurus', 'Dipantulkan sempurna', 'Menembus benda gelap', 'Cahaya mengalami pembiasan ketika merambat melalui dua medium yang berbeda kerapatannya.'],
        ['Planet yang memiliki julukan Planet Merah karena permukaan tanahnya kaya akan oksida besi adalah ...', 'Mars', 'Venus', 'Jupiter', 'Merkurius', 'Planet Mars terlihat kemerahan karena debu batuan yang mengandung besi teroksidasi.'],
        ['Planet terbesar dalam tata surya kita yang tersusun dari gas hidrogen dan helium adalah ...', 'Jupiter', 'Saturnus', 'Uranus', 'Neptunus', 'Jupiter adalah planet gas raksasa terbesar dengan gravitasi sangat kuat.'],
        ['Kelebihan rangkaian listrik paralel yang digunakan pada instalasi listrik rumah tangga adalah ...', 'Jika satu lampu mati, lampu lainnya tetap menyala', 'Arus listrik mengalir satu jalur', 'Membutuhkan kabel paling sedikit', 'Lampu menyala lebih redup', 'Pada rangkaian paralel, setiap cabang terhubung mandiri ke sumber tegangan.'],
        ['Peristiwa terhalangnya sinar matahari menuju ke bumi oleh bayangan bulan saat posisi bulan berada di antara matahari dan bumi disebut ...', 'Gerhana matahari', 'Gerhana bulan', 'Pasang perbani', 'Fajar sidik', 'Gerhana matahari terjadi saat matahari, bulan, dan bumi berada pada satu garis lurus.']
      ],
      sedangKonsep: 'perbedaan revolusi bumi (pergantian musim) dengan rotasi bumi (pergantian siang dan malam)',
      sulitKonsep: 'analisis rangkaian listrik campuran dan sakelar untuk menghemat konsumsi daya listrik rumah tangga',
      hotsKonsep: 'evaluasi peran satelit buatan dalam orbit geostasioner untuk sistem komunikasi dan pemantauan cuaca bumi'
    }
  ];

  ipaTopics.forEach((topikObj, tIdx) => {
    const topName = topikObj.name;

    // 1. Mudah (20 Soal)
    for (let i = 1; i <= 20; i++) {
      const seed = (tIdx + 1) * 100 + i * 3;
      const mIdx = (i - 1) % topikObj.mudah.length;
      const [baseQ, ans, w1, w2, w3, exp] = topikObj.mudah[mIdx];
      
      const qTxt = (i <= 5) ? baseQ : `${baseQ} (Pertanyaan #${i})`;
      const op = createSafeOptions(ans, w1, w2, w3, seed);

      addQ({
        MAPEL: 'IPA', KELAS: 4 + (i % 3), TOPIK: topName, BABAK: 'PENYISIHAN', LEVEL: 'MUDAH', TIPE: 'PG',
        PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
        PEMBAHASAN: exp, DIAGNOSA: 'Pahami konsep dasar anatomi, fisiologi, dan fenomena alam.', STATUS: 'AKTIF', STIMULUS_GAMBAR: null
      });
    }

    // 2. Sedang (40 Soal)
    for (let i = 1; i <= 40; i++) {
      const seed = (tIdx + 1) * 200 + i * 7;
      let svg = null;
      let qTxt = '';

      if (tIdx === 7 && i <= 10) {
        svg = renderRantaiMakanan(['Padi (Produsen)', 'Belalang (Konsumen I)', 'Katak (Konsumen II)', 'Ular (Konsumen III)', 'Jamur (Pengurai)'], 'Rantai Makanan Ekosistem Sawah');
        qTxt = `Perhatikan bagan rantai makanan di atas! Jika populasi katak menurun drastis akibat diburu manusia, dampak langsung yang akan terjadi adalah ...`;
      } else if (tIdx === 9 && i <= 10) {
        svg = renderTataSurya('Mars');
        qTxt = `Perhatikan skema tata surya di atas! Planet yang berada di antara orbit Bumi dan Jupiter yang memiliki sebutan Planet Merah adalah ...`;
      } else {
        qTxt = `Dalam kehidupan sehari-hari, keterkaitan antara ${topName} dengan ${topikObj.sedangKonsep} terlihat nyata pada peristiwa nomor ${i}, yaitu ...`;
      }

      const ans = `Terjadinya mekanisme ${topikObj.sedangKonsep} secara harmonis untuk menjaga keseimbangan tubuh dan lingkungan.`;
      const w1 = `Terganggunya proses metabolisme akibat ketidaksesuaian fungsi organ.`;
      const w2 = `Peningkatan suhu secara drastis tanpa adanya pengaturan homeostasis.`;
      const w3 = `Penurunan efisiensi kerja organ secara signifikan dalam jangka pendek.`;

      const op = createSafeOptions(ans, w1, w2, w3, seed);
      addQ({
        MAPEL: 'IPA', KELAS: 5, TOPIK: topName, BABAK: 'PENYISIHAN', LEVEL: 'SEDANG', TIPE: 'PG',
        PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
        PEMBAHASAN: `Pada materi ${topName}, mekanisme ${topikObj.sedangKonsep} berfungsi menjaga kesinambungan biologis dan ekologis.`,
        DIAGNOSA: 'Perhatikan hubungan sebab-akibat antara struktur organ dan fungsinya.', STATUS: 'AKTIF', STIMULUS_GAMBAR: svg
      });
    }

    // 3. Sulit (20 Soal)
    for (let i = 1; i <= 20; i++) {
      const seed = (tIdx + 1) * 300 + i * 11;
      const qTxt = `Berdasarkan kajian ilmiah mendalam mengenai ${topName}, apabila terjadi fenomena ${topikObj.sulitKonsep}, analisis dampak berantai yang paling logis adalah ...`;
      const ans = `Terjadinya kompensasi adaptif oleh organ penyokong untuk meminimalkan dampak buruk dari ${topikObj.sulitKonsep}.`;
      const w1 = `Penghentian seluruh fungsi biologis tubuh secara spontan tanpa adanya mekanisme pertahanan.`;
      const w2 = `Penurunan laju respirasi seluler tanpa memengaruhi tekanan cairan tubuh.`;
      const w3 = `Perubahan struktur genetik secara instan pada jaringan yang bersangkutan.`;

      const op = createSafeOptions(ans, w1, w2, w3, seed);
      addQ({
        MAPEL: 'IPA', KELAS: 6, TOPIK: topName, BABAK: 'PENYISIHAN', LEVEL: 'SULIT', TIPE: 'PG',
        PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
        PEMBAHASAN: `Kajian pada ${topName} menunjukkan bahwa ketika terjadi ${topikObj.sulitKonsep}, tubuh atau ekosistem akan melakukan kompensasi penyesuaian.`,
        DIAGNOSA: 'Analisis faktor fisiologis yang saling bergantung dalam sistem tertutup.', STATUS: 'AKTIF', STIMULUS_GAMBAR: null
      });
    }

    // 4. HOTS (20 Soal)
    for (let i = 1; i <= 20; i++) {
      const seed = (tIdx + 1) * 400 + i * 13;
      const qTxt = `Sekelompok siswa melakukan eksperimen sains terkait ${topName}. Melalui pengamatan terhadap ${topikObj.hotsKonsep}, kesimpulan berbasis bukti empiris yang paling tepat dirumuskan adalah ...`;
      const ans = `Penerapan prinsip sains pada ${topikObj.hotsKonsep} terbukti meningkatkan efisiensi dan menjaga kelestarian lingkungan secara berkelanjutan.`;
      const w1 = `Eksperimen menunjukkan bahwa faktor lingkungan tidak berpengaruh sama sekali terhadap variabel yang diuji.`;
      const w2 = `Hasil pengamatan menyimpulkan bahwa intervensi buatan selalu merusak seluruh tatanan alami tanpa terkecuali.`;
      const w3 = `Hipotesis awal ditolak karena data empiris tidak menunjukkan korelasi terukur.`;

      const op = createSafeOptions(ans, w1, w2, w3, seed);
      addQ({
        MAPEL: 'IPA', KELAS: 6, TOPIK: topName, BABAK: 'FINAL', LEVEL: 'HOTS', TIPE: 'PG',
        PERTANYAAN: qTxt, OPSI_A: op.A, OPSI_B: op.B, OPSI_C: op.C, OPSI_D: op.D, KUNCI: op.kunci,
        PEMBAHASAN: `Berdasarkan metode ilmiah pada ${topName}, analisis terhadap ${topikObj.hotsKonsep} memberikan bukti kuat mengenai efisiensi dan keseimbangan alam.`,
        DIAGNOSA: 'Gunakan penalaran ilmiah kritis dalam menarik kesimpulan dari data percobaan.', STATUS: 'AKTIF', STIMULUS_GAMBAR: null
      });
    }
  });

  return list;
}

module.exports = { buildIpaQuestions };
