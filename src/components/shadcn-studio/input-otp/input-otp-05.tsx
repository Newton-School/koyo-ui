import { useId } from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@newtonschool/koyo-ui/input-otp'
import { Label } from '@newtonschool/koyo-ui/label'

const InputOTPOutlinedDemo = () => {
  const id = useId()

  return (
    <div className='space-y-3'>
      <Label htmlFor={id}>Outlined access code</Label>
      <InputOTP id={id} maxLength={4}>
        <InputOTPGroup className='gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border'>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default InputOTPOutlinedDemo
