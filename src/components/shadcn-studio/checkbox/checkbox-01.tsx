import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxDemo = () => {
  const checkedId = useId()
  const invalidId = useId()
  const disabledId = useId()

  return (
    <div className='w-full max-w-xs space-y-3'>
      <div className='flex items-center gap-2'>
        <Checkbox id={checkedId} defaultChecked />
        <Label htmlFor={checkedId}>Include interview transcript</Label>
      </div>
      <div className='flex items-start gap-2'>
        <Checkbox id={invalidId} aria-invalid className='mt-0.5 ring-[3px] ring-koyo-focus-error/30' />
        <div className='grid gap-1'>
          <Label htmlFor={invalidId}>Candidate consent</Label>
          <p className='text-destructive text-xs'>Consent is required before sharing a scorecard.</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id={disabledId} disabled />
        <Label htmlFor={disabledId} className='text-muted-foreground'>
          Locked after profile sync
        </Label>
      </div>
    </div>
  )
}

export default CheckboxDemo
