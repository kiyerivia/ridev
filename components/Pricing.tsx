"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Zap, 
  ShieldCheck, 
  Crown,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Server,
  Globe2,
  Mail,
  Layers,
  Clock,
  CheckCircle2,
  BadgePercent,
  MoveHorizontal,
  SlidersHorizontal,
  Compass
} from "lucide-react";
import { createWhatsAppLink, getPackageWhatsAppMessage } from "@/lib/whatsapp";

interface PricingPlan {
  id: string;
  name: string;
  tierLabel: string;
  badge?: string;
  isPopular?: boolean;
  priceFormatted: string;
  originalPrice?: string;
  renewalFee: string;
  targetAudience: string;
  summaryFeatures: string[];
  detailedSpecs: {
    pages: string;
    domain: string;
    hosting: string;
    email: string;
    featuresList: string[];
    turnaround: string;
    warranty: string;
  };
  ctaLabel: string;
  colorScheme: "silver" | "gold" | "diamond" | "platinum";
  accentColor: string;
  glowClass: string;
  cyberTag: string;
}

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to Gold (Best Seller)
  const [expandedPlan, setExpandedPlan] = useState<string | null>("gold");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const plans: PricingPlan[] = [
    {
      id: "silver",
      name: "Paket Silver",
      tierLabel: "Starter & Landing Page",
      originalPrice: "Rp 1.200.000",
      priceFormatted: "Rp 699.000",
      renewalFee: "Rp 450.000 / tahun",
      targetAudience: "Pemula, Landing Page Iklan, Minisite Bisnis Praktis",
      summaryFeatures: [
        "1 - 4 Menu / Halaman Lengkap",
        "FREE Domain (.web.id / .my.id) 1 Tahun",
        "High Speed Cloud SSD Hosting 500 MB",
        "Sertifikat Keamanan SSL HTTPS",
        "Integrasi Tombol WhatsApp & Form Kontak",
        "100% Mobile & Desktop Responsive",
        "Garansi Bebas Bug & Panduan Edit",
      ],
      detailedSpecs: {
        pages: "1 - 4 Menu / Halaman",
        domain: "Gratis Domain (.web.id / .my.id) 1 Tahun",
        hosting: "Cloud SSD NVMe 500 MB (Kapasitas hingga 30 foto produk)",
        email: "Integrasi Form Email Standar",
        featuresList: [
          "Desain Direct-Response (Fokus Penjualan)",
          "Integrasi WhatsApp Chat Direct Link",
          "Kecepatan Server Rata-rata < 5ms",
          "Bandwidth Unlimited tanpa batas",
          "User & Video Tutorial Panduan Edit",
          "Free Support Konsultasi 24/7",
        ],
        turnaround: "2 - 4 Hari Kerja",
        warranty: "Garansi Maintenance & Support Penuh",
      },
      ctaLabel: "Pilih Paket Silver",
      colorScheme: "silver",
      accentColor: "#38bdf8",
      glowClass: "from-sky-500/20 via-sky-500/5 to-transparent",
      cyberTag: "SYS.TIER // 01 [STARTER]",
    },
    {
      id: "gold",
      name: "Paket Gold",
      tierLabel: "UMKM & Company Profile",
      badge: "⭐ BEST SELLER / PALING LARIS",
      isPopular: true,
      originalPrice: "Rp 2.500.000",
      priceFormatted: "Rp 1.590.000",
      renewalFee: "Rp 600.000 / tahun",
      targetAudience: "Company Profile Bisnis, Profil Kantor, UMKM, Jasa Profesional",
      summaryFeatures: [
        "Hingga 8 Menu / Halaman Lengkap",
        "FREE Domain (.com / .id) 1 Tahun",
        "Cloud SSD Hosting 3 GB Super Cepat",
        "FREE Desain Banner Promosi & Logo Dasar",
        "Pemasangan Google Maps & Profil Bisnis",
        "Optimasi SEO On-Page Google",
        "Statistik Kunjungan Website (Analytics)",
      ],
      detailedSpecs: {
        pages: "Hingga 8 Menu / Halaman (Home, About, Layanan, Galeri, Kontak, dll)",
        domain: "Gratis Domain Populer (.com / .id) 1 Tahun",
        hosting: "High Performance Cloud SSD 3 GB (Kapasitas hingga 70 foto produk)",
        email: "1 Email Bisnis Resmi (admin@domain.com)",
        featuresList: [
          "Desain UI/UX Eksklusif & Elegan sesuai Brand",
          "Pemasangan Google Maps Bisnis & Kontak Lengkap",
          "Statistik Pengunjung & Integrasi Google Analytics",
          "Integrasi Tombol WhatsApp Popup Interaktif",
          "Optimasi SEO On-Page & Kecepatan Loading Kilat",
          "User & Video Panduan Pengelolaan Konten",
          "Garansi Purna Jual & Support Prioritas",
        ],
        turnaround: "4 - 7 Hari Kerja",
        warranty: "Garansi Full 1 Tahun + Free Support",
      },
      ctaLabel: "Pilih Paket Gold (Rekomendasi)",
      colorScheme: "gold",
      accentColor: "#ff007f",
      glowClass: "from-pink-500/30 via-rose-500/10 to-transparent",
      cyberTag: "SYS.TIER // 02 [RECOMMENDED]",
    },
    {
      id: "diamond",
      name: "Paket Diamond",
      tierLabel: "Toko Online & Bisnis Pro",
      badge: "💎 Fitur Lengkap",
      originalPrice: "Rp 3.500.000",
      priceFormatted: "Rp 2.490.000",
      renewalFee: "Rp 900.000 / tahun",
      targetAudience: "Toko Online / E-Commerce, Portal Booking, Kursus & Instansi",
      summaryFeatures: [
        "10 - 12 Menu + Unlimited Produk / Post",
        "FREE Domain (.com / .co.id / .id) 1 Tahun",
        "Cloud SSD Hosting 5 GB High Traffic",
        "Sistem E-Commerce & Notifikasi Order WA",
        "Kalkulator Ongkir Otomatis & QRIS Ready",
        "Plugin Premium & Tracking Pixel Ads",
        "Garansi Prioritas & Panduan Live",
      ],
      detailedSpecs: {
        pages: "10 - 12 Menu + Katalog Produk / Artikel Tanpa Batas",
        domain: "Gratis Domain (.com / .co.id / .id) 1 Tahun",
        hosting: "High Traffic Cloud Hosting 5 GB (Kapasitas 100+ foto)",
        email: "Hingga 3 Email Bisnis Resmi",
        featuresList: [
          "Dashboard Admin CMS Kelola Produk / Artikel Mandiri",
          "Sistem Toko Online & Notifikasi Checkout ke WhatsApp",
          "Integrasi Payment Gateway (QRIS, VA, E-Wallet) & Ongkir",
          "Integrasi Pixel Ads (Meta / TikTok / Google Tag)",
          "Free Desain Banner Slider & Aset Grafis Promosi",
          "Pemasangan Google Maps, Chat Widget, & Form Leads",
          "Backup Otomatis Mingguan & Security Firewall",
        ],
        turnaround: "7 - 12 Hari Kerja",
        warranty: "Garansi Full 1 Tahun + SLA Prioritas 24/7",
      },
      ctaLabel: "Pilih Paket Diamond",
      colorScheme: "diamond",
      accentColor: "#00f0ff",
      glowClass: "from-cyan-500/25 via-blue-500/10 to-transparent",
      cyberTag: "SYS.TIER // 03 [COMMERCE]",
    },
    {
      id: "platinum",
      name: "Paket Platinum",
      tierLabel: "Custom Web App & Enterprise",
      badge: "👑 Enterprise Grade",
      originalPrice: "Rp 6.000.000",
      priceFormatted: "Mulai Rp 3.990.000",
      renewalFee: "Fleksibel (Sesuai Cloud Resource)",
      targetAudience: "Sistem Informasi Manajemen, ERP, LMS Sekolah, Custom App",
      summaryFeatures: [
        "15 - 20+ Menu / Kustom Arsitektur Penuh",
        "FREE Domain Kustom + Enterprise Cloud Server",
        "Database Supabase / PostgreSQL Skalabilitas Tinggi",
        "Role-Based Access Control (Admin, Staff, Klien)",
        "Integrasi REST API, Webhook & Multi-Payment",
        "Laporan & Export Data (PDF & Excel)",
        "Dedicated Lead Developer & Training Tim",
      ],
      detailedSpecs: {
        pages: "15 - 20+ Halaman / Modul Kustom Penuh Sesuai Kebutuhan",
        domain: "Gratis Domain (.com / .co.id / .id) 1 Tahun",
        hosting: "Dedicated Cloud Server / Supabase Cloud Database",
        email: "Unlimited Email Bisnis Resmi",
        featuresList: [
          "Arsitektur Modern Full-Stack (Next.js, TypeScript, PostgreSQL)",
          "Sistem Multi-User & Hak Akses Berjenjang",
          "Export / Import Data Laporan Real-time (Excel, CSV, PDF)",
          "Integrasi API Pihak Ketiga & Automasi Webhook",
          "Opsi Pembuatan Aplikasi Mobile (Android & iOS)",
          "Keamanan Enkripsi End-to-End & Audit Log Aktivitas",
          "Dedicated Developer, Training Karyawan, & Dokumentasi API",
        ],
        turnaround: "14 - 25 Hari Kerja (Sesuai Scope)",
        warranty: "Garansi Maintenance & Dedicated SLA Priority",
      },
      ctaLabel: "Konsultasi Paket Platinum",
      colorScheme: "platinum",
      accentColor: "#c084fc",
      glowClass: "from-purple-500/25 via-fuchsia-500/10 to-transparent",
      cyberTag: "SYS.TIER // 04 [ENTERPRISE]",
    },
  ];

  const totalPlans = plans.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalPlans);
  }, [totalPlans]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalPlans) % totalPlans);
  }, [totalPlans]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const toggleExpand = (planId: string) => {
    setExpandedPlan((prev) => (prev === planId ? null : planId));
  };

  // Touch & Drag Gesture Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="harga" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-gradient-to-b dark:from-[#07070a] dark:via-[#0c0617] dark:to-[#07070a] select-none">
      {/* Futuristic Background Atmospheric Beams & Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-r from-pink-600/15 via-purple-600/10 to-cyan-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-96 cyber-floor-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-[#130b24] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_20px_rgba(255,0,127,0.25)]">
            <Zap className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Pricelist • 3D Interactive Tier Showcase</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
            Pilihan Paket Transparan <br />
            <span className="text-pink-glow">Investasi Digital Terbaik untuk Bisnis Anda</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Geser atau klik paket di bawah untuk menjelajahi spesifikasi lengkap. Semua paket sudah termasuk domain, hosting cepat, SSL, dan garansi maintenance.
          </p>

          {/* Futuristic HUD Tier Switcher Tabs */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-[#10091d]/90 backdrop-blur-xl border border-slate-200/90 dark:border-pink-500/30 shadow-lg dark:shadow-[0_0_30px_rgba(255,0,127,0.15)] max-w-full overflow-x-auto scrollbar-none gap-1.5">
              {plans.map((p, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-3.5 sm:px-5 py-2 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap relative ${
                      isActive
                        ? "bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white shadow-md shadow-pink-500/30 scale-100 dark:shadow-[0_0_20px_rgba(255,0,127,0.5)]"
                        : "text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-pink-500/10"
                    }`}
                  >
                    {idx === 0 && <span className="text-xs">⚡</span>}
                    {idx === 1 && <span className="text-xs">⭐</span>}
                    {idx === 2 && <span className="text-xs">💎</span>}
                    {idx === 3 && <span className="text-xs">👑</span>}
                    <span>{p.name.replace("Paket ", "")}</span>
                    {p.isPopular && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                        isActive ? "bg-white/25 text-white" : "bg-pink-100 dark:bg-pink-900/60 text-pink-600 dark:text-pink-300"
                      }`}>
                        HOT
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gesture swipe guidance hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <MoveHorizontal className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            <span className="tracking-wide">Geser ke samping (Swipe) atau klik kartu untuk beralih</span>
          </div>
        </div>

        {/* 3D Curved Coverflow Stage Container */}
        <div 
          ref={carouselRef}
          className="relative w-full py-8 sm:py-12 overflow-visible cursor-grab active:cursor-grabbing"
          style={{ perspective: "1400px" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Futuristic Holographic Stage Base Glow Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full bg-gradient-to-tr from-pink-500/20 via-cyan-500/15 to-purple-500/20 blur-3xl pointer-events-none -z-10" />

          {/* Floating Neon Navigation Chevrons */}
          <button
            onClick={prevSlide}
            aria-label="Previous Package"
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl dark:shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center justify-center hover:scale-110 hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Package"
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl dark:shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center justify-center hover:scale-110 hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Cards Carousel Wrapper */}
          <div className="relative min-h-[720px] sm:min-h-[700px] flex items-center justify-center">
            {plans.map((plan, index) => {
              const offset = index - activeIndex;
              const isCenter = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isFarLeft = offset < -1;
              const isFarRight = offset > 1;

              // Dynamic 3D Curved Positioning Math
              let transformStyle = "";
              let opacity = 0;
              let zIndex = 10;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";

              if (isCenter) {
                transformStyle = `translateX(${dragOffset}px) translateZ(0px) rotateY(0deg) scale(1)`;
                opacity = 1;
                zIndex = 30;
                pointerEvents = "auto";
                filter = "none";
              } else if (isPrev) {
                transformStyle = `translateX(calc(-72% + ${dragOffset * 0.4}px)) translateZ(-90px) rotateY(26deg) scale(0.85)`;
                opacity = 0.65;
                zIndex = 20;
                pointerEvents = "auto";
                filter = "blur(0.4px)";
              } else if (isNext) {
                transformStyle = `translateX(calc(72% + ${dragOffset * 0.4}px)) translateZ(-90px) rotateY(-26deg) scale(0.85)`;
                opacity = 0.65;
                zIndex = 20;
                pointerEvents = "auto";
                filter = "blur(0.4px)";
              } else if (isFarLeft) {
                transformStyle = `translateX(calc(-135% + ${dragOffset * 0.2}px)) translateZ(-180px) rotateY(40deg) scale(0.7)`;
                opacity = 0.2;
                zIndex = 10;
                pointerEvents = "none";
                filter = "blur(1.5px)";
              } else if (isFarRight) {
                transformStyle = `translateX(calc(135% + ${dragOffset * 0.2}px)) translateZ(-180px) rotateY(-40deg) scale(0.7)`;
                opacity = 0.2;
                zIndex = 10;
                pointerEvents = "none";
                filter = "blur(1.5px)";
              }

              const waUrl = createWhatsAppLink(
                getPackageWhatsAppMessage(plan.name, plan.priceFormatted, plan.targetAudience)
              );
              const isPop = plan.isPopular;
              const isExpanded = expandedPlan === plan.id;

              return (
                <div
                  key={plan.id}
                  onClick={() => {
                    if (!isCenter) goToSlide(index);
                  }}
                  className={`absolute top-0 w-[90%] sm:w-[420px] max-w-[440px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-out shadow-2xl ${
                    isCenter
                      ? isPop
                        ? "bg-white dark:bg-[#160b28] border-2 border-pink-500 shadow-pink-500/20 dark:shadow-[0_0_45px_rgba(255,0,127,0.4)] holo-corners ring-4 ring-pink-500/15"
                        : "bg-white dark:bg-[#10091d] border-2 border-slate-300 dark:border-pink-500/40 shadow-slate-900/10 dark:shadow-[0_0_35px_rgba(255,0,127,0.25)] holo-corners"
                      : "bg-white/80 dark:bg-[#0c0618]/85 border border-slate-300 dark:border-slate-850 cursor-pointer hover:border-pink-400 dark:hover:border-pink-500/50"
                  }`}
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents,
                    filter: filter,
                    transformStyle: "preserve-3d",
                    transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, filter 0.4s ease",
                  }}
                >
                  {/* Cyber Holographic Top HUD Tag */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-pink-500/20">
                    <span className="font-mono text-[10px] tracking-wider font-bold text-slate-500 dark:text-pink-400/80">
                      {plan.cyberTag}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${isCenter ? "bg-emerald-400 animate-ping" : "bg-slate-400"}`} />
                      <span className="font-mono text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        {isCenter ? "ACTIVE" : "STANDBY"}
                      </span>
                    </div>
                  </div>

                  {/* Popular / Best Seller Top Floating Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-pink-500/40 flex items-center gap-1.5 whitespace-nowrap border border-white/30 animate-bounce-subtle">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Tier Label & Title */}
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 block mb-1">
                        {plan.tierLabel}
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Target Audience Note */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 min-h-[34px] leading-relaxed">
                      {plan.targetAudience}
                    </p>

                    {/* Price Box with Cyber Glow */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-slate-800/90 mb-5 relative overflow-hidden">
                      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
                      
                      {plan.originalPrice && (
                        <div className="text-xs text-slate-400 dark:text-slate-500 line-through mb-0.5 font-medium">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                          {plan.priceFormatted}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">/ paket</span>
                      </div>

                      {/* Transparent Renewal Info */}
                      <div className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Biaya Perpanjangan:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{plan.renewalFee}</span>
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                        Fasilitas Termasuk:
                      </span>
                      {plan.summaryFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                          <Check className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable "Detail Paket" Accordion */}
                    <div className="mb-6 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(plan.id);
                        }}
                        className="w-full flex items-center justify-between py-2 text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                        type="button"
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          {isExpanded ? "Sembunyikan Detail Paket" : "Lihat Spesifikasi Lengkap"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-pink-500/30 text-xs space-y-3 animate-fadeIn">
                          <div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Halaman & Menu</span>
                            <span className="text-slate-900 dark:text-white font-semibold text-[11px]">{plan.detailedSpecs.pages}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Domain & Hosting</span>
                            <span className="text-slate-800 dark:text-slate-200 font-medium text-[11px] block">{plan.detailedSpecs.domain}</span>
                            <span className="text-slate-600 dark:text-slate-300 text-[10px] block mt-0.5">{plan.detailedSpecs.hosting}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Email Bisnis</span>
                            <span className="text-slate-800 dark:text-slate-200 font-medium text-[11px]">{plan.detailedSpecs.email}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase block mb-1">Fitur Tambahan</span>
                            <ul className="space-y-1">
                              {plan.detailedSpecs.featuresList.map((item, i) => (
                                <li key={i} className="text-[10px] text-slate-700 dark:text-slate-300 flex items-start gap-1.5 font-medium">
                                  <span className="text-pink-600 dark:text-pink-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px]">
                            <span className="text-slate-500 dark:text-slate-400">Estimasi Selesai:</span>
                            <span className="text-amber-600 dark:text-amber-400 font-bold">{plan.detailedSpecs.turnaround}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Direct-to-WhatsApp CTA Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-extrabold text-xs sm:text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 ${
                      isPop
                        ? "bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-lg shadow-pink-500/30"
                        : "bg-slate-900 text-white hover:bg-pink-600 hover:text-white dark:bg-[#190d2e] dark:text-white dark:hover:bg-pink-600 border border-slate-800 dark:border-pink-500/40"
                    }`}
                  >
                    <span className="text-white">{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                  </a>

                </div>
              );
            })}
          </div>

          {/* Futuristic Bottom Slide Progress Telemetry Indicator */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {plans.map((p, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to ${p.name}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-9 bg-gradient-to-r from-pink-500 to-rose-500 shadow-md shadow-pink-500/40 dark:shadow-[0_0_12px_#ff007f]"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-pink-400"
                    }`}
                  />
                );
              })}
            </div>

            <div className="font-mono text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
              <span>TIER [0{activeIndex + 1} / 0{totalPlans}]</span>
              <span>•</span>
              <span className="text-pink-600 dark:text-pink-400">{plans[activeIndex].name}</span>
            </div>
          </div>

        </div>

        {/* Guarantee Banner Below Pricing */}
        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-[#0e0819] border border-pink-500/20 dark:border-pink-500/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md dark:shadow-none">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-500/20 border border-pink-300 dark:border-pink-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                Garansi Purna Jual & Dukungan Selamanya
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Semua proyek website mendapatkan jaminan perbaikan bug & konsultasi gratis bersama developer.
              </p>
            </div>
          </div>
          
          <a
            href="#kalkulator"
            className="shrink-0 text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 underline underline-offset-4"
          >
            Hitung Estimasi Kustom ›
          </a>
        </div>

      </div>
    </section>
  );
}
