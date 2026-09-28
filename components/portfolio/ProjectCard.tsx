"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { VideoModal } from "@/components/ui/VideoModal";
import { Play, ArrowUpRight, Volume2, Maximize2 } from "lucide-react";
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isDirectVideo = project.videoType === "mp4" || project.videoType === "drive";
  const directVideoUrl = isDirectVideo ? getDirectStreamUrl(project.videoEmbedUrl) : "";

  // Auto-play videos automatically without user gesture
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    // Use IntersectionObserver to play when visible and pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.defaultMuted = true;
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // If autoplay is delayed, retry on user interaction
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15, rootMargin: "150px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [directVideoUrl]);

  // Theater full-width layout
  if (layout === "theater") {
    return (
      <>
        <div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-gradient-to-b from-[#0C1E32] to-[#071322] border border-white/15 hover:border-[#00D2FF]/60 p-4 sm:p-6 gap-6 sm:gap-8 shadow-2xl hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] transition-all duration-500 hover:-translate-y-1"
        >
          {/* Large Video Frame with Automatic Playback */}
          <div
            onClick={() => setModalOpen(true)}
            className="relative aspect-[16/10] sm:aspect-video w-full lg:w-3/5 rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-cyan-400/50 transition-colors flex-shrink-0 cursor-pointer"
          >
            {/* Poster fallback until video plays */}
            <Image
              src={project.coverPoster}
              alt={`${project.title} - AI Video Production by Prime Edge`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover transition-opacity duration-700 ${
                videoLoaded ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Continuous Autoplay Video Preview */}
            {project.videoEmbedUrl && (
              <div className="absolute inset-0 z-10 overflow-hidden bg-black">
                {isDirectVideo ? (
                  <video
                    ref={videoRef}
                    src={directVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoLoaded(true)}
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
              </div>
            )}

            {/* Cinema Viewfinder Reticles */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none z-10" />

            {/* Top HUD */}
            <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>PLAYING // 4K MASTER</span>
              </span>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white border border-white/15">
                {project.duration}
              </span>
            </div>

            {/* Bottom Audio / Expand Prompt */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-medium text-cyan-300 pointer-events-none">
              <Volume2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Click for Full Audio</span>
            </div>

            {/* Subtle Hover Expand Indicator */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/60 text-[#00D2FF] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                <Maximize2 className="w-6 h-6" />
              </div>
            </div>
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
                  <span>Watch with Audio</span>
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
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-[#0C1E32] to-[#071322] border border-white/15 hover:border-[#00D2FF]/60 shadow-2xl hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] transition-all duration-500 hover:-translate-y-1.5 ${
          isCinema ? "p-3.5 sm:p-5" : "p-3"
        }`}
      >
        {/* Large Video Frame with Automatic Playback */}
        <div
          onClick={() => setModalOpen(true)}
          className={`relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-cyan-400/50 transition-colors cursor-pointer ${
            isCinema ? "aspect-[16/10] sm:aspect-[16/9.5]" : "aspect-video"
          }`}
        >
          {/* Poster fallback while video loads */}
          <Image
            src={project.coverPoster}
            alt={`${project.title} - AI Video Production by Prime Edge`}
            fill
            priority={priority}
            sizes={isCinema ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
            className={`object-cover transition-opacity duration-700 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Continuous Autoplay Video Preview */}
          {project.videoEmbedUrl && (
            <div className="absolute inset-0 z-10 overflow-hidden bg-black">
              {isDirectVideo ? (
                <video
                  ref={videoRef}
                  src={directVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={() => setVideoLoaded(true)}
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
            </div>
          )}

          {/* Cinema Viewfinder Reticles */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none z-20 transition-all duration-300 group-hover:scale-125" />

          {/* Dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none z-10" />

          {/* Top HUD Badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>4K STREAMING</span>
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

          {/* Bottom Tags on Screen */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
              {project.aspectRatio}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-medium text-cyan-300">
              <Volume2 className="w-3 h-3 text-[#00D2FF]" />
              <span>Click for Sound</span>
            </div>
          </div>

          {/* Subtle Hover Expand Indicator */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-black/75 backdrop-blur-md border border-cyan-400/60 text-[#00D2FF] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
              <Maximize2 className="w-6 h-6" />
            </div>
          </div>
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
                <span>Watch with Audio</span>
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
