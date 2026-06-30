# Migration Batch D

## Source Boundaries And Attribution

- Figma base/store components are reference only for anatomy, behavior, density, and token comparison. Koyo docs expose our Koyo-owned components as the product-facing targets.
- Koyo UI remains built on shadcn/ui patterns and adapted from the MIT-licensed Shadcn Studio codebase.
- Renaming Shadcn Studio copy or examples to Koyo does not count as visual migration.

## Docs-Proofed Partial Form-Control Migration

- Input: normal focus uses `focus-visible:ring-koyo-brand-ring` and `focus-visible:border-koyo-brand`, with invalid states remaining on `border-destructive` and `ring-koyo-focus-error/30`. Full Input size/decoration parity remains pending.
- Select: normal trigger focus uses Koyo brand border/ring tokens, invalid trigger state uses Koyo focus-error tokens, checked item indicators use Koyo brand text, and focused items use secondary token surfaces. Full Select visual parity remains pending.
- Checkbox: checked state, normal focus, and invalid state use Koyo brand/focus-error tokens. Exact Figma radius, dimensions, and full visual parity remain pending.
- Switch: checked state, unchecked secondary surface, normal focus, and invalid state use Koyo tokens. Exact Figma track/thumb dimensions and full visual parity remain pending.
- Radio Group: selected indicators, normal focus, and invalid state use Koyo brand/focus-error tokens. Exact Figma radio dot size, item density, and full visual parity remain pending.

## Historical Alignment Notes Pending Visual Proofing

- Table: made the shared primitive border, hover, selected, and footer surfaces explicit Koyo token consumers (`border-border`, `bg-secondary`, `bg-secondary/50`) while preserving the compound API and preview/copy behavior.
- Data Table: updated the representative default data-table example from payment sample data to a candidate review queue with Koyo-oriented labels, selection behavior, stages, roles, emails, and scores.
- Form: kept the `react-hook-form` wrapper API stable, made label foreground/error semantics explicit, and updated representative radio/checkbox/switch form examples to use Koyo hiring workflows and default token-based alerts.
- Checkbox: moved invalid rings to `ring-koyo-focus-error/30`, replaced the raw 4px radius utility with the shared `rounded-sm` radius token, and updated representative checkbox examples to candidate transcript/profile settings. A later follow-up moved checked and normal focus states onto the shared Koyo brand token layer.
- Switch: mapped unchecked tracks to Koyo secondary tokens, added invalid focus/error semantics, and replaced representative switch color samples with primary, secondary, destructive, and outline token treatments. A later follow-up moved checked and normal focus states onto the shared Koyo brand token layer.
- Radio Group: moved invalid rings to `ring-koyo-focus-error/30` and updated representative examples to Koyo review-stage choices and token-only radio tones. A later follow-up moved selected indicators and normal focus states onto the shared Koyo brand token layer.

## Historical Files Touched

- `src/components/ui/table.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/switch.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/select.tsx`
- `src/components/shadcn-studio/table/table-01.tsx`
- `src/components/shadcn-studio/table/table-08.tsx`
- `src/components/shadcn-studio/data-table/data-table-01.tsx`
- `src/components/shadcn-studio/form/form-01.tsx`
- `src/components/shadcn-studio/form/form-02.tsx`
- `src/components/shadcn-studio/form/form-03.tsx`
- `src/components/shadcn-studio/checkbox/checkbox-01.tsx`
- `src/components/shadcn-studio/checkbox/checkbox-13.tsx`
- `src/components/shadcn-studio/switch/switch-01.tsx`
- `src/components/shadcn-studio/switch/switch-04.tsx`
- `src/components/shadcn-studio/radio-group/radio-group-01.tsx`
- `src/components/shadcn-studio/radio-group/radio-group-03.tsx`
- `src/components/shadcn-studio/input/input-01.tsx`
- `src/components/shadcn-studio/input/input-14.tsx`
- `docs/migration-batch-d.md`

## Uncertain Figma Details

- No exact Figma component measurements were available in this batch, so checkbox radius, switch track dimensions, radio dot sizing, and table cell density remain inherited from the existing shadcn primitives.
- Checkbox, Switch, and Radio Group have partial Koyo state parity for the implemented selected, focus, and invalid states, but their exact Figma component nodes and measurements still need confirmation before claiming full visual parity.
- Koyo success, warning, and info status tokens were not in the known token set. Representative tone examples were reduced to primary, secondary, destructive, border, foreground, and focus-error tokens instead of inventing green/amber/blue mappings.
- Several complex data-table variants still contain raw semantic status colors in non-representative examples. Those should be migrated only after Koyo defines status tokens or approves a status badge helper.
- Base/store component behavior was treated as reference context only; this batch documents Koyo-owned outputs, but only the form-control state work above is currently docs-proofed as visually migrated.

## Historical Verification

- `PATH="/Users/pradumangoyal/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/pradumangoyal/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH" pnpm check-types` passed.
- Existing local server was not stopped or restarted.
- HTTP smoke checks returned `200 OK` for `/docs/components/table`, `/docs/components/data-table`, `/docs/components/form`, `/docs/components/checkbox`, `/docs/components/switch`, and `/docs/components/radio-group` on `http://127.0.0.1:3007`.

## Next Recommended Batch

- Batch E should cover Textarea, Input OTP, Combobox, and Label so the remaining form-control surface uses the same Koyo foreground, border, radius, selected, focus, and focus-error language.
- After Koyo status tokens are available, run a focused pass over data-table status badges and table status examples rather than bulk-editing every data-table variant now.

## Agent 3 Form Controls Follow-up

- Input and Select now use `focus-visible:ring-koyo-brand-ring` and `focus-visible:border-koyo-brand` for normal focus states, with invalid states remaining on `border-destructive` and `ring-koyo-focus-error/30`.
- Checkbox, Switch, and Radio Group checked states now use Koyo component brand tokens (`bg-koyo-brand`, `border-koyo-brand`, `fill-koyo-brand`) plus `koyo-brand-hover` for interactive checked hover states where there is a filled control surface.
- Select items now use secondary focus surfaces and Koyo brand text for checked item indicators, avoiding a global `primary` dependency for selected options.
- Representative Input examples were updated from generic email/username copy to Koyo candidate and recruiter fields.

### Agent 3 Files Changed

- `src/components/ui/input.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/switch.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/shadcn-studio/input/input-01.tsx`
- `src/components/shadcn-studio/input/input-14.tsx`
- `docs/migration-batch-d.md`

### Agent 3 Verification

- `pnpm check-types` passed.
- Existing local server was not stopped or restarted.
- HTTP smoke checks returned `200 OK` for `/docs/components/input`, `/docs/components/select`, `/docs/components/checkbox`, `/docs/components/switch`, and `/docs/components/radio-group` on `http://127.0.0.1:3007`.

## Worker C Data Display Follow-up

- Card: refreshed the first three catalog examples around Koyo candidate review workflows while keeping the compound primitive API unchanged. The examples now show Koyo card borders/radius, neutral secondary metric surfaces, orange links/actions, and palette status badges.
- Table: refreshed the two configured table examples with bordered rounded Koyo table surfaces, candidate review data, Koyo palette badges, and orange-tinted highlighted rows instead of upstream invoice/payment examples.
- Data Table: kept the TanStack behavior and added the visible Koyo app surface around it: candidate filtering, selected-row count, rounded bordered table container, orange primary action, and stage badges from the shared palette variants.
- Avatar: moved the shared fallback surface to Koyo orange fallback tokens (`bg-koyo-button-primary-ring/20`, `text-koyo-brand`), set the default size to the Figma regular 40px avatar, and refreshed the first six avatar examples around fallback, brand ring, roundrect, tiny, and icon states.

### Worker C Figma Evidence

- Used `get_design_context` and `get_screenshot` for Koyo Card frame `3280:28990`. Evidence confirmed `card/card` white surface, `general/border` `#e5e5e5`, `rounded-lg` 8px, small shadow, slot variants, and Koyo examples using 24px card padding/gap.
- Used `get_design_context` and `get_screenshot` for Koyo Avatar frame `3455:12614`. Evidence confirmed 40/32/24/20 avatar sizes, round and roundrect variants, fallback background `#fdf5ef`, fallback foreground `#d95a2b`, and overlapped stacks.
- Table and Data Table exact Koyo Figma nodes were not quickly findable through the exposed connector. Their migration follows the established Koyo token contract and prior Batch D table note rather than claiming exact Figma node parity.

### Worker C Token Gaps

- Added named avatar fallback tokens from Figma evidence: `--koyo-avatar-fallback: #fdf5ef` and `--koyo-avatar-fallback-foreground: #d95a2b`.
- Confirm exact Koyo Table and Data Table Figma nodes, density, header text color, and selected/highlighted row tokens before claiming full visual parity for table primitives.
- Decide whether status chips in dense data examples should remain Badge variants or get a dedicated table/status-token helper.

## Worker E Form Controls Second Pass

- Figma lookup used the provided node `273:30617`, but that node resolved to the Koyo Badge page. A quick metadata pass exposed only the thumbnail page, so exact Input, Select, Checkbox, Switch, and Radio Group nodes were not available in this pass. This work follows the established Koyo token contract rather than claiming exact per-node measurement parity.
- Input now uses explicit Koyo/shared tokens for border, background, foreground, selection, focus ring, invalid ring color, and disabled surface. The configured `input-01` example now visibly shows Koyo focus, invalid, and disabled states.
- Select trigger and item primitives now use Koyo/shared text, disabled, focus, and selected-item surfaces. Configured Select examples now show a Koyo custom select with selected/disabled options, visible invalid ring, visible Koyo focus ring, and orange brand trigger treatment.
- Checkbox now uses Koyo checked and indeterminate foreground tokens plus explicit disabled surface tokens. Configured Checkbox examples show checked orange controls, invalid error ring, disabled state, and Koyo-tinted selected cards.
- Switch now uses Koyo checked/thumb foreground tokens, unchecked hover border, and explicit disabled surface tokens. Configured Switch examples show checked orange, invalid error ring, disabled, error, success, and outline token states.
- Radio Group now uses explicit Koyo border/background/disabled tokens. Configured Radio examples show orange selected indicators, disabled options, and a visible destructive/error ring.
- Form examples now default to selected/checked/on values so the public form page visibly inherits the migrated Radio Group, Checkbox, and Switch states.

### Worker E Files Changed

- `src/components/ui/input.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/switch.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/shadcn-studio/input/input-01.tsx`
- `src/components/shadcn-studio/select/select-01.tsx`
- `src/components/shadcn-studio/select/select-14.tsx`
- `src/components/shadcn-studio/select/select-16.tsx`
- `src/components/shadcn-studio/select/select-17.tsx`
- `src/components/shadcn-studio/checkbox/checkbox-01.tsx`
- `src/components/shadcn-studio/checkbox/checkbox-13.tsx`
- `src/components/shadcn-studio/switch/switch-01.tsx`
- `src/components/shadcn-studio/switch/switch-04.tsx`
- `src/components/shadcn-studio/radio-group/radio-group-01.tsx`
- `src/components/shadcn-studio/radio-group/radio-group-03.tsx`
- `src/components/shadcn-studio/form/form-01.tsx`
- `src/components/shadcn-studio/form/form-02.tsx`
- `src/components/shadcn-studio/form/form-03.tsx`
- `docs/migration-batch-d.md`

### Worker E Token Gaps

- Confirm exact Koyo Figma nodes and measurements for Input, Select, Checkbox, Switch, and Radio Group before claiming pixel parity for density, checkbox radius, switch dimensions, radio dot size, and select item spacing.
- Add dedicated non-button form-control tokens later if Koyo wants orange focus/selected states to diverge from `--koyo-button-primary*`.
- Consider first-class disabled foreground/background aliases for controls if disabled examples should avoid relying on shared `secondary` and `muted-foreground`.

### Worker E Verification

- `pnpm check-types` passed.
- Existing local server was not stopped or restarted.
- GET smoke checks returned `200 OK` for `/docs/components/input`, `/docs/components/select`, `/docs/components/checkbox`, `/docs/components/switch`, `/docs/components/radio-group`, and `/docs/components/form` on `http://127.0.0.1:3007`.
- `curl -I` HEAD checks returned `500` for those docs routes while full GET requests rendered `200`; treated as a dev-server HEAD quirk after confirming a full Input page response body rendered.
