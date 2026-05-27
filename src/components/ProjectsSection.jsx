import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion as Motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Play,
  Clock,
  Briefcase,
  GraduationCap,
  User,
  LayoutGrid,
} from 'lucide-react'
import { cn } from '../lib/utils'

const projectsData = [
  {
    titleKey: 'projects.items.mendelcorp.title',
    descriptionKey: 'projects.items.mendelcorp.description',
    imageSrc: 'MendelTech.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://mendel-c.vercel.app/',
    status: 'completed',
    category: 'professional',
    company: 'MendelCorp',
  },
  {
    titleKey: 'projects.items.make.title',
    descriptionKey: 'projects.items.make.description',
    imageSrc: 'Make.png',
    tags: ['Make.com', 'LinkedIn', 'Airtable', 'OpenAI'],
    status: 'completed',
    category: 'personal',
  },
  {
    titleKey: 'projects.items.rafistoleur.title',
    descriptionKey: 'projects.items.rafistoleur.description',
    imageSrc: 'Rafisto.png',
    tags: ['Angular', 'Laravel', 'MySQL'],
    liveLink: 'https://www.loom.com/share/2ed89f97ecac473d8826dee70cb9c178',
    repoLink: 'https://github.com/alsondab/RafistoleurCi.git',
    status: 'completed',
    category: 'academic',
    isVideo: true,
  },
  {
    titleKey: 'projects.items.oldTopic.title',
    descriptionKey: 'projects.items.oldTopic.description',
    imageSrc: 'OldTopic.png',
    tags: ['React', 'Django', 'PostgreSQL'],
    repoLink: 'https://github.com/AgohChris/OldTopic.git',
    status: 'completed',
    category: 'academic',
  },
  {
    titleKey: 'projects.items.dealon.title',
    descriptionKey: 'projects.items.dealon.description',
    imageSrc: 'Dealon.png',
    tags: ['React Native', 'Next.js', 'Supabase'],
    status: 'in-progress',
    liveLink: 'https://dealon-web.vercel.app/',
    category: 'personal',
  },
  {
    titleKey: 'projects.items.portfolioV1.title',
    descriptionKey: 'projects.items.portfolioV1.description',
    imageSrc: 'Portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alsondabportf.netlify.app/',
    repoLink: 'https://github.com/alsondab/Portfolio_Html-Css.git',
    status: 'completed',
    category: 'personal',
  },
]

const categoryGroups = [
  {
    id: 'all',
    labelKey: 'projects.filters.all',
    icon: <LayoutGrid className='w-4 h-4' />,
  },
  {
    id: 'personal',
    labelKey: 'projects.filters.personal',
    icon: <User className='w-4 h-4' />,
  },
  {
    id: 'professional',
    labelKey: 'projects.filters.professional',
    icon: <Briefcase className='w-4 h-4' />,
  },
  {
    id: 'academic',
    labelKey: 'projects.filters.academic',
    icon: <GraduationCap className='w-4 h-4' />,
  },
]

export const ProjectsSection = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 },
    )
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const filteredProjects = projectsData.filter(
    (project) =>
      activeCategory === 'all' || project.category === activeCategory,
  )

  const localizedCategoryGroups = categoryGroups.map((category) => ({
    ...category,
    label: t(category.labelKey),
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 },
    },
    hover: {
      y: -6,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  }

  return (
    <section
      id='projects'
      ref={sectionRef}
      /* CORRECTION : Remplacement du bg-gradient opaque par un fond transparent et fluide */
      className='py-20 md:py-32  relative overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 inline-block'>
            {t('projects.titlePrefix')}{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              {t('projects.titleHighlight')}
            </span>
          </h2>
          <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full'></div>
        </div>

        {/* Filtres */}
        <div className='flex flex-wrap justify-center gap-3 mb-16'>
          {localizedCategoryGroups.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 cursor-pointer text-sm font-medium',
                'bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm hover:text-foreground',
                activeCategory === category.id
                  ? 'bg-primary/10 text-primary border-primary/30 font-semibold'
                  : 'text-muted-foreground',
              )}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Grille */}
        <Motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'
          variants={containerVariants}
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          key={activeCategory}
        >
          {filteredProjects.map((project, index) => (
            <Motion.div
              key={`${project.titleKey}-${index}`}
              className='bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full shadow-lg border border-border/50'
              variants={cardVariants}
              whileHover='hover'
            >
              <div className='relative h-64 w-full overflow-hidden group'>
                {project.status === 'in-progress' && (
                  <div className='absolute top-4 right-4 z-20 bg-amber-500/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center'>
                    <Clock className='w-3.5 h-3.5 mr-1' />{' '}
                    {t('projects.status.inProgress')}
                  </div>
                )}
                {project.category === 'professional' && project.company && (
                  <div className='absolute top-4 right-4 z-20 bg-blue-600/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center'>
                    <Briefcase className='w-3.5 h-3.5 mr-1' /> {project.company}
                  </div>
                )}
                <img
                  alt={t(project.titleKey)}
                  className='w-full h-full object-cover'
                  src={project.imageSrc}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {t(project.titleKey)}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-card/90 text-foreground/90 dark:bg-gray-900/95 dark:text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='p-6 flex flex-col flex-grow border-t border-border/50'>
                <p className='text-muted-foreground text-sm mb-6 flex-grow'>
                  {t(project.descriptionKey)}
                </p>
                <div className='flex gap-3 mt-auto'>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium'
                    >
                      <ExternalLink className='w-4 h-4' />{' '}
                      <span>{t('projects.actions.view')}</span>
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border text-foreground hover:bg-secondary/50 text-sm font-medium'
                    >
                      <Github className='w-4 h-4' />{' '}
                      <span>{t('projects.actions.code')}</span>
                    </a>
                  )}
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
