"use client";

import React, { useState } from "react";
import { 
  Send, 
  Sparkles, 
  CheckCircle, 
  Phone, 
  Mail, 
  User, 
  Layers, 
  DollarSign, 
  MessageSquare,
  ShieldCheck,
  Zap
} from "lucide-react";
import { submitLead } from "@/lib/supabase";
import { createWhatsAppLink } from "@/lib/whatsapp";
import confetti from "canvas-confetti";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone_or_wa: "",
    email: "",
    project_type: "Company Profile Bisnis",
    estimated_budget: "Rp 1.000.000 - Rp 3.000.000",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectOptions = [
    "Landing Page Ads / Minisite",
    "Company Profile Bisnis / UMKM",
    "Toko Online / E-Commerce",
    "LMS & Portal Pendidikan / Sekolah",
    "Portofolio & Personal Branding",
    "Custom Web Application / ERP / CRM",
    "Aplikasi Mobile (Android & iOS)",
    "Redesign & Optimasi SEO Website Lama",
  ];

  const budgetOptions = [
    "< Rp 1.000.000 (Paket Promo/Minisite)",
    "Rp 1.000.000 - Rp 2.500.000 (Standar UMKM)",
    "Rp 2.500.000 - Rp 5.000.000 (Bisnis Pro / E-Commerce)",
    "> Rp 5.000.000 (Custom Enterprise / Mobile App)",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone_or_wa) {
      alert("Mohon isi Nama dan Nomor WhatsApp Anda.");
      return;
    }

    setLoading(true);

    try {
      // 1. Submit lead to Supabase / Local Storage
      await submitLead({
        name: formData.name,
        phone_or_wa: formData.phone_or_wa,
        email: formData.email,
        project_type: formData.project_type,
        estimated_budget: formData.estimated_budget,
        notes: formData.notes,
        status: "new",
      });

      // 2. Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Confetti fallback
      }

      setSubmitted(true);

      // 3. Format WhatsApp Message
      const waText = `Halo RIDEV (Rivia Developer), saya telah mengisi formulir konsultasi website/aplikasi:

👤 *Nama:* ${formData.name}
📱 *WhatsApp:* ${formData.phone_or_wa}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ""}🚀 *Jenis Proyek:* ${formData.project_type}
💰 *Estimasi Budget:* ${formData.estimated_budget}
📝 *Kebutuhan/Catatan:* ${formData.notes || "Konsultasi awal"}

Mohon informasi langkah selanjutnya dan penawaran terbaiknya. Terima kasih!`;

      // Open WhatsApp automatically
      const waLink = createWhatsAppLink(waText);
      setTimeout(() => {
        window.open(waLink, "_blank");
      }, 700);

    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0e0918]/70 to-transparent">
      {/* Background Decorators */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0918] border border-pink-500/40 text-pink-400 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,127,0.2)]">
              <Zap className="w-3.5 h-3.5 text-pink-400" />
              <span>Free Consultation & Quotation</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Siap Memulai Proyek <br />
              <span className="text-pink-glow">Digital Anda?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Kirimkan detail ide atau kebutuhan website Anda. Tim RIDEV (Rivia Developer) akan segera menghubungi Anda dengan rancangan solusi terbaik dan penawaran harga spesial!
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-4">
              <a
                href={createWhatsAppLink("Halo RIDEV (Rivia Developer), saya ingin bertanya langsung mengenai layanan pembuatan website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-4 group transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
                    WhatsApp & Telepon Resmi:
                  </span>
                  <strong className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +62 8222-68-000-63
                  </strong>
                  <span className="text-[10px] text-emerald-400 block font-semibold">Online 24 Jam Fast Response</span>
                </div>
              </a>

              <a
                href="mailto:kiyerivia@gmail.com"
                className="glass-card p-4 rounded-xl border border-pink-500/30 hover:border-pink-500/60 flex items-center gap-4 group transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-950/60 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
                    Email Bisnis & Kerjasama:
                  </span>
                  <strong className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                    kiyerivia@gmail.com
                  </strong>
                  <span className="text-[10px] text-slate-400 block font-normal">Kirimkan brief / dokumen RFQ</span>
                </div>
              </a>
            </div>

            {/* Inclusions summary */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-normal">
              <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
              <span>Data & ide proyek Anda dijamin 100% aman dan rahasia (Non-Disclosure).</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form (Supabase Connected) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pink-500/30 shadow-2xl relative holo-corners">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Terima Kasih, Data Berhasil Dikirim!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-normal">
                    Data Anda telah tercatat di sistem kami dan kami sedang mengarahkan Anda langsung ke WhatsApp CS RIDEV (Rivia Developer).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-pink-950/60 hover:bg-pink-900 text-xs font-bold text-pink-300 transition-colors border border-pink-500/40"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-pink-500/20 pb-3 mb-4">
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      Formulir Permintaan Konsultasi
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-normal">
                      Isi form berikut, sistem otomatis menghubungkan Anda ke WhatsApp resmi kami.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-pink-400" />
                        Nama Lengkap / Bisnis <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso (PT Maju Bersama)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        Nomor WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.phone_or_wa}
                        onChange={(e) => setFormData({ ...formData, phone_or_wa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-pink-400" />
                      Email (Opsional untuk kirim proposal)
                    </label>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 transition-colors shadow-sm"
                    />
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-pink-400" />
                        Jenis Proyek
                      </label>
                      <select
                        value={formData.project_type}
                        onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors shadow-sm"
                      >
                        {projectOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#0f0a18] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                        Estimasi Budget
                      </label>
                      <select
                        value={formData.estimated_budget}
                        onChange={(e) => setFormData({ ...formData, estimated_budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors shadow-sm"
                      >
                        {budgetOptions.map((b, i) => (
                          <option key={i} value={b} className="bg-[#0f0a18] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Project Details */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
                      Ceritakan Kebutuhan / Referensi Website Anda
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Saya ingin buat website toko fashion seperti Zalora dengan fitur cek ongkir otomatis dan notifikasi WA..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0a18] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 transition-colors resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl font-heading font-extrabold text-sm sm:text-base bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,0,127,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Menghubungkan ke Sistem...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Kirim & Hubungkan ke WhatsApp CS RIDEV (Rivia Developer)</span>
                        </>
                      )}
                    </button>
                    <span className="text-[10px] text-center text-slate-400 block mt-2.5 font-normal">
                      🔒 Data terenkripsi dan otomatis tersimpan di database Supabase kami.
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
