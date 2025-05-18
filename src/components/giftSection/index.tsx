"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { createPortal } from "react-dom";
import LoadingHeart from "../min/LoadingCute";

const GiftModal = lazy(() => import("@/components/min/GiftModal"));

const AnimatedCuteBG = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="absolute -z-1 inset-0 bg-[url('/img/bg-cutesm.avif')] sm:bg-[url('/img/bg-cutesm.avif')] md:bg-[url('/img/bg-cute.avif')] bg-cover bg-center"
  />
);

export default function GiftSection() {
  const [activeModal, setActiveModal] = useState< "deseo" | "mensaje" | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full spectral-semibold bg-[var(--color-bg)] text-[var(--color-text)] py-24 px-4 text-center">
      <motion.div
        className="max-w-3xl mx-auto space-y-7"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
        <img
          src="/img/gift.avif"
          alt="Gift"
          className="w-28 h-32 mx-auto"
        />
        </div>
        <h2 className="text-3xl font-bold">Si deseas hacernos un regalo…</h2>
        <p className="text-lg">
          Tu compañía en nuestro gran día es lo que más valoramos. <br />
          Si ademas deseas apoyarnos en esta nueva etapa, aquí encontrarás algunas opciones que preparamos con mucho amor:
        </p>

        <div className="flex flex-col gap-4 items-center mt-6">
          {[
            "Regalar con tarjeta o transferencia",
            "Estoy complicado ahora pero voy a ser el alma de la fiesta",
          ].map((label, index) => (
            <motion.button
              key={index}
              className="px-6 py-2 border border-[var(--color-accent)] text-[var(--color-text)] bg-transparent rounded-full hover:bg-[var(--color-accent)] hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              onClick={() => setActiveModal(index === 0 ? "deseo" : "mensaje")}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {isClient && activeModal !== null && document.getElementById("portal") &&
        createPortal(
          <Suspense fallback={<div className="text-center py-12"><LoadingHeart /></div>}>
            <GiftModal
              mode={activeModal}
              onClose={() => setActiveModal(null)}
              CuteBG={<AnimatedCuteBG />}
            />
          </Suspense>,
          document.getElementById("portal")!
        )}
    </section>
  );
}
