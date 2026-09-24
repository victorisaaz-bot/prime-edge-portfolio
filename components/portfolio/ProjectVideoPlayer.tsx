"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface ProjectVideoPlayerProps {
  title: string;
  coverPoster: string;
  videoEmbedUrl?: string;
  videoType?: "youtube" | "vimeo" | "mp4" | "drive";
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  title,
  coverPoster,
  videoEmbedUrl,
  videoType = "drive",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoEmbedUrl) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={coverPoster}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>
    );
  }

  if (isPlaying) {
    if (videoType === "mp4") {
      return (
        <video
          src={videoEmbedUrl}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
      );
    }

    if (videoType === "drive") {
      const sep = videoEmbedUrl.includes("?") ? "&" : "?";
      return (
        <iframe
          src={`${videoEmbedUrl}${sep}autoplay=1`}
          title={`${title} - AI Video`}
          allow="autoplay"
          allowFullScreen
          className="w-full h-full border-0"
        />
      );
    }

    return (
      <iframe
        src={`${videoEmbedUrl}?autoplay=1&rel=0&modestbranding=1`}
        title={`${title} - AI Video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      onMouseEnter={() => setIsPlaying(true)}
      className="group relative w-full h-full cursor-pointer overflow-hidden"
    >
      <Image
        src={coverPoster}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06101E]/80 via-black/20 to-black/30 group-hover:opacity-70 transition-opacity" />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00D2FF] text-[#06101E] flex items-center justify-center shadow-2xl shadow-cyan-500/50 transform group-hover:scale-110 transition-transform duration-300">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
          Play Video
        </span>
      </div>
    </div>
  );
};

