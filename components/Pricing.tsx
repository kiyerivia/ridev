"use client";

import React from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Zap, 
  ShieldCheck, 
  Crown,
  HelpCircle
} from "lucide-react";
import { createWhatsAppLink, getPackageWhatsAppMessage } from "@/lib/whatsapp";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceFormatted: string;
  originalPrice?: string;
  targetAudience: string;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
  colorScheme: "default" | "popular" | "gold" | "promo";
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      id: "promo",
      name: "Paket Special Promo",
      badge: "🔥 Terbatas (Slot Promo)",
      originalPrice: "Rp 1.000.000",
      priceFormatted: "Rp 499.000",
      targetAudience: "Minisite, Cocok untuk Landing Page Google/TikTok Ads",
      features: [
        "1 Halaman Landing Page (Single Page)",
        "Desain Direct-Response (Fokus Penjualan)",
        "Integrasi Tombol WhatsApp & Formulir",
        "Tampilan 100% Mobile & Desktop Responsive",
        "Loading Kilat & Optimasi Kompresi Gambar",
        "Garansi Bebas Error 3 Bulan",
        "Pengerjaan Kilat (2-4 Hari Kerja)",
      ],
      notIncluded: ["Domain Kustom .com (opsional add-on)", "Dashboard Admin CMS"],
      ctaLabel: "Ambil Promo Sekarang",
      colorScheme: "promo",
    },
    {
      id: "standar",
      name: "Paket Standar UMKM",
      originalPrice: "Rp 2.000.000",
      priceFormatted: "Rp 1.250.000",
      targetAudience: "Company Profile Bisnis, UMKM, Web Personal, Portofolio",
      features: [
        "3 - 5 Halaman Lengkap (Home, About, Layanan, Portofolio, Kontak)",
        "FREE Domain (.com / .id) + Cloud Hosting 1 Tahun",
        "FREE Email Bisnis Resmi (nama@domain.com)",
        "Desain UI/UX Elegan & Sesuai Brand Guide",
        "Optimasi SEO On-Page Dasar Google",
        "Integrasi Google Maps & Social Media",
        "Garansi Maintenance Full 1 Tahun",
        "Tutorial Pengelolaan Website Lengkap",
      ],
      ctaLabel: "Pilih Paket Standar",
      colorScheme: "default",
    },
    {
      id: "bisnis",
      name: "Paket Bisnis Pro",
      badge: "⭐ Paling Diminati",
      isPopular: true,
      originalPrice: "Rp 3.500.000",
      priceFormatted: "Rp 2.490.000",
      targetAudience: "Toko Online E-Commerce, Portal Sekolah / LMS, Instansi",
      features: [
        "Hingga 10 Halaman + Unlimited Produk / Materi",
        "FREE Domain (.com / .co.id) + High Performance Cloud Hosting 1 Tahun",
        "Dashboard Admin (CMS) untuk Kelola Konten Mandiri",
        "Sistem Katalog E-Commerce / LMS Kursus Interaktif",
        "Kalkulator Ongkir Otomatis & Payment Gateway QRIS/VA",
        "Fitur Multi-Level User / Member Area Login",
        "Garansi & Prioritas Support 1 Tahun (24/7 WhatsApp)",
        "Video Tutorial Eksklusif & Panduan Live",
      ],
      ctaLabel: "Pilih Paket Bisnis Pro",
      colorScheme: "popular",
    },
    {
      id: "custom",
      name: "Paket Custom Enterprise",
      badge: "👑 Custom Architecture",
      priceFormatted: "Mulai Rp 4.900.000",
      targetAudience: "Sistem Informasi Manajemen, ERP, CRM, Custom App & Mobile App",
      features: [
        "Arsitektur Kustom Penuh (Next.js, Supabase, PostgreSQL)",
        "Role-Based Access Control (Admin, Staff, Client)",
        "Integrasi API Pihak Ketiga & Webhook",
        "Laporan & Export Data (PDF, Excel)",
        "Opsi Pembuatan Aplikasi Mobile (Android & iOS)",
        "Backup Database Otomatis & Enkripsi Tingkat Tinggi",
        "Dedicated Lead Developer & SLA Prioritas",
        "Garansi Purna Jual & Training Karyawan",
      ],
      ctaLabel: "Konsultasi Paket Custom",
      colorScheme: "gold",
    },
  ];

  return (
    <section id="harga" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0b0714]/60 to-transparent">
      {/* Background Decorators */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0918] border border-pink-500/40 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span>Pilihan Paket Harga Transparan</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Investasi Digital Terbaik <br />
            <span className="text-pink-glow">Sesuai Skala Bisnis Anda</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Semua paket sudah termasuk garansi maintenance, free konsultasi, dan panduan pengelolaan tanpa biaya tak terduga.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const waUrl = createWhatsAppLink(
              getPackageWhatsAppMessage(plan.name, plan.priceFormatted, plan.targetAudience)
            );

            const isPop = plan.isPopular;
            const isGold = plan.colorScheme === "gold";
            const isPromo = plan.colorScheme === "promo";

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 shadow-2xl ${
                  isPop
                    ? "glass-card-pink border-2 border-pink-500 shadow-[0_0_30px_rgba(255,0,127,0.35)] scale-100 lg:-translate-y-2 holo-corners"
                    : isGold
                    ? "glass-card border border-amber-500/40 hover:border-amber-400"
                    : isPromo
                    ? "glass-card border border-rose-500/40 hover:border-rose-400"
                    : "glass-card border border-slate-800 hover:border-pink-500/40"
                }`}
              >
                {/* Popular / Promo Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 ${
                        isPop
                          ? "bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white shadow-pink-500/50"
                          : isGold
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/40"
                          : "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-rose-500/40"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="text-center pt-2 pb-4 border-b border-slate-800">
                    <h3 className="font-heading font-black text-xl text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[36px] flex items-center justify-center font-normal">
                      {plan.targetAudience}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-6 text-center">
                    {plan.originalPrice && (
                      <span className="text-xs line-through text-slate-500 block mb-1">
                        {plan.originalPrice}
                      </span>
                    )}
                    <div
                      className={`font-heading font-black text-2xl sm:text-3xl tracking-tight ${
                        isGold
                          ? "text-gold-metallic"
                          : isPop
                          ? "text-pink-glow"
                          : isPromo
                          ? "text-rose-400"
                          : "text-white"
                      }`}
                    >
                      {plan.priceFormatted}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1 font-normal">
                      {plan.id === "custom" ? "Fleksibel Sesuai Fitur" : "Biaya All-in Sekali Bayar"}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 py-4 border-t border-slate-800 text-xs">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-pink-950/60 border border-pink-500/40 flex items-center justify-center shrink-0 mt-0.5 text-pink-400 shadow-sm">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight font-normal">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded?.map((notInc, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-slate-500 line-through">
                        <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-slate-500 text-[10px]">
                          ✕
                        </div>
                        <span className="leading-tight">{notInc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-800">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-extrabold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all duration-300 shadow-lg active:scale-95 ${
                      isPop
                        ? "bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,0,127,0.5)]"
                        : isGold
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        : isPromo
                        ? "bg-gradient-to-r from-rose-500 to-red-600 text-white hover:brightness-110 shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                        : "bg-[#130a1c] hover:bg-pink-500/20 text-pink-300 hover:text-white border border-pink-500/40"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-[10px] text-center text-slate-400 block mt-2 font-normal">
                    💬 WhatsApp Pre-filled Chat
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 glass-card p-6 rounded-2xl border border-pink-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left holo-corners">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,127,0.4)] shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg text-white">
                Garansi Maintenance & Error Free 1 Tahun Penuh!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                Jika ada kendala, bug teknis, atau website down, tim teknis RIDEV (Rivia Developer) siap membantu perbaikan 24/7 via WhatsApp tanpa dipungut biaya tambahan.
              </p>
            </div>
          </div>
          <a
            href={createWhatsAppLink("Halo RIDEV (Rivia Developer), saya ingin tanya detail mengenai garansi dan SLA pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#120d1c] border border-pink-500/40 hover:bg-pink-500/20 text-pink-300 hover:text-white text-xs font-bold whitespace-nowrap transition-colors shadow-lg"
          >
            Tanya Syarat Garansi
          </a>
        </div>

      </div>
    </section>
  );
}
