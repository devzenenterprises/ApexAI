import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Cloud, Boxes, Layers, Coffee, Code2, Atom, Bot, Brain, CloudCog, FlaskConical, GraduationCap, Building2, BadgeCheck, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — SAP, AI, Cloud, Live Projects" },
      { name: "description", content: "Corporate and career training in SAP CPI, BTP, Integration Suite, Java, Python, React, AI, ML, cloud, live projects and certifications." },
      { property: "og:title", content: "Training Programs" },
      { property: "og:description", content: "SAP, AI, cloud and full-stack training with live projects and placements." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Training" title={<>Career-ready <span className="gradient-text">technology training</span></>} subtitle="Hands-on training with live projects, certifications and placement support." />
      <Section eyebrow="Programs" title="What we teach">
        <ServiceGrid items={[
          { title: "SAP CPI", icon: Cloud },
          { title: "SAP BTP", icon: Boxes },
          { title: "SAP Integration Suite", icon: Layers },
          { title: "Java", icon: Coffee },
          { title: "Python", icon: Code2 },
          { title: "React", icon: Atom },
          { title: "AI", icon: Bot },
          { title: "Machine Learning", icon: Brain },
          { title: "Cloud Computing", icon: CloudCog },
          { title: "Live Projects", icon: FlaskConical },
          { title: "Internship Training", icon: GraduationCap },
          { title: "Corporate Training", icon: Building2 },
          { title: "Certification Guidance", icon: BadgeCheck },
          { title: "Interview Preparation", icon: MessageSquare },
        ]} />
      </Section>
    </>
  ),
});
