"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Flame,
  Building2,
  ShoppingCart,
  Sparkles,
  BookOpenCheck,
  Cpu,
  Smartphone,
  Palette,
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

interface ServiceItem {
  icon: any;
  title: string;
  category: string;
  badge?: string;
  description: string;
  features: string[];
  recommendedFor: string;
  accentColor: "cyan" | "gold" | "blue" | "purple";
  shortName: string;
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartAngle, setDragStartAngle] = useState<number>(0);
  const [radius, setRadius] = useState<number>(580);
  const [perspective, setPerspective] = useState<number>(1400);

  const carouselRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      icon: Flame,
      title: "Landing Page & Minisite Ads",
      shortName: "Landing Page",
      category: "High Conversion",
      badge: "Best Seller",
      description:
        "Halaman tunggal yang dioptimasi khusus untuk iklan Google Ads, TikTok Ads, & Meta Ads dengan tingkat konversi penjualan tinggi.",
      features: [
        "Desain Direct-Response (Copywriting Menjual)",
        "Direct WhatsApp & Formulir Leads Otomatis",
        "Loading Kilat < 1 Detik",
        "Pixel & Tracking Ads Ready",
      ],
      recommendedFor: "Pemasar Iklan, Produk Viral, Event, Launching Bisnis",
      accentColor: "gold",
    },
    {
      icon: Building2,
      title: "Company Profile Bisnis & UMKM",
      shortName: "Company Profile",
      category: "Corporate Branding",
      description:
        "Membangun kredibilitas dan citra profesional perusahaan dengan portofolio layanan, legalitas bisnis, dan galeri proyek interaktif.",
      features: [
        "Desain Elegan & Prestisius Sesuai Brand Guide",
        "Domain Kustom (.com / .co.id / .id)",
        "Email Resmi Bisnis (info@perusahaan.com)",
        "Optimasi Google Maps & Profil Bisnis",
      ],
      recommendedFor: "Perusahaan, Kantor Hukum, Konsultan, UMKM Berkembang",
      accentColor: "cyan",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Toko Online",
      shortName: "Toko Online",
      category: "Digital Sales",
      badge: "Populer",
      description:
        "Platform toko online otomatis dengan katalog produk tanpa batas, manajemen stok, dan integrasi payment gateway instan.",
      features: [
        "Kalkulator Ongkir Otomatis (JNE, J&T, SiCepat)",
        "Payment Gateway (QRIS, VA, Kartu Kredit, E-Wallet)",
        "Notifikasi Pesanan Otomatis ke WhatsApp",
        "Dashboard Admin Kelola Produk & Laporan Penjualan",
      ],
      recommendedFor: "Distributor, Brand Fashion, Kuliner, Retail Online",
      accentColor: "cyan",
    },
    {
      icon: BookOpenCheck,
      title: "LMS & Portal Pendidikan / Sekolah",
      shortName: "LMS & Kursus",
      category: "E-Learning",
      description:
        "Sistem manajemen pembelajaran digital terpadu untuk kursus online, sekolah, universitas, atau program sertifikasi.",
      features: [
        "Video Streaming Terenkripsi & Materi Download",
        "Sistem Kuis / Ujian Online & Penilaian Otomatis",
        "Penerbitan Sertifikat Digital Otomatis",
        "Manajemen Data Siswa, Guru & Absensi",
      ],
      recommendedFor: "Lembaga Kursus, Sekolah, Bimbel, Instruktur Mandiri",
      accentColor: "purple",
    },
    {
      icon: Sparkles,
      title: "Website Portofolio & Personal Branding",
      shortName: "Portofolio",
      category: "Personal Brand",
      description:
        "Tunjukkan karya terbaik dan pengalaman profesional Anda kepada klien global dengan tampilan interaktif yang memikat.",
      features: [
        "Galeri Proyek Interaktif (Grid, Filter, Modal)",
        "Link CV / Resume Terintegrasi",
        "Blog & Publikasi Artikel SEO",
        "Brosur & Booking Jadwal Konsultasi",
      ],
      recommendedFor: "Fotografer, Desainer, Arsitek, Developer, Influencer",
      accentColor: "blue",
    },
    {
      icon: Cpu,
      title: "Custom Web Application & SaaS",
      shortName: "Custom Web App",
      category: "Enterprise System",
      badge: "High-End",
      description:
        "Pengembangan sistem informasi terpusat sesuai kebutuhan spesifik alur kerja bisnis Anda (ERP, CRM, POS Kasir, dsb).",
      features: [
        "Database Supabase / PostgreSQL Skalabilitas Tinggi",
        "Role-Based Access Control (Admin, Staff, Manager)",
        "Integrasi REST API / Webhook Pihak Ketiga",
        "Audit Log & Keamanan Enkripsi End-to-End",
      ],
      recommendedFor: "Startup, Korporasi, Rumah Sakit, Pabrik & Ekspedisi",
      accentColor: "cyan",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development (Android & iOS)",
      shortName: "Mobile App",
      category: "Mobile Platform",
      description:
        "Aplikasi mobile native atau cross-platform (React Native / Flutter) yang mulus, ringan, dan siap terbit di Play Store & App Store.",
      features: [
        "Sinkronisasi Realtime dengan Database Web",
        "Push Notification Promosi & Info Penting",
        "Bekerja Optimal di Android & iPhone",
        "Bantuan Publish ke Google Play & App Store",
      ],
      recommendedFor: "Komunitas, On-Demand Service, Aplikasi Member / Loyalty",
      accentColor: "gold",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Redesign Website",
      shortName: "UI/UX Redesign",
      category: "Design Architecture",
      description:
        "Membuat atau merombak tampilan website lama Anda agar lebih segar, modern, responsif, dan mudah digunakan (User-Friendly).",
      features: [
        "Riset User Journey & Wireframing Interaktif",
        "File Desain Figma Rapi & Siap Koding",
        "Design System & Komponen Reusable",
        "Peningkatan Kecepatan & Responsivitas Layout",
      ],
      recommendedFor: "Website Lawas yang Mau Rebranding & Naik Kelas",
      accentColor: "blue",
    },
  ];

  const totalServices = services.length;
  const ANGLE_STEP = 360 / totalServices; // 45 degrees per item

  // Dynamic responsive geometry calculation for true cylinder sizing
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(330);
        setPerspective(900);
      } else if (width < 1024) {
        setRadius(460);
        setPerspective(1200);
      } else {
        setRadius(580);
        setPerspective(1400);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth cylinder navigation by index
  const rotateTo = useCallback((targetIndex: number) => {
    setActiveIndex(targetIndex);
    setRotationAngle((prev) => {
      const targetBase = -targetIndex * ANGLE_STEP;
      const currentNorm = ((prev % 360) + 360) % 360;
      const targetNorm = ((targetBase % 360) + 360) % 360;
      let diff = targetNorm - currentNorm;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return prev + diff;
    });
  }, [ANGLE_STEP]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalServices);
    setRotationAngle((prev) => prev - ANGLE_STEP);
  }, [totalServices, ANGLE_STEP]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
    setRotationAngle((prev) => prev + ANGLE_STEP);
  }, [totalServices, ANGLE_STEP]);

  // Touch & Drag Gesture Handling for 3D Cylinder Rotation
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartAngle(rotationAngle);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - dragStartX;
    const angleDelta = (diffX / radius) * (180 / Math.PI) * 1.1;
    setRotationAngle(dragStartAngle + angleDelta);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartAngle(rotationAngle);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diffX = e.clientX - dragStartX;
    const angleDelta = (diffX / radius) * (180 / Math.PI) * 1.1;
    setRotationAngle(dragStartAngle + angleDelta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      snapToNearest();
    }
  };

  const snapToNearest = () => {
    setRotationAngle((curr) => {
      const nearestSlot = Math.round(-curr / ANGLE_STEP);
      const targetAngle = -nearestSlot * ANGLE_STEP;
      const newActive = ((nearestSlot % totalServices) + totalServices) % totalServices;
      setActiveIndex(newActive);
      return targetAngle;
    });
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
    <section id="layanan" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent dark:from-transparent dark:via-[#0d0918]/60 dark:to-transparent select-none">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-80 cyber-floor-grid pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-[#0e0918] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Layanan Unggulan RIDEV (Rivia Developer)</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Solusi Digital Lengkap untuk <br />
            <span className="text-pink-glow">Pertumbuhan Bisnis Anda</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Mulai dari landing page iklan berkonversi tinggi, toko online siap jualan, LMS pendidikan, hingga aplikasi sistem informasi kustom skala korporasi.
          </p>

          {/* Futuristic HUD Service Tabs */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/85 dark:bg-[#10091d]/90 backdrop-blur-xl border border-slate-200/90 dark:border-pink-500/30 shadow-lg dark:shadow-[0_0_30px_rgba(255,0,127,0.15)] max-w-full overflow-x-auto scrollbar-none gap-1.5">
              {services.map((s, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => rotateTo(idx)}
                    className={`px-3.5 sm:px-4 py-2 rounded-xl font-heading text-xs font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap relative ${
                      isActive
                        ? "bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white shadow-md shadow-pink-500/30 scale-100 dark:shadow-[0_0_20px_rgba(255,0,127,0.5)]"
                        : "text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-pink-500/10"
                    }`}
                  >
                    <span>{s.shortName}</span>
                    {s.badge && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                        isActive ? "bg-white/25 text-white" : "bg-pink-100 dark:bg-pink-900/60 text-pink-600 dark:text-pink-300"
                      }`}>
                        {s.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3D Cylinder Stage Container */}
        <div 
          ref={carouselRef}
          className="relative w-full py-8 sm:py-12 overflow-visible cursor-grab active:cursor-grabbing select-none"
          style={{ 
            perspective: `${perspective}px`,
            perspectiveOrigin: "50% 50%",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Holographic Center Glow & Cylinder Orbit FX */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-cyan-500/20 blur-3xl pointer-events-none -z-10" />
          
          {/* Cylinder Ring Grid Base Indicator */}
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-32 rounded-[100%] border border-pink-500/20 dark:border-pink-500/30 pointer-events-none opacity-40 dark:opacity-60 -z-10"
            style={{
              transform: "rotateX(75deg)",
              boxShadow: "0 0 40px rgba(255,0,127,0.2), inset 0 0 40px rgba(255,0,127,0.2)",
            }}
          />

          {/* Floating Neon Chevrons */}
          <button
            onClick={prevSlide}
            aria-label="Previous Service"
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl dark:shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center justify-center hover:scale-110 hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 transition-all duration-300 group active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Service"
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl dark:shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center justify-center hover:scale-110 hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 transition-all duration-300 group active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Cylinder Cards Wrapper */}
          <div 
            className="relative min-h-[580px] sm:min-h-[540px] flex items-center justify-center"
            style={{ 
              transformStyle: "preserve-3d",
            }}
          >
            {services.map((service, index) => {
              const baseAngle = index * ANGLE_STEP;
              // Compute shortest relative angle diff in [-180, 180] deg
              const rawDiff = ((baseAngle + rotationAngle) % 360 + 540) % 360 - 180;
              const rad = (rawDiff * Math.PI) / 180;
              const absDiff = Math.abs(rawDiff);

              // Position along 3D cylinder surface
              const x = Math.sin(rad) * radius;
              const z = Math.cos(rad) * radius - radius; // 0 at front center, negative as it curves back
              const rotateY = rawDiff; // Perfectly tangent to cylinder wall

              const isBackside = absDiff > 105;
              const isCenter = absDiff < 18;
              const isFlank = absDiff >= 18 && absDiff <= 65;
              const isFarEdge = absDiff > 65 && absDiff <= 105;

              let opacity = 0;
              let scale = 0.72;
              let zIndex = 10;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";

              if (!isBackside) {
                if (isCenter) {
                  opacity = 1;
                  scale = 1;
                  zIndex = 50;
                  pointerEvents = "auto";
                  filter = "none";
                } else if (isFlank) {
                  opacity = 0.72;
                  scale = 0.88;
                  zIndex = 30;
                  pointerEvents = "auto";
                  filter = "brightness(0.9) saturate(0.95)";
                } else if (isFarEdge) {
                  opacity = 0.22;
                  scale = 0.74;
                  zIndex = 15;
                  pointerEvents = "auto";
                  filter = "brightness(0.65) blur(1.2px)";
                }
              }

              const Icon = service.icon;
              const waLink = createWhatsAppLink(getGeneralConsultationMessage(service.title));

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!isCenter) rotateTo(index);
                  }}
                  className={`absolute top-0 w-[88%] sm:w-[390px] max-w-[420px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-[filter,opacity] duration-300 ${
                    isCenter
                      ? "bg-white dark:bg-[#150b26] border-2 border-pink-500 shadow-pink-500/25 dark:shadow-[0_0_40px_rgba(255,0,127,0.4)] holo-corners ring-4 ring-pink-500/20"
                      : "bg-white/90 dark:bg-[#0c0618]/90 border border-slate-300 dark:border-pink-500/20 cursor-pointer hover:border-pink-400 dark:hover:border-pink-500/60 hover:opacity-90"
                  }`}
                  style={{
                    transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformOrigin: "center center",
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents,
                    filter: filter,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transition: isDragging 
                      ? "opacity 0.15s ease, filter 0.15s ease" 
                      : "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease, filter 0.4s ease",
                  }}
                >
                  {/* Subtle Curved Cylinder Gradient Lighting Overlay for side cards */}
                  {!isCenter && (
                    <div 
                      className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 ${
                        rawDiff > 0 
                          ? "bg-gradient-to-r from-transparent via-transparent to-black/30 dark:to-black/50" 
                          : "bg-gradient-to-r from-black/30 dark:from-black/50 via-transparent to-transparent"
                      }`} 
                    />
                  )}

                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700 dark:text-pink-400">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_10px_rgba(255,0,127,0.4)]">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-500/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA to WhatsApp */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-3 px-4 rounded-xl bg-pink-50 dark:bg-[#1c0d32] hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 hover:text-white border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-300 text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn shadow-sm"
                    >
                      <span>Konsultasi Layanan Ini</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Slide Dots */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {services.map((s, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => rotateTo(idx)}
                    aria-label={`Go to ${s.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-9 bg-gradient-to-r from-pink-500 to-rose-500 shadow-md shadow-pink-500/40 dark:shadow-[0_0_12px_#ff007f]"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-pink-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

