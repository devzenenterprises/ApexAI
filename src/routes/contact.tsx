import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ApexAI Consultancy" },
      { name: "description", content: "Get in touch with ApexAI Consultancy Solutions. Phone, email, office address and a modern contact form." },
      { property: "og:title", content: "Contact ApexAI" },
      { property: "og:description", content: "Reach us by phone, email or the contact form." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's build <span className="gradient-text">something great</span></>} subtitle="Tell us about your project and we'll be in touch within one business day." />

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-3">
        <aside className="lg:col-span-1 space-y-4">
          {[
            { icon: MapPin, title: "Office", body: <>Devzen Software, NH 216,<br/>Narsapuram, Andhra Pradesh – 534275, India</> },
            { icon: Phone, title: "Phone", body: <>+91 9848080910<br/>+91 9502724657</> },
            { icon: Mail, title: "Email", body: <a href="mailto:apexaiconsultancy@gmail.com" className="hover:text-brand">apexaiconsultancy@gmail.com</a> },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl glass p-6 shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-white"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </aside>

        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-elegant">
          {sent ? (
            <div className="text-center py-16">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-brand" />
              <h3 className="mt-4 text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">Thanks for reaching out — we'll respond within one business day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Phone" name="phone" error={errors.phone} />
              <Field label="Company" name="company" error={errors.company} />
              <div className="sm:col-span-2"><Field label="Subject" name="subject" error={errors.subject} /></div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea name="message" rows={6} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full btn-gradient btn-gradient-hover px-6 py-3 text-sm font-semibold shadow-elegant">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="ApexAI Office Location"
            src="https://www.google.com/maps?q=Narsapuram,+Andhra+Pradesh+534275&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input name={name} type={type} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
