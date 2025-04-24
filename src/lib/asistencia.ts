import { db } from "@/firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  DocumentData,
} from "firebase/firestore";

export type Invitado = {
  nombre: string;
  deQuienEs: "Sergio" | "Valentina";
  confirmacion?: "asiste" | "no_asiste" | null;
  restriccionAlimenticia?: string;
  plusOneAsiste?: boolean;
  plusOneNombre?: string;
  plusOneRestriccion?: string;
  permitePlusOne?: boolean;
  updatedAt?: any;
};

// Leer invitado por inviteKey
export async function obtenerInvitadoPorClave(inviteKey: string): Promise<Invitado | null> {
  const ref = doc(db, "invitados", inviteKey);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as Invitado) : null;
}

// Guardar confirmación o actualización (solo si el UID coincide con inviteKey)
export async function guardarAsistencia(
  inviteKey: string,
  data: Partial<Invitado>
): Promise<Invitado | null> {
  const ref = doc(db, "invitados", inviteKey);

  // Guarda la confirmación
  await setDoc(
    ref,
    {
      ...data,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  // Recupera el documento actualizado
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data() as Invitado;
  }

  return null;
}