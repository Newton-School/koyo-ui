import { BotIcon, MessageSquareIcon } from 'lucide-react'

import { Toggle } from '@newtonschool/koyo-ui/toggle'

const Toggle01 = () => {
  return (
    <div className='bg-card text-card-foreground flex w-full max-w-sm items-center justify-between rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>AI interviewer</p>
        <p className='text-muted-foreground text-xs'>Live follow-up prompts enabled</p>
      </div>
      <Toggle defaultPressed aria-label='Toggle AI interviewer' variant='outline'>
        <BotIcon />
        <MessageSquareIcon />
      </Toggle>
    </div>
  )
}

export default Toggle01
