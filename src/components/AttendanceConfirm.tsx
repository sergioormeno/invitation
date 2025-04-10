import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import SongRequestForm from "@/components/Spotify1";

export default function ConfirmAttendanceSection() {
  const [showForm, setShowForm] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [declined, setDeclined] = useState(false);

  return (
    <motion.section
      className="section text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Confirma tu Asistencia</h2>

      <AnimatePresence>
        {!showForm && !formCompleted && !declined && (
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Sí, asistiré
            </button>
            <button onClick={() => setDeclined(true)} className="btn-secondary">
              No podré ir
            </button>
          </motion.div>
        )}

        {showForm && !formCompleted && (
          <motion.div
            className="mt-8 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
              className="btn-primary mt-4"
            >
              Ya envié el formulario
            </button>
          </motion.div>
        )}

        {formCompleted && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">¡Gracias por confirmar!</h3>
            <p className="mb-6">
              Ahora puedes dejarnos una canción que quieras escuchar en la fiesta 🎶
            </p>
            <SongRequestForm />
          </motion.div>
        )}

        {declined && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex justify-center mb-4">
              <XCircle className="w-10 h-10 text-[var(--color-muted)]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Te vamos a extrañar!</h3>
            <p className="subtitle">
              Gracias por avisarnos. Te mandamos un gran abrazo 💌
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}