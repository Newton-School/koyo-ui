import { useId } from 'react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupListGroupDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Learner', price: 'Self review' },
    { value: '2', label: 'Mentor', price: 'Guided' },
    { value: '3', label: 'Cohort admin', price: 'Full access' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs' defaultValue='2'>
      {items.map(item => (
        <div
          key={`${id}-${item.value}`}
          className='border-border bg-background has-data-[state=checked]:border-koyo-brand has-data-[state=checked]:bg-secondary relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10'
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className='after:absolute after:inset-0'
                aria-label={`role-radio-${item.value}`}
                aria-describedby={`${`${id}-${item.value}`}-price`}
              />
              <Label className='inline-flex items-center' htmlFor={`${id}-${item.value}`}>
                {item.label}
                {item.value === '2' && <Badge className='rounded-sm px-1.5 py-px text-xs'>Recommended</Badge>}
              </Label>
            </div>
            <div id={`${`${id}-${item.value}`}-price`} className='text-muted-foreground text-xs leading-[inherit]'>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupListGroupDemo
