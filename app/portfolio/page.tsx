import React from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio | Prime Edge AI Video",
  description:
    "Explore our complete portfolio of AI-generated films, commercial product ads, 3D animated trailers, and music videos. Directed by Segun (Prime Edge).",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading
          eyebrow="Portfolio Archive"
          title="Cinematic Work, Commercials & Animation"
          description="Browse over 10 projects across cinematic sci-fi shorts, luxury commercial advertising, family 3D animation, and music videos. Filter by style or search by tool."
        />

        <PortfolioGrid initialProjects={projects} />
      </div>

      <CTASection />
    </div>
  );
}

