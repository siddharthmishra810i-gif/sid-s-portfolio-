import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Phone, Linkedin, Github, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="bg-[#0C0C0C] relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-6 sm:mb-10 leading-none">
            Get in Touch
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1} y={30}>
          <p className="text-[#D7E2EA]/80 font-light text-center max-w-2xl text-[clamp(1rem,2vw,1.35rem)] mb-12 sm:mb-16">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Let's create something memorable together. Feel free to reach out through any of the platforms below!
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full justify-center flex-wrap">
          <ContactLink 
            href="tel:+919122423090" 
            icon={<Phone className="w-6 h-6" />} 
            label="Phone" 
            value="+91 9122423090" 
            delay={0.2} 
          />
          <ContactLink 
            href="https://www.linkedin.com/in/siddharth-mishra-445877284?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
            icon={<Linkedin className="w-6 h-6" />} 
            label="LinkedIn" 
            value="Siddharth Mishra" 
            delay={0.3} 
          />
          <ContactLink 
            href="https://github.com/siddharthmishra810i-gif" 
            icon={<Github className="w-6 h-6" />} 
            label="GitHub" 
            value="@siddharthmishra810i-gif" 
            delay={0.4} 
          />
          <ContactLink 
            href="https://www.instagram.com/sid_earth_21?igsh=OXM0d3Rsa2c0cXJw&utm_source=qr" 
            icon={<Instagram className="w-6 h-6" />} 
            label="Instagram" 
            value="@sid_earth_21" 
            delay={0.5} 
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value, delay }: { href: string, icon: React.ReactNode, label: string, value: string, delay: number }) {
  return (
    <FadeIn delay={delay} y={20}>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 sm:p-6 rounded-[30px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA] bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-all group min-w-[280px]"
      >
        <div className="bg-[#D7E2EA]/10 p-3 sm:p-4 rounded-full text-[#D7E2EA] group-hover:scale-110 transition-transform flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs font-semibold">{label}</span>
          <span className="text-[#D7E2EA] font-medium text-sm sm:text-base">{value}</span>
        </div>
      </a>
    </FadeIn>
  );
}
