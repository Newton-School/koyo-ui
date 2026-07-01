import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxDashedDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} className='border-koyo-brand border-dashed focus-visible:border-koyo-brand' />
      <Label htmlFor={id}>Require mentor review</Label>
    </div>
  )
}

export default CheckboxDashedDemo
