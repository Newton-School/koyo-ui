import { useId } from 'react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const InputButtonDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with button</Label>
      <div className='flex gap-2'>
        <Input id={id} type='email' placeholder='Email address' />
        <Button type='submit'>Subscribe</Button>
      </div>
    </div>
  )
}

export default InputButtonDemo
