import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupCardRadioWithBorderDemo = () => {
  const id = useId()

  return (
    <RadioGroup className='w-full max-w-96 gap-2' defaultValue='1'>
      <div className='border-border bg-background has-data-[state=checked]:border-koyo-brand has-focus-visible:border-koyo-brand has-focus-visible:ring-koyo-brand-ring relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none has-focus-visible:ring-[3px]'>
        <RadioGroupItem
          value='1'
          id={`${id}-1`}
          className='sr-only'
          aria-label='cohort-access-observer'
          aria-describedby={`${id}-1-description`}
        />

        <Label htmlFor={`${id}-1`} className='text-foreground flex flex-col items-start after:absolute after:inset-0'>
          <div className='flex w-full items-center justify-between'>
            <span>Observer</span>
            <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>Read only</span>
          </div>
          <p id={`${id}-1-description`} className='text-muted-foreground text-xs'>
            Let mentors view candidate progress without changing outcomes.
          </p>
        </Label>
      </div>

      <div className='border-border bg-background has-data-[state=checked]:border-koyo-brand has-focus-visible:border-koyo-brand has-focus-visible:ring-koyo-brand-ring relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none has-focus-visible:ring-[3px]'>
        <RadioGroupItem
          value='2'
          id={`${id}-2`}
          className='sr-only'
          aria-label='cohort-access-editor'
          aria-describedby={`${id}-2-description`}
        />

        <Label htmlFor={`${id}-2`} className='text-foreground flex flex-col items-start after:absolute after:inset-0'>
          <div className='flex w-full items-center justify-between'>
            <span>Editor</span>
            <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>Can update</span>
          </div>
          <p id={`${id}-2-description`} className='text-muted-foreground text-xs'>
            Allow cohort owners to adjust learner stages and feedback.
          </p>
        </Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardRadioWithBorderDemo
