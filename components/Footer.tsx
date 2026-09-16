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
  Code2,
  CheckCircle2
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cities = [
    "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Bali", "Yogyakarta", "Tangerang", "Bekasi", "Depok", "Palembang"
  ];

  return (
    <footer className="bg-slate-900 dark:bg-[#050308] border-t-2 border-pink-500/30 pt-16 pb-12 relative overflow-hidden text-slate-300 dark:text-slate-400 text-xs">
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(255,0,127,0.35)] border-2 border-pink-500/60 bg-[#0d0814] p-0.5 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="RIDEV Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-black text-lg text-white">RI</span>
                  <span className="font-heading font-black text-lg text-[#ff007f]">DEV</span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-pink-400 font-bold -mt-1">
                  Rivia Developer • Studio
                </span>
              </div>
            </Link>

            <p className="text-slate-300 dark:text-slate-300 leading-relaxed text-xs">
              Software House & Jasa Pembuatan Website Profesional. Menghadirkan solusi website dan aplikasi berstandar tinggi, aman, mobile friendly, dan terbukti meningkatkan kredibilitas serta omset bisnis Anda.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 text-[10px] font-bold">
                ✓ Garansi Full Support
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-bold">
                ✓ Free Domain & SSL
              </span>
            </div>
          </div>

          {/* Col 2: Services Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-pink-400 uppercase tracking-wider">
              Pilihan Paket Website
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Paket Silver (Rp 699rb)", desc: "Starter & Landing Page" },
                { name: "Paket Gold (Rp 1.59jt) ⭐", desc: "UMKM & Company Profile" },
                { name: "Paket Diamond (Rp 2.49jt)", desc: "Toko Online & E-Commerce" },
                { name: "Paket Platinum (Custom)", desc: "Enterprise & Custom Web App" },
                { name: "Feature Package Lengkap", desc: "6 Pilar Fasilitas Utama" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#harga"
                    className="hover:text-pink-400 transition-colors flex items-center justify-between text-slate-200 dark:text-slate-300 group"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-pink-500">›</span> {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-pink-400 uppercase tracking-wider">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#fasilitas" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  Fasilitas Lengkap
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  Paket & Harga
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  Kalkulator Biaya
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  Portofolio Klien
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  Alur & SOP Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300">
                  FAQ Tanya Jawab
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-pink-400 uppercase tracking-wider">
              Kontak & Bantuan
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={createWhatsAppLink(getGeneralConsultationMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-emerald-300 transition-colors text-slate-200 dark:text-slate-300"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">+62 8222-68-000-63</span>
                  <span className="text-[10px] text-slate-400">WhatsApp 24/7 Fast Response</span>
                </div>
              </a>

              <a
                href="mailto:kiyerivia@gmail.com"
                className="flex items-start gap-2.5 hover:text-pink-400 transition-colors text-slate-200 dark:text-slate-300"
              >
                <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
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

        {/* Coverage Cities List (ATM EDA SEO targeting) */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span className="font-bold text-slate-300">Jasa Pembuatan Website Area:</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1 text-slate-400">
            {cities.map((city, idx) => (
              <span key={idx} className="hover:text-pink-400 transition-colors">
                Website {city} {idx < cities.length - 1 ? "•" : ""}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">RIDEV (Rivia Developer)</strong>. All rights reserved. Member of Professional Developer Network.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 dark:bg-[#0f0a18] border border-pink-500/30 hover:border-pink-500 text-pink-400 hover:text-white transition-all flex items-center gap-1.5 text-[11px] font-bold shadow-lg cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
