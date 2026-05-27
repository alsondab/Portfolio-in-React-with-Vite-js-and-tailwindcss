import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Briefcase, Code, User, ChevronRight, Eye } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export const AboutSection = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentSectionRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (currentSectionRef) observer.unobserve(currentSectionRef)
        }
      },
      { threshold: 0.2 },
    )
    if (currentSectionRef) observer.observe(currentSectionRef)
    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id='about'
      ref={sectionRef}
      className='py-32 px-4 relative overflow-hidden'
    >
      <div className='container mx-auto max-w-5xl relative z-10'>
        <motion.div
          className='flex flex-col items-center justify-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className='text-4xl md:text-5xl font-bold relative text-center'>
            {t('about.titlePrefix')}
            <span className='text-primary'> {t('about.titleHighlight')}</span>
            <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-primary/40 to-primary rounded-full'></div>
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'
          variants={containerVariants}
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left column */}
          <motion.div className='space-y-6' variants={itemVariants}>
            <div className='relative mb-8'>
              <div className='absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full'></div>
              <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500'>
                {t('about.philosophyTitle')}
              </h3>
            </div>

            <p className='text-base md:text-lg leading-relaxed'>
              {t('about.paragraph1')}
            </p>

            <p className='text-base md:text-lg leading-relaxed'>
              {t('about.paragraph2')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <a
                href='#contact'
                className='px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group'
              >
                <span>{t('about.contactMe')}</span>
                <ChevronRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </a>

              <a
                href='/my-cv'
                className='px-6 py-3 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Eye className='h-4 w-4' />
                <span>{t('about.viewResume')}</span>
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div className='space-y-6' variants={itemVariants}>
            <div className='grid grid-cols-1 gap-6'>
              <div className='group'>
                <div className='relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 p-3 rounded-lg bg-primary/10'>
                      <Code className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-lg'>
                        {t('about.cards.webTitle')}
                      </h4>
                      <p className='text-muted-foreground mt-2'>
                        {t('about.cards.webDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group'>
                <div className='relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 p-3 rounded-lg bg-primary/10'>
                      <User className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-lg'>
                        {t('about.cards.aiTitle')}
                      </h4>
                      <p className='text-muted-foreground mt-2'>
                        {t('about.cards.aiDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group'>
                <div className='relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 p-3 rounded-lg bg-primary/10'>
                      <Briefcase className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-lg'>
                        {t('about.cards.deployTitle')}
                      </h4>
                      <p className='text-muted-foreground mt-2'>
                        {t('about.cards.deployDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
