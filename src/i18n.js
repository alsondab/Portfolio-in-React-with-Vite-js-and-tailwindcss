import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLanguage =
  typeof window !== 'undefined' ? localStorage.getItem('language') : null
const defaultLanguage =
  savedLanguage ||
  (typeof navigator !== 'undefined' && navigator.language.startsWith('en')
    ? 'en'
    : 'fr')

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        philosophy: 'Philosophie',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact',
        cv: 'CV',
      },
      aria: {
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
      },
      hero: {
        tagline: 'Développeur React.js · Web & Mobile · Automatisation AI',
        greeting: 'Hello world,',
        name: 'Dabo Ali',
        description1: 'Je développe des applications web et mobiles modernes.',
        description2:
          "avec React.js, Next.js et l'écosystème JavaScript moderne.",
        description3:
          "J'intègre également des solutions d'automatisation et d'intelligence artificielle pour créer des produits performants et évolutifs.",
        projects: 'Mes projets',
        viewResume: 'Voir mon CV',
        experienceYears: "Ans d'expérience",
        completedProjects: 'Projets réalisés',
        preferredStack: 'Écosystème de prédilection',
        discover: 'Découvrir',
      },
      about: {
        titlePrefix: 'Construire des produits numériques',
        titleHighlight: 'utiles et performants',
        philosophyTitle: 'Ma philosophie de travail',
        paragraph1:
          'Je conçois des solutions digitales qui allient simplicité, performance et expérience utilisateur. Chaque projet est pensé pour répondre à un besoin concret tout en restant évolutif et maintenable sur le long terme.',
        paragraph2:
          "De l'idée au déploiement, j'accorde une attention particulière à la qualité du code, à l'ergonomie et aux résultats métiers.",
        contactMe: 'Me contacter',
        viewResume: 'Voir mon CV',
        cards: {
          webTitle: 'Applications Web & Mobile',
          webDesc:
            "Développement d'applications modernes, rapides et responsives avec React, Next.js et React Native.",
          aiTitle: 'Automatisation & Intelligence Artificielle',
          aiDesc:
            "Intégration d'OpenAI, Make et d'outils d'automatisation pour optimiser les processus et gagner en productivité.",
          deployTitle: 'Architecture & Déploiement',
          deployDesc:
            'APIs, bases de données, authentification, cloud et déploiement continu pour des applications prêtes à la production.',
        },
      },
      skills: {
        title: 'Compétences',
        description:
          "Centré sur l'écosystème JavaScript React.js en tête avec une expertise croissante en automatisation AI et développement mobile.",
        categories: {
          all: 'Tout',
          frontend: 'Frontend',
          mobile: 'Mobile',
          backend: 'Backend',
          ai: 'Automatisation AI',
          tools: 'Outils',
        },
        categoryDescriptions: {
          all: 'Toutes mes compétences',
          frontend: 'React.js, Next.js, JS moderne',
          mobile: 'React Native, Expo, UI mobile',
          backend: 'APIs, bases de données, BaaS',
          ai: 'OpenAI, Make.com, Airtable',
          tools: 'Outils dev et déploiement',
        },
        level: {
          advanced: 'Avancé',
          intermediate: 'Intermédiaire',
          basic: 'Basique',
          beginner: 'Débutant',
        },
        skill: {
          react:
            'Hooks, state management, composants réutilisables, optimisation des performances',
          next: 'SSR, SSG, App Router, API Routes, optimisation SEO',
          javascript:
            'DOM, async/await, modules, closures, manipulation des données',
          typescript: 'Types, interfaces, generics, intégration React/Next.js',
          htmlcss: 'Structure sémantique, animations CSS, responsive design',
          tailwind: 'Utility-first, dark mode, design system, responsive',
          angular: 'Components, services, routing, formulaires réactifs',
          reactNative:
            'Applications cross-platform iOS & Android, navigation, animations natives',
          expo: 'SDK Expo, builds OTA, accès aux fonctionnalités natives du device',
          mobileUi:
            "Guidelines iOS & Android, design d'interfaces mobiles fluides",
          node: 'APIs RESTful, middlewares, authentification JWT, gestion des erreurs',
          mongodb: 'Schemas, CRUD, aggregation pipeline, indexation',
          supabase:
            'BaaS, authentification, base de données temps réel, stockage',
          firebase: 'Firestore, Auth, Realtime Database, Hosting',
          sql: 'Requêtes SQL, JOINs, relations, transactions, normalisation',
          restApi:
            "Conception et consommation d'APIs, gestion des erreurs, authentification",
          openai:
            'Génération de contenu, GPT-4, intégration dans des workflows automatisés',
          make: 'Automatisation de workflows, intégrations multi-services, scénarios complexes',
          airtable:
            'Base de données no-code, automatisations, intégrations avec Make & OpenAI',
          git: 'Versionning, branching, PR workflow, collaboration en équipe',
          docker:
            'Containerisation, Docker Compose, environnements reproductibles',
          figma: 'Maquettes UI/UX, prototypage, design system, handoff dev',
          postman: "Tests d'APIs, collections, automatisation, documentation",
          deploy:
            "Déploiement continu, variables d'environnement, fonctions serverless",
          cursor:
            'Édition AI-assistée, pair programming avec IA, productivité accélérée',
        },
      },
      projects: {
        titlePrefix: 'Galerie de',
        titleHighlight: 'Projets',
        filters: {
          all: 'Tout',
          personal: 'Personnel',
          professional: 'Professionnel',
          academic: 'Académique',
        },
        status: {
          inProgress: 'En cours',
        },
        actions: {
          view: 'Voir',
          code: 'Code',
        },
        items: {
          mendelcorp: {
            title: 'E-commerce Tech - MendelCorp',
            description:
              "Plateforme e-commerce spécialisée dans la vente de produits technologiques, conçue et développée au cours de mon stage au sein de l'entreprise MendelCorp. Optimisée pour la performance et une expérience utilisateur fluide.",
          },
          rafistoleur: {
            title: 'Application de Rafistoleur',
            description:
              "Rafistoleurs App est une application innovante visant à moderniser la recherche de rafistoleurs ('toclo toclo') en Côte d'Ivoire. Elle permet aux rafistoleurs de s'inscrire, de mettre à jour leur disponibilité et de se connecter avec des clients potentiels dans leur voisinage.",
          },
          make: {
            title: 'Automatisation LinkedIn - Make.com',
            description:
              'Automatisation de publication LinkedIn conçue avec Make.com, OpenAI et Airtable. Génère du contenu, planifie et publie automatiquement des posts LinkedIn pour améliorer la présence professionnelle.',
          },
          oldTopic: {
            title: 'Plateforme de Gestion des Anciens Sujets Universitaires',
            description:
              "Cette plateforme de gestion des anciens sujets d'examens créée en collaboration avec mon collègue de classe Agoh Chris René s'inscrit dans la volonté de l'université UTA de digitaliser l'accès aux ressources pédagogiques.",
          },
          dealon: {
            title: 'Dealon',
            description:
              'Application de gestion des tâches et projets multiplateforme en cours de développement, combinant une application mobile React Native et un tableau de bord web Next.js avec Supabase. Organisez vos tâches, suivez vos projets et améliorez votre efficacité avec des fonctions de priorisation et de suivi.',
          },
          portfolioV1: {
            title: 'Portfolio V1',
            description:
              "Ma première plateforme personnelle, entièrement construite à l'aide de HTML, CSS et JavaScript vanilla. Ce projet a été un excellent défi pour appliquer mes connaissances de base.",
          },
        },
      },
      contact: {
        label: 'Contact',
        heading: 'Contact',
        subheading: 'Parlons de votre projet',
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        fullName: 'Nom complet',
        emailPlaceholder: 'ali@email.com',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet...',
        send: 'Envoyer',
        sending: 'Envoi...',
        toastTitle: 'Message envoyé !',
        toastDescription: 'Je vous réponds dans les plus brefs délais.',
      },
      footer: {
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact',
        cv: 'CV',
        author: 'Ali Dabo',
        description: "Développeur React.js · Abidjan, Côte d'Ivoire",
        rights: '© {{year}} Ali Dabo — Tous droits réservés',
        builtWith: 'Construit avec {{react}} & {{tailwind}}',
        scrollTop: 'Retour en haut',
      },
      cv: {
        profileTitle: 'Profil Professionnel',
        profileDescription:
          "Développeur React.js spécialisé en Web, Mobile et Automatisation AI. Expérimenté dans la conception d'applications professionnelles — e-commerce, marketplaces, outils internes — de l'analyse des besoins jusqu'au déploiement. Anglophone courant (certificat officiel, formation au Ghana), capable d'intégrer des équipes internationales et de travailler sur des projets en anglais. Disponible immédiatement.",
        skillsTitle: 'Compétences Techniques',
        skillGroups: [
          {
            title: 'Frontend',
            items: ['React.js', 'Next.js', 'React Native (bases)'],
          },
          {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'REST API & Intégration API'],
          },
          {
            title: 'Bases de données',
            items: [
              'MongoDB Atlas',
              'PostgreSQL',
              'MySQL',
              'Supabase',
              'Firebase',
            ],
          },
          {
            title: 'Outils & AI',
            items: [
              'Make.com',
              'OpenAI API',
              'Airtable',
              'Git / GitHub',
              'Docker',
            ],
          },
        ],
        projectsTitle: 'Projets Récents',
        projectCards: [
          {
            name: 'Dealon — Marketplace',
            desc: 'Plateforme marketplace multi-vendeurs avec gestion des annonces, commandes et profils utilisateurs.',
            stack: 'React.js · Next.js · Supabase · React Native',
          },
          {
            name: 'Automatisation LinkedIn',
            desc: 'Système de publication automatique sur LinkedIn : génération de contenu avec OpenAI, planification via Airtable et déploiement avec Make.',
            stack: 'Make.com · OpenAI API · Airtable',
          },
        ],
        experienceTitle: 'Expérience Professionnelle',
        experienceRole: 'Développeur Full Stack',
        experienceMeta: 'Oct 2025 – Avr 2026 | Mendelcorp, Abidjan',
        experiencePoints: [
          "Conception et développement d'un site e-commerce (React.js / Next.js, MongoDB Atlas)",
          'Analyse des besoins clients et livraison de solution fonctionnelle',
          "Optimisation SEO, responsive design et intégration d'API tierces",
          'Résultat : client satisfait, recommandation obtenue',
        ],
        educationTitle: 'Formation',
        educationEntries: [
          {
            title: 'Licence en Informatique et Génie Logiciel',
            meta: "2023 – 2025 | Université Technologique d'Abidjan",
          },
          {
            title: 'Études en Management & Computer Studies',
            meta: '2021 – 2022 | Wisconsin International University College, Accra, Ghana',
          },
          {
            title: 'Intermediate English Certificate',
            meta: '2020 – 2021 | English Language Laboratory, Accra, Ghana',
          },
        ],
        languagesTitle: 'Langues',
        languages: [
          '🇫🇷 Français — Langue maternelle',
          '🇬🇧 Anglais — Courant (certifié, Ghana)',
        ],
        availability: "Disponible immédiatement | Ouvert à une période d'essai",
        downloadCv: 'Télécharger le CV (.pdf)',
        downloadFr: 'Télécharger le CV (FR)',
        downloadEn: 'Télécharger le CV (EN)',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        philosophy: 'Philosophy',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        cv: 'Resume',
      },
      aria: {
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      hero: {
        tagline: 'React.js Developer · Web & Mobile · AI Automation',
        greeting: 'Hello world,',
        name: 'Dabo Ali',
        description1: 'I build modern web and mobile applications.',
        description2:
          'using React.js, Next.js and the modern JavaScript ecosystem.',
        description3:
          'I also integrate automation and AI solutions to deliver scalable, high-performance products.',
        projects: 'My projects',
        viewResume: 'View my resume',
        experienceYears: 'Years experience',
        completedProjects: 'Completed projects',
        preferredStack: 'Preferred stack',
        discover: 'Discover',
      },
      about: {
        titlePrefix: 'Building digital products',
        titleHighlight: 'that are useful and performant',
        philosophyTitle: 'My working philosophy',
        paragraph1:
          'I design digital solutions that combine simplicity, performance and user experience. Every project is built to solve a real need while staying scalable and maintainable over time.',
        paragraph2:
          'From idea to deployment, I pay close attention to code quality, usability and business outcomes.',
        contactMe: 'Contact me',
        viewResume: 'View resume',
        cards: {
          webTitle: 'Web & Mobile Applications',
          webDesc:
            'Modern, fast and responsive apps using React, Next.js and React Native.',
          aiTitle: 'Automation & Artificial Intelligence',
          aiDesc:
            'OpenAI, Make, and automation tools integrated to optimize workflows and productivity.',
          deployTitle: 'Architecture & Deployment',
          deployDesc:
            'APIs, databases, authentication, cloud and CI/CD for production-ready applications.',
        },
      },
      skills: {
        title: 'Skills',
        description:
          'Focused on the JavaScript ecosystem with React.js at the core, and growing expertise in AI automation and mobile development.',
        categories: {
          all: 'All',
          frontend: 'Frontend',
          mobile: 'Mobile',
          backend: 'Backend',
          ai: 'AI Automation',
          tools: 'Tools',
        },
        categoryDescriptions: {
          all: 'All my skills',
          frontend: 'React.js, Next.js, modern JS',
          mobile: 'React Native, Expo, mobile UI',
          backend: 'APIs, databases, BaaS',
          ai: 'OpenAI, Make.com, Airtable',
          tools: 'Dev tools and deployment',
        },
        level: {
          advanced: 'Advanced',
          intermediate: 'Intermediate',
          basic: 'Basic',
          beginner: 'Beginner',
        },
        skill: {
          react:
            'Hooks, state management, reusable components, performance optimization',
          next: 'SSR, SSG, App Router, API Routes, SEO optimization',
          javascript: 'DOM, async/await, modules, closures, data manipulation',
          typescript: 'Types, interfaces, generics, React/Next.js integration',
          htmlcss: 'Semantic structure, CSS animations, responsive design',
          tailwind: 'Utility-first, dark mode, design system, responsive',
          angular: 'Components, services, routing, reactive forms',
          reactNative:
            'Cross-platform iOS & Android apps, navigation, native animations',
          expo: 'Expo SDK, OTA builds, native device feature access',
          mobileUi: 'iOS & Android guidelines, fluid mobile interface design',
          node: 'REST APIs, middleware, JWT auth, error handling',
          mongodb: 'Schemas, CRUD, aggregation pipeline, indexing',
          supabase: 'BaaS, auth, real-time database, storage',
          firebase: 'Firestore, Auth, Realtime Database, Hosting',
          sql: 'SQL queries, JOINs, relations, transactions, normalization',
          restApi: 'API design and consumption, error handling, authentication',
          openai: 'Content generation, GPT-4, workflow integration',
          make: 'Workflow automation, multi-service integrations, complex scenarios',
          airtable: 'No-code database, automations, Make & OpenAI integrations',
          git: 'Versioning, branching, PR workflow, team collaboration',
          docker: 'Containerization, Docker Compose, reproducible environments',
          figma: 'UI/UX mockups, prototyping, design systems, handoff',
          postman: 'API testing, collections, automation, documentation',
          deploy: 'Continuous deployment, env vars, serverless functions',
          cursor:
            'AI-assisted editing, pair programming with AI, boosted productivity',
        },
      },
      projects: {
        titlePrefix: 'Project',
        titleHighlight: 'Gallery',
        filters: {
          all: 'All',
          personal: 'Personal',
          professional: 'Professional',
          academic: 'Academic',
        },
        status: {
          inProgress: 'In progress',
        },
        actions: {
          view: 'View',
          code: 'Code',
        },
        items: {
          mendelcorp: {
            title: 'E-commerce Tech - MendelCorp',
            description:
              'E-commerce platform for technology products, designed and built during my internship at MendelCorp. Optimized for performance and a smooth user experience.',
          },
          rafistoleur: {
            title: 'Rafistoleur App',
            description:
              "Rafistoleurs App is an innovative platform modernizing the search for local repair professionals in Côte d'Ivoire. It allows technicians to register, update availability, and connect with nearby customers.",
          },
          make: {
            title: 'LinkedIn Automation - Make.com',
            description:
              'Automated LinkedIn publishing workflow built with Make.com, OpenAI and Airtable. It generates content, schedules posts, and publishes campaigns automatically to improve professional consistency and engagement.',
          },
          oldTopic: {
            title: 'University Old Topic Platform',
            description:
              'A previous exam topic management platform built with a classmate to digitalize access to academic resources for the University of Technology of Abidjan.',
          },
          dealon: {
            title: 'Dealon',
            description:
              'Cross-platform task and project management solution currently in development. It combines a React Native mobile app and a Next.js web dashboard with Supabase, helping you organize tasks, track progress, and boost productivity.',
          },
          portfolioV1: {
            title: 'Portfolio V1',
            description:
              'My first personal website built entirely with HTML, CSS and vanilla JavaScript. This project was a great challenge for applying fundamental web development skills.',
          },
        },
      },
      contact: {
        label: 'Contact',
        heading: "Let's talk about your project",
        subheading: "I'm ready to help bring your idea to life.",
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        fullName: 'Full name',
        emailPlaceholder: 'ali@email.com',
        message: 'Message',
        messagePlaceholder: 'Describe your project...',
        send: 'Send',
        sending: 'Sending...',
        toastTitle: 'Message sent!',
        toastDescription: 'I will reply as soon as possible.',
      },
      footer: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        cv: 'Resume',
        author: 'Ali Dabo',
        description: "React.js Developer · Abidjan, Côte d'Ivoire",
        rights: '© {{year}} Ali Dabo — All rights reserved',
        builtWith: 'Built with {{react}} & {{tailwind}}',
        scrollTop: 'Back to top',
      },
      cv: {
        profileTitle: 'Professional Profile',
        profileDescription:
          'React.js Developer specialized in Web, Mobile and AI Automation. Experienced in building professional applications — e-commerce, marketplaces, internal tools — from requirements analysis to deployment. Fluent in English (official certificate, training in Ghana), able to join international teams and work on English-speaking projects. Available immediately.',
        skillsTitle: 'Technical Skills',
        skillGroups: [
          {
            title: 'Frontend',
            items: ['React.js', 'Next.js', 'React Native (basics)'],
          },
          {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'REST API & API integration'],
          },
          {
            title: 'Databases',
            items: [
              'MongoDB Atlas',
              'PostgreSQL',
              'MySQL',
              'Supabase',
              'Firebase',
            ],
          },
          {
            title: 'Tools & AI',
            items: [
              'Make.com',
              'OpenAI API',
              'Airtable',
              'Git / GitHub',
              'Docker',
            ],
          },
        ],
        projectsTitle: 'Recent Projects',
        projectCards: [
          {
            name: 'Dealon — Marketplace',
            desc: 'Multi-vendor marketplace platform with product listings, orders and user profiles.',
            stack: 'React.js · Next.js · Supabase · React Native',
          },
          {
            name: 'LinkedIn Automation',
            desc: 'Automated LinkedIn publishing system: content generation with OpenAI, scheduling via Airtable and deployment with Make.',
            stack: 'Make.com · OpenAI API · Airtable',
          },
        ],
        experienceTitle: 'Professional Experience',
        experienceRole: 'Full Stack Developer',
        experienceMeta: 'Oct 2025 – Apr 2026 | Mendelcorp, Abidjan',
        experiencePoints: [
          'Designed and developed an e-commerce site (React.js / Next.js, MongoDB Atlas)',
          'Collected client requirements and delivered a functional solution',
          'Optimized SEO, responsive design and integrated third-party APIs',
          'Result: satisfied client and received recommendation',
        ],
        educationTitle: 'Education',
        educationEntries: [
          {
            title: 'Bachelor in Computer Science and Software Engineering',
            meta: '2023 – 2025 | University of Technology of Abidjan',
          },
          {
            title: 'Management & Computer Studies',
            meta: '2021 – 2022 | Wisconsin International University College, Accra, Ghana',
          },
          {
            title: 'Intermediate English Certificate',
            meta: '2020 – 2021 | English Language Laboratory, Accra, Ghana',
          },
        ],
        languagesTitle: 'Languages',
        languages: [
          '🇫🇷 French — Native',
          '🇬🇧 English — Fluent (certified, Ghana)',
        ],
        availability: 'Available immediately | Open to a trial period',
        downloadCv: 'Download CV (.pdf)',
        downloadFr: 'Download CV (FR)',
        downloadEn: 'Download CV (EN)',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng)
  }
})

export default i18n
