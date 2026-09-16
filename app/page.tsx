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
    <main className="min-h-screen bg-[#f8f9fd] dark:bg-[#07070a] text-slate-900 dark:text-slate-100 relative overflow-x-hidden selection:bg-pink-500 selection:text-white transition-colors duration-300">
      {/* 🌟 Dynamic Sci-Fi Animated Cyber Wallpaper & FX Layer */}
      <AnimatedCyberWallpaper />

      {/* Global Background Ambient Laser Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-pink-600/15 via-rose-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0 opacity-40 dark:opacity-100" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none z-0 opacity-30 dark:opacity-100" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none z-0 opacity-30 dark:opacity-100" />

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
