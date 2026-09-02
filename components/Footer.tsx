"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Heart,
  ExternalLink,
  Code2
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 pt-16 pb-12 relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-pink-500/20 border border-pink-500/30 bg-slate-950 p-0.5 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="RIDEV Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-black text-lg text-white">RI</span>
                  <span className="font-heading font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">DEV</span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.18em] text-cyan-400 font-bold -mt-1">
                  Rivia Developer • Studio
                </span>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs">
              Software House & Jasa Pembuatan Website Profesional. Kami berkomitmen menghadirkan produk digital berkualitas tinggi, estetik, bergaransi, dan siap mendongkrak omset bisnis Anda.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold">
                ✓ Bergaransi 1 Tahun
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950 border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                ✓ Full Support 24/7
              </span>
            </div>
          </div>

          {/* Col 2: Services Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-cyan-400">
              Layanan Utama
            </h4>
            <ul className="space-y-2">
              {[
                "Landing Page Ads & Minisite",
                "Company Profile Bisnis & UMKM",
                "Toko Online / E-Commerce",
                "Portal Pendidikan & LMS",
                "Portofolio & Personal Branding",
                "Custom Web App & Sistem ERP",
                "Aplikasi Mobile (Android & iOS)",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#layanan"
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-cyan-400">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#kalkulator" className="hover:text-cyan-300 transition-colors">
                  Kalkulator Biaya
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-cyan-300 transition-colors">
                  Paket & Harga
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-cyan-300 transition-colors">
                  Portofolio Klien
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-cyan-300 transition-colors">
                  Alur & SOP Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  FAQ Tanya Jawab
                </a>
              </li>
              <li>
                <Link href="/admin" className="text-amber-400 hover:underline flex items-center gap-1 font-semibold">
                  <Code2 className="w-3.5 h-3.5" />
                  Admin Inbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-cyan-400">
              Kontak & Bantuan
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={createWhatsAppLink(getGeneralConsultationMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">+62 8222-68-000-63</span>
                  <span className="text-[10px] text-slate-400">WhatsApp 24/7 Fast Response</span>
                </div>
              </a>

              <a
                href="mailto:kiyerivia@gmail.com"
                className="flex items-start gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">kiyerivia@gmail.com</span>
                  <span className="text-[10px] text-slate-400">Konsultasi & Penawaran Proyek</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Indonesia • Melayani Klien Seluruh Indonesia & Internasional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">RIDEV (Rivia Developer)</strong>. All rights reserved. Member of Professional Developer Network.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-white transition-all flex items-center gap-1.5 text-[11px] font-bold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
