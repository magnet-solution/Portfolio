import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateSection } from './AnimateSection';
import magnetImg from '../MagNet.png';

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>MagNet Solutions | Web Developer Agusan del Norte Caraga Philippines</title>
        <meta name="description" content="Web developer and web designer based in Agusan del Norte, Caraga, Philippines. We build websites, web apps, e-commerce stores, and booking systems for local businesses." />
        <meta property="og:title" content="MagNet Solutions | Web Developer Agusan del Norte Caraga Philippines" />
        <meta property="og:description" content="Web developer and web designer in Agusan del Norte, Caraga, Philippines. We build fast, affordable websites, web apps, and e-commerce stores for local businesses." />
      </Helmet>
      <section id="home" className="max-w-screen-xl mx-auto px-4 py-12 md:py-20 border-b border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimateSection delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-editorial-pink text-ink border border-ink text-xs font-mono uppercase tracking-widest mb-6 w-fit self-start btn-bounce hover:scale-105">
                <Sparkles className="h-3 w-3 text-ink" />
                Special Bulletin: Caraga Web Developers
              </div>
            </AnimateSection>

            <AnimateSection delay={0.1}>
              <h2 className="font-serif font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter text-ink mb-6">
                We build websites <br className="hidden md:inline"/>
                &amp; web apps for <br className="hidden md:inline"/>
                <span className="underline decoration-editorial-red decoration-wavy underline-offset-8">businesses.</span>
              </h2>
            </AnimateSection>

            <AnimateSection delay={0.2}>
              <p className="font-body text-base md:text-xl leading-relaxed text-neutral-800 text-justify-columns max-w-2xl mb-8">
                <span className="float-left text-7xl font-serif font-black text-editorial-red mr-3 mt-1 leading-[0.8] select-none">Y</span>
                our customers are always online. Your business should be too. We are a specialized four-person team based in Magallanes, Agusan del Norte, Caraga, Philippines — forging robust frontend layouts, high-scale database systems, and engaging interactive templates. Sharp, lightning-fast, and custom-tuned to grow your revenue.
              </p>
            </AnimateSection>

            {/* Snappy Candy Buttons with sharp corners */}
            <AnimateSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="px-6 py-4 bg-editorial-red text-paper font-sans font-bold text-xs uppercase tracking-widest border-2 border-ink flex items-center justify-center gap-2 group transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard select-none active:translate-x-1 active:translate-y-1 active:shadow-none"
                  style={{ boxShadow: '4px 4px 0px 0px #111111' }}
                >
                  <span>View Our Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-4 bg-transparent text-ink font-sans font-bold text-xs uppercase tracking-widest border-2 border-ink flex items-center justify-center gap-2 transition-all duration-200 hover:bg-editorial-yellow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard select-none active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <span>Hire Our Team</span>
                  <Send className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </AnimateSection>
          </div>

          {/* Right Side: Playful Geometric Frame */}
          <AnimateSection
            delay={0.2}
            variant="slideRight"
            className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center border-2 border-ink bg-paper newsprint-dot-grid p-6 overflow-hidden"
          >
            {/* Halftone / Dot Grid Frame */}
            <div className="absolute inset-0 halftone-pattern opacity-10 pointer-events-none" />

            {/* Strict grid borders in background */}
            <div className="absolute inset-4 border border-dashed border-neutral-300 pointer-events-none" />

            {/* Playful Primitive Shapes: Dotted Circles and Geometric Blobs */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-editorial-violet border border-ink animate-pulse z-0" />
            <div className="absolute bottom-12 right-6 w-24 h-24 bg-editorial-yellow border border-ink transform rotate-12 z-0" />
            <div className="absolute top-1/2 right-12 w-8 h-8 bg-editorial-pink border border-ink transform -rotate-45 z-0" />

            {/* Primary Grayscale image frame (vintage newsprint illustration look) */}
            <div className="relative border-4 border-ink bg-paper p-3 shadow-hard-lg hover:rotate-1 hover:scale-105 transition-all duration-300 z-10 w-4/5 max-w-sm">
              {/* Halftone dot texture */}
              <div className="relative aspect-square border border-ink overflow-hidden bg-white group flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] opacity-10 [background-size:12px_12px] z-10 pointer-events-none" />

                <img
                  src={magnetImg}
                  alt="MagNet Solutions"
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="mt-3 font-mono text-[10px] tracking-wider text-center text-neutral-600 uppercase">
                Fig 1.1 — MagNet.png
              </div>
            </div>
          </AnimateSection>
        </div>
      </section>
    </>
  );
}

