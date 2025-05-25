import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Briefcase, Code, Star, Award, Globe, BookOpen, Zap, Users, Target, CheckCircle, Calendar, GraduationCap, Search } from 'lucide-react';

export default function CVPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React & Vite', level: 65, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 60, color: 'bg-yellow-500' },
    { name: 'TailwindCSS', level: 60, color: 'bg-cyan-500' },
    { name: 'MySQL', level: 60, color: 'bg-orange-500' },
    { name: 'Git/GitHub', level: 70, color: 'bg-purple-500' }
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
      title: 'Développeur Web Junior (Stage)',
      company: 'Recherche active de stage',
      period: '2025 - À définir',
      description: 'En recherche active d\'une opportunité de stage pour mettre en pratique mes compétences :',
      type: 'stage',
      skills: ['Développement Full-Stack', 'Architecture Moderne', 'Méthodologies Agiles'],
      objectives: [
        'Contribuer à des projets d\'envergure avec Next.js et React',
        'Participer au développement d\'APIs RESTful',
        'Collaborer au sein d\'une équipe technique expérimentée'
      ]
    },
    {
      title: 'Projets Freelance',
      company: 'Travail indépendant',
      period: '2023 - Présent',
      description: 'Conception et développement de solutions web personnalisées :',
      type: 'freelance',
      achievements: [
        'Développement de sites vitrines et e-commerce avec Next.js',
        'Intégration de systèmes de paiement et d\'authentification',
        'Optimisation SEO et performance des applications'
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'TailwindCSS', 'PostgreSQL']
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
            Passionné par le développement web moderne avec <span className="font-medium text-blue-600">Next.js</span> et l'écosystème React.
            Je combine créativité technique et approche pragmatique pour créer des applications performantes et évolutives.
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
              <p className="text-gray-600 text-sm">Approfondir mes compétences en développement web dans un environnement professionnel</p>
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

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-x-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-500" />
                Technologies Additionnelles
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5&CSS3', 'Next.js', 'Angular', 'Node.js', 'Express', 'Django', 'MySQL', 'Git', 'Netlify', 'Vercel', 'shadcn/ui', 'T3 Stack', 'next-starter-leerob', 'ShipFast', 'NOWTS.APP', 'Neon DB', 'Cursor', 'tweakcn.com', '21st.dev'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full hover:from-blue-200 hover:to-purple-200 transition-all cursor-pointer transform hover:scale-105">
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

          {/* Experience Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Expérience & Recherche</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex">
                    <div className={`w-1 ${exp.type === 'stage' ? 'bg-gradient-to-b from-orange-500 to-red-500' : 'bg-gradient-to-b from-blue-500 to-purple-500'} rounded-full mr-6`}></div>
                    <div className="flex-1">
                      <div className={`rounded-xl p-6 transition-all duration-300 ${
                        exp.type === 'stage' 
                          ? 'bg-orange-50 border-2 border-orange-200 hover:border-orange-300' 
                          : 'bg-blue-50 border-2 border-blue-200 hover:border-blue-300'
                      }`}>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                            <p className={`font-medium ${exp.type === 'stage' ? 'text-orange-600' : 'text-blue-600'}`}>
                              {exp.company}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center gap-3">
                            <span className="text-sm text-gray-500">{exp.period}</span>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              exp.type === 'stage' 
                                ? 'bg-orange-100 text-orange-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {exp.type === 'stage' ? 'Recherche Active' : 'En cours'}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{exp.description}</p>

                        {exp.type === 'stage' ? (
                          <>
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {exp.skills.map((skill, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <ul className="space-y-2">
                                {exp.objectives.map((objective, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <a
                                href="mailto:contact@alidabo.site"
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                              >
                                <Mail className="w-4 h-4" />
                                Me contacter pour un stage
                              </a>
                            </div>
                          </>
                        ) : (
                          <>
                            <ul className="space-y-2 mb-4">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-600">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
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
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Formation Académique</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  degree: 'Licence en Informatique de Génie Logiciel',
                  school: 'Université de Technologie d\'Abidjan',
                  year: '2022-2025',
                  status: 'En cours',
                  color: 'from-blue-500 to-cyan-500',
                  current: true
                },
                {
                  degree: 'BSc. Business Management System',
                  school: 'Wisconsin University College, Accra, Ghana',
                  year: '2020-2022',
                  status: 'Diplômé',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  degree: 'Baccalauréat Série A1',
                  school: 'Lycée Ahmed Khadim OYABI, Gabon',
                  year: '2019',
                  status: 'Obtenu',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((education, index) => (
                <div key={index} className="relative">
                  <div className="flex">
                    <div className={`w-1 bg-gradient-to-b ${education.color} rounded-full mr-6`}></div>
                    <div className="flex-1 pb-6">
                      <div className={`${education.current ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{education.degree}</h3>
                          {education.current && (
                            <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full animate-pulse">
                              En cours
                            </span>
                          )}
                        </div>
                        <p className="text-blue-600 font-medium mb-1">{education.school}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{education.year}</span>
                        </div>
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