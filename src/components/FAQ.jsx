import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus } from 'lucide-react';
import { AnimateSection } from './AnimateSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How long does it take to build a website?',
      a: 'Typically 1 to 3 weeks depending on the complexity of the project. A simple landing page takes about 5-7 days, while a full e-commerce system or custom web portal takes 3-4 weeks.'
    },
    {
      q: 'How much does a website cost?',
      a: 'We have transparent packages starting at ₱8,000 for starter responsive layouts. Custom systems, portals, and e-commerce setups range from ₱20,000 up to ₱100,000 depending on features needed.'
    },
    {
      q: 'Do you offer payment in installments?',
      a: 'Yes. We work on a standard installment structure: a 50% downpayment to commence project design/coding, and the remaining 50% balance upon final staging approval and launch.'
    },
    {
      q: 'Will my website work on mobile devices?',
      a: 'Yes, absolutely. All websites and web applications we write are fully mobile responsive. We verify layouts across multiple screen viewpoints (mobile, tablet, and desktop) before handover.'
    },
    {
      q: 'Do you provide website maintenance?',
      a: 'Yes, we offer ongoing maintenance and update support plans starting at ₱1,500/month to handle backups, security audits, software updates, and minor text/image modifications.'
    },
    {
      q: 'Is the domain name for our website free?',
      a: 'Domain registration is not included in our development packages. You may purchase a domain name through registrars like GoDaddy or Namecheap. We can assist you with domain setup and configuration at no additional labor cost.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ | MagNet Solutions - Web Developer Agusan del Norte</title>
        <meta name="description" content="Frequently asked questions about MagNet Solutions web development and web design services in Agusan del Norte, Caraga, Philippines. Pricing, timelines, and maintenance." />
        <meta property="og:title" content="FAQ | MagNet Solutions - Web Developer Agusan del Norte" />
        <meta property="og:description" content="Frequently asked questions about MagNet Solutions web development and web design services in Agusan del Norte, Caraga, Philippines." />
      </Helmet>
      <section id="faq" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading */}
          <AnimateSection className="lg:col-span-5" variant="slideLeft">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
              [ SECTION 09: FREQUENT DISCLOSURES ]
            </span>
            <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
              INQUIRY DESK
            </h3>
            <p className="font-body text-neutral-600 mt-4 leading-relaxed">
              Quick responses to common developer-client queries. If you have any other questions, please contact our team directly using the form below.
            </p>
          </AnimateSection>

          {/* Right Column: Accordions with transition-all grid-rows */}
          <AnimateSection className="lg:col-span-7 border-t border-ink" variant="slideRight" delay={0.1}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-ink">
                  <button
                    onClick={() => handleToggle(i)}
                    className="w-full py-5 text-left flex justify-between items-center group select-none font-sans font-bold text-sm md:text-base text-ink uppercase tracking-wide focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 leading-snug group-hover:text-editorial-red transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Plus Icon container rotating on open */}
                    <div className={`w-8 h-8 border border-ink flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-editorial-red text-paper' : 'bg-transparent text-ink group-hover:bg-neutral-100'
                    }`}>
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Buttery-smooth expanding CSS grid row */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed pl-1 pr-6 pb-2">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimateSection>
        </div>
      </section>
    </>
  );
}
