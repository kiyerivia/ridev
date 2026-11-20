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
          ? "glass-navbar py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official RIDEV Emblem */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src="/logo.png"
            alt="RIDEV Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,0,127,0.5)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-wider text-slate-900 dark:text-white">
                RI
              </span>
              <span className="font-heading font-black text-xl sm:text-2xl tracking-wider text-[#ff007f]">
                DEV
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse ml-1"></span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400 font-bold mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              RIVIA DEVELOPER • STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Liquid Glass Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-3.5 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Action: Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile Actions: Theme + WA + Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle compact />
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-pill text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WA</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-pill text-pink-600 dark:text-pink-400 hover:scale-105 focus:outline-none transition-transform"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Liquid Glass Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 rounded-3xl glass-surface px-5 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/10 hover:text-pink-600 dark:hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
              </Link>
            ))}

            <div className="pt-4 mt-1 border-t border-white/40 dark:border-white/10 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl glass-btn-primary text-white font-bold text-center flex items-center justify-center gap-2 text-xs"
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
