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
| 2026-11-19 | Qash full case study from the Qash IMTO Figma (passkeys + face verification, multi-currency accounts & swap, currency themes, cards/bills/rewards); card headline now "8 currencies" | Tosin's Figma link |
| 2026-11-19 | Weave role: Product Designer, end to end | Tosin's confirmation |
| 2026-11-19 | Weave: pre-launch. Qash: closed beta (shown as status on cards and case studies) | Tosin's input |
| 2026-11-19 | Placeholder metrics (XX, dimmed) on Roqqu Stocks/Staking/AEON/Contracts; placeholder testimonials section on homepage (data in `data/site.ts`, dashed gold until filled) | Tosin's request. Replace before launch |
| 2026-11-19 | Removed the +15% team velocity claim everywhere (cards, experience, receipt, EN1 case study, CV) | Tosin's call |
| 2026-11-19 | Nav: links hidden behind a "Menu" button on all screen sizes; full-screen menu with big numbered links, featured work list, contact and live Lagos clock. Bar keeps logo, theme toggle, Get in touch | Tosin's request |
| 2026-11-19 | Loaders: homepage intro plays every visit (~2.4s: coin → line → POS terminal draws → APPROVED → wipe); short (~1s) intro on case studies in the project's gradient; all skippable, off for reduced motion | Tosin chose all 3 options |
| 2026-11-20 | **Canvas homepage prototype** at /canvas (not linked, excluded from sitemap): Figma-style pannable/zoomable board with frame labels, cursors, stickies, stamps, minimap, toolbar, List view escape; classic homepage unchanged | Exploring Tosin's canvas idea side by side before deciding |
| 2026-11-20 | Canvas becomes a **mode**: everyone lands on List; List/Canvas switch in the nav (home + canvas only, desktop); one-time 'New' hint after the intro; choice remembered (desktop); on phones it's 'View as canvas' in the menu | Recommended over a chooser after the loader: no decision before content, no extra delay, canvas is desktop-first |
| 2026-11-20 | Top bar trimmed to logo · List/Canvas icon toggle · theme · Menu. 'Get in touch' moved into the menu as its primary button | Tosin: too many buttons |
| 2026-11-20 | Experience list restyled (ref: Commissioner): company + grey role on the left, 'YYYY to YYYY' on the right, hairline rows, no metric chips; same on home, About and canvas | Tosin's reference |
| 2026-11-20 | **Side rail navigation** on desktop ≥1200px (ref: Commissioner): name, Work · About · Contact · CV, LinkedIn · Email, then view toggle, theme, status and Lagos clock at the bottom. Replaces the top bar on desktop; phones keep the Menu bar; canvas keeps its own chrome. Homepage scroll-spy marks Work/Contact with a gold dot | Visible, zero-click nav |
| 2026-11-20 | Off the clock: illustrations replaced by three playable toys: hold-to-lift barbell with rep/set counter, reaction-time test with saved best, and a bookshelf whose spines pull out to show what each kind of book gives me | Tosin wanted Jaykay-style interactivity; mechanics kept original (no 'day in the house' scene) |
| 2026-11-20 | **Case-study template rebuilt** on Bill Guo's NCS structure: split hero (centred title, outcome line, read time; device on a gold plate bleeding right), meta + serif intro, Overview divider, narrow centred reading column with dotted mono labels, serif chapter openers with dashed dividers, media on soft **gold plates**, Up next, and a sticky chapter navigator. **Light palette** adopted site-wide (#fcf9f4 paper, #262524 ink, #74695e muted, 10% hairlines) | Tosin's reference; gold replaces his green |
| 2026-11-20 | Off the clock: games replaced with **animated line icons** (barbell lifted, controller buttons lighting in turn, book pages turning) on gold plates; dark-mode plate highlights toned down site-wide | Tosin: animated icons, not interaction |
| 2026-11-20 | About "What I believe" restyled after Jaykay's "What I stick to": numbered 2×2 list, line illustrations that **draw themselves in on scroll** (gold guides fade in → ink strokes draw → gold accent → dot). Own icons, own heading ("Principles I design by."), gold instead of his colour; static for reduced motion | Tosin's reference |
| 2026-11-20 | Off the clock moved to the same **draw-in line style** as What I believe (shared `LineList` component, 3 columns): barbell, controller, book draw in on scroll, then idle loop (bar lifts, buttons blink gold in turn, page turns); faster on hover. Cards and gold plates removed | Tosin: "this section as well" |
| 2026-11-20 | Canvas mode uses the **same side rail** as List on desktop ≥1200px (board, toolbar and hint sit to its right; zoom maths offset for the rail). Phones keep the Menu bar in both modes | Tosin: nav position was inconsistent between modes |
| 2026-11-20 | Canvas has **no site nav**: only two pills bottom-left (List/Canvas switch, theme), so the board is for exploring. Supersedes the side rail on canvas | Tosin's call |
| 2026-11-20 | Canvas is **tablet/desktop only** (>800px). Phones: "View as canvas" removed from the menu; /canvas redirects to the list | Tosin: canvas adds little on a phone |
| 2026-11-20 | Case-study chapter navigator rebuilt after Bill Guo's: back pill · capsule with a sliding reel of chapter names (active centred, neighbours dimmed/blurred, edges faded, click to jump) and one progress tick per chapter (passed lit, current gold) · ↑/↓ pill. Capsule grows out of a dot as it appears and widens to fit the name; ↑/↓ hidden on phones | Tosin's reference |
| 2026-11-20 | Project covers (work cards + canvas cards) switched from colourful 3-colour meshes to a **neutral wash**: warm stone in light, warm charcoal in dark, soft top-left highlight and a shaded corner holding a trace (~10%) of the project colour; vignette and grain toned down. `--cover` token in global.css | Tosin: gradients too loud; subtle and classy |
| 2026-11-20 | Covers revised again (neutral read as too plain): **muted tinted studio backdrop**. Each project's palette mixed into warm neutrals: tinted base, soft glow of the project colour behind the device, pale corner highlight, deeper opposite corner. Same in dark on charcoal. Built per cover via `.cover-bg` (the earlier `:root` token couldn't see the project colours) | Tosin: "too plain, make it better" |
