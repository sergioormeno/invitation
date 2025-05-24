"use client";

import { motion } from "framer-motion";
import { useInvitado } from "@/context/InvitadoContext";

export default function WelcomeMessage() {
  const { invitado, loading, valido } = useInvitado();

  if (loading || !valido || !invitado?.nombre) return null;

  return (
     <motion.div
        className="relative z-10 text-center space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-xl md:text-2xl text-white font-cinzel-decorative">
          Hola {invitado.nombre}
        </h2>
    </motion.div>
  );
}


