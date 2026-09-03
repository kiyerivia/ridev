import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rivia: {
          dark: "#05050a",
          navy: "#0a0614",
          deep: "#120924",
          card: "rgba(18, 9, 36, 0.75)",
          cardBorder: "rgba(236, 72, 153, 0.25)",
          pink: "#ff007f",
          pinkLight: "#f472b6",
          magenta: "#d946ef",
          rose: "#f43f5e",
          crimson: "#e11d48",
          cyan: "#00f0ff",
          cyanLight: "#67e8f9",
          blue: "#2563eb",
          sapphire: "#1d4ed8",
          gold: "#f59e0b",
          goldLight: "#fde047",
          goldDark: "#d97706",
          purple: "#8b5cf6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "pink-gradient": "linear-gradient(135deg, #F472B6 0%, #FF007F 50%, #BE185D 100%)",
        "cyber-gradient": "linear-gradient(135deg, #00F0FF 0%, #EC4899 50%, #FF007F 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFF0A5 0%, #FFD700 50%, #FF9900 100%)",
        "cyan-gradient": "linear-gradient(135deg, #A5F3FC 0%, #00F0FF 50%, #0284C7 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(24, 11, 46, 0.75) 0%, rgba(10, 6, 20, 0.9) 100%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(255, 0, 127, 0.18) 0%, rgba(0, 240, 255, 0.12) 40%, transparent 70%)",
      },
      boxShadow: {
        "glow-pink": "0 0 25px -5px rgba(255, 0, 127, 0.5)",
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.4)",
        "glow-blue": "0 0 30px -5px rgba(37, 99, 235, 0.5)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "card-glass": "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(236, 72, 153, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
