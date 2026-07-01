import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

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
