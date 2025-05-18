"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_DATE = new Date("2026-01-10T17:15:00");

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +EVENT_DATE - +new Date();
    if (difference > 0) {
      return {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<Record<string, number> | null>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const eventoEsHoy = !timeLeft;

  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] spectral-semibold py-14 px-4">
      <motion.div
        className="w-full max-w-6xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Imagen condicional */}
        <img
          src={eventoEsHoy ? "/img/pop.avif" : "/img/timer.avif"}
          alt={eventoEsHoy ? "Celebración" : "Cuenta regresiva"}
          className="w-28 h-28 mx-auto"
        />

        {/* Subtítulo solo si aún no es el evento */}
        {!eventoEsHoy && (
          <motion.h3
            className="text-xl font-semibold text-[var(--color-deep)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Faltan...
          </motion.h3>
        )}

        {/* Números o mensaje de hoy */}
        <AnimatePresence>
          {!eventoEsHoy ? (
            <motion.div
              key="countdown"
              className="flex flex-wrap justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Object.entries(timeLeft!).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className="text-center flex flex-col items-center xs:min-w-[65px] sm:min-w-[80px]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    key={value}
                    className="text-3xl sm:text-5xl font-bold text-[var(--color-accent)]"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value}
                  </motion.span>
                  <span className="text-xs sm:text-base uppercase tracking-wide text-[var(--color-deep)]">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.h3
              key="today"
              className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              ¡Nos casamos hoy!
            </motion.h3>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
