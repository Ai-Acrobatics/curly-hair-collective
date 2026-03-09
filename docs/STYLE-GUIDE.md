# Curly Hair Collective — Style Guide

## Brand Overview

Curly Hair Collective is a podcast and community platform celebrating curly hair culture. Our visual identity is bold, unapologetically feminine, and premium — blending Barbie-maximalist energy with clean modern design.

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Barbie Pink** | `#E0218A` | Primary brand color, CTAs, key accents |
| **Hot Pink** | `#FF69B4` | Gradients, hover states, secondary elements |
| **Deep Magenta** | `#C71585` | Gradient endpoints, dark accents |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Soft Blush** | `#FFB6C1` | Backgrounds, subtle accents |
| **Pink 50** | `#FFF0F5` | Page backgrounds, card backgrounds |
| **Cream** | `#FFF5F5` | Alternate backgrounds, sections |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Gold** | `#FFD700` | Premium badges, sparkle accents, CTAs |
| **Gold Light** | `#FFF3B0` | Subtle gold highlights |

### Dark Palette (Footer, Overlays)

| Color | Hex | Usage |
|-------|-----|-------|
| **Pink 900** | `#4A0730` | Footer background, dark sections |
| **Pink 800** | `#7A0C4F` | Dark text, strong headings |
| **Pink 700** | `#A01068` | Body text on light backgrounds |

### Full Pink Scale

```
50:  #FFF0F5    300: #FF87B5    600: #C71585    900: #4A0730
100: #FFE4EF    400: #FF69B4    700: #A01068
200: #FFB6D3    500: #E0218A    800: #7A0C4F
```

---

## Typography

### Font Stack

- **Primary**: Geist Sans (variable `--font-geist-sans`)
- **Monospace**: Geist Mono (variable `--font-geist-mono`)
- **Fallback**: Arial, Helvetica, sans-serif

### Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Page Hero Title | `6.5rem` (md+), `5xl` mobile | Black (900) | White |
| Section Title | `4xl` - `6xl` | Black (900) | Pink 900 |
| Subheading | `2xl` - `3xl` | Bold (700) | Pink 900 |
| Body Text | `lg` (18px) | Regular (400) | Pink 700 at 75% opacity |
| Small/Meta | `sm` (14px) | Medium (500) | Pink 400-500 |
| Badge/Pill | `xs` (12px) | Semibold-Bold (600-700) | Varies |
| Button | `sm` - `lg` | Bold-Semibold (700-600) | White on pink |

### Text Effects

- **Gradient Text (Pink)**: `text-gradient-pink` — linear-gradient(135deg, #FF69B4 → #E0218A → #C71585)
- **Gradient Text (Gold)**: `text-gradient-gold` — linear-gradient(135deg, #FFD700 → #FFC107 → #FFB300)
- **Section Labels**: Uppercase, tracking `0.25em`, font-semibold, Pink 400

---

## Gradients

### Primary Gradients

| Name | CSS | Usage |
|------|-----|-------|
| `gradient-pink` | `135deg, #FF69B4 → #E0218A → #C71585` | Buttons, CTAs, nav |
| `gradient-pink-soft` | `135deg, #FFF0F5 → #FFE4EF → #FFB6D3` | Card backgrounds |
| `gradient-hero` | `160deg, #E0218A → #FF69B4 → #FFB6C1 → #FFF0F5` | Hero sections |
| `mesh-gradient` | Multi-radial layered | Page hero backgrounds |

### Card Gradients (Episode/Merch Themes)

```
from-pink-400 via-pink-500 to-rose-600
from-pink-500 via-fuchsia-500 to-purple-500
from-rose-400 via-pink-500 to-pink-600
from-fuchsia-400 via-pink-500 to-rose-500
from-pink-400 via-rose-500 to-red-400
from-rose-500 via-pink-500 to-fuchsia-500
```

---

## Effects & Animations

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Shimmer Sweep
Gold shimmer animation sweeping across elements. Duration: 4s infinite.

### Glow Pulse
Pink glow pulsing around CTAs. Creates urgency and draws attention.

### Gold Glow
Warm gold glow for premium badges and highlights.

### Floating Animation
Gentle vertical floating for decorative elements. 6-8s cycle.

### Magnetic Cards
Cards lift 8px and scale 1.02 on hover with pink shadow.

### Aurora Effect
Animated gradient orbs creating northern-lights-like background.

---

## Component Patterns

### Buttons

- **Primary CTA**: `gradient-pink`, white text, `rounded-full`, shadow-lg, shimmer + glow-pulse
- **Secondary CTA**: `glass`, white text, `rounded-full`, hover bg-white/15
- **Tertiary**: `bg-pink-100`, pink-600 text, `rounded-full`

### Cards

- White background, `rounded-2xl`, shadow-lg with pink-200/40
- Gradient header area with pattern overlay
- `magnetic-card` hover effect
- Optional `gradient-border` animated border

### Badges/Pills

- `glass` on dark backgrounds, `bg-pink-100` on light
- `rounded-full`, `text-xs` or `text-sm`
- Gold badges for premium/featured items

### Section Layout

- Max-width: `7xl` (1280px)
- Padding: `py-24` between sections
- Center-aligned headers with label → title → description pattern
- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop

### Page Headers (Subpages)

- `mesh-gradient` background with aurora effect
- Glass pill badge, large white title, optional gold accent line
- Wave SVG divider at bottom
- Floating sparkle decorations

---

## Spacing

| Context | Value |
|---------|-------|
| Section padding | `py-20` to `py-24` |
| Card padding | `p-6` to `p-8` |
| Grid gap | `gap-6` to `gap-8` |
| Button padding | `px-5 py-2` (sm) to `px-9 py-4` (lg) |
| Element stacking | `mb-4` to `mb-8` |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | `rounded-full` |
| Cards | `rounded-2xl` (1rem) |
| Large sections | `rounded-3xl` (1.5rem) |
| Inputs | `rounded-xl` or `rounded-full` |
| Badges | `rounded-full` |

---

## Shadows

| Usage | Shadow |
|-------|--------|
| Cards | `shadow-lg shadow-pink-200/40` |
| Buttons | `shadow-lg shadow-pink-300/50` |
| Large CTAs | `shadow-xl shadow-pink-900/20` |
| Hover cards | `0 20px 40px rgba(224, 33, 138, 0.15)` |

---

## Iconography

Custom SVG icons used throughout:

- **CurlIcon**: Curly hair strand, used as logo mark
- **SparkleIcon**: 4-point star, used for decoration/accents
- **PlayIcon**: Standard play triangle for media

All icons accept `className` for sizing and coloring via Tailwind.

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | <640px | Mobile-first base |
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop (max-w-7xl) |

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- All interactive elements have hover/focus states
- Semantic HTML (nav, section, footer, heading hierarchy)
- Alt text for all images
- Keyboard navigable (focus-visible styles)
- Reduced motion: respect `prefers-reduced-motion`

---

## Do's and Don'ts

### Do
- Use the pink-to-magenta gradient as the primary visual signature
- Keep gold accents minimal — they're premium touches, not primary elements
- Use glassmorphism on dark gradient backgrounds
- Maintain generous whitespace
- Use the shimmer effect sparingly on key CTAs

### Don't
- Use flat, unstyled buttons — every CTA should feel premium
- Mix too many gradient directions in one view
- Use raw hex colors — always use the CSS custom properties
- Overcrowd sections — let the design breathe
- Use dark text on dark gradient backgrounds without glass overlay
