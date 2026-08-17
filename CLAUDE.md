# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal site for **Мөнх-Оргил.Б (Orgil)** — a futures day trader — presenting his three communities: **CRG** (public & private trading), **Limitless** (10-man private), and **NGU** (self-improvement, not yet launched). Content is Mongolian Cyrillic. Remote is `hanaa5qn-crypto/orgil-portfolio-`.

Originally a Google AI Studio export themed as a fictional film studio ("Prisma / Marcus Chen"). That theme is fully removed; if you find a trace of it, it's a bug.

## Commands

```
npm run dev       # vite --port=3000 --host=0.0.0.0
npm run lint      # tsc --noEmit — the only check; no ESLint, no tests
npm run build     # vite build
npm run preview   # serve the production build
```

## The content rule — read this before touching any copy

**`src/data/content.ts` is the single source of truth for every user-facing string, and the Mongolian in it is the client's own writing.**

- No user-facing text may be hardcoded in a component. Components import from `content.ts` and render. This exists so a native speaker can proofread and correct the entire site in one file without reading JSX.
- **Do not reword, "improve", translate, or re-register his Mongolian.** He asked for spelling checks only. An LLM proofreading pass previously rewrote his phrasing into more "correct" idiom and it was reverted wholesale — don't repeat it. Fixing an unambiguous typo is fine; rewriting a sentence is not.
- **Never invent content for him.** No trading returns, win rates, member counts, testimonials, dates, bio facts, or articles. An earlier pass fabricated three "principle" cards, per-community bullet lists, and two journal articles written as his opinions; all were deleted. If a design slot has no supplied text, the string is the literal `[TODO: Orgil-оос авах]` (or `[TODO: handle]` for socials) and it renders visibly so he can see what's missing. Leave those in place.
- The XM broker offer in `PARTNER` is his own stated promotion — the `$50 credit` / `100% deposit bonus` figures are his claims. Render verbatim; don't adjust or embellish them.

Verify after any copy work:
```
grep -rnP "[\x{0400}-\x{04FF}]" src/components/ src/App.tsx   # must return nothing
```

## Fonts — Cyrillic is a hard constraint

The original fonts (Almarai, Instrument Serif, Be Vietnam Pro) have **zero Cyrillic coverage** and silently fell back to a system font on Mongolian text. They were replaced with **Inter** (`font-sans`/`font-body`/`font-headline`) and **Playfair Display** (`font-serif`, the ORGIL wordmark). Any font you introduce must serve the Cyrillic subset — check `fonts.googleapis.com/css2?family=<Name>` for a `cyrillic` unicode-range block before adopting it.

## Architecture

`App.tsx` holds `activeSection` and the inquiry-modal state; sections render Hero → About → Communities → Footer, with `Navbar` fixed above. Navigation is `scrollIntoView` against section ids `hero` / `about` / `communities` / `contact`, and `NAV` in `content.ts` must only ever reference ids that exist — a label/id mismatch was a real bug here.

Community CTAs branch on `Community.ctaHref`: a non-null URL renders an external `<a target="_blank" rel="noopener noreferrer">` (CRG → Discord invite, Limitless → a Google Form), while `null` renders a `<button>` that opens the inquiry form preselected to that community (NGU, which is pre-launch and carries the `status: 'Удахгүй'` badge). `InquiryModal` posts to FormSubmit.co (`formsubmit.co/ajax/<email>`), which relays submissions to Orgil's inbox — the first-ever submission sends him a one-time activation email he must click. If the relay fails, it falls back to opening Gmail compose prefilled with the message.

## Styling and animation

**Tailwind CSS 4** via `@tailwindcss/vite`. There is no `tailwind.config.js` and adding one won't be read — tokens are CSS custom properties in the `@theme` block of `src/index.css`. In practice components hardcode hex values in arbitrary variants: surfaces `#141312` / `#1c1b1a` / `#201f1e`, About card `#101010`, cream `#fbf7e4`, muted `#c9c6bc`, dim `#939187`, borders `#48473f` at low opacity.

Every animation is hand-rolled (no animation library installed) and should stay that way rather than becoming two systems:
- `.word-pull-up` toggled to `.visible`, staggered via inline `transitionDelay` (hero wordmark).
- The About paragraph reveal is a `window` scroll listener computing `scrollProgress` from `getBoundingClientRect()` and setting per-character opacity inline. It re-renders every character per scroll event, unthrottled.
- `animate-fadeIn` and its keyframes are defined in `index.css` (they were missing, so modals used to pop in with no transition).

## Gotchas

- **`HeroSection.tsx`: the video container must stay `z-0`.** It was `-z-20`, which painted the video behind App's opaque `bg-[#141312]` — neither `#hero` nor App's root div establishes a stacking context — so the hero rendered as a black rectangle while the video played invisibly underneath. The comment above it explains this; keep both.
- **Card imagery was deliberately removed.** The only assets available were AI Studio placeholders showing an unrelated product UI branded "Prisma Studio". `portfolioData.ts` now holds just `HERO_VIDEO`. Don't reintroduce stock or generated imagery — wait for Orgil's own assets.
- `.env` holds a real `GEMINI_API_KEY` that no code reads (`.gitignore` covers `.env*`) — worth revoking.
- `npm run clean` deletes a `server.js` that doesn't exist.

## design.md

The original brief for the abandoned "Prisma" film-studio theme. Historical only — it describes neither the current content nor the current stack.
