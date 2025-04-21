"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import CuteBG from "@/components/min/CuteBackground";
import LoadingHeart from "@/components/min/LoadingCute";

interface ConfirmModalProps {
  tipo: "asiste" | "no_asiste";
  nombre: string;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export default function ConfirmModal({
  tipo,
  nombre,
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const mensaje =
    tipo === "asiste"
      ? `¿Estás seguro de que quieres confirmar tu asistencia, ${nombre}?`
      : `¿Confirmas que no podrás acompañarnos, ${nombre}?`;

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CuteBG />

        <motion.div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-[var(--color-text)] relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {loading ? (
            <LoadingHeart message="Guardando tu confirmación..." />
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">Confirmación</h3>
              <p className="mb-6">{mensaje}</p>

              <div className="flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="btn-secondary px-4 py-2"
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirm}
                  className="btn-primary px-4 py-2"
                  disabled={loading}
                >
                  Confirmar
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
