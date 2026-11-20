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
  const [mode, setModeState] = useState<ThemeMode>("auto");
  const [mounted, setMounted] = useState(false);

  // Initialize theme based on saved preference or local clock time
  useEffect(() => {
    setMounted(true);
    let savedMode: ThemeMode = "auto";
    try {
      const stored = localStorage.getItem("ridev_theme_mode") as ThemeMode | null;
      if (stored === "light" || stored === "dark" || stored === "auto") {
        savedMode = stored;
      }
    } catch (e) {}

    setModeState(savedMode);
    const effectiveTheme = savedMode === "auto" ? getTimeBasedTheme() : savedMode;
    setTheme(effectiveTheme);
    applyThemeToDOM(effectiveTheme);
  }, []);

  // Periodic check for auto time-based theme (runs every 30 seconds only when mode === "auto")
  useEffect(() => {
    if (!mounted || mode !== "auto") return;

    const checkTimeTheme = () => {
      const timeTheme = getTimeBasedTheme();
      setTheme(timeTheme);
      applyThemeToDOM(timeTheme);
    };

    const interval = setInterval(checkTimeTheme, 30000);
    return () => clearInterval(interval);
  }, [mounted, mode]);

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
        activeTheme === "dark" ? "#06060b" : "#f3f1fb"
      );
    }
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem("ridev_theme_mode", newMode);
    } catch (e) {}
    const effectiveTheme = newMode === "auto" ? getTimeBasedTheme() : newMode;
    setTheme(effectiveTheme);
    applyThemeToDOM(effectiveTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setMode(nextTheme);
  };

  const isAuto = mode === "auto";
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
