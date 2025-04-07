"use client";

import CountdownTimer from "@/components/timer";
import FloatingMusicPlayer from "@/components/player";
import HeroSection from "@/components/hero";
import Location from "@/components/location";
import ScrollButton from "@/components/scroller";
import DressCode from "@/components/dresscode";

import { Suspense } from "react";
import GallerySection from "@/components/gallery";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
      {/* Hero con imagen de fondo */}
      <Suspense fallback={<div className="text-center py-12">Cargando...</div>}>
      <HeroSection />
      </Suspense>
      <CountdownTimer />
      <GallerySection/>
      <Location />
      <section className="py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">Detalles del Evento</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          La ceremonia se llevará a cabo en la iglesia Nuestra Señora de las Flores a las 17:00 hrs, seguida de una recepción en el salón principal. ¡Nos encantaría que nos acompañes!
        </p>
      </section>
      <DressCode />
      {/* Confirmación de asistencia */}
      <section className="py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">Confirma tu Asistencia</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-[var(--color-accent)] hover:shadow-lg transition">Sí, asistiré</button>
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-[#b46a55] hover:shadow-lg transition">No podré ir</button>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="text-center py-6 text-sm text-[var(--color-text)]">
        <p>© 2025 Sergio & Valentina — ¡Nos vemos el gran día!</p>
      </footer>

      {/* Reproductor de música flotante */}
      <FloatingMusicPlayer />
      <ScrollButton />
    </div>
  );
}
