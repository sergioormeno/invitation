"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "/img/gallery1.avif",
  "/img/gallery2.avif",
  "/img/gallery3.avif",
  "/img/gallery4.avif",
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Preload imágenes vecinas
  useEffect(() => {
    if (selectedIndex === null) return;

    const preloadNext = new Image();
    preloadNext.src = images[(selectedIndex + 1) % images.length];

    const preloadPrev = new Image();
    preloadPrev.src = images[(selectedIndex - 1 + images.length) % images.length];
  }, [selectedIndex]);

  return (
    <section className="w-full bg-white text-[var(--color-text)] spectral-semibold py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="title">Nuestra Galería</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
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
                onDragEnd={(event, info) => {
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

              {/* Flechas navegación */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                ›
              </button>

              {/* Botón cerrar centrado abajo con animación */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 opacity-80 z-50"
                aria-label="Cerrar imagen"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-black/50" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
