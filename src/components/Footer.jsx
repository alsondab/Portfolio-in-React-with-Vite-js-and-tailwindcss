import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className="container mx-auto px-4">
        {/* ArrowUp positioned absolutely at the top right */}
        <a
          href="#hero"
          className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors z-10"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </a>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/alsondab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-purple-400 transition-colors duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/alsondab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-purple-400 transition-colors duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:contact@alidabo.site"
            className="hover:text-primary dark:hover:text-purple-400 transition-colors duration-300"
          >
            <Mail size={28} />
          </a>
          <a
            href="tel:+2250710145864"
            className="hover:text-primary dark:hover:text-purple-400 transition-colors duration-300"
          >
            <Phone size={28} />
          </a>
        </div>

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Ali Dabo. Tous droits réservés.
        </p>
        <p className="text-xs mt-1 text-center">
          Développé avec React, TailwindCSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
};