import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Server, Wrench, Monitor, ChevronRight, Smartphone } from "lucide-react";
import { cn } from "../lib/utils";

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

  // Mobile
  {
    name: "React Native",
    level: 55,
    category: "mobile",
    description: "Développement d'applications mobiles cross-platform, navigation, state management",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    name: "Flutter",
    level: 45,
    category: "mobile",
    description: "Développement d'applications mobiles avec Dart, widgets, animations",
    color: "from-teal-400 to-teal-600"
  },
  {
    name: "Mobile UI/UX",
    level: 50,
    category: "mobile",
    description: "Design d'interfaces mobiles, expérience utilisateur, guidelines",
    color: "from-pink-400 to-pink-600"
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
  {
    name: "Vercel",
    level: 50,
    category: "tools",
    description: "Continuous deployment, serverless functions",
    color: "from-teal-700 to-teal-500"
  },
  {
    name: "localStorage",
    level: 70,
    category: "tools",
    description: "Client-side storage, data persistence, state management",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    name: "Cursor",
    level: 60,
    category: "tools",
    description: "AI-powered code editing, pair programming",
    color: "from-purple-500 to-purple-700"
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
    id: "mobile",
    label: "Mobile",
    icon: <Smartphone />,
    description: "Développement d'applications mobiles cross-platform"
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

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
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Compétences</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un aperçu de mes compétences techniques et des outils que j'utilise quotidiennement.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryGroups.map((category) => (
            <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300",
                "bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm",
                "hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
                activeCategory === category.id && "bg-primary/10 text-primary border-primary/30"
              )}
            >
                  {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    <span className="text-xs text-muted-foreground">({getLevelText(skill.level)})</span>
              </div>
              </div>
                <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={cn("h-full rounded-full bg-gradient-to-r", skill.color)}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};