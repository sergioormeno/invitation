"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
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
        La ceremonia se llevará a cabo en la iglesia Nuestra Señora de las Flores a las 17:00 hrs, seguida de una recepción en el salón principal. ¡Nos encantaría que nos acompañes!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
      <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl">📍 Hotel Viña La Playa</p>
          <p className="text-base mt-2">Camino La Viña s/n, Santa Cruz, O'Higgins, Chile</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.075851774501!2d-71.38557512254602!3d-34.450222373009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96638a06c3c451bb%3A0x27b4abb8e5edd0a2!2sHotel%20Vi%C3%B1a%20La%20Playa!5e0!3m2!1ses-419!2scl!4v1743819932190!5m2!1ses-419!2scl"
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
