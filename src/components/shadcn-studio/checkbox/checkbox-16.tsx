import { useId } from 'react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Label } from '@newtonschool/koyo-ui/label'

const CheckboxFormDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox id={id} defaultChecked />
      <div className='grid gap-2'>
        <Label htmlFor={id} className='gap-1 leading-4'>
          Confirm candidate consent
        </Label>
        <p className='text-muted-foreground text-xs'>
          Candidate has agreed to share interview feedback with mentors.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Button variant='outline' size='sm'>
            Reset
          </Button>
          <Button size='sm'>Save consent</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckboxFormDemo
