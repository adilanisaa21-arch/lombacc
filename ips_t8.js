// Topik 8: Geografi, Letak Astronomis, Iklim & Sumber Daya Alam Indonesia
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Letak astronomis wilayah Indonesia yang tepat berdasarkan garis lintang dan garis bujur adalah ...",
    "6 derajat Lintang Utara (LU) sampai 11 derajat Lintang Selatan (LS) dan 95 derajat Bujur Timur (BT) sampai 141 derajat Bujur Timur (BT)",
    "10 derajat LU - 15 derajat LS dan 100 derajat BT - 150 derajat BT",
    "0 derajat - 20 derajat LU dan 90 derajat BT - 130 derajat BT",
    "5 derajat LS - 10 derajat LS dan 110 derajat BT - 120 derajat BT",
    "Letak astronomis ini menempatkan Indonesia di kawasan tropis khatulistiwa dengan penyinaran matahari sepanjang tahun."
  ],
  [
    "Garis khayal khatulistiwa (ekuator / garis lintang 0 derajat) melintasi salah satu kota di Kalimantan Barat yang memiliki Tugu Khatulistiwa yaitu kota ...",
    "Pontianak",
    "Banjarmasin",
    "Samarinda",
    "Palangkaraya",
    "Kota Pontianak dilintasi persis oleh garis lintang 0 derajat ekuator bumi."
  ],
  [
    "Secara geografis, wilayah Indonesia terletak di antara dua benua yaitu Benua ...",
    "Asia dan Australia",
    "Asia dan Eropa",
    "Australia dan Afrika",
    "Amerika dan Antartika",
    "Posisi silang antara Benua Asia dan Benua Australia menjadikan Indonesia jalur strategis pelayaran dunia."
  ],
  [
    "Secara geografis, wilayah Indonesia terletak di antara dua samudra luas yaitu Samudra ...",
    "Hindia dan Pasifik",
    "Atlantik dan Hindia",
    "Pasifik dan Atlantik",
    "Arktik dan Antartika",
    "Samudra Pasifik di sebelah timur/utara dan Samudra Hindia di sebelah barat/selatan."
  ],
  [
    "Karena terletak di sekitar garis khatulistiwa pada rentang 6°LU - 11°LS, Indonesia beriklim ...",
    "Tropis dengan dua musim (musim hujan dan musim kemarau)",
    "Subtropis dengan empat musim",
    "Sedang dengan musim salju",
    "Kutub dingin abadi",
    "Iklim tropis ditandai dengan suhu hangat rata-rata 27°C dan kelembapan udara yang tinggi sepanjang tahun."
  ],
  [
    "Wilayah Indonesia dibagi menjadi tiga zona waktu standar yaitu ...",
    "WIB (Waktu Indonesia Barat), WITA (Waktu Indonesia Tengah), dan WIT (Waktu Indonesia Timur)",
    "Waktu Jawa, Waktu Sumatera, dan Waktu Papua",
    "Waktu Pantai, Waktu Gunung, dan Waktu Lembah",
    "Waktu Pagi, Waktu Siang, dan Waktu Malam",
    "Pembagian tiga zona waktu didasarkan pada bentang garis bujur dari 95°BT hingga 141°BT."
  ],
  [
    "Provinsi-provinsi di Pulau Jawa, Pulau Madura, dan Pulau Sumatera termasuk ke dalam zona waktu ...",
    "WIB (GMT+7)",
    "WITA (GMT+8)",
    "WIT (GMT+9)",
    "UTC+6",
    "WIB memiliki patokan garis bujur 105°BT (selisih 7 jam lebih cepat dari Greenwich London)."
  ],
  [
    "Provinsi Bali, Nusa Tenggara Barat (NTB), Nusa Tenggara Timur (NTT), dan seluruh pulau Sulawesi termasuk ke dalam zona waktu ...",
    "WITA (GMT+8)",
    "WIB (GMT+7)",
    "WIT (GMT+9)",
    "UTC+10",
    "WITA memiliki patokan garis bujur 120°BT (selisih 1 jam lebih cepat dari WIB)."
  ],
  [
    "Provinsi di Kepulauan Maluku dan seluruh tanah Papua termasuk ke dalam zona waktu ...",
    "WIT (GMT+9)",
    "WITA (GMT+8)",
    "WIB (GMT+7)",
    "UTC+8",
    "WIT memiliki patokan garis bujur 135°BT (selisih 2 jam lebih cepat dari WIB)."
  ],
  [
    "Jika waktu di kota Jakarta (WIB) menunjukkan pukul 07.00 pagi, maka pada saat yang sama waktu di kota Jayapura (WIT) menunjukkan pukul ...",
    "09.00 pagi",
    "08.00 pagi",
    "06.00 pagi",
    "10.00 pagi",
    "Waktu Indonesia Timur (WIT) 2 jam lebih cepat dibandingkan Waktu Indonesia Barat (WIB)."
  ],
  [
    "Sungai terpanjang di Indonesia yang mengalir sepanjang 1.143 kilometer di Pulau Kalimantan (Kalimantan Barat) adalah Sungai ...",
    "Kapuas",
    "Mahakam",
    "Barito",
    "Musi",
    "Sungai Kapuas bermata air di Pegunungan Muller dan bermuara di Selat Karimata."
  ],
  [
    "Danau vulkano-tektonik terbesar di Indonesia dan Asia Tenggara yang memiliki pulau Samosir di tengah-tengahnya adalah Danau ...",
    "Toba di Sumatera Utara",
    "Singkarak di Sumatera Barat",
    "Poso di Sulawesi Tengah",
    "Matano di Sulawesi Selatan",
    "Danau Toba terbentuk dari letusan supervolcano purba sekitar 74.000 tahun yang lalu."
  ],
  [
    "Puncak gunung tertinggi di Indonesia yang diselimuti gletser salju abadi di Papua adalah ...",
    "Puncak Jaya (Carstensz Pyramid) di Pegunungan Jayawijaya",
    "Gunung Kerinci",
    "Gunung Rinjani",
    "Gunung Semeru",
    "Puncak Jaya berketinggian 4.884 meter di atas permukaan laut dan menjadi salah satu World Seven Summits."
  ],
  [
    "Angin periodik yang bertiup dari Benua Asia menuju Benua Australia pada bulan Oktober hingga April dan membawa uap air banyak sehingga memicu Musim Hujan di Indonesia adalah ...",
    "Angin Muson Barat",
    "Angin Muson Timur",
    "Angin Fohn",
    "Angin Siklon",
    "Angin Muson Barat melewati Laut Cina Selatan dan Samudra Hindia yang luas menyerap uap air berlimpah."
  ],
  [
    "Angin periodik yang bertiup dari Benua Australia menuju Benua Asia pada bulan April hingga Oktober yang bersifat kering dan memicu Musim Kemarau di Indonesia adalah ...",
    "Angin Muson Timur",
    "Angin Muson Barat",
    "Angin Darat",
    "Angin Lembah",
    "Benua Australia yang didominasi kawasan gurun pasir kering menjadikan hembusan angin membawa sedikit uap air."
  ],
  [
    "Sumber daya alam yang dapat diperbarui (renewable resources) karena dapat berkembang biak atau dipulihkan kembali oleh alam adalah ...",
    "Tumbuhan hutan, hewan ternak, air, dan tanah pertanian",
    "Minyak bumi, batu bara, dan gas alam",
    "Emas, perak, dan tembaga",
    "Bauksit dan biji besi",
    "SDA hayati dan siklus hidrologi dapat diperbarui jika dikelola secara lestari dan berkelanjutan."
  ],
  [
    "Sumber daya alam yang tidak dapat diperbarui (non-renewable resources) karena membutuhkan waktu jutaan tahun untuk terbentuk di perut bumi adalah ...",
    "Minyak bumi, batu bara, gas alam, dan mineral logam",
    "Hutan bakau dan kelapa sawit",
    "Ikan laut dan mutiara",
    "Sinar matahari dan angin",
    "Bahan bakar fosil dan bahan tambang mineral akan habis jika dieksploitasi terus menerus."
  ],
  [
    "Daerah penghasil tambang emas dan tembaga terbesar di Indonesia yang dikelola di kawasan pegunungan Grasberg Papua adalah tambang ...",
    "Freeport di Mimika, Papua",
    "Tambang Sawahlunto",
    "Tambang Martapura",
    "Tambang Timah Bangka",
    "Grasberg merupakan salah satu tambang tembaga dan cadangan emas terbuka terbesar di dunia."
  ],
  [
    "Kepulauan penghasil tambang timah terbesar di Indonesia yang menyumbang ekspor timah dunia adalah ...",
    "Bangka dan Belitung",
    "Natuna dan Anambas",
    "Kepulauan Aru",
    "Kepulauan Mentawai",
    "Bangka-Belitung memiliki cadangan timah aluvial dan primer yang telah ditambang sejak masa kolonial."
  ],
  [
    "Hutan bakau (mangrove) yang tumbuh di sepanjang pesisir pantai berlumpur memiliki fungsi fisik ekologis yang sangat vital yaitu ...",
    "Mencegah abrasi pantai akibat gempuran ombak laut dan meredam hempasan gelombang tsunami",
    "Membakar sampah di tepi pantai",
    "Membuat air laut berubah menjadi air tawar murni",
    "Menghilangkan angin sepoi-sepoi nelayan",
    "Perakaran tunjang mangrove mengikat lumpur pantai dan menjadi benteng pemecah energi ombak badai."
  ]
];

const sedang = [
  [
    "Secara geologis, wilayah kepulauan Indonesia berada pada titik pertemuan tiga lempeng tektonik raksasa dunia yaitu Lempeng ...",
    "Eurasia, Indo-Australia, dan Pasifik",
    "Afrika, Antartika, dan Nazca",
    "Amerika Utara, Arab, dan Karibia",
    "Filipina, Scotia, dan Cocos",
    "Tumbukan lempeng tektonik ini memicu pembentukan deretan gunung berapi aktif dan rawan gempa bumi."
  ],
  [
    "Indonesia dilalui oleh dua jalur sirkum pegunungan muda dunia yaitu ...",
    "Sirkum Mediterania (jalur barat: Sumatera, Jawa, Bali, Nusa Tenggara) dan Sirkum Pasifik (jalur timur: Maluku, Sulawesi, Papua)",
    "Pegunungan Alpen dan Himalaya",
    "Pegunungan Andes dan Rocky",
    "Pegunungan Ural dan Atlas",
    "Sirkum pegunungan muda ini menjadikan Indonesia memiliki lebih dari 120 gunung berapi aktif (Ring of Fire)."
  ],
  [
    "Dampak positif dari letusan gunung berapi bagi sektor pertanian masyarakat di sekitar lereng gunung dalam jangka panjang adalah ...",
    "Abu vulkanik dan lahar yang melapuk menghasilkan tanah andosol yang sangat subur kaya unsur hara mineral bagi tanaman",
    "Menghilangkan seluruh rumput liar selamanya",
    "Membuat petani tidak perlu menyiram tanaman",
    "Menurunkan suhu udara menjadi dingin membeku",
    "Piroklastik vulkanik mengandung silika, kalium, dan fosfor yang meregenerasi kesuburan tanah secara alami."
  ],
  [
    "Selat sempit yang sangat strategis di dunia yang memisahkan Pulau Sumatera dengan Semenanjung Malaysia dan dilintasi puluhan ribu kapal tanker internasional per tahun adalah Selat ...",
    "Malaka",
    "Sunda",
    "Lombok",
    "Makassar",
    "Selat Malaka adalah urat nadi maritim global penghubung Samudra Hindia dengan Laut Cina Selatan."
  ],
  [
    "Selat yang memisahkan Pulau Sumatera dengan Pulau Jawa yang di tengahnya terdapat kepulauan Gunung Krakatau adalah Selat ...",
    "Sunda",
    "Bali",
    "Madura",
    "Karimata",
    "Selat Sunda merupakan jalur pelayaran lintas samudra alternatif bagi kapal berbobot besar."
  ],
  [
    "Selat yang memisahkan Pulau Kalimantan dengan Pulau Sulawesi yang menjadi jalur pelayaran ALKI II (Alur Laut Kepulauan Indonesia) adalah Selat ...",
    "Makassar",
    "Malaka",
    "Sunda",
    "Lombok",
    "Selat Makassar memiliki kedalaman ribuan meter dan menjadi rute kapal selam serta tanker raksasa lintas Pasifik."
  ],
  [
    "Dua provinsi di Pulau Kalimantan yang masuk ke dalam zona Waktu Indonesia Barat (WIB) adalah ...",
    "Kalimantan Barat dan Kalimantan Tengah",
    "Kalimantan Timur dan Kalimantan Utara",
    "Kalimantan Selatan dan Kalimantan Timur",
    "Kalimantan Utara dan Kalimantan Tengah",
    "Kalbar dan Kalteng berada di garis bujur barat (GMT+7) setara dengan Pulau Jawa dan Sumatera."
  ],
  [
    "Tiga provinsi di Pulau Kalimantan yang masuk ke dalam zona Waktu Indonesia Tengah (WITA) adalah ...",
    "Kalimantan Selatan, Kalimantan Timur, dan Kalimantan Utara",
    "Kalimantan Barat, Kalimantan Selatan, dan Kalimantan Timur",
    "Kalimantan Tengah, Kalimantan Barat, dan Kalimantan Utara",
    "Kalimantan Selatan saja",
    "Kalsel, Kaltim, dan Kaltara berada di garis bujur tengah (GMT+8) setara dengan Bali dan Sulawesi."
  ],
  [
    "Angin Fohn (angin jatuh panas dan kering) yang bertiup menuruni lereng pegunungan dan sering merusak daun tanaman tembakau di perkebunan Deli Sumatera Utara disebut angin ...",
    "Bohorok",
    "Kumbang di Cirebon",
    "Gending di Pasuruan",
    "Brubu di Makassar",
    "Angin Bohorok kehilangan uap air saat mendaki bukit dan memanas saat menuruni lereng merusak sel daun tembakau."
  ],
  [
    "Angin Fohn yang bersifat panas dan merusak tanaman bawang merah dan tebu di daerah Cirebon, Brebes, dan Tegal (Jawa Barat dan Jawa Tengah) disebut angin ...",
    "Kumbang",
    "Bohorok",
    "Gending",
    "Wambraw",
    "Angin Kumbang berhembus kencang dari puncak Gunung Ciremai melintasi perkebunan dataran rendah pantai utara."
  ],
  [
    "Angin Fohn yang bertiup kencang menuruni lereng Gunung Bromo dan merusak perkebunan di Pasuruan dan Probolinggo Jawa Timur disebut angin ...",
    "Gending",
    "Kumbang",
    "Bohorok",
    "Brubu",
    "Angin Gending menimbulkan suara mendesing kencang meniup debu vulkanik di kawasan tapal kuda Jawa Timur."
  ],
  [
    "Tanah organik subur yang terbentuk dari pembusukan sisa-sisa daun dan ranting pohon di lantai hutan hujan tropis disebut tanah ...",
    "Humus",
    "Latosol",
    "Gambut",
    "Aluvial",
    "Tanah humus berwarna gelap kehitaman bertekstur gembur dan memiliki kapasitas retensi air sangat baik."
  ],
  [
    "Tanah endapan lumpur yang terbawa oleh aliran air sungai dan terakumulasi di dataran rendah muara sungai yang sangat subur untuk lahan persawahan padi disebut tanah ...",
    "Aluvial",
    "Regosol",
    "Litosol",
    "Kapur (Rendzina)",
    "Limpasan sedimen lumpur aluvial memperbaharui kandungan mineral lempung di sepanjang bantaran sungai."
  ],
  [
    "Tanah yang terbentuk dari akumulasi sisa-sisa vegetasi tumbuhan rawa yang membusuk secara anaerob di daerah rawa basah Sumatera dan Kalimantan disebut tanah ...",
    "Gambut (Organosol)",
    "Vulkanik",
    "Aluvial",
    "Terrarosa",
    "Tanah gambut memiliki pH asam, bersifat menyerap air seperti spons raksasa, dan menyimpan cadangan karbon global."
  ],
  [
    "Batu bara kualitas tinggi banyak ditambang di Pulau Sumatera dan Kalimantan. Daerah tambang batu bara tertua di Sumatera Barat yang diakui UNESCO sebagai Warisan Tambang Dunia adalah ...",
    "Ombilin di Sawahlunto",
    "Bukit Asam di Tanjung Enim",
    "Tambang Sangatta di Kutai",
    "Tambang Sebuku",
    "Tambang batu bara Ombilin Sawahlunto dibangun sejak abad ke-19 dilengkapi jaringan kereta api uap Mak Itam."
  ],
  [
    "Daerah penghasil tambang aspal alam terbesar di Indonesia yang depositnya mencapai ratusan juta ton terletak di ...",
    "Pulau Buton di Sulawesi Tenggara",
    "Pulau Bangka",
    "Pulau Madura",
    "Pulau Seram",
    "Aspal Buton (Asbuton) merupakan aspal alam padat yang terikat dalam batuan kapur porous."
  ],
  [
    "Kilang minyak bumi tertua di Indonesia yang dibangun pada tahun 1894 di Jawa Timur dan masih beroperasi memproduksi bahan bakar minyak pelumas adalah kilang ...",
    "Wonokromo di Surabaya dan Cepu di Blora-Bojonegoro",
    "Plaju di Palembang",
    "Balongan di Indramayu",
    "Kasim di Papua",
    "Blok Cepu merupakan salah satu penghasil minyak bumi terbesar penopang lifting migas nasional."
  ],
  [
    "Taman Nasional di ujung barat Pulau Jawa yang menjadi suaka perlindungan terakhir bagi spesies langka badak bercula satu di dunia adalah Taman Nasional ...",
    "Ujung Kulon di Banten",
    "Gunung Gede Pangrango",
    "Baluran di Situbondo",
    "Way Kambas di Lampung",
    "TN Ujung Kulon telah ditetapkan UNESCO sebagai Situs Warisan Alam Dunia pelindung badak jawa (Rhinoceros sondaicus)."
  ],
  [
    "Taman Nasional di Lampung yang terkenal sebagai pusat konservasi dan pelatihan gajah sumatera adalah Taman Nasional ...",
    "Way Kambas",
    "Bukit Barisan Selatan",
    "Kerinci Seblat",
    "Gunung Leuser",
    "Way Kambas melestarikan populasi gajah sumatera (Elephas maximus sumatranus) dan badak sumatera."
  ],
  [
    "Taman Nasional di Kalimantan Tengah yang terkenal di dunia sebagai pusat rehabilitasi dan konservasi orangutan terbesar di habitat alaminya adalah Taman Nasional ...",
    "Tanjung Puting",
    "Kutai",
    "Betung Kerihun",
    "Kayan Mentarang",
    "Tanjung Puting dirintis oleh Dr. Birute Galdikas sebagai laboratorium konservasi orangutan kalimantan (Pongo pygmaeus)."
  ],
  [
    "Angin Fohn (angin jatuh panas dan kering) yang bertiup di kawasan Makassar, Sulawesi Selatan yang sering membuat udara gerah disebut angin ...",
    "Brubu",
    "Gending",
    "Bohorok",
    "Kumbang",
    "Angin Brubu adalah angin jatuh tropis bersuhu tinggi yang menuruni lereng Gunung Bawakaraeng ke dataran Makassar."
  ],
  [
    "Angin Fohn yang bersifat panas, kering, dan bertiup kencang di Pulau Biak, Provinsi Papua dikenal penduduk setempat dengan sebutan angin ...",
    "Wambraw",
    "Bohorok",
    "Brubu",
    "Gending",
    "Angin Wambraw bertiup melintasi pegunungan di Papua membawa massa udara panas menuruni lembah pesisir Biak."
  ],
  [
    "Sungai terpanjang di seluruh wilayah Indonesia yang membentang sepanjang 1.143 kilometer di Provinsi Kalimantan Barat adalah Sungai ...",
    "Kapuas",
    "Barito",
    "Mahakam",
    "Kahayan",
    "Sungai Kapuas berhulu di Pegunungan Kapuas Hulu dan bermuara di Selat Karimata dekat Pontianak."
  ],
  [
    "Sungai kebanggaan masyarakat Palembang di Sumatera Selatan yang dibelah oleh Jembatan Ampera sepanjang 750 kilometer adalah Sungai ...",
    "Musi",
    "Batanghari",
    "Siak",
    "Kampar",
    "Sungai Musi dengan anak-anak sungainya (Batanghari Sembilan) menjadi urat nadi perairan utama Sumatera Selatan."
  ],
  [
    "Sungai terpanjang di Pulau Jawa yang membentang melintasi Provinsi Jawa Tengah hingga bermuara di Gresik Jawa Timur adalah Sungai ...",
    "Bengawan Solo",
    "Brantas",
    "Citarum",
    "Ciliwung",
    "Bengawan Solo memiliki panjang sekitar 548 kilometer dan legendaris dalam lagu keroncong ciptaan Gesang."
  ],
  [
    "Danau vulkano-tektonik terbesar di Indonesia sekaligus danau vulkanik terbesar di Asia Tenggara yang memiliki pulau Samosir di tengahnya adalah Danau ...",
    "Toba",
    "Maninjau",
    "Singkarak",
    "Poso",
    "Danau Toba di Sumatera Utara terbentuk dari letusan supervolcano mahadahsyat sekitar 74.000 tahun yang lalu."
  ],
  [
    "Danau terdalam di Indonesia dan nomor satu di Asia Tenggara (kedalaman mencapai sekitar 590 meter) yang terletak di Sulawesi Selatan adalah Danau ...",
    "Matano",
    "Towuti",
    "Poso",
    "Sentani",
    "Danau Matano merupakan danau tektonik purba (ancient lake) dengan air yang sangat jernih dan kaya fauna endemik."
  ],
  [
    "Danau alami di Sumatera Barat yang mengalirkan airnya ke Sungai Batang Ombilin dan dimanfaatkan untuk Pembangkit Listrik Tenaga Air (PLTA) adalah Danau ...",
    "Singkarak",
    "Ranau",
    "Limboto",
    "Kerinci",
    "Danau Singkarak memiliki ikan bilih (Mystacoleucus padangensis) yang merupakan fauna endemik danau tersebut."
  ],
  [
    "Puncak tertinggi di kepulauan Indonesia yang memiliki gletser es (salju abadi) di Pegunungan Jayawijaya Papua adalah Puncak ...",
    "Jaya (Carstensz Pyramid)",
    "Rinjani",
    "Semeru",
    "Kerinci",
    "Puncak Jaya memiliki ketinggian 4.884 meter di atas permukaan laut dan termasuk \"Seven Summits\" dunia."
  ],
  [
    "Kawasan pertambangan tembaga dan emas terbuka dan bawah tanah raksasa Grasberg yang beroperasi di Papua Tengah dikelola oleh PT ...",
    "Freeport Indonesia",
    "Vale Indonesia",
    "Timah Tbk",
    "Bukit Asam",
    "Tambang Grasberg di Mimika menyimpan salah satu cadangan konsentrat tembaga dan emas terbesar di planet bumi."
  ],
  [
    "Pulau di ujung paling barat Negara Kesatuan Republik Indonesia tempat berdirinya Monumen Titik Nol Kilometer Indonesia Barat adalah Pulau ...",
    "Weh",
    "Breueh",
    "Nias",
    "Simeulue",
    "Pulau Weh di Kota Sabang Provinsi Aceh menandai tapal batas titik paling barat wilayah territorial Indonesia."
  ],
  [
    "Pulau di ujung paling selatan wilayah Indonesia yang berbatasan langsung dengan perairan benua Australia adalah Pulau ...",
    "Rote",
    "Sumba",
    "Savu",
    "Semau",
    "Pulau Rote di Kepulauan Rote Ndao Provinsi Nusa Tenggara Timur adalah titik paling selatan wilayah Indonesia."
  ],
  [
    "Pulau kecil terdepan di ujung utara Indonesia yang berbatasan laut langsung dengan negara Filipina adalah Pulau ...",
    "Miangas",
    "Marore",
    "Karakelong",
    "Bunaken",
    "Pulau Miangas (Kepulauan Talaud, Sulawesi Utara) berjarak lebih dekat ke Mindanao Filipina daripada ke Manado."
  ],
  [
    "Dataran tinggi di Jawa Tengah yang terkenal dengan julukan \"Negeri di Atas Awan\", kawah belerang Sikidang, dan candi Hindu peninggalan Mataram Kuno adalah Dataran Tinggi ...",
    "Dieng",
    "Gayo",
    "Tengger",
    "Ijen",
    "Dataran Tinggi Dieng berada di ketinggian sekitar 2.093 mdpl di antara Kabupaten Wonosobo dan Banjarnegara."
  ],
  [
    "Aktivitas perdagangan tradisional di atas perahu kayu yang terkenal di Daerah Aliran Sungai Barito dan Martapura Kalimantan Selatan adalah ...",
    "Pasar Terapung Lok Baintan",
    "Pasar Klewer",
    "Pasar Senen",
    "Pasar Sukawati",
    "Pasar terapung (floating market) memanfaatkan sampan jukung khas suku Banjar yang sudah berlangsung ratusan tahun."
  ],
  [
    "Taman Nasional di Teluk Manado, Sulawesi Utara yang terkenal di mancanegara karena keindahan tebing terumbu karang bawah lautnya (wall diving) adalah ...",
    "Taman Nasional Bunaken",
    "Taman Nasional Karimunjawa",
    "Taman Nasional Taka Bonerate",
    "Taman Nasional Kepulauan Seribu",
    "Bunaken memiliki keanekaragaman biota laut spektakuler di pusat segitiga terumbu karang pasifik."
  ],
  [
    "Taman Nasional di Nusa Tenggara Timur yang menjadi habitat asli dan suaka perlindungan kadal purba karnivora terbesar di dunia adalah ...",
    "Taman Nasional Komodo",
    "Taman Nasional Kelimutu",
    "Taman Nasional Manupeu Tanah Daru",
    "Taman Nasional Laiwangi Wanggameti",
    "Taman Nasional Komodo mencakup Pulau Komodo, Rinca, dan Padar yang diakui UNESCO sebagai Situs Warisan Dunia."
  ],
  [
    "Taman Nasional di Sulawesi Tengah yang menyimpan patung-patung megalitikum purba raksasa serta habitat satwa endemik babirusa dan anoa adalah ...",
    "Taman Nasional Lore Lindu",
    "Taman Nasional Bogani Nani Wartabone",
    "Taman Nasional Rawa Aopa Watumohai",
    "Taman Nasional Bantimurung",
    "Lembah Bada dan Lembah Besoa di Lore Lindu kaya peninggalan megalitik kalamba dan patung batu berukir."
  ],
  [
    "Pabrik pupuk tertua di Indonesia yaitu PT Pupuk Sriwidjaja (Pusri) beroperasi di Kota Palembang memanfaatkan sumber daya alam berupa ...",
    "Gas alam cair dan air sungai Musi",
    "Biji timah Bangka",
    "Minyak kelapa sawit",
    "Batuan marmer",
    "Gas alam digunakan sebagai bahan baku penghasil gas amonia dan hidrogen dalam sintesis pupuk urea."
  ],
  [
    "Pemanfaatan arus selat sempit di kepulauan Nusa Tenggara dan Maluku yang memiliki perbedaan pasang surut sangat kuat berpotensi besar untuk pembangkit listrik energi terbarukan berupa ...",
    "Pembangkit Listrik Tenaga Arus Laut (PLTAL)",
    "Pembangkit Listrik Tenaga Nuklir",
    "Pembangkit Listrik Tenaga Uap Batubara",
    "Pembangkit Listrik Tenaga Diesel Minyak",
    "Arus selat di Selat Larantuka dan Selat Alas menyimpan energi kinetik hidrokinetik laut yang sangat stabil dan ramah lingkungan."
  ]
];

const sulit = [
  [
    "Konsep \"Zona Ekonomi Eksklusif\" (ZEE) yang diakui dalam Konvensi Hukum Laut PBB (UNCLOS 1982) memberikan hak berdaulat bagi bangsa Indonesia untuk mengeksplorasi dan mengelola sumber daya kelautan sejauh ...",
    "200 mil laut diukur dari garis pangkal kepulauan terluar",
    "12 mil laut teritorial",
    "3 mil laut pantai",
    "350 mil landas kontinen dasar samudra",
    "ZEE memberikan hak eksklusif penangkapan ikan, tambang migas lepas pantai, dan riset ilmiah maritim bagi Indonesia."
  ],
  [
    "Deklarasi Djuanda yang dicetuskan oleh Perdana Menteri Djuanda Kartawidjaja pada 13 Desember 1957 merevolusi batas wilayah laut Indonesia dengan menyatakan bahwa ...",
    "Laut di antara dan di sekeliling pulau-pulau Indonesia bukan lagi laut bebas internasional, melainkan menjadi satu kesatuan wilayah kedaulatan mutlak perairan pedalaman Negara Kesatuan Republik Indonesia",
    "Indonesia menjual seluruh lautnya kepada PBB",
    "Batas laut Indonesia menyusut menjadi 1 mil saja",
    "Kapal asing dilarang melihat pulau-pulau di Indonesia",
    "Deklarasi Djuanda melipatgandakan luas wilayah RI menjadi 5,1 juta km² dan diakui resmi dalam UNCLOS 1982."
  ],
  [
    "Perbedaan karakteristik antara Paparan Sunda (Sunda Shelf) di Indonesia bagian barat dengan Paparan Sahul (Sahul Shelf) di Indonesia bagian timur adalah ...",
    "Paparan Sunda dulunya menyatu dengan Benua Asia dengan kedalaman laut dangkal (< 200 meter), sedangkan Paparan Sahul menyatu dengan Benua Australia",
    "Paparan Sunda memiliki laut berkedalaman 5.000 meter palung samudra",
    "Paparan Sahul tidak memiliki pulau karang",
    "Paparan Sunda terletak di Samudra Atlantik",
    "Di zaman glasial es, Laut Jawa dan Selat Karimata adalah daratan Sundaland yang dihuni fauna mamalia besar Asia."
  ],
  [
    "Palung laut terdalam di Indonesia yang terletak di perairan Laut Maluku bagian selatan dengan kedalaman mencapai lebih dari 7.400 meter di bawah permukaan laut adalah ...",
    "Palung Weber (Cekungan Weber)",
    "Palung Mariana",
    "Palung Jawa di selatan Samudra Hindia",
    "Palung Mindoro",
    "Palung Weber merupakan cekungan samudra terdalam di kawasan perairan nusantara diapit busur kepulauan Banda."
  ],
  [
    "Fenomena pembalikan massa air laut dingin kaya nutrisi dari lapisan dalam ke permukaan (Upwelling) di perairan selatan Jawa, Bali, dan Laut Banda memiliki dampak positif yaitu ...",
    "Meningkatkan kesuburan fitoplankton sehingga mengundang gerombolan ikan pelagis besar (tuna, cakalang) yang melimpah bagi nelayan",
    "Membekukan kapal nelayan di pelabuhan",
    "Membuat air laut berubah menjadi air mendidih beruap",
    "Menghilangkan garam dari air samudra",
    "Angin muson lepas pantai mendorong lapisan air hangat permukaan digantikan air dalam dingin berfosfat tinggi."
  ],
  [
    "Minyak bumi dan gas alam terbentuk dari pembusukan mikroorganisme laut (plankton dan alga) yang tertimbun endapan sedimen jutaan tahun lalu di bawah tekanan dan temperatur tinggi. Batuan sedimen tempat minyak bumi terperangkap di bawah lapisan kedap disebut batuan ...",
    "Batuan reservoar porous (seperti batu pasir dan batu gamping rekahan)",
    "Batuan beku granit padat",
    "Batuan metamorf marmer",
    "Lapisan tanah liat basah",
    "Perangkap geologi (anticline trap) menahan migrasi hidrokarbon cair dan gas agar tidak menguap keluar."
  ],
  [
    "Bahan tambang nikel yang sangat melimpah di Pulau Sulawesi (Morowali, Sorowako) dan Maluku Utara (Halmahera) menjadi komoditas strategis masa depan dunia karena digunakan sebagai bahan baku utama pembuatan ...",
    "Baterai kendaraan listrik (EV battery) dan baja tahan karat (stainless steel)",
    "Bahan peledak dinamit",
    "Kaca jendela anti peluru",
    "Kain sutra sintetis",
    "Nikel laterit berkadar tinggi memposisikan Indonesia sebagai pemilik cadangan nikel nomor satu di dunia."
  ],
  [
    "Tambang gas alam cair raksasa (LNG) di Indonesia yang diekspor ke Jepang, Korea, dan Tiongkok diolah di dua kilang gas alam cair utama yaitu Kilang ...",
    "Bontang (Badak LNG) di Kalimantan Timur dan Tangguh LNG di Teluk Bintuni Papua Barat",
    "Cilacap dan Balikpapan",
    "Cepu dan Plaju",
    "Dumai dan Sungai Pakning",
    "Kedua mega-kilang LNG ini menempatkan Indonesia sebagai eksportir gas alam cair terkemuka di kawasan Asia Pasifik."
  ],
  [
    "Pemberian Izin Usaha Pertambangan (IUP) harus mewajibkan perusahaan tambang melakukan kegiatan reklamasi dan revegetasi pasca tambang dengan tujuan ...",
    "Memulihkan kualitas tanah dan ekosistem vegetasi hutan yang rusak agar tidak meninggalkan lubang-lubang danau asam tambang beracun",
    "Mencari harta karun peninggalan kerajaan kuno",
    "Membakar seluruh sisa batuan mineral tambang",
    "Membangun lapangan terbang militer rahasia",
    "Reklamasi mengembalikan topografi lahan, mengontrol drainase asam tambang (acid mine drainage), dan reboisasi."
  ],
  [
    "Hutan sabana (padang rumput yang diselingi pepohonan jarang) banyak dijumpai di kawasan Nusa Tenggara Timur (seperti di Pulau Sumba dan Timor) karena faktor iklim ...",
    "Curah hujan tahunan yang sangat rendah dengan musim kemarau yang jauh lebih panjang dibandingkan musim hujan",
    "Suhu udara yang selalu membeku di bawah nol derajat",
    "Tingginya kelembapan udara hutan hujan sepanjang tahun",
    "Ketiadaan sinar matahari di musim panas",
    "Kondisi kering arid NTT sangat cocok dikembangkan untuk sektor peternakan sapi, kuda sandelwood, dan padang gembala."
  ],
  [
    "Siklus hidrologi air di muka bumi yang menguapkan air laut oleh energi matahari disebut evaporasi, sedangkan pelepasan uap air dari pori-pori daun tumbuhan ke atmosfer disebut ...",
    "Transpirasi",
    "Kondensasi",
    "Presipitasi",
    "Infiltrasi",
    "Kombinasi evapotranspirasi hutan hujan tropis menyumbang kelembapan awan presipitasi hujan konvektif."
  ],
  [
    "Proses meresapnya air hujan dari permukaan tanah masuk ke dalam lapisan pori-pori batuan tanah menjadi cadangan air tanah (air akuifer) disebut ...",
    "Infiltrasi dan perkolasi",
    "Kondensasi awan",
    "Sublimasi es",
    "Evaporasi danau",
    "Deforestasi hutan menghambat infiltrasi memicu limpasan permukaan (surface runoff) yang menyebabkan banjir bandang dan erosi tanah."
  ],
  [
    "Erosi tanah di lahan perbukitan miring dapat dicegah secara mekanis dengan membuat sistem terasering (sengkedan). Prinsip fisika konservasi tanah dari sengkedan adalah ...",
    "Memperpendek panjang lereng dan memperlambat laju kecepatan aliran air limpasan sehingga daya kikis erosi berkurang drastis",
    "Membuat bukit menjadi lebih tinggi menjulang",
    "Menghilangkan gaya gravitasi tanah lereng",
    "Mempercepat air hujan mengalir ke jurang",
    "Teras bangku menahan sedimen tanah lempung dan memperbesar kesempatan infiltrasi air hujan ke tanah."
  ],
  [
    "Bencana lumpur panas Lapindo yang menyembur di Porong, Sidoarjo Jawa Timur sejak Mei 2006 merupakan fenomena geologi semburan lumpur gunung api lumpur yang disebut ...",
    "Mud volcano",
    "Geiser air panas",
    "Kawah maar vulkanik",
    "Kaldera letusan",
    "Semburan lumpur bersuhu 100°C merendam puluhan desa dan pabrik industri di Porong."
  ],
  [
    "Kawasan karst (pegunungan kapur) seperti di Pegunungan Sewu (Gunungkidul, Wonosari, Pacitan) memiliki karakteristik hidrologis unik yaitu ...",
    "Permukaan tanah kering tandus berbatu kapur gamping, namun menyimpan sungai-sungai bawah tanah dan gua-gua kapur yang sangat panjang di bawahnya",
    "Permukaan tanah selalu banjir air tawar sepanjang tahun",
    "Air sungai kapur berwarna merah darah mendidih",
    "Tidak memiliki gua kapur maupun stalaktit",
    "Pelarutan kalsium karbonat (karstifikasi) membentuk lubang dolina, ponor, dan sistem akuifer lorong gua bawah tanah."
  ],
  [
    "Kawasan cagar biosfer laut Wakatobi di Sulawesi Tenggara terkenal di dunia karena memiliki keanekaragaman terumbu karang yang sangat luar biasa yang berada di pusat ...",
    "Segitiga Terumbu Karang Dunia (Coral Triangle)",
    "Palung Samudra Atlantik",
    "Lingkar Kutub Arktik",
    "Zona Subduksi Himalaya",
    "Wakatobi (Wangi-Wangi, Kaledupa, Tomia, Binongko) melindungi lebih dari 750 dari 850 spesies karang dunia."
  ],
  [
    "Pemanfaatan energi panas bumi (Geothermal) sebagai pembangkit listrik ramah lingkungan (PLTP) di Indonesia sangat potensial karena ...",
    "Indonesia dilalui busur cincin api vulkanik aktif yang menyimpan fluida uap panas bumi bertekanan tinggi di kantung magma bawah tanah",
    "Indonesia memiliki gurun pasir terluas di dunia",
    "Indonesia memiliki lautan es yang mencair",
    "Semua gunung berapi di Indonesia sudah mati total",
    "PLTP Kamojang, Salak, Dieng, dan Wayang Windu mengonversi entalpi uap geotermal menjadi listrik beremisi karbon rendah."
  ],
  [
    "Bauksit merupakan bijih mineral mentah yang ditambang di Kepulauan Riau (Bintan) dan Kalimantan Barat yang diolah melalui proses pemurnian menjadi logam ...",
    "Aluminium",
    "Tembaga",
    "Besi baja",
    "Kuningan",
    "Pemurnian bauksit di smelter alumina menghasilkan logam aluminium yang ringan, kuat, dan anti-karat untuk badan pesawat dan kabel listrik."
  ],
  [
    "Intan alami kualitas tinggi yang terkenal berkilau indah di Indonesia ditambang secara tradisional dan modern di daerah ...",
    "Martapura, Kalimantan Selatan",
    "Banjarmasin pantai",
    "Kutai Kartanegara",
    "Tarakan pulau",
    "Martapura dijuluki Kota Intan karena menjadi sentra penambangan intan Cempaka dan pasar permata permata nusantara."
  ],
  [
    "Hutan sabana di kawasan Taman Nasional Baluran Situbondo Jawa Timur sering dijuluki sebagai \"Afrika van Java\" karena menyajikan panorama bentang alam berupa ...",
    "Padang rumput sabana luas berlatar belakang Gunung Baluran yang dihuni kawanan banteng liar jawa, rusa, dan merak",
    "Hutan pinus bersalju tebal",
    "Hutan rawa gambut berlumpur hitam",
    "Gurun pasir tandus tanpa pohon",
    "Kombinasi sabana Bekol dan pantai Bama menjadi ekosistem suaka perlindungan banteng jawa (Bos javanicus)."
  ]
];

const hots = [
  [
    "Ketika para ahli klimatologi memantau fenomena anomali iklim global \"El Nino\", wilayah Indonesia seringkali mengalami dampak kekeringan berkepanjangan, kebakaran hutan dahsyat, dan kemunduran awal musim tanam padi. Keterkaitan ilmiah antara fenomena atmosferik El Nino di Samudra Pasifik dengan kekeringan di Indonesia adalah ...",
    "Suhu permukaan laut di Samudra Pasifik bagian tengah dan timur menghangat tidak lazim sehingga pusat konveksi pembentukan awan hujan bergeser menjauhi wilayah kepulauan Indonesia ke arah timur Pasifik memicu defisit presipitasi curah hujan",
    "Air laut di pantai Indonesia mengering surut hingga ke dasar",
    "El Nino meniupkan angin es dari kutub utara ke khatulistiwa",
    "Matahari terbit dari arah barat selama fenomena El Nino",
    "Sirkulasi Walker melemah membalikkan tekanan atmosfer; subsistensi udara kering menekan pembentukan awan cumulus di atas benua maritim Indonesia."
  ],
  [
    "Sebaliknya, pada saat terjadi fenomena anomali iklim global \"La Nina\", wilayah Indonesia seringkali dilanda musim hujan ekstrem yang basah sepanjang tahun disertai bencana hidrometeorologi (banjir dan tanah longsor). Mekanisme atmosferik yang memicu peningkatan curah hujan saat La Nina adalah ...",
    "Suhu permukaan laut di perairan Indonesia menjadi jauh lebih hangat dari normalnya memicu peningkatan laju evaporasi dan pembentukan awan-awan hujan konvektif yang sangat masif di atas wilayah nusantara",
    "Angin dari Australia membawa salju tebal ke pulau Jawa",
    "Gunung-gunung berapi di Indonesia meletus bersamaan mengeluarkan uap air",
    "Gravitasi bulan menarik seluruh air samudra menguap ke udara",
    "Penguatan angin pasat timur mendorong tumpukan air hangat (warm pool) ke Pasifik barat memusatkan anomali konveksi presipitasi lebat di Indonesia."
  ],
  [
    "Di pesisir utara Pulau Jawa (seperti di Semarang, Demak, dan Pekalongan), ribuan rumah warga tenggelam permanen oleh peristiwa banjir pasang air laut (banjir rob). Para pakar geodesi membuktikan bahwa banjir rob di pantura Jawa bukan semata-mata dipicu oleh kenaikan muka air laut global, melainkan faktor yang jauh lebih dominan yaitu ...",
    "Amblesan tanah permukaan (land subsidence) yang sangat parah akibat eksploitasi penyedotan air tanah secara masif dan beban infrastruktur berat di atas lapisan lempung muda",
    "Terjadinya gempa tsunami raksasa di Laut Jawa",
    "Prajurit nelayan membuang pasir pantai ke tengah laut",
    "Gunung Merapi memuntahkan air mendidih ke arah utara",
    "Laju subsidensi tanah mencapai 10-15 cm per tahun menurunkan elevasi topografi perkotaan di bawah pasang astronomis harian laut."
  ],
  [
    "Ketika hutan hujan tropis di Kalimantan dan Sumatera ditebang habis dan dikonversi menjadi perkebunan monokultur kelapa sawit skala industri di atas lahan gambut yang dikeringkan dengan kanal-kanal drainase, dampak kerusakan lingkungan berantai yang terjadi adalah ...",
    "Lapisan gambut mengering dan mudah terbakar memicu kebakaran bawah tanah (ground fire) kabut asap lintas batas (haze), memusnahkan keanekaragaman hayati endemik, dan melepaskan milyaran ton emisi karbon ke atmosfer global",
    "Tanah gambut berubah menjadi batu intan permata yang keras",
    "Air sungai di sekitar perkebunan menjadi sangat jernih dan manis",
    "Iklim mikro di sekitar perkebunan berubah menjadi bersalju",
    "Oksidasi gambut dan subsidensi hidrologis mengubah lahan basah penyerap karbon menjadi sumber emisi gas rumah kaca raksasa tak terpadamkan."
  ],
  [
    "Konsep \"Ibukota Nusantara (IKN)\" di Penajam Paser Utara, Kalimantan Timur dirancang sebagai kota hutan pintar (Smart Forest City) berkelanjutan. Analisis pertimbangan geografis dan geologis pemilihan wilayah Kalimantan Timur sebagai lokasi pemindahan pusat pemerintahan dari Jakarta adalah ...",
    "Kalimantan Timur berada di posisi geografis tengah kepulauan Indonesia (sentralitas nasional), memiliki risiko bencana geologis (gempa tektonik, tsunami, dan letusan gunung berapi) yang paling rendah dibandingkan Pulau Jawa, serta ketersediaan lahan luas",
    "Kalimantan Timur memiliki iklim salju yang sejuk",
    "Pulau Jawa akan tenggelam dalam waktu satu minggu",
    "Kalimantan Timur berbatasan darat langsung dengan negara Jepang",
    "Pemerataan ekonomi Indonesia-sentris: mengalihkan pusat gravitasi pembangunan keluar dari dominasi Jawa-sentris menuju keadilan spasial nusantara."
  ],
  [
    "Di perairan Natuna Utara, kapal-kapal nelayan asing sering melakukan pencurian ikan (IUU Fishing) yang dikawal oleh kapal penjaga pantai asing. Analisis pertimbangan geostrategis mengapa pengamanan wilayah ZEE Kepulauan Natuna sangat krusial bagi kedaulatan dan keamanan nasional Indonesia adalah ...",
    "Natuna berbatasan langsung dengan sengketa geopolitik Laut Cina Selatan, menyimpan cadangan gas alam raksasa (Blok Natuna D-Alpha), dan menjadi pintu masuk kedaulatan laut utara perairan nusantara",
    "Natuna adalah satu-satunya tempat bersarang burung kasuari",
    "Kepulauan Natuna memiliki jalan tol bawah laut menuju Amerika",
    "Air laut di perairan Natuna mengandung minyak goreng siap pakai",
    "Pertahanan perbatasan pulau terdepan: menjaga yurisdiksi hak berdaulat ZEE dari klaim tumpang tindih sembilan garis putus-putus (nine-dash line) sepihak."
  ],
  [
    "Ketika pemerintah Indonesia memberlakukan kebijakan hilirisasi nikel (larangan ekspor bijih nikel mentah dan mewajibkan pemurnian di smelter dalam negeri pada tahun 2020), kebijakan ini digugat oleh Uni Eropa di Organisasi Perdagangan Dunia (WTO). Keuntungan strategis jangka panjang dari hilirisasi tambang mineral bagi pembangunan ekonomi nasional adalah ...",
    "Meningkatkan nilai tambah ekonomi komoditas berlipat ganda, membuka lapangan kerja industri teknologi tinggi di dalam negeri, dan membangun ekosistem rantai pasok industri baterai serta mobil listrik global di tanah air",
    "Membuat harga nikel di pasar dunia menjadi gratis",
    "Menghemat penggunaan listrik di rumah tangga perkotaan",
    "Menutup seluruh pelabuhan ekspor di Indonesia selamanya",
    "Transformasi dari negara pengekspor bahan mentah kolonial (kutukan sumber daya) menjadi pemain kunci industrialisasi rantai nilai global bernilai tambah tinggi."
  ],
  [
    "Mengapa letak geologis Indonesia di zona \"Cincin Api Pasifik\" (Ring of Fire) sering diibaratkan sebagai \"dua sisi mata uang yang kontras\" bagi peradaban masyarakat Indonesia?",
    "Di satu sisi menjadi berkah abadi berupa tanah vulkanik yang sangat subur untuk pertanian, panorama wisata alam eksotis, dan potensi energi panas bumi berlimpah; namun di sisi lain menyimpan ancaman laten bencana geologis dahsyat (gempa bumi, erupsi gunung api, dan tsunami) yang menuntut mitigasi bencana tangguh",
    "Karena gunung berapi di Indonesia terbuat dari koin mata uang emas",
    "Karena semua gunung berapi di Indonesia meletus setiap pagi hari",
    "Karena gempa bumi membuat harga beras menjadi turun",
    "Paradoks vulkanisme: kesuburan agraris menopang kepadatan demografi tinggi di zona risiko geologis menuntut integrasi sains mitigasi adaptif."
  ],
  [
    "Program transmigrasi yang memindahkan penduduk dari Pulau Jawa ke kawasan perdesaan di Sumatera, Kalimantan, dan Sulawesi seringkali menghadapi kendala kegagalan panen pada fase awal. Faktor kendala perbedaan jenis tanah antara Pulau Jawa dengan pulau-pulau luar Jawa tersebut adalah ...",
    "Pulau Jawa didominasi tanah vulkanik muda (andosol/aluvial) yang kaya hara mineral pelapukan abu gunung berapi, sedangkan sebagian besar tanah di luar Jawa adalah tanah podsolik merah kuning (PMK) dan gambut tua yang bereaksi asam dan miskin unsur hara",
    "Tanah di luar Jawa mengandung batu bara yang terbakar sendiri",
    "Di luar Pulau Jawa tidak ada air hujan yang turun",
    "Petani Jawa tidak bisa menanam padi di luar pulau Jawa",
    "Karakteristik pedologis pedalaman tropis: tanah podsolik memerlukan perlakuan remediasi pengapuran (dolomit) dan pupuk fosfat intensif untuk budidaya pangan."
  ],
  [
    "Dalam tata kelola air dan pencegahan bencana banjir di Daerah Aliran Sungai (DAS) Ciliwung yang melintasi kawasan Puncak Bogor hingga muara Jakarta, mengapa upaya normalisasi sungai di Jakarta tidak akan pernah berhasil menuntaskan banjir tanpa diimbangi rehabilitasi kawasan hulu Puncak?",
    "Kawasan hulu Puncak adalah daerah resapan air alami; jika alih fungsi lahan hutan menjadi vila dan bangunan beton terus berlanjut di hulu, koefisien limpasan air hujan akan melonjak drastis dan volume air bah akan tetap meluap menenggelamkan daerah hilir Jakarta",
    "Air sungai Ciliwung mengalir dari arah laut ke arah gunung",
    "Jakarta tidak memiliki saluran pipa pembuangan air comberan",
    "Hujan lebat hanya terjadi di kawasan pelabuhan Jakarta",
    "Pengelolaan DAS terintegrasi (Integrated Watershed Management): keseimbangan hidrologis hulu menentukan beban kapasitas tampung debit banjir di hilir."
  ],
  [
    "Pembangunan jalan tol lintas pulau seperti Jalan Tol Trans-Jawa dan Jalan Tol Trans-Sumatera secara terencana oleh pemerintah bertujuan jangka panjang untuk memecahkan masalah struktural ekonomi yaitu ...",
    "Mempercepat waktu tempuh transportasi barang antarkota, menurunkan biaya logistik distribusi pangan dan industri nasional, serta mengurangi ketimpangan disparitas harga barang antar-kawasan",
    "Menggantikan peran semua kereta api di Indonesia",
    "Menghilangkan semua kendaraan sepeda motor di jalan raya",
    "Membuat harga mobil pribadi menjadi gratis bagi rakyat",
    "Konektivitas infrastruktur transportasi darat menurunkan biaya logistik ICOR (Incremental Capital Output Ratio) dan meningkatkan efisiensi mobilitas modal antardaerah."
  ],
  [
    "Danau Tempe di Kabupaten Wajo Sulawesi Selatan mengalami pendangkalan danau yang sangat cepat dari tahun ke tahun. Berdasarkan telaah hidrologi dan tata ruang lingkungan hidup, akar penyebab utama terjadinya pendangkalan masif Danau Tempe adalah ...",
    "Kerusakan vegetasi hutan lindung di kawasan hulu sungai-sungai pengumpan (Sungai Bila dan Sungai Walanae) yang memicu erosi tanah hebat dan mengendapkan jutaan ton sedimentasi lumpur di dasar danau",
    "Warga membuang jutaan karung beras ke danau",
    "Air danau menguap karena pemanasan global dalam satu malam",
    "Ikan di danau memakan semua lumpur dan tanah dasar",
    "Alih fungsi hutan di hulu memicu degradasi tangkapan air dan penumpukan beban sedimen suspended solids yang merusak ekosistem perikanan tawar danau."
  ],
  [
    "Penetapan tiga Alur Laut Kepulauan Indonesia (ALKI I melintasi Selat Sunda, ALKI II melintasi Selat Lombok-Makassar, dan ALKI III melintasi Laut Maluku/Sawu-Banda) memberikan keuntungan geostrategis dan tanggung jawab besar bagi kedaulatan maritim Indonesia, yaitu ...",
    "Memberikan hak lintas alur laut kepulauan bagi pelayaran niaga internasional yang tertib, aman, dan terawasi sekaligus mewajibkan Indonesia menjaga keselamatan navigasi dan keamanan patroli laut dari perompakan dan tumpahan minyak",
    "Menutup akses kapal asing melintasi lautan nusantara",
    "Mewajibkan semua kapal laut dunia membayar tol laut sebesar 50 persen dari muatan kapalnya",
    "Mengubah perairan internasional menjadi daratan sawah",
    "Pemberlakuan UNCLOS 1982 dan ALKI mengukuhkan yurisdiksi kepulauan (Archipelagic State) dengan jaminan kepatuhan terhadap hukum laut maritim internasional."
  ],
  [
    "Fenomena \"Upwelling\" (pembalikan massa air laut dingin dari lapisan dalam ke permukaan) yang terjadi secara berkala di perairan selatan Pulau Jawa dan barat Pulau Sumatera saat monsun timur sangat dinantikan oleh nelayan laut lepas karena ...",
    "Air laut dalam membawa konsentrasi nutrien fosfat dan nitrat tinggi ke permukaan yang memicu ledakan fitoplankton dan menarik kawanan ikan pelagis besar seperti tuna, cakalang, dan tongkol",
    "Air laut menjadi sangat hangat sehingga semua ikan langsung matang di laut",
    "Gelombang laut menjadi berhenti total dan kapal tidak perlu bahan bakar",
    "Upwelling mengubah air laut asin menjadi air mineral manis",
    "Nutrient-rich waters merangsang produktivitas primer laut dan rantai makanan bahari, menjadikan perairan Indonesia lumbung perikanan tangkap tangguh."
  ],
  [
    "Proyek reklamasi buatan (penimbunan pasir di garis pantai) di kawasan teluk perkotaan padat seringkali memicu kritik tajam dari kalangan ahli lingkungan hidup dan aktivis nelayan pesisir. Dampak negatif ekologis dan sosio-ekologis dari reklamasi pantai yang tidak berwawasan lingkungan adalah ...",
    "Mengubah dinamika arus pasang surut yang memicu abrasi pantai di pulau sekitar, menimbun padang lamun dan hutan bakau tempat pemijahan benur udang dan ikan, serta menggusur wilayah tangkap nelayan tradisional pesisir",
    "Menghilangkan matahari di langit kota selama satu tahun",
    "Mengakibatkan air laut berubah menjadi air es beku seketika",
    "Membuat semua ikan di laut berenang pindah ke daratan",
    "Reklamasi tanpa kajian AMDAL komprehensif merusak batimetri dasar laut, mereduksi ruang hidup nelayan subsisten, dan merusak zona penyangga abrasi alami."
  ],
  [
    "Kota Jakarta dan beberapa kota pesisir utara Jawa menghadapi ancaman ganda berupa kenaikan permukaan air laut global dan penurunan muka tanah lokal (land subsidence). Faktor pemicu penurunan tanah Jakarta hingga beberapa sentimeter per tahun yang paling dominan adalah ...",
    "Penyedotan air tanah dalam (deep aquifer) secara berlebihan oleh gedung bertingkat dan permukiman akibat belum meratanya jaringan pipa air bersih PDAM, diperparah beban statis konstruksi beton di atas tanah aluvial muda yang masih labil",
    "Berat badan penduduk Jakarta bertambah gemuk setiap hari",
    "Adanya terowongan rahasia tikus di bawah tanah",
    "Adanya magma gunung berapi aktif di bawah Monumen Nasional",
    "Kekosongan pori-pori akuifer pasir akibat eksploitasi air tanah memicu pemadatan matriks tanah lempung secara ireversibel."
  ],
  [
    "Bencana likuefaksi tanah (tanah padat berubah menjadi lumpur cair berarus) yang menenggelamkan ribuan rumah di Kelurahan Petobo dan Balaroa pasca gempa bumi dahsyat Palu-Donggala tahun 2018 terjadi akibat kondisi hidrogeologis berupa ...",
    "Lapisan tanah pasir jenuh air yang gembur mengalami guncangan gempa yang sangat kuat sehingga tekanan air pori meningkat drastis dan menghilangkan kuat geser tanah seketika sehingga tanah berperilaku layaknya cairan kental",
    "Ada lava panas gunung berapi yang mengalir di bawah kasur rumah",
    "Tanah meledak oleh bom dinamit militer perang",
    "Bumi terbelah dua hingga ke inti bumi",
    "Cyclic loading gempa bumi menyebabkan pore water pressure melampaui effective stress batuan sedimen jenuh."
  ],
  [
    "Transisi energi menuju emisi nol bersih di Indonesia menghadapi tantangan operasional intermitensi pada pemanfaatan Pembangkit Listrik Tenaga Surya (PLTS) dan Pembangkit Listrik Tenaga Bayu (PLTB). Maksud dari kendala intermitensi energi terbarukan ini adalah ...",
    "Keluaran pasokan listrik dari sinar matahari dan tiupan angin sangat bergantung pada cuaca, waktu siang-malam, dan musim sehingga tidak selalu stabil dan membutuhkan sistem penyimpanan baterai (BESS) atau pembangkit beban dasar penyangga",
    "Matahari di Indonesia hanya bersinar lima menit setiap minggu",
    "Angin di Indonesia bertiup dari bawah ke atas awan",
    "Listrik tenaga surya tidak bisa digunakan untuk menyalakan lampu belajar",
    "Karakteristik intermittent non-dispatchable menuntut fleksibilitas grid transmisi cerdas (smart grid) dan cadangan putar (spinning reserve) pembangkit stabil."
  ],
  [
    "Penebangan liar dan konversi hutan bakau (mangrove) menjadi tambak intensif dan permukiman di sepanjang garis pantai kepulauan Indonesia secara ilmiah memperparah risiko bencana pesisir karena ...",
    "Akar tunjang mangrove berfungsi sebagai peredam alami energi gelombang badai dan penahan laju tsunami serta penangkap sedimen tanah pantai; ketiadaannya membuat pantai rentan abrasi hebat dan sapuan gelombang pasang",
    "Bakau adalah satu-satunya pohon yang bisa menyerap sinar bulan",
    "Pohon bakau mengeluarkan zat kimia yang menolak air laut",
    "Tanpa pohon bakau, nelayan dilarang membeli perahu motor",
    "Sabuk hijau pantai (coastal green belt) mangrove mereduksi energi tsunami hingga 50-60% dan mencegah hilangnya garis pantai akibat abrasi hidrodinamis."
  ],
  [
    "Posisi wilayah kepulauan Indonesia yang berada tepat di lintang ekuator dilewati oleh \"Daerah Pertemuan Angin Antartropis\" (ITCZ - Intertropical Convergence Zone). Dampak meteorologis dan hidrologis penting dari keberadaan sabuk ITCZ ini bagi wilayah Indonesia adalah ...",
    "Terjadi konvergensi massa udara lembap tropis yang memicu proses konveksi udara naik secara masif, menghasilkan akumulasi awan cumulonimbus pembawa curah hujan lebat sepanjang tahun di kawasan tropis basah nusantara",
    "Indonesia mengalami badai salju dan hujan es abadi setiap siang",
    "Suhu udara di khatulistiwa membeku hingga minus 50 derajat Celsius",
    "Angin berputar kencang mengisap seluruh air danau menjadi kering",
    "Zona ITCZ merupakan thermal equator dinamis yang menentukan fluktuasi monsun dan sebaran presipitasi basah di benua maritim nusantara."
  ]
];

module.exports = {
  name: 'Geografi, Letak Astronomis, Iklim & Sumber Daya Alam Indonesia',
  mudah,
  sedang,
  sulit,
  hots
};
