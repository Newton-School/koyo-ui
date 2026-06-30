# Koyo Figma Code Connect Notes

Code Connect is a useful next layer for Koyo UI, but it is not an automatic
"Figma changed, rewrite my app" sync. It maps published Figma components to
code snippets so designers and builders can see the intended React usage from
Figma Dev Mode.

## Current status

- No Code Connect config or `.figma.ts` templates exist in this repo yet.
- The likely first code targets are:
  - `src/components/ui/button.tsx`
  - `src/components/ui/badge.tsx`
  - `src/components/ui/input.tsx`
  - `src/components/ui/tabs.tsx`
- The Koyo component map already records known Figma node evidence in
  `src/config/koyo-components.ts` and `docs/koyo-figma-component-map.md`.

## Requirements before wiring

- Koyo components must be published to a Figma team library.
- The Figma workspace needs Code Connect support on the plan.
- The repo needs `figma.config.json` with include/import path rules.
- TypeScript should include `@figma/code-connect/figma-types` when templates are
  added.

## Recommended first batch

Start with Button and Badge because their Koyo behavior is now explicit in code:

- Button default maps to the Koyo orange component-level action.
- Button `black` preserves the neutral shadcn action.
- Button color variants map to Koyo palette tokens: brand, success, yellow,
  purple, error, destructive, secondary, outline, ghost.
- Badge primary/default maps to the neutral black Figma badge, while `koyo`
  represents the orange accent badge.

After the real main component node IDs are confirmed from the published Figma
library, create colocated `.figma.ts` templates that map Figma variant
properties to the existing React props instead of inventing new props.
