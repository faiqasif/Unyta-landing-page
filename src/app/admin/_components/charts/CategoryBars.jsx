"use client";

import { useState } from "react";

/**
 * Nominal categories (industries), so every bar wears the same slot-1 hue — bar
 * length already encodes magnitude and a value ramp would spend the identity
 * channel re-encoding it. Values are direct-labelled at the tip, which also
 * satisfies the contrast relief rule. Hover/focus adds share of total.
 */
export function CategoryBars({ rows, emptyLabel = "No data yet" }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const max = Math.max(...rows.map((row) => row.value), 1);
  const total = rows.reduce((sum, row) => sum + row.value, 0);

  if (!rows.length || total === 0) {
    return <p className="py-6 text-center font-sans text-sm font-light text-stone-500">{emptyLabel}</p>;
  }

  return (
    <ul className="viz-root flex flex-col gap-1">
      {rows.map((row) => {
        const active = activeLabel === row.label;
        const share = Math.round((row.value / total) * 100);
        return (
          <li key={row.label}>
            <button
              type="button"
              onPointerEnter={() => setActiveLabel(row.label)}
              onPointerLeave={() => setActiveLabel(null)}
              onFocus={() => setActiveLabel(row.label)}
              onBlur={() => setActiveLabel(null)}
              aria-label={`${row.label}: ${row.value} (${share}% of total)`}
              className={`flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left transition-colors ${
                active ? "bg-[#F5F2F1]" : "bg-transparent"
              }`}
            >
              <span className="w-[88px] shrink-0 truncate font-sans text-xs font-light text-stone-600 sm:w-[112px] sm:text-[13px]">
                {row.label}
              </span>
              <span className="relative flex h-6 min-w-0 flex-1 items-center">
                <span
                  aria-hidden
                  className="h-[18px] rounded-r-[4px] transition-[width] duration-300"
                  style={{
                    width: `${Math.max((row.value / max) * 100, row.value > 0 ? 1.5 : 0)}%`,
                    background: "var(--series-1)",
                  }}
                />
              </span>
              <span className="flex shrink-0 items-baseline gap-1.5">
                <span className="font-sans text-sm font-semibold tabular-nums text-[#22000C]">
                  {row.value}
                </span>
                <span
                  className={`font-sans text-[11px] tabular-nums text-stone-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {share}%
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
