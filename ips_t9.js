// Topik 9: Keragaman Hayati, Garis Wallace-Weber & Kebudayaan Nusantara
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Garis khayal yang memisahkan wilayah persebaran fauna tipe Asiatis dengan fauna tipe Peralihan (Wallacea) di Indonesia adalah Garis ...",
    "Wallace",
    "Weber",
    "Khatulistiwa",
    "Greenwich",
    "Garis Wallace melintasi Selat Makassar hingga Selat Lombok di antara Bali dan Lombok."
  ],
  [
    "Garis khayal yang memisahkan wilayah persebaran fauna tipe Peralihan dengan fauna tipe Australis di Indonesia bagian timur adalah Garis ...",
    "Weber",
    "Wallace",
    "Ekuator",
    "Meridian",
    "Garis Weber berada di sebelah timur Sulawesi dan Nusa Tenggara membatasi wilayah fauna Maluku-Papua."
  ],
  [
    "Hewan mamalia bercula satu yang sangat langka dan dilindungi di Taman Nasional Ujung Kulon Banten adalah ...",
    "Badak jawa",
    "Gajah sumatera",
    "Orangutan kalimantan",
    "Tapir sumatera",
    "Badak jawa (Rhinoceros sondaicus) hanya tersisa puluhan ekor di semenanjung Ujung Kulon."
  ],
  [
    "Kadal purba pemangsa raksasa yang merupakan satwa endemik langka di Provinsi Nusa Tenggara Timur adalah ...",
    "Komodo",
    "Biawak air",
    "Bunglon surai",
    "Tokek pohon",
    "Komodo (Varanus komodoensis) hidup secara alami di Pulau Komodo, Rinca, Gili Motang, dan Flores Barat."
  ],
  [
    "Burung surga berbulu sangat indah dan eksotis yang merupakan fauna khas dari tanah Papua adalah ...",
    "Cendrawasih",
    "Merak hijau",
    "Maleo senkawor",
    "Kasuari gelambir",
    "Burung cendrawasih (Paradisaeidae) dijuluki sebagai \"Bird of Paradise\" karena keindahan bulu tarian kawinnya."
  ],
  [
    "Bunga raksasa tanpa daun dan batang yang mengeluarkan aroma busuk menyengat di hutan Bengkulu dan Sumatera adalah ...",
    "Rafflesia arnoldii",
    "Kantong semar",
    "Bunga melati putih",
    "Anggrek bulan",
    "Rafflesia arnoldii ditemukan pertama kali oleh Thomas Stamford Raffles dan Dr. Joseph Arnold di Bengkulu tahun 1818."
  ],
  [
    "Kayu beraroma harum sangat mahal yang banyak tumbuh alami dan menjadi komoditas unggulan di Nusa Tenggara Timur adalah ...",
    "Kayu cendana",
    "Kayu ulin",
    "Kayu sengon",
    "Kayu kapuk",
    "Kayu cendana (Santalum album) dimanfaatkan untuk bahan minyak wangi, dupa dupa ritual, dan kerajinan ukir bernilai tinggi."
  ],
  [
    "Kayu besi yang sangat keras, tahan lapuk air tawar/asin, dan menjadi bahan baku utama rumah panggung suku Dayak di Kalimantan adalah ...",
    "Kayu ulin",
    "Kayu pinus",
    "Kayu jati",
    "Kayu balsa",
    "Kayu ulin (Eusideroxylon zwageri) dijuluki kayu besi Kalimantan karena kekuatannya yang semakin keras jika terendam air."
  ],
  [
    "Rumah adat khas suku Minangkabau di Sumatera Barat dengan atap melengkung runcing menyerupai tanduk kerbau dinamakan Rumah ...",
    "Gadang",
    "Tongkonan",
    "Joglo",
    "Honai",
    "Atap runcing Rumah Gadang disebut gonjong, yang melambangkan kemenangan kerbau Minangkabau."
  ],
  [
    "Rumah adat suku Toraja di Sulawesi Selatan yang memiliki atap melengkung menyerupai perahu atau tanduk kerbau menjulang adalah Rumah ...",
    "Tongkonan",
    "Lamin",
    "Gadang",
    "Sasak",
    "Rumah Tongkonan dihiasi deretan tanduk kerbau hasil upacara adat pemakaman Rambu Solo di tiang utamanya."
  ],
  [
    "Rumah adat tradisional masyarakat Jawa yang memiliki empat tiang utama (soko guru) penyangga atap tumpang adalah Rumah ...",
    "Joglo",
    "Honai",
    "Bolon",
    "Tambi",
    "Rumah Joglo terdiri dari bagian pendapa terbuka di depan, pringgitan, dan senthong tempat sakral di bagian dalam."
  ],
  [
    "Rumah adat suku Dani di pedalaman Lembah Baliem Papua yang berbentuk bundar dengan atap jerami atau ilalang tanpa jendela adalah Rumah ...",
    "Honai",
    "Gadang",
    "Joglo",
    "Lamin",
    "Bentuk bulat tanpa jendela pada Rumah Honai dirancang untuk menahan hawa dingin pegunungan Papua."
  ],
  [
    "Rumah adat panjang suku Dayak di Kalimantan Timur tempat tinggal bersama puluhan keluarga dalam satu klan disebut Rumah ...",
    "Lamin",
    "Tongkonan",
    "Baileo",
    "Honai",
    "Rumah Lamin dapat mencapai panjang hingga 300 meter dan bertumpu pada tiang panggung kayu ulin raksasa."
  ],
  [
    "Senjata tradisional pusaka berupa keris dengan bilah berluk atau lurus berasal dari kebudayaan suku bangsa ...",
    "Jawa",
    "Dayak",
    "Papua",
    "Minahasa",
    "Keris diakui UNESCO sebagai Warisan Budaya Takbenda Dunia dari Indonesia pada tahun 2005."
  ],
  [
    "Senjata tradisional khas masyarakat Aceh yang memiliki bentuk melengkung runcing menyerupai huruf L atau kaligrafi bismillah adalah ...",
    "Rencong",
    "Mandau",
    "Kujang",
    "Badik",
    "Rencong diselipkan di pinggang depan oleh para pejuang Aceh sebagai simbol harga diri dan keberanian melawan penjajah."
  ],
  [
    "Senjata tajam tradisional suku Dayak di Pulau Kalimantan yang bilahnya sering dihiasi ukiran kuningan dan hulu dari tanduk rusa adalah ...",
    "Mandau",
    "Kujang",
    "Keris",
    "Celurit",
    "Mandau merupakan senjata pusaka perang dan alat bertahan hidup di hutan rimba yang disakralkan suku Dayak."
  ],
  [
    "Senjata pusaka tradisional suku Sunda di Jawa Barat yang memiliki bentuk khas melengkung dengan lubang-lubang kecil adalah ...",
    "Kujang",
    "Rencong",
    "Badik",
    "Golok Betawi",
    "Kujang merupakan simbol identitas kejayaan Kerajaan Pajajaran dan masyarakat Pasundan."
  ],
  [
    "Tari tradisional dari Aceh yang dimainkan secara kompak oleh puluhan penari duduk bersimpuh sambil menepuk dada dan lantai secara serempak adalah Tari ...",
    "Saman",
    "Kecak",
    "Piring",
    "Jaipong",
    "Tari Saman suku Gayo diakui UNESCO sebagai Warisan Budaya Takbenda Dunia kategori mendesak dilestarikan."
  ],
  [
    "Tari tradisional dari Bali yang penarinya terdiri dari puluhan pria duduk melingkar sambil mengangkat kedua tangan berseru \"cak-cak-cak\" adalah Tari ...",
    "Kecak",
    "Pendet",
    "Legong",
    "Barong",
    "Tari Kecak diciptakan oleh seniman Wayan Limbak dan Walter Spies mengangkat fragmen wiracarita epos Ramayana."
  ],
  [
    "Alat musik tradisional Jawa Barat yang terbuat dari pipa-pipa bambu dan dibunyikan dengan cara digoyangkan hingga menghasilkan nada adalah ...",
    "Angklung",
    "Sasando",
    "Kolintang",
    "Gamelan",
    "Angklung diakui UNESCO sebagai Warisan Budaya Takbenda Dunia kemanusiaan sejak tahun 2010."
  ]
];

const sedang = [
  [
    "Hewan mamalia berkantung pohon yang endemik di hutan belantara Pulau Papua dan tergolong tipe fauna Australis adalah ...",
    "Kanguru pohon (Dendrolagus)",
    "Bekantan monyet belanda",
    "Harimau sumatera",
    "Orangutan kalimantan",
    "Kanguru pohon beradaptasi memanjat ranting pohon kanopi hutan hujan tropis Papua."
  ],
  [
    "Burung maleo senkawor (Macrocephalon maleo) yang memiliki tonjolan hitam di kepala dan mengubur telurnya di pasir panas bumi merupakan fauna endemik Pulau ...",
    "Sulawesi",
    "Sumatera",
    "Kalimantan",
    "Jawa",
    "Burung maleo memanfaatkan panas bumi vulkanik atau pasir pantai untuk menetaskan telurnya yang berukuran raksasa."
  ],
  [
    "Mamalia terkecil di dunia jenis primata bermata bulat besar yang hidup noktural (aktif malam hari) di pohon-pohon Pulau Sulawesi adalah ...",
    "Tarsius (Tarsius spectrum)",
    "Bekantan",
    "Kukang jawa",
    "Lutung hitam",
    "Tarsius dapat memutar kepalanya hingga 180 derajat untuk memantau mangsa serangga di kegelapan rimba."
  ],
  [
    "Mamalia sapi liar kerdil pemalu bertanduk lurus ke belakang yang menjadi satwa endemik pulau Sulawesi dan terancam punah adalah ...",
    "Anoa (Bubalus depressicornis)",
    "Banteng jawa",
    "Badak sumatera",
    "Gajah kerdil borneo",
    "Anoa terbagi menjadi anoa dataran rendah dan anoa pegunungan yang sangat dilindungi undang-undang."
  ],
  [
    "Satwa liar mamalia berkaki empat yang memiliki taring mencuat menembus moncong atas wajahnya yang hanya ditemukan di Pulau Sulawesi adalah ...",
    "Babirusa (Babyrousa babyrussa)",
    "Babi hutan biasa",
    "Tapir sumatera",
    "Trenggiling",
    "Taring atas babirusa jantan melengkung ke atas menembus kulit moncong hingga mendekati mata."
  ],
  [
    "Kera berhidung panjang besar menggantung dan berambut kemerahan yang menjadi satwa endemik pulau Kalimantan dan maskot Provinsi Kalsel adalah ...",
    "Bekantan (Nasalis larvatus)",
    "Orangutan",
    "Siamang",
    "Owa jawa",
    "Bekantan menghuni kawasan hutan bakau riparian di sepanjang tepi sungai-sungai Kalimantan."
  ],
  [
    "Mamalia omnivora berbelang putih pada moncong dada berbentuk huruf U yang merupakan jenis beruang terkecil di dunia penghuni rimba Sumatera dan Kalimantan adalah ...",
    "Beruang madu (Helarctos malayanus)",
    "Beruang kutub",
    "Panda raksasa",
    "Beruang cokelat grizzly",
    "Beruang madu memiliki lidah sangat panjang untuk menjilat sarang madu lebah di lubang pohon tinggi."
  ],
  [
    "Hewan mamalia herbivora unik bertubuh mirip babi namun bermoncong lentur dan memiliki corak tubuh separuh hitam separuh putih di Sumatera adalah ...",
    "Tapir (Tapirus indicus)",
    "Trenggiling",
    "Babi hutan",
    "Badak bercula dua",
    "Pewarnaan tubuh tapir dewasa berfungsi sebagai kamuflase corak bintik cahaya di bawah kanopi hutan hujan."
  ],
  [
    "Anggrek hitam (Coelogyne pandurata) yang memiliki lidah bunga hitam pekat beraroma harum semerbak merupakan flora maskot khas dari Provinsi ...",
    "Kalimantan Timur",
    "Aceh",
    "Jawa Tengah",
    "Bali",
    "Cagar Alam Kersik Luway di Kutai Barat Kalimantan Timur merupakan habitat alami populasi anggrek hitam liar."
  ],
  [
    "Tumbuhan karnivora unik pemakan serangga yang memiliki kantung perangkap enzim cairan pencerna banyak ditemukan di tanah miskin hara Kalimantan dan Sumatera adalah ...",
    "Kantong semar (Nepenthes)",
    "Bunga lili",
    "Kaktus koboi",
    "Eceng gondok",
    "Kantong semar memerangkap serangga untuk memenuhi kebutuhan unsur hara nitrogen di tanah podsolik asam."
  ],
  [
    "Bunga Melati Putih (Jasminum sambac) yang melambangkan kesucian lahir batin dalam berbagai tradisi adat di Indonesia ditetapkan sebagai ...",
    "Puspa Bangsa",
    "Puspa Pesona",
    "Puspa Langka",
    "Puspa Wisata",
    "Berdasarkan Keppres No. 4 Tahun 1993, Melati Putih adalah Puspa Bangsa, Anggrek Bulan Puspa Pesona, dan Rafflesia Puspa Langka."
  ],
  [
    "Bunga Anggrek Bulan (Phalaenopsis amabilis) yang memiliki kelopak putih lebar mempesona ditetapkan secara nasional sebagai bunga ...",
    "Puspa Pesona",
    "Puspa Bangsa",
    "Puspa Langka",
    "Puspa Rimba",
    "Anggrek bulan mewakili keelokan dan keanggunan flora anggrek nusantara yang mempesona dunia."
  ],
  [
    "Rumah adat tradisional masyarakat suku Batak di Sumatera Utara yang berbentuk panggung megah dihiasi ukiran gorga bertanduk kerbau adalah Rumah ...",
    "Bolon",
    "Gadang",
    "Tambi",
    "Honai",
    "Rumah Bolon memiliki kolong panggung tinggi yang dahulunya difungsikan untuk memelihara ternak babi atau kerbau."
  ],
  [
    "Rumah adat masyarakat Kepulauan Maluku yang berbentuk balai pertemuan terbuka tanpa dinding penyekat untuk musyawarah adat dinamakan Rumah ...",
    "Baileo",
    "Lamin",
    "Honai",
    "Joglo",
    "Rumah Baileo dibangun panggung terbuka agar arwah para leluhur leluasa masuk dan memberkati musyawarah negeri."
  ],
  [
    "Rumah tradisional suku Sasak di Pulau Lombok NTB memiliki tradisi khas yang sangat unik saat membersihkan dan merawat lantai tanahnya, yaitu ...",
    "Mengepel lantai menggunakan kotoran kerbau atau sapi segar yang dicampur abu jerami",
    "Menaburi lantai dengan garam dapur kasar",
    "Menyiram lantai dengan air kopi mendidih",
    "Mengecat lantai menggunakan getah pohon pinus beracun",
    "Kotoran kerbau berfungsi memperkuat lantai tanah liat agar tidak retak, bebas debu, dan mengusir serangga nyamuk."
  ],
  [
    "Rumah panggung tradisional masyarakat Bangka Belitung dan Riau yang atapnya bersusun dua menyerupai perahu terbalik dinamakan Rumah ...",
    "Limas atau Bubungan Enam",
    "Honai Melingkar",
    "Gadang Minang",
    "Joglo Trajumas",
    "Arsitektur atap limas menjulang tinggi memberi ventilasi udara yang sejuk di iklim pesisir tropis lembap."
  ],
  [
    "Kain tenun tradisional kebanggaan masyarakat suku Batak di Sumatera Utara yang disematkan dalam berbagai upacara kelahiran, pernikahan, hingga kematian adalah Kain ...",
    "Ulos",
    "Songket",
    "Batik",
    "Tapis",
    "Pemberian kain Ulos (mangulosi) melambangkan restu, doa, kehangatan jiwa, dan perlindungan berkat dari para tetua adat."
  ],
  [
    "Kain tenun mewah berhiaskan benang emas dan perak mengkilap yang menjadi mahakarya kerajinan tekstil dari Palembang dan Minangkabau adalah Kain ...",
    "Songket",
    "Sasirangan",
    "Tapis",
    "Lurik",
    "Songket ditenun manual dengan teknik memasukkan benang emas pakan yang mencerminkan kejayaan kemakmuran Sriwijaya."
  ],
  [
    "Kain tradisional khas masyarakat suku Sasak di Nusa Tenggara Barat dan suku Sumba di NTT yang dibuat melalui proses pewarnaan alami benang ikat rumit adalah Kain ...",
    "Tenun Ikat",
    "Batik Cap",
    "Kain Flanel",
    "Kain Satin",
    "Pewarna alami tenun ikat berasal dari akar pohon mengkudu (warna merah) dan daun tarum/nila (warna biru pekat)."
  ],
  [
    "Kain bordir tradisional khas masyarakat Lampung yang disulam menggunakan benang emas bermotif kapal dan pohon hayat adalah Kain ...",
    "Tapis",
    "Ulos",
    "Songket",
    "Poleng",
    "Kain Tapis dikenakan kaum wanita bangsawan Lampung dalam upacara adat Begawi menandai status sosial terhormat."
  ],
  [
    "Pakaian tradisional wanita suku Bugis dan Makassar di Sulawesi Selatan yang berbentuk segi empat berlengan pendek longgar warna-warni cerah disebut Baju ...",
    "Bodo",
    "Cele",
    "Kurung",
    "Kebaya",
    "Baju Bodo merupakan salah satu busana wanita tertua di dunia yang terbuat dari tenunan serat daun nanas atau sutra."
  ],
  [
    "Pakaian adat tradisional pria kaum bangsawan di Keraton Kasunanan Surakarta dan Kasultanan Yogyakarta yang dilengkapi kain jarik dan blangkon dinamakan ...",
    "Beskap",
    "Baju Bodo",
    "Ulee Balang",
    "Baju Kurung",
    "Beskap adalah kemeja jas berkerah kaku tegak tanpa lipatan dengan penutup simetris/asimetris kancing kuningan."
  ],
  [
    "Tutup kepala tradisional pria khas suku Jawa yang terbuat dari lipatan kain batik dengan bulatan mondolan di bagian belakang adalah ...",
    "Blangkon",
    "Tanjak Melayu",
    "Kupiah Meukeutop",
    "Udeng Bali",
    "Mondolan pada blangkon gaya Yogyakarta mencerminkan ikatan rambut pria Jawa kuno yang menjunjung etika kesopanan."
  ],
  [
    "Ikat kepala tradisional khas masyarakat Pulau Dewata Bali yang dikenakan pria saat bersembahyang di Pura atau upacara keagamaan disebut ...",
    "Udeng",
    "Blangkon",
    "Kupiah",
    "Tanjak",
    "Ujung ikatan udeng yang menjulang tegak ke atas melambangkan pikiran yang lurus menghadap Tuhan Yang Maha Esa."
  ],
  [
    "Penutup kepala tradisional khas pria Melayu di Riau, Kepulauan Riau, dan Sumatera Barat yang berbentuk lipatan kain songket runcing dinamakan ...",
    "Tanjak",
    "Kopiah",
    "Slayer",
    "Caping",
    "Tanjak melambangkan kewibawaan, martabat, dan ketaatan terhadap norma adat istiadat Melayu."
  ],
  [
    "Senjata pusaka khas suku Bugis dan Makassar di Sulawesi Selatan yang berbentuk pisau bermata satu meruncing dengan pamor racun mematikan disebut ...",
    "Badik (Gecong/Kawali)",
    "Rencong",
    "Mandau",
    "Kujang",
    "Badik diselipkan di pinggang kiri sebagai simbol harga diri, kehormatan (siri’), dan keberanian ksatria Bugis-Makassar."
  ],
  [
    "Senjata tradisional masyarakat Madura yang memiliki bilah melengkung menyerupai bulan sabit dan awalnya merupakan alat pemotong rumput adalah ...",
    "Celurit",
    "Parang Salawaku",
    "Keris Singosari",
    "Beladau",
    "Celurit menjadi lambang kejantanan dan pembelaan harga diri dalam tradisi ksatria carok masyarakat Madura."
  ],
  [
    "Senjata tradisional pejuang Maluku berupa pedang parang panjang yang dipadukan dengan perisai kayu sempit berhiaskan kulit kerang dinamakan ...",
    "Parang dan Salawaku",
    "Mandau dan Telawang",
    "Golok dan Tameng",
    "Kujang dan Perisai",
    "Salawaku merupakan perisai sempit lambang perlindungan yang dibawa penari Cakalele mengenang perang Kapitan Pattimura."
  ],
  [
    "Tari tradisional dari Minangkabau Sumatera Barat di mana para penarinya memegang dua buah piring keramik lalu menginjak pecahan piring kaca tanpa terluka adalah Tari ...",
    "Piring",
    "Payung",
    "Rantak",
    "Indang",
    "Tari Piring awalnya merupakan ritual pemujaan Dewi Sri atas kelimpahan hasil panen sebelum kedatangan Islam."
  ],
  [
    "Tari kesenian rakyat spektakuler dari Ponorogo Jawa Timur yang menampilkan penari berkepala raksasa bulu merak seberat puluhan kilogram yang digigit dengan gigi adalah Tari ...",
    "Reog Ponorogo",
    "Jathilan",
    "Kuda Lumping",
    "Topeng Kelana",
    "Topeng Dadak Merak Reog melambangkan keperkasaan Singo Barong yang ditundukkan oleh Prabu Klono Sewandono."
  ],
  [
    "Tari pergaulan riang dinamis masyarakat Jawa Barat yang diciptakan oleh seniman Gugum Gumbira dengan iringan kendang jaipongan rancak adalah Tari ...",
    "Jaipong",
    "Merak",
    "Topeng Cirebon",
    "Ketuk Tilu",
    "Tari Jaipong menggabungkan unsur pencak silat, ketuk tilu, dan wayang golek menjadi tari panggung moderen."
  ],
  [
    "Tari tradisional penyambutan tamu terhormat khas dari Pulau Bali di mana para penari wanita menaburkan bunga canang sari adalah Tari ...",
    "Pendet",
    "Kecak",
    "Barong",
    "Calonarang",
    "Tari Pendet awalnya dibawakan di pelataran Pura suci Hindu sebagai ungkapan rasa syukur menyambut turunnya para Dewa."
  ],
  [
    "Tari sakral pemujaan leluhur dari Tanah Batak Sumatera Utara yang diiringi oleh tabuhan gendang ensambel gondang sabangunan adalah Tari ...",
    "Tor-Tor",
    "Gundala-Gundala",
    "Serampang Dua Belas",
    "Fataele",
    "Penari Tor-Tor menari dengan gerakan melipat telapak tangan khidmat memberi salam hormat somba kepada tetua."
  ],
  [
    "Tari pergaulan muda-mudi yang bernafaskan Islam Melayu dan diiringi alunan petikan gambus serta marwas adalah Tari ...",
    "Zapin",
    "Saman",
    "Lilin",
    "Gandrung",
    "Tari Zapin berasal dari pengaruh seni Arab Yaman (Hadhramaut) yang diakulturasikan ke istana kesultanan Melayu."
  ],
  [
    "Alat musik tradisional petik berdawai dari Pulau Rote NTT yang tabung resonansinya terbuat dari jalinan anyaman daun pohon lontar adalah ...",
    "Sasando",
    "Kecapi",
    "Siter",
    "Panting",
    "Sasando menghasilkan petikan melodi gemerincing merdu yang menyerupai harpa mini tradisional nusantara."
  ],
  [
    "Alat musik perkusi khas masyarakat Minahasa Sulawesi Utara yang terdiri dari deretan bilah kayu berlaras nada di atas kotak resonansi kayu adalah ...",
    "Kolintang",
    "Calung",
    "Gamelan",
    "Tifa",
    "Kolintang dimainkan secara ensambel dengan stik kayu bertumpuk menghasilkan aransemen melodi harmoni riang."
  ],
  [
    "Alat musik pukul tradisional dari kayu bulat berongga yang dilapisi kulit rusa atau soa-soa (biawak) khas dari Maluku dan Papua adalah ...",
    "Tifa",
    "Gendang Sunda",
    "Rebana Hadrah",
    "Tambur",
    "Tifa ditabuh dengan tangan kosong mengiringi pesta bakar batu dan tarian perang suku-suku Papua dan pesisir Maluku."
  ],
  [
    "Alat musik tiup tradisional suku Minangkabau Sumatera Barat yang terbuat dari sebilah talang bambu tipis dengan empat lubang nada dinamakan ...",
    "Saluang",
    "Bansi",
    "Seruling Sunda",
    "Suling Bali",
    "Peniup Saluang mahir menggunakan teknik pernapasan melingkar (circular breathing) meniup terus tanpa jeda napas."
  ],
  [
    "Alat musik petik tradisional khas suku Dayak di pedalaman Kalimantan yang terbuat dari kayu ulin atau marak berukir motif taring naga dinamakan ...",
    "Sape (Sampe)",
    "Panting",
    "Kecapi Mandar",
    "Gambus Melayu",
    "Alunan lembut dawai Sape sering mengiringi tarian kancet papatai dan ritual penyembuhan pengobatan suku Dayak."
  ],
  [
    "Gamelan tradisional Bali yang memiliki alunan tempo sangat cepat, rancak, dinamis, dan bertabur suara ceng-ceng logam tajam disebut Gamelan ...",
    "Gong Kebyar",
    "Gamelan Salendro",
    "Gamelan Sekaten",
    "Gamelan Degung",
    "Gong Kebyar berkembang di Buleleng Bali utara merevolusi musik gamelan Bali klasik menjadi luar biasa ekspresif."
  ]
];

const sulit = [
  [
    "Upacara kremasi pembakaran jenazah sakral umat Hindu di Pulau Bali yang bertujuan melepaskan roh atma dari ikatan duniawi menuju moksa disebut Upacara ...",
    "Ngaben",
    "Rambu Solo",
    "Tiwah",
    "Tadulako",
    "Ngaben mengembalikan lima unsur penyusun raga manusia (Panca Maha Bhuta) kembali ke alam semesta."
  ],
  [
    "Upacara ritual pemakaman adat bangsawan suku Toraja di Sulawesi Selatan yang menyembelih puluhan ekor kerbau belang mahal (tedong bonga) dinamakan Upacara ...",
    "Rambu Solo",
    "Rambu Tuka",
    "Ngaben",
    "Seren Taun",
    "Rambu Solo mengantarkan arwah leluhur menuju alam keabadian peristirahatan (Puya) dengan status terhormat."
  ],
  [
    "Upacara adat suku Dayak Ngaju di Kalimantan Tengah untuk membersihkan tulang-belulang jenazah dan memindahkannya ke rumah kubur kecil bertiang (sandung) disebut ...",
    "Tiwah",
    "Ngaben",
    "Waisak",
    "Rambu Solo",
    "Upacara Tiwah merupakan ritual kematian eskatologis terbesar umat Kaharingan melepaskan roh menuju Lewu Tatau."
  ],
  [
    "Upacara ritual masyarakat suku Tengger di Gunung Bromo Jawa Timur yang melarung sesaji hasil bumi, ternak, dan bunga ke dalam kawah gunung berapi adalah ...",
    "Yadnya Kasada",
    "Grebeg Suro",
    "Larung Sesaji",
    "Kebo-keboan",
    "Kasada memperingati pengorbanan Raden Kusuma anak bungsu Roro Anteng dan Joko Seger demi keselamatan kaum Tengger."
  ],
  [
    "Upacara adat tahunan perayaan syukur panen padi masyarakat adat kasepuhan Sunda Banten Kidul dan Cigugur Kuningan Jawa Barat dinamakan ...",
    "Seren Taun",
    "Dugderan",
    "Sekaten",
    "Grebeg Mulud",
    "Seren Taun diisi ritual penyerahan ikatan padi ke lumbung adat (Leuit Si Jimat) diiringi musik lesung tumbuk gondang."
  ],
  [
    "Tradisi pesta memasak daging ternak, ubi manis, dan sayuran di dalam lubang tanah beralaskan batu-batu kali yang dibakar membara oleh suku-suku di Papua dinamakan ...",
    "Pesta Bakar Batu (Barapen)",
    "Rambu Tuka",
    "Mawea",
    "Potong Jari",
    "Bakar batu merupakan manifestasi kerukunan, persaudaraan, perdamaian antarsuku, dan rasa syukur atas berkah limpahan."
  ],
  [
    "Tradisi suku Sasak di Pantai Kuta Lombok Nusa Tenggara Barat berkumpul di pantai sebelum fajar untuk memburu jutaan cacing laut warna-warni disebut Tradisi ...",
    "Bau Nyale",
    "Mekepung",
    "Pasola",
    "Kebo-keboan",
    "Cacing laut (nyale) diyakini sebagai penjelmaan putri cantik legendaris Mandalika yang mengorbankan diri demi perdamaian."
  ],
  [
    "Tradisi pertarungan ksatria menunggang kuda saling melempar tombak kayu tumpul di padang rumput Pulau Sumba Nusa Tenggara Timur dinamakan ...",
    "Pasola",
    "Karapan Sapi",
    "Pacu Jalur",
    "Mekepung",
    "Pasola merupakan bagian dari ritual adat Marapu menyambut masa tanam; percikan darah diyakini menyuburkan tanah ladang."
  ],
  [
    "Tradisi lomba balap sapi berpasangan di atas lintasan lumpur sawah yang menjadi pesta rakyat kebanggaan masyarakat di Pulau Madura Jawa Timur dinamakan ...",
    "Karapan Sapi",
    "Pacu Jawi",
    "Mekepung",
    "Pasola",
    "Karapan Sapi menampilkan sepasang sapi jantan gagah yang dipacu joki berdiri di atas keleles melesat di arena balap."
  ],
  [
    "Perayaan adat di Kota Semarang menyambut datangnya bulan suci Ramadan yang ditandai dengan arak-arakan patung hewan mitologis berkepala naga berbadan kambing disebut Tradisi ...",
    "Dugderan dengan ikon Warak Ngendog",
    "Sekaten Grebeg",
    "Tabuik Minang",
    "Cap Go Meh",
    "Warak Ngendog menyimbolkan kerukunan akulturasi etnis Jawa (kambing), Tionghoa (naga), dan Arab (unta) di Semarang."
  ],
  [
    "Perayaan memperingati Maulid Nabi Muhammad SAW di Keraton Kasultanan Yogyakarta dan Kasunanan Surakarta yang membunyikan gamelan pusaka Kanjeng Kiai Gunturmadu dinamakan ...",
    "Perayaan Sekaten",
    "Grebeg Syawal",
    "Tingalan Jumenengan",
    "Kirab Pusaka 1 Suro",
    "Sekaten berasal dari kata \"Syahadatain\"; gamelan pusaka dibunyikan sepekan penuh di halaman Masjid Agung keraton."
  ],
  [
    "Upacara adat peringatan Asyura di Pariaman Sumatera Barat yang mengarak menara kayu bertingkat lambang keranda jenazah lalu melarungkannya ke laut adalah Tradisi ...",
    "Tabuik",
    "Balimau",
    "Pacu Itik",
    "Batagak Panghulu",
    "Tradisi Tabuik dibawa oleh prajurit muslim Sipahi dari India ke pesisir Minangkabau pada abad ke-19."
  ],
  [
    "Tradisi lompat batu setinggi lebih dari dua meter (Fahombo atau Hombo Batu) yang dilakukan para pemuda sebagai ujian kedewasaan dan keberanian ksatria berasal dari Pulau ...",
    "Nias",
    "Mentawai",
    "Simeulue",
    "Enggano",
    "Pemuda suku Nias yang berhasil melompati susunan batu megalitik dianggap sudah siap menjadi prajurit pembela desa."
  ],
  [
    "Hukum adat sistem kekerabatan masyarakat Minangkabau di Sumatera Barat yang menarik garis keturunan dari pihak ibu (kaum perempuan) disebut sistem ...",
    "Matrilineal",
    "Patrilineal",
    "Bilateral",
    "Patriarki",
    "Dalam sistem matrilineal, gelar pusaka dan harta warisan rumah gadang diwariskan dari ibu kepada anak perempuannya."
  ],
  [
    "Hukum adat sistem kekerabatan suku Batak, suku Bali, dan suku Ambon yang menarik garis keturunan keluarga dari pihak bapak (kaum laki-laki) disebut sistem ...",
    "Patrilineal",
    "Matrilineal",
    "Parental",
    "Matriarki",
    "Dalam sistem patrilineal, marga keluarga diteruskan oleh anak laki-laki yang menjadi penerus silsilah klan darah ayah."
  ],
  [
    "Sistem kekerabatan masyarakat suku Jawa, Sunda, dan Dayak yang menarik garis keturunan seimbang setara dari pihak ayah maupun ibu sekaligus dinamakan sistem ...",
    "Parental atau Bilateral",
    "Matrilineal murni",
    "Patrilineal tunggal",
    "Monogami klan",
    "Anak memiliki kedudukan hak waris dan hubungan kekerabatan yang sama adil terhadap keluarga ayah dan keluarga ibu."
  ],
  [
    "Taman Nasional di Kalimantan Barat yang menjadi surga keanekaragaman flora dan habitat alami populasi orangutan kalimantan (Pongo pygmaeus) liar terpadat adalah ...",
    "Taman Nasional Betung Kerihun dan Danau Sentarum",
    "Taman Nasional Baluran",
    "Taman Nasional Meru Betiri",
    "Taman Nasional Bromo Semeru",
    "Danau Sentarum merupakan kawasan lahan basah (wetland) terluas di Kalimantan yang ditetapkan situs Ramsar internasional."
  ],
  [
    "Taman Nasional di Provinsi Jambi yang menjadi kawasan konservasi hutan lindung dataran rendah serta ruang jelajah Orang Rimba (Suku Anak Dalam) adalah ...",
    "Taman Nasional Bukit Duabelas",
    "Taman Nasional Kerinci Seblat",
    "Taman Nasional Way Kambas",
    "Taman Nasional Berbak",
    "Suku Anak Dalam menggantungkan seluruh siklus kehidupan, makanan, dan obat-obatan herbal di hutan Bukit Duabelas."
  ],
  [
    "Danau purba karts di Pulau Kakaban Kepulauan Derawan Kalimantan Timur memiliki fenomena biologi sangat unik di dunia yaitu dihuni oleh ribuan ...",
    "Ubur-ubur tanpa sengat (Stingless jellyfish)",
    "Kuda laut emas raksasa",
    "Ikan terbang bersayap empat",
    "Penyu berkepala dua",
    "Terisolasi ribuan tahun tanpa predator membuat ubur-ubur Kakaban kehilangan racun nematokis sengat pertahanannya."
  ],
  [
    "Burung endemik langka berwarna putih bersih dengan jambul indah dan lingkaran kelopak mata biru terang yang menjadi maskot Pulau Bali adalah ...",
    "Jalak Bali (Leucopsar rothschildi)",
    "Cendrawasih botak",
    "Merak kerdil",
    "Kasuari kerdil",
    "Jalak bali dilindungi ketat di kawasan Taman Nasional Bali Barat setelah populasinya sempat di ambang kepunahan mutlak."
  ]
];

const hots = [
  [
    "Kepulauan Nusa Tenggara dan Pulau Sulawesi dikelompokkan oleh ahli biogeografi Alfred Russel Wallace ke dalam zona \"Wallacea\" (wilayah peralihan). Berdasarkan kajian evolusi biologis dan tektonik lempeng purba, faktor utama mengapa kawasan Wallacea memiliki tingkat endemisitas satwa tertinggi di dunia adalah ...",
    "Secara geologis kawasan Wallacea merupakan pulau-pulau oseanik laut dalam yang tidak pernah tersambung daratan dengan Paparan Sunda (Asia) maupun Paparan Sahul (Australia) pada zaman es, sehingga satwa yang terjebak di sana berevolusi secara terisolasi selama jutaan tahun",
    "Kawasan Wallacea dihuni oleh hewan reptil luar angkasa yang jatuh ke bumi",
    "Iklim di kawasan Wallacea tidak pernah mengalami pergantian siang dan malam",
    "Semua hewan di zona Wallacea sengaja dibawa berlayar oleh para pelaut pedagang Eropa",
    "Isolasi geografis kepulauan purba membuat satwa berevolusi terpisah menghasilkan satwa endemik khas yang unik seperti anoa dan babirusa."
  ],
  [
    "Hutan bakau (mangrove) dan terumbu karang di kawasan pesisir Indonesia membentuk ekosistem penyangga kehidupan bahari yang saling bergantung. Analisis dampak berantai terhadap keanekaragaman hayati ikan laut apabila kawasan hutan mangrove di garis pantai musnah ditebang adalah ...",
    "Populasi ikan laut karang akan anjlok drastis karena hutan mangrove adalah zona asuhan (nursery ground), pemijahan telur, dan perlindungan larva benih ikan sebelum mereka bermigrasi menuju perairan terumbu karang terbuka",
    "Ikan laut akan bermutasi menjadi ikan air tawar penghuni sungai",
    "Air laut di pantai akan langsung membeku menjadi es padat",
    "Semua terumbu karang di laut akan tumbuh menjadi pohon kelapa",
    "Konektivitas biotik mangrove-seagrass-coral reef terputus memicu keruntuhan piramida biomassa perikanan tangkap laut pesisir."
  ],
  [
    "Suku Baduy Dalam di Pegunungan Kendeng Kabupaten Lebak Banten memegang teguh falsafah hidup pikukuh leluhur \"Lojor teu meunang dipotong, pondok teu meunang disambung\" (Panjang tidak boleh dipotong, pendek tidak boleh disambung). Analisis kearifan lokal falsafah adat Baduy tersebut dalam prinsip kelestarian lingkungan hidup modern adalah ...",
    "Masyarakat adat Baduy menolak mengubah dan merusak bentang alam secara paksa; permukiman dan ladang dibangun mengikuti kontur kemiringan tanah alami tanpa meratakan bukit demi mencegah erosi dan bencana tanah longsor",
    "Masyarakat Baduy dilarang memotong tali rafia di rumah",
    "Semua jalan setapak di desa Baduy wajib dibangun dengan aspal hotmix",
    "Suku Baduy diwajibkan membeli mobil listrik untuk bertani",
    "Konservasi tanah mikro-spasial berbasis tradisi meminimalkan koefisien degradasi lereng vulkanik dan menjaga hutan larangan hulu DAS."
  ],
  [
    "Suku Dayak di pedalaman Kalimantan memiliki kearifan lokal sistem perladangan gilir balik (shifting cultivation) dan zonasi \"Hutan Larangan / Hutan Adat\". Mengapa anggapan kolonial zaman dahulu bahwa perladangan gilir balik suku Dayak merusak hutan lindung terbukti keliru secara ekologis?",
    "Karena ladang gilir balik suku Dayak mengistirahatkan tanah yang telah dipanen selama bertahun-tahun hingga pohon hutan suksesi kedua tumbuh subur kembali (recovery hara) serta membakar sisa semak dengan sekat bakar yang terkendali ketat",
    "Karena suku Dayak menanam bibit pohon plastik impor",
    "Karena suku Dayak menyiram api ladang menggunakan helikopter pemadam",
    "Karena tanaman di ladang suku Dayak tidak memerlukan sinar matahari",
    "Rotasi bera (fallow period) memulihkan kapasitas tukar kation tanah podsolik dan menjaga keanekaragaman plasma nutfah liar."
  ],
  [
    "Masyarakat suku Sasak di Lombok Tengah melestarikan sistem penyimpanan lumbung padi tradisional berdinding bambu dan beratap alang-alang (Sambeng/Pantek). Hubungan arsitektur lumbung padi tradisional ini dengan ketahanan pangan mitigasi bencana hama adalah ...",
    "Tiang panggung lumbung dipasangi cincin kayu bundar licin penangkal tikus (jelepreng) dan sirkulasi atap alang-alang menjaga kelembapan udara tetap kering sehingga bulir gabah bebas jamur dan awet bertahun-tahun",
    "Lumbung padi Sasak dipasangi pendingin udara listrik otomatis",
    "Padi di lumbung Sasak disemprot racun kimia sintetis buatan pabrik",
    "Lumbung padi Sasak dibangun terapung di tengah danau air asin",
    "Teknologi pascapanen tradisional mengisolasi hama pengerat dan mengendalikan kadar air butir beras secara higroskopis alami."
  ],
  [
    "Di kawasan Dataran Tinggi Tana Toraja, upacara pemakaman agung Rambu Solo membutuhkan pengorbanan puluhan ekor kerbau dengan nilai ekonomi fantastis (kerbau belang tedong bonga berharga miliaran rupiah). Evaluasi dampak sosio-ekonomi ganda tradisi ini bagi masyarakat Toraja adalah ...",
    "Di satu sisi menjadi daya tarik pariwisata budaya kelas dunia dan mempererat gotong royong klan marga; namun di sisi lain menimbulkan beban utang finansial berat bagi keluarga yang memaksakan gengsi status sosial adat",
    "Tradisi Rambu Solo membuat semua orang Toraja menjadi jatuh miskin total tanpa pengecualian",
    "Semua kerbau di pulau Sulawesi langsung punah dalam satu hari upacara",
    "Pemerintah daerah melarang mutlak penyelenggaraan upacara kematian Toraja",
    "Dialektika polarisasi adat: kohesi solidaritas kekerabatan klan berhadapan dengan tuntutan modernisasi rasionalitas alokasi modal keluarga."
  ],
  [
    "Kesenian pertunjukan Wayang Kulit Purwa Jawa yang mengangkat epos Mahabarata dan Ramayana telah diakui UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity. Peran strategis pertunjukan wayang bagi pembentukan karakter dan transmisi nilai moral generasi bangsa adalah ...",
    "Wayang bukan sekadar tontonan hiburan visual, melainkan tuntunan etika filosofis hidup (filosofi membedakan watak satria dharma vs angkara murka raksasa adharma) yang disampaikan secara alegoris oleh dalang",
    "Wayang adalah sarana menghafal mantra-mantra sihir kuno",
    "Wayang mengajarkan masyarakat cara membuat senjata perang modern",
    "Pertunjukan wayang bertujuan menggantikan fungsi seluruh mata pelajaran di sekolah",
    "Enkulturasi estetika pedalangan: integrasi sastra kakawin, tembang macapat, gamelan karawitan, dan pesan budi pekerti luhur."
  ],
  [
    "Kain Batik Indonesia resmi dinobatkan oleh UNESCO sebagai Warisan Budaya Takbenda Dunia pada 2 Oktober 2009. Kriteria substantif terpenting yang mendasari pengakuan dunia terhadap batik Indonesia bukan semata-mata pada motif gambarnya, melainkan pada ...",
    "Filosofi spiritual mendalam dari proses membatik manual menggunakan malam (lilin panas) dan canting/cap serta makna simbolik motif yang melekat erat pada daur hidup manusia dari lahir hingga wafat",
    "Kecepatan mesin pabrik tekstil modern dalam mencetak jutaan meter kain per hari",
    "Kain batik dibuat dari serat benang luar angkasa yang anti-air",
    "Batik hanya boleh dikenakan oleh raja-raja bangsawan di istana",
    "Otentisitas teknik perintangan warna lilin malam panas (wax-resist dyeing) dan filosofi kosmologis adiluhung budaya nusantara."
  ],
  [
    "Tradisi gotong royong \"Subak\" di Bali mengatur pembagian air irigasi sawah berbasis sistem pura tirta. Dari sudut pandang resolusi konflik sosial dan kelestarian air agraris, keunggulan tata kelola Subak adalah ...",
    "Menjaga keadilan alokasi debit air antar-petani di hulu dan hilir tanpa dominasi kekuasaan melalui musyawarah adat yang dijiwai falsafah Tri Hita Karana sehingga mencegah kelangkaan air dan sengketa antar-petani",
    "Mewajibkan semua petani di Bali membayar pajak air sebesar 90 persen hasil panen",
    "Membuat aliran air irigasi mengalir mendaki ke atas puncak gunung",
    "Menutup akses air sungai bagi petani yang sawahnya berada di dataran rendah",
    "Otonomi institusi lokal berbasis sosio-religius mendistribusikan debit air proporsional sekaligus memutus siklus hama melalui pola tanam serentak."
  ],
  [
    "Upacara \"Sedekah Laut\" atau \"Larung Sesaji\" yang digelar secara rutin setiap bulan Sura oleh komunitas nelayan pesisir pantai selatan Jawa memiliki makna ekologis mendalam bagi keberlanjutan sumber daya ikan, yaitu ...",
    "Sebagai bentuk rasa syukur kepada Tuhan dan ungkapan kearifan menjaga pantang melaut selama hari-hari sakral tertentu yang secara biologis memberi jeda istirahat (spawning rest) bagi pemulihan ekosistem laut",
    "Upacara bertujuan untuk memberi makan ikan hiu agar memakan kapal nelayan asing",
    "Larung sesaji membuat air laut surut mengering dalam semalam",
    "Nelayan membuang seluruh tangkapan ikannya ke dasar samudra agar tidak membusuk",
    "Etika ekologis tradisional: sakralisasi laut membatasi eksploitasi berlebih (overfishing) dan menjaga harmoni kosmos maritim."
  ],
  [
    "Akulturasi budaya Islam dengan budaya Hindu-Buddha tampak jelas pada bentuk arsitektur Menara Masjid Kudus di Jawa Tengah peninggalan Sunan Kudus (Ja'far Shadiq). Makna toleransi sosiologis dari bentuk bangunan Menara Masjid Kudus tersebut adalah ...",
    "Bentuk menara menyerupai candi bata merah Jawa-Hindu memperlihatkan pendekatan dakwah damai yang simpatik, menghormati tradisi masyarakat lokal tanpa merusak warisan budaya yang sudah berakar kuat",
    "Sunan Kudus kehabisan semen sehingga terpaksa mencuri candi Hindu",
    "Menara masjid Kudus dibangun oleh arsitek Belanda dari VOC",
    "Umat Islam dan umat Hindu saat itu dipaksa berperang memperebutkan menara",
    "Simbolik kearifan dakwah kultural: asimilasi visual fasad arsitektur mengikis friksi horizontal mempercepat penerimaan Islam."
  ],
  [
    "Sistem arsitektur tiang panggung kayu pada rumah-rumah tradisional nusantara (seperti Rumah Gadang, Tongkonan, Lamin, dan Rumah Panggung Melayu) merupakan bukti kecerdasan nenek moyang dalam adaptasi kebencanaan alam di kawasan cincin api tropis, karena ...",
    "Sambungan kayu menggunakan pasak dan pen (tanpa paku besi kaku) memberi fleksibilitas struktur bangunan bergoyang elastis saat diguncang gempa bumi tanpa mudah roboh, dan kolong panggung menghindarkan banjir serta serangan binatang buas",
    "Rumah panggung dibangun agar pemilik rumah bisa memancing ikan dari jendela kamar tidur",
    "Paku besi pada masa lampau dilarang digunakan oleh para dewa",
    "Rumah panggung dirancang khusus untuk diterbangkan oleh angin puting beliung",
    "Konstruksi sambungan kayu pasak tanpa paku kaku memberikan kelenturan sehingga bangunan menyerap guncangan gempa secara elastis tanpa roboh."
  ],
  [
    "Ancaman kepunahan satwa langka Orangutan Sumatera (Pongo abelii) dan Orangutan Tapanuli (Pongo tapanuliensis) di ekosistem Batang Toru dan Leuser berkaitan erat dengan pembangunan proyek infrastruktur dan perkebunan monokultur. Faktor paling krusial penyebab anjloknya populasi satwa liar tersebut adalah ...",
    "Fragmentasi habitat hutan kanopi yang memutus koridor jelajah kanopi alami, mengisolasi kelompok populasi kecil memicu perkawinan sedarah (inbreeding depression), dan mempermudah akses perburuan liar",
    "Orangutan bermigrasi naik kapal feri menyeberangi Samudra Hindia",
    "Orangutan tidak mau lagi memakan buah-buahan hutan yang manis",
    "Orangutan diserang oleh kawanan beruang kutub es",
    "Fragmentasi lanskap hutan primer membatasi jelajah arboreal, memicu defisit genetik, dan meningkatkan konflik ruang manusia-satwa."
  ],
  [
    "Penyelundupan kayu Gaharu (Aquilaria microcarpa) liar dari hutan lindung pedalaman Papua dan Kalimantan terus diburu pasar gelap internasional dengan harga fantastis per kilogram. Fenomena biokimia apa yang membuat kayu gaharu liar menjadi sangat berharga mahal?",
    "Gaharu adalah gubal kayu berminyak wangi harum pekat yang terbentuk akibat respon pertahanan alami pohon gaharu saat terinfeksi jamur kapang patogen (Phialophora parasitica) selama bertahun-tahun di alam liar",
    "Kayu gaharu mengandung bongkahan berlian permata murni di dalamnya",
    "Kayu gaharu dapat menyala mengeluarkan api tanpa korek api",
    "Gaharu adalah kayu yang bisa berbicara seperti manusia",
    "Sintesis fitoaleksin resin aromatik sebagai respon imunologis fito-patogenik menghasilkan sesquiterpenoid bernilai ekonomi tinggi."
  ],
  [
    "Perdagangan satwa liar burung kicau seperti Burung Kacamata (Zosterops) dan Murai Batu (Copsychus malabaricus) akibat tingginya kontes kicau burung telah memicu fenomena \"Empty Forest Syndrome\" (Sindrom Hutan Sunyi) di berbagai hutan lindung Jawa dan Sumatera. Dampak ekologis hutan yang dialami adalah ...",
    "Hutan kehilangan agen penyebar biji-biji pohon liar (seed dispersers) dan predator pengontrol hama serangga ulat, sehingga regenerasi pohon hutan terganggu dan keseimbangan rantai makanan biologis rusak",
    "Pohon-pohon di hutan mogok berfotosintesis karena sedih tidak mendengar kicauan burung",
    "Hutan berubah menjadi gurun pasir dalam kurun waktu satu bulan",
    "Semua harimau di hutan berubah menjadi pemakan rumput",
    "Defaunasi burung frugivora dan insektivora memicu keruntuhan suksesi regenerasi vegetasi hutan hujan klimaks."
  ],
  [
    "Pemberian otonomi khusus bagi masyarakat hukum adat melalui pengakuan \"Hutan Adat\" oleh Mahkamah Konstitusi Republik Indonesia (Putusan MK No. 35/PUU-X/2012) memiliki makna hukum dan lingkungan hidup strategis yaitu ...",
    "Menegaskan bahwa hutan adat bukan lagi merupakan hutan negara, melainkan milik masyarakat hukum adat sehingga kedaulatan warga adat diakui untuk melindungi hutan ulayat dari ancaman konsesi tambang dan sawit korporasi",
    "Mewajibkan masyarakat adat menebang seluruh pohon hutan adat dan menjualnya ke luar negeri",
    "Menghapuskan fungsi kepolisian dan tentara di seluruh kawasan hutan Indonesia",
    "Mengizinkan korporasi asing menguasai seluruh hutan lindung tanpa izin presiden",
    "Restorasi hak konstitusional masyarakat adat menjamin kelestarian ruang hidup ulayat dari eksploitasi ekstraktif predatory."
  ],
  [
    "Tradisi upacara perkawinan adat di berbagai pelosok nusantara selalu melibatkan kain tenun atau batik bermotif pakem tertentu (misalnya motif Sidomukti, Truntum, atau Kain Tenun Ikat Gringsing). Nilai simbolis dari motif-motif busana pengantin tersebut mencerminkan ...",
    "Doa restu leluhur dan harapan luhur agar rumah tangga pengantin dilimpahi kemakmuran lahir batin, kesetiaan abadi saling mencintai, ketentraman jiwa, dan tolak bala bahaya mara",
    "Pemberitahuan kepada tamu undangan berapa jumlah utang orang tua pengantin",
    "Perintah kepada pengantin untuk segera pindah rumah ke luar negeri",
    "Bukti bahwa pengantin tidak menyukai masakan kuliner khas nusantara",
    "Bahasa semiotika visual: simbol-simbol kosmologis Jawa dan Nusantara memancarkan harapan eskatologis kebahagiaan berkelanjutan."
  ],
  [
    "Di kawasan perkotaan modern, anak-anak muda seringkali menganggap musik gamelan, angklung, dan tari tradisional sebagai seni kuno yang ketinggalan zaman. Upaya strategis yang paling efektif dan berkesinambungan untuk merevitalisasi minat generasi Z terhadap musik tradisional nusantara adalah ...",
    "Melakukan inovasi aransemen musik fusi kontemporer (menggabungkan instrumen gamelan/sasando dengan musik pop modern dan orkestra dunia) serta memanfaatkan media digital media sosial dan konser interaktif",
    "Melarang seluruh anak muda mendengarkan musik modern dari luar negeri",
    "Menutup semua stasiun radio yang tidak memutar musik gamelan",
    "Mewajibkan semua siswa membawa gamelan perunggu berat ke dalam ransel sekolah setiap hari",
    "Apropriasi kreatif lintas-genre mengontekstualisasikan instrumen tradisional ke dalam lanskap industri kreatif global kontemporer."
  ],
  [
    "Festival Budaya Lembah Baliem di Wamena Papua Pegunungan yang menampilkan simulasi perang-perangan antarsuku Dani, Lani, dan Yali berhasil mengubah memori konflik perang suku masa lalu menjadi kekuatan pariwisata budaya yang mempersatukan. Pelajaran sosiologis dari transformasi budaya tersebut adalah ...",
    "Energi permusuhan dan ketegangan antar-klan masa lalu dapat dialihkan (disublimasi) menjadi festival atraksi seni budaya estetis yang menumbuhkan rasa bangga identitas lokal sekaligus menggerakkan ekonomi kerakyatan daerah",
    "Simulasi perang bertujuan untuk melatih warga membakar desa tetangga",
    "Pariwisata budaya berhasil menghilangkan seluruh tradisi adat suku Papua",
    "Perang-perangan suku diwajibkan oleh pemerintah agar populasi penduduk tidak bertambah",
    "Rekonsiliasi kultural melalui rekacipta ruang publik pariwisata mengubah potensi kekerasan menjadi modal sosial perdamaian."
  ],
  [
    "Mengapa keanekaragaman flora dan fauna Indonesia yang menempati peringkat kedua di dunia (setelah Brasil) sering disebut sebagai \"Megabiodiversitas Sekaligus Titik Api Kritis Konservasi (Hotspot of Biodiversity)\"?",
    "Karena wilayah nusantara menyimpan keanekaragaman spesies flora fauna endemik yang luar biasa melimpah di habitat pulau terisolasi, namun sekaligus menghadapi laju ancaman deforestasi, perburuan liar, dan kepunahan habitat yang paling tinggi dan mendesak di dunia",
    "Karena seluruh hutan di Indonesia sering terbakar oleh api neraka",
    "Karena hewan di Indonesia hanya bisa hidup di dekat gunung berapi aktif",
    "Karena hutan di Indonesia dipenuhi oleh tanaman cabai terpedas di dunia",
    "Paradoks megabiodiversitas: kekayaan plasma nutfah tinggi berbanding lurus dengan kerentanan ekologis terhadap fragmentasi dan kepunahan massal."
  ]
];

module.exports = {
  name: 'Keragaman Hayati, Garis Wallace-Weber & Kebudayaan Nusantara',
  mudah,
  sedang,
  sulit,
  hots
};
