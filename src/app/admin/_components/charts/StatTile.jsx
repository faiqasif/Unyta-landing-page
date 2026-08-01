"use client";

import { formatCompact, formatDelta } from "@/lib/admin/format";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";

/** 12-point sparkline: the run in the de-emphasis hue, the current point in the accent. */
function Sparkline({ points, width = 108, height = 30 }) {
  if (!points?.length) return null;
  const max = Math.max(...points, 1);
  const step = points.length > 1 ? width / (points.length - 1) : width;
  const coords = points.map((value, index) => [
    index * step,
    height - 3 - (value / max) * (height - 6),
  ]);
  const path = coords.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg width={width} height={height} aria-hidden className="overflow-visible">
      <path d={path} fill="none" stroke="var(--viz-deemph)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* 2px surface ring keeps the end marker legible where it crosses the line */}
      <circle cx={lastX} cy={lastY} r="4" fill="var(--series-1)" stroke="var(--viz-surface)" strokeWidth="2" />
    </svg>
  );
}

export function StatTile({ label, value, delta, deltaPeriod, sparkline, hero = false }) {
  const deltaText = formatDelta(delta);
  const isUp = (delta ?? 0) > 0;
  const isFlat = delta === null || delta === undefined || Math.round(delta) === 0;

  return (
    <div className="viz-root flex h-full flex-col rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
      <p className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-[#741717]">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p
          className={`font-sans font-semibold leading-none text-[#22000C] ${
            hero ? "text-[44px] sm:text-[52px]" : "text-[30px] sm:text-[34px]"
          }`}
        >
          {formatCompact(value)}
        </p>
        {sparkline && <Sparkline points={sparkline} />}
      </div>
      <div className="mt-3 flex min-h-[18px] items-center gap-1.5">
        {delta === undefined ? null : deltaText && !isFlat ? (
          <>
            {isUp ? (
              <ArrowUpIcon
                width={14}
                height={14}
                style={{ color: "var(--status-good)" }}
              />
            ) : (
              <ArrowDownIcon
                width={14}
                height={14}
                style={{ color: "var(--status-critical)" }}
              />
            )}
            <span
              className="font-sans text-xs font-semibold tabular-nums"
              style={{ color: isUp ? "var(--status-good)" : "var(--status-critical)" }}
            >
              {deltaText}
            </span>
          </>
        ) : (
          <span className="font-sans text-xs font-light text-stone-400">
            {delta === null ? "New activity" : "No change"}
          </span>
        )}
        {delta !== undefined && deltaPeriod && (
          <span className="font-sans text-xs font-light text-stone-500">vs {deltaPeriod}</span>
        )}
      </div>
    </div>
  );
}
