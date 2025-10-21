import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, MapPin, Calendar, Award } from 'lucide-react';

// Components
import ShinyText from "./components/ShinyText";
import Plasma from './components/Plasma';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Ascendance",
      description: "2D platformer/Boss Rush game with unique mechanics and challenging levels.",
      tech: ["Unity", "C#", "Aseprite", "Photoshop"],
      image: "https://github.com/jarebYT/Portfolio/blob/main/img/ascendance.png?raw=true",
      github: "https://github.com/jarebYT/Ascendance",
      live: "https://github.com/jarebYT/Ascendance/releases/tag/release"
    },
    {
      title: "Pong Panic VR",
      description: "Virtual Reality pong game with multiplayer support and immersive graphics.",
      tech: ["Unity", "C#", "Blender", "Oculus SDK"],
      image: "https://github.com/jarebYT/Portfolio/blob/main/img/pongpanic.png?raw=true",
      github: "https://github.com/jarebYT/Pong-Panic-VR",
      live: "https://github.com/jarebYT/Pong-Panic-VR"
    },
    {
      title: "Fromage Clicker",
      description: "Beautiful cheese-themed clicker game with interactive UI and engaging gameplay.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://github.com/jarebYT/Portfolio/blob/main/img/fromageclicker.png?raw=true",
      github: "https://github.com/jarebYT/Fromage-Clicker",
      live: "https://github.com/jarebYT/Fromage-Clicker"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <Plasma />

        {/* Contenu centré */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-2 bg-gray-900 rounded-full border border-gray-700 mb-8">
            <span className="text-gray-300 text-sm font-medium">👋 Hello, I'm Alexandre</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to my Portfolio !
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technologies and clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-white hover:text-white transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Flèche en bas */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Alexandre Vanneuville</h3>
              <ShinyText text="Junior Full Stack Developer" className="text-xl mb-6" speed={3} />

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Lille, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>3+ Years Experience</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm a junior full-stack developer passionate about building digital solutions that make an impact.
                I enjoy learning new technologies, writing clean code, and creating user-friendly experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-gray-400 text-sm">Years</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-gray-400 text-sm">Clients</div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="p-3 bg-white rounded-lg hover:bg-gray-200 transition-all">
                  <Github className="text-black" size={20} />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg hover:bg-gray-200 transition-all">
                  <Linkedin className="text-black" size={20} />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg hover:bg-gray-200 transition-all">
                  <Mail className="text-black" size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-20"></div>
                <img 
                  src="https://avatars.githubusercontent.com/u/123905021?v=4" 
                  alt="Profile" 
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                      <Github className="text-black" size={20} />
                    </a>
                    <a href={project.live} className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink className="text-black" size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-12">           
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Award className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Self-Taught Full Stack Developer</h4>
                      <p className="text-gray-300 mb-2">Self-Taught • 2021 - Present</p>
                      <p className="text-gray-400 text-sm">Built and maintained full-stack applications from concept to deployment.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Award className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Technical Support</h4>
                      <p className="text-gray-300 mb-2">Bump Géoservices • 2024 - Present</p>
                      <p className="text-gray-400 text-sm">Providing technical support and troubleshooting with location-tracking devices used for vehicle fleet management and personnel monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-3">
                  {['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'SQL',
                    'React', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS', 'Bootstrap',
                    'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Linux', 'Git', 'GitHub', 'VSCode', 'Postman',
                    'AWS', 'Azure', 'Netlify', 'Apache'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <Mail className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">alexandre.vnvl@gmail.com</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <Calendar className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-gray-400">Within 24 hours</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <Award className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Availability</h3>
              <p className="text-gray-400">Open to projects</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="https://github.com/jarebYT" className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alexandre-vanneuville/" className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:alexandre.vnvl@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
              <Mail size={20} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Alexandre Vanneuville. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;