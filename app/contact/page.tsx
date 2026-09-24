import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Clock, ShieldCheck, ExternalLink, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project | Contact Prime Edge AI Video",
  description:
    "Ready to produce a cinematic AI film, high-converting product commercial, or 3D animation? Contact Segun / Prime Edge for custom scopes and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Production"
          title="Let’s Create Something Cinematic"
          description="Tell us about your brand, story, or commercial campaign. We’ll review your goals and provide a clear production scope, timeline, and proposal within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left / Main Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Email, Availability & Verified Profiles */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1565D8]/20 border border-[#1565D8]/40 text-[#00D2FF] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Direct Email Inquiries</h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Prefer direct correspondence or want to attach an existing brief / storyboard PDF?
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-3 inline-flex items-center gap-2 text-base font-bold text-[#00D2FF] hover:underline"
                >
                  <span>{siteConfig.contactEmail}</span>
                </a>
              </div>
            </div>

            {/* Turnaround & Guarantee */}
            <div className="p-8 rounded-3xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00D2FF]" />
                Production Availability & Guarantee
              </h3>
              <ul className="space-y-3 text-xs text-[#94A3B8]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span><strong>24-Hour Response</strong> on all qualified inquiries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span><strong>NDA Protection:</strong> We respect confidentiality for pre-release scripts and stealth products.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span><strong>Revision Milestones:</strong> Iterative sign-offs on keyframes, voiceovers, and cuts before final delivery.</span>
                </li>
              </ul>
            </div>

            {/* Verified Platforms Card */}
            <div className="p-8 rounded-3xl bg-[#081525] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00D2FF]" />
                Marketplaces & Escrow Billing
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                If your company requires milestone escrow payments through established freelance platforms:
              </p>
              <div className="space-y-2 pt-2">
                <a
                  href={siteConfig.socialLinks.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B1C2E] hover:bg-[#152538] border border-white/5 transition-colors text-xs font-semibold text-white"
                >
                  <span>Hire via Fiverr Pro</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                </a>
                <a
                  href={siteConfig.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B1C2E] hover:bg-[#152538] border border-white/5 transition-colors text-xs font-semibold text-white"
                >
                  <span>Hire via Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B1C2E] hover:bg-[#152538] border border-white/5 transition-colors text-xs font-semibold text-white"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

