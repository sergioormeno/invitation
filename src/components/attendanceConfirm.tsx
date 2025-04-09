"use client";

import { useState } from "react";
import SongRequestForm from "@/components/spotify";

export default function ConfirmAttendanceSection() {
  const [showForm, setShowForm] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  return (
    <section className="py-16 px-4 md:px-8 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">Confirma tu Asistencia</h2>

      {!showForm && !formCompleted && (
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-full font-semibold text-white bg-[var(--color-accent)] hover:shadow-lg transition"
          >
            Sí, asistiré
          </button>
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-[#b46a55] hover:shadow-lg transition">
            No podré ir
          </button>
        </div>
      )}

      {showForm && !formCompleted && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <iframe
            src="https://docs.google.com/forms/d/e/TU_ID_DEL_FORMULARIO/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            className="w-full max-w-2xl border rounded-xl"
          >
            Cargando…
          </iframe>
          <button
            onClick={() => setFormCompleted(true)}
            className="mt-4 px-6 py-3 rounded-full font-semibold text-white bg-green-700 hover:shadow-lg transition"
          >
            Ya envié el formulario
          </button>
        </div>
      )}

      {formCompleted && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-text)]">¡Gracias por confirmar!</h3>
          <p className="mb-6">Ahora puedes dejarnos una canción que quieras escuchar en la fiesta 🎶</p>
          <SongRequestForm />
        </div>
      )}
    </section>
  );
}