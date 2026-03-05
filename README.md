<div align="center">

# SATYARUP LAW FIRM

### Strategic Litigation. Trusted Advocacy. Professional Excellence.

[![Live Site](https://img.shields.io/badge/Live-satyaruplaw.com-C9A96E?style=for-the-badge&logo=google-chrome&logoColor=white)](https://satyaruplaw.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)

A premium, full-service law firm website featuring 3D particle animations, cinematic page transitions, smooth scrolling, and 43 statically generated pages — built with Next.js 16, React 19, Three.js, GSAP, and Framer Motion.

[**Visit Live Site →**](https://satyaruplaw.com)

</div>

---

## About the Firm

**Satyarup Law Firm** is a diversified full-service legal and consulting practice led by **Dr. Ashwani Bhardwaj**, Advocate-on-Record, Supreme Court of India. With over three decades of litigation experience, the firm provides strategic representation before the Supreme Court of India, High Courts nationwide, specialised tribunals, and international arbitration forums.

The firm serves government departments (Union of India, Ministry of Railways), public sector undertakings (Western Coalfields, Shipping Corporation of India), financial institutions (Bank of Baroda, Punjab National Bank, Central Bank of India, Indian Overseas Bank), educational bodies (Association of Indian Universities), and corporate & private clients.

**Chamber Address:** No. 319, Supreme Court Lawyers Chambers, M.C. Setalvad Block, Bhagwan Dass Road, New Delhi – 110001

---

## Features

### Design & Animation
- **3D Particle Field** — Interactive Three.js particle system with floating gold lines in the hero section, rendered via React Three Fiber
- **Cinematic Page Transitions** — GSAP-powered multi-block cover/reveal animation with logo overlay between routes
- **Smooth Scrolling** — Lenis-based smooth scroll with custom easing across all pages
- **Scroll-Triggered Animations** — Framer Motion `whileInView` reveals, staggered containers, and word-by-word animated headings
- **3D Flip Cards** — CSS 3D transform practice area cards with perspective and backface rendering
- **Glass Morphism** — Frosted glass cards with shimmer effects for CTAs and contact forms
- **Parallax Mouse Tracking** — Hero section responds to cursor position via CSS custom properties
- **Reduced Motion Support** — All animations respect `prefers-reduced-motion` via `useReducedMotion`

### Content & Pages (43 total)
- **Home** — Hero with 3D particles, About preview, 8 practice areas (flip cards), client categories, process flow, news preview, and CTA
- **About** — Firm overview, mission statement, 4 guiding principles, 5-step approach methodology
- **Practice Areas** — 27 practice areas with interactive category filter (Litigation, Corporate, Financial, Regulatory, Sector, Dispute Resolution, Personal) and animated transitions
- **27 Practice Area Detail Pages** — Individual pages for each practice area with service listings and consultation CTA
- **People** — 4 team member profiles with tabbed interfaces (Overview, Experience, Skills, Publications, Certifications, Achievements), timeline views, stat cards, and social links
- **News & Media** — 2 featured + 4 archive articles with category badges
- **6 News Article Detail Pages** — Full article content with paragraph-by-paragraph scroll animation
- **Careers** — 4 job openings with department badges and apply CTAs
- **Contact** — Contact form (mailto fallback), office address, phone, and email

### Technical
- **Static Site Generation** — All 43 pages pre-rendered at build time via `output: "export"`
- **Custom Domain** — Served at [satyaruplaw.com](https://satyaruplaw.com) with HTTPS via GitHub Pages
- **Automated CI/CD** — GitHub Actions builds and deploys on every push to `main`
- **SEO Optimised** — Full metadata, Open Graph tags, keyword targeting, and `robots` configuration
- **Responsive Design** — Mobile-first with breakpoints at `sm`, `md`, `lg`, and `xl`
- **Custom Scrollbar** — Gold-themed scrollbar across WebKit browsers
- **Dynamic Imports** — Three.js canvas is dynamically imported to avoid SSR issues

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **Language** | TypeScript | 5.x |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS | v4 |
| **3D Graphics** | Three.js + React Three Fiber + Drei | 0.182 |
| **Page Transitions** | GSAP + @gsap/react | 3.14 |
| **Animations** | Framer Motion | 12.34 |
| **Smooth Scroll** | Lenis | 1.3.17 |
| **Utilities** | clsx, tailwind-merge, date-fns | — |
| **Deployment** | GitHub Pages + GitHub Actions | — |
| **Domain** | Namecheap (satyaruplaw.com) | — |

---

## Project Structure

```
satyarup-law-firm-website/
├── .github/workflows/
│   └── deploy.yml                 # CI/CD: build & deploy to GitHub Pages
├── public/
│   ├── CNAME                      # Custom domain: satyaruplaw.com
│   ├── satyarup-logo.jpeg         # Firm logo
│   ├── metaminds-logo.jpg         # MetaMinds agency logo
│   └── images/team/               # Team member photos
│       ├── ashwani.jpeg
│       ├── aayush.jpg
│       └── aniruddh.png
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, metadata, transitions)
│   │   ├── page.tsx               # Home page
│   │   ├── globals.css            # Global styles, flip cards, transitions, Lenis
│   │   ├── about/page.tsx         # About the firm
│   │   ├── careers/page.tsx       # Career openings
│   │   ├── contact/page.tsx       # Contact form + info
│   │   ├── news/
│   │   │   ├── page.tsx           # News listing (featured + archive)
│   │   │   └── [slug]/            # Dynamic article pages (6 articles)
│   │   ├── people/page.tsx        # Team profiles (4 members)
│   │   └── practice-areas/
│   │       ├── page.tsx           # Practice areas grid with category filter
│   │       └── [slug]/            # Dynamic detail pages (27 areas)
│   ├── components/
│   │   ├── home/                  # Homepage sections (7 components)
│   │   ├── layout/                # Header, Footer, PageTransition, SmoothScroll
│   │   ├── three/                 # ParticleField (Three.js canvas)
│   │   └── ui/                    # Button, Card, SectionHeading, AnimatedText, ScrollReveal
│   └── lib/
│       ├── animations.ts          # Framer Motion variant presets
│       ├── data.ts                # 27 practice areas + 6 articles (static data)
│       └── utils.ts               # cn(), assetPath()
├── next.config.ts                 # Static export, image config
├── tailwind/postcss configs       # Tailwind CSS v4 setup
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

**32 source files** | **~4,400 lines of code** | **43 statically generated pages**

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#FFFFFF` | Backgrounds, text on dark |
| **Cream** | `#FFF8F0` | Alternate section backgrounds |
| **Warm Gold** | `#C9A96E` | Primary accent, CTAs, highlights |
| **Light Gold** | `#E8D5B5` | Subtle accents |
| **Charcoal** | `#1A1A1A` | Dark backgrounds, primary text |
| **Warm Gray** | `#6B6B6B` | Secondary text, descriptions |

**Typography:** Inter (body) + Playfair Display (headings) via `next/font/google`

---

## Practice Areas (27)

| Category | Areas |
|----------|-------|
| **Litigation** | Supreme Court Practice, High Court Litigation, Civil & Criminal Litigation, White-Collar Crime & Compliance |
| **Corporate** | Corporate & Commercial Law, Mergers & Acquisitions, Insolvency & Bankruptcy (IBC), Contract Drafting & Commercial Disputes |
| **Financial** | Banking & Finance, Securities & Capital Markets, Taxation (Direct & Indirect), Insurance & Reinsurance |
| **Regulatory** | Competition (Antitrust) Law, Government & Public Sector, Employment & Labour Law, Customs/Foreign Trade & FEMA, Consumer Protection |
| **Sector** | Real Estate & Construction, Intellectual Property, Data Protection/Privacy & IT Law, Environmental & Energy Law, Maritime/Shipping & Admiralty, Aviation/Transport & Logistics, Education/Health & Regulatory |
| **Dispute Resolution** | Arbitration & Alternative Dispute Resolution |
| **Personal** | Family Law & Personal Matters, Trust/Society & Nonprofit Law |

---

## Team

| Member | Role | Profile |
|--------|------|---------|
| **Dr. Ashwani Bhardwaj** | Founder & Lead Advocate, AoR Supreme Court | 30+ years, Ph.D., representing Union of India, PSUs, financial institutions |
| **Mrs. Vinay Sonik Bhardwaj** | Advocate, Supreme Court & Delhi HC | Panel Lawyer for Union of India, CAT, AFT, NCDRC practice |
| **Mr. Aayush Bhardwaj** | Legal Associate | BBA LL.B. (Hons) Rank 1, 10+ internships, competition law & corporate advisory |
| **Aniruddh Atrey** | Director of Technology & Innovation | [Full profile →](https://satyaruplaw.com/people/#aniruddh) |

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 9+

### Installation

```bash
git clone https://github.com/AndrousStark/Satyarup-Law-Firm-Website.git
cd Satyarup-Law-Firm-Website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Generates a fully static site in the `out/` directory (43 HTML pages).

### Lint

```bash
npm run lint
```

---

## Deployment

The site is automatically deployed to **GitHub Pages** on every push to `main` via the GitHub Actions workflow at `.github/workflows/deploy.yml`.

**Pipeline:** Push to `main` → Install deps → Build static export → Upload artifact → Deploy to GitHub Pages

**Custom Domain:** `satyaruplaw.com` configured via:
- `public/CNAME` file in the repository
- Namecheap DNS: 4 A records (GitHub Pages IPs) + 1 CNAME (`www` → `androusstark.github.io`)
- HTTPS enforced via GitHub Pages with auto-provisioned Let's Encrypt certificate

---

## Performance Highlights

- **43 pages** fully pre-rendered as static HTML at build time — zero server required
- **Dynamic imports** for Three.js (no SSR overhead for 3D canvas)
- **`next/font`** optimised font loading with `display: swap`
- **Unoptimised images** for static export compatibility with external Unsplash URLs
- **Lenis smooth scroll** with `requestAnimationFrame` loop and proper cleanup
- **GSAP timeline cleanup** on route changes to prevent memory leaks

---

<div align="center">

## Conceptualised & Engineered By

<img src="public/images/team/aniruddh.png" width="150" height="150" style="border-radius: 50%;" alt="Aniruddh Atrey" />

### **[Aniruddh Atrey](https://www.aniruddhatrey.com)**

**AI Engineer | Cybersecurity Specialist | Full-Stack Developer | Entrepreneur**

Director of Technology & Innovation at Satyarup Law Firm
[**View Full Profile on satyaruplaw.com →**](https://satyaruplaw.com/people/#aniruddh)

Aniruddh Atrey is a technology entrepreneur with an M.S. in Computer Science from the University of Florida and 18+ professional certifications from Stanford, Google, Cisco, EC-Council, IBM, and ISO. He has secured 50+ government web assets for the Ministry of Defence of India at INNEFU Labs (DRDO), authored 3 IEEE/Book Chapter publications, and shipped production platforms at Arlo Technologies with 99.9% availability.

He designed and built this entire website — from brand identity and UI/UX design through to the 3D animations, cinematic page transitions, and automated deployment pipeline.

[![Portfolio](https://img.shields.io/badge/Portfolio-aniruddhatrey.com-00d4ff?style=for-the-badge&logo=vercel&logoColor=white)](https://www.aniruddhatrey.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aniruddhatrey-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/aniruddhatrey)
[![GitHub](https://img.shields.io/badge/GitHub-AndrousStark-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndrousStark)
[![MetaMinds](https://img.shields.io/badge/MetaMinds-AI_Agency-00ff88?style=for-the-badge&logo=brain&logoColor=white)](https://metaminds.firm.in)
[![F1Jobs](https://img.shields.io/badge/F1Jobs.io-Co--Founder-9933ff?style=for-the-badge&logo=rocket&logoColor=white)](https://f1jobs.io)
[![Hire Me](https://img.shields.io/badge/Hire_Me-Services-C9A96E?style=for-the-badge&logo=handshake&logoColor=white)](https://www.aniruddhatrey.com/services)

**Key Achievements:**
- 50+ government web assets secured for Ministry of Defence (DRDO)
- 3 IEEE / Book Chapter publications
- 18+ professional certifications (Stanford, Google, Cisco, EC-Council, IBM)
- Clients across 10+ countries — USA, UK, Europe, Singapore, Australia, Dubai
- 2025 Webby Awards Winner — Best Home Page
- GSAP Site of the Month — Oct & Nov 2024

**Want a premium website built for your firm or business?**
[**aniruddhatrey.com/services**](https://www.aniruddhatrey.com/services) | [**metaminds.firm.in**](https://metaminds.firm.in)

*Co-Founder & COO @ [F1Jobs.io](https://f1jobs.io) | Founder & CTO @ [MetaMinds](https://metaminds.firm.in)*

</div>

---

<div align="center">

**© 2026 Satyarup Law Firm. All rights reserved.**

[satyaruplaw.com](https://satyaruplaw.com) | [Technology & Innovation](https://satyaruplaw.com/people/#aniruddh) by [Aniruddh Atrey](https://www.aniruddhatrey.com)

</div>
