"use client";

import { useState } from "react";

const RAMP = ["var(--ord-1)", "var(--ord-2)", "var(--ord-3)", "var(--ord-4)", "var(--ord-5)"];

/**
 * Ordered buckets (location bands, campaign volume), so the colour is an ordinal
 * one-hue ramp — swapping the bucket order would change the meaning, and the
 * reader should see that order in the colour. Values ride the caps.
 */
export function OrdinalColumns({ rows, emptyLabel = "No data yet", height = 132 }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const max = Math.max(...rows.map((row) => row.value), 1);
  const total = rows.reduce((sum, row) => sum + row.value, 0);

  if (!rows.length || total === 0) {
    return <p className="py-6 text-center font-sans text-sm font-light text-stone-500">{emptyLabel}</p>;
  }

  return (
    <div className="viz-root flex items-end justify-between gap-2 sm:gap-3">
      {rows.map((row, index) => {
        const active = activeLabel === row.label;
        const barHeight = row.value > 0 ? Math.max((row.value / max) * height, 4) : 2;
        return (
          <button
            key={row.label}
            type="button"
            onPointerEnter={() => setActiveLabel(row.label)}
            onPointerLeave={() => setActiveLabel(null)}
            onFocus={() => setActiveLabel(row.label)}
            onBlur={() => setActiveLabel(null)}
            aria-label={`${row.label}: ${row.value}`}
            className="group flex min-w-0 flex-1 flex-col items-center gap-1.5"
          >
            <span className="font-sans text-xs font-semibold tabular-nums text-[#22000C]">
              {row.value}
            </span>
            <span className="flex w-full justify-center" style={{ height }}>
              <span
                aria-hidden
                className="mt-auto w-full max-w-[24px] rounded-t-[4px] transition-opacity"
                style={{
                  height: barHeight,
                  background: row.value > 0 ? RAMP[index % RAMP.length] : "var(--viz-grid)",
                  opacity: activeLabel && !active ? 0.55 : 1,
                }}
              />
            </span>
            <span className="w-full border-t border-[var(--viz-axis)] pt-1.5 font-sans text-[11px] font-light text-stone-500">
              {row.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
