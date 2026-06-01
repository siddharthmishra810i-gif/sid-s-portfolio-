import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reveal duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // 1.2s exit animation buffer
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0C0C0C]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="hero-heading font-black uppercase text-[20vw] sm:text-[15vw] md:text-[12vw] tracking-tighter leading-none p-4"
            >
              Sid.
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
