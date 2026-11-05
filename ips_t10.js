// Topik 10: Kegiatan Ekonomi, Koperasi & Peran Indonesia di ASEAN
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Kegiatan menghasilkan barang atau menambah nilai guna suatu barang untuk memenuhi kebutuhan hidup manusia disebut kegiatan ...",
    "Produksi",
    "Konsumsi",
    "Distribusi",
    "Investasi",
    "Orang atau badan usaha yang melakukan kegiatan produksi disebut produsen."
  ],
  [
    "Kegiatan menyalurkan barang dan jasa dari produsen ke tangan konsumen dinamakan kegiatan ...",
    "Distribusi",
    "Produksi",
    "Konsumsi",
    "Asimilasi",
    "Pihak yang menyalurkan barang dari produsen kepada konsumen disebut distributor."
  ],
  [
    "Kegiatan memakai, menghabiskan, atau mengurangi nilai guna barang dan jasa demi mencukupi kebutuhan sehari-hari disebut kegiatan ...",
    "Konsumsi",
    "Produksi",
    "Distribusi",
    "Ekspor",
    "Konsumen adalah pemakai atau pengguna barang dan jasa akhir."
  ],
  [
    "Bentuk badan usaha di Indonesia yang berasaskan kekeluargaan dan bertujuan untuk menyejahterakan para anggotanya sesuai Pasal 33 ayat 1 UUD 1945 adalah ...",
    "Koperasi",
    "Perseroan Terbatas (PT)",
    "Firma",
    "Persekutuan Komanditer (CV)",
    "Koperasi didirikan oleh sekelompok orang atau badan hukum koperasi dengan prinsip kesetaraan anggota."
  ],
  [
    "Tokoh proklamator Indonesia yang berjasa besar dalam merintis dan mengembangkan koperasi sehingga dijuluki \"Bapak Koperasi Indonesia\" adalah ...",
    "Drs. Mohammad Hatta",
    "Ir. Soekarno",
    "Sutan Sjahrir",
    "Ki Hajar Dewantara",
    "Bung Hatta sangat gigih memperjuangkan ekonomi kerakyatan berbasis koperasi sebagai antitesis kapitalisme kolonial."
  ],
  [
    "Hari Koperasi Nasional di Indonesia diperingati setiap tanggal ...",
    "12 Juli",
    "17 Agustus",
    "2 Mei",
    "10 November",
    "Peringatan Hari Koperasi merujuk pada Kongres Koperasi Pertama yang diselenggarakan di Tasikmalaya pada 12 Juli 1947."
  ],
  [
    "Sisa pendapatan koperasi yang diperoleh dalam satu tahun buku setelah dikurangi penyusutan dan biaya operasional yang dibagikan kepada anggota disebut ...",
    "Sisa Hasil Usaha (SHU)",
    "Dividen saham",
    "Bunga obligasi",
    "Laba kotor",
    "Pembagian SHU kepada anggota didasarkan secara adil pada besarnya jasa usaha dan modal masing-masing anggota."
  ],
  [
    "Simpanan awal yang wajib dibayarkan oleh seseorang saat pertama kali resmi mendaftar menjadi anggota koperasi dan tidak dapat diambil selama menjadi anggota dinamakan ...",
    "Simpanan Pokok",
    "Simpanan Wajib",
    "Simpanan Sukarela",
    "Simpanan Berjangka",
    "Simpanan pokok memiliki nominal jumlah uang yang sama rata bagi seluruh anggota koperasi."
  ],
  [
    "Organisasi perhimpunan bangsa-bangsa di kawasan Asia Tenggara yang didirikan pada tanggal 8 Agustus 1967 adalah ...",
    "ASEAN",
    "PBB",
    "APEC",
    "GNB",
    "ASEAN merupakan singkatan dari Association of Southeast Asian Nations."
  ],
  [
    "Deklarasi bersejarah yang ditandatangani oleh lima menteri luar negeri pendiri ASEAN pada tanggal 8 Agustus 1967 berlangsung di Kota ...",
    "Bangkok, Thailand",
    "Jakarta, Indonesia",
    "Kuala Lumpur, Malaysia",
    "Manila, Filipina",
    "Deklarasi tersebut dikenal luas dengan sebutan Deklarasi Bangkok 1967."
  ],
  [
    "Tokoh menteri luar negeri yang menandatangani Deklarasi Bangkok mewakili Negara Kesatuan Republik Indonesia adalah ...",
    "Adam Malik",
    "Soedharmono",
    "Ali Alatas",
    "Mochtar Kusumaatmadja",
    "Adam Malik saat itu menjabat sebagai Menteri Luar Negeri Republik Indonesia di bawah Presidium Kabinet Ampera."
  ],
  [
    "Tokoh wakil perdana menteri yang mewakili negara Malaysia dalam penandatanganan berdirinya organisasi ASEAN adalah ...",
    "Tun Abdul Razak",
    "Tunku Abdul Rahman",
    "Mahathir Mohamad",
    "Lee Kuan Yew",
    "Tun Abdul Razak kelak menjadi Perdana Menteri kedua Malaysia."
  ],
  [
    "Tokoh menteri luar negeri yang mewakili negara Filipina dalam mendirikan ASEAN adalah ...",
    "Narciso Ramos",
    "Ferdinand Marcos",
    "Corazon Aquino",
    "Ramon Magsaysay",
    "Narciso Ramos turut membubuhkan tanda tangannya di gedung Departemen Luar Negeri Thailand di Bangkok."
  ],
  [
    "Tokoh menteri luar negeri yang mewakili Republik Singapura dalam pertemuan pembentukan ASEAN adalah ...",
    "S. Rajaratnam",
    "Lee Kuan Yew",
    "Goh Chok Tong",
    "Tony Tan",
    "Sinnathamby Rajaratnam adalah diplomat ulung dan salah satu bapak pendiri negara Singapura."
  ],
  [
    "Tokoh menteri luar negeri tuan rumah negara Thailand yang memprakarsai pertemuan pembentukan organisasi ASEAN adalah ...",
    "Thanat Khoman",
    "Prajadhipok",
    "Chulalongkorn",
    "Thaksin Shinawatra",
    "Thanat Khoman bertindak sebagai tuan rumah perundingan Deklarasi Bangkok di kediamannya."
  ],
  [
    "Gedung Sekretariat Utama (Sekretariat Jenderal) ASEAN secara permanen berkedudukan di kota ...",
    "Jakarta, Indonesia",
    "Singapura",
    "Bangkok, Thailand",
    "Manila, Filipina",
    "Gedung Sekretariat ASEAN terletak di Jalan Sisingamangaraja, Kebayoran Baru, Jakarta Selatan."
  ],
  [
    "Lambang resmi organisasi ASEAN menampilkan seikat batang tanaman pangan pokok yang berjumlah sepuluh batang, yaitu tanaman ...",
    "Padi",
    "Gandum",
    "Jagung",
    "Tebu",
    "Sepuluh batang padi terikat melambangkan impian sepuluh negara Asia Tenggara yang bersatu dalam solidaritas persahabatan."
  ],
  [
    "Warna kuning pada ikatan sepuluh batang padi dalam lambang resmi ASEAN mengandung makna simbolis ...",
    "Kemakmuran",
    "Kedamaian",
    "Keberanian",
    "Kesucian",
    "Warna biru melambangkan perdamaian/kemantapan, merah keberanian/dinamika, dan putih kesucian."
  ],
  [
    "Negara keenam yang resmi bergabung menjadi anggota baru organisasi ASEAN pada tanggal 7 Januari 1984 adalah ...",
    "Brunei Darussalam",
    "Vietnam",
    "Kamboja",
    "Laos",
    "Brunei Darussalam bergabung dengan ASEAN satu minggu setelah memperoleh kemerdekaan penuh dari Inggris."
  ],
  [
    "Negara di kawasan Asia Tenggara yang sampai saat ini secara historis tidak pernah mengalami penjajahan oleh bangsa barat/Eropa adalah ...",
    "Thailand",
    "Filipina",
    "Vietnam",
    "Myanmar",
    "Thailand (dahulu Kerajaan Siam) mampu mempertahankan kedaulatannya dengan menjadi zona penyangga (buffer state) Inggris-Prancis."
  ]
];

const sedang = [
  [
    "Perusahaan yang seluruh atau sebagian besar modal kepemilikannya dimiliki langsung oleh Negara Republik Indonesia disebut ...",
    "BUMN (Badan Usaha Milik Negara)",
    "BUMS Swasta",
    "Koperasi Unit Desa",
    "Firma Perorangan",
    "BUMN bertugas mengelola sektor strategis yang menguasai hajat hidup orang banyak sesuai Pasal 33 UUD 1945."
  ],
  [
    "Bentuk BUMN yang seluruh modalnya dimiliki negara dan berorientasi utama melayani kepentingan kemanfaatan umum masyarakat luas (public service) tanpa semata-mata mencari laba disebut ...",
    "Perum (Perusahaan Umum)",
    "Persero",
    "Koperasi",
    "Persekutuan Komanditer",
    "Contoh Perum antara lain Perum DAMRI (angkutan jalan) dan Perum Bulog (logistik beras pangan)."
  ],
  [
    "Bentuk BUMN yang modalnya terbagi dalam bentuk saham (minimal 51 persen saham dimiliki negara) dan berorientasi mengejar keuntungan komersial profesional adalah ...",
    "Persero (Perseroan Terbatas Negara)",
    "Perum Pelayanan",
    "Yayasan Sosial",
    "Firma Dagang",
    "Contoh Persero antara lain PT Kereta Api Indonesia (KAI), PT Pertamina, PT PLN, dan PT Telkom Indonesia."
  ],
  [
    "Bentuk badan usaha swasta yang didirikan oleh dua orang atau lebih dengan menggunakan satu nama bersama dan setiap sekutunya bertanggung jawab penuh tanpa batas terhadap seluruh utang piutang perusahaan disebut ...",
    "Firma (Fa)",
    "Perusahaan Perseorangan",
    "Yayasan Komersial",
    "Koperasi Simpan Pinjam",
    "Jika firma mengalami pailit bangkrut, kekayaan pribadi para pendirinya dapat disita untuk melunasi utang."
  ],
  [
    "Badan usaha persekutuan swasta di mana ada sekutu aktif (pengelola modal dan manajemen) dan sekutu pasif (hanya menanamkan modal dana tanpa ikut mengelola operasional) dinamakan ...",
    "Persekutuan Komanditer (CV)",
    "Firma",
    "Perseroan Terbatas",
    "Perum",
    "Sekutu pasif hanya bertanggung jawab sebesar modal yang disetorkannya ke dalam persekutuan."
  ],
  [
    "Bentuk badan usaha berbadan hukum resmi yang modalnya dikumpulkan dari penjualan lembar-lembar saham kepemilikan dan tanggung jawab pemegang saham terbatas pada saham yang disetor disebut ...",
    "Perseroan Terbatas (PT)",
    "Firma Bersama",
    "Usaha Dagang Perorangan",
    "Kongsi Dagang",
    "Pemegang saham berhak memperoleh bagian keuntungan laba perusahaan dalam bentuk dividen."
  ],
  [
    "Simpanan berkala yang wajib disetorkan oleh setiap anggota koperasi dalam jangka waktu tertentu (misalnya sebulan sekali) dengan jumlah nominal yang sama dinamakan ...",
    "Simpanan Wajib",
    "Simpanan Pokok",
    "Simpanan Sukarela",
    "Simpanan Deposito",
    "Simpanan wajib tidak dapat diambil kembali selama pemiliknya masih berstatus sebagai anggota koperasi."
  ],
  [
    "Simpanan yang disetorkan oleh anggota koperasi atas kehendak kemauan sendiri secara bebas dan nominalnya dapat diambil kapan saja sesuai ketentuan dinamakan ...",
    "Simpanan Sukarela",
    "Simpanan Pokok",
    "Simpanan Wajib",
    "Simpanan Wajib Khusus",
    "Simpanan sukarela berfungsi layaknya tabungan pribadi anggota di koperasi simpan pinjam."
  ],
  [
    "Koperasi yang beroperasi di wilayah perdesaan yang melayani penyediaan pupuk, bibit unggul, traktor pertanian, serta menampung hasil panen petani dinamakan ...",
    "Koperasi Unit Desa (KUD)",
    "Koperasi Konsumsi Kota",
    "Koperasi Pegawai Republik Indonesia",
    "Koperasi Industri Pengrajin",
    "KUD menjadi pilar utama swasembada beras nasional pada era pembangunan pedesaan."
  ],
  [
    "Koperasi yang beranggotakan para pegawai negeri sipil di kementerian atau kantor instansi dinas pemerintahan dinamakan ...",
    "KPRI (Koperasi Pegawai Republik Indonesia)",
    "KUD",
    "Kopontren",
    "Puskud",
    "KPRI memfasilitasi kebutuhan simpan pinjam kredit lunak dan pengadaan sembako bagi aparatur sipil negara."
  ],
  [
    "Perangkat tertinggi dalam tata kelola organisasi koperasi yang memegang kekuasaan menetapkan anggaran dasar dan memilih pengurus serta pengawas adalah ...",
    "Rapat Anggota Tahunan (RAT)",
    "Ketua Umum Koperasi",
    "Dewan Pengawas Keuangan",
    "Manajer Operasional",
    "Setiap anggota koperasi memiliki hak satu suara (one man one vote) yang setara tanpa memandang besarnya modal tabungan."
  ],
  [
    "Simbol rantai pada lambang Koperasi Indonesia klasik melambangkan nilai filosofis ...",
    "Persahabatan dan ikatan persatuan kekeluargaan yang kokoh antarsesama anggota",
    "Kemakmuran pangan dan sandang",
    "Keadilan sosial bagi seluruh anggota",
    "Kerja keras pantang menyerah",
    "Mata rantai yang saling mengait mencerminkan asas tolong-menolong gotong royong ekonomi kerakyatan."
  ],
  [
    "Simbol timbangan pada lambang Koperasi Indonesia mengandung makna filosofis yaitu ...",
    "Keadilan sosial bagi seluruh anggota koperasi",
    "Keberanian menghadapi persaingan pasar global",
    "Kekayaan materi berlimpah",
    "Kekuatan fisik dalam bekerja",
    "Koperasi menempatkan keadilan distributif sebagai landasan utama pembagian sisa hasil usaha."
  ],
  [
    "Simbol pohon beringin pada lambang Koperasi Indonesia mengandung makna ...",
    "Sifat kemasyarakatan dan kepribadian Indonesia yang kokoh berakar menjadi tempat bernaung",
    "Kekayaan hutan tropis nusantara",
    "Keabadian usia manusia",
    "Kemampuan beradaptasi dengan perubahan cuaca",
    "Pohon beringin rindang melambangkan koperasi sebagai payung pelindung ekonomi masyarakat kecil."
  ],
  [
    "Negara anggota ASEAN yang masuk bergabung secara resmi pada tanggal 28 Juli 1995 setelah normalisasi hubungan diplomatik dengan negara-negara kawasan adalah ...",
    "Vietnam",
    "Laos",
    "Myanmar",
    "Kamboja",
    "Bergabungnya Vietnam menandai berakhirnya era konfrontasi Perang Dingin ideologi komunis di Indochina."
  ],
  [
    "Dua negara anggota ASEAN yang resmi bergabung bersamaan pada tanggal 23 Juli 1997 adalah negara ...",
    "Laos dan Myanmar",
    "Vietnam dan Kamboja",
    "Brunei dan Timor Leste",
    "Singapura dan Filipina",
    "Penerimaan Laos dan Myanmar memperluas cakupan wilayah daratan Asia Tenggara ke utara."
  ],
  [
    "Negara kesepuluh yang resmi bergabung menjadi anggota ASEAN pada tanggal 30 April 1999 setelah situasi stabilitas politik dalam negerinya membaik adalah ...",
    "Kamboja",
    "Timor Leste",
    "Papua Nugini",
    "Sri Lanka",
    "Dengan masuknya Kamboja, terwujudlah visi awal \"ASEAN-10\" yang menyatukan seluruh negara geografis Asia Tenggara."
  ],
  [
    "Negara di kawasan Asia Tenggara yang merupakan bekas koloni Portugis dan diterima secara prinsip sebagai anggota ke-11 ASEAN pada KTT Phnom Penh 2022 adalah ...",
    "Timor Leste",
    "Papua Nugini",
    "Kepulauan Solomon",
    "Fiji",
    "Timor Leste diberikan status pengamat (observer) dan diizinkan menghadiri seluruh pertemuan resmi ASEAN."
  ],
  [
    "Konferensi Tingkat Tinggi (KTT) ASEAN Pertama yang diselenggarakan pada tanggal 23-24 Februari 1976 berlangsung di kota ...",
    "Denpasar, Bali, Indonesia",
    "Kuala Lumpur, Malaysia",
    "Manila, Filipina",
    "Bangkok, Thailand",
    "KTT Bali I menghasilkan Deklarasi Kesepakatan ASEAN (ASEAN Concord I) dan Perjanjian Persahabatan TAC."
  ],
  [
    "Perjanjian persahabatan dan kerja sama regional yang disepakati pada KTT Bali I tahun 1976 untuk menolak penggunaan kekerasan antar-negara adalah ...",
    "Treaty of Amity and Cooperation (TAC)",
    "SEATO Pact",
    "Warsaw Pact",
    "NATO Agreement",
    "TAC mewajibkan seluruh negara anggota menyelesaikan perselisihan kawasan secara damai melalui jalan perundingan."
  ],
  [
    "Deklarasi kawasan damai, bebas, dan netral di Asia Tenggara yang ditandatangani di Kuala Lumpur pada 27 November 1971 dikenal dengan akronim ...",
    "ZOPFAN (Zone of Peace, Freedom and Neutrality)",
    "AFTA",
    "SEANWFZ",
    "ARF",
    "ZOPFAN bertujuan menjauhkan kawasan Asia Tenggara dari campur tangan intervensi persaingan kekuatan militer negara adidaya."
  ],
  [
    "Traktat kawasan bebas senjata nuklir di Asia Tenggara yang ditandatangani di Bangkok pada tahun 1995 dikenal dengan singkatan ...",
    "SEANWFZ (Southeast Asia Nuclear-Weapon-Free Zone)",
    "ZOPFAN",
    "SALT I",
    "NPT Global",
    "Traktat ini melarang keras pengembangan, penimbunan cadangan, pengujian, atau penempatan senjata nuklir di wilayah darat dan laut ASEAN."
  ],
  [
    "Pesta olahraga multicabang antar-negara se-Asia Tenggara yang diselenggarakan secara rutin setiap dua tahun sekali adalah ...",
    "SEA Games (Southeast Asian Games)",
    "Asian Games",
    "Olimpiade",
    "Piala AFF",
    "SEA Games mempererat rasa persaudaraan, solidaritas, dan pertukaran pemuda-atlet di seluruh penjuru Asia Tenggara."
  ],
  [
    "Pertemuan informal yang digagas dan dipimpin oleh Indonesia (Menteri Luar Negeri Ali Alatas) di Bogor dan Jakarta tahun 1988-1989 untuk mendamaikan faksi-faksi yang bertikai di Kamboja dinamakan ...",
    "Jakarta Informal Meeting (JIM)",
    "Konferensi Meja Bundar",
    "Perjanjian Renville",
    "KTT Non-Blok",
    "JIM berhasil membuka jalan perundingan damai komprehensif menuju Perjanjian Perdamaian Paris (Paris Peace Agreement) 1991."
  ],
  [
    "Peran diplomasi aktif Indonesia dalam membantu mendamaikan konflik pemberontakan bersenjata antara Pemerintah Filipina dengan kelompok pejuang muslim di Filipina Selatan melibatkan perundingan dengan ...",
    "Front Pembebasan Nasional Moro (MNLF)",
    "Pasukan Khmer Merah",
    "Tentara Viet Cong",
    "Gerakan Fretilin",
    "Pemerintah Indonesia di bawah Presiden Soeharto dan Menlu Ali Alatas menjadi fasilitator perjanjian damai final Jakarta 1996."
  ],
  [
    "Bentuk kontribusi militer Indonesia di bawah naungan Dewan Keamanan PBB untuk menjaga perdamaian di negara-negara konflik dunia dan kawasan dinamakan Pasukan ...",
    "Kontingen Garuda (Konga)",
    "Brimob Taktis",
    "Densus Damai",
    "Batalyon Raider Khusus",
    "Kontingen Garuda bertugas mengawal gencatan senjata di berbagai negara seperti Kamboja (UNTAC), Kongo, Lebanon, dan Timur Tengah."
  ],
  [
    "Proyek industri bersama negara-negara anggota ASEAN berupa pabrik pupuk urea kimia yang dibangun di Provinsi Aceh Indonesia adalah ...",
    "ASEAN Aceh Fertilizer (AAF)",
    "ASEAN Bintulu Fertilizer",
    "ASEAN Copper Fabrication",
    "ASEAN Vaccine Project",
    "Pabrik pupuk AAF dibangun di Lhokseumawe Aceh memasok kebutuhan pupuk nitrogen sektor pangan regional."
  ],
  [
    "Proyek industri bersama ASEAN berupa pabrik pupuk urea yang dibangun di kawasan Sarawak Malaysia adalah ...",
    "ASEAN Bintulu Fertilizer",
    "ASEAN Aceh Fertilizer",
    "Rock Salt Soda Ash Project",
    "Singapore Vaccine Project",
    "Pabrik ini memanfaatkan pasokan gas alam lepas pantai Sarawak untuk memproduksi urea dan amonia."
  ],
  [
    "Proyek industri patungan ASEAN berupa pabrik pengolahan abu soda dan garam batu (Rock Salt Soda Ash Project) disepakati dibangun di negara ...",
    "Thailand",
    "Filipina",
    "Singapura",
    "Brunei Darussalam",
    "Proyek ini memanfaatkan cadangan mineral garam batu melimpah di wilayah timur laut Thailand."
  ],
  [
    "Proyek kerja sama industri patungan ASEAN untuk memproduksi vaksin imunisasi pencegah penyakit menular ditempatkan di negara ...",
    "Singapura",
    "Malaysia",
    "Filipina",
    "Indonesia",
    "ASEAN Vaccine Project memanfaatkan keunggulan fasilitas riset teknologi biomedis farmasi canggih Singapura."
  ],
  [
    "Kawasan Perdagangan Bebas antar-negara anggota ASEAN yang dibentuk untuk menurunkan bea masuk tarif kepabeanan barang adalah ...",
    "AFTA (ASEAN Free Trade Area)",
    "APEC Forum",
    "NAFTA Hub",
    "OPEC Petroleum",
    "AFTA disepakati pada KTT ASEAN ke-4 di Singapura tahun 1992 melalui skema tarif CEPT (Common Effective Preferential Tariff)."
  ],
  [
    "Integrasi ekonomi kawasan Asia Tenggara yang mulai diberlakukan secara efektif sejak akhir tahun 2015 untuk menciptakan pasar tunggal dan basis produksi dinamakan ...",
    "Masyarakat Ekonomi ASEAN (MEA / AEC)",
    "Pasar Bebas Amerika",
    "Uni Moneter Eropa",
    "Zona Dolar Pasifik",
    "MEA mengintegrasikan aliran bebas arus barang impor-ekspor, modal investasi, jasa, dan tenaga kerja terampil."
  ],
  [
    "Negara anggota ASEAN yang secara geografis wilayah negaranya terkurung total oleh daratan benua dan tidak memiliki wilayah pesisir pantai laut (landlocked country) adalah ...",
    "Laos",
    "Kamboja",
    "Myanmar",
    "Vietnam",
    "Laos berbatasan darat dengan Tiongkok, Vietnam, Kamboja, Thailand, dan Myanmar tanpa akses langsung ke samudra."
  ],
  [
    "Negara anggota ASEAN yang mengandalkan Sungai Chao Phraya sebagai urat nadi pengairan sawah padi hingga dijuluki \"Lumbung Padi Asia Tenggara\" adalah ...",
    "Thailand",
    "Kamboja",
    "Filipina",
    "Malaysia",
    "Lembah aluvial Chao Phraya sangat subur dan menempatkan Thailand sebagai salah satu eksportir beras terbesar di dunia."
  ],
  [
    "Mata uang resmi negara anggota ASEAN Filipina adalah ...",
    "Peso Filipina",
    "Ringgit",
    "Baht",
    "Kip",
    "Simbol mata uang peso Filipina adalah tanda huruf P bergaris mendatar."
  ],
  [
    "Mata uang resmi yang digunakan oleh negara tetangga terdekat Indonesia di utara Pulau Kalimantan yaitu Malaysia adalah ...",
    "Ringgit Malaysia (MYR)",
    "Baht",
    "Dong",
    "Riel",
    "Ringgit Malaysia terbagi dalam satuan pecahan 100 sen."
  ],
  [
    "Mata uang resmi yang digunakan dalam aktivitas transaksi perekonomian di negara Thailand adalah ...",
    "Baht Thailand (THB)",
    "Kyat",
    "Dong",
    "Kip",
    "Mata uang Baht diterbitkan oleh Bank of Thailand (Bank Sentral Thailand)."
  ],
  [
    "Mata uang resmi negara anggota ASEAN Vietnam yang memiliki nilai nominal angka sangat besar adalah ...",
    "Dong Vietnam (VND)",
    "Riel",
    "Kyat",
    "Peso",
    "Mata uang Dong dicetak dan diedarkan oleh Bank Negara Vietnam."
  ],
  [
    "Danau air tawar alami terbesar di kawasan Asia Tenggara yang berada di negara Kamboja dan terhubung dengan aliran Sungai Mekong adalah Danau ...",
    "Tonle Sap",
    "Toba",
    "Songkhla",
    "Inle",
    "Danau Tonle Sap memiliki peran krusial bagi ketahanan pangan perikanan air tawar dan irigasi rakyat Kamboja."
  ],
  [
    "Tiga pilar utama dalam pembangunan Komunitas ASEAN (ASEAN Community) yang disepakati oleh seluruh kepala negara anggota mencakup ...",
    "Pilar Politik-Keamanan, Pilar Ekonomi, dan Pilar Sosial-Budaya",
    "Pilar Militer, Pilar Perbankan, dan Pilar Agrikultur",
    "Pilar Pertambangan, Pilar Perikanan, dan Pilar Dirgantara",
    "Pilar Pariwisata, Pilar Olahraga, dan Pilar Agama",
    "Ketiga pilar bekerja sinergis menuju cita-cita kawasan Asia Tenggara yang aman, makmur, dan berkeadilan sosial."
  ]
];

const sulit = [
  [
    "Dalam tata kelola koperasi, perbedaan paling mendasar antara pembagian keuntungan di Koperasi (Sisa Hasil Usaha / SHU) dengan pembagian dividen di Perseroan Terbatas (PT) adalah ...",
    "Di koperasi pembagian SHU dihitung secara proporsional berdasarkan jasa keaktifan transaksi dan simpanan anggota, sedangkan di PT dividen dibagikan murni hanya berdasarkan jumlah persentase lembar saham yang dimiliki",
    "Koperasi membagikan keuntungan kepada orang yang bukan anggota",
    "Di PT pemegang saham terbanyak tidak mendapatkan keuntungan",
    "Koperasi dilarang membagikan uang tunai kepada anggota",
    "Prinsip koperasi berorientasi pada kemanusiaan pemakai jasa (user-owner), bukan pada kekuatan akumulasi kapital finansial."
  ],
  [
    "Dalam struktur permodalan koperasi menurut Undang-Undang No. 25 Tahun 1992, sumber modal sendiri (ekuitas internal) koperasi terdiri atas ...",
    "Simpanan pokok, simpanan wajib, dana cadangan, dan hibah",
    "Simpanan sukarela dan pinjaman bank komersial",
    "Pinjaman dari koperasi lain dan penerbitan obligasi",
    "Bantuan modal asing tanpa bunga",
    "Modal sendiri tidak dapat ditarik kembali oleh pihak luar dan menjadi bantalan ketahanan likuiditas lembaga."
  ],
  [
    "Fungsi dana cadangan (reserve fund) yang disisihkan secara wajib dari Sisa Hasil Usaha (SHU) koperasi setiap akhir tahun buku adalah ...",
    "Untuk menambah modal kerja usaha koperasi dan menutup kerugian operasional yang mungkin dialami koperasi di masa depan",
    "Untuk dibagikan tunai kepada pengurus koperasi secara rahasia",
    "Untuk disetorkan sebagai pajak hibah ke kas negara",
    "Untuk membeli mobil pribadi milik manajer koperasi",
    "Dana cadangan memperkuat struktur permodalan permanen sehingga koperasi mampu bertahan menghadapi gejolak defisit."
  ],
  [
    "Asas \"Kekeluargaan\" dalam Pasal 33 ayat 1 UUD 1945 yang dirumuskan oleh Bung Hatta mengandung pengertian filosofis perekonomian nasional yaitu ...",
    "Perekonomian disusun atas dasar usaha bersama berasaskan gotong royong dan tolong-menolong demi kesejahteraan rakyat banyak, bukan persaingan bebas yang menindas kaum lemah",
    "Semua perusahaan di Indonesia hanya boleh dikelola oleh anggota satu keluarga kandung",
    "Pemerintah dilarang memungut pajak dari perusahaan konglomerat swasta",
    "Masyarakat dilarang mendirikan toko warung di luar rumah",
    "Sistem ekonomi konstitusi menolak individualisme-kapitalistik dan etatisme-sentralistik, mengedepankan solidaritas sosial."
  ],
  [
    "Makna penting dari Pasal 33 ayat 2 UUD 1945 (\"Cabang-cabang produksi yang penting bagi negara dan yang menguasai hajat hidup orang banyak dikuasai oleh negara\") dalam kebijakan pengelolaan BUMN adalah ...",
    "Sektor-sektor vital seperti listrik (PLN), air bersih (PDAM), dan bahan bakar minyak (Pertamina) wajib dikendalikan negara agar tarif layanannya terjangkau oleh seluruh lapisan rakyat dan tidak dimonopoli swasta serakah",
    "Pemerintah berhak menyita seluruh warung kelontong milik warga",
    "Masyarakat dilarang menggunakan listrik dan air bersih",
    "Pabrik rokok dan restoran cepat saji wajib diambil alih tentara",
    "Penguasaan negara (state control) menjamin keterjangkauan akses kebutuhan dasar (public goods) bagi keadilan sosial."
  ],
  [
    "Perbedaan karakteristik kepengurusan dan kewenangan antara Dewan Komisaris dengan Dewan Direksi dalam struktur tata kelola Perseroan Terbatas (PT) adalah ...",
    "Direksi bertanggung jawab penuh memimpin jalannya operasional bisnis perusahaan sehari-hari, sedangkan Komisaris bertugas mengawasi kebijakan direksi dan memberikan nasihat",
    "Komisaris bertugas melayani kasir penjualan toko",
    "Direksi tidak memiliki kewenangan menandatangani kontrak kerja sama",
    "Komisaris dipilih oleh karyawan pabrik tanpa persetujuan RUPS",
    "Pemisahan fungsi pengawasan (supervisory board) dan eksekutif (management board) mewujudkan tata kelola Good Corporate Governance."
  ],
  [
    "Prinsip dasar piagam ASEAN (ASEAN Charter) yang melarang negara anggota untuk campur tangan dalam urusan dalam negeri (internal affairs) negara anggota lainnya disebut asas ...",
    "Non-Intervensi (Non-Interference)",
    "Hak Veto Mutlak",
    "Sovereign Debt Relief",
    "Extradition Protocol",
    "Prinsip konsensus dan non-intervensi (dikenal sebagai \"The ASEAN Way\") menjadi pilar menjaga stabilitas diplomasi kawasan."
  ],
  [
    "Mekanisme pengambilan keputusan resmi tertinggi dalam setiap konferensi dan forum musyawarah organisasi ASEAN selalu berpegang teguh pada prinsip ...",
    "Konsensus mufakat bulat dari seluruh negara anggota",
    "Pemungutan suara terbanyak sederhana (simple majority)",
    "Hak veto negara pendiri terkuat",
    "Perintah langsung dari Sekretaris Jenderal ASEAN",
    "Jika salah satu negara tidak menyetujui, maka keputusan ditunda atau dicari titik kompromi yang disepakati bersama."
  ],
  [
    "Tujuan pembentukan forum dialog keamanan regional \"ASEAN Regional Forum (ARF)\" yang diinisiasi oleh ASEAN sejak tahun 1994 adalah ...",
    "Memfasilitasi dialog konsultatif konstruktif mengenai isu-isu politik dan keamanan multilateral serta membangun langkah-langkah peningkatan rasa saling percaya (Confidence Building Measures) di kawasan Asia-Pasifik",
    "Membentuk pakta pertahanan militer bersama untuk menyerang negara lain",
    "Menyelenggarakan latihan perang nuklir rahasia di laut bebas",
    "Mengusir seluruh duta besar negara barat dari benua Asia",
    "ARF melibatkan kekuatan global besar (AS, Tiongkok, Rusia, Uni Eropa, Jepang) di bawah kendali diplomasi kepemimpinan ASEAN."
  ],
  [
    "Konsep kerja sama sub-kawasan segitiga pertumbuhan \"IMT-GT\" yang digagas untuk mempercepat pembangunan ekonomi lintas perbatasan melibatkan tiga negara yaitu ...",
    "Indonesia, Malaysia, dan Thailand",
    "Indonesia, Myanmar, dan Timor Leste",
    "India, Maladewa, dan Turki",
    "Iran, Mesir, dan Tunisia",
    "IMT-GT (Indonesia-Malaysia-Thailand Growth Triangle) mengintegrasikan wilayah Sumatera, Semenanjung Malaysia, dan Thailand Selatan."
  ],
  [
    "Kerja sama sub-kawasan pertumbuhan ekonomi \"BIMP-EAGA\" memfokuskan akselerasi konektivitas perdagangan di wilayah timur Asia Tenggara yang mencakup negara ...",
    "Brunei Darussalam, Indonesia, Malaysia, dan Filipina",
    "Bangladesh, India, Myanmar, dan Pakistan",
    "Belgia, Islandia, Monako, dan Portugal",
    "Bhutan, Indonesia, Maladewa, dan Filipina",
    "BIMP-EAGA memajukan kawasan perbatasan Kalimantan, Sulawesi, Maluku, Papua, Sabah-Sarawak, dan Mindanao."
  ],
  [
    "Tujuan strategis penerapan skema \"Inisiatif Integrasi ASEAN\" (Initiative for ASEAN Integration / IAI) yang diluncurkan oleh para pemimpin ASEAN adalah ...",
    "Mempersempit jurang kesenjangan pembangunan ekonomi (development divide) antara 6 negara lama (ASEAN-6) dengan 4 negara anggota baru (Kamboja, Laos, Myanmar, Vietnam / CLMV)",
    "Membubarkan mata uang nasional masing-masing negara anggota",
    "Menyatukan seluruh tentara nasional menjadi satu kesatuan seragam",
    "Mewajibkan negara miskin membayar iuran tahunan sepuluh kali lipat",
    "Keseimbangan kapabilitas ekonomi antar-anggota krusial demi terwujudnya integrasi Komunitas ASEAN yang tangguh dan inklusif."
  ],
  [
    "Dalam Deklarasi Kesepakatan ASEAN II (Bali Concord II) tahun 2003, para pemimpin ASEAN menyepakati pembentukan \"Komunitas Keamanan ASEAN\" (APSC) yang berorientasi pada ...",
    "Penyelesaian sengketa antar-negara kawasan secara damai tanpa melibatkan pakta pertahanan militer bersama (military alliance)",
    "Pembangunan pangkalan militer gabungan di Laut Cina Selatan",
    "Pemberian izin impor senjata pemusnah massal ke Asia Tenggara",
    "Penyerahan kekuasaan militer nasional kepada dewan jenderal ASEAN",
    "ASEAN menolak aliansi militer defensif agresif dan memilih mekanisme resolusi konflik institusional hukum damai."
  ],
  [
    "Peran strategis Deklarasi Tata Perilaku Pihak-Pihak di Laut Cina Selatan (Declaration on the Conduct of Parties in the South China Sea / DOC) tahun 2002 yang terus didorong oleh diplomasi Indonesia adalah ...",
    "Menjaga kebebasan navigasi, menahan diri dari tindakan yang meningkatkan eskalasi ketegangan sengketa pulau, dan mempercepat pembentukan aturan hukum mengikat Code of Conduct (COC)",
    "Membagi Laut Cina Selatan menjadi wilayah kekuasaan satu negara adidaya",
    "Melarang semua kapal ikan nelayan berlayar di samudra Pasifik",
    "Mewajibkan semua pulau karang di Laut Cina Selatan ditenggelamkan",
    "Diplomasi preventif maritim Indonesia mencegah meletusnya bentrokan terbuka antar-negara pengklaim (claimant states)."
  ],
  [
    "Lembaga kebudayaan dan cagar alam di bawah naungan ASEAN yang menetapkan kawasan hutan lindung dengan keanekaragaman hayati unik bernilai universal sebagai \"ASEAN Heritage Parks\" telah menetapkan beberapa taman nasional di Indonesia, di antaranya adalah ...",
    "Taman Nasional Gunung Leuser, Kerinci Seblat, dan Lorentz",
    "Taman Margasatwa Ragunan dan Kebun Raya Bogor",
    "Taman Mini Indonesia Indah dan Ancol",
    "Hutan Kota Gelora Bung Karno",
    "Status ASEAN Heritage Parks menegaskan komitmen pelestarian ekosistem hutan hujan tropis lintas perbatasan regional."
  ],
  [
    "Peran aktif Indonesia dalam mendukung transisi demokrasi dan penyelesaian krisis kemanusiaan di Myanmar pasca kudeta militer 2021 diwujudkan melalui perumusan kesepakatan ...",
    "Lima Poin Konsensus (Five-Point Consensus)",
    "Pakta Warsawa Asia",
    "Traktat London",
    "Protokol Kyoto Lingkungan",
    "Lima Poin Konsensus menuntut penghentian segera kekerasan, dialog konstruktif inklusif, dan pengiriman bantuan kemanusiaan AHA Centre."
  ],
  [
    "Pusat Koordinasi Bantuan Kemanusiaan Penanggulangan Bencana ASEAN yang berkedudukan di Jakarta untuk menyalurkan bantuan darurat saat bencana alam melanda kawasan dinamakan ...",
    "AHA Centre (ASEAN Coordinating Centre for Humanitarian Assistance)",
    "UNICEF Pasifik",
    "Palang Merah Internasional Jenewa",
    "WHO Regional Hub",
    "AHA Centre memobilisasi logistik darurat bencana alam seperti topan badai, gempa bumi, dan letusan gunung di negara anggota."
  ],
  [
    "Perjanjian Ekstradisi antar-negara anggota ASEAN yang terus diperjuangkan pembentukannya oleh Pemerintah Indonesia sangat krusial dalam penegakan hukum nasional untuk ...",
    "Memudahkan penangkapan, pemulangan, dan perampasan aset para pelaku tindak pidana korupsi dan kejahatan transnasional yang melarikan diri ke luar negeri",
    "Menghilangkan paspor lintas batas bagi seluruh warga Asia Tenggara",
    "Membebaskan semua narapidana dari dalam penjara secara otomatis",
    "Mengizinkan polisi luar negeri menggantikan tugas kepolisian nasional",
    "Mutual Legal Assistance (MLA) dan ekstradisi melenyapkan tempat persembunyian (safe haven) buronan koruptor di luar negeri."
  ],
  [
    "Dalam bidang pendidikan, pembentukan jaringan kerja sama perguruan tinggi unggulan se-Asia Tenggara yang memfasilitasi pertukaran mahasiswa, beasiswa, dan pengakuan kredit antar-kampus dikenal dengan ...",
    "AUN (ASEAN University Network)",
    "Erasmus Mundus",
    "Ivy League Association",
    "Oxford Cambridge Alliance",
    "Universitas terkemuka Indonesia seperti UI, UGM, ITB, dan Unair tergabung aktif dalam pertukaran akademik AUN."
  ],
  [
    "Kerja sama penanggulangan polusi asap kabut lintas batas akibat kebakaran hutan dan lahan gambut diatur dalam perjanjian lingkungan regional ASEAN yaitu ...",
    "ASEAN Agreement on Transboundary Haze Pollution (AATHP)",
    "Montreal Protocol",
    "Paris Climate Accord",
    "Ramsar Convention",
    "AATHP mengikat negara-negara pihak untuk memonitor titik panas (hotspot), mencegah kebakaran lahan gambut, dan mitigasi asap bersama."
  ]
];

const hots = [
  [
    "Dalam sistem perekonomian Indonesia yang menganut demokrasi ekonomi Pancasila, terdapat tiga pilar utama pelaku ekonomi: BUMN, BUMS, dan Koperasi. Analisis peran sinergis dan pembagian fungsi yang ideal dari ketiga pelaku ekonomi tersebut demi menciptakan keadilan sosial yang merata adalah ...",
    "BUMN mengelola sektor sumber daya strategis penguasa hajat hidup masyarakat dan merintis sektor yang belum diminati swasta; BUMS menggerakkan dinamika inovasi dan investasi komersial; sedangkan Koperasi memberdayakan ekonomi rakyat akar rumput dengan asas kekeluargaan",
    "BUMN wajib memonopoli seluruh usaha dagang rakyat hingga warung kecil",
    "BUMS swasta harus dihapuskan karena dianggap selalu merugikan negara",
    "Koperasi hanya bertugas melayani pemberian pinjaman kepada bank swasta",
    "Tripartit pelaku ekonomi: BUMN sebagai benteng kedaulatan, BUMS sebagai motor efisiensi modal, dan Koperasi sebagai instrumen redistribusi kesejahteraan."
  ],
  [
    "Banyak Koperasi Unit Desa (KUD) dan koperasi simpan pinjam di Indonesia yang mengalami kemunduran usaha, kebangkrutan, bahkan ditinggalkan oleh masyarakat anggotanya. Berdasarkan analisis manajemen kelembagaan, faktor mendasar yang menjadi penyebab kegagalan koperasi tersebut adalah ...",
    "Lemahnya profesionalisme kompetensi pengurus dalam mengelola tata kelola bisnis modern, maraknya praktik penyelewengan dana oleh pengurus nakal (moral hazard), serta minimnya partisipasi aktif anggota yang hanya menganggap koperasi sekadar tempat meminjam uang",
    "Pemerintah melarang koperasi menerima setoran simpanan dari anggota",
    "Semua anggota koperasi diwajibkan menjadi pegawai negeri sipil",
    "Koperasi bangkrut karena harga beras di pasar dunia turun bebas",
    "Kegagalan kelembagaan (institutional failure): krisis tata kelola asimetri informasi dan degradasi nilai jati diri (cooperative identity) anggota."
  ],
  [
    "Bung Hatta menegaskan bahwa koperasi bukan sekadar organisasi bisnis pencari untung, melainkan \"alat pendidikan moral dan kemandirian bangsa\". Makna terdalam dari pandangan Bung Hatta tersebut terhadap pembentukan mentalitas warga negara adalah ...",
    "Koperasi mendidik rakyat agar membuang sifat ketergantungan (mental inlander), menumbuhkan semangat percaya pada kemampuan diri sendiri (self-help), serta membiasakan budaya gotong royong musyawarah yang demokratis",
    "Koperasi mengajarkan rakyat untuk mencari keuntungan pribadi sebesar-besarnya tanpa peduli orang lain",
    "Koperasi mewajibkan setiap siswa menghafal anggaran dasar partai politik",
    "Koperasi didirikan agar rakyat tidak perlu bekerja keras setiap hari",
    "Koperasi sebagai sekolah demokrasi: melatih tanggung jawab kolektif kewargaan dan emansipasi sosial melawan ketimpangan ekonomi."
  ],
  [
    "Masuknya era Masyarakat Ekonomi ASEAN (MEA) membawa konsekuensi keterbukaan arus tenaga kerja terampil (skilled labor) lintas negara di kawasan seperti dokter, insinyur, akuntan, dan arsitek melalui skema Mutual Recognition Arrangements (MRA). Dampak ganda keterbukaan tenaga kerja ini bagi generasi muda Indonesia adalah ...",
    "Membuka peluang karier profesional yang luas di mancanegara dengan standar penghasilan regional tinggi, namun sekaligus menuntut peningkatan kompetensi keahlian dan sertifikasi global agar tidak tergeser oleh ekspatriat terampil asing di negeri sendiri",
    "Menghilangkan kesempatan kerja bagi semua lulusan sarjana di Indonesia",
    "Mewajibkan semua pekerja Indonesia pindah kewarganegaraan ke negara tetangga",
    "Membuat perusahaan di Indonesia dilarang mempekerjakan tenaga kerja lokal",
    "Tuntutan standarisasi kompetensi transnasional mendorong transformasi human capital domestik menuju daya saing pasar terbuka."
  ],
  [
    "Di tengah persaingan perdagangan internasional yang ketat, negara-negara anggota ASEAN seringkali memiliki komoditas ekspor andalan yang serupa (misalnya kelapa sawit dan karet antara Indonesia dan Malaysia; beras antara Thailand dan Vietnam). Strategi diplomasi ekonomi cerdas yang seharusnya ditempuh negara-negara ASEAN alih-alih saling menjatuhkan harga di pasar dunia adalah ...",
    "Membangun aliansi strategis dewan produsen bersama (seperti CPOPC pada kelapa sawit) untuk menetapkan standar harga wajar, hilirisasi nilai tambah produk, dan bersatu menghadapi kampanye diskriminasi dagang proteksionis dari negara-negara barat",
    "Memutus hubungan diplomatik dan saling memboikot produk tetangga",
    "Membakar seluruh perkebunan karet dan kelapa sawit di dalam negeri",
    "Menjual seluruh hasil panen dengan harga nol rupiah kepada importir luar",
    "Kolektivitas diplomasi komoditas: pembentukan kartel etis produsen regional mengamankan daya tawar (bargaining power) di pasar komoditas global."
  ],
  [
    "Prinsip \"Non-Intervensi\" (The ASEAN Way) yang menjadi fondasi hubungan diplomatik ASEAN seringkali menuai kritik tajam dari komunitas internasional saat menghadapi krisis kemanusiaan internal suatu negara anggota (seperti isu Rohingya di Myanmar). Dilema diplomasi yang dihadapi ASEAN dalam menyikapi situasi tersebut adalah ...",
    "Kewajiban menghormati kedaulatan dalam negeri negara anggota berdasarkan piagam ASEAN berbenturan dengan tuntutan moral internasional untuk melindungi hak asasi manusia dan mencegah instabilitas spill-over pengungsi ke negara tetangga",
    "ASEAN harus mengirimkan pasukan nuklir untuk menghancurkan negara anggota yang bermasalah",
    "ASEAN diwajibkan bubar secara resmi jika ada satu warga yang melanggar hukum",
    "Negara anggota ASEAN dipaksa tunduk pada perintah militer negara barat",
    "Dilema antara prinsip menghormati kedaulatan dalam negeri negara tetangga dengan kepedulian terhadap perlindungan nilai-nilai kemanusiaan."
  ],
  [
    "Posisi geografis Indonesia yang sangat strategis di persimpangan dua samudra (Hindia dan Pasifik) dan dua benua (Asia dan Australia) menempatkannya sebagai poros maritim dunia. Peran kepemimpinan diplomasi Indonesia dalam menjaga perdamaian di kawasan Indo-Pasifik diwujudkan melalui inisiatif ...",
    "ASEAN Outlook on the Indo-Pacific (AOIP)",
    "Pakta Aliansi Militer AUKUS",
    "Perjanjian Pertahanan ANZUS Pasifik",
    "Blok Ekonomi Timur Tengah",
    "AOIP mempromosikan kerja sama inklusif, keterbukaan, transparansi, hukum maritim UNCLOS, dan menolak hegemoni persaingan militer kekuatan adidaya di Indo-Pasifik."
  ],
  [
    "Ketika terjadi krisis ketegangan geopolitik antara Amerika Serikat dan Tiongkok di perairan Laut Cina Selatan dan Selat Taiwan, mengapa stabilitas dan netralitas politik luar negeri Indonesia dan ASEAN yang \"Bebas dan Aktif\" menjadi kunci stabilitas global?",
    "Karena jika ASEAN terpolarisasi memihak salah satu kubu militer adidaya, Asia Tenggara akan terseret menjadi arena proksi perang terbuka yang melumpuhkan rantai pasok maritim perdagangan global yang melewati Selat Malaka",
    "Karena kapal perang Indonesia dilarang berlayar di atas air laut",
    "Karena Tiongkok dan Amerika Serikat adalah pemilik resmi seluruh kepulauan Indonesia",
    "Karena netralitas membuat harga barang impor menjadi naik sepuluh kali lipat",
    "Stabilitas otonomi strategis: doktrin bebas aktif mempertahankan sentralitas ASEAN (ASEAN Centrality) sebagai stabilisator keamanan arsitektur regional."
  ],
  [
    "Pembangunan Kawasan Ekonomi Khusus (KEK) di wilayah-wilayah perbatasan terluar Indonesia (seperti KEK Arun Lhokseumawe, Batam, Galang Batang, Bitung, dan Morotai) dirancang secara spasial untuk ...",
    "Menangkap peluang rantai pasok industri logistik internasional ASEAN dan Pasifik, menarik investasi manufaktur global, serta mempercepat pemerataan pusat pertumbuhan ekonomi keluar dari keterpusatan Pulau Jawa",
    "Memindahkan seluruh gedung kementerian pemerintahan ke pulau terpencil",
    "Mengisolasi masyarakat perbatasan agar tidak berinteraksi dengan orang asing",
    "Menutup pelabuhan laut dari aktivitas perdagangan perikanan",
    "Pusat pertumbuhan koridor ekonomi kepulauan (growth pole strategy) mendistribusikan kutub industrialisasi ke beranda depan perbatasan negara."
  ],
  [
    "Banyak UMKM (Usaha Mikro, Kecil, dan Menengah) di Indonesia menghadapi tantangan berat dalam memanfaatkan peluang pasar tunggal Masyarakat Ekonomi ASEAN (MEA). Analisis hambatan struktural yang dihadapi UMKM nasional dalam menembus pasar ekspor regional adalah ...",
    "Rendahnya literasi digital pemasaran global, kendala standarisasi mutu dan sertifikasi higienitas produk internasional, serta keterbatasan modal finansial untuk menembus jaringan rantai pasok rantel ritel modern ASEAN",
    "Pemerintah melarang UMKM menjual produk di luar batas wilayah desa",
    "Semua produk kerajinan tangan UMKM Indonesia memiliki kualitas jelek",
    "Negara tetangga dilarang membeli makanan tradisional khas nusantara",
    "Kendala non-tarif barriers dan defisit permodalan menuntut pendampingan ekosistem ekspor agregator dan digitalisasi inkubasi UMKM."
  ],
  [
    "Fenomena digitalisasi ekonomi melalui platform marketplace dan e-commerce lintas negara (cross-border e-commerce) di Asia Tenggara berpotensi menjadi \"pedang bermata dua\" bagi perekonomian Indonesia, karena ...",
    "Di satu sisi mempermudah konsumen belanja dan membuka peluang ekspor produk lokal, namun di sisi lain berisiko membanjiri pasar domestik dengan barang impor murah luar negeri yang mematikan industri manufaktur kecil dalam negeri",
    "E-commerce membuat jaringan internet di Indonesia padam permanen",
    "Aplikasi belanja online menyebabkan semua toko pasar tradisional terbakar",
    "Uang kartal rupiah dilarang digunakan dalam transaksi perdagangan sehari-hari",
    "Disrupsi ekonomi digital memicu defisit neraca perdagangan e-commerce jika tidak diimbangi penguatan proteksi cerdas dan daya saing produsen lokal."
  ],
  [
    "Dalam tata kelola Badan Usaha Milik Negara (BUMN), pemerintah melakukan restrukturisasi dengan membentuk \"Holding BUMN\" (seperti Holding BUMN Tambang MIND ID, Holding Farmasi Bio Farma, dan Holding Migas Pertamina). Tujuan strategis dari pembentukan holding company BUMN ini adalah ...",
    "Memperkuat kapasitas permodalan, meningkatkan efisiensi operasional dan sinergi aset antaranak perusahaan, serta memperbesar daya saing korporasi pelat merah di kancah persaingan global",
    "Mengurangi jumlah pegawai negeri sipil di seluruh kementerian",
    "Menghapuskan fungsi pengawasan Dewan Perwakilan Rakyat terhadap BUMN",
    "Menjual seluruh aset BUMN kepada konglomerat pengusaha asing",
    "Konsolidasi neraca keuangan terintegrasi mengoptimalkan skala ekonomi (economies of scale) dan sinergi belanja modal (capex) BUMN."
  ],
  [
    "Meskipun negara-negara anggota ASEAN telah menyepakati Kawasan Perdagangan Bebas (AFTA), praktik di lapangan seringkali diwarnai oleh hambatan non-tarif (Non-Tariff Barriers / NTB) antar-negara. Bentuk hambatan non-tarif yang sering digunakan untuk melindungi produk domestik adalah ...",
    "Pemberlakuan regulasi standar karantina sanitasi yang sangat ketat, kuota impor terbatas, perizinan birokrasi berbelit, dan sertifikasi teknis rumit yang menghambat masuknya barang negara tetangga",
    "Pemasangan ranjau darat di pelabuhan laut internasional",
    "Penyitaan seluruh kapal dagang yang melintas di perairan selat",
    "Penolakan penggunaan mata uang asing oleh bank sentral",
    "Proteksionisme terselubung (hidden protectionism): manipulasi regulasi teknis non-tarif menggantikan instrumen tarif bea masuk yang sudah diliberalisasi."
  ],
  [
    "Krisis pasokan pangan global menuntut negara-negara anggota ASEAN memperkuat ketahanan pangan regional melalui skema cadangan beras darurat \"APTERR\" (ASEAN Plus Three Emergency Rice Reserve). Keterkaitan APTERR dengan stabilitas sosial-ekonomi kawasan adalah ...",
    "Menyediakan cadangan stok penyangga beras bersama yang siap disalurkan cepat ke negara anggota saat dilanda bencana alam dahsyat atau gagal panen ekstrem guna mencegah lonjakan inflasi harga pangan dan krisis kelaparan",
    "Mewajibkan masyarakat Asia Tenggara mengganti beras dengan makanan roti gandum",
    "Melarang petani menjual beras kepada warga miskin",
    "Membakar seluruh sawah di negara tetangga agar harga beras tetap mahal",
    "Kolektifitas jaminan logistik pangan darurat meredam volatilitas harga dan memitigasi kerentanan guncangan ketahanan pangan regional."
  ],
  [
    "Pemberlakuan Kebijakan Transisi Energi Bersih di ASEAN menghadapi tantangan besar karena sebagian besar negara kawasan (termasuk Indonesia, Vietnam, dan Filipina) masih sangat bergantung pada Pembangkit Listrik Tenaga Uap (PLTU) batu bara murah. Hambatan ekonomi utama dalam memensiunkan dini PLTU batu bara adalah ...",
    "Besarnya beban kompensasi finansial kontrak perjanjian jual beli listrik (PPA - Power Purchase Agreement) jangka panjang dengan pengembang swasta dan tingginya biaya investasi awal untuk membangun infrastruktur energi terbarukan pengganti",
    "Batu bara adalah satu-satunya sumber energi yang ada di muka bumi",
    "Matahari dan tiupan angin dilarang digunakan untuk menghasilkan listrik",
    "Kabel listrik transmisi di Indonesia tidak bisa dialiri arus energi terbarukan",
    "Biaya ganti rugi pemutusan kontrak operasional dan kebutuhan investasi pembangkit baru memerlukan skema pendanaan transisi energi yang terencana."
  ],
  [
    "Peran diplomasi kebudayaan Indonesia di forum ASEAN melalui pertunjukan festival seni, pameran warisan budaya, dan pertukaran seniman muda nusantara berfungsi strategis untuk ...",
    "Membangun rasa saling percaya, empati, dan identitas bersama (ASEAN Identity) sebagai satu komunitas masyarakat Asia Tenggara yang rukun dan harmonis",
    "Menghasut negara-negara tetangga agar berperang melawan negara lain",
    "Menghapuskan bahasa kebangsaan masing-masing negara anggota",
    "Memaksa seluruh warga Asia Tenggara mengenakan busana yang sama setiap hari",
    "Soft power diplomacy mengikis prasangka sejarah (historical prejudice) dan memperkokoh solidaritas sosio-kultural antarbangsa."
  ],
  [
    "Konsep \"Ekonomi Maritim (Maritime Economy)\" dan \"Ekonomi Kelautan (Marine Economy)\" memiliki perbedaan fokus kebijakan pembangunan yang mendasar. Perbedaan esensial antara kedua istilah ekonomi tersebut di Indonesia adalah ...",
    "Ekonomi kelautan berfokus pada kegiatan ekonomi yang memanfaatkan sumber daya alam di laut (seperti penangkapan ikan, tambak udang, dan wisata bahari), sedangkan ekonomi maritim mencakup industri transportasi laut, galangan kapal, dan pengelolaan jasa pelabuhan",
    "Ekonomi maritim hanya dilakukan di danau air tawar perbukitan",
    "Ekonomi kelautan tidak ada hubungannya dengan air samudra",
    "Kedua istilah memiliki arti yang persis sama tanpa perbedaan sedikit pun",
    "Diferensiasi konseptual: Marine economy menggarap komoditas biomassa/ekstraktif bahari, sedangkan Maritime economy memfasilitasi logistik dan konektivitas jalur pelayaran."
  ],
  [
    "Pemberantasan kegiatan penangkapan ikan secara ilegal, tidak dilaporkan, dan tidak diatur (IUU Fishing) di perairan Indonesia memerlukan kerja sama pengawasan maritim regional ASEAN karena ...",
    "Armada kapal pencuri ikan lintas negara beroperasi dengan memalsukan dokumen bendera kapal (flag of convenience) dan berpindah-pindah melintasi perbatasan laut yurisdiksi antar-negara kawasan demi menghindari patroli aparat",
    "Semua ikan di laut memiliki dokumen paspor kewarganegaraan sendiri",
    "Laut Indonesia tidak memiliki batas wilayah kedaulatan yang jelas",
    "Kapal ikan nelayan asing selalu menggunakan tenaga roket supersonik",
    "Kejahatan terorganisir perikanan transnasional (transnational organized fisheries crime) memerlukan pertukaran data intelijen maritim dan penegakan hukum regional terpadu."
  ],
  [
    "Inisiatif pengembangan jaringan transmisi listrik lintas negara di Asia Tenggara \"ASEAN Power Grid (APG)\" dirancang untuk menghubungkan sistem kelistrikan antar-negara anggota. Manfaat interkoneksi jaringan listrik regional ini bagi efisiensi energi nasional dan kawasan adalah ...",
    "Memungkinkan perdagangan ekspor-impor listrik antar-negara, mengoptimalkan integrasi sumber-sumber energi terbarukan lintas batas (seperti hidro di Laos/Indonesia dan surya), serta meningkatkan keandalan pasokan listrik tanpa perlu cadangan berlebih",
    "Membuat tarif listrik di rumah tangga naik seratus kali lipat secara instan",
    "Mengalirkan petir dari awan langsung ke kabel colokan rumah warga",
    "Menghilangkan fungsi pembangkit listrik milik pemerintah di dalam negeri",
    "Optimasi interkonektivitas regional meratakan beban puncak (peak load sharing) dan menyerap intermitensi energi baru terbarukan."
  ],
  [
    "Mengapa semboyan resmi ASEAN \"Satu Visi, Satu Identitas, Satu Komunitas\" (One Vision, One Identity, One Community) menjadi modal sosial krusial dalam menghadapi era fragmentasi geopolitik global dan persaingan perang dingin baru abad ke-21?",
    "Karena kesatuan pandangan solidaritas dan kebersamaan regional ASEAN menjamin bahwa suara kolektif Asia Tenggara tidak dapat dipecah-belah atau didikte oleh kekuatan hegemonik negara besar, sehingga Asia Tenggara tetap menjadi episentrum pertumbuhan perdamaian dan kemakmuran dunia",
    "Karena ASEAN berencana menghapuskan seluruh nama negara anggotanya menjadi satu nama baru",
    "Karena semboyan tersebut mewajibkan semua warga negara berbicara dalam satu bahasa gaul",
    "Karena tanpa semboyan tersebut mata uang seluruh dunia akan kehilangan nilainya",
    "Kekuatan sentralitas ASEAN (ASEAN Centrality) bertumpu pada kohesi internal kolektif untuk menavigasi rivalitas multipolar global secara independen."
  ]
];

module.exports = {
  name: 'Kegiatan Ekonomi, Koperasi & Peran Indonesia di ASEAN',
  mudah,
  sedang,
  sulit,
  hots
};
