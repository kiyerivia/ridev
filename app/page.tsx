"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060309] text-white relative overflow-x-hidden selection:bg-[#ff007f] selection:text-white">
      {/* Background Cyber Floor Grid */}
      <div className="fixed inset-0 cyber-floor-grid pointer-events-none opacity-20 z-0" />

      {/* Global Background Ambient Laser Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[2px] h-[800px] bg-gradient-to-b from-pink-500/70 via-rose-500/20 to-transparent shadow-[0_0_25px_#ff007f] pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-pink-600/15 via-rose-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/4 -left-40 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Single Page Masterpiece Layout */}
      <Hero />

      {/* Floating Widgets */}
      <FloatingWhatsApp />
      <BackgroundMusic />
    </main>
  );
}
