import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional",
  description:
    "Wujudkan Website & Aplikasi Impian Anda Bersama RIDEV (Rivia Developer)! Jasa Pembuatan Website, Web App, UI/UX Design, Ecommerce, LMS & Mobile App Berkualitas Tinggi, Bergaransi, & SEO Friendly.",
  keywords: [
    "Jasa Pembuatan Website",
    "Web Developer Indonesia",
    "RIDEV",
    "Rivia Developer",
    "Software House",
    "Bikin Aplikasi Mobile",
    "Website Company Profile",
    "Jasa Toko Online",
  ],
  authors: [{ name: "RIDEV (Rivia Developer)", url: "https://ridev.vercel.app" }],
  openGraph: {
    title: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Wujudkan Website Impian Anda Bersama RIDEV (Rivia Developer)! Cepat, Estetik, SEO-Ready & Bergaransi.",
    url: "https://ridev.vercel.app",
    siteName: "RIDEV (Rivia Developer)",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#030712" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-rivia-dark text-slate-100 min-h-screen antialiased selection:bg-cyan-400 selection:text-slate-950"
      >
        {children}
      </body>
    </html>
  );
}
