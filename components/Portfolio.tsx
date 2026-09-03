"use client";

import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  ExternalLink, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Eye,
  Calendar,
  Clock,
  User,
  ShoppingBag,
  Plus,
  Minus,
  Play,
  Award,
  CheckCircle,
  XCircle,
  TrendingUp,
  Package,
  ShieldCheck,
  Search,
  Filter,
  DollarSign,
  Send,
  RefreshCw,
  Zap
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface PortfolioApp {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  client: string;
  year: string;
  techStack: string[];
  themeColor: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeAppId, setActiveAppId] = useState<string | null>(null);

  const projects: PortfolioApp[] = [
    {
      id: "healthcare",
      title: "MedikaCare - Modern Healthcare & Clinic Platform",
      category: "Healthcare",
      subtitle: "Sistem reservasi dokter spesialis, jadwal konsultasi, rekam medis online & antrean instan.",
      client: "Klinik Utama Medika Sehat",
      year: "2026",
      techStack: ["Next.js 14", "Tailwind CSS", "Supabase DB", "PostgreSQL"],
      themeColor: "cyan",
    },
    {
      id: "travel",
      title: "Nusantara Escapes - Luxury Travel & Booking Portal",
      category: "Travel & Tourism",
      subtitle: "Portal pemesanan paket wisata kepulauan, kalkulator pax & reservasi resort terintegrasi.",
      client: "PT Nusantara Wisata Bahari",
      year: "2026",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Midtrans Gateway"],
      themeColor: "emerald",
    },
    {
      id: "ecommerce",
      title: "AuraStyle - Fashion E-Commerce & Inventory Sync",
      category: "E-Commerce",
      subtitle: "Toko online pakaian modern dengan keranjang belanja, cek ongkir otomatis & auto-WhatsApp invoice.",
      client: "AuraStyle Official Indonesia",
      year: "2026",
      techStack: ["Next.js App Router", "Zustand", "Supabase DB", "Tailwind"],
      themeColor: "gold",
    },
    {
      id: "lms",
      title: "Cendekia Academy - Integrated LMS & E-Learning",
      category: "LMS & Education",
      subtitle: "Platform kursus online dengan kurikulum bab, kuis interaktif otomatis & sertifikat kelulusan.",
      client: "Yayasan Pendidikan Cendekia",
      year: "2026",
      techStack: ["Next.js 14", "Tailwind CSS", "Video Player", "PostgreSQL"],
      themeColor: "purple",
    },
    {
      id: "erp",
      title: "Nexus ERP - Corporate Operations & Inventory",
      category: "Custom App",
      subtitle: "Aplikasi internal manajemen stok multi-gudang, logistik, KPI penjualan & analitik bisnis.",
      client: "PT Nexus Global Industri",
      year: "2026",
      techStack: ["React", "Next.js", "PostgreSQL Grid", "Tailwind"],
      themeColor: "blue",
    },
  ];

  const categories = ["All", "Healthcare", "Travel & Tourism", "E-Commerce", "LMS & Education", "Custom App"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // -------------------------------------------------------------
  // 1. HEALTHCARE SIMULATOR STATE
  // -------------------------------------------------------------
  const [selectedDoctor, setSelectedDoctor] = useState("dr. Hendra Kurniawan, Sp.A (Spesialis Anak)");
  const [selectedDate, setSelectedDate] = useState("Besok, 10:00 WIB");
  const [patientName, setPatientName] = useState("Budi Pratama");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // -------------------------------------------------------------
  // 2. TRAVEL SIMULATOR STATE
  // -------------------------------------------------------------
  const [travelDestination, setTravelDestination] = useState<"raja-ampat" | "labuan-bajo" | "bali">("labuan-bajo");
  const [travelPax, setTravelPax] = useState(2);
  const [travelHotelTier, setTravelHotelTier] = useState<"standard" | "luxury">("luxury");
  const [travelBookingSuccess, setTravelBookingSuccess] = useState(false);

  const travelPrices = {
    "raja-ampat": 4500000,
    "labuan-bajo": 3200000,
    "bali": 1800000,
  };
  const totalTravelPrice = (travelPrices[travelDestination] + (travelHotelTier === "luxury" ? 800000 : 0)) * travelPax;

  // -------------------------------------------------------------
  // 3. E-COMMERCE SIMULATOR STATE
  // -------------------------------------------------------------
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; qty: number; size: string }[]>([
    { id: "p1", name: "Sapphire Cyber Hoodie", price: 349000, qty: 1, size: "L" },
  ]);
  const [selectedCourier, setSelectedCourier] = useState<"jne" | "jnt" | "sicepat">("jne");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const courierPrices = { jne: 18000, jnt: 22000, sicepat: 20000 };
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartTotal = cartSubtotal > 0 ? cartSubtotal + courierPrices[selectedCourier] : 0;

  const addProductToCart = (name: string, price: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) => item.name === name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: "p-" + Date.now(), name, price, qty: 1, size: "L" }];
    });
  };

  // -------------------------------------------------------------
  // 4. LMS & E-LEARNING SIMULATOR STATE
  // -------------------------------------------------------------
  const [activeLesson, setActiveLesson] = useState("Bab 1: Dasar Next.js 14 App Router");
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  // -------------------------------------------------------------
  // 5. ERP & INVENTORY SIMULATOR STATE
  // -------------------------------------------------------------
  const [erpTab, setErpTab] = useState<"dashboard" | "inventory">("dashboard");
  const [erpStockSearch, setErpStockSearch] = useState("");
  const [inventoryItems, setInventoryItems] = useState([
    { code: "NX-8821", name: "Processor Core i9 Server", stock: 48, status: "Aman", warehouse: "Gudang Utama A" },
    { code: "NX-4310", name: "RAM 64GB DDR5 ECC", stock: 8, status: "Stok Menipis", warehouse: "Gudang B" },
    { code: "NX-9012", name: "SSD NVMe 4TB Enterprise", stock: 92, status: "Aman", warehouse: "Gudang Utama A" },
    { code: "NX-1102", name: "Switch Cisco 48-Port 10G", stock: 3, status: "Kritis", warehouse: "Gudang C" },
  ]);

  const activeProjectData = projects.find((p) => p.id === activeAppId);

  const formatIDR = (num: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);

  return (
    <section id="portofolio" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0d0818]/60 to-transparent">
      {/* Background Decorators */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0918] border border-pink-500/40 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(255,0,127,0.2)]">
            <Briefcase className="w-3.5 h-3.5 text-pink-400" />
            <span>Interactive Portfolio & Live Simulator</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Karya & Hasil Proyek <br />
            <span className="text-pink-glow">Klien RIDEV (Rivia Developer)</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Bukan sekadar gambar statis! Klik <strong>&ldquo;Coba Live Mockup Interaktif&rdquo;</strong> pada setiap proyek di bawah untuk mencoba fitur dan simulasi aplikasi web nyata yang kami kembangkan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white shadow-[0_0_15px_rgba(255,0,127,0.4)] font-bold"
                  : "bg-[#0e0918] text-slate-300 border border-slate-800 hover:border-pink-500/40 hover:text-white shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-pink-500/30 hover:border-pink-500/60 flex flex-col justify-between group transition-all duration-300 shadow-2xl holo-corners"
            >
              {/* Realistic UI Mockup Card Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0918] border-b border-slate-800 flex flex-col">
                
                {/* Browser window top bar */}
                <div className="bg-[#090610] px-3 py-2 border-b border-slate-800 flex items-center justify-between shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 bg-[#050308] px-2 py-0.5 rounded border border-slate-800">
                    https://{project.id}.ridev.app
                  </span>
                  <span className="text-[9px] text-emerald-400 font-bold">🟢 Live Ready</span>
                </div>

                {/* Simulated UI Screen Rendering */}
                <div className="p-3 bg-gradient-to-br from-[#0c0816] via-[#100b1d] to-[#07050b] flex-1 overflow-hidden relative text-left">
                  
                  {project.id === "healthcare" && (
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-cyan-950/60 p-2 rounded-lg border border-cyan-500/40">
                        <span className="font-bold text-cyan-300">🏥 MedikaCare Antrean Online</span>
                        <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-500/40">Buka 24 Jam</span>
                      </div>
                      <div className="p-2 rounded bg-[#130d22] border border-slate-800 flex items-center justify-between shadow-sm">
                        <div>
                          <strong className="text-white block">dr. Hendra K., Sp.A</strong>
                          <span className="text-[9px] text-slate-400">Jadwal: 10:00 WIB</span>
                        </div>
                        <span className="text-[10px] text-pink-300 bg-pink-950/70 px-2 py-1 rounded border border-pink-500/40 font-bold">
                          Reservasi
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === "travel" && (
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/40">
                        <span className="font-bold text-emerald-300">🌴 Nusantara Escapes</span>
                        <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded font-bold border border-amber-500/40">Promo 2026</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-1.5 rounded bg-[#130d22] border border-slate-800 shadow-sm">
                          <span className="text-[9px] text-slate-400 block">Labuan Bajo</span>
                          <strong className="text-amber-400 text-[10px]">Rp 3.200.000</strong>
                        </div>
                        <div className="p-1.5 rounded bg-[#130d22] border border-slate-800 shadow-sm">
                          <span className="text-[9px] text-slate-400 block">Raja Ampat</span>
                          <strong className="text-amber-400 text-[10px]">Rp 4.500.000</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "ecommerce" && (
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-amber-950/60 p-2 rounded-lg border border-amber-500/40">
                        <span className="font-bold text-amber-300">🛍️ AuraStyle Official Store</span>
                        <span className="text-[9px] bg-pink-950 text-pink-300 px-1.5 py-0.5 rounded font-bold border border-pink-500/40">🛒 Keranjang (1)</span>
                      </div>
                      <div className="p-2 rounded bg-[#130d22] border border-slate-800 flex items-center justify-between shadow-sm">
                        <div>
                          <strong className="text-white block">Cyber Sapphire Hoodie</strong>
                          <span className="text-[10px] text-amber-400 font-bold">Rp 349.000</span>
                        </div>
                        <span className="text-[10px] bg-gradient-to-r from-pink-500 to-rose-600 text-white px-2 py-1 rounded font-extrabold shadow-sm">
                          + Beli
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === "lms" && (
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-purple-950/60 p-2 rounded-lg border border-purple-500/40">
                        <span className="font-bold text-purple-300">🎓 Cendekia Academy E-Learning</span>
                        <span className="text-[9px] text-emerald-400 font-bold">Progres: 75%</span>
                      </div>
                      <div className="p-2 rounded bg-[#130d22] border border-slate-800 flex items-center gap-2 shadow-sm">
                        <div className="w-5 h-5 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
                          <Play className="w-3 h-3 fill-purple-400" />
                        </div>
                        <div>
                          <span className="text-[10px] text-white font-bold block">Bab 1: Next.js 14 App Router</span>
                          <span className="text-[9px] text-slate-400">Durasi: 18 Menit • Video HD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "erp" && (
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-blue-950/60 p-2 rounded-lg border border-blue-500/40">
                        <span className="font-bold text-blue-300">📊 Nexus ERP Dashboard</span>
                        <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">Omset: +18%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-1.5 rounded bg-[#130d22] border border-slate-800 shadow-sm">
                          <span className="text-[8px] text-slate-400 block">Pesanan Hari Ini</span>
                          <strong className="text-white text-[10px]">1,248 Order</strong>
                        </div>
                        <div className="p-1.5 rounded bg-[#130d22] border border-slate-800 shadow-sm">
                          <span className="text-[8px] text-slate-400 block">Stok Gudang</span>
                          <strong className="text-pink-400 text-[10px]">98.2% Optimal</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Live Demo Trigger */}
                  <div className="absolute inset-0 bg-[#07070a]/90 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-4">
                    <span className="text-xs font-bold text-pink-400 mb-2">⚡ Interactive Live Simulator</span>
                    <button
                      onClick={() => setActiveAppId(project.id)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ff0038] text-white text-xs font-black flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,0,127,0.5)] hover:brightness-110 active:scale-95 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Buka Mockup Interaktif</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-medium">
                    <span>Klien: <strong className="text-white">{project.client}</strong></span>
                    <span>Tahun: <strong className="text-pink-400">{project.year}</strong></span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-pink-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Stack Badges & CTA Link */}
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-pink-950/60 text-pink-300 px-2 py-0.5 rounded border border-pink-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveAppId(project.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#140b20] hover:bg-pink-500/20 text-pink-300 hover:text-white text-xs font-bold text-center border border-pink-500/40 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>⚡ Coba Simulator Aplikasi Ini</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ============================================================= */}
      {/* INTERACTIVE FULL-FUNCTIONAL APP SIMULATOR MODAL               */}
      {/* ============================================================= */}
      {activeAppId && activeProjectData && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white border border-pink-500/30 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-pink-500/15 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider bg-pink-50 px-2.5 py-1 rounded-md border border-pink-200">
                  {activeProjectData.category}
                </span>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 truncate max-w-xs sm:max-w-md">
                  {activeProjectData.title}
                </h3>
              </div>

              {/* Device Selector Controls */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${previewDevice === "desktop" ? "bg-pink-500 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    <Monitor className="w-4 h-4" />
                    <span className="hidden md:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${previewDevice === "tablet" ? "bg-pink-500 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    <Tablet className="w-4 h-4" />
                    <span className="hidden md:inline">Tablet</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${previewDevice === "mobile" ? "bg-pink-500 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="hidden md:inline">Mobile</span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveAppId(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-rose-500 hover:text-white text-slate-500 text-sm font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body: Device Frame with REAL INTERACTIVE UI SIMULATION */}
            <div className="p-3 sm:p-5 overflow-y-auto flex-1 flex flex-col items-center justify-start bg-slate-100/90 space-y-4">
              
              {/* Scroll Guidance Banner */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-semibold shadow-sm animate-pulse">
                <span>🖱️</span>
                <span>Scroll ke bawah di dalam layar mockup untuk mencoba simulasi & melihat seluruh isi website!</span>
              </div>

              <div
                className={`transition-all duration-300 rounded-2xl border-4 border-slate-300 shadow-2xl overflow-hidden bg-white flex flex-col ${
                  previewDevice === "desktop"
                    ? "w-full max-w-4xl"
                    : previewDevice === "tablet"
                    ? "w-[560px] max-w-full"
                    : "w-[340px] max-w-full"
                }`}
              >
                {/* Browser address bar */}
                <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center justify-between shrink-0 sticky top-0 z-20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-700 truncate max-w-[280px]">
                    https://{activeAppId}.ridev.app/demo
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    🔒 SSL Active
                  </span>
                </div>

                {/* Internal Scrollable Screen Container */}
                <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 bg-slate-900 space-y-6 text-left">

                {/* ------------------------------------------------------------- */}
                {/* 1. HEALTHCARE INTERACTIVE SIMULATOR                           */}
                {/* ------------------------------------------------------------- */}
                {activeAppId === "healthcare" && (
                  <div className="p-4 sm:p-6 text-slate-100 bg-slate-950 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-cyan-950 to-slate-900 p-4 rounded-xl border border-cyan-500/30">
                      <div>
                        <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Klinik & Rumah Sakit Online</span>
                        <h4 className="font-heading font-black text-lg text-white">MedikaCare Specialist Clinic</h4>
                        <p className="text-xs text-slate-300 mt-0.5">Reservasi pemeriksaan dokter spesialis tanpa perlu antre di lokasi.</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/40 w-fit">
                        ● Pendaftaran Terbuka
                      </span>
                    </div>

                    {bookingConfirmed ? (
                      <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3 animate-in zoom-in-95">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h5 className="font-heading font-bold text-base text-white">Janji Temu Berhasil Dibuat!</h5>
                        <div className="text-xs text-slate-300 max-w-md mx-auto space-y-1 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                          <p>Pasien: <strong className="text-white">{patientName}</strong></p>
                          <p>Dokter: <strong className="text-cyan-300">{selectedDoctor}</strong></p>
                          <p>Jadwal: <strong className="text-amber-300">{selectedDate}</strong></p>
                          <p className="text-emerald-400 font-bold pt-1">No. Antrean: A-014 (Ruang Poli 2)</p>
                        </div>
                        <button
                          onClick={() => setBookingConfirmed(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-300 text-xs font-bold hover:bg-slate-700"
                        >
                          Buat Janji Baru
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-300 block mb-1.5">Pilih Dokter Spesialis:</label>
                            <select
                              value={selectedDoctor}
                              onChange={(e) => setSelectedDoctor(e.target.value)}
                              className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400"
                            >
                              <option value="dr. Hendra Kurniawan, Sp.A (Spesialis Anak)">dr. Hendra Kurniawan, Sp.A (Spesialis Anak)</option>
                              <option value="dr. Siska Rahmawati, Sp.JP (Spesialis Jantung)">dr. Siska Rahmawati, Sp.JP (Spesialis Jantung)</option>
                              <option value="dr. Dimas Aditya, Sp.B (Spesialis Bedah)">dr. Dimas Aditya, Sp.B (Spesialis Bedah)</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-300 block mb-1.5">Pilih Jadwal Konsultasi:</label>
                            <select
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400"
                            >
                              <option value="Hari Ini, 14:00 WIB (Poli Siang)">Hari Ini, 14:00 WIB (Poli Siang)</option>
                              <option value="Besok, 10:00 WIB (Poli Pagi)">Besok, 10:00 WIB (Poli Pagi)</option>
                              <option value="Besok, 16:00 WIB (Poli Sore)">Besok, 16:00 WIB (Poli Sore)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Nama Pasien / NIK:</label>
                          <input
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400"
                            placeholder="Ketik nama pasien..."
                          />
                        </div>

                        <button
                          onClick={() => setBookingConfirmed(true)}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-heading font-extrabold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all"
                        >
                          ✓ Konfirmasi & Cetak Nomor Antrean Pasien
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* 2. TRAVEL & TOURISM INTERACTIVE SIMULATOR                     */}
                {/* ------------------------------------------------------------- */}
                {activeAppId === "travel" && (
                  <div className="p-4 sm:p-6 text-slate-100 bg-slate-950 space-y-5">
                    <div className="bg-gradient-to-r from-emerald-950 to-slate-900 p-4 rounded-xl border border-emerald-500/30">
                      <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Luxury Trip & Tour Portal</span>
                      <h4 className="font-heading font-black text-lg text-white">Nusantara Escapes Booking Engine</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Simulasi pemesanan paket tour kepulauan eksotis Indonesia.</p>
                    </div>

                    {travelBookingSuccess ? (
                      <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3 animate-in zoom-in-95">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h5 className="font-heading font-bold text-base text-white">Pemesanan Paket Wisata Sukses!</h5>
                        <div className="text-xs text-slate-300 max-w-md mx-auto space-y-1 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                          <p>Destinasi: <strong className="text-amber-300 uppercase">{travelDestination.replace("-", " ")}</strong></p>
                          <p>Jumlah Pax: <strong className="text-white">{travelPax} Orang</strong></p>
                          <p>Tipe Resort: <strong className="text-emerald-300">{travelHotelTier === "luxury" ? "5★ Luxury Water Villa" : "Standard Beachfront"}</strong></p>
                          <p className="text-cyan-300 font-extrabold text-sm pt-1">Total Biaya: {formatIDR(totalTravelPrice)}</p>
                        </div>
                        <button
                          onClick={() => setTravelBookingSuccess(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-emerald-300 text-xs font-bold hover:bg-slate-700"
                        >
                          Hitung Paket Lain
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Destination Selection Cards */}
                        <div className="grid grid-cols-3 gap-2.5">
                          {[
                            { id: "labuan-bajo", name: "Labuan Bajo & Komodo", price: "Rp 3.2jt/pax" },
                            { id: "raja-ampat", name: "Raja Ampat Misool", price: "Rp 4.5jt/pax" },
                            { id: "bali", name: "Nusa Penida Bali", price: "Rp 1.8jt/pax" },
                          ].map((dest) => (
                            <button
                              key={dest.id}
                              onClick={() => setTravelDestination(dest.id as any)}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                travelDestination === dest.id
                                  ? "bg-emerald-950/80 border-emerald-400 text-white shadow-lg"
                                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <strong className="text-xs block leading-tight">{dest.name}</strong>
                              <span className="text-[10px] text-amber-300 font-bold block mt-1">{dest.price}</span>
                            </button>
                          ))}
                        </div>

                        {/* Pax & Hotel Tier */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-300 block mb-1.5">Jumlah Wisatawan (Pax):</label>
                            <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-xl border border-slate-700">
                              <button
                                onClick={() => setTravelPax(Math.max(1, travelPax - 1))}
                                className="p-1 rounded bg-slate-800 text-white font-bold"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-extrabold text-white flex-1 text-center">{travelPax} Orang</span>
                              <button
                                onClick={() => setTravelPax(travelPax + 1)}
                                className="p-1 rounded bg-slate-800 text-white font-bold"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-300 block mb-1.5">Akomodasi Hotel:</label>
                            <select
                              value={travelHotelTier}
                              onChange={(e) => setTravelHotelTier(e.target.value as any)}
                              className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-emerald-400"
                            >
                              <option value="luxury">5★ Luxury Private Villa (+800k)</option>
                              <option value="standard">4★ Standard Beachfront Resort</option>
                            </select>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-[11px] text-slate-400 block">Total Estimasi Paket:</span>
                            <strong className="text-base text-amber-300 font-black">{formatIDR(totalTravelPrice)}</strong>
                          </div>
                          <button
                            onClick={() => setTravelBookingSuccess(true)}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs shadow-lg active:scale-95"
                          >
                            Pesan Paket Wisata
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* 3. E-COMMERCE INTERACTIVE SIMULATOR                           */}
                {/* ------------------------------------------------------------- */}
                {activeAppId === "ecommerce" && (
                  <div className="p-4 sm:p-6 text-slate-100 bg-slate-950 space-y-5">
                    <div className="bg-gradient-to-r from-amber-950 to-slate-900 p-4 rounded-xl border border-amber-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">E-Commerce & Online Store</span>
                        <h4 className="font-heading font-black text-lg text-white">AuraStyle Apparel Store</h4>
                      </div>
                      <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4" />
                        <span>{cartItems.reduce((a, b) => a + b.qty, 0)} Item</span>
                      </div>
                    </div>

                    {checkoutSuccess ? (
                      <div className="p-6 rounded-2xl bg-amber-950/60 border border-amber-500/50 text-center space-y-3 animate-in zoom-in-95">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 mx-auto">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h5 className="font-heading font-bold text-base text-white">Pesanan Berhasil Dibuat!</h5>
                        <p className="text-xs text-slate-300">Invoice dan QRIS pembayaran otomatis telah diterbitkan.</p>
                        <div className="text-xs text-slate-200 bg-slate-900 p-3 rounded-xl border border-slate-800 max-w-sm mx-auto">
                          <p>Total Bayar (Termasuk Ongkir): <strong className="text-amber-300 font-extrabold">{formatIDR(cartTotal)}</strong></p>
                        </div>
                        <button
                          onClick={() => setCheckoutSuccess(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-amber-300 text-xs font-bold hover:bg-slate-700"
                        >
                          Lanjut Belanja
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Products selection */}
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-slate-300 block">Katalog Produk Tersedia:</span>
                          {[
                            { name: "Sapphire Cyber Hoodie", price: 349000 },
                            { name: "Techwear Oversized Tee", price: 189000 },
                            { name: "Urban Tactical Cargo", price: 420000 },
                          ].map((prod, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <div>
                                <strong className="text-xs text-white block">{prod.name}</strong>
                                <span className="text-xs text-amber-400 font-bold">{formatIDR(prod.price)}</span>
                              </div>
                              <button
                                onClick={() => addProductToCart(prod.name, prod.price)}
                                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1 active:scale-95 transition-transform"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Tambah</span>
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Cart Summary & RajaOngkir calculation */}
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                            Rincian Keranjang & Checkout:
                          </span>

                          <div className="max-h-28 overflow-y-auto space-y-2 pr-1">
                            {cartItems.length === 0 ? (
                              <span className="text-xs text-slate-500">Keranjang masih kosong.</span>
                            ) : (
                              cartItems.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-xs text-slate-300">
                                  <span>{item.name} (x{item.qty})</span>
                                  <strong className="text-white">{formatIDR(item.price * item.qty)}</strong>
                                </div>
                              ))
                            )}
                          </div>

                          <div className="pt-2 border-t border-slate-800">
                            <label className="text-[11px] text-slate-400 block mb-1">Kurir Pengiriman (RajaOngkir Sync):</label>
                            <select
                              value={selectedCourier}
                              onChange={(e) => setSelectedCourier(e.target.value as any)}
                              className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                            >
                              <option value="jne">JNE Reguler (+Rp 18.000)</option>
                              <option value="jnt">J&T Express (+Rp 22.000)</option>
                              <option value="sicepat">SiCepat BEST (+Rp 20.000)</option>
                            </select>
                          </div>

                          <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                            <span className="text-xs font-bold text-slate-300">Total Pembayaran:</span>
                            <strong className="text-sm font-black text-amber-400">{formatIDR(cartTotal)}</strong>
                          </div>

                          <button
                            onClick={() => setCheckoutSuccess(true)}
                            disabled={cartItems.length === 0}
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-lg active:scale-95 disabled:opacity-50"
                          >
                            Bayar via QRIS / VA Otomatis
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* 4. LMS E-LEARNING INTERACTIVE SIMULATOR                       */}
                {/* ------------------------------------------------------------- */}
                {activeAppId === "lms" && (
                  <div className="p-4 sm:p-6 text-slate-100 bg-slate-950 space-y-5">
                    <div className="bg-gradient-to-r from-purple-950 to-slate-900 p-4 rounded-xl border border-purple-500/30">
                      <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">E-Learning & Course Platform</span>
                      <h4 className="font-heading font-black text-lg text-white">Cendekia LMS Learning Room</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Simulasi pemutaran video materi dan tes kuis interaktif berhadiah sertifikat.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Video Player & Quiz Area (8 cols) */}
                      <div className="md:col-span-8 space-y-4">
                        {/* Video Player Box */}
                        <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                            <span className="text-[10px] text-purple-300 font-bold uppercase">Sedang Diputar:</span>
                            <strong className="text-sm text-white">{activeLesson}</strong>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-purple-600/30 border-2 border-purple-400 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-purple-300 ml-1" />
                          </div>
                        </div>

                        {/* Interactive Quiz Box */}
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <span className="text-xs font-bold text-purple-300 block uppercase tracking-wider">
                            📝 Kuis Pemahaman Materi:
                          </span>
                          <p className="text-xs text-slate-200">
                            Framework frontend apa yang digunakan oleh RIDEV untuk membangun website berkinerja tinggi?
                          </p>

                          <div className="space-y-2">
                            {[
                              { idx: 0, text: "Next.js & React (Benar)", correct: true },
                              { idx: 1, text: "WordPress Lama Tanpa Optimasi", correct: false },
                              { idx: 2, text: "Joomla & Blogger 2010", correct: false },
                            ].map((opt) => (
                              <button
                                key={opt.idx}
                                onClick={() => {
                                  setQuizAnswer(opt.idx);
                                  setQuizSubmitted(true);
                                }}
                                className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                                  quizAnswer === opt.idx
                                    ? opt.correct
                                      ? "bg-emerald-950 border-emerald-400 text-emerald-200"
                                      : "bg-rose-950 border-rose-400 text-rose-200"
                                    : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                                }`}
                              >
                                <span>{opt.text}</span>
                                {quizAnswer === opt.idx && (
                                  opt.correct ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />
                                )}
                              </button>
                            ))}
                          </div>

                          {quizSubmitted && (
                            <div className="pt-2">
                              <button
                                onClick={() => setCertificateGenerated(true)}
                                className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-1.5"
                              >
                                <Award className="w-4 h-4" />
                                <span>Klaim Sertifikat Kelulusan Digital</span>
                              </button>
                            </div>
                          )}

                          {certificateGenerated && (
                            <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-400 text-center text-xs text-emerald-200 animate-in zoom-in-95">
                              🎉 <strong>Selamat!</strong> Sertifikat No. <code>CERT-RIDEV-2026-09</code> siap didownload dalam format PDF.
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Chapters List (4 cols) */}
                      <div className="md:col-span-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider mb-2">
                          Daftar Kurikulum:
                        </span>
                        {[
                          "Bab 1: Dasar Next.js 14 App Router",
                          "Bab 2: Desain Tailwind & Glassmorphism",
                          "Bab 3: Koneksi Database Supabase",
                          "Bab 4: Integrasi Payment Midtrans",
                        ].map((bab, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={() => setActiveLesson(bab)}
                            className={`w-full p-2.5 rounded-lg text-left text-xs transition-colors flex items-center gap-2 ${
                              activeLesson === bab
                                ? "bg-purple-950/80 border border-purple-400 text-purple-200 font-bold"
                                : "bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            <Play className="w-3 h-3 text-purple-400 shrink-0" />
                            <span className="truncate">{bab}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* 5. ERP INVENTORY & OPERATIONS SIMULATOR                       */}
                {/* ------------------------------------------------------------- */}
                {activeAppId === "erp" && (
                  <div className="p-4 sm:p-6 text-slate-100 bg-slate-950 space-y-5">
                    <div className="bg-gradient-to-r from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Enterprise Resource Planning</span>
                        <h4 className="font-heading font-black text-lg text-white">Nexus Global ERP Control</h4>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setErpTab("dashboard")}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold ${erpTab === "dashboard" ? "bg-blue-500 text-slate-950" : "bg-slate-900 text-slate-400"}`}
                        >
                          Analitik
                        </button>
                        <button
                          onClick={() => setErpTab("inventory")}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold ${erpTab === "inventory" ? "bg-blue-500 text-slate-950" : "bg-slate-900 text-slate-400"}`}
                        >
                          Stok Gudang
                        </button>
                      </div>
                    </div>

                    {erpTab === "dashboard" ? (
                      <div className="space-y-4">
                        {/* KPI Metrics */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-400 block uppercase">Pendapatan Bulan Ini</span>
                            <strong className="text-sm sm:text-base text-white font-black block mt-0.5">Rp 842.500.000</strong>
                            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-1">
                              <TrendingUp className="w-3 h-3" /> +18.4% vs bln lalu
                            </span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-400 block uppercase">Pesanan Diproses</span>
                            <strong className="text-sm sm:text-base text-cyan-300 font-black block mt-0.5">1,248 Order</strong>
                            <span className="text-[10px] text-slate-400 block mt-1">99.8% Tepat Waktu</span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-400 block uppercase">Kesehatan Gudang</span>
                            <strong className="text-sm sm:text-base text-amber-300 font-black block mt-0.5">98.2% Optimal</strong>
                            <span className="text-[10px] text-emerald-400 block mt-1">Zero Downtime</span>
                          </div>
                        </div>

                        {/* Recent Activity Log */}
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
                            Aktivitas Logistik Terbaru (Real-Time):
                          </span>
                          {[
                            { text: "Pengiriman #PO-9912 ke Jakarta Timur berhasil", time: "5 menit lalu", status: "Selesai" },
                            { text: "Stok RAM DDR5 Gudang B diperbarui (+20 Unit)", time: "25 menit lalu", status: "Update" },
                            { text: "Invoice Pembayaran PT Sinar Abadi lunas", time: "1 jam lalu", status: "Lunas" },
                          ].map((log, lIdx) => (
                            <div key={lIdx} className="flex justify-between items-center text-xs text-slate-300 py-1.5 border-b border-slate-800/80">
                              <span>{log.text}</span>
                              <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-cyan-400 border border-slate-800">
                                {log.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center gap-3">
                          <input
                            type="text"
                            placeholder="Cari kode / nama komponen..."
                            value={erpStockSearch}
                            onChange={(e) => setErpStockSearch(e.target.value)}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white flex-1"
                          />
                          <button
                            onClick={() => {
                              setInventoryItems([
                                ...inventoryItems,
                                { code: "NX-NEW" + Math.floor(Math.random() * 100), name: "Komponen Server Kustom", stock: 15, status: "Aman", warehouse: "Gudang A" }
                              ]);
                            }}
                            className="px-3 py-2 rounded-lg bg-blue-500 text-slate-950 font-bold text-xs shrink-0"
                          >
                            + Tambah Item
                          </button>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold">
                              <tr>
                                <th className="p-2.5">Kode</th>
                                <th className="p-2.5">Nama Item</th>
                                <th className="p-2.5">Stok</th>
                                <th className="p-2.5">Gudang</th>
                                <th className="p-2.5">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                              {inventoryItems
                                .filter((item) => item.name.toLowerCase().includes(erpStockSearch.toLowerCase()))
                                .map((item, i) => (
                                  <tr key={i} className="hover:bg-slate-900/50">
                                    <td className="p-2.5 font-mono text-cyan-300">{item.code}</td>
                                    <td className="p-2.5 text-white font-bold">{item.name}</td>
                                    <td className="p-2.5">{item.stock} Unit</td>
                                    <td className="p-2.5 text-slate-400">{item.warehouse}</td>
                                    <td className="p-2.5">
                                      <span
                                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                          item.status === "Aman"
                                            ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40"
                                            : item.status === "Stok Menipis"
                                            ? "bg-amber-950 text-amber-300 border border-amber-500/40"
                                            : "bg-rose-950 text-rose-300 border border-rose-500/40"
                                        }`}
                                      >
                                        {item.status}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                </div>
              </div>

              {/* Bottom Project Description & Direct Quote Action */}
              <div className="w-full max-w-4xl p-4 sm:p-5 rounded-2xl bg-slate-900/95 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-xs text-slate-400 block font-semibold">
                    Klien: <strong className="text-white">{activeProjectData.client}</strong> • Selesai: <strong className="text-cyan-300">{activeProjectData.year}</strong>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5">{activeProjectData.subtitle}</p>
                </div>
                <a
                  href={createWhatsAppLink(`Halo RIDEV (Rivia Developer), saya telah mencoba simulasi mockup interaktif *${activeProjectData.title}*. Saya ingin memesan website/aplikasi dengan sistem serupa untuk bisnis saya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-black whitespace-nowrap shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shrink-0"
                >
                  <span>Pesan Desain & Fitur Serupa via WA</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
