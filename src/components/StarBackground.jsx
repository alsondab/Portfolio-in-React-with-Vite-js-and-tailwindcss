import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    generateSnowflakes();
    const handleResize = () => generateSnowflakes();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSnowflakes = () => {
    const numberOfSnowflakes = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );
    const newSnowflakes = [];

    for (let i = 0; i < numberOfSnowflakes; i++) {
      newSnowflakes.push({
        id: i,
        size: Math.random() * 20 + 10,
        x: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 8 + 6,
        delay: Math.random() * 15,
        rotation: Math.random() * 360,
      });
    }

    setSnowflakes(newSnowflakes);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute text-white/80"
          style={{
            left: `${snowflake.x}%`,
            top: "-10%",
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            animation: `snowfall ${snowflake.animationDuration}s linear infinite`,
            animationDelay: `${snowflake.delay}s`,
            textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
            transform: `rotate(${snowflake.rotation}deg)`,
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};