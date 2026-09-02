"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  ExternalLink, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Eye
} from "lucide-react";
import { DEFAULT_PORTFOLIO, PortfolioItem } from "@/lib/supabase";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = [
    "All",
    "Healthcare",
    "Travel & Tourism",
    "E-Commerce",
    "LMS & Education",
    "Custom App",
  ];

  const filteredItems = selectedCategory === "All"
    ? DEFAULT_PORTFOLIO
    : DEFAULT_PORTFOLIO.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="portofolio" className="py-24 relative overflow-hidden bg-rivia-dark">
      {/* Background Decorators */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Portofolio & Studi Kasus Unggulan</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Karya & Hasil Proyek <br />
            <span className="text-gold-metallic">Klien RIDEV (Rivia Developer)</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Lihat bagaimana kami membantu brand, UMKM, instansi, dan startup mewujudkan website modern yang mendongkrak penjualan dan kredibilitas.
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
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold"
                  : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/60 flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rivia-dark via-transparent to-transparent opacity-60" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rivia-dark/90 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Live Preview Button Trigger */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat Detail Mockup</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Klien: <strong className="text-slate-200">{project.client_name}</strong></span>
                    <span>Tahun: <strong className="text-cyan-300">{project.completion_year}</strong></span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges & Link */}
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech_stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-slate-900 text-cyan-300 px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={createWhatsAppLink(`Halo RIDEV (Rivia Developer), saya tertarik dengan portofolio *${project.title}*. Bisa buatkan website serupa untuk bisnis saya?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 text-xs font-bold text-center border border-cyan-500/30 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Mau Website Seperti Ini?</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Device Preview Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-rivia-navy border border-cyan-500/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-cyan-500/20 flex items-center justify-between bg-rivia-deep/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-slate-900 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  {activeProject.category}
                </span>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white truncate max-w-xs sm:max-w-md">
                  {activeProject.title}
                </h3>
              </div>

              {/* Device Selector Controls */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1.5 rounded-md ${previewDevice === "desktop" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                    title="Desktop View"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1.5 rounded-md ${previewDevice === "tablet" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                    title="Tablet View"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1.5 rounded-md ${previewDevice === "mobile" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                    title="Mobile View"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 text-sm font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body: Device Frame Viewer */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950/80">
              <div
                className={`transition-all duration-300 rounded-2xl border-4 border-slate-800 shadow-2xl overflow-hidden bg-slate-900 relative ${
                  previewDevice === "desktop"
                    ? "w-full max-w-3xl aspect-[16/10]"
                    : previewDevice === "tablet"
                    ? "w-[480px] max-w-full aspect-[4/3]"
                    : "w-[300px] max-w-full aspect-[9/16]"
                }`}
              >
                {/* Browser bar */}
                <div className="bg-slate-900 border-b border-slate-800 px-3 py-1.5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 truncate max-w-[200px]">
                    https://{activeProject.slug}.rivia.app
                  </span>
                  <span className="text-[10px] text-slate-500">🔒 SSL</span>
                </div>

                <img
                  src={activeProject.image_url}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Description & WhatsApp Quote Button */}
              <div className="w-full max-w-3xl mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-xs text-slate-400">Deskripsi Proyek:</span>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5">{activeProject.description}</p>
                </div>
                <a
                  href={createWhatsAppLink(`Halo RIDEV (Rivia Developer), saya ingin pesan website seperti proyek *${activeProject.title}*.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-extrabold whitespace-nowrap shadow-lg flex items-center gap-2 shrink-0"
                >
                  <span>Pesan Desain Seperti Ini</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
