"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface SalesNotification {
  name: string;
  city: string;
  packageType: string;
  timeAgo: string;
}

export default function LiveSalesNotification() {
  const notifications: SalesNotification[] = [
    {
      name: "Hermawan",
      city: "Surabaya",
      packageType: "Paket Standar Company Profile",
      timeAgo: "12 menit yang lalu",
    },
    {
      name: "dr. Siska",
      city: "Yogyakarta",
      packageType: "Website Klinik & Booking",
      timeAgo: "25 menit yang lalu",
    },
    {
      name: "Rian Pratama",
      city: "Jakarta Barat",
      packageType: "Paket Promo Landing Page Ads",
      timeAgo: "40 menit yang lalu",
    },
    {
      name: "Bambang",
      city: "Bandung",
      packageType: "Paket Bisnis E-Commerce Store",
      timeAgo: "1 jam yang lalu",
    },
    {
      name: "Yayasan Insan Mulia",
      city: "Semarang",
      packageType: "Portal LMS & Sekolah",
      timeAgo: "2 jam yang lalu",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Loop through notifications every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed, notifications.length]);

  if (dismissed || !visible) return null;

  const current = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs sm:max-w-sm animate-in slide-in-from-bottom-5 duration-500">
      <div className="glass-card rounded-2xl p-3.5 border border-cyan-500/40 shadow-2xl flex items-center gap-3 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 p-0.5"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        <div className="pr-4">
          <span className="text-xs font-bold text-white block">
            {current.name} dari {current.city}
          </span>
          <span className="text-[11px] text-cyan-300 font-medium block">
            Telah memesan <strong className="text-amber-300">{current.packageType}</strong>
          </span>
          <span className="text-[9px] text-slate-400 block mt-0.5">
            ⏱️ {current.timeAgo}
          </span>
        </div>
      </div>
    </div>
  );
}
