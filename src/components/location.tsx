"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="w-full bg-white text-[var(--color-deep)] py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="title">¿Dónde nos encontramos?</h2>
        <iframe
          className="w-full h-96 rounded-lg border-2 border-[var(--color-soft)]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.075851774501!2d-71.38557512254602!3d-34.450222373009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96638a06c3c451bb%3A0x27b4abb8e5edd0a2!2sHotel%20Vi%C3%B1a%20La%20Playa!5e0!3m2!1ses-419!2scl!4v1743819932190!5m2!1ses-419!2scl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="paragraph">
          Esta es la ubicación donde se realizará la ceremonia y celebración del matrimonio.
        </p>
      </motion.div>
    </section>
  );
}
