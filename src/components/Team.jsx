import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Mail } from 'lucide-react';
import christianImg from '../image/christian.jpg';
import juneImg from '../image/june.jpg';
import florenceImg from '../image/florence.jpg';
import { AnimateSection, StaggerContainer, StaggerItem } from './AnimateSection';

const members = [
  {
    name: 'Christian John Teofilo',
    role: 'Full-Stack Developer',
    bio: 'Architects core systems and coordinates full-stack engineering, turning complex requirements into seamless digital products.',
    avatarBg: 'bg-editorial-red',
    photo: christianImg,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:christian@buildwithus.dev',
  },
  {
    name: 'June Dominic Laurente',
    role: 'Frontend Developer',
    bio: 'Designs component systems, manages animations, and implements dynamic mobile-first interactions that captivate users.',
    avatarBg: 'bg-editorial-pink',
    photo: juneImg,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:june@buildwithus.dev',
  },
  {
    name: 'Florence Cris Solayao',
    role: 'Backend Developer',
    bio: 'Structures servers, maintains cloud deployments, configures APIs, and secures core backend data pipelines.',
    avatarBg: 'bg-editorial-violet',
    photo: florenceImg,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:florence@buildwithus.dev',
  },
  {
    name: 'John Rey Siman',
    role: 'UI/UX Designer',
    bio: 'Crafts intuitive user experiences and polished interfaces that align business goals with user delight.',
    avatarBg: 'bg-editorial-yellow',
    photo: null,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:johnrey@buildwithus.dev',
  },
];

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | MagNet Solutions - Web Developer Caraga</title>
        <meta name="description" content="Meet the four-person web developer and web designer team at MagNet Solutions in Agusan del Norte, Caraga, Philippines. Full-stack, frontend, backend, and UI/UX specialists." />
        <meta property="og:title" content="Our Team | MagNet Solutions - Web Developer Caraga" />
        <meta property="og:description" content="Meet the four-person web developer and web designer team at MagNet Solutions in Agusan del Norte, Caraga, Philippines." />
      </Helmet>
      <section id="team" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <AnimateSection>
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
              [ SECTION 04: AGENCY STAFF DIRECTORY ]
            </span>
            <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink">
              MEET THE ENGINEERS
            </h3>
            <p className="font-body text-neutral-600 mt-2 max-w-xl">
              Four distinct minds operating synchronously in Caraga to deliver high-octane digital experiences.
            </p>
          </div>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <StaggerItem key={member.name}>
            <div
              className="border-2 border-ink bg-paper p-6 relative flex flex-col justify-between transition-all duration-300 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-hard group"
            >
              {/* Photo / Avatar container */}
              <div className="border border-ink aspect-square w-full flex items-center justify-center relative overflow-hidden mb-6 bg-neutral-200">
                {/* Halftone mesh grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] opacity-10 [background-size:8px_8px] z-10 pointer-events-none" />

                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 z-0"
                  />
                ) : (
                  <>
                    {/* Rotating background shape */}
                    <div className={`absolute w-36 h-36 border border-ink ${member.avatarBg} opacity-20 transform -rotate-12 group-hover:rotate-45 transition-transform duration-500`} />
                    {/* Initials monogram */}
                    <div className="z-20 flex flex-col items-center gap-2">
                      <div className={`w-20 h-20 rounded-full border-2 border-ink ${member.avatarBg} flex items-center justify-center`}>
                        <span className="font-serif font-black text-2xl text-ink select-none">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">No Photo</span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-editorial-red font-bold uppercase block mb-1">
                  {member.role}
                </span>
                <h4 className="font-sans font-black text-lg text-ink uppercase tracking-wide mb-3">
                  {member.name}
                </h4>
                <p className="font-body text-xs md:text-sm text-neutral-700 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social Anchor Buttons */}
              <div className="pt-4 border-t border-dashed border-neutral-200 flex items-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.email}
                  className="w-8 h-8 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-all select-none"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
