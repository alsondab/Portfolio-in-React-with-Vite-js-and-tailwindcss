import { useEffect, useRef } from 'react';

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    // Configuration
    const STAR_COUNT = 200;
    const STAR_MIN_SIZE = 0.5;
    const STAR_MAX_SIZE = 2;
    const STAR_SPEED_MIN = 0.025;
    const STAR_SPEED_MAX = 0.1;
    const STAR_TWINKLE_FREQUENCY = 0.02;

    // Redimensionnement du canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Réinitialiser les étoiles lors du redimensionnement
    };

    // Initialisation des étoiles
    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (STAR_MAX_SIZE - STAR_MIN_SIZE) + STAR_MIN_SIZE,
        speed: Math.random() * (STAR_SPEED_MAX - STAR_SPEED_MIN) + STAR_SPEED_MIN,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleDirection: 1,
      }));
    };

    // Animation des étoiles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vérifier le thème actuel
      const isDarkMode = document.documentElement.classList.contains('dark');
      const starColor = isDarkMode ? '255, 255, 255' : '0, 0, 0';
      const starOpacityBase = isDarkMode ? 1 : 0.3;

      // Dessiner chaque étoile
      stars.forEach(star => {
        // Mise à jour de la position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Effet de scintillement
        if (Math.random() < STAR_TWINKLE_FREQUENCY) {
          star.twinkleDirection *= -1;
        }
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));

        // Dessiner l'étoile avec un effet de lueur adapté au thème
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${star.opacity * starOpacityBase})`;
        ctx.fill();

        // Ajouter un effet de lueur adapté au thème
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, `rgba(${starColor}, ${star.opacity * starOpacityBase * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Ajouter des étoiles filantes occasionnellement
      if (Math.random() < 0.01) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 100,
          speed: Math.random() * 15 + 10,
          opacity: isDarkMode ? 1 : 0.3,
        };

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x + shootingStar.length * 0.3,
          shootingStar.y + shootingStar.length
        );
        ctx.strokeStyle = `rgba(${starColor}, ${shootingStar.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialisation
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-colors duration-500"
      style={{
        background: 'var(--canvas-background)',
        '--canvas-background': 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))',
        '--gradient-start': 'var(--tw-bg-background)',
        '--gradient-end': 'var(--tw-bg-background)',
      }}
    />
  );
};