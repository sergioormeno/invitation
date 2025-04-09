"use client";

import CountdownTimer from "@/components/timer";
import FloatingMusicPlayer from "@/components/player";
import HeroSection from "@/components/hero";
import Location from "@/components/location";
import ScrollButton from "@/components/scroller";
import DressCode from "@/components/dresscode";
import SpotifyPlaylistSection from "@/components/spotify";
import GallerySection from "@/components/gallery";
import GiftSection from "@/components/giftSection";
import { Suspense } from "react";



export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
      {/* Hero con imagen de fondo */}
      <Suspense fallback={<div className="text-center py-12">Cargando...</div>}>
      <HeroSection />
      <CountdownTimer />
      </Suspense>
      <GallerySection/>
      <Location />
      <DressCode />
      <GiftSection/>
      {/* Confirmación de asistencia */}
      <section className="py-16 px-4 bg-white md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">Confirma tu Asistencia</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-[var(--color-accent)] hover:shadow-lg transition">Sí, asistiré</button>
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-[#b46a55] hover:shadow-lg transition">No podré ir</button>
        </div>
      </section>

      {/* Pie de página */}
      <SpotifyPlaylistSection />
      <footer className="text-center py-6 text-sm text-[var(--color-text)]">
        <p>© 2025 Sergio & Valentina — ¡Nos vemos el gran día!</p>
      </footer>

      {/* Reproductor de música flotante */}

      <FloatingMusicPlayer />
      <ScrollButton />
    </div>
  );
}
