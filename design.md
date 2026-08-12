# Prisma — Design Spec

> **Status: original brief, superseded by the implementation.** The shipped code diverges from this
> document on most specifics — six sections instead of three, a warm near-black `#141312` palette
> instead of black + `#DEDBC8`, Tailwind 4 `@theme` tokens instead of a `tailwind.config.js`, and
> hand-rolled CSS animation instead of framer-motion. See `CLAUDE.md` for how the code actually
> works. Kept here as a record of the original design intent.

Landing page for a creative studio called **Prisma**. Dark, moody, cinematic; warm cream palette.
Three sections: Hero, About, Features.

## Tech stack

Vite + React 18 + TypeScript · Tailwind CSS 3 · framer-motion (all animation) · lucide-react (`ArrowRight`, `Check`).

## Fonts

Loaded from Google Fonts in `index.html`:

- **Almarai** — weights 300, 400, 700, 800. Global default font.
- **Instrument Serif** — italic only. Used for italic accent text in About.

`index.css` sets the global family:

```css
* { font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; }
```

`tailwind.config.js` extends:

- `colors.primary` → `#DEDBC8`
- `fontFamily.serif` → `['"Instrument Serif"', 'serif']`

## Color system

| Use | Value |
|---|---|
| Global background | `#000000` |
| About card background | `#101010` |
| Features card background | `#212121` |
| Primary text (inline style) | `#E1E0CC` |
| Tailwind `primary` (utilities) | `#DEDBC8` |
| Muted text | `text-gray-400`, `text-gray-500` |
| Navbar link | `rgba(225, 224, 204, 0.8)`, hover `#E1E0CC` |

Note the deliberate split: `#E1E0CC` is applied via inline `style`, `#DEDBC8` via Tailwind utilities (`text-primary`, `text-primary/70`).

## Custom CSS utilities (`index.css`)

Two SVG noise textures, both inline data URIs using `feTurbulence`:

- `.noise-overlay` — fractal noise, `baseFrequency: 0.85`, `numOctaves: 3`. Overlay on the hero video.
- `.bg-noise` — fractal noise, `baseFrequency: 0.9`, `numOctaves: 4`. Subtle background in Features.

## Shared animation components

**`WordsPullUp`** — splits text on spaces; each word is a `motion.span` sliding up from `y: 20` to `y: 0`, staggered `0.08s`. Triggered by `useInView({ once: true })`. Prop `showAsterisk` appends a superscript `*` after the final `"a"` of the last word.

**`WordsPullUpMultiStyle`** — takes `{ text, className }[]` segments, splits all into individual words preserving per-word `className`. Same pull-up animation. Words wrapped in `inline-flex flex-wrap justify-center`.

## Section 1 — Hero

`h-screen`, with `p-4 md:p-6` on the section creating an inset effect. Inner container: `rounded-2xl md:rounded-[2rem] overflow-hidden`.

**Background video** — `autoPlay loop muted playsInline`, `object-cover`, fills the container.
`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4`

Over it: `.noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none`, then a gradient `bg-gradient-to-b from-black/30 via-transparent to-black/60`.

**Navbar** — absolutely positioned top center. Black pill hanging from the top edge: `bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8`.
Items: "Our story", "Collective", "Workshops", "Programs", "Inquiries".
`text-[10px] sm:text-xs md:text-sm`, `gap-3 sm:gap-6 md:gap-12 lg:gap-14`.
Link color `rgba(225, 224, 204, 0.8)`, hover `#E1E0CC` (inline styles).

**Hero content** — `absolute bottom-0 left-0 right-0`, 12-column grid: 8 cols heading, 4 cols text + button.

- Heading "Prisma" via `WordsPullUp`, `showAsterisk`.
  `text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]`,
  `font-medium leading-[0.85] tracking-[-0.07em]`, color `#E1E0CC`.
  Asterisk: `absolute top-[0.65em] -right-[0.3em] text-[0.31em]`.
- Description (right column): "Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives."
  `text-primary/70 text-xs sm:text-sm md:text-base`, `line-height: 1.2`.
  Fade up from `y: 20`, delay `0.5`, ease `[0.16, 1, 0.3, 1]`.
- CTA "Join the lab": `bg-primary rounded-full`, black `font-medium text-sm sm:text-base` label, plus a black circle `bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10` holding a cream `ArrowRight`.
  Hover: `hover:gap-3`, circle `group-hover:scale-110`.
  Fade up from `y: 20`, delay `0.7`, same ease.

## Section 2 — About

`bg-black` section, centered content. Inner card `bg-[#101010]`, centered text, `max-w-6xl`.

- Label "Visual arts" — `text-primary text-[10px] sm:text-xs`.
- Heading via `WordsPullUpMultiStyle`, 3 segments:
  1. `"I am Marcus Chen,"` — `font-normal` (Almarai)
  2. `"a self-taught director."` — `italic font-serif` (Instrument Serif italic)
  3. `"I have skills in color grading, visual effects, and narrative design."` — `font-normal`

  Container: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]`.
- Body paragraph with scroll-linked per-character opacity:
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
  `text-[#DEDBC8] text-xs sm:text-sm md:text-base`.

  Each character is an `AnimatedLetter`. `useScroll` with `offset: ['start 0.8', 'end 0.2']`. Opacity maps `0.2 → 1`; per-character `charProgress = index / totalChars`, input range `[charProgress - 0.1, charProgress + 0.05]`.

## Section 3 — Features

`min-h-screen bg-black`, with `.bg-noise` overlay at `opacity-[0.15]`.

Header via `WordsPullUpMultiStyle`, `text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal`:

1. "Studio-grade workflows for visionary creators." — cream
2. "Built for pure vision. Powered by art." — `text-gray-500`

**Card grid** — `lg:h-[480px]`, `gap-3 sm:gap-2 md:gap-1`, 1 col mobile → 2 col `md` → 4 col `lg`.
Each card: scale `0.95 → 1` + fade in, `useInView({ once: true, margin: '-100px' })`, staggered `0.15s`, ease `[0.22, 1, 0.36, 1]`.

**Card 1 — video.** Full-bleed `autoPlay loop muted playsInline object-cover` video:
`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4`
Bottom text: "Your creative canvas." in `#E1E0CC`.

**Cards 2–4** — `bg-[#212121]`. Shared layout: image icon at top (`w-10 h-10 sm:w-12 sm:h-12`, rounded), title with number, checklist items (`Check` icon in `text-primary`, `text-gray-400` copy), "Learn more" link with `ArrowRight` rotated `-45deg`.

| # | Title | Icon | Checklist |
|---|---|---|---|
| 01 | Project Storyboard. | [icon 1](https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85) | 4 items |
| 02 | Smart Critiques. | [icon 2](https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85) | 3 items — AI analysis, creative notes, tool integrations |
| 03 | Immersion Capsule. | [icon 3](https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85) | 3 items — notification silencing, ambient soundscapes, schedule syncing |

## Responsive

Fully responsive across mobile, tablet, desktop. Features cards 1 → 2 (`md`) → 4 (`lg`) columns. Hero text scales `26vw` → `19vw`. Navbar gaps compress on mobile. All padding, font sizes and spacing use Tailwind responsive prefixes (`sm`/`md`/`lg`/`xl`/`2xl`).
