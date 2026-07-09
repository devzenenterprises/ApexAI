import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Rocket, Cloud, Brain, Map, Building2, Workflow, Layers } from "lucide-react";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "IT Consulting — Digital, Cloud, SAP, AI Strategy" },
      { name: "description", content: "Digital transformation, cloud consulting, SAP consulting, AI strategy, architecture and business process automation." },
      { property: "og:title", content: "IT Consulting" },
      { property: "og:description", content: "Strategy and architecture for AI, SAP and cloud." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="IT Consulting" title={<>Strategy to <span className="gradient-text">delivery</span></>} subtitle="Advisory partners for digital transformation, cloud, SAP and AI." />
      <Section eyebrow="Practices" title="Where we advise">
        <ServiceGrid items={[
          { title: "Digital Transformation", icon: Rocket },
          { title: "Cloud Consulting", icon: Cloud },
          { title: "SAP Consulting", icon: Layers },
          { title: "AI Strategy", icon: Brain },
          { title: "Technology Roadmaps", icon: Map },
          { title: "Architecture Design", icon: Building2 },
          { title: "Business Process Automation", icon: Workflow },
        ]} />
      </Section>
    </>
  ),
});
