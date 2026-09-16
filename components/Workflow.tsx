"use client";

import React, { useState, useRef, useCallback } from "react";
import { 
  FileText, 
  CreditCard, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Konsultasi & Blueprint",
      tagline: "Riset Kebutuhan & Penawaran Solusi",
      description:
        "Diskusikan ide, target market, dan fitur yang Anda butuhkan. Tim kami memberikan saran struktur halaman, referensi desain, dan estimasi biaya transparan.",
      accent: "pink",
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
      accent: "pink",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Review & Revisi",
      tagline: "Penyempurnaan Tanpa Rasa Khawatir",
      description:
        "Anda mendapatkan link preview untuk memeriksa seluruh tampilan dan fitur. Kami akan melakukan revisi sesuai feedback Anda hingga hasil maksimal.",
      accent: "cyan",
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

  const totalSteps = steps.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Touch & Drag Gesture Handling for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  return (
    <section id="alur-kerja" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent dark:from-transparent dark:via-[#0e0918]/60 dark:to-transparent">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-[#0e0918] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Alur Kerja Transparan & Terpercaya</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            5 Langkah Mudah Memiliki <br />
            <span className="text-pink-glow">Website Profesional Idaman</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Proses terstruktur dengan SOP jelas untuk memastikan proyek selesai tepat waktu dan sesuai ekspektasi bisnis Anda.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. MOBILE ONLY: 3D Futuristic Swipe Coverflow Carousel (< md) */}
        {/* ============================================================== */}
        <div className="block md:hidden">
          <div 
            ref={carouselRef}
            className="relative w-full py-6 overflow-visible cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: "1400px" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Holographic Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-pink-500/20 via-cyan-500/15 to-purple-500/20 blur-3xl pointer-events-none -z-10" />

            {/* Floating Neon Chevrons */}
            <button
              onClick={prevSlide}
              aria-label="Previous Step"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl flex items-center justify-center hover:text-pink-600 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Step"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 dark:bg-[#120822]/90 backdrop-blur-md border border-slate-200 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-xl flex items-center justify-center hover:text-pink-600 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 3D Cards Wrapper */}
            <div className="relative min-h-[380px] flex items-center justify-center">
              {steps.map((step, index) => {
                const offset = index - activeIndex;
                const isCenter = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;
                const isFarLeft = offset < -1;
                const isFarRight = offset > 1;

                let transformStyle = "";
                let opacity = 0;
                let zIndex = 10;
                let pointerEvents: "auto" | "none" = "none";
                let filter = "none";

                if (isCenter) {
                  transformStyle = `translateX(${dragOffset}px) translateZ(0px) rotateY(0deg) scale(1)`;
                  opacity = 1;
                  zIndex = 30;
                  pointerEvents = "auto";
                  filter = "none";
                } else if (isPrev) {
                  transformStyle = `translateX(calc(-72% + ${dragOffset * 0.4}px)) translateZ(-70px) rotateY(24deg) scale(0.86)`;
                  opacity = 0.6;
                  zIndex = 20;
                  pointerEvents = "auto";
                  filter = "blur(0.4px)";
                } else if (isNext) {
                  transformStyle = `translateX(calc(72% + ${dragOffset * 0.4}px)) translateZ(-70px) rotateY(-24deg) scale(0.86)`;
                  opacity = 0.6;
                  zIndex = 20;
                  pointerEvents = "auto";
                  filter = "blur(0.4px)";
                } else if (isFarLeft) {
                  transformStyle = `translateX(calc(-130% + ${dragOffset * 0.2}px)) translateZ(-140px) rotateY(38deg) scale(0.72)`;
                  opacity = 0.15;
                  zIndex = 10;
                  pointerEvents = "none";
                  filter = "blur(1.5px)";
                } else if (isFarRight) {
                  transformStyle = `translateX(calc(130% + ${dragOffset * 0.2}px)) translateZ(-140px) rotateY(-38deg) scale(0.72)`;
                  opacity = 0.15;
                  zIndex = 10;
                  pointerEvents = "none";
                  filter = "blur(1.5px)";
                }

                const Icon = step.icon;
                const isGold = step.accent === "gold";

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (!isCenter) goToSlide(index);
                    }}
                    className={`absolute top-0 w-[88%] max-w-[340px] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ease-out shadow-xl ${
                      isCenter
                        ? "bg-white dark:bg-[#150b26] border-2 border-pink-500 shadow-pink-500/20 dark:shadow-[0_0_35px_rgba(255,0,127,0.35)] holo-corners ring-4 ring-pink-500/15"
                        : "bg-white/85 dark:bg-[#0c0618]/85 border border-slate-300 dark:border-slate-850 cursor-pointer"
                    }`}
                    style={{
                      transform: transformStyle,
                      opacity: opacity,
                      zIndex: zIndex,
                      pointerEvents: pointerEvents,
                      filter: filter,
                      transformStyle: "preserve-3d",
                      transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, filter 0.4s ease",
                    }}
                  >
                    {/* Step Number Watermark */}
                    <span className="absolute top-3 right-4 font-heading font-black text-4xl text-slate-200 dark:text-slate-800 pointer-events-none">
                      {step.number}
                    </span>

                    <div>
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm ${
                          isGold
                            ? "bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-400"
                            : "bg-pink-100 dark:bg-pink-950/60 border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[11px] font-bold text-pink-700 dark:text-pink-400 uppercase tracking-wider block mb-1">
                        {step.tagline}
                      </span>

                      <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                      <span>Tahap {index + 1} dari 5</span>
                      <ArrowRight className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Slide Dots */}
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {steps.map((s, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to Step ${s.number}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-gradient-to-r from-pink-500 to-rose-500 shadow-md shadow-pink-500/40 dark:shadow-[0_0_12px_#ff007f]"
                          : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-pink-400"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. PC / DESKTOP BROWSER: Standard Grid Layout (>= md)          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isGold = step.accent === "gold";

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-500/60 flex flex-col justify-between relative group transition-all duration-300 shadow-xl dark:shadow-2xl holo-corners"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-3 right-4 font-heading font-black text-4xl text-slate-200 dark:text-slate-800 group-hover:text-pink-500/25 transition-colors pointer-events-none">
                  {step.number}
                </span>

                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm ${
                      isGold
                        ? "bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-400 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white"
                        : "bg-pink-100 dark:bg-pink-950/60 border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-600 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-pink-700 dark:text-pink-400 uppercase tracking-wider block mb-1">
                    {step.tagline}
                  </span>

                  <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                  <span>Tahap {idx + 1} dari 5</span>
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href={createWhatsAppLink(getGeneralConsultationMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-extrabold text-sm sm:text-base bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white shadow-[0_0_25px_rgba(255,0,127,0.5)] hover:brightness-110 active:scale-95 transition-all"
          >
            <Users className="w-5 h-5 text-white" />
            <span>Mulai Konsultasi Gratis Tahap 1 Sekarang</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
