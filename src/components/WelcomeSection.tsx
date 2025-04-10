// components/welcomeSection.tsx
"use client";

import invitations from "@/data/invitations.json";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  const searchParams = useSearchParams();
  const inviteId = searchParams.get("invite") ?? "";
  const guestData = invitations[inviteId as keyof typeof invitations];

  if (!guestData) return null;

  return (
    <section className="section text-center spectral-semibold">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          💌 Mensaje para ti
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {guestData.welcomeMessage}
        </motion.p>

        <motion.div
          className="text-base text-[var(--color-deep)] space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p><strong>Invitados permitidos:</strong> {guestData.numGuests}</p>
          <p><strong>¿Invitación con acompañante?</strong> {guestData.plusOne ? "Sí" : "No"}</p>
          <p><strong>Recomendación de estadía:</strong><br />{guestData.stayRecommendation}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
