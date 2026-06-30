'use client'

import { useState } from 'react'

import { CircleAlertIcon, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertMultipleActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='bg-primary text-primary-foreground flex justify-between border-none'>
      <CircleAlertIcon />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>A new update is available</AlertTitle>
          <AlertDescription className='text-primary-foreground/80'>
            Includes the new dashboard view. Pages and exports now load faster.
          </AlertDescription>
        </div>
        <div className='flex items-center gap-4'>
          <Button className='bg-primary-foreground/10 hover:bg-primary-foreground/20 focus-visible:bg-primary-foreground/20 text-primary-foreground h-7 cursor-pointer rounded-lg px-2'>
            Skip this update
          </Button>
          <Button variant='secondary' className='h-7 cursor-pointer rounded-lg px-2'>
            Install now
          </Button>
        </div>
      </div>
      <button className='size-5 cursor-pointer' onClick={() => setIsActive(false)}>
        <XIcon className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertMultipleActionDemo
