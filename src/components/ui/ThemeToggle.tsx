import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9000] p-3 rounded-full bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-[#D7E2EA] shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-gray-200 dark:border-gray-800 cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Moon className="w-6 h-6" />
      </motion.div>
    </button>
  );
}
