import { useId } from 'react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupSplitListGroupDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Learner', price: 'Self review' },
    { value: '2', label: 'Mentor', price: 'Guided' },
    { value: '3', label: 'Cohort admin', price: 'Full access' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 space-y-2 rounded-md *:rounded-full' defaultValue='2'>
      {items.map(item => (
        <div
          key={`${id}-${item.value}`}
          className='border-border bg-background has-data-[state=checked]:border-koyo-brand has-data-[state=checked]:bg-koyo-brand has-data-[state=checked]:text-koyo-button-primary-foreground relative flex flex-col gap-4 border p-4 outline-none has-data-[state=checked]:z-10'
        >
          <div className='group flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                aria-label={`role-radio-${item.value}`}
                className='bg-secondary text-koyo-brand data-[state=checked]:border-koyo-button-primary-foreground data-[state=checked]:bg-koyo-button-primary-foreground! data-[state=checked]:[&_svg]:fill-koyo-brand after:absolute after:inset-0'
                aria-describedby={`${`${id}-${item.value}`}-price`}
              />
              <Label className='inline-flex items-center' htmlFor={`${id}-${item.value}`}>
                {item.label}
                {item.value === '2' && (
                  <Badge
                    variant='outline'
                    className='rounded-sm border-green-500 bg-green-500/10 px-1.5 py-px text-xs text-green-500'
                  >
                    Recommended
                  </Badge>
                )}
              </Label>
            </div>
            <div
              id={`${`${id}-${item.value}`}-price`}
              className='group-has-checked:text-koyo-button-primary-foreground text-xs leading-[inherit]'
            >
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupSplitListGroupDemo
