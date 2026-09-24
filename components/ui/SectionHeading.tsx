import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  linkText,
  linkHref,
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-4xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#1565D8]/10 border border-[#1565D8]/30 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      {linkHref && linkText && (
        <div className="mt-5">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00D2FF] hover:text-[#38BDF8] group"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

