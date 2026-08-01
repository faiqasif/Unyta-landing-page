const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const shortDayFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
});

export function formatDate(date) {
  return date ? dateFormatter.format(date) : "—";
}

export function formatDateTime(date) {
  return date ? dateTimeFormatter.format(date) : "—";
}

export function formatShortDay(date) {
  return date ? shortDayFormatter.format(date) : "";
}

export function formatRelative(date, now = new Date()) {
  if (!date) return "—";
  const seconds = Math.round((now - date) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(date);
}

/** Auto-compact for stat tiles: 1,284 / 12.9K / 4.2M */
export function formatCompact(value) {
  if (value === null || value === undefined) return "—";
  if (Math.abs(value) < 1000) return String(value);
  if (Math.abs(value) < 1_000_000) {
    const thousands = value / 1000;
    return `${thousands >= 10 ? Math.round(thousands) : thousands.toFixed(1)}K`;
  }
  return `${(value / 1_000_000).toFixed(1)}M`;
}

export function formatDelta(percent) {
  if (percent === null || percent === undefined) return null;
  const rounded = Math.round(percent);
  if (rounded === 0) return "0%";
  return `${rounded > 0 ? "+" : ""}${rounded}%`;
}

function csvCell(value) {
  if (value === null || value === undefined) return "";
  const text = value instanceof Date ? dateTimeFormatter.format(value) : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/** Downloads `rows` as CSV using the visible table columns. */
export function downloadCsv(filename, columns, rows) {
  const header = columns.map((column) => csvCell(column.header)).join(",");
  const body = rows
    .map((row) => columns.map((column) => csvCell(column.csv(row))).join(","))
    .join("\n");
  const blob = new Blob([`${header}\n${body}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
