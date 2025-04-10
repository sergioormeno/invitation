"use client";

import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import CuteBG from "@/components/min/cutebackground";

const GiftModal = lazy(() => import("@/components/min/GiftModal"));

export default function GiftSection() {
  const [activeModal, setActiveModal] = useState<"transfer" | "deseo" | "mensaje" | null>(null);

  return (
    <section className="w-full spectral-semibold bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4 text-center">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <Gift className="w-10 h-10 text-[var(--color-accent)]" />
        </div>
        <h2 className="text-3xl font-bold">Nuestra lista de deseos</h2>
        <p className="text-lg">
          Tu compañía en nuestro gran día es lo que más valoramos. <br />
          Si además quieres regalarnos algo, te dejamos las siguientes opciones:
        </p>

        <div className="flex flex-col gap-4 items-center mt-6">
          {[
            "Quiero regalar un deseo",
            "Prefiero solo transferir",
            "Estoy complicado ahora pero voy a ser el alma de la fiesta",
          ].map((label, index) => (
            <motion.button
              key={index}
              className="px-6 py-2 border border-[var(--color-accent)] text-[var(--color-text)] bg-transparent rounded-full hover:bg-[var(--color-accent)] hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              onClick={() => setActiveModal(index === 0 ? "deseo" : index === 1 ? "transfer" : "mensaje")}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeModal && (
          <Suspense fallback={<div className="text-center py-8">Cargando detalles...</div>}>
            <GiftModal
              mode={activeModal}
              onClose={() => setActiveModal(null)}
              CuteBG={<CuteBG />}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
