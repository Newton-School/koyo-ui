# Migration Batch C

## Source Boundaries And Attribution

- Figma base/store components are reference only for anatomy, behavior, density, and token comparison. Koyo docs expose our Koyo-owned components as the product-facing targets.
- Koyo UI remains built on shadcn/ui patterns and adapted from the MIT-licensed Shadcn Studio codebase.
- Renaming Shadcn Studio copy or examples to Koyo does not count as visual migration.

## Scope

Docs-proofed only the partial Select form-control migration while preserving historical notes for Dropdown Menu, Tabs, and Tooltip.

## Docs-Proofed Partial Form-Control Migration

- Select: normal trigger focus uses Koyo brand border/ring tokens, invalid trigger state uses Koyo focus-error tokens, checked item indicators use Koyo brand text, and focused items use secondary token surfaces. Full Select visual parity remains pending because exact Koyo Figma component IDs, item height, and content spacing are not confirmed.

## Historical Alignment Notes Pending Visual Proofing

- Dropdown Menu: aligned menu and submenu surfaces, item radii, destructive focus styling, and shortcut tracking to Koyo token semantics. Updated representative cohort action and account menu examples.
- Tabs: aligned tab list and trigger states to Koyo component accent tokens: active fill/border/text use `--koyo-button-primary`, `--koyo-button-primary-foreground`, hover uses `--koyo-button-primary-hover`, focus uses `--koyo-button-primary-ring`, and the list keeps secondary/border/radius tokens. Updated basic, outlined, icon, overflow, and custom color examples with Koyo app labels or Koyo accent styling while preserving their variant layouts.
- Tooltip: aligned default tooltip surface to primary/primary-foreground, rounded-lg radius, and 4px offset. Updated representative primary, secondary, and destructive tooltip examples.

## Historical Files Touched

- `src/components/ui/select.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/tooltip.tsx`
- `src/components/shadcn-studio/select/select-01.tsx`
- `src/components/shadcn-studio/select/select-14.tsx`
- `src/components/shadcn-studio/select/select-16.tsx`
- `src/components/shadcn-studio/select/select-17.tsx`
- `src/components/shadcn-studio/dropdown-menu/dropdown-menu-01.tsx`
- `src/components/shadcn-studio/dropdown-menu/dropdown-menu-07.tsx`
- `src/components/shadcn-studio/tabs/tabs-01.tsx`
- `src/components/shadcn-studio/tabs/tabs-02.tsx`
- `src/components/shadcn-studio/tabs/tabs-03.tsx`
- `src/components/shadcn-studio/tabs/tabs-08.tsx`
- `src/components/shadcn-studio/tabs/tabs-09.tsx`
- `src/components/shadcn-studio/tabs/tabs-10.tsx`
- `src/components/shadcn-studio/tabs/tabs-11.tsx`
- `src/components/shadcn-studio/tabs/tabs-12.tsx`
- `src/components/shadcn-studio/tabs/tabs-13.tsx`
- `src/components/shadcn-studio/tabs/tabs-14.tsx`
- `src/components/shadcn-studio/tabs/tabs-16.tsx`
- `src/components/shadcn-studio/tabs/tabs-17.tsx`
- `src/components/shadcn-studio/tabs/tabs-18.tsx`
- `src/components/shadcn-studio/tabs/tabs-19.tsx`
- `src/components/shadcn-studio/tabs/tabs-20.tsx`
- `src/components/shadcn-studio/tabs/tabs-24.tsx`
- `src/components/shadcn-studio/tabs/tabs-25.tsx`
- `src/components/shadcn-studio/tabs/tabs-26.tsx`
- `src/components/shadcn-studio/tabs/tabs-29.tsx`
- `src/components/shadcn-studio/tooltip/tooltip-01.tsx`
- `src/components/shadcn-studio/tooltip/tooltip-02.tsx`
- `src/components/shadcn-studio/tooltip/tooltip-04.tsx`
- `docs/migration-batch-c.md`

## Uncertain Figma details

- No direct Koyo Figma node details were available in this batch. The implementation uses the supplied token list and existing shadcn/base components as reference context only, so Select should not be described as exact Figma visual parity yet.
- Exact Figma intent for select trigger width behavior, select item height, menu item height, tooltip arrow offset, and tab active-state emphasis still needs confirmation. The supplied Tabs follow-up URL node `273:30617` resolved to the Badge component page in the connector, so Tabs styling was adjusted from the established Koyo token contract instead of an exact Tabs node.
- Only representative examples were adjusted. Several stock examples in these folders still use generic demo copy by design to avoid broad churn.

## Next recommended batch

Visually proof Select against Koyo-owned Figma targets before claiming full parity. Treat Dropdown Menu, Tabs, and Tooltip as pending focused visual proofing rather than finished Koyo migration work.
