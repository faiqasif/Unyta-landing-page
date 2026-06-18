import { cn } from "@/lib/utils";

export const Button = ({ className, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-background text-foreground border border-foreground/10 hover:bg-neutral-50",
    ghost: "bg-transparent text-foreground hover:bg-neutral-50",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
