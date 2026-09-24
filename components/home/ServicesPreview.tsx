import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Film, Sparkles, Palette, ArrowRight, Check } from "lucide-react";

export const ServicesPreview: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Film: Film,
    Sparkles: Sparkles,
    Palette: Palette,
  };

  return (
    <section className="py-24 bg-[#081525] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="Engineered for Cinematic Scale & Commercial Impact"
          description="Three specialized production pillars designed to deliver studio-quality visual assets at a fraction of legacy production schedules."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-2xl glass-card bg-[#0B1C2E]/80 border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1565D8]/20 border border-[#1565D8]/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 text-[#94A3B8] border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D2FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Preview */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      What you receive:
                    </p>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F0F4F8]">
                        <Check className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#627D98]">
                    Turnaround: <strong className="text-white">{service.productionTimeline}</strong>
                  </span>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00D2FF] hover:underline"
                  >
                    <span>Pillar Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0E243A]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Need a custom blend or episodic retainers?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              We structure custom production schedules for ongoing ad campaigns, music videos, and film pilots.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-[#00D2FF] text-[#06101E] text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:bg-[#38BDF8] transition-all flex-shrink-0"
          >
            Request Custom Scope &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

