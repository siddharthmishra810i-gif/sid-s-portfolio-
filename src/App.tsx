/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Cursor } from './components/ui/Cursor';
import { Loader } from './components/ui/Loader';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { AmbientSoundToggle } from './components/ui/AmbientSoundToggle';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent running if user is typing in form elements
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      const sections: Record<string, string> = {
        '1': 'about',
        '2': 'services',
        '3': 'projects',
        '4': 'testimonials',
        '5': 'contact'
      };
      
      const targetId = sections[e.key];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`w-full min-h-screen bg-gray-50 dark:bg-[#0C0C0C] overflow-x-clip text-gray-900 dark:text-[#D7E2EA] font-['Kanit'] selection:bg-gray-900 selection:text-white dark:selection:bg-[#D7E2EA] dark:selection:text-[#0C0C0C] transition-colors duration-300 ${!loadingComplete ? 'h-screen overflow-hidden' : ''}`}>
      <Cursor />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <AmbientSoundToggle />
      <ScrollToTop />
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      <main className="w-full max-w-[1920px] mx-auto relative overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
