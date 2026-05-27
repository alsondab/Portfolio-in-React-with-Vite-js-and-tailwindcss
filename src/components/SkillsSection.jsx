import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {
  Server,
  Wrench,
  Monitor,
  ChevronRight,
  Smartphone,
  Zap,
} from 'lucide-react'
import { cn } from '../lib/utils'

// Compétences alignées avec le CV
const skills = [
  {
    name: 'React.js',
    level: 80,
    category: 'frontend',
    descriptionKey: 'skills.skill.react',
    color: 'from-cyan-400 to-sky-500',
  },
  {
    name: 'Next.js',
    level: 70,
    category: 'frontend',
    descriptionKey: 'skills.skill.next',
    color: 'from-gray-600 to-gray-900',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 75,
    category: 'frontend',
    descriptionKey: 'skills.skill.javascript',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    name: 'TypeScript',
    level: 50,
    category: 'frontend',
    descriptionKey: 'skills.skill.typescript',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'HTML / CSS',
    level: 75,
    category: 'frontend',
    descriptionKey: 'skills.skill.htmlcss',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Tailwind CSS',
    level: 70,
    category: 'frontend',
    descriptionKey: 'skills.skill.tailwind',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    name: 'Angular',
    level: 55,
    category: 'frontend',
    descriptionKey: 'skills.skill.angular',
    color: 'from-red-400 to-red-600',
  },
  {
    name: 'React Native',
    level: 55,
    category: 'mobile',
    descriptionKey: 'skills.skill.reactNative',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    name: 'Expo',
    level: 50,
    category: 'mobile',
    descriptionKey: 'skills.skill.expo',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Mobile UI/UX',
    level: 50,
    category: 'mobile',
    descriptionKey: 'skills.skill.mobileUi',
    color: 'from-pink-400 to-pink-600',
  },
  {
    name: 'Node.js & Express',
    level: 60,
    category: 'backend',
    descriptionKey: 'skills.skill.node',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'MongoDB Atlas',
    level: 65,
    category: 'backend',
    descriptionKey: 'skills.skill.mongodb',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Supabase',
    level: 65,
    category: 'backend',
    descriptionKey: 'skills.skill.supabase',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    name: 'Firebase',
    level: 50,
    category: 'backend',
    descriptionKey: 'skills.skill.firebase',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'PostgreSQL / MySQL',
    level: 55,
    category: 'backend',
    descriptionKey: 'skills.skill.sql',
    color: 'from-blue-700 to-indigo-800',
  },
  {
    name: 'REST API & Integration',
    level: 70,
    category: 'backend',
    descriptionKey: 'skills.skill.restApi',
    color: 'from-violet-500 to-violet-700',
  },
  {
    name: 'OpenAI API',
    level: 60,
    category: 'ai',
    descriptionKey: 'skills.skill.openai',
    color: 'from-green-400 to-teal-500',
  },
  {
    name: 'Make.com',
    level: 65,
    category: 'ai',
    descriptionKey: 'skills.skill.make',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Airtable',
    level: 60,
    category: 'ai',
    descriptionKey: 'skills.skill.airtable',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    name: 'Git / GitHub',
    level: 70,
    category: 'tools',
    descriptionKey: 'skills.skill.git',
    color: 'from-orange-600 to-orange-800',
  },
  {
    name: 'Docker',
    level: 35,
    category: 'tools',
    descriptionKey: 'skills.skill.docker',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Figma',
    level: 55,
    category: 'tools',
    descriptionKey: 'skills.skill.figma',
    color: 'from-purple-600 to-fuchsia-700',
  },
  {
    name: 'Postman',
    level: 60,
    category: 'tools',
    descriptionKey: 'skills.skill.postman',
    color: 'from-orange-500 to-orange-700',
  },
  {
    name: 'Netlify / Vercel',
    level: 65,
    category: 'tools',
    descriptionKey: 'skills.skill.deploy',
    color: 'from-teal-500 to-teal-700',
  },
  {
    name: 'Cursor (AI IDE)',
    level: 70,
    category: 'tools',
    descriptionKey: 'skills.skill.cursor',
    color: 'from-purple-500 to-indigo-600',
  },
]

const categoryGroups = [
  {
    id: 'all',
    labelKey: 'skills.categories.all',
    icon: <ChevronRight />,
    descriptionKey: 'skills.categoryDescriptions.all',
  },
  {
    id: 'frontend',
    labelKey: 'skills.categories.frontend',
    icon: <Monitor />,
    descriptionKey: 'skills.categoryDescriptions.frontend',
  },
  {
    id: 'mobile',
    labelKey: 'skills.categories.mobile',
    icon: <Smartphone />,
    descriptionKey: 'skills.categoryDescriptions.mobile',
  },
  {
    id: 'backend',
    labelKey: 'skills.categories.backend',
    icon: <Server />,
    descriptionKey: 'skills.categoryDescriptions.backend',
  },
  {
    id: 'ai',
    labelKey: 'skills.categories.ai',
    icon: <Zap />,
    descriptionKey: 'skills.categoryDescriptions.ai',
  },
  {
    id: 'tools',
    labelKey: 'skills.categories.tools',
    icon: <Wrench />,
    descriptionKey: 'skills.categoryDescriptions.tools',
  },
]

const getLevelTextKey = (level) => {
  if (level >= 75) return 'skills.level.advanced'
  if (level >= 55) return 'skills.level.intermediate'
  if (level >= 35) return 'skills.level.basic'
  return 'skills.level.beginner'
}

export const SkillsSection = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory,
  )

  const localizedCategoryGroups = categoryGroups.map((group) => ({
    ...group,
    label: t(group.labelKey),
    description: t(group.descriptionKey),
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='py-20 md:py-32 relative overflow-hidden'
    >
      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {t('skills.title')}
          </h2>
          <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Category filters */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {localizedCategoryGroups.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300',
                'bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm',
                'hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 text-sm',
                activeCategory === category.id &&
                  'bg-primary/10 text-primary border-primary/30 font-medium',
              )}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              className='group relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='relative z-10'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-base font-semibold text-foreground'>
                    {skill.name}
                  </h3>
                  <div className='flex items-center gap-2 shrink-0'>
                    <span className='text-sm text-muted-foreground'>
                      {skill.level}%
                    </span>
                    <span className='text-xs text-muted-foreground hidden sm:inline'>
                      ({t(getLevelTextKey(skill.level))})
                    </span>
                  </div>
                </div>
                <div className='w-full h-2 bg-secondary/30 rounded-full overflow-hidden mb-3'>
                  <motion.div
                    className={cn(
                      'h-full rounded-full bg-gradient-to-r',
                      skill.color,
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: index * 0.04,
                    }}
                  />
                </div>
                <p className='text-sm text-muted-foreground'>
                  {t(skill.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
