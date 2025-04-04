"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingMusicPlayer from "@/components/player";

export default function Page() {
  // Estado RSVP
  const [rsvp, setRsvp] = useState<string | null>(null);

  // Imágenes de galería (reemplaza con las tuyas)
  const images = [
    {
      src: "https://via.placeholder.com/300x200?text=Foto+1",
      alt: "Foto 1",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Foto+2",
      alt: "Foto 2",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Foto+3",
      alt: "Foto 3",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Foto+4",
      alt: "Foto 4",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Foto+5",
      alt: "Foto 5",
    }
  ];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center text-[#5c4033]"

    >
      {/* Sección Hero en tonos café */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"style={{
          backgroundImage: "url('/img/loves.avif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-[#5c4033]/30" />

        {/* Título principal */}
        <motion.div
          className="z-10 text-center p-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl text-white">
            Nos Casamos!
          </h1>
          <p className="text-2xl md:text-3xl text-white">
            Sergio & Valentina
          </p>
          <p className="mt-4 text-xl md:text-2xl text-white">
            12 de Junio, 2025 • Viña del Mar
          </p>
        </motion.div>
      </section>

      {/* Sección Detalles del Evento */}
      <section className="-mt-16 md:-mt-32 max-w-3xl w-full p-4 md:p-8 text-center z-20">
        <div
          className="p-8 rounded-2xl shadow-2xl"
          style={{
            backgroundColor: "#f7f0e7",
          }}
        >
          <h2 className="text-3xl font-semibold" style={{ color: "#5c4033" }}>
            Detalles del Evento
          </h2>
          <p className="mt-4 leading-relaxed">
            Nos encantaría compartir este día tan especial con ustedes. La
            ceremonia se llevará a cabo en la iglesia Nuestra Señora de las
            Flores a las 17:00 hrs, seguida de una recepción en el salón
            principal.
          </p>
        </div>
      </section>

      {/* Sección Nuestra Historia */}
      <section className="max-w-4xl w-full p-4 md:p-8 text-center">
        <div
          className="p-8 rounded-2xl shadow-2xl"
          style={{ backgroundColor: "#f7f0e7" }}
        >
          <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
          <p className="leading-relaxed">
            Todo comenzó con una mirada cómplice en una cafetería, y con el
            tiempo fuimos descubriendo que cada momento compartido hacía crecer
            nuestro amor. Hoy, queremos dar el siguiente paso y celebrarlo con
            quienes más queremos.
          </p>
        </div>
      </section>

      {/* Sección Galería de Fotografías */}
      <section className="max-w-5xl w-full p-4 md:p-8 text-center">
        <div
          className="p-8 rounded-2xl shadow-2xl"
          style={{ backgroundColor: "#f7f0e7" }}
        >
          <h3 className="text-2xl font-semibold mb-6">Nuestra Galería</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <motion.div
                key={img.src}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para la Imagen Ampliada */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            key="overlay"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              key="image"
              src={selectedImg}
              alt="Imagen Ampliada"
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sección de Ubicación / Mapa */}
      <section className="max-w-4xl w-full p-4 md:p-8 text-center">
        <div
          className="p-8 rounded-2xl shadow-2xl"
          style={{ backgroundColor: "#f7f0e7" }}
        >
          <h3 className="text-2xl font-semibold mb-4">¿Dónde nos Encontramos?</h3>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            loading="lazy"
            allowFullScreen={false}
          ></iframe>
          <p className="mt-4 text-sm">
            Ubicación referencial para el evento
          </p>
        </div>
      </section>

      {/* Sección RSVP */}
      <section className="max-w-2xl w-full p-4 md:p-8 text-center">
        <div
          className="p-8 rounded-2xl shadow-2xl"
          style={{ backgroundColor: "#f7f0e7" }}
        >
          <h2 className="text-3xl font-semibold text-[#5c4033]">
            ¡Confirma tu Asistencia!
          </h2>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => setRsvp("Sí, asistiré")}
              className="px-6 py-3 rounded-full shadow hover:shadow-md transition font-medium text-white"
              style={{ backgroundColor: "#8b6a4e" }}
            >
              Sí, asistiré
            </button>
            <button
              onClick={() => setRsvp("No podré ir")}
              className="px-6 py-3 rounded-full shadow hover:shadow-md transition font-medium text-white"
              style={{ backgroundColor: "#b46a55" }}
            >
              No podré ir
            </button>
          </div>
          {rsvp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-lg"
            >
              ¡Gracias por tu respuesta! ({rsvp})
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full p-4 text-center text-sm"
        style={{ backgroundColor: "#f7f0e7" }}
      >
        <p>© 2025 Sergio & Valentina — ¡Nos vemos el gran día!</p>
      </footer>
      <FloatingMusicPlayer />
    </div>
  );
}