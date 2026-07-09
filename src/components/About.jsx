import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, HeartHandshake, Compass } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function About() {
  const values = [
    {
      title: 'Affordable Pricing',
      description: 'We tailor rates to local business scales in the Philippines, starting at just ₱8,000.',
      icon: HeartHandshake,
      color: 'bg-editorial-pink',
      shadow: 'shadow-hard-violet'
    },
    {
      title: 'Absolute Reliability',
      description: 'Transparent communication, explicit code handovers, and reliable post-launch maintenance.',
      icon: ShieldCheck,
      color: 'bg-editorial-green',
      shadow: 'shadow-hard-pink'
    },
    {
      title: 'Modern Architecture',
      description: 'No bloated drag-and-drop templates. We construct sites using React, Laravel, and responsive CSS.',
      icon: Compass,
      color: 'bg-editorial-violet',
      shadow: 'shadow-hard-yellow'
    },
    {
      title: 'High Velocity',
      description: 'Quick client onboarding, fast page speeds, and swift turnaround times (1-3 weeks).',
      icon: Zap,
      color: 'bg-editorial-yellow',
      shadow: 'shadow-hard'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About MagNet Solutions | Web Developer Philippines</title>
        <meta name="description" content="Learn about MagNet Solutions, a web developer and web designer agency based in Agusan del Norte, Caraga, Philippines. Reliable, affordable, and modern." />
        <meta property="og:title" content="About MagNet Solutions | Web Developer Philippines" />
        <meta property="og:description" content="Web developer and web designer agency based in Agusan del Norte, Caraga, Philippines. Reliable, affordable, and modern." />
      </Helmet>
      <section id="about" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: The Editorial Story */}
          <AnimateSection className="lg:col-span-6 flex flex-col justify-between" variant="slideLeft">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
                [ SECTION 02: THE LEAD STORY ]
              </span>
              <h3 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-ink mb-6">
                A Digital Guild Solving Complex Online Operations.
              </h3>
              
              <div className="font-body text-neutral-800 text-sm md:text-base leading-relaxed text-justify-columns space-y-4">
                <p>
                  <span className="float-left text-6xl font-serif font-black text-editorial-violet mr-3 mt-1 leading-[0.8] select-none">B</span>
                  orn and operating out of Magallanes, Agusan del Norte, Caraga, Philippines, our agency has one guiding focus: to make corporate-grade web applications and high-converting marketing sites accessible to business owners without requiring high-agency overheads. We believe that your website is your digital storefront, operating 24 hours a day, 365 days a year. It should represent you perfectly.
                </p>
                <p>
                  As a collective of four engineering and marketing specialists, we combine standard database architecture with robust user interfaces. We work closely with our clients during consultations, ensuring that everything from color palettes to backend code structures matches their business goals and user personas.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ink border-dashed flex items-center justify-between font-mono text-xs uppercase text-neutral-600">
              <div>WRITTEN BY: EDITORIAL BOARD</div>
              <div>KEYWORDS: REVENUE, TECH, LOCAL</div>
            </div>
          </AnimateSection>

          {/* Right Column: Values Grid */}
          <StaggerContainer className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val) => {
              const IconComponent = val.icon;
              return (
              <StaggerItem key={val.title}>
                <div
                  className={`border-2 border-ink p-6 bg-paper flex flex-col justify-between transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard`}
                >
                  <div>
                    <div className={`w-12 h-12 border border-ink ${val.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-ink" strokeWidth={2} />
                    </div>
                    
                    <h4 className="font-sans font-bold text-lg text-ink mb-2 uppercase tracking-wide">
                      {val.title}
                    </h4>
                    
                    <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                    Value Code: 0{values.indexOf(val) + 1} // CARAGA
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
