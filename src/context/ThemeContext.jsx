import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    
    // Only use cached theme if the user explicitly clicked the toggle button previously in this session
    const hasOverride = window.sessionStorage.getItem("portfolio-theme-override") === "true";
    if (hasOverride) {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme) return savedTheme;
    }
    
    // Otherwise, dynamically default to system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light-mode", theme === "light");
    root.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else {
      mediaQuery.addListener(handleSystemThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isLightMode: theme === "light",
      toggleTheme: () => {
        setTheme((current) => {
          const next = current === "light" ? "dark" : "light";
          window.sessionStorage.setItem("portfolio-theme-override", "true");
          return next;
        });
      },
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
