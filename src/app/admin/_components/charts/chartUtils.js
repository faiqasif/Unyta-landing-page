"use client";

import { useEffect, useRef, useState } from "react";

/** Measures the rendered width of a container so SVG charts scale without distortion. */
export function useElementWidth(fallback = 640) {
  const ref = useRef(null);
  const [width, setWidth] = useState(fallback);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver((entries) => {
      const measured = entries[0]?.contentRect?.width;
      if (measured) setWidth(measured);
    });
    observer.observe(element);
    setWidth(element.getBoundingClientRect().width || fallback);
    return () => observer.disconnect();
  }, [fallback]);

  return [ref, width];
}

/**
 * Axis ticks rounded to clean numbers, so ticks can carry the values we don't
 * label. Counts are whole numbers, so the step never goes below 1.
 */
export function niceScale(maxValue, tickCount = 4) {
  const max = Math.max(1, maxValue);
  const rawStep = max / tickCount;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const candidates = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).filter((s) => s >= 1);
  const step = candidates.find((s) => s >= rawStep) ?? Math.max(1, magnitude * 10);
  const niceMax = Math.ceil(max / step) * step;
  const ticks = [];
  for (let value = 0; value <= niceMax + step / 2; value += step) {
    ticks.push(Math.round(value * 100) / 100);
  }
  return { max: niceMax, ticks };
}

/** Rect with rounded data-end at the top, square at the baseline. */
export function roundedTopRect(x, y, width, height, radius = 4) {
  const r = Math.max(0, Math.min(radius, height, width / 2));
  if (height <= 0) return "";
  return [
    `M ${x} ${y + height}`,
    `L ${x} ${y + r}`,
    `Q ${x} ${y} ${x + r} ${y}`,
    `L ${x + width - r} ${y}`,
    `Q ${x + width} ${y} ${x + width} ${y + r}`,
    `L ${x + width} ${y + height}`,
    "Z",
  ].join(" ");
}

/** Rect with rounded data-end at the right, square at the baseline. */
export function roundedEndRect(x, y, width, height, radius = 4) {
  const r = Math.max(0, Math.min(radius, width, height / 2));
  if (width <= 0) return "";
  return [
    `M ${x} ${y}`,
    `L ${x + width - r} ${y}`,
    `Q ${x + width} ${y} ${x + width} ${y + r}`,
    `L ${x + width} ${y + height - r}`,
    `Q ${x + width} ${y + height} ${x + width - r} ${y + height}`,
    `L ${x} ${y + height}`,
    "Z",
  ].join(" ");
}

export const MARK_MAX_THICKNESS = 24;
export const SURFACE_GAP = 2;
