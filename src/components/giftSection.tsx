"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Copy } from "lucide-react";
import CuteBG from "./min/cutebackground";

export default function GiftSection() {
  const [activeModal, setActiveModal] = useState<"transfer" | "deseo" | "mensaje" | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedDeseo, setSelectedDeseo] = useState<number | null>(null);

  const deseos = [
    { label: "Cena romántica para dos", amount: 40000, link: "https://mpago.la/2CU4neH" },
    { label: "Día de spa", amount: 60000, link: "https://mpago.la/2CU4neH" },
    { label: "Excursión inolvidable", amount: 100000, link: "https://mpago.la/2CU4neH" },
    { label: "Noche en hotel boutique", amount: 200000, link: "https://mpago.la/2CU4neH" },
    { label: "Gran aventura soñada", amount: 400000, link: "https://mpago.la/2CU4neH" }
  ];

  const datos = [
    { label: "Banco", value: "Banco Ejemplo" },
    { label: "Nombre", value: "Sergio & Valentina" },
    { label: "Cuenta", value: "123456789" },
    { label: "Tipo", value: "Cuenta Corriente" },
    { label: "RUT", value: "12.345.678-9" },
    { label: "Email", value: "ejemplo@correo.com" }
  ];

  const copiarTexto = (texto: string, index: number) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  const copiarTodosLosDatos = () => {
    const texto = datos.map((d) => `${d.label}: ${d.value}`).join("\n");
    navigator.clipboard.writeText(texto);
  };

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
          {["Quiero regalar un deseo", "Prefiero solo transferir", "Estoy complicado ahora pero voy a ser el alma de la fiesta"].map((label, index) => (
            <motion.button
              key={index}
              className="px-6 py-2 border border-[var(--color-accent)] text-[var(--color-text)] bg-transparent rounded-full hover:bg-[var(--color-accent)] hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              onClick={() => {
                setActiveModal(index === 0 ? "deseo" : index === 1 ? "transfer" : "mensaje");
                setSelectedDeseo(null);
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {(activeModal === "deseo" || activeModal === "transfer" || activeModal === "mensaje") && (
          <motion.div
            className="fixed inset-0 bg-[var(--color-bg)] bg-opacity-60 z-50 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Capa clickeable que cierra el modal al hacer clic fuera */}
            <div
              className="absolute inset-0 z-0"
              onClick={() => setActiveModal(null)}
            ></div>
            <CuteBG/>

            <motion.div
              className="relative z-10 bg-white rounded-lg w-full max-w-3xl text-[var(--color-text)] shadow-xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-3rem)] flex flex-col gap-6">
                {/* Transferencia */}
                {activeModal === "transfer" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Gracias por tu cariño</h3>
                    <p className="text-sm">Si deseas hacernos un aporte, puedes usar los siguientes datos para transferir:</p>
                    <div className="bg-[var(--color-bg)] p-4 rounded-md border text-sm space-y-2">
                      {datos.map((d, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-left w-full"><strong>{d.label}:</strong> {d.value}</span>
                          <div className="relative hidden md:inline-flex">
                            <Copy className="w-4 h-4 cursor-pointer" onClick={() => copiarTexto(d.value, i)} />
                            {copiedIndex === i && (
                              <span className="absolute -top-6 right-0 text-xs text-white bg-[var(--color-text)] px-2 py-1 rounded">
                                Copiado
                              </span>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Botón copiar todos (con solo ícono) */}
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={copiarTodosLosDatos}
                          className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
                          title="Copiar todos los datos"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                    </div>


                  </div>
                )}

                {/* Deseos */}
                {activeModal === "deseo" && (
                  <div className="flex flex-col md:flex-row gap-6 transition-all duration-300 ease-in-out">
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-semibold">Elige un deseo para ayudarnos a cumplir</h3>
                      <ul className="space-y-2">
                        {deseos.map((d, i) => (
                          <li
                            key={i}
                            className={`p-3 border rounded-md cursor-pointer transition ${selectedDeseo === i ? "bg-[var(--color-accent)] text-white" : "hover:bg-[var(--color-bg)]"}`}
                            onClick={() => setSelectedDeseo(i)}
                          >
                            {d.label} — ${d.amount.toLocaleString()} CLP
                          </li>
                        ))}
                      </ul>
                    </div>
                    <AnimatePresence>
                      {selectedDeseo !== null && (
                        <motion.div
                          className="space-y-4 flex-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4 }}
                        >
                          <h4 className="text-lg font-semibold">Opciones para regalar</h4>
                          <div className="bg-[var(--color-bg)] p-4 rounded-md border text-sm space-y-2">
                            {datos.map((d, i) => (
                              <div key={i} className="flex justify-between items-center">
                                <span className="text-left w-full"><strong>{d.label}:</strong> {d.value}</span>
                                <div className="relative hidden md:inline-flex">
                                  <Copy className="w-4 h-4 cursor-pointer" onClick={() => copiarTexto(d.value, i)} />
                                  {copiedIndex === i && (
                                    <span className="absolute -top-6 right-0 text-xs text-white bg-[var(--color-text)] px-2 py-1 rounded">
                                      Copiado
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}

                            {/* Botón copiar todos (con solo ícono) */}
                            <div className="flex justify-end pt-2">
                              <button
                                onClick={copiarTodosLosDatos}
                                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
                                title="Copiar todos los datos"
                              >
                                <Copy className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <p className="text-sm">O bien puedes colaborar con tarjeta de crédito aquí:</p>
                          <a
                            href={deseos[selectedDeseo].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block btn-primary text-center"
                          >
                            Regalar con Mercado Pago
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Mensaje sin regalo */}
                {activeModal === "mensaje" && (
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">¡Nada que preocuparse!</h3>
                    <p className="text-base">
                      Tu presencia será el mejor regalo 🎉 <br />
                      ¡Nos harás felices con tu alegría y energía en la fiesta!
                    </p>
                  </div>
                )}

                {/* Botón cerrar */}
                <div className="w-full pt-2 text-center">
                  <button
                    className="btn-secondary px-6 py-2 transition duration-200 hover:bg-[var(--color-accent)] hover:text-white"
                    onClick={() => setActiveModal(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
