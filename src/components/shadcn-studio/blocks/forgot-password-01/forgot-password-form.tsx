'use client'

import { Button } from '@newtonschool/koyo-ui/button'
import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const ForgotPasswordForm = () => {
  return (
    <form className='space-y-4' onSubmit={e => e.preventDefault()}>
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input type='email' id='userEmail' placeholder='Enter your email address' />
      </div>

      <Button className='w-full' type='submit'>
        Send Reset Link
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
