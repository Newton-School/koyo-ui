import { useId } from 'react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupChipDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Aptitude' },
    { value: '2', label: 'Coding', disabled: true },
    { value: '3', label: 'System design' },
    { value: '4', label: 'HR' },
    { value: '5', label: 'Mentor fit' }
  ]

  return (
    <fieldset className='w-full max-w-96 space-y-4'>
      <legend className='text-foreground text-sm leading-none font-medium'>Select interview module: </legend>
      <RadioGroup className='grid grid-cols-3 gap-2' defaultValue='1'>
        {items.map(item => (
          <label
            key={`${id}-${item.value}`}
            className='border-border bg-background has-data-[state=checked]:border-koyo-brand has-data-[state=checked]:bg-koyo-brand/5 has-focus-visible:border-koyo-brand has-focus-visible:ring-koyo-brand-ring relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:bg-secondary has-data-disabled:text-muted-foreground has-data-disabled:opacity-70'
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='sr-only after:absolute after:inset-0'
              aria-label={`interview-module-radio-${item.value}`}
              disabled={item.disabled}
            />
            <p className='text-foreground text-sm leading-none font-medium'>{item.label}</p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}

export default RadioGroupChipDemo
