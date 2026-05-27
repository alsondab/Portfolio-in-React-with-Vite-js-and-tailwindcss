import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Download,
} from 'lucide-react'

export default function CvPage() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const skillGroups = t('cv.skillGroups', { returnObjects: true })
  const projectCards = t('cv.projectCards', { returnObjects: true })
  const experiencePoints = t('cv.experiencePoints', { returnObjects: true })
  const educationEntries = t('cv.educationEntries', { returnObjects: true })
  const languages = t('cv.languages', { returnObjects: true })

  useEffect(() => {
    setVisible(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500'>
      <main className='pt-24 pb-16 px-4'>
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Header */}
          <div className='rounded-xl overflow-hidden mb-1 border border-border'>
            <div className='bg-foreground text-background px-10 py-8 text-center'>
              <h1 className='text-4xl font-bold tracking-widest mb-2'>
                DABO ALI
              </h1>
              <p className='text-sm opacity-60 tracking-wide'>
                {t('hero.tagline')}
              </p>
            </div>

            <div className='grid grid-cols-3 bg-secondary/50 border-t border-border'>
              <ContactCell
                icon={<Phone size={14} />}
                text='+225 07 10 14 58 64'
              />
              <ContactCell
                icon={<Mail size={14} />}
                text='alsondab9@gmail.com'
                border
              />
              <ContactCell
                icon={<MapPin size={14} />}
                text="Abidjan, Côte d'Ivoire"
                border
              />
            </div>
            <div className='grid grid-cols-3 bg-secondary/30 border-t border-border'>
              <ContactCell
                icon={<Linkedin size={14} />}
                text='linkedin.com/in/alsondab'
                href='https://linkedin.com/in/alsondab'
              />
              <ContactCell
                icon={<Github size={14} />}
                text='github.com/alsondab'
                href='https://github.com/alsondab'
                border
              />
              <ContactCell
                icon={<Globe size={14} />}
                text='ali-dabo-portfolio.vercel.app'
                href='https://ali-dabo-portfolio.vercel.app'
                border
              />
            </div>
          </div>

          {/* Body */}
          <div className='rounded-xl border border-border bg-card p-8 space-y-7'>
            <Section title={t('cv.profileTitle')}>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {t('cv.profileDescription')}
              </p>
            </Section>

            <Section title={t('cv.skillsTitle')}>
              <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                {skillGroups.map((group) => (
                  <SkillGroup
                    key={group.title}
                    title={group.title}
                    items={group.items}
                  />
                ))}
              </div>
            </Section>

            <Section title={t('cv.projectsTitle')}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {projectCards.map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
              </div>
            </Section>

            <Section title={t('cv.experienceTitle')}>
              <p className='font-semibold text-foreground'>
                {t('cv.experienceRole')}
              </p>
              <p className='text-xs text-muted-foreground mb-3'>
                {t('cv.experienceMeta')}
              </p>
              <ul className='space-y-1.5'>
                {experiencePoints.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-sm text-muted-foreground'
                  >
                    <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t('cv.educationTitle')}>
              <div className='space-y-4'>
                {educationEntries.map((entry) => (
                  <EduEntry
                    key={entry.title}
                    title={entry.title}
                    meta={entry.meta}
                  />
                ))}
              </div>
            </Section>

            <Section title={t('cv.languagesTitle')}>
              <div className='flex flex-wrap gap-6 text-sm text-muted-foreground'>
                {languages.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </div>
            </Section>
          </div>

          <div className='mt-1 rounded-xl bg-secondary/50 border border-border text-center py-3 text-sm font-semibold tracking-wide text-foreground'>
            {t('cv.availability')}
          </div>

          <div className='flex flex-col items-center gap-3 mt-6'>
            {/* Download according to current language */}
            <div className='flex justify-center mt-6 gap-3'>
              <a
                href='/Dabo-Ali-React-cv.pdf'
                download='Dabo-Ali-React-cv.pdf'
                className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-card/60 border border-border text-sm font-medium'
              >
                {t('cv.downloadFr')}
              </a>
              <a
                href='/Dabo-Ali-React-cv-en.pdf'
                download='Dabo-Ali-React-cv-en.pdf'
                className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-card/60 border border-border text-sm font-medium'
              >
                {t('cv.downloadEn')}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className='text-xs font-bold tracking-widest uppercase text-foreground pb-2 mb-4 border-b border-border'>
        {title}
      </h2>
      {children}
    </div>
  )
}

function ContactCell({ icon, text, href, border }) {
  const inner = (
    <div
      className={`flex items-center justify-center gap-2 py-2.5 px-3 text-xs text-muted-foreground ${border ? 'border-l border-border' : ''}`}
    >
      {icon}
      <span>{text}</span>
    </div>
  )
  return href ? (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='hover:text-primary transition-colors'
    >
      {inner}
    </a>
  ) : (
    inner
  )
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <p className='text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2'>
        {title}
      </p>
      <ul className='space-y-1'>
        {items.map((item) => (
          <li
            key={item}
            className='flex items-center gap-2 text-sm text-foreground'
          >
            <span className='h-1.5 w-1.5 rounded-full bg-primary shrink-0' />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ name, desc, stack }) {
  return (
    <div className='border-t-2 border-foreground bg-secondary/30 rounded-b-lg p-4 space-y-2'>
      <p className='font-semibold text-foreground'>{name}</p>
      <p className='text-sm text-muted-foreground leading-relaxed'>{desc}</p>
      <p className='text-xs text-muted-foreground italic'>{stack}</p>
    </div>
  )
}

function EduEntry({ title, meta }) {
  return (
    <div>
      <p className='font-semibold text-sm text-foreground'>{title}</p>
      <p className='text-xs text-muted-foreground mt-0.5'>{meta}</p>
    </div>
  )
}
