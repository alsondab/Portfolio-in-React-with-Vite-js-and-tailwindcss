import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Wrench, Monitor, ChevronRight, ArrowRight } from "lucide-react";

// Données des compétences avec structure améliorée
const skills = [
  // Frontend
  { 
    name: "HTML/CSS", 
    level: 70, 
    category: "frontend",
    description: "Structure sémantique, responsive design, animations CSS",
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "JavaScript", 
    level: 60, 
    category: "frontend",
    description: "DOM manipulation, ES6+, async/await",
    color: "from-yellow-400 to-amber-500" 
  },
  { 
    name: "React", 
    level: 50, 
    category: "frontend",
    description: "Hooks, state management, component lifecycle",
    color: "from-cyan-400 to-sky-500"
  },
  { 
    name: "Angular", 
    level: 60, 
    category: "frontend",
    description: "Components, services, routing, forms",
    color: "from-red-400 to-red-600"
  },
  { 
    name: "TypeScript", 
    level: 40, 
    category: "frontend",
    description: "Types, interfaces, generics",
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "Tailwind CSS", 
    level: 60, 
    category: "frontend",
    description: "Utility classes, responsive design, dark mode",
    color: "from-teal-400 to-cyan-600"
  },
  { 
    name: "Next.js", 
    level: 35, 
    category: "frontend",
    description: "Server-side rendering, routing, API routes",
    color: "from-gray-700 to-gray-900"
  },

  // Backend
  { 
    name: "Node.js", 
    level: 45, 
    category: "backend",
    description: "APIs RESTful, middlewares, event handling",
    color: "from-green-500 to-green-700"
  },
  { 
    name: "MongoDB", 
    level: 35, 
    category: "backend",
    description: "Schemas, CRUD operations, aggregation",
    color: "from-green-600 to-green-800"
  },
  { 
    name: "Express", 
    level: 40, 
    category: "backend",
    description: "Routing, middleware, request handling",
    color: "from-gray-500 to-gray-700"
  },
  { 
    name: "Django", 
    level: 40, 
    category: "backend",
    description: "MVT architecture, ORM, admin interface",
    color: "from-green-700 to-emerald-900"
  },
  { 
    name: "PostgreSQL", 
    level: 30, 
    category: "backend",
    description: "Queries, relationships, indexes",
    color: "from-blue-700 to-indigo-800"
  },
  { 
    name: "MySQL", 
    level: 60, 
    category: "backend",
    description: "CRUD, JOINs, transactions, normalization",
    color: "from-orange-500 to-orange-700"
  },

  // Tools
  { 
    name: "Git/GitHub", 
    level: 65, 
    category: "tools",
    description: "Version control, branching, PR workflow",
    color: "from-orange-600 to-orange-800"
  },
  { 
    name: "Loom", 
    level: 65, 
    category: "tools",
    description: "Screen recording, video documentation",
    color: "from-purple-500 to-purple-700"
  },
  { 
    name: "Docker", 
    level: 25, 
    category: "tools",
    description: "Containerization, Docker Compose",
    color: "from-blue-600 to-blue-800"
  },
  { 
    name: "Figma", 
    level: 50, 
    category: "tools",
    description: "UI/UX design, prototyping, components",
    color: "from-purple-600 to-fuchsia-700"
  },
  { 
    name: "VS Code", 
    level: 80, 
    category: "tools",
    description: "Extensions, debugging, Git integration",
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "Postman", 
    level: 50, 
    category: "tools",
    description: "API testing, request collections, automation",
    color: "from-orange-500 to-orange-700"
  },
  { 
    name: "Netlify", 
    level: 50, 
    category: "tools",
    description: "Continuous deployment, serverless functions",
    color: "from-teal-500 to-teal-700"
  },
];

// Groupes de catégories avec icônes et descriptions
const categoryGroups = [
  { 
    id: "all", 
    label: "Tout", 
    icon: <ChevronRight />,
    description: "Toutes mes compétences techniques"
  },
  { 
    id: "frontend", 
    label: "Frontend", 
    icon: <Monitor />,
    description: "Développement d'interfaces utilisateurs interactives et réactives"
  },
  { 
    id: "backend", 
    label: "Backend", 
    icon: <Server />,
    description: "APIs, bases de données et logique côté serveur"
  },
  { 
    id: "tools", 
    label: "Outils", 
    icon: <Wrench />,
    description: "Applications, plateformes et utilitaires de développement"
  },
];

// Fonction pour déterminer le niveau en texte
const getLevelText = (level) => {
  if (level >= 75) return "Avancé";
  if (level >= 50) return "Intermédiaire";
  if (level >= 30) return "Basique";
  return "Débutant";
};

// Composant principal
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simuler un chargement progressif pour l'animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const activeCategory3D = {
    initial: { scale: 1 },
    animate: { scale: 1.05 },
    exit: { scale: 0.95, opacity: 0 }
  };

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-secondary/10 to-background">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-64 top-1/4 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute -right-64 bottom-1/4 w-96 h-96  rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 "></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* En-tête de section avec titre et description */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compétences <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Techniques</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Voici un aperçu des technologies et outils que je maîtrise. Ces compétences sont en constante évolution au fil de mes projets et apprentissages.
          </p>
        </motion.div>

        {/* Navigation des catégories */}
        <div className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categoryGroups.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2
                  ${activeCategory === category.id 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-purple-900/30 font-medium translate-y-0 hover:translate-y-0" 
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                  }
                `}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`
                  ${activeCategory === category.id 
                    ? "text-white" 
                    : "text-blue-500 dark:text-blue-400"
                  }
                `}>
                  {category.icon}
                </span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Description de la catégorie active */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={activeCategory3D}
              className="text-center max-w-2xl mx-auto mb-8 px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-sm"
            >
              {categoryGroups.find(cat => cat.id === activeCategory)?.description}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grille des compétences */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
            >
              {/* En-tête avec nom et pourcentage */}
              <div className="flex justify-between items-center px-6 pt-6 pb-3">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className={`
                  font-mono text-sm px-3 py-1 rounded-full ${hoveredSkill === skill.name 
                    ? "bg-gradient-to-r " + skill.color + " text-white" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  } transition-all duration-300
                `}>
                  {skill.level}%
                </span>
              </div>

              {/* Description de la compétence */}
              <p className="px-6 pb-3 text-sm text-gray-600 dark:text-gray-400 h-10 line-clamp-2">
                {skill.description}
              </p>

              {/* Niveau en texte */}
              <div className="px-6 pb-3 text-xs text-gray-500 dark:text-gray-500 font-medium">
                Niveau: {getLevelText(skill.level)}
              </div>

              {/* Barre de progression */}
              <div className="relative h-2 bg-gray-100 dark:bg-gray-700">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Indicateur visuel du niveau sous forme de grille */}
              <div className="flex pt-2 px-1 pb-1">
                {[...Array(10)].map((_, index) => (
                  <div 
                    key={index} 
                    className={`
                      flex-1 h-1 mx-0.5 rounded-full transition-all duration-500
                      ${index < skill.level / 10 
                        ? `bg-gradient-to-r ${skill.color}` 
                        : "bg-gray-200 dark:bg-gray-700"
                      }
                      ${hoveredSkill === skill.name && index < skill.level / 10
                        ? "h-2"
                        : ""
                      }
                    `}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Appel à l'action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg group transition-all duration-300 hover:shadow-xl"
          >
            <span>Voir mes projets</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};