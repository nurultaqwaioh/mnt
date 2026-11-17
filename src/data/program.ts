export interface ProgramItem {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  image: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
}

export const programsData: ProgramItem[] = [
  {
    slug: 'sedekah-umroh',
    title: 'Sedekah Umroh',
    category: 'Apresiasi & Ibadah',
    shortDesc: 'Program patungan kebaikan untuk memberangkatkan marbot, petugas kebersihan, dan karyawan teladan ke Tanah Suci.',
    fullDesc: 'Program Sedekah Umroh Masjid Nurul Taqwa & SKI Indosat membuka kesempatan bagi seluruh karyawan untuk berpatungan pahala memberangkatkan saudara-saudara kita (marbot masjid, petugas cleaning service, security, dan karyawan berprestasi) menuju Baitullah.',
    icon: 'flight_takeoff',
    badge: 'Program Unggulan',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Seleksi transparan bagi marbot & pendukung operasional',
      'Laporan berkala perolehan dana sedekah jamaah',
      'Fasilitas bimbingan manasik lengkap sebelum keberangkatan'
    ],
    ctaText: 'Ikut Patungan Sedekah Umroh',
    ctaLink: '#kontak'
  },
  {
    slug: 'buka-puasa-sunah',
    title: 'Buka Puasa Sunah',
    category: 'Konsumsi Jamaah',
    shortDesc: 'Penyediaan hidangan takjil dan makan malam gratis setiap hari Senin & Kamis bagi karyawan yang berpuasa.',
    fullDesc: 'Memfasilitasi karyawan PT Indosat Tbk yang menjalankan ibadah puasa sunah Senin dan Kamis dengan menyediakan ratusan paket takjil dan hidangan berbuka puasa berkualitas di selasar Masjid Nurul Taqwa Lt. 4.',
    icon: 'restaurant',
    badge: 'Senin & Kamis',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Tersedia rutin setiap hari Senin dan Kamis sore',
      'Paket nasi box bergizi, kurma, dan minuman hangat',
      'Terbuka bagi seluruh jamaah untuk berinfaq hidangan berbuka'
    ],
    ctaText: 'Donasi Buka Puasa Sunah',
    ctaLink: '#kontak'
  },
  {
    slug: 'fasilitas-ambulan',
    title: 'Fasilitas Ambulan',
    category: 'Layanan Sosial & Medis',
    shortDesc: 'Layanan siaga ambulan gratis untuk kebutuhan darurat medis dan pengantaran jenazah keluarga besar IOH & masyarakat.',
    fullDesc: 'Unit armada Ambulan SKI Indosat & Masjid Nurul Taqwa siap siaga melayani kebutuhan transportasi medis darurat maupun layanan pengantaran jenazah bagi karyawan, keluarga karyawan, serta masyarakat dhuafa di sekitar wilayah Jabodetabek.',
    icon: 'emergency',
    badge: 'Siaga 24 Jam',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Layanan bebas biaya (gratis) untuk karyawan & dhuafa',
      'Armada terawat dengan peralatan medis standar darurat',
      'Didampingi pengemudi dan petugas siaga berpengalaman'
    ],
    ctaText: 'Hubungi Hotline Ambulan',
    ctaLink: 'https://wa.me/6281585079225'
  },
  {
    slug: 'waqaf',
    title: 'Waqaf Produktif & Sarana',
    category: 'Amal Jariyah',
    shortDesc: 'Investasi pahala abadi melalui pengadaan fasilitas ibadah, Al-Qur\'an, dan pengelolaan aset produktif umat.',
    fullDesc: 'Program penghimpunan dan pengelolaan dana wakaf baik berupa sarana fisik (renovasi tempat wudhu, karpet sajadah, mushaf Al-Qur\'an) maupun wakaf uang produktif yang hasilnya disalurkan terus-menerus untuk kemakmuran masjid dan umat.',
    icon: 'mosque',
    badge: 'Pahala Mengalir',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Dikelola secara syar\'i, amanah, dan tercatat resmi',
      'Fokus pada peningkatan fasilitas ibadah Masjid Nurul Taqwa',
      'Sertifikat apresiasi wakaf bagi para muwakif'
    ],
    ctaText: 'Tunaikan Waqaf Sekarang',
    ctaLink: 'https://zisindosat.id/'
  },
  {
    slug: 'haji-ioh',
    title: 'Haji IOH',
    category: 'Komunitas & Bimbingan',
    shortDesc: 'Wadah silaturahmi, edukasi persiapan haji, dan bimbingan manasik bagi calon jamaah haji di lingkungan IOH.',
    fullDesc: 'Program pendampingan terpadu bagi karyawan Indosat Ooredoo Hutchison yang akan maupun telah menunaikan rukun Islam kelima. Mencakup seminar perencanaan porsi haji, bimbingan manasik intensif, hingga pelepasan jamaah calon haji.',
    icon: 'kaaba',
    badge: 'Keluarga Besar IOH',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Bimbingan manasik haji praktis sesuai sunnah',
      'Sharing session bersama alumni jamaah haji IOH',
      'Pendampingan doa dan silaturahmi pasca-haji (ikatan haji)'
    ],
    ctaText: 'Gabung Komunitas Haji IOH',
    ctaLink: 'https://wa.me/6281585079225'
  },
  {
    slug: 'qurban-raya',
    title: 'Qurban Raya',
    category: 'Syiar Idul Adha',
    shortDesc: 'Pengelolaan hewan qurban karyawan IOH dengan distribusi daging merata hingga pelosok daerah & area kantor.',
    fullDesc: 'Kepanitiaan Qurban Raya SKI Indosat memfasilitasi kemudahan berqurban sapi dan kambing bagi karyawan dengan standar syariat terbaik, higienis, serta jangkauan distribusi ke seluruh regional jaringan Indosat di Indonesia.',
    icon: 'volunteer_activism',
    badge: 'Tahunan Terbesar',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pilihan qurban kolektif maupun mandiri dengan harga transparan',
      'Distribusi menjangkau masyarakat sekitar BTS & pelosok negeri',
      'Laporan dokumentasi pemotongan lengkap kepada mudhohi'
    ],
    ctaText: 'Info Pendaftaran Qurban',
    ctaLink: '#kontak'
  },
  {
    slug: 'tahsin-keluarga',
    title: 'Tahsin Keluarga',
    category: 'Pendidikan Al-Qur\'an',
    shortDesc: 'Kelas perbaikan bacaan Al-Qur\'an (makharijul huruf & tajwid) yang terbuka untuk karyawan beserta anggota keluarga.',
    fullDesc: 'Membangun keluarga Qur\'ani melalui kelas bimbingan belajar membaca Al-Qur\'an secara bertahap dari tingkat dasar hingga mahir. Dapat diikuti oleh karyawan beserta pasangan dan putra-putrinya secara fleksibel.',
    icon: 'family_restroom',
    badge: 'Karyawan & Keluarga',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Kurikulum tahsin bertingkat sesuai kemampuan peserta',
      'Dibimbing oleh asatidz/ustadzah bersanad yang ramah',
      'Tersedia sesi tatap muka dan kelas daring (online) akhir pekan'
    ],
    ctaText: 'Daftar Kelas Tahsin Keluarga',
    ctaLink: 'https://wa.me/6285600001567'
  },
  {
    slug: 'kataba',
    title: 'Kataba (Kajian Tahsin Bareng)',
    category: 'Belajar Al-Qur\'an',
    shortDesc: 'Sesi belajar mengaji dan perbaikan tajwid bersama rekan kerja di sela waktu istirahat kantor dengan suasana santai.',
    fullDesc: 'Kataba (Kajian Tahsin Bareng) adalah gerakan belajar Al-Qur\'an kolektif antar-karyawan di Masjid Nurul Taqwa. Mengusung metode talaqqi interaktif yang nyaman dan tidak menggurui agar setiap insan Indosat makin cinta Al-Qur\'an.',
    icon: 'menu_book',
    badge: 'Rutin Mingguan',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Metode belajar santai, interaktif, dan penuh ukhuwah',
      'Waktu pelaksanaan menyesuaikan jam istirahat/pulang kerja',
      'Gratis untuk seluruh jamaah Masjid Nurul Taqwa'
    ],
    ctaText: 'Ikuti Sesi Kataba',
    ctaLink: 'https://wa.me/6285600001567'
  }
];
