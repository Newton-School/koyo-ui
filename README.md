# Koyo UI

Koyo UI is a shadcn-based component system for Koyo product work. It maps copy-and-paste React and Tailwind CSS components to Koyo-owned Figma components, design tokens, and product interface patterns.

The goal is to give Koyo teams a practical place to browse, copy, and evolve UI components that already match the Koyo design system. Components remain source-owned after copying, so product teams can adjust behavior, styling, and composition for their app without waiting on a packaged component release.

## What This Fork Contains

- A Next.js component catalog for Koyo UI components, blocks, and examples.
- shadcn-style source components built with React, Tailwind CSS, Radix UI, and Motion where needed.
- Koyo-specific documentation and metadata for the local catalog experience.
- Koyo Figma component and token alignment through shared CSS variables and design-system naming.
- Base/store Figma components as implementation and reference context only; Koyo-owned components are the product-facing docs output.

## Local Development

Install dependencies and run the catalog locally:

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm check-types
pnpm lint
pnpm build
```

## Library Package

The repo contains a workspace package for Koyo UI primitives at `packages/koyo-ui`.

```bash
pnpm build:lib
```

Once published, consumers can install the public Newton package and import component subpaths plus the Koyo token stylesheet:

```bash
pnpm add @newtonschool/koyo-ui
```

```tsx
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import '@newtonschool/koyo-ui/styles.css'
```

The package build emits ESM, CommonJS, TypeScript declarations, component subpath exports, and `styles.css` into `packages/koyo-ui/dist`. The docs catalog consumes `@newtonschool/koyo-ui` through the pnpm workspace so the site exercises the same package surface that will be published.

Publishing requires npm auth for the Newton scope:

```bash
pnpm publish:lib
```

## Attribution

Koyo UI is built on [shadcn/ui](https://ui.shadcn.com/) patterns and adapted from the MIT-licensed [Shadcn Studio](https://github.com/themeselection/shadcn-studio) codebase. Upstream Shadcn Studio is maintained by ThemeSelection.

This fork preserves upstream attribution where appropriate while replacing product-facing catalog copy and metadata with Koyo UI language.

## License

This project uses the MIT license. See [LICENSE.md](./LICENSE.md) for the local license text and retain upstream notices when copying or redistributing derived code.
