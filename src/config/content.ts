// src/config/content.ts

export interface ProductItem {
  id: string;
  name: string;
  category:
    'luxury-bouquet' | 'bloom-box' | 'grand-opening' | 'wedding' | 'corporate';
  categoryLabel: string;
  price: string;
  priceNumber: number;
  description: string;
  image: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  quote: string;
  event: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface ValueProposition {
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Details' | 'Installations';
  image: string;
}

// --------------------------------------------------------------------------
// 1. HOMEPAGE CONTENT
// --------------------------------------------------------------------------
export const homeContent = {
  hero: {
    badge: 'Atelier Bunga Eksklusif',
    title: 'Keindahan Seni Floral Tanpa Batas',
    description:
      'Kami merangkai setiap tangkai bunga impor dan lokal pilihan menjadi karya mahakarya penuh keanggunan untuk momen-momen berharga Anda.',
    ctaPrimary: 'Eksplorasi Koleksi',
    ctaSecondary: 'Konsultasi Bespoke',
  },

  // Strip Stats Tipis di Bawah Hero
  stats: [
    {
      value: '100%',
      label: 'Fresh Imports',
      description: 'Bunga impor Ekuador & Belanda pilihan',
    },
    {
      value: '500+',
      label: 'Luxury Events',
      description: 'Dekorasi pernikahan & gala VIP',
    },
    {
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Kepuasan klien VIP & korporat',
    },
    {
      value: '2-5°C',
      label: 'Cold-Chain',
      description: 'Suhu penyimpanan presisi terjamin',
    },
  ] as StatItem[],

  // 3 Keunggulan Utama (Value Proposition)
  values: [
    {
      number: '01',
      title: 'Direct Import Sourcing',
      description:
        'Bunga segar dikurasi langsung dari perkebunan terbaik Ekuador, Belanda, dan mitra lokal pilihan.',
    },
    {
      number: '02',
      title: 'Cold-Chain Precision',
      description:
        'Disimpan dan dikirim dengan armada khusus berpendingin untuk menjaga mahkota bunga mekar sempurna.',
    },
    {
      number: '03',
      title: 'Tailored Bespoke Design',
      description:
        'Setiap tangkai dan konsep dirancang kustom sesuai cerita, warna, serta aura personal acara Anda.',
    },
  ] as ValueProposition[],

  // Keunggulan Spesifik (Quality Deep-Dive)
  qualityDeepDive: {
    tagline: 'Standard of Excellence',
    title: 'Presisi Kualitas Tanpa Kompromi',
    description:
      'Kami memperlakukan setiap tangkai bunga sebagai karya seni. Dari ruang kontrol suhu di atelier hingga ruang acara Anda, kualitas kesegaran adalah garansi mutlak kami.',
    features: [
      {
        title: 'Pengendalian Suhu 2-5°C',
        desc: 'Atelier kami dilengkapi sistem kontrol kelembapan dan suhu konstan agar bunga tidak cepat layu.',
      },
      {
        title: 'White-Glove Delivery',
        desc: 'Pengiriman menggunakan armada mobil van berpendingin khusus untuk menghindari paparan cuaca panas.',
      },
      {
        title: 'Master Florist Craftsmanship',
        desc: 'Dirancang langsung oleh artisan berpengalaman dengan standar teknik floristry Eropa kontemporer.',
      },
    ],
  },

  brandNarrative: {
    title: 'Seni Merangkai Keanggunan',
    subtitle: 'Filosofi Aura Fleur',
    description:
      'Di Aura Fleur, bunga bukan sekadar hadiah—bunga adalah ekspresi emosi, estetika, dan kemewahan. Terinspirasi dari teknik floristry Eropa klasik dipadu sentuhan kontemporer, master florist kami menyusun elemen warna dan tekstur secara teliti.',
  },
};

// --------------------------------------------------------------------------
// 2. ABOUT PAGE CONTENT (/tentang-kami)
// --------------------------------------------------------------------------
export const aboutContent = {
  hero: {
    title: 'Di Balik Keindahan Aura Fleur',
    subtitle: 'Kisah & Dedikasi Kami',
    description:
      'Perjalanan menciptakan standar baru dalam penataan bunga mewah dan eksklusif di Indonesia.',
  },
  pillars: [
    {
      title: 'Bunga Impor Pilihan',
      description:
        'Didatangkan langsung secara segar dari kebun terbaik di Belanda, Ekuador, dan Jepang.',
    },
    {
      title: 'Artisanal Craftsmanship',
      description:
        'Didesain khusus oleh Florist Terampil dengan presisi warna, aroma, dan bentuk visual.',
    },
    {
      title: 'Pengiriman Pendingin Khusus',
      description:
        'Armada berpendingin memastikan kesegaran bunga tetap sempurna hingga tiba di tangan penerima.',
    },
  ],
  masterFlorist: {
    name: 'Eleanor Vance',
    role: 'Lead Floral Designer & Creative Director',
    bio: 'Menimba ilmu di Master Floristry Academy Paris, Eleanor membawakan visi desain yang puitis, struktural, dan megah ke setiap instalasi Aura Fleur.',
  },
};

// --------------------------------------------------------------------------
// 3. COMBINED CATALOG & SERVICES CONTENT (/koleksi)
// --------------------------------------------------------------------------
export const collectionCategories = [
  { id: 'all', label: 'Semua Koleksi' },
  { id: 'luxury-bouquet', label: 'Luxury Bouquet' },
  { id: 'bloom-box', label: 'Bloom Box & Vessel' },
  { id: 'wedding', label: 'Wedding Styling' },
  { id: 'corporate', label: 'Corporate Subscription' },
];

export const productList: ProductItem[] = [
  // 1 - 5 (Luxury Bouquets)
  {
    id: 'prod-1',
    name: 'L’Amour Eternal Bouquet',
    category: 'luxury-bouquet',
    categoryLabel: 'Luxury Bouquet',
    price: 'Rp 2.850.000',
    priceNumber: 2850000,
    description:
      'Rangkaian 50 tangkai Mawar Merah Ekuador dengan aksen Eucalyptus segar dan pita sutra.',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 'prod-2',
    name: 'Opulent Peony Romance',
    category: 'luxury-bouquet',
    categoryLabel: 'Luxury Bouquet',
    price: 'Rp 3.400.000',
    priceNumber: 3400000,
    description:
      'Rangkaian mawar pink pastel dan peony impor segar yang memancarkan kelembutan nan mewah.',
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    badge: 'Limited Bloom',
  },
  {
    id: 'prod-3',
    name: 'Grand White Phalaenopsis',
    category: 'luxury-bouquet',
    categoryLabel: 'Luxury Bouquet',
    price: 'Rp 4.100.000',
    priceNumber: 4100000,
    description:
      'Paduan anggrek bulan putih premium dan mawar impor Belanda dalam balutan wrapping satin.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-4',
    name: 'Crimson Velvet Romance',
    category: 'luxury-bouquet',
    categoryLabel: 'Luxury Bouquet',
    price: 'Rp 2.950.000',
    priceNumber: 2950000,
    description:
      'Kombinasi mawar merah maroon Ekuador dengan aksen dried foliage dan pita sutra gelap.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-5',
    name: 'Elysian Garden Bouquet',
    category: 'luxury-bouquet',
    categoryLabel: 'Luxury Bouquet',
    price: 'Rp 3.100.000',
    priceNumber: 3100000,
    description:
      'Buket bernuansa taman Eropa modern dengan lisianthus, ranunculus, dan garden rose.',
    image:
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop',
  },

  // 6 - 10 (Bloom Box & Vessels)
  {
    id: 'prod-6',
    name: 'Velvet Romance Bloom Box',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 1.950.000',
    priceNumber: 1950000,
    description:
      'Kotak beludru hitam eksklusif berisi mawar pastel, peony impor, dan hortensia lembut.',
    image:
      'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-7',
    name: 'Elysian Golden Bloom Box',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 2.200.000',
    priceNumber: 2200000,
    description:
      'Kotak aksen emas dengan deretan mawar putih Ekuador dan baby breath impor.',
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular Gift',
  },
  {
    id: 'prod-8',
    name: 'Royal Monogram Leather Box',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 2.750.000',
    priceNumber: 2750000,
    description:
      'Kotak kulit sintetis premium bertuliskan monograf kustom berisi mawar merah beludru.',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-9',
    name: 'Spring Serenade Ceramic Vessel',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 3.200.000',
    priceNumber: 3200000,
    description:
      'Vas keramik buatan tangan diisi Tulip Belanda, Ranunculus, dan Hydrangea pilihan.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-10',
    name: 'Symphony Crystal Vase',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 3.850.000',
    priceNumber: 3850000,
    description:
      'Vas kristal mewah dengan penataan mawar, lili impor, dan ornamen perak murni.',
    image:
      'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=800&auto=format&fit=crop',
  },

  // 11 - 15 (Wedding Styling)
  {
    id: 'prod-11',
    name: 'Opulent Grandeur Wedding Centerpiece',
    category: 'wedding',
    categoryLabel: 'Wedding Styling',
    price: 'Rp 4.500.000',
    priceNumber: 4500000,
    description:
      'Penataan centerpiece meja VIP dengan mawar impor, peony, dan dedaunan eksklusif.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    badge: 'Signature',
  },
  {
    id: 'prod-12',
    name: 'Bridal Royal Cascade Bouquet',
    category: 'wedding',
    categoryLabel: 'Wedding Styling',
    price: 'Rp 3.750.000',
    priceNumber: 3750000,
    description:
      'Buket pengantin gaya menjuntai (cascade) dengan mawar putih, anggrek, dan pita sutra.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-13',
    name: 'Aisle Floral Runner Set',
    category: 'wedding',
    categoryLabel: 'Wedding Styling',
    price: 'Rp 8.500.000',
    priceNumber: 8500000,
    description:
      'Set penataan bunga karpet lorong pelaminan sepanjang 10 meter penuh keanggunan.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-14',
    name: 'Grand Wedding Arch Installation',
    category: 'wedding',
    categoryLabel: 'Wedding Styling',
    price: 'Rp 15.000.000',
    priceNumber: 15000000,
    description:
      'Instalasi gerbang/arch bunga mekar penuh untuk pemberkatan atau akad nikah.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    badge: 'Masterpiece',
  },
  {
    id: 'prod-15',
    name: 'VIP Corsage & Boutonniere Suite',
    category: 'wedding',
    categoryLabel: 'Wedding Styling',
    price: 'Rp 1.800.000',
    priceNumber: 1800000,
    description:
      'Set 10 korsase keluarga dan boutonniere pengantin pria berbahan mawar impor.',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop',
  },

  // 16 - 20 (Corporate Subscription & Events)
  {
    id: 'prod-16',
    name: 'Executive Office Subscription',
    category: 'corporate',
    categoryLabel: 'Corporate Subscription',
    price: 'Rp 3.200.000',
    priceNumber: 3200000,
    description:
      'Langganan bunga segar mingguan untuk lobi hotel, kantor VIP, atau boutique outlet.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-17',
    name: 'Grand Opening Mahogany Stand',
    category: 'corporate',
    categoryLabel: 'Corporate Subscription',
    price: 'Rp 4.200.000',
    priceNumber: 4200000,
    description:
      'Papan ucapan berbahan kayu mahoni ukir dengan rangkaian bunga impor megah.',
    image:
      'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=800&auto=format&fit=crop',
    badge: 'B2B Favorite',
  },
  {
    id: 'prod-18',
    name: 'Gala Dinner Table Arrangement',
    category: 'corporate',
    categoryLabel: 'Corporate Subscription',
    price: 'Rp 5.500.000',
    priceNumber: 5500000,
    description:
      'Rangkaian meja panjang untuk acara gala dinner perusahaan atau private brand launch.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-19',
    name: 'Boutique Lobby Flower Tower',
    category: 'corporate',
    categoryLabel: 'Corporate Subscription',
    price: 'Rp 6.800.000',
    priceNumber: 6800000,
    description:
      'Instalasi bunga vertikal tinggi khusus untuk menarik perhatian pengunjung boutique mewah.',
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-20',
    name: 'Presidential Suite Arrangement',
    category: 'corporate',
    categoryLabel: 'Corporate Subscription',
    price: 'Rp 4.900.000',
    priceNumber: 4900000,
    description:
      'Penataan bunga eksklusif bernuansa tenang dan harum untuk kamar/ruangan tamu VIP.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
  },
];

export const serviceList: ServiceItem[] = [
  {
    id: 'service-wedding',
    title: 'Luxury Wedding Styling',
    subtitle: 'Dekorasi Floral Pernikahan Eksklusif',
    description:
      'Dari buket pengantin hingga instalasi lorong pelaminan nan megah. Kami merancang atmosfer pernikahan impian sesuai konsep kepribadian Anda.',
    features: [
      'Konsultasi Moodboard & konsep visual gratis',
      'Desain buket pengantin & korsase keluarga',
      'Instalasi floral venue indoor & outdoor',
      'Tim penataan profesional di lokasi',
    ],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'service-corporate',
    title: 'Corporate & Hospitality Floral',
    subtitle: 'Langganan Bunga & Dekorasi Event',
    description:
      'Menjaga aura kemewahan lobi hotel, boutique outlet, atau ruang direksi Anda dengan pergantian bunga segar secara berkala.',
    features: [
      'Jadwal pengiriman rutin (mingguan/dua mingguan)',
      'Pemilihan vas disesuaikan dengan interior ruangan',
      'Perawatan dan penggantian bunga yang efisien',
      'Faktur & penagihan khusus corporate client',
    ],
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
];

export const bookingProcess = [
  {
    step: '01',
    title: 'Konsultasi & Brainstorming',
    description:
      'Diskusi ide, tema warna, dan kebutuhan anggaran melalui WhatsApp atau tatap muka di Atelier.',
  },
  {
    step: '02',
    title: 'Proposal & Visual Moodboard',
    description:
      'Florist kami menyusun sketsa dan kurasi jenis bunga untuk gambaran visual acara Anda.',
  },
  {
    step: '03',
    title: 'Produksi & Penataan',
    description:
      'Bunga disiapkan dan ditata secara presisi oleh tim artisan pada hari H.',
  },
];

// --------------------------------------------------------------------------
// 4. LOOKBOOK GALLERY CONTENT (/galeri)
// --------------------------------------------------------------------------
export const galleryList: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The St. Regis Grand Ballroom Wedding',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-2',
    title: 'Ecuadorean Crimson Mawar Detail',
    category: 'Details',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-3',
    title: 'Luxury Fashion Brand Gala Dinner',
    category: 'Corporate',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-4',
    title: 'Atelier Artisan Handcrafting',
    category: 'Installations',
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop',
  },
];

// --------------------------------------------------------------------------
// 5. CONTACT & FAQ CONTENT (/kontak)
// --------------------------------------------------------------------------
export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pemesanan & Pengiriman',
    question: 'Berapa hari sebelumnya saya harus memesan?',
    answer:
      'Untuk koleksi ready-to-order (buket & bloom box), pemesanan dapat dilakukan H-1 atau di hari yang sama sebelum pukul 12:00 WIB. Untuk bespoke wedding & event, kami menyarankan konsultasi minimal 2-4 minggu sebelum acara.',
  },
  {
    id: 'faq-2',
    category: 'Kualitas & Garansi',
    question: 'Bagaimana Aura Fleur menjaga kesegaran bunga?',
    answer:
      'Semua bunga disimpan dalam ruang kontrol suhu presisi dan dikirim menggunakan armada mobil berpendingin untuk memastikan bunga tiba dalam kondisi segar merona.',
  },
  {
    id: 'faq-3',
    category: 'Kustomisasi',
    question: 'Apakah saya bisa meminta kombinasi bunga kustom?',
    answer:
      'Tentu saja. Anda dapat berkonsultasi langsung dengan concierge kami untuk menyesuaikan jenis bunga, skema warna, hingga menambahkan kartu ucapan kustom bertinta kaligrafi.',
  },
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Victoria & Richard',
    role: 'Private Wedding Client',
    event: 'Wedding at The St. Regis Jakarta',
    quote:
      'Rangkaian bunga dari Aura Fleur benar-benar menyempurnakan hari bahagia kami. Instalasi lorongnya luar biasa indah dan sangat harum.',
    rating: 5,
  },
  {
    id: 'testi-2',
    clientName: 'Clara Setyadjaya',
    role: 'Managing Director',
    event: 'Luxury Fashion Brand Event',
    quote:
      'Sudah 2 tahun mempercayakan penataan bunga mingguan untuk boutique kami. Kualitas bunganya tahan lama dan desainnya selalu estetik.',
    rating: 5,
  },
];
