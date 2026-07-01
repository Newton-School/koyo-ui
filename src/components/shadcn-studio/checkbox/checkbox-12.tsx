import { CircleCheckIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const CheckboxFilledIconDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer size-7 shrink-0 rounded-full bg-destructive shadow-xs transition-shadow outline-none focus-visible:border-destructive focus-visible:ring-[3px] focus-visible:ring-koyo-focus-error/30 data-[state=checked]:text-destructive'
        aria-label='Reject candidate'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer size-7 shrink-0 rounded-full bg-koyo-brand shadow-xs transition-shadow outline-none focus-visible:border-koyo-brand focus-visible:ring-[3px] focus-visible:ring-koyo-brand-ring data-[state=checked]:text-koyo-brand'
        aria-label='Approve candidate'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer size-7 shrink-0 rounded-full bg-koyo-brand shadow-xs transition-shadow outline-none focus-visible:border-koyo-brand focus-visible:ring-[3px] focus-visible:ring-koyo-brand-ring data-[state=checked]:text-koyo-brand'
        aria-label='Complete learner onboarding'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  )
}

export default CheckboxFilledIconDemo
