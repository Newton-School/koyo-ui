import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

const TextareaNoResizeDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>No resize textarea</Label>
      <Textarea id={id} placeholder='Type your feedback here' className='[resize:none]' />
    </div>
  )
}

export default TextareaNoResizeDemo
