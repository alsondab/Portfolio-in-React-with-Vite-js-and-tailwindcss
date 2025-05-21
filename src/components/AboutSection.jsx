import { useState, useEffect, useRef } from "react";
import { Briefcase, Code, User, ChevronRight, Eye } from "lucide-react"; // Import Eye icon
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentSectionRef) {
            observer.unobserve(currentSectionRef);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-4 relative bg-gradient-to-b from-secondary/10 to-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 opacity-5" width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Découvrez mon profil
          </div>
          <h2 className="text-4xl md:text-5xl font-bold relative">
            À Propos de <span className="text-primary">Moi</span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left column: Bio */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="relative mb-10">
              <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full"></div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Développeur web passionné et créateur technologique
              </h3>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
              Je suis <span className="font-semibold text-primary">Ali Dabo</span>, un développeur front-end passionné et étudiant en troisième année de Licence en Génie Logiciel à l'Université de Technologie d'Abidjan. Fort d'une curiosité insatiable pour les nouvelles technologies, je m'efforce de créer des interfaces utilisateur intuitives, esthétiques et performantes.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Bilingue et doté d'un bon sens de la communication, j'aime travailler en équipe et relever de nouveaux défis techniques. Mon objectif est de contribuer à des projets innovants qui ont un impact positif et j'aspire à devenir un développeur Full-Stack JavaScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center gap-2 group"
              >
                <span>Me contacter</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Bouton "Voir le CV en ligne" mis à jour pour la navigation */}
              <a
                href="/my-cv" // Lien direct vers la route /my-cv
                className="px-6 py-3 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                {/* Icône "Eye" avec des animations */}
                <Eye className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-active:scale-125" />
                <span>Voir le CV en ligne</span>
                {/* Effet d'animation visuel (onde ou balayage) */}
                <span className="absolute inset-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                {/* Autre petite animation pour l'état actif ou un clic */}
                <span className="absolute inset-0 opacity-0 group-active:opacity-100 bg-primary/30 rounded-full blur-sm transition-opacity duration-100"></span>
              </a>
            </div>
          </motion.div>

          {/* Right column: Services */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6">
              <div className="group">
                <div className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Développement Web</h4>
                      <p className="text-muted-foreground mt-2">
                        Création de sites web réactifs et d'applications web avec des frameworks modernes comme React, Next.js et TailwindCSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Conception UI/UX</h4>
                      <p className="text-muted-foreground mt-2">
                        Conception d'interfaces utilisateur intuitives et d'expériences utilisateur fluides avec une attention particulière aux détails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Gestion de Projet</h4>
                      <p className="text-muted-foreground mt-2">
                        Direction de projets de la conception à la réalisation avec des méthodologies agiles et des outils modernes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-24 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};