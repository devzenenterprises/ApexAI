import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Bot, Cloud, Code2, Globe, Briefcase, GraduationCap, Users2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI, SAP, Software, Web, Consulting, Training" },
      { name: "description", content: "Explore ApexAI services: AI solutions, SAP consulting, software and web development, IT consulting, training and placements." },
      { property: "og:title", content: "ApexAI Services" },
      { property: "og:description", content: "AI, SAP, software, web, consulting, training and placements." },
    ],
  }),
  component: Services,
});

const items = [
  { title: "AI Solutions", to: "/services", icon: Bot, desc: "Generative AI, chatbots, ML, workflow automation, custom AI apps." },
  { title: "SAP Services", to: "/sap-services", icon: Cloud, desc: "CPI, BTP, S/4HANA, Integration Suite, Fiori, ABAP, migrations." },
  { title: "Software Development", to: "/software-development", icon: Code2, desc: "Enterprise, cloud-native, APIs, integrations, maintenance." },
  { title: "Web Development", to: "/web-development", icon: Globe, desc: "Corporate, e-commerce, React, Angular, Node, WordPress." },
  { title: "IT Consulting", to: "/consulting", icon: Briefcase, desc: "Digital transformation, cloud strategy, architecture, roadmaps." },
  { title: "Training", to: "/training", icon: GraduationCap, desc: "SAP, AI, cloud, live projects, certifications, interview prep." },
  { title: "Placements", to: "/placements", icon: Users2, desc: "Resume, mock interviews, referrals, career guidance." },
] as const;

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title={<>End-to-end <span className="gradient-text">technology services</span></>} subtitle="A single partner for AI, SAP, software, web, consulting, training and placements." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link key={s.title} to={s.to} className="group rounded-3xl border border-border bg-card p-8 card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white shadow-elegant"><s.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
