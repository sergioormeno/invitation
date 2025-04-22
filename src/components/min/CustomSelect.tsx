"use client";

export default function CustomSelect({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <div className="w-full text-left">
      <label className="block mb-1 text-sm font-medium text-[var(--color-white)]">
        {label}
      </label>

      <select
        className="w-full bg-white text-[var(--color-text)] border border-gray-300 rounded px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((op, idx) => (
          <option key={`${op}-${idx}`} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
