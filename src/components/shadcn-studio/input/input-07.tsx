import { useId } from 'react'

import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const InputDefaultValueDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with default value</Label>
      <Input id={id} type='email' placeholder='Email address' defaultValue='example@email.com' />
    </div>
  )
}

export default InputDefaultValueDemo
