import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { FileText, MessageSquare, Users, Briefcase, Handshake, GraduationCap, UserCheck, Compass } from "lucide-react";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — Resume, Interviews, Career Support" },
      { name: "description", content: "Placement assistance including resume building, mock interviews, referrals, internships and career guidance for freshers and professionals." },
      { property: "og:title", content: "Placements" },
      { property: "og:description", content: "Career support, referrals and placement assistance." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Placements" title={<>Launch your <span className="gradient-text">tech career</span></>} subtitle="End-to-end placement support from resume to offer." />
      <Section eyebrow="Services" title="How we help you land">
        <ServiceGrid items={[
          { title: "Resume Building", icon: FileText },
          { title: "Mock Interviews", icon: MessageSquare },
          { title: "Placement Assistance", icon: Users },
          { title: "Internship Opportunities", icon: GraduationCap },
          { title: "Corporate Referrals", icon: Handshake },
          { title: "Freshers Placement", icon: UserCheck },
          { title: "Experienced Professional Placement", icon: Briefcase },
          { title: "Career Guidance", icon: Compass },
        ]} />
      </Section>
    </>
  ),
});
