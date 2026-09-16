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

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#07070a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var hour = new Date().getHours();
                  var activeTheme = (hour >= 5 && hour < 18) ? 'light' : 'dark';
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
        className="font-sans bg-[#f8f9fd] dark:bg-[#07070a] text-slate-900 dark:text-slate-100 min-h-screen antialiased selection:bg-pink-500 selection:text-white transition-colors duration-300"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
