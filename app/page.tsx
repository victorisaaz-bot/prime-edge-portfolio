import React from "react";
import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ToolsCapabilities } from "@/components/home/ToolsCapabilities";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <ProcessSection />
      <ToolsCapabilities />
      <CTASection />
    </>
  );
}
