import React from 'react';

export function LiveProjectButton({ href }: { href?: string }) {
  return (
    <a 
      href={href || "#"} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block text-center rounded-full border-2 border-gray-900 dark:border-[#D7E2EA] text-gray-900 dark:text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base bg-transparent hover:bg-gray-900/10 dark:hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
    >
      View Code
    </a>
  );
}
