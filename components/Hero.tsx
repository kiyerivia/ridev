"use client";

import React, { useState } from "react";
import {
  Send,
  ArrowRight,
  Lock,
  Zap,
  Users,
  Smartphone,
  ShieldCheck,
  Headphones,
  Laptop,
  Palette,
  Settings,
  MessageCircle,
  Mail,
  Layers,
  Check,
  Sparkles,
  X,
  ArrowUp
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Hero() {
  const waUrl = createWhatsAppLink(getGeneralConsultationMessage());

  // Interactive Modals State
  const [activeModal, setActiveModal] = useState<"services" | "pricing" | "portfolio" | null>(null);

  const pills = [
    "Website",
    "Landing Page",
    "Company Profile",
    "Toko Online",
    "Aplikasi Web",
    "Desain UI/UX",
  ];

  const servicesGrid = [
    {
      icon: Laptop,
      title: "Website Development",
      desc: "Website perusahaan, toko online, landing page, dll.",
    },
    {
      icon: Smartphone,
      title: "Aplikasi Web & Mobile",
      desc: "Sistem custom sesuai kebutuhan bisnis Anda.",
    },
    {
      icon: Palette,
      title: "Desain UI/UX",
      desc: "Tampilan modern, user friendly, dan menarik.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      desc: "Website dan aplikasi tetap aman dan selalu optimal.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Tim Profesional & Berpengalaman",
      desc: "Berkualitas dan terpercaya.",
    },
    {
      icon: Laptop,
      title: "Hasil Modern & Responsif",
      desc: "Tampil maksimal di semua perangkat.",
    },
    {
      icon: ShieldCheck,
      title: "Harga Terjangkau",
      desc: "Kualitas terbaik dengan harga bersaing.",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      desc: "Selalu siap membantu kapan saja.",
    },
  ];

  const portfolioItems = [
    {
      title: "Website E-Commerce",
      desc: "Toko Online • Responsive",
      image: "/images/portfolio-ecommerce.jpg",
    },
    {
      title: "Aplikasi Mobile",
      desc: "Android & iOS • Custom",
      image: "/images/portfolio-mobile.jpg",
    },
    {
      title: "Dashboard Sistem",
      desc: "Web App • Admin Panel",
      image: "/images/portfolio-dashboard.jpg",
    },
    {
      title: "Branding & UI/UX",
      desc: "Logo • Desain • Identitas Brand",
      image: "/images/portfolio-branding.jpg",
    },
  ];

  const pricingPackages = [
    {
      name: "Paket Silver",
      price: "Rp 699.000",
      desc: "Cocok untuk Landing Page & Promosi Produk",
      features: ["1 Halaman Landing Page", "Free Domain .com / .my.id", "Cloud Hosting High Speed", "Desain Responsif Mobile", "Revisi 2x & Garansi"],
    },
    {
      name: "Paket Gold ⭐",
      price: "Rp 1.599.000",
      desc: "Pilihan Favorit Company Profile & UMKM",
      popular: true,
      features: ["Hingga 5 Halaman Lengkap", "Free Domain .com & SSL HTTPS", "Integrasi WhatsApp Otomatis", "Optimasi SEO Google", "Garansi Maintenance 3 Bulan"],
    },
    {
      name: "Paket Diamond",
      price: "Rp 2.499.000",
      desc: "Untuk Toko Online & Katalog Penjualan",
      features: ["Sistem Toko Online & Keranjang", "Cek Ongkir Otomatis se-Indonesia", "Katalog Produk Unlimited", "Dashboard Admin Lengkap", "Garansi Maintenance 6 Bulan"],
    },
    {
      name: "Paket Platinum / Custom",
      price: "Custom Budget",
      desc: "Aplikasi Web, ERP, Sistem Custom & Mobile",
      features: ["Fitur & Database Sesuai Kebutuhan", "Multi-Role User & Analytics", "High Performance Architecture", "Full Source Code & Dokumentasi", "Garansi Maintenance Prioritas"],
    },
  ];

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[#060309] text-white">
      {/* Background Cyber Laser & Ambient Glow Elements */}
      <div className="absolute inset-0 cyber-floor-grid pointer-events-none opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Central Laser Beam Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[750px] bg-gradient-to-b from-pink-500/70 via-rose-500/20 to-transparent shadow-[0_0_20px_#ff007f] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HERO GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ===================== LEFT COLUMN ===================== */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 text-left">
            
            {/* 1. Official RIDEV Emblem Logo */}
            <div className="relative inline-block w-fit -mt-2 mb-1 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/40 via-rose-500/30 to-purple-600/40 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src="/logo.png"
                alt="RIDEV Official Logo"
                className="relative w-[180px] sm:w-[230px] md:w-[270px] lg:w-[310px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,0,127,0.7)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* 2. Badge: Jasa Pembuatan Website & Aplikasi Profesional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0717]/90 border border-pink-500/40 text-xs font-semibold text-pink-300 shadow-[0_0_15px_rgba(255,0,127,0.25)] w-fit backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-slate-200">Jasa Pembuatan Website & Aplikasi Profesional</span>
            </div>

            {/* 3. Main Headline (H1) */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] tracking-tight leading-[1.15] text-white">
              Website Profesional<br />
              untuk Meningkatkan<br />
              <span className="text-[#ff007f] drop-shadow-[0_0_25px_rgba(255,0,127,0.85)]">
                Kredibilitas Bisnis
              </span>{" "}
              Anda
            </h1>

            {/* 4. Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
              Hadirkan dengan desain modern, fitur lengkap, keamanan tinggi, dan harga terjangkau. 
              Saatnya bisnis Anda tampil terpercaya di mata dunia bersama{" "}
              <strong className="text-pink-500 font-bold">RIDEV</strong>.
            </p>

            {/* 5. Hashtag Line */}
            <div className="flex items-center gap-2 text-sm font-bold text-pink-500 -mt-2">
              <span>#riviadot</span>
              <span className="inline-block w-6 h-[2px] bg-pink-500 rounded-full" />
            </div>

            {/* 6. Pill Checklist Row (6 items) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {pills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d0717]/90 border border-pink-500/30 text-xs font-medium text-slate-200 shadow-sm hover:border-pink-500/60 transition-colors"
                >
                  <Check className="w-3 h-3 text-pink-500 shrink-0 stroke-[3]" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            {/* 7. LAYANAN KAMI Glass Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0714]/85 border border-pink-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-pink-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/40 flex items-center justify-center text-pink-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-wide uppercase">
                      LAYANAN KAMI
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Solusi Digital Lengkap untuk Semua Kebutuhan Bisnis Anda
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal("services")}
                  className="text-[11px] font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 px-2.5 py-1 rounded-full transition-colors shrink-0 cursor-pointer"
                >
                  <span>Lihat Semua Layanan</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* 2x2 Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3.5">
                {servicesGrid.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 text-left group">
                      <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 mt-0.5 group-hover:bg-pink-500/25 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-white group-hover:text-pink-400 transition-colors">
                          {srv.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Dual High-Conversion CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-heading font-extrabold text-xs sm:text-sm bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,0,127,0.45)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Konsultasi Website/App Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>

              <button
                onClick={() => setActiveModal("pricing")}
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#120a1f] hover:bg-pink-950/40 border border-pink-500/40 text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-pink-400" />
                <span>Lihat Paket & Harga</span>
              </button>
            </div>

            {/* 9. Contact Info Row */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-300 pt-1">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>
                  WhatsApp : <strong className="text-white font-bold">+62 8222-68-000-63</strong>
                </span>
              </a>
              <a
                href="mailto:kiyerivia@gmail.com"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>
                  Email : <strong className="text-white font-bold">kiyerivia@gmail.com</strong>
                </span>
              </a>
            </div>

          </div>


          {/* ===================== RIGHT COLUMN ===================== */}
          <div className="lg:col-span-5 flex flex-col space-y-4 relative">
            
            {/* Top Floating Badge: Project Selesai */}
            <div className="self-end inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0e0717]/90 border border-pink-500/30 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,0,127,0.2)] backdrop-blur-md">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 text-[10px]">
                ✓
              </div>
              <span>Project Selesai • <strong className="text-emerald-400 font-bold">120+ Klien Puas</strong></span>
            </div>

            {/* Top Browser Frame Mockup */}
            <div className="rounded-2xl border border-pink-500/40 bg-[#0e0818]/95 overflow-hidden shadow-[0_0_30px_rgba(255,0,127,0.2)] backdrop-blur-xl">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090510] border-b border-pink-500/20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-[#130b20] border border-pink-500/25 text-[11px] font-mono text-emerald-400">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>https://ridev.web</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Browser Content Preview Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 group">
                <img
                  src="/Medika Care.png"
                  alt="Website Company Profile Showcase"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Browser Caption */}
              <div className="p-3.5 bg-[#0b0614]/90 border-t border-pink-500/20">
                <h4 className="font-heading font-extrabold text-xs text-white">
                  Website Company Profile
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Desain modern, responsif, dan siap untuk semua perangkat.
                </p>
              </div>
            </div>

            {/* Tech Stack Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e0717]/90 border border-amber-500/40 text-[11px] text-amber-300 font-semibold shadow-sm">
                <span>🔄</span>
                <span>Ongoing & Maintenance - Desport 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e0717]/90 border border-pink-500/30 text-[11px] text-slate-200 font-semibold">
                <span className="text-pink-400">🌐</span>
                <span>WordPress</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e0717]/90 border border-pink-500/30 text-[11px] text-slate-200 font-semibold">
                <span className="text-red-400">⚡</span>
                <span>Laravel</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e0717]/90 border border-pink-500/30 text-[11px] text-slate-200 font-semibold">
                <span className="text-cyan-400">⚛️</span>
                <span>React JS</span>
              </div>
            </div>

            {/* "Kenapa Pilih RIDEV?" Glass Card */}
            <div className="p-5 rounded-2xl bg-[#0c0714]/85 border border-pink-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Faint Wolf Silhouette Watermark on the Right */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 pointer-events-none">
                <img src="/logo.png" alt="RIDEV Watermark" className="w-full h-full object-contain filter invert" />
              </div>

              {/* Header */}
              <div className="flex items-start gap-2.5 pb-3.5 border-b border-pink-500/20">
                <div className="w-7 h-7 rounded-lg bg-pink-500/15 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-sm text-white">
                    Kenapa Pilih RIDEV?
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                    Kami hadir dengan komitmen penuh untuk memberikan hasil terbaik bagi setiap klien.
                  </p>
                </div>
              </div>

              {/* 4 Feature Items */}
              <div className="space-y-3 pt-3.5">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0 mt-0.5 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-white group-hover:text-pink-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Action Banner inside Card */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 shadow-[0_0_20px_rgba(255,0,127,0.35)] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-300 shrink-0 fill-yellow-300" />
                  <span className="text-xs font-bold text-white">
                    Wujudkan Ide Digital Anda Bersama RIDEV!
                  </span>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#150a24] hover:bg-black text-white text-[11px] font-bold transition-colors flex items-center gap-1 shrink-0 shadow-sm"
                >
                  <span>Hubungi Kami</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>


        {/* ===================== PORTOFOLIO KAMI SECTION ===================== */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#0c0714]/85 border border-pink-500/30 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-pink-500/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white uppercase tracking-wider">
                  PORTOFOLIO KAMI
                </h3>
                <p className="text-xs text-slate-400">
                  Beberapa project yang sudah kami kerjakan dengan penuh dedikasi.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveModal("portfolio")}
              className="self-start sm:self-auto text-xs font-semibold text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/40 px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModal("portfolio")}
                className="group rounded-xl bg-[#080410] border border-pink-500/25 hover:border-pink-500/60 p-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] flex flex-col justify-between cursor-pointer"
              >
                {/* Preview Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-pink-500/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info Footer */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ===================== BOTTOM FOOTER BAR (MATCHING MOCKUP) ===================== */}
        <div className="mt-8 pt-6 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Left: Logo & Services tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="RIDEV Logo"
              className="h-7 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]"
            />
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <strong className="text-white font-black tracking-wider">RIDEV</strong>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] text-slate-400">
                RIDEV • Web Design • App Development • Digital Solution
              </span>
            </div>
          </div>

          {/* Center: Tagline Quote */}
          <div className="text-slate-400 text-xs italic tracking-wide">
            &ldquo;Your Vision, Our Code&rdquo;
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-7 h-7 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all shadow-sm font-bold text-xs"
            >
              <span className="text-[11px] font-mono">♪</span>
            </a>
          </div>
        </div>

      </div>

      {/* ===================== INTERACTIVE POPUP MODALS ===================== */}
      {/* 1. Modal Pricing / Paket & Harga */}
      {activeModal === "pricing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 animate-in fade-in">
          <div className="bg-[#0c0714] border border-pink-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-pink-950/60 text-pink-300 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-500/15 border border-pink-500/30 px-3 py-1 rounded-full">
                Daftar Paket & Biaya Pembuatan
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-2">
                Pilihan Paket Website RIDEV
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Semua paket sudah termasuk domain, hosting, SSL, optimasi mobile, dan garansi maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border ${
                    pkg.popular
                      ? "border-pink-500 bg-pink-950/20 shadow-[0_0_20px_rgba(255,0,127,0.3)]"
                      : "border-pink-500/20 bg-[#080410]"
                  } flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-base text-white">{pkg.name}</h3>
                      {pkg.popular && (
                        <span className="text-[10px] font-bold bg-pink-500 text-white px-2 py-0.5 rounded-full">
                          Paling Laris
                        </span>
                      )}
                    </div>
                    <div className="font-black text-xl text-pink-400 mt-2">{pkg.price}</div>
                    <p className="text-xs text-slate-400 mt-1">{pkg.desc}</p>
                    <ul className="space-y-2 mt-4 text-xs text-slate-300 border-t border-pink-500/15 pt-3">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 hover:brightness-110 shadow-md"
                  >
                    <span>Pesan Paket Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Services / Layanan Lengkap */}
      {activeModal === "services" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 animate-in fade-in">
          <div className="bg-[#0c0714] border border-pink-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-pink-950/60 text-pink-300 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-500/15 border border-pink-500/30 px-3 py-1 rounded-full">
                Solusi Digital Komprehensif
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-2">
                Layanan Profesional RIDEV
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesGrid.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#080410] border border-pink-500/30 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/15 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white">{srv.title}</h3>
                      <p className="text-xs text-slate-300 mt-1">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs hover:brightness-110 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Konsultasikan Kebutuhan Proyek Anda</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal Portfolio Showcase */}
      {activeModal === "portfolio" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 animate-in fade-in">
          <div className="bg-[#0c0714] border border-pink-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-pink-950/60 text-pink-300 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-500/15 border border-pink-500/30 px-3 py-1 rounded-full">
                Hasil Karya & Portfolio
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-2">
                Project Unggulan RIDEV
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#080410] border border-pink-500/30 overflow-hidden">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden mb-3">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs hover:brightness-110 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Buat Website Seperti Ini Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
