import { useId } from 'react'

import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const InputEndAddOnDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end add-on</Label>
      <div className='flex rounded-lg shadow-xs'>
        <Input id={id} type='text' placeholder='shadcnstudio' className='-me-px rounded-r-none shadow-none' />
        <span className='border-border bg-background text-muted-foreground -z-1 inline-flex items-center rounded-r-md border px-3 text-sm'>
          .com
        </span>
      </div>
    </div>
  )
}

export default InputEndAddOnDemo
