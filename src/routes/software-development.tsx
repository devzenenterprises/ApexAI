import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Building2, Monitor, Cloud, Plug, Server, Layout, Database, Puzzle, Wrench } from "lucide-react";

export const Route = createFileRoute("/software-development")({
  head: () => ({
    meta: [
      { title: "Software Development — Enterprise, Cloud, APIs" },
      { name: "description", content: "Enterprise software, desktop and cloud applications, REST APIs, backend and frontend development, integrations and support." },
      { property: "og:title", content: "Software Development" },
      { property: "og:description", content: "Enterprise, cloud and integration engineering." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Software Development" title={<>Build with <span className="gradient-text">enterprise-grade engineering</span></>} subtitle="Custom software, cloud-native architectures and rock-solid integrations." />
      <Section eyebrow="Capabilities" title="What we deliver">
        <ServiceGrid items={[
          { title: "Enterprise Software", icon: Building2 },
          { title: "Desktop Applications", icon: Monitor },
          { title: "Cloud Applications", icon: Cloud },
          { title: "REST APIs", icon: Plug },
          { title: "Backend Development", icon: Server },
          { title: "Frontend Development", icon: Layout },
          { title: "Database Design", icon: Database },
          { title: "System Integration", icon: Puzzle },
          { title: "Maintenance & Support", icon: Wrench },
        ]} />
      </Section>
    </>
  ),
});
