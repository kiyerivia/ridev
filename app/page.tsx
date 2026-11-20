"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePackage from "@/components/FeaturePackage";
import Services from "@/components/Services";
import CostCalculator from "@/components/CostCalculator";
import Pricing from "@/components/Pricing";
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
    <main className="min-h-screen bg-[#f3f1fb] dark:bg-[#06060b] text-slate-900 dark:text-slate-100 relative overflow-x-hidden selection:bg-pink-500 selection:text-white transition-colors duration-300">
      {/* 🌟 Dynamic Liquid Glass Chromatic Aura & Animated Backdrop */}
      <AnimatedCyberWallpaper />

      {/* Global Background Ambient Chromatic Orbs for Glass Refraction */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-gradient-to-b from-pink-500/20 via-fuchsia-500/12 to-transparent rounded-full blur-[140px] pointer-events-none z-0 opacity-65 dark:opacity-90" />
      <div className="fixed bottom-0 left-0 w-[640px] h-[640px] bg-cyan-400/15 dark:bg-violet-600/15 rounded-full blur-[150px] pointer-events-none z-0 opacity-60 dark:opacity-90" />
      <div className="fixed bottom-0 right-0 w-[640px] h-[640px] bg-pink-400/20 dark:bg-pink-600/15 rounded-full blur-[150px] pointer-events-none z-0 opacity-60 dark:opacity-90" />

      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section (ATM EDA Credibility & Nationwide Coverage) */}
      <Hero />

      {/* 6 Core Value Deliverables / Our Feature Package (ATM EDA) */}
      <FeaturePackage />

      {/* Transparent 4-Tier Pricing Packages with Renewal Fee & Expandable Specs (ATM EDA) */}
      <Pricing />

      {/* Interactive Project Cost Calculator */}
      <CostCalculator />

      {/* Services Showcase */}
      <Services />

      {/* Case Studies & Portfolio */}
      <Portfolio />

      {/* 5-Step SOP Workflow */}
      <Workflow />

      {/* Client Reviews & FAQ */}
      <Testimonials />

      {/* Closing Trust & Action Banner (ATM EDA) */}
      <ClosingTrustBanner />

      {/* Lead Generation & Contact Form */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWhatsApp />
      <BackgroundMusic />
    </main>
  );
}
