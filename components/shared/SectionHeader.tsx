import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {label && (
        <div
          className={cn(
            "inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5",
            light ? "text-sky-300" : "text-brand-sky"
          )}
        >
          <span
            className={cn(
              "block w-8 h-px",
              light ? "bg-sky-300/60" : "bg-brand-sky/60"
            )}
          />
          {label}
          <span
            className={cn(
              "block w-8 h-px",
              light ? "bg-sky-300/60" : "bg-brand-sky/60"
            )}
          />
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-slate-300" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
