import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("http") &&
    !supabaseUrl.includes("your-project-id")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

export interface LeadRecord {
  id?: string;
  name: string;
  phone_or_wa: string;
  email?: string;
  project_type: string;
  package_selected?: string;
  estimated_budget?: string;
  selected_features?: string[];
  notes?: string;
  status?: string;
  created_at?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  live_demo_url?: string;
  client_name?: string;
  completion_year: string;
  is_featured: boolean;
}

export interface TestimonialItem {
  id: string;
  client_name: string;
  client_role: string;
  company: string;
  avatar_url: string;
  rating: number;
  review_text: string;
  project_name: string;
}

// Fallback seed data in case Supabase is not connected
export const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: "p-1",
    title: "MedikaCare - Modern Healthcare & Clinic Platform",
    slug: "medikacare-healthcare",
    category: "Healthcare",
    description:
      "Sistem pendaftaran pasien online, profil dokter spesialis, jadwal konsultasi terpadu, dan rekam medis elektronik.",
    tech_stack: ["Next.js 14", "Tailwind CSS", "Supabase Auth", "PostgreSQL"],
    image_url: "/Medika Care.png",
    live_demo_url: "https://medikacare-demo.vercel.app",
    client_name: "Klinik Utama Medika Sehat",
    completion_year: "2026",
    is_featured: true,
  },
  {
    id: "p-2",
    title: "Nusantara Escapes - Luxury Travel & Booking Portal",
    slug: "nusantara-escapes-travel",
    category: "Travel & Tourism",
    description:
      "Portal pemesanan paket wisata kepulauan premium, kalender booking interaktif, showcase destinasi 360°, dan multi-payment gateway.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Midtrans"],
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    live_demo_url: "https://nusantaraescapes-demo.vercel.app",
    client_name: "PT Nusantara Wisata Bahari",
    completion_year: "2026",
    is_featured: true,
  },
  {
    id: "p-3",
    title: "AuraStyle - Fashion E-Commerce & Inventory Sync",
    slug: "aurastyle-fashion-ecommerce",
    category: "E-Commerce",
    description:
      "Toko online pakaian modern dengan real-time stock sync, keranjang belanja interaktif, kalkulator ongkir otomatis, dan auto-invoice WhatsApp.",
    tech_stack: ["Next.js App Router", "Zustand", "Supabase DB", "Tailwind"],
    image_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
    live_demo_url: "https://aurastyle-store.vercel.app",
    client_name: "AuraStyle Apparel Indonesia",
    completion_year: "2026",
    is_featured: true,
  },
  {
    id: "p-4",
    title: "Cendekia Academy - Integrated LMS & E-Learning",
    slug: "cendekia-academy-lms",
    category: "LMS & Education",
    description:
      "Platform kursus dan pembelajaran digital lengkap dengan video streaming aman, kuis/ujian interaktif, dan sertifikat otomatis.",
    tech_stack: ["Next.js 14", "Tailwind CSS", "Supabase Video Storage", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80",
    live_demo_url: "https://cendekia-lms-demo.vercel.app",
    client_name: "Yayasan Pendidikan Cendekia",
    completion_year: "2026",
    is_featured: true,
  },
  {
    id: "p-5",
    title: "Nexus ERP - Corporate Operations & Inventory",
    slug: "nexus-erp-corporate",
    category: "Custom App",
    description:
      "Aplikasi internal enterprise untuk otomasi manajemen stok multi-gudang, absensi geolocation, dan dashboard analitik laba rugi.",
    tech_stack: ["React", "Next.js", "Tailwind CSS", "PostgreSQL Data Grid"],
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    live_demo_url: "https://nexuserp-demo.vercel.app",
    client_name: "PT Nexus Global Industri",
    completion_year: "2026",
    is_featured: true,
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    client_name: "dr. Hendra Kurniawan, Sp.A",
    client_role: "Direktur Medis",
    company: "MedikaCare Clinic",
    avatar_url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    review_text:
      "Hasil website dari RIDEV (Rivia Developer) sangat melebihi ekspektasi! Pasien sekarang jauh lebih mudah reservasi secara online. Desainnya sangat elegan, loading super cepat, dan timnya sangat responsif.",
    project_name: "Website & Booking System MedikaCare",
  },
  {
    id: "t-2",
    client_name: "Siti Rahmawati, S.E.",
    client_role: "Owner & Founder",
    company: "AuraStyle Official",
    avatar_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    review_text:
      "Sejak website toko online kami dilaunching oleh RIDEV (Rivia Developer), penjualan naik drastis. Fitur WhatsApp invoice dan integrasi ongkirnya sangat praktis. Sangat direkomendasikan!",
    project_name: "E-Commerce Store AuraStyle",
  },
  {
    id: "t-3",
    client_name: "Bambang Sugiarto",
    client_role: "CEO & Managing Director",
    company: "PT Nexus Global Industri",
    avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    review_text:
      "Sistem custom yang dibangun RIDEV (Rivia Developer) sangat rapi dan stabil. Alur kerjanya transparan mulai dari DP 50%, revisi teratur, hingga serah terima. Garansinya terbukti nyata.",
    project_name: "Custom Operations ERP System",
  },
];

// Helper to save a lead (either in Supabase or local storage fallback)
export async function submitLead(leadData: LeadRecord): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    if (supabase) {
      const { data, error } = await supabase.from("leads").insert([leadData]).select();
      if (error) {
        console.warn("Supabase insert error, falling back to local simulation:", error.message);
      } else {
        return { success: true, data };
      }
    }

    // Client-side fallback saving
    if (typeof window !== "undefined") {
      const existing = JSON.parse(localStorage.getItem("rivia_local_leads") || "[]");
      const newLead = {
        ...leadData,
        id: "loc-" + Date.now(),
        created_at: new Date().toISOString(),
        status: "new",
      };
      existing.unshift(newLead);
      localStorage.setItem("rivia_local_leads", JSON.stringify(existing));
      return { success: true, data: [newLead] };
    }

    return { success: true, data: [leadData] };
  } catch (err: any) {
    console.error("submitLead error:", err);
    return { success: false, error: err?.message || "Unknown error" };
  }
}

export async function fetchLeads(): Promise<LeadRecord[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) {
        return data;
      }
    }
  } catch (e) {
    console.warn("Supabase fetch failed, trying local fallback:", e);
  }

  if (typeof window !== "undefined") {
    const local = JSON.parse(localStorage.getItem("rivia_local_leads") || "[]");
    return local;
  }
  return [];
}
