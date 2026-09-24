import React from "react";
import { Button } from "@/components/ui/Button";
import { Film, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#0B1C2E] border border-white/10 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#1565D8]/20 border border-[#1565D8]/40 text-[#00D2FF] flex items-center justify-center mx-auto">
          <Film className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#1565D8] font-mono">
            404
          </span>
          <h1 className="text-2xl font-bold text-white mt-2">Scene Not Found</h1>
          <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
            The reel or frame you are looking for has been cut from the final edit or moved to another reel.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="cyan" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return Home</span>
          </Button>
          <Button href="/portfolio" variant="secondary" size="md">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>View Portfolio</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

