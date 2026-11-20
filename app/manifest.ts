import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RIDEV (Rivia Developer) - Jasa Pembuatan Website & Aplikasi Profesional",
    short_name: "RIDEV",
    description:
      "Jasa Pembuatan Website, Web App, UI/UX Design, Ecommerce, LMS & Mobile App Berkualitas Tinggi, Bergaransi, & SEO Friendly.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070a",
    theme_color: "#ff007f",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
