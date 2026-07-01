import type { ComponentProps } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const SelectNative = ({ className, children, ...props }: ComponentProps<'select'>) => {
  return (
    <div className='relative flex'>
      <select
        data-slot='select-native'
        className={cn(
          'peer border-border bg-background text-foreground focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring has-[option[disabled]:checked]:text-muted-foreground aria-invalid:ring-koyo-focus-error/30 aria-invalid:border-destructive inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border text-sm shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70',
          props.multiple
            ? '[&_option:checked]:bg-koyo-brand [&_option:checked]:text-koyo-button-primary-foreground py-1 *:px-3 *:py-1'
            : 'h-9 pr-8 pl-3',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {!props.multiple && (
        <span className='text-muted-foreground/80 peer-aria-invalid:text-destructive/80 pointer-events-none absolute inset-y-0 right-0 flex h-full w-9 items-center justify-center peer-disabled:opacity-50'>
          <ChevronDownIcon size={16} aria-hidden='true' />
        </span>
      )}
    </div>
  )
}

export { SelectNative }
