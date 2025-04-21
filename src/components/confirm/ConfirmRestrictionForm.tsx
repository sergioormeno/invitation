"use client";

import { useEffect } from "react";

interface Props {
  restriccion: string;
  setRestriccion: (value: string) => void;

  permitePlusOne: boolean;
  llevaPlusOne: boolean;
  setLlevaPlusOne: (value: boolean) => void;

  plusOneNombre: string;
  setPlusOneNombre: (value: string) => void;

  plusOneRestriccion: string;
  setPlusOneRestriccion: (value: string) => void;
}

const opcionesRestriccion = [
  "Ninguna",
  "Vegetariano",
  "Vegano",
  "Sin gluten",
  "Alérgico a frutos secos",
  "Otra",
];

export default function ConfirmRestrictionForm({
  restriccion,
  setRestriccion,
  permitePlusOne,
  llevaPlusOne,
  setLlevaPlusOne,
  plusOneNombre,
  setPlusOneNombre,
  plusOneRestriccion,
  setPlusOneRestriccion,
}: Props) {
  return (
    <div className="space-y-6 text-left mt-4">
      {/* Restricción titular */}
      <div>
        <label className="block mb-1 font-medium">
          Tu restricción alimenticia
        </label>
        <select
          className="w-full border rounded px-4 py-2"
          value={restriccion}
          onChange={(e) => setRestriccion(e.target.value)}
        >
{opcionesRestriccion.map((op, idx) => (
  <option key={`${op}-${idx}`} value={op}>{op}</option>
))}
        </select>
      </div>

      {/* +1 */}
      {permitePlusOne && (
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={llevaPlusOne}
              onChange={(e) => setLlevaPlusOne(e.target.checked)}
            />
            Asistiré con mi acompañante
          </label>

          {llevaPlusOne && (
            <>
              <label className="block mt-2">Nombre del acompañante (opcional)</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                value={plusOneNombre}
                onChange={(e) => setPlusOneNombre(e.target.value)}
              />

              <label className="block mt-3 mb-1 font-medium">
                Restricción alimenticia del acompañante
              </label>
              <select
                className="w-full border rounded px-4 py-2"
                value={plusOneRestriccion}
                onChange={(e) => setPlusOneRestriccion(e.target.value)}
              >
                {opcionesRestriccion.map((op, idx) => (
  <option key={`${op}-${idx}`} value={op}>{op}</option>
))}
              </select>
            </>
          )}
        </div>
      )}
    </div>
  );
}
