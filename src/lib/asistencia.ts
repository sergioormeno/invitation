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

// Guardar confirmación o actualización
export async function guardarAsistencia(inviteKey: string, data: Partial<Invitado>): Promise<void> {
  const ref = doc(db, "invitados", inviteKey);
  await setDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true }); // merge asegura que solo se actualicen los campos enviados
}
