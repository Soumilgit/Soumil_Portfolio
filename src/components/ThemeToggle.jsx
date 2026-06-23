import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isLightMode, toggleTheme } = useTheme();
  const Icon = isLightMode ? Moon : Sun;

  return (
    <button
      type="button"
      aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
      title={isLightMode ? "Dark mode" : "Light mode"}
      onClick={toggleTheme}
      className={`theme-toggle inline-flex h-10 px-3 flex-shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/70 text-[#37b54a] backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[#37b54a] gap-2 ${className}`}
    >
      <Icon size={20} aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wider">
        {isLightMode ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default ThemeToggle;
