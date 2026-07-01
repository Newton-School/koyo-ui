import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

const TextareaWithLabelDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with label</Label>
      <Textarea placeholder='Type your feedback here' id={id} />
    </div>
  )
}

export default TextareaWithLabelDemo
