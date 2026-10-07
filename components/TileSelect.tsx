"use client";

export type TileOption = { value: string; title: string; sample?: string };

export function TileSelect({
  options, value, onChange, columns = 1, label,
}: {
  options: TileOption[]; value: string; onChange: (v: string) => void; columns?: 1 | 2; label: string;
}) {
  return (
    <div className={`tilesel ${columns === 2 ? "two" : ""}`} role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
          <b>{o.title}</b>
          {o.sample && <span>{o.sample}</span>}
        </button>
      ))}
    </div>
  );
}
