import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectVideoPlayer } from "@/components/portfolio/ProjectVideoPlayer";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Layers,
  Wand2,
  CheckCircle2,
  Tv,
  Film,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - AI Video Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Prime Edge AI Video Case Study`,
      description: project.tagline,
      images: [{ url: project.coverPoster, width: 1280, height: 720 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects in similar category or general
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <article className="pt-32 pb-24 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#94A3B8] hover:text-[#00D2FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Project Header Block */}
        <div className="max-w-4xl space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan" size="md">
              {project.categoryLabel}
            </Badge>
            <span className="text-xs font-mono text-[#627D98] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
              {project.aspectRatio}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Video / Media Feature Banner */}
        <div className="relative rounded-2xl overflow-hidden glass-card p-2 sm:p-3 mb-14 shadow-2xl">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
            <ProjectVideoPlayer
              title={project.title}
              coverPoster={project.coverPoster}
              videoEmbedUrl={project.videoEmbedUrl}
              videoType={project.videoType}
            />
          </div>
        </div>

        {/* Meta Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 mb-14">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-[#00D2FF]" /> Client / Scope
            </span>
            <p className="text-sm font-semibold text-white truncate">{project.client}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> Runtime
            </span>
            <p className="text-sm font-semibold text-white">{project.duration}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" /> Production Year
            </span>
            <p className="text-sm font-semibold text-white">{project.year}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-[#00D2FF]" /> Format
            </span>
            <p className="text-sm font-semibold text-white">{project.aspectRatio}</p>
          </div>
        </div>

        {/* Main Case Study Body (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF]" />
                Project Background & Vision
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Challenge & Solution Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0E243A]/70 border border-white/5 space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-rose-400 font-mono">01 //</span> Creative Challenge
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E243A]/70 border border-[#00D2FF]/20 space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#00D2FF] font-mono">02 //</span> The AI Solution
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Production Workflow */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#00D2FF]" />
                Production Pipeline & Technical Execution
              </h2>
              <div className="space-y-4">
                {project.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0B1C2E] border border-white/5 flex gap-4 items-start"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#1565D8]/20 text-[#00D2FF] text-xs font-bold font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white">{step.title}</h4>
                      <p className="text-sm text-[#94A3B8] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results & Takeaways */}
            <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1C2E] to-[#152538] border border-[#00D2FF]/30 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00D2FF]" />
                Outcome & Key Learnings
              </h3>
              <p className="text-base text-[#F0F4F8] leading-relaxed">
                {project.resultsOrLearning}
              </p>
            </section>
          </div>

          {/* Right Sidebar: Tools & Deliverables */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tools Used Box */}
            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-[#00D2FF]" />
                Generative Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Package Deliverables
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Hire CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1565D8]/20 to-[#0B1C2E] border border-[#1565D8]/40 text-center space-y-4">
              <h3 className="text-lg font-bold text-white">
                Need a similar visual style?
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We can adapt this exact pipeline, character consistency workflow, and color grading for your brand or story.
              </p>
              <Button href="/contact" variant="cyan" size="md" className="w-full">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="pt-16 border-t border-white/10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Explore More Work</h3>
              <Link
                href="/portfolio"
                className="text-xs sm:text-sm font-bold text-[#00D2FF] hover:underline"
              >
                View All Projects &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

