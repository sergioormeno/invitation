"use client";

import CountdownTimer from "@/components/Timer1";
import FloatingMusicPlayer from "@/components/Player1";
import HeroSection from "@/components/Hero1";
import Location from "@/components/Location1";
import ScrollButton from "@/components/Scroller1";
import DressCode from "@/components/Dresscode1";
import SpotifyPlaylistSection from "@/components/Spotify1";
import GallerySection from "@/components/Gallery1";
import GiftSection from "@/components/giftSection";
import { Suspense } from "react";
import ConfirmAttendanceSection from "@/components/AttendanceConfirm1";
import WelcomeSection from "@/components/WelcomeSection1";
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
