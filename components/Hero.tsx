"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Award, 
  ExternalLink,
  Layers,
  Smartphone,
  Globe2,
  TrendingUp,
  BadgePercent,
  MapPin
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Hero() {
  const waUrl = createWhatsAppLink(
    getGeneralConsultationMessage()
  );

  const perks = [
    "Gratis Domain (.com / .id) & Cloud Hosting High Speed",
    "Sertifikat Keamanan SSL HTTPS & Anti-Malware",
    "Tampilan 100% Responsif (Mobile, Tablet, Desktop)",
    "Optimasi SEO On-Page (Mudah Ditemukan di Google)",
    "Garansi Maintenance Purna Jual & Panduan Lengkap",
  ];

  const valueBadges = [
    { icon: Award, label: "Kualitas Premium", desc: "Clean Code & Fast Loading < 1s" },
    { icon: BadgePercent, label: "Harga Transparan", desc: "Paket Lengkap Mulai Rp 699rb" },
    { icon: Headphones, label: "Support Profesional", desc: "Fast Response 24/7 WhatsApp" },
    { icon: ShieldCheck, label: "Garansi Kepuasan", desc: "Revisi & Maintenance Terjamin" },
  ];

  const cities = [
    "Jakarta", "Surabaya", "Bandung", "Bali", "Medan", "Semarang", "Makassar", "Yogyakarta", "Seluruh Indonesia"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Cyber Laser Sanctuary Elements */}
      <div className="absolute inset-0 cyber-floor-grid pointer-events-none opacity-40" />
      
      {/* Central Cyber Sanctuary Laser Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[450px] bg-gradient-to-b from-pink-500 via-rose-500 to-transparent shadow-[0_0_30px_#ff007f,0_0_60px_#ff0038] pointer-events-none opacity-80" />
      <div className="absolute top-10 left-1/4 w-[1px] h-[350px] bg-gradient-to-b from-pink-500/40 to-transparent pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[1px] h-[350px] bg-gradient-to-b from-pink-500/40 to-transparent pointer-events-none" />

      {/* Radial Laser Lights */}
      <div 
        className="laser-ambient-glow bg-red-600/20 top-0 left-1/2 -translate-x-1/2" 
        style={{ width: "800px", height: "500px" }}
      />
      <div 
        className="laser-ambient-glow bg-pink-600/20 top-1/4 -left-40 animate-pulse-slow" 
        style={{ width: "650px", height: "650px" }}
      />
      <div 
        className="laser-ambient-glow bg-rose-600/20 top-1/3 -right-40" 
        style={{ width: "700px", height: "700px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting, Perks, and Conversion CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Top Liquid Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              <span className="tracking-wide text-slate-800 dark:text-slate-100 font-semibold">Jasa Pembuatan Website & Aplikasi Profesional</span>
            </div>

            {/* Main Headline (ATM EDA Credibility & Primary SEO Keyword Hook) */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-slate-950 dark:text-white">
              Jasa Pembuatan Website & Aplikasi untuk Meningkatkan{" "}
              <span className="text-pink-glow">Kredibilitas Bisnis</span> Anda
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0">
              Hadir dengan desain modern, fitur lengkap, keamanan tinggi, dan harga terjangkau. 
              Saatnya bisnis Anda tampil terpercaya di mata klien bersama <strong className="text-slate-900 dark:text-white font-bold underline decoration-pink-500 decoration-2 underline-offset-4">RIDEV (Rivia Developer)</strong>!
            </p>

            {/* Target Area Coverage Badges (ATM EDA City Targeting) */}
            <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start pt-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-pink-700 dark:text-pink-300 uppercase tracking-wider glass-pill px-3 py-1 rounded-full">
                <MapPin className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                <span>Melayani Area:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-slate-700 dark:text-slate-200 bg-white/55 dark:bg-white/[0.07] backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/80 dark:border-white/15 font-medium shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Inclusions Box ("Yang Didapat") - Liquid Glass Console */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card text-left holo-corners">
              <div className="flex items-center justify-between mb-3 border-b border-white/50 dark:border-white/10 pb-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  Fasilitas Lengkap Termasuk (All-in-One):
                </span>
                <span className="text-[11px] font-bold text-pink-700 dark:text-pink-300 bg-pink-500/15 dark:bg-pink-500/20 px-2.5 py-0.5 rounded-full border border-pink-400/35 backdrop-blur-md">
                  Siap Pakai
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual High-Conversion Liquid Glass CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading font-extrabold text-base glass-btn-primary text-white active:scale-95 flex items-center justify-center gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center border border-white/30">
                  <span className="text-lg">💬</span>
                </div>
                <span className="text-white font-bold">Konsultasi WhatsApp Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </a>

              <a
                href="#harga"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-heading font-bold text-base glass-btn-secondary text-slate-900 dark:text-white flex items-center justify-center gap-2"
              >
                <span>📦 Lihat Paket & Harga</span>
              </a>
            </div>

            {/* Quick Contacts Callout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 dark:text-slate-300 pt-1 font-medium">
              <div className="flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>WhatsApp: <strong className="text-slate-900 dark:text-white font-bold">+62 8222-68-000-63</strong></span>
              </div>
              <div className="flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full">
                <span>✉️ Email: <strong className="text-pink-600 dark:text-pink-400 font-bold">kiyerivia@gmail.com</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Liquid Glass Mockups & Showcase Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Glowing Iridescent Refraction Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/35 via-violet-500/25 to-cyan-400/30 rounded-3xl blur-3xl transform rotate-3 scale-95 pointer-events-none" />

              {/* Main Showcase Card 1: Healthcare & Clinic Demo */}
              <div className="relative glass-card rounded-3xl p-4 sm:p-5 animate-float holo-corners">
                <div className="flex items-center justify-between pb-3 border-b border-white/50 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 ml-2 bg-white/60 dark:bg-black/35 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/80 dark:border-white/15">
                      https://medikacare.ridev.app
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-300 bg-amber-400/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-400/40">
                    Live Demo
                  </span>
                </div>

                <div className="mt-3 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-white/40 dark:border-white/15 group shadow-inner">
                  <img
                    src="/Medika Care.png"
                    alt="Medika Care Web App Showcase"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
                      Healthcare & Booking Portal
                    </span>
                    <h3 className="font-heading font-extrabold text-white text-base">
                      MedikaCare - Klinik & Dokter Online
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                      Pendaftaran pasien otomatis & integrasi rekam medis digital.
                    </p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {["Next.js 14", "Tailwind CSS", "Supabase DB", "Online Payment"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-white/60 dark:bg-white/10 backdrop-blur-md text-pink-700 dark:text-pink-300 px-2.5 py-0.5 rounded-full border border-white/80 dark:border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Mini Card 2: E-Commerce & Toko Online */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 glass-card p-3.5 rounded-2xl max-w-[220px] sm:max-w-[250px] animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/90 to-amber-600/90 border border-white/40 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                    🛍️
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider block">
                      Toko Online
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      AuraStyle Fashion
                    </h4>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      +200% Konversi Sales
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 3: Speed & SEO Score Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 glass-card p-3 rounded-2xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-600 dark:text-emerald-300 font-extrabold text-xs">
                    99+
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block">
                      Google PageSpeed
                    </span>
                    <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      ⚡ Super Fast Loading
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Trust Value Badges (Bottom Glass Trust Bar) */}
        <div className="mt-16 pt-10 border-t border-white/50 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {valueBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl glass-icon flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {badge.label}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-normal">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
