"use client";

import { RANGE_PRESETS } from "@/lib/admin/analytics";

/** One filter row above everything it scopes — presets before any custom range. */
export function RangeFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-1 rounded-full border border-stone-200 bg-white p-1 shadow-sm">
      {RANGE_PRESETS.map((preset) => {
        const active = preset.id === value;
        return (
          <button
            key={preset.id}
            onClick={() => onChange(preset.id)}
            aria-pressed={active}
            className={`rounded-full px-3.5 py-2 font-sans text-xs font-medium transition-colors sm:text-[13px] ${
              active
                ? "bg-[#741717] text-white"
                : "text-stone-500 hover:bg-[#F5F2F1] hover:text-[#741717]"
            }`}
          >
            {preset.label}
          </button>
        );
      })}
    </div>
  );
}
