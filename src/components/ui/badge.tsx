import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-koyo-focus-error/30 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
        black: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
        koyo: 'bg-koyo-button-primary text-koyo-button-primary-foreground [a&]:hover:bg-koyo-button-primary-hover focus-visible:ring-koyo-button-primary-ring border-transparent',
        brand:
          'bg-koyo-palette-brand [a&]:hover:bg-koyo-palette-brand-hover focus-visible:ring-koyo-palette-brand-ring border-transparent text-white',
        success:
          'bg-koyo-palette-success [a&]:hover:bg-koyo-palette-success-hover focus-visible:ring-koyo-palette-success-ring border-transparent text-white',
        yellow:
          'bg-koyo-palette-yellow text-secondary-foreground [a&]:hover:bg-koyo-palette-yellow-hover focus-visible:ring-koyo-palette-yellow-ring border-transparent',
        purple:
          'bg-koyo-palette-purple [a&]:hover:bg-koyo-palette-purple-hover focus-visible:ring-koyo-palette-purple-ring border-transparent text-white',
        error:
          'bg-koyo-palette-error [a&]:hover:bg-koyo-palette-error-hover focus-visible:ring-koyo-palette-error-ring border-transparent text-white',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent',
        destructive:
          'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-koyo-focus-error/30 border-transparent text-white',
        outline: 'border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        ghost: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border-transparent'
      },
      shape: {
        default: 'rounded-lg',
        round: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      shape: 'default'
    }
  }
)

function Badge({
  className,
  variant,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return <Comp data-slot='badge' className={cn(badgeVariants({ variant, shape }), className)} {...props} />
}

export { Badge, badgeVariants }
