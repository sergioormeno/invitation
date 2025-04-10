"use client";

import { motion } from "framer-motion";
import { Suspense, lazy} from "react";
import LoadingHeart from "./LoadingCute";

const TransferPanel = lazy(() => import("./GiftModalTransfer"));
const DeseoPanel = lazy(() => import("./GiftModalDeseo"));
const MensajePanel = lazy(() => import("./GiftModalMensaje"));



interface Props {
  mode: "transfer" | "deseo" | "mensaje";
  onClose: () => void;
  CuteBG: React.ReactNode;
}

export default function GiftModal({ mode, onClose, CuteBG }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-[var(--color-bg)] bg-opacity-60 z-50 flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Fondo decorativo clickeable */}
      <div className="absolute inset-0 z-0" onClick={onClose}></div>
      {CuteBG}

      <motion.div
        className="relative z-10 bg-white rounded-lg w-full max-w-3xl text-[var(--color-text)] shadow-xl max-h-[90vh]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-3rem)] flex flex-col gap-6">
          <Suspense fallback={<div className="text-center py-12"><LoadingHeart /></div>}>
            {mode === "transfer" && <TransferPanel />}
            {mode === "deseo" && <DeseoPanel />}
            {mode === "mensaje" && <MensajePanel />}
          </Suspense>

          {/* Botón cerrar */}
          <div className="w-full pt-2 text-center">
            <button
              className="btn-secondary px-6 py-2 transition duration-200 hover:bg-[var(--color-accent)] hover:text-white"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
