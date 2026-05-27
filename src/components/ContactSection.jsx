import { useState, useEffect, useRef } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/use-toast' // Gardé si ton alias hook est configuré ainsi
import { useForm, ValidationError } from '@formspree/react'
import { motion as Motion } from 'framer-motion'

export const ContactSection = () => {
  const { toast } = useToast()
  const { t } = useTranslation()
  const [state, handleSubmit] = useForm('mlgvoola')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: t('contact.toastTitle'),
        description: t('contact.toastDescription'),
        variant: 'success',
      })
    }
  }, [state.succeeded, toast, t])

  const contacts = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'alsondab9@gmail.com',
      href: 'mailto:alsondab9@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+225 07 10 14 58 64',
      href: 'tel:+2250710145864',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: "Abidjan, Côte d'Ivoire",
      href: null,
    },
  ]

  return (
    <section id='contact' ref={sectionRef} className='py-28 px-4 relative '>
      <div className='container mx-auto max-w-5xl'>
        <Motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className='text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3'>
            {t('contact.label')}
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {t('contact.heading')}{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500'>
              {t('contact.subheading')}
            </span>
          </h2>
        </Motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 items-start'>
          <Motion.div
            className='lg:col-span-2 space-y-8'
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className='space-y-5'>
              {contacts.map((contact) => (
                <div
                  key={contact.label}
                  className='flex items-start gap-4 group'
                >
                  <div className='mt-0.5 p-2 rounded-lg bg-primary/8 border border-primary/10'>
                    <contact.icon className='w-4 h-4 text-primary' />
                  </div>
                  <div>
                    <p className='text-xs text-muted-foreground uppercase tracking-wider mb-0.5'>
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className='text-sm font-medium text-foreground hover:text-primary transition-colors'
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className='text-sm font-medium text-foreground'>
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            className='lg:col-span-3'
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='space-y-1.5'>
                  <label
                    htmlFor='name'
                    className='text-xs uppercase text-muted-foreground font-medium'
                  >
                    {t('contact.fullName')}
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    required
                    placeholder='Ali Dabo'
                    className='w-full px-4 py-3 rounded-xl text-sm bg-secondary/30 border border-border/50 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 text-foreground'
                  />
                </div>
                <div className='space-y-1.5'>
                  <label
                    htmlFor='email'
                    className='text-xs uppercase text-muted-foreground font-medium'
                  >
                    {t('contact.email')}
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    placeholder='ali@email.com'
                    className='w-full px-4 py-3 rounded-xl text-sm bg-secondary/30 border border-border/50 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 text-foreground'
                  />
                </div>
              </div>
              <div className='space-y-1.5'>
                <label
                  htmlFor='message'
                  className='text-xs uppercase text-muted-foreground font-medium'
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  placeholder={t('contact.messagePlaceholder')}
                  className='w-full px-4 py-3 rounded-xl text-sm bg-secondary/30 border border-border/50 outline-none resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 text-foreground'
                />
              </div>

              <button
                type='submit'
                disabled={state.submitting}
                className='w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60'
              >
                {state.submitting ? (
                  <>
                    <Loader2 className='w-4 h-4 animate-spin' />{' '}
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4' /> {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
