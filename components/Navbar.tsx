"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Send, Menu, X, ChevronRight, PhoneCall } from "lucide-react";
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
    { name: "Beranda", href: "#", icon: Home, active: true },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  const waUrl = createWhatsAppLink(getGeneralConsultationMessage());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07040d]/90 backdrop-blur-2xl border-b border-pink-500/20 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo on left (shows smoothly when scrolled) */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-2 group shrink-0 transition-all duration-300 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none w-0 -mr-4 lg:opacity-100 lg:pointer-events-auto lg:w-auto lg:mr-0"
            }`}
          >
            <img
              src="/logo.png"
              alt="RIDEV Logo"
              className="h-9 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,127,0.5)] group-hover:scale-105 transition-transform"
            />
            <span className="font-heading font-black text-lg tracking-wider text-white hidden sm:inline">
              RIDEV
            </span>
          </Link>
        </div>

        {/* Centered Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0f081d]/80 border border-pink-500/25 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            if (link.active) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-pink-400 bg-pink-500/15 border border-pink-500/30 rounded-full flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(255,0,127,0.25)]"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-pink-400" />}
                  <span>{link.name}</span>
                </Link>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-pink-500/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Hubungi Kami */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff007f] to-[#ff0055] hover:brightness-110 shadow-[0_0_20px_rgba(255,0,127,0.45)] transition-all active:scale-95 flex items-center gap-1.5 group"
          >
            <Send className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Hubungi Kami</span>
          </a>
        </div>

        {/* Mobile Actions: WA + Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-pink-950/80 text-pink-300 border border-pink-500/40 text-xs font-bold flex items-center gap-1 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hubungi</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#120d1c] border border-pink-500/40 text-pink-400 hover:bg-pink-500/20 focus:outline-none shadow-sm"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0814]/98 backdrop-blur-2xl border-b border-pink-500/30 px-6 py-5 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  link.active
                    ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                    : "text-slate-300 hover:bg-pink-500/10 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#ff0055] text-white font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,127,0.35)] text-xs"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
