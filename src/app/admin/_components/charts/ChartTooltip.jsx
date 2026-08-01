"use client";

/**
 * Hover/focus readout. Values lead, labels follow; series are keyed with a short
 * stroke of the series color rather than a filled box.
 */
export function ChartTooltip({ tooltip, containerWidth }) {
  if (!tooltip) return null;

  const width = 172;
  const left = Math.min(Math.max(tooltip.x - width / 2, 4), Math.max(containerWidth - width - 4, 4));
  // Flip below the mark when there is not enough room above it, so a tall bar's
  // readout never spills over the card heading.
  const estimatedHeight = 44 + tooltip.rows.length * 20;
  const flipBelow = tooltip.y - estimatedHeight < 0;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{ left, top: flipBelow ? tooltip.y + 14 : Math.max(tooltip.y - 12, 4), width }}
      className={`pointer-events-none absolute z-20 rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 shadow-xl ${
        flipBelow ? "" : "-translate-y-full"
      }`}
    >
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-stone-500">
        {tooltip.title}
      </p>
      <ul className="mt-1.5 space-y-1">
        {tooltip.rows.map((row) => (
          <li key={row.label} className="flex items-center gap-2">
            {row.color && (
              <span
                aria-hidden
                className="h-[2px] w-3.5 shrink-0 rounded-full"
                style={{ background: row.color }}
              />
            )}
            <span className="font-sans text-sm font-semibold tabular-nums text-[#22000C]">
              {row.value}
            </span>
            <span className="truncate font-sans text-xs font-light text-stone-500">{row.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
