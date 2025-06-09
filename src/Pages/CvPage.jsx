import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Briefcase, Code, Star, Award, Globe, BookOpen, Zap, Users, Target, CheckCircle, Calendar, GraduationCap, Search, Building2 } from 'lucide-react';

export default function CVPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React & Next.js', level: 75, color: 'bg-blue-500' },
        { name: 'JavaScript/TypeScript', level: 70, color: 'bg-yellow-500' },
        { name: 'TailwindCSS/SCSS', level: 80, color: 'bg-cyan-500' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js/Express', level: 65, color: 'bg-green-500' },
        { name: 'Django/Python', level: 60, color: 'bg-purple-500' },
        { name: 'Supabase', level: 55, color: 'bg-emerald-500' },
        { name: 'MySQL/PostgreSQL', level: 60, color: 'bg-orange-500' },
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'React Native', level: 55, color: 'bg-indigo-500' },
        { name: 'Expo', level: 50, color: 'bg-blue-500' },
        { name: 'Mobile UI/UX', level: 50, color: 'bg-pink-500' },
      ]
    },
    {
      category: 'Outils & Méthodes',
      items: [
        { name: 'Git/GitHub', level: 75, color: 'bg-gray-700' },
        { name: 'Agile/Scrum', level: 65, color: 'bg-blue-600' },
        { name: 'CI/CD', level: 55, color: 'bg-red-500' },
      ]
    }
  ];

  const projects = [
    {
      title: 'Portfolio Interactif',
      tech: 'React, TailwindCSS',
      description: 'Site web personnel avec animations et design responsive',
      status: 'Complété'
    },
    {
      title: 'API REST E-commerce',
      tech: 'Node.js, Express, MySQL',
      description: 'Backend complet pour application de commerce électronique',
      status: 'En cours'
    },
    {
      title: 'Dashboard Analytics',
      tech: 'React, Chart.js, Django',
      description: 'Interface de visualisation de données en temps réel',
      status: 'Projet académique'
    }
  ];

  const experiences = [
    {
      title: 'Développeur Full-Stack (Stage)',
      company: 'En recherche active',
      period: '2024',
      type: 'stage',
      status: 'searching',
      description: 'À la recherche d\'une opportunité de stage pour mettre en pratique mes compétences en développement web moderne.',
      objectives: [
        'Développement d\'applications web avec React/Next.js',
        'Participation à la conception et développement d\'APIs',
        'Collaboration au sein d\'une équipe technique',
        'Application des méthodologies Agile/Scrum'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Développeur Web Freelance',
      company: 'Projets Indépendants',
      period: '2023 - Présent',
      type: 'freelance',
      status: 'active',
      description: 'Conception et développement de solutions web sur mesure pour divers clients.',
      achievements: [
        'Développement de sites vitrines et applications web',
        'Intégration de systèmes de paiement et authentification',
        'Optimisation des performances et du SEO',
        'Maintenance et mise à jour des applications'
      ],
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Projets Académiques',
      company: 'Université UTA',
      period: '2022 - 2023',
      type: 'academic',
      status: 'completed',
      description: 'Réalisation de projets pratiques dans le cadre de ma formation en génie logiciel.',
      achievements: [
        'Développement d\'une plateforme de gestion des anciens sujets',
        'Création d\'une application de transfert d\'argent (clone Wave)',
        'Participation à des projets d\'équipe agiles',
        'Présentation technique des projets'
      ],
      technologies: ['React', 'Django', 'MySQL', 'Git', 'Agile']
    }
  ];

  const education = [
    {
      degree: 'Licence en Génie Logiciel',
      school: 'Université UTA',
      period: '2021 - 2024',
      location: 'Abidjan, Côte d\'Ivoire',
      status: 'En cours',
      description: 'Formation approfondie en développement logiciel et conception d\'applications.',
      achievements: [
        'Spécialisation en développement web et applications mobiles',
        'Projets pratiques en équipe avec méthodologies agiles',
        'Maîtrise des concepts fondamentaux de programmation',
        'Participation active aux événements tech de l\'université'
      ],
      courses: [
        'Architectures Logicielles',
        'Développement Web Avancé',
        'Bases de Données',
        'Génie Logiciel'
      ]
    }
  ];

  return (
    <div className={`max-w-6xl mx-auto bg-gradient-to-br from-slate-100 to-blue-50 p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 mb-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <img src="/public/portfolioProfil.png" alt="Photo de profil" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-3 -right-1 bg-gradient-to-r from-orange-500 to-red-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Search className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="space-y-1 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  ALI DABO
                </h1>
                <p className="text-xl text-blue-200">Développeur Full-Stack</p>
                <p className="text-blue-300 text-sm">Étudiant en Génie Logiciel</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm text-blue-100">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Abidjan, CI</span>
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-sm text-sm text-orange-200">
                  <Search className="w-4 h-4 mr-1" />
                  <span>Stage 2024</span>
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-sm text-sm text-green-200">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  <span>Licence 3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a href="mailto:contact@alidabo.site" 
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-xl text-white transition-all duration-300">
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">contact@alidabo.site</span>
            </a>
            <a href="tel:+22507101458664" 
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-xl text-white transition-all duration-300">
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">+225 07 10 14 58 64</span>
            </a>
            <div className="flex justify-center gap-3 mt-1">
              <a href="https://github.com/alsondab" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/alsondab" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://alidabo.site" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300">
                <Globe className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Profile */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profil Professionnel</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">Développeur Full-Stack</span>
            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium">Licence 3 Génie Logiciel</span>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium">Recherche Stage 2024</span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Passionné par le développement web moderne avec <span className="font-medium text-blue-600">Next.js</span> et l'écosystème React,
            ainsi que par le développement mobile cross-platform avec <span className="font-medium text-indigo-600">React Native</span>.
            Je combine créativité technique et approche pragmatique pour créer des applications performantes et évolutives, que ce soit pour le web ou mobile.
            À la recherche d'une opportunité de stage pour contribuer à des projets innovants et enrichir mon expertise technique.
          </p>
        </div>
      </div>

      {/* Objectifs de Stage */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl shadow-xl p-8 mb-8 border border-orange-200">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-6">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectifs de Stage</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Développement Technique</h3>
              <p className="text-gray-600 text-sm">Approfondir mes compétences en développement web et mobile dans un environnement professionnel</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Travail en Équipe</h3>
              <p className="text-gray-600 text-sm">Collaborer avec des développeurs expérimentés et apprendre les bonnes pratiques</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Projet Concret</h3>
              <p className="text-gray-600 text-sm">Contribuer à des projets réels et avoir un impact mesurable sur les résultats</p>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 shadow-inner border border-blue-200">
            <h3 className="font-bold text-blue-700 mb-3 flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-blue-600" />
              Mon Ambition
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Mon objectif principal est de **développer une expertise technique solide** et d'acquérir une expérience professionnelle concrète en développement web.
              Je souhaite trouver un environnement stimulant où je pourrai transformer mes compétences en contributions significatives,
              afin d'assurer une trajectoire de carrière réussie, me permettant d'être **autonome financièrement** et de **fonder une famille épanouie**.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Enhanced */}
        <div className="lg:col-span-1 space-y-8">

          {/* Enhanced Skills */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Compétences Techniques</h2>
            </div>

            <div className="space-y-8">
              {skills.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    {category.category === 'Frontend' && <Globe className="w-4 h-4 mr-2 text-blue-500" />}
                    {category.category === 'Backend' && <Code className="w-4 h-4 mr-2 text-green-500" />}
                    {category.category === 'Mobile' && <Briefcase className="w-4 h-4 mr-2 text-gray-500" />}
                    {category.category === 'Outils & Méthodes' && <Briefcase className="w-4 h-4 mr-2 text-gray-500" />}
                    {category.category}
                  </h3>
                  
                  {category.items.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Technologies & Outils Maîtrisés
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'HTML5/CSS3', 'React.js', 'Next.js', 'TypeScript', 'TailwindCSS',
                  'Node.js', 'Express', 'Django', 'PostgreSQL', 'Git/GitHub',
                  'REST APIs', 'Responsive Design', 'UI/UX', 'Agile/Scrum',
                  'Testing (Jest)', 'CI/CD', 'Docker', 'AWS Basics'
                ].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm rounded-lg
                             border border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-blue-100 
                             transition-all cursor-default transform hover:scale-105 hover:shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Disponibilités */}
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold">Disponibilités</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">Période de Stage</h3>
                <p className="text-sm text-green-100">Flexible selon les besoins de l'entreprise</p>
                <p className="text-sm text-green-100">Minimum 2 mois, idéalement 3-6 mois</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">Modalités</h3>
                <p className="text-sm text-green-100">Temps plein ou temps partiel</p>
                <p className="text-sm text-green-100">Présentiel, distanciel ou hybride</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">Début Souhaité</h3>
                <p className="text-sm text-green-100">Dès que possible</p>
              </div>
            </div>
          </div>

          {/* Enhanced Languages */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Langues</h2>
            </div>

            <div className="space-y-4">
              {[
                { lang: 'Français', level: 'Natif', stars: 4 },
                { lang: 'Anglais', level: 'Courant', stars: 3 },
                { lang: 'Arabe', level: 'Notions', stars: 1 }
              ].map((language, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <span className="font-medium text-gray-800">{language.lang}</span>
                    <p className="text-sm text-gray-600">{language.level}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < language.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold">Contact & Réseaux</h2>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: 'contact@alidabo.site', href: 'mailto:contact@alidabo.site' },
                { icon: Phone, text: '+225 07 10 14 58 64', href: 'tel:+22507101458664' },
                { icon: Linkedin, text: 'linkedin.com/in/alsondab', href: 'https://www.linkedin.com/in/alsondab' },
                { icon: Github, text: 'github.com/alsondab', href: 'https://github.com/alsondab' }
              ].map((contact, index) => (
                <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <contact.icon className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Enhanced */}
        <div className="lg:col-span-2 space-y-8">

          {/* Enhanced Experiences Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Expérience Professionnelle</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-8 pb-8 group">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-300"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md group-hover:scale-110 transition-transform duration-300"></div>

                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                    {/* Status badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-gray-800 text-lg">{experience.title}</h3>
                        {experience.status === 'searching' && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            En recherche
                          </span>
                        )}
                        {experience.status === 'active' && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            En cours
                          </span>
                        )}
                        {experience.status === 'completed' && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            Complété
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-700 mb-4">
                      <Building2 className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-medium">{experience.company}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{experience.description}</p>

                    {/* Achievements/Objectives */}
                    <div className="space-y-2 mb-4">
                      {(experience.achievements || experience.objectives)?.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 text-gray-600 text-sm rounded-md hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Projets Récents</h2>
            </div>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {project.tech}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Education */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Formation</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md"></div>

                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-gray-800 text-lg">{edu.degree}</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {edu.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-700 mb-4">
                      <Building2 className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-medium">{edu.school}</span>
                      <MapPin className="w-4 h-4 ml-4 mr-1 text-gray-500" />
                      <span className="text-gray-600">{edu.location}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{edu.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Réalisations Principales
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                        Cours Principaux
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200 transition-colors duration-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Certificates */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Certifications & Formations</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: 'HarvardX: CS50\'s Web Programming',
                  subtitle: 'Python and JavaScript',
                  provider: 'edX (Harvard University)',
                  year: '2023',
                  link: 'https://www.edx.org',
                  color: 'border-red-200 hover:border-red-400'
                },
                {
                  title: 'JavaScript Programming Specialization',
                  subtitle: 'React, Node & MongoDB',
                  provider: 'Coursera (IBM)',
                  year: '2023',
                  link: 'https://www.coursera.org',
                  color: 'border-blue-200 hover:border-blue-400'
                },
                {
                  title: 'Diplôme d\'Anglais Intermédiaire',
                  subtitle: 'Communication professionnelle',
                  provider: 'English Language Laboratory (ELL), Ghana',
                  year: '2020',
                  color: 'border-green-200 hover:border-green-400'
                }
              ].map((cert, index) => (
                <div key={index} className={`border-2 ${cert.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{cert.title}</h3>
                      <p className="text-blue-600 font-medium">{cert.subtitle}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{cert.year}</span>
                  </div>
                  <p className="text-gray-600">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        {cert.provider}
                      </a>
                    ) : (
                      cert.provider
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced References */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Références & Portfolio</h2>
              <p className="text-gray-600 mb-8 text-lg">Projets et recommandations disponibles en ligne</p>

              <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/alsondab" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
                  <p className="text-sm text-gray-600 text-center">Parcours professionnel et recommandations</p>
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:contact@alidabo.site"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Me contacter pour plus d'informations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-12 text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">© {new Date().getFullYear()} Ali Dabo</p>
              <p className="text-gray-300">Développeur Web Full-Stack • alidabo.site</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Ouvert aux opportunités
              </span>
              <span className="text-gray-400 text-sm">
                Mis à jour le {new Date().toLocaleDateString('fr-FR')}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}