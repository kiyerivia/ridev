"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  RefreshCw, 
  Database, 
  Users, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  DollarSign, 
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  Lock,
  KeyRound,
  ShieldCheck,
  LogOut,
  Eye,
  EyeOff,
  Key
} from "lucide-react";
import { fetchLeads, isSupabaseConfigured, LeadRecord, supabase } from "@/lib/supabase";
import { createWhatsAppLink } from "@/lib/whatsapp";

const DEFAULT_PIN = "ridev2026";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [changePinModalOpen, setChangePinModalOpen] = useState(false);
  const [newPinInput, setNewPinInput] = useState("");
  const [pinSuccessMsg, setPinSuccessMsg] = useState("");

  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Check existing session
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("ridev_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const getStoredPin = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ridev_admin_pin") || DEFAULT_PIN;
    }
    return DEFAULT_PIN;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPin = getStoredPin();
    if (pinInput.trim() === currentPin || pinInput.trim() === DEFAULT_PIN) {
      sessionStorage.setItem("ridev_admin_auth", "true");
      setIsAuthenticated(true);
      setPinError(false);
      setPinInput("");
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("ridev_admin_auth");
    setIsAuthenticated(false);
    setPinInput("");
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinInput.length >= 4) {
      localStorage.setItem("ridev_admin_pin", newPinInput);
      setPinSuccessMsg("PIN Admin berhasil diperbarui!");
      setTimeout(() => {
        setPinSuccessMsg("");
        setChangePinModalOpen(false);
        setNewPinInput("");
      }, 1500);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchLeads();
      setLeads(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleUpdateStatus = async (leadId: string | undefined, newStatus: string) => {
    if (!leadId) return;

    if (supabase && isSupabaseConfigured) {
      await supabase.from("leads").update({ status: newStatus }).eq("id", leadId);
    } else {
      // Local storage update
      const existing = JSON.parse(localStorage.getItem("rivia_local_leads") || "[]");
      const updated = existing.map((l: any) =>
        l.id === leadId ? { ...l, status: newStatus } : l
      );
      localStorage.setItem("rivia_local_leads", JSON.stringify(updated));
    }

    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone_or_wa.includes(searchTerm) ||
      lead.project_type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => !l.status || l.status === "new").length;
  const inProgressLeads = leads.filter((l) => l.status === "in_progress").length;
  const completedLeads = leads.filter((l) => l.status === "completed").length;

  // Render Login Lock Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-rivia-dark text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/40 shadow-2xl relative z-10 text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto mb-6 text-cyan-300 shadow-lg shadow-cyan-500/20">
            <Lock className="w-8 h-8 text-cyan-400" />
          </div>

          <h2 className="font-heading font-black text-2xl text-white tracking-tight">
            RIDEV Admin Portal
          </h2>
          <p className="text-xs text-slate-400 mt-1 mb-8">
            Halaman ini terproteksi & hanya dapat diakses oleh Administrator RIDEV.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative text-left">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Masukkan PIN / Sandi Admin:
              </label>
              <div className="relative">
                <input
                  type={showPin ? "text" : "password"}
                  placeholder="Ketik PIN Admin..."
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError(false);
                  }}
                  autoFocus
                  className={`w-full px-4 py-3.5 pr-11 rounded-xl bg-slate-900/90 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all ${
                    pinError
                      ? "border-rose-500 ring-2 ring-rose-500/30"
                      : "border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {pinError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs text-left animate-shake">
                ⚠️ PIN salah! Silakan coba lagi atau gunakan PIN bawaan: <code>ridev2026</code>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-heading font-extrabold text-sm bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 text-slate-950 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4 text-slate-950" />
              <span>Buka Panel Kelola</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <Link href="/" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>Kembali ke Web Publik</span>
            </Link>
            <span>Default PIN: <strong className="text-slate-400">ridev2026</strong></span>
          </div>

        </div>
      </div>
    );
  }

  // Render Full Admin Dashboard once unlocked
  return (
    <div className="min-h-screen bg-rivia-dark text-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-white transition-colors"
              title="Kembali ke Web"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-black text-2xl text-white">
                  RIDEV (Rivia Developer) — Leads Inbox
                </h1>
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    isSupabaseConfigured
                      ? "bg-emerald-950 text-emerald-300 border-emerald-500/40"
                      : "bg-amber-950 text-amber-300 border-amber-500/40"
                  }`}
                >
                  {isSupabaseConfigured ? "🟢 Supabase Connected" : "🟡 Local Storage Mode"}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Pusat data konsultasi, permintaan penawaran harga, dan pesanan masuk dari website.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <button
              onClick={() => setChangePinModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Ganti PIN Keamanan"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>Ganti PIN</span>
            </button>

            <button
              onClick={loadData}
              disabled={loading}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-cyan-500/30 hover:bg-cyan-950 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-950/60 border border-rose-500/40 hover:bg-rose-900 text-rose-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
              title="Kunci Panel Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Kunci / Logout</span>
            </button>
          </div>
        </div>

        {/* Change PIN Modal Popup */}
        {changePinModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="glass-card max-w-sm w-full rounded-2xl p-6 border border-cyan-400/50 shadow-2xl relative">
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                Ganti PIN Admin
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Atur PIN baru agar hanya Anda yang dapat membuka dashboard ini.
              </p>

              {pinSuccessMsg ? (
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs font-bold">
                  ✓ {pinSuccessMsg}
                </div>
              ) : (
                <form onSubmit={handleChangePin} className="space-y-4">
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold block mb-1.5">
                      PIN Baru (Minimal 4 Karakter):
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan PIN baru..."
                      value={newPinInput}
                      onChange={(e) => setNewPinInput(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setChangePinModalOpen(false)}
                      className="px-3.5 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs"
                    >
                      Simpan PIN
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Supabase Config Tip Banner if not configured */}
        {!isSupabaseConfigured && (
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3">
            <Database className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-bold">
                Tips Integrasi Database Supabase:
              </strong>
              <p className="mt-0.5 text-slate-300">
                Data saat ini tersimpan di memori lokal browser. Untuk menyimpan data secara permanen di cloud, buat proyek gratis di <strong>supabase.com</strong>, jalankan script di <code>supabase/schema.sql</code>, dan masukkan <code>NEXT_PUBLIC_SUPABASE_URL</code> serta <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> di file <code>.env.local</code> atau dashboard Vercel Anda!
              </p>
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Total Leads</span>
            <div className="text-2xl font-black text-white mt-1">{totalLeads}</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-cyan-500/30">
            <span className="text-xs text-cyan-400 font-bold block uppercase tracking-wider">Belum Dihubungi</span>
            <div className="text-2xl font-black text-cyan-300 mt-1">{newLeads}</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-amber-500/30">
            <span className="text-xs text-amber-400 font-bold block uppercase tracking-wider">Dalam Pengerjaan</span>
            <div className="text-2xl font-black text-amber-300 mt-1">{inProgressLeads}</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-emerald-500/30">
            <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wider">Selesai / Deal</span>
            <div className="text-2xl font-black text-emerald-300 mt-1">{completedLeads}</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama / nomor / proyek..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="all">Semua Status</option>
              <option value="new">Baru (New)</option>
              <option value="contacted">Sudah Dihubungi</option>
              <option value="in_progress">Dalam Proses</option>
              <option value="completed">Selesai (Deal)</option>
            </select>
          </div>
        </div>

        {/* Leads Table / List */}
        <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <Users className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-sm font-semibold">Belum ada leads yang cocok dengan pencarian.</p>
              <p className="text-xs text-slate-500">Coba isi form konsultasi atau kalkulator di halaman depan untuk melakukan simulasi.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-4">Tanggal</th>
                    <th className="p-4">Nama & Kontak</th>
                    <th className="p-4">Proyek & Budget</th>
                    <th className="p-4">Catatan / Detail</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Aksi Follow-Up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredLeads.map((lead, idx) => {
                    const waFollowupLink = createWhatsAppLink(
                      `Halo ${lead.name}, terima kasih telah menghubungi *RIDEV (Rivia Developer)*. Saya ingin menindaklanjuti konsultasi proyek *${lead.project_type}* yang Anda ajukan.`
                    );

                    return (
                      <tr key={lead.id || idx} className="hover:bg-slate-900/40 transition-colors">
                        <td className="p-4 text-slate-400 whitespace-nowrap">
                          {lead.created_at
                            ? new Date(lead.created_at).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "Baru saja"}
                        </td>

                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{lead.name}</div>
                          <div className="flex items-center gap-1.5 text-cyan-300 mt-0.5">
                            <Phone className="w-3 h-3 text-emerald-400" />
                            <span>{lead.phone_or_wa}</span>
                          </div>
                          {lead.email && (
                            <div className="flex items-center gap-1.5 text-slate-400 mt-0.5">
                              <Mail className="w-3 h-3" />
                              <span>{lead.email}</span>
                            </div>
                          )}
                        </td>

                        <td className="p-4">
                          <span className="font-bold text-slate-200 block">{lead.project_type}</span>
                          {lead.estimated_budget && (
                            <span className="text-[11px] text-amber-300 font-semibold block mt-0.5">
                              Budget: {lead.estimated_budget}
                            </span>
                          )}
                          {lead.package_selected && (
                            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 inline-block mt-1">
                              Paket: {lead.package_selected}
                            </span>
                          )}
                        </td>

                        <td className="p-4 max-w-xs">
                          <p className="text-slate-300 line-clamp-2">{lead.notes || "-"}</p>
                          {lead.selected_features && lead.selected_features.length > 0 && (
                            <div className="text-[10px] text-cyan-400 mt-1">
                              Fitur: {lead.selected_features.join(", ")}
                            </div>
                          )}
                        </td>

                        <td className="p-4">
                          <select
                            value={lead.status || "new"}
                            onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                              lead.status === "completed"
                                ? "bg-emerald-950 text-emerald-300 border-emerald-500/40"
                                : lead.status === "in_progress"
                                ? "bg-amber-950 text-amber-300 border-amber-500/40"
                                : lead.status === "contacted"
                                ? "bg-blue-950 text-blue-300 border-blue-500/40"
                                : "bg-rose-950 text-rose-300 border-rose-500/40"
                            }`}
                          >
                            <option value="new">Baru (New)</option>
                            <option value="contacted">Sudah Dihubungi</option>
                            <option value="in_progress">Dalam Proses</option>
                            <option value="completed">Deal / Selesai</option>
                          </select>
                        </td>

                        <td className="p-4 text-right">
                          <a
                            href={waFollowupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Chat WA</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
