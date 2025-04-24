// Archivo: components/dresscode.tsx (actualizado con imagen personalizada)
"use client";

import { motion } from "framer-motion";

export default function DressCode() {
  return (
    <section className="w-full bg-white text-[var(--color-deep)] spectral-semibold py-16 px-4 md:px-8">
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
        <p className="text-xl font-medium">
        Llenemos este día de colores, Look formal con un toque de color. Y por favor, no olvides tus zapatos más cómodos 😉.<br/>
        Aquí te compartimos una paleta de colores que nos encanta, por si quieres sumarte a la armonía de nuestro día especial.
        </p>

        <div className="flex justify-center">
          
        <img
          src="/img/dresscode.avif"
          alt="dress code"
          className="w-56 h-18 mx-auto"
        />
        </div>
      </motion.div>
    </section>
  );
}
