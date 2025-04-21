"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { guardarAsistencia, obtenerInvitadoPorClave, Invitado } from "@/lib/asistencia";
import {
  ConfirmModal,
  ConfirmRestrictionForm,
  ConfirmSuccess,
} from "@/components/confirm";
import LoadingHeart from "@/components/min/LoadingCute";
import CuteBG from "@/components/min/CuteBackground";

const fechaLimite = new Date("2025-12-10T23:59:59");

export default function ConfirmAttendanceSection() {
  const searchParams = useSearchParams();
  const inviteKey = searchParams.get("inviteKey");

  const [invitado, setInvitado] = useState<Invitado | null>(null);
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
    if (!inviteKey) return;
    setLoading(true)
    obtenerInvitadoPorClave(inviteKey).then((data) => {
      if (data) {
        setLoading(false)
        setInvitado(data);
        setEstado(data.confirmacion ?? null);
        setRestriccion(data.restriccionAlimenticia ?? "Ninguna");
        if (data.permitePlusOne) {
          setLlevaPlusOne(data.plusOneAsiste ?? false);
          setPlusOneNombre(data.plusOneNombre ?? "");
          setPlusOneRestriccion(data.plusOneRestriccion ?? "Ninguna");
        }
      }
    });
  }, [inviteKey]);

  const manejarGuardar = async () => {
    if (!inviteKey) return;

    const payload: Partial<Invitado> = {
      confirmacion: "asiste",
      restriccionAlimenticia: restriccion,
    };

    if (invitado?.permitePlusOne) {
      payload.plusOneAsiste = llevaPlusOne;
      payload.plusOneNombre = llevaPlusOne ? plusOneNombre : "";
      payload.plusOneRestriccion = llevaPlusOne ? plusOneRestriccion : "";
    }

    await guardarAsistencia(inviteKey, payload);
    setEstado("asiste");
    setMostrarFormulario(false);
    setMostrarModalFinal(false);
    setModoEdicion(false);
  };

  const manejarConfirmacionNegativa = async () => {
    if (!inviteKey) return;
    await guardarAsistencia(inviteKey, {
      confirmacion: "no_asiste",
    });
    setEstado("no_asiste");
    setMostrarFormulario(false);
    setMostrarModalFinal(false);
    setModoEdicion(false);
  };

  if (!inviteKey) return null;

  return (
    <section className="section text-center relative">
      <CuteBG />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Confirma tu Asistencia</h2>
        <p className="subtitle mb-6">
          Puedes confirmar hasta el <strong>10 de diciembre de 2025</strong>
        </p>

        {loading && <LoadingHeart message="Cargando..." />}

        {!loading && estaFueraDePlazo ? (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">
              El tiempo de confirmación ha finalizado
            </h3>
            <p className="text-sm">
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
                className="flex flex-col md:flex-row justify-center gap-4"
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
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {invitado && (
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
                )}

                <button onClick={() => setMostrarModalFinal("asiste")} className="btn-primary mt-6">
                  Confirmar esta opción
                </button>
              </motion.div>
            )}

            {estado && !modoEdicion && (
              <motion.div key="confirmado">
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
                  onConfirm={
                    mostrarModalFinal === "asiste"
                      ? manejarGuardar
                      : manejarConfirmacionNegativa
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    </section>
  );
}
