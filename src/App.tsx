import { useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Server, Cpu, ChevronDown } from 'lucide-react';

// React Bits components
import Plasma from './components/Plasma';
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText';
import CountUp from './components/CountUp';
import SpotlightCard from './components/SpotlightCard';
import TiltedCard from './components/TiltedCard';
import FadeContent from './components/FadeContent';
import SpecularButton from './components/SpecularButton';

// ─── Pastel palettes picked randomly on each page load ───
interface Palette {
  name: string;
  plasma: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  buttonBase: string;
  statFrom: string;
  statTo: string;
  graphColor: string;
  graphLine: string;
  graphPoint: string;
}

const PALETTES: Palette[] = [
  {
    name: 'blue',
    plasma: '#1e3a5f',
    accent: '#93c5fd',
    accentLight: '#bfdbfe',
    accentDark: '#3b82f6',
    buttonBase: '#111c30',
    statFrom: '#60a5fa',
    statTo: '#93c5fd',
    graphColor: '#93c5fd',
    graphLine: '#3b82f6',
    graphPoint: '#bfdbfe'
  },
  {
    name: 'green',
    plasma: '#1a3a2a',
    accent: '#86efac',
    accentLight: '#bbf7d0',
    accentDark: '#22c55e',
    buttonBase: '#0f1f15',
    statFrom: '#4ade80',
    statTo: '#86efac',
    graphColor: '#86efac',
    graphLine: '#22c55e',
    graphPoint: '#bbf7d0'
  },
  {
    name: 'pink',
    plasma: '#3a1a30',
    accent: '#f9a8d4',
    accentLight: '#fbcfe8',
    accentDark: '#ec4899',
    buttonBase: '#201019',
    statFrom: '#f472b6',
    statTo: '#f9a8d4',
    graphColor: '#f9a8d4',
    graphLine: '#ec4899',
    graphPoint: '#fbcfe8'
  },
  {
    name: 'purple',
    plasma: '#2a1a3a',
    accent: '#c4b5fd',
    accentLight: '#ddd6fe',
    accentDark: '#8b5cf6',
    buttonBase: '#191024',
    statFrom: '#a78bfa',
    statTo: '#c4b5fd',
    graphColor: '#c4b5fd',
    graphLine: '#8b5cf6',
    graphPoint: '#ddd6fe'
  },
  {
    name: 'gold',
    plasma: '#3a301a',
    accent: '#fde68a',
    accentLight: '#fef3c7',
    accentDark: '#f59e0b',
    buttonBase: '#201a0f',
    statFrom: '#fbbf24',
    statTo: '#fde68a',
    graphColor: '#fde68a',
    graphLine: '#f59e0b',
    graphPoint: '#fef3c7'
  },
  {
    name: 'teal',
    plasma: '#1a3535',
    accent: '#99f6e4',
    accentLight: '#ccfbf1',
    accentDark: '#0d9488',
    buttonBase: '#0f1f1f',
    statFrom: '#2dd4bf',
    statTo: '#99f6e4',
    graphColor: '#99f6e4',
    graphLine: '#0d9488',
    graphPoint: '#ccfbf1'
  },
  {
    name: 'coral',
    plasma: '#3a201a',
    accent: '#fed7aa',
    accentLight: '#ffe4cc',
    accentDark: '#f97316',
    buttonBase: '#201210',
    statFrom: '#fb923c',
    statTo: '#fed7aa',
    graphColor: '#fed7aa',
    graphLine: '#f97316',
    graphPoint: '#ffe4cc'
  },
  {
    name: 'lavender',
    plasma: '#25203a',
    accent: '#e9d5ff',
    accentLight: '#f3e8ff',
    accentDark: '#a855f7',
    buttonBase: '#15101f',
    statFrom: '#c084fc',
    statTo: '#e9d5ff',
    graphColor: '#e9d5ff',
    graphLine: '#a855f7',
    graphPoint: '#f3e8ff'
  }
];

const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const App = () => {
  const palette = useMemo(() => pickRandom(PALETTES), []);

  const c = palette;

  const projects = [
    {
      title: 'Pong Panic VR',
      description: 'Immersive VR ping pong with realistic physics engine and multiplayer support for Oculus Quest.',
      tech: ['Unity', 'C#', 'Blender', 'Oculus SDK'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/pongpanic.png',
      github: 'https://github.com/jarebYT/Pong-Panic-VR',
      live: 'https://github.com/jarebYT/Pong-Panic-VR'
    },
    {
      title: 'Orbite',
      description: 'Real-time GPS fleet tracking platform leveraging Traccar for vehicle and asset monitoring.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'LocationIQ API'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/orbite.png',
      github: 'https://github.com/jarebYT/Orbite',
      live: 'https://github.com/jarebYT/Orbite'
    },
    {
      title: 'Ascendance',
      description: '2D boss-rush platformer with unique combat mechanics, hand-crafted pixel art, and challenging AI.',
      tech: ['Unity', 'C#', 'Aseprite', 'Photoshop'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/ascendance.png',
      github: 'https://github.com/jarebYT/Ascendance',
      live: 'https://github.com/jarebYT/Ascendance/releases/tag/release'
    },
    {
      title: 'nullOS',
      description: 'A lightweight Unix-inspired operating system built from scratch in C and x86 Assembly.',
      tech: ['C', 'Assembly', 'SASM', 'Makefile'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/nullos.png',
      github: 'https://github.com/jarebYT/nullOS',
      live: 'https://github.com/jarebYT/nullOS'
    },
    {
      title: 'TimeCapsule',
      description: 'Encrypted digital time capsules. Write messages to your future self with AES-256 encryption.',
      tech: ['React', 'Express', 'MongoDB', 'AES Encryption'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/timecapsule.png',
      github: 'https://github.com/jarebYT/timecapsule',
      live: 'https://github.com/jarebYT/timecapsule'
    },
    {
      title: 'More soon...',
      description: 'Always building. Always learning. New projects are in the pipeline — stay tuned.',
      tech: ['...'],
      image: 'https://raw.githubusercontent.com/jarebYT/Portfolio/refs/heads/main/img/moresoon.jpg',
      github: 'https://github.com/jarebYT',
      live: 'https://github.com/jarebYT'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared inline styles for the current palette
  const shadowColor = `0 0 30px ${c.accentDark}26`;
  const tagStyle: React.CSSProperties = { backgroundColor: `${c.accentDark}15`, color: c.accent, borderColor: `${c.accentDark}25` };
  const chipStyle: React.CSSProperties = { backgroundColor: '#ffffff05', color: '#9ca3af', borderColor: '#ffffff0d' };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Plasma background */}
      <div className="absolute inset-0 w-full pointer-events-none" style={{ height: '100%' }}>
        <Plasma
          color={c.plasma}
          speed={0.5}
          direction="forward"
          scale={0.4}
          opacity={1}
          mouseInteractive={false}
        />
      </div>

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <FadeContent duration={800} initialOpacity={0}>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-white/[0.03] backdrop-blur-md rounded-full border border-white/[0.06]"
              style={{ boxShadow: shadowColor }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: c.accent }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: c.accent }} />
              </span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Hello, I'm Alexandre</span>
            </div>
          </FadeContent>

          <BlurText
            text="Alexandre Vanneuville"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight justify-center"
            animateBy="words"
            direction="top"
            delay={150}
            stepDuration={0.3}
          />

          <BlurText
            text="Full-Stack Developer & Creative Builder"
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide mb-6 justify-center"
            animateBy="words"
            direction="top"
            delay={200}
            stepDuration={0.35}
          />

          <FadeContent duration={1000} delay={0.6} initialOpacity={0}>
            <ShinyText
              text="Crafting digital experiences with modern technologies & clean code"
              className="text-lg md:text-xl max-w-2xl mx-auto mb-14 text-center block"
              speed={3}
              color="#6b7280"
              shineColor={c.accentLight}
              spread={90}
            />
          </FadeContent>

          <FadeContent duration={800} delay={1} initialOpacity={0}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <SpecularButton
                size="lg"
                lineColor={c.accentDark}
                baseColor={c.buttonBase}
                intensity={1.2}
                shineSize={12}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </SpecularButton>
              <SpecularButton
                size="lg"
                lineColor={c.accent}
                baseColor="#1e293b"
                intensity={0.8}
                shineSize={14}
                shineFade={50}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </SpecularButton>
            </div>
          </FadeContent>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10">
          <ChevronDown size={28} style={{ color: `${c.accent}80` }} />
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeContent blur duration={1200}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                Who I am, what I do, and the technologies I wield
              </p>
            </div>
          </FadeContent>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeContent blur duration={1200} delay={0.2}>
              <div className="flex justify-center">
                <TiltedCard
                  imageSrc="https://avatars.githubusercontent.com/u/123905021?v=4"
                  altText="Alexandre Vanneuville"
                  containerHeight="380px"
                  containerWidth="380px"
                  imageHeight="380px"
                  imageWidth="380px"
                  rotateAmplitude={12}
                  scaleOnHover={1.08}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              </div>
            </FadeContent>

            <FadeContent blur duration={1200} delay={0.4}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Alexandre Vanneuville</h3>
                <ShinyText
                  text="Junior Full Stack Developer"
                  className="text-xl mb-6"
                  speed={3}
                  color="#6b7280"
                  shineColor={c.accentLight}
                />

                <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-400 text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.06]">
                    <MapPin size={14} />
                    <span>Lille, France</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.06]">
                    <Calendar size={14} />
                    <span>4+ Years Exp.</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                  I'm a self-taught full-stack developer who thrives on turning ideas into reality.
                  From operating systems in C to VR games in Unity, I love exploring the full spectrum
                  of software engineering. Clean code, thoughtful architecture, and elegant UX drive my work.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { value: 10, label: 'Projects', suffix: '+' },
                    { value: 4, label: 'Years Exp.', suffix: '' },
                    { value: 35, label: 'Clients', suffix: '' }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-4 bg-white/[0.02] backdrop-blur-sm rounded-xl border transition-all duration-300"
                      style={{ borderColor: '#ffffff0d' }}
                    >
                      <div
                        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(to bottom right, ${c.statFrom}, ${c.statTo})` }}
                      >
                        <CountUp from={0} to={stat.value} separator="," direction="up" duration={2} delay={0.5} className="count-up-text" />
                        {stat.suffix}
                      </div>
                      <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/jarebYT"
                    className="p-3 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300 group"
                    style={{ ':hover': {} as any }}
                  >
                    <Github className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexandre-vanneuville/"
                    className="p-3 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300 group"
                  >
                    <Linkedin className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a
                    href="mailto:alexandre.vnvl@gmail.com"
                    className="p-3 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300 group"
                  >
                    <Mail className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeContent blur duration={1200}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                A selection of projects that showcase my skills across different domains
              </p>
            </div>
          </FadeContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeContent key={index} blur duration={1000} delay={index * 0.1}>
                <SpotlightCard
                  className="h-full flex flex-col p-0"
                  spotlightColor={`${c.accentDark}26`}
                >
                  <div className="relative overflow-hidden rounded-t-[1.4rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                      <a href={project.github} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                        <Github className="text-white" size={18} />
                      </a>
                      <a href={project.live} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                        <ExternalLink className="text-white" size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2.5 py-1 rounded-full text-xs border" style={tagStyle}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>

          <FadeContent duration={800} delay={0.5}>
            <div className="flex justify-center mt-14">
              <a
                href="https://github.com/jarebYT?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                View all repositories →
              </a>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────── */}
      <section id="skills" className="py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeContent blur duration={1200}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Skills & Experience</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                Technologies I wield and the journey that brought me here
              </p>
            </div>
          </FadeContent>

          <div className="space-y-5 mb-16">
            {[
              {
                icon: <Server size={18} />,
                title: 'Self-Taught Full Stack Developer',
                period: 'Self-Taught · 2021 – Present',
                desc: 'Built and deployed full-stack applications from concept to production — spanning web, desktop, VR, and systems programming.'
              },
              {
                icon: <Cpu size={18} />,
                title: 'IT Technical Support Level 2',
                period: 'Situaction · 2026 – Present',
                desc: 'Advanced L2 support for large-scale fleet telematics. Managing hardware integration, complex troubleshooting, and operational workflows.'
              },
              {
                icon: <Award size={18} />,
                title: 'IT Technical Support',
                period: 'Bump Géoservices · 2024 – 2026',
                desc: 'L1 & L2 support, IoT device deployment for fleet tracking, and structured training programs to drive client autonomy.'
              }
            ].map((exp, i) => (
              <FadeContent key={i} blur duration={800} delay={i * 0.15}>
                <div className="flex items-start gap-5 p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.05] transition-all duration-300 group">
                  <div className="p-2.5 rounded-xl transition-colors shrink-0" style={{ backgroundColor: `${c.accentDark}15` }}>
                    <span style={{ color: c.accent }}>{exp.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-sm mb-2" style={{ color: c.accent }}>{exp.period}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>

          <FadeContent blur duration={1000}>
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Technologies I Work With</h4>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {[
                'C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'SQL',
                'React', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS', 'Bootstrap',
                'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Linux', 'Git', 'GitHub',
                'VSCode', 'Postman', 'AWS', 'Azure', 'Netlify', 'Apache'
              ].map(tech => (
                <span key={tech} className="px-3.5 py-2 bg-white/[0.02] backdrop-blur-sm rounded-xl border transition-all duration-200 cursor-default text-sm" style={chipStyle}>
                  {tech}
                </span>
              ))}
            </div>
          </FadeContent>

          <FadeContent blur duration={1000} delay={0.3}>
            <div className="mt-16 flex justify-center">
              <img
                className="rounded-2xl border border-white/[0.05] max-w-full"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=jarebYT&bg_color=0a0a0a&color=${c.graphColor.replace('#', '')}&line=${c.graphLine.replace('#', '')}&point=${c.graphPoint.replace('#', '')}&area=true&hide_border=true`}
                alt="GitHub activity graph"
                loading="lazy"
              />
            </div>
          </FadeContent>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeContent blur duration={1200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 text-lg mt-6 mb-16 max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, and exciting projects.
              Let's build something great.
            </p>
          </FadeContent>

          <FadeContent blur duration={1000} delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-5 mb-14">
              {[
                { icon: <Mail size={24} />, title: 'Email', desc: 'alexandre.vnvl@gmail.com' },
                { icon: <Calendar size={24} />, title: 'Response', desc: 'Within 24 hours' },
                { icon: <Award size={24} />, title: 'Availability', desc: 'Open to projects' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.05] transition-all duration-300">
                  <div className="mb-3 flex justify-center" style={{ color: c.accent }}>{item.icon}</div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center">
              <SpecularButton
                size="md"
                lineColor={c.accentDark}
                baseColor={c.buttonBase}
                intensity={1}
                onClick={() => window.open('https://github.com/jarebYT', '_blank')}
              >
                <span className="flex items-center gap-2"><Github size={18} /> GitHub</span>
              </SpecularButton>
              <SpecularButton
                size="md"
                lineColor={c.accent}
                baseColor="#1e293b"
                intensity={0.8}
                onClick={() => window.open('https://www.linkedin.com/in/alexandre-vanneuville/', '_blank')}
              >
                <span className="flex items-center gap-2"><Linkedin size={18} /> LinkedIn</span>
              </SpecularButton>
              <SpecularButton
                size="md"
                lineColor={c.accentLight}
                baseColor="#1e293b"
                intensity={0.7}
                onClick={() => window.location.href = 'mailto:alexandre.vnvl@gmail.com'}
              >
                <span className="flex items-center gap-2"><Mail size={18} /> Email Me</span>
              </SpecularButton>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────── */}
      <footer className="relative z-10 py-10 px-4 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Alexandre Vanneuville. Built with React, Tailwind CSS & React Bits.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;