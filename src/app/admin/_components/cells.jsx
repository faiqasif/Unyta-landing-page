"use client";

import { LinkIcon } from "./icons";

export function NameCell({ name, secondary }) {
  return (
    <span className="block min-w-0">
      <span className="block truncate font-medium text-[#22000C]">{name || "—"}</span>
      {secondary && (
        <span className="block truncate font-sans text-xs font-light text-stone-500">{secondary}</span>
      )}
    </span>
  );
}

export function EmailCell({ email }) {
  if (!email) return <span className="text-stone-400">—</span>;
  return (
    <a
      href={`mailto:${email}`}
      className="block max-w-[220px] truncate font-light text-stone-600 underline decoration-stone-300 underline-offset-2 transition-colors hover:text-[#741717] hover:decoration-[#741717]"
    >
      {email}
    </a>
  );
}

export function InstagramCell({ handle }) {
  if (!handle) return <span className="text-stone-400">—</span>;
  return (
    <a
      href={`https://instagram.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-light text-stone-600 transition-colors hover:text-[#741717]"
    >
      @{handle}
    </a>
  );
}

export function WebsiteCell({ url }) {
  if (!url) return <span className="text-stone-400">—</span>;
  const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  const display = url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-[200px] items-center gap-1.5 font-light text-stone-600 transition-colors hover:text-[#741717]"
    >
      <LinkIcon width={14} height={14} className="shrink-0 text-stone-400" />
      <span className="truncate">{display}</span>
    </a>
  );
}

export function Tag({ children, tone = "neutral" }) {
  const tones = {
    neutral: "border-stone-200 bg-[#F5F2F1] text-stone-600",
    brand: "border-[#741717]/20 bg-[#F1E8E8] text-[#741717]",
  };
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 font-sans text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
