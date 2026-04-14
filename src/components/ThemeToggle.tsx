import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2.5 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-secondary" />}
    </button>
  );
};

export default ThemeToggle;
