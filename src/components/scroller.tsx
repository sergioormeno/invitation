"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 3 segundos solo si está en el Hero (primer viewport)
    const timeout = setTimeout(() => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 0.8) {
        setVisible(true);
      }
    }, 3000);

    const handleScroll = () => {
      // Ocultar el botón si ya no está en la parte superior
      if (window.scrollY > window.innerHeight * 0.5) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section");
    const currentY = window.scrollY;
    const next = Array.from(sections).find((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      return top > currentY + 50;
    });

    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={scrollToNextSection}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white p-2 z-50 hover:scale-110 transition-transform bg-transparent"
    >
      <ChevronDown size={52} strokeWidth={2} />
    </motion.button>
  );
}
