import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Globe, Briefcase, User, ShoppingCart, LayoutGrid, Code2, Boxes, Server, Feather, PenTool, Smartphone, Search, Wrench } from "lucide-react";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development — React, Angular, Node, WordPress" },
      { name: "description", content: "Business, corporate, portfolio and e-commerce websites plus web apps in React, Angular, Node, Laravel and WordPress." },
      { property: "og:title", content: "Web Development" },
      { property: "og:description", content: "Responsive, SEO-optimized websites and web apps." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Web Development" title={<>Websites that <span className="gradient-text">convert & scale</span></>} subtitle="Modern, responsive and SEO-optimized websites and web apps." />
      <Section eyebrow="Capabilities" title="What we build">
        <ServiceGrid items={[
          { title: "Business Websites", icon: Briefcase },
          { title: "Corporate Websites", icon: Globe },
          { title: "Portfolio Websites", icon: User },
          { title: "E-Commerce Websites", icon: ShoppingCart },
          { title: "Web Applications", icon: LayoutGrid },
          { title: "React Development", icon: Code2 },
          { title: "Angular Development", icon: Boxes },
          { title: "Node.js", icon: Server },
          { title: "Laravel", icon: Feather },
          { title: "WordPress", icon: PenTool },
          { title: "Responsive Design", icon: Smartphone },
          { title: "SEO Optimization", icon: Search },
          { title: "Website Maintenance", icon: Wrench },
        ]} />
      </Section>
    </>
  ),
});
