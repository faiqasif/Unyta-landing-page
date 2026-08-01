"use client";

import { cn } from "@/lib/utils";

export const inputClassName =
  "w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] bg-white px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm appearance-none disabled:bg-stone-50 disabled:text-stone-400";

export function PageHeader({ title, subtitle, children }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-cormorant text-[30px] font-medium uppercase leading-tight tracking-tight text-[#22000C] sm:text-[40px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 font-sans text-sm font-light text-stone-600 sm:text-base">{subtitle}</p>
        )}
      </div>
      {children && <div className="flex flex-wrap items-center gap-2.5">{children}</div>}
    </div>
  );
}

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm sm:p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeading({ title, subtitle, children }) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 className="font-cormorant text-[22px] font-medium uppercase leading-tight tracking-tight text-[#22000C] sm:text-[26px]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-0.5 font-sans text-xs font-light text-stone-500 sm:text-sm">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

export function PillButton({ className, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-[#741717] text-white hover:bg-[#541409] shadow-sm",
    secondary: "bg-white text-[#741717] border border-[#C7C7CB] hover:border-[#741717]",
    ghost: "bg-transparent text-stone-600 hover:bg-stone-100 hover:text-[#741717]",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-sans text-xs font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 sm:text-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-[0.08em] text-[#741717]">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1.5 block font-sans text-xs font-light text-stone-500">{hint}</span>}
    </label>
  );
}

export function Alert({ tone = "error", children }) {
  const tones = {
    error: "bg-red-50 text-red-800",
    success: "bg-[#F1E8E8] text-[#541409]",
    info: "bg-stone-50 text-stone-600",
  };
  return (
    <p
      role={tone === "error" ? "alert" : "status"}
      className={cn("rounded-2xl px-4 py-2.5 text-center font-sans text-xs sm:text-sm", tones[tone])}
    >
      {children}
    </p>
  );
}

export function EmptyState({ title, body }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] border border-dashed border-stone-300 bg-[#F5F2F1]/60 px-6 py-12 text-center">
      <p className="font-cormorant text-[22px] font-medium uppercase tracking-tight text-[#22000C]">
        {title}
      </p>
      {body && <p className="mt-1 max-w-[420px] font-sans text-sm font-light text-stone-500">{body}</p>}
    </div>
  );
}

export function Spinner({ className }) {
  return (
    <span
      className={cn(
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current/25 border-t-current",
        className
      )}
      aria-hidden
    />
  );
}

export function SkeletonRows({ rows = 5 }) {
  return (
    <div className="space-y-2.5" aria-hidden>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-11 animate-pulse rounded-2xl bg-stone-100" />
      ))}
    </div>
  );
}
