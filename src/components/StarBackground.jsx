import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const StarBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Symboles et logos liés au développement web
  const devIcons = [
    "</>", // HTML
    "</>", // HTML
    "{ }", // CSS/JS
    "{ }", // CSS/JS
    "</>", // HTML
    "</>", // HTML
    "</>", // HTML
    "</>", // HTML
    "</>", // HTML
    "</>", // HTML
    "=>", // Arrow function
    "⚛", // React
    "Δ", // Delta/Change (symbolise Angular)
    "#", // Django/Python
    "( )", // Parenthèses pour fonctions
    "[]", // Tableaux/Arrays
    "$", // jQuery/Variables
  ];

  useEffect(() => {
    // Légère animation d'entrée
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background dark:from-background dark:via-background/95 dark:to-background" />

      {/* Grille de fond */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-1000",
          isVisible && "opacity-[0.03]"
        )}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "30px 30px"
        }}
      />

      {/* Icônes de développement dispersées */}
      {devIcons.map((icon, index) => (
        <div
          key={index}
          className={cn(
            "absolute text-foreground dark:text-foreground/15 font-mono font-bold transition-opacity duration-1000 opacity-0",
            isVisible && "opacity-100"
          )}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            transitionDelay: `${index * 0.15}s`
          }}
        >
          {icon}
        </div>
      ))}

      {/* Lignes de code subtiles */}
      <div
        className={cn(
          "absolute left-5 top-1/4 w-64 h-20 opacity-0 transition-opacity duration-1000 font-mono text-left text-xs",
          isVisible && "opacity-[0.3]"
        )}
        style={{ transitionDelay: "0.8s" }}
      >
        <pre className="text-primary dark:text-primary">
          {`function DevPortfolio() {
            const skills = ['React', 'Angular', 'Django'];
            return <Profile skills={skills} />;
          }`}
        </pre>
      </div>

      <div
        className={cn(
          "absolute right-5 bottom-1/3 w-64 h-20 opacity-0 transition-opacity duration-1000 font-mono text-left text-xs",
          isVisible && "opacity-[0.3]"
        )}
        style={{ transitionDelay: "1s" }}
      >
        <pre className="text-primary dark:text-primary">
          {`const connect = async () => {
          try {
            await api.portfolio.view();
          } catch (e) {
            console.error(e); // Changed log to error for better practice
          }
        }`}
        </pre>
      </div>

      {/* Nouvelle ligne de code en haut à droite */}
      <div
        className={cn(
          "absolute right-10 top-10 w-72 h-auto opacity-0 transition-opacity duration-1000 font-mono text-right text-sm",
          isVisible && "opacity-[0.2]"
        )}
        style={{ transitionDelay: "1.2s" }}
      >
        <pre className="text-blue-400 dark:text-blue-500">
          {`interface Project {
  title: string;
  tags: string[];
  liveLink?: string;
}`}
        </pre>
      </div>

      {/* Nouvelle ligne de code en bas à gauche */}
      <div
        className={cn(
          "absolute left-10 bottom-10 w-80 h-auto opacity-0 transition-opacity duration-1000 font-mono text-left text-base",
          isVisible && "opacity-[0.25]"
        )}
        style={{ transitionDelay: "1.4s" }}
      >
        <pre className="text-purple-400 dark:text-purple-500">
          {`// Function to animate elements
const animateSection = (element) => {
  gsap.to(element, { y: 0, opacity: 1, duration: 1 });
};`}
        </pre>
      </div>

      {/* Nouvelle ligne de code au centre */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto opacity-0 transition-opacity duration-1000 font-mono text-center text-sm",
          isVisible && "opacity-[0.15]"
        )}
        style={{ transitionDelay: "1.6s" }}
      >
        <pre className="text-green-400 dark:text-green-500">
          {`/* * This is a comment block for
 * extra fun in the background!
 */
.container {
  display: flex;
  justify-content: center;
}`}
        </pre>
      </div>

    </div>
  );
};