-- RIDEV (Rivia Developer) - Database Schema for Supabase
-- Run this in Supabase SQL Editor to initialize all tables

-- 1. Table: leads / inquiries (Konsultasi & Pesanan Masuk)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    phone_or_wa VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    project_type VARCHAR(100) NOT NULL, -- 'Landing Page', 'Company Profile', 'E-Commerce', 'LMS', 'Custom Web', 'Mobile App', etc.
    package_selected VARCHAR(100),       -- 'Promo', 'Standar', 'Bisnis Pro', 'Custom', 'Kalkulator'
    estimated_budget VARCHAR(100),
    selected_features TEXT[],            -- Array of selected add-ons from calculator
    notes TEXT,
    status VARCHAR(50) DEFAULT 'new',    -- 'new', 'contacted', 'in_progress', 'completed', 'cancelled'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table: portfolio_items (Studi Kasus & Hasil Proyek)
CREATE TABLE IF NOT EXISTS public.portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,      -- 'Company Profile', 'E-Commerce', 'Healthcare', 'Travel & Tourism', 'LMS & Education', 'SaaS App'
    description TEXT NOT NULL,
    tech_stack TEXT[] DEFAULT '{}',      -- e.g. ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL']
    image_url TEXT NOT NULL,
    live_demo_url TEXT,
    client_name VARCHAR(255),
    completion_year VARCHAR(10),
    is_featured BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Table: testimonials (Ulasan Klien)
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name VARCHAR(255) NOT NULL,
    client_role VARCHAR(255),
    company VARCHAR(255),
    avatar_url TEXT,
    rating INT DEFAULT 5,
    review_text TEXT NOT NULL,
    project_name VARCHAR(255),
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies:
-- Allow anonymous users to INSERT new leads (from public contact form & calculator)
CREATE POLICY "Allow public insert to leads" ON public.leads
    FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow public read access to active portfolio items & testimonials
CREATE POLICY "Allow public read portfolio" ON public.portfolio_items
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read testimonials" ON public.testimonials
    FOR SELECT TO anon, authenticated USING (is_published = true);

-- Allow authenticated users / service_role full access to manage leads
CREATE POLICY "Allow authenticated read and manage leads" ON public.leads
    FOR ALL TO authenticated, service_role USING (true);

-- Insert Initial Portfolio Items
INSERT INTO public.portfolio_items (title, slug, category, description, tech_stack, image_url, live_demo_url, client_name, completion_year, is_featured, sort_order)
VALUES 
(
    'MedikaCare - Modern Healthcare & Clinic Platform',
    'medikacare-healthcare',
    'Healthcare',
    'Sistem pendaftaran pasien online, profil dokter spesialis, jadwal konsultasi, dan dashboard rekam medis terpadu.',
    ARRAY['Next.js 14', 'Tailwind CSS', 'PostgreSQL', 'Supabase Auth'],
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    'https://medikacare-demo.vercel.app',
    'Klinik Utama Medika Sehat',
    '2026',
    true,
    1
),
(
    'Nusantara Escapes - Luxury Travel & Booking Portal',
    'nusantara-escapes-travel',
    'Travel & Tourism',
    'Portal pemesanan paket wisata premium, integrasi booking kalender, galeri destinasi 360°, dan multi-currency payment.',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Midtrans Gateway'],
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
    'https://nusantaraescapes-demo.vercel.app',
    'PT Nusantara Wisata Bahari',
    '2026',
    true,
    2
),
(
    'AuraStyle - Fashion E-Commerce & Inventory Sync',
    'aurastyle-fashion-ecommerce',
    'E-Commerce',
    'Toko online pakaian modern dengan live stock tracking, keranjang belanja interaktif, kalkulator ongkir otomatis (RajaOngkir), dan auto-WhatsApp invoice.',
    ARRAY['Next.js App Router', 'Zustand', 'Supabase DB', 'Tailwind'],
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
    'https://aurastyle-store.vercel.app',
    'AuraStyle Apparel Indonesia',
    '2026',
    true,
    3
),
(
    'Cendekia Academy - Integrated LMS & E-Learning',
    'cendekia-academy-lms',
    'LMS & Education',
    'Platform kursus online interaktif dengan video streaming, ujian/kuis otomatis, download sertifikat digital, dan forum diskusi antar siswa.',
    ARRAY['Next.js 14', 'Tailwind CSS', 'Supabase Video Storage', 'PostgreSQL'],
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80',
    'https://cendekia-lms-demo.vercel.app',
    'Yayasan Pendidikan Cendekia',
    '2026',
    true,
    4
),
(
    'Nexus ERP - Custom Corporate Operations System',
    'nexus-erp-corporate',
    'Company Profile & Custom App',
    'Aplikasi sistem informasi operasional perusahaan manufaktur, manajemen absensi karyawan, inventory gudang, dan laporan keuangan eksekutif.',
    ARRAY['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL Data Grid'],
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://nexuserp-demo.vercel.app',
    'PT Nexus Global Industri',
    '2026',
    true,
    5
);

-- Insert Initial Testimonials
INSERT INTO public.testimonials (client_name, client_role, company, avatar_url, rating, review_text, project_name)
VALUES
(
    'dr. Hendra Kurniawan, Sp.A',
    'Direktur Medis',
    'MedikaCare Clinic',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&auto=format&fit=crop&q=80',
    5,
    'Luar biasa hasilnya! Pasien sekarang jauh lebih mudah reservasi secara online. Desainnya sangat mewah, loading super kencang, dan tim RIDEV (Rivia Developer) selalu fast response memberikan support.',
    'Website & Booking System MedikaCare'
),
(
    'Siti Rahmawati, S.E.',
    'Owner & Founder',
    'AuraStyle Official',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    5,
    'Sejak website toko online kami dilaunching oleh RIDEV (Rivia Developer), penjualan naik hampir 200%. Fitur WhatsApp invoice dan integrasi ongkirnya sangat memudahkan customer belanja!',
    'E-Commerce Store AuraStyle'
),
(
    'Bambang Sugiarto',
    'CEO & Managing Director',
    'PT Nexus Global Industri',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    5,
    'Sistem ERP custom yang dibuatkan RIDEV (Rivia Developer) sangat stabil dan rapi kodenya. Proses pengerjaannya transparan dengan progres bertahap, garansi 1 tahunnya terbukti nyata.',
    'Custom Operations ERP System'
);
