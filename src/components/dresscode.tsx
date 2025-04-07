"use client";

import { motion } from "framer-motion";

export default function DressCode() {
  return (
    <section className="w-full bg-white text-[var(--color-deep)] spectral-semibold py-16 px-4 md:px-8">
      <motion.div
        className="w-full max-w-5xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Título */}
        <h2 className="text-3xl font-bold uppercase">Dresscode</h2>

        {/* Subtítulo */}
        <p className="text-xl font-medium">
          Look formal elegante
        </p>

        {/* Icono SVG inline */}
        <div className="flex justify-center text-[var(--color-accent)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            className="w-24 h-24"
            fill="currentColor"
          >
            <path d="M50.7,43.8c3,0,6,0,9,0c1.6,0,2.2,1,1.5,2.4c-1.3,2.6-2.7,5.2-4,7.8c-0.2,0.3-0.3,0.8-0.2,1.1c1,6,2.1,11.9,3.2,17.9c0.8,4.6,1.6,9.1,2.4,13.7c0.3,1.6-0.1,3-1.1,4.2c-2.3,2.8-4.5,5.6-6.9,8.4c-2.2,2.6-5.7,2.6-7.8,0c-2.3-2.8-4.6-5.6-6.9-8.4c-1-1.3-1.3-2.7-1.1-4.3c1.5-8.2,2.9-16.5,4.4-24.7c0.4-2.3,0.8-4.5,1.2-6.8c0.1-0.3,0-0.7-0.1-0.9c-1.3-2.6-2.7-5.3-4.1-7.9c-0.7-1.4-0.1-2.4,1.5-2.4C44.6,43.8,47.7,43.8,50.7,43.8z" />
            <path d="M112.4,98.7c0,0.2,0,0.5,0,0.7c0,2.7,0,5.5,0,8.2c0,0.8-0.2,1.3-0.9,1.7c-11.3,0-22.6,0-33.9,0c-0.8-0.4-1.1-1-1.1-1.9c0-3.1,0-6.3,0-9.4C76.4,91.1,78,84.7,81,78.5c1.4-2.8,3-5.6,4.5-8.3c0.2-0.3,0.2-0.7,0.2-1c-0.4-2.8-0.8-5.6-1.3-8.3c-0.1-0.3-0.2-0.7-0.3-1c-1.1-2-2.1-4.1-3.2-6c-0.6-1-0.5-1.8,0.1-2.7c0.3-0.4,0.5-0.8,0.9-1.1c0.6-0.4,0.6-0.9,0.6-1.5c0-1.8,0-3.6,0-5.4c0-1.3,0.5-1.8,1.8-1.8c1.5,0,3,0,4.4,0c1.3,0,1.7,0.4,1.7,1.7c0,1.8,0,3.6,0,5.4c0,0.2,0.1,0.5,0.2,0.6c1.3,1,2.6,2,3.9,3c1.2-0.9,2.4-1.9,3.7-2.9c0.1-0.1,0.2-0.4,0.2-0.6c0-1.8,0-3.6,0-5.4c0-1.3,0.5-1.8,1.8-1.8c1.5,0,3.1,0,4.6,0c1.1,0,1.5,0.5,1.5,1.5c0,2,0,4.1,0,6.1c0,0.5,0.1,0.8,0.5,1.1c0.5,0.4,0.9,0.9,1.2,1.4c0.5,0.7,0.6,1.5,0.1,2.4c-1,1.9-2,3.8-3,5.7c-0.6,1.1-0.7,2.3-0.9,3.4c-0.4,2.1-0.7,4.2-1,6.4c0,0.2,0,0.5,0,0.6c0.7,1.3,1.4,2.5,2.2,3.8C108.2,78.8,112.4,86.4,112.4,98.7z" />
            <path d="M96.2,74c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5C95.5,72.5,96.2,73.3,96.2,74z" />
          </svg>
        </div>

        {/* Mensaje adicional */}
        <p className="text-xl font-medium">
          Pero no queremos que estés incómodo, solo se aceptan zapatillas
        </p>

        {/* Ícono de zapatillas */}
        <div className="flex justify-center text-[var(--color-muted)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 513.13 513.13"
            className="w-16 h-16"
            fill="currentColor"
          >
            <circle cx="59.733" cy="236.846" r="8.533" />
            <circle cx="51.2" cy="270.98" r="8.533" />
            <path d="M497.493,259.033c-12.8-18.773-49.493-27.307-110.08-25.6L206.507,148.1c-4.267-1.707-8.533,0-11.093,3.413c-1.707,4.267-58.027,89.6-160.427,29.867c-2.56-0.853-5.12-0.853-7.68,0s-4.267,3.413-5.12,5.973C15.36,224.9,3.413,287.193,0.853,294.02c-0.853,2.56-0.853,5.12,0,7.68c1.707,1.707,4.267,3.413,6.827,3.413c24.747,1.707,154.453,11.093,274.773,11.093c101.547,0,197.12-6.827,216.747-30.72c0.853-0.853,1.707-1.707,1.707-2.56C501.76,281.22,505.173,270.98,497.493,259.033z" />
            <path d="M510.293,287.193l-8.533-19.627c-1.707-3.413-5.12-5.12-8.533-5.12c-5.12,0-8.533,3.413-8.533,8.533c0,1.707,0,3.413,0.853,4.267l7.68,17.92c3.413,9.387,0.853,20.48-6.827,25.6c-15.36,10.24-53.76,29.013-139.093,29.013c-117.76,0-290.133,0-330.24,0v-51.2c0-5.12-3.413-8.533-8.533-8.533S0,291.46,0,296.58v59.733c0,2.56,0.853,4.267,2.56,5.973s3.413,2.56,5.973,2.56c0,0,204.8,0,340.48,0.853c85.333,0,128-17.92,148.48-32.427C511.147,323.033,517.12,304.26,510.293,287.193z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
