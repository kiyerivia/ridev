"use client";

import React from "react";
import { 
  Globe2, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Sparkles, 
  PenTool, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Server,
  Lock,
  Cpu
} from "lucide-react";
import { createWhatsAppLink, getGeneralConsultationMessage } from "@/lib/whatsapp";

interface FeatureCard {
  icon: any;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  gradient: string;
  iconColor: string;
  borderColor: string;
}

export default function FeaturePackage() {
  const waUrl = createWhatsAppLink(
    getGeneralConsultationMessage("Feature Package & Fasilitas Lengkap Website RIDEV")
  );

  const features: FeatureCard[] = [
    {
      icon: Globe2,
      title: "Gratis Domain & Cloud Hosting",
      subtitle: "All-in-One Siap Online",
      badge: "Free 1 Tahun",
      description:
        "Website langsung aktif dan siap pakai tanpa perlu repot membeli domain dan server secara terpisah. Menggunakan server cloud high-speed dengan uptime 99.9%.",
      highlights: [
        "Domain kustom pilihan (.com / .id / .co.id / .my.id)",
        "Cloud Hosting SSD NVMe High Performance",
        "Bandwidth unlimited & anti lelet",
        "Free setup DNS & konfigurasi server",
      ],
      gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      iconColor: "text-pink-400",
      borderColor: "group-hover:border-pink-500/60",
    },
    {
      icon: ShieldCheck,
      title: "Sertifikat Keamanan SSL Gratis",
      subtitle: "Proteksi Enkripsi HTTPS",
      badge: "Security Grade A+",
      description:
        "Memberikan rasa aman maksimal bagi pengunjung dengan protokol enkripsi SSL 256-bit standar industri. Menghindari peringatan 'Not Secure' pada browser.",
      highlights: [
        "Gembok hijau aman (HTTPS) di semua browser",
        "Enkripsi data formulir & transaksi",
        "Perlindungan dari ancaman serangan spam / malware",
        "Meningkatkan skor kepercayaan Google SEO",
      ],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/60",
    },
    {
      icon: Smartphone,
      title: "Desain 100% Responsif & Mobile-First",
      subtitle: "Multi-Device Perfection",
      badge: "Ultra Adaptive",
      description:
        "Tampilan website otomatis menyesuaikan secara sempurna di layar smartphone, tablet, laptop, hingga monitor ultra-wide desktop.",
      highlights: [
        "Navigasi mobile yang intuitif & nyaman",
        "Touch-friendly button & interaksi lancar",
        "Kompresi layout adaptif tanpa elemen terpotong",
        "Cross-browser testing (Chrome, Safari, Edge, Firefox)",
      ],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      iconColor: "text-cyan-400",
      borderColor: "group-hover:border-cyan-500/60",
    },
    {
      icon: Search,
      title: "Optimasi SEO Google On-Page",
      subtitle: "Mudah Ditemukan di Google",
      badge: "Google Index Ready",
      description:
        "Struktur website dirancang mengikuti pedoman resmi Google Search Console untuk memaksimalkan peluang tampil di halaman pertama hasil pencarian.",
      highlights: [
        "Struktur Heading (H1, H2, H3) & Meta Tags rapi",
        "Integrasi Sitemap XML & Robots.txt otomatis",
        "Optimasi Google Core Web Vitals (Speed Score tinggi)",
        "Schema Markup JSON-LD untuk rich snippets",
      ],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-400",
      borderColor: "group-hover:border-amber-500/60",
    },
    {
      icon: Sparkles,
      title: "Desain Modern & Eksklusif",
      subtitle: "UI/UX Standar Internasional",
      badge: "Bukan Template Pasaran",
      description:
        "Setiap layout dirancang khusus sesuai identitas visual dan brand value bisnis Anda, memberikan kesan prestisius dan kredibel di mata calon klien.",
      highlights: [
        "Estetika visual modern, bersih & profesional",
        "Tipografi harmonis & kontras warna terkalibrasi",
        "Micro-animations halus untuk user experience interaktif",
        "Didesain fokus pada konversi penjualan (CRO)",
      ],
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/60",
    },
    {
      icon: PenTool,
      title: "Layanan Copywriting & Pengisian Konten",
      subtitle: "Konten Menjual Siap Saji",
      badge: "High Conversion Copy",
      description:
        "Tidak punya waktu membuat teks promosi? Tim kami membantu menyusun copywriting persuasif dan menginputkan teks, foto produk, serta kontak awal Anda.",
      highlights: [
        "Penyusunan headline & call-to-action memikat",
        "Input gambar, portofolio, & profil lengkap",
        "Integrasi nomor WhatsApp & maps perusahaan",
        "Panduan & video tutorial kelola konten mandiri",
      ],
      gradient: "from-rose-500/20 via-red-500/10 to-transparent",
      iconColor: "text-rose-400",
      borderColor: "group-hover:border-rose-500/60",
    },
  ];

  return (
    <section id="fasilitas" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#07070a] via-[#0d0818]/80 to-[#07070a]">
      {/* Laser Glow Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120a22] border border-pink-500/40 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(255,0,127,0.25)]">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span>Our Feature Package • Apa yang Anda Dapatkan?</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            6 Fasilitas Unggulan <br />
            <span className="text-pink-glow">Dalam Setiap Website RIDEV</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Kami memastikan Anda menerima website yang sudah <strong className="text-white font-semibold">100% siap pakai</strong> tanpa biaya tersembunyi. Dari domain, hosting, keamanan, hingga optimasi mesin pencari Google.
          </p>
        </div>

        {/* 6 Feature Deliverables Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-7 bg-[#0f091a]/90 backdrop-blur-xl border border-slate-800/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${item.borderColor} flex flex-col justify-between overflow-hidden`}
              >
                {/* Internal Card Gradient Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                {/* Top: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-[#160d26] border border-slate-700/60 p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${item.iconColor}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Feature List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#150a26] via-[#1f0d36] to-[#150a26] border border-pink-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-500/50 flex items-center justify-center shrink-0 hidden sm:flex">
              <Server className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                Butuh Fasilitas Khusus atau Kustomisasi Tambahan?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Tim developer RIDEV siap menyesuaikan kebutuhan fitur spesifik (Payment Gateway, Webhook API, Sistem Login, dll).
              </p>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,0,127,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <span>Konsultasikan Kebutuhan Anda</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
