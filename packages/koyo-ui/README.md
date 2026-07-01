# @newtonschool/koyo-ui

Koyo UI is a shadcn-based React component package mapped to Koyo design tokens.

```bash
pnpm add @newtonschool/koyo-ui
```

## Setup

Add the following to your app's main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";
@import "@newtonschool/koyo-ui/tokens.css";
@import "@newtonschool/koyo-ui/theme.css" layer(theme);
@source "../../node_modules/@newtonschool/koyo-ui/dist";
```

- **tokens.css** — design token CSS variables (`:root` and `.dark`)
- **theme.css** — Tailwind `@theme inline` mappings so utility classes like `bg-koyo-button-primary` resolve correctly
- **@source** — tells Tailwind to scan koyo-ui dist for class names used by components

Then use components with subpath imports:

```tsx
import { Button } from '@newtonschool/koyo-ui/button'

export function Example() {
  return <Button>Continue</Button>
}
```

The package is maintained in the Newton School Koyo UI repository and powers the docs site at https://newton-school.github.io/koyo-ui/.
