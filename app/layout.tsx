import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://riviadeveloper.com"),
  title: {
    default: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional #1 di Indonesia",
    template: "%s | RIDEV (Rivia Developer)",
  },
  description:
    "Jasa Pembuatan Website, Toko Online (E-Commerce), Web App, UI/UX Design & Aplikasi Mobile Android/iOS Profesional. Bergaransi 1 Tahun, Cepat, Desain Modern, dan Terbukti SEO Friendly!",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Website Profesional",
    "Jasa Bikin Web Murah",
    "Jasa Pembuatan Website Jakarta",
    "Jasa Pembuatan Website Surabaya",
    "Jasa Pembuatan Website Bandung",
    "Jasa Pembuatan Website Medan",
    "Jasa Pembuatan Website Semarang",
    "Jasa Pembuatan Website Bali",
    "Software House Indonesia",
    "Web Developer Indonesia",
    "Jasa Website Company Profile",
    "Jasa Pembuatan Toko Online E-Commerce",
    "Jasa Pembuatan Landing Page",
    "Jasa Pembuatan Aplikasi Mobile Android iOS",
    "Jasa Bikin Aplikasi Murah",
    "Jasa Desain UI UX",
    "RIDEV",
    "Rivia Developer",
    "Rivia Studio",
    "Bikin Web Bergaransi",
  ],
  authors: [{ name: "RIDEV (Rivia Developer)", url: "https://riviadeveloper.com" }],
  creator: "RIDEV (Rivia Developer)",
  publisher: "RIDEV (Rivia Developer)",
  category: "technology",
  alternates: {
    canonical: "https://riviadeveloper.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional #1",
    description:
      "Wujudkan Website Impian Anda Bersama RIDEV (Rivia Developer)! Cepat, Estetik, SEO-Ready & Bergaransi 1 Tahun. Melayani Seluruh Indonesia.",
    url: "https://riviadeveloper.com",
    siteName: "RIDEV (Rivia Developer)",
    images: [
      {
        url: "/logo.png?v=3",
        width: 1200,
        height: 1200,
        alt: "RIDEV (Rivia Developer) Official Logo & Brand",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIDEV (Rivia Developer) | Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Wujudkan Website Impian Anda Bersama RIDEV (Rivia Developer)! Cepat, Estetik, SEO-Ready & Bergaransi 1 Tahun.",
    images: ["/logo.png?v=3"],
  },
  icons: {
    icon: [
      { url: "/logo.png?v=3" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/logo.png?v=3",
  },
  verification: {
    google: "-kuiEYFPGJjSOWes0r6q2ozMqoZuob-VKOTQjq2d3SM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#07070a" />
        <meta name="google-site-verification" content="-kuiEYFPGJjSOWes0r6q2ozMqoZuob-VKOTQjq2d3SM" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ridev_theme_mode');
                  var hour = new Date().getHours();
                  var activeTheme = (saved === 'light' || saved === 'dark') ? saved : ((hour >= 5 && hour < 18) ? 'light' : 'dark');
                  var root = document.documentElement;
                  if (activeTheme === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                  }
                  root.setAttribute('data-theme', activeTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="font-sans bg-[#f3f1fb] dark:bg-[#06060b] text-slate-900 dark:text-slate-100 min-h-screen antialiased selection:bg-pink-500 selection:text-white transition-colors duration-300"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
