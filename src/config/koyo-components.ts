export type KoyoComponentStatus = 'draft' | 'ready-for-review' | 'mapped'

export type KoyoFigmaRole = 'koyo-owned'

export type KoyoCodeTarget = {
  label: string
  path: string
  purpose: 'source' | 'metadata' | 'docs'
}

export type KoyoComponentMetadata = {
  slug: string
  name: string
  status: KoyoComponentStatus
  figmaRole: KoyoFigmaRole
  baseReference: string
  koyoTarget: string
  variants: string[]
  tokenNotes: string[]
  figmaNodes?: {
    page: string
    baseReference: string
    koyoComponent: string
    confidence: 'high' | 'medium' | 'low'
  }
  codeTargets: KoyoCodeTarget[]
}

export const koyoComponentStatusLabels: Record<KoyoComponentStatus, string> = {
  draft: 'Draft',
  'ready-for-review': 'Ready for review',
  mapped: 'Mapped'
}

export const koyoFigmaRoleLabels: Record<KoyoFigmaRole, string> = {
  'koyo-owned': 'Koyo-owned'
}

export const koyoComponents = [
  {
    slug: 'badge',
    name: 'Badge',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store badge nodes are reference only for primitive structure and density.',
    koyoTarget:
      'Koyo Badge documents product labels, status marks, chips, and compact counters with the neutral Figma primary/default, shared Koyo palette, Koyo orange accent, outline, ghost, and destructive tones.',
    variants: [
      'Default',
      'Black',
      'Koyo Accent (`koyo`)',
      'Brand',
      'Success',
      'Yellow',
      'Purple',
      'Error',
      'Secondary',
      'Destructive',
      'Outline',
      'Ghost'
    ],
    tokenNotes: [
      'Figma variants include Primary, Secondary, Outline, Ghost, and Destructive.',
      'Fresh Figma context for Badge node 273:30617 shows Primary/default uses var(--general/primary, #171717), so Badge primary/default is neutral black, not Koyo orange.',
      'Koyo orange is available as the koyo accent/component variant where useful, but it is not a global primary replacement for Badge.',
      'Brand, Success, Yellow, Purple, and Error use the shared Koyo palette tokens confirmed from the Button-page swatch grid.',
      'Roundness maps to default rounded-lg and round rounded-full shapes.',
      'Focus states use the shared ring token, with destructive focus mapped to focus/ring error.',
      'Koyo docs expose the product Badge component; Figma base/store Badge nodes remain reference inputs only.',
      'Known spacing uses 3xs 2px vertical padding, 2xs 4px gap, and xs 8px horizontal padding.'
    ],
    figmaNodes: {
      page: 'Badge (842:44441)',
      baseReference: 'Frame Badge (273:30617), component set Badge (19:6979)',
      koyoComponent: 'Brand Theme frame (3455:13168), component set Badge (3455:13174)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Badge source',
        path: 'src/components/ui/badge.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'button',
    name: 'Button',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store button nodes are reference only for accessible interaction patterns.',
    koyoTarget:
      'Koyo Button documents the product action hierarchy, Koyo orange primary action, explicit black/neutral action, and icon button sizing.',
    variants: [
      'Default',
      'Black',
      'Brand',
      'Success',
      'Yellow',
      'Purple',
      'Error',
      'Secondary',
      'Destructive',
      'Outline',
      'Ghost',
      'Link',
      'Icon'
    ],
    tokenNotes: [
      'The implemented default Button is the Koyo orange component primary using --koyo-button-primary, --koyo-button-primary-hover, and --koyo-button-primary-ring.',
      'The explicit Black variant preserves the original shadcn neutral primary action with bg-primary/text-primary-foreground.',
      'Implemented palette variants are Default/Koyo orange, Black, Brand, Success, Yellow, Purple, Error, Secondary, Destructive, Outline, Ghost, and Link.',
      'Brand, Success, Yellow, Purple, and Error use confirmed Button-page swatches from the Figma palette grid around node 3462:6548 onward.',
      'Figma size variants include Default, Small, Mini, Large, and Extra Large; implementation currently exposes default, mini, sm, lg, xl, icon, icon-sm, and icon-lg.',
      'Roundness maps to default rounded-lg and round rounded-full button treatments.',
      'Koyo docs expose the product Button component; Figma base/store Button nodes remain reference inputs only.',
      'Interactive state values should be represented with CSS behavior and forced-state examples, not public props.'
    ],
    figmaNodes: {
      page: 'Button (842:44442)',
      baseReference: 'Frame Button (273:30945), component set Button (9:1071)',
      koyoComponent: 'Second Button frame (3268:27919), component set Button (3268:27118)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Button source',
        path: 'src/components/ui/button.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo detail route',
        path: 'src/app/(pages)/docs/koyo/[component]/page.tsx',
        purpose: 'docs'
      }
    ]
  },
  {
    slug: 'input',
    name: 'Input',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store input nodes are reference only for field anatomy and browser behavior.',
    koyoTarget:
      'Koyo Input documents text entry fields, Koyo focus/error states, disabled states, selection styling, and file affordances.',
    variants: ['Text', 'Search', 'Disabled', 'Invalid', 'File', 'With leading or trailing content'],
    tokenNotes: [
      'Figma state variants include Empty, Placeholder, Value, Focus, Error, Error Focus, and Disabled.',
      'Figma size variants include Regular, Large, Small, and Mini.',
      'Decoration booleans map to leading/trailing slots and prepend/append text examples.',
      'Normal focus uses the shared Koyo brand border/ring layer; invalid states should be driven through aria-invalid so product forms can share focus-error behavior.',
      'This is a partial form-control migration: focus/error states are tokenized, while full Figma sizing and decoration parity remains pending.'
    ],
    figmaNodes: {
      page: 'Input & Input Group (842:49172)',
      baseReference:
        'Frame Input & Input Group (279:98539), component sets Input (16:1738) and .Input Decoration (1702:9726)',
      koyoComponent:
        'Second Input & Input Group frame (3468:16500), component sets Input (3468:16506) and .Input Decoration (3468:17087)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Input source',
        path: 'src/components/ui/input.tsx',
        purpose: 'source'
      },
      {
        label: 'Field composition source',
        path: 'src/components/ui/field.tsx',
        purpose: 'source'
      }
    ]
  },
  {
    slug: 'select',
    name: 'Select',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference:
      'Base/store select behavior remains Radix reference context for trigger, content, items, and keyboard support.',
    koyoTarget:
      'Koyo Select documents trigger/content/item surfaces using shared Koyo border, brand focus, selected, and error tokens where the implementation supports them.',
    variants: ['Default trigger', 'Small trigger', 'Placeholder', 'Selected item', 'Disabled item', 'Invalid'],
    tokenNotes: [
      'Implementation supports default and sm trigger sizes through SelectTrigger size.',
      'Normal trigger focus uses Koyo brand border/ring tokens; invalid trigger state uses border-destructive and ring-koyo-focus-error/30.',
      'Checked Select items use Koyo brand text for the item indicator and secondary token surfaces for focus.',
      'This is a partial form-control migration: trigger focus, invalid state, and selected item color are tokenized; full Select visual parity is pending.',
      'Exact Koyo Figma select component IDs, item height, and content spacing are not confirmed in the available Figma map.'
    ],
    codeTargets: [
      {
        label: 'Select source',
        path: 'src/components/ui/select.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference:
      'Base/store checkbox behavior remains Radix reference context for checked, unchecked, disabled, and invalid states.',
    koyoTarget:
      'Koyo Checkbox documents the shared Koyo brand checked state, focus ring, invalid ring, and compact rounded-sm control shape.',
    variants: ['Unchecked', 'Checked', 'Disabled', 'Invalid'],
    tokenNotes: [
      'Checked state uses Koyo component brand background and border tokens, with Koyo brand hover tokens where applicable.',
      'Normal focus uses Koyo brand border/ring tokens; invalid state uses border-destructive and ring-koyo-focus-error/30.',
      'This is a partial form-control migration: checked, focus, and invalid states are tokenized; exact Figma sizing remains pending.',
      'Roundness is implemented with rounded-sm; exact Figma checkbox radius and measurements were not available in the batch notes.',
      'No success, warning, or info checkbox tones are documented because those Koyo status tokens are not confirmed.'
    ],
    codeTargets: [
      {
        label: 'Checkbox source',
        path: 'src/components/ui/checkbox.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'switch',
    name: 'Switch',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference:
      'Base/store switch behavior remains Radix reference context for checked, unchecked, disabled, and invalid states.',
    koyoTarget:
      'Koyo Switch documents tokenized checked/unchecked tracks with Koyo brand checked state, secondary unchecked state, focus ring, and invalid ring.',
    variants: ['Unchecked', 'Checked', 'Disabled', 'Invalid'],
    tokenNotes: [
      'Checked state uses Koyo component brand background and border tokens, with Koyo brand hover tokens.',
      'Unchecked track uses secondary token surfaces rather than an invented status palette.',
      'Normal focus uses Koyo brand border/ring tokens; invalid state uses border-destructive and ring-koyo-focus-error/30.',
      'This is a partial form-control migration: checked, unchecked, focus, and invalid states are tokenized; exact Figma sizing remains pending.',
      'Exact Figma switch track dimensions, thumb sizing, and alternate tone variants were not available in the batch notes.'
    ],
    codeTargets: [
      {
        label: 'Switch source',
        path: 'src/components/ui/switch.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference:
      'Base/store radio group behavior remains Radix reference context for grouped selection and keyboard support.',
    koyoTarget:
      'Koyo Radio Group documents grouped choices using Koyo brand selected indicators, focus rings, invalid rings, and shared form-control spacing.',
    variants: ['Unchecked item', 'Checked item', 'Disabled item', 'Invalid'],
    tokenNotes: [
      'Selected radio items use Koyo brand border/text/fill tokens for the indicator.',
      'Normal focus uses Koyo brand border/ring tokens; invalid state uses border-destructive and ring-koyo-focus-error/30.',
      'This is a partial form-control migration: selected, focus, and invalid states are tokenized; exact Figma sizing remains pending.',
      'Group layout keeps the existing grid gap primitive; exact Figma radio dot size and item density were not available in the batch notes.',
      'No success, warning, or info radio tones are documented because those Koyo status tokens are not confirmed.'
    ],
    codeTargets: [
      {
        label: 'Radio Group source',
        path: 'src/components/ui/radio-group.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'card',
    name: 'Card',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store card nodes are reference only for shell anatomy and content slots.',
    koyoTarget: 'Koyo Card documents product containers for grouped content, metrics, settings, and media.',
    variants: ['Default', 'Compact', 'Metric', 'Media', 'Settings', 'Content only'],
    tokenNotes: [
      'Figma Card variants are slot-driven: 1 Slot, 2 Slots, and 3 Slots.',
      'Use card foreground and background tokens rather than neutral one-off colors.',
      'Preserve the shared border and shadow treatment for quiet product surfaces.',
      'Slot spacing should map to Figma spacing tokens before adding per-card overrides.'
    ],
    figmaNodes: {
      page: 'Card (842:49175)',
      baseReference: 'Frame Card (288:122714), component set Card (179:29234)',
      koyoComponent: 'Second Card frame (3280:28990), component set Card (3280:28996)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Card source',
        path: 'src/components/ui/card.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo catalog route',
        path: 'src/app/(pages)/docs/koyo/page.tsx',
        purpose: 'docs'
      }
    ]
  },
  {
    slug: 'alert',
    name: 'Alert',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store alert nodes are reference only for announcement structure and severity patterns.',
    koyoTarget: 'Koyo Alert documents inline feedback, severity messaging, and product notification content.',
    variants: ['Default', 'Destructive', 'With icon', 'Title and description', 'Compact'],
    tokenNotes: [
      'Figma Alert variants include Neutral and Error types.',
      'Figma booleans include Show Line 2, Show Icon, Show Button, and Flip Icon.',
      'Icon color should inherit currentColor so severity is controlled by the alert variant.',
      'Description text should keep the muted hierarchy unless the severity variant intentionally overrides it.'
    ],
    figmaNodes: {
      page: 'Alert (842:44439)',
      baseReference: 'Frame Alert (8:283), component set Alert (58:5416)',
      koyoComponent: 'Second Alert frame (3455:11897), component set Alert (3455:11903)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Alert source',
        path: 'src/components/ui/alert.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo metadata',
        path: 'src/config/koyo-components.ts',
        purpose: 'metadata'
      }
    ]
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store accordion nodes are reference only for disclosure behavior and keyboard support.',
    koyoTarget: 'Koyo Accordion documents disclosure lists used for FAQs, settings, and progressive detail.',
    variants: ['Single', 'Multiple', 'Default item', 'Nested content', 'Compact'],
    tokenNotes: [
      'Figma trigger states include Closed, Open, and Focus.',
      'Bordered trigger positions include First, Middle, Last, and Single.',
      'Chevron motion should remain tied to open state and avoid per-product timing changes.',
      'Collapsed content spacing should map back to Koyo spacing tokens before adding custom layouts.'
    ],
    figmaNodes: {
      page: 'Accordion (842:49174)',
      baseReference: 'First Accordion frame (288:122452), trigger component sets (66:5034) and (1779:595)',
      koyoComponent: 'Second Accordion frame (3454:11609), trigger component sets (3454:11616) and (3454:11658)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Accordion source',
        path: 'src/components/ui/accordion.tsx',
        purpose: 'source'
      },
      {
        label: 'Existing component catalog',
        path: 'src/app/(pages)/docs/components/[category]/page.tsx',
        purpose: 'docs'
      }
    ]
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    status: 'draft',
    figmaRole: 'koyo-owned',
    baseReference: 'Base/store avatar nodes are reference only for image and fallback anatomy.',
    koyoTarget: 'Koyo Avatar documents profile imagery, initials, groups, presence, and fallback treatments.',
    variants: ['Image', 'Fallback initials', 'Group', 'Presence', 'Verified', 'Compact'],
    tokenNotes: [
      'Figma Avatar variants include Picture On/Off, Small, Regular, Tiny, Extra Tiny, Roundrect, and Round.',
      'Avatar Stack includes Regular and Small sizes with visibility booleans for additional stacked items.',
      'Fallback surfaces should use muted tokens and maintain readable foreground contrast.',
      'Presence and verification marks should be documented as Koyo-owned compositions, not base primitives.'
    ],
    figmaNodes: {
      page: 'Avatar (842:44440)',
      baseReference: 'First Avatar frame (273:27988), component sets Avatar (18:1398) and Avatar Stack (22:9509)',
      koyoComponent:
        'Second Avatar frame (3455:12614), component sets Avatar (3455:12621) and Avatar Stack (3455:12700)',
      confidence: 'high'
    },
    codeTargets: [
      {
        label: 'Avatar source',
        path: 'src/components/ui/avatar.tsx',
        purpose: 'source'
      },
      {
        label: 'Koyo detail route',
        path: 'src/app/(pages)/docs/koyo/[component]/page.tsx',
        purpose: 'docs'
      }
    ]
  }
] satisfies KoyoComponentMetadata[]

export function getKoyoComponent(slug: string): KoyoComponentMetadata | undefined {
  return koyoComponents.find(component => component.slug === slug)
}
