import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
          dark: "#07070a",
          deep: "#0c0814",
          obsidian: "#100b19",
          card: "rgba(12, 8, 20, 0.82)",
          cardBorder: "rgba(255, 0, 127, 0.28)",
          pink: "#ff007f",
          pinkDark: "#d6006a",
          pinkLight: "#ff4da6",
          crimson: "#ff0038",
          ruby: "#ff0055",
          cyan: "#00f0ff",
          cyanDark: "#00bcd4",
          purple: "#8b5cf6",
          gold: "#f59e0b",
          silver: "#e2e8f0",
          slate: "#0f172a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "pink-gradient": "linear-gradient(135deg, #FF4DA6 0%, #FF007F 50%, #D6006A 100%)",
        "laser-gradient": "linear-gradient(135deg, #FF007F 0%, #FF0055 50%, #FF0038 100%)",
        "cyber-gradient": "linear-gradient(135deg, #FF007F 0%, #8B5CF6 50%, #00F0FF 100%)",
        "dark-card-gradient": "linear-gradient(180deg, rgba(20, 12, 30, 0.85) 0%, rgba(10, 6, 18, 0.9) 100%)",
        "crimson-glow": "radial-gradient(circle at 50% 0%, rgba(255, 0, 56, 0.25) 0%, rgba(255, 0, 127, 0.12) 45%, transparent 75%)",
        "laser-beam": "linear-gradient(180deg, rgba(255, 0, 127, 0.8) 0%, rgba(255, 0, 56, 0.3) 70%, transparent 100%)",
      },
      boxShadow: {
        "glow-pink": "0 0 25px rgba(255, 0, 127, 0.45)",
        "glow-crimson": "0 0 30px rgba(255, 0, 56, 0.5)",
        "glow-cyan": "0 0 25px rgba(0, 240, 255, 0.4)",
        "laser-card": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 0, 127, 0.25)",
        "laser-card-hover": "0 20px 40px -5px rgba(255, 0, 127, 0.25), 0 0 25px rgba(255, 0, 127, 0.45), 0 0 0 1.5px rgba(255, 0, 127, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "holo-scan": "holoScan 4s linear infinite",
        "cyber-breathing": "cyberBreathing 18s ease-in-out infinite alternate",
        "laser-scan": "laserScan 6s linear infinite",
        "floor-flicker": "floorFlicker 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        holoScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        cyberBreathing: {
          "0%": { transform: "scale(1.02) translate(0px, 0px)", filter: "brightness(0.95)" },
          "50%": { transform: "scale(1.07) translate(-5px, -4px)", filter: "brightness(1.1)" },
          "100%": { transform: "scale(1.04) translate(4px, 3px)", filter: "brightness(1.0)" },
        },
        laserScan: {
          "0%": { top: "-10%", opacity: "0" },
          "15%": { opacity: "0.85" },
          "85%": { opacity: "0.85" },
          "100%": { top: "110%", opacity: "0" },
        },
        floorFlicker: {
          "0%, 100%": { opacity: "0.35", filter: "blur(8px)" },
          "50%": { opacity: "0.7", filter: "blur(14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
