import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/apex.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/sap-services", label: "SAP" },
  { to: "/software-development", label: "Software" },
  { to: "/web-development", label: "Web" },
  { to: "/consulting", label: "Consulting" },
  { to: "/training", label: "Training" },
  { to: "/placements", label: "Placements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="ApexAI Consultancy" className="h-10 w-auto" />
          <span className="hidden sm:block font-display font-bold text-brand leading-tight">
            APEX<span className="text-emerald-brand">AI</span>
          </span>
        </Link>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition hover:text-brand hover:bg-accent/60"
                activeProps={{ className: "text-brand bg-accent/70" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="hidden lg:inline-flex btn-gradient btn-gradient-hover rounded-full px-5 py-2 text-sm font-semibold">
          Get in touch
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <ul className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
                  activeProps={{ className: "text-brand bg-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
