import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export const StarBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Symboles et logos professionnels liés au développement web
  const devIcons = useMemo(() => [
    "</>", // HTML
    "{ }", // CSS/JS
    "=>", // Arrow function
    "⚛", // React
    "Δ", // Angular
    "λ", // Lambda/Functional
    "ƒ()", // Function notation
    "#", // Hash/Django
    "[]", // Arrays
    "$", // Variables/jQuery
    "++", // Increment
    "||", // OR operator
    "&&", // AND operator
    "!!", // Double negation
    "...", // Spread operator
    "@", // Decorators
    "~", // Bitwise NOT
    "?:", // Ternary operator
  ], []);
  
  // Extrait de code mieux formatés et plus variés
  const codeSnippets = useMemo(() => [
    {
      language: "typescript",
      code: `interface Project {
  id: string;
  title: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured: boolean;
}`,
      position: "right-8 top-16",
      size: "w-72",
      delay: "0.6s",
      color: "text-blue-400 dark:text-blue-500"
    },
    {
      language: "javascript",
      code: `const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);
  
  return { projects, loading };
};`,
      position: "left-8 bottom-12",
      size: "w-80",
      delay: "0.8s",
      color: "text-purple-400 dark:text-purple-500"
    },
    {
      language: "css",
      code: `.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill, minmax(300px, 1fr)
  );
  gap: 1.5rem;
}

.card {
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}`,
      position: "right-10 bottom-20",
      size: "w-72",
      delay: "1s",
      color: "text-green-400 dark:text-green-500"
    },
    {
      language: "react",
      code: `function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card">
      <h3>{project.title}</h3>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}`,
      position: "left-1/4 top-20",
      size: "w-80",
      delay: "1.2s",
      color: "text-yellow-400 dark:text-yellow-500"
    },
  ], []);

  useEffect(() => {
    // Animation progressive d'entrée
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient de fond subtil et professionnel */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95 dark:from-background/95 dark:via-background/98 dark:to-background" />

      {/* Grille de fond avec opacité ajustée pour un look plus professionnel */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-2000",
          isVisible && "opacity-[0.02] dark:opacity-[0.015]"
        )}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Icônes de développement avec animation améliorée */}
      {devIcons.map((icon, index) => (
        <div
          key={index}
          className={cn(
            "absolute text-foreground/50 dark:text-foreground/10 font-mono font-medium transition-all duration-2000 opacity-0 blur-[0.2px]",
            isVisible && "opacity-100"
          )}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            fontSize: `${Math.random() * 16 + 10}px`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
            transitionDelay: `${index * 0.1 + 0.2}s`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {icon}
        </div>
      ))}

      {/* Extraits de code avec meilleure présentation et variété */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={cn(
            "absolute opacity-0 transition-all duration-1500 font-mono text-left text-xs rounded-md overflow-hidden backdrop-blur-sm bg-background/10 dark:bg-foreground/[0.01] shadow-sm",
            snippet.position,
            snippet.size,
            isVisible && "opacity-[0.25] dark:opacity-[0.15]"
          )}
          style={{ 
            transitionDelay: snippet.delay,
            transform: isVisible ? "translateY(0)" : "translateY(10px)"
          }}
        >
          <pre className={cn("p-2", snippet.color)}>
            {snippet.code}
          </pre>
        </div>
      ))}
      
      {/* Éléments graphiques subtils pour ajouter de la profondeur */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-0 transition-opacity duration-3000",
          isVisible && "opacity-[0.02] dark:opacity-[0.01]"
        )}
        style={{
          background: "radial-gradient(circle, currentColor 0%, transparent 70%)",
          transitionDelay: "1.5s"
        }}
      />
      
      <div
        className={cn(
          "absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full opacity-0 transition-opacity duration-3000",
          isVisible && "opacity-[0.015] dark:opacity-[0.008]"
        )}
        style={{
          background: "radial-gradient(circle, currentColor 0%, transparent 70%)",
          transitionDelay: "1.8s"
        }}
      />
    </div>
  );
};