"use client";

import { useState } from "react";
import { formatShortDay } from "@/lib/admin/format";
import { ChartTooltip } from "./ChartTooltip";
import {
  MARK_MAX_THICKNESS,
  SURFACE_GAP,
  niceScale,
  roundedTopRect,
  useElementWidth,
} from "./chartUtils";

const PADDING = { top: 12, right: 8, bottom: 30, left: 34 };

function bucketLabel(bucket) {
  return bucket.bucketDays > 1
    ? `${formatShortDay(bucket.start)} – ${formatShortDay(bucket.end)}`
    : formatShortDay(bucket.start);
}

export function SubmissionsTrend({ buckets, series, height = 260 }) {
  const [containerRef, width] = useElementWidth();
  const [tooltip, setTooltip] = useState(null);
  const [view, setView] = useState("chart");

  const plotWidth = Math.max(120, width - PADDING.left - PADDING.right);
  const plotHeight = height - PADDING.top - PADDING.bottom;
  const { max, ticks } = niceScale(Math.max(...buckets.map((b) => b.total), 0));
  const slotWidth = plotWidth / Math.max(buckets.length, 1);
  const barWidth = Math.min(MARK_MAX_THICKNESS, Math.max(3, slotWidth - SURFACE_GAP * 2));
  const scaleY = (value) => (value / max) * plotHeight;

  // Label every nth bucket so x-axis ticks never collide.
  const labelStride = Math.max(1, Math.ceil(buckets.length / Math.max(3, Math.floor(plotWidth / 64))));

  return (
    <div className="viz-root">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {/* Legend — always present for two or more series */}
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {series.map((item) => (
            <li key={item.key} className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-[2px]"
                style={{ background: item.color }}
              />
              <span className="font-sans text-xs font-light text-stone-600">{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 rounded-full border border-stone-200 p-0.5">
          {["chart", "table"].map((option) => (
            <button
              key={option}
              onClick={() => setView(option)}
              aria-pressed={view === option}
              className={`rounded-full px-3 py-1 font-sans text-[11px] font-medium capitalize transition-colors ${
                view === option ? "bg-[#741717] text-white" : "text-stone-500 hover:text-[#741717]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {view === "table" ? (
        <div className="max-h-[260px] overflow-y-auto rounded-2xl border border-stone-200">
          <table className="w-full border-collapse text-left">
            <thead className="sticky top-0 bg-[#F5F2F1]">
              <tr>
                <th className="px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-stone-500">
                  Period
                </th>
                {series.map((item) => (
                  <th
                    key={item.key}
                    className="px-4 py-2.5 text-right font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-stone-500"
                  >
                    {item.label}
                  </th>
                ))}
                <th className="px-4 py-2.5 text-right font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-stone-500">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {buckets.map((bucket) => (
                <tr key={bucket.start.toISOString()} className="border-t border-stone-100">
                  <td className="px-4 py-2 font-sans text-xs text-stone-600">{bucketLabel(bucket)}</td>
                  {series.map((item) => (
                    <td
                      key={item.key}
                      className="px-4 py-2 text-right font-sans text-xs tabular-nums text-[#22000C]"
                    >
                      {bucket.values[item.key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 text-right font-sans text-xs font-semibold tabular-nums text-[#22000C]">
                    {bucket.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div ref={containerRef} className="relative w-full">
          <ChartTooltip tooltip={tooltip} containerWidth={width} />
          <svg
            width={width}
            height={height}
            role="img"
            aria-label="Form submissions per period by source"
            className="block"
          >
            {/* Gridlines & y ticks — solid hairlines, one step off the surface */}
            {ticks.map((tick) => {
              const y = PADDING.top + plotHeight - scaleY(tick);
              return (
                <g key={tick}>
                  <line
                    x1={PADDING.left}
                    x2={PADDING.left + plotWidth}
                    y1={y}
                    y2={y}
                    stroke={tick === 0 ? "var(--viz-axis)" : "var(--viz-grid)"}
                    strokeWidth="1"
                  />
                  <text
                    x={PADDING.left - 8}
                    y={y + 3.5}
                    textAnchor="end"
                    className="font-sans"
                    style={{ fontSize: 10, fill: "var(--viz-muted)" }}
                  >
                    {tick.toLocaleString()}
                  </text>
                </g>
              );
            })}

            {buckets.map((bucket, index) => {
              const slotX = PADDING.left + index * slotWidth;
              const barX = slotX + (slotWidth - barWidth) / 2;
              let cursorY = PADDING.top + plotHeight;
              const activeSeries = series.filter((item) => bucket.values[item.key] > 0);

              return (
                <g key={bucket.start.toISOString()}>
                  {/* Hit target spans the whole slot, so the pointer never has to find a 3px bar */}
                  <rect
                    x={slotX}
                    y={PADDING.top}
                    width={slotWidth}
                    height={plotHeight}
                    fill="transparent"
                    tabIndex={0}
                    role="button"
                    aria-label={`${bucketLabel(bucket)}: ${bucket.total} submissions`}
                    className="cursor-pointer outline-none focus-visible:fill-[#741717]/5"
                    onPointerEnter={() =>
                      setTooltip({
                        x: slotX + slotWidth / 2,
                        y: PADDING.top + plotHeight - scaleY(bucket.total),
                        title: bucketLabel(bucket),
                        rows: [
                          ...series.map((item) => ({
                            label: item.label,
                            value: bucket.values[item.key],
                            color: item.color,
                          })),
                          { label: "Total", value: bucket.total },
                        ],
                      })
                    }
                    onFocus={() =>
                      setTooltip({
                        x: slotX + slotWidth / 2,
                        y: PADDING.top + plotHeight - scaleY(bucket.total),
                        title: bucketLabel(bucket),
                        rows: [
                          ...series.map((item) => ({
                            label: item.label,
                            value: bucket.values[item.key],
                            color: item.color,
                          })),
                          { label: "Total", value: bucket.total },
                        ],
                      })
                    }
                    onPointerLeave={() => setTooltip(null)}
                    onBlur={() => setTooltip(null)}
                  />

                  {activeSeries.map((item, seriesIndex) => {
                    const rawHeight = scaleY(bucket.values[item.key]);
                    const isTop = seriesIndex === activeSeries.length - 1;
                    // A 2px surface gap — not a stroke — separates touching segments.
                    const segmentHeight = Math.max(1, rawHeight - (isTop ? 0 : SURFACE_GAP));
                    const y = cursorY - rawHeight;
                    cursorY -= rawHeight;
                    return (
                      <path
                        key={item.key}
                        d={roundedTopRect(barX, y, barWidth, segmentHeight, isTop ? 4 : 0)}
                        fill={item.color}
                        className="pointer-events-none"
                      />
                    );
                  })}

                  {index % labelStride === 0 && (
                    <text
                      x={slotX + slotWidth / 2}
                      y={PADDING.top + plotHeight + 18}
                      textAnchor="middle"
                      className="font-sans"
                      style={{ fontSize: 10, fill: "var(--viz-muted)" }}
                    >
                      {formatShortDay(bucket.start)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
}
