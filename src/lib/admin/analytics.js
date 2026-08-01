const DAY_MS = 24 * 60 * 60 * 1000;

export const RANGE_PRESETS = [
  { id: "7", label: "Last 7 days", days: 7 },
  { id: "30", label: "Last 30 days", days: 30 },
  { id: "90", label: "Last 90 days", days: 90 },
  { id: "all", label: "All time", days: null },
];

export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Inclusive lower bound for a preset, or null for "all time". */
export function rangeStart(days, now = new Date()) {
  if (!days) return null;
  return new Date(startOfDay(now).getTime() - (days - 1) * DAY_MS);
}

export function withinRange(rows, days, now = new Date()) {
  const start = rangeStart(days, now);
  if (!start) return rows;
  return rows.filter((row) => row.createdAt && row.createdAt >= start);
}

/** Rows from the window immediately before the current one — the delta baseline. */
export function previousWindow(rows, days, now = new Date()) {
  if (!days) return [];
  const start = rangeStart(days, now);
  const previousStart = new Date(start.getTime() - days * DAY_MS);
  return rows.filter(
    (row) => row.createdAt && row.createdAt >= previousStart && row.createdAt < start
  );
}

export function percentChange(current, previous) {
  if (!previous) return current > 0 ? null : 0;
  return ((current - previous) / previous) * 100;
}

/**
 * One bucket per day across the window, so gaps render as real zeros rather than
 * collapsing the x-axis. Buckets are widened to weeks past ~45 days to keep the
 * columns readable.
 */
export function timeSeries(seriesMap, days, now = new Date()) {
  const keys = Object.keys(seriesMap);
  const allDates = keys.flatMap((key) =>
    seriesMap[key].map((row) => row.createdAt).filter(Boolean)
  );

  let start;
  if (days) {
    start = rangeStart(days, now);
  } else if (allDates.length) {
    start = startOfDay(new Date(Math.min(...allDates.map((d) => d.getTime()))));
  } else {
    start = rangeStart(30, now);
  }

  const end = startOfDay(now);
  const totalDays = Math.max(1, Math.round((end - start) / DAY_MS) + 1);
  const bucketDays = totalDays > 45 ? 7 : 1;
  const bucketCount = Math.ceil(totalDays / bucketDays);

  const buckets = Array.from({ length: bucketCount }, (_, index) => {
    const bucketStart = new Date(start.getTime() + index * bucketDays * DAY_MS);
    const bucketEnd = new Date(bucketStart.getTime() + bucketDays * DAY_MS);
    const values = {};
    for (const key of keys) {
      values[key] = seriesMap[key].filter(
        (row) => row.createdAt && row.createdAt >= bucketStart && row.createdAt < bucketEnd
      ).length;
    }
    return {
      start: bucketStart,
      end: new Date(bucketEnd.getTime() - 1),
      bucketDays,
      values,
      total: keys.reduce((sum, key) => sum + values[key], 0),
    };
  });

  return { buckets, bucketDays };
}

/** Evenly spaced counts for a stat-tile sparkline. */
export function sparkline(rows, days, points = 12, now = new Date()) {
  const start = rangeStart(days, now) ?? rangeStart(30, now);
  const end = startOfDay(now).getTime() + DAY_MS;
  const step = Math.max(DAY_MS, (end - start.getTime()) / points);
  return Array.from({ length: points }, (_, index) => {
    const from = start.getTime() + index * step;
    const to = from + step;
    return rows.filter(
      (row) => row.createdAt && row.createdAt.getTime() >= from && row.createdAt.getTime() < to
    ).length;
  });
}

/** Counts per distinct value of `key`, largest first. `order` keeps ordinal buckets in sequence. */
export function countBy(rows, key, order = null) {
  const counts = new Map();
  for (const row of rows) {
    const value = row[key];
    if (value === undefined || value === null || value === "") continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  if (order) {
    return order.map((value) => ({ label: value, value: counts.get(value) ?? 0 }));
  }
  return [...counts.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

/** The newest N rows across every source, tagged with where they came from. */
export function recentActivity(seriesMap, limit = 8) {
  return Object.entries(seriesMap)
    .flatMap(([source, rows]) => rows.map((row) => ({ ...row, source })))
    .filter((row) => row.createdAt)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, limit);
}
