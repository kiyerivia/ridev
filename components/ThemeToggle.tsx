"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Clock, Check, ChevronDown } from "lucide-react";
import { useTheme, ThemeMode } from "@/context/ThemeContext";

interface ThemeToggleProps {
  compact?: boolean;
  className?: string;
}

export default function ThemeToggle({ compact = false, className = "" }: ThemeToggleProps) {
  const { theme, mode, isAuto, activeTimeRange, setMode, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { id: ThemeMode; label: string; sublabel: string; icon: React.ReactNode }[] = [
    {
      id: "auto",
      label: "Otomatis (Jam)",
      sublabel: "05.00-18.00 Terang • 18.00-05.00 Gelap",
      icon: <Clock className="w-3.5 h-3.5 text-pink-400" />,
    },
    {
      id: "light",
      label: "Tema Terang",
      sublabel: "Mode Siang (05.00 - 18.00)",
      icon: <Sun className="w-3.5 h-3.5 text-amber-400" />,
    },
    {
      id: "dark",
      label: "Tema Gelap",
      sublabel: "Mode Malam (18.00 - 05.00)",
      icon: <Moon className="w-3.5 h-3.5 text-indigo-400" />,
    },
  ];

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center border ${
          theme === "dark"
            ? "bg-[#140b20] border-pink-500/40 text-amber-300 hover:bg-pink-500/20 shadow-[0_0_15px_rgba(255,0,127,0.2)]"
            : "bg-white border-pink-300 text-amber-500 hover:bg-pink-50 shadow-sm"
        } ${className}`}
        title={`Tema saat ini: ${theme === "dark" ? "Gelap (18.00-05.00)" : "Terang (05.00-18.00)"}. Klik untuk ganti.`}
        aria-label="Ganti Tema Terang/Gelap"
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-indigo-300 fill-indigo-300/30 animate-in spin-in-180 duration-300" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 fill-amber-500/30 animate-in spin-in-180 duration-300" />
        )}
      </button>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Main Toggle Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 ${
          theme === "dark"
            ? "bg-[#100b1a]/90 hover:bg-pink-950/50 border-pink-500/30 hover:border-pink-500/60 text-slate-200 shadow-[0_0_15px_rgba(255,0,127,0.15)]"
            : "bg-white hover:bg-pink-50/80 border-pink-200 hover:border-pink-400 text-slate-800 shadow-sm"
        }`}
        aria-expanded={dropdownOpen}
        aria-label="Pilih Tema Tampilan"
      >
        {theme === "dark" ? (
          <div className="w-5 h-5 rounded-full bg-indigo-950/80 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shrink-0">
            <Moon className="w-3 h-3 fill-indigo-300/40" />
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-400/60 flex items-center justify-center text-amber-500 shrink-0">
            <Sun className="w-3 h-3 fill-amber-400" />
          </div>
        )}

        <span className="hidden sm:inline font-semibold">
          {theme === "dark" ? "Gelap" : "Terang"}
        </span>

        {isAuto && (
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-400 font-bold border border-pink-500/30 hidden md:inline">
            Auto Jam
          </span>
        )}

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-2 w-72 rounded-2xl p-2 border shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 ${
            theme === "dark"
              ? "bg-[#0e0918]/98 backdrop-blur-2xl border-pink-500/40 shadow-black/90 text-slate-200"
              : "bg-white/98 backdrop-blur-2xl border-pink-200 shadow-xl text-slate-800"
          }`}
        >
          {/* Header Info */}
          <div className="px-3 py-2 border-b border-pink-500/15 mb-1">
            <span className="text-[10px] uppercase font-black tracking-wider text-pink-500 block">
              Sistem Tema Waktu Otomatis
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">
              🕒 Terang: <strong>05.00 - 18.00</strong> | Gelap: <strong>18.00 - 05.00</strong>
            </span>
          </div>

          {/* Options */}
          <div className="space-y-1">
            {options.map((opt) => {
              const isSelected = mode === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setMode(opt.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? theme === "dark"
                        ? "bg-pink-950/60 border border-pink-500/40 text-white"
                        : "bg-pink-50 border border-pink-200 text-pink-950 font-bold"
                      : theme === "dark"
                      ? "hover:bg-white/5 text-slate-300"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-black/10 dark:bg-white/10 shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{opt.label}</span>
                      <span className="text-[10px] text-slate-400 block leading-tight">
                        {opt.sublabel}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-pink-500 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
