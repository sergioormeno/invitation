"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { obtenerInvitadoPorClave, Invitado } from "@/lib/asistencia";

type InvitadoContextType = {
  invitado: Invitado | null;
  loading: boolean;
  valido: boolean;
  inviteKey: string | null;
};

const InvitadoContext = createContext<InvitadoContextType>({
  invitado: null,
  loading: true,
  valido: false,
  inviteKey: null,
});

export function InvitadoProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const inviteKey = searchParams.get("inviteKey");

  const [invitado, setInvitado] = useState<Invitado | null>(null);
  const [loading, setLoading] = useState(true);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    if (!inviteKey) {
      setLoading(false);
      return;
    }

    obtenerInvitadoPorClave(inviteKey).then((data) => {
      if (data) {
        setInvitado(data);
        setValido(true);
      }
      setLoading(false);
    });
  }, [inviteKey]);

  return (
    <InvitadoContext.Provider value={{ invitado, loading, valido, inviteKey }}>
      {children}
    </InvitadoContext.Provider>
  );
}

export function useInvitado() {
  return useContext(InvitadoContext);
}
