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
        className={`p-2 rounded-xl glass-pill transition-all duration-300 flex items-center justify-center hover:scale-105 ${className}`}
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
        className="group flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-bold text-slate-800 dark:text-slate-100 hover:scale-[1.03] transition-all duration-300"
        aria-expanded={dropdownOpen}
        aria-label="Pilih Tema Tampilan"
      >
        {theme === "dark" ? (
          <div className="w-5 h-5 rounded-full bg-indigo-500/25 border border-indigo-300/40 flex items-center justify-center text-indigo-200 shrink-0">
            <Moon className="w-3 h-3 fill-indigo-300/40" />
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-amber-400/25 border border-amber-400/50 flex items-center justify-center text-amber-500 shrink-0">
            <Sun className="w-3 h-3 fill-amber-400" />
          </div>
        )}

        <span className="hidden sm:inline font-semibold">
          {theme === "dark" ? "Dark Glass" : "Light Glass"}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 dark:text-slate-300 transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2.5 w-72 rounded-2xl p-2 glass-surface z-50 animate-in fade-in zoom-in-95 duration-200 text-slate-800 dark:text-slate-200"
        >
          {/* Header Info */}
          <div className="px-3 py-2 border-b border-white/40 dark:border-white/10 mb-1">
            <span className="text-[10px] uppercase font-black tracking-wider text-pink-600 dark:text-pink-400 block">
              Mode Tampilan Liquid Glass
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
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
                      ? "bg-pink-500/15 dark:bg-pink-500/25 border border-pink-400/40 text-pink-950 dark:text-white font-bold"
                      : "hover:bg-white/50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white/50 dark:bg-white/10 shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{opt.label}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight">
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
