"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { VideoModal } from "@/components/ui/VideoModal";
import { Play, ArrowUpRight, Volume2 } from "lucide-react";
import { getDirectStreamUrl, getYouTubePreviewUrl } from "@/lib/videoUtils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  layout?: "cinema" | "theater" | "compact";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  priority = false,
  layout = "cinema",
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 60);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [isHovered]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const isDirectVideo = project.videoType === "mp4" || project.videoType === "drive";
  const directVideoUrl = isDirectVideo ? getDirectStreamUrl(project.videoEmbedUrl) : "";

  // Theater full-width layout
  if (layout === "theater") {
    return (
      <>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-gradient-to-b from-[#0C1E32] to-[#071322] border border-white/15 hover:border-[#00D2FF]/60 p-4 sm:p-6 gap-6 sm:gap-8 shadow-2xl hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] transition-all duration-500 hover:-translate-y-1"
        >
          {/* Large Video Frame */}
          <div className="relative aspect-[16/10] sm:aspect-video w-full lg:w-3/5 rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-cyan-400/40 transition-colors flex-shrink-0">
            <Image
              src={project.coverPoster}
              alt={`${project.title} - AI Video Production by Prime Edge`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Video preview */}
            {isHovered && project.videoEmbedUrl && (
              <div className="absolute inset-0 z-10 overflow-hidden bg-black animate-fadeIn pointer-events-none">
                {isDirectVideo ? (
                  <video
                    ref={videoRef}
                    src={directVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={getYouTubePreviewUrl(project.videoEmbedUrl)}
                    title={`${project.title} Preview`}
                    allow="autoplay; encrypted-media"
                    className="w-full h-full border-0 pointer-events-none scale-105"
                  />
                )}

                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-medium text-cyan-300">
                  <Volume2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Click to watch with sound</span>
                </div>
              </div>
            )}

            {/* Cinema Viewfinder Reticles */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

            {/* Top HUD */}
            <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>4K CINEMA MASTER</span>
              </span>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white border border-white/15">
                {project.duration}
              </span>
            </div>

            {/* Play Trigger */}
            <button
              onClick={() => setModalOpen(true)}
              aria-label={`Watch ${project.title}`}
              className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 focus:outline-none ${
                isHovered ? "opacity-0 hover:opacity-100" : "opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
              }`}
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/60 text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-[#06101E] group-hover:scale-110 shadow-2xl transition-all duration-300 cursor-pointer">
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </span>
            </button>
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between flex-1 space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan" size="sm">
                  {project.categoryLabel}
                </Badge>
                <span className="text-xs font-mono text-[#627D98] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.aspectRatio}
                </span>
                <span className="text-xs text-[#94A3B8]">
                  Client: <strong className="text-white">{project.client}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#00D2FF] transition-colors leading-tight">
                <Link href={`/portfolio/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed line-clamp-3">
                {project.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium text-[#94A3B8] px-2.5 py-1 rounded-md bg-white/5 border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-[#33DCFF] text-[#06101E] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Film</span>
                </button>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <VideoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={project.title}
          videoUrl={project.videoEmbedUrl}
          videoType={project.videoType}
        />
      </>
    );
  }

  // Default Cinema & Compact Layouts
  const isCinema = layout === "cinema";

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-[#0C1E32] to-[#071322] border border-white/15 hover:border-[#00D2FF]/60 shadow-2xl hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] transition-all duration-500 hover:-translate-y-1.5 ${
          isCinema ? "p-3.5 sm:p-5" : "p-3"
        }`}
      >
        {/* Poster / Hover Video Container (Taller & Larger Frame) */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-cyan-400/40 transition-colors ${
            isCinema ? "aspect-[16/10] sm:aspect-[16/9.5]" : "aspect-video"
          }`}
        >
          <Image
            src={project.coverPoster}
            alt={`${project.title} - AI Video Production by Prime Edge`}
            fill
            priority={priority}
            sizes={isCinema ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Hover Autoplay Video Preview */}
          {isHovered && project.videoEmbedUrl && (
            <div className="absolute inset-0 z-10 overflow-hidden bg-black animate-fadeIn pointer-events-none">
              {isDirectVideo ? (
                <video
                  ref={videoRef}
                  src={directVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src={getYouTubePreviewUrl(project.videoEmbedUrl)}
                  title={`${project.title} Preview`}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full border-0 pointer-events-none scale-105"
                />
              )}

              {/* Live Preview Indicator */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-cyan-400/40 text-[10px] font-medium text-cyan-300 pointer-events-none">
                <Volume2 className="w-3 h-3 text-[#00D2FF]" />
                <span>Click to watch with sound</span>
              </div>
            </div>
          )}

          {/* Cinema Viewfinder Reticles */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none transition-all duration-300 group-hover:scale-125" />

          {/* Dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Top HUD Badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>4K MASTER</span>
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm">
                {project.categoryLabel}
              </Badge>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white border border-white/15">
                {project.duration}
              </span>
            </div>
          </div>

          {/* Bottom Aspect Ratio Tag on Screen */}
          <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
            <span className="text-[10px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
              {project.aspectRatio}
            </span>
          </div>

          {/* Quick Play Trigger Button */}
          <button
            onClick={() => setModalOpen(true)}
            aria-label={`Watch ${project.title}`}
            className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 focus:outline-none ${
              isHovered ? "opacity-0 hover:opacity-100" : "opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            }`}
          >
            <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/60 text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-[#06101E] group-hover:scale-110 shadow-2xl transition-all duration-300 cursor-pointer">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </span>
          </button>
        </div>

        {/* Content Body Below Video Screen */}
        <div className="flex flex-col flex-1 pt-4 sm:pt-5 justify-between">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D2FF] transition-colors leading-tight">
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

            <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tools & Actions Footer */}
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 overflow-hidden">
              {project.toolsUsed.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium text-[#94A3B8] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5"
                >
                  {tool}
                </span>
              ))}
              {project.toolsUsed.length > 3 && (
                <span className="text-[11px] font-medium text-[#627D98] px-1.5 py-0.5">
                  +{project.toolsUsed.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-bold transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Watch Film</span>
              </button>
              <Link
                href={`/portfolio/${project.slug}`}
                className="text-xs font-semibold text-[#00D2FF] hover:underline"
              >
                Case Study &rarr;
              </Link>
            </div>
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
