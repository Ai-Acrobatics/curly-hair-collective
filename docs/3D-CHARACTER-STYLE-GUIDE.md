# 3D Pixar/Disney Character Style Guide

Reference document for recreating and extending the Curlie Girlie Collective animated character portraits. Use this guide to generate new characters that match the established style exactly.

---

## Rendering Style

- **Art style**: 3D Pixar/Disney-style animated character portrait
- **Rendering quality**: High-quality 3D render with soft subsurface scattering on skin
- **Aspect ratio**: 1:1 (square, 1024x1024)
- **Framing**: Head and shoulders portrait, centered, slight angle
- **Background**: Soft pink gradient (center lighter, edges deeper pink), no props or scenery
- **Lighting**: Soft, warm, diffused — slight rim light on hair, gentle fill light on face
- **Mood**: Warm, friendly, approachable, faith-forward

## Common Traits (All Characters)

| Feature | Specification |
|---------|---------------|
| Eyes | Large, expressive, brown, Disney-style with visible catchlights |
| Smile | Warm, genuine, showing teeth |
| Cheeks | Rosy/blushed |
| Skin | Smooth 3D render with subtle subsurface scattering |
| Outfit color | Pink tones (each character gets a unique shade) |
| Faith jewelry | Cross necklace (gold, delicate) |
| Expression | Joyful, confident, welcoming |
| Hair | Detailed 3D-rendered strands with natural highlights and volume |
| Background | Soft pink radial gradient (#F9A8D4 center fading to #EC4899 edges) |

## Character: Sabrina

**File**: `/public/images/sabrina-cartoon.png`

| Feature | Detail |
|---------|--------|
| Hair | Medium-length curly brown hair, voluminous, defined ringlets |
| Hair color | Warm chocolate brown with subtle lighter highlights |
| Skin tone | Medium-warm brown |
| Outfit | Magenta/hot pink ruffled blouse with V-neckline |
| Jewelry | Gold cross necklace |
| Accessories | None |
| Distinguishing | Rosy cheeks, warm brown eyes, defined curls |

**Prompt template**:
```
3D Pixar Disney animated character portrait of a beautiful Black woman with medium-length
voluminous curly brown hair, warm brown skin, large expressive brown eyes, warm friendly
smile showing teeth, rosy cheeks, wearing a magenta ruffled blouse with V-neckline,
delicate gold cross necklace, soft pink gradient background, soft warm diffused lighting,
head and shoulders portrait framing, high quality 3D render
```

## Character: Chanelle

**File**: `/public/images/chanelle-cartoon.png`

| Feature | Detail |
|---------|--------|
| Hair | Long wavy auburn/reddish-brown hair, flowing, loose waves |
| Hair color | Auburn/reddish-brown with warm highlights |
| Skin tone | Light-medium warm with freckles |
| Outfit | Dusty rose/muted pink ruffled blouse with collar |
| Jewelry | Gold cross necklace, gold hoop earrings |
| Accessories | Gold hoop earrings |
| Distinguishing | Freckles across nose/cheeks, auburn hair, hoop earrings |

**Prompt template**:
```
3D Pixar Disney animated character portrait of a beautiful woman with long wavy
auburn reddish-brown hair, light warm skin with freckles across nose and cheeks,
large expressive brown eyes, warm friendly smile showing teeth, rosy cheeks, gold
hoop earrings, wearing a dusty rose ruffled blouse with collar, delicate gold cross
necklace, soft pink gradient background, soft warm diffused lighting, head and
shoulders portrait framing, high quality 3D render
```

---

## How to Generate New Characters in This Style

### Key Prompt Elements (always include)

1. **"3D Pixar Disney animated character portrait"** — this triggers the correct rendering style
2. **"soft pink gradient background"** — maintains visual consistency
3. **"large expressive brown eyes"** — Disney-style eyes are essential
4. **"warm friendly smile showing teeth"** — matches the brand warmth
5. **"rosy cheeks"** — adds to the animated look
6. **"soft warm diffused lighting"** — keeps the mood consistent
7. **"head and shoulders portrait framing"** — consistent cropping
8. **"high quality 3D render"** — ensures rendering quality
9. **"delicate gold cross necklace"** — faith element consistent across all characters

### Prompt Structure

```
3D Pixar Disney animated character portrait of a [description of person including
hair type/color, skin tone, distinguishing features], large expressive [eye color]
eyes, warm friendly smile showing teeth, rosy cheeks, [jewelry/accessories], wearing
a [pink-toned outfit description], delicate gold cross necklace, soft pink gradient
background, soft warm diffused lighting, head and shoulders portrait framing, high
quality 3D render
```

### Generation Settings

- **Model**: Gemini 2.5 Flash Image (`gemini-2.5-flash-image`)
- **Output**: PNG, 1024x1024
- **Tool**: nano-banana-ui skill (`generate_image.py`)

### Style Consistency Checklist

When generating a new character, verify:

- [ ] 3D rendered (not flat/2D illustration)
- [ ] Pink gradient background (not white, not solid color)
- [ ] Same portrait framing (head + shoulders, centered)
- [ ] Large Disney-style eyes with catchlights
- [ ] Teeth visible in smile
- [ ] Rosy/blushed cheeks
- [ ] Pink-toned outfit (unique shade per character)
- [ ] Gold cross necklace visible
- [ ] Soft warm lighting (no harsh shadows)
- [ ] Hair has 3D-rendered detail with natural highlights

---

## Existing Character Files

| File | Character | Status |
|------|-----------|--------|
| `sabrina-cartoon.png` | Sabrina (host) | Current |
| `chanelle-cartoon.png` | Chanelle (host) | Current (v2 — regenerated to match style) |
| `chanelle-cartoon-new.png` | Chanelle (old v1 attempt) | Archive |
| `chanelle-cartoon-new-v2.png` | Chanelle (v2 backup) | Archive/backup |
| `chanelle-cartoon-old.png` | Chanelle (original 2D) | Archive — do not use |
| `duo-cartoon.png` | Both hosts together | Separate style — may need regeneration |

---

## Extending to Other Characters

If generating guest portraits or additional team members in this style, follow the same prompt structure but customize:
- Hair type, color, and length
- Skin tone
- Outfit shade of pink (keep it in the pink family but vary: magenta, dusty rose, blush, coral, salmon, mauve)
- Unique accessories (earrings, headwrap, glasses, etc.)
- Distinguishing features (freckles, dimples, etc.)

The cross necklace and pink gradient background should remain consistent across ALL characters in this series.
