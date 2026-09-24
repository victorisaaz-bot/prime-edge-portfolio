# Prime Edge AI Video Portfolio

A modern, fast, and cinematic multi-page portfolio website for **Prime Edge (Segun)** — AI Video Expert, AI Filmmaker, and Commercial/Animation Specialist.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and optimized for deployment on **Netlify**.

---

## 🌟 Key Features

- **Cinematic Visual Identity**: Deep navy, electric blue, and crisp white palette (`#0B1F33`, `#1565D8`, `#00D2FF`, `#F0F4F8`) with subtle glow and backdrop blur effects.
- **12 Curated Production Projects**:
  - 6 Featured on Homepage with 16:9 cinematic posters and quick-watch modal preview.
  - Interactive filterable portfolio (`/portfolio`) by style: *Cinematic Realism*, *Commercial / Product*, *3D Animation / Cartoon*, and *Music Videos & Trailers*.
  - Full case studies (`/portfolio/[slug]`) detailing client objectives, creative challenge, AI solutions, 5-step workflows, tools used, and results.
- **3 Core Service Pillars (`/services`)**:
  - Cinematic AI Storytelling & Films
  - AI Product Ads & Commercials
  - 3D Cartoon Animation & Kids Content
- **Comprehensive About Page (`/about`)**:
  - Segun's directorial background, 4 creative commandments, and platform mastery.
  - Direct links to verified profiles on **Fiverr Pro**, **Upwork**, and **LinkedIn**.
- **Blog & Resources Foundation (`/blog` & `/blog/[slug]`)**:
  - Authoritative field notes on character consistency, commercial ROI, and the 5-step production pipeline.
- **Inquiry Form with Netlify Forms (`/contact`)**:
  - Ready for Netlify form processing with spam honeypot and client feedback states.
  - Direct email click-to-copy alternative.
- **Complete SEO & Accessibility Baseline**:
  - Pre-rendered static generation (SSG) for all 27 routes.
  - Dynamic XML Sitemap (`/sitemap.xml`) and `robots.txt`.
  - OpenGraph / Twitter cards and accessible focus states (`focus-visible`).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Linting
```bash
npx tsc --noEmit
npm run lint
```

### 4. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Architecture

```text
prime-edge-portfolio/
├── app/
│   ├── page.tsx                     # Homepage (Hero, Featured Work, Pillars, Process, Tools, CTA)
│   ├── portfolio/
│   │   ├── page.tsx                 # Filterable Portfolio grid
│   │   └── [slug]/page.tsx          # Dynamic Project Case Study template
│   ├── services/page.tsx            # 3 Core Pillars, timelines & deliverables
│   ├── about/page.tsx               # Segun's bio, filmmaking principles & tech stack
│   ├── blog/
│   │   ├── page.tsx                 # Insights & resources index
│   │   └── [slug]/page.tsx          # Dynamic article reader
│   ├── contact/page.tsx             # Inquiry form & direct contact
│   ├── privacy/page.tsx             # Privacy policy & NDA handling
│   ├── not-found.tsx                # Cinematic 404 page
│   ├── sitemap.ts                   # Dynamic XML sitemap
│   ├── robots.ts                    # Search engine crawlers directive
│   ├── layout.tsx                   # Root layout with Inter font, Header, and Footer
│   └── globals.css                  # Tailwind CSS theme tokens & styles
├── components/
│   ├── home/                        # Hero, FeaturedWork, ServicesPreview, ProcessSection, ToolsCapabilities, CTASection
│   ├── portfolio/                   # PortfolioGrid, ProjectCard
│   ├── layout/                      # Header (sticky glass), Footer
│   ├── forms/                       # ContactForm (Netlify-compatible)
│   └── ui/                          # Button, Badge, SectionHeading, VideoModal
├── data/
│   ├── projects.ts                  # 12 project case studies data
│   ├── services.ts                  # 3 service pillars data
│   ├── posts.ts                     # Blog / field notes data
│   └── siteConfig.ts                # Site-wide settings, social links & metadata
├── public/
│   ├── posters/                     # High-res 16:9 vector poster artwork for each project
│   ├── brand/                       # Prime Edge logo & avatar SVGs
│   └── __forms.html                 # Netlify Forms static detection template
└── netlify.toml                     # Netlify build configuration & security headers
```

---

## ✍️ How to Edit & Add Content

No CMS is needed for the first release. All content is typed and version-controlled via Git:

### Adding or Updating a Project
1. Open [`data/projects.ts`](data/projects.ts).
2. Add or modify an entry following the `Project` interface.
3. Place a 16:9 thumbnail or poster in `public/posters/` and link `coverPoster`.
4. Add your YouTube/Vimeo embed URL or direct video link to `videoEmbedUrl`.
5. Set `featured: true` (and `featuredOrder: 1-6`) to highlight it on the homepage.

### Adding a Blog Post
1. Open [`data/posts.ts`](data/posts.ts).
2. Add a new `BlogPost` object with your Markdown/HTML content.
3. It will automatically appear on `/blog` and create a statically-generated page at `/blog/[slug]`.

### Updating Social or Marketplace Links
- Edit [`data/siteConfig.ts`](data/siteConfig.ts) to update your LinkedIn, Fiverr, Upwork, YouTube, or contact email.

---

## 🌐 Deploying to Netlify

1. Push your repository to **GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete Prime Edge AI portfolio website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to **[Netlify](https://app.netlify.com)** and click **Add new site > Import an existing project**.
3. Select your GitHub repository.
4. Netlify will automatically detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**.
6. Forms submitted through `/contact` will appear directly in your Netlify Dashboard under **Forms > contact**.
