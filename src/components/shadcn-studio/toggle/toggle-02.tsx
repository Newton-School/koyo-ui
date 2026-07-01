import { EyeIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

const Toggle02 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm rounded-lg border p-4 shadow-xs'>
      <div className='mb-3'>
        <p className='text-sm font-medium'>Blind review</p>
        <p className='text-muted-foreground text-xs'>Hide candidate identity while scoring</p>
      </div>
      <Toggle defaultPressed aria-label='Toggle blind review' className='w-full justify-start px-3'>
        <EyeIcon />
        Identity hidden
      </Toggle>
    </div>
  )
}

export default Toggle02
