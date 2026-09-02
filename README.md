# 🌌 RIDEV (Rivia Developer) — Full-Stack Web & App Development Platform

Website resmi dan *direct-response conversion engine* untuk **RIDEV (Rivia Developer)** (Jasa Pembuatan Website & Aplikasi Profesional), dibangun dengan arsitektur modern Next.js 14, Tailwind CSS, Supabase Database, dan siap dipublikasikan ke Vercel.

---

## 🚀 Fitur Unggulan

- **Cosmic Sapphire & Royal Cyber Aesthetic:** Palet warna visual *deep cosmic blue* dengan *neon cyan glow*, *metallic gold typography*, dan *glassmorphism*.
- **Interactive Project Cost Calculator:** Calon klien dapat memilih jenis website, fitur (Auth, Payment Gateway, Ongkir RajaOngkir, SEO Pro, CMS), dan langsung melihat estimasi harga IDR secara transparan.
- **WhatsApp Direct Conversion Engine:** Setiap paket dan kalkulator dilengkapi generator pesan otomatis ke nomor resmi `+62 8222-68-000-63`.
- **Portofolio & Interactive Device Mockup Viewer:** Showcase hasil karya dengan fitur switcher tampilan (Desktop, Tablet, Mobile).
- **5-Tahap SOP Alur Kerja:** SOP transparan (Konsultasi ➔ DP 50% ➔ Desain & Coding ➔ Revisi ➔ Serah Terima + Garansi 1 Tahun).
- **Formulir Konsultasi Terintegrasi Supabase:** Data lead otomatis tersimpan ke tabel database `leads` dan mengarahkan klien langsung ke WhatsApp.
- **Admin Leads Inbox (`/admin`):** Dashboard khusus untuk melacak status follow-up klien yang masuk.
- **Live Sales Proof & Floating WhatsApp Widget:** Meningkatkan rasa percaya dan konversi pengunjung.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database:** [Supabase (PostgreSQL)](https://supabase.com/)
- **Animations & Effects:** Custom CSS Glassmorphism + Canvas Confetti
- **Deployment:** [Vercel](https://vercel.com/)

---

## 💻 Cara Menjalankan di Komputer Lokal

1. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
2. Buka browser dan akses:
   - Website Utama: `http://localhost:3000`
   - Admin Inbox: `http://localhost:3000/admin`

---

## 🗄️ Setup Database Supabase (Gratis)

1. Buka [Supabase.com](https://supabase.com/) dan buat akun/proyek baru gratis.
2. Di dashboard Supabase, buka menu **SQL Editor**.
3. Buka file `supabase/schema.sql` di proyek ini, copy seluruh kodenya, dan paste ke SQL Editor Supabase, lalu tekan tombol **Run**.
4. Buka menu **Project Settings > API** di Supabase, lalu copy:
   - `Project URL`
   - `anon / public key`
5. Buka file `.env.local` di proyek ini dan masukkan:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh......
   NEXT_PUBLIC_WHATSAPP_NUMBER=6282226800063
   NEXT_PUBLIC_EMAIL=kiyerivia@gmail.com
   ```

*(Catatan: Jika belum diisi, website tetap berjalan 100% menggunakan smart local storage fallback).*

---

## ☁️ Cara Deploy ke Vercel (100% Gratis)

### Langkah 1: Upload ke GitHub
1. Buat repositori baru di GitHub (misal: `rivia-studio-web`).
2. Di folder proyek ini, jalankan:
   ```bash
   git init
   git add .
   git commit -m "feat: Rivia Studio Full-stack Launch"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/rivia-studio-web.git
   git push -u origin main
   ```

### Langkah 2: Deploy di Vercel
1. Buka [Vercel.com](https://vercel.com/) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New..." > "Project"**.
3. Pilih repositori `rivia-studio-web` dari daftar GitHub Anda, lalu klik **Import**.
4. Di bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `6282226800063`
   - `NEXT_PUBLIC_EMAIL` = `kiyerivia@gmail.com`
5. Klik **Deploy**! Website Anda akan aktif dan online dalam waktu ~1 menit dengan URL gratis `*.vercel.app` serta sertifikat HTTPS/SSL gratis.

### Langkah 3: Pasang Custom Domain (Opsional)
- Buka dashboard project Anda di Vercel > **Settings > Domains**.
- Masukkan nama domain Anda (misal `riviastudio.com`).
- Arahkan DNS CNAME/A Record di registrar domain Anda sesuai petunjuk Vercel.

---

## 📞 Kontak Resmi
- **WhatsApp:** `+62 8222-68-000-63`
- **Email:** `kiyerivia@gmail.com`
- **Brand:** RIDEV (Rivia Developer)
