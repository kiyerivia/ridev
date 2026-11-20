import React from "react";

export default function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RIDEV (Rivia Developer)",
    alternateName: ["Rivia Developer", "RIDEV", "Rivia Studio Web Development"],
    url: "https://riviadeveloper.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://riviadeveloper.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIDEV (Rivia Developer)",
    alternateName: "Rivia Developer",
    image: "https://riviadeveloper.com/logo.png",
    url: "https://riviadeveloper.com",
    telephone: "+6282226800063",
    priceRange: "Rp 499.000 - Rp 15.000.000",
    description:
      "Jasa Pembuatan Website, Toko Online (E-Commerce), Web App, UI/UX Design & Aplikasi Mobile Android/iOS Profesional, Bergaransi 1 Tahun & SEO Ready di Seluruh Indonesia.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Surabaya" },
      { "@type": "City", name: "Bandung" },
      { "@type": "City", name: "Medan" },
      { "@type": "City", name: "Semarang" },
      { "@type": "City", name: "Makassar" },
      { "@type": "City", name: "Bali" },
      { "@type": "City", name: "Yogyakarta" },
      { "@type": "Country", name: "Indonesia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Pembuatan Website & Aplikasi",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Website Company Profile",
            description: "Website profil perusahaan profesional untuk meningkatkan kredibilitas dan kepercayaan klien.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Toko Online / E-Commerce",
            description: "Toko online canggih dilengkapi keranjang belanja, integrasi payment gateway dan ongkir otomatis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Landing Page Iklan",
            description: "Landing page berkonversi tinggi dirancang khusus untuk Google Ads, Meta Ads, dan TikTok Ads.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Pembuatan Aplikasi Mobile & Web App",
            description: "Aplikasi custom berbasis Android, iOS, dan Next.js dengan fitur interaktif dan database cloud.",
          },
        },
      ],
    },
    sameAs: [
      "https://instagram.com/riviadeveloper",
      "https://github.com/kiyerivia",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa lama proses pembuatan website di RIDEV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk Paket Promo/Landing Page membutuhkan waktu 2 - 4 hari kerja. Paket Standar UMKM membutuhkan 5 - 7 hari kerja, sedangkan Paket E-Commerce/Custom Aplikasi berkisar 10 - 20 hari kerja tergantung kompleksitas fitur.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah saya bisa mengelola website sendiri setelah selesai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, tentu saja! Kami menyediakan Dashboard Admin (CMS) yang ramah pengguna sehingga Anda bisa mengubah teks, upload produk, atau menambah foto dengan mudah. Kami juga menyertakan video tutorial panduan lengkap.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana sistem pembayaran jasa pembuatan website di RIDEV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sistem pembayaran sangat fleksibel dan aman: DP 50% di awal sebagai tanda jadi dimulainya pengerjaan, dan pelunasan 50% sisanya dibayarkan setelah website selesai dan Anda puas dengan hasilnya.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana jika ada error atau kendala setelah website online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semua paket di RIDEV (Rivia Developer) bergaransi penuh 1 tahun! Jika website mengalami error atau bug teknis, tim developer kami siap memperbaiki 24/7 secara gratis melalui WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah sudah termasuk domain dan hosting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, untuk Paket Standar, Bisnis Pro, dan Custom sudah GRATIS domain kustom (.com / .id) serta high-speed cloud hosting selama 1 tahun pertama.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah website buatan RIDEV sudah SEO Friendly agar muncul di halaman 1 Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tentu saja! Semua website buatan RIDEV (Rivia Developer) dibangun dengan On-Page SEO teroptimasi, loading berkecepatan tinggi di bawah 1 detik, mobile responsive 100%, serta schema markup terstruktur agar cepat terindeks dan mudah menembus peringkat teratas Google.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RIDEV (Rivia Developer)",
    url: "https://riviadeveloper.com",
    logo: "https://riviadeveloper.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6282226800063",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
