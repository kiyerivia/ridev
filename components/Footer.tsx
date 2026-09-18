"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageCircle, 
  Send,
  Globe2,
  Sparkles
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waUrl = createWhatsAppLink(getGeneralConsultationMessage());

  const cities = [
    "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Bali", "Yogyakarta", "Tangerang", "Bekasi", "Depok", "Palembang"
  ];

  return (
    <footer className="bg-[#05030a] border-t border-pink-500/25 pt-12 pb-8 relative overflow-hidden text-slate-400 text-xs">
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[120px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-pink-500/15">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="RIDEV Logo"
                className="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,0,127,0.5)] group-hover:scale-105 transition-transform"
              />
              <span className="font-heading font-black text-lg tracking-wider text-white">
                RIDEV
              </span>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs">
              Software House & Jasa Pembuatan Website Profesional. Menghadirkan solusi website dan aplikasi modern, aman, responsif, serta siap meningkatkan omset dan kredibilitas bisnis Anda.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-950/70 border border-pink-500/40 text-pink-300 text-[10px] font-semibold">
                ✓ Full Support 24/7
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-pink-950/70 border border-pink-500/40 text-pink-300 text-[10px] font-semibold">
                ✓ Free Domain & SSL
              </span>
            </div>
          </div>

          {/* Col 2: Services Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs text-pink-400 uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Website Company Profile", href: "#layanan" },
                { name: "Toko Online & E-Commerce", href: "#layanan" },
                { name: "Landing Page Penjualan", href: "#layanan" },
                { name: "Custom Web Application", href: "#layanan" },
                { name: "Desain UI/UX & Redesign", href: "#layanan" },
                { name: "Maintenance & Support", href: "#layanan" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-pink-400 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-pink-500">›</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs text-pink-400 uppercase tracking-wider">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#" },
                { name: "Tentang Kami", href: "#tentang-kami" },
                { name: "Layanan", href: "#layanan" },
                { name: "Portofolio", href: "#portofolio" },
                { name: "Testimoni", href: "#testimoni" },
                { name: "Paket & Harga", href: "#harga" },
                { name: "FAQ", href: "#faq" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-pink-400 transition-colors text-slate-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs text-pink-400 uppercase tracking-wider">
              Hubungi Kami
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-emerald-300 transition-colors text-slate-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">+62 8222-68-000-63</span>
                  <span className="text-[10px] text-slate-400">WhatsApp Fast Response 24/7</span>
                </div>
              </a>

              <a
                href="mailto:kiyerivia@gmail.com"
                className="flex items-start gap-2 hover:text-pink-400 transition-colors text-slate-300"
              >
                <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">kiyerivia@gmail.com</span>
                  <span className="text-[10px] text-slate-400">Konsultasi & Penawaran Proyek</span>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Indonesia • Melayani Klien Seluruh Indonesia & Internasional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Coverage Cities Bar */}
        <div className="py-4 border-b border-pink-500/15 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <span className="font-bold text-slate-300">Jasa Pembuatan Website Area:</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-2.5 gap-y-1 text-slate-400">
            {cities.map((city, idx) => (
              <span key={idx} className="hover:text-pink-400 transition-colors">
                Website {city} {idx < cities.length - 1 ? "•" : ""}
              </span>
            ))}
          </div>
        </div>

        {/* ===================== BOTTOM BRANDING & SOCIAL BAR (MATCHING MOCKUP) ===================== */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Logo + Services tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="RIDEV Logo"
              className="h-7 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]"
            />
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <strong className="text-white font-black tracking-wider">RIDEV</strong>
              <span className="text-slate-500">|</span>
              <span className="text-[11px] text-slate-400">
                RIDEV • Web Design • App Development • Digital Solution
              </span>
            </div>
          </div>

          {/* Center: Slogan Quote */}
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
            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-lg bg-[#0e0717] border border-pink-500/30 hover:border-pink-500 text-pink-400 hover:text-white transition-all text-xs"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
