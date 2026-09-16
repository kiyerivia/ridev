"use client";

import React from "react";
import {
  Flame,
  Building2,
  ShoppingCart,
  GraduationCap,
  Sparkles,
  BookOpenCheck,
  Cpu,
  Smartphone,
  Search,
  Palette,
  ArrowUpRight,
  CheckCircle,
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
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: Flame,
      title: "Landing Page & Minisite Ads",
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
      category: "Enterprise System",
      badge: "Custom High-End",
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

  return (
    <section id="layanan" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent dark:from-transparent dark:via-[#0d0918]/60 dark:to-transparent">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-[#0e0918] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Layanan Unggulan RIDEV (Rivia Developer)</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Solusi Digital Lengkap untuk <br />
            <span className="text-pink-glow">Pertumbuhan Bisnis Anda</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Mulai dari landing page iklan berkonversi tinggi, toko online siap jualan, LMS pendidikan, hingga aplikasi sistem informasi kustom skala korporasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const waLink = createWhatsAppLink(getGeneralConsultationMessage(service.title));

            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-pink-500/60 relative overflow-hidden transition-all duration-300 shadow-xl dark:shadow-2xl holo-corners"
              >
                {/* Top Glowing Edge on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />

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
                  <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-500/40 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to WhatsApp for this specific service */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-pink-50 dark:bg-pink-950/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 hover:text-white border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-300 text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn shadow-sm"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
