import { HeartIcon, CircleIcon, StarIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const CheckboxCustomIconsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group rounded-sm outline-none focus-visible:border-koyo-brand focus-visible:ring-3 focus-visible:ring-koyo-brand-ring'
        aria-label='Favorite candidate'
      >
        <span className='group-data-[state=checked]:hidden'>
          <HeartIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <HeartIcon className='fill-koyo-brand stroke-koyo-brand stroke-1' />
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group rounded-sm outline-none focus-visible:border-koyo-brand focus-visible:ring-3 focus-visible:ring-koyo-brand-ring'
        aria-label='Star interview'
      >
        <span className='group-data-[state=checked]:hidden'>
          <StarIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <StarIcon className='fill-amber-500 stroke-amber-500 stroke-1 dark:fill-amber-400 dark:stroke-amber-400' />
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group rounded-sm outline-none focus-visible:border-koyo-brand focus-visible:ring-3 focus-visible:ring-koyo-brand-ring'
        aria-label='Mark cohort complete'
      >
        <span className='group-data-[state=checked]:hidden'>
          <CircleIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <CircleIcon className='fill-koyo-brand stroke-koyo-brand stroke-1' />
        </span>
      </CheckboxPrimitive.Root>
    </div>
  )
}

export default CheckboxCustomIconsDemo
