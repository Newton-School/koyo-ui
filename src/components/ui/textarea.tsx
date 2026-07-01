import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'border-border bg-background placeholder:text-muted-foreground selection:bg-koyo-brand selection:text-koyo-button-primary-foreground focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring aria-invalid:ring-koyo-focus-error/30 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-lg border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-70 md:text-sm',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
