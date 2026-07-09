import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/apex.png";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.16_0.04_258)] text-white">
      <div className="absolute inset-x-0 -top-px h-px gradient-bg" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="ApexAI" className="h-12 w-auto bg-white rounded-lg p-1" />
            <span className="font-display font-bold text-lg">APEXAI</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            AI, SAP & Digital Transformation partner for enterprises. Consultancy Solutions Private Limited.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ["/services", "Services"],
              ["/sap-services", "SAP Services"],
              ["/software-development", "Software Development"],
              ["/web-development", "Web Development"],
              ["/consulting", "Consulting"],
              ["/training", "Training"],
              ["/placements", "Placements"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-cyan-brand transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-cyan-brand">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-brand">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-cyan-brand" /><span>Devzen Software, NH 216, Narsapuram, Andhra Pradesh – 534275, India</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-cyan-brand" /><span>+91 9848080910<br/>+91 9502724657</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-cyan-brand" /><a href="mailto:apexaiconsultancy@gmail.com" className="hover:text-cyan-brand">apexaiconsultancy@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/60 text-center">
          © 2026 APEXAI CONSULTANCY SOLUTIONS PRIVATE LIMITED. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
