"use client";

import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("faithcine-theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle light and dark mode" title="Toggle light and dark mode">
      <FaSun className="theme-icon-dark" aria-hidden="true" />
      <FaMoon className="theme-icon-light" aria-hidden="true" />
    </button>
  );
}
