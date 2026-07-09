import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Info, Star } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function Pricing() {
  const tiers = [
    {
      name: 'Student Package',
      price: 'Negotiable',
      description: 'For students and fresh graduates building academic or personal projects. Let us discuss a fair arrangement.',
      features: [
        'Up to 3 pages',
        'Mobile responsive design',
        'Basic contact form',
        'Student-friendly terms',
        'Flexible payment options',
        'Mentorship included'
      ],
      cta: 'Inquire Now',
      accentColor: 'border-ink',
      badgeColor: 'bg-editorial-violet text-paper',
      isPopular: false
    },
    {
      name: 'Starter Package',
      price: '₱8,000 - ₱15,000',
      description: 'Ideal for local businesses, portfolios, and landing pages looking to establish their initial web presence.',
      features: [
        '1 - 5 responsive pages',
        'Mobile responsive design',
        'Functional contact forms',
        'Social media integrations',
        '1 week development time',
        'Basic SEO metadata set up'
      ],
      cta: 'Choose Starter',
      accentColor: 'border-ink',
      badgeColor: 'bg-editorial-grey',
      isPopular: false
    },
    {
      name: 'Business Growth',
      price: '₱20,000 - ₱40,000',
      description: 'Best for growing companies that require regular text modifications, blogs, or specific CMS integrations.',
      features: [
        'Up to 10 custom pages',
        'Content Management (CMS)',
        'Comprehensive SEO setup',
        'Speed optimization configs',
        '2 weeks development time',
        'Google Analytics integration',
        '1 month free support'
      ],
      cta: 'Choose Business',
      accentColor: 'border-editorial-red',
      badgeColor: 'bg-editorial-yellow text-ink border-ink',
      isPopular: true
    },
    {
      name: 'Premium Solution',
      price: '₱50,000 - ₱80,000',
      description: 'Built for enterprise actions, scheduling services, e-commerce checkouts, and fully custom workflows.',
      features: [
        'Unlimited custom pages',
        'Complete E-Commerce setup',
        'Booking / scheduling panels',
        'Custom databases & portals',
        '3-4 weeks development time',
        'Database integrations',
        'Priority technical support'
      ],
      cta: 'Choose Premium',
      accentColor: 'border-ink',
      badgeColor: 'bg-editorial-violet text-paper border-ink',
      isPopular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | MagNet Solutions - Affordable Web Developer Philippines</title>
        <meta name="description" content="Transparent web development pricing in Agusan del Norte, Caraga, Philippines. Packages from ₱8,000 for starter websites up to ₱100,000 for premium e-commerce solutions." />
        <meta property="og:title" content="Pricing | MagNet Solutions - Affordable Web Developer Philippines" />
        <meta property="og:description" content="Transparent web development pricing in Agusan del Norte, Caraga, Philippines. Packages from ₱8,000 for starter websites up to ₱100,000 for premium e-commerce solutions." />
      </Helmet>
      <section id="pricing" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <AnimateSection>
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
              [ SECTION 06: EXPLICIT PRICING SHEETS ]
            </span>
            <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
              BUDGET ESTIMATES
            </h3>
            <p className="font-body text-neutral-600 mt-2 max-w-xl">
              Fixed packages tailored to your objectives. No hidden fees, no unnecessary subscriptions.
            </p>
          </div>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-12">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
            <div
              className={`border-2 ${
                tier.isPopular ? 'border-editorial-red bg-cream scale-105 shadow-hard' : 'border-ink bg-paper'
              } p-8 flex flex-col justify-between relative transition-all duration-200 hover:shadow-hard`}
              style={tier.isPopular ? { boxShadow: '6px 6px 0px 0px #111111' } : {}}
            >
              {/* Rotate Popular Star Badge */}
              {tier.isPopular && (
                <div className="absolute -top-5 -right-3 bg-editorial-yellow border-2 border-ink text-ink font-mono text-[9px] font-black uppercase tracking-wider py-1 px-3.5 rotate-[12deg] flex items-center gap-1 select-none">
                  <Star className="h-3 w-3 fill-ink text-ink animate-spin" />
                  MOST POPULAR
                </div>
              )}

              <div>
                <span className="font-mono text-xs tracking-widest text-neutral-400 font-bold uppercase block mb-1">
                  PACKAGE
                </span>
                <h4 className="font-sans font-black text-2xl text-ink uppercase tracking-wide mb-2">
                  {tier.name}
                </h4>
                
                <div className="font-mono text-2xl font-black text-editorial-red mb-4">
                  {tier.price}
                </div>
                
                <p className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed mb-6 pb-6 border-b border-ink border-dashed">
                  {tier.description}
                </p>

                {/* List features with dashed borders */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 font-body text-xs md:text-sm text-neutral-800 pb-2.5 border-b border-neutral-200 border-dashed last:border-b-0 last:pb-0">
                      <Check className="h-4.5 w-4.5 text-editorial-green shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 text-center font-sans font-bold text-xs uppercase tracking-widest border-2 border-ink flex items-center justify-center gap-2 transition-all duration-200 ${
                  tier.isPopular
                    ? 'bg-editorial-red text-paper hover:bg-white hover:text-ink'
                    : 'bg-transparent text-ink hover:bg-ink hover:text-paper'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateSection delay={0.1}>
        {/* Maintenance Tier Box */}
        <div className="border-2 border-ink bg-paper p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-hard transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-ink bg-editorial-green flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-ink animate-bounce" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-ink uppercase tracking-wide">
                Ongoing Maintenance &amp; Updates Plan
              </h4>
              <p className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mt-1">
                For active projects requiring monthly text modifications, backup audits, page updates, and regular speed tuning. Rates start at just <strong className="text-editorial-red">₱1,500/month</strong>.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 border-2 border-ink bg-transparent text-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-editorial-violet hover:text-paper hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard select-none transition-all duration-200 shrink-0 w-full md:w-auto text-center"
          >
            Inquire Maintenance
          </Link>
        </div>
        </AnimateSection>
      </section>
    </>
  );
}
