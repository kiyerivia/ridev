"use client";

import React from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Headphones, 
  Award,
  Zap,
  Clock
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function ClosingTrustBanner() {
  const waUrl = createWhatsAppLink(
    getGeneralConsultationMessage("Konsultasi Proyek & Penawaran Khusus Website RIDEV")
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Chromatic Refraction Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] bg-gradient-to-r from-pink-500/25 via-violet-500/20 to-cyan-400/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2rem] p-8 sm:p-12 lg:p-16 glass-card-pink relative overflow-hidden holo-corners text-center">
          
          {/* Subtle Specular Glass Reflection */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/25 dark:bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 cyber-floor-grid opacity-15 pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            <span>Transformasi Digital Terpercaya Bersama RIDEV</span>
          </div>

          {/* Main Headline */}
          <h2 className="relative z-10 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Percayakan Kebutuhan Digital & Pertumbuhan Bisnis Anda pada <span className="text-pink-glow">RIDEV</span>
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 text-slate-600 dark:text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            Bersama-sama kita wujudkan masa depan bisnis yang gemilang dengan website berstandar internasional, loading super cepat, dan siap mendatangkan prospek baru setiap hari.
          </p>

          {/* Guarantees Row */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-100">
            <div className="flex items-center gap-2 glass-pill px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0" />
              <span>Garansi Maintenance & Bebas Bug</span>
            </div>
            <div className="flex items-center gap-2 glass-pill px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Respon WhatsApp Cepat & Ramah</span>
            </div>
            <div className="flex items-center gap-2 glass-pill px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Free Video Panduan Kelola Website</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl font-heading font-extrabold text-base glass-btn-primary text-white active:scale-95 flex items-center justify-center gap-3 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center border border-white/30">
                <span className="text-lg">💬</span>
              </div>
              <span>Konsultasi Proyek Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#kalkulator"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-heading font-bold text-base glass-btn-secondary text-slate-900 dark:text-white flex items-center justify-center gap-2"
            >
              <span>✨ Hitung Estimasi Biaya</span>
            </a>
          </div>

          {/* Security & Support Micro Info */}
          <p className="relative z-10 text-[11px] text-slate-600 dark:text-slate-300 mt-6">
            🔒 100% Kerahasiaan Data Bisnis Terjamin • Tanpa Biaya Tersembunyi • Invoice Resmi
          </p>

        </div>
      </div>
    </section>
  );
}
