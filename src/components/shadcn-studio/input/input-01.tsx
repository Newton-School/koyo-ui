import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputDemo = () => {
  const focusId = useId()
  const invalidId = useId()
  const disabledId = useId()

  return (
    <div className='w-full max-w-xs space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor={focusId}>Candidate email</Label>
        <Input
          id={focusId}
          type='email'
          placeholder='candidate@koyo.example'
          className='border-koyo-brand ring-[3px] ring-koyo-brand-ring'
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor={invalidId}>Duplicate candidate</Label>
        <Input
          id={invalidId}
          type='email'
          defaultValue='candidate@koyo.example'
          aria-invalid
          className='ring-[3px] ring-koyo-focus-error/30'
        />
        <p className='text-destructive text-xs' role='alert' aria-live='polite'>
          This candidate is already in review.
        </p>
      </div>
      <div className='space-y-2'>
        <Label htmlFor={disabledId}>Synced owner</Label>
        <Input id={disabledId} type='text' defaultValue='Locked after ATS sync' disabled />
      </div>
    </div>
  )
}

export default InputDemo
