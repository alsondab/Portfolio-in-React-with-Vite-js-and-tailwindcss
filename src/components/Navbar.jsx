import { cn } from '@/lib/utils'
import { Menu, X, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.philosophy', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
]

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const sections = navItems.map((item) => item.href.substring(1))
      const currentPosition = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= currentPosition) {
          if (activeSection !== sections[i]) setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'fr'

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-500',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'py-5',
      )}
    >
      <div className='container flex items-center justify-between gap-4'>
        <a
          href='#hero'
          className='group flex items-center gap-2 rounded-lg p-1'
        >
          <img
            src='/logo.ico'
            alt='Logo'
            className='h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6'
          />
        </a>

        <div className='hidden md:flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => changeLanguage('fr')}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-all duration-300',
                currentLanguage === 'fr'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/80 text-foreground/80 hover:bg-primary/10',
              )}
            >
              FR
            </button>
            <button
              type='button'
              onClick={() => changeLanguage('en')}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-all duration-300',
                currentLanguage === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/80 text-foreground/80 hover:bg-primary/10',
              )}
            >
              EN
            </button>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  'py-2 px-4 rounded-lg transition-all duration-300 font-medium relative group hover:text-primary',
                  isActive ? 'text-primary bg-primary/5' : 'text-foreground/80',
                )}
              >
                {t(item.key)}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 transform origin-left',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </a>
            )
          })}

          <a
            href='/my-cv'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 hover:border-primary/40'
          >
            <FileText className='w-4 h-4' />
            {t('nav.cv')}
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-primary/5',
            isMenuOpen ? 'bg-primary/10 text-primary rotate-90' : 'rotate-0',
          )}
          aria-label={isMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-background/98 backdrop-blur-xl z-30 flex items-center justify-center transition-all duration-500 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none',
          )}
        >
          {/* Close button inside overlay for clarity */}
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('aria.closeMenu')}
            className='absolute top-4 right-4 p-2 rounded-md bg-background/70 backdrop-blur-md hover:bg-background/80 z-40'
          >
            <X size={22} />
          </button>
          <div className='flex flex-col items-center gap-6 text-xl'>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms',
                  }}
                  className={cn(
                    'py-3 px-6 rounded-xl font-medium text-center transition-all duration-300 transform',
                    isMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-8 opacity-0',
                    isActive
                      ? 'bg-primary/10 text-primary scale-110'
                      : 'hover:bg-primary/5 hover:text-primary hover:scale-110',
                  )}
                >
                  {t(item.key)}
                </a>
              )
            })}

            <a
              href='/my-cv'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setIsMenuOpen(false)}
              className='py-3 px-6 rounded-xl font-medium flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300'
            >
              <FileText className='w-5 h-5' />
              {t('nav.cv')}
            </a>

            <div className='flex gap-2'>
              <button
                type='button'
                onClick={() => changeLanguage('fr')}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  currentLanguage === 'fr'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background/80 text-foreground/80 hover:bg-primary/10',
                )}
              >
                FR
              </button>
              <button
                type='button'
                onClick={() => changeLanguage('en')}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  currentLanguage === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background/80 text-foreground/80 hover:bg-primary/10',
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
