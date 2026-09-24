import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import {
  Sparkles,
  Clapperboard,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Layers,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Segun & Prime Edge | AI Video Expert & Filmmaker",
  description:
    "Meet Segun, the creative director behind Prime Edge. Learn our AI filmmaking philosophy, character consistency pipeline, and tools.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Top Header & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1565D8]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Director Behind Prime Edge</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Bridging Generative Technology with Traditional Film Craft.
            </h1>

            <p className="text-lg text-[#94A3B8] leading-relaxed">
              Hello, I’m <strong>Segun</strong>, founder and director of <strong>Prime Edge</strong>. I operate at the frontier of artificial intelligence and cinematic storytelling, helping brands, studios, musicians, and creators produce visuals that were previously impossible without million-dollar Hollywood resources.
            </p>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              While anyone can generate a disconnected 5-second clip with a prompt, directing a cohesive story requires deep knowledge of camera focal lengths, lighting ratios, character continuity, pacing, and sound design. My work is engineered to eliminate the plastic, uncanny look of amateur AI and replace it with intentional, director-level execution.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="cyan" size="md">
                <span>Work With Me</span>
              </Button>
              <Button href="/portfolio" variant="outline" size="md">
                <span>View My Work</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Bio Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0B1C2E] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#00D2FF] flex-shrink-0 shadow-lg shadow-cyan-500/20">
                  <Image
                    src="/brand/avatar.svg"
                    alt="Segun - Lead AI Video Expert"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Segun</h3>
                  <p className="text-xs font-semibold text-[#00D2FF] uppercase tracking-wider">
                    Lead AI Filmmaker & Founder
                  </p>
                  <p className="text-xs text-[#627D98] mt-1">
                    Based in West Africa &bull; Global Remote Delivery
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  <span>Specialized in ControlNet character anchoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  <span>Over 100+ commercial & cinematic shots delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  <span>Full editorial, Foley, and DaVinci color grading</span>
                </div>
              </div>

              {/* Verified Platforms */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] mb-3">
                  Verified Freelance & Professional Profiles:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={siteConfig.socialLinks.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Fiverr Pro</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Upwork</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Principles of Prime Edge */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="The Philosophy"
            title="Our Four Creative Commandments"
            description="The guiding rules that separate professional AI video production from casual prompting."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">01. Consistency Above All</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                If a viewer notices character faces changing between cuts, the immersion breaks. We prioritize structural consistency over random high detail.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center">
                <Clapperboard className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">02. Authentic Cinematography</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We simulate real lenses (Cooke anamorphic, Master Primes), authentic focal lengths, optical depth-of-field, and physical camera inertia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">03. Hybrid Post-Production</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Generative outputs are only the raw negative. Real polish happens in Premiere, After Effects, and DaVinci Resolve with layered audio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">04. Commercial Purpose</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Whether creating a 15-second TikTok ad hook or a short film pilot, every visual decision serves an emotional and commercial objective.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Systems Mastered */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081525] border border-white/10 shadow-2xl">
          <SectionHeading
            eyebrow="The Arsenal"
            title="Platforms, Models & Post-Production Suites"
            description="Our battle-tested software stack, continuously updated with the latest research checkpoints."
            className="mb-8"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.toolsStack.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl bg-[#0B1C2E] border border-white/5 space-y-1"
              >
                <p className="text-sm font-bold text-white">{tool.name}</p>
                <p className="text-[11px] text-[#00D2FF]">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}

