"use client";

import CountdownTimer from "@/components/Timer";
import FloatingMusicPlayer from "@/components/Player";
import HeroSection from "@/components/Hero";
import Location from "@/components/Location";
import ScrollButton from "@/components/Scroller";
import DressCode from "@/components/Dresscode";
import SpotifyPlaylistSection from "@/components/Spotify";
import GallerySection from "@/components/Gallery";
import GiftSection from "@/components/giftSection";
import { Suspense } from "react";
import ConfirmAttendanceSection from "@/components/AttendanceConfirm";
import WelcomeSection from "@/components/WelcomeSection";
import LoadingHeart from "@/components/min/LoadingCute";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
      {/* Hero con imagen de fondo */}
      <HeroSection />

      <Suspense fallback={<div className="text-center py-12"><LoadingHeart /></div>}>
        <WelcomeSection />
        <CountdownTimer />
      </Suspense>

      <section style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
        <GallerySection />
      </section>

      <section style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <Location />
      </section>

      <section style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <DressCode />
      </section>

      <section style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
        <GiftSection />
      </section>

      <section style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <ConfirmAttendanceSection />
      </section>

      <footer className="text-center py-6 text-sm text-[var(--color-text)]">
        <p>© 2025 Sergio & Valentina — ¡Nos vemos el gran día!</p>
      </footer>

      <FloatingMusicPlayer />
      <ScrollButton />
    </div>
  );
}
