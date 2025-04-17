// Archivo: components/hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("guest");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/img/loves.avif";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      data-hero
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center px-4 md:px-8 overflow-hidden"
      style={{ backgroundImage: imageLoaded ? "url('/img/loves.avif')" : "none" }}
    >
      <div className="absolute inset-0 bg-[var(--color-text)]/20 z-0" />

      <motion.div
        className="relative z-10 text-center space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-4xl text-white mb-8 font-bold font-cinzel-decorative">
          ¡nos casamos!
        </h2>

        <h1 className="text-6xl md:text-8xl text-white font-great-vibes">
          Vale & Sergio
        </h1>

        <h2 className="text-xl md:text-2xl text-white font-cinzel-decorative">
          1 de enero de 2026 · Viña del Mar
        </h2>

        {guestName && (
          <motion.p
            className="text-xl md:text-2xl text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
          >
            ¡Hola {decodeURIComponent(guestName)}!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
