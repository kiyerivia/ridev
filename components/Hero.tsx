"use client";

import React from "react";
import {
  Send,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Code2,
  Users,
  Smartphone,
  ShieldCheck,
  Headphones,
  Laptop,
  Palette,
  Settings,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  Mail,
  Layers,
  ChevronRight,
  Globe2,
  Check,
  Clock,
  Sparkles
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Hero() {
  const waUrl = createWhatsAppLink(getGeneralConsultationMessage());

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
      href: "#portofolio",
    },
    {
      title: "Aplikasi Mobile",
      desc: "Android & iOS • Custom",
      image: "/images/portfolio-mobile.jpg",
      href: "#portofolio",
    },
    {
      title: "Dashboard Sistem",
      desc: "Web App • Admin Panel",
      image: "/images/portfolio-dashboard.jpg",
      href: "#portofolio",
    },
    {
      title: "Branding & UI/UX",
      desc: "Logo • Desain • Identitas Brand",
      image: "/images/portfolio-branding.jpg",
      href: "#portofolio",
    },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[#07040d] text-white">
      {/* Background Cyber Laser & Ambient Glow Elements */}
      <div className="absolute inset-0 cyber-floor-grid pointer-events-none opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Central Laser Beam Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[500px] bg-gradient-to-b from-pink-500/40 via-pink-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HERO GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ===================== LEFT COLUMN ===================== */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            
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

                <a
                  href="#layanan"
                  className="text-[11px] font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 px-2.5 py-1 rounded-full transition-colors shrink-0"
                >
                  <span>Lihat Semua Layanan</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
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

              <a
                href="#harga"
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#120a1f] hover:bg-pink-950/40 border border-pink-500/40 text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-pink-400" />
                <span>Lihat Paket & Harga</span>
              </a>
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

            <a
              href="#portofolio"
              className="self-start sm:self-auto text-xs font-semibold text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/40 px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
            </a>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {portfolioItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group rounded-xl bg-[#080410] border border-pink-500/25 hover:border-pink-500/60 p-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] flex flex-col justify-between"
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
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
