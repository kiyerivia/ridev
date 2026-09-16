"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ThemeMode = "auto" | "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  isAuto: boolean;
  activeTimeRange: string;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Time-based theme evaluator:
 * 05:00 - 18:00 -> "light" (Tema Terang)
 * 18:00 - 05:00 -> "dark"  (Tema Gelap)
 */
export function getTimeBasedTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const hour = new Date().getHours();
  return hour >= 5 && hour < 18 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme based on local clock time
  useEffect(() => {
    setMounted(true);
    // Clear any legacy override
    try {
      localStorage.removeItem("ridev_theme_mode");
    } catch (e) {}

    const effectiveTheme = getTimeBasedTheme();
    setTheme(effectiveTheme);
    applyThemeToDOM(effectiveTheme);
  }, []);

  // Periodic check for auto time-based theme (runs every 30 seconds)
  useEffect(() => {
    if (!mounted) return;

    const checkTimeTheme = () => {
      const timeTheme = getTimeBasedTheme();
      setTheme(timeTheme);
      applyThemeToDOM(timeTheme);
    };

    const interval = setInterval(checkTimeTheme, 30000);
    return () => clearInterval(interval);
  }, [mounted]);

  const applyThemeToDOM = (activeTheme: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    if (activeTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    root.setAttribute("data-theme", activeTheme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        activeTheme === "dark" ? "#07070a" : "#f8f9fd"
      );
    }
  };

  const setMode = (_newMode: ThemeMode) => {
    // No-op or update if needed
  };

  const toggleTheme = () => {
    // Toggle for testing/fallback
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyThemeToDOM(nextTheme);
  };

  const isAuto = true;
  const mode: ThemeMode = "auto";
  const activeTimeRange =
    theme === "light" ? "05.00 - 18.00 (Terang)" : "18.00 - 05.00 (Gelap)";

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        isAuto,
        activeTimeRange,
        setMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
