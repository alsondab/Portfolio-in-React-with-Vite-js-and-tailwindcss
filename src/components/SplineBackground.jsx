import { useEffect, useState } from "react";

export const SplineBackground = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector('script[src*="spline-viewer"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.95/build/spline-viewer.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    
    document.head.appendChild(script);
  }, []);

  if (!scriptLoaded) return null;

  return (
    /* ASTUCE : On agrandit légèrement la hauteur du conteneur (105% au lieu de 100%) 
      et on applique un overflow-hidden. Le logo qui est tout en bas va être poussé 
      en dehors de l'écran et masqué !
    */
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-[108vh] overflow-hidden bottom-[-5vh]">
      {/* Overlay pour le contraste */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] z-10 pointer-events-none" />
      
      {/* Le viewer prend 100% de ce grand conteneur, le logo sort de la zone visible */}
      <spline-viewer 
        url="https://prod.spline.design/7ITucPiIRAEU0jny/scene.splinecode"
        class="w-full h-full block pointer-events-auto"
        events-target="global"
      />
    </div>
  );
};