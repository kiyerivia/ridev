"use client";

import React from "react";
import {
  Send,
  ArrowRight,
  Sparkles,
  Check,
  MessageCircle,
  Mail,
  Layers,
  ArrowUp
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
            
            {/* 1. Official RIDEV Emblem Logo from Master Mockup */}
            <div className="relative inline-block w-fit -mt-2 mb-1 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/40 via-rose-500/30 to-purple-600/40 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src="/mockup-assets/hero-logo.png"
                alt="RIDEV Official Logo"
                className="relative w-[240px] sm:w-[290px] md:w-[330px] lg:w-[360px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,0,127,0.7)] group-hover:scale-105 transition-transform duration-300"
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

            {/* 5. Hashtag Line with #riviadot */}
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

            {/* 7. LAYANAN KAMI Card (Exact Sliced Mockup with Hover & Link) */}
            <a
              href="#layanan"
              className="block rounded-2xl overflow-hidden border border-pink-500/30 hover:border-pink-500/70 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.35)] group"
            >
              <img
                src="/mockup-assets/layanan-kami.png"
                alt="Layanan Kami RIDEV"
                className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
              />
            </a>

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
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#120a1f] hover:bg-pink-950/40 border border-pink-500/40 text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
            
            {/* Top Browser Showcase Card with Project Selesai Badge & Tech Stack */}
            <div className="rounded-2xl overflow-hidden border border-pink-500/30 hover:border-pink-500/60 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.3)] group">
              <img
                src="/mockup-assets/browser-full-stack.png"
                alt="Website Company Profile Showcase RIDEV"
                className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            {/* "Kenapa Pilih RIDEV?" Card (Exact Sliced Mockup with Interactive CTA) */}
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/30 hover:border-pink-500/60 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.3)] group">
              <img
                src="/mockup-assets/kenapa-pilih-ridev.png"
                alt="Kenapa Pilih RIDEV"
                className="w-full h-auto object-contain"
              />

              {/* Clickable Hotspot for Hubungi Kami Button on the Bottom of the Card */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-4 py-2 bg-transparent opacity-0 hover:opacity-10 cursor-pointer rounded-lg"
                title="Hubungi Kami via WhatsApp"
              >
                Hubungi Kami
              </a>
            </div>

          </div>

        </div>


        {/* ===================== PORTOFOLIO KAMI SECTION ===================== */}
        <div className="mt-10">
          <a
            href="#portofolio"
            className="block rounded-2xl overflow-hidden border border-pink-500/30 hover:border-pink-500/70 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.35)] group"
          >
            <img
              src="/mockup-assets/portfolio-section.png"
              alt="Portofolio Kami RIDEV"
              className="w-full h-auto object-contain group-hover:scale-[1.005] transition-transform duration-300"
            />
          </a>
        </div>


        {/* ===================== BOTTOM FOOTER BAR (EXACT MOCKUP) ===================== */}
        <div className="mt-8">
          <img
            src="/mockup-assets/footer-bar.png"
            alt="RIDEV Branding & Footer Bar"
            className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
          />
        </div>

      </div>
    </section>
  );
}
