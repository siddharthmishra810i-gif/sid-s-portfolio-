import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use a generic media query check to decide if we should render at all
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: 'rgba(215, 226, 234, 0.1)',
      border: '1px solid rgba(215, 226, 234, 0.3)',
      opacity: mousePosition.x === 0 ? 0 : 1, // hide initially
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: 'rgba(182, 0, 168, 0.15)',
      border: '1px solid rgba(182, 0, 168, 0.4)',
      boxShadow: '0 0 40px rgba(182, 0, 168, 0.3)',
      mixBlendMode: 'screen' as const,
      opacity: 1,
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      className="hidden md:flex fixed top-0 left-0 rounded-full pointer-events-none z-[9999] shadow-[0_0_20px_rgba(215,226,234,0.2)] backdrop-blur-[1px]"
    />
  );
}
