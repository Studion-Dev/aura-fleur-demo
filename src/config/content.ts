// src/config/content.ts

export interface ProductItem {
  id: string;
  name: string;
  category: 'luxury-bouquet' | 'bloom-box' | 'grand-opening' | 'seasonal';
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
  stats: [
    { label: 'Karya Bespoke Created', value: 1200, suffix: '+' },
    { label: 'Acara Luxury Handled', value: 350, suffix: '+' },
    { label: 'Klien VIP & Korporat', value: 180, suffix: '+' },
    { label: 'Tahun Pengalaman Atelier', value: 8, suffix: ' Thn' },
  ],
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
// 3. COLLECTIONS PAGE CONTENT (/koleksi)
// --------------------------------------------------------------------------
export const collectionCategories = [
  { id: 'all', label: 'Semua Koleksi' },
  { id: 'luxury-bouquet', label: 'Luxury Bouquet' },
  { id: 'bloom-box', label: 'Bloom Box & Vessel' },
  { id: 'grand-opening', label: 'Grand Opening Stand' },
  { id: 'seasonal', label: 'Seasonal Edict' },
];

export const productList: ProductItem[] = [
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
    name: 'Velvet Romance Bloom Box',
    category: 'bloom-box',
    categoryLabel: 'Bloom Box & Vessel',
    price: 'Rp 1.950.000',
    priceNumber: 1950000,
    description:
      'Kotak beludru eksklusif berisi mawar pastel, peony impor, dan hortensia lembut.',
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-3',
    name: 'Opulent Grandeur Stand',
    category: 'grand-opening',
    categoryLabel: 'Grand Opening Stand',
    price: 'Rp 4.500.000',
    priceNumber: 4500000,
    description:
      'Papan ucapan berbahan kayu ukir premium dengan rangkaian bunga tropis dan impor nan megah.',
    image:
      'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=800&auto=format&fit=crop',
    badge: 'Signature',
  },
  {
    id: 'prod-4',
    name: 'Spring Serenade Vessel',
    category: 'seasonal',
    categoryLabel: 'Seasonal Edict',
    price: 'Rp 3.200.000',
    priceNumber: 3200000,
    description:
      'Vas keramik buatan tangan diisi Tulip Belanda, Ranunculus, dan Hydrangea pilihan musim ini.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
  },
];

// --------------------------------------------------------------------------
// 4. SERVICES PAGE CONTENT (/layanan)
// --------------------------------------------------------------------------
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
