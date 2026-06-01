import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const services = [
  {
    num: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white dark:bg-[#121212] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 transition-colors duration-300" id="services">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gray-900 dark:text-gray-100 font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
        
        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn delay={index * 0.1} key={service.num} className="border-b-[1px] border-gray-200 dark:border-[rgba(255,255,255,0.15)] last:border-b-0 py-8 sm:py-10 md:py-12">
              <div className="flex flex-row items-center sm:items-start md:items-center gap-6 sm:gap-10 md:gap-16">
                <div className="font-black text-gray-900 dark:text-gray-100 text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-[20%] sm:w-[auto]">
                  {service.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-gray-900 dark:text-gray-100 leading-tight">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-gray-700 dark:text-gray-300 opacity-80 dark:opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
