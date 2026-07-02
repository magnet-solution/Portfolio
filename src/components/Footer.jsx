import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-paper border-t-4 border-ink py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Large Centered Logo Wordmark */}
        <div className="text-center pb-8 border-b border-ink">
          <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-ink select-none">
            THE BUILDWITHUS GLOBE
          </h2>
          <p className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-500 uppercase mt-2">
            VOLUME 1.0 // EDITION NO. 4 // MAGALLANES, AGUSAN DEL NORTE, CARAGA, PHILIPPINES
          </p>
        </div>

        {/* Footer grid sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-ink">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-ink border-b border-ink pb-2 w-fit">
              PUBLICATION STATEMENT
            </h4>
            <p className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed text-justify-columns">
              BuildWithUs operates as a dedicated four-person web engineering agency based in Magallanes, Agusan del Norte, Caraga, Philippines. We reject complex, proprietary CMS systems and generic templates in favor of direct code ownership, clean search engine optimization, and robust visual design structures.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-ink border-b border-ink pb-2 w-fit">
              SECTIONS
            </h4>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs uppercase tracking-wider">
              <li><Link to="/" className="hover:text-editorial-red hover:underline">01. Home</Link></li>
              <li><Link to="/about" className="hover:text-editorial-red hover:underline">02. About</Link></li>
              <li><Link to="/services" className="hover:text-editorial-red hover:underline">03. Services</Link></li>
              <li><Link to="/team" className="hover:text-editorial-red hover:underline">04. Team</Link></li>
              <li><Link to="/projects" className="hover:text-editorial-red hover:underline">05. Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-editorial-red hover:underline">06. Pricing</Link></li>
              <li><Link to="/process" className="hover:text-editorial-red hover:underline">07. Process</Link></li>
              <li><Link to="/faq" className="hover:text-editorial-red hover:underline">08. FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Details */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-ink border-b border-ink pb-2 w-fit">
              METRICS &amp; REPLIES
            </h4>
            <ul className="font-mono text-xs space-y-2 uppercase text-neutral-600">
              <li>SYSTEM SPEED: A-GRADE</li>
              <li>REPLY TIME: &lt;24 HOURS</li>
              <li>CODENAME: PROJECT-CARAGA</li>
              <li>CORE STACK: REACT + LARAVEL</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits and scroll up */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono tracking-widest text-neutral-600 gap-4">
          <div>
            &copy; {new Date().getFullYear()} BUILDWITHUS GLOBE. ALL RIGHTS EXPLICITLY CODED.
          </div>
          
          <div className="flex items-center gap-6">
            <span>PRINTED IN THE PHILIPPINES</span>
            
            <button
              onClick={handleScrollToTop}
              className="p-2 border border-ink bg-paper hover:bg-ink hover:text-paper hover:shadow-hard-sm hover:-translate-y-0.5 select-none transition-all flex items-center justify-center gap-1.5 font-sans font-bold text-[10px]"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
