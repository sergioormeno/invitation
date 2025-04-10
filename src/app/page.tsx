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
import ConfirmAttendanceSection from "@/components/attendanceConfirm";



export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
      {/* Hero con imagen de fondo */}
      <HeroSection />
      <Suspense fallback={<div className="text-center py-12">Cargando...</div>}>
        
        <CountdownTimer />
      </Suspense>
      <GallerySection/>
      <Location />
      <DressCode />
      <GiftSection/>
      {/* Confirmación de asistencia */}
      <ConfirmAttendanceSection/>
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
