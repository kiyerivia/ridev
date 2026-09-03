"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Menu, X, Sparkles, ChevronRight, PhoneCall, Code2 } from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

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
    { name: "Layanan", href: "#layanan" },
    { name: "Kalkulator Biaya", href: "#kalkulator" },
    { name: "Paket Harga", href: "#harga" },
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
          ? "bg-rivia-dark/85 backdrop-blur-xl border-b border-cyan-500/20 py-3.5 shadow-2xl shadow-cyan-950/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Custom Uploaded Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300 border border-pink-500/30 bg-slate-950/90 p-0.5 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="RIDEV Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                RI
              </span>
              <span className="font-heading font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
                DEV
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.18em] text-cyan-400 font-bold -mt-1">
              Rivia Developer • Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-rivia-deep/60 border border-cyan-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-semibold text-sm group bg-gradient-to-br from-cyan-400 via-blue-600 to-amber-400 group-hover:from-cyan-400 group-hover:to-amber-300 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-rivia-dark rounded-full group-hover:bg-opacity-0 flex items-center gap-2 text-white group-hover:text-black font-bold">
              <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:text-black transition-colors" />
              <span>Konsultasi Gratis</span>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WA</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-rivia-deep border border-cyan-500/30 text-cyan-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-rivia-navy/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-cyan-500/15 hover:text-cyan-300 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                <MessageSquare className="w-5 h-5 text-slate-950" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
