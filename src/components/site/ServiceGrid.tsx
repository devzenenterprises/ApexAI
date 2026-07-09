import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

export function ServiceGrid({ items, icon: DefaultIcon = Sparkles }: { items: Array<string | { title: string; desc?: string; icon?: LucideIcon }>; icon?: LucideIcon }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const item = typeof it === "string" ? { title: it } : it;
        const Icon = item.icon ?? DefaultIcon;
        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,#27D3FF33,transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-bg text-white shadow-elegant">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                {item.desc && <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
