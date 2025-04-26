"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

const deseos = [
  { label: "Cena romántica para dos", amount: 65000, link: "https://mpago.la/1mDrhkq" },
  { label: "Día de spa", amount: 100000, link: "https://mpago.la/2vrDmai" },
  { label: "Excursión inolvidable", amount: 120000, link: "https://mpago.la/2qsUXdz" },
  { label: "Noche en hotel boutique", amount: 200000, link: "https://mpago.la/16xcLdw" },
  { label: "Gran aventura soñada", amount: 400000, link: "https://mpago.la/1ywyh9S" },
];

const datos = [
  { label: "Banco", value: "Banco Ejemplo" },
  { label: "Nombre", value: "Sergio & Valentina" },
  { label: "Cuenta", value: "123456789" },
  { label: "Tipo", value: "Cuenta Corriente" },
  { label: "RUT", value: "12.345.678-9" },
  { label: "Email", value: "ejemplo@correo.com" },
];

export default function GiftModalDeseo() {
  const [selectedDeseo, setSelectedDeseo] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copiarTexto = (texto: string, index: number) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  const copiarTodosLosDatos = () => {
    const texto = datos.map((d) => `${d.value}`).join("\n");
    navigator.clipboard.writeText(texto);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 transition-all duration-300 ease-in-out">
      <div className="space-y-4 flex-1">
        <h3 className="text-xl font-semibold">Elige una experiencia que deseas regalarnos</h3>
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

      {selectedDeseo !== null && (
        <div className="space-y-4 flex-1">
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

          <p className="text-sm"><b>O bien puedes colaborar con tarjeta de crédito aquí:</b></p>
          <a
            href={deseos[selectedDeseo].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-primary text-center"
          >
            Regalar con Tarjeta de Crédito
          </a>
        </div>
      )}
    </div>
  );
}
