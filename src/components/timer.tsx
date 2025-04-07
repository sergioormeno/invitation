"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-01-01T17:00:00") - +new Date();
    let timeLeft = {} as Record<string, number>;

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4">
      <motion.div
        className="w-full max-w-6xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="title">Faltan...</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center min-w-[80px]">
              <span className="text-4xl sm:text-5xl font-bold text-[var(--color-accent)]">{value}</span>
              <span className="text-sm sm:text-base uppercase tracking-wide text-[var(--color-deep)]">{unit}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
