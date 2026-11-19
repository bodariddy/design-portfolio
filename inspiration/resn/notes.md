# Resn (resn.co.nz)
**Tags:** `motion` `colour` · **Status:** 🟢 steal (loader idea, dark mode mood)
**Why you picked it:** the loader animation and dark mode.

## What it does
- **Loader as a story (~7s):** black → a single **water drop** falls from the top → lands on a thin horizontal line that acts as a progress bar → a flash → the drop becomes a **3D faceted crystal** that slowly rotates, with "Resn · Creative Studio · Est. 2004" set inside it.
- It's minimal: one object, one line, lots of black. The progress bar is part of the animation, not a spinner.
- **Dark mode done properly:** near-black charcoal (#1D1D1F-ish), not pure #000. Light-weight type (Fort Extralight / Book) in soft white. Chromatic aberration on the crystal edges.
- UI chrome appears only after the intro ("View all projects", menu, "click & hold").

## Take
- **A loader built from one meaningful object** that turns into the hero. For fintech: a **coin / naira dot drops → lands on the line → becomes your mark**.
- The progress line as part of the composition.
- Soft charcoal dark mode with light-weight type.

## Avoid
- 7 seconds is too long for recruiters. Cap it at ~1.5s, run it only on the first visit, and make it skippable (and off for `prefers-reduced-motion`).
- WebGL weight. Keep it SVG/CSS so it's fast on Nigerian mobile networks too.
