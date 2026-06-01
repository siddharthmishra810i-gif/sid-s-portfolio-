import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    company: "Nextlevel Studio",
    text: "Sid's work on our immersive 3D web experience was phenomenal. He seamlessly blends technical skill with stunning aesthetics, delivering a product that exceeded our expectations completely."
  },
  {
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Identity",
    text: "Working with Sid was a breeze. From concept to execution, the motion design elements added a layer of storytelling our brand desperately needed. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Product Lead",
    company: "Solaris Digital",
    text: "The attention to detail and ability to craft high-quality renders in such a short timeline is what separates Sid from the rest. The final assets elevated our entire campaign."
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-[#121212] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 transition-colors duration-300" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="text-gray-900 dark:text-gray-100 font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] mb-12 sm:mb-20 leading-none">
            Client Words
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.15} y={40} className="bg-gray-50 dark:bg-[#1A1A1A] rounded-[30px] p-8 sm:p-10 flex flex-col justify-between h-full hover:bg-gray-100 dark:hover:bg-[#222222] transition-colors border border-gray-200 dark:border-[#0C0C0C]/5">
              <div>
                <svg className="w-8 h-8 text-gray-400 dark:text-[#0C0C0C]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-900 dark:text-[#D7E2EA] font-light text-base sm:text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 dark:text-[#D7E2EA] uppercase tracking-wide text-sm">{testimonial.name}</span>
                <span className="text-gray-500 dark:text-[#D7E2EA]/50 text-sm mt-1 uppercase tracking-wider">{testimonial.role} <br /> {testimonial.company}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
