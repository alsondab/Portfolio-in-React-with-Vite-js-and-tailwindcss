import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Download, Briefcase, Code, Star, Award, Globe, BookOpen, Zap, Users, Target, CheckCircle } from 'lucide-react';

export default function CVPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = (format) => {
    const fileName = `CV_Ali_Dabo_2024.${format}`;
    
    // Vérifier si les fichiers existent avant de télécharger
    const checkFileExists = async (url) => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      } catch {
        return false;
      }
    };
    
    if (format === 'pdf') {
      const pdfPath = '/cv/CV_Ali_Dabo.pdf';
      
      checkFileExists(pdfPath).then(exists => {
        if (exists) {
          const link = document.createElement('a');
          link.href = pdfPath;
          link.download = fileName;
          link.click();
        } else {
          alert('❌ Fichier PDF non trouvé!\n\nVeuillez:\n1. Créer le dossier public/cv/\n2. Y placer votre CV en PDF\n3. Le nommer "CV_Ali_Dabo.pdf"');
        }
      });
    } else if (format === 'docx') {
      const docxPath = '/cv/CV_Ali_Dabo.docx';
      
      checkFileExists(docxPath).then(exists => {
        if (exists) {
          const link = document.createElement('a');
          link.href = docxPath;
          link.download = fileName;
          link.click();
        } else {
          alert('❌ Fichier Word non trouvé!\n\nVeuillez:\n1. Créer le dossier public/cv/\n2. Y placer votre CV en Word\n3. Le nommer "CV_Ali_Dabo.docx"');
        }
      });
    }
    
    setShowDownloadModal(false);
  };

  const skills = [
    { name: 'React & Vite', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'TailwindCSS', level: 88, color: 'bg-cyan-500' },
    { name: 'MySQL', level: 75, color: 'bg-orange-500' },
    { name: 'Git/GitHub', level: 82, color: 'bg-purple-500' }
  ];

  const projects = [
    { 
      title: 'Portfolio Interactif', 
      tech: 'React, TailwindCSS', 
      description: 'Site web personnel avec animations et design responsive' 
    },
    { 
      title: 'API REST E-commerce', 
      tech: 'Node.js, Express, MySQL', 
      description: 'Backend complet pour application de commerce électronique' 
    },
    { 
      title: 'Dashboard Analytics', 
      tech: 'React, Chart.js, Django', 
      description: 'Interface de visualisation de données en temps réel' 
    }
  ];

  return (
    <div className={`max-w-6xl mx-auto bg-gradient-to-br from-slate-100 to-blue-50 p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Télécharger le CV</h3>
                <p className="text-gray-600">Choisissez votre format préféré</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleDownload('pdf')}
                  className="w-full flex items-center justify-between p-4 border-2 border-red-200 rounded-xl hover:border-red-400 hover:bg-red-50 transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">PDF</p>
                      <p className="text-sm text-gray-600">Format universel, idéal pour l'impression</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                
                <button
                  onClick={() => handleDownload('docx')}
                  className="w-full flex items-center justify-between p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm6 2a1 1 0 11-2 0 1 1 0 012 0zM7 8a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Word (DOCX)</p>
                      <p className="text-sm text-gray-600">Format éditable, personnalisable</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              
              <button
                onClick={() => setShowDownloadModal(false)}
                className="w-full py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowDownloadModal(true)}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <Download className="w-6 h-6 group-hover:animate-pulse" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Télécharger CV
          </span>
        </button>
      </div>

      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 mb-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mr-8 transform hover:scale-105 transition-transform duration-300">
                <img src="/public/portfolioProfil.png" alt="Ali Dabo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ALI DABO
              </h1>
              <p className="text-xl text-blue-200 mb-3">Développeur Web Full-Stack</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-blue-200">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Abidjan, CI</span>
                </div>
                <div className="flex items-center text-green-300">
                  <Zap className="w-4 h-4 mr-1" />
                  <span className="text-sm">Disponible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col space-y-3">
            <a href="mailto:contact@alidabo.site" className="group flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all duration-300">
              <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span className="text-sm">contact@alidabo.site</span>
            </a>
            <a href="tel:+22507101458664" className="group flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all duration-300">
              <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span className="text-sm">+225 07 10 14 58 64</span>
            </a>
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
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-blue-600">Développeur Full-Stack passionné</span> et récemment diplômé en Informatique de Génie Logiciel. 
            Fort d'une expertise en <span className="font-medium text-purple-600">React, Node.js et technologies modernes</span>, 
            je combine créativité technique et approche solution-oriented pour transformer vos idées en applications web performantes. 
            Ma capacité d'adaptation et mon goût pour l'innovation me permettent d'apporter une réelle valeur ajoutée à vos projets digitaux.
          </p>
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
                {['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'Express', 'Django', 'MySQL', 'Git', 'Netlify', 'Vercel'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full hover:from-blue-200 hover:to-purple-200 transition-all cursor-pointer transform hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Languages */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Langues</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { lang: 'Français', level: 'Natif', stars: 5 },
                { lang: 'Anglais', level: 'Courant', stars: 4 },
                { lang: 'Arabe', level: 'Notions', stars: 2 }
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
          
          {/* Projects Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {project.tech}
                    </span>
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
                  year: '2024',
                  status: 'Diplômé avec mention',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  degree: 'BSc. Business Management System',
                  school: 'Wisconsin University College, Accra, Ghana',
                  year: '2020-2022',
                  status: 'Parcours international',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  degree: 'Baccalauréat Série A1',
                  school: 'Lycée Ahmed Khadim OYABI, Gabon',
                  year: '2019',
                  status: 'Mention Bien',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((education, index) => (
                <div key={index} className="relative">
                  <div className="flex">
                    <div className={`w-1 bg-gradient-to-b ${education.color} rounded-full mr-6`}></div>
                    <div className="flex-1 pb-6">
                      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{education.degree}</h3>
                        <p className="text-blue-600 font-medium mb-1">{education.school}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{education.year}</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {education.status}
                          </span>
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
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Références Professionnelles</h2>
              <p className="text-gray-600 mb-8 text-lg">Recommandations et témoignages disponibles sur demande</p>
              
              <button 
                onClick={() => window.open("https://www.linkedin.com/in/alsondab", "_blank")}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                
                <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Consulter mon LinkedIn</span>
                
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Profil vérifié • Références disponibles</span>
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