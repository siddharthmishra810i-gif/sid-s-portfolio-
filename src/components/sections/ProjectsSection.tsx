import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from '../ui/LiveProjectButton';

const projects = [
  {
    num: "01",
    label: "App",
    name: "Deterrence",
    url: "https://github.com/siddharthmishra810i-gif/DETERRANCE.git",
    description: "A Palantir-like intelligence application tracking live global conflicts.",
    images: {
      tl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1280",
      bl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
      r: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1280"
    }
  },
  {
    num: "02",
    label: "Platform",
    name: "Guntavya",
    url: "https://github.com/siddharthmishra810i-gif/Guntavya",
    description: "An app that provides the best insights and details about your chosen destination like AQI, local search, locality, and safety index with booking features.",
    images: {
      tl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1280",
      bl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1280",
      r: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1280"
    }
  },
  {
    num: "03",
    label: "Tool",
    name: "Prompting Master",
    url: "https://github.com/siddharthmishra810i-gif/Prompting-master.git",
    description: "One-step solution to all prompts with real-life reviews.",
    images: {
      tl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1280",
      bl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1280",
      r: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1280"
    }
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="projects">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Project
      </h2>
      
      <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full relative">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.num}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, totalCards }: { project: any, index: number, totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Scale down when scrolling past
  const targetScale = 1 - ((totalCards - 1 - index) * 0.03);
  
  // Calculate when it should trigger scale
  const { scrollYProgress: cardProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(cardProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className={`h-[85vh] sticky top-24 md:top-32 w-full flex items-start`}
      style={{ marginTop: index === 0 ? 0 : '0px' }}
    >
      <motion.div 
        style={{ 
          scale,
          top: `calc(${index * 28}px)`
        }}
        className="w-full h-auto min-h-[70vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 origin-top sticky"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[clamp(2.5rem,6vw,100px)] text-[#D7E2EA] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                ({project.label})
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-[clamp(1.5rem,3vw,2.5rem)] uppercase leading-none mt-1">
                {project.name}
              </h3>
              {project.description && (
                <p className="text-[#D7E2EA]/80 font-light mt-4 text-sm sm:text-base max-w-xl normal-case tracking-normal">
                  {project.description}
                </p>
              )}
            </div>
          </div>
          <div className="lg:ml-auto">
            <LiveProjectButton href={project.url} />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 h-full flex-grow mt-2 sm:mt-6">
          <div className="w-full sm:w-[40%] flex flex-col gap-4">
            <img 
              src={project.images.tl} 
              alt={`${project.name} detail 1`}
              className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
            <img 
              src={project.images.bl} 
              alt={`${project.name} detail 2`}
              className="w-full h-[clamp(160px,22vw,340px)] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-grow"
            />
          </div>
          <div className="w-full sm:w-[60%] h-[300px] sm:h-auto">
            <img 
              src={project.images.r} 
              alt={`${project.name} main`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
