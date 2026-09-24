import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Prime Edge Insights`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.coverImage, width: 1280, height: 720 }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id);

  return (
    <article className="pt-32 sm:pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#94A3B8] hover:text-[#00D2FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Header Content */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="cyan" size="md">
              {post.category}
            </Badge>
            <span className="text-xs text-[#627D98] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#94A3B8] leading-relaxed">
            {post.summary}
          </p>

          {/* Author Byline */}
          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00D2FF]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-[#627D98]">{post.author.role} &bull; {post.publishDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Artwork */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-card mb-12 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#F0F4F8] leading-relaxed text-base sm:text-lg">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-white pt-6 border-t border-white/10">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("#### ")) {
              return (
                <h4 key={idx} className="text-xl font-bold text-[#00D2FF] pt-4">
                  {trimmed.replace("#### ", "")}
                </h4>
              );
            }
            if (trimmed.startsWith("---")) {
              return <hr key={idx} className="border-white/10 my-8" />;
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").map((i) => i.replace(/^- /, ""));
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 text-[#94A3B8] text-base">
                  {items.map((item, iIdx) => (
                    <li key={iIdx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={idx}
                className="text-[#94A3B8] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: trimmed
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#00D2FF] hover:underline font-semibold">$1</a>'),
                }}
              />
            );
          })}
        </div>

        {/* Article Tags */}
        <div className="pt-10 mt-12 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#627D98] mr-2">
            Topics:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-lg bg-white/5 text-[#94A3B8] border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* In-article CTA Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#0B1C2E] to-[#16273B] border border-[#00D2FF]/30 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Ready to apply this pipeline to your project?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
            Book an initial creative consultation to map out character models, storyboard prompts, and production schedules.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="cyan" size="md">
              <span>Start a Project with Segun</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white">More Field Notes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  className="p-5 rounded-2xl bg-[#0B1C2E] border border-white/10 hover:border-[#00D2FF]/30 transition-all space-y-2 group block"
                >
                  <span className="text-[11px] font-bold text-[#00D2FF] uppercase tracking-wider">
                    {rPost.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00D2FF] transition-colors line-clamp-2">
                    {rPost.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] line-clamp-2">
                    {rPost.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

