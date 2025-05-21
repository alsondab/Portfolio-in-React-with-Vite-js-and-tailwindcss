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
      className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <p className="text-slate-700 dark:text-slate-500 max-w-2xl mx-auto text-lg">
            Voici quelques-uns de mes projets récents. Chaque projet a été soigneusement conçu avec une attention particulière aux détails, à la performance et à l'expérience utilisateur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              // Modifications ici pour un meilleur affichage en mode clair
              // bg-white pour le mode clair, dark:bg-gray-800 pour le mode sombre
              // Ajout de backdrop-blur-sm pour l'effet de flou sur les cartes
              className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              variants={projectCardVariants}
              whileHover="hover"
            >
              {/* Status badge */}
              {renderStatusBadge(project.status, project.isVideo)}

              {/* Project image */}
              <div className="relative h-56 w-full overflow-hidden group">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 filter group-hover:brightness-110"
                  src={project.imageSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Tags positioned over the image at bottom */}
                <motion.div
                  className="absolute bottom-3 left-3 flex flex-wrap gap-2"
                  variants={tagVariants}
                >
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      // Modifications ici pour les tags en mode clair
                      // bg-white/90 pour le mode clair (légèrement transparent)
                      // text-blue-700 pour le mode clair
                      className="inline-block bg-white/90 dark:bg-gray-800/90 text-blue-700 dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Modifications ici pour le texte en mode clair */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>

                {/* text-gray-700 pour le mode clair */}
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-4">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.status === "in-progress" ? (
                    <div className="inline-flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-400 rounded-md bg-gray-100 dark:bg-gray-700/50 flex-1">
                      <Clock className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </div>
                  ) : project.isVideo ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex-1"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Voir la vidéo
                    </a>
                  ) : (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Démo live
                    </a>
                  )}

                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Modifications ici pour le bouton "Code source" en mode clair
                    // border-gray-300 pour le mode clair
                    // text-gray-700 pour le mode clair
                    // hover:bg-gray-50 pour le mode clair
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-all duration-300 flex-1"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Code source
                  </a>
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