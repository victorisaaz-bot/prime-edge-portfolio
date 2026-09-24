import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import {
  Film,
  Sparkles,
  Palette,
  CheckCircle2,
  Clock,
  UserCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Video Production Services & Capabilities | Prime Edge",
  description:
    "Explore our three specialized pillars: Cinematic AI films, high-converting commercial product ads, and 3D stylized animation. Fast turnarounds with immutable consistency.",
};

const iconMap: Record<string, React.ElementType> = {
  Film: Film,
  Sparkles: Sparkles,
  Palette: Palette,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header */}
        <SectionHeading
          eyebrow="Production Capabilities"
          title="Full-Spectrum Generative Video Direction"
          description="From high-concept narrative shorts to multi-hook e-commerce ad creative and episodic animation, we provide specialized generative AI production tailored to modern digital speed."
        />

        {/* Detailed Service Pillars */}
        <div className="space-y-20 mt-16">
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const sampleProjects = projects.filter((p) =>
              service.sampleProjectSlugs.includes(p.slug)
            );

            return (
              <section
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0B1C2E] border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Background ambient corner glow */}
                <div
                  className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 ${
                    idx === 0
                      ? "bg-[#1565D8]/15"
                      : idx === 1
                      ? "bg-[#00D2FF]/15"
                      : "bg-[#F59E0B]/10"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Description & Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1565D8]/20 border border-[#1565D8]/40 flex items-center justify-center text-[#00D2FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
                          Pillar 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#94A3B8] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Timeline & Ideal For */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> Standard Turnaround
                        </span>
                        <p className="text-sm font-bold text-white">
                          {service.productionTimeline}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98] flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-[#00D2FF]" /> Primary Focus
                        </span>
                        <p className="text-sm font-bold text-white">
                          {service.badge}
                        </p>
                      </div>
                    </div>

                    {/* Ideal For Target Audience */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                        Ideal For:
                      </h3>
                      <ul className="space-y-2">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button href={`/contact?service=${service.slug}`} variant="cyan" size="md">
                        <span>Book This Pillar</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Sample Work */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Deliverables Box */}
                    <div className="p-6 rounded-2xl bg-[#0E243A]/80 border border-white/10 space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        Guaranteed Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F0F4F8]">
                            <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sample Case Studies in this Pillar */}
                    {sampleProjects.length > 0 && (
                      <div className="p-6 rounded-2xl bg-[#0E243A]/80 border border-white/10 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                          Featured Case Studies
                        </h3>
                        <div className="space-y-2.5">
                          {sampleProjects.map((p) => (
                            <Link
                              key={p.id}
                              href={`/portfolio/${p.slug}`}
                              className="group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#1565D8]/20 transition-all border border-transparent hover:border-[#00D2FF]/30"
                            >
                              <div className="truncate pr-2">
                                <p className="text-xs font-bold text-white group-hover:text-[#00D2FF] transition-colors truncate">
                                  {p.title}
                                </p>
                                <p className="text-[10px] text-[#94A3B8]">
                                  {p.client} &bull; {p.duration}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#627D98] group-hover:text-[#00D2FF] group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Engagement Comparison Table */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#081525] border border-white/10 shadow-xl space-y-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title="How We Collaborate"
            description="Whether you need a single high-conversion video hook or an ongoing creative partnership, we offer structured engagement tiers."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Single Hero Spot</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Ideal for product launches, crowdfunding trailers, or standalone spec commercials.
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li>&bull; 1x Hero Video (15s to 60s)</li>
                <li>&bull; 16:9 & 9:16 Exports</li>
                <li>&bull; Full Audio Design & Grade</li>
                <li>&bull; 2 Revision Rounds</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-[#00D2FF]/30 space-y-4 relative">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#00D2FF] text-[#06101E] text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-white">Campaign Creative Pack</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Engineered for DTC brands and growth marketers needing to test hooks rapidly across paid social.
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li>&bull; 1x Master Spot + 4x Hook Variations</li>
                <li>&bull; All Aspect Ratios (9:16, 1:1, 16:9)</li>
                <li>&bull; High-Res Static Hero Stills</li>
                <li>&bull; Priority 5-Day Delivery</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Narrative / Episodic Retainer</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Dedicated pipeline for film shorts, animated web series, game cinematics, and recurring content.
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li>&bull; Dedicated LoRA & ControlNet Anchors</li>
                <li>&bull; Episodic Storyboards & Scripting</li>
                <li>&bull; Ongoing Monthly Content Sprints</li>
                <li>&bull; Direct Slack/Discord Channel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}

