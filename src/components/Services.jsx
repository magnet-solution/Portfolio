import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, ShoppingBag, Code2, CalendarRange, Sparkles, Settings, GraduationCap } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Business Websites',
      description: 'Professional, speed-optimized corporate profiles and informational sites. Fully responsive, SEO-ready, and built to conversion standards.',
      icon: Monitor,
      color: 'hover:bg-editorial-pink'
    },
    {
      num: '02',
      title: 'E-Commerce Stores',
      description: 'Fully integrated online shops with shopping carts, search, inventory control, and payment links (GCash, PayMaya, credit cards).',
      icon: ShoppingBag,
      color: 'hover:bg-editorial-violet'
    },
    {
      num: '03',
      title: 'Web Applications',
      description: 'Custom portal builds, automated tools, dashboards, and databases engineered precisely to handle complex internal workflows.',
      icon: Code2,
      color: 'hover:bg-editorial-green'
    },
    {
      num: '04',
      title: 'Booking Systems',
      description: 'Interactive reservation models, schedule interfaces, slot controls, and automatic email responses for hotels, clinics, or consultants.',
      icon: CalendarRange,
      color: 'hover:bg-editorial-yellow'
    },
    {
      num: '05',
      title: 'Landing Pages',
      description: 'High-impact standalone pages structured around specific products, services, or events to capture leads and drive click-through sales.',
      icon: Sparkles,
      color: 'hover:bg-editorial-red hover:text-white'
    },
    {
      num: '06',
      title: 'Website Maintenance',
      description: 'Monthly checks, plugin updates, text edits, backup monitoring, security scanning, and page performance fine-tuning.',
      icon: Settings,
      color: 'hover:bg-neutral-300'
    },
    {
      num: '07',
      title: 'School Project',
      description: 'Capstone projects, thesis portals, enrollment systems, and academic platforms built for students and educational institutions.',
      icon: GraduationCap,
      color: 'hover:bg-editorial-yellow'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | MagNet Solutions - Web Developer Agusan del Norte</title>
        <meta name="description" content="Web development services in Agusan del Norte, Caraga, Philippines. Business websites, e-commerce stores, web apps, booking systems, and website maintenance." />
        <meta property="og:title" content="Services | MagNet Solutions - Web Developer Agusan del Norte" />
        <meta property="og:description" content="Web development services in Agusan del Norte, Caraga, Philippines. Business websites, e-commerce stores, web apps, booking systems, and maintenance." />
      </Helmet>
      <section id="services" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <div className="mb-12">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
            [ SECTION 03: CLASSIFIED SERVICES ]
          </span>
          <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
            SERVICE CATALOG
          </h3>
          <p className="font-body text-neutral-600 mt-2 max-w-xl">
            What we build, maintain, and optimize. Engineered cleanly without bloated libraries or unnecessary subscriptions.
          </p>
        </div>

        {/* 3x2 Grid with Collapsed Borders Logic */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink bg-paper">
          {services.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <StaggerItem key={svc.num}>
                <div
                  className="border-r border-b border-ink p-8 hover:bg-neutral-50 transition-colors duration-200 flex flex-col justify-between group"
                >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 border border-ink flex items-center justify-center transition-all duration-300 bg-paper group-hover:shadow-hard group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${svc.color}`}>
                      <IconComponent className="h-6 w-6 text-ink group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-sm tracking-widest text-neutral-400 group-hover:text-ink transition-colors font-bold">
                      SVC // {svc.num}
                    </span>
                  </div>

                  <h4 className="font-sans font-black text-xl text-ink uppercase tracking-wide mb-3">
                    {svc.title}
                  </h4>

                  <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-dashed border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-500 group-hover:text-ink">
                  <span>REPLY TIME: 24H</span>
                  <span className="font-bold">➔ GET QUOTE</span>
                </div>
                </div>
              </StaggerItem>
            );
          })}
          </StaggerContainer>
      </section>
    </>
  );
}
