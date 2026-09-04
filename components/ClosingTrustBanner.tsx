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
      {/* Laser Ambient FX */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-[#100720] to-[#050308] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-pink-600/20 via-rose-600/15 to-red-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#0c0816]/95 border-2 border-pink-500/40 shadow-[0_0_50px_rgba(255,0,127,0.25)] relative overflow-hidden holo-corners text-center">
          
          {/* Internal Cyber Grid Lines */}
          <div className="absolute inset-0 cyber-floor-grid opacity-20 pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/80 border border-pink-500/50 text-pink-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(255,0,127,0.3)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Transformasi Digital Terpercaya Bersama RIDEV</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Percayakan Kebutuhan Digital & Pertumbuhan Bisnis Anda pada <span className="text-pink-glow">RIDEV</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            Bersama-sama kita wujudkan masa depan bisnis yang gemilang dengan website berstandar internasional, loading super cepat, dan siap mendatangkan prospek baru setiap hari.
          </p>

          {/* Guarantees Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
              <span>Garansi Maintenance & Bebas Bug</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700/60">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Respon WhatsApp Cepat & Ramah</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700/60">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free Video Panduan Kelola Website</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-heading font-extrabold text-base bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-[0_0_30px_rgba(255,0,127,0.55)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <span>Konsultasi Proyek Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#kalkulator"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-bold text-base bg-[#160d26] hover:bg-pink-500/20 border border-pink-500/50 text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>✨ Hitung Estimasi Biaya</span>
            </a>
          </div>

          {/* Security & Support Micro Info */}
          <p className="text-[11px] text-slate-400 mt-6">
            🔒 100% Kerahasiaan Data Bisnis Terjamin • Tanpa Biaya Tersembunyi • Invoice Resmi
          </p>

        </div>
      </div>
    </section>
  );
}
