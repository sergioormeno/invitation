// src/app/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [rsvp, setRsvp] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 text-gray-800">
      {/* Sección Hero */}
      <section
        className="w-full h-screen bg-center bg-cover flex flex-col justify-center items-center relative"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1200x800?text=Imagen+de+Fondo')",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center text-white p-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ¡Nos Casamos!
          </h1>
          <p className="text-2xl">Sergio & Valentina</p>
          <p className="mt-4 text-lg md:text-xl">
            12 de Junio, 2025 • Lugar: Viña del Mar
          </p>
        </motion.div>
      </section>

      {/* Sección Información Principal */}
      <section className="-mt-16 md:-mt-32 max-w-3xl w-full p-4 md:p-8 text-center z-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-600">
            Detalles del Evento
          </h2>
          <p className="mt-4">
            Nos encantaría compartir este día tan especial con ustedes.
            La ceremonia se llevará a cabo en la iglesia Nuestra Señora de las Flores
            a las 17:00 hrs, seguida de una recepción en el salón principal.
          </p>
        </div>
      </section>

      {/* Sección Mensaje / Historia */}
      <section className="max-w-4xl w-full p-4 md:p-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Nuestra Historia
          </h3>
          <p className="mt-4 leading-relaxed">
            Todo comenzó con una mirada cómplice en una cafetería, y con el tiempo
            fuimos descubriendo que cada momento compartido hacía crecer nuestro amor.
            Hoy, queremos dar el siguiente paso y celebrarlo con quienes más queremos.
          </p>
        </div>
      </section>

      {/* Sección Mapa / Ubicación (Opcional) */}
      <section className="max-w-4xl w-full p-4 md:p-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            ¿Dónde nos Encontramos?
          </h3>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
          <p className="mt-4 text-sm text-gray-500">
            Ubicación referencial para el evento
          </p>
        </div>
      </section>

      {/* Sección RSVP */}
      <section className="max-w-2xl w-full p-4 md:p-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-600">
            ¡Confirma tu Asistencia!
          </h2>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => setRsvp('Sí, asistiré')}
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
            >
              Sí, asistiré
            </button>
            <button
              onClick={() => setRsvp('No podré ir')}
              className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
            >
              No podré ir
            </button>
          </div>
          {rsvp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-lg text-gray-700"
            >
              ¡Gracias por tu respuesta! ({rsvp})
            </motion.div>
          )}
        </div>
      </section>

      {/* Sección Footer */}
      <footer className="w-full bg-white p-4 text-center text-sm text-gray-500">
        <p>© 2025 Sergio & Valentina — ¡Nos vemos el gran día!</p>
      </footer>
    </div>
  );
}