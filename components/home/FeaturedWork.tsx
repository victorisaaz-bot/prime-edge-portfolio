import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

  return (
    <section className="py-24 bg-[#06101E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects & Case Studies"
            description="Explore selected cinematic narratives, high-converting product ads, and animated pilots directed with generative AI."
            className="mb-0 md:mb-0"
          />
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Button href="/portfolio" variant="secondary" size="md">
              <span>View All 12 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 6 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

