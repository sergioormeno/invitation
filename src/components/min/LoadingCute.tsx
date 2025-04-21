"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingHeart({
  message = "Preparando algo especial...",
  show = true,
}: {
  message?: string;
  show?: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-heart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg)] bg-opacity-80 backdrop-blur-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[var(--color-accent)]"
          >
            <Heart size={56} fill="currentColor" />
          </motion.div>
          <p className="mt-6 text-lg font-semibold text-[var(--color-text)]">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
