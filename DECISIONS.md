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
