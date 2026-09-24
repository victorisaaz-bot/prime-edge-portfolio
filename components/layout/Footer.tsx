import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050C16] border-t border-white/10 pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-11">
                <Image
                  src="/brand/logo.svg"
                  alt="Prime Edge"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Prime Edge is an AI video production studio led by Segun. We direct cinematic films, commercial product spots, and stylized 3D animation with immutable character and world consistency.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0E243A] text-[#00D2FF] hover:bg-[#153452] transition-colors border border-white/10"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Prime Edge
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  AI Filmmaking Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Project Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#cinematic-storytelling" className="hover:text-white transition-colors">
                  Cinematic AI Storytelling
                </Link>
              </li>
              <li>
                <Link href="/services#product-ads-commercials" className="hover:text-white transition-colors">
                  Product Ads & Commercials
                </Link>
              </li>
              <li>
                <Link href="/services#animation-kids-content" className="hover:text-white transition-colors">
                  3D Animation & Kids Content
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Character Consistency Rigging
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI Music Videos & Trailers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Platforms & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Platforms & Marketplaces
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#627D98]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Fiverr Pro Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#627D98]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Upwork Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#627D98]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>YouTube Channel</span>
                  <ExternalLink className="w-3 h-3 text-[#627D98]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3 h-3 text-[#627D98]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627D98]">
          <p>
            &copy; {new Date().getFullYear()} Prime Edge (Segun). All rights reserved. Directed with Generative AI.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

