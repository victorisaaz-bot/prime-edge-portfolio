export type ProjectCategory = 
  | 'all' 
  | 'cinematic' 
  | 'commercial' 
  | 'animation' 
  | 'trailer';

export interface ProjectWorkflowStep {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'cinematic' | 'commercial' | 'animation' | 'trailer';
  categoryLabel: string;
  client: string;
  year: string;
  duration: string;
  aspectRatio: string;
  coverPoster: string;
  videoEmbedUrl?: string; // YouTube, Vimeo, MP4, or Google Drive
  videoType?: 'youtube' | 'vimeo' | 'mp4' | 'drive';
  featured: boolean;
  featuredOrder?: number;
  overview: string;
  challenge: string;
  solution: string;
  workflow: ProjectWorkflowStep[];
  toolsUsed: string[];
  resultsOrLearning: string;
  galleryImages?: string[];
  deliverables?: string[];
}

export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  idealFor: string[];
  productionTimeline: string;
  workflowOverview: string[];
  sampleProjectSlugs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  content: string; // Markdown / structured HTML
  tags: string[];
}

