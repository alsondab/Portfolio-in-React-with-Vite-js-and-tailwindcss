import { useEffect, useState, useRef } from "react";
import { ArrowDown, Code, FileText, ExternalLink, ChevronRight, Terminal, Braces, Database } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // No need for eslint-disable-next-line here

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const profileRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // Code snippets qui apparaîtront autour de l'image
  const codeSnippets = [
    { code: "const developer = 'Ali Dabo';", type: "js", position: "-left-20 top-10" },
    { code: "<Portfolio />", type: "jsx", position: "right-0 top-20" },
    { code: ".container { perspective: 1000px; }", type: "css", position: "-left-24 bottom-20" },
    { code: "npm install success", type: "terminal", position: "right-0 bottom-10" },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Capture the current value of profileRef.current
    const currentProfileRef = profileRef.current;

    const profileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentProfileRef?.classList.add('scale-100', 'opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (currentProfileRef) { // Use the captured value
      profileObserver.observe(currentProfileRef);
    }

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPercentage = Math.min(scrollY / heroHeight, 1);
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentProfileRef) { // Use the captured value in cleanup
        profileObserver.unobserve(currentProfileRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependancy array is correct, only runs once on mount

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({
        x: (x / rect.width - 0.5) * 20,
        y: (y / rect.height - 0.5) * 20
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="py-35 relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 ">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
          style={{
            backgroundSize: '30px 30px',
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)'
          }}
        />

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
          style={{ transform: `translate(${scrollPosition * -50}px, ${scrollPosition * 30}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-pink-500/10 blur-3xl"
          style={{ transform: `translate(${scrollPosition * 50}px, ${scrollPosition * -30}px)` }}
        />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.2]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
              custom={0}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Terminal className="w-4 h-4" />
              <span>Développeur Full-Stack & Mobile</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold tracking-tight"
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <span>Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Dabo </span>
              <span>Ali</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            custom={2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <span className="text-primary font-medium">Je crée des expériences web et mobiles exceptionnelles</span> avec des technologies modernes.
            Spécialisé en développement front-end et mobile, je construis des interfaces
            aussi belles que fonctionnelles avec un focus sur l'expérience utilisateur.<br />
            <span className="text-primary font-medium">Fasciné par le potentiel de l'IA, j'explore la création d'agents intelligents pour automatiser les processus et optimiser les solutions digitales.</span>
          </motion.p>

          <motion.div
            className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" 
            custom={3}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient" />
              <div className="relative flex items-center justify-center gap-2">
                <Code className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span>Voir mes projets</span>
                <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </a>
          </motion.div>

          <motion.div
            className="pt-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 text-sm text-muted-foreground"
            custom={4}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-primary font-semibold text-lg">1+</span>
              <span>Années d'expérience</span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-primary font-semibold text-lg">5+</span>
              <span>Projets réalisés</span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-primary font-semibold text-lg">70%</span>
              <span>Satisfaction client</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          className="w-full lg:w-2/5 flex justify-center perspective-1000"
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            {/* Code snippets flottants */}
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                className={`absolute ${snippet.position} hidden lg:block`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <div className={`
                  px-3 py-1.5 rounded-lg text-xs font-mono
                  ${snippet.type === 'js' ? 'bg-yellow-500/10 text-yellow-200' :
                    snippet.type === 'jsx' ? 'bg-blue-500/10 text-blue-200' :
                    snippet.type === 'css' ? 'bg-pink-500/10 text-pink-200' :
                    'bg-green-500/10 text-green-200'}
                `}>
                  {snippet.code}
                </div>
              </motion.div>
            ))}

            <div
              ref={profileRef}
              className={`
                relative
                w-72 h-72 lg:w-96 lg:h-96
                transform scale-95 opacity-0
                transition-all duration-700 ease-out
                bg-gradient-to-br from-primary/5 to-purple-500/5
                border border-white/10
                rounded-3xl overflow-hidden
                group
                shadow-xl
                hover:shadow-2xl hover:shadow-primary/20
              `}
              style={{
                transform: `rotateY(${mousePosition.x / 20}deg) rotateX(${-mousePosition.y / 20}deg) scale(1.05)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {/* Effets de particules */}
              <div className="absolute inset-0 opacity-50">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                    }}
                    animate={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>

              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative h-full w-full z-10">
                <img
                  src="/public/PortfolioProfil.png"
                  alt="Dabo Ali - Développeur Front-end"
                  className="h-full w-full object-contain object-center drop-shadow-2xl"
                  style={{
                    transform: `translateX(${mousePosition.x / 4}px) translateY(${mousePosition.y / 4}px) scale(1.05)`,
                    transition: 'transform 0.5s ease-out'
                  }}
                />
              </div>

              <div className="
                absolute inset-x-0 bottom-0
                bg-gradient-to-t from-black/80 via-black/40 to-transparent
                p-4
                transform translate-y-full group-hover:translate-y-0 transition-transform duration-500
                z-40
              ">
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-1">Dabo Ali</h3>
                  <p className="text-primary text-sm font-medium">Développeur Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="#about" className="group flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2 font-medium group-hover:text-primary transition-colors">
            Découvrir
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};