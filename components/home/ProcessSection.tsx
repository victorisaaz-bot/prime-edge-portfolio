import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, FileText, Layers, Wand2, CheckCircle } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Objective",
      description: "We define the emotional hook, target audience, technical ratios (16:9, 9:16), tone of voice, and visual benchmarks before touching any generation software.",
      icon: Search,
    },
    {
      number: "02",
      title: "Concept & Script",
      description: "We craft scene-by-scene beat sheets, shot lists, dialogue or voiceover scripts, and prompt architectures calibrated for generative continuity.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Storyboard & Visual Direction",
      description: "We generate canonical keyframes to lock in character likeness, wardrobe, camera framing, lighting styles, and environment aesthetics for client approval.",
      icon: Layers,
    },
    {
      number: "04",
      title: "Generation, Animation & Editing",
      description: "We direct shots through Runway Gen-3, Kling AI, Luma, and ComfyUI, cutting the sequence in Premiere Pro with kinetic pacing and Foley sound design.",
      icon: Wand2,
    },
    {
      number: "05",
      title: "Delivery & Revisions",
      description: "We deliver full 4K UHD masters with cinematic color grading, sound stems, and vertical cutdowns, followed by fine-tuning revisions to perfection.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-24 bg-[#06101E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Production Methodology"
          title="The 5-Step Precision Pipeline"
          description="How we turn abstract ideas into broadcast-ready, high-converting video with consistent characters, controlled pacing, and zero unpredictable drift."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col p-6 rounded-2xl bg-[#0B1C2E] border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                {/* Step Number & Connector hint */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00D2FF] to-[#1565D8] font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-[#06101E] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

