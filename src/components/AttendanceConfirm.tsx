"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { guardarAsistencia, Invitado } from "@/lib/asistencia";
import {
  ConfirmModal,
  ConfirmRestrictionForm,
  ConfirmSuccess,
} from "@/components/confirm";
import LoadingHeart from "@/components/min/LoadingCute";
import CuteBG from "@/components/min/CuteBackground";
import { useInvitado } from "@/context/InvitadoContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import SongRequestForm from "@/components/Spotify";

const fechaLimite = new Date("2025-12-10T23:59:59");

export default function ConfirmAttendanceSection() {
  const { invitado, loading: loadingInvitado, valido, inviteKey } = useInvitado();

  const [estado, setEstado] = useState<"asiste" | "no_asiste" | null>(null);
  const [restriccion, setRestriccion] = useState("Ninguna");
  const [llevaPlusOne, setLlevaPlusOne] = useState(false);
  const [plusOneNombre, setPlusOneNombre] = useState("");
  const [plusOneRestriccion, setPlusOneRestriccion] = useState("Ninguna");

  const [modoEdicion, setModoEdicion] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarModalFinal, setMostrarModalFinal] = useState<"asiste" | "no_asiste" | false>(false);
  const [loading, setLoading] = useState(false);

  const nombre = invitado?.nombre?.split(" ")[0] ?? "Invitado";
  const estaFueraDePlazo = new Date() > fechaLimite;

  useEffect(() => {
    if (invitado) {
      setEstado(invitado.confirmacion ?? null);
      setRestriccion(invitado.restriccionAlimenticia ?? "Ninguna");
      if (invitado.permitePlusOne) {
        setLlevaPlusOne(invitado.plusOneAsiste ?? false);
        setPlusOneNombre(invitado.plusOneNombre ?? "");
        setPlusOneRestriccion(invitado.plusOneRestriccion ?? "Ninguna");
      }
    }
  }, [invitado]);

  const actualizarConfirmacion = async (tipo: "asiste" | "no_asiste", payload?: Partial<Invitado>) => {
    if (!inviteKey) return;
    setLoading(true);

    await guardarAsistencia(inviteKey, {
      confirmacion: tipo,
      ...(payload ?? {}),
    });

    const snap = await getDoc(doc(db, "invitados", inviteKey));
    if (snap.exists()) {
      const actualizado = snap.data() as Invitado;
      setEstado(actualizado.confirmacion ?? null);
    }

    setLoading(false);
    setMostrarFormulario(false);
    setModoEdicion(false);
  };

  const manejarGuardar = async () => {
    const payload: Partial<Invitado> = {
      restriccionAlimenticia: restriccion,
    };

    if (invitado?.permitePlusOne) {
      payload.plusOneAsiste = llevaPlusOne;
      payload.plusOneNombre = llevaPlusOne ? plusOneNombre : "";
      payload.plusOneRestriccion = llevaPlusOne ? plusOneRestriccion : "";
    }

    await actualizarConfirmacion("asiste", payload);
  };

  const manejarConfirmacionNegativa = async () => {
    await actualizarConfirmacion("no_asiste");
  };

  if (loadingInvitado) return <LoadingHeart message="Cargando invitación..." />;
  if (!valido || !invitado) return null;

  return (
    <>
      <section className="w-full py-16 px-4 bg-[var(--color-deep)] text-[var(--color-bg)] relative spectral-semibold">
        <CuteBG />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[var(--color-bg)]">
            Confirma tu Asistencia
          </h2>
          <p className=" text-center mb-6 text-[var(--color-bg)] subtitle">
            Puedes confirmar hasta el <strong>10 de noviembre de 2025</strong>
          </p>

          {loading && <LoadingHeart message="Guardando tu confirmación..." />}

          {!loading && estaFueraDePlazo ? (
            <div className="mt-8 space-y-4 bg-white/10 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[var(--color-bg)]">
                El tiempo de confirmación ha finalizado
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Gracias a quienes confirmaron. ¡Nos vemos (o nos pensamos con cariño)! 💌
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {!loading && (estado === null || modoEdicion) && !mostrarFormulario && (
                <motion.div
                  key="botones-iniciales"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col md:flex-row justify-center gap-4 mt-4"
                >
                  <button onClick={() => setMostrarFormulario(true)} className="btn-primary">
                    Sí, asistiré
                  </button>
                  <button onClick={() => setMostrarModalFinal("no_asiste")} className="btn-secondary">
                    No podré ir
                  </button>
                </motion.div>
              )}

              {mostrarFormulario && (
                <motion.div
                  key="formulario"
                  className="mt-8 bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <ConfirmRestrictionForm
                    restriccion={restriccion}
                    setRestriccion={setRestriccion}
                    permitePlusOne={invitado.permitePlusOne ?? false}
                    llevaPlusOne={llevaPlusOne}
                    setLlevaPlusOne={setLlevaPlusOne}
                    plusOneNombre={plusOneNombre}
                    setPlusOneNombre={setPlusOneNombre}
                    plusOneRestriccion={plusOneRestriccion}
                    setPlusOneRestriccion={setPlusOneRestriccion}
                  />
                  <button onClick={() => setMostrarModalFinal("asiste")} className="btn-primary mt-6">
                    Confirmar esta opción
                  </button>
                </motion.div>
              )}

              {estado && !modoEdicion && (
                <motion.div key="confirmado" className="mt-8">
                  <ConfirmSuccess
                    estado={estado}
                    nombre={nombre}
                    permitePlusOne={invitado?.permitePlusOne}
                    plusOneAsiste={invitado?.plusOneAsiste}
                    plusOneNombre={invitado?.plusOneNombre}
                    plusOneRestriccion={invitado?.plusOneRestriccion}
                    onEditar={() => setModoEdicion(true)}
                  />
                </motion.div>
              )}

              {mostrarModalFinal && (
                <motion.div key="modal">
                  <ConfirmModal
                    tipo={mostrarModalFinal}
                    nombre={nombre}
                    onClose={() => setMostrarModalFinal(false)}
                    onConfirm={async () => {
                      if (mostrarModalFinal === "asiste") {
                        await manejarGuardar();
                      } else {
                        await manejarConfirmacionNegativa();
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </section>

      {estado === "asiste" && <SongRequestForm confirmacion="asiste" />}
    </>
  );
}
