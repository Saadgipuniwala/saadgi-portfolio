# Saadgi Puniwala — Portfolio

A premium, glassmorphic single-page portfolio built with Next.js 15, TypeScript,
Tailwind CSS, Framer Motion, React Three Fiber, GSAP-ready structure, and Lenis
smooth scroll.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — things to edit

Everything text/content-related lives in **`lib/data.ts`**. Resume content
(summary, CGPA, skills, certifications, hackathons, publication) and the
Overhead Conductor screenshots are now populated for real. What's still
placeholder, marked `EDIT_ME`:

- `profile.socials.linkedin` — confirm the exact LinkedIn URL
- `public/profile/photo.jpg` — currently a generated gradient placeholder;
  swap in a real headshot
- `projects` → `student-performance-prediction` and
  `uttarakhand-forest-fire-detection` still use **generated placeholder
  cover images** (`public/images/student/cover.png`,
  `public/images/forest/cover.png`) — swap these for real screenshots, and
  add entries to their `screenshots` arrays the same way
  `overhead-conductor-fault-detection`, `smart-window-ventilation`, and
  `rf-signal-intelligence-dashboard` are populated.

### Photo & resume

- Replace `public/profile/photo.jpg` with your real headshot (currently a
  generated gradient placeholder).
- Your resume is already at `public/resume.pdf`, referenced by
  `profile.resumeUrl` — swap the file if you update your resume later.

### Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) (free tier is
enough). Create a service + template there, then either:

1. Copy `.env.example` to `.env.local` and fill in the three IDs, **or**
2. Hardcode them directly in `components/sections/Contact.tsx`.

Your EmailJS template should accept `user_name`, `user_email`, and `message`
fields (matching the form's `name` attributes).

### Fonts

Fonts (Fraunces, Inter, JetBrains Mono) are loaded via a Google Fonts
`<link>` tag in `app/layout.tsx` rather than `next/font/google`, so the build
works in sandboxed/offline environments. On Vercel you can optionally switch
to `next/font/google` for better performance — both approaches work fine.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Home page — assembles every section
  globals.css          Design tokens, glass/grain utilities
  sitemap.ts            SEO sitemap
  projects/[slug]/     Dynamic project case-study route
components/
  sections/             Hero, About, Journey, Skills, Achievements,
                         Certifications, Projects, CurrentWork,
                         SocialLinks, Contact
  ui/                   Button, Card, Badge (shadcn-style primitives)
  ProjectDetail.tsx      Full case-study layout used by the dynamic route
  AuroraBackground.tsx   CSS aurora-mesh + mouse-light background
  FloatingShapes(.tsx/Scene.tsx)  React Three Fiber floating glass shapes
  SmoothScroll.tsx        Lenis wrapper
lib/
  data.ts                 ALL editable site content lives here
  utils.ts                 cn() class-merge helper
public/
  images/                  Project screenshots, grouped by project
  profile/                 Profile photo
```

## Deploying

This is a standard Next.js App Router project — deploy directly to
[Vercel](https://vercel.com/new) by pushing to GitHub and importing the repo,
or run:

```bash
npm run build
npm start
```

## Performance notes

- Images use `next/image` for automatic optimization/lazy-loading.
- The R3F background scene is dynamically imported client-side only and
  hidden below the `md` breakpoint to protect mobile performance.
- Animations respect `prefers-reduced-motion`.
- All sections lazy-reveal on scroll via `whileInView`, so nothing animates
  until it's actually visible.
