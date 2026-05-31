/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] overflow-x-clip text-[#D7E2EA] font-['Kanit'] selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      <main className="w-full max-w-[1920px] mx-auto relative overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
