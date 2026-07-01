import { useId } from 'react'

import { DatabaseIcon } from 'lucide-react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/switch'

const SwitchCardDemo = () => {
  const id = useId()

  return (
    <div className='border-border bg-background has-data-[state=checked]:border-koyo-brand relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none'>
      <Switch
        id={id}
        className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2.5 data-[state=checked]:[&_span]:rtl:-translate-x-2.5'
        aria-describedby={`${id}-description`}
      />
      <div className='flex grow items-center gap-3'>
        <DatabaseIcon />
        <div className='grid grow gap-2'>
          <Label htmlFor={id}>Sync interview notes</Label>
          <p id={`${id}-description`} className='text-muted-foreground text-xs'>
            Keep candidate scorecards available for cohort mentors.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwitchCardDemo
