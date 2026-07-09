import type { ReactNode } from "react";
import { AIBackground } from "./AIBackground";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <AIBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand shadow-elegant">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand animate-pulse-glow" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
