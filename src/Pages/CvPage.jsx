import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Download, Briefcase } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6">
      {/* Header section */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
        <div className="flex items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mr-6">
            <img src="/public/PortfolioProfil.png" alt="Ali Dabo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-900">ALI DABO</h1>
            <p className="text-blue-600">Développeur Web</p>
          </div>
        </div>

      </div>

      {/* Profile section */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
        <p className="text-gray-700 text-center">
          Jeune diplômé en Informatique de Génie Logiciel, passionné par le développement web et mobile.
          Je suis solution-oriented et ouvert à l'apprentissage. Je souhaite mettre en pratique mes compétences
          créatives et ma capacité de communication pour apporter de la valeur à vos projets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          {/* Skills section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Compétences pertinentes</h2>
            <ul className="space-y-1">
              <li className="flex items-center justify-center">
                HTML, CSS, TailwindCSS Bootstrap
              </li>
              <li className="flex items-center justify-center">
                JavaScript, React & Vite, Angular,
              </li>
              <li className="flex items-center justify-center">
                Node.js, Express, MySQL, Django
              </li>
              <li className="flex items-center justify-center">
                Développement Front-End & Back-End
              </li>
              <li className="flex items-center justify-center">
                Git, GitHub, Netlify, Vercel, GanttProject...
              </li>
              <li className="flex items-center justify-center">
                Documentation technique
              </li>
              <li className="flex items-center justify-center">
                Résolution de problèmes
              </li>
            </ul>
          </div>

          {/* Languages section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Langues</h2>
            <ul className="space-y-1">
              <li className="flex items-center justify-center">
                Français (natif)
              </li>
              <li className="flex items-center justify-center">
                Anglais (courant)
              </li>
              <li className="flex items-center justify-center">
                Arabe (notions)
              </li>
            </ul>
          </div>
          {/* Certificates section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Certificats</h2>
            <div className="mb-4 text-center">
              <h3 className="font-bold">Diplôme d'Anglais (Niveau Intermédiaire)</h3>
              <p className="text-gray-600">English Language Laboratory Institute (ELL), Ghana - 2020</p>
            </div>
            <div className="mb-4 text-center">
              <h3 className="font-bold">HarvardX: CS50's Web Programming with Python and JavaScript</h3>
              <p className="text-gray-600">
                <a href="https://www.edx.org" target="_blank" className="text-blue-600 hover:underline">edX</a> - 2023
              </p>
            </div>
            <div className="mb-4 text-center">
              <h3 className="font-bold">Spécialisation JavaScript Programming with React, Node & MongoDB</h3>
              <p className="text-gray-600">
                <a href="https://www.coursera.org" target="_blank" className="text-blue-600 hover:underline">Coursera (IBM)</a> - 2023
              </p>
            </div>
          </div>
          {/* Contact section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Contact</h2>
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center">
                <Phone size={16} className="text-blue-900 mr-2" />
                <span>+225 07 10 14 58 64</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail size={16} className="text-blue-900 mr-2" />
                <a href="mailto:contact@alidabo.site" target="_blank" className="text-blue-600 hover:underline">contact@alidabo.site</a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin size={16} className="text-blue-900 mr-2" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center justify-center">
                <Linkedin size={16} className="text-blue-900 mr-2" />
                <a href="https://www.linkedin.com/in/alsondab" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/alsondab</a>
              </div>
              <div className="flex items-center justify-center">
                <Github size={16} className="text-blue-900 mr-2" />
                <a href="https://github.com/alsondab" target="_blank" className="text-blue-600 hover:underline">github.com/alsondab</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          {/* Education section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Formation</h2>
            <div className="mb-4 text-center">
              <h3 className="font-bold">Licence en Informatique de Génie Logiciel</h3>
              <p className="text-gray-600">Institution: Université de Technologie d'Abidjan - 2024</p>
            </div>
            <div className="mb-4 text-center">
              <h3 className="font-bold">BSc. Business Management System (non terminé)</h3>
              <p className="text-gray-600">Wisconsin University College, Accra, Ghana - 2020-2022</p>
            </div>
            <div className="mb-4 text-center">
              <h3 className="font-bold">Baccalauréat Série A1</h3>
              <p className="text-gray-600">Lycée Ahmed Khadim OYABI, Gabon - 2019</p>
            </div>
          </div>

          {/* Experience section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Expérience professionnelle</h2>
            <div className="mb-4">
              <h3 className="font-bold text-center">Développeur Web Junior</h3>
              <p className="text-gray-600 text-center">Mars 2024 à Présent</p>
              <div className="text-gray-700 mt-2">
                <p className="italic text-center">Projets personnels et académiques:</p>
                <ul className="mt-1 space-y-1 text-center">
                  <li className="flex items-center justify-center">
                    Développement d'applications web avec React
                  </li>
                  <li className="flex items-center justify-center">
                    Création de sites responsive avec HTML, CSS et JavaScript
                  </li>
                  <li className="flex items-center justify-center">
                    Mise en place d'une API REST avec Node.js
                  </li>
                  <li className="flex items-center justify-center">
                    Maintenance et documentation de code
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reference section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
            <h2 className="text-blue-900 font-bold mb-4 uppercase border-b border-gray-200 pb-2 text-center">Références</h2>
            <div className="space-y-4 text-center">
              <div>
                <h3 className="font-bold">Madame Cécile Dubois</h3>
                <div className="flex items-center justify-center mt-1">
                  <Briefcase size={16} className="text-blue-900 mr-2" />
                  <p className="text-gray-700">Responsable Pédagogique</p>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Mail size={16} className="text-blue-900 mr-2" />
                  <a href="mailto:cecile.dubois@email.com" className="text-blue-600 hover:underline">cecile.dubois@email.com</a>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Phone size={16} className="text-blue-900 mr-2" />
                  <a href="tel:+2250123456789" className="text-blue-600 hover:underline">+225 01 23 45 67 89</a>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Linkedin size={16} className="text-blue-900 mr-2" />
                  <a href="https://www.linkedin.com/in/cecile-dubois" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn de Cécile Dubois</a>
                </div>
              </div>
              <div>
                <h3 className="font-bold">Monsieur Jean-Pierre Leroy</h3>
                <div className="flex items-center justify-center mt-1">
                  <Briefcase size={16} className="text-blue-900 mr-2" />
                  <p className="text-gray-700">Directeur Technique</p>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Mail size={16} className="text-blue-900 mr-2" />
                  <a href="mailto:jeanpierre.leroy@email.com" className="text-blue-600 hover:underline">jeanpierre.leroy@email.com</a>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Phone size={16} className="text-blue-900 mr-2" />
                  <a href="tel:+2250987654321" className="text-blue-600 hover:underline">+225 09 87 65 43 21</a>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Linkedin size={16} className="text-blue-900 mr-2" />
                  <a href="https://www.linkedin.com/in/jeanpierre-leroy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn de Jean-Pierre Leroy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} - Ali Dabo | Curriculum Vitae</p>
        <p className="mt-1">Mis à jour le {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}