import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Clock, ShieldCheck, ExternalLink, MessageSquare, Phone } from "lucide-react";

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

          {/* Right Column: Direct WhatsApp, LinkedIn, Upwork & Email */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Chat Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1C2E] border border-emerald-500/30 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Fastest Response
                  </div>
                  <h3 className="text-lg font-bold text-white">Direct WhatsApp</h3>
                </div>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Need an immediate answer or want to discuss creative direction directly? Message Segun on WhatsApp.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/30"
                >
                  <span className="flex items-center gap-2">
                    <span>Chat on WhatsApp</span>
                    <span className="text-xs font-normal opacity-90">({siteConfig.socialLinks.whatsappNumber})</span>
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Profiles Card: LinkedIn & Upwork */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1C2E] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00D2FF]" />
                Direct Profiles & Contracts
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect directly for professional collaboration or hire through verified escrow contracts:
              </p>
              <div className="space-y-2.5 pt-2">
                {/* LinkedIn */}
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#06101E] hover:bg-[#102238] border border-blue-500/30 transition-all text-xs font-semibold text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[11px] text-[#00D2FF] group-hover:underline flex items-center gap-1">
                    Connect &rarr;
                  </span>
                </a>

                {/* Upwork */}
                <a
                  href={siteConfig.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#06101E] hover:bg-[#102238] border border-emerald-500/30 transition-all text-xs font-semibold text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Upwork Verified Profile</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 group-hover:underline flex items-center gap-1">
                    Hire via Upwork &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1C2E] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1565D8]/20 border border-[#1565D8]/40 text-[#00D2FF] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Email Inquiries</h3>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-xs font-bold text-[#00D2FF] hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                All inquiries submitted through this form or email are sent directly to Segun with guaranteed 24-hour turnaround.
              </p>
            </div>

            {/* Turnaround & Guarantee */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081525] border border-white/10 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                Production Guarantee
              </h3>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span><strong>24-Hour Response</strong> on all qualified inquiries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span><strong>Milestone Approvals:</strong> Clear sign-offs before final render.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

