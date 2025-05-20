import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Vérifier la préférence dans localStorage ou le mode du système
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    // Démarrer l'animation
    setIsAnimating(true);
    
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    
    // Désactiver l'animation après 500ms
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
      className={cn(
        "fixed top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
        "focus-ring hover:bg-primary/10",
        "max-sm:bottom-5 max-sm:top-auto",
        isAnimating && "scale-125",
        isDarkMode ? "bg-background/30 backdrop-blur-sm" : "bg-background/70 backdrop-blur-sm"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform duration-300" />
      )}
    </button>
  );
};