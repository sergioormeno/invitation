// components/hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LoadingHeart from "./min/LoadingCute1";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // efecto parallax leve

  return (
    <section
      data-hero
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-8 overflow-hidden"
    >
      <motion.div
        style={{ y, backgroundImage: "url('/img/loves.avif')" }}
        className="absolute inset-0 bg-cover bg-center"
      />
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
      </motion.div>
    </section>
  );
}
