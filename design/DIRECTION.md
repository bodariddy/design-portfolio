# Design direction v1: "Vivid yet classy"

Built from moodboard v1 (`inspiration/MOODBOARD.png`). The brief: break the stereotype of the dark-mode portfolio with device mockups, and stay credible to a hiring manager.

## The big idea: one signature object, set in Lagos
Anmol has a TV, and HUMAN.md has a staged room. **You get a POS terminal.**

The handheld card terminal is everywhere in Lagos, on every street corner and in every shop. It's fintech you can hold, and it's very *you*: you design the software behind money moving. It breaks the stereotype because no one expects it, yet it's instantly readable to anyone in payments.

- **Its screen shows animated product UI,** e.g. Roqqu's balance counting up, a KYC step ticking green, a Clink payment link going "paid". That's the TV-channel idea from Anmol, through a fintech lens.
- **The keypad works:** press 1–5 (or use the arrow keys) to switch "channels"/projects. The projects also auto-cycle.
- **It prints a receipt:** each project's results "print" out of the top as a paper receipt, e.g. `+22% ACTIVATION ··· ROQQU ··· APPROVED ✓`. That's your metric strip, made into a moment.
- Drawn as clean line art (like Anmol), not 3D. It stays light, fast and classy.

## Structure: theatre on top, clarity underneath
1. **Loader (≤1.5s, first visit only, skippable):** a single coloured dot (the coin) drops → lands on a thin line that fills as the progress bar → the line becomes the terminal's top edge, which draws itself in. Resn's idea, in a fintech key.
2. **Hero:** name + headline on a calm canvas (Ethan), with the terminal as the one living element.
3. **Selected work:** a full-bleed edge-to-edge grid with hover spotlight (Ben Doan). Each tile **takes on its project's colour world** (HUMAN.md): Roqqu orange, EN1 graphite, Clink cobalt, Glover violet, Weave TBC.
4. **Intro statement built on scroll:** big words appear one by one ("I make *money*… feel *simple*").
5. **Experience:** a `year · company · role` list (Ethan), with one metric per row.
6. **Contact:** "Hiring a senior product designer?" + the receipt as a business card.
7. **Case-study pages:** quiet and editorial. The project's colour sits in the header band only, and the body is calm reading layout.

## Colour: calm base + vivid accents, in both themes
| Token | Light ("paper") | Dark ("ink") |
|---|---|---|
| `--bg` | `#F4EFE6` warm paper | `#141312` soft ink (not pure black) |
| `--surface` | `#FFFFFF` | `#1E1C1A` |
| `--text` | `#1A1917` | `#F2EDE4` |
| `--muted` | `#6B665E` | `#9C968C` |
| `--line` | `#1A1917` @ 12% | `#F2EDE4` @ 12% |
| `--signal` (the coin, links, cursor) | `#E8451E` naira-red/orange | `#FF5A2E` |

**Project colour worlds** (used as full fields on tiles + case-study headers, with text contrast checked per theme):
Roqqu `#F26B1D` · EN1 `#2B2B2E` · Clink `#2846E8` · Glover `#7B4DFF` · Weave TBC

In dark mode, the colour fields deepen slightly and the terminal screen glows. Theme follows the system by default, with a toggle (styled as a small physical switch on the terminal).

## Type: three voices
- **Display:** a bold expressive grotesk, e.g. *Bricolage Grotesque* (free, Google Fonts). This replaces the Bagoss trial.
- **Accent:** an elegant serif italic for single words and personality, e.g. *Instrument Serif*.
- **Mono:** receipts, labels, margin notes, e.g. *JetBrains Mono* or *IBM Plex Mono*.
- **Body:** the display family at text sizes, or *Inter*, for case-study readability.

## Motion rules (classy, not chaotic)
- One "wow" per screen. Everything else is subtle (fade/slide 200–400ms, ease-out).
- Every animation respects `prefers-reduced-motion`.
- No WebGL. Everything is SVG + CSS + a small amount of JS, so it loads fast on mobile data.
- The loader runs only on the first visit in a session.

## Open questions for you
1. **POS terminal as the signature object: yes, or a different one?** Alternatives: a vintage calculator, an ATM screen, a phone on a Lagos danfo dashboard.
2. Colour worlds: keep your old project colours (orange / blue / purple / black) or rethink them?
3. Default theme on first visit: follow the system, or always open in one theme?
