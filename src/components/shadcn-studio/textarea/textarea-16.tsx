import { useId } from 'react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Label } from '@newtonschool/koyo-ui/label'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

const TextareaWithButtonDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with button</Label>
      <Textarea id={id} placeholder='Type your feedback here' />
      <Button size='sm'>Submit Feedback</Button>
    </div>
  )
}

export default TextareaWithButtonDemo
