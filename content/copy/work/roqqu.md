# Roqqu case study (draft v1)

> Rewritten from your old case study plus your CV, with results moved to the top. `[CONFIRM: all metrics below are OK to publish]`

## Header
**Title:** Making crypto feel safe enough to trade
**Sub:** Redesigning onboarding, fiat payments and trading tools for one of Africa's largest crypto platforms.

| Role | Team | Timeline | Platform |
|---|---|---|---|
| Senior Product Designer | `[TOSIN: e.g. 2 PMs, 6 engineers, 1 other designer]` | Nov 2023 – Present | iOS, Android, Web |

`[IMG: hero, phone mockup on orange; reuse old-site/images/roqqu-01.png]`

## TL;DR
- **Problem:** New users were dropping out during KYC and struggling to move between fiat and crypto. Support was flooded with "where's my money?" queries.
- **What I did:** Ran discovery and redesigned KYC, designed Qash (fiat on/off-ramp), and built self-serve tools: rate, network and transaction checkers.
- **Results:**
  - **−45%** onboarding time
  - **+22%** onboarding → first transaction
  - **+18%** successful trade completion
  - **101,045** Qash transactions in year one
  - **−30%** support queries

## Context
Roqqu lets retail and Web3 users across Africa buy, sell, store and send crypto. In crypto, every interaction feels high-risk: one wrong network or one confusing KYC step and users lose confidence, or money.

The business needed more new sign-ups to become active traders, and fewer support tickets from users who didn't understand what was happening to their funds.

## My role
I lead product design for the core trading, wallet and onboarding flows. I work with product and engineering leadership on strategy for core trading and Web3 wallet expansion. I also introduced a structured discovery process (research synthesis, journey mapping, problem-framing workshops) that now feeds roadmap prioritisation.

## What we learned
Mixed-method research (interviews, surveys, funnel analytics in Mixpanel) surfaced four themes:
1. **Onboarding was the biggest leak.** KYC was long, confusing and failed silently.
2. **Users didn't feel equipped.** Many didn't understand networks, fees or confirmations.
3. **Uncertainty drove support load.** "Has my transaction gone through?" was the top query.
4. **Security anxiety was everywhere,** especially around sending funds and fiat conversion.

`[IMG: research synthesis / journey map, placeholder]`

## Key decisions

### 1. KYC as a guided, recoverable journey
**Insight:** Users abandoned when they didn't know how many steps were left or why a document was rejected.
**Decision:** Break KYC into clear, numbered steps (identity, BVN, selfie, document) with guidelines *before* capture, real-time automated verification, and specific, fixable error states.
**Result:** 45% shorter onboarding time.
`[IMG: KYC flow screens; reuse old-site/images/roqqu-03…06.png]`

### 2. Qash: fiat in and out without the maths
**Insight:** Converting NGN, USD or GBP to crypto meant leaving the app or doing mental arithmetic, which is where trust broke.
**Decision:** A native fiat wallet with live rates shown up front, the total cost before confirmation, and a single flow for conversion.
**Result:** 101,045 transactions in its first year.
`[IMG: Qash screens; reuse old-site/images/roqqu-07…09.png]`

### 3. Self-serve answers instead of support tickets
**Insight:** Most support queries were people checking status, not real problems.
**Decision:** Rate, Network and Transaction checkers that show live network health, fees and confirmation status in context.
**Result:** 30% fewer support queries.
`[IMG: tools screens, placeholder]`

### 4. Simplifying the core trade flow
**Insight:** Buy/sell, transfers and wallet management had grown complex, with too many choices at high-risk moments.
**Decision:** `[TOSIN: 1–2 lines on what specifically changed, e.g. fewer steps, clearer confirmation, network auto-selection]`
**Result:** 18% more successful trade completions.
`[IMG: trade flow before/after, placeholder]`

## Also shipped
**Roqqu Academy:** in-app learning paths with quizzes and short videos for beginner and advanced traders.

## Results
| Metric | Change |
|---|---|
| Onboarding time | −45% |
| Onboarding → first transaction | +22% |
| Successful trade completion | +18% |
| Qash transactions (year 1) | 101,045 |
| Support queries | −30% |
| User satisfaction (survey) | +20% |

`[TOSIN: a quote from a PM, user or stakeholder would make this much stronger]`

## Reflection
`[TOSIN: draft suggestion. Edit freely]` If I did it again, I'd instrument the KYC funnel step by step from day one. We found the biggest drop-off point through interviews first, and earlier data would have got us there faster.

**Next: EN1 →**
