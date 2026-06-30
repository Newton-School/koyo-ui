// Third-party Imports
import {
  PaintbrushVertical,
  Palette,
  SeparatorVertical,
  SquareDashedBottomCode,
  SwatchBook,
  TypeOutline
} from 'lucide-react'

export const features = [
  {
    icon: Palette,
    title: 'Koyo Token Mapping',
    description: 'Map component styling to the color, typography, spacing, radius, and state tokens used in Figma.'
  },
  {
    icon: PaintbrushVertical,
    title: 'Koyo-Owned Variants',
    description: 'Browse product-ready component variants that represent the Koyo docs output.'
  },
  {
    icon: TypeOutline,
    title: 'Design Decisions',
    description: 'Keep typography, density, motion, and interaction defaults aligned across product surfaces.'
  },
  {
    icon: SquareDashedBottomCode,
    title: 'Tailwind v4 Source',
    description: 'Copy React and Tailwind CSS source that stays compatible with shadcn/ui-style projects.'
  },
  {
    icon: SeparatorVertical,
    title: 'Base/Store Context',
    description: 'Use base and store Figma components as implementation reference, not as product-facing output.'
  },
  {
    icon: SwatchBook,
    title: 'Copy-Owned Code',
    description: 'Copy components into an app, then adapt the local source while staying aligned with Koyo tokens.'
  }
]
