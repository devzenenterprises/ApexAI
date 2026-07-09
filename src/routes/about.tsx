import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Rocket, Award, Users, Sparkles, ShieldCheck, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ApexAI Consultancy — Who We Are" },
      { name: "description", content: "ApexAI is a technology consulting company specializing in AI, SAP, Cloud, Software Development and Digital Transformation." },
      { property: "og:title", content: "About ApexAI Consultancy" },
      { property: "og:description", content: "Technology consulting for AI, SAP, cloud and digital transformation." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Engineering the <span className="gradient-text">future of enterprise</span></>} subtitle="ApexAI Consultancy Solutions is a technology consulting company specializing in AI, SAP, Cloud, Software Development, and Digital Transformation." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: Sparkles, title: "Who We Are", body: "A team of certified consultants, engineers and AI specialists partnering with enterprises to modernize how they operate and grow." },
            { icon: Rocket, title: "Our Mission", body: "Empowering businesses through innovative, outcome-driven technology solutions that unlock efficiency, insight and scale." },
            { icon: Globe2, title: "Our Vision", body: "To become a global leader in AI and SAP consulting — trusted for craft, speed and enterprise-grade delivery." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-8 card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white shadow-elegant"><c.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our values" title="How we work">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Excellence", body: "Certified expertise across SAP, AI and cloud." },
            { icon: Users, title: "Partnership", body: "We integrate with your teams — not around them." },
            { icon: ShieldCheck, title: "Trust", body: "Enterprise-grade security and delivery discipline." },
            { icon: Rocket, title: "Velocity", body: "Ship fast, iterate faster, measure everything." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl glass p-6 shadow-elegant">
              <v.icon className="h-8 w-8 text-brand" />
              <h4 className="mt-4 font-semibold">{v.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl gradient-bg p-10 text-center text-white">
          <h2 className="text-3xl font-bold">Let's build something remarkable</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand">Talk to us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
