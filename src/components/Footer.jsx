import {
  ArrowUp,
  Heart,
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

        <p className="text-sm text-center">
          Conçu avec <Heart className="inline text-red-500" /> par Ali Dabo.
          &copy; {new Date().getFullYear()} Tous droits réservés.
        </p>
        <p className="text-xs mt-1 text-center">
          Développé avec React & TailwindCSS.
        </p>
      </div>
    </footer>
  );
};