"use client";

import React from "react";
import { Star, Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { DEFAULT_TESTIMONIALS } from "@/lib/supabase";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent dark:from-transparent dark:via-[#0d0918]/60 dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-[#0e0918] border border-pink-300 dark:border-pink-500/40 text-pink-700 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <MessageSquareHeart className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Kepuasan Klien Prioritas Kami</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Apa Kata Klien Tentang <br />
            <span className="text-pink-glow">Layanan RIDEV (Rivia Developer)?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Kepercayaan ratusan pemilik bisnis, instansi, dan UMKM adalah bukti nyata kualitas pengerjaan dan komitmen kami.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEFAULT_TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="glass-card rounded-2xl p-7 border border-slate-200 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-500/60 flex flex-col justify-between relative group transition-all duration-300 shadow-xl dark:shadow-2xl holo-corners"
            >
              <Quote className="w-10 h-10 text-pink-500/15 group-hover:text-pink-500/30 transition-colors absolute top-5 right-5" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic font-normal">
                  &ldquo;{testi.review_text}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
                <img
                  src={testi.avatar_url}
                  alt={testi.client_name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/50 shadow-[0_0_10px_rgba(255,0,127,0.3)]"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{testi.client_name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {testi.client_role}, {testi.company}
                  </p>
                  <span className="text-[10px] text-pink-600 dark:text-pink-400 font-semibold block mt-0.5">
                    Proyek: {testi.project_name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section Integrated */}
        <div id="faq" className="mt-24 pt-16 border-t border-slate-200 dark:border-pink-500/20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              Jawaban cepat seputar proses, biaya, dan garansi pembuatan website di RIDEV (Rivia Developer).
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Berapa lama proses pembuatan website?",
                a: "Untuk Paket Promo/Landing Page membutuhkan waktu 2 - 4 hari kerja. Paket Standar UMKM membutuhkan 5 - 7 hari kerja, sedangkan Paket E-Commerce/Custom Aplikasi berkisar 10 - 20 hari kerja tergantung kompleksitas fitur.",
              },
              {
                q: "Apakah saya bisa mengelola website sendiri setelah selesai?",
                a: "Ya, tentu saja! Kami menyediakan Dashboard Admin (CMS) yang ramah pengguna sehingga Anda bisa mengubah teks, upload produk, atau menambah foto dengan mudah. Kami juga menyertakan video tutorial panduan lengkap.",
              },
              {
                q: "Bagaimana sistem pembayarannya?",
                a: "Sistem pembayaran sangat fleksibel dan aman: DP 50% di awal sebagai tanda jadi dimulainya pengerjaan, dan pelunasan 50% sisanya dibayarkan setelah website selesai dan Anda puas dengan hasilnya.",
              },
              {
                q: "Bagaimana jika ada error atau kendala setelah website online?",
                a: "Semua paket di RIDEV (Rivia Developer) bergaransi penuh 1 tahun! Jika website mengalami error atau bug teknis, tim developer kami siap memperbaiki 24/7 secara gratis melalui WhatsApp.",
              },
              {
                q: "Apakah sudah termasuk domain dan hosting?",
                a: "Ya, untuk Paket Standar, Bisnis Pro, dan Custom sudah GRATIS domain kustom (.com / .id) serta high-speed cloud hosting selama 1 tahun pertama.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="glass-card rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-pink-500/25 group open:border-pink-400 dark:group-open:border-pink-500/60 transition-colors shadow-lg"
              >
                <summary className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <span className="text-pink-600 dark:text-pink-400 text-lg transition-transform group-open:rotate-45 font-bold">
                    +
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
