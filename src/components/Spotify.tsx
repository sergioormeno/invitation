"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { useInvitado } from "@/context/InvitadoContext";

interface SongRequestFormProps {
  confirmacion: "asiste" | "no_asiste" | null;
}

export default function SongRequestForm({ confirmacion }: SongRequestFormProps) {
  const { inviteKey, loading, valido } = useInvitado();
  const [cancion, setCancion] = useState("");
  const [sugerencias, setSugerencias] = useState<string[]>([]);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const puedeSugerir = !loading && valido && confirmacion === "asiste" && !!inviteKey;

  useEffect(() => {
    if (!puedeSugerir) return;

    const q = query(
      collection(db, "canciones", inviteKey!, "sugerencias"),
      orderBy("timestamp", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setSugerencias(snapshot.docs.map((doc) => doc.data().nombre as string));
    });

    return () => unsub();
  }, [puedeSugerir, inviteKey]);

  const enviarCancion = async () => {
    if (!cancion.trim() || !inviteKey) return;
    setEnviando(true);
    setMensaje(null);
    setError(null);
    try {
      await addDoc(collection(db, "canciones", inviteKey, "sugerencias"), {
        nombre: cancion.trim(),
        timestamp: new Date(),
      });
      setCancion("");
      setMensaje("🎉 ¡Gracias por tu recomendación!");
    } catch (err) {
      console.error("Error al guardar sugerencia:", err);
      setError("No se pudo guardar tu sugerencia. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  if (!puedeSugerir) return null;

  return (
    <section className="w-full bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4 text-center">
      <img
          src="/img/playing.avif"
          alt="dress code"
          className="w-32 h-32 mx-auto mb-4"
        />
      <h2 className="text-3xl font-bold mb-4">Canciones que no pueden faltar</h2>
      <p className="subtitle mb-8">
        Hemos creado una playlist colaborativa con los infaltables para este día. ¡Escúchala y agrega los tuyos más abajo!
      </p>

      <div className="flex justify-center mb-12">
        <iframe
          src="https://open.spotify.com/embed/playlist/2xqElTGIH4wfTPQS6yp0tE?utm_source=generator"
          width="100%"
          height="380"
          className="rounded-xl max-w-xl w-full"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Recomiéndanos una canción acá</h3>
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Nombre de la canción"
          className="w-full px-4 py-2 rounded-md border text-[var(--color-text)]"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
        <button
          onClick={enviarCancion}
          className="btn-primary mt-4"
          disabled={enviando || !cancion.trim()}
        >
          {enviando ? "Enviando..." : "Agregar canción"}
        </button>

        {mensaje && <p className="mt-4 text-green-600 font-medium">{mensaje}</p>}
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
      </div>

      {sugerencias.length > 0 && (
        <div className="max-w-xl mx-auto mt-8">
          <h4 className="text-lg font-semibold mb-2">Tus canciones sugeridas:</h4>
          <ul className="space-y-2 text-left">
            {sugerencias.map((nombre, idx) => (
              <li key={idx} className="bg-white/10 p-2 rounded-md">
                      <img
          src="/img/note.avif"
          alt="dress code"
          className="w-6 h-6 mx-auto mb-4 float-left"
        /> {nombre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
