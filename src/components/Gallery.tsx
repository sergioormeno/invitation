"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

// Lista de imágenes de la galería
const images = [
  "/img/gallery2.avif",
  "/img/gallery1.avif",
  "/img/gallery3.avif",
  "/img/gallery4.avif",
  "/img/gallery5.avif",
  "/img/gallery6.avif",
  "/img/gallery7.avif",
  "/img/gallery8.avif",
];

/**
 * Variantes del contenedor — solo maneja opacidad y stagger.
 * No aplica traslación en Y para evitar sumarse con la de cada item
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",   // primero contenedor, luego hijos
      staggerChildren: 0.35,      // aparición secuencial
    },
  },
};

/**
 * Variantes de cada tarjeta — desplazamiento sutil y easeOut suave
 */
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut", // easeOut fluido sin tirón final
      type: "tween",
    },
  },
};

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Navegación en modal
  const next = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
  const prev = () => setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));

  // Marca que estamos en cliente (para portal)
  useEffect(() => setIsClient(true), []);

  // Cierra modal con ESC
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  // Pre-carga de imágenes adyacentes
  useEffect(() => {
    if (selectedIndex === null) return;
    new Image().src = images[(selectedIndex + 1) % images.length];
    new Image().src = images[(selectedIndex - 1 + images.length) % images.length];
  }, [selectedIndex]);

  return (
    <section className="w-full bg-[var(--color-bg)]  text-[var(--color-text)] spectral-semibold py-16 px-4">
      {/* Wrapper global */}
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-8 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
      <h2 className="title">Nosotros</h2>
      </motion.div>
      
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-8"
      >
        

        {/* Grilla con stagger */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} /* inicia antes para recorrido completo */
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={src} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {isClient && selectedIndex !== null && document.getElementById("portal") &&
          createPortal(
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              {/* Imagen ampliada con swipe */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) prev();
                  else if (info.offset.x < -100) next();
                }}
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedIndex]}
                  alt={`Foto ampliada ${selectedIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Controles */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                ›
              </button>

              {/* Botón cerrar */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 opacity-80 z-50"
                aria-label="Cerrar imagen"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-black/50" />
              </motion.button>
            </motion.div>,
            document.getElementById("portal")!
          )}
      </motion.div>
    </section>
  );
}