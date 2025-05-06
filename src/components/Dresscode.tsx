"use client";

import { motion } from "framer-motion";

export default function DressCode() {
  return (
    <section className="w-full bg-white text-[var(--color-deep)] spectral-semibold py-24 px-4 md:px-8">
      <motion.div
        className="w-full max-w-5xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Dress code</h2>

        <img
          src="/img/suitup.avif"
          alt="dress code"
          className="w-32 h-32 mx-auto"
        />

        <p className="text-xl font-medium leading-relaxed">
          Elige un look formal, lleno de color y alegría.
          <br />
          Si puedes evitar el negro y dejar el blanco para la novia te lo agradecemos 🤍.
          <br />
        </p>
      </motion.div>
    </section>
  );
}