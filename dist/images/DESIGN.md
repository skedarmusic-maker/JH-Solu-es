---
name: Stone & Gilded Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b5b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
  deep-obsidian: '#050505'
  marble-white: '#FFFFFF'
  vein-gray: '#4A4A4A'
  brushed-gold: '#B8860B'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Metropolis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Metropolis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Metropolis
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The brand personality is authoritative, precise, and uncompromisingly luxurious. It targets high-end residential clients and interior architects who value craftsmanship over convenience. 

The design style is **Minimalism** blended with **Corporate Modern** elements, utilizing heavy whitespace (or "blackspace" in this context) and high-quality typography to mimic the expansive feeling of a marble gallery. The visual narrative focuses on "The Cut"—sharp lines, perfect 45-degree angles, and the contrast between raw geological texture and polished human artistry.

## Colors
The palette is rooted in a `dark` mode experience to evoke exclusivity and prestige. 
- **Deep Obsidian & Tertiary Black:** Used for backgrounds to create a sense of infinite depth.
- **Metallic Gold (Primary):** Inspired by brass fixtures and luxury accents, used sparingly for calls to action, highlights, and icons to suggest premium value.
- **Marble White (Secondary):** A crisp, cool white used for primary text and high-contrast UI elements, mirroring the purity of Carrara marble.
- **Vein Gray:** Used for subtle borders and secondary information, mimicking the natural inclusions in natural stone.

## Typography
The typography pairing establishes a tension between tradition and modern precision.
- **Playfair Display (Headlines):** High-contrast serifs evoke the editorial feel of luxury catalogs. It should be used for all major section titles.
- **Metropolis (Body/UI):** A geometric sans-serif that represents architectural precision and readability.
- **Styling Note:** Use uppercase styling with generous letter spacing for labels and navigation items to enhance the "boutique" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain a curated, gallery-like feel, transitioning to a fluid model for mobile devices. 

- **Desktop:** 12-column grid with a significant 120px vertical rhythm between sections to allow the portfolio imagery to "breathe."
- **Mobile:** 4-column grid with reduced margins (20px). 
- **Philosophy:** Emphasize asymmetrical balance where large-scale stone imagery is offset by minimalist text blocks. Alignment should be rigorous, reflecting the "perfect cut" promise of the business.

## Elevation & Depth
This system uses **Tonal Layers** and **Low-contrast outlines** instead of heavy shadows to maintain a sleek, modern profile.

- **Surfaces:** Use `#1A1A1A` for cards or containers sitting atop the `#050505` background.
- **Borders:** Subtle 1px solid borders using `vein-gray` (#4A4A4A) define interactive areas without breaking the dark aesthetic.
- **Glow:** Occasional, very soft gold outer-glows (5-10% opacity) may be used for primary buttons to simulate light reflecting off polished metal.
- **Overlays:** Use 80% opacity black overlays on background images to ensure typography remains the focal point while still showcasing the stone textures.

## Shapes
The shape language is strictly **Sharp (0px)**. 

In the world of marble and granite masonry, precision is defined by clean edges and sharp miters. Rounded corners contradict the brand's association with stone slabs and architectural structuralism. All buttons, image containers, and input fields must use 90-degree angles to reinforce the concept of a "master cut."

## Components
- **Buttons:** Primary buttons are solid `primary-gold` with black text. Secondary buttons are transparent with a 1px `marble-white` border. All use sharp corners and uppercase labels.
- **Input Fields:** Bottom-border only (underline style) to maintain a minimalist architectural look. Use `marble-white` for active states.
- **Cards:** No background or very dark gray background with a thin `vein-gray` border. Images within cards should have a subtle zoom effect on hover.
- **Chips/Badges:** Small, uppercase text with a gold left-border, used to categorize material types (e.g., "ITALIAN MARBLE").
- **Portfolio Gallery:** Large-scale masonry layout with zero gap between images to simulate a continuous wall of stone.
- **Service Lists:** Use custom gold icons representing masonry tools (chisel, caliper, level) simplified into geometric line art.