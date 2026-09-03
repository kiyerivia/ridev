"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, PhoneCall } from "lucide-react";
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
    "Halo, mau tanya harga pembuatan website.",
    "Halo, mau konsultasi pembuatan aplikasi mobile.",
    "Halo, saya butuh website landing page cepat.",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-rivia-navy border border-cyan-500/40 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  💬
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-rivia-dark absolute bottom-0 right-0 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-rivia-dark absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm">CS RIDEV (Rivia Developer)</h4>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  Online • Siap Membantu Anda
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/80 space-y-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-200 leading-relaxed max-w-[85%]">
              <p>
                Halo! Ada yang bisa kami bantu seputar pembuatan website atau aplikasi untuk bisnis Anda? 👋
              </p>
              <span className="text-[9px] text-slate-500 block text-right mt-1">Sekarang</span>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Pilih pesan cepat:
              </span>
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCustomText(msg)}
                  className="w-full text-left text-xs bg-slate-900/60 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-xl transition-colors truncate"
                >
                  &ldquo;{msg}&rdquo;
                </button>
              ))}
            </div>

            {/* Form input */}
            <form onSubmit={handleSendMessage} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Tulis pesan Anda..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors shrink-0"
                title="Kirim ke WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="bg-slate-900 px-4 py-2 text-center text-[10px] text-slate-400 border-t border-slate-800">
            WhatsApp Resmi: <strong>+62 8222-68-000-63</strong>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat WhatsApp"
      >
        <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-40"></span>
        <div className="relative flex items-center justify-center">
          {open ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7 fill-slate-950" />}
        </div>
        
        {/* Floating Tooltip Pill */}
        {!open && (
          <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-rivia-dark/95 border border-cyan-500/40 text-cyan-300 text-xs font-bold whitespace-nowrap shadow-xl">
            💬 Konsultasi 24 Jam
          </span>
        )}
      </button>
    </div>
  );
}
