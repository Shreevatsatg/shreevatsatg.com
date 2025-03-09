'use client';

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = 
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      
      // Dark mode CSS variables
      document.documentElement.style.setProperty('--bg-primary', '#111827');
      document.documentElement.style.setProperty('--bg-secondary', '#1f2937');
      document.documentElement.style.setProperty('--bg-tertiary', '#374151');
      document.documentElement.style.setProperty('--text-primary', '#f3f4f6');
      document.documentElement.style.setProperty('--text-secondary', '#d1d5db');
      document.documentElement.style.setProperty('--accent-primary', '#f59e0b');
      document.documentElement.style.setProperty('--accent-secondary', '#f97316');
      document.documentElement.style.setProperty('--accent-primary-50', 'rgba(245, 158, 11, 0.5)');
      document.documentElement.style.setProperty('--accent-primary-70', 'rgba(245, 158, 11, 0.7)');
      document.documentElement.style.setProperty('--accent-primary-10', 'rgba(245, 158, 11, 0.1)');
      document.documentElement.style.setProperty('--border-color', '#4b5563');
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      
      // Light mode CSS variables - Enhanced color scheme
      document.documentElement.style.setProperty('--bg-primary', '#f8fafc');
      document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
      document.documentElement.style.setProperty('--bg-tertiary', '#f1f5f9');
      document.documentElement.style.setProperty('--text-primary', '#334155');
      document.documentElement.style.setProperty('--text-secondary', '#64748b');
      document.documentElement.style.setProperty('--accent-primary', '#f97316');
      document.documentElement.style.setProperty('--accent-secondary', '#fb923c');
      document.documentElement.style.setProperty('--accent-primary-50', 'rgba(249, 115, 22, 0.5)');
      document.documentElement.style.setProperty('--accent-primary-70', 'rgba(249, 115, 22, 0.7)');
      document.documentElement.style.setProperty('--accent-primary-10', 'rgba(249, 115, 22, 0.1)');
      document.documentElement.style.setProperty('--border-color', '#e2e8f0');
    }
  }, [darkMode, mounted]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 