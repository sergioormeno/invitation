"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

const datos = [
  { label: "Nombre", value: "Sergio Ignacio Ormeño Vargas" },
  { label: "RUT", value: "17.957.689-9" },
  { label: "Banco", value: "Mercado Pago" },
  { label: "Tipo", value: "Cuenta Vista" },
  { label: "Cuenta", value: "1019862364" },
  { label: "Email", value: "sergioignacio.ov@gmail.com" },
];

export default function GiftModalTransfer() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  const copiarTexto = (texto: string, index: number) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  const copiarTodosLosDatos = () => {
    const texto = datos.map((d) => `${d.value}`).join("\n");
    navigator.clipboard.writeText(texto).then(() => {
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 1500);
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Gracias por tu cariño</h3>
      <p className="text-sm">Si deseas hacernos un aporte, puedes usar los siguientes datos para transferir:</p>

      <div className="bg-[var(--color-bg)] p-4 rounded-md border text-sm space-y-2">
        {datos.map((d, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-left w-full">
              <strong>{d.label}:</strong> {d.value}
            </span>
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

      <div className="flex justify-end pt-2 relative">
        <button
          onClick={copiarTodosLosDatos}
          className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
          title="Copiar todos los datos"
        >
          <Copy className="w-5 h-5" />
        </button>

        {allCopied && (
          <div className="absolute -top-2 -right-2 bg-[var(--color-text)] text-white text-xs px-2 py-1 rounded shadow-md transition-opacity duration-300 z-10">
            Se copiaron todos los datos
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
