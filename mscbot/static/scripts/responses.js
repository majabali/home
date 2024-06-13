function getBotResponse(input) {
  //rock paper scissors
  if (input == "batu") {
    return "kertas";
  } else if (input == "kertas") {
    return "gunting";
  } else if (input == "gunting") {
    return "batu";
  }

  // Simple responses
  if (input == "Mulai") {
    return "Halo semua 🙌<br/>Aku bot pemandu yang akan membantu kalian dalam menggunakan website ini.<br/><br/>MajaBali (Makanan Jajanan Bali) adalah sebuah website yang berisikan konten mengenai kuliner lokal di Bali secara daring (online) sehingga dapat menjadi salah satu upaya menjaga dan melestarikan kuliner Bali serta memperkenalkan kuliner Bali ke khalayak ramai.<br/><br/>Oiyaaa, kalo kamu bingung mulai dari mana silakan ketik 'bantu' ya...<br/><br/>Terima kasih!";
  } else if (input.indexOf("alasan") >= 0) {
    return "Dengan adanya perkembangan zaman dan globalisasi banyak kearifan lokal yang telah punah dan tergerus oleh zaman. Kearifan lokal yang unik dan berbeda-beda membuat Bangsa Indonesia dikenal oleh negara-negara lain sebagai negara yang kaya akan kearifan lokal. Salah satu kearifan lokal yang ada di Indonesia adalah kulinernya. Sesuai dengan tema P5 yaitu kearifan lokal, kami mengangkat topik Menjaga dan Melestarikan Kuliner Bali di era Modern. Dengan adanya websiteini diharapkan dapat membantu dan menjadi salah satu upaya kami dalam menjaga, melestarikan, serta memperkenalkan kuliner Bali ke khalayak.";
  } else if (input.indexOf("Alasan") >= 0) {
    return "Dengan adanya perkembangan zaman dan globalisasi banyak kearifan lokal yang telah punah dan tergerus oleh zaman. Kearifan lokal yang unik dan berbeda-beda membuat Bangsa Indonesia dikenal oleh negara-negara lain sebagai negara yang kaya akan kearifan lokal. Salah satu kearifan lokal yang ada di Indonesia adalah kulinernya. Sesuai dengan tema P5 yaitu kearifan lokal, kami mengangkat topik Menjaga dan Melestarikan Kuliner Bali di era Modern. Dengan adanya websiteini diharapkan dapat membantu dan menjadi salah satu upaya kami dalam menjaga, melestarikan, serta memperkenalkan kuliner Bali ke khalayak.";
  } else if (input.indexOf("latar") >= 0) {
    return "Dengan adanya perkembangan zaman dan globalisasi banyak kearifan lokal yang telah punah dan tergerus oleh zaman. Kearifan lokal yang unik dan berbeda-beda membuat Bangsa Indonesia dikenal oleh negara-negara lain sebagai negara yang kaya akan kearifan lokal. Salah satu kearifan lokal yang ada di Indonesia adalah kulinernya. Sesuai dengan tema P5 yaitu kearifan lokal, kami mengangkat topik Menjaga dan Melestarikan Kuliner Bali di era Modern. Dengan adanya websiteini diharapkan dapat membantu dan menjadi salah satu upaya kami dalam menjaga, melestarikan, serta memperkenalkan kuliner Bali ke khalayak.";
  } else if (input.indexOf("mulai") >= 0) {
    return "Halo semua 🙌<br/>Aku bot pemandu yang akan membantu kalian dalam menggunakan website ini.<br/><br/>MajaBali (Makanan Jajanan Bali) adalah sebuah website yang berisikan konten mengenai kuliner lokal di Bali secara daring (online) sehingga dapat menjadi salah satu upaya menjaga dan melestarikan kuliner Bali serta memperkenalkan kuliner Bali ke khalayak ramai.<br/><br/>Oiyaaa, kalo kamu bingung mulai dari mana silakan ketik 'bantu' ya...<br/><br/>Terima kasih!";
  } else if (input.indexOf("buat") >= 0) {
    return "Pembuat aku adalah Kelompok 6 X12";
  } else if (input.indexOf("cipta") >= 0) {
    return "Pencipta aku adalah Kelompok 6 X12";
  } else if (input.indexOf("cinta") >= 0) {
    return "Aku juga!";
  } else if (input.indexOf("bantu") >= 0) {
    return "Cobalah tanya dengan topik berikut:<br/>1. Alasan dibentuknya website ini<br/>2. Cara melestarikan kuliner Bali<br/>3. Cara membuat salah satu kuliner Bali<br/>4. Makanan Bali yang wajib dicoba ";
  } else if (input.indexOf("bantu") >= 0) {
    return "Kamu bingung mau nulis apa? Coba tanya mengenai hal dibawah ini ke aku deh...<br/><br/>1. Coba tanyakan pencipta/pembuat GiBot. <br/> 2. Coba tanyakan fitur-fitur yang tersedia di SEHAPROSY. <br>3. Coba tanyakan mengenai cara mencegah pelecehan seksual.<br/>4. Coba tanyakan mengenai siapa saja yang dapat mengalami pelecehan seksual.<br/>5. Coba tanyakan mengenai salah satu fitur di SEHAPROSY.<br/>6. Coba tanyakan alasan membuat SEHAPROSY.<br/><br/>Tips jika jawaban yang diberikan tidak sesuai:<br/>1. Coba kata kunci lain<br/>2. Tulis setiap perintah dengan huruf kecil<br/>3. Periksa penulisan kata (hindari saltik/typo)<br/><br/>Selain hal di atas, GiBot bisa ngelakuin hal lain lho! (Easter Egg)";
  } else if (input.indexOf("pagi") >= 0) {
    return "Selamat pagi juga! Apakah ada yang bisa dibantu?";
  } else if (input.indexOf("siang") >= 0) {
    return "Hai! Selamat siang! Apakah kamu perlu bantuan?";
  } else if (input.indexOf("malam") >= 0) {
    return "Selamat malam juga! Ada yang bisa dibantu?";
  } else if (input.indexOf("sore") >= 0) {
    return "Selamat sore! Ada yang bisa dibantu?";
  } else if (input.indexOf("coba") >= 0) {
    return "Beberapa makanan khas Bali yang wajib dicoba antara lain: <br/><br/>- Babi Guling: Ini adalah hidangan babi panggang yang terkenal dengan rempah-rempah khas Bali. <br/>- Ayam Betutu: Ayam yang dimasak dengan rempah-rempah dan daun pisang, biasanya dihidangkan pada acara-acara khusus. <br/>- Sate Lilit: Sate yang terbuat dari daging cincang, biasanya ikan atau ayam, yang dibungkus di sekitar batang serai.<br/>- Lawar: Hidangan campuran daging cincang dan sayuran dengan bumbu kelapa parut.<br/><br/> Masing-masing hidangan ini memiliki cita rasa yang unik dan kaya akan rempah-rempah tradisional Bali.";
  } else if (input.indexOf("lestari") >= 0) {
    return "Melestarikan kuliner Bali adalah upaya penting untuk mempertahankan warisan budaya yang kaya dan beragam. Berikut beberapa cara untuk melestarikan kuliner Bali:<br/><br/>1. Dokumentasi Resep Tradisional: Mengumpulkan dan mendokumentasikan resep-resep tradisional Bali dalam bentuk buku, video, atau digital. Hal ini membantu menjaga agar resep tidak hilang dan bisa dipelajari oleh generasi mendatang.<br/><br/>2. Pendidikan dan Pelatihan: Menyelenggarakan kelas memasak dan pelatihan bagi generasi muda untuk memperkenalkan dan mengajarkan cara memasak makanan tradisional Bali. Sekolah-sekolah kuliner dan komunitas lokal dapat berperan penting dalam hal ini.<br/><br/>3. Festival Kuliner: Mengadakan festival kuliner secara rutin untuk mempromosikan makanan tradisional Bali. Ini juga bisa menarik wisatawan dan meningkatkan kesadaran akan pentingnya melestarikan kuliner Bali.<br/><br/>4. Penggunaan Bahan Lokal: Mendorong penggunaan bahan-bahan lokal dalam masakan Bali untuk mendukung petani dan produsen lokal, serta menjaga keaslian rasa dan kualitas masakan.<br/><br/>5. Restoran dan Warung Tradisional: Mendukung dan mempromosikan restoran dan warung yang menyajikan makanan tradisional Bali. Hal ini bisa dilakukan melalui program-program promosi, ulasan media, dan wisata kuliner.<br/><br/>6. Kolaborasi dengan Pariwisata: Bekerja sama dengan sektor pariwisata untuk mempromosikan kuliner Bali sebagai bagian dari paket wisata. Ini bisa meliputi tur kuliner, pengalaman memasak, dan lain-lain.<br/><br/>7. Penggunaan Teknologi: Memanfaatkan media sosial dan platform digital untuk mempromosikan kuliner Bali. Konten-konten seperti video memasak, foto-foto makanan, dan cerita di balik makanan tradisional bisa menarik minat masyarakat luas.<br/><br/>8. Penelitian dan Inovasi: Melakukan penelitian tentang kuliner Bali dan menciptakan inovasi yang tetap menghormati tradisi. Misalnya, mengadaptasi resep tradisional dengan cara-cara modern yang tidak mengubah esensi dari makanan tersebut.<br/><br/>9. Komunitas dan Organisasi Kuliner: Membentuk komunitas atau organisasi yang fokus pada pelestarian kuliner Bali. Komunitas ini bisa mengadakan pertemuan, diskusi, dan kegiatan yang berfokus pada kuliner tradisional.<br/><br/>10. Regulasi dan Dukungan Pemerintah: Meminta dukungan dari pemerintah dalam bentuk regulasi yang melindungi dan mempromosikan kuliner tradisional. Program-program pemerintah juga bisa membantu dalam hal pendanaan dan promosi.<br/><br/>Dengan langkah-langkah tersebut, diharapkan kuliner Bali dapat terus dilestarikan dan dinikmati oleh generasi mendatang serta menjadi daya tarik wisata yang semakin kuat.";
  }
  // Resep
  else if (input.indexOf("cara membuat ayam") >= 0) {
    return "Untuk mengetahui cara memasak ayam betutu dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara memasak ayam") >= 0) {
    return "Untuk mengetahui cara memasak ayam betutu dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat klepon") >= 0) {
    return "Untuk mengetahui cara memasak klepon dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat klepon") >= 0) {
    return "Untuk mengetahui cara memasak klepon dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat pisang rai") >= 0) {
    return "Untuk mengetahui cara memasak pisang rai dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat pisang rai") >= 0) {
    return "Untuk mengetahui cara memasak pisang rai dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat laklak") >= 0) {
    return "Untuk mengetahui cara memasak laklak dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat laklak") >= 0) {
    return "Untuk mengetahui cara memasak laklak dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat batun") >= 0) {
    return "Untuk mengetahui cara memasak batun bedil dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat batun bedil") >= 0) {
    return "Untuk mengetahui cara memasak batun bedil dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat rujak") >= 0) {
    return "Untuk mengetahui cara memasak rujak kuah pindang dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat rujak") >= 0) {
    return "Untuk mengetahui cara memasak rujak kuah pindang dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat sate") >= 0) {
    return "Untuk mengetahui cara memasak sate lilit dapat dilihat pada fitur resep yang ada di halaman utama website.";
  } else if (input.indexOf("cara membuat sate") >= 0) {
    return "Untuk mengetahui cara memasak sate lilit pindang dapat dilihat pada fitur resep yang ada di halaman utama website.";
  }

  // Default
  else if (input.indexOf("halo") >= 0) {
    return "Hai! Ada yang bisa dibantu?";
  } else if (input.indexOf("Halo") >= 0) {
    return "Hai! Ada yang bisa dibantu?";
  } else if (input.indexOf("bosan") >= 0) {
    return "Kamu bosan? Aku saranin cobain fitur kuis deh... Seru lho";
  } else if (input.indexOf("hai") >= 0) {
    return "Halo! Ada yang bisa dibantu?";
  } else if (input.indexOf("Hai") >= 0) {
    return "Halo! Ada yang bisa dibantu?";
  } else {
    return "Maaf aku gak ngerti, coba ikuti instruksi berikut ya:<br/>1. Coba kata kunci lain<br/>2. Tulis setiap perintah dengan huruf kecil<br/>3. Periksa penulisan kata (hindari saltik/typo)<br/>4. Ketik 'bantu' untuk bantuan.";
  }
}
