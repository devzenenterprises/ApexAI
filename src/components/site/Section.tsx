import type { ReactNode } from "react";

export function Section({ eyebrow, title, subtitle, children, className = "" }: { eyebrow?: string; title?: ReactNode; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto max-w-3xl text-center mb-12">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-brand">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>}
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
