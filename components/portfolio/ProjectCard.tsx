"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { VideoModal } from "@/components/ui/VideoModal";
import { Play, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
        {/* Poster Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#071320]">
          <Image
            src={project.coverPoster}
            alt={`${project.title} - AI Video Production by Prime Edge`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Top badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <Badge variant="cyan" size="sm">
              {project.categoryLabel}
            </Badge>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/10">
              {project.duration}
            </span>
          </div>

          {/* Quick Play Trigger Button */}
          <button
            onClick={() => setModalOpen(true)}
            aria-label={`Watch preview of ${project.title}`}
            className="absolute inset-0 flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
          >
            <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00D2FF] text-[#06101E] shadow-xl shadow-cyan-500/40 transform scale-100 sm:scale-90 sm:group-hover:scale-100 active:scale-95 transition-transform duration-300 cursor-pointer">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
            </span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-4 sm:p-6 justify-between bg-[#0B1C2E]">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug">
                <Link href={`/portfolio/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <Link
                href={`/portfolio/${project.slug}`}
                aria-label={`Read case study for ${project.title}`}
                className="p-1 text-[#627D98] hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed mb-4">
              {project.tagline}
            </p>
          </div>

          {/* Tools & Details footer */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5 overflow-hidden">
              {project.toolsUsed.slice(0, 2).map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium text-[#94A3B8] px-2 py-0.5 rounded bg-white/5"
                >
                  {tool}
                </span>
              ))}
              {project.toolsUsed.length > 2 && (
                <span className="text-[11px] font-medium text-[#627D98] px-1.5 py-0.5">
                  +{project.toolsUsed.length - 2}
                </span>
              )}
            </div>

            <Link
              href={`/portfolio/${project.slug}`}
              className="text-xs font-semibold text-[#00D2FF] hover:underline flex-shrink-0"
            >
              Case Study &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={project.title}
        videoUrl={project.videoEmbedUrl}
        videoType={project.videoType}
      />
    </>
  );
};

