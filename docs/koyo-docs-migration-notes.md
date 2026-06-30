# Koyo Docs Migration Notes

## What was added

- Added `src/config/koyo-components.ts` as the typed metadata source for Koyo-owned component docs.
- Added `/docs/koyo` at `src/app/(pages)/docs/koyo/page.tsx` as a restrained starter catalog.
- Added `/docs/koyo/[component]` at `src/app/(pages)/docs/koyo/[component]/page.tsx` for metadata, variants, token notes, and code targets.
- Seeded initial entries for Badge, Button, Input, Card, Alert, Accordion, and Avatar.

## Figma rule

Base and store components are reference only. They can inform anatomy, primitive behavior, density, and token mapping, but the docs catalog should document Koyo-owned component targets.

## How to plug in mapper output

1. Treat `src/config/koyo-components.ts` as the first integration point for mapper output.
2. For each mapped Koyo-owned component, update or append a metadata object with:
   - `slug`
   - `name`
   - `status`
   - `figmaRole`
   - `baseReference`
   - `koyoTarget`
   - `variants`
   - `tokenNotes`
   - `codeTargets`
3. Keep `figmaRole` set to `koyo-owned` for entries that should appear in these docs.
4. Put base/store mapping context in `baseReference`, not as a separate docs entry.
5. Add concrete source, metadata, or docs paths under `codeTargets` when mapper output can identify them.

## Later catalog wiring

The new routes are intentionally standalone for now. When the main catalog is ready to link them, it should point to `/docs/koyo` or individual `/docs/koyo/<slug>` pages without moving the metadata shape.
