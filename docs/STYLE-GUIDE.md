# Curlie Girlie Collective — Brand Style Guide

## Brand Overview

Curlie Girlie Collective is a faith-centered podcast about hair, identity, and becoming who God made you to be. Hosted by Sabrina and Chanelle, the brand is warm, feminine, grounded in faith, and premium without being flashy. The visual identity balances soft elegance with bold confidence.

**Tagline**: *Faith. Hair. Becoming.*
**Mission Quote**: *"God wants to heal us to such a degree that multitudes are won."*

---

## Logo

The logo is always rendered as an image (`/images/logo.png`), never recreated in text. It uses a custom script/display font that is part of the brand identity.

### Logo Variants

| File | Usage |
|------|-------|
| `logo.png` | Primary logo — used in navbar, hero, loading screen |
| `logo-final.png` | Final approved version |
| `logo-monogram.png` | Icon-only mark for favicons, social avatars |
| `logo-duo.png` | Logo with both hosts |

### Logo Usage Rules

- **Always use the image** — never type "Curlie Girlie Collective" in a heading font as a substitute
- On dark backgrounds: apply `brightness-0 invert` filter to make it white
- On light backgrounds: use as-is (no filter)
- Minimum clear space: equal to the height of the "C" in the logo
- Never stretch, rotate, or recolor the logo beyond the invert filter

### Caricatures

| File | Usage |
|------|-------|
| `sabrina-cartoon.png` | Sabrina's caricature — loading screen, about page |
| `chanelle-cartoon.png` | Chanelle's caricature — loading screen, about page |
| `duo-cartoon.png` | Both hosts together |

---

## Color Palette

### Primary Colors

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| **Gray 900** | `text-gray-900` | `#111827` | Headings, primary text |
| **Gray 600** | `text-gray-600` | `#4B5563` | Nav links, secondary text |
| **Gray 400** | `text-gray-400` | `#9CA3AF` | Muted text, captions |
| **Gold** | `--color-gold` | `#D4AF37` | Accent highlights, hover underlines, loading bars |
| **Gold Light** | `--color-gold-light` | `#F5E6B8` | Badge borders, subtle accents |

### Background Colors

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| **White** | `bg-white` | `#FFFFFF` | Page headers, hero sections, cards |
| **Cream** | `--color-cream` | `#FFFBF5` | Loading screen background, badge fills |
| **Pink 50** | `--color-pink-50` | `#FDF2F8` | Page body backgrounds, wave dividers |
| **Pink 100** | `--color-pink-100` | `#FCE7F3` | Subtle section backgrounds |

### Dark Palette (Footer)

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| **Gray 950** | `bg-gray-950` | `#030712` | Footer background |
| **Gray 800** | `border-gray-800` | `#1F2937` | Footer dividers |
| **Gray 200** | `text-gray-200` | `#E5E7EB` | Footer headings |
| **Gray 500** | `text-gray-500` | `#6B7280` | Footer links |

### Soft Pink Scale (used sparingly in content areas, not in navigation or headers)

```
50:  #FDF2F8 (page backgrounds)
100: #FCE7F3 (section tints)
200: #FBCFE8 (card accents)
300: #F9A8D4 (decorative only)
```

> **Important**: Pink is used as a warm tint on body sections and content cards — NOT in the navbar, page headers, footer, or loading screens. Those use neutrals (gray/white/cream) with gold accents.

---

## Typography

### Font Stack

| Role | Font | Variable | Usage |
|------|------|----------|-------|
| **Display** | Playfair Display | `--font-playfair` | h1, h2, h3, `.font-display` |
| **Body** | DM Sans | `--font-dm-sans` | p, span, a, li, `.font-body` |
| **Sans fallback** | Inter | `--font-inter` | System fallback |

### Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Hero logo | Image, `h-24` to `h-52` responsive | — | White (inverted) on mesh gradient |
| Page header title | `4xl` → `6xl` | Black (900) | `text-gray-900` |
| Page header accent | Same as title | Black (900) | `text-gradient-gold` |
| Section titles | `3xl` → `4xl` | Black (900) | `text-pink-900` (content areas only) |
| Body text | `lg` (18px) | Regular (400) | `text-gray-500` or `text-pink-700/60` |
| Small/Meta | `sm` (14px) | Medium (500) | `text-gray-400` |
| Badges | `xs` (12px) | Semibold (600) | `text-gray-500` in cream pill |
| Buttons | `sm` → `lg` | Semibold-Bold | White on `bg-gray-900` |

### Text Effects

- **Gold gradient text**: `text-gradient-gold` — `linear-gradient(135deg, #D4AF37 → #C9A227 → #B8941F)`
- **Selection**: `rgba(236, 72, 153, 0.25)` background, `#831843` text

---

## Navigation

The navbar is clean, neutral, and minimal. **No hot pink.**

| Element | Style |
|---------|-------|
| Background | White with scroll-based opacity (0 → 0.95) + blur |
| Border on scroll | `rgba(0, 0, 0, 0.06)` — barely visible |
| Logo | Image only (`logo.png`), `h-9`, no text beside it |
| Links | `text-gray-600 hover:text-gray-900` |
| Hover underline | `bg-gold` — gold accent bar |
| CTA button | `bg-gray-900 text-white rounded-full` |
| Hamburger | `text-gray-600` |
| Mobile drawer | `bg-white`, links in `text-gray-700 hover:bg-gray-50` |
| Mobile overlay | `bg-black/30 backdrop-blur-sm` |

---

## Page Headers (Subpages)

White background with very subtle radial gradients (gold and blush at low opacity).

| Element | Style |
|---------|-------|
| Background | `bg-white` with subtle radial overlays |
| Badge pill | `bg-cream border border-gold-light/60 rounded-full` |
| Badge text | `text-gray-500 text-xs uppercase tracking-wide` |
| Title | `text-gray-900 font-black` |
| Accent word | `text-gradient-gold` |
| Subtitle | `text-gray-500 text-lg` |
| Sparkles | Gold at 20-30% opacity |
| Wave divider | SVG filled with `#FDF2F8` |

---

## Footer

Rich dark pink gradient — deep, warm, and luxurious.

| Element | Style |
|---------|-------|
| Background | Gradient: `#6B1040` → `#831843` → `#9D174D` → `#831843` → `#5B0E36` |
| Mesh overlay | Subtle gold + pink radials at 30% opacity for depth |
| Top accent line | Gold gradient at 30% opacity |
| Logo | Image with `brightness-0 invert opacity-80` |
| Quote | *"God wants to heal us to such a degree that multitudes are won."* — italic, `text-pink-200/70` |
| Sub-tagline | "Faith, hair, and becoming who God made you to be." — `text-pink-300/40` |
| Section headings | `text-pink-100 font-bold` |
| Links | `text-pink-200/50 hover:text-white` |
| Divider | `border-pink-700/30` |
| Copyright | `text-pink-300/40` |
| Heart icon | `text-gold` |

---

## Loading Screen

The `LoadingScreen` component (in `ClientShell`) shows on first page load.

| Element | Style |
|---------|-------|
| Background | Warm gradient: cream → pink-50 → pink-100 → cream |
| Floating orbs | `bg-blush/15` and `bg-gold-light/20` with blur |
| Caricatures | Both Sabrina and Chanelle, `h-40 md:h-56 lg:h-64`, gentle float animation |
| Logo | Large: `h-20 md:h-28 lg:h-32` |
| Tagline | "Faith · Hair · Becoming" — `text-gray-400`, spaced uppercase |
| Loading bar | 2px, gold shimmer gradient on `bg-gray-200` track |

The `loading.tsx` (Next.js suspense fallback) uses `bg-cream` with a gold spinner and `text-gray-400`.

---

## Effects & Animations

### Floating Sparkles
Gold `SparkleIcon` components with gentle y-axis and rotation animations. Used in hero and page headers at low opacity (20-30%).

### Glassmorphism (hero section only)
```css
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```
Only used on the homepage hero (which has a mesh-gradient background). Not used in subpage headers.

### Mesh Gradient (homepage hero only)
The animated mesh gradient with pink/gold radials is **only** used for the homepage hero section. Subpage headers use plain white.

### Shimmer Sweep
Gold shimmer animation for premium CTAs. Duration: 4s infinite.

### Magnetic Cards
Cards lift and tilt on hover with perspective transform.

### Aurora Effect
Animated gradient orbs for the homepage hero background only.

---

## Component Patterns

### Buttons

| Type | Style |
|------|-------|
| **Primary CTA** | `bg-gray-900 text-white rounded-full shadow-md` |
| **Hero CTA** | `bg-white text-pink-600 rounded-full shadow-xl shimmer glow-pulse` |
| **Secondary** | `glass text-white rounded-full` (on dark backgrounds) |
| **Tertiary** | `bg-pink-100 text-pink-600 rounded-full` (content areas) |

### Cards

- White background, `rounded-3xl`, `shadow-lg shadow-pink-200/20`
- Content area cards can use soft pink tones
- Hover: lift with `whileHover={{ y: -6 }}` or `magnetic-card`

### Badges/Pills

- Page headers: `bg-cream border border-gold-light/60 rounded-full`
- Content areas: `bg-pink-100 text-pink-600 rounded-full`
- On dark backgrounds: `glass rounded-full`

### Section Layout

- Max-width: `max-w-7xl` (1280px)
- Section padding: `py-20` to `py-24`
- Card padding: `p-6` to `p-8`
- Grid: 1 col mobile → 2 cols tablet → 3 cols desktop

---

## Shadows

| Context | Shadow |
|---------|--------|
| Content cards | `shadow-lg shadow-pink-200/20` |
| Nav CTA button | `shadow-md` |
| Hero CTA | `shadow-xl shadow-pink-900/20` |
| Loading screen art | `drop-shadow-xl` / `drop-shadow-lg` |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | `rounded-full` |
| Content cards | `rounded-3xl` |
| Form inputs | `rounded-xl` |
| Badges | `rounded-full` |

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | <640px | Mobile-first base |
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop, nav switch |
| `xl` | 1280px | Wide desktop |

---

## Architecture Pattern

Every page follows the server/client component split:

```
src/app/{page}/
  page.tsx          → Server component (metadata, JSON-LD, data fetching)
  {Page}Client.tsx  → Client component (animations, interactivity)
```

Client pages wrap in `<ClientShell>` (provides Navbar, LoadingScreen, cursor effects) and include `<FooterSection />` before closing.

---

## Do's and Don'ts

### Do
- Always use the logo image — never type the brand name as a heading substitute
- Keep navigation and headers neutral (grays + gold accents)
- Use pink tones only in content body sections (cards, backgrounds, text)
- Let gold be the premium accent — underlines, badges, loading indicators
- Include both caricatures in the loading screen at generous sizes
- Use Playfair Display for headings, DM Sans for body text
- Maintain generous whitespace

### Don't
- Put hot pink in the navbar, page headers, footer, or loading screen
- Use `mesh-gradient` outside the homepage hero
- Use `gradient-pink` for buttons (use `bg-gray-900` instead)
- Type "Curlie Girlie Collective" in a font as a logo replacement
- Mix pink navigation with neutral page headers — stay consistent
- Use the old Geist font references (they were replaced)
- Use `bg-pink-900` for the footer (use `bg-gray-950`)
