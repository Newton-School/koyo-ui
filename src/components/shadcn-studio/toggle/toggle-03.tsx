import { BellIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

const Toggle03 = () => {
  return (
    <div className='bg-card text-card-foreground flex w-full max-w-sm items-center gap-3 rounded-lg border p-4 shadow-xs'>
      <Toggle defaultPressed aria-label='Toggle mentor reminders' size='lg' variant='outline'>
        <BellIcon />
      </Toggle>
      <div>
        <p className='text-sm font-medium'>Mentor reminders</p>
        <p className='text-muted-foreground text-xs'>Nudge reviewers before SLA breach</p>
      </div>
    </div>
  )
}

export default Toggle03
