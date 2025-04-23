"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { db } from "@/firebase";

export type Invitado = {
  nombre: string;
  deQuienEs: "Sergio" | "Valentina";
  confirmacion?: "asiste" | "no_asiste" | null;
  restriccionAlimenticia?: string;
  plusOneAsiste?: boolean;
  plusOneNombre?: string;
  plusOneRestriccion?: string;
  permitePlusOne?: boolean;
};

type ContextoInvitado = {
  invitado: Invitado | null;
  loading: boolean;
  valido: boolean;
  inviteKey: string | null;
};

const InvitadoContext = createContext<ContextoInvitado>({
  invitado: null,
  loading: true,
  valido: false,
  inviteKey: null,
});

export function useInvitado() {
  return useContext(InvitadoContext);
}

export function InvitadoProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const inviteKey = searchParams.get("inviteKey");

  const [invitado, setInvitado] = useState<Invitado | null>(null);
  const [loading, setLoading] = useState(true);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      if (!inviteKey) {
        setValido(false);
        setLoading(false);
        return;
      }

      const ref = doc(db, "invitados", inviteKey);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setInvitado(snap.data() as Invitado);
        setValido(true);
      } else {
        setValido(false);
      }

      setLoading(false);
    };

    cargar();
  }, [inviteKey]);

  return (
    <InvitadoContext.Provider value={{ invitado, loading, valido, inviteKey }}>
      {children}
    </InvitadoContext.Provider>
  );
}
