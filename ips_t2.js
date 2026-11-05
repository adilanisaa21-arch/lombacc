// Topik 2: Perkembangan Teknologi, Transportasi & Komunikasi dari Masa ke Masa
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Alat transportasi tradisional darat yang ditarik oleh seekor atau sepasang kuda dan dikemudikan oleh seorang kusir disebut ...",
    "Delman atau Dokar",
    "Becak dayung",
    "Sepeda ontel",
    "Pedati sapi",
    "Delman, dokar, atau andong merupakan kendaraan tradisional roda dua atau empat bertenaga kuda."
  ],
  [
    "Alat bajak sawah tradisional yang memanfaatkan tenaga hewan ternak sebelum adanya mesin traktor menggunakan tenaga ...",
    "Kerbau atau sapi",
    "Kuda pacu",
    "Kambing",
    "Gajah",
    "Membajak sawah dengan kerbau membalik tanah sawah secara tradisional dan ramah lingkungan."
  ],
  [
    "Alat komunikasi tradisional dari batang bambu atau kayu berongga yang dipukul untuk memberi tanda bahaya atau ronda malam disebut ...",
    "Kentongan",
    "Bedug",
    "Gong",
    "Lonceng",
    "Ketukan suara kentongan memiliki kode irama tertentu untuk tanda kebakaran, pencurian, atau banjir."
  ],
  [
    "Alat transportasi air paling sederhana yang terbuat dari susunan batang-batang bambu yang diikat berjajar dan didayung adalah ...",
    "Rakit bambu (getek)",
    "Kapal selam",
    "Perahu motor tempel",
    "Kapal feri penyeberangan",
    "Rakit bambu banyak digunakan masyarakat di pedesaan untuk menyeberangi sungai tenang."
  ],
  [
    "Kendaraan bermotor roda dua yang digerakkan oleh mesin bensin atau baterai listrik dan menjadi sarana transportasi harian utama di Indonesia adalah ...",
    "Sepeda motor",
    "Delman",
    "Becak",
    "Sepeda roda tiga",
    "Sepeda motor memudahkan mobilitas warga melintasi jalan sempit dan gang perkotaan."
  ],
  [
    "Alat transportasi darat modern berdaya angkut penumpang sangat banyak yang melaju di atas lintasan rel baja khusus dinamakan ...",
    "Kereta api",
    "Bus antar-kota",
    "Truk kontainer",
    "Mobil angkot",
    "Kereta api digerakkan oleh lokomotif diesel atau listrik dan bebas dari kemacetan lalu lintas jalan raya."
  ],
  [
    "Alat transportasi udara modern yang memiliki sayap dan digerakkan oleh mesin jet untuk menempuh perjalanan antarpulau dan antarnegara adalah ...",
    "Pesawat terbang",
    "Balon udara",
    "Helikopter",
    "Paralayang",
    "Pesawat komersial memungkinkan perjalanan dari Jakarta ke Surabaya hanya dalam waktu sekitar 1,5 jam."
  ],
  [
    "Alat transportasi udara yang menggunakan baling-baling putar besar di bagian atas sehingga dapat mendarat dan lepas landas secara tegak lurus (vertikal) adalah ...",
    "Helikopter",
    "Pesawat jet",
    "Pesawat layang",
    "Roket",
    "Helikopter sangat berguna untuk misi penyelamatan bencana di daerah terpencil yang tidak memiliki landasan pacu."
  ],
  [
    "Alat komunikasi jarak jauh modern yang dapat digenggam tangan dan memiliki layar sentuh untuk mengirim pesan teks, suara, dan video adalah ...",
    "Ponsel pintar (Smartphone)",
    "Telegraf kabel",
    "Mesin tik kuno",
    "Surat kabar harian",
    "Smartphone memadukan fungsi telepon, kamera, kalkulator, dan akses internet dalam satu genggaman."
  ],
  [
    "Surat elektronik yang dikirim melalui jaringan internet antar-komputer atau ponsel secara cepat dalam hitungan detik disebut ...",
    "Email (Surel)",
    "Telegram kawat",
    "Surat kilat pos",
    "Faksimile",
    "Email (electronic mail) menggantikan pengiriman surat kertas pos yang membutuhkan waktu berhari-hari."
  ],
  [
    "Alat pertanian modern yang menggunakan mesin bertenaga solar untuk membajak dan menggemburkan tanah sawah dengan cepat dinamakan ...",
    "Traktor",
    "Ani-ani",
    "Sabit gerigi",
    "Cangkul kayu",
    "Satu mesin traktor mampu membajak sawah seluas satu hektar dalam waktu beberapa jam saja."
  ],
  [
    "Mesin penggiling gabah padi modern yang memisahkan kulit sekam dari butiran beras putih dinamakan ...",
    "Rice Mill (Mesin Penggiling Beras)",
    "Mesin traktor",
    "Mesin pemotong rumput",
    "Mesin blender",
    "Penggilingan beras modern menggantikan lesung tumbuk padi tradisional yang menguras tenaga manusia."
  ],
  [
    "Alat komunikasi tradisional masyarakat Islam berupa tabung kayu besar berlapis kulit sapi yang dipukul di masjid menjelang adzan dinamakan ...",
    "Bedug",
    "Rebana",
    "Kentongan",
    "Gamelan",
    "Tabuhan bedug dengan ritme bertalu-talu menandakan waktu shalat fardhu telah tiba."
  ],
  [
    "Lembaga resmi milik negara di Indonesia yang bertugas melayani jasa pengiriman surat, perangko, dan paket pos sejak masa lampau adalah ...",
    "PT Pos Indonesia",
    "PT Kereta Api Indonesia",
    "PT PLN",
    "PT Telkom",
    "Pos Indonesia memiliki kantor pos di seluruh kecamatan di Indonesia untuk melayani kurir surat dan logistik."
  ],
  [
    "Kertas berperekat dengan gambar tertentu yang ditempelkan pada amplop surat sebagai tanda bukti pembayaran bea pengiriman pos disebut ...",
    "Perangko",
    "Materai",
    "Kwitansi",
    "Kupon belanja",
    "Hobi mengumpulkan dan mengoleksi berbagai jenis perangko antik disebut filateli."
  ],
  [
    "Kapal laut berukuran besar yang bertugas mengangkut ratusan mobil, bus, truk muatan, dan ribuan penumpang menyeberangi selat dinamakan ...",
    "Kapal Feri (Ro-Ro)",
    "Perahu jukung",
    "Kapal sekunar",
    "Kapal tunda",
    "Kapal feri penyeberangan menghubungkan Merak-Bakauheni di Selat Sunda dan Ketapang-Gilimanuk di Selat Bali."
  ],
  [
    "Alat penenun kain tradisional tanpa mesin yang digerakkan langsung oleh tangan dan kaki pengrajin kain tenun disebut ...",
    "ATBM (Alat Tenun Bukan Mesin)",
    "Mesin bordir otomatis",
    "Mesin jahit listrik",
    "Mesin obras digital",
    "ATBM digunakan para perajin untuk menenun kain lurik, tenun ikat, dan songket dengan ketelitian tinggi."
  ],
  [
    "Manfaat utama penggunaan internet dalam kehidupan sehari-hari siswa sekolah dasar adalah ...",
    "Mempermudah mencari informasi ilmu pengetahuan dan belajar materi pelajaran sekolah",
    "Menghabiskan waktu bermain game daring sepanjang malam",
    "Menyebarkan kabar bohong kepada teman sekolah",
    "Membeli barang belanjaan tanpa izin orang tua",
    "Internet membuka akses jendela perpustakaan digital dunia bagi kegiatan belajar siswa."
  ],
  [
    "Sikap bijak yang harus ditunjukkan oleh seorang anak saat menggunakan gawai telepon pintar (gadget) di rumah adalah ...",
    "Membatasi waktu penggunaan gawai dan memprioritaskan waktu belajar serta istirahat",
    "Memainkan gawai sambil mengisi daya baterai di atas tempat tidur",
    "Menolak berbicara dengan orang tua karena asyik bermain game",
    "Menonton video hingga larut malam sampai terlambat masuk sekolah",
    "Manajemen waktu penggunaan layar (screen time) menjaga kesehatan mata dan konsentrasi belajar anak."
  ],
  [
    "Dampak positif dari kemajuan teknologi transportasi modern bagi perekonomian masyarakat adalah ...",
    "Barang kebutuhan pokok hasil bumi dari pelosok desa dapat didistribusikan ke kota dengan cepat dan murah",
    "Semua jalan raya di perkotaan menjadi sepi tanpa kendaraan",
    "Harga tiket kendaraan menjadi lebih mahal daripada harga emas",
    "Masyarakat tidak perlu lagi makan nasi sehari-hari",
    "Konektivitas jalan tol, kereta api, dan kapal laut mempercepat mobilitas logistik dan menekan harga pangan antardaerah."
  ]
];
const sedang = [
  [
    "Sebelum ditemukan mesin uap dan kendaraan bermotor, masyarakat tradisional mengangkut hasil panen bumi yang berat menggunakan ...",
    "Gerobak pedati yang ditarik oleh sepasang sapi atau kerbau",
    "Kereta rel listrik bertenaga baterai",
    "Mobil pikap bak terbuka",
    "Pesawat helikopter angkut barang",
    "Pedati kayu bertenaga sapi menjadi sarana pengangkutan hasil pertanian andalan pada abad ke-19."
  ],
  [
    "Penemuan mesin uap oleh James Watt pada abad ke-18 membawa revolusi besar di bidang transportasi dunia karena memicu lahirnya ...",
    "Kereta api uap dan kapal laut bertenaga uap",
    "Mobil listrik tenaga surya",
    "Pesawat jet supersonik",
    "Satelit komunikasi luar angkasa",
    "Tenaga uap menggantikan tenaga angin pada kapal layar dan tenaga kuda pada kereta jalan rel."
  ],
  [
    "Kereta rel listrik modern bawah tanah dan melayang yang beroperasi di Daerah Khusus Ibukota Jakarta untuk mengurai kemacetan parah dinamakan ...",
    "MRT (Mass Rapid Transit) dan LRT (Light Rail Transit)",
    "Kereta api lokomotif uap kuno",
    "Bus antarkota antarprovinsi",
    "Mobil angkot karoseri",
    "MRT Jakarta melaju di jalur layang dan bawah tanah dengan ketepatan waktu tinggi dan ramah lingkungan."
  ],
  [
    "Kereta Cepat pertama di Indonesia dan Asia Tenggara yang menghubungkan rute Jakarta hingga Bandung dalam waktu sekitar 45 menit dinamakan ...",
    "Kereta Cepat Whoosh (KCJB)",
    "Kereta Api Argo Parahyangan",
    "Kereta Api Prameks",
    "Kereta Api Jayabaya",
    "Whoosh melaju dengan kecepatan operasional hingga 350 km/jam bertenaga listrik modern."
  ],
  [
    "Dua orang bersaudara penemu asal Amerika Serikat yang berhasil merancang dan menerbangkan pesawat terbang bermesin pertama kali di dunia pada tahun 1903 adalah ...",
    "Wright Bersaudara (Orville dan Wilbur Wright)",
    "Thomas Alva Edison",
    "Alexander Graham Bell",
    "Guglielmo Marconi",
    "Pesawat layang bermesin Flyer buatan Wright bersaudara berhasil terbang di bukit pasir Kitty Hawk."
  ],
  [
    "Tokoh ilmuwan dan dirgantara kebanggaan bangsa Indonesia yang berhasil merancang pesawat terbang buatan anak bangsa N-250 Gatotkaca adalah ...",
    "Prof. Dr. Ing. B.J. Habibie",
    "Ir. Soekarno",
    "Ki Hajar Dewantara",
    "Prof. Dr. Soepomo",
    "Presiden ke-3 RI B.J. Habibie memimpin IPTN (kini PT Dirgantara Indonesia) merakit pesawat turboprop modern."
  ],
  [
    "Alat komunikasi jarak jauh masa lalu yang mengirimkan pesan kode morse menggunakan sinyal pulsa listrik melalui kawat tembaga dinamakan ...",
    "Telegraf",
    "Telepon genggam",
    "Faksimile digital",
    "Radio satelit",
    "Pesan tertulis yang diterima dari telegraf dicetak di atas secarik kertas pita yang disebut telegram."
  ],
  [
    "Sistem komunikasi sandi berupa rangkaian titik (.) dan garis datar (-) yang digunakan dalam pengiriman telegraf dan komunikasi pramuka dinamakan ...",
    "Sandi Morse",
    "Sandi Kotak",
    "Sandi Angka",
    "Sandi Ular",
    "Sandi Morse diciptakan oleh Samuel Morse untuk mentransmisikan huruf alfabet melalui kawat listrik."
  ],
  [
    "Tokoh penemu yang berhasil menciptakan pesawat telepon pertama di dunia yang mampu mengirimkan suara manusia melalui gelombang kabel kawat pada tahun 1876 adalah ...",
    "Alexander Graham Bell",
    "Guglielmo Marconi",
    "Michael Faraday",
    "Nikola Tesla",
    "Penemuan telepon oleh Graham Bell merevolusi cara manusia berbicara secara langsung dari jarak jauh."
  ],
  [
    "Tokoh yang berjasa besar menemukan sistem transmisi radio tanpa kabel (nirkabel) yang menjadi cikal bakal siaran radio dan gelombang nirkabel adalah ...",
    "Guglielmo Marconi",
    "James Watt",
    "Isaac Newton",
    "Albert Einstein",
    "Marconi membuktikan sinyal gelombang elektromagnetik radio dapat melintasi samudra tanpa kawat penghubung."
  ],
  [
    "Alat penerima siaran suara nirkabel yang sangat populer di Indonesia sejak masa perjuangan kemerdekaan untuk mendengarkan pidato Bung Tomo dan siaran RRI adalah ...",
    "Radio",
    "Televisi berwarna",
    "Komputer tablet",
    "Layar proyektor",
    "Siaran Radio Republik Indonesia (RRI) menjadi sarana menyebarkan informasi kedaulatan RI ke pelosok negeri."
  ],
  [
    "Alat komunikasi visual yang menampilkan gambar bergerak sekaligus suara dan pertama kali mengudara secara resmi di Indonesia saat meliput Asian Games IV Jakarta tahun 1962 adalah ...",
    "Televisi Republik Indonesia (TVRI)",
    "Bioskop layar tancap",
    "Surat kabar harian De Express",
    "Papan reklame jalan",
    "TVRI menjadi stasiun televisi tertua di Indonesia yang menyiarkan program edukasi, berita, dan kebudayaan."
  ],
  [
    "Satelit komunikasi domestik pertama milik Indonesia yang diluncurkan ke luar angkasa dari Cape Canaveral Amerika Serikat pada tahun 1976 dinamakan Satelit ...",
    "Palapa (SKSD Palapa A1)",
    "Garuda Satu",
    "Bhinneka",
    "Nusantara Dua",
    "Satelit Palapa A1 mempersatukan jaringan telepon, televisi, dan komunikasi di seluruh kepulauan nusantara."
  ],
  [
    "Alat komunikasi cetak bersejarah berupa lembaran kertas berita yang terbit berkala setiap hari dan memuat informasi peristiwa hangat dinamakan ...",
    "Surat Kabar (Koran)",
    "Majalah dinding sekolah",
    "Buku ensiklopedia",
    "Brosur promosi toko",
    "Koran menjadi sarana utama para tokoh pergerakan nasional menyuarakan aspirasi kemerdekaan sebelum era televisi."
  ],
  [
    "Teknologi alat panen padi modern yang menggabungkan tiga fungsi sekaligus yaitu memotong batang padi, merontokkan gabah, dan membersihkan butiran gabah secara otomatis di sawah adalah ...",
    "Combine Harvester (Mesin Pemanen Kombinasi)",
    "Traktor bajak rotari",
    "Pompa air irigasi diesel",
    "Alat pemotong rumput dorong",
    "Combine harvester menghemat waktu panen dari berhari-hari menjadi hitungan jam serta mengurangi gabah yang tercecer."
  ],
  [
    "Alat mesin pemintal benang otomatis yang menggantikan alat pintal kayu tradisional bertenaga kaki dalam industri garmen pakaian dinamakan ...",
    "Mesin pintal mekanik bertenaga motor listrik",
    "Alat tenun gedogan",
    "Canting cap batik",
    "Jarum sulam tangan",
    "Pabrik tekstil modern memintal serat kapas menjadi ribuan gulungan benang per menit dengan kualitas benang seragam."
  ],
  [
    "Penggunaan teknologi pengawetan makanan modern seperti pengeringan beku (freeze drying), sterilisasi vakum, dan pengalengan kedap udara bertujuan untuk ...",
    "Membuat bahan pangan tahan lama disimpan berbulan-bulan tanpa membusuk dan aman didistribusikan ke daerah terpencil",
    "Mengubah rasa makanan menjadi asin seperti garam",
    "Membuat makanan mengeluarkan racun berbahaya",
    "Menghilangkan seluruh kandungan gizi makanan",
    "Sterilisasi membunuh bakteri pembusuk sehingga hasil panen ikan, daging, dan buah dapat diekspor ke mancanegara."
  ],
  [
    "Dampak negatif dari semakin banyaknya kendaraan bermotor pribadi (mobil dan motor berbahan bakar minyak) di jalan raya kota besar adalah ...",
    "Meningkatnya polusi udara beracun (karbon monoksida) dan memicu kemacetan lalu lintas jalan raya yang parah",
    "Menurunnya suhu udara perkotaan menjadi sedingin es",
    "Membuat harga minyak dunia menjadi gratis",
    "Semua pohon di pinggir jalan tumbuh menjadi dua kali lebih cepat",
    "Emisi gas buang knalpot mencemari paru-paru warga kota dan meningkatkan efek gas rumah kaca pemanasan global."
  ],
  [
    "Upaya ramah lingkungan yang dapat dilakukan masyarakat perkotaan untuk mengurangi kemacetan dan pencemaran udara akibat kendaraan pribadi adalah ...",
    "Beralih menggunakan angkutan umum massal (seperti Transjakarta, KRL, MRT) atau bersepeda dan berjalan kaki untuk jarak dekat",
    "Membeli lima unit mobil pribadi untuk setiap anggota keluarga",
    "Membakar ban bekas di pinggir jalan raya",
    "Menebang semua pohon peneduh di tepi trotoar",
    "Menggunakan transportasi publik mengurangi konsumsi bahan bakar fosil dan menurunkan beban volume kendaraan di jalan raya."
  ],
  [
    "Alat transportasi kapal bertenaga nuklir di dunia umumnya digunakan untuk keperluan khusus kapal pemecah es dan kapal selam karena ...",
    "Mampu berlayar terus-menerus selama bertahun-tahun di samudra luas tanpa perlu mengisi ulang bahan bakar minyak",
    "Membutuhkan solar dalam jumlah ribuan drum setiap hari",
    "Hanya bisa bergerak mundur di atas air laut",
    "Mengeluarkan asap hitam pekat yang membakar awan",
    "Reaktor nuklir menghasilkan energi panas luar biasa besar dari sedikit bahan bakar uranium yang sangat efisien."
  ],
  [
    "Dampak positif dari kemunculan aplikasi belanja daring (e-commerce) bagi para pengrajin makanan tradisional di desa pelosok adalah ...",
    "Memperluas jangkauan pasar penjualan produk ke seluruh pelosok Indonesia tanpa harus membuka toko fisik mahal di kota",
    "Memaksa pedagang desa menutup usahanya selamanya",
    "Membuat pengrajin desa dilarang membuat makanan lezat",
    "Mengharuskan pembeli datang berjalan kaki ke desa pengrajin",
    "Platform digital marketplace memotong rantai perantara sehingga UMKM desa dapat terhubung langsung dengan jutaan konsumen nasional."
  ],
  [
    "Kemudahan bertransaksi pembayaran non-tunai di era digital saat ini dipermudah dengan penggunaan kode batang persegi hitam-putih terstandar nasional yang disebut ...",
    "QRIS (Quick Response Code Indonesian Standard)",
    "Kartu tanda penduduk (KTP)",
    "Kupon undian belanja",
    "Perangko pos kilat",
    "QRIS diluncurkan Bank Indonesia memungkinkan pembayaran menggunakan berbagai aplikasi dompet digital cukup dengan memindai satu kode QR."
  ],
  [
    "Salah satu bahaya penyalahgunaan teknologi informasi di media sosial yang harus diwaspadai oleh anak-anak sekolah adalah maraknya \"Hoaks\", yang artinya ...",
    "Pemberitaan palsu atau informasi bohong yang sengaja disebarkan untuk menyesatkan dan meresahkan masyarakat",
    "Koleksi foto pemandangan alam pegunungan yang indah",
    "Kumpulan soal latihan ujian matematika di sekolah",
    "Peraturan resmi yang diterbitkan oleh kementerian pendidikan",
    "Penyebaran hoaks dapat memicu pertengkaran, fitnah, dan kepanikan warga; anak harus terbiasa menyaring kebenaran berita."
  ],
  [
    "Tindakan perundungan atau ejekan menyakitkan yang dilakukan seseorang terhadap temannya melalui pesan media sosial di dunia maya dikenal dengan istilah ...",
    "Cyberbullying (Perundungan Siber)",
    "Cybercrime pencurian data",
    "Digital marketing periklanan",
    "Software aplikasi komputer",
    "Perundungan siber dapat melukai perasaan korban; siswa harus selalu bertutur kata sopan dan santun di dunia maya."
  ],
  [
    "Teknologi kecerdasan buatan (Artificial Intelligence / AI) yang berkembang pesat saat ini dirancang untuk ...",
    "Membantu manusia menyelesaikan pekerjaan komputasi rumit, pengolahan bahasa, dan otomasi tugas secara efisien",
    "Menggantikan seluruh manusia agar manusia tidak perlu berpikir sama sekali",
    "Mematikan seluruh jaringan listrik di muka bumi",
    "Membuat robot yang bertugas menghancurkan gedung sekolah",
    "AI berfungsi sebagai alat bantu kognitif pintar yang meningkatkan produktivitas belajar, riset ilmiah, dan industri kreatif."
  ],
  [
    "Dalam bidang kesehatan, penemuan alat kedokteran modern rontgen (Sinar-X) dan USG (Ultrasonografi) sangat membantu para dokter untuk ...",
    "Melihat kondisi organ dalam tubuh, tulang patah, dan perkembangan janin di dalam rahim tanpa perlu melakukan pembedahan",
    "Mencetak obat tablet secara langsung di apotek",
    "Mengganti seluruh darah manusia dengan air mineral",
    "Membuat pasien tidak pernah merasa lapar lagi",
    "Pencitraan diagnostik medis non-invasif memudahkan penanganan dini penyakit secara tepat dan cepat."
  ],
  [
    "Penggunaan pesawat tanpa awak yang dikendalikan dari jarak jauh menggunakan remote kontrol (Drone) di sektor pertanian modern bermanfaat untuk ...",
    "Memetakan kondisi kesehatan tanaman, memantau kelembapan lahan, dan menyemprotkan pupuk cair secara presisi dari udara",
    "Mengangkut puluhan ton beras dari sawah ke pelabuhan",
    "Membajak tanah sawah di bawah genangan lumpur",
    "Menggantikan fungsi petani dalam memanen buah kelapa",
    "Drone pertanian (precision agriculture) menghemat pemakaian pestisida dan mempercepat pemantauan ratusan hektar sawah."
  ],
  [
    "Kendaraan ramah lingkungan masa kini yang menggunakan motor penggerak bertenaga baterai isi ulang tanpa mengeluarkan asap knalpot beracun adalah ...",
    "Kendaraan Listrik (Electric Vehicle / EV)",
    "Kereta api berbahan bakar batu bara",
    "Sepeda motor bermesin dua tak berasap pekat",
    "Mobil pikap bermesin diesel kuno",
    "Kendaraan listrik mengurangi emisi gas rumah kaca dan ketergantungan terhadap bahan bakar minyak fosil."
  ],
  [
    "Dampak positif dari perkembangan teknologi aplikasi transportasi daring (ojek dan taksi online) bagi masyarakat pengguna adalah ...",
    "Memudahkan memesan jasa antar-jemput penumpang dan barang langsung dari rumah dengan kepastian tarif ongkos yang transparan",
    "Membuat tarif perjalanan naik menjadi sepuluh kali lipat tanpa kepastian",
    "Mewajibkan penumpang mendorong sepeda motor pengemudi",
    "Menghilangkan seluruh sepeda motor dari jalan raya",
    "Integrasi GPS navigasi dan sistem pembayaran digital memudahkan mobilitas warga dan membuka jutaan lapangan kerja baru."
  ],
  [
    "Teknologi pengolahan air laut menjadi air tawar yang dapat diminum dengan cara menyaring molekul garam menggunakan membran berpori sangat kecil dinamakan ...",
    "Desalinasi Reverse Osmosis (Osmosis Terbalik)",
    "Fermentasi air tebu",
    "Pasteurisasi susu sapi",
    "Kondensasi uap belerang",
    "Teknologi desalinasi banyak dibangun di pulau-pulau kecil dan kapal laut untuk mengatasi krisis kelangkaan air tawar."
  ],
  [
    "Pada masa penjajahan Belanda di Indonesia, jalur komunikasi jarak jauh yang dibangun menghubungkan kota-kota penting di Pulau Jawa memanfaatkan jaringan kawat ...",
    "Telegraf darat dan kabel laut antarpulau",
    "Satelit komunikasi luar angkasa",
    "Pipa serat optik internet berkecepatan tinggi",
    "Menara seluler pemancar 5G",
    "Jaringan telegraf pos dibangun kolonial untuk mempercepat pengiriman instruksi militer dan laporan ekonomi perkebunan."
  ],
  [
    "Penemuan lampu pijar listrik oleh Thomas Alva Edison pada akhir abad ke-19 membawa perubahan sosial budaya yang sangat besar bagi kehidupan manusia, yaitu ...",
    "Aktivitas belajar, bekerja di pabrik, dan penerangan jalan dapat berlangsung aman dan nyaman di malam hari tanpa lentera minyak",
    "Manusia tidak lagi membutuhkan waktu tidur di malam hari",
    "Matahari berhenti menyinari bumi di siang hari",
    "Semua lilin dan minyak kelapa dilarang dijual di pasar",
    "Lampu listrik memperpanjang jam produktivitas manusia dan menggantikan lentera api minyak tanah yang berasap dan rawan kebakaran."
  ],
  [
    "Teknologi pendingin ruangan (Air Conditioner / AC) dan lemari pendingin (kulkas) modern wajib menggunakan bahan gas pendingin (refrigerant) yang ramah lingkungan karena ...",
    "Gas pendingin jenis freon lama (CFC) dapat merusak lapisan ozon bumi yang melindungi makhluk hidup dari radiasi ultraviolet",
    "Freon lama membuat air es di kulkas terasa pahit",
    "Gas pendingin baru terbuat dari air kelapa murni",
    "Bahan freon lama membuat mesin kulkas menjadi sangat berat",
    "Protokol Montreal mewajibkan penghapusan zat perusak ozon dan beralih ke hidrofluorokarbon (HFC) ramah lapisan ozon."
  ],
  [
    "Pemanfaatan sistem navigasi satelit GPS (Global Positioning System) pada ponsel pintar pengemudi kendaraan bermanfaat untuk ...",
    "Menunjukkan rute jalan tercepat, memperkirakan waktu tempuh, dan memantau kepadatan titik kemacetan lalu lintas secara langsung",
    "Mengisi bahan bakar bensin kendaraan secara otomatis dari udara",
    "Membuat mobil bisa melompat melewati jurang",
    "Menghilangkan mobil-mobil lain di jalan raya",
    "GPS menerima sinyal dari satelit navigasi global untuk menentukan titik koordinat posisi kendaraan secara akurat."
  ],
  [
    "Salah satu dampak buruk kemajuan teknologi permainan daring (game online) pada anak yang tidak terkontrol adalah ...",
    "Anak menjadi malas belajar, kesehatan mata terganggu akibat paparan radiasi layar, dan kurang berolahraga fisik",
    "Anak menjadi bertambah pintar dalam semua mata pelajaran sekolah secara instan",
    "Anak memiliki tubuh yang sangat kekar dan berotot",
    "Anak tidak perlu lagi makan nasi dan minum air",
    "Kecanduan game daring (gaming disorder) memicu penurunan prestasi belajar dan menurunkan keterampilan sosialisasi anak."
  ],
  [
    "Ciri utama teknologi ramah lingkungan (green technology) yang kini dikembangkan di berbagai belahan dunia adalah ...",
    "Menghasilkan emisi limbah minimal, hemat energi, dan memanfaatkan sumber daya alam terbarukan tanpa merusak kelestarian lingkungan",
    "Menggunakan bahan bakar minyak bumi sebanyak-banyaknya",
    "Membuang limbah kimia langsung ke sungai umum",
    "Menghasilkan suara bising yang sangat memekakkan telinga",
    "Teknologi hijau berorientasi pada keberlanjutan bumi untuk generasi masa depan dengan prinsip Reduce, Reuse, Recycle."
  ],
  [
    "Pemanfaatan panel surya (sel fotovoltaik) di atap gedung sekolah atau rumah merupakan contoh pemanfaatan teknologi energi terbarukan yang mengubah ...",
    "Energi cahaya matahari langsung menjadi energi listrik",
    "Energi tiupan angin menjadi energi bunyi",
    "Energi air terjun menjadi energi minyak tanah",
    "Energi panas bumi menjadi gas elpiji",
    "Sel surya terbuat dari silikon semikonduktor yang melepaskan elektron saat terpapar foton cahaya matahari menghasilkan arus listrik DC."
  ],
  [
    "Teknologi kincir angin pembangkit listrik (PLTB) seperti yang beroperasi di Sidrap dan Jeneponto Sulawesi Selatan memanfaatkan bentang alam daerah yang ...",
    "Memiliki tiupan angin kencang dan stabil sepanjang tahun untuk memutar bilah turbin raksasa penghasil listrik",
    "Berupa lautan es yang tidak pernah mencair",
    "Berupa dasar jurang yang tidak ada angin berhembus",
    "Selalu dilanda banjir bandang air keruh",
    "PLTB memanfaatkan energi kinetik angin ramah lingkungan tanpa emisi polusi karbon dan tanpa bahan bakar fosil."
  ],
  [
    "Kelebihan utama dari penggunaan media surat elektronik (email) dan pesan instan daring dibanding surat pos kertas di era modern adalah ...",
    "Pesan terkirim seketika dalam hitungan detik, hemat biaya kertas dan tinta, serta dapat melampirkan berkas dokumen digital dan foto",
    "Surat pos kertas dapat tiba dalam waktu satu detik ke luar negeri",
    "Email hanya boleh dikirim pada hari Minggu pagi",
    "Pesan instan wajib ditulis menggunakan pena bulu burung",
    "Digitalisasi korespondensi memotong biaya ongkos kirim dan mempercepat koordinasi komunikasi lintas benua secara instan."
  ],
  [
    "Sikap etika digital yang benar yang harus dimiliki setiap orang saat menggunakan ruang media sosial dan internet adalah ...",
    "Menjaga sopan santun berbahasa, menghargai privasi orang lain, dan tidak menyebarkan ujaran kebencian serta berita bohong",
    "Membagikan kata sandi (password) akun kepada semua orang asing",
    "Menghina dan mengejek teman yang berbeda suku di kolom komentar",
    "Menyalin karya tulisan orang lain tanpa mencantumkan sumber pembuatnya",
    "Literasi etika digital (netiket) menjaga ruang siber tetap sehat, beradab, aman, dan mempererat persaudaraan antarsesama."
  ]
];
const sulit = [
  [
    "Perbedaan mendasar antara prinsip kerja mesin lokomotif uap kuno pada abad ke-19 dengan lokomotif diesel-elektrik modern saat ini adalah ...",
    "Lokomotif uap membakar batu bara atau kayu untuk merebus air menghasilkan tekanan uap penggerak piston roda, sedangkan lokomotif diesel-elektrik menggunakan mesin diesel untuk memutar generator penghasil listrik penggerak motor traksi roda",
    "Lokomotif uap menggunakan tenaga baterai aki basah",
    "Lokomotif diesel-elektrik ditarik oleh puluhan ekor kuda dari dalam kabin",
    "Kedua jenis lokomotif menggunakan bahan bakar bensin pertalite yang sama",
    "Transformasi termodinamika mesin uap ke mesin diesel-elektrik meningkatkan efisiensi energi, daya tarik tonase kargo, dan kecepatan jelajah kereta api."
  ],
  [
    "Dalam sejarah penerbangan nasional, peristiwa membanggakan pada tanggal 10 Agustus 1995 saat pesawat N-250 Gatotkaca berhasil terbang perdana di langit Kota Bandung kini diperingati oleh bangsa Indonesia sebagai ...",
    "Hari Kebangkitan Teknologi Nasional (Hakteknas)",
    "Hari Penerbangan Internasional",
    "Hari Perhubungan Nasional",
    "Hari Bakti Dirgantara",
    "Penerbangan N-250 membuktikan bahwa putra-putri Indonesia mampu merancang pesawat berteknologi fly-by-wire canggih secara mandiri."
  ],
  [
    "Konsep \"Revolusi Industri 4.0\" yang saat ini sedang berlangsung di berbagai sektor industri di dunia ditandai dengan integrasi antara ...",
    "Sistem siber-fisik, Internet of Things (IoT), kecerdasan buatan (AI), dan analisis data raksasa (Big Data) dalam otomasi industri",
    "Tenaga kerja manusia yang membajak sawah menggunakan cangkul kayu",
    "Penggunaan mesin uap batu bara di seluruh bengkel sepeda",
    "Penghapusan seluruh komputer dan ponsel pintar dari muka bumi",
    "Revolusi 4.0 menyambungkan mesin-mesin pabrik dengan sensor cerdas dan internet sehingga proses manufaktur berjalan otonom dan efisien."
  ],
  [
    "Teknologi kabel serat optik (fiber optic) yang ditanam di dasar samudra kepulauan Indonesia (Palapa Ring) mampu mengirimkan data internet berkecepatan sangat tinggi karena data ditransmisikan dalam bentuk ...",
    "Gelombang pulsa cahaya inframerah yang dipantulkan di dalam serat kaca murni berkecepatan mendekati kecepatan cahaya",
    "Arus air laut yang mengalir di dalam pipa paralon",
    "Uap belerang panas yang ditekan dari stasiun pompa",
    "Serbuk tembaga halus yang didorong angin kompresor",
    "Total internal reflection pada serat optik memungkinkan transfer terabit data internet per detik melintasi ribuan kilometer tanpa interferensi elektromagnetik."
  ],
  [
    "Proyek infrastruktur jaringan tulang punggung telekomunikasi serat optik nasional yang dibangun pemerintah Indonesia untuk menghubungkan seluruh kabupaten/kota dari Sabang sampai Merauke dinamakan Proyek ...",
    "Palapa Ring (Palapa Ring Barat, Tengah, dan Timur)",
    "Trans-Sumatera Highway",
    "Tol Laut Logistik Nusantara",
    "Satelit Garuda Perkasa",
    "Palapa Ring menghapus jurang kesenjangan digital (digital divide) antara wilayah barat dengan daerah terluar, tertinggal, dan terdepan (3T) di wilayah timur."
  ],
  [
    "Dalam sistem navigasi kapal laut modern, teknologi radar (Radio Detection and Ranging) dan sonar (Sound Navigation and Ranging) bekerja dengan prinsip ...",
    "Memancarkan gelombang radio (radar di udara) atau gelombang suara (sonar di air) lalu menangkap pantulan gema gelombang saat menabrak rintangan karang/kapal lain",
    "Mengirimkan penyelam ke dasar laut untuk meraba batu karang dengan tangan",
    "Menerbangkan merpati pos di depan moncong kapal penunjuk arah",
    "Menggunakan kaca pembesar raksasa untuk melihat dalam kegelapan malam",
    "Ekolokasi elektromagnetik dan akustik mendeteksi posisi, jarak, dan kecepatan rintangan navigasi laut dalam kondisi badai dan kabut pekat."
  ],
  [
    "Perbedaan utama antara jenis satelit komunikasi buatan \"Geostasioner\" (GEO) seperti Satelit Satria-1 dengan satelit orbit rendah (LEO) adalah ...",
    "Satelit geostasioner mengorbit di ketinggian sekitar 36.000 km dengan kecepatan putar menyamai rotasi bumi sehingga posisinya tampak diam tetap di atas wilayah nusantara",
    "Satelit geostasioner terbang di dalam atmosfer pohon kelapa",
    "Satelit LEO tidak bisa mengirimkan sinyal ke bumi",
    "Satelit geostasioner hanya beroperasi pada waktu siang hari",
    "Orbit geostasioner (Clarke Orbit) sangat ideal untuk antena parabola darat karena arah parabola tidak perlu bergerak mengikuti satelit."
  ],
  [
    "Dalam industri manufaktur modern, teknologi mesin cetak tiga dimensi (3D Printer) merevolusi metode pembuatan barang purwarupa (prototipe) karena mampu ...",
    "Mencetak benda padat tiga dimensi lapis demi lapis (additive manufacturing) langsung dari rancangan gambar digital di komputer",
    "Mencetak buku koran berjuta-juta lembar dalam hitungan detik",
    "Menggandakan uang kertas rupiah tanpa izin bank sentral",
    "Menghancurkan besi baja menjadi serbuk debu",
    "3D printing memungkinkan pembuatan suku cadang mesin berpresisi tinggi dengan material filamen plastik, damar, atau logam tanpa cetakan cetak konvensional."
  ],
  [
    "Pemanfaatan sistem \"Barcode\" dan chip \"RFID\" (Radio Frequency Identification) pada logistik gudang barang modern memberikan keunggulan berupa ...",
    "Identifikasi dan pelacakan data keluar-masuk barang secara otomatis dan cepat tanpa perlu pencatatan manual di buku kasir",
    "Membuat ukuran barang di gudang mengecil sendiri",
    "Menghilangkan beban pajak penghasilan perusahaan",
    "Mencegah debu menempel pada kardus barang",
    "Gelombang frekuensi radio RFID membaca ratusan tag barang sekaligus dalam jarak beberapa meter mempercepat manajemen rantai pasok logistik."
  ],
  [
    "Teknologi penyimpanan data di era komputasi modern yang memungkinkan pengguna menyimpan dokumen, foto, dan program di peladen (server) internet tanpa membebani memori lokal perangkat dinamakan ...",
    "Komputasi Awan (Cloud Computing)",
    "Disket magnetik lentur (Floppy Disk)",
    "Kaset pita magnetik radio",
    "Kartu pos berlubang",
    "Layanan cloud (seperti Google Drive, Dropbox, iCloud) memungkinkan data diakses kapan saja dan di mana saja melalui jaringan internet."
  ],
  [
    "Teknologi panel surya terapung (Floating Solar PV) yang dibangun di waduk-waduk raksasa Indonesia (seperti di Waduk Cirata Jawa Barat) memiliki keunggulan teknis dibanding panel surya di daratan yaitu ...",
    "Suhu air waduk memberikan efek pendingin alami yang meningkatkan efisiensi kinerja panel surya serta tidak memakan lahan pertanian yang berharga di daratan",
    "Air waduk membuat panel surya menyerap sinar bulan di malam hari",
    "Panel surya terapung dapat bergerak sendiri seperti perahu motor",
    "Biaya pemasangan panel surya terapung lebih murah daripada membeli lilin",
    "Penutupan permukaan air oleh panel surya juga mengurangi laju penguapan air waduk dan menekan pertumbuhan alga gulma air."
  ],
  [
    "Salah satu tantangan etika dan privasi terbesar dari pesatnya perkembangan media digital saat ini adalah maraknya kejahatan \"Phishing\" (Pengelabuan Siber), yaitu ...",
    "Upaya penipuan rekayasa sosial untuk mencuri informasi sensitif seperti kata sandi, PIN perbankan, dan data pribadi dengan menyamar sebagai pihak resmi melalui tautan pesan palsu",
    "Hobi memancing ikan di kolam pemancingan umum",
    "Aktivitas mengedit video menggunakan efek suara musik",
    "Pemasangan antena radio amatir di atas atap rumah",
    "Pengguna internet harus waspada dan tidak boleh mengklik tautan mencurigakan atau memberikan kode OTP rahasia kepada siapa pun."
  ],
  [
    "Dampak sosiologis dari perubahan alat bajak sawah bertenaga hewan kerbau menjadi mesin traktor mekanik di perdesaan Indonesia adalah ...",
    "Mempercepat pengolahan lahan dan mengatasi keterbatasan tenaga kerja pemuda desa, namun mengurangi tradisi gotong royong sambatan antar-petani di sawah",
    "Menghilangkan semua sawah di Indonesia dan menggantinya dengan kolam renang",
    "Membuat para petani di desa menjadi presiden negara",
    "Mewajibkan semua kerbau peliharaan dipindahkan ke kebun binatang",
    "Mekanisasi agraris menggeser relasi sosial komunal tradisional menuju efisiensi rasional individualistis dalam sistem perekonomian pedesaan."
  ],
  [
    "Dalam sistem transportasi perkotaan modern, konsep \"Integrasi Antarmoda Transportasi\" (seperti JakLingko di Jakarta) bertujuan untuk ...",
    "Menghubungkan berbagai rute dan moda angkutan umum (mikrotrans, bus Transjakarta, LRT, MRT) dalam satu sistem tiket dan tarif pembayaran terpadu yang praktis",
    "Melarang warga menggunakan sepeda motor di gang perumahan",
    "Mewajibkan semua penumpang memakai seragam warna merah",
    "Menghapuskan stasiun kereta api di seluruh penjuru kota",
    "Konektivitas fisik halte terintegrasi dan tiket kartu elektronik memudahkan perpindahan penumpang dan mendorong masyarakat beralih dari mobil pribadi."
  ],
  [
    "Teknologi penyaringan udara modern berventilasi HEPA (High-Efficiency Particulate Air) pada kabin pesawat terbang dan ruang operasi rumah sakit dirancang untuk ...",
    "Menyaring dan menangkap 99,97% partikel mikroskopis debu, serbuk sari, bakteri, dan droplet virus sehingga udara kabin tetap steril dan sehat",
    "Menyemprotkan gas wangi parfum secara kontinu setiap menit",
    "Menurunkan kadar oksigen agar penumpang mengantuk dan tidur lelap",
    "Mengubah udara dingin menjadi asap panas membara",
    "Sirkulasi udara kabin pesawat berganti setiap 2-3 menit melewati filter HEPA menjaga kebersihan udara dari patogen menular."
  ],
  [
    "Alat transportasi darat bersejarah di Jakarta yang pernah beroperasi pada akhir abad ke-19 hingga awal abad ke-20 yang melaju di atas rel jalan raya bertenaga tarikan kuda lalu diganti uap dan listrik adalah ...",
    "Trem (Trem Kuda, Trem Uap, dan Trem Listrik Batavia)",
    "Becak dayung bertenaga manusia",
    "Kereta kuda kencana keraton",
    "Sepeda ontel hias",
    "Trem kota menjadi angkutan massal utama kota Batavia sebelum akhirnya digantikan oleh bus kota dan dihapus pada era 1960-an."
  ],
  [
    "Teknologi \"Kecerdasan Buatan Generatif\" (Generative AI) yang kini marak digunakan memiliki kemampuan unik yaitu ...",
    "Mampu menciptakan konten baru seperti teks esai, gambar visual, baris kode program, dan komposisi musik berdasarkan instruksi petunjuk (prompt) dari pengguna",
    "Mampu mengubah batu kali menjadi kue cokelat lezat",
    "Menyembuhkan patah tulang tanpa bantuan dokter bedah",
    "Menghapus ingatan manusia secara otomatis di malam hari",
    "AI generatif dilatih menggunakan miliaran data pengetahuan untuk menghasilkan sintesis karya kreatif digital baru secara instan."
  ],
  [
    "Teknologi baterai isi ulang berbasis \"Lithium-Ion\" (Li-Ion) dan baterai \"Nikel\" yang menjadi jantung revolusi mobil listrik dan telepon pintar memiliki keunggulan utama yaitu ...",
    "Kerapatan energi tinggi dalam bobot yang ringan, tidak memiliki efek memori penurunan kapasitas drastis, dan dapat diisi ulang ribuan siklus",
    "Dapat menyala terang benderang seperti kembang api saat diisi daya",
    "Terbuat dari bahan kayu pohon jati yang sangat keras",
    "Dapat menghasilkan beras dan sayuran di dalam baterai",
    "Kerapatan energi elektrokimia litium-nikel memungkinkan penyimpanan daya besar dalam kemasan baterai kompak dan efisien."
  ],
  [
    "Dalam dunia penerbangan modern, sistem navigasi autopilot pada kokpit pesawat terbang komersial dikendalikan oleh sistem komputer penerbangan (FMC) yang berfungsi ...",
    "Menjaga arah terbang, ketinggian jelajah, dan kecepatan pesawat secara otomatis mengikuti rencana rute navigasi yang telah diprogram pilot",
    "Memasak makanan hangat untuk seluruh penumpang di kabin",
    "Membuka pintu darurat pesawat saat melayang di angkasa",
    "Menggantikan peran pilot secara mutlak sehingga pilot tidak perlu berada di kokpit",
    "Autopilot meringankan beban kerja konsentrasi pilot pada fase terbang jelajah (cruise) panjang dan meningkatkan keselamatan navigasi udara."
  ],
  [
    "Pemanfaatan teknologi satelit penginderaan jauh (Remote Sensing) oleh Badan Informasi Geospasial (BIG) dan BMKG di Indonesia digunakan secara strategis untuk ...",
    "Memantau titik panas kebakaran hutan (hotspot), memprediksi pergerakan badai siklon tropis, dan memetakan perubahan tutupan lahan hutan nusantara dari luar angkasa",
    "Mengatur lampu lalu lintas di jalan raya perkotaan secara manual",
    "Mendengarkan percakapan telepon warga di dalam rumah",
    "Mengambil ikan di laut secara langsung menggunakan lengan robot luar angkasa",
    "Citra satelit spektral multisensor memotret kondisi bumi secara kontinu untuk mitigasi bencana alam hidrometeorologi dan tata ruang wilayah."
  ]
];
const hots = [
  [
    "Di era digital saat ini, seorang siswa kelas 5 SD sering mengunggah foto kegiatan sehari-harinya, alamat lengkap rumah, nomor telepon orang tua, dan nama sekolahnya ke media sosial publik tanpa privasi. Ditinjau dari aspek keamanan digital (cyber security) dan perlindungan anak, bahaya terbesar dari tindakan siswa tersebut dan sikap bijak yang seharusnya diambil adalah ...",
    "Bahayanya data pribadi tersebut dapat disalahgunakan oleh pihak jahat untuk kejahatan penculikan, penipuan, atau perundungan; sikap bijak adalah mengunci akun privasi media sosial, tidak membagikan data identitas rahasia ke publik, dan selalu meminta bimbingan orang tua",
    "Bahayanya ponsel pintar siswa akan langsung meledak mengeluarkan api",
    "Bahayanya teman-teman sekelas tidak bisa melihat foto liburan siswa",
    "Tindakan tersebut sangat aman dan harus ditiru oleh semua anak di Indonesia",
    "Edukasi jejak digital (digital footprint) dan perlindungan data privat anak di ruang siber krusial mencegah eksploitasi dan tindak kriminal rekayasa sosial."
  ],
  [
    "Sebuah desa terpencil di pedalaman pulau belum terjangkau jaringan listrik kabel PLN. Warga desa memiliki aliran sungai kecil berarus deras yang mengalir sepanjang tahun di dekat perkampungan. Penerapan teknologi energi ramah lingkungan tepat guna yang paling cocok dan murah untuk menerangi rumah warga desa tersebut adalah ...",
    "Membangun Pembangkit Listrik Tenaga Mikrohidro (PLTMH) sederhana dengan kincir air turbin kecil yang memanfaatkan aliran arus sungai untuk memutar generator listrik desa",
    "Membeli pembangkit listrik tenaga nuklir raksasa dari luar negeri",
    "Menyalakan ribuan batang lilin setiap malam di lapangan desa",
    "Menarik kabel colokan listrik dari kota terdekat sejauh 500 kilometer",
    "PLTMH memanfaatkan potensi energi kinetik air sungai pedesaan berdaya 5–100 kW secara mandiri, murah, dan berkelanjutan."
  ],
  [
    "Kemajuan teknologi mesin pendingin ruangan (AC) dan kulkas di masa lalu menggunakan senyawa gas CFC (Freon). Para ilmuwan menemukan bahwa pelepasan gas CFC ke udara menyebabkan penipisan lapisan ozon bumi di stratosfer. Hubungan antara penipisan lapisan ozon akibat gas pendingin lama dengan kesehatan manusia di bumi adalah ...",
    "Lapisan ozon berfungsi menyerap radiasi sinar ultraviolet B (UV-B) berbahaya dari matahari; jika lapisan ozon menipis, intensitas radiasi UV-B yang lolos ke bumi meningkat memicu kanker kulit dan katarak mata pada manusia",
    "Lapisan ozon yang menipis membuat air hujan di bumi berubah menjadi air panas mendidih",
    "Penipisan ozon membuat bumi menjadi gelap gulita tanpa sinar matahari",
    "Gas CFC membuat manusia kehilangan kemampuan berbicara",
    "Kimia atmosfer: radikal klorin dari fotolisis CFC mengkatalisis penguraian molekul ozon (O3) memicu lonjakan fluks radiasi UV mutagenik ke biosfer."
  ],
  [
    "Di sebuah kawasan pertanian pedesaan, para petani beralih secara serentak dari menggunakan cangkul dan kerbau menjadi menggunakan traktor mesin dan mesin perontok padi (combine harvester). Evaluasi dampak sosial dan ekonomi ganda dari mekanisasi pertanian modern tersebut bagi kehidupan masyarakat desa adalah ...",
    "Di satu sisi waktu pengerjaan sawah menjadi jauh lebih cepat, biaya produksi hemat, dan hasil panen melimpah; namun di sisi lain mengurangi kesempatan kerja bagi para buruh tani penggarap tradisional yang tidak memiliki traktor",
    "Mekanisasi membuat tanah sawah berubah menjadi batu karang keras",
    "Semua petani di desa langsung kehilangan seluruh padinya",
    "Traktor membuat beras berubah warna menjadi hitam pekat",
    "Dilema transformasi teknologi agraris: lonjakan efisiensi produktivitas berhadapan dengan disrupsi serapan tenaga kerja buruh tani subsisten perdesaan."
  ],
  [
    "Banyak anak usia sekolah dasar yang saat ini menghabiskan waktu lebih dari 6 jam setiap hari di depan layar telepon pintar untuk bermain game daring dan media sosial. Jika kebiasaan ini dibiarkan terus-menerus tanpa pembatasan dari orang tua, analisis dampak negatif terhadap perkembangan fisik dan mental anak adalah ...",
    "Mata mudah lelah dan berisiko minus (rabun jauh), postur tubuh bungkuk akibat kurang bergerak fisik, serta emosi menjadi mudah marah (temperamental) saat gawai diambil",
    "Anak akan bertambah tinggi sepuluh sentimeter setiap hari",
    "Anak tidak akan pernah merasa lapar atau haus selamanya",
    "Kecanduan gawai membuat gigi anak menjadi rontok seketika",
    "Sedentary lifestyle akibat screen time berlebih mengganggu ritme sirkadian tidur, memicu obesitas anak, dan menurunkan regulasi kontrol emosi."
  ],
  [
    "Sebelum adanya sistem navigasi satelit (GPS) dan peta digital pada ponsel pintar, seorang pengemudi kendaraan antarkota harus mengandalkan peta kertas atlas dan sering berhenti bertanya kepada warga di tepi jalan. Analisis keunggulan peta digital berbasis GPS modern dibanding peta kertas konvensional adalah ...",
    "Peta digital berbasis GPS memberikan pembaruan informasi titik kemacetan secara langsung (real-time), memandu rute belokan bersuara otomatis, dan dapat menghitung estimasi waktu tiba secara akurat",
    "Peta kertas atlas bisa berbicara mengeluarkan suara pengemudi",
    "Peta digital GPS tidak memerlukan daya baterai ponsel pintar sama sekali",
    "Peta kertas atlas selalu menunjukkan rute yang salah secara sengaja",
    "Sistem Informasi Geografis (SIG) bergerak dan triangulasi konstelasi satelit menghadirkan data navigasi dinamis adaptif terhadap dinamika lalu lintas."
  ],
  [
    "Dalam suatu musibah bencana gempa bumi dahsyat di daerah terisolasi yang memutus jalur jalan darat dan menumbangkan tiang kabel telepon, bagaimana perpaduan teknologi helikopter, pesawat nirawak (drone), dan telepon satelit menjadi penentu keberhasilan penyelamatan korban bencana?",
    "Drone memetakan lokasi korban dan kerusakan dari udara dengan cepat; telepon satelit menghubungkan komunikasi tim penyelamat tanpa sinyal seluler; dan helikopter mendistribusikan logistik medis darurat langsung ke lokasi terisolasi",
    "Helikopter bertugas menyedot air banjir dari atas langit",
    "Telepon satelit digunakan untuk menonton video hiburan kartun",
    "Pesawat drone bertugas mengangkut ribuan mobil warga yang tertimpa reruntuhan",
    "Tripartit teknologi SAR darurat mengatasi kendala aksesibilitas fisik dan kelumpuhan infrastruktur komunikasi terestrial pada masa tanggap darurat."
  ],
  [
    "Munculnya teknologi transaksi keuangan digital (dompet digital, pembayaran paylater, dan belanja daring satu klik) memudahkan masyarakat membeli barang kapan saja. Namun di kalangan remaja dan generasi muda, kemudahan ini seringkali memicu gaya hidup konsumtif yang boros. Tindakan pengendalian diri yang cerdas secara literasi finansial dalam menggunakan uang digital adalah ...",
    "Membuat daftar skala prioritas antara kebutuhan primer dan keinginan sekunder, menyisihkan uang tabungan di awal sebelum berbelanja, dan tidak berutang untuk barang konsumtif yang tidak penting",
    "Menghabiskan seluruh saldo dompet digital setiap hari agar tidak dicuri orang",
    "Membeli semua barang diskon di toko online meskipun tidak dibutuhkan di rumah",
    "Meminjam uang di aplikasi pinjaman online sebanyak-banyaknya untuk pamer",
    "Literasi keuangan digital menuntut disiplin anggaran (budgeting constraint) agar kemudahan bertransaksi tidak menjebak individu ke dalam perilaku impulsif."
  ],
  [
    "Di bidang pendidikan, saat terjadi pandemi global, teknologi pembelajaran jarak jauh (PJJ) menggunakan aplikasi konferensi video (Zoom/Google Meet) dan ruang kelas daring (Google Classroom) menjadi penyelamat proses belajar mengajar. Analisis hikmah dan transformasi pendidikan dari pengalaman belajar daring tersebut bagi sekolah modern adalah ...",
    "Guru dan siswa menjadi terbiasa memanfaatkan teknologi digital untuk mencari sumber belajar interaktif global, materi pelajaran dapat diakses fleksibel kapan saja, dan kolaborasi pembelajaran menjadi tanpa batas ruang",
    "PJJ membuktikan bahwa sekolah fisik dan guru manusia tidak diperlukan lagi di dunia",
    "Belajar daring membuat semua siswa mendapatkan nilai 100 tanpa perlu belajar",
    "Aplikasi konferensi video membuat anak-anak dilarang membaca buku pelajaran kertas",
    "Model pembelajaran bauran (blended learning) memperkaya pedagogi sekolah dengan menggabungkan kehangatan interaksi tatap muka dan kekayaan sumber daya digital."
  ],
  [
    "Banyak berita bohong (hoaks) di media sosial yang sengaja dibuat menggunakan judul berita yang sangat heboh dan memancing kemarahan (clickbait) serta menggunakan foto editan manipulasi. Langkah berpikir kritis dan bijak (literasi digital) yang harus dilakukan siswa sebelum mempercayai dan membagikan suatu berita di grup obrolan adalah ...",
    "Memeriksa keaslian sumber berita dari situs media massa resmi terpercaya, membaca isi berita secara utuh (tidak hanya membaca judul), dan membandingkan dengan sumber informasi terpercaya lainnya",
    "Langsung membagikan berita tersebut ke semua grup percakapan agar menjadi orang pertama yang menyebarkan",
    "Menghapus aplikasi percakapan dari ponsel pintar seketika",
    "Mempercayai seluruh berita yang memuat kata \"sebarkan demi kebaikan\"",
    "Verifikasi fakta (fact-checking) dan evaluasi kredibilitas domain berita menghentikan rantai disinformasi (fake news) di masyarakat digital."
  ],
  [
    "Pembangunan jalan tol layang (seperti Jalan Tol Layang MBZ di atas Tol Jakarta-Cikampek) dan jalur kereta layang (LRT) di atas koridor jalan yang sudah padat merupakan solusi teknologi rekayasa sipil transportasi untuk ...",
    "Menambah kapasitas volume jalur lalu lintas kendaraan tanpa perlu menggusur ribuan perumahan padat penduduk di bawahnya yang memerlukan biaya pembebasan lahan sangat mahal",
    "Membuat mobil bisa terbang melintasi awan mendung",
    "Menghalangi sinar matahari agar jalan di bawah menjadi gelap gulita",
    "Menyediakan arena bermain sepatu roda bagi anak-anak di atas jalan tol",
    "Optimalisasi ruang spasial vertikal (elevated infrastructure) mengatasi kelangkaan lahan perkotaan dan mereduksi friksi hambatan samping jalan arteri."
  ],
  [
    "Teknologi kendaraan bermotor berbahan bakar minyak menghasilkan gas buang berbahaya seperti Karbon Monoksida (CO) dan Timbal. Beberapa kota besar di dunia mulai menerapkan kebijakan zona emisi rendah (Low Emission Zone) yang melarang kendaraan bermesin bensin/diesel kuno masuk ke pusat kota. Dampak positif jangka panjang dari kebijakan zonasi emisi ini bagi kesehatan warga perkotaan adalah ...",
    "Kualitas udara kota menjadi jauh lebih bersih dan segar, serta menurunkan angka penyakit infeksi saluran pernapasan akut (ISPA) dan asma pada anak-anak dan lansia",
    "Warga kota dilarang keluar rumah selamanya",
    "Suhu udara kota berubah menjadi sangat panas membara",
    "Semua apotek di kota menjadi bangkrut dan tutup",
    "Reduksi partikulat debu polutan PM2.5 dan gas buang beracun knalpot secara langsung memulihkan indeks standar pencemar udara (ISPU) sehat bagi paru-paru publik."
  ],
  [
    "Penggunaan teknologi robot pembersih otomatis (vacuum cleaner robot) dan peralatan rumah tangga pintar (smart home) yang terhubung internet di rumah perkotaan dirancang untuk ...",
    "Membantu meringankan beban pekerjaan membersihkan rumah secara efisien dan terjadwal sehingga pemilik rumah memiliki lebih banyak waktu berkualitas bersama keluarga",
    "Menggantikan peran orang tua dalam mengasuh dan mendidik anak di rumah",
    "Membuat anak-anak menjadi malas dan tidak mau merapikan mainan sendiri",
    "Mematikan seluruh lampu rumah secara tiba-tiba di malam hari",
    "Otomasi domestik pintar mereduksi beban tenaga kerja rumah tangga rutin melalui integrasi sensor cerdas dan penjadwalan via smartphone."
  ],
  [
    "Teknologi desalinasi air laut bertenaga surya di pulau-pulau kecil Indonesia seringkali mengalami kendala biaya perawatan membran penyaring yang mahal jika tersumbat lumut dan lumpur. Tindakan pengelolaan lingkungan yang harus dijaga masyarakat pesisir di sekitar instalasi desalinasi air laut agar mesin penyaring awet adalah ...",
    "Menjaga kebersihan perairan pantai dari sampah plastik dan limbah rumah tangga serta melindungi terumbu karang di sekitar pipa hisap air laut agar air yang masuk tetap jernih",
    "Membuang minyak goreng bekas ke dekat pipa hisap desalinasi",
    "Menebang pohon bakau di sekitar pantai penyulingan air",
    "Menaburi air laut dengan pasir bangunan agar kotor",
    "Kualitas air baku (intake water quality) yang jernih mereduksi beban bio-fouling pada membran semipermeabel dan memperpanjang umur operasional membran."
  ],
  [
    "Perkembangan teknologi kamera ponsel cerdas saat ini sudah sangat canggih dengan resolusi puluhan megapixel dan fitur perekam video berdefinisi tinggi. Namun seringkali orang menyalahgunakannya dengan merekam orang lain secara diam-diam tanpa izin lalu mengunggahnya ke media sosial demi konten viral. Pelanggaran norma etika dan hukum dari perilaku tersebut adalah ...",
    "Melanggar hak privasi dan kehormatan orang lain, serta berpotensi dijerat sanksi hukum Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)",
    "Mendapatkan penghargaan medali emas dari kementerian sosial",
    "Membuat ponsel pintar kehabisan daya baterai secara permanen",
    "Tidak ada pelanggaran sama sekali karena di dunia maya semua orang bebas merekam apa pun",
    "Etika rekam digital dan kepatuhan hukum privasi personal: setiap individu berhak atas perlindungan citra diri (right to privacy) dari eksploitasi visual tanpa persetujuan."
  ],
  [
    "Ketika para petani garam tradisional di Madura masih mengandalkan penguapan air laut bertenaga sinar matahari di lahan terbuka, produksi garam seringkali anjlok saat musim penghujan tiba. Inovasi teknologi ramah lingkungan berupa \"Rumah Garam Prisma Tertutup\" (Geomembran Plastik UV) berhasil memecahkan masalah tersebut karena ...",
    "Plastik transparan UV menahan air hujan agar tidak mencairkan garam namun tetap meloloskan panas matahari untuk menguapkan air laut sehingga petani tetap bisa memproduksi garam sepanjang tahun",
    "Rumah prisma membuat air laut berubah menjadi emas batangan",
    "Petani tidak perlu lagi menggunakan air laut untuk membuat garam",
    "Rumah prisma menghasilkan garam dingin seperti es krim",
    "Teknologi rumah garam geomembran menerapkan efek rumah kaca mikro mempercepat evaporasi kristalisasi garam tanpa terganggu guyuran presipitasi air hujan."
  ],
  [
    "Dalam industri perikanan modern, kapal penangkap ikan nelayan dilengkapi dengan alat \"Fish Finder\" yang memancarkan gelombang sonar ke bawah laut. Hubungan antara teknologi fish finder dengan efisiensi operasional melaut nelayan adalah ...",
    "Fish finder mendeteksi keberadaan dan kedalaman kawanan gerombolan ikan secara akurat di bawah kapal sehingga nelayan tidak perlu membuang bahan bakar solar berlayar tanpa arah mencari ikan",
    "Fish finder bertugas menarik ikan langsung melompat masuk ke dalam kuali masak",
    "Alat tersebut membuat air laut di sekeliling kapal mengering seketika",
    "Fish finder membuat semua ikan di laut tertidur pulas",
    "Akurasi deteksi biomassa ikan pelagis berbasis sonar mereduksi fishing effort (waktu jelajah dan konsumsi BBM) dan meningkatkan produktivitas tangkapan per trip nelayan."
  ],
  [
    "Di era modern saat ini, buku cetak kertas konvensional mulai banyak berdampingan dengan buku elektronik digital (E-Book) yang dapat dibaca di layar tablet atau komputer. Analisis perbandingan dampak lingkungan hidup dan kenyamanan membaca antara buku kertas dan buku elektronik adalah ...",
    "Buku elektronik menghemat penggunaan kayu pohon hutan dan kertas serta mudah dibawa ribuan judul dalam satu gawai; namun buku kertas tidak memancarkan radiasi cahaya layar biru sehingga lebih nyaman bagi kesehatan mata saat membaca lama",
    "Buku elektronik tidak membutuhkan listrik sama sekali",
    "Buku kertas terbuat dari lelehan plastik daur ulang berbahaya",
    "Kedua jenis buku dilarang dibaca oleh siswa di perpustakaan sekolah",
    "Simbiosis literasi media: efisiensi ekologis reduksi pulp kertas pada e-book berimbang dengan ergonomi kenyamanan visual non-emissive pada kertas buku fisik."
  ],
  [
    "Teknologi telekonferensi video dan tanda tangan elektronik tersertifikasi di era modern memungkinkan pejabat negara dan pimpinan perusahaan mengadakan rapat penting dan menandatangani perjanjian kerjasama resmi antarpulau tanpa harus hadir fisik di satu ruangan. Keuntungan strategis nasional dari pemanfaatan teknologi birokrasi digital ini adalah ...",
    "Menghemat anggaran belanja negara untuk perjalanan dinas dan tiket pesawat, mempercepat pengambilan keputusan penting bagi rakyat, serta mengurangi jejak emisi karbon transportasi",
    "Mewajibkan semua kantor kementerian pemerintahan ditutup selamanya",
    "Membuat para pejabat tidak perlu bekerja sama sekali di kantor",
    "Menghilangkan fungsi tanda tangan dalam perjanjian resmi",
    "Digitalisasi tata kelola pemerintahan (E-Government / SPBE) mendorong efisiensi belanja fiskal dan mempercepat respon kebijakan publik secara transparan."
  ],
  [
    "Mengapa semboyan \"Teknologi adalah pelayan yang sangat baik, tetapi tuan yang sangat buruk\" (Technology is a useful servant but a dangerous master) menjadi pedoman hidup yang sangat penting bagi generasi muda Indonesia di era serba digital abad ke-21?",
    "Karena teknologi seharusnya kita kendalikan sebagai alat bantu yang mencerdaskan, mempermudah hidup, dan memajukan peradaban; bukan sebaliknya kita yang diperbudak oleh kecanduan gawai, kelalaian waktu, dan degradasi moral akibat teknologi",
    "Karena semua komputer dan robot di dunia memiliki niat jahat untuk menyerang manusia",
    "Karena teknologi membuat manusia dilarang belajar matematika dan sains",
    "Karena manusia wajib menyembah mesin traktor dan ponsel pintar di rumah",
    "Apropriasi humanistik teknologi: manusia sebagai subjek moral pemegang kendali etika harus memposisikan inovasi teknologi demi kemaslahatan martabat kemanusiaan."
  ]
];

module.exports = {
  name: 'Perkembangan Teknologi, Transportasi & Komunikasi dari Masa ke Masa',
  mudah,
  sedang,
  sulit,
  hots
};
