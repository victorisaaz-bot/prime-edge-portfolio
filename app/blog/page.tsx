import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/home/CTASection";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Filmmaking Insights & Resources | Prime Edge",
  description:
    "Technical breakdowns, character consistency workflows, prompting architectures, and commercial production guides by Segun (Prime Edge).",
};

export default function BlogPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeading
          eyebrow="Knowledge & Insights"
          title="AI Filmmaking Insights & Field Notes"
          description="Behind-the-scenes engineering breakdowns, character consistency workflows, and strategic guides for brands and filmmakers navigating generative video."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl overflow-hidden glass-card bg-[#0B1C2E] border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              {/* Cover Artwork */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#071320]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3.5 left-3.5">
                  <Badge variant="cyan" size="sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6 justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#627D98]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Footer Tag & Read Link */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#627D98] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00D2FF]" />
                    {post.author.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00D2FF] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}

