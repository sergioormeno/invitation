"use client";

import CustomSelect from "@/components/min/CustomSelect";

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
  "Celíaco"
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
    <div className="space-y-6 text-left">
      <CustomSelect
        label="Tu restricción alimenticia"
        options={opcionesRestriccion}
        selected={restriccion}
        setSelected={setRestriccion}
      />

      {permitePlusOne && (
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[var(--color-white)]">
            <input
              type="checkbox"
              checked={llevaPlusOne}
              onChange={(e) => setLlevaPlusOne(e.target.checked)}
            />
            Asistiré con mi acompañante
          </label>

          {llevaPlusOne && (
            <>
<label className="block mt-2 text-sm font-medium text-[var(--color-white)]">
  Nombre del acompañante (opcional)
</label>
<input
  type="text"
  className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-[var(--color-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
  value={plusOneNombre}
  onChange={(e) => setPlusOneNombre(e.target.value)}
  placeholder="Ej: Camila"
/>



              <CustomSelect
                label="Restricción alimenticia del acompañante"
                options={opcionesRestriccion}
                selected={plusOneRestriccion}
                setSelected={setPlusOneRestriccion}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
