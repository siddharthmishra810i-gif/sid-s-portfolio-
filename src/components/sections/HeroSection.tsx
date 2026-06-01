import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Magnet } from '../animations/Magnet';
import { ContactButton } from '../ui/ContactButton';

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {['About', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-gray-900 dark:text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col relative z-20 px-6 sm:px-8 md:px-10 justify-between pb-7 sm:pb-8 md:pb-10">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m sid
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end w-full max-w-full">
          <FadeIn delay={0.35} y={20}>
            <p className="text-gray-900 dark:text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Sid Portrait"
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
