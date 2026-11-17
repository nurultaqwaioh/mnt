export interface ArtikelItem {
  slug: string;
  title: string;
  category: 'Berita' | 'Fikih' | 'Sirah' | 'eBook';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  image: string;
  isFeatured?: boolean;
  // Khusus kategori eBook
  ebookMeta?: {
    pages: string;
    fileSize: string;
    downloadUrl: string;
  };
  content: string[];
}

export const artikelData: ArtikelItem[] = [
  {
    slug: 'integritas-dan-amanah-pilar-kinerja-unggul-insan-ioh',
    title: 'Integritas & Amanah: Pilar Kinerja Unggul Insan Korporasi di Era Digital',
    category: 'Berita',
    date: '15 Nov 2026',
    readTime: '4 min Read',
    author: 'Tim Media DKM MNT',
    authorRole: 'Redaksi Masjid Nurul Taqwa',
    excerpt: 'Rangkuman tausiyah dan pembinaan spiritual di lingkungan Kantor Pusat PT Indosat Tbk dalam memperkuat etos kerja profesional berbasis nilai ihsan.',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
    content: [
      'Masjid Nurul Taqwa PT Indosat Tbk terus berkomitmen menjadi pusat peradaban dan pembinaan spiritual bagi seluruh karyawan Indosat Ooredoo Hutchison. Dalam tausiyah rutin pekan ini, ditekankan bahwa profesionalitas kerja dan ketaatan spiritual adalah dua sisi mata uang yang saling menguatkan.',
      'Konsep "Itqan" (bekerja dengan tuntas dan berkualitas tinggi) serta "Amanah" (integritas penuh tanpa kompromi) merupakan fondasi utama seorang muslim profesional. Di tengah transformasi digital dan perkembangan teknologi AI yang pesat, karakter amanah menjadi pembeda utama.',
      'Melalui rangkaian kajian rutin Ba\'da Dzuhur dan program pembinaan SKI Indosat, diharapkan setiap insan IOH mampu menghadirkan keberkahan di setiap karya dan inovasi yang diberikan bagi masyarakat Indonesia.'
    ]
  },
  {
    slug: 'fikih-muamalah-hukum-paylater-dan-transaksi-digital',
    title: 'Fikih Muamalah Kontemporer: Panduan Transaksi Digital, E-Wallet, & Paylater',
    category: 'Fikih',
    date: '12 Nov 2026',
    readTime: '6 min Read',
    author: 'Ustadz Dr. Oni Sahroni, M.A.',
    authorRole: 'Dewan Pakar Fikih Muamalah',
    excerpt: 'Membedah batasan halal-haram dalam transaksi keuangan modern, diskon e-wallet, hingga skema cicilan digital agar harta tetap berkah bebas riba.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    content: [
      'Kemudahan teknologi finansial saat ini menghadirkan berbagai instrumen pembayaran baru, mulai dari dompet digital (e-wallet), QRIS, hingga fitur tunda bayar (Paylater). Bagaimana tinjauan fikih muamalah terhadap fenomena ini?',
      'Prinsip dasar dalam muamalah adalah seluruh transaksi diperbolehkan selama tidak mengandung unsur Riba (tambahan yang disyaratkan atas pinjaman), Gharar (ketidakpastian), dan Maysir (spekulasi/judi). Penggunaan e-wallet pada dasarnya sah selama dana yang tersimpan tidak dikenakan bunga dan diskon yang diberikan berasal dari promosi merchant atau penyelenggara layanan secara murni.',
      'Adapun fitur Paylater yang mengenakan denda keterlambatan berlipat atau bunga tambahan dari pokok utang termasuk dalam kategori qardh jarra naf\'an (pinjaman yang menarik manfaat/riba) yang wajib dihindari oleh seorang muslim. Solusi syar\'inya adalah menggunakan akad Murabahah (jual beli tangguh dengan margin tetap yang disepakati di awal) atau Ijarah.'
    ]
  },
  {
    slug: 'fikih-sholat-jamak-qashar-bagi-pekerja-perjalanan-dinas',
    title: 'Panduan Lengkap Fikih Safar: Jamak & Qashar Sholat Saat Perjalanan Dinas',
    category: 'Fikih',
    date: '08 Nov 2026',
    readTime: '5 min Read',
    author: 'Ustadz Dr. H. Fahmi Salim, Lc., MA',
    authorRole: 'Narasumber Kajian Rutin MNT',
    excerpt: 'Keringanan (rukhsah) syariat bagi karyawan yang sering bertugas ke luar kota atau regional agar ibadah sholat wajib tetap terjaga tepat waktu.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    content: [
      'Bagi karyawan telekomunikasi yang kerap melakukan perjalanan dinas ke berbagai regional (Circle) di seluruh Indonesia, memahami fikih safar adalah sebuah keharusan agar kewajiban sholat tidak terabaikan di sela padatnya agenda kerja.',
      'Syarat diperbolehkannya meng-qashar (meringkas sholat 4 rakaat menjadi 2 rakaat) dan menjamak (menggabungkan dua waktu sholat) adalah perjalanan telah mencapai jarak minimal safar (sekitar 85 km menurut jumhur ulama) dan telah keluar dari batas kota domisili.',
      'Rukhsah ini merupakan bentuk kasih sayang Allah SWT kepada hamba-Nya. Ketika sedang dalam penerbangan panjang atau rapat maraton di luar kota, seorang muslim dapat menjamak Dzuhur dengan Ashar, atau Maghrib dengan Isya, baik secara Taqdim (di waktu pertama) maupun Takhir (di waktu kedua).'
    ]
  },
  {
    slug: 'sirah-nabawiyah-manajemen-krisis-dan-kepemimpinan-rasulullah',
    title: 'Sirah Nabawiyah: Seni Kepemimpinan & Manajemen Krisis Rasulullah SAW',
    category: 'Sirah',
    date: '05 Nov 2026',
    readTime: '7 min Read',
    author: 'Ustadz Budi Ashari, Lc.',
    authorRole: 'Pakar Sejarah & Sirah Islam',
    excerpt: 'Meneladani strategi komunikasi, ketenangan mengambil keputusan, dan empati Rasulullah SAW dalam memimpin umat melewati berbagai tantangan besar.',
    image: 'https://images.unsplash.com/photo-1507842229356-51c61504d3ab?auto=format&fit=crop&w=800&q=80',
    content: [
      'Membaca Sirah Nabawiyah bukan sekadar bernostalgia dengan masa lalu, melainkan menggali cetak biru (blueprint) kepemimpinan paling sukses dalam sejarah manusia. Rasulullah SAW berhasil mentransformasi masyarakat jazirah Arab menjadi peradaban adidaya hanya dalam waktu 23 tahun.',
      'Salah satu kunci kepemimpinan beliau adalah musyawarah (syura) dan penempatan talenta yang tepat (right man on the right place). Pada peristiwa Khandaq, beliau dengan terbuka menerima ide inovatif Salman Al-Farisi untuk menggali parit—sebuah strategi yang belum pernah dikenal di Arab sebelumnya.',
      'Dalam konteks kepemimpinan korporat modern, keteladanan Rasulullah SAW mengajarkan bahwa pemimpin sejati adalah yang paling depan saat menghadapi risiko, paling mendengar masukan tim, dan paling menjaga kesejahteraan anggotanya.'
    ]
  },
  {
    slug: 'sirah-sahabat-abdurrahman-bin-auf-filantropi-konglomerat-langit',
    title: 'Jejak Sahabat: Abdurrahman bin Auf & Etika Bisnis Konglomerat Penghuni Surga',
    category: 'Sirah',
    date: '01 Nov 2026',
    readTime: '5 min Read',
    author: 'Ustadz Muhammad Nuzul Dzikri, Lc.',
    authorRole: 'Pemateri Kajian Kamis MNT',
    excerpt: 'Rahasia keberkahan bisnis Abdurrahman bin Auf yang membangun kejayaan ekonomi dari nol di Madinah dan menyedekahkan ratusan kafilah dagang.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    content: [
      'Ketika tiba di Madinah sebagai muhajirin tanpa membawa harta sedikit pun, kalimat legendaris yang diucapkan Abdurrahman bin Auf kepada Sa\'ad bin Rabi\' adalah: "Semoga Allah memberkahi keluarga dan hartamu. Tunjukkan saja kepadaku di mana pasar."',
      'Prinsip bisnis beliau bertumpu pada kejujuran mutlak, menolak menjual barang cacat tanpa memberi tahu pembeli, serta mengutamakan perputaran volume tunai dengan margin yang wajar sehingga sangat dicintai pelanggan.',
      'Kekayaan melimpah tidak pernah menguasai hatinya; justru hartanya berada di genggamannya untuk membebaskan budak, membiayai ekspedisi dakwah, dan menyantuni seluruh penduduk Madinah.'
    ]
  },
  {
    slug: 'ebook-panduan-zakat-dan-infaq-karyawan-profesional',
    title: 'eBook: Panduan Praktis Zakat Penghasilan & Fikih Harta Karyawan',
    category: 'eBook',
    date: '10 Nov 2026',
    readTime: 'PDF • 48 Hal',
    author: 'Tim Syariah ZIS Indosat & DKM MNT',
    authorRole: 'Divisi Literasi & Edukasi ZIS',
    excerpt: 'Buku saku digital lengkap cara menghitung nisab zakat profesi, zakat saham, THR/bonus tahunan, serta keutamaan sedekah rutin.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    ebookMeta: {
      pages: '48 Halaman',
      fileSize: '3.4 MB (PDF)',
      downloadUrl: 'https://zisindosat.id/'
    },
    content: [
      'Buku saku digital (eBook) ini disusun khusus untuk memudahkan seluruh karyawan PT Indosat Tbk dalam memahami dan menghitung kewajiban zakat penghasilan (profesi) maupun zakat mal atas instrumen keuangan modern.',
      'Materi di dalam eBook ini mencakup: (1) Dalil dan ketentuan Nisab Zakat Penghasilan sebesar 85 gram emas per tahun, (2) Simulasi perhitungan zakat dari gaji bulanan dan bonus tahunan, serta (3) Panduan membedakan antara Zakat Wajib, Infaq Operasional, dan Wakaf Produktif.',
      'Silakan unduh dokumen PDF ini secara gratis untuk dibaca di perangkat Anda atau dibagikan kepada rekan kerja dan keluarga.'
    ]
  },
  {
    slug: 'ebook-dzikir-pagi-petang-dan-doa-harian-pekerja',
    title: 'eBook: Al-Ma\'tsurat, Dzikir Pagi Petang & Doa Keberkahan Kerja',
    category: 'eBook',
    date: '02 Nov 2026',
    readTime: 'PDF • 32 Hal',
    author: 'Bidang Dakwah SKI Indosat',
    authorRole: 'Pustaka Digital Masjid Nurul Taqwa',
    excerpt: 'Kumpulan doa-doa shahih dari Al-Qur\'an dan Hadits dilengkapi teks Arab, transliterasi latin, dan terjemahan untuk dibaca saat perjalanan ke kantor.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    ebookMeta: {
      pages: '32 Halaman',
      fileSize: '2.1 MB (PDF)',
      downloadUrl: '#kontak'
    },
    content: [
      'Menjaga ketenangan hati di tengah kesibukan kerja dimulai dari rutinitas mengingat Allah SWT di waktu pagi dan petang. eBook saku ini dirancang dengan tata letak yang nyaman dibaca melalui layar smartphone saat Anda berada di transportasi umum menuju kantor.',
      'Dilengkapi dengan dalil keutamaan masing-masing dzikir, doa memohon ilmu yang bermanfaat, rezeki yang thayyib, serta perlindungan dari rasa malas dan tekanan pekerjaan.'
    ]
  }
];
