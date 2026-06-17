---
name: Lumina Command
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#4d556b'
  on-tertiary: '#ffffff'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1440px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-stakes municipal and infrastructure management, pivoting from its original dark-mode roots to a high-clarity, high-efficiency light theme. The brand personality is authoritative, precise, and dependable—evoking the feeling of a modern air traffic control tower bathed in natural light.

The design style leans into **Corporate / Modern** with a focus on **Tonal Layering**. It prioritizes information density and data legibility without sacrificing visual breathing room. By utilizing subtle grays and crisp borders, the system achieves a "Day Mode" aesthetic that reduces eye strain during long shifts while maintaining a serious, command-and-control atmosphere. The emotional response should be one of total situational awareness and operational confidence.

## Colors

The palette is anchored by a vibrant Primary Blue (`#2563eb`), slightly darkened from the original to ensure AA/AAA contrast ratios against white surfaces. 

- **Backgrounds**: The core application background uses a clean off-white (`#f8fafc`) to provide a soft canvas that prevents screen glare.
- **Surfaces**: Containers and data cards use a slightly cooler gray (`#f1f5f9`) or pure white, defined by subtle slate borders (`#e2e8f0`) rather than heavy shadows.
- **Typography**: Text scales from a deep Charcoal/Slate (`#0f172a`) for primary content to a Medium Slate (`#475569`) for secondary labels.
- **Accents**: Status indicators are high-chroma to ensure they draw immediate attention. Critical alerts use a bold red, Elevated uses a saturated orange, and Routine uses a clear forest green, all calibrated for legibility against light-gray backgrounds.

## Typography

This design system employs a three-tier type system to manage complex information hierarchies. 

1. **Headings (IBM Plex Sans)**: Chosen for its technical, structured appearance that signals enterprise-grade reliability.
2. **Body (Inter)**: Used for general interface text and descriptions due to its exceptional legibility and neutral tone.
3. **Labels & Data (JetBrains Mono)**: A monospaced font is used for telemetry, timestamps, and ID numbers. This ensures that columns of numbers align perfectly in data-heavy tables, facilitating rapid scanning.

All text is rendered in high-contrast Slate to maintain maximum readability in bright environments.

## Layout & Spacing

The layout utilizes a **12-column Fluid Grid** system with fixed gutters. To maintain a "command center" density, the spacing rhythm is based on a strict 4px baseline grid.

- **Desktop**: 32px outer margins with 16px gutters. Elements scale horizontally to maximize data visualization real estate.
- **Tablet**: 24px margins; columns collapse to 8 for side-by-side metric viewing.
- **Mobile**: 16px margins; a single-column stack is used for alert feeds and individual device controls.

Padding within components (like cards and table cells) is kept tight (12px to 16px) to ensure that the maximum amount of information is visible above the fold.

## Elevation & Depth

In this light-themed system, depth is communicated primarily through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy drop shadows.

- **Level 0 (Background)**: `#f8fafc` (Off-white).
- **Level 1 (Cards/Panels)**: Pure White background with a 1px solid border of `#e2e8f0`.
- **Level 2 (Dropdowns/Modals)**: Pure White background with a subtle, diffused shadow (10% opacity, 12px blur) to differentiate floating elements from the grid.
- **Active State**: Use a 2px Primary Blue left-border on list items or cards to indicate selection or focus.

Avoid background blurs (glassmorphism) to maintain the "utilitarian tool" aesthetic and ensure high performance on lower-spec monitoring hardware.

## Shapes

The design system utilizes a **Soft (1)** shape language. The 4px standard radius (`0.25rem`) provides a modern, professional feel that is more approachable than sharp corners but more serious than highly rounded "consumer" apps.

- **Standard Elements**: 4px (Buttons, Inputs, Small Cards).
- **Large Containers**: 8px (Main Dashboard panels).
- **Interactive Tags**: 100px (Pill shape for status badges only).

## Components

### Buttons
- **Primary**: Solid `#2563eb` with white text. High-contrast, no gradient.
- **Secondary**: White fill with `#e2e8f0` border and `#0f172a` text.
- **Ghost**: No fill or border; text-only until hover.

### Inputs & Controls
- **Fields**: White background with `#cbd5e1` borders. On focus, the border transitions to Primary Blue with a subtle 2px glow.
- **Checkboxes/Radios**: Use Primary Blue for the active state to ensure visibility against the light background.

### Data Tables & Lists
- **Rows**: Alternating "Zebra" stripes are not required; use subtle `#f1f5f9` dividers between rows.
- **Header**: Light gray (`#f1f5f9`) background with uppercase Monospaced labels.

### Cards
- Standard cards use a white background and a 1px `#e2e8f0` border. For "Critical" alerts, the top border of the card should be thickened to 4px and colored in the Status Critical red.

### Status Badges
- Small, pill-shaped indicators. Use light-tinted backgrounds (e.g., light red for critical) with dark-colored text of the same hue to ensure legibility while maintaining the color-coded meaning.