<!-- =============================================== -->
<!-- README — gportevin-portfolio                     -->
<!-- =============================================== -->

<div align="center">

  <h1>Portfolio — Grégoire Portevin</h1>

  <p>
    <strong>Personal portfolio website — game dev & immersive technologies.</strong><br />
    Designed and built from scratch with Next.js 14.
  </p>

  <p>
    <a href="https://gportevin-portfolio.vercel.app">
      <img src="https://img.shields.io/badge/▶_Live_site-gportevin--portfolio.vercel.app-FF5C39?style=for-the-badge" alt="Live site" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

<br />

## 📖 About

A custom-built portfolio designed to showcase my projects in game development, 3D rendering and immersive tech. The site combines a dark "studio dev" aesthetic with subtle motion design — built entirely in Next.js 14 with the App Router, fully typed in TypeScript, and deployed on Vercel.

> 🎨 Built around a consistent visual identity: dark theme, orange `#FF5C39` accent, custom typography pairing (DM Sans · Instrument Serif · JetBrains Mono).

<br />

## ✨ Features

- 🎬 **Embedded video player** — YouTube, Vimeo and local file support, with lazy loading for performance
- 🖼️ **Media gallery** — image carousel with thumbnails, lightbox view, and keyboard navigation
- 🎯 **Featured project** — highlighted spot on the homepage for the latest / strongest work
- 🔍 **Category filters** — filter projects by type (stage, engine, game, shaders…)
- 📍 **Dynamic project pages** — fully statically generated from a single data file
- 🎨 **Custom cursor** — smooth follower dot for desktop visitors
- 📱 **Fully responsive** — mobile, tablet, desktop
- ⚡ **Fast & lightweight** — ~140 KB first load JS, static pre-rendering
- 🔒 **Private by default** — `noindex` set everywhere (visible only to people I share the link with)

<br />

## 🛠️ Tech stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | DM Sans · Instrument Serif · JetBrains Mono *(via `next/font`)* |
| **Hosting** | Vercel |

<br />

## 🏗️ Architecture

The site is structured around a clean separation between **data** and **components** — adding a new project is just a matter of editing one file.

```
gportevin-portfolio/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx                # Home (Hero · Projects · Experience · About · Contact)
│   ├── projects/
│   │   └── [slug]/page.tsx     # Dynamic project detail page
│   └── globals.css
├── components/                  # Reusable UI components
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── FeaturedProject.tsx
│   ├── VideoPlayer.tsx
│   ├── MediaGallery.tsx
│   ├── Experience.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── CursorDot.tsx
├── data/                        # Single source of truth — easy to edit
│   ├── projects.ts             # All project data (title, stack, video, gallery…)
│   └── profile.ts              # Personal info, tagline, skills, languages
└── public/projects/             # Project images & cover art
```

<br />

## 🚀 Run locally

```bash
# 1. Clone the repo
git clone https://github.com/Gregoire-PORTEVIN/gportevin-portfolio.git
cd gportevin-portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

<details>
<summary><strong>Production build</strong></summary>

```bash
npm run build   # Create the optimized production build
npm start       # Run the production server
```

</details>

<br />

## 🔗 Links

- 🌐 **Live site** — [gportevin-portfolio.vercel.app](https://gportevin-portfolio.vercel.app)
- 👤 **More about me** — [LinkedIn](https://www.linkedin.com/in/grégoire-portevin-166063253/)
- 📧 **Contact** — gregoireportevin@gmail.com

<br />

---

<div align="center">

  <sub>Designed & developed by <a href="https://github.com/Gregoire-PORTEVIN">Grégoire Portevin</a> — 2026</sub>

</div>
