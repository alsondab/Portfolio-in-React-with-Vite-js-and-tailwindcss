import { useEffect, useState, useRef } from 'react'
import { ArrowDown, Code, FileText, ChevronRight, Terminal } from 'lucide-react'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // eslint-disable-next-line no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0)
  const profileRef = useRef(null)
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  const { t } = useTranslation()

  const codeSnippets = [
    {
      code: "const developer = 'Ali Dabo';",
      type: 'js',
      position: '-left-20 top-10',
    },
    { code: '<Portfolio />', type: 'jsx', position: 'right-0 top-20' },
    {
      code: 'npx create-next-app@latest',
      type: 'terminal',
      position: '-left-24 bottom-20',
    },
    {
      code: 'npm install success ✓',
      type: 'terminal',
      position: 'right-0 bottom-10',
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    const currentProfileRef = profileRef.current
    const profileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          currentProfileRef?.classList.add('scale-100', 'opacity-100')
      },
      { threshold: 0.1 },
    )

    if (currentProfileRef) profileObserver.observe(currentProfileRef)

    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight
      setScrollPosition(Math.min(scrollY / heroHeight, 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      if (currentProfileRef) profileObserver.unobserve(currentProfileRef)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 20 - 10,
        y: ((e.clientY - rect.top) / rect.height) * 20 - 10,
      })
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.15, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  }

  return (
    <section
      id='hero'
      ref={heroRef}
      className='py-35 relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'
    >
      {/* ÉTOILES / PARTICULES EN MOUVEMENT UNIQUEMENT */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0'>
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className='absolute w-1 h-1 rounded-full bg-primary/30'
              initial={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      {/* INTERFACE UTILISATEUR VISIBLE */}
      <div className='container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10 pointer-events-none'>
        {/* BLOC GAUCHE — TEXTES */}
        <div className='w-full lg:w-3/5 space-y-8 text-center lg:text-left'>
          <div className='space-y-2'>
            <motion.div
              className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm pointer-events-auto backdrop-blur-md'
              initial='hidden'
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeIn}
            >
              <Terminal className='w-4 h-4' />
              <span>{t('hero.tagline')}</span>
            </motion.div>

            <motion.h1
              className='text-5xl lg:text-7xl font-bold tracking-tight select-none'
              initial='hidden'
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeIn}
            >
              <span>{t('hero.greeting')}</span>
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500'>
                {t('hero.name')}
              </span>
            </motion.h1>
          </div>

          <motion.p
            className='text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed select-none'
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <span>
              {t('hero.description1')}
              <br />
            </span>
            <span className='text-primary font-medium'>
              {t('hero.description2')}
              <br />
            </span>
            <span>{t('hero.description3')}</span>
          </motion.p>

          <motion.div
            className='pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pointer-events-auto'
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <a
              href='#projects'
              className='group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden text-center'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient' />
              <div className='relative flex items-center justify-center gap-2'>
                <Code className='h-5 w-5 transition-transform group-hover:rotate-12' />
                <span>{t('hero.projects')}</span>
                <ChevronRight className='ml-1 h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
              </div>
            </a>

            <a
              href='/my-cv'
              target='_blank'
              className='group w-full sm:w-auto px-8 py-3.5 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden text-center'
            >
              <FileText className='h-5 w-5 text-primary transition-transform group-hover:scale-110' />
              <span>{t('hero.viewResume')}</span>
              <span className='absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full' />
            </a>
          </motion.div>

          <motion.div
            className='pt-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 text-sm text-muted-foreground select-none'
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className='flex flex-col items-center sm:items-start'>
              <span className='text-primary font-semibold text-lg'>3+</span>
              <span>{t('hero.experienceYears')}</span>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <span className='text-primary font-semibold text-lg'>5+</span>
              <span>{t('hero.completedProjects')}</span>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <span className='text-primary font-semibold text-lg'>JS</span>
              <span>{t('hero.preferredStack')}</span>
            </div>
          </motion.div>
        </div>

        {/* BLOC DROITE — CARD IMAGE DE PROFIL FIXE */}
        <motion.div
          ref={containerRef}
          className='w-full lg:w-2/5 flex justify-center perspective-1000 pointer-events-auto'
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className='relative'>
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                className={`absolute ${snippet.position} hidden lg:block`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <div
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono ${
                    snippet.type === 'js'
                      ? 'bg-yellow-500/10 text-yellow-200'
                      : snippet.type === 'jsx'
                        ? 'bg-blue-500/10 text-blue-200'
                        : snippet.type === 'css'
                          ? 'bg-pink-500/10 text-pink-200'
                          : 'bg-green-500/10 text-green-200'
                  }`}
                >
                  {snippet.code}
                </div>
              </motion.div>
            ))}

            <div
              ref={profileRef}
              className='relative w-72 h-72 lg:w-96 lg:h-96 transform scale-95 opacity-0 transition-all duration-700 ease-out border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20'
              style={{
                transform: `rotateY(${mousePosition.x / 20}deg) rotateX(${-mousePosition.y / 20}deg) scale(1.05)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              <div className='absolute inset-0 opacity-50'>
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-primary/30 rounded-full'
                    initial={{
                      x: Math.random() * 100 + '%',
                      y: Math.random() * 100 + '%',
                    }}
                    animate={{
                      x: Math.random() * 100 + '%',
                      y: Math.random() * 100 + '%',
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                ))}
              </div>

              <div className='relative h-full w-full z-10'>
                <img
                  src='/PortfolioProfil.png'
                  alt='Dabo Ali'
                  className='h-full w-full object-contain object-center drop-shadow-2xl'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 pointer-events-auto'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href='#about' className='group flex flex-col items-center'>
          <span className='text-sm text-muted-foreground mb-2 font-medium group-hover:text-primary transition-colors'>
            Découvrir
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='text-primary'
          >
            <ArrowDown className='h-5 w-5' />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
