"use client";

import { PartyPopper, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ConfirmSuccessProps {
  estado: "asiste" | "no_asiste";
  nombre: string;
  permitePlusOne?: boolean;
  plusOneAsiste?: boolean;
  plusOneNombre?: string;
  plusOneRestriccion?: string;
  onEditar: () => void;
}

export default function ConfirmSuccess({
  estado,
  nombre,
  permitePlusOne,
  plusOneAsiste,
  plusOneNombre,
  plusOneRestriccion,
  onEditar,
}: ConfirmSuccessProps) {
  return (
    <motion.div
      className="mt-8 space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-center">
        {estado === "asiste" ? (
          <PartyPopper className="w-12 h-12 text-green-600 animate-bounce" />
        ) : (
          <XCircle className="w-10 h-10 text-[var(--color-muted)]" />
        )}
      </div>

      <h3 className="text-2xl font-bold">
        {estado === "asiste"
          ? `¡Gracias por confirmar, ${nombre}! Te esperamos con muchas ganas 🎊`
          : `Lamentamos que no puedas venir, ${nombre}. ¡Gracias por avisarnos! 💌`}
      </h3>

      {estado === "asiste" && permitePlusOne && plusOneAsiste && (
        <p>
          Has confirmado asistencia también para tu acompañante
          {plusOneNombre ? `: ${plusOneNombre}` : ""}.
          {plusOneRestriccion && plusOneRestriccion !== "Ninguna"
            ? ` Restricción alimenticia: ${plusOneRestriccion}.`
            : ""}
        </p>
      )}

      <button
        onClick={onEditar}
        className="underline text-sm text-[var(--color-accent)] mt-4"
      >
        ¿Cambiaste de parecer? Haz clic aquí para modificar tu confirmación.
      </button>
    </motion.div>
  );
}
