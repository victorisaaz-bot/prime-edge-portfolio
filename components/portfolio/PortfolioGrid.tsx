"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { Sparkles, Film, ShoppingBag, Palette, Music } from "lucide-react";

interface PortfolioGridProps {
  initialProjects: Project[];
}

const CATEGORIES: { key: ProjectCategory; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All Projects", icon: Sparkles },
  { key: "cinematic", label: "Cinematic Realism", icon: Film },
  { key: "commercial", label: "Commercial / Product", icon: ShoppingBag },
  { key: "animation", label: "3D Animation / Cartoon", icon: Palette },
  { key: "trailer", label: "Music & Trailers", icon: Music },
];

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ initialProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.toolsUsed.some((tool) =>
          tool.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#00D2FF] text-[#06101E] shadow-lg shadow-cyan-500/20"
                    : "bg-[#0E243A] text-[#94A3B8] hover:text-white hover:bg-[#153452] border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? "bg-black/20 text-[#06101E]" : "bg-white/10 text-white"
                  }`}
                >
                  {cat.key === "all"
                    ? initialProjects.length
                    : initialProjects.filter((p) => p.category === cat.key).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="w-full lg:w-72">
          <input
            type="text"
            placeholder="Search by tool, title, or style..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#0E243A] border border-white/10 text-white placeholder-[#627D98] text-sm focus:outline-none focus:border-[#00D2FF]"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 3}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-white/15 p-8 bg-[#0B1C2E]">
          <p className="text-lg font-bold text-white mb-2">No projects found</p>
          <p className="text-sm text-[#94A3B8] mb-6">
            No projects matched your selected category or search term.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-lg bg-[#1565D8] text-white text-xs font-semibold hover:bg-[#1B74F5] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

