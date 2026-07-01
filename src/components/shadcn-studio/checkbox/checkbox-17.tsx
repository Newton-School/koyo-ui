import { useId } from 'react'

import { Checkbox } from '@newtonschool/koyo-ui/motion-checkbox'
import { Label } from '@newtonschool/koyo-ui/label'

const CheckboxAnimatedDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Animated checkbox</Label>
    </div>
  )
}

export default CheckboxAnimatedDemo
