import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'border-border bg-background text-foreground file:text-foreground placeholder:text-muted-foreground selection:bg-koyo-brand selection:text-koyo-button-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-lg border px-3 py-1 text-base shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70 md:text-sm',
        'focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring focus-visible:ring-[3px]',
        'aria-invalid:ring-koyo-focus-error/30 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
