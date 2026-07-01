'use client'

import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { AnimatePresence, motion, type HTMLMotionProps, type Transition } from 'motion/react'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  HTMLMotionProps<'button'> & {
    transition?: Transition
  }

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot='radio-group' className={cn('grid gap-3', className)} {...props} />
}

function RadioGroupItem({
  className,
  transition = { type: 'spring', stiffness: 200, damping: 16 },
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item asChild {...props}>
      <motion.button
        data-slot='radio-group-item'
        className={cn(
          'border-border bg-background text-koyo-brand focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 dark:bg-input/30 data-[state=checked]:border-koyo-brand aspect-square size-5 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70',
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RadioGroupPrimitive.Indicator
          data-slot='radio-group-indicator'
          className='relative flex items-center justify-center'
        >
          <AnimatePresence>
            <motion.div
              key='radio-group-indicator-circle'
              data-slot='radio-group-indicator-circle'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={transition}
            >
              <CircleIcon className='size-3 fill-current text-current' />
            </motion.div>
          </AnimatePresence>
        </RadioGroupPrimitive.Indicator>
      </motion.button>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
