import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-koyo-focus-error/30 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-koyo-button-primary text-koyo-button-primary-foreground hover:bg-koyo-button-primary-hover focus-visible:ring-koyo-button-primary-ring',
        black: 'bg-primary text-primary-foreground hover:bg-primary/90',
        brand:
          'bg-koyo-button-brand hover:bg-koyo-button-brand-hover focus-visible:ring-koyo-button-brand-ring text-white',
        success:
          'bg-koyo-button-success hover:bg-koyo-button-success-hover focus-visible:ring-koyo-button-success-ring text-white',
        yellow:
          'bg-koyo-button-yellow text-secondary-foreground hover:bg-koyo-button-yellow-hover focus-visible:ring-koyo-button-yellow-ring',
        purple:
          'bg-koyo-button-purple hover:bg-koyo-button-purple-hover focus-visible:ring-koyo-button-purple-ring text-white',
        error:
          'bg-koyo-button-error hover:bg-koyo-button-error-hover focus-visible:ring-koyo-button-error-ring text-white',
        destructive: 'bg-destructive hover:bg-destructive/90 focus-visible:ring-koyo-focus-error/30 text-white',
        outline:
          'border-border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 border shadow-xs',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-koyo-brand underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        mini: 'h-6 gap-1.5 px-2 py-[3px] text-xs has-[>svg]:px-1.5 [&_svg:not([class*="size-"])]:size-3',
        sm: 'h-8 gap-1.5 rounded-lg px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-lg px-6 has-[>svg]:px-4',
        xl: 'h-12 px-8 py-3 text-base has-[>svg]:px-6',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10'
      },
      shape: {
        default: 'rounded-lg',
        round: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default'
    }
  }
)

function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, shape, className }))} {...props} />
}

export { Button, buttonVariants }
