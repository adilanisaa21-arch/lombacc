// Topik 1: Peta, Kenampakan Alam & Bentang Alam Indonesia
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Gambaran permukaan bumi pada suatu bidang datar dengan menggunakan skala tertentu dinamakan ...",
    "Peta",
    "Globe",
    "Denah",
    "Atlas",
    "Peta adalah gambaran sebagian atau seluruh permukaan bumi pada bidang datar dengan skala tertentu."
  ],
  [
    "Kumpulan peta-peta yang dibukukan secara rapi dan sistematis disebut ...",
    "Atlas",
    "Globe",
    "Katalog",
    "Ensiklopedia",
    "Atlas berisi kumpulan peta wilayah kabupaten, provinsi, negara, hingga benua."
  ],
  [
    "Tiruan bola bumi bulat dalam bentuk tiga dimensi yang menggambarkan bentuk bumi sebenarnya disebut ...",
    "Globe",
    "Atlas",
    "Peta timbul",
    "Prisma",
    "Globe dapat diputar pada porosnya untuk mempelajari rotasi bumi dan letak samudra/benua."
  ],
  [
    "Bagian pada peta yang menunjukkan arah mata angin (seperti arah Utara, Timur, Selatan, Barat) disebut ...",
    "Orientasi atau Petunjuk Arah",
    "Skala peta",
    "Legenda",
    "Garis tepi",
    "Petunjuk arah mata angin biasanya disimbolkan dengan tanda panah menunjuk arah Utara (U)."
  ],
  [
    "Komponen peta yang berfungsi menjelaskan arti dari simbol-simbol yang terdapat pada bidang peta dinamakan ...",
    "Legenda",
    "Judul peta",
    "Inset",
    "Indeks",
    "Legenda memuat keterangan simbol seperti jalan raya, rel kereta, ibu kota, dan sungai."
  ],
  [
    "Simbol warna hijau pada peta kenampakan alam biasanya menggambarkan wilayah bentang alam ...",
    "Dataran rendah",
    "Pegunungan tinggi",
    "Lautan dalam",
    "Gurun pasir",
    "Warna hijau melambangkan dataran rendah yang subur dengan ketinggian 0 - 200 meter di atas permukaan laut."
  ],
  [
    "Simbol warna biru pada peta kenampakan alam digunakan untuk menunjukkan wilayah ...",
    "Perairan (sungai, danau, laut)",
    "Dataran tinggi",
    "Hutan lindung",
    "Kawasan industri",
    "Gradasi warna biru muda menunjukkan perairan dangkal, sedangkan biru tua menunjukkan laut dalam."
  ],
  [
    "Simbol warna cokelat pada peta kenampakan alam menggambarkan bentang alam ...",
    "Pegunungan atau dataran tinggi",
    "Lembah sungai",
    "Padang rumput",
    "Rawa-rawa",
    "Warna cokelat tua menunjukkan bentang alam pegunungan tinggi atau puncak gunung."
  ],
  [
    "Simbol gambar segitiga berwarna merah pada peta geografis melambangkan ...",
    "Gunung berapi aktif",
    "Gunung mati atau tidak aktif",
    "Puncak bukit kapur",
    "Menara suar pantai",
    "Segitiga merah menandakan gunung api yang masih aktif mengeluarkan asap/lahar, sedangkan segitiga hitam untuk gunung mati."
  ],
  [
    "Bagian daratan yang berbatasan langsung dengan perairan laut dinamakan ...",
    "Pantai",
    "Lembah",
    "Tanjung",
    "Delta",
    "Wilayah pantai banyak dimanfaatkan masyarakat untuk tempat pelelangan ikan, pariwisata, dan tambak garam."
  ],
  [
    "Daratan yang memiliki ketinggian antara 0 sampai 200 meter di atas permukaan laut dinamakan ...",
    "Dataran rendah",
    "Dataran tinggi",
    "Pegunungan",
    "Plato",
    "Dataran rendah umumnya berhawa hangat dan cocok untuk area persawahan padi, permukiman, dan pusat kota."
  ],
  [
    "Daratan luas yang berada pada ketinggian lebih dari 500 meter di atas permukaan laut dengan udara yang sejuk dinamakan ...",
    "Dataran tinggi",
    "Dataran rendah",
    "Pesisir pantai",
    "Lembah pantai",
    "Dataran tinggi sangat cocok untuk perkebunan teh, kopi, stroberi, dan sayur-mayur."
  ],
  [
    "Aliran air alami berukuran besar yang mengalir memanjang dari daerah hulu pegunungan menuju muara di laut disebut ...",
    "Sungai",
    "Danau",
    "Rawa",
    "Selat",
    "Air sungai mengalir dari tempat yang tinggi ke tempat yang lebih rendah."
  ],
  [
    "Genangan air tawar yang sangat luas di daratan dan dikelilingi oleh daratan di sekitarnya dinamakan ...",
    "Danau",
    "Laut",
    "Selat",
    "Teluk",
    "Contoh danau alami di Indonesia antara lain Danau Toba di Sumatera Utara dan Danau Singkarak di Sumatera Barat."
  ],
  [
    "Laut sempit yang menghubungkan dua pulau yang berdekatan dinamakan ...",
    "Selat",
    "Teluk",
    "Tanjung",
    "Muara",
    "Contoh selat di Indonesia adalah Selat Sunda (antara Jawa dan Sumatera) dan Selat Bali."
  ],
  [
    "Bagian perairan laut yang menjorok masuk ke arah daratan dinamakan ...",
    "Teluk",
    "Tanjung",
    "Delta",
    "Palung",
    "Contoh teluk di Indonesia adalah Teluk Jakarta, Teluk Lampung, dan Teluk Tomini."
  ],
  [
    "Bagian daratan yang menjorok keluar ke arah laut dinamakan ...",
    "Tanjung atau Ujung",
    "Teluk",
    "Danau",
    "Ngarai",
    "Tanjung yang sangat luas sering disebut sebagai semenanjung."
  ],
  [
    "Endapan lumpur dan pasir yang terbentuk di muara sungai akibat pertemuan arus air sungai dengan laut disebut ...",
    "Delta",
    "Lembah",
    "Ngarai",
    "Bukit pasir",
    "Contohnya adalah Delta Sungai Mahakam di Kalimantan Timur yang kaya hutan mangrove dan tambak udang."
  ],
  [
    "Cara bertani di lahan miring pegunungan dengan membuat undakan atau terasering bertingkat bertujuan untuk ...",
    "Mencegah terjadinya erosi tanah dan longsor",
    "Mempercepat air hujan mengalir ke sungai",
    "Membuat tanaman menjadi lebih cepat besar",
    "Menghemat penggunaan bibit tanaman",
    "Terasering atau sengkedan memperlambat aliran air hujan di lereng bukit sehingga tanah tidak tergerus longsor."
  ],
  [
    "Penanaman kembali pohon-pohon di kawasan hutan yang telah gundul dinamakan ...",
    "Reboisasi",
    "Irigasi",
    "Evolusi",
    "Urbanisasi",
    "Reboisasi mengembalikan fungsi hutan sebagai daerah resapan air dan paru-paru bumi."
  ]
];
const sedang = [
  [
    "Perbandingan antara jarak yang tertera pada peta dengan jarak sebenarnya di permukaan bumi disebut ...",
    "Skala peta",
    "Garis bujur",
    "Garis lintang",
    "Legenda peta",
    "Contoh skala 1 : 100.000 artinya 1 cm pada peta mewakili 100.000 cm (1 km) pada jarak sesungguhnya."
  ],
  [
    "Jika jarak Kota A ke Kota B pada peta adalah 4 cm dan skala peta adalah 1 : 250.000, maka jarak sesungguhnya antara kedua kota tersebut adalah ...",
    "10 kilometer",
    "4 kilometer",
    "25 kilometer",
    "100 kilometer",
    "Jarak sebenarnya = 4 cm × 250.000 = 1.000.000 cm = 10 km."
  ],
  [
    "Peta kecil tambahan yang diletakkan di sudut atau tepi peta utama untuk memperjelas letak wilayah yang dipetakan disebut ...",
    "Inset peta",
    "Indeks peta",
    "Garis astronomis",
    "Simbol peta",
    "Inset membantu pembaca mengetahui posisi wilayah relatif terhadap pulau atau negara yang lebih luas."
  ],
  [
    "Garis khayal melintang pada peta dan globe yang sejajar dengan garis khatulistiwa disebut garis ...",
    "Lintang",
    "Bujur",
    "Meridian",
    "Kontur",
    "Garis lintang membagi bumi menjadi belahan bumi utara dan belahan bumi selatan."
  ],
  [
    "Garis khayal membujur pada peta yang menghubungkan kutub utara dan kutub selatan bumi disebut garis ...",
    "Bujur atau Meridian",
    "Lintang",
    "Ekuator",
    "Khatulistiwa",
    "Garis bujur digunakan untuk menentukan pembagian zona waktu di berbagai belahan dunia."
  ],
  [
    "Kenampakan alam pegunungan vulkanik di Indonesia memiliki dampak positif bagi sektor pertanian di sekitarnya karena ...",
    "Abu vulkanik hasil letusan gunung api menyuburkan tanah pertanian",
    "Gunung berapi mencegah terjadinya hujan lebat",
    "Lahar gunung berapi dapat membunuh semua hama tanaman seketika",
    "Suhu di dekat kawah gunung membuat buah matang lebih cepat",
    "Pelapukan abu dan batuan vulkanik menghasilkan tanah andosol yang sangat kaya unsur hara mineral."
  ],
  [
    "Kawasan hutan bakau (mangrove) yang tumbuh di sepanjang garis pantai berlumpur memiliki fungsi alami penting yaitu ...",
    "Mencegah abrasi atau pengikisan pantai oleh hantaman gelombang air laut",
    "Mengubah air laut menjadi air tawar yang bisa langsung diminum",
    "Menghilangkan badai angin di tengah samudra luas",
    "Menjadi tempat berteduh bagi kapal pesiar besar",
    "Akar tunjang mangrove menahan sedimen lumpur pantai dan meredam energi gelombang pasang."
  ],
  [
    "Danau alami yang terbentuk akibat letusan gunung berapi dahsyat yang menyisakan kawah cekungan besar berisi air dinamakan danau ...",
    "Vulkanik",
    "Tektonik",
    "Karst",
    "Buatan",
    "Contoh danau vulkanik adalah Danau Kalimutu di NTT dan Danau Maninjau di Sumatera Barat."
  ],
  [
    "Danau alami yang terbentuk akibat pergeseran atau patahan lempeng kerak bumi dinamakan danau ...",
    "Tektonik",
    "Vulkanik",
    "Gletser",
    "Laguna",
    "Contoh danau tektonik di Indonesia adalah Danau Poso, Danau Towuti, dan Danau Matano di Sulawesi."
  ],
  [
    "Danau Toba di Sumatera Utara tergolong danau istimewa karena terbentuk dari kombinasi letusan gunung api dan pergeseran lempeng bumi yang disebut danau ...",
    "Vulkano-tektonik",
    "Karst kapur",
    "Gletser es",
    "Oxbow lake",
    "Letusan supervolcano Toba puluhan ribu tahun lalu disertai amblasnya lantai kaldera membentuk danau raksasa."
  ],
  [
    "Kenampakan bentang alam berupa lembah yang sangat dalam dan berdinding curam sempit peninggalan patahan geologi seperti Ngarai Sianok terdapat di provinsi ...",
    "Sumatera Barat",
    "Jawa Tengah",
    "Kalimantan Barat",
    "Sulawesi Utara",
    "Ngarai Sianok di Bukittinggi menyajikan pemandangan tebing curam indah yang menjadi ikon wisata Sumbar."
  ],
  [
    "Sungai-sungai di Pulau Kalimantan umumnya berukuran sangat panjang, lebar, dan berarus tenang di dataran rendah sehingga masyarakat memanfaatkannya sebagai ...",
    "Jalur transportasi kapal antar-pedalaman dan pasar terapung",
    "Tempat bermain ski air dan selancar ombak",
    "Lokasi pembangkit listrik tenaga angin",
    "Arena pacuan kuda tradisional",
    "Sungai Kapuas, Barito, dan Mahakam sejak dahulu menjadi urat nadi perhubungan utama warga pedalaman Kalimantan."
  ],
  [
    "Sungai-sungai di Pulau Jawa dan Sumatera yang memiliki jeram berarus deras di lereng pegunungan banyak dimanfaatkan pemerintah untuk ...",
    "Pembangkit Listrik Tenaga Air (PLTA) dan irigasi persawahan",
    "Peternakan ikan paus dan lumba-lumba laut",
    "Penambangan minyak bumi lepas pantai",
    "Jalur pelayaran kapal pesiar internasional",
    "Arus deras sungai dibendung menjadi waduk (seperti Waduk Jatiluhur dan Cirata) untuk memutar turbin listrik."
  ],
  [
    "Kenampakan alam pegunungan kapur yang memiliki banyak gua bawah tanah, sungai bawah tanah, dan batu stalaktit dinamakan kawasan ...",
    "Karst",
    "Aluvial",
    "Gambut",
    "Vulkanik",
    "Contoh kawasan karst di Indonesia adalah Pegunungan Sewu di Gunungkidul Yogyakarta hingga Pacitan Jawa Timur."
  ],
  [
    "Dataran Tinggi Dieng yang terletak di Provinsi Jawa Tengah terkenal memiliki kenampakan alam unik berupa ...",
    "Kawah belerang panas, telaga warna, dan candi peninggalan sejarah",
    "Gurun pasir putih terluas di Asia",
    "Pantai berpasir hitam dengan ombak tsunami",
    "Hutan cemara bersalju tebal sepanjang tahun",
    "Dieng berada pada ketinggian 2.000 mdpl dengan udara dingin dan kawah vulkanik Sikidang yang mengeluarkan uap."
  ],
  [
    "Penduduk yang bermukim di daerah pesisir pantai sebagian besar bekerja pada mata pencaharian ...",
    "Nelayan, petani tambak garam, dan pemandu wisata pantai",
    "Petani sayur kol dan pemetik daun teh",
    "Penambang batu bara bawah tanah",
    "Peternak sapi perah pegunungan",
    "Kondisi geografis pantai menyediakan kekayaan sumber daya ikan laut, tambak garam, dan potensi wisata bahari."
  ],
  [
    "Masyarakat yang tinggal di daerah dataran tinggi pedesaan umumnya mengandalkan mata pencaharian di sektor ...",
    "Perkebunan sayuran, buah-buahan, tanaman teh, dan kopi",
    "Pembuatan garam laut dan budidaya rumput laut",
    "Industri galangan kapal pesiar",
    "Penangkapan ikan cumi dan tongkol di laut",
    "Suhu yang sejuk dan tanah vulkanik subur di dataran tinggi sangat cocok bagi budidaya hortikultura."
  ],
  [
    "Masyarakat yang mendiami kawasan dataran rendah perkotaan cenderung bekerja pada mata pencaharian di bidang ...",
    "Pekerja industri pabrik, pegawai perkantoran, dan perdagangan jasa",
    "Petani teh dan kopi dataran tinggi",
    "Penyelam mutiara laut dalam",
    "Penebang pohon kayu jati tradisional",
    "Dataran rendah memudahkan pembangunan infrastruktur jalan, perumahan, kawasan industri, dan perkantoran modern."
  ],
  [
    "Danau buatan berukuran raksasa yang dibuat manusia dengan cara membendung aliran air sungai dinamakan ...",
    "Waduk atau Bendungan",
    "Rawa gambut",
    "Muara sungai",
    "Teluk pesisir",
    "Contoh waduk di Indonesia antara lain Waduk Gajah Mungkur, Waduk Karangkates, dan Waduk Jatiluhur."
  ],
  [
    "Manfaat ganda dari pembangunan waduk (bendungan) air bagi kehidupan masyarakat sekitar adalah ...",
    "Menyediakan pasokan air irigasi sawah sepanjang musim, mencegah bahaya banjir, dan sumber energi PLTA",
    "Menghilangkan semua air hujan di musim kemarau",
    "Membuat semua ikan sungai pindah ke samudra",
    "Mencegah terjadinya gempa bumi di daerah sekitar",
    "Waduk menampung kelebihan debit air saat musim hujan dan melepaskannya secara teratur untuk sawah dan turbin listrik."
  ],
  [
    "Hutan sabana berupa padang rumput luas yang diselingi sedikit pepohonan banyak dijumpai di kawasan kepulauan Indonesia bagian ...",
    "Nusa Tenggara (NTT dan NTB)",
    "Sumatera bagian barat",
    "Kalimantan bagian utara",
    "Bangka Belitung",
    "Curah hujan yang relatif rendah di Nusa Tenggara membentuk bentang alam sabana yang cocok untuk peternakan kuda dan sapi."
  ],
  [
    "Tanah gambut yang banyak ditemukan di kawasan rawa-rawa pesisir Sumatera dan Kalimantan terbentuk dari ...",
    "Akumulasi sisa-sisa tumbuhan dan dedaunan yang membusuk lambat di genangan air asam",
    "Abu letusan gunung berapi yang baru meletus",
    "Hancuran cangkang kerang laut di tepi pantai",
    "Lelehan batuan magma dari dalam inti bumi",
    "Lahan gambut basah menyimpan cadangan karbon raksasa dan menyerap air hujan seperti spons alami."
  ],
  [
    "Salah satu penyebab utama terjadinya bencana tanah longsor di kawasan perbukitan terjal adalah ...",
    "Penebangan hutan lindung secara liar dan alih fungsi lereng menjadi bangunan tanpa terasering",
    "Pemasangan tiang bendera di halaman rumah warga",
    "Penanaman bibit pohon beringin di hutan lindung",
    "Pemberian pupuk kompos pada tanaman bunga pekarangan",
    "Akar pohon berfungsi mengikat butiran tanah; jika pohon ditebang, tanah lereng mudah jenuh air hujan lalu ambrol meluncur."
  ],
  [
    "Upaya bijak yang dapat dilakukan siswa untuk menjaga kelestarian bentang alam sungai di sekitar lingkungan sekolah adalah ...",
    "Tidak membuang sampah plastik dan limbah ke dalam saluran air sungai",
    "Mengeringkan seluruh air sungai dengan pompa air besar",
    "Menimbun aliran sungai dengan batu dan semen",
    "Menangkap semua ikan di sungai dengan obat racun kimia",
    "Menjaga kebersihan sungai mencegah pendangkalan, pencemaran air, dan luapan banjir saat hujan deras."
  ],
  [
    "Rawa air tawar di pedalaman seringkali memiliki ciri khas berupa ...",
    "Genangan air tenang yang dipenuhi vegetasi tumbuhan air seperti eceng gondok dan teratai",
    "Airnya memiliki rasa asin pekat seperti air samudra",
    "Dikelilingi oleh pohon kurma dan kaktus gurun",
    "Dasarnya tersusun dari batuan marmer putih mengkilap",
    "Rawa air tawar menjadi habitat penting bagi berbagai jenis burung air, ikan rawa, dan katak."
  ],
  [
    "Pegunungan Jayawijaya di Provinsi Papua merupakan kenampakan alam yang sangat unik di wilayah ekuator tropis karena ...",
    "Memiliki puncak tertinggi (Puncak Jaya) yang diselimuti tutupan salju es abadi",
    "Memiliki kawah gunung berapi terpanas di dunia",
    "Tidak pernah terkena sinar matahari siang hari",
    "Seluruh batuannya terbuat dari batangan emas murni",
    "Ketinggian Puncak Jaya mencapai 4.884 meter dpl di mana suhu udara sangat dingin memungkinkan terbentuknya gletser tropis."
  ],
  [
    "Kenampakan alam buatan yang dibuat manusia untuk menghubungkan dua daratan yang terpisah oleh sungai atau selat adalah ...",
    "Jembatan (seperti Jembatan Suramadu dan Jembatan Ampera)",
    "Kanal irigasi sawah",
    "Pelabuhan kontainer",
    "Stasiun kereta api",
    "Jembatan Suramadu menghubungkan Pulau Jawa dan Madura melintasi Selat Madura memperlancar roda transportasi."
  ],
  [
    "Pelabuhan Tanjung Priok di Jakarta dan Pelabuhan Tanjung Perak di Surabaya merupakan contoh kenampakan buatan yang berfungsi sebagai ...",
    "Pintu gerbang transportasi dan perdagangan kapal laut antarpulau dan mancanegara",
    "Tempat latihan terjun payung militer",
    "Pabrik perakitan pesawat terbang supersonik",
    "Tempat pembibitan tanaman padi hibrida",
    "Pelabuhan laut menyediakan dermaga kapal kargo, terminal peti kemas, dan layanan bongkar muat barang niaga."
  ],
  [
    "Bandar udara internasional seperti Soekarno-Hatta di Banten dan I Gusti Ngurah Rai di Bali dibangun di dataran rendah yang luas dengan tujuan ...",
    "Menyediakan landasan pacu pesawat yang datar, panjang, dan bebas dari rintangan bukit tinggi",
    "Menghindari tiupan angin agar pesawat tidak terbang",
    "Memudahkan pesawat mendarat di atas perairan danau",
    "Mencegah suara pesawat terdengar oleh penumpang",
    "Topografi dataran rendah memberikan ruang aman bagi manuver lepas landas dan pendaratan pesawat udara."
  ],
  [
    "Garis kontur pada peta topografi pegunungan adalah garis khayal yang menghubungkan ...",
    "Tempat-tempat yang memiliki ketinggian yang sama di atas permukaan laut",
    "Kota-kota yang memiliki jumlah penduduk yang sama",
    "Sungai-sungai yang memiliki kedalaman yang sama",
    "Jalan raya yang dibangun pada tahun yang sama",
    "Semakin rapat jarak antar-garis kontur, berarti lereng bentang alam tersebut semakin terjal curam."
  ],
  [
    "Daerah Aliran Sungai (DAS) bagian hilir yang mendekati muara laut biasanya ditandai dengan ciri fisik ...",
    "Arus air mengalir tenang dan berkelok-kelok (meander) membawa endapan lumpur halus",
    "Arus air berbusa deras dengan batu-batu kali raksasa tajam",
    "Banyak dijumpai air terjun bertingkat yang tinggi",
    "Suhu air membeku menjadi es balok",
    "Di daerah hilir, erosi menyamping mendominasi dan mengendapkan lumpur subur di dataran banjir pesisir."
  ],
  [
    "Kenampakan alam air terjun (curug) yang banyak ditemukan di kawasan hulu sungai pegunungan terbentuk akibat ...",
    "Patahan lapisan batuan sungai yang memiliki perbedaan kekerasan dan ketinggian terjal",
    "Manusia memompa air sungai naik ke atas pohon",
    "Air laut pasang yang meluap ke lereng bukit",
    "Letusan gunung berapi yang memuntahkan air tawar",
    "Air mengikis batuan lunak lebih cepat dibanding batuan keras membentuk tebing curam tempat air jatuh bebas."
  ],
  [
    "Tujuan utama pemerintah menetapkan kawasan hutan tertentu sebagai \"Taman Nasional\" atau \"Hutan Lindung\" adalah ...",
    "Melindungi keanekaragaman flora, fauna endemik, dan menjaga fungsi daerah resapan air bagi kehidupan",
    "Menebang seluruh pohon kayu untuk dijual ke luar negeri",
    "Membangun kawasan mal dan perumahan mewah di tengah hutan",
    "Mengusir seluruh satwa liar keluar dari kawasan rimba",
    "Taman nasional menjaga keseimbangan ekosistem alami dan mencegah ancaman kepunahan keanekaragaman hayati nusantara."
  ],
  [
    "Fenomena embun es atau embun upas yang sering menyelimuti tanaman kentang di Dataran Tinggi Dieng pada musim kemarau terjadi karena ...",
    "Suhu udara di permukaan tanah pada dini hari turun drastis mendekati atau di bawah 0 derajat Celsius",
    "Ada truk pembawa es batu yang terguling di kebun warga",
    "Angin badai salju bertiup dari benua Amerika",
    "Matahari tidak terbit di Dieng selama satu minggu",
    "Pelepasan radiasi panas bumi berlangsung cepat ke langit bersih tanpa awan di malam hari musim kemarau."
  ],
  [
    "Jalan raya di kawasan lereng pegunungan terjal sengaja dibangun berkelok-kelok menyerupai huruf S (seperti Kelok 9 di Sumbar) dengan tujuan ...",
    "Mengurangi kecuraman tanjakan lereng sehingga kendaraan bermotor lebih bertenaga dan aman mendaki",
    "Membuat jarak perjalanan menjadi sepuluh kali lebih jauh",
    "Menghalangi pemandangan indah jurang pegunungan",
    "Menyediakan tempat berhenti bagi pedagang asongan di setiap tikungan",
    "Jalan berkelok memanfaatkan prinsip bidang miring untuk memperkecil gaya kuasa yang dibutuhkan mesin kendaraan."
  ],
  [
    "Salah satu upaya konservasi tanah pada lahan pertanian berlereng miring selain terasering adalah \"penanaman tanaman penutup tanah\" (cover crops) yang berfungsi ...",
    "Menahan butiran tanah agar tidak mudah terlepas dan hanyut terbawa tetesan air hujan lebat",
    "Membuat tanah menjadi keras seperti semen beton",
    "Menghentikan proses fotosintesis rumput liar",
    "Menarik kawanan ulat pemakan daun datang ke kebun",
    "Daun dan akar tanaman penutup meredam energi kinetik air hujan dan memperbaiki porositas struktur tanah."
  ],
  [
    "Selat Malaka yang memisahkan Pulau Sumatera dengan Semenanjung Malaysia memiliki kedudukan bentang alam perairan yang sangat strategis di dunia karena ...",
    "Merupakan salah satu jalur pelayaran niaga kapal internasional tersibuk yang menghubungkan Samudra Hindia dan Pasifik",
    "Merupakan selat terpanjang yang tidak memiliki air laut",
    "Menjadi satu-satunya tempat hidup ikan paus biru di dunia",
    "Tidak boleh dilewati oleh kapal dagang mancanegara",
    "Posisi geostrategis Selat Malaka menjadikan kawasan maritim kepulauan Indonesia sebagai persimpangan lalu lintas niaga dunia."
  ],
  [
    "Wilayah perairan laut dangkal di bagian barat Indonesia yang dahulunya pernah menyatu dengan benua Asia pada zaman es dinamakan ...",
    "Paparan Sunda (Sunda Shelf)",
    "Paparan Sahul",
    "Palung Mariana",
    "Zona Wallacea",
    "Paparan Sunda mencakup Laut Jawa, Selat Malaka, dan Laut Natuna dengan kedalaman rata-rata kurang dari 200 meter."
  ],
  [
    "Wilayah perairan laut dangkal di bagian timur Indonesia yang menyatukan Pulau Papua dengan benua Australia pada zaman es dinamakan ...",
    "Paparan Sahul (Sahul Shelf)",
    "Paparan Sunda",
    "Palung Sunda",
    "Selat Makassar",
    "Paparan Sahul menyebabkan kesamaan jenis flora dan fauna di Papua dengan fauna benua Australia (fauna Australis)."
  ],
  [
    "Lubang kepundan atau kawah gunung api yang sudah mati dan terisi oleh air hujan dalam jangka waktu puluhan tahun dinamakan danau ...",
    "Kawah (Kaldera)",
    "Laguna pantai",
    "Waduk serbaguna",
    "Empang ikan",
    "Air danau kawah seringkali mengandung mineral belerang alami dan memiliki warna air yang indah kehijauan atau kebiruan."
  ]
];
const sulit = [
  [
    "Pada peta berskala 1 : 50.000, jarak lurus antara puncak Gunung Merbabu ke pos pengamatan adalah 6 cm. Berdasarkan perhitungan skala peta, jarak sebenarnya di alam adalah ...",
    "3 kilometer",
    "6 kilometer",
    "30 kilometer",
    "300 meter",
    "Jarak sebenarnya = 6 cm × 50.000 = 300.000 cm = 3.000 m = 3 km."
  ],
  [
    "Simbol garis ganda tebal berselang-seling hitam dan putih pada peta umum biasanya digunakan kartografer untuk menandai kenampakan ...",
    "Jalur rel kereta api",
    "Batas provinsi resmi",
    "Sungai utama yang lebar",
    "Pipa gas alam bawah tanah",
    "Simbol rel kereta api distandarisasi berupa garis batang mirip bantalan rel hitam-putih."
  ],
  [
    "Berdasarkan letak lintangnya, wilayah Indonesia dilalui oleh garis lintang 0 derajat yang melintasi Kota Pontianak Kalimantan Barat dan beberapa daerah lainnya yang dinamakan garis ...",
    "Khatulistiwa atau Ekuator",
    "Meridian Nol",
    "Bujur Greenwich",
    "Balik Utara",
    "Garis khatulistiwa membagi bumi menjadi dua belahan sama besar dan memberikan iklim tropis basah bagi Indonesia."
  ],
  [
    "Perbedaan karakteristik hidrologis antara sungai di wilayah Nusa Tenggara (sungai periodik/episodik) dengan sungai di Pulau Kalimantan (sungai permanen) adalah ...",
    "Sungai di Nusa Tenggara debit airnya melimpah saat musim hujan namun mengering di musim kemarau, sedangkan sungai di Kalimantan berair besar sepanjang tahun",
    "Sungai di Nusa Tenggara airnya berupa air mendidih, sedangkan di Kalimantan berupa es dingin",
    "Sungai di Kalimantan tidak pernah bermuara ke lautan lepas",
    "Sungai di Nusa Tenggara hanya mengalir pada malam hari",
    "Iklim kering dengan musim kemarau panjang di Nusa Tenggara membuat aliran sungai episodik sangat bergantung pada presipitasi hujan."
  ],
  [
    "Kenampakan bentang alam \"Terasering Padi Jatiluwih\" di Kabupaten Tabanan Bali telah diakui UNESCO sebagai Warisan Budaya Dunia karena memadukan ...",
    "Keindahan lereng sawah bertingkat dengan kearifan lokal sistem tata kelola pembagian air irigasi adat Subak",
    "Bangunan gedung pencakar langit dengan pantai pasir putih",
    "Pabrik penggilingan padi modern bertenaga nuklir",
    "Perlombaan balap mobil traktor di lereng gunung",
    "Jatiluwih merupakan mahakarya lanskap agraris yang mencerminkan filosofi keselarasan Tri Hita Karana antara manusia, alam, dan Sang Pencipta."
  ],
  [
    "Kawasan perairan Teluk Kiluan di Lampung dan Teluk Lovina di Buleleng Bali sangat diminati wisatawan karena menyajikan fenomena atraksi kenampakan alam berupa ...",
    "Kawanan lumba-lumba liar yang muncul berenang dan melompat bebas di permukaan air laut saat pagi hari",
    "Gunung es raksasa yang mengapung di dekat pantai",
    "Air laut yang menyala terang benderang seperti lampu neon setiap malam",
    "Air terjun air tawar yang jatuh dari langit langsung ke kapal nelayan",
    "Kondisi perairan teluk yang tenang dan kaya ikan kecil menjadi habitat makan favorit lumba-lumba hidung botol dan lumba-lumba paruh panjang."
  ],
  [
    "Perbedaan bentang alam utama antara pantai di pesisir utara Pulau Jawa (Pantura) dengan pantai di pesisir selatan Pulau Jawa adalah ...",
    "Pantai utara umumnya landai berlumpur dengan ombak tenang Laut Jawa, sedangkan pantai selatan berbatasan langsung dengan Samudra Hindia berombak besar dan bertebing karang terjal",
    "Pantai utara dipenuhi salju tebal, sedangkan pantai selatan berupa padang pasir gersang",
    "Pantai utara tidak memiliki air laut sama sekali",
    "Pantai selatan memiliki air laut berasa manis buah-buahan",
    "Dinamika oseanografi perairan tertutup Laut Jawa menghasilkan morfologi pantai deposisional tenang, sedangkan gelombang swell terbuka Samudra Hindia membentuk tebing abrasi tebal."
  ],
  [
    "Kenampakan alam pegunungan api aktif bawah laut yang terkenal di Selat Sunda dan pernah meletus dahsyat pada tahun 1883 adalah Gunung ...",
    "Krakatau (Anak Krakatau)",
    "Tambora",
    "Gamalama",
    "Kelimutu",
    "Letusan dahsyat Krakatau tahun 1883 memicu gelombang tsunami raksasa dan abu vulkanik yang melingkari atmosfer bumi selama bertahun-tahun."
  ],
  [
    "Kenampakan bentang alam \"Gili\" (seperti Gili Trawangan, Gili Meno, dan Gili Air) di wilayah Lombok Utara Nusa Tenggara Barat secara geografis merupakan ...",
    "Pulau-pulau karang kecil nan indah berpasir putih yang bebas dari kendaraan bermotor bermesin",
    "Gunung berapi tinggi yang selalu meletus setiap hari",
    "Danau air asin di puncak bukit kapur tandus",
    "Sungai buatan manusia untuk memelihara ikan lele",
    "Kata \"Gili\" dalam bahasa suku Sasak berarti pulau kecil; kawasan ini mengandalkan kereta kuda cidomo dan sepeda untuk menjaga kemurnian udara."
  ],
  [
    "Proses sedimentasi lumpur yang terus menumpuk di muara Sungai Solo (Bengawan Solo) di Ujung Pangkah Gresik Jawa Timur menghasilkan bentang alam baru berupa ...",
    "Tanah delta aluvial yang semakin bertambah menjorok maju ke arah lautan setiap tahunnya",
    "Pegunungan batu kapur yang menjulang menembus awan",
    "Danau air panas yang tidak pernah mengalir ke laut",
    "Palung laut terdalam di planet bumi",
    "Delta Bengawan Solo terbentuk dari pengendapan jutaan ton lumpur erosi yang terbawa aliran sungai terpanjang di Pulau Jawa."
  ],
  [
    "Kenampakan alam tebing batu kapur yang membentuk ngarai sempit dengan aliran sungai jernih kehijauan di Ciamis Jawa Barat dijuluki wisatawan sebagai ...",
    "Green Canyon (Cukang Taneuh)",
    "Grand Canyon Amerika",
    "Ngarai Sianok",
    "Lembah Anai",
    "Cukang Taneuh berarti jembatan tanah; ngarai ini menyajikan stalaktit gua kapur yang meneteskan air ke aliran Sungai Cijulang."
  ],
  [
    "Kawasan \"Danau Tiga Warna\" di puncak Gunung Kelimutu Flores NTT memiliki keunikan alam spektakuler yang diakui dunia karena ...",
    "Warna air di ketiga danau kawah tersebut dapat berubah-ubah secara periodik dari merah, biru muda, hingga hijau tua pekat akibat reaksi mineral belerang dan gas vulkanik",
    "Air danau tersebut dapat berubah menjadi es batu manis di siang hari",
    "Danau dihuni oleh ikan paus terbang berkepala elang",
    "Di dasar danau terdapat kota kuno yang masih dihuni manusia",
    "Perubahan kadar kelarutan senyawa gas belerang hidrogen sulfida dan besi dalam air kawah memicu pergeseran spektrum warna air secara alami."
  ],
  [
    "Fenomena \"Gua Jomblang\" di Kabupaten Gunungkidul Yogyakarta merupakan kenampakan alam karst unik berupa gua vertikal yang terbentuk akibat ...",
    "Amblasnya tanah runtuh (sinkhole) ke dalam rongga bawah tanah membentuk sumur raksasa dengan hutan purba di dasarnya",
    "Galian tambang emas ilegal peninggalan zaman VOC",
    "Letusan bom perang dunia kedua",
    "Meteor luar angkasa yang menabrak bukit",
    "Runtuhnya atap gua karst (dolina runtuh) menciptakan poros cahaya \"Cahaya Surga\" alami saat sinar matahari menembus dasar gua pada siang hari."
  ],
  [
    "Bentang alam \"Rawa Pening\" di Kabupaten Semarang Jawa Tengah memiliki fungsi ekologis dan ekonomis krusial bagi daerah sekitarnya, yaitu ...",
    "Sebagai penampung air alami pengendali banjir, sumber perikanan tawar, dan sumber pembangkit listrik tenaga air PLTA Jelok",
    "Sebagai pelabuhan kapal selam angkatan laut internasional",
    "Sebagai lokasi penambangan bijih besi raksasa",
    "Sebagai tempat pembuangan limbah kimia pabrik tekstil",
    "Rawa Pening menampung air dari puluhan sungai lereng Gunung Merbabu dan mengalirkan air ke Sungai Tuntang untuk menggerakkan turbin PLTA."
  ],
  [
    "Kenampakan alam bentang pasir luas yang membentang di kaki Gunung Bromo Jawa Timur dinamakan ...",
    "Laut Pasir Berbisik (Segara Wedhi)",
    "Gurun Pasir Sahara",
    "Bukit Teletubbies",
    "Lembah Kematian",
    "Lautan pasir Bromo seluas sekitar 5.300 hektar terbentuk dari akumulasi semburan material piroklastik pasir halus letusan kaldera purba Tengger."
  ],
  [
    "Gumuk Pasir Parangkusumo di pesisir Kabupaten Bantul Yogyakarta merupakan kenampakan bentang alam langka di Asia Tenggara karena ...",
    "Merupakan fenomena bukit pasir pantai bertiup angin (coastal dunes) di wilayah iklim tropis basah",
    "Merupakan gurun salju es yang sangat dingin",
    "Pasirnya terbuat dari serpihan emas murni",
    "Terbentuk dari gundukan semen pabrik",
    "Pasir erupsi Gunung Merapi terbawa aliran Sungai Opak dan Progo ke laut, lalu terdorong ombak pantai selatan dan ditiup angin tenggara membentuk gundukan gumuk pasir."
  ],
  [
    "Pembangunan terusan atau kanal buatan seperti Kanal Banjir Barat dan Kanal Banjir Timur (KBT) di Provinsi DKI Jakarta dirancang khusus untuk ...",
    "Mengalirkan luapan air banjir dari hulu sungai langsung menuju ke Laut Jawa tanpa membanjiri pusat permukiman kota",
    "Menjadi tempat balap perahu layar cepat internasional",
    "Mengeringkan seluruh sumur air milik penduduk Jakarta",
    "Menyediakan air asin untuk kolam renang warga",
    "Kanal banjir memotong aliran sungai-sungai utama Jakarta agar beban debit air bah dapat dibuang cepat ke laut lepas."
  ],
  [
    "Kenampakan alam \"Lembah Harau\" di Kabupaten Lima Puluh Kota Sumatera Barat sangat dikagumi karena diapit oleh ...",
    "Tebing-tebing granit terjal tegak lurus berwarna-warni setinggi ratusan meter yang dilengkapi beberapa air terjun alami",
    "Gedung-gedung kaca pencakar langit modern",
    "Rawa gambut berlumpur hitam yang berbau belerang",
    "Gundukan sampah industri yang membeku",
    "Tebing granit Lembah Harau merupakan peninggalan endapan purba berusia jutaan tahun yang menjadi surga panjat tebing kelas dunia."
  ],
  [
    "Dataran tinggi \"Alas Purwo\" di ujung timur Pulau Jawa yang memiliki bentang alam hutan tertua dan pantai berombak raksasa Plengkung (G-Land) sangat terkenal di dunia bagi olahraga ...",
    "Selancar ombak air laut (surfing)",
    "Ski es di salju kutub",
    "Pacuan unta padang pasir",
    "Perlombaan mobil balap jalanan",
    "Ombak G-Land di Taman Nasional Alas Purwo Banyuwangi memiliki gulungan ombak tabung bertingkat tujuh yang masuk jajaran ombak terbaik dunia."
  ],
  [
    "Penggunaan simbol peta berupa garis kontur berbentuk lingkaran kecil berurutan dengan angka ketinggian yang semakin membesar ke arah dalam menandakan bentuk muka bumi berupa ...",
    "Puncak bukit atau gunung yang meninggi",
    "Cekungan danau yang sangat dalam",
    "Jalur lembah sungai yang datar",
    "Hamparan garis pantai laut landai",
    "Nilai angka ketinggian (misal 500 m, 600 m, 700 m) yang bertambah ke pusat lingkaran menunjukkan elevasi relief bukit yang mengerucut naik."
  ]
];
const hots = [
  [
    "Sebuah desa di lereng perbukitan terjal sering mengalami musibah longsor kecil saat musim hujan lebat. Sebagian warga desa memiliki kebiasaan menebangi pepohonan di lereng bukit untuk membuka kebun jagung tanpa membuat sengkedan (terasering). Solusi paling tepat dan berkelanjutan yang dapat diterapkan warga desa untuk mencegah bencana longsor sekaligus tetap bisa bertani adalah ...",
    "Membuat terasering bertingkat di lereng kebun, menanami bibit pohon berakar dalam (seperti pohon aren atau bambu) di batas lereng sebagai penahan tanah, serta mengalirkan air hujan melalui parit teratur agar tanah tidak jenuh air",
    "Menebangi seluruh sisa pohon yang ada agar tanah lereng menjadi bersih dan terang",
    "Menutup seluruh permukaan bukit dengan terpal plastik warna-warni",
    "Mengungsi selamanya dan melarang siapa pun mengunjungi lereng bukit",
    "Konservasi tanah mekanik (terasering) dan vegetatif (tanaman pengikat) memperkuat kestabilan agregat tanah lereng dan mencegah longsor."
  ],
  [
    "Di sebuah wilayah pesisir pantai nelayan, pohon-pohon bakau (mangrove) di garis pantai banyak yang ditebang untuk dijadikan tambak ikan secara besar-besaran. Beberapa tahun kemudian, warga mendapati air sumur di desa mereka berubah menjadi payau (asin) dan garis pantai terkikis mundur puluhan meter mendekati rumah warga. Analisis hubungan sebab-akibat dari peristiwa tersebut adalah ...",
    "Hilangnya hutan mangrove menyebabkan hilangnya benteng penahan ombak alami sehingga terjadi abrasi pantai, serta memicu masuknya air laut ke dalam lapisan air tanah tawar (intrusi air laut)",
    "Penebangan bakau membuat ikan paus di laut meminum seluruh air sumur warga",
    "Air sumur menjadi asin karena garam dapur tumpah di jalan desa",
    "Abrasi pantai terjadi karena nelayan membuat perahu terlalu banyak",
    "Akar mangrove berfungsi sebagai sabuk hijau (coastal green belt) penahan abrasi dan penyaring intrusi air laut ke akuifer tawar pesisir."
  ],
  [
    "Dua kelompok petani memiliki lahan sawah: Kelompok Tani Subur mengolah sawah di kawasan dataran rendah dekat muara sungai, sedangkan Kelompok Tani Makmur mengolah sawah di lereng dataran tinggi pegunungan. Keunggulan dan tantangan yang dihadapi oleh Kelompok Tani Makmur di lereng pegunungan dibanding petani dataran rendah adalah ...",
    "Keunggulannya memiliki sumber mata air alami yang jernih dan udara sejuk yang cocok untuk sayur-mayur bernilai tinggi; namun tantangannya lereng tanah miring rawan erosi sehingga wajib membuat terasering dan sulit menggunakan mesin traktor besar",
    "Keunggulannya tanahnya terbuat dari pasir pantai, tantangannya tidak ada sinar matahari",
    "Keunggulannya padi bisa panen setiap hari tanpa perlu ditanam",
    "Kelompok Tani Makmur tidak pernah membutuhkan air untuk tanaman padinya",
    "Faktor topografi kemiringan lereng menentukan teknologi mekanisasi pertanian dan strategi manajemen risiko limpasan air."
  ],
  [
    "Sungai Citarum di Jawa Barat melintasi kawasan pegunungan di hulu hingga kawasan permukiman dan pabrik di hilir. Saat musim hujan tiba, kawasan hilir seringkali dilanda banjir luapan sungai yang parah. Berdasarkan analisis geografis, mengapa upaya pengerukan lumpur di hilir sungai saja tidak akan mampu menuntaskan masalah banjir jika kawasan hutan di hulu pegunungan terus gundul?",
    "Karena kawasan hulu hutan adalah daerah resapan air hujan; jika hutan hulu rusak, air hujan tidak terserap ke dalam tanah melainkan langsung meluncur deras ke sungai membawa lumpur erosi sehingga debit air di hilir tetap akan meluap melampaui kapasitas sungai",
    "Karena air sungai selalu mengalir dari hilir menuju ke puncak gunung",
    "Karena pengerukan lumpur membuat air sungai menguap menjadi awan hitam",
    "Karena hujan lebat hanya terjadi di kawasan pabrik perkotaan saja",
    "Konsep Pengelolaan Daerah Aliran Sungai (DAS) Terpadu: pelestarian tutupan vegetasi di daerah tangkapan hulu menentukan beban hidrologis di hilir."
  ],
  [
    "Ketika membaca peta rute evakuasi bencana tsunami di sekolah pantai, Budi melihat tanda panah hijau menuju ke arah kenampakan alam berketinggian di atas 20 meter yang berjarak 500 meter dari pantai. Mengapa dalam mitigasi bencana tsunami masyarakat diarahkan untuk segera berlari menjauhi pantai menuju ke bentang alam dataran tinggi atau bukit terdekat?",
    "Karena gelombang tsunami adalah gelombang laut berenergi raksasa yang menyapu dataran rendah pesisir; menuju ke tempat yang lebih tinggi menghindarkan manusia dari jangkauan terjangan air bah tsunami",
    "Karena di atas bukit banyak terdapat kapal penyelamat yang menunggu",
    "Karena air tsunami takut pada pohon-pohon yang tumbuh di atas bukit",
    "Karena di bukit udaranya sangat dingin sehingga air tsunami langsung membeku",
    "Prinsip mitigasi evakuasi mandiri bencana tsunami: \"Jauhi pantai, lari ke tempat tinggi (run to high ground)\" sebelum gelombang pertama tiba."
  ],
  [
    "Sebuah kota metropolitan di dataran rendah pesisir sering mengalami banjir rob (luapan air laut saat pasang). Selain karena pasang air laut, para ahli tata kota menemukan faktor lain yaitu terjadinya penurunan muka tanah (land subsidence) di kota tersebut. Faktor kegiatan manusia yang paling memicu terjadinya penurunan tanah di dataran rendah perkotaan adalah ...",
    "Pengambilan air tanah dalam secara berlebihan menggunakan sumur bor pompa oleh gedung-gedung dan warga akibat belum meratanya jaringan pipa air bersih PAM",
    "Banyaknya warga yang berolahraga lari pagi di jalan raya",
    "Pemasangan paving block di halaman rumah warga kota",
    "Penggunaan kompor gas untuk memasak makanan sehari-hari",
    "Penyedotan akuifer air tanah dalam mengosongkan pori-pori tanah sehingga lapisan lempung tertekan dan memicu pemadatan tanah secara bertahap."
  ],
  [
    "Masyarakat suku Tengger yang bermukim di lereng terjal Gunung Bromo memiliki kearifan tradisional dalam mengolah lahan kebun sayur mereka. Mereka menanam rumput penahan dan deretan pohon cemara gunung di batas-batas petak ladang miring mereka. Manfaat ekologis dari kearifan lokal penanaman pepohonan di batas ladang terjal tersebut adalah ...",
    "Akar pohon cemara dan rumput mengikat partikel tanah vulkanik gembur agar tidak longsor tergerus angin kencang dan air hujan, serta menjadi pemecah angin (windbreak) perusak tanaman kentang",
    "Membuat tanaman kentang berubah menjadi buah apel",
    "Mengusir semua burung agar tidak terbang di atas kebun",
    "Menghilangkan kabut asap letusan kawah Bromo seketika",
    "Sistem agroforestri tradisional menciptakan sabuk pelindung alami (shelterbelt) menjaga kesuburan lapisan topsoil dari erosi angin dan air."
  ],
  [
    "Danau Singkarak di Sumatera Barat airnya dimanfaatkan untuk menggerakkan turbin Pembangkit Listrik Tenaga Air (PLTA) Singkarak yang disalurkan melalui terowongan menembus Bukit Barisan menuju Samudra Hindia. Analisis pentingnya menjaga kelestarian hutan di sekitar tangkapan air Danau Singkarak bagi keberlangsungan listrik masyarakat adalah ...",
    "Jika hutan di sekeliling danau gundul, debit air danau akan menyusut drastis di musim kemarau dan sedimentasi lumpur akan mendangkalkan danau sehingga turbin PLTA kekurangan air pemutar generator listrik",
    "Hutan lindung berfungsi menyalakan lampu listrik secara langsung",
    "Pohon-pohon di hutan mengeluarkan kabel listrik bawah tanah",
    "Air danau akan berubah menjadi minyak goreng jika pohon ditebang",
    "Keseimbangan hidrologis danau penyangga PLTA bertumpu pada hutan lindung sebagai penyimpan air hujan alami yang menjaga kestabilan debit air tahunan."
  ],
  [
    "Dalam suatu peta tematik potensi pertanian, terlihat wilayah Kabupaten Brebes di pesisir dataran rendah pantai utara Jawa Tengah diberi warna khusus penghasil bawang merah, sedangkan wilayah Kabupaten Temanggung di dataran tinggi pegunungan diberi warna penghasil tembakau dan kopi. Mengapa jenis tanaman pertanian yang dibudidayakan masyarakat sangat bergantung pada kondisi bentang alam daerahnya?",
    "Karena setiap jenis tanaman memerlukan suhu udara, kelembapan, ketersediaan air, dan ketinggian tempat (elevasi) tertentu yang sesuai agar dapat tumbuh subur dan berproduksi optimal",
    "Karena tanaman di dataran tinggi tidak membutuhkan pupuk dan air",
    "Karena petani di dataran rendah dilarang membeli benih kopi oleh pemerintah",
    "Karena tanah di dataran rendah tidak dapat ditanami tanaman apa pun selain padi",
    "Zonasi iklim dan ketinggian tempat (Junghuhn) menentukan kecocokan agroklimatologi jenis tanaman budidaya pangan dan perkebunan."
  ],
  [
    "Pembangunan jalan tol lintas pulau seperti Jalan Tol Trans-Sumatera melewati berbagai variasi bentang alam: rawa gambut datar di Riau, perbukitan terjal di Lampung, dan tanah lempung lunak di Palembang. Mengapa para insinyur konstruksi harus menggunakan teknik fondasi paku bumi dan jembatan layang (viaduk) saat melintasi rawa gambut dan lembah sungai?",
    "Karena tanah rawa gambut sangat labil, berair, dan mudah amblas jika dibebani jalan biasa; fondasi paku bumi dan tiang pancang mencapai lapisan tanah keras di dasar rawa agar jalan tol kokoh dan tidak runtuh",
    "Agar jalan tol bisa melayang terbang di atas awan",
    "Karena rawa gambut dihuni oleh dinosaurus raksasa",
    "Untuk menghemat semen dan batu kerikil konstruksi",
    "Prinsip rekayasa geoteknik: tanah lunak dan gambut berdaya dukung rendah memerlukan perkuatan cerucuk matras atau jembatan pilar tiang pancang."
  ],
  [
    "Kawasan bentang alam perairan Selat Bali yang sempit memisahkan Pulau Jawa (Ketapang) dan Pulau Bali (Gilimanuk). Karena tingginya arus penumpang dan barang, sering muncul wacana pembangunan jembatan Selat Bali, namun masyarakat adat Bali lebih memilih mempertahankan kapal feri penyeberangan. Salah satu pertimbangan sosio-kultural dan kearifan lokal penolakan pembangunan jembatan darat tersebut adalah ...",
    "Menjaga kesucian spiritual Pulau Dewata berdasarkan ajaran leluhur agar daratan Pulau Bali tidak tersambung langsung secara fisik bebas dengan daratan luar sehingga kemurnian adat dan keamanan pulau tetap terfilter",
    "Karena di Selat Bali tidak ada air laut yang bisa dilompati jembatan",
    "Karena kapal feri di Selat Bali terbuat dari emas murni",
    "Karena masyarakat Bali tidak suka dengan keberadaan kendaraan mobil",
    "Kearifan lokal memandang batas laut selat sebagai batas sakral penyaring pengaruh negatif dan menjaga keseimbangan kosmologis pulau."
  ],
  [
    "Di kawasan perkotaan yang padat bangunan beton di dataran rendah, lahan terbuka hijau resapan air semakin sempit. Saat hujan deras turun selama dua jam saja, jalanan kota langsung tergenang banjir setinggi lutut (banjir cileuncang). Solusi ramah lingkungan berbasis partisipasi warga yang dapat dibuat di halaman rumah sempit untuk membantu meresapkan air hujan ke dalam tanah adalah ...",
    "Membuat lubang biopori dan sumur resapan air hujan di pekarangan rumah",
    "Mengecor seluruh halaman rumah dengan semen beton tebal",
    "Membuang air hujan dari talang atap langsung ke jalan raya",
    "Menyiram pekarangan dengan minyak tanah agar licin",
    "Lubang resapan biopori mempercepat peresapan air ke tanah dengan bantuan aktivitas cacing tanah dan menambah cadangan air sumur dangkal."
  ],
  [
    "Masyarakat di kawasan pesisir pantai pulau kecil yang terisolasi seringkali menghadapi kendala ketersediaan air tawar untuk minum karena air tanah mereka terasa payau. Pemanfaatan teknologi sederhana berwawasan bentang alam pesisir yang dapat diterapkan masyarakat untuk memperoleh air tawar bersih adalah ...",
    "Membuat instalasi penampung air hujan (PAH) higienis serta alat desalinasi penyulingan air laut bertenaga panas matahari sederhana",
    "Meminum air laut langsung dari pantai tanpa dimasak",
    "Membeli es batu dari luar angkasa dengan roket",
    "Menggali lubang sumur sedalam pusat bumi",
    "Pemanenan air hujan (rainwater harvesting) dan destilasi surya memanfaatkan kelimpahan sinar matahari pesisir tropis untuk mengubah air laut menjadi air tawar murni."
  ],
  [
    "Kawasan Dataran Tinggi Gayo di Aceh berada pada ketinggian 1.200 meter dpl dan terkenal sebagai penghasil Kopi Arabika Gayo terbaik di dunia. Berdasarkan ilmu geografi bentang alam, faktor alam apa yang membuat Kopi Arabika tumbuh sangat harum dan manis di Dataran Tinggi Gayo?",
    "Kombinasi tanah vulkanik yang kaya hara, udara pegunungan yang sejuk stabil, dan curah hujan cukup memperlambat pematangan buah kopi sehingga biji kopi menghasilkan aroma dan cita rasa kompleks",
    "Kopi disiram dengan air gula tebu setiap pagi hari",
    "Pohon kopi Gayo ditanam di dalam ruangan berpendingin AC",
    "Kopi Gayo dipanen menggunakan pesawat helikopter",
    "Ketinggian di atas 1.000 mdpl merangsang akumulasi senyawa gula dan asam organik alami pada biji kopi arabika berkualitas tinggi."
  ],
  [
    "Di pesisir Pantai Parangtritis dan Samudra Hindia selatan Jawa sering terjadi fenomena berbahaya bagi wisatawan yang berenang yaitu \"Arus Rip\" (Rip Current / arus seret balik). Pemahaman bentang alam pesisir mengenai tanda-tanda arus rip yang mematikan tersebut adalah ...",
    "Permukaan air laut yang tampak tenang tanpa pecahan ombak di antara deretan ombak besar sebenarnya merupakan arus air sangat kuat yang bergerak cepat menyedot ke arah tengah laut lepas",
    "Air laut di pantai tiba-tiba berubah menjadi es beku seketika",
    "Ada monster laut yang menarik kaki perenang ke dasar pasir",
    "Air laut menyembur setinggi ratusan meter seperti geiser",
    "Arus seret balik terbentuk dari akumulasi air ombak yang mencari jalan kembali ke laut melalui celah sempit dasar pantai dengan kecepatan hingga 8 km/jam."
  ],
  [
    "Kawasan \"Lembah Baliem\" di Pegunungan Jayawijaya Papua dikelilingi oleh bentang alam pegunungan terjal dan dahulu sangat terisolasi dari dunia luar. Mengapa sebelum adanya jalur penerbangan pesawat perintis dan jalan Trans-Papua, perdagangan masyarakat suku Dani di pedalaman Lembah Baliem mengandalkan sistem barter jalan setapak?",
    "Karena kondisi bentang alam pegunungan terjal yang ekstrem membatasi akses jalur transportasi darat roda empat, sehingga barang-barang garam dan kapak batu harus dipikul berjalan kaki melintasi punggung gunung berhari-hari",
    "Karena masyarakat Dani dilarang oleh dewa mengendarai mobil",
    "Karena di Lembah Baliem tidak ada daratan tanah untuk berjalan",
    "Karena semua orang di Papua bisa terbang di udara",
    "Isolasi geografis fisik pegunungan memicu adaptasi ekonomi barter lokal dan menuntut moda transportasi udara perintis untuk membuka keterisolasian daerah 3T."
  ],
  [
    "Penebangan liar pohon di kawasan hulu bentang alam Daerah Aliran Sungai (DAS) dapat menimbulkan bencana berantai bagi masyarakat pesisir di hilir muara sungai, berupa ...",
    "Erosi tanah hulu memicu sedimentasi lumpur tebal yang mendangkalkan alur sungai hilir sehingga perahu nelayan kandas, terumbu karang tertutup lumpur mati, dan muara mudah meluap memicu banjir bandang",
    "Ikan di laut berubah menjadi burung camar yang terbang",
    "Air laut di pantai berubah menjadi batu granit keras",
    "Air sungai di hilir berhenti mengalir dan berubah arah naik ke gunung",
    "Degradasi lanskap hulu berdampak hilir (upstream-downstream linkages): beban suspended solids merusak estuari, mematikan karang, dan memperparah sedimentasi pelabuhan."
  ],
  [
    "Waduk Jatiluhur di Kabupaten Purwakarta Jawa Barat membendung aliran Sungai Citarum dan membentuk genangan air seluas 8.300 hektar. Jika terjadi musim kemarau ekstrem yang sangat panjang di pulau Jawa, dampak berantai terhadap sektor energi dan pangan yang dialami ibu kota Jakarta dan sekitarnya adalah ...",
    "Produksi listrik PLTA berkurang karena penurunan elevasi muka air waduk, dan debit pasokan air baku air bersih PDAM serta air irigasi persawahan padi di Karawang dan Bekasi ikut terancam merosot",
    "Matahari di Jawa Barat akan padam total",
    "Seluruh ikan di waduk berubah menjadi hewan darat",
    "Jakarta akan dilanda badai salju kutub",
    "Interkoneksi bendungan serbaguna: penurunan volume tampung waduk (water storage deficit) menekan keandalan pembangkit listrik hidro dan ketahanan pangan agraris."
  ],
  [
    "Pemerintah membangun \"Kanal Banjir Barat\" dan memodifikasi aliran Sungai Ciliwung dengan membuat sodetan (terowongan bawah tanah) Ciliwung menuju Kanal Banjir Timur (KBT). Mengapa pembuatan sodetan sungai bawah tanah ini sangat efektif mengurangi ancaman banjir di pusat kota Jakarta?",
    "Sodetan membagi dan mengalihkan sebagian debit air bah sungai saat puncak banjir di hulu langsung ke kanal pembuangan timur sehingga volume air yang melintasi sungai tengah kota tidak meluap melampaui tanggul",
    "Sodetan menyedot seluruh air laut masuk ke dalam tanah kota",
    "Terowongan sodetan digunakan warga sebagai jalan tol sepeda motor saat banjir",
    "Sodetan membuat hujan di Jakarta berhenti turun",
    "Diversi hidrolika debit puncak (peak flow diversion) mereduksi beban debit banjir kala ulang di saluran utama perkotaan secara signifikan."
  ],
  [
    "Mengapa letak geografis kepulauan Indonesia yang diapit oleh Benua Asia dan Benua Australia serta Samudra Hindia dan Samudra Pasifik (posisi silang dunia) disebut sebagai \"anugerah bentang alam yang luar biasa sekaligus tantangan besar bagi bangsa Indonesia\"?",
    "Anugerahnya adalah tanah yang subur, kekayaan hayati melimpah, dan menjadi pusat jalur perdagangan dunia; namun tantangannya berada di cincin api rawan bencana alam serta rentan terhadap ancaman penyelundupan dan pencurian sumber daya maritim lintas batas",
    "Karena Indonesia memiliki emas batangan yang terapung di atas air laut",
    "Karena kepulauan Indonesia bisa berpindah tempat ke kutub utara setiap sepuluh tahun",
    "Karena semua negara lain di dunia dilarang melintasi wilayah laut Indonesia",
    "Posisi silang nusantara membawa dividen geoekonomi perdagangan maritim global sekaligus beban kerentanan geologis seismik dan pengamanan kedaulatan kepulauan."
  ]
];

module.exports = {
  name: 'Peta, Kenampakan Alam & Bentang Alam Indonesia',
  mudah,
  sedang,
  sulit,
  hots
};
