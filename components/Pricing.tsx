"use client";

import React, { useState } from "react";
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
  Server,
  Globe2,
  Mail,
  Layers,
  Clock,
  CheckCircle2,
  BadgePercent
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
}

export default function Pricing() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>("gold");

  const toggleExpand = (planId: string) => {
    setExpandedPlan(prev => (prev === planId ? null : planId));
  };

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
    },
  ];

  return (
    <section id="harga" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-gradient-to-b dark:from-[#07070a] dark:via-[#0d071a]/90 dark:to-[#07070a]">
      {/* Background Decorators */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-[#130b24] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_20px_rgba(255,0,127,0.25)]">
            <Zap className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Pricelist • Pilih Paket Sesuai Kebutuhan Bisnis Anda</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
            Paket Harga Transparan <br />
            <span className="text-pink-glow">Investasi Digital Terbaik untuk Bisnis Anda</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Semua paket sudah termasuk domain, cloud hosting cepat, sertifikat SSL, panduan pengelolaan, dan garansi maintenance tanpa biaya tak terduga.
          </p>
        </div>

        {/* 4-Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => {
            const waUrl = createWhatsAppLink(
              getPackageWhatsAppMessage(plan.name, plan.priceFormatted, plan.targetAudience)
            );

            const isPop = plan.isPopular;
            const isExpanded = expandedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 shadow-xl ${
                  isPop
                    ? "bg-gradient-to-b from-pink-50/90 via-white to-pink-50/40 dark:from-[#1c0b30] dark:via-[#140824] dark:to-[#0d0517] border-2 border-pink-500 shadow-pink-500/10 dark:shadow-[0_0_35px_rgba(255,0,127,0.35)] scale-100 lg:-translate-y-2 holo-corners"
                    : "bg-white dark:bg-[#0f091a]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-pink-400 dark:hover:border-pink-500/40"
                }`}
              >
                {/* Popular / Best Seller Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Tier Label & Title */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 block mb-1">
                      {plan.tierLabel}
                    </span>
                    <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Target Audience Note */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 min-h-[34px] leading-relaxed">
                    {plan.targetAudience}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-slate-800/80 mb-5">
                    {plan.originalPrice && (
                      <div className="text-xs text-slate-400 line-through mb-0.5">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">/ paket</span>
                    </div>

                    {/* Transparent Renewal Info (ATM EDA) */}
                    <div className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-600 dark:text-slate-400">Biaya Perpanjangan:</span>
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

                  {/* Expandable "Detail Paket" Accordion (ATM EDA) */}
                  <div className="mb-6 pt-2 border-t border-slate-200 dark:border-slate-800/70">
                    <button
                      onClick={() => toggleExpand(plan.id)}
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
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-pink-500/20 text-xs space-y-3 animate-fadeIn">
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
                  className={`w-full py-3.5 px-4 rounded-xl font-heading font-extrabold text-xs sm:text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 ${
                    isPop
                      ? "bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-lg"
                      : "bg-slate-900 text-white hover:bg-pink-600 hover:text-white dark:bg-[#160d26] dark:text-white dark:hover:bg-pink-600 border border-slate-800 dark:border-pink-500/40"
                  }`}
                >
                  <span className="text-white">{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                </a>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner Below Pricing */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-[#0e0819] border border-pink-500/20 dark:border-pink-500/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md dark:shadow-none">
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
