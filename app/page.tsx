"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CostCalculator from "@/components/CostCalculator";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import LiveSalesNotification from "@/components/LiveSalesNotification";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-rivia-dark text-slate-100 relative selection:bg-cyan-400 selection:text-slate-950">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Showcase */}
      <Services />

      {/* Interactive Project Cost Calculator */}
      <CostCalculator />

      {/* Transparent Pricing Packages */}
      <Pricing />

      {/* Case Studies & Portfolio */}
      <Portfolio />

      {/* 5-Step SOP Workflow */}
      <Workflow />

      {/* Client Reviews & FAQ */}
      <Testimonials />

      {/* Lead Generation & Contact Form */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <LiveSalesNotification />
      <FloatingWhatsApp />
    </main>
  );
}
