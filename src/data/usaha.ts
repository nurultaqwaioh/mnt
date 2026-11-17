export interface UsahaItem {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  image: string;
  // Detail khusus dari PDF BBNT
  tagline?: string;
  legalitas?: {
    badanHukum: string;
    bidangUsaha: string;
    tglBerdiri: string;
    noAkta: string;
    notaris: string;
    alamat: string;
  };
  manajemen?: {
    pengawasSyariah: string[];
    pengawas: string[];
    advisor: string;
    pengurusHarian: string[];
  };
  syaratAnggota?: string[];
  produkLayanan?: {
    simpanan: string[];
    tabungan: string[];
    deposito: string[];
    pembiayaan: string[];
  };
  whatsapp: string;
  website?: string;
  email?: string;
}

export const usahaData: UsahaItem[] = [
  {
    slug: 'bbnt',
    title: 'Bank Berkah Nurul Taqwa (BBNT)',
    category: 'Koperasi & Pembiayaan Syariah',
    badge: 'Unit Utama',
    icon: 'account_balance_wallet',
    shortDesc: 'Layanan koperasi simpan pinjam syariah yang fokus mendampingi langkah umat melalui inklusi keuangan yang adil dan amanah.',
    tagline: '“Bersama Membangun Ekonomi yang Berkah”',
    fullDesc: 'Bank Berkah Nurul Taqwa (BBNT) didirikan pada 30 Agustus 2024 di Jakarta oleh 21 anggota pendiri yang mayoritas merupakan profesional industri telekomunikasi yang aktif sebagai penggerak Masjid Nurul Taqwa Indosat dan pegiat Zakat-Infaq-Sedekah dalam circle SKI Indosat. Layanan BBNT difokuskan pada pelaku usaha mikro sektor pangan serta masyarakat ekonomi bawah yang belum terjangkau sistem keuangan konvensional.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    legalitas: {
      badanHukum: 'Koperasi Simpan Pinjam & Pembiayaan Syariah',
      bidangUsaha: 'Simpan Pinjam & Pembiayaan Syariah',
      tglBerdiri: '30 Agustus 2024',
      noAkta: '13',
      notaris: 'Suharyo Adi Nugroho, SH, MKn, MH',
      alamat: 'Sekretariat MNT Indosat Lt. 1 / Lt. Dasar',
    },
    manajemen: {
      pengawasSyariah: ['DR Syamsudin Buchari', 'Deny Haryadi SE, MM'],
      pengawas: ['Sukmananto', 'Juni Hadi', 'Dwi Priyanto W'],
      advisor: 'M Saiful Hidayat',
      pengurusHarian: ['Darmawan', 'Wahyudin Noor', 'Dodi S'],
    },
    syaratAnggota: [
      'Isi formulir keanggotaan di: http://bit.ly/anggota-bbnt',
      'Copy KTP',
      'Simpanan Pokok Rp250.000,- (Satu kali di awal)',
      'Simpanan Wajib Rp50.000,- / bulan',
      'Menggunakan Layanan BBNT aktif'
    ],
    produkLayanan: {
      simpanan: ['Simpanan Pokok', 'Simpanan Wajib', 'Simpanan Sirela Berkah'],
      tabungan: ['Tabungan Umroh', 'Tabungan Hari Raya', 'Tabungan Qurban'],
      deposito: ['Mudharabah', 'Simpanan Berjangka Berhadiah'],
      pembiayaan: ['Project/Program Financing', 'Pembiayaan Multiguna', 'Pembiayaan Produktif', 'Gadai Emas & Sewa Kendaraan']
    },
    whatsapp: '6285811926667',
    website: 'www.bbnt.id',
    email: 'salam@bbnt.id'
  },
  {
    slug: 'taqwa-mart',
    title: 'Taqwa Mart & Sembako',
    category: 'Retail Syariah',
    badge: 'Minimarket',
    icon: 'storefront',
    shortDesc: 'Menyediakan kebutuhan harian halal, sembako karyawan, aneka kurma Ajwa premium, madu murni, serta snack higienis.',
    fullDesc: 'Unit usaha ritel mandiri Masjid Nurul Taqwa yang melayani kebutuhan belanja bahan pokok karyawan dengan sistem kerja sama yang adil, transparan, dan 100% laba bersih dialokasikan kembali untuk kemakmuran masjid.',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    whatsapp: '6281585079225'
  },
  {
    slug: 'taqwa-coffee-lounge',
    title: 'Taqwa Coffee Corner',
    category: 'Lounge & Cafe',
    badge: 'Cafe',
    icon: 'local_cozy',
    shortDesc: 'Coffee corner nyaman untuk berjejaring karyawan dengan seduhan biji kopi Nusantara asli di area teras masjid Lt. 4.',
    fullDesc: 'Layanan kafe syariah terpadu di Lt. 4 yang menyajikan kopi pilihan, camilan sehat, serta lingkungan tenang yang dirancang sebagai pusat kolaborasi dan networking produktif karyawan.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    whatsapp: '6281585079225'
  }
];
