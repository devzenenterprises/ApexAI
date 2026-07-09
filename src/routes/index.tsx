import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Bot, Cloud, Code2, Globe, GraduationCap, Briefcase,
  ShieldCheck, Rocket, HeartHandshake, Clock, Users, Award,
  Cpu, Database, Boxes, CircuitBoard, Star, Quote, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { AIBackground } from "@/components/site/AIBackground";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import logo from "@/assets/apex.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ApexAI Consultancy — AI, SAP & Digital Innovation" },
      { name: "description", content: "Transforming businesses with AI, SAP and Digital Innovation. Enterprise AI, SAP consulting, software, web, training and placements." },
      { property: "og:title", content: "ApexAI Consultancy — AI, SAP & Digital Innovation" },
      { property: "og:description", content: "Transforming businesses with AI, SAP and Digital Innovation." },
    ],
  }),
  component: Home,
});

const mainServices = [
  { title: "AI Solutions", desc: "Generative AI, chatbots, automation and custom ML applications.", icon: Bot, to: "/services" },
  { title: "SAP Services", desc: "CPI, BTP, S/4HANA, Integration Suite, Fiori, ABAP and more.", icon: Cloud, to: "/sap-services" },
  { title: "Software Development", desc: "Enterprise apps, APIs, cloud-native systems, integrations.", icon: Code2, to: "/software-development" },
  { title: "Web Development", desc: "Corporate, e-commerce, React, Angular, Node, WordPress.", icon: Globe, to: "/web-development" },
  { title: "IT Consulting", desc: "Digital transformation, cloud strategy, architecture design.", icon: Briefcase, to: "/consulting" },
  { title: "Training & Placements", desc: "SAP, AI, cloud, live projects, placements & career support.", icon: GraduationCap, to: "/training" },
] as const;

const whyUs = [
  { icon: Users, title: "Experienced Professionals" },
  { icon: Bot, title: "AI Expertise" },
  { icon: Award, title: "SAP Certified Consultants" },
  { icon: Rocket, title: "End-to-End Solutions" },
  { icon: HeartHandshake, title: "Affordable Pricing" },
  { icon: Clock, title: "On-Time Delivery" },
  { icon: ShieldCheck, title: "24×7 Support" },
  { icon: Sparkles, title: "Customer Satisfaction" },
];

const technologies = ["SAP", "SAP CPI", "SAP BTP", "OpenAI", "Azure", "AWS", "Google Cloud", "Python", "Java", "Spring Boot", "React", "Angular", "Vue", "Node.js", "Docker", "Kubernetes", "Git", "MySQL", "Oracle", "MongoDB"];


const portfolio = [
  { title: "AI Chatbot Platform", tag: "Generative AI", desc: "Multi-tenant chatbot with RAG for enterprise support." },
  { title: "SAP CPI Integration", tag: "SAP", desc: "End-to-end iFlow orchestration across S/4 and third-party APIs." },
  { title: "ERP Migration", tag: "SAP BTP", desc: "PI/PO to Integration Suite migration for a global manufacturer." },
  { title: "Corporate Website", tag: "Web", desc: "High-performance CMS-driven brand site with SEO." },
  { title: "E-Commerce Platform", tag: "Web", desc: "Headless commerce with real-time inventory & payments." },
  { title: "HR Management System", tag: "Software", desc: "Custom HRMS with SuccessFactors integration." },
  { title: "Business Automation", tag: "AI", desc: "Workflow automation reducing manual ops by 70%." },
  { title: "Cloud Migration", tag: "Cloud", desc: "Lift-and-shift to Azure with cost optimization." },
];

const testimonials = [
  { name: "Rakesh Menon", role: "CTO, FinEdge", quote: "ApexAI delivered our SAP CPI integrations ahead of schedule with impeccable quality.", avatar: "https://i.pravatar.cc/80?img=12" },
  { name: "Priya Sharma", role: "Head of Digital, MediCore", quote: "Their AI chatbot cut our support workload in half. True partners in innovation.", avatar: "https://i.pravatar.cc/80?img=47" },
  { name: "Daniel Osei", role: "VP Engineering, LogiTrace", quote: "From strategy to delivery, ApexAI runs like an extension of our own team.", avatar: "https://i.pravatar.cc/80?img=32" },
];

const faqs = [
  { q: "What services does ApexAI provide?", a: "AI solutions, SAP consulting & implementation, software and web development, IT consulting, corporate training and placement services." },
  { q: "Do you offer end-to-end SAP implementations?", a: "Yes — from advisory and architecture through migration, integration, Fiori development and managed support." },
  { q: "Can you build custom AI applications?", a: "Absolutely. We design generative AI, chatbots, ML models and workflow automation tailored to your business." },
  { q: "Do you provide training with placement?", a: "Yes. Our training programs include live projects, certification guidance, interview prep and placement assistance." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <AIBackground dense />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand shadow-elegant">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand animate-pulse-glow" />
              AI · SAP · Cloud · Digital
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Transforming Businesses with{" "}
              <span className="gradient-text">AI, SAP & Digital Innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Delivering cutting-edge AI solutions, SAP consulting, software development, web development, corporate training, and placement services to help businesses accelerate digital transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full btn-gradient btn-gradient-hover px-6 py-3 text-sm font-semibold shadow-elegant">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-brand hover:bg-white/90 transition">
                Contact Us
              </Link>
            </div>
            <dl className="mt-12 grid max-w-sm grid-cols-2 gap-6">
              {[["120+", "Projects"], ["40+", "Consultants"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-bold gradient-text">{n}</dt>
                  <dd className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[2rem] gradient-bg opacity-20 blur-3xl animate-pulse-glow" />
              <div className="relative h-full w-full rounded-[2rem] glass p-8 shadow-elegant overflow-hidden">
                {/* Neural network */}
                <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0B5EA8" />
                      <stop offset="100%" stopColor="#00C897" />
                    </linearGradient>
                  </defs>
                  {[
                    [60, 60], [60, 150], [60, 240],
                    [150, 90], [150, 210],
                    [240, 60], [240, 150], [240, 240],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="6" fill="url(#lg)">
                        <animate attributeName="r" values="5;8;5" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}
                  {[
                    [60, 60, 150, 90], [60, 150, 150, 90], [60, 150, 150, 210], [60, 240, 150, 210],
                    [150, 90, 240, 60], [150, 90, 240, 150], [150, 210, 240, 150], [150, 210, 240, 240],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lg)" strokeWidth="1.2" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
                    </line>
                  ))}
                </svg>
                <div className="absolute inset-0 grid place-items-center p-12">
                  <img src={logo} alt="ApexAI" className="max-h-full max-w-full object-contain animate-float" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-brand animate-pulse-glow" />
                    <span className="font-semibold">AI Engine Active</span>
                  </div>
                  <span className="text-muted-foreground">99.9% uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section eyebrow="What we do" title="Our Services" subtitle="From strategy to scale — a full-stack partner for enterprise AI, SAP and digital initiatives.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((s) => (
            <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 card-hover">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[radial-gradient(circle,#27D3FF33,transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white shadow-elegant">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ABOUT strip */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 soft-bg opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-3">
          {[
            { title: "Who We Are", body: "ApexAI is a technology consulting company specializing in AI, SAP, Cloud, Software Development, and Digital Transformation.", icon: Sparkles },
            { title: "Our Mission", body: "Empowering businesses through innovative technology solutions that drive measurable outcomes.", icon: Rocket },
            { title: "Our Vision", body: "To become a global leader in AI and SAP consulting services trusted by ambitious enterprises.", icon: Award },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl glass p-8 shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white"><c.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <Section eyebrow="Why choose us" title="Why Choose ApexAI">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-6 text-center card-hover">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-bg text-white shadow-elegant">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{w.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* TECHNOLOGIES */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <Section eyebrow="Tech stack" title="Technologies We Master">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((t) => (
              <div key={t} className="rounded-full glass px-5 py-2.5 text-sm font-semibold text-brand hover:shadow-glow transition">
                {t}
              </div>
            ))}
          </div>
        </Section>
      </section>


      {/* PORTFOLIO */}
      <Section eyebrow="Portfolio" title="Recent Work">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card card-hover">
              <div className="relative h-40 gradient-bg overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  {p.tag === "SAP" ? <Cloud className="h-12 w-12 text-white/90" /> :
                    p.tag === "AI" || p.tag === "Generative AI" ? <Bot className="h-12 w-12 text-white/90" /> :
                      p.tag === "Web" ? <Globe className="h-12 w-12 text-white/90" /> :
                        p.tag === "Cloud" ? <Boxes className="h-12 w-12 text-white/90" /> :
                          p.tag === "SAP BTP" ? <Database className="h-12 w-12 text-white/90" /> :
                            <CircuitBoard className="h-12 w-12 text-white/90" />}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-brand">{p.tag}</span>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="relative">
        <div className="absolute inset-0 soft-bg opacity-60" />
        <Section eyebrow="Testimonials" title="What Clients Say">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl glass p-7 shadow-elegant">
                <Quote className="h-8 w-8 text-cyan-brand" />
                <p className="mt-3 text-foreground/85 leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full border-2 border-white shadow" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex text-emerald-brand">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 md:p-16 text-center text-white shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="relative">
            <Cpu className="mx-auto h-10 w-10 opacity-90" />
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Ready to accelerate transformation?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">Let's design the next chapter of your enterprise — powered by AI, SAP and cloud.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand hover:shadow-glow transition">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-brand transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
