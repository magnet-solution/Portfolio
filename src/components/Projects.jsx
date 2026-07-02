import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Code } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'websites', name: 'Websites' },
    { id: 'webapps', name: 'Web Apps' },
    { id: 'ecommerce', name: 'E-Commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Butuan Booking Portal',
      category: 'webapps',
      desc: 'A reservation system for corporate business travel and hotel rooms in Caraga. Features real-time occupancy blocks and automated SMS booking invoices.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Framer Motion'],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      figNum: 'Fig 2.1 — Live data reservation engine'
    },
    {
      id: 2,
      title: 'Surigao Pearl E-Shop',
      category: 'ecommerce',
      desc: 'Custom boutique store processing pearl jewelry sales. Integrates credit card, GCash, and PayMaya payments with structured invoice exports.',
      tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'PayMaya API'],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      figNum: 'Fig 2.2 — Secure shopping checkout view'
    },
    {
      id: 3,
      title: 'Agusan Woodcraft Hub',
      category: 'websites',
      desc: 'An editorial-style online catalogue for local mahogany woodcarving artisans. Focused heavily on high-speed image loading and typography hierarchy.',
      tech: ['React', 'Vite', 'Vanilla CSS', 'Lucide Icons'],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      figNum: 'Fig 2.3 — Portfolio catalog page grid'
    },
    {
      id: 4,
      title: 'Siargao Surf Lessons',
      category: 'webapps',
      desc: 'Booking calendar and instructor scheduling portal for surf guides. Features local weather alerts and automated scheduling grids.',
      tech: ['Django', 'React', 'Tailwind CSS', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      figNum: 'Fig 2.4 — Mobile-first booking dashboard'
    },
    {
      id: 5,
      title: 'Caraga Fresh Market',
      category: 'ecommerce',
      desc: 'A digital marketplace for local farming cooperatives, connecting vendors directly to residential consumers. Built for extreme mobile efficiency.',
      tech: ['React', 'Vite', 'Laravel', 'MySQL'],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      figNum: 'Fig 2.5 — Farm logistics ordering panel'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | MagNet Solutions - Web Developer Caraga</title>
        <meta name="description" content="Portfolio of web developer and web designer projects by MagNet Solutions in Agusan del Norte, Caraga, Philippines. Websites, web apps, and e-commerce stores." />
        <meta property="og:title" content="Portfolio | MagNet Solutions - Web Developer Caraga" />
        <meta property="og:description" content="Portfolio of web developer and web designer projects by MagNet Solutions in Agusan del Norte, Caraga, Philippines." />
      </Helmet>
      <section id="projects" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <AnimateSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
              [ SECTION 05: RECENT EXPORT PORTFOLIO ]
            </span>
            <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
              ENGINEERING LOGS
            </h3>
            <p className="font-body text-neutral-600 mt-2 max-w-xl">
              Selected applications and websites engineered by our team. Filtered by production category.
            </p>
          </div>

          {/* Filter Buttons: Newsprint Style Tab Bar */}
          <div className="flex flex-wrap gap-2 border border-ink p-1 bg-paper h-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all select-none ${
                  activeCategory === cat.id
                    ? 'bg-ink text-paper font-bold'
                    : 'bg-transparent text-ink hover:bg-neutral-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </AnimateSection>

        {/* Grid of Projects */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
            <div
              className="border-2 border-ink bg-paper p-5 relative flex flex-col justify-between hover:shadow-hard transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1"
            >
              <div>
                {/* Grayscale Halftone Screenshot Box */}
                <div className="border border-ink bg-neutral-200 aspect-[16/10] overflow-hidden relative mb-4">
                  <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] opacity-20 [background-size:12px_12px] z-10 pointer-events-none" />
                  
                  {/* SVG Visual Representation of the Project */}
                  <svg viewBox="0 0 400 250" className="w-full h-full grayscale hover:grayscale-0 hover:sepia-[50%] transition-all duration-300 object-cover bg-cream">
                    <rect width="400" height="250" fill="none" stroke="#111111" strokeWidth="4" />
                    <line x1="20" y1="40" x2="380" y2="40" stroke="#111111" strokeWidth="2" />
                    <circle cx="35" cy="20" r="5" fill="#111111" />
                    <circle cx="50" cy="20" r="5" fill="#111111" />
                    <circle cx="65" cy="20" r="5" fill="#111111" />
                    
                    {/* Category Accent Shape */}
                    {project.category === 'webapps' && (
                      <polygon points="120,80 280,80 200,210" className="fill-editorial-violet opacity-30" stroke="#111111" strokeWidth="2" />
                    )}
                    {project.category === 'ecommerce' && (
                      <rect x="130" y="80" width="140" height="110" className="fill-editorial-green opacity-30" stroke="#111111" strokeWidth="2" />
                    )}
                    {project.category === 'websites' && (
                      <circle cx="200" cy="140" r="60" className="fill-editorial-pink opacity-30" stroke="#111111" strokeWidth="2" />
                    )}
                    
                    {/* Schematic text bars */}
                    <rect x="50" y="100" width="300" height="12" fill="#111111" opacity="0.8" />
                    <rect x="50" y="125" width="220" height="8" fill="#111111" opacity="0.5" />
                    <rect x="50" y="145" width="280" height="8" fill="#111111" opacity="0.5" />
                    <rect x="50" y="165" width="180" height="8" fill="#111111" opacity="0.5" />
                  </svg>
                </div>

                {/* Mono Caption */}
                <div className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase mb-3 border-b border-dashed border-neutral-300 pb-2">
                  {project.figNum}
                </div>

                <h4 className="font-sans font-black text-xl text-ink uppercase tracking-wide mb-2">
                  {project.title}
                </h4>

                <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed mb-4 text-justify-columns">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-ink bg-neutral-50 text-[10px] font-mono text-neutral-700 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Row CTAs */}
                <div className="grid grid-cols-2 gap-4 border-t border-ink pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 border border-ink bg-transparent text-ink text-center font-sans font-bold text-[10px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-editorial-yellow transition-colors select-none"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View Live</span>
                  </a>
                  
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 border border-ink bg-ink text-paper text-center font-sans font-bold text-[10px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-white hover:text-ink hover:border-ink transition-all select-none"
                  >
                    <Code className="h-3.5 w-3.5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
      </StaggerContainer>
    </section>
    </>
  );
}
