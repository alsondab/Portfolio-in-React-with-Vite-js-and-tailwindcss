import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { SplineBackground } from '../components/SplineBackground'

const Home = () => {
  return (
    <div className='relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500'>
      {/* Arrière-plan 3D Spline */}
      <SplineBackground />

      {/* Le conteneur global est transparent aux clics (pointer-events-none) */}
      <div className='relative z-10 pointer-events-none'>
        {/* On réactive les clics spécifiquement pour les éléments d'interface */}
        <div className='pointer-events-auto'>
          <Navbar />
        </div>

        {/* Le contenu principal réactive aussi ses clics pour tes boutons, liens et inputs */}
        <main className='transition-colors duration-500 pointer-events-auto'>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <div className='pointer-events-auto'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
