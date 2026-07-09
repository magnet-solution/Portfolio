import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Radio } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    setCurrentDate(today);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Our Team', to: '/team' },
    { name: 'Portfolio', to: '/projects' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Process', to: '/process' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header className="w-full bg-paper border-b-4 border-ink z-40 relative">
        {/* Marquee Ticker */}
        <div className="w-full bg-ink text-paper py-2 border-b border-ink overflow-hidden select-none text-xs font-mono tracking-wider flex items-center">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            <span className="flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-editorial-red animate-pulse" />
              LATEST EDITION: VOL 1.0
            </span>
            <span>•</span>
            <span>AGENCY LOCATION: MAGALLANES, AGUSAN DEL NORTE, CARAGA</span>
            <span>•</span>
            <span>TECH STATUS: FULL STACK READY (REACT, LARAVEL, DJANGO)</span>
            <span>•</span>
            <span>AVAILABILITY: NOW ACCEPTING Q3 CLIENTS</span>
            <span>•</span>
            <span>RESPONSE GUARANTEE: WITHIN 24 HOURS</span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-editorial-green animate-spin" />
              BUILDING THE FUTURE OF WEB
            </span>
            <span>•</span>
            {/* Duplicate to ensure seamless looping */}
            <span className="flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-editorial-red animate-pulse" />
              LATEST EDITION: VOL 1.0
            </span>
            <span>•</span>
            <span>AGENCY LOCATION: MAGALLANES, AGUSAN DEL NORTE, CARAGA</span>
            <span>•</span>
            <span>TECH STATUS: FULL STACK READY (REACT, LARAVEL, DJANGO)</span>
            <span>•</span>
            <span>AVAILABILITY: NOW ACCEPTING Q3 CLIENTS</span>
            <span>•</span>
            <span>RESPONSE GUARANTEE: WITHIN 24 HOURS</span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-editorial-green animate-spin" />
              BUILDING THE FUTURE OF WEB
            </span>
            <span>•</span>
          </div>
        </div>

        {/* Main Nameplate (Masthead) */}
        <div className="max-w-screen-xl mx-auto px-4 py-6 text-center border-b border-ink md:py-8">
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight select-none">
            THE MagNET SOLUTIONS GLOBE
          </h1>
          <p className="font-serif italic text-sm md:text-base mt-2 text-neutral-600">
            "Attracting customers to your business, online."
          </p>
        </div>

        {/* Newspaper Metadata Sub-bar */}
        <div className="max-w-screen-xl mx-auto px-4 py-2 border-b border-ink flex flex-col sm:flex-row justify-between items-center text-xs font-mono tracking-widest text-neutral-700 gap-2">
          <div>VOL. 1.0 NO. 4 (CARAGA TEAM)</div>
          <div className="uppercase">{currentDate}</div>
          <div className="flex items-center gap-4">
            <span>PRICE: ₱8,000+</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-editorial-red font-bold animate-pulse">● LIVE IN MAGALLANES, CARAGA</span>
          </div>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <nav className="sticky top-0 bg-paper/95 backdrop-blur-sm z-30 border-b border-ink">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-12">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-between w-full font-sans text-xs tracking-widest uppercase font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="py-3 px-3 transition-colors duration-200 border-r border-ink hover:text-editorial-red last:border-r-0 h-12 flex items-center justify-center flex-1 text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Header */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="font-sans font-bold text-xs tracking-widest uppercase">NAVIGATION</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-ink hover:bg-ink hover:text-paper transition-all select-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-ink bg-paper absolute top-12 left-0 w-full z-50 flex flex-col font-sans text-sm tracking-wider uppercase font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-4 border-b border-ink hover:bg-neutral-100 hover:text-editorial-red flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-neutral-400">➔</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
