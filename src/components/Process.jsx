import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessagesSquare, Compass, Braces, Rocket, HeartHandshake } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Consult',
      description: 'We listen to your objectives, evaluate target users, map required functionalities, and lock down explicit project specs.',
      icon: MessagesSquare,
      color: 'text-editorial-pink'
    },
    {
      step: '02',
      title: 'Design',
      description: 'We outline the interface grid, set up custom font stacks, model color accents, and detail full mobile responsiveness.',
      icon: Compass,
      color: 'text-editorial-yellow'
    },
    {
      step: '03',
      title: 'Build',
      description: 'We program optimized code using React, Laravel, or Django. No bloated page builders. Just clean, indexable markup.',
      icon: Braces,
      color: 'text-editorial-green'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We configure DNS settings, enable HTTPS security, set up domain mappings, and push your web application live.',
      icon: Rocket,
      color: 'text-editorial-red'
    },
    {
      step: '05',
      title: 'Support',
      description: 'We monitor speed performance, execute weekly security sweeps, update systems, and modify text/images as requested.',
      icon: HeartHandshake,
      color: 'text-editorial-violet'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Process | MagNet Solutions - Web Developer Agusan del Norte</title>
        <meta name="description" content="How our web developer and web designer team in Agusan del Norte, Caraga, Philippines builds websites, web apps, and digital products from consultation to launch." />
        <meta property="og:title" content="Our Process | MagNet Solutions - Web Developer Agusan del Norte" />
        <meta property="og:description" content="How our web developer and web designer team in Agusan del Norte, Caraga, Philippines builds websites, web apps, and digital products from consultation to launch." />
      </Helmet>
      <section id="process" className="bg-ink text-paper py-16 border-b border-ink">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-400 block mb-2">
              [ SECTION 07: EDITORIAL WORKFLOW ]
            </span>
            <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-paper">
              HOW WE CONSTRUCT
            </h3>
            <p className="font-body text-neutral-400 mt-2 max-w-xl">
              A transparent, chronological look at our engineering methodology. Solid planning leads to bulletproof web platforms.
            </p>
          </div>

          {/* 5-Column Grid with White Collapsed Borders in Dark Mode */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-neutral-700 bg-ink">
            {steps.map((st) => {
              const IconComponent = st.icon;
              return (
                <StaggerItem key={st.step}>
                  <div className="border-r border-b border-neutral-700 p-8 flex flex-col justify-between hover:bg-neutral-900 transition-colors duration-200">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-3xl font-black text-editorial-red tracking-widest">
                          {st.step}
                        </span>
                        <IconComponent className={`h-6 w-6 ${st.color}`} strokeWidth={1.5} />
                      </div>

                      <h4 className="font-sans font-black text-xl text-paper uppercase tracking-wide mb-3">
                        {st.title}
                      </h4>

                      <p className="font-body text-xs md:text-sm text-neutral-400 leading-relaxed">
                        {st.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-dashed border-neutral-800 font-mono text-[9px] text-neutral-500 tracking-wider">
                      STATUS: SECURE ➔ READY
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
