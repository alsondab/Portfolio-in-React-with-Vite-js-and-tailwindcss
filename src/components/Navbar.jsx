import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Détection de la section active
      const sections = navItems.map(item => item.href.substring(1));
      const currentPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-md border-b border-border shadow-sm" 
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Nom */}
        <a
          className="text-xl font-bold flex items-center group focus-ring rounded-md"
          href="#hero"
        >
          <span className="relative z-10 text-glow text-primary transition-colors duration-300 group-hover:text-accent">
            Dabo
          </span>
          <span className="ml-1 text-foreground transition-colors duration-300 group-hover:text-primary">
            Ali
          </span>
        </a>

        {/* Navigation desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "py-2 px-3 rounded-md transition-colors duration-300 font-medium relative focus-ring",
                  isActive 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Menu mobile */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 text-foreground z-50 rounded-full",
            "transition-colors duration-300 focus-ring",
            isMenuOpen ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
          )}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Panneau mobile */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-xl w-full max-w-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "py-3 px-5 rounded-lg font-medium text-center transition-colors duration-300",
                    isActive 
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};