'use client'

import * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { motion, type HTMLMotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & HTMLMotionProps<'button'>

function Checkbox({ className, onCheckedChange, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(props?.checked ?? props?.defaultChecked ?? false)

  React.useEffect(() => {
    if (props?.checked !== undefined) setIsChecked(props.checked)
  }, [props?.checked])

  const handleCheckedChange = React.useCallback(
    (checked: boolean) => {
      setIsChecked(checked)
      onCheckedChange?.(checked)
    },
    [onCheckedChange]
  )

  return (
    <CheckboxPrimitive.Root {...props} onCheckedChange={handleCheckedChange} asChild>
      <motion.button
        data-slot='checkbox'
        className={cn(
          'peer border-border bg-background dark:bg-input/30 data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:text-koyo-button-primary-foreground data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=indeterminate]:border-koyo-brand data-[state=indeterminate]:bg-koyo-brand data-[state=indeterminate]:text-koyo-button-primary-foreground focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:border-destructive aria-invalid:ring-koyo-focus-error/30 size-4 shrink-0 rounded-sm border shadow-xs transition-[color,box-shadow,background-color,border-color] duration-500 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70',
          className
        )}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        {...props}
      >
        <CheckboxPrimitive.Indicator forceMount asChild>
          <motion.svg
            data-slot='checkbox-indicator'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='3.5'
            stroke='currentColor'
            className='size-3.5'
            initial='unchecked'
            animate={isChecked ? 'checked' : 'unchecked'}
          >
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
              variants={{
                checked: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: 0.2
                  }
                },
                unchecked: {
                  pathLength: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.2
                  }
                }
              }}
            />
          </motion.svg>
        </CheckboxPrimitive.Indicator>
      </motion.button>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
