// Archivo: components/hero.tsx (optimizado para precarga de imagen con logo personalizado)
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = new window.Image();
    preloadImage.src = "/img/loves.avif";
    preloadImage.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      data-hero
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 md:px-8"
    >
      {/* Imagen de fondo absoluta */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {imageLoaded && (
          <Image
            src="/img/loves.avif"
            alt="Sergio y Valentina fondo"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-[var(--color-text)]/20" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-4xl text-white mb-8 font-bold font-cinzel-decorative">
          ¡nos casamos!
        </h2>

        <div className="flex justify-center">
          <Image
            src="/img/herologo.avif"
            alt="Vale & Sergio"
            width={600}
            height={200}
            priority
            className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto max-w-full"
          />
        </div>

        <h2 className="text-xl md:text-2xl text-white font-cinzel-decorative">
          1 de enero de 2026 · Viña del Mar
        </h2>
      </motion.div>
    </section>
  );
}
