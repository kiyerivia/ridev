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
  BadgePercent
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Hero() {
  const waUrl = createWhatsAppLink(
    getGeneralConsultationMessage()
  );

  const perks = [
    "Tampilan Responsive (Mobile, Tablet, Desktop)",
    "Profesional UI/UX Design Elegan & Modern",
    "SEO Friendly (Mudah Masuk Halaman 1 Google)",
    "Garansi & Maintenance Full 1 Tahun",
    "Tutorial & Panduan Kelola Website Lengkap",
  ];

  const valueBadges = [
    { icon: Award, label: "Kualitas Terbaik", desc: "Clean Code & Fast Loading" },
    { icon: BadgePercent, label: "Harga Terjangkau", desc: "Mulai Rp 499rb" },
    { icon: Headphones, label: "Support Profesional", desc: "Fast Response 24/7" },
    { icon: ShieldCheck, label: "100% Kepuasan Terjamin", desc: "Garansi Revisi" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Cosmic Grid and Ambient Glowing Orbs */}
      <div className="absolute inset-0 cosmic-grid pointer-events-none opacity-60" />
      
      {/* Radial Lights */}
      <div 
        className="cosmic-glow bg-pink-500/20 top-10 -left-40 animate-pulse-slow" 
        style={{ width: "650px", height: "650px" }}
      />
      <div 
        className="cosmic-glow bg-cyan-500/20 top-1/3 -right-40" 
        style={{ width: "700px", height: "700px" }}
      />
      <div 
        className="cosmic-glow bg-purple-600/20 -bottom-20 left-1/3" 
        style={{ width: "500px", height: "500px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting, Perks, and Conversion CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-950/80 via-purple-950/80 to-cyan-950/80 border border-pink-500/40 text-pink-300 text-xs sm:text-sm font-semibold shadow-lg shadow-pink-900/30 w-fit mx-auto lg:mx-0 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Stack Software House & Web Developer Studio</span>
            </div>

            {/* Main Headline with Cyber Pink & Neon Cyan Glow */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white">
              Jasa Pembuatan <br className="hidden sm:inline" />
              <span className="text-pink-glow block sm:inline">Website & Aplikasi</span>{" "}
              <span className="text-cyan-glow">Profesional</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Wujudkan Website & Aplikasi Impian Anda Bersama{" "}
              <strong className="text-white font-bold underline decoration-pink-500 decoration-2 underline-offset-4">
                RIDEV (Rivia Developer)
              </strong>! 
              Saatnya Anda fokus melayani klien dan bisnis, biarkan tim developer ahli kami yang menangani transformasi digital dan kehadiran online Anda.
            </p>

            {/* Inclusions Box ("Yang Didapat") - Matching Reference */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-rivia-deep/90 to-rivia-navy/90 border border-pink-500/30 backdrop-blur-xl shadow-xl shadow-black/40 text-left">
              <div className="flex items-center justify-between mb-3 border-b border-pink-500/20 pb-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Keuntungan & Fasilitas Lengkap:
                </span>
                <span className="text-[11px] font-semibold text-pink-300 bg-pink-950/80 px-2.5 py-0.5 rounded-full border border-pink-500/40">
                  Included Free
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-extrabold text-base bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-slate-950 hover:opacity-95 shadow-xl shadow-pink-500/30 hover:shadow-pink-400/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-950/20 flex items-center justify-center">
                  <span className="text-lg">💬</span>
                </div>
                <span>Konsultasi WhatsApp Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#kalkulator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-bold text-base bg-rivia-deep/80 hover:bg-rivia-deep border border-pink-500/40 text-pink-300 hover:text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>✨ Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Quick Contacts Callout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WhatsApp: <strong className="text-white">+62 8222-68-000-63</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️ Email: <strong className="text-white">kiyerivia@gmail.com</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Mockups & Showcase Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Glowing Shield Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 rounded-3xl blur-2xl transform rotate-3 scale-95" />

              {/* Main Showcase Card 1: Healthcare & Clinic Demo */}
              <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-cyan-400/40 shadow-2xl animate-float">
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400/90 ml-2 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      https://medikacare.rivia.app
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">
                    Live Demo
                  </span>
                </div>

                <div className="mt-3 relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-700/60 group">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
                    alt="Healthcare Web App Showcase"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rivia-dark/95 via-rivia-dark/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                      Healthcare & Booking Portal
                    </span>
                    <h3 className="font-heading font-extrabold text-white text-base">
                      MedikaCare - Klinik & Dokter Online
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      Pendaftaran pasien otomatis & integrasi rekam medis digital.
                    </p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Next.js 14", "Tailwind CSS", "Supabase DB", "Online Payment"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-cyan-950/60 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Mini Card 2: E-Commerce & Toko Online */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 glass-card p-3.5 rounded-xl border border-amber-400/40 shadow-xl max-w-[220px] sm:max-w-[250px] animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md shrink-0">
                    🛍️
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                      Toko Online
                    </span>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      AuraStyle Fashion
                    </h4>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      +200% Konversi Sales
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 3: Speed & SEO Score Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 glass-card p-3 rounded-xl border border-cyan-400/40 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-xs">
                    99+
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-300 block">
                      Google PageSpeed
                    </span>
                    <span className="text-[9px] text-cyan-300 font-medium">
                      ⚡ Super Fast Loading
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Trust Value Badges (Bottom Trust Bar) - Matching Reference Poster */}
        <div className="mt-16 pt-10 border-t border-cyan-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {valueBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-cyan-500/20 flex items-center gap-3.5 group hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:text-amber-300 group-hover:border-amber-400/50 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-cyan-200 transition-colors">
                      {badge.label}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
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
