import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
  authors: [{ name: "RIDEV (Rivia Developer)", url: "https://riviadeveloper.com" }],
  openGraph: {
    title: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Wujudkan Website Impian Anda Bersama RIDEV (Rivia Developer)! Cepat, Estetik, SEO-Ready & Bergaransi.",
    url: "https://riviadeveloper.com",
    siteName: "RIDEV (Rivia Developer)",
    locale: "id_ID",
    type: "website",
  },
  metadataBase: new URL("https://riviadeveloper.com"),
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
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#07070a" />
      </head>
      <body
        className="font-sans bg-[#07070a] text-slate-100 min-h-screen antialiased selection:bg-pink-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
