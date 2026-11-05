// Topik 9: Kalor, Perubahan Wujud Benda, Gaya & Pesawat Sederhana
// Format: [pertanyaan, pilihanBenar, salah1, salah2, salah3, penjelasan]

const mudah = [
  [
    "Perubahan wujud benda dari padat menjadi cair akibat menerima kalor (panas), seperti es batu yang dibiarkan di udara terbuka, disebut ...",
    "Mencair (melebur)",
    "Membeku",
    "Menguap",
    "Menyublim",
    "Mencair terjadi saat partikel padat menyerap energi panas sehingga ikatan partikel merenggang menjadi cair."
  ],
  [
    "Perubahan wujud benda dari cair menjadi padat akibat melepaskan kalor (pendinginan), seperti air yang dimasukkan ke dalam freezer, disebut ...",
    "Membeku",
    "Mencair",
    "Mengembun",
    "Mengkristal",
    "Membeku terjadi saat pelepasan panas menyebabkan partikel zat cair merapat dan terkunci dalam kisi padat."
  ],
  [
    "Perubahan wujud benda dari cair menjadi gas akibat penyerapan kalor, seperti air mendidih yang dipanaskan di atas kompor, disebut ...",
    "Menguap",
    "Mengembun",
    "Membeku",
    "Menyublim",
    "Menguap terjadi ketika molekul zat cair memperoleh energi kinetik cukup untuk lepas menjadi fase gas."
  ],
  [
    "Perubahan wujud benda dari gas menjadi cair akibat pelepasan kalor (pendinginan), seperti titik-titik air di dinding luar gelas berisi es, disebut ...",
    "Mengembun",
    "Menguap",
    "Mencair",
    "Mengkristal",
    "Uap air di udara sekitar gelas kehilangan panas saat menyentuh permukaan gelas dingin dan berubah wujud menjadi tetes air."
  ],
  [
    "Perubahan wujud benda dari padat langsung menjadi gas tanpa melalui fase cair terlebih dahulu, seperti kapur barus (kamper) di lemari pakaian, disebut ...",
    "Menyublim",
    "Mengkristal",
    "Mencair",
    "Mengembun",
    "Menyublim terjadi pada zat yang memiliki tekanan uap tinggi pada suhu ruang sehingga langsung beralih ke fase gas."
  ],
  [
    "Perubahan wujud benda dari gas langsung menjadi padat dengan melepaskan energi panas, seperti terbentuknya salju di atmosfer, disebut ...",
    "Mengkristal (deposisi)",
    "Menyublim",
    "Mencair",
    "Menguap",
    "Deposisi/kristalisasi adalah kebalikan menyublim, di mana molekul gas langsung memadat saat didinginkan drastis."
  ],
  [
    "Perpindahan panas melalui suatu zat perantara tanpa disertai perpindahan partikel-partikel zat tersebut, seperti sendok logam yang panas saat mengaduk teh, disebut ...",
    "Konduksi",
    "Konveksi",
    "Radiasi",
    "Evaporasi",
    "Konduksi terjadi melalui transfer energi kinetik getaran antarpartikel padat yang saling bersentuhan."
  ],
  [
    "Perpindahan panas yang disertai dengan perpindahan partikel-partikel zat perantaranya, seperti air yang bergolak mendidih di dalam panci, disebut ...",
    "Konveksi",
    "Konduksi",
    "Radiasi",
    "Kondensasi",
    "Konveksi terjadi pada zat cair dan gas akibat perbedaan massa jenis fluida panas yang memuai dan naik."
  ],
  [
    "Perpindahan panas tanpa memerlukan zat perantara (medium), seperti panas sinar matahari yang sampai ke bumi melalui ruang hampa udara, disebut ...",
    "Radiasi (pancaran)",
    "Konduksi",
    "Konveksi",
    "Sublimasi",
    "Radiasi termal merambat dalam bentuk gelombang elektromagnetik inframerah yang dapat menembus ruang hampa."
  ],
  [
    "Bahan atau benda yang dapat menghantarkan panas dengan sangat baik dan cepat, seperti tembaga, besi, dan aluminium, disebut ...",
    "Konduktor panas",
    "Isolator panas",
    "Semikonduktor",
    "Reflektor",
    "Konduktor logam memiliki elektron bebas yang mempermudah transfer energi panas secara berantai."
  ],
  [
    "Bahan atau benda yang sangat lambat atau buruk dalam menghantarkan panas, seperti kayu, plastik, karet, dan kain wol, disebut ...",
    "Isolator panas",
    "Konduktor panas",
    "Radiator",
    "Magnetik",
    "Isolator tidak memiliki elektron bebas sehingga getaran termal sangat sulit ditransmisikan antarpartikel."
  ],
  [
    "Tarikan atau dorongan yang diberikan pada suatu benda sehingga dapat mempengaruhi gerak, kecepatan, atau bentuk benda tersebut disebut ...",
    "Gaya",
    "Usaha",
    "Daya",
    "Energi potensial",
    "Gaya diukur dalam satuan Newton (N) dan memiliki besaran serta arah."
  ],
  [
    "Gaya yang timbul akibat gesekan antara dua permukaan benda yang saling bersentuhan dan arahnya selalu berlawanan dengan arah gerak benda disebut ...",
    "Gaya gesek",
    "Gaya gravitasi",
    "Gaya magnet",
    "Gaya pegas",
    "Gaya gesek menghambat gerak relatif antar dua permukaan yang bersentuhan."
  ],
  [
    "Gaya tarik bumi yang menyebabkan semua benda yang dilepaskan di udara akan jatuh menuju pusat bumi disebut ...",
    "Gaya gravitasi bumi",
    "Gaya magnet",
    "Gaya listrik statis",
    "Gaya apung",
    "Gravitasi bumi menarik semua massa di sekitar planet dengan percepatan sekitar 9,8 m/s²."
  ],
  [
    "Gaya yang dihasilkan oleh kelenturan suatu benda elastis saat meregang atau memampat, seperti pada karet ketapel dan busur panah, disebut ...",
    "Gaya pegas",
    "Gaya otot",
    "Gaya gesek",
    "Gaya mesin",
    "Gaya pegas timbul karena kecenderungan benda elastis untuk kembali ke bentuk semula (Hukum Hooke)."
  ],
  [
    "Gaya tarik atau gaya tolak yang dihasilkan oleh kutub-kutub magnet terhadap benda magnetis seperti besi dan baja disebut ...",
    "Gaya magnet",
    "Gaya gravitasi",
    "Gaya gesek",
    "Gaya pegas",
    "Kutub magnet sejenis tolak-menolak, sedangkan kutub tidak sejenis tarik-menarik."
  ],
  [
    "Gaya yang dihasilkan oleh kerja kontraksi dan relaksasi otot tubuh manusia atau hewan, seperti saat mengayuh sepeda atau mendorong meja, disebut ...",
    "Gaya otot",
    "Gaya mesin",
    "Gaya gesek",
    "Gaya gravitasi",
    "Gaya otot mengubah energi kimia makanan yang tersimpan dalam serat aktin dan miosin otot menjadi energi mekanik."
  ],
  [
    "Alat bantu sederhana yang digunakan manusia untuk mempermudah melakukan usaha atau pekerjaan disebut ...",
    "Pesawat sederhana",
    "Mesin kalor",
    "Generator",
    "Transformator",
    "Pesawat sederhana melipatgandakan gaya kuasa atau mengubah arah gaya untuk meringankan beban kerja."
  ],
  [
    "Jenis pesawat sederhana yang berupa batang kaku yang berputar pada satu titik tumpu tertentu disebut ...",
    "Pengungkit (tuas)",
    "Bidang miring",
    "Katrol",
    "Roda berporos",
    "Tuas terdiri dari titik tumpu (T), titik beban (B), dan titik kuasa (K)."
  ],
  [
    "Jenis pesawat sederhana yang berupa lintasan landai atau miring untuk mempermudah menaikkan barang berat ke bak truk adalah ...",
    "Bidang miring",
    "Tuas jenis 1",
    "Katrol tetap",
    "Roda berporos",
    "Bidang miring memperpanjang jarak lintasan tempuh sehingga gaya kuasa yang dibutuhkan menjadi jauh lebih kecil."
  ]
];
const sedang = [
  [
    "Titik beku air murni pada kondisi normal adalah ...",
    "0 derajat Celsius (°C)",
    "100 derajat Celsius (°C)",
    "37 derajat Celsius (°C)",
    "-10 derajat Celsius (°C)",
    "Pada suhu 0 derajat Celsius, air berubah wujud dari cair menjadi padat es."
  ],
  [
    "Titik didih air murni pada kondisi normal di permukaan laut adalah ...",
    "100 derajat Celsius (°C)",
    "0 derajat Celsius (°C)",
    "50 derajat Celsius (°C)",
    "212 derajat Celsius (°C)",
    "Pada suhu 100 derajat Celsius, air mendidih dan berubah wujud dari cair menjadi uap gas."
  ],
  [
    "Ketika mentega diletakkan di atas wajan yang dipanaskan di atas kompor menyala, mentega akan meleleh. Peristiwa perubahan wujud dan perpindahan kalor yang terjadi adalah ...",
    "Mencair akibat konduksi panas dari dasar wajan logam",
    "Membeku akibat konveksi udara kompor",
    "Menguap akibat radiasi cahaya wajan",
    "Menyublim akibat isolator wajan",
    "Panas kompor mengalir secara konduksi melalui logam wajan mentransfer energi meleburkan ikatan lemak mentega."
  ],
  [
    "Pemasangan rel kereta api selalu diberi celah renggang beberapa milimeter pada setiap sambungan rel dengan tujuan ...",
    "Memberi ruang pemuaian rel saat siang hari yang panas agar rel tidak melengkung bengkok",
    "Menghemat bahan baku pembuatan besi baja rel kereta",
    "Mencegah kereta api tergelincir saat hujan lebat",
    "Memudahkan air hujan mengalir keluar dari rel",
    "Pemuaian termal panjang besi rel akibat panas siang hari membutuhkan celah agar rel tidak mengalami buckling deformasi."
  ],
  [
    "Kawat kabel listrik di pinggir jalan sengaja dipasang kendur bergelambir dan tidak ditarik tegang kencang saat dipasang siang hari. Hal ini bertujuan untuk ...",
    "Mencegah kabel listrik putus saat malam hari yang dingin akibat terjadinya penyusutan panjang kawat",
    "Menghemat panjang kabel yang dibeli oleh perusahaan listrik",
    "Membuat burung-burung nyaman hinggap di atas kabel",
    "Menghilangkan aliran arus listrik yang terlalu deras",
    "Penyusutan termal di suhu malam hari membuat kawat memendek; jika dipasang kencang kabel berisiko putus meregang tiang."
  ],
  [
    "Terjadinya angin darat (angin bertiup dari darat ke laut pada malam hari) dan angin laut (bertiup dari laut ke darat pada siang hari) merupakan fenomena alami perpindahan kalor secara ...",
    "Konveksi udara atmosfer akibat perbedaan kapasitas panas spesifik daratan dan lautan",
    "Konduksi tanah pantai ke air laut",
    "Radiasi sinar bulan di malam hari",
    "Sublimasi uap air garam pantai",
    "Daratan lebih cepat panas di siang hari dan cepat dingin di malam hari memicu konveksi siklus udara darat-laut."
  ],
  [
    "Bagian dalam termos air panas dirancang menggunakan tabung kaca berdinding ganda dengan ruang hampa udara (vakum) di antaranya dan permukaan mengkilap seperti cermin. Ruang hampa udara berfungsi untuk ...",
    "Mencegah perpindahan kalor secara konduksi dan konveksi ke luar tabung termos",
    "Menambah berat termos agar tidak mudah goyang",
    "Menyerap gas karbondioksida dari dalam air mendidih",
    "Mengubah air dingin menjadi air panas secara otomatis",
    "Karena ruang hampa (vakum) tidak memiliki molekul materi perantara, konduksi dan konveksi termal terblokir total."
  ],
  [
    "Lapisan perak mengkilap mirip cermin di dinding dalam tabung termos air panas berfungsi untuk ...",
    "Mencegah perpindahan kalor secara radiasi dengan memantulkan kembali gelombang panas ke dalam termos",
    "Membunuh bakteri patogen di dalam air minum",
    "Membuat air mendidih terlihat lebih jernih",
    "Mencegah kaca termos pecah terkena benturan luar",
    "Permukaan mengkilap memiliki emisivitas termal rendah dan reflektivitas tinggi memantulkan radiasi inframerah air panas."
  ],
  [
    "Gagang panci masak dan pegangan setrika listrik umumnya dilapisi oleh bahan kayu atau plastik ebonit keras. Alasan penggunaan bahan tersebut adalah ...",
    "Kayu dan ebonit adalah isolator panas yang buruk menghantarkan panas sehingga tangan tidak melepuh saat memegang",
    "Kayu dan ebonit membuat panci menjadi sangat ringan",
    "Plastik ebonit dapat menambah suhu panas masakan secara instan",
    "Kayu mencegah panci berkarat saat dicuci",
    "Isolator termal melindungi pemakai dari luka bakar akibat konduksi panas dari badan logam alat masak."
  ],
  [
    "Ketika bola plastisin (tanah liat) ditekan dan dipijat dengan jari tangan, bentuk bola berubah menjadi pipih. Peristiwa ini membuktikan bahwa gaya dapat ...",
    "Mengubah bentuk suatu benda",
    "Mengubah massa dan jenis zat benda",
    "Menghentikan benda yang bergerak cepat",
    "Menghilangkan energi kinetik secara abadi",
    "Gaya tekan mekanis mendeformasi ikatan antar partikel plastisin yang bersifat plastis permanen."
  ],
  [
    "Ketika sebuah bola tenis yang sedang menggelinding dihentikan dengan telapak tangan, peristiwa ini membuktikan bahwa gaya dapat ...",
    "Membuat benda bergerak menjadi diam",
    "Mengubah warna dan aroma bola",
    "Membuat benda melayang di udara",
    "Mencairkan karet bola tenis",
    "Gaya gesek telapak tangan memberikan perlambatan negatif (deceleration) yang mereduksi kecepatan bola hingga nol."
  ],
  [
    "Ketika bola kasti yang dilempar lurus dipukul menggunakan tongkat pemukul sehingga memantul berbalik ke arah sebaliknya, hal ini membuktikan bahwa gaya dapat ...",
    "Mengubah arah gerak benda yang bergerak",
    "Mengubah benda padat menjadi gas kasti",
    "Menambah volume udara di dalam bola kasti",
    "Menghilangkan gravitasi bola saat melayang",
    "Vektor gaya impuls tongkat mengubah vektor kecepatan dan arah lintasan gerak bola di udara."
  ],
  [
    "Penggunaan alur bergerigi atau motif tapak pada ban kendaraan bermotor dan sol sepatu bertujuan untuk ...",
    "Memperbesar gaya gesek dengan permukaan aspal atau tanah agar kendaraan tidak mudah selip tergelincir",
    "Memperkecil gesekan agar kendaraan meluncur tak terkendali",
    "Membuat ban menjadi lebih ringan berputar",
    "Menambah kecepatan laju kendaraan menjadi dua kali lipat",
    "Kekasaran permukaan ban meningkatkan koefisien gesek statis mencegah ban tergelincir di jalanan basah."
  ],
  [
    "Pemberian oli pelumas pada rantai sepeda dan mesin kendaraan bermotor bertujuan untuk ...",
    "Memperkecil gaya gesek antarlogam mesin sehingga tidak cepat aus dan tidak cepat panas",
    "Memperbesar gaya gesek agar rantai tidak berputar cepat",
    "Menambah berat mesin agar kendaraan stabil di jalan menanjak",
    "Menghentikan putaran roda saat melaju kencang",
    "Lapisan film oli memisahkan kontak langsung mikroskopis tonjolan logam mereduksi koefisien gesek kinetis."
  ],
  [
    "Pengungkit (tuas) Jenis 1 ditandai dengan letak titik tumpu (T) yang berada di antara titik beban (B) dan titik kuasa (K). Contoh alat sehari-hari yang bekerja berdasarkan prinsip tuas jenis 1 adalah ...",
    "Gunting kain, tang pemotong kawat, dan jungkat-jungkit",
    "Gerobak dorong roda satu dan pembuka botol soda",
    "Pinset penjepit bulu dan alat pemotong kuku",
    "Cangkul tanah dan sekop pasir",
    "Pada gunting dan tang, engsel baut bertindak sebagai titik tumpu di tengah antara pegangan tangan dan mata pisau."
  ],
  [
    "Pengungkit (tuas) Jenis 2 ditandai dengan letak titik beban (B) yang berada di antara titik tumpu (T) dan titik kuasa (K). Contoh alat sehari-hari yang bekerja berdasarkan prinsip tuas jenis 2 adalah ...",
    "Gerobak dorong roda satu, pembuka tutup botol logam, dan alat pemecah biji kemiri",
    "Gunting, tang kombinasi, dan linggis pencabut paku",
    "Pinset, staples kertas, dan penjepit makanan",
    "Sumpit makan dan dayung perahu",
    "Pada gerobak dorong roda satu, roda di depan adalah tumpu, bak pasir di tengah adalah beban, dan pegangan di ujung adalah kuasa."
  ],
  [
    "Pengungkit (tuas) Jenis 3 ditandai dengan letak titik kuasa (K) yang berada di antara titik tumpu (T) dan titik beban (B). Contoh alat sehari-hari yang bekerja berdasarkan prinsip tuas jenis 3 adalah ...",
    "Pinset, penjepit gorengan, staples, dan cangkul",
    "Gunting kertas, gunting kuku, dan linggis",
    "Gerobak dorong roda satu dan pemecah buah kenari",
    "Tang buaya dan timbangan gantung pasar",
    "Pada pinset dan penjepit makanan, jari tangan menekan di bagian tengah (kuasa) di antara engsel pangkal (tumpu) dan ujung capit (beban)."
  ],
  [
    "Pada katrol tetap yang dipasang di ujung tiang bendera atau kerekan timba sumur, keuntungan utama penggunaannya bagi manusia adalah ...",
    "Mengubah arah gaya tarik sehingga menarik beban ke bawah menjadi lebih mudah dan searah gravitasi",
    "Mengurangi berat benda menjadi nol kilogram",
    "Membuat tali bendera bisa bergerak naik sendiri tanpa ditarik",
    "Mempercepat tiupan angin di lapangan",
    "Katrol tetap tidak memperkecil gaya kuasa (KM = 1), tetapi mengubah arah gaya dari menarik ke atas menjadi menarik ke bawah yang jauh lebih ergonomis."
  ],
  [
    "Katrol bebas (bergerak) yang sering digunakan pada alat derek pengangkat barang berat di pelabuhan atau bengkel mesin memberikan keuntungan berupa ...",
    "Gaya kuasa yang dibutuhkan untuk mengangkat beban menjadi lebih kecil (setengah dari berat beban)",
    "Beban yang diangkat berubah menjadi sangat berat",
    "Arah tarikan tali menjadi berlawanan dengan arah gerak benda",
    "Benda yang diangkat tidak memerlukan tali sama sekali",
    "Pada katrol bebas, beban ditopang oleh dua ruas tali sehingga gaya yang diperlukan untuk mengangkat beban menjadi separuh dari berat benda aslinya."
  ],
  [
    "Alat pertukangan berikut yang bekerja memanfaatkan prinsip bidang miring untuk membelah kayu atau mengikat papan adalah ...",
    "Kapak pemotong kayu, baji besi, dan paku sekrup berulir",
    "Gunting kawat dan penjepit es batu",
    "Tang kombinasi dan jungkat-jungkit anak",
    "Katrol timba sumur dan setir mobil",
    "Baji kapak dan ulir sekrup merupakan bidang miring melingkar yang melipatgandakan gaya penetrasi ke serat kayu."
  ],
  [
    "Jalan raya di pegunungan yang curam sengaja dibuat berkelok-kelok meliuk memutari bukit. Penerapan prinsip fisika pesawat sederhana pada pembuatan jalan berkelok tersebut adalah ...",
    "Bidang miring: memperpanjang lintasan tempuh agar gaya dorong mesin kendaraan mendaki tanjakan menjadi lebih ringan",
    "Tuas jenis 1: mendekatkan titik tumpu jalan ke inti bumi",
    "Katrol majemuk: mengerek roda mobil ke puncak bukit",
    "Roda berporos: memutar jalan pegunungan saat mobil lewat",
    "Dengan memperpanjang jarak tempuh mendaki lereng, gradien kemiringan berkurang sehingga gaya kuasa mesin yang dibutuhkan mengecil."
  ],
  [
    "Setir kemudi mobil, pedal kayuh sepeda ontel, dan engkol pemutar derek merupakan alat yang bekerja berdasarkan prinsip pesawat sederhana jenis ...",
    "Roda berporos",
    "Tuas jenis 2",
    "Katrol bebas",
    "Bidang miring baji",
    "Roda berdiameter besar dihubungkan ke poros berdiameter kecil melipatgandakan torsi momen gaya kemudi."
  ],
  [
    "Pada musim dingin, garam dapur (NaCl) sering ditaburkan secara masif di atas lapisan es jalan raya perkotaan negara empat musim. Tujuan penaburan garam tersebut adalah ...",
    "Menurunkan titik beku es sehingga lapisan es di jalanan mencair pada suhu dingin di bawah 0°C",
    "Membuat es membeku dua kali lipat lebih keras",
    "Menghilangkan gaya gesek ban mobil dengan aspal",
    "Mencegah debu berterbangan ditiup angin badai",
    "Sifat koligatif penurunan titik beku larutan elektrolit garam melarutkan es pada suhu sub-beku."
  ],
  [
    "Ketika kita merebus air dalam panci di atas kompor gas, air di bagian bawah panci menjadi panas terlebih dahulu, lalu bergerak naik ke atas mendesak air dingin di permukaan untuk turun ke bawah. Siklus aliran perputaran air panas ini disebut ...",
    "Arus konveksi air",
    "Arus konduksi listrik",
    "Gelombang radiasi cahaya",
    "Sublimasi fluida cair",
    "Densitas air panas lebih rendah memicu daya apung naik (buoyancy), digantikan fluida dingin denser secara sirkular."
  ],
  [
    "Mengapa pakaian berwarna putih atau terang terasa lebih sejuk dan nyaman dipakai di bawah terik matahari dibandingkan pakaian berwarna hitam legam?",
    "Karena warna putih memantulkan hampir seluruh radiasi termal matahari, sedangkan warna hitam menyerap hampir seluruh panas radiasi",
    "Karena kain warna putih memiliki lubang angin yang sangat besar",
    "Karena warna putih dapat menghasilkan es batu sendiri di serat kain",
    "Karena kain warna hitam mengandung baterai magnetik penarik api",
    "Permukaan terang ber-albedo tinggi memantulkan sinar surya, sedangkan warna gelap ber-emisivitas absorpsi panas tinggi."
  ],
  [
    "Penggunaan pisau yang tajam lebih mudah memotong sayuran dibanding pisau tumpul karena ...",
    "Mata pisau tajam memiliki luas bidang tekan yang sangat kecil sehingga menghasilkan tekanan yang sangat besar dengan gaya kecil",
    "Pisau tajam memiliki gaya gravitasi yang lebih kuat menarik sayuran",
    "Pisau tajam mengeluarkan panas konduksi yang melelehkan sayur",
    "Pisau tajam menyerap air sayuran hingga sayuran mengering",
    "Tekanan P = F / A. Semakin kecil luas kontak penampang A, semakin raksasa tekanan tekan P yang terkonsentrasi merobek sel sayur."
  ],
  [
    "Paku yang ujungnya dibuat runcing runcing mempermudah menancap ke dalam balok kayu saat dipalu karena penerapan konsep ...",
    "Memperkecil luas bidang kontak ujung paku agar menghasilkan tekanan tekan yang sangat besar ke serat kayu",
    "Memperbesar gaya gesek ujung paku dengan udara sekitar balok",
    "Mengurangi massa paku agar paku melayang masuk balok",
    "Mempercepat perpindahan panas konveksi dari palu besi",
    "Ujung paku runcing memfokuskan seluruh gaya tumbukan F dari palu pada luas mikro A menghasilkan tekanan penetrasi maksimum."
  ],
  [
    "Ketika seseorang mengangkat batu berat menggunakan sebatang tongkat linggis kayu panjang (tuas jenis 1), usaha akan terasa paling ringan jika letak titik tumpu (batu ganjal) diletakkan ...",
    "Sangat dekat dengan batu beban yang ingin diangkat sehingga lengan kuasanya menjadi sangat panjang",
    "Tepat di tengah-tengah panjang tongkat linggis",
    "Sangat dekat dengan tangan yang menekan ujung tongkat",
    "Di atas batu beban yang akan diangkat",
    "Semakin panjang lengan kuasa (Lk) dibandingkan lengan beban (Lb), keuntungan mekanis KM = Lk / Lb semakin besar melipatgandakan gaya otot."
  ],
  [
    "Saat memotong kertas tebal menggunakan gunting seng, kertas akan lebih mudah terpotong jika kertas diletakkan ...",
    "Di dekat poros engsel gunting agar lengan bebannya menjadi sependek mungkin",
    "Di ujung paling depan mata gunting agar lengan bebannya panjang",
    "Di luar kedua bilah mata gunting seng",
    "Di antara jari tangan pemegang gunting",
    "Memperpendek lengan beban Lb melipatgandakan rasio mekanis tuas sehingga gaya potong bilah menjadi berlipat ganda."
  ],
  [
    "Ketika mobil melaju kencang di jalan tol tiba-tiba direm mendadak oleh sopir, seluruh tubuh penumpang di dalamnya akan terdorong maju ke depan. Peristiwa inersia kelembaman ini sesuai dengan ...",
    "Hukum I Newton tentang kelembaman (kecenderungan benda mempertahankan keadaan geraknya)",
    "Hukum Gravitasi universal Newton",
    "Hukum Archimedes tentang gaya apung bejana",
    "Hukum Pascal tentang tekanan hidrolik zat cair",
    "Benda yang sedang bergerak cenderung mempertahankan status gerak lurusnya (inersia) saat gaya luar bekerja mendadak."
  ],
  [
    "Ketika seekor burung mengepakkan sayapnya ke bawah mendorong udara, tubuh burung terangkat ke atas melayang di udara. Interaksi gaya ini merupakan penerapan dari ...",
    "Hukum III Newton tentang gaya aksi dan reaksi (gaya dorong sayap ke bawah dibalas gaya angkat udara ke atas)",
    "Hukum Pemantulan kalor konveksi",
    "Hukum Kekekalan massa Lavoisier",
    "Hukum Termodinamika nol",
    "Gaya aksi dorongan massa udara ke bawah menghasilkan gaya reaksi fluida ke atas yang sama besar dan berlawanan arah."
  ],
  [
    "Ketika mendayung perahu di danau, pendayung mendorong air ke arah belakang dengan dayungnya agar perahu meluncur maju ke arah depan. Pasangan gaya yang bekerja adalah ...",
    "Gaya aksi dorongan dayung ke air ke belakang dan gaya reaksi tolakan air ke perahu ke depan",
    "Gaya gesek air dengan awan di langit",
    "Gaya pegas kayu dayung perahu",
    "Gaya gravitasi bulan yang menarik air danau",
    "Aksi dorongan fluida ke posterior memicu reaksi propulsi perahu ke anterior dengan magnitudo setara."
  ],
  [
    "Dinding kaca tebal seringkali tiba-tiba retak pecah ketika dituangi air yang mendidih secara mendadak. Fenomena fisika yang menyebabkan kaca pecah tersebut adalah ...",
    "Terjadinya pemuaian panas yang tidak merata antara permukaan kaca bagian dalam yang mendadak memuai dan permukaan luar yang masih dingin",
    "Gaya gravitasi air mendidih menghancurkan molekul silika kaca",
    "Zat kimia air panas melarutkan seluruh bingkai jendela kaca",
    "Udara dingin di luar kaca menendang permukaan kaca ke dalam",
    "Gradien suhu ekstrem memicu tegangan termal diferensial (thermal stress) melebihi batas elastisitas regang kaca getas."
  ],
  [
    "Jembatan gantung dan jembatan baja selalu dilengkapi dengan bantalan roda rol (roller bearing) atau celah pemuaian bergigi di salah satu ujung tumpuannya. Hal ini bertujuan untuk ...",
    "Memberi keleluasaan bagi bentang baja jembatan untuk memuai saat musim panas dan menyusut saat musim dingin tanpa merusak fondasi beton",
    "Menyalurkan air hujan agar tidak membasahi sungai di bawahnya",
    "Menangkap energi petir untuk disalurkan ke lampu jalan",
    "Membuat jembatan bergoyang kencang saat ada mobil melintas",
    "Pemuaian termal struktur baja raksasa membutuhkan tumpuan rol bergerak agar tidak menghasilkan gaya dorong lateral perusak abutmen."
  ],
  [
    "Alat pemadam kebakaran api ringan (APAR) berisi gas karbon dioksida cair (CO2) bertekanan tinggi. Saat gas CO2 disemprotkan ke kobaran api kompor, api langsung padam karena CO2 ...",
    "Memiliki massa jenis lebih berat dari udara sehingga menyelimuti api dan memutus suplai gas oksigen pembakar",
    "Mencairkan api menjadi tetesan air bening",
    "Menghasilkan gas hidrogen yang meledak di atas api",
    "Menyerap seluruh logam kompor hingga lenyap",
    "Selimut CO2 mengisolasi zona pembakaran dari gas O2 atmosfer mematikan reaksi rantai kimia api (oksigen starvation)."
  ],
  [
    "Pada saat kita menyemprotkan parfum cair atau obat semprot nyamuk aerosol dari kaleng bertekanan, kaleng terasa mendadak sangat dingin di tangan. Penjelasan fisika untuk fenomena penurunan suhu kaleng ini adalah ...",
    "Cairan pendorong di dalam kaleng menyerap kalor panas secara drastis saat menguap dan memuai keluar kaleng (ekspansi gas Joule-Thomson)",
    "Kaleng aerosol menghasilkan es batu dari udara luar",
    "Tangan manusia mengeluarkan energi panas ke atmosfer",
    "Cairan insektisida bereaksi dengan keringat jari tangan",
    "Penurunan tekanan mendadak memicu penguapan fase cair dan ekspansi adiabatik yang menyedot entalpi panas dari dinding kaleng."
  ],
  [
    "Ban sepeda yang dipompa terlalu keras dan diletakkan di bawah terik sinar matahari pada siang hari yang terik dapat meletus secara tiba-tiba karena ...",
    "Udara gas di dalam ban memuai dan tekanannya meningkat drastis hingga melebihi daya tahan karet ban",
    "Karet ban meleleh mencair menjadi genangan minyak",
    "Sinar ultraviolet matahari memotong rantai polimer karet seketika",
    "Gaya gravitasi menarik udara ban jatuh ke tanah",
    "Hukum Gay-Lussac: kenaikan suhu termal mutlak menaikkan tekanan gas berbanding lurus hingga merobek dinding ban."
  ],
  [
    "Saat memasak sup menggunakan panci presto (pressure cooker), daging sapi yang keras dapat menjadi sangat empuk dalam waktu singkat dibandingkan direbus dalam panci terbuka biasa. Hal ini karena panci presto ...",
    "Memerangkap uap air menaikkan tekanan udara di dalam panci sehingga titik didih air meningkat di atas 100°C (mencapai ~120°C)",
    "Menggunakan laser pemotong daging dari tutup pancinya",
    "Menyerap oksigen dari udara dapur untuk membakar lemak daging",
    "Menghilangkan seluruh garam di dalam kuah masakan",
    "Tekanan tinggi menaikkan boiling point air; temperatur memasak yang jauh lebih tinggi mempercepat hidrolisis kolagen daging."
  ],
  [
    "Bentuk badan pesawat terbang yang aerodinamis dan bagian depan kereta cepat yang memanjang runcing menyerupai moncong peluru bertujuan adaptif fisika untuk ...",
    "Memperkecil gaya gesek udara (hambatan aerodinamis / drag) sehingga laju kecepatan kendaraan lebih maksimal dan efisien bahan bakar",
    "Membuat kendaraan terlihat gagah dan indah dilihat penumpang",
    "Menampung lebih banyak penumpang di bagian ujung depan",
    "Mencegah petir menyambar kaca depan kokpit",
    "Streamlining mereduksi turbulensi olakan udara dan meminimalkan koefisien hambatan aerodinamis di kecepatan tinggi."
  ],
  [
    "Mengapa seorang tukang kayu melumuri paku atau sekrup dengan sedikit sabun batangan basah sebelum dipasakkan ke kayu jati yang sangat keras?",
    "Sabun bertindak sebagai pelumas yang memperkecil gaya gesek antara ulir sekrup dengan serat kayu saat diputar masuk",
    "Sabun membakar serat kayu dari dalam agar menjadi arang lunak",
    "Sabun mengubah sekrup besi menjadi sekrup perak anti-karat",
    "Sabun merekatkan sekrup secara permanen tanpa perlu dipalu",
    "Pelumasan surfaktan sabun menurunkan koefisien gesekan geser mencegah putusnya kepala sekrup akibat torsi puntir berlebih."
  ]
];
const sulit = [
  [
    "Ketika beberapa balok es batu di dalam panci dipanaskan terus-menerus di atas api kompor hingga mendidih dan airnya habis, urutan perubahan wujud zat yang terjadi secara berturut-turut adalah ...",
    "Mencair (dari padat ke cair), lalu menguap (dari cair ke gas)",
    "Membeku, lalu menyublim",
    "Mengembun, lalu mengkristal",
    "Menyublim, lalu membeku",
    "Es padat menyerap kalor dari api sehingga mencair menjadi air, kemudian air menyerap kalor lebih lanjut hingga mendidih dan menguap menjadi uap air (gas)."
  ],
  [
    "Bagian dasar panci memasak dibuat dari bahan logam aluminium, sedangkan bagian tangkai pegangannya dilapisi bahan kayu atau plastik ebonit. Alasan ilmiah pemilihan bahan tersebut adalah ...",
    "Aluminium bersifat konduktor panas yang baik agar masakan cepat matang, sedangkan kayu dan plastik bersifat isolator panas agar tangan tidak kepanasan saat memegang panci",
    "Aluminium membuat masakan menjadi lebih manis",
    "Kayu dapat menghantarkan api kompor langsung ke dalam sup",
    "Plastik membuat panci menjadi sangat berat dan tidak mudah goyang",
    "Konduktor (logam) mudah menghantarkan panas, sedangkan isolator (kayu, plastik, karet) sukar menghantarkan panas sehingga melindungi tangan juru masak."
  ],
  [
    "Suatu bimetal tersusun dari dua keping logam berbeda koefisien muai panjang, yaitu aluminium (koefisien muai lebih besar) dan besi (koefisien muai lebih kecil) yang dikeling rapat menyatu. Jika keping bimetal tersebut dipanaskan di atas api, maka bimetal akan melengkung ke arah ...",
    "Logam besi (ke arah logam yang koefisien muai panjangnya lebih kecil)",
    "Logam aluminium",
    "Tetap lurus tanpa perubahan bentuk",
    "Membentuk lingkaran spiral ke atas",
    "Aluminium memuai lebih panjang daripada besi; selisih panjang memaksa keping melengkung melengkungi logam pemuaian kecil."
  ],
  [
    "Jika keping bimetal aluminium-besi pada soal sebelumnya didinginkan di dalam freezer bersuhu -10°C, maka bimetal akan melengkung ke arah ...",
    "Logam aluminium (ke arah logam yang koefisien muai panjangnya lebih besar)",
    "Logam besi",
    "Kembali lurus sempurna",
    "Patah terbelah dua di tengah",
    "Saat didinginkan, aluminium menyusut lebih banyak daripada besi sehingga sisi aluminium menjadi lebih pendek dan melengkung ke dalamnya."
  ],
  [
    "Sebuah dongkrak hidrolik mobil bekerja berdasarkan Hukum Pascal. Luas penampang piston kecil adalah 10 cm² dan luas piston besar adalah 200 cm². Jika gaya tekan pada piston kecil adalah 150 Newton, maka gaya angkat yang dihasilkan pada piston besar adalah ...",
    "3.000 Newton",
    "1.500 Newton",
    "750 Newton",
    "300 Newton",
    "Hukum Pascal: F1 / A1 = F2 / A2 -> 150 / 10 = F2 / 200 -> F2 = 15 * 200 = 3.000 Newton."
  ],
  [
    "Ketika seorang tukang kayu ingin mencabut paku yang tertancap kuat pada balok kayu menggunakan linggis atau martil pencabut paku, alat tersebut bekerja memanfaatkan prinsip pesawat sederhana jenis ...",
    "Pengungkit atau Tuas",
    "Bidang miring",
    "Roda berporos",
    "Katrol ganda",
    "Martil pencabut paku bertindak sebagai tuas golongan pertama dengan titik tumpu berada di antara titik beban (paku) dan titik kuasa (tangan tukang)."
  ],
  [
    "Pekerja bangunan memasang sebilah papan kayu tebal yang miring dari tanah menuju ke bak truk untuk menaikkan drum minyak yang berat. Manfaat utama penggunaan papan miring tersebut adalah ...",
    "Memperkecil gaya dorong yang dibutuhkan untuk menaikkan drum meskipun jarak lintasannya menjadi lebih panjang",
    "Mengurangi berat sebenarnya dari drum minyak",
    "Membuat drum minyak menggelinding naik sendiri ke truk",
    "Mempercepat drum sampai ke truk dalam waktu satu detik",
    "Bidang miring mempermudah memindahkan benda ke tempat yang lebih tinggi dengan memperkecil gaya yang dibutuhkan sebanding dengan kemiringan papan."
  ],
  [
    "Keuntungan mekanis (KM) dari sistem bidang miring pada soal sebelumnya yang memiliki panjang lintasan s = 6 meter dan tinggi h = 1,5 meter adalah ...",
    "4",
    "2",
    "6",
    "1,5",
    "Keuntungan Mekanis bidang miring KM = s / h = 6 m / 1,5 m = 4."
  ],
  [
    "Sebuah sistem katrol majemuk (tackle) tersusun atas 4 buah tali yang menyangga beban secara langsung. Keuntungan mekanis sistem katrol tersebut adalah ...",
    "4",
    "2",
    "1",
    "8",
    "Keuntungan mekanis katrol takal majemuk sama dengan jumlah tali fungsional yang menahan beban langsung, yaitu 4."
  ],
  [
    "Asas Black dalam perpindahan kalor menyatakan bahwa pada pencampuran dua zat yang berbeda suhu dalam sistem terisolasi tanpa pertukaran panas dengan lingkungan luar, maka berlaku ...",
    "Kalor yang dilepaskan oleh zat bersuhu tinggi sama dengan kalor yang diserap oleh zat bersuhu rendah (Q_lepas = Q_terima)",
    "Suhu campuran selalu sama dengan jumlah kedua suhu zat",
    "Massa zat panas selalu berkurang setengahnya",
    "Kalor yang hilang berubah menjadi gas hidrogen",
    "Hukum kekekalan energi termal: energi kalor yang dilepas sistem panas mutlak diserap oleh sistem penyerap dingin."
  ],
  [
    "Sebuah balok kayu terapung di permukaan air tawar dengan 3/4 bagian volumenya tercelup di dalam air. Jika massa jenis air adalah 1.000 kg/m³, maka massa jenis balok kayu tersebut adalah ...",
    "750 kg/m³",
    "250 kg/m³",
    "1.000 kg/m³",
    "500 kg/m³",
    "Hukum Archimedes pada benda terapung: ρ_benda = (V_tercelup / V_total) * ρ_cair = (3/4) * 1.000 = 750 kg/m³."
  ],
  [
    "Gaya angkat ke atas (gaya apung / buoyant force) yang dialami oleh suatu benda yang dicelupkan ke dalam zat cair besarnya sama dengan ...",
    "Berat zat cair yang dipindahkan (didesak) oleh volume bagian benda yang tercelup tersebut",
    "Berat total seluruh zat cair di dalam wadah bejana",
    "Massa jenis benda dikalikan tinggi permukaan air",
    "Volume total wadah bejana tempat air berada",
    "Hukum Archimedes: Fa = ρ_fluida * g * V_tercelup, merepresentasikan berat fluida yang terdesak oleh benda."
  ],
  [
    "Kapal laut yang terbuat dari ribuan ton pelat baja tebal dapat terapung di permukaan air laut dan tidak tenggelam karena ...",
    "Lambung kapal dirancang memiliki rongga udara yang sangat luas sehingga berat jenis kapal secara keseluruhan lebih ringan dibanding air laut",
    "Air laut memiliki daya tolak magnet terhadap pelat baja",
    "Baja kapal laut terbuat dari bahan kayu yang dicat abu-abu",
    "Kapal laut diikat dengan tali tak terlihat ke awan di langit",
    "Rongga udara yang masif di dalam lambung kapal memperbesar volume air laut yang dipindahkan sehingga menghasilkan gaya apung ke atas yang sangat besar."
  ],
  [
    "Sebuah pesawat terbang dapat terangkat ke angkasa karena sayap pesawat dirancang dengan profil aerofoil khusus (sayap bagian atas lebih melengkung dibanding bagian bawah). Berdasarkan Asas Bernoulli, gaya angkat sayap pesawat terbang terjadi karena ...",
    "Kecepatan aliran udara di atas sayap lebih cepat sehingga tekanannya lebih rendah dari tekanan udara di bawah sayap",
    "Udara di bawah sayap berputar menjadi angin puting beliung",
    "Tekanan udara di atas sayap menjadi dua kali lipat lebih besar",
    "Mesin pesawat mendorong sayap ke dalam bumi",
    "Hukum Bernoulli: kelajuan fluida tinggi berkorelasi dengan tekanan rendah; selisih tekanan bawah dan atas menghasilkan net lift force."
  ],
  [
    "Mengapa air sumur terasa hangat di pagi hari yang dingin dan terasa sejuk di siang hari yang terik, padahal suhu air sumur di dalam tanah sebenarnya relatif konstan?",
    "Perbedaan persepsi indra peraba manusia akibat kontras perbedaan suhu udara lingkungan luar dengan suhu air tanah yang stabil",
    "Bakteri tanah menghasilkan panas hanya pada waktu fajar menyingsing",
    "Matahari memanaskan dasar sumur melalui inti bumi di malam hari",
    "Air sumur mengalami proses evaporasi terbalik di pagi hari",
    "Suhu bumi bawah tanah stabil (~25°C); saat udara pagi 18°C air terasa hangat, saat siang terik 34°C air terasa sejuk relatif."
  ],
  [
    "Alat pengering rambut (hair dryer) meniupkan udara panas untuk mengeringkan rambut basah dengan cepat. Prinsip perpindahan kalor dan penguapan yang dimaksimalkan oleh alat ini adalah ...",
    "Konveksi paksa udara hangat dan penurunan kelembapan relatif udara yang mempercepat laju evaporasi air di helai rambut",
    "Konduksi filamen logam langsung membakar helai rambut",
    "Radiasi nuklir skala mikro dari moncong pengering",
    "Pembekuan tetesan air menjadi serbuk salju kering",
    "Peningkatan temperatur dan aliran angin kontinu mempercepat perpindahan massa uap air melintasi lapisan batas laminer."
  ],
  [
    "Pada kompor induksi modern, panci dapat memanas sangat cepat sementara permukaan kaca kompor tidak ikut memanas secara langsung. Prinsip kerja kompor induksi memanfaatkan medan magnet untuk menghasilkan ...",
    "Arus eddy (arus pusar) pada dasar panci feromagnetik yang menghasilkan panas resistif Joule",
    "Radiasi sinar inframerah gelombang mikro",
    "Konduksi gas elpiji yang terbakar di dalam kaca",
    "Gesekan mekanik atom silika kompor",
    "Induksi elektromagnetik frekuensi tinggi menginduksi sirkulasi arus pusar pada logam besi yang terdisipasi menjadi panas efisien."
  ],
  [
    "Ketika dua kubus es bersuhu 0°C ditekan secara kuat satu sama lain selama beberapa detik lalu dilepaskan, kedua kubus es tersebut saling menempel erat menjadi satu kesatuan. Fenomena fisika ini disebut ...",
    "Regelasi (penurunan titik lebur es akibat tekanan tinggi diikuti pembekuan kembali saat tekanan dilepaskan)",
    "Sublimasi instan partikel es kering",
    "Konduksi termal tanpa kalor laten",
    "Fusi nuklir ikatan hidrogen es",
    "Tekanan menekan titik lebur es di bawah 0°C memicu pencairan mikro di batas kontak; saat dilepas es membeku ulang menyatu."
  ],
  [
    "Sebuah termometer tak berskala dimasukkan ke dalam es yang sedang melebur menunjukkan panjang kolom raksa 4 cm, dan ketika dimasukkan ke dalam air mendidih panjang kolomnya menjadi 24 cm. Jika termometer tersebut dimasukkan ke dalam suatu larutan dan panjang kolom raksa terukur 14 cm, maka suhu larutan tersebut adalah ...",
    "50 derajat Celsius (°C)",
    "40 derajat Celsius (°C)",
    "60 derajat Celsius (°C)",
    "70 derajat Celsius (°C)",
    "Rentang skala: 24 cm - 4 cm = 20 cm untuk 100°C. Posisi 14 cm adalah (14 - 4) / 20 * 100°C = (10/20) * 100°C = 50°C."
  ],
  [
    "Ketika kita meminum jus buah menggunakan sedotan plastik, air jus dapat bergerak mengalir naik masuk ke dalam mulut kita karena ...",
    "Udara di dalam sedotan dihisap sehingga tekanan udara di dalam sedotan menjadi lebih rendah dibanding tekanan udara luar yang menekan permukaan minuman",
    "Sedotan memiliki motor listrik mini yang memompa air",
    "Air jus di dalam gelas melompat sendiri ke dalam mulut",
    "Gravitasi bumi menarik air jus bergerak ke atas",
    "Pengurangan tekanan udara di dalam sedotan saat dihisap membuat tekanan udara atmosfer di permukaan cairan mendorong cairan naik ke dalam sedotan."
  ]
];
const hots = [
  [
    "Petani di desa ingin menaikkan puluhan karung gabah padi yang berat dari lantai dasar ke lumbung penyimpanan di lantai dua. Dibandingkan memikulnya menaiki tangga yang sempit dan melelahkan, cara paling efisien dan aman yang menerapkan prinsip pesawat sederhana adalah ...",
    "Memasang katrol pada balok atap lumbung sehingga karung gabah dapat ditarik menggunakan tali dari lantai dasar",
    "Melemparkan karung gabah dari bawah ke jendela lantai dua",
    "Membakar sebagian gabah agar bobot karung menjadi lebih ringan",
    "Menunggu banjir bandang agar karung gabah mengapung naik ke atas",
    "Katrol pada balok atap mengubah arah gaya angkat menjadi tarikan ke bawah yang dibantu berat badan pekerja, menghemat tenaga dan meningkatkan keselamatan kerja."
  ],
  [
    "Di daerah pegunungan yang sangat tinggi seperti di Puncak Jaya Papua (ketinggian > 4.000 meter di atas permukaan laut), air mendidih pada suhu sekitar 86°C dan bukan 100°C. Para pendaki mendapati bahwa merebus telur ayam dan menanak nasi hingga matang sempurna membutuhkan waktu yang jauh lebih lama. Penjelasan ilmiah terintegrasi yang menerangkan fenomena termal ini adalah ...",
    "Tekanan atmosfer di puncak gunung lebih rendah sehingga molekul air mendidih pada suhu lebih rendah (86°C), padahal proses pematangan makanan ditentukan oleh tingginya suhu air bukan oleh gejolak mendidihnya",
    "Air di puncak gunung mengandung gas beracun yang menghambat pematangan beras",
    "Api kompor gas di puncak gunung bersuhu dingin seperti es",
    "Gravitasi bumi di puncak gunung terlalu lemah untuk menembus cangkang telur",
    "Boiling point turun proporsional terhadap tekanan udara; laju reaksi denaturasi protein dan gelatinisasi pati melambat drastis pada temperatur 86°C."
  ],
  [
    "Sebuah pabrik es batu mengalami tagihan listrik yang membengkak karena mesin pendinginnya lambat membekukan air. Teknisi menemukan bahwa kisi-kisi kondensor logam di bagian belakang mesin pendingin tertutup lapisan debu tebal setebal 5 milimeter. Analisis perpindahan kalor mengenai pengaruh lapisan debu tersebut terhadap efisiensi pendinginan mesin adalah ...",
    "Debu bertindak sebagai isolator termal yang menghambat pelepasan panas kondensasi refrigeran ke udara luar secara konveksi dan radiasi sehingga kompresor harus bekerja jauh lebih berat",
    "Lapisan debu menyerap freon pendingin keluar dari pipa logam",
    "Debu membuat putaran motor kompresor berputar ke arah terbalik",
    "Debu mendinginkan pipa pendingin hingga membeku sebelum waktunya",
    "Konduktivitas termal debu sangat rendah mereduksi koefisien perpindahan panas menyeluruh (U-value) kondensor membebani kerja siklus refrigerasi."
  ],
  [
    "Seorang arsitek merancang rumah hemat energi di daerah tropis basah dengan membuat langit-langit plafon rumah yang tinggi (tinggi 4 meter) dan melengkapinya dengan ventilasi kisi-kisi silang di bagian atas dinding dekat atap. Mekanisme fisika perpindahan kalor yang mendasari rancangan arsitektur tropis ini adalah ...",
    "Memanfaatkan arus konveksi alami udara: udara panas yang memuai dan massa jenisnya lebih ringan akan naik ke atas dan keluar ventilasi, digantikan udara segar yang lebih sejuk dari bawah",
    "Membuat sinar matahari terperangkap di plafon untuk menyalakan lampu",
    "Mencegah gaya gravitasi bumi menekan penghuni rumah",
    "Mempercepat perpindahan panas konduksi melalui lantai keramik",
    "Efek cerobong termal (thermal stack effect) mengalirkan udara hangat naik keluar secara pasif mempertahankan iklim mikro ruangan sejuk."
  ],
  [
    "Ketika seorang anak menyelam semakin dalam ke dasar kolam renang, telinganya terasa semakin sakit dan tertekan. Penjelasan ilmiah yang paling tepat mengenai peristiwa tersebut adalah ...",
    "Semakin dalam posisi tubuh di dalam air, semakin besar tekanan hidrostatis air yang menekan gendang telinga",
    "Air di dasar kolam suhunya berubah menjadi air mendidih",
    "Ada ikan kecil yang masuk menggigit telinga anak",
    "Udara di dalam telinga anak habis tersedot ke permukaan",
    "Tekanan zat cair (hidrostatis) berbanding lurus dengan kedalaman air; semakin dalam posisi menyelam, beban massa air di atas tubuh semakin besar menekan telinga."
  ],
  [
    "Mengapa ban sepeda, sepeda motor, dan mobil selalu dibuat memiliki alur atau kembangan bergerigi dan tidak dibuat rata halus?",
    "Alur ban berfungsi memperbesar gaya gesek antara ban dengan permukaan jalan sehingga kendaraan tidak mudah tergelincir saat melintasi jalan licin atau basah",
    "Alur ban berfungsi agar kendaraan bisa melaju secepat pesawat terbang",
    "Alur ban dibuat hanya untuk hiasan agar tampak menarik",
    "Alur ban membuat bensin kendaraan menjadi tidak pernah habis",
    "Alur ban membuang air di permukaan aspal basah dan memperbesar gaya gesekan statis sehingga cengkeraman roda ke aspal tetap kuat saat bermanuver dan mengerem."
  ],
  [
    "Mengapa kapal selam dapat menyelam ke dasar laut, melayang di kedalaman tertentu, dan mengapung kembali ke permukaan laut dengan sangat mudah?",
    "Dengan cara mengisi tangki ballast dengan air laut untuk menambah massa jenis total kapal saat menyelam, dan memompa udara bertekanan mengeluarkan air saat ingin mengapung",
    "Dengan cara melepaskan mesin kapal saat ingin mengapung ke atas",
    "Dengan cara mengubah bentuk pelat baja kapal menjadi sirip ikan paus",
    "Dengan memanaskan air laut di sekitar lambung kapal hingga mendidih",
    "Regulasi volume udara dalam tangki ballast memodulasi massa jenis total sistem relatif terhadap densitas fluida sekitarnya sesuai Hukum Archimedes."
  ],
  [
    "Di sebuah gudang pelabuhan, seorang buruh menggunakan papan luncur bidang miring licin untuk menurunkan karung beras 50 kg dari lantai dua ke bak truk. Namun karung beras meluncur terlalu kencang hingga pecah saat mendarat di truk. Solusi mekanika terapan terbaik yang paling murah dan efektif untuk memperlambat laju luncur karung tanpa mengubah ketinggian lantai atau panjang papan adalah ...",
    "Melapisi permukaan papan miring dengan karung goni kasar atau karet beralur untuk memperbesar koefisien gaya gesek kinetis",
    "Menyiram papan luncur dengan minyak pelumas agar karung melayang",
    "Memperpendek panjang papan luncur menjadi setengahnya",
    "Menambah beban karung beras menjadi 100 kg per karung",
    "Peningkatan koefisien friksi permukaan (μ_k) membangkitkan gaya gesek f_k = μ_k * N berlawanan gerak mereduksi percepatan luncur."
  ],
  [
    "Pada rancangan pakaian antariksa astronaut (spacesuit) untuk berjalan di luar stasiun luar angkasa (spacewalk), pakaian harus dilengkapi dengan lapisan reflektif aluminium berkilau dan tabung-tabung sirkulasi cairan pendingin cair. Mengapa pengendalian termal pada astronaut di ruang hampa udara sangat rumit?",
    "Karena di ruang hampa tidak ada udara untuk konduksi dan konveksi, sehingga pelepasan panas tubuh dan paparan radiasi matahari ekstrem (+120°C di bawah matahari, -150°C di bayangan) hanya bisa dikendalikan oleh sistem penukar radiasi dan pendingin aktif",
    "Karena gravitasi nol membakar seluruh pakaian kain biasa",
    "Karena astronaut tidak boleh berkeringat sedikit pun di luar angkasa",
    "Karena ruang hampa udara menyerap seluruh oksigen di dalam darah",
    "Ketiadaan medium fluida eksternal menghilangkan konveksi alami; manajemen termal mengandalkan emisi radiatif dan sirkulasi sublimator pendingin tertutup."
  ],
  [
    "Ketika seseorang memotong kawat baja tebal menggunakan tang potong berengsel, ia merasa tangannya sakit dan kawat belum terpotong putus. Modifikasi mekanis apa yang harus ia lakukan pada tang atau posisi pemotongan kawat agar kawat dapat terpotong dengan mudah?",
    "Meletakkan kawat sedekat mungkin ke titik engsel baut tang dan memegang tang di bagian ujung terluar gagang tang",
    "Meletakkan kawat di ujung terluar mata pisau tang dan memegang dekat engsel",
    "Memperpendek gagang tang potong dengan gergaji besi",
    "Mendinginkan tang di dalam kulkas sebelum dipakai",
    "Strategi ini meminimalkan lengan beban (Lb) dan memaksimalkan lengan kuasa (Lk) melipatgandakan keuntungan mekanis tuas secara optimal."
  ],
  [
    "Dua bejana berhubungan berbentuk U diisi dengan air tawar (massa jenis 1.000 kg/m³). Pada kaki bejana sebelah kiri dituangkan minyak zaitun setinggi 10 cm sehingga permukaan minyak dan air membentuk selisih ketinggian. Jika massa jenis minyak zaitun adalah 800 kg/m³, maka selisih tinggi permukaan air pada kaki bejana sebelah kanan di atas batas pisah adalah ...",
    "8 sentimeter",
    "10 sentimeter",
    "12 sentimeter",
    "5 sentimeter",
    "Tekanan hidrostatis sama di batas pisah: ρ_minyak * h_minyak = ρ_air * h_air -> 800 * 10 = 1.000 * h_air -> 8.000 = 1.000 * h_air -> h_air = 8 cm."
  ],
  [
    "Sebuah mobil derek mengangkat mobil mogok bermassa 1.500 kg menggunakan derek katrol listrik berdaya 3.000 Watt. Jika percepatan gravitasi g = 10 m/s² (berat beban 15.000 Newton) dan efisiensi mesin derek 100%, maka kecepatan angkat mobil mogok tersebut bergerak naik vertikal konstan adalah ...",
    "0,2 meter per sekon",
    "2 meter per sekon",
    "0,5 meter per sekon",
    "1 meter per sekon",
    "Daya mekanik P = F * v -> 3.000 Watt = 15.000 N * v -> v = 3.000 / 15.000 = 0,2 m/s."
  ],
  [
    "Mengapa bola bowling yang menggelinding lambat di lintasan licin memiliki daya hancur pin bowling yang jauh lebih dahsyat dibandingkan bola tenis yang dilempar dengan kecepatan yang sama?",
    "Karena massa bola bowling jauh lebih besar sehingga memiliki momentum dan energi kinetik tumbukan yang jauh lebih raksasa",
    "Karena bola bowling memiliki magnet penarik pin kayu",
    "Karena bola bowling tidak mengalami gaya gesek dengan lantai",
    "Karena bola tenis terbuat dari bahan yang menyerap suara",
    "Momentum p = m * v dan Energi Kinetik Ek = ½ m v². Massa raksasa menghasilkan kuantitas gerak dan transfer energi impuls masif merobohkan susunan pin."
  ],
  [
    "Ibu mencampurkan satu gayung air mendidih ke dalam seember air dingin untuk menyiapkan air mandi bagi adik bayi. Peristiwa perpindahan kalor yang terjadi pada campuran air tersebut adalah ...",
    "Air panas melepaskan kalor dan air dingin menyerap kalor hingga kedua suhu air mencapai kesetimbangan hangat yang merata",
    "Air panas memusnahkan seluruh molekul air dingin seketika",
    "Air dingin membuat suhu air panas menjadi sedingin es batu",
    "Kedua air menolak bersatu dan terpisah menjadi dua lapisan",
    "Kalor berpindah secara alami dari benda bersuhu lebih tinggi ke benda bersuhu lebih rendah hingga tercapai suhu campuran akhir yang seimbang."
  ],
  [
    "Ketika seseorang mencoba membuka tutup toples kaca berulir logam yang terpasang sangat macet dan keras, trik fisika yang paling efektif dan aman adalah merendam bagian tutup logam toples ke dalam air panas selama satu menit. Alasan keberhasilan trik ini adalah ...",
    "Koefisien muai panjang tutup logam lebih besar daripada kaca toples sehingga tutup logam memuai lebih cepat dan menjadi longgar",
    "Air panas melarutkan seluruh ulir besi toples",
    "Kaca toples menyusut menjadi kecil saat terkena uap air",
    "Air panas menghilangkan gaya gravitasi toples",
    "Logam memiliki nilai koefisien ekspansi termal (α) jauh melampaui silika kaca memicu selisih pemuaian radial melonggarkan ikatan ulir."
  ],
  [
    "Sebuah balok kayu terapung di perairan danau tawar. Jika balok kayu yang sama dipindahkan ke perairan air laut samudra yang memiliki massa jenis lebih tinggi (~1.025 kg/m³), maka posisi balok kayu di air laut akan ...",
    "Terapung lebih tinggi dengan volume bagian balok yang tercelup di bawah permukaan air berkurang dibanding di air tawar",
    "Tenggelam langsung ke dasar laut samudra",
    "Melayang tepat di tengah kedalaman laut",
    "Posisinya tercelup persis sama tanpa selisih milimeter pun",
    "Gaya apung Fa = W_benda tetap setara berat kayu; karena ρ_fluida laut lebih besar, maka volume celup V_celup = W / (ρ * g) menjadi lebih kecil."
  ],
  [
    "Pada perlombaan balap sepeda jalan raya (road race), para pembalap sepeda sering melaju beriringan membentuk barisan rapat di belakang pembalap terdepan (teknik drafting). Manfaat fisika aerodinamika dari teknik drafting bagi pembalap di posisi kedua dan seterusnya adalah ...",
    "Pembalap di belakang berada dalam zona tekanan rendah (slipstream wake) di belakang pembalap pertama sehingga hambatan gesekan udara berkurang drastis hingga 30-40%",
    "Pembalap kedua dapat mendorong sepeda pembalap pertama menggunakan magnet",
    "Ban sepeda pembalap belakang tidak menyentuh aspal jalan",
    "Angin dari depan memutar roda belakang pembalap kedua secara otomatis",
    "Olakan aerodinamis mengurangi drag profile memangkas output daya watt metabolik yang dibutuhkan untuk mempertahankan kecepatan tinggi."
  ],
  [
    "Sebuah sepeda yang bannya terisi penuh udara diparkir di halaman sekolah yang terbuka di bawah terik sinar matahari siang yang sangat panas. Beberapa jam kemudian, ban sepeda tersebut meletus sendiri secara tiba-tiba. Penyebab terjadinya peristiwa tersebut adalah ...",
    "Udara di dalam ban memuai dan bertambah volumenya saat terkena panas matahari sehingga tekanannya mendesak dinding ban hingga pecah",
    "Karet ban sepeda mencair menjadi cairan hitam",
    "Ada serangga yang memakan karet ban sepeda",
    "Sinar matahari membuat udara di dalam ban membeku",
    "Gas di dalam ban mengalami pemuaian termal saat menerima kalor matahari; karena ruang volume ban terbatas, kenaikan tekanan gas melampaui kekuatan karet ban."
  ],
  [
    "Pada saat peluncuran roket luar angkasa ke orbit bumi, roket menyemburkan jutaan liter gas panas berkecepatan hipersonik ke arah bawah menuju landasan peluncuran. Gerak roket melesat naik menembus atmosfer merupakan pembuktian nyata dari ...",
    "Hukum III Newton: gaya aksi semburan gas bertekanan ke bawah menghasilkan gaya reaksi dorong mesin roket ke atas (gaya dorong thrust)",
    "Hukum Pemantulan kalor radiasi matahari",
    "Hukum Pascal tentang bejana berhubungan air",
    "Gaya gesek udara yang menarik roket ke bintang",
    "Prinsip kekekalan momentum linear: momentum gas yang tersembur ke belakang (dp/dt) sama besar dengan laju momentum roket ke depan."
  ],
  [
    "Mengapa sebuah bola besi pejal berdiameter 10 cm langsung tenggelam ke dasar kolam air, sedangkan mangkuk yang dibuat dari lempengan besi pejal dengan massa dan bahan yang persis sama dapat terapung stabil di permukaan kolam?",
    "Mangkuk besi memiliki bentuk cekung yang memperbesar volume total ruang udara yang dipindahkan sehingga gaya apung ke atas melebihi atau menyamai berat mangkuk",
    "Besi mangkuk mengalami perubahan massa menjadi lebih ringan dari kapas",
    "Mangkuk besi memanaskan air kolam hingga mengapung",
    "Air kolam menolak bentuk melengkung mangkuk besi",
    "Modifikasi geometri meningkatkan perpindahan volume fluida (V_desak); sesuai Archimedes gaya apung Fa = ρ*g*V_desak cukup mengimbangi gaya berat W."
  ]
];

module.exports = {
  name: 'Kalor, Perubahan Wujud Benda, Gaya & Pesawat Sederhana',
  mudah,
  sedang,
  sulit,
  hots
};
