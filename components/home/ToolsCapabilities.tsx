import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Film, ShieldCheck, Zap } from "lucide-react";

export const ToolsCapabilities: React.FC = () => {
  return (
    <section className="py-24 bg-[#081525] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authority & Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Tools & Technical Mastery"
              title="Modern Neural Video Engineering"
              description="We combine cutting-edge frontier diffusion models with industry-standard post-production tools to deliver cinema-grade assets."
              className="mb-6"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1C2E] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Consistent Characters & Worlds</h4>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                    Custom ControlNet & LoRA anchors prevent facial morphing and wardrobe drift across multiple scenes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1C2E] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Realistic Dynamics & Physics</h4>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                    Simulating fluid caustics, micro-splashes, vehicle speed blur, and camera inertia with high fidelity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1C2E] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#1565D8]/20 text-[#00D2FF] flex items-center justify-center flex-shrink-0">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">4K Master & Spatial Audio</h4>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                    Finished in Premiere Pro and DaVinci Resolve with full dynamic range sound effects, voice synthesis, and color grade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Stack Grid */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1C2E] border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00D2FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Production Stack
                  </span>
                </div>
                <span className="text-xs text-[#627D98] font-mono">
                  UPDATED FOR 2025
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {siteConfig.toolsStack.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3.5 rounded-xl bg-[#0E243A]/70 border border-white/5 hover:border-[#00D2FF]/30 transition-all flex flex-col justify-between"
                  >
                    <span className="text-sm font-bold text-white">
                      {tool.name}
                    </span>
                    <span className="text-xs text-[#00D2FF] mt-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#38BDF8]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#94A3B8] mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

