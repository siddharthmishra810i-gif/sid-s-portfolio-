import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        return (
          <span key={i} className="relative inline-block whitespace-pre-wrap">
            <span className="opacity-0">{char}</span>
            <Character
              progress={scrollYProgress}
              range={[start, end]}
              char={char}
            />
          </span>
        );
      })}
    </p>
  );
}

function Character({ progress, range, char }: { progress: any; range: [number, number]; char: string }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="absolute left-0 top-0 text-inherit text-[#D7E2EA]"
    >
      {char}
    </motion.span>
  );
}
