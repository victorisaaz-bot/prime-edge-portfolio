"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "@/components/ui/VideoModal";
import { Play, ArrowUpRight, Sparkles, CheckCircle2, Clapperboard } from "lucide-react";

export const Hero: React.FC = () => {
  const [reelModalOpen, setReelModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-banner.jpg"
          alt="Prime Edge AI Cinematic Hero Background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06101E]/70 via-[#06101E]/60 to-[#06101E]" />
        {/* Subtle vignette on left & right edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101E]/60 via-transparent to-[#06101E]/60" />
      </div>

      {/* Ambient glow accents layered on top of image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1565D8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1565D8]/15 border border-[#00D2FF]/30 mb-8 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00D2FF]">
              AI Video Expert & AI Filmmaker
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] max-w-5xl">
            Turning Bold Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#1565D8]">
              Cinematic AI Films
            </span>{" "}
            & Commercial Content.
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-3xl leading-relaxed font-normal px-2">
            Specializing in photorealistic cinematic storytelling, high-converting product commercials, and stylized 3D animation—engineered with rock-solid character and visual consistency.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button href="/contact" variant="cyan" size="lg" className="w-full sm:w-auto min-h-[48px]">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto min-h-[48px]">
              <span>View Portfolio</span>
              <Clapperboard className="w-4 h-4 text-[#00D2FF] ml-1.5" />
            </Button>
          </div>

          {/* Trust Value Points */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-[#94A3B8] max-w-md sm:max-w-none mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
              <span>Immutable Character Likeness</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
              <span>4K Cinema Master Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
              <span>Broadcast-Grade Sound & Editorial</span>
            </div>
          </div>
        </div>

        {/* Hero Showreel Showcase Banner */}
        <div className="mt-12 sm:mt-20 relative max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card p-2 sm:p-3 shadow-2xl shadow-black/80">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#071320] group cursor-pointer" onClick={() => setReelModalOpen(true)}>
            {/* Poster / Showreel Artwork */}
            <Image
              src="/thumbnails/aura-glow.jpg"
              alt="Prime Edge AI Filmmaking Official Showreel"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-black/20 to-black/30 group-hover:opacity-80 transition-opacity" />

            {/* Play Button Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#00D2FF] text-[#06101E] flex items-center justify-center shadow-2xl shadow-cyan-500/50 transform group-hover:scale-110 active:scale-95 transition-transform duration-300">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] sm:text-sm font-bold tracking-wider text-white uppercase">
                Watch 2025 Showreel (2 Min)
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#94A3B8] pointer-events-none">
              <span className="font-mono bg-black/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-white/10 text-white truncate max-w-full">
                DIRECTED BY SEGUN // PRIME EDGE
              </span>
              <span className="hidden xs:inline-block font-mono bg-black/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-white/10 text-[#00D2FF]">
                RUNWAY GEN-3 // KLING // LUMA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Lightbox Modal */}
      <VideoModal
        isOpen={reelModalOpen}
        onClose={() => setReelModalOpen(false)}
        title="Prime Edge - Official AI Video Showreel"
        videoUrl="https://drive.google.com/file/d/1bnkgbNHmmI8h8UOmhHd2s0tzOqr9FIcS/preview"
        videoType="drive"
      />
    </section>
  );
};

