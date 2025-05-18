"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

const deseos = [
  { label: "Aporte para la luna de miel",link: "https://link.mercadopago.cl/matrivaleysergio" },
  { label: "Aporte para vacaciones en familia",  link: "https://link.mercadopago.cl/matrivaleysergio" },
  { label: "Aporte para renovar nuestra casita", link: "https://link.mercadopago.cl/matrivaleysergio" },
  { label: "Aporte para cumplir un sueño",  link: "https://link.mercadopago.cl/matrivaleysergio" },
  { label: "Aporte para nuestro futuro", link: "https://link.mercadopago.cl/matrivaleysergio" },
  { label: "Aporte especial para los novios",  link: "https://link.mercadopago.cl/matrivaleysergio" },
  
];

const datos = [
  { label: "Nombre", value: "Sergio Ignacio Ormeño Vargas" },
  { label: "RUT", value: "17.957.689-9" },
  { label: "Banco", value: "Mercado Pago" },
  { label: "Tipo", value: "Cuenta Vista" },
  { label: "Cuenta", value: "1019862364" },
  { label: "Email", value: "sergioignacio.ov@gmail.com" },
];

export default function GiftModalDeseo() {
  const [selectedDeseo, setSelectedDeseo] = useState<number | null>(null);
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
    <div className="flex flex-col md:flex-row gap-6 transition-all duration-300 ease-in-out">
      <div className="space-y-4 flex-1">
        <h3 className="text-xl font-semibold">Elige que deseas regalarnos</h3>
        <ul className="space-y-2 text-center text-lg">
          {deseos.map((d, i) => (
            <li
              key={i}
              className={`p-3 border rounded-md cursor-pointer transition ${selectedDeseo === i ? "bg-[var(--color-accent)] text-white" : "hover:bg-[var(--color-bg)]"}`}
              onClick={() => setSelectedDeseo(i)}
            >
              {d.label}
            </li>
          ))}
        </ul>
      </div>

      {selectedDeseo !== null && (
        <div className="space-y-4 flex-1">
          <h4 className="text-lg font-semibold">Datos para transferir</h4>
          <div className="bg-[var(--color-bg)] p-4 rounded-md border text-md space-y-2">
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
