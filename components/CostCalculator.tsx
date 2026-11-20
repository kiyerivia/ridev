"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Info, 
  RefreshCw,
  Send
} from "lucide-react";
import { createWhatsAppLink, getCalculatorWhatsAppMessage } from "@/lib/whatsapp";
import { submitLead } from "@/lib/supabase";

interface ProjectOption {
  id: string;
  name: string;
  basePrice: number;
  icon: string;
  defaultPages: number;
  description: string;
}

interface FeatureAddon {
  id: string;
  name: string;
  price: number;
  category: "Fitur & Sistem" | "Integrasi & Payment" | "Marketing & SEO" | "Maintenance";
  description: string;
}

const PROJECT_TYPES: ProjectOption[] = [
  {
    id: "landing-page",
    name: "Landing Page / Minisite",
    basePrice: 499000,
    icon: "⚡",
    defaultPages: 1,
    description: "1 Halaman Fokus Konversi Penjualan & Iklan",
  },
  {
    id: "company-profile",
    name: "Company Profile Bisnis",
    basePrice: 1250000,
    icon: "🏢",
    defaultPages: 5,
    description: "Website Kredibilitas Perusahaan & Portofolio",
  },
  {
    id: "ecommerce",
    name: "Toko Online / E-Commerce",
    basePrice: 2490000,
    icon: "🛍️",
    defaultPages: 8,
    description: "Katalog Produk, Keranjang & Manajemen Stok",
  },
  {
    id: "lms-education",
    name: "LMS / Portal Pendidikan",
    basePrice: 2890000,
    icon: "🎓",
    defaultPages: 10,
    description: "Kursus Online, Video Materi & Ujian/Kuis",
  },
  {
    id: "custom-app",
    name: "Custom Web App / Sistem Bisnis",
    basePrice: 4500000,
    icon: "⚙️",
    defaultPages: 12,
    description: "Sistem Informasi Manajemen, ERP/CRM & Database",
  },
  {
    id: "mobile-app",
    name: "Aplikasi Mobile (Android/iOS)",
    basePrice: 6500000,
    icon: "📱",
    defaultPages: 15,
    description: "Aplikasi Smartphone Modern Siap Play Store",
  },
];

const ADDONS: FeatureAddon[] = [
  {
    id: "auth-users",
    name: "Sistem Akun & Login User (Supabase Auth)",
    price: 450000,
    category: "Fitur & Sistem",
    description: "Registrasi member, lupa password, & profil pengguna.",
  },
  {
    id: "cms-admin",
    name: "Dashboard Admin / CMS Mandiri",
    price: 550000,
    category: "Fitur & Sistem",
    description: "Panel untuk edit teks, upload gambar & artikel tanpa koding.",
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway Otomatis (QRIS, VA, E-Wallet)",
    price: 600000,
    category: "Integrasi & Payment",
    description: "Terima pembayaran instan tanpa cek mutasi manual.",
  },
  {
    id: "rajaongkir-sync",
    name: "Hitung Ongkir Ekspedisi Otomatis (JNE, J&T, SiCepat)",
    price: 350000,
    category: "Integrasi & Payment",
    description: "Kalkulasi tarif kurir real-time ke seluruh Indonesia.",
  },
  {
    id: "seo-booster",
    name: "SEO On-Page Booster & Google Index Express",
    price: 350000,
    category: "Marketing & SEO",
    description: "Optimasi meta tags, sitemap XML, dan schema markup Google.",
  },
  {
    id: "multi-language",
    name: "Fitur Multi-Bahasa (Indonesia & English)",
    price: 400000,
    category: "Fitur & Sistem",
    description: "Pilihan switcher bahasa untuk target pasar global.",
  },
  {
    id: "maintenance-vip",
    name: "Maintenance & Backup Prioritas 1 Tahun",
    price: 500000,
    category: "Maintenance",
    description: "Monitoring performa, backup berkala, dan revisi konten kecil.",
  },
];

export default function CostCalculator() {
  const [selectedProject, setSelectedProject] = useState<ProjectOption>(PROJECT_TYPES[1]); // Company profile default
  const [pagesCount, setPagesCount] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "seo-booster",
    "cms-admin",
  ]);
  const [deliverySpeed, setDeliverySpeed] = useState<"normal" | "express">("normal");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleProjectTypeChange = (project: ProjectOption) => {
    setSelectedProject(project);
    setPagesCount(project.defaultPages);
  };

  const calculatedTotal = useMemo(() => {
    let total = selectedProject.basePrice;

    // Extra pages beyond default: Rp 100.000 / page
    if (pagesCount > selectedProject.defaultPages) {
      total += (pagesCount - selectedProject.defaultPages) * 100000;
    }

    // Add selected features
    selectedAddons.forEach((addonId) => {
      const found = ADDONS.find((a) => a.id === addonId);
      if (found) total += found.price;
    });

    // Express delivery multiplier (+25%)
    if (deliverySpeed === "express") {
      total = Math.round(total * 1.25);
    }

    return total;
  }, [selectedProject, pagesCount, selectedAddons, deliverySpeed]);

  const selectedFeatureNames = useMemo(() => {
    return selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean) as string[];
  }, [selectedAddons]);

  const waOrderLink = useMemo(() => {
    return createWhatsAppLink(
      getCalculatorWhatsAppMessage({
        projectType: selectedProject.name,
        pages: pagesCount,
        selectedFeatures: selectedFeatureNames,
        estimatedTotal: calculatedTotal,
        deliverySpeed: deliverySpeed === "express" ? "Express (Prioritas 3-5 Hari)" : "Standar (7-14 Hari)",
      })
    );
  }, [selectedProject, pagesCount, selectedFeatureNames, calculatedTotal, deliverySpeed]);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName || clientPhone) {
      // Record lead silently to database
      await submitLead({
        name: clientName || "Calon Klien (Kalkulator)",
        phone_or_wa: clientPhone || "-",
        project_type: selectedProject.name,
        package_selected: "Kalkulator Estimasi",
        estimated_budget: formatIDR(calculatedTotal),
        selected_features: selectedFeatureNames,
        notes: `Simulasi: ${pagesCount} Halaman, Kecepatan: ${deliverySpeed}`,
      });
    }
    // Open WhatsApp
    window.open(waOrderLink, "_blank");
  };

  return (
    <section id="kalkulator" className="py-24 relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] bg-gradient-to-b from-pink-500/20 via-violet-500/12 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Hitung Estimasi Biaya <br />
            <span className="text-pink-glow">Proyek Anda Secara Transparan</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Pilih jenis proyek dan fitur yang Anda inginkan. Dapatkan perkiraan biaya instan tanpa biaya tersembunyi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Project Type */}
            <div className="glass-card rounded-3xl p-6 holo-corners">
              <label className="text-sm font-extrabold uppercase tracking-wider text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center text-xs font-black shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                  1
                </span>
                Pilih Jenis Website / Aplikasi:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((project) => {
                  const isSelected = selectedProject.id === project.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => handleProjectTypeChange(project)}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between backdrop-blur-md ${
                        isSelected
                          ? "bg-pink-500/15 dark:bg-pink-500/20 border-2 border-pink-500/80 shadow-[0_8px_24px_-6px_rgba(255,0,127,0.28)]"
                          : "glass-inset hover:border-pink-400/60"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-2xl mb-2">{project.icon}</span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{project.name}</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">{project.description}</p>
                        <span className="text-xs font-extrabold text-pink-600 dark:text-pink-400 mt-2 block">
                          Mulai {formatIDR(project.basePrice)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Number of Pages Slider */}
            <div className="glass-card rounded-3xl p-6 holo-corners">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-extrabold uppercase tracking-wider text-pink-700 dark:text-pink-400 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center text-xs font-black shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                    2
                  </span>
                  Estimasi Jumlah Halaman / Menu:
                </label>
                <span className="text-base font-extrabold text-pink-700 dark:text-pink-300 glass-pill px-3.5 py-1 rounded-full">
                  {pagesCount} Halaman
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="25"
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-300/60 dark:bg-white/15 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                <span>1 Halaman (Minisite)</span>
                <span>5 Halaman (Standar)</span>
                <span>10+ Halaman (Komprehensif)</span>
                <span>25 Halaman (Enterprise)</span>
              </div>
            </div>

            {/* Step 3: Add-on Features Checklist */}
            <div className="glass-card rounded-3xl p-6 holo-corners">
              <label className="text-sm font-extrabold uppercase tracking-wider text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center text-xs font-black shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                  3
                </span>
                Pilih Fitur Tambahan & Integrasi:
              </label>

              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 backdrop-blur-md ${
                        isChecked
                          ? "bg-pink-500/15 dark:bg-pink-500/20 border-pink-500/75 text-slate-900 dark:text-white shadow-sm"
                          : "glass-inset text-slate-700 dark:text-slate-300 hover:border-pink-400/60"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                            isChecked
                              ? "bg-pink-500 border-pink-500 text-white shadow-sm"
                              : "border-slate-300 dark:border-white/20 bg-white/60 dark:bg-white/5"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold block text-slate-900 dark:text-white">{addon.name}</span>
                          <span className="text-[11px] text-slate-600 dark:text-slate-300 block">{addon.description}</span>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-pink-600 dark:text-pink-400 shrink-0">
                        +{formatIDR(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Delivery Timeline Speed */}
            <div className="glass-card rounded-3xl p-6 holo-corners">
              <label className="text-sm font-extrabold uppercase tracking-wider text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center text-xs font-black shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                  4
                </span>
                Kecepatan Pengerjaan:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed("normal")}
                  className={`p-4 rounded-2xl border text-left transition-all backdrop-blur-md ${
                    deliverySpeed === "normal"
                      ? "bg-pink-500/15 dark:bg-pink-500/20 border-2 border-pink-500/80 text-slate-900 dark:text-white shadow-sm"
                      : "glass-inset text-slate-500 dark:text-slate-400"
                  }`}
                >
                  <span className="text-xs font-extrabold text-pink-600 dark:text-pink-400 block">Standar Pengerjaan</span>
                  <span className="text-xs text-slate-700 dark:text-slate-200 block mt-0.5 font-medium">7 - 14 Hari Kerja (Termasuk QC & Revisi)</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold block mt-1">Normal Rate</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliverySpeed("express")}
                  className={`p-4 rounded-2xl border text-left transition-all backdrop-blur-md ${
                    deliverySpeed === "express"
                      ? "bg-amber-500/15 dark:bg-amber-500/20 border-2 border-amber-500/80 text-slate-900 dark:text-white shadow-sm"
                      : "glass-inset text-slate-500 dark:text-slate-400"
                  }`}
                >
                  <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    ⚡ Prioritas Express (+25%)
                  </span>
                  <span className="text-xs text-slate-700 dark:text-slate-200 block mt-0.5 font-medium">3 - 5 Hari Kerja (Dedicated Developer)</span>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold block mt-1">Layanan Kilat</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card (Sticky 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="glass-card-pink rounded-3xl p-6 sm:p-7 relative overflow-hidden holo-corners">
              
              {/* Card Aura Header */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/25 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/50 dark:border-white/15">
                <span className="text-xs font-extrabold uppercase tracking-widest text-pink-700 dark:text-pink-300">
                  Ringkasan Estimasi
                </span>
                <span className="text-[10px] font-bold glass-pill text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full">
                  Live Calculator
                </span>
              </div>

              {/* Price Display */}
              <div className="py-6 text-center">
                <span className="text-xs text-slate-700 dark:text-slate-200 block font-bold">Perkiraan Biaya Total:</span>
                <div className="font-heading font-black text-3xl sm:text-4xl text-pink-glow mt-1 tracking-tight">
                  {formatIDR(calculatedTotal)}
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 block mt-1">
                  *Bisa dicicil DP 50% di awal & pelunasan setelah website selesai
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 py-4 border-y border-white/50 dark:border-white/15 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Jenis Proyek:</span>
                  <strong className="text-slate-900 dark:text-white text-right">{selectedProject.name}</strong>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Halaman:</span>
                  <strong className="text-slate-900 dark:text-white">{pagesCount} Halaman</strong>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Kecepatan:</span>
                  <strong className={deliverySpeed === "express" ? "text-amber-600 dark:text-amber-400" : "text-pink-600 dark:text-pink-400"}>
                    {deliverySpeed === "express" ? "Express (3-5 Hari)" : "Standar (7-14 Hari)"}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 block mb-1">Fitur Terpilih ({selectedAddons.length}):</span>
                  <div className="max-h-28 overflow-y-auto space-y-1 pr-1">
                    {selectedFeatureNames.map((name, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-100 text-[11px]">
                        <Check className="w-3 h-3 text-pink-500 dark:text-pink-400 shrink-0" />
                        <span className="truncate">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inclusions Reminder */}
              <div className="mt-4 p-3.5 rounded-2xl glass-inset text-[11px] text-slate-700 dark:text-slate-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-pink-700 dark:text-pink-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Sudah Termasuk:</span>
                </div>
                <p>• Domain & Hosting 1 Tahun Full</p>
                <p>• Garansi & Maintenance 1 Tahun Bebas Error</p>
                <p>• Video Tutorial Pengelolaan Website</p>
              </div>

              {/* Direct Order Form (Optional Name + WA CTA) */}
              <form onSubmit={handleOrderSubmit} className="mt-5 space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Anda (opsional)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp (opsional)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl font-heading font-extrabold text-sm glass-btn-primary text-white flex items-center justify-center gap-2 group active:scale-95"
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  <span>Pesan Paket Ini via WhatsApp</span>
                </button>
              </form>

              <span className="text-[10px] text-center text-slate-600 dark:text-slate-300 block mt-3 font-medium">
                ⚡ Otomatis terhubung ke CS RIDEV (Rivia Developer): <strong className="text-slate-900 dark:text-white">+62 8222-68-000-63</strong>
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
