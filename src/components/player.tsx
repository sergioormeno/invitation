"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle, Music } from "lucide-react";

export default function FloatingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Estado de reproducción
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Intentamos reproducir sin sonido al montar para 'auto-play' silencioso
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.autoplay = true;
    audioElement.muted = true; // Empieza silenciado para evitar bloqueo

    audioElement
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Si se bloquea o el usuario no interactúa, no pasa nada
        setIsPlaying(false);
      });
  }, []);

  // Cambia reproducción / pausa y quita o pone mute
  const togglePlay = () => {
    if (!audioRef.current) return;

    // Si no está reproduciendo, reproducimos y activamos sonido
    if (!isPlaying) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      // Pausamos
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Audio oculto para la música */}
      <audio ref={audioRef} src="/music/chachacha.mp3" />

      {/* Contenedor flotante, drag, animación de leve movimiento */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center justify-center bg-white shadow-md rounded-full p-2 cursor-pointer"
        drag
        dragMomentum={false}
        // Animación de ir y venir en el eje Y para llamar atención
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        onClick={togglePlay}
      >
        {/* Ícono Play/Pause */}
        {isPlaying ? (
          <PauseCircle size={24} className="text-brown-600" />
        ) : (
          <PlayCircle size={24} className="text-brown-600" />
        )}
        {/* Ícono Nota Musical a la derecha */}
        <Music size={18} className="text-brown-600 ml-1" />
      </motion.div>
    </>
  );
}
