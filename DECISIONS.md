# Decisions log

| Date | Decision | Why |
|---|---|---|
| 2026-11-19 | Host on **Vercel** | Your choice |
| 2026-11-19 | Single repo: `inspiration/`, `content/`, `design/`, `site/`, `audit/` | Keeps the research, copy, design and code in one place |
| 2026-11-19 | **Astro 7** in `site/` (Vercel root directory = `site`) | Fast static output, MDX case studies, first-class Vercel support |
| 2026-11-19 | Audience: **full-time senior roles** | Your call. Copy is results first, aimed at hiring managers |
| 2026-11-19 | EN1 dates: **May 2023 – Jul 2026** | CV is correct |
| 2026-11-19 | Featured order: **Roqqu → EN1 → Clink → Glover Business → (Weave)** | Your call |
| 2026-11-19 | Locked projects go public with new case studies | Your call |
| 2026-11-19 | Domain: `*.vercel.app` for now | Your call |
| 2026-11-19 | Signature object: **POS terminal** (trial) | Your call. Revisit after seeing it live |
| 2026-11-19 | New Lagos colour worlds: Roqqu indigo, EN1 palm, Clink lagoon, Glover hibiscus, Weave laterite; gold coin accent | Old palette rethought |
| 2026-11-19 | Theme follows the system, with a manual switch | Your call |
| 2026-11-19 | Live preview at tosin-design-portfolio.vercel.app (auto-deploys from `main`) | Vercel |
| 2026-11-19 | Positioning: **senior product designer who builds**, stated honestly: Framer + AI tools, no claim of hand-written code | Your input. Differentiates without overclaiming |
| 2026-11-19 | Headline: "I design how money moves." | Previous one overlapped with another ex-Roqqu designer's tagline |
| 2026-11-19 | CV rebuilt as `site/src/pages/cv.astro`, rendered to PDF with `npm run cv`; no phone number | ATS-friendly, on-brand, versioned with the site |
| 2026-11-19 | Off the clock: Training, Gaming, Reading | Your input |
| 2026-11-19 | Roqqu metrics (45%, 101,045, −30% queries, +20% CSAT) OK to publish | Your confirmation |
| 2026-11-19 | Contract label on EN1, Clink, STEMuli. Full-time roles (Roqqu, Glover, Sterling) unlabelled, as is standard. Sterling and Glover genuinely overlapped | Your input |
| 2026-11-19 | Polish pass 1: mobile menu, hide-on-scroll nav, paper grain, native page transitions, reveals, skip link, OG image, device-frame placeholders, cursor pill, hidden "Coin run" game (press G), dark-mode accent contrast | Make it feel finished and classy |
| 2026-11-19 | Case-study template (`layouts/Case.astro`): colour-world hero → TL;DR + results → context/role/insights → decisions with screen strips → results → reflection → next project | Results first, scannable in ~90s |
| 2026-11-19 | Roqqu screens from Figma limited to flows Tosin publicly claimed before (KYC, send/tx states, checkers, Qash, Academy). Figma covers list a 5-person team (Crypto) and Jaykay + Tosin (Stocks) | Honest attribution. Stocks excluded until scope is confirmed |
| 2026-11-19 | `DRAFT` flag in `data/site.ts` shows dashed review notes on the site. Set false at launch | Keeps open questions visible during review |
| 2026-11-19 | Roqqu expanded into two parts: foundations (KYC, send, checkers, Qash, Academy) + platform (Stocks, Staking, AEON, Contracts) | Tosin confirmed scope |
| 2026-11-19 | Glover project is **Glover Lite** (not Business); Clink and Glover Lite case studies rebuilt from old Figma portfolio | Tosin's correction + own source material |
| 2026-11-19 | Added **Qash** as project 05 (placeholder case study); Weave moves to 06; terminal now 6 channels, theme toggle moved to brand row | Tosin's request |
| 2026-11-19 | Stocks: Tosin sole designer (Jaykay reviewed only, no credit needed). Qash app: co-designed with one other designer | Tosin's confirmation |
| 2026-11-19 | Clink reflection: shut down after fraud and chargeback issues; framed as the origin of a risk-first design approach | Tosin's input |
| 2026-11-19 | EN1 placeholder case study from old-site copy and images until the Figma link arrives | Tosin's request |
| 2026-11-19 | Featured order: **Roqqu → Qash → EN1 → Clink → Glover Lite → Weave** (terminal keys 1–6 follow it) | Tosin's call |
| 2026-11-19 | Edubanc and STEMuli added as **Other projects**: compact list under the grid, each with its own case study built from the old portfolio | Tosin's request. Keeps the grid focused on fintech |
| 2026-11-19 | EN1 full case study from Figma: website, configurator, owner app/Kitshop (mobile), admin + ops dashboards + ERP, in-car infotainment, design system. Web Kitshop pending | Tosin's Figma link |
| 2026-11-19 | Weave case study from Figma: Purses, approvals, collections, landing + store screenshots. Role and metrics TBC | Tosin's Figma link |
| 2026-11-19 | Footer glow (ref: Wikicasts), toned down per feedback: dark = low single-hue violet haze at the bottom edge; light = faint white halo, no colour; visible "Skip intro" pill on the loader (ref: Cinetic) | Tosin liked Wikicasts' bottom gradient |
| 2026-11-19 | **Primary brand colour = coin gold `#F2A900`** (logo dot, loader, active keys, favicon, selection). Footer haze uses it at ~15–20% opacity in dark; light mode keeps only a faint white halo | Tosin asked to tone the gradient down and use the site's primary colour |
| 2026-11-19 | Work grid redesigned as a **framed, image-led masonry** (outer bezel + inset media, 3 columns, one tall + one short per column, letter badge, frosted info panel on hover/always on touch). Footer haze made fainter again | Tosin's card reference |
| 2026-11-19 | Case-study heroes use a **premium device stage** (thin titanium iPhone or browser window on a fluted plinth in the project colour; tilts → straightens on scroll; screens cycle). Heights capped at ~72vh / 760px. Screen strips use the same frame | Tosin: "premium mockups, appropriate height" (ref: Glebich video) |
| 2026-11-19 | **Interaction wall** on Roqqu: 6 looping micro-interactions rebuilt in code (slide-to-confirm, liveness, tx timeline, leverage/liquidation, return calculator, network check); click to expand, Esc to close | Ref: Tiago Costa / Wealthsimple video |
| 2026-11-19 | Weave stays **Weave** (not OneWeave) | Tosin's call |
| 2026-11-19 | About opens with a plain, factual 5-line bio linking every company to its case study; "Updated <build date>" on About + footer; hand-drawn "New" scribble on the Weave tile; live Lagos clock (seconds) in footer | Refs: Benji Taylor, Bill Guo |
| 2026-11-19 | Project cards: **copy and metrics always visible** (2 columns, framed image above; name, years, outcome headline, metric chips, tags, "View case study"). Hover-only info panel removed | Tosin: recruiters need copy at a glance |
| 2026-11-19 | Covers: each project has a **3-colour mesh** (`mesh` in projects.ts) shared by its card and case-study hero, with real screens in framed phones / browser. Qash now uses its own screens | Tosin: covers felt bland and monotonous |
| 2026-11-19 | Spacing/alignment pass: experience columns fixed-width (rows align), tighter hero→work and statement spacing, contact bottom trimmed, About sections on one 110px rhythm with dividers, mobile terminal gap fixed | Tosin: irregular spacing |
