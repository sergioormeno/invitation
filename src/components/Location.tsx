"use client";

import { motion } from "framer-motion";
import { useInvitado } from "@/context/InvitadoContext";

export default function Location() {
  const { invitado, loading, valido } = useInvitado();

  if (loading || !valido || !invitado) return null;

  return (
    <section className="w-full bg-white text-[var(--color-text)] spectral-semibold py-16 px-4">
      <motion.div
        className="flex flex-col items-center text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Ceremonia y Celebración</h2>
        <div className="w-16 h-[2px] bg-[var(--color-accent)] rounded-full mb-4"></div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>La ceremonia se llevará a cabo en el bosque del</p>
        <p className="font-bold mb-2 mt-2">Hotel Mantagua Village a las 17:15hrs.</p>
        <p>y la celebración será en el salón principal del hotel.</p>
        <p className="font-bold mb-2 mt-2">¡Nos encantaría que nos acompañes!</p>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Mantagua+Village+Hotel+%26+Cabañas,+Ruta+Concon+hacia+Quintero+-+F-30-E,+Concón,+Quintero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--color-accent)] text-white text-sm px-6 py-3 rounded shadow-md hover:bg-[var(--color-deep)] transition"
        >
          Cómo llegar
        </a>
      </motion.div>
    </section>
  );
}
