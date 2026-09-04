"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, ChevronLeft, Sparkles, CheckCheck } from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [customText, setCustomText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = customText.trim() || getGeneralConsultationMessage();
    const waUrl = createWhatsAppLink(textToSend);
    window.open(waUrl, "_blank");
    setOpen(false);
  };

  const quickMessages = [
    "Halo RIDEV, mau tanya paket harga website.",
    "Halo, mau konsultasi pembuatan sistem & aplikasi.",
    "Halo, saya butuh website landing page cepat.",
  ];

  return (
    <div className="fixed right-0 bottom-20 sm:bottom-24 z-50 select-none">
      {/* 🌟 Peeking Button State (Mengintip dari Sisi Kanan) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2.5 py-3 px-3.5 sm:px-4 rounded-l-2xl bg-gradient-to-l from-[#ff0038] via-[#ff0055] to-[#ff007f] text-white shadow-[-6px_4px_25px_rgba(255,0,127,0.55)] border-y-2 border-l-2 border-r-0 border-pink-400/60 hover:-translate-x-2 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
          aria-label="Buka Chat Konsultasi WhatsApp"
        >
          {/* Glowing Ping Aura */}
          <span className="animate-ping absolute inset-0 rounded-l-2xl bg-pink-400 opacity-25"></span>

          {/* Left Indicator Chevron */}
          <ChevronLeft className="w-4 h-4 text-pink-200 group-hover:-translate-x-1 transition-transform shrink-0" />

          {/* Chat Icon & Online Indicator */}
          <div className="relative shrink-0">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-inner group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#ff0055] absolute -top-1 -right-1 animate-pulse" />
          </div>

          {/* Peeking Label (Hidden on ultra-narrow screens, visible on normal) */}
          <div className="flex flex-col text-left pr-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-pink-200 flex items-center gap-1 leading-none mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Konsultasi
            </span>
            <span className="font-heading font-black text-xs sm:text-sm text-white tracking-wide leading-none">
              Chat CS
            </span>
          </div>
        </button>
      )}

      {/* 🌟 Expanded Chat Box (Muncul Saat Tombol Diklik) */}
      {open && (
        <div className="mr-4 sm:mr-6 mb-2 w-[calc(100vw-2rem)] sm:w-96 rounded-3xl bg-[#0e091a]/98 backdrop-blur-2xl border-2 border-pink-500/50 shadow-[-10px_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(255,0,127,0.3)] overflow-hidden animate-in slide-in-from-right-8 duration-300 holo-corners">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-lg shadow-inner">
                  💬
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0e091a] absolute bottom-0 right-0 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0e091a] absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm text-white">CS RIDEV (Rivia Developer)</h4>
                <span className="text-[11px] text-pink-100 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online • Siap Membantu 24/7
                </span>
              </div>
            </div>
            
            {/* Close / Minimize Button */}
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/25 text-white/90 hover:text-white transition-colors"
              title="Tutup / Sembunyikan Chat"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 bg-[#090610] space-y-3.5">
            {/* Incoming Greeting Bubble */}
            <div className="bg-[#140c22] border border-pink-500/20 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-200 leading-relaxed max-w-[90%] shadow-md">
              <div className="flex items-center gap-1.5 text-pink-400 font-bold text-[10px] uppercase mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Customer Support</span>
              </div>
              <p>
                Halo! Senang bertemu Anda. Ada yang bisa kami bantu seputar pembuatan website atau aplikasi untuk bisnis Anda? 👋
              </p>
              <span className="text-[9px] text-slate-400 flex items-center justify-end gap-1 mt-1.5">
                Baru saja <CheckCheck className="w-3 h-3 text-pink-400" />
              </span>
            </div>

            {/* Quick Messages Options */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider block">
                Pilih topik cepat:
              </span>
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCustomText(msg)}
                  className="w-full text-left text-xs bg-[#140c22] hover:bg-pink-500/20 border border-slate-800 hover:border-pink-500/40 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl transition-all truncate shadow-sm font-normal active:scale-[0.98]"
                >
                  &ldquo;{msg}&rdquo;
                </button>
              ))}
            </div>

            {/* Form Input to WhatsApp */}
            <form onSubmit={handleSendMessage} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ketik pertanyaan Anda..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                autoFocus
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#140c22] border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 shadow-sm"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white font-bold transition-all hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(255,0,127,0.4)] shrink-0 flex items-center justify-center"
                title="Kirim Pesan ke WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Footer Sub-info */}
          <div className="bg-[#0b0614] px-4 py-2 text-center text-[10px] text-slate-400 border-t border-slate-800/80 font-normal">
            WhatsApp Resmi RIDEV: <strong className="text-white">+62 8222-68-000-63</strong>
          </div>
        </div>
      )}
    </div>
  );
}
