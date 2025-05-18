"use client";

import { motion } from "framer-motion";
import { useInvitado } from "@/context/InvitadoContext";

export default function FriendlyMessage() {
  const { invitado, loading, valido } = useInvitado();

  if (loading || !valido || !invitado || !invitado.showOnlyAdults) return null;

  const nombre = invitado?.nombre?.split(" ")[0] ?? "amig@" ;

  return (
    <section className="w-full bg-[#EDE5DC] text-[var(--color-deep)] spectral-semibold py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl leading-relaxed">
          {nombre}, queremos que vivas esta experiencia de forma plena y sin preocupaciones. 
          Por eso, la ceremonia y celebración están pensadas exclusivamente para adultos.
        </p>
        <p className="text-base md:text-lg text-[var(--color-text)]">
          ¡Gracias por comprenderlo con cariño!
        </p>
      </motion.div>
    </section>
  );
}
