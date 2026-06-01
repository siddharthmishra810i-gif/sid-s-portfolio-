import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function AmbientSoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_b806d203dd.mp3?filename=lofi-study-112191.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-[9000] p-3 rounded-full bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-[#D7E2EA] shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-gray-200 dark:border-gray-800 cursor-pointer"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      <motion.div
        initial={false}
        animate={{ scale: isPlaying ? 1 : 0, opacity: isPlaying ? 1 : 0, rotate: isPlaying ? 0 : -90 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Volume2 className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ scale: isPlaying ? 0 : 1, opacity: isPlaying ? 0 : 1, rotate: isPlaying ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <VolumeX className="w-6 h-6" />
      </motion.div>
    </button>
  );
}
