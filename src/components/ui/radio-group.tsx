'use client'

import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot='radio-group' className={cn('grid gap-3', className)} {...props} />
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'border-border bg-background text-koyo-brand focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 dark:bg-input/30 data-[state=checked]:border-koyo-brand aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='relative flex items-center justify-center'
      >
        <CircleIcon className='fill-koyo-brand absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
