import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupCardRadioDemo = () => {
  const id = useId()

  return (
    <RadioGroup className='w-full max-w-96 gap-2' defaultValue='1'>
      <div className='border-border bg-background has-data-[state=checked]:border-koyo-brand relative flex w-full items-center gap-2 rounded-md border p-4 shadow-xs outline-none'>
        <RadioGroupItem
          value='1'
          id={`${id}-1`}
          aria-label='interview-radio-screening'
          aria-describedby={`${id}-1-description`}
          className='size-5 after:absolute after:inset-0 [&_svg]:size-3'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={`${id}-1`} className='justify-between'>
            Screening <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>15 min</span>
          </Label>
          <p id={`${id}-1-description`} className='text-muted-foreground text-xs'>
            Route candidates through a short eligibility interview.
          </p>
        </div>
      </div>

      <div className='border-border bg-background has-data-[state=checked]:border-koyo-brand relative flex w-full items-center gap-2 rounded-md border p-4 shadow-xs outline-none'>
        <RadioGroupItem
          value='2'
          id={`${id}-2`}
          aria-describedby={`${id}-2-description`}
          className='size-5 after:absolute after:inset-0 [&_svg]:size-3'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={`${id}-2`} className='justify-between'>
            Deep dive <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>45 min</span>
          </Label>
          <p id={`${id}-2-description`} className='text-muted-foreground text-xs'>
            Capture a detailed mentor evaluation for shortlisted candidates.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardRadioDemo
