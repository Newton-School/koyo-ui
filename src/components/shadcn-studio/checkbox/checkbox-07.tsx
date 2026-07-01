import { useId } from 'react'

import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Label } from '@newtonschool/koyo-ui/label'

const CheckboxDescriptionDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox id={id} defaultChecked />
      <div className='grid gap-2'>
        <Label htmlFor={id} className='leading-4'>
          Share interview scorecard
        </Label>
        <p className='text-muted-foreground text-xs'>
          Let mentors and cohort owners view this candidate&apos;s latest scorecard.
        </p>
      </div>
    </div>
  )
}

export default CheckboxDescriptionDemo
