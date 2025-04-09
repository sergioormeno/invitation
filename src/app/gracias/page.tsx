"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import Link from "next/link";
import CuteBG from "@/components/min/cutebackground";

export default function Gracias() {
  useEffect(() => {
    localStorage.setItem("hasGifted", "true");
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center text-[var(--color-text)]">
      {/* Fondo decorativo */}
      <CuteBG/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 space-y-6 max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Gift className="w-12 h-12 text-[var(--color-accent)] mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold"
        >
          ¡Gracias por tu regalo! 🎁
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg"
        >
          Tu aporte significa mucho para nosotros. Nos emociona compartir este momento contigo
          y no vemos la hora de celebrar juntos 💛
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-block mt-6 btn-primary px-6 py-2 text-white rounded-full"
          >
            Volver a la invitación
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
