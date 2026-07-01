import { useId } from 'react'

import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const InputRoundedDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Rounded input</Label>
      <Input id={id} type='email' placeholder='Email address' className='rounded-full' />
    </div>
  )
}

export default InputRoundedDemo
