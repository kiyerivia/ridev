"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Menu, X, Sparkles, ChevronRight, PhoneCall, Code2 } from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Paket Harga", href: "#harga" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Alur Kerja", href: "#alur-kerja" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
  ];

  const waUrl = createWhatsAppLink(getGeneralConsultationMessage());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#07070a]/90 backdrop-blur-2xl border-b border-pink-500/20 dark:border-pink-500/25 py-3 shadow-md dark:shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official RIDEV Emblem & 3D Logo Text */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img
            src="/logo.png"
            alt="RIDEV Logo"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,127,0.5)] group-hover:scale-105 transition-transform"
          />
          <img
            src="/RIDEVLOGO TEXT.PNG"
            alt="RIDEV"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-[#0f0a1a]/80 border border-slate-200/90 dark:border-pink-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-md dark:shadow-black/60">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-white hover:bg-pink-50 dark:hover:bg-pink-500/20 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>



        {/* Mobile Actions: WA + Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40 text-xs font-bold flex items-center gap-1 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WA</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#120d1c] border border-slate-200 dark:border-pink-500/40 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-500/20 focus:outline-none shadow-sm"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0c0814]/98 backdrop-blur-2xl border-b border-pink-500/30 px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-500/15 hover:text-pink-600 dark:hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,127,0.35)] text-xs"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span className="text-white">Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
