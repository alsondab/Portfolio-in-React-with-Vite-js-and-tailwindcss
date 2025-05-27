import {
  ArrowUp,
  Heart,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alsondab",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alsondab",
      icon: <Linkedin className="w-5 h-5" />
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "contact@alidabo.site",
      href: "mailto:contact@alidabo.site"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+224 07-10-14-58-64",
      href: "tel:+2240710145864"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Abidjan, Côte d'Ivoire",
      href: null
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-secondary/10 via-background to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Back to top button */}
      <div className="container mx-auto px-4">
        <a
          href="#hero"
          className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary shadow-sm hover:shadow-lg transition-all duration-300 group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">À propos</h3>
            <p className="text-muted-foreground">
              Développeur Full-Stack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Liens rapides</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">À propos</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Compétences</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projets</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{item.icon}</span>
                    <span>{item.text}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-muted-foreground">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 mt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left text-muted-foreground flex items-center gap-1">
              Conçu avec <Heart className="w-4 h-4 text-red-500 hover:animate-ping" /> par Ali Dabo
              <span className="mx-2 text-muted-foreground/60">•</span>
              &copy; {currentYear} Tous droits réservés
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Développé avec
              <span className="text-primary font-medium">React</span>
              &
              <span className="text-primary font-medium">TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};