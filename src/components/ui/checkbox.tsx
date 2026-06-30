'use client'

import * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'peer border-border bg-background dark:bg-input/30 data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:text-koyo-button-primary-foreground data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=indeterminate]:border-koyo-brand data-[state=indeterminate]:bg-koyo-brand data-[state=indeterminate]:text-koyo-button-primary-foreground focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 size-4 shrink-0 rounded-sm border shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='grid place-content-center text-current transition-none'
      >
        <CheckIcon className='size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
