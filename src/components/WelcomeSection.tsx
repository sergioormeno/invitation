// Archivo: components/WelcomeSection.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import invitations from "@/data/invitations.json";

// Tipo inferido desde las invitaciones
type Guest = typeof invitations[keyof typeof invitations];

export default function WelcomeSection() {
  const searchParams = useSearchParams();
  const inviteKey = searchParams.get("invite");
  const [guestData, setGuestData] = useState<Guest | null>(null);

  useEffect(() => {
    if (inviteKey && Object.prototype.hasOwnProperty.call(invitations, inviteKey)) {
      setGuestData(invitations[inviteKey as keyof typeof invitations]);
    }
  }, [inviteKey]);

  if (!guestData) return null;

  return (
    <section className="w-full bg-[var(--color-bg-alt)] text-[var(--color-text)] py-12 px-4 text-center spectral-semibold">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
         ¡Hola {guestData.guestName}!
        </h2>

        <p className="text-lg">
          {guestData.welcomeMessage}
        </p>

        <p className="text-base text-[var(--color-muted)]">
          Estás invitado con un total de <strong>{guestData.numGuests}</strong> persona(s)
          {guestData.plusOne && ", incluyendo tu acompañante"}.<br />
          Recomendación de estadía: {guestData.stayRecommendation} 🏨
        </p>
      </motion.div>
    </section>
  );
}