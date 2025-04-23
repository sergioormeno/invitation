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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg backdrop-blur-sm text-center text-[var(--color-bg)]"
    >
      <div className="flex justify-center mb-4">
        {estado === "asiste" ? (
          <img
          src="/img/pop.avif"
          alt="Celebración"
          className="w-32 h-32 mx-auto"
        />
        ) : (
          <XCircle className="w-10 h-10 text-[var(--color-muted)]" />
        )}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {estado === "asiste"
          ? `¡Gracias por confirmar, ${nombre}! Te esperamos con muchas ganas`
          : `Lamentamos que no puedas venir, ${nombre}. ¡Gracias por avisarnos!`}
      </h3>

      {estado === "asiste" && permitePlusOne && plusOneAsiste && (
        <p className="text-[var(--color-muted)] mb-4">
          También has confirmado a tu acompañante
          {plusOneNombre ? `: ${plusOneNombre}` : ""}.
          {plusOneRestriccion && plusOneRestriccion !== "Ninguna"
            ? ` Restricción alimenticia: ${plusOneRestriccion}.`
            : ""}
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={onEditar}
          className="underline text-md text-[var(--color-white)] hover:text-[var(--color-accent)] transition"
        >
          ¿Cambiaste de parecer? Haz clic aquí para modificar tu confirmación
        </button>
      </div>
    </motion.div>
  );
}
