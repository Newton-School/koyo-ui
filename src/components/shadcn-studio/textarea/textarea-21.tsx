import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

const TextareaDisabledDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Disabled textarea</Label>
      <Textarea placeholder='Type your feedback here' disabled id={id} />
    </div>
  )
}

export default TextareaDisabledDemo
