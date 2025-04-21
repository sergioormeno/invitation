"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useInvitado } from "@/context/InvitadoContext";

export default function Location() {
  const { valido, loading } = useInvitado();

  if (loading || !valido) return null;

  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] spectral-semibold py-16 px-4">
      <motion.div
        className="flex flex-col items-center text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MapPin className="w-10 h-10 text-[var(--color-accent)] mb-2" />
        <h2 className="text-3xl font-bold mb-2">Detalles del Evento</h2>
        <div className="w-16 h-[2px] bg-[var(--color-accent)] rounded-full mb-4"></div>
      </motion.div>

      <motion.p
        className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
La ceremonia y la recepción se llevará a cabo en el bosque del Hotel Mantagua Village, Seguido de una fiesta en el mismo hotel en el salon principal ¡Nos encantaría que nos acompañes!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl">📍 Hotel Mantagua Village</p>
          <p className="text-base mt-2">Ruta Concon hacia Quintero - F-30-E, Concón, Quintero, Valparaíso</p>
          <p className="text-base mt-4">Ceremonia: 17:00 hrs • Recepción posterior</p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.878557092999!2d-71.50087599999999!3d-32.901379000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de0a77f3ab41%3A0x21076ba5795f2b89!2sMantagua%20Village%20Hotel%20%26%20Caba%C3%B1as!5e0!3m2!1ses-419!2scl!4v1744902454248!5m2!1ses-419!2scl"
            width="100%"
            height="380"
            className="rounded-xl w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
