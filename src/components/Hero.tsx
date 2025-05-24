// Archivo: components/hero.tsx (reincorpora parallax sin uso de fill para evitar saltos en mobile)
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { InvitadoProvider, useInvitado } from "@/context/InvitadoContext";
import LoadingHeart from "./min/LoadingCute";
import WelcomeMessage from "./WelcomeMessage";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [clientReady, setClientReady] = useState(false);
  const { invitado, loading, valido } = useInvitado(); 

  useEffect(() => {
    setClientReady(true);
    const preloadImage = new window.Image();
    preloadImage.src = "/img/loves.avif";
    preloadImage.onload = () => {
      setImageLoaded(true);
      document.body.classList.remove("prevent-scroll");
    };
    document.body.classList.add("prevent-scroll");
  }, []);

  return (
    <section
      data-hero
      ref={ref}
      className={`relative min-h-[100svh] h-[100svh] w-full flex items-center justify-center overflow-hidden px-4 md:px-8 transition-opacity duration-700 ${imageLoaded && clientReady ? "opacity-100" : "opacity-0"}`}
    >
      {/* Imagen de fondo absoluta con parallax */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y }}
      >
        {imageLoaded && (
          <div className="relative w-screen h-[100svh]">
            <Image
              src="/img/loves.avif"
              alt="Sergio y Valentina fondo"
              fill={false}
              priority
              quality={90}
              className="object-cover w-full h-full absolute top-0 left-0"
              width={1920}
              height={1080}
            />
          </div>
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
          ¡Nos casamos!
        </h2>

        <div className="flex justify-center">
          <Image
            src="/img/herologo.avif"
            alt="Vale & Sergio"
            width={280}
            height={120}
            priority
            className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto max-w-full"
          />
        </div>

        <h2 className="text-xl md:text-2xl text-white font-cinzel-decorative">
          10 de enero de 2026 · Mantagua
        </h2>
         <Suspense fallback={<div className="text-center"><LoadingHeart /></div>}>
           <InvitadoProvider>
               <WelcomeMessage />
           </InvitadoProvider>
         </Suspense>
      </motion.div>
      
    </section>
  );
}