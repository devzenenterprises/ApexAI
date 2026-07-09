import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Cloud, Database, GitBranch, Zap, Layers, ShieldCheck, RefreshCw, Boxes, GraduationCap, Wrench, Users, Rocket } from "lucide-react";

export const Route = createFileRoute("/sap-services")({
  head: () => ({
    meta: [
      { title: "SAP Services — CPI, BTP, S/4HANA, Integration Suite" },
      { name: "description", content: "SAP CPI, BTP, Integration Suite, PI/PO migration, S/4HANA, Fiori, ABAP, SuccessFactors, Ariba, implementation, support and training." },
      { property: "og:title", content: "SAP Services" },
      { property: "og:description", content: "Full-spectrum SAP consulting, implementation and managed services." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="SAP Services" title={<>Modernize with <span className="gradient-text">SAP done right</span></>} subtitle="Advisory, implementation, integration and managed services across the SAP portfolio." />
      <Section eyebrow="Portfolio" title="SAP capabilities we deliver">
        <ServiceGrid items={[
          { title: "SAP CPI", icon: Cloud },
          { title: "SAP Integration Suite", icon: Layers },
          { title: "SAP PI/PO Migration", icon: RefreshCw },
          { title: "SAP BTP", icon: Boxes },
          { title: "SAP API Management", icon: GitBranch },
          { title: "SAP Cloud Connector", icon: ShieldCheck },
          { title: "SAP S/4HANA", icon: Database },
          { title: "SAP Fiori", icon: Zap },
          { title: "SAP ABAP", icon: Wrench },
          { title: "SAP SuccessFactors", icon: Users },
          { title: "SAP Ariba", icon: Rocket },
          { title: "SAP Implementation", icon: Rocket },
          { title: "SAP Support", icon: ShieldCheck },
          { title: "SAP Managed Services", icon: Wrench },
          { title: "SAP Consulting", icon: Layers },
          { title: "SAP Migration", icon: RefreshCw },
          { title: "SAP Training", icon: GraduationCap },
        ]} />
      </Section>
    </>
  ),
});
