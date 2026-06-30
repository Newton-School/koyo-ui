# Koyo Figma Token Extract

Source file: `vZxsTXFjBdz8iDED2qnDG6` / Shadcn UI kit  
Primary Koyo component nodes inspected:

- Koyo Button page/frame: `3268:27919`
- Koyo Button component set: `3268:27118`
- Koyo Badge component set: `3455:13174`
- Koyo Input component set: `3468:16506`
- Button page: `842:44442`
- Button-page palette swatches: `3462:6548` through `3462:6599`

## Component Token Recommendations

Do not replace global shadcn `--primary` with orange. The Koyo-owned Button/Badge component layer uses separate component-brand tokens.

```css
:root {
  --koyo-button-primary: #d95a2b;
  --koyo-button-primary-hover: #e18156;
  --koyo-button-primary-foreground: #fafafa;
  --koyo-button-primary-ring: #f3ceb5;

  --koyo-button-destructive: #d22d3a;
  --koyo-button-destructive-hover: #d22d3a; /* Figma hover/active sampled same as default */
  --koyo-button-destructive-foreground: #ffffff;
  --koyo-button-destructive-ring: #f8636b;

  --koyo-button-radius: 8px;
  --koyo-button-focus-ring-width: 3px;

  --koyo-focus-error: #f8636b;
}
```

Existing code aliases can remain if desired:

```css
--koyo-brand: var(--koyo-button-primary);
--koyo-brand-hover: var(--koyo-button-primary-hover);
--koyo-brand-ring: var(--koyo-button-primary-ring);
```

## Component Evidence

| Use                                  | Figma node   | Evidence                                                                      | Hex       |
| ------------------------------------ | ------------ | ----------------------------------------------------------------------------- | --------- |
| Button primary/default fill          | `3268:27119` | Dominant rendered fill                                                        | `#d95a2b` |
| Button primary/hover-active fill     | `3268:27123` | Dominant rendered fill                                                        | `#e18156` |
| Button primary/focus fill            | `3268:27127` | Dominant rendered fill                                                        | `#d95a2b` |
| Button primary/focus ring            | `3268:27127` | Dominant outer ring in focused render                                         | `#f3ceb5` |
| Button destructive/default fill      | `3268:27183` | Dominant rendered fill                                                        | `#d22d3a` |
| Button destructive/hover-active fill | `3268:27187` | Dominant rendered fill                                                        | `#d22d3a` |
| Button destructive/focus fill        | `3268:27191` | Dominant rendered fill                                                        | `#d22d3a` |
| Button destructive/focus ring        | `3268:27191` | Dominant outer ring in focused render                                         | `#f8636b` |
| Button default radius                | `3268:27119` | 69x36 render alpha mask reaches full width at y=7, consistent with 8px radius | `8px`     |

Badge component set `3455:13174` has the same variants as Button at the component layer: Primary, Secondary, Outline, Ghost, Destructive, each with Default and Focus states, plus Default/Round roundness. Use the same primary/destructive token mapping for Badge primary/destructive until raw Figma variable bindings are available.

Input component set `3468:16506` exposes states Empty, Placeholder, Value, Focus, Error, Error Focus, Disabled. Error/focus-error should map to the destructive/error family above, especially `#d22d3a` for error border/fill semantics and `#f8636b` for error focus ring.

## Button-Page Palette Swatches

Evidence source: Button page `842:44442`, swatch nodes `3462:6548` onward. One user-confirmed token: `3462:6548 = color/brand/0 = #e5f1ff`.

Visible labels expose only steps `0`, `500`, and `900`; family names are not visible in metadata or the rendered crop. Family names below are fallback names from row color, except `color/brand` which is confirmed by the user-provided node/token mapping.

### `color/brand`

| Token                    | Node        | Hex       |
| ------------------------ | ----------- | --------- |
| `--koyo-color-brand-0`   | `3462:6548` | `#e5f1ff` |
| `--koyo-color-brand-100` | `3462:6553` | `#c2ddff` |
| `--koyo-color-brand-200` | `3462:6559` | `#94c4ff` |
| `--koyo-color-brand-300` | `3462:6565` | `#61a8ff` |
| `--koyo-color-brand-400` | `3462:6570` | `#2989ff` |
| `--koyo-color-brand-500` | `3462:6575` | `#0673f9` |
| `--koyo-color-brand-600` | `3462:6580` | `#005ed1` |
| `--koyo-color-brand-700` | `3462:6585` | `#004599` |
| `--koyo-color-brand-800` | `3462:6590` | `#003270` |
| `--koyo-color-brand-900` | `3462:6595` | `#002452` |

### Fallback `color/green`

| Token                    | Node        | Hex       |
| ------------------------ | ----------- | --------- |
| `--koyo-color-green-0`   | `3462:6549` | `#d9fced` |
| `--koyo-color-green-100` | `3462:6554` | `#acf7d3` |
| `--koyo-color-green-200` | `3462:6560` | `#7ee7b8` |
| `--koyo-color-green-300` | `3462:6566` | `#50ce99` |
| `--koyo-color-green-400` | `3462:6571` | `#13b97c` |
| `--koyo-color-green-500` | `3462:6576` | `#009965` |
| `--koyo-color-green-600` | `3462:6581` | `#007a51` |
| `--koyo-color-green-700` | `3462:6586` | `#005c3d` |
| `--koyo-color-green-800` | `3462:6591` | `#003d29` |
| `--koyo-color-green-900` | `3462:6596` | `#002d1e` |

### Fallback `color/red`

| Token                  | Node        | Hex       |
| ---------------------- | ----------- | --------- |
| `--koyo-color-red-0`   | `3462:6550` | `#ffe5e7` |
| `--koyo-color-red-100` | `3462:6555` | `#fbbbbf` |
| `--koyo-color-red-200` | `3462:6561` | `#fa9499` |
| `--koyo-color-red-300` | `3462:6567` | `#f8636b` |
| `--koyo-color-red-400` | `3462:6572` | `#ee3f44` |
| `--koyo-color-red-500` | `3462:6577` | `#d22d3a` |
| `--koyo-color-red-600` | `3462:6582` | `#a01b22` |
| `--koyo-color-red-700` | `3462:6587` | `#7e1219` |
| `--koyo-color-red-800` | `3462:6592` | `#63080d` |
| `--koyo-color-red-900` | `3462:6597` | `#4a040a` |

### Fallback `color/amber-orange`

| Token                           | Node        | Hex       |
| ------------------------------- | ----------- | --------- |
| `--koyo-color-amber-orange-0`   | `3462:6551` | `#fff3d6` |
| `--koyo-color-amber-orange-100` | `3462:6556` | `#ffe4ad` |
| `--koyo-color-amber-orange-200` | `3462:6562` | `#ffd580` |
| `--koyo-color-amber-orange-300` | `3462:6568` | `#fec553` |
| `--koyo-color-amber-orange-400` | `3462:6573` | `#feb000` |
| `--koyo-color-amber-orange-500` | `3462:6578` | `#f59700` |
| `--koyo-color-amber-orange-600` | `3462:6583` | `#d17300` |
| `--koyo-color-amber-orange-700` | `3462:6588` | `#944500` |
| `--koyo-color-amber-orange-800` | `3462:6593` | `#5c2900` |
| `--koyo-color-amber-orange-900` | `3462:6598` | `#3d1a00` |

### Fallback `color/purple`

| Token                     | Node        | Hex       |
| ------------------------- | ----------- | --------- |
| `--koyo-color-purple-0`   | `3462:6552` | `#f5e5ff` |
| `--koyo-color-purple-100` | `3462:6557` | `#e1d1ff` |
| `--koyo-color-purple-200` | `3462:6563` | `#cebcfe` |
| `--koyo-color-purple-300` | `3462:6569` | `#b49dfe` |
| `--koyo-color-purple-400` | `3462:6574` | `#967cfc` |
| `--koyo-color-purple-500` | `3462:6579` | `#7b55ee` |
| `--koyo-color-purple-600` | `3462:6584` | `#6138d3` |
| `--koyo-color-purple-700` | `3462:6589` | `#46279b` |
| `--koyo-color-purple-800` | `3462:6594` | `#331d72` |
| `--koyo-color-purple-900` | `3462:6599` | `#221056` |

### Unlabeled Lavender Accent Pair

These two swatches sit above the purple row and have no visible step labels in metadata/screenshot crop.

| Token                            | Node        | Hex       |
| -------------------------------- | ----------- | --------- |
| `--koyo-color-lavender-accent-a` | `3462:6558` | `#e1d1ff` |
| `--koyo-color-lavender-accent-b` | `3462:6564` | `#cebcfe` |

## Uncertainty

- Raw Figma variable bindings and style names were not exposed by the available connector, so component token names above are recommendations based on rendered pixels and visible metadata.
- The Button-page swatch grid only exposes step labels `0`, `500`, and `900`; intermediate step names are inferred as `100` through `800` by grid order.
- Family names for green/red/amber-orange/purple/lavender are fallback names. Only `color/brand/0` is explicitly confirmed by node/token name.
- The Koyo orange primary `#d95a2b` and hover `#e18156` are component-layer Button/accent fills, not replacements for global shadcn `--primary`. Badge `Primary` was revalidated through `get_design_context` on `273:30617` as neutral `#171717`.
