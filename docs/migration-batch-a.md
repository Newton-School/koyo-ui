# Migration Batch A

## Source Boundaries And Attribution

- Figma base/store components are reference only for anatomy, behavior, density, and token comparison. Koyo docs expose our Koyo-owned components as the product-facing targets.
- Koyo UI remains built on shadcn/ui patterns and adapted from the MIT-licensed Shadcn Studio codebase.
- Renaming Shadcn Studio copy or examples to Koyo does not count as visual migration.

## Docs-Proofed Visual Migration

- Badge: aligned shared variants to Koyo token semantics for Primary, Secondary, Outline, Ghost, and Destructive. Fresh Figma context for Badge node `273:30617` shows Badge Primary/default uses `var(--general/primary, #171717)`, so Badge primary/default is neutral black, not Koyo orange. Palette variants expose `brand`, `success`, `yellow`, `purple`, and `error`; Koyo orange is available as the `koyo` accent/component variant where useful, but not as a global primary replacement. Added a shared `shape` variant for `default` and `round` so Figma's Default/Round split does not rely on ad hoc example classes.
- Button: kept the existing shadcn/ui API and mapped invalid/error rings to the Koyo focus error token while keeping secondary, outline, ghost, destructive, link, and size variants intact. Koyo Button `variant="default"` is the Koyo orange component primary, the original shadcn neutral button is available explicitly as `variant="black"`, and the confirmed Button palette swatches are exposed as `brand`, `success`, `yellow`, `purple`, and `error`.
- Input: partial form-control migration only. The primitive keeps its existing API, invalid focus styling uses the Koyo focus error token, and normal focus uses the shared Koyo brand focus layer. Full Input size/decoration parity remains pending.

## Not Counted As Visually Migrated Yet

- Card: an earlier token-alignment note made the root border explicitly use the Koyo border token, but Card is not in the current docs-proofed visual migration set.

## Historical Files Touched

- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/components/shadcn-studio/button/button-01.tsx`
- `src/components/shadcn-studio/button/button-07.tsx`
- `src/components/shadcn-studio/button/button-08.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/card.tsx`
- `src/components/shadcn-studio/badge/badge-01.tsx`
- `src/components/shadcn-studio/badge/badge-05.tsx`
- `src/components/shadcn-studio/badge/badge-06.tsx`
- `src/components/shadcn-studio/badge/badge-12.tsx`
- `src/components/shadcn-studio/badge/badge-13.tsx`
- `docs/migration-batch-a.md`

## Uncertain Figma Details

- Badge height and exact typography were inferred from the existing shadcn primitive because only token values and variant names were provided in the batch brief.
- Destructive foreground does not have a named token in the known set, so destructive Badge/Button continue to use white foreground text.
- Focus state is represented through `focus-visible` and invalid/error ring classes; no separate explicit `focus` prop was added.
- Badge icon/no-icon behavior is inherited from the shared SVG sizing and gap styles rather than a dedicated icon prop.
- Badge orange must not be documented as Figma Primary/default. Badge Primary/default is neutral black per node `273:30617`; Koyo orange belongs to the `koyo` accent/component variant where the product needs it. Button keeps orange as its component primary.
- Button palette swatches were confirmed from the Button page around `3462:6548` onward. The shared Button API now exposes dedicated `brand`, `success`, `yellow`, `purple`, and `error` variants backed by `--koyo-button-*` tokens; Badge reuses the same confirmed values through shared `--koyo-palette-*` aliases.

## Next Recommended Batch

- Finish adjacent form/control primitives that still need the same proofing standard: Label, Textarea, Input Group, and any remaining Input/Select sizing or decoration gaps.
- Reconcile Button, Badge, and partial form controls against exact Figma dimensions before claiming full visual parity.
