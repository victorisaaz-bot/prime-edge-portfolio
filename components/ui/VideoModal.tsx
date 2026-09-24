"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
  videoType?: "youtube" | "vimeo" | "mp4" | "drive";
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  videoUrl,
  videoType = "youtube",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#0B1C2E] border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#06101E]">
          <h3
            id="video-modal-title"
            className="text-base sm:text-lg font-bold text-white truncate pr-4"
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video bg-black">
          {videoUrl ? (
            videoType === "mp4" ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            ) : videoType === "drive" ? (
              <iframe
                src={videoUrl}
                title={title}
                allow="autoplay"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 text-[#94A3B8]">
              <p className="text-base font-semibold text-white">Video Asset Preview</p>
              <p className="text-sm mt-1">Connect your YouTube/Vimeo/MP4 link in data/projects.ts</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

