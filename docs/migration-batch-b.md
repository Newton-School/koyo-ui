# Migration Batch B

## Source Boundaries And Attribution

- Figma base/store components are reference only for anatomy, behavior, density, and token comparison. Koyo docs expose our Koyo-owned components as the product-facing targets.
- Koyo UI remains built on shadcn/ui patterns and adapted from the MIT-licensed Shadcn Studio codebase.
- Renaming Shadcn Studio copy or examples to Koyo does not count as visual migration.

## Current Docs-Proofing Status

- No Batch B component is in the current known implemented visual-migration set. Treat the notes below as historical token/example alignment work that still needs focused visual proofing before docs claim Koyo visual migration.

## Historical Alignment Notes

- Accordion: aligned the shared trigger radius to Koyo `rounded-lg`, and updated representative active, outline, filled, boxed, and multilevel examples to use confirmed radius and primary/secondary token semantics.
- Alert: aligned the primitive default/destructive variants with `background`, `foreground`, `border`, and `destructive` tokens; removed tight letter spacing from titles; updated representative link, upload, multi-action, and destructive indicator examples.
- Avatar: aligned fallback styling to `secondary` / `secondary-foreground`; updated representative rounded, icon, status ring, and add-action examples away from upstream indigo/green/slate colors.
- Dialog: aligned the primitive close affordance with Koyo focus/radius semantics; updated representative alert-dialog icon/destructive actions, sign-up, and invite examples to inherit shared Button, Checkbox, and Dialog tokens.

## Historical Files Touched

- `src/components/ui/accordion.tsx`
- `src/components/ui/alert.tsx`
- `src/components/ui/avatar.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/shadcn-studio/accordion/accordion-05.tsx`
- `src/components/shadcn-studio/accordion/accordion-09.tsx`
- `src/components/shadcn-studio/accordion/accordion-10.tsx`
- `src/components/shadcn-studio/accordion/accordion-14.tsx`
- `src/components/shadcn-studio/accordion/accordion-15.tsx`
- `src/components/shadcn-studio/accordion/accordion-16.tsx`
- `src/components/shadcn-studio/alert/alert-04.tsx`
- `src/components/shadcn-studio/alert/alert-07.tsx`
- `src/components/shadcn-studio/alert/alert-08.tsx`
- `src/components/shadcn-studio/alert/alert-12.tsx`
- `src/components/shadcn-studio/avatar/avatar-03.tsx`
- `src/components/shadcn-studio/avatar/avatar-06.tsx`
- `src/components/shadcn-studio/avatar/avatar-08.tsx`
- `src/components/shadcn-studio/avatar/avatar-10.tsx`
- `src/components/shadcn-studio/dialog/dialog-02.tsx`
- `src/components/shadcn-studio/dialog/dialog-03.tsx`
- `src/components/shadcn-studio/dialog/dialog-13.tsx`
- `src/components/shadcn-studio/dialog/dialog-15.tsx`
- `docs/migration-batch-b.md`

## Uncertain Figma details

- Success, warning, and info status colors were not confirmed in the provided token list. Representative examples now prefer primary/secondary/destructive tokens, but broader green/amber/sky upstream examples remain for a later pass once status tokens are mapped.
- Dialog overlay color still uses the existing neutral black overlay because no overlay/scrim token was included in the known Koyo token set.
- Destructive foreground semantics are not fully specified beyond the destructive and focus-error tokens. Destructive solid actions continue to follow the existing Button pattern of white foreground.

## Next recommended batch

- Visually proof Accordion, Alert, Avatar, and Dialog against Koyo-owned Figma targets before promoting their docs beyond historical alignment notes.
- Migrate the remaining status-heavy examples only after Koyo status tokens for success, warning, info, and overlays are confirmed.

## Worker B Overlay/Disclosure Follow-Up

### Figma Evidence

- Accordion: inspected page `842:49174`; screenshots from themed frames `3454:11609` and `3462:12706` showed Koyo orange focus rings on line and bordered accordion triggers.
- Alert: inspected page `842:44439`; screenshot from themed frame `3455:11897` showed neutral white alerts and error alerts using red text/icon/border without a filled red surface.
- Dialog: inspected page `842:51941`; screenshot from themed frame `3468:14507` showed neutral white dialog surfaces, black primary actions, and Koyo-radius close/header/footer treatments.
- Tooltip: inspected page `842:44449`; screenshot from themed frame `3168:25749` showed the tooltip surface staying neutral black with a black arrow and compact offset.

### Follow-Up Changes

- Re-aligned Accordion, Alert, Dialog, and Dropdown Menu primitive focus/highlight/error classes with Koyo token aliases from `globals.css`.
- Updated the first visible Accordion, Alert, Dialog, Tooltip, and Dropdown Menu examples so the gallery opens on Koyo workflow copy and visible Koyo token states.
- Dropdown Menu has no top-level Figma page in the connected file; its primitive/example changes use the established Koyo token contract and adjacent Select/menu behavior as reference.
