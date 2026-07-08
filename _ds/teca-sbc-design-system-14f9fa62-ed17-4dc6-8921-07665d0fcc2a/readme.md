# TECA SBC Design System

Design system for **TECA SBC** (Treinamento em Emergências Cardiovasculares) — a medical-education course by **Medsafe Brasil** in partnership with the **Sociedade Brasileira de Cardiologia (SBC)**. The product is a digital learning platform (course marketing site + student experience) teaching clinicians to recognize, decide, and act in the first minutes of a cardiovascular emergency. The brand needs to read as clinically credible, premium, and fast — precision under pressure, not decoration.

**Brand architecture** (per the style guide): Medsafe organizes its portfolio into Educacionais, Profissionalizantes, Produtos e Serviços, Parceiros, Submarcas and an "Acervo IA" line. TECA SBC sits under **Educacionais**, co-branded with SBC.

## Sources

- `uploads/V1_Guia de estilo_Curso TECA SBC_Medsafe-1.pdf` — official style guide (5 pages: logo, colors, "grafismo," typography, brand architecture). Pages are mostly image-based; the PDF renderer available in this environment could not rasterize the pages (render task hung consistently across scale/worker settings), so this system was built from the guide's readable text plus the assets below. **If you can re-export the guide's color/logo pages as flat images, attach them and I'll cross-check the palette precisely.**
- `uploads/Logo_Teca SBC_{Horizontal,Vertical}_{positivo,negativo}.svg` — the only real logo assets provided (copied into `assets/logos/`).
- `uploads/SpaceGrotesk-VariableFont_wght.ttf` — the brand's actual typeface (copied into `assets/fonts/`, no substitution needed).
- `uploads/Mockup bloco de notas.png` — a product photo (notepad/stationery) showing the wine-dark cover treatment, the wireframe heart illustration, ECG line, and the teal pinwheel mark alongside the Medsafe wordmark and SBC seal. This is the primary source for color sampling and motif reference (copied into `assets/imagery/`).
- No Figma file, GitHub repo, or existing codebase was attached for this project. The component library and the `ui_kits/teca-sbc-site` marketing site are therefore an **original construction** built to the sampled palette/type/motifs, not a recreation of an existing UI — treat both as a starting point to validate with the Medsafe/TECA team, not a pixel-exact spec.

## Index

- `styles.css` — global stylesheet entry point (imports everything below).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (+ radius/shadow/motion), `fonts.css`, `base.css`.
- `assets/logos/` — TECA SBC lockups (horizontal/vertical × positive/negative).
- `assets/fonts/` — Space Grotesk variable TTF.
- `assets/imagery/` — notepad mockup + cropped hero reference image.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `components/` — reusable React primitives, grouped `forms/`, `feedback/`, `navigation/`, `overlay/`, `data-display/`.
- `ui_kits/teca-sbc-site/` — course marketing/enrollment site recreation.
- `SKILL.md` — Claude Code–portable skill version of this system.

## Components

**forms/**: Button, IconButton, Input, Select, Checkbox, Radio, Switch
**feedback/**: Badge, Tag, Tooltip, Toast, ProgressBar
**navigation/**: Tabs
**overlay/**: Dialog
**data-display/**: Card

No component inventory was defined by a source (no Figma/codebase attached), so this is the standard primitive set sized to the brand, per design-system-authoring convention.

**Intentional additions** (not implied by any source, added because a training/course platform needs them):
- `ProgressBar` — course/module completion, and doubles as a "response time" indicator matching the brand's emergency-timing theme.

## Content fundamentals

- **Language**: Brazilian Portuguese, direct address using **você** (informal-professional, standard for Brazilian clinical/educational SaaS) — never the more formal "o senhor/a senhora."
- **Tone**: confident and clinical, not chatty. Copy states what the training does and what the learner will be able to do — "Domine a emergência cardiovascular," "Simulação realista," "Reconhecimento e RCP de alta qualidade." Sentences are short; no jokes, no exclamation points, no emoji.
- **Casing & punctuation**: display headlines are set in **UPPERCASE** with a trailing underscore as a signature device — e.g. "TECA SBC_", "Domine a emergência cardiovascular_". The underscore reads as "cursor / continues" — a training that's always active. Body copy is sentence case.
- **Numbers read as evidence**: stats are presented as bare, tabular figures with a short label underneath (98% aprovação, 02:14 tempo de resposta) rather than narrated in a sentence — this matches a clinical-dashboard register, not a marketing-brochure one.
- **Vocabulary**: precise clinical terms are used plainly (RCP, DEA, PCR, via aérea, farmacologia de emergência) — the audience is medical professionals, so no dumbing-down or explanatory hand-holding.
- **No emoji anywhere** — iconography (line icons) carries visual emphasis instead.

## Visual foundations

- **Color**: a five-family palette sampled from the brand mark and course-material photography (see `tokens/colors.css` for full ramps):
  - **Teal** (`--teal-500 ≈ #2AACB0`) — the brand mark's own color; used for primary actions, links, and the small "tech/safety" accents.
  - **Wine** (`--wine-800 ≈ #3A1418`) — the deep maroon-brown used for dark hero/cover surfaces; reads as premium and serious rather than alarming.
  - **Crimson** (`--crimson-500 ≈ #C83C57`) — sampled from the glowing heart illustration; reserved for cardiac/emergency emphasis (danger buttons, urgent badges, the pulse-line motif) — used sparingly, never as a base UI color.
  - **Navy** (`--navy-900 ≈ #131A37`) — ink color for the wordmark and all body text on light surfaces.
  - **Neutrals** — warm paper grays (not cool/blue-grays), echoing the physical notebook stock.
- **Type**: a single family, **Space Grotesk** (variable, 300–700), doing both display and body duty. Display sizes go bold + uppercase + tight tracking (the "TECA SBC_" wordmark treatment); body copy stays regular/medium weight for long-form reading. The font's tabular figures are used deliberately for stats, timers and countdowns.
- **Spacing**: 4px base unit, scale from 4→128px. Layout rhythm favors generous whitespace in hero/section padding (64–96px) and tighter 12–24px gaps within cards/lists.
- **Backgrounds**: mostly flat color — wine-dark for hero/stat sections, warm paper-white for content sections. A **faint graph-paper grid texture** (`.bg-grid` / `.bg-grid-dark`) recurs on both dark covers and light pages in the source photography and is used as a subtle full-bleed texture on dark sections — never a busy pattern, just a few percent opacity. No gradients beyond a single subtle vertical wine-to-wine-darker wash behind the hero; no hand-drawn illustration style.
- **Imagery**: the one illustration style seen in source material is a **glowing low-poly/wireframe particle heart** on the wine cover — cool white-to-crimson glow nodes connected by thin lines, giving a "cardiac tech / data" feel. Do not redraw this illustration; only the cropped photographic reference in `assets/imagery/` is available. Ask the brand team for a vector/hi-res version if more angles or a transparent cutout are needed.
- **Motifs ("grafismo")**: an **ECG/heartbeat pulse line** (sharp spike, flat baseline, glowing endpoint dot) is a recurring graphic device seen on the notebook back cover — modeled in `guidelines/brand-pulse-line.html` as a reusable divider/loading motif. Keep it rare — one per screen at most.
- **Animation**: no bounce, no playful easing — brisk, purposeful transitions only (`--ease-standard`, 120–360ms). The pulse-dot's soft opacity blink is the only "ambient" animation in the system, echoing the ECG glow-dot.
- **Hover / press states**: hover darkens accent colors one step (teal-500→600, crimson-500→600) or adds a subtle background tint on ghost/ ellipse buttons; press states scale buttons to 0.98 rather than changing color — a light, precise "click," not a bouncy one.
- **Borders & radius**: mostly precise/angular. Radius scale tops out at 20px for large panels; buttons and inputs sit at 8px (`--radius-md`); pill radius (`--radius-full`) is reserved for Badge/Tag chips only — never applied to whole cards or buttons. This echoes the faceted, angular geometry of the pinwheel brand mark.
- **Shadows**: flat brand overall — cards use a hairline border more often than a shadow; where elevation is needed, shadows stay soft and utility (`--shadow-sm/md/lg`). Two "glow" shadows (`--shadow-glow-teal`, `--shadow-glow-crimson`) exist specifically to echo the illustration's particle glow, reserved for emphasis moments (e.g. an active emergency CTA), not default states.
- **Transparency & blur**: used narrowly — a translucent/blurred sticky header (`backdrop-filter: blur`) and low-opacity chips/badges on dark surfaces (`rgba(255,255,255,0.08–0.18)`). Never used over imagery or for whole-section overlays beyond the header.
- **Color vibe of imagery**: warm-dark and high-contrast — deep wine backgrounds with a single glowing warm-red focal illustration; no cool blue photography, no grain/film treatment observed in source material.

## Iconography

No icon font, sprite sheet, or SVG icon set was included in the provided materials — only the two-color logo mark itself. For the UI kit and components, this system links **Lucide** (MIT-licensed, CDN: `unpkg.com/lucide`) as the closest match to the brand's clean, geometric, single-weight line style — loaded via `<script src="https://unpkg.com/lucide@.../dist/umd/lucide.js">` and rendered with `<i data-lucide="name">` + `lucide.createIcons()`. This is a **substitution**, flagged here: if Medsafe has a proprietary icon set, swap it in and update this section. No emoji or unicode-glyph icons are used anywhere in the system.

## Fonts

Space Grotesk was provided as a variable TTF and required no substitution. It is embedded via `@font-face` in `tokens/fonts.css` with a `300 700` weight range.
