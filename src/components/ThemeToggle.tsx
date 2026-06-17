"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode based on existing preferences or set it
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-7 w-14 ml-4 items-center rounded-full transition-colors duration-300 focus:outline-none ${
        isDark ? "bg-gray-700" : "bg-gray-300"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      />
    </button>
  );
}
