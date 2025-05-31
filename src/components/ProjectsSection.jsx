// ProjectsSection corrigé
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Clock } from 'lucide-react';

const projectsData = [
  {
    title: "Portfolio V1",
    description: "Ma première plateforme personnelle, entièrement construite à l'aide de **HTML, CSS et JavaScript vanilla**. Ce projet a été un excellent défi pour appliquer mes connaissances et comprendre en profondeur comment les éléments interagissent. J'y ai découvert l'importance du **design responsive et de la logique front-end**, posant les premières pierres de mon parcours de développeur.",
    imageSrc: "Portfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://alsondabportf.netlify.app/",
    repoLink: "https://github.com/alsondab/Portfolio_Html-Css.git",
    status: "completed"
  },
  {
    title: "Application de Rafistoleur",
    description: "Rafistoleurs App est une application innovante visant à moderniser la recherche de rafistoleurs ('toclo toclo') en Côte d'Ivoire. Elle permet aux rafistoleurs de s'inscrire, de mettre à jour leur disponibilité et de se connecter avec des clients potentiels dans leur voisinage. Les clients peuvent rechercher des rafistoleurs disponibles et les contacter directement via l'application.",
    imageSrc: "Rafisto.png",
    tags: ["Angular", "Laravel", "MySQL"],
    liveLink: "https://www.loom.com/share/2ed89f97ecac473d8826dee70cb9c178",
    repoLink: "https://github.com/alsondab/RafistoleurCi.git",
    status: "completed",
    isVideo: true
  },
  {
    title: "Plateforme de Gestion des Anciens Sujets Universitaires",
    description: "Cette plateforme de gestion des anciens sujets d'examens créée en collaboration avec mon collègue de classe Agoh Chris René s'inscrit dans la volonté de l'université UTA de digitaliser l'accès aux ressources pédagogiques et d'améliorer la préparation des étudiants aux examens. Elle permettra de centraliser les contenus historiques tout en assurant un suivi de leur utilisation.",
    imageSrc: "OldTopic.png",
    tags: ["React", "Django", "PostgreSQL"],
    repoLink: "https://github.com/AgohChris/OldTopic.git",
    status: "in-progress"
  },
  {
    title: "Wave Cloning",
    description: "Une application de transfert d'argent inspirée de Wave, développée en collaboration avec mon condisciple. Ce projet utilise React pour l'interface utilisateur et localStorage pour la gestion des données côté client. L'application permet aux utilisateurs de simuler des transferts d'argent et de gérer leur solde virtuel.",
    imageSrc: "wave-clone.png",
    tags: ["React", "localStorage", "Tailwind CSS"],
    repoLink: "https://github.com/AgohChris/WaveClonning.git",
    status: "completed"
  }
];

export const ProjectsSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20
      }
    },
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3
      }
    }
  };

  // Render badge based on project status
  const renderStatusBadge = (status, isVideo) => {
    if (status === "in-progress") {
      return (
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
          <Clock className="w-3 h-3 mr-1" />
          En cours
        </div>
      );
    }
    else if (isVideo) {
      return (
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
          <Play className="w-3 h-3 mr-1" />
          Vidéo démo
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 via-background to-background dark:from-secondary/5 dark:via-background dark:to-background relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block">
            Galerie de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Projets</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Voici quelques-uns de mes projets récents. Chaque projet a été soigneusement conçu avec une attention particulière aux détails, à la performance et à l'expérience utilisateur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 auto-rows-max">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-border/50"
              variants={projectCardVariants}
              whileHover="hover"
            >
              {/* Status badge */}
              {renderStatusBadge(project.status, project.isVideo)}

              {/* Project image */}
              <div className="relative h-64 w-full overflow-hidden group" style={{ aspectRatio: '16/9' }}>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  src={project.imageSrc}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                  width={640}
                  height={360}
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>

                {/* Tags positioned over the image at bottom */}
                <motion.div
                    className="flex flex-wrap gap-2"
                  variants={tagVariants}
                >
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                        className="inline-block bg-white/90 text-gray-900 dark:bg-gray-900/90 dark:text-gray-100 text-xs font-semibold px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-grow bg-card/50 backdrop-blur-sm border-t border-border/50">
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Project links */}
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Voir le projet</span>
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground hover:bg-secondary/50 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <a
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
            target="_blank"
            href="https://github.com/alsondab"
          >
            <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Voir tous mes projets sur GitHub</span>
            <span className="absolute right-3 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};