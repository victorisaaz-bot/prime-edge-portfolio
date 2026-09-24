import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Mail, ExternalLink, Sparkles } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#06101E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1565D8]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0B1C2E] to-[#081525] border border-white/15 shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Production</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Have a Story, Campaign, or Concept to Bring to Life?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Let’s collaborate to build an unforgettable visual experience. We deliver production-grade AI video with predictable timelines and precision execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="cyan" size="lg">
              <span>Start a Project Today</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0E243A] hover:bg-[#153452] text-white text-sm font-semibold border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#00D2FF]" />
              <span>Email Directly</span>
            </a>
          </div>

          {/* Alternative hiring platforms */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
            <span>Also available for hire on:</span>
            <a
              href={siteConfig.socialLinks.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#00D2FF] inline-flex items-center gap-1 transition-colors"
            >
              <span>Fiverr Pro</span>
              <ExternalLink className="w-3 h-3 text-[#627D98]" />
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={siteConfig.socialLinks.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#00D2FF] inline-flex items-center gap-1 transition-colors"
            >
              <span>Upwork</span>
              <ExternalLink className="w-3 h-3 text-[#627D98]" />
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#00D2FF] inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#627D98]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

