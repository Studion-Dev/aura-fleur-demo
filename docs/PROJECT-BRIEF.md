# 📝 PROJECT BRIEF: Luxury Florist (Multipage 5 Halaman)

## 1. Project Overview

- **Nama Website**: Aura Fleur (atau nama brand kamu)
- **Jenis Website**: Multipage Luxury E-Commerce Catalog & Service (5 Halaman)
- **Tujuan Utama**: High-end branding, catalog showcase produk premium, & konsultasi/booking via WhatsApp.
- **Target Audiens**: Market Indonesia (Klien VIP, pengantin/wedding luxury, corporate event, & hadiah eksklusif).

## 2. Visual & Aesthetic Direction

- **Tema Desain**: Modern Luxury, High-End Editorial, Bold & Standout Typography.
- **Typography**:
  - Heading: Serif Editorial Bold & Standout (Playfair Display / Cormorant Garamond)
  - Body: Clean Sans-Serif (Plus Jakarta Sans / Inter)
- **Skema Warna**:
  - Primary Color: Deep Emerald / Forest Noir (`#0A2E23`)
  - Accent/Secondary Color: Soft Gold / Warm Champagne (`#C5A880`)
  - Surface Color: Light Warm Ivory (`#FAF8F5`)
- **Referensi Estetika**: Layout ala majalah fashion luxury, whitespace luas, foto produk besar, dan typography header yang tegas & tebal.

## 3. Sitemap & Page Structure (5 Halaman - Revised Blueprint)

- **[ / ] Homepage (Landing Page Komprehensif):**
  - _Hero Section:_ Full-screen (100vh) high-fashion editorial, typography Cinzel kontras, layout asimetris & whitespace luas.
  - _Stats Banner:_ Strip tipis & compact di bawah Hero untuk 3-4 angka statistik kunci (social proof).
  - _Solusi & Jasa (Overview):_ Layout magazine spread (7:5) pengenalan 3 pilar layanan utama.
  - _3 Keunggulan Utama (Value Proposition):_ Grid 3 kolom borderless & spacious dengan penomoran raksasa (01-03).
  - _Produk Highlight (Recommendation & Best-Seller):_ Grid 4 produk pilihan editor berformat portrait (3:4) dengan posisi staggered.
  - _Keunggulan Spesifik (Deep-Dive Quality):_ Dark theme asymmetric split-screen penanganan suhu 2-5°C & white-glove delivery.
  - _Galeri Highlight (Lookbook Preview):_ Layout Asymmetric Newspaper/Mosaic Grid untuk foto penataan acara VIP & behind-the-scenes.
  - _Testimonial Slider:_ Quote slider interaktif (Alpine.js) ulasan dari klien VIP / langganan.
  - _FAQ Accordion:_ Accordion minimalis (Alpine.js x-collapse) pertanyaan umum seputar pemesanan & pengiriman.
  - _CTA Banner Penutup:_ Dark/emerald banner raksasa dengan grid line emas transparan untuk reservasi WA Direct.
  - _Footer:_ Navigasi lengkap, alamat atelier, kontak WA, & medsos.

- **[ /tentang-kami ] About Us / Our Story:**
  - _Editorial Hero (40vh):_ Headline serif raksasa, sub-headline pendek, & visual atelier/flower detail melayang offset.
  - _Filosofi & Craftsmanship (Narrative Story):_ Asymmetric split (7:5) dengan whitespace besar, cerita kurasi bunga Ekuador & lokal pilihan.
  - _Master Florist Profile:_ Dark theme, foto portrait artisan menempel di tepi layar, bio & quote melayang di atas card.
  - _Komitmen Kualitas (Pillars):_ Full-width container, 3 poin standar kesegaran & armada pengiriman pendingin dengan nomor raksasa (01-03).
  - _Atelier Lookbook Mini:_ Mosaic 3 foto behind-the-scenes proses kerja dengan posisi staggered.
  - _CTA Banner Penutup:_ Banner penutup ringkas dengan ambient glow & tombol reservasi.

- **[ /koleksi ] Collections & Services (Combined Catalog):**
  - _Editorial Hero (40vh):_ Headline raksasa, aksen grid luxury halus, & visual koleksi mepet ke tepi layar.
  - _Category Switcher & Filter Bar:_ Sticky minimalist text tabs (Alpine.js): All, Bespoke Bouquets, Wedding Styling, Corporate Subscription.
  - _Featured Signature Showcase:_ Asymmetric grid (8:4) pamer 1-2 masterpiece paling eksklusif dengan detail spesifikasi material.
  - _Dynamic Product & Service Grid:_ Spacious grid untuk kartu produk buket (foto HD, harga starting from, WA Direct) & paket layanan (wedding/corporate).
  - _Bespoke Custom Experience:_ Section staggered penawaran kustomisasi tema & moodboard 100%.
  - _CTA Banner Penutup:_ Dark theme banner ajakan konsultasi WA / janji temu di Atelier.

- **[ /galeri ] Visual Lookbook & Portfolio:**
  - _Editorial Hero (40vh):_ Headline raksasa, sub-headline style majalah fashion, & asymmetric visual cutout.
  - _Category Filter:_ Minimalist text tabs tanpa box (All, Weddings, Corporate, Details, Installations).
  - _Hero Exhibition Spread:_ Showcase 1 karya raksasa full-width (70% foto, 30% cerita konsep, lokasi, & jenis bunga).
  - _Asymmetric Masonry Gallery Grid:_ Portfolio grid aspek rasio variatif (portrait, landscape, square) disusun staggered dengan whitespace luas.
  - _Atelier Behind-the-Scenes:_ Story grid kontras dokumentasi proses merangkai & pengiriman pendingin.
  - _CTA Banner Penutup:_ Banner penutup ajakan mewujudkan estetika serupa via WA Concierge.

- **[ /kontak ] Contact & Booking:**
  - _Editorial Hero (40vh):_ Headline raksasa, teks pengantar tipis, & visual atelier entrance menerobos container.
  - _Asymmetric Concierge & Booking Form:_ Layout 5:7 (Whitespace luas). Left: Direct WA/Email/Hours. Right: Form reservasi janji temu WA Direct.
  - _Atelier Location & Interactive Map:_ Split-screen card alamat fisik + embed Google Maps grayscale styling mepet layar.
  - _Accordion FAQ:_ Accordion spacious (Alpine.js x-collapse) untuk detail teknis pengiriman berpendingin & garansi kesegaran.
  - _CTA Banner Penutup:_ Sentuhan akhir ajakan reservasi master florist.

## 4. Tech Stack Specification

- **Framework**: Astro (Static-First SSG)
- **Styling**: Tailwind CSS v4 (@import "tailwindcss" & @utility)
- **Interaktivitas**: Alpine.js + @alpinejs/collapse
- **Package Manager**: pnpm
- **Deployment Target**: Vercel / Netlify / Hostinger
