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

      const sections = navItems.map(item => item.href.substring(1));
      const currentPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2 focus-ring rounded-lg p-1"
        >
          <img
            src="/logo.ico"
            alt="Logo"
            className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          />
          <span className={cn(
            "font-semibold text-lg transition-all duration-500",
            isScrolled ? "text-foreground" : "text-primary"
          )}>
            Ali Dabo
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "py-2 px-4 rounded-lg transition-all duration-300 font-medium relative group",
                  "hover:text-primary focus-ring",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 transform origin-left",
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-all duration-300",
            "hover:bg-primary/5 focus-ring",
            isMenuOpen ? "bg-primary/10 text-primary rotate-90" : "rotate-0"
          )}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-6 text-xl">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "py-3 px-6 rounded-xl font-medium text-center transition-all duration-300",
                    "transform",
                    isMenuOpen ? `translate-y-0 opacity-100 delay-[${index * 100}ms]` : "-translate-y-8 opacity-0",
                    isActive
                      ? "bg-primary/10 text-primary scale-110"
                      : "hover:bg-primary/5 hover:text-primary hover:scale-110"
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
