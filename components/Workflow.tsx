"use client";

import React from "react";
import { 
  FileText, 
  CreditCard, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Users
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Workflow() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Konsultasi & Blueprint",
      tagline: "Riset Kebutuhan & Penawaran Solusi",
      description:
        "Diskusikan ide, target market, dan fitur yang Anda butuhkan. Tim kami memberikan saran struktur halaman, referensi desain, dan estimasi biaya transparan.",
      accent: "cyan",
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Deal & DP 50%",
      tagline: "Tanda Jadi Dimulainya Proyek",
      description:
        "Setelah menyepakati paket dan timeline, Anda cukup membayar DP 50% sebagai komitmen. Invoice resmi dan perjanjian kerja langsung diterbitkan.",
      accent: "gold",
    },
    {
      number: "03",
      icon: Code2,
      title: "Desain UI/UX & Koding",
      tagline: "Pengerjaan Sesuai Timeline",
      description:
        "Tim desainer dan developer kami mulai membangun website Anda menggunakan teknologi modern (Next.js/React/Tailwind) yang cepat, aman, dan responsive.",
      accent: "cyan",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Review & Revisi",
      tagline: "Penyempurnaan Tanpa Rasa Khawatir",
      description:
        "Anda mendapatkan link preview untuk memeriksa seluruh tampilan dan fitur. Kami akan melakukan revisi sesuai feedback Anda hingga hasil maksimal.",
      accent: "blue",
    },
    {
      number: "05",
      icon: ShieldCheck,
      title: "Pelunasan & Launching",
      tagline: "Serah Terima Akses & Garansi 1 Tahun",
      description:
        "Setelah website disetujui, pelunasan dilakukan. Anda menerima seluruh akses akun, source code, video tutorial pengelolaan, dan garansi maintenance aktif 1 tahun!",
      accent: "gold",
    },
  ];

  return (
    <section id="alur-kerja" className="py-24 relative overflow-hidden bg-rivia-navy/40">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Alur Kerja Transparan & Terpercaya</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            5 Langkah Mudah Memiliki <br />
            <span className="text-gold-metallic">Website Profesional Idaman</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Proses terstruktur dengan SOP jelas untuk memastikan proyek selesai tepat waktu dan sesuai ekspektasi bisnis Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isGold = step.accent === "gold";

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/60 flex flex-col justify-between relative group transition-all duration-300"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-3 right-4 font-heading font-black text-4xl text-slate-800/60 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                  {step.number}
                </span>

                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md ${
                      isGold
                        ? "bg-amber-500/20 border border-amber-400/40 text-amber-300 group-hover:border-amber-400"
                        : "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 group-hover:border-cyan-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-cyan-400/90 uppercase tracking-wider block mb-1">
                    {step.tagline}
                  </span>

                  <h3 className="font-heading font-extrabold text-base text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Tahap {idx + 1} dari 5</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href={createWhatsAppLink(getGeneralConsultationMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-extrabold text-sm sm:text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-110 active:scale-95 transition-all"
          >
            <Users className="w-5 h-5 text-slate-950" />
            <span>Mulai Konsultasi Gratis Tahap 1 Sekarang</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </div>
    </section>
  );
}
