// Archivo: components/player.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle, Music } from "lucide-react";

export default function FloatingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.autoplay = true;
    audioElement.muted = true;

    audioElement
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    // Detectar pantalla chica (mobile)
    if (window.innerWidth < 768) {
      setShouldAnimate(false);
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!isPlaying) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/chachacha.mp3" />

      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center justify-center bg-white shadow-md rounded-full p-2 cursor-pointer"
        drag
        dragMomentum={false}
        animate={shouldAnimate ? { y: [0, -5, 0] } : false}
        transition={shouldAnimate ? {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        } : undefined}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <PauseCircle size={24} className="text-brown-600" />
        ) : (
          <PlayCircle size={24} className="text-brown-600" />
        )}
        <Music size={18} className="text-brown-600 ml-1" />
      </motion.div>
    </>
  );
}