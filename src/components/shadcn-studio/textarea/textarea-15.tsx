import { useId } from 'react'

const TextareaWithInsetLabelDemo = () => {
  const id = useId()

  return (
    <div className='border-border bg-background focus-within:border-koyo-brand focus-within:ring-koyo-brand-ring has-aria-invalid:ring-koyo-focus-error/30 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-lg border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
      <label htmlFor={id} className='text-foreground block px-3 pt-1 text-xs font-medium'>
        Textarea with inset label
      </label>
      <textarea
        id={id}
        className='text-foreground placeholder:text-muted-foreground/70 flex min-h-14 w-full px-3 pb-2 text-sm focus-visible:outline-none'
      />
    </div>
  )
}

export default TextareaWithInsetLabelDemo
