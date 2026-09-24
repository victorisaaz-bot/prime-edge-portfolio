import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Edge",
  description: "Privacy policy and client data handling practices for Prime Edge AI Video Production.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#94A3B8] hover:text-[#00D2FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="Legal & Data Protection"
          title="Privacy Policy"
          description="Last updated: October 2024. How Prime Edge collects, protects, and handles client project data."
        />

        <div className="prose prose-invert max-w-none space-y-8 text-[#94A3B8] text-sm sm:text-base leading-relaxed mt-10">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a project inquiry through our website form or contact us via email, we collect your name, email address, company or brand name, estimated budget, desired delivery timelines, and project brief descriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. How We Use Project Information</h2>
            <p>
              Information submitted is used exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Reviewing creative briefs and issuing technical proposals and quotes.</li>
              <li>Communicating regarding project milestones, drafts, and deliveries.</li>
              <li>Executing contract deliverables and invoices.</li>
            </ul>
            <p>
              We never sell, rent, or distribute your contact details to third-party marketing services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property & Confidentiality</h2>
            <p>
              We honor strict confidentiality and Non-Disclosure Agreements (NDAs). Unreleased scripts, proprietary brand assets, unpublished products, and character bibles provided by clients remain 100% the property of the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Hosting & Form Processing</h2>
            <p>
              Our website is hosted on Netlify. Inquiry forms are securely processed in accordance with Netlify&apos;s privacy and security standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Regarding Privacy</h2>
            <p>
              For questions regarding privacy, data deletion, or signing an NDA before sharing proprietary scripts, contact Segun at:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#00D2FF] hover:underline font-semibold">
                {siteConfig.contactEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

