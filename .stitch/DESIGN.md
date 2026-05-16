---
name: Clinical Compassion
project: projects/12454832473101293498
screens:
  - Home: projects/12454832473101293498/screens/664f83cd88504c29bb6b55cadc61833f
  - Services: projects/12454832473101293498/screens/63d20da8a26f4c56b7dc86fac2c9c268
  - Contact: projects/12454832473101293498/screens/443ae982fc3b4e7b93fc9b3c8dcfc6e0
  - Resources: projects/12454832473101293498/screens/af141d7e265145c7af002cf9b7e64397
---

## Brand & Style

**Corporate / Modern** with a **Minimalist** lean. Designed for medical professionals requiring reliable, high-density information with a visual tone that is gentle and approachable. Reflects the sensitive nature of neonatology and pediatrics.

## Colors

| Role | Token | Hex |
|---|---|---|
| Primary (Teal) | `primary` | `#086670` |
| Primary Container | `primary-container` | `#317f8a` |
| Primary Fixed | `primary-fixed` | `#a4eefb` |
| Secondary (Navy) | `secondary` | `#4c5d8b` |
| Secondary Container | `secondary-container` | `#bacbff` |
| Tertiary (Deep Teal) | `tertiary` | `#2b646a` |
| Background | `background` | `#f8f9ff` |
| Surface | `surface` | `#f8f9ff` |
| Surface Low | `surface-container-low` | `#eff4ff` |
| Surface | `surface-container` | `#e5eeff` |
| Surface High | `surface-container-high` | `#dce9ff` |
| On Background | `on-background` | `#0b1c30` |
| On Surface Variant | `on-surface-variant` | `#3f484a` |
| Inverse Surface (dark) | `inverse-surface` | `#213145` |
| Outline | `outline` | `#6f797b` |
| Outline Variant | `outline-variant` | `#bec8ca` |

## Typography

| Style | Font | Size | Weight |
|---|---|---|---|
| Display LG | Montserrat | 48px / 56px | 700 |
| Headline LG | Montserrat | 32px / 40px | 600 |
| Headline MD | Montserrat | 24px / 32px | 600 |
| Headline SM | Montserrat | 20px / 28px | 600 |
| Body LG | Inter | 18px / 28px | 400 |
| Body MD | Inter | 16px / 24px | 400 |
| Body SM | Inter | 14px / 20px | 400 |
| Label MD | Inter | 12px / 16px | 600, +0.05em tracking |

In code: use `font-heading` class for Montserrat, `font-sans` (default) for Inter.

## Spacing Scale

| Token | Size |
|---|---|
| `xs` | 4px (0.25rem) |
| `base` | 8px (0.5rem) |
| `sm` | 12px (0.75rem) |
| `md` | 24px (1.5rem) |
| `gutter` | 24px (1.5rem) |
| `lg` | 48px (3rem) |
| `xl` | 80px (5rem) |
| `margin-mobile` | 16px (1rem) |
| `margin-desktop` | 64px (4rem) |

## Layout

- Max content width: `max-w-[1440px] mx-auto`
- Bento grid: `bento-grid` class (12-col CSS grid, 24px gap)
- Page padding: `px-margin-desktop` on desktop, `px-margin-mobile` on mobile

## Shapes

- Default: `rounded` = 0.25rem
- Cards/sections: `rounded-xl` (0.75rem), `rounded-2xl` (1rem)
- Pills/chips: `rounded-full`

## Components

### NavBar
Fixed top, `h-16`, `bg-surface-bright`, `border-outline-variant`. Logo + 4 links + search + "Book Appointment" pill button (teal, `rounded-full`).

### Cards
`bg-surface-container-lowest`, `border border-outline-variant`, `rounded-xl`, hover shadow. **No divider lines** — use spacing and background shifts for separation.

### Bento Cards
12-column grid spans. Large cards span 8 cols, accent cards 4 cols, equal cards 6 cols.

### Buttons
- Primary: `bg-primary text-on-primary rounded-full` (nav) or `rounded-xl` (page)
- Secondary: `border-2 border-primary text-primary rounded-xl`
- Text only: `text-primary font-bold`

### Footer
`bg-inverse-surface`, 4-column grid, `text-surface-bright` / `text-surface-variant` text.

## Icons

Material Symbols Outlined loaded via Google Fonts CDN. Usage: `<span className="material-symbols-outlined">icon_name</span>`.

## Do's and Don'ts

### Do
- Use `font-heading` (Montserrat) for all headlines and display text
- Use tonal layering (`surface-container-low` → `surface-container-lowest`) to separate content without borders
- Use `text-gradient-brand` class for gradient text effects
- Use `bento-grid` for 12-column asymmetric layouts

### Don't
- Don't use hard borders (`border`) for section separation — use background shifts
- Don't use drop shadows on dark backgrounds — use tonal elevation
- Don't use sharp corners — minimum `rounded` on all interactive elements
