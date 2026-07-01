import { Checkbox } from '@/components/ui/checkbox'

const CheckboxColorsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        className='data-[state=checked]:border-destructive data-[state=checked]:bg-destructive! focus-visible:border-destructive focus-visible:ring-koyo-focus-error/30 dark:text-white'
        aria-label='Flag candidate risk'
        defaultChecked
      />
      <Checkbox
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover dark:text-white'
        aria-label='Mark candidate ready'
        defaultChecked
      />
      <Checkbox
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover dark:text-white'
        aria-label='Assign mentor follow-up'
        defaultChecked
      />
    </div>
  )
}

export default CheckboxColorsDemo
