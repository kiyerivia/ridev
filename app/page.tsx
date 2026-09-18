"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePackage from "@/components/FeaturePackage";
import Pricing from "@/components/Pricing";
import CostCalculator from "@/components/CostCalculator";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import ClosingTrustBanner from "@/components/ClosingTrustBanner";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedCyberWallpaper from "@/components/AnimatedCyberWallpaper";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07040d] text-slate-100 relative overflow-x-hidden selection:bg-[#ff007f] selection:text-white">
      {/* 🌟 Dynamic Sci-Fi Animated Cyber Wallpaper & FX Layer */}
      <AnimatedCyberWallpaper />

      {/* Global Background Ambient Laser Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[2px] h-[800px] bg-gradient-to-b from-pink-500/70 via-rose-500/20 to-transparent shadow-[0_0_25px_#ff007f] pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-pink-600/15 via-rose-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/4 -left-40 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Section & Masterpiece Showcase */}
      <Hero />

      {/* 6 Core Value Deliverables / Feature Package */}
      <FeaturePackage />

      {/* Transparent Pricing Packages */}
      <Pricing />

      {/* Interactive Project Cost Calculator */}
      <CostCalculator />

      {/* Services Showcase */}
      <Services />

      {/* Comprehensive Case Studies & Interactive Portfolio */}
      <Portfolio />

      {/* 5-Step SOP Workflow */}
      <Workflow />

      {/* Client Reviews & FAQ */}
      <Testimonials />

      {/* Closing Trust & Action Banner */}
      <ClosingTrustBanner />

      {/* Lead Generation & Consultation Form */}
      <ConsultationForm />

      {/* Detailed Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWhatsApp />
      <BackgroundMusic />
    </main>
  );
}
