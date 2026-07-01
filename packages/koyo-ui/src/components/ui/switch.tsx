'use client'

import * as React from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot='switch'
      className={cn(
        'peer border-border bg-secondary focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=unchecked]:bg-secondary data-[state=unchecked]:hover:border-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:opacity-70',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot='switch-thumb'
        className={cn(
          'bg-background data-[state=checked]:bg-koyo-button-primary-foreground dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-koyo-button-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
