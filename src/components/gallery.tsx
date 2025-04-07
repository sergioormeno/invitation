"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/gallery1.avif",
  "/img/gallery2.avif",
  "/img/gallery3.avif",
  "/img/gallery4.avif"
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

  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">
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
              <motion.img
                src={images[selectedIndex]}
                alt="Galería Ampliada"
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              />

              {/* Flechas de navegación */}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
