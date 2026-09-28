"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getDirectStreamUrl } from "@/lib/videoUtils";

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
  const [isPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [isPlaying]);

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

  if (videoType === "mp4" || videoType === "drive") {
    const streamUrl = videoType === "drive"
      ? getDirectStreamUrl(videoEmbedUrl)
      : videoEmbedUrl;
    return (
      <video
        ref={videoRef}
        src={streamUrl}
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-contain bg-black"
      />
    );
  }

  return (
    <iframe
      src={`${videoEmbedUrl}?autoplay=1&mute=1&rel=0&modestbranding=1`}
      title={`${title} - AI Video`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full border-0"
    />
  );
};
