// Archivo: components/dresscode.tsx (actualizado con imagen personalizada)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <h2 className="text-3xl font-bold uppercase">Dresscode</h2>

        <p className="text-xl font-medium">
          Look formal elegante (pero se aceptan zapatillas 🥂)
        </p>

        <div className="flex justify-center">
          <Image
            src="/img/dresscode.avif"
            alt="Dresscode ejemplo"
            width={380}
            height={360}
            priority
            className="rounded-xl shadow-md w-auto h-auto max-w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
