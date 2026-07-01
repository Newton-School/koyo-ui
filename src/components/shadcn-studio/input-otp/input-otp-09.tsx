import { useId } from 'react'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@newtonschool/koyo-ui/input-otp'
import { Label } from '@newtonschool/koyo-ui/label'

const InputOTPOutlinedGroupedDemo = () => {
  const id = useId()

  return (
    <div className='space-y-3'>
      <Label htmlFor={id}>Outlined grouped access code</Label>
      <InputOTP id={id} maxLength={6}>
        <InputOTPGroup className='gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border'>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className='gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border'>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default InputOTPOutlinedGroupedDemo
