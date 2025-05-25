import { Moon, Sun, Stars } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Vérifier la préférence dans localStorage ou le mode du système
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    
    // Appliquer le thème initial
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    
    // Mettre à jour le localStorage si nécessaire
    if (!storedTheme) {
      localStorage.setItem("theme", shouldBeDark ? "dark" : "light");
    }

    // Écouter les changements de préférence système
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    
    // Ajouter une classe de transition avant de changer le thème
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("dark", newIsDarkMode);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
    
    // Retirer la classe de transition après l'animation
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
      setIsAnimating(false);
    }, 500);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-4 rounded-xl transition-all duration-500",
        "bg-white/10 backdrop-blur-md shadow-lg border border-white/20",
        "hover:bg-white/20 hover:scale-110 hover:rotate-12",
        "dark:bg-gray-950/30 dark:border-white/10",
        "group focus-ring",
        isAnimating && "scale-90 rotate-180"
      )}
    >
      <div className="relative w-6 h-6">
        <div className={cn(
          "absolute inset-0 transition-all duration-500 transform",
          isDarkMode ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        )}>
          <Sun className="w-6 h-6 text-yellow-400" />
          <span className="absolute top-0 left-0 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
        </div>
        <div className={cn(
          "absolute inset-0 transition-all duration-500 transform",
          isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
        )}>
          <Moon className="w-6 h-6 text-blue-300" />
          <Stars className="absolute top-0 right-0 w-2 h-2 text-blue-200 animate-twinkle" />
        </div>
      </div>
    </button>
  );
};