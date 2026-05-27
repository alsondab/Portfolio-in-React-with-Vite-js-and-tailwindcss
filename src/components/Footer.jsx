import { useTranslation } from 'react-i18next'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

export const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const navLinks = [
    { label: t('footer.about'), href: '#about' },
    { label: t('footer.skills'), href: '#skills' },
    { label: t('footer.projects'), href: '#projects' },
    { label: t('footer.contact'), href: '#contact' },
    { label: t('footer.cv'), href: '/my-cv' },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com/alsondab', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/alsondab',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer className='py-8 border-t border-border/50 bg-background/10 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col items-center md:items-start gap-1'>
            <span className='font-bold text-foreground tracking-tight'>
              {t('footer.author')}
            </span>
            <span className='text-xs text-muted-foreground'>
              {t('footer.description')}
            </span>
          </div>

          <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-sm text-muted-foreground hover:text-primary transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-3'>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all'
              >
                <social.icon className='w-4 h-4' />
              </a>
            ))}
            <a
              href='#hero'
              aria-label='Retour en haut'
              className='p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all'
            >
              <ArrowUp className='w-4 h-4' />
            </a>
          </div>
        </div>
        <div className='mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground'>
          <p>{t('footer.rights', { year })}</p>
          <p>
            {t('footer.builtWith', {
              react: 'React.js',
              tailwind: 'TailwindCSS',
            })}
          </p>
        </div>
      </div>
    </footer>
  )
}
