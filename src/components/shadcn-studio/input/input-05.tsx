import { useId } from 'react'

import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const InputReadOnlyDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Read-only input</Label>
      <Input
        id={id}
        type='email'
        placeholder='Email address'
        defaultValue='example@xyz.com'
        className='read-only:bg-muted'
        readOnly
      />
    </div>
  )
}

export default InputReadOnlyDemo
