'use client'

import { useId, useState, type ComponentProps } from 'react'

import { CheckIcon, MinusIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Label } from '@/components/ui/label'

const Checkbox = (props: ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className='peer border-border bg-background dark:bg-input/30 data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:text-koyo-button-primary-foreground data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=indeterminate]:border-koyo-brand data-[state=indeterminate]:bg-koyo-brand data-[state=indeterminate]:text-koyo-button-primary-foreground focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 group size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70'
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <MinusIcon className='hidden size-2.5 group-data-[state=indeterminate]:block' />
        <CheckIcon className='hidden size-3.5 group-data-[state=checked]:block' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

const CheckboxIndeterminateDemo = () => {
  const [checked, setChecked] = useState<CheckboxPrimitive.CheckedState>('indeterminate')

  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor={id}>Partial cohort access</Label>
    </div>
  )
}

export default CheckboxIndeterminateDemo
