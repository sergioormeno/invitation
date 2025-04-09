"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollButton() {
  const [isClient, setIsClient] = useState(false);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    setIsClient(true); // marquemos que ya estamos en cliente

    const hero = document.querySelector("section[data-hero]");
    if (!hero) return;
    heroRef.current = hero as HTMLElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
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

  if (!isClient) return null; // Evitamos el render SSR

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={scrollToNextSection}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 text-white p-2 z-40 hover:scale-110 transition-transform bg-transparent ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <ChevronDown size={52} strokeWidth={2} />
    </motion.button>
  );
}
