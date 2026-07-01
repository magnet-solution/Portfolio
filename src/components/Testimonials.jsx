import React from 'react';
import { Star, Quote } from 'lucide-react';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marites Calo',
      business: 'Butuan Coffee Grind',
      rating: 5,
      text: 'BuildWithUs constructed our online ordering portal in under two weeks. Our mobile orders increased by 40% immediately. They explain technical terms in plain English which made working with them an absolute breeze!',
      avatarBg: 'bg-editorial-pink',
      letter: 'M'
    },
    {
      name: 'Engr. Junel Coro',
      business: 'Caraga Logistical Solutions',
      rating: 5,
      text: 'Extremely professional team. They configured our fleet shipping dashboard and client inventory database with absolute precision. We highly value their direct communication channels and local support.',
      avatarBg: 'bg-editorial-violet',
      letter: 'J'
    },
    {
      name: 'Dr. Sandra Lim',
      business: 'Lim Dental Clinic Surigao',
      rating: 5,
      text: 'The automated scheduling system has saved my receptionist hours of phone coordinate calls. Patients find it incredibly easy to book dental slots on their mobile devices. Highly recommended!',
      avatarBg: 'bg-editorial-green',
      letter: 'S'
    }
  ];

  return (
    <section id="testimonials" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
          [ SECTION 08: VERIFIED CLIENT STATEMENTS ]
        </span>
        <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
          CLIENT EDITORIALS
        </h3>
        <p className="font-body text-neutral-600 mt-2 max-w-xl">
          Don\'t just take our word for it. Here is what business operators in the Caraga region say about our web systems.
        </p>
      </div>

      {/* Row of quotes styled like letters to the editor */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <StaggerItem key={rev.name}>
          <div
            className="border-2 border-ink bg-paper p-6 relative flex flex-col justify-between hover:shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Quote Icon Background */}
            <div className="absolute top-4 right-4 text-neutral-200 pointer-events-none z-0">
              <Quote className="h-10 w-10 rotate-180" />
            </div>

            <div className="z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-editorial-yellow text-ink" strokeWidth={2} />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-body italic text-sm md:text-base text-neutral-800 leading-relaxed mb-6 text-justify-columns">
                "{rev.text}"
              </blockquote>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-dashed border-neutral-300 z-10">
              <div className={`w-10 h-10 border border-ink ${rev.avatarBg} flex items-center justify-center font-mono font-bold text-ink shrink-0`}>
                {rev.letter}
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-ink">
                  {rev.name}
                </h4>
                <p className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase">
                  {rev.business}
                </p>
              </div>
            </div>
          </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
