'use client'

import { useState } from 'react'

import { CircleAlertIcon, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@newtonschool/koyo-ui/alert'
import { Button } from '@newtonschool/koyo-ui/button'

const AlertMultipleActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='bg-koyo-button-primary text-koyo-button-primary-foreground flex justify-between border-none'>
      <CircleAlertIcon />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>Interview automation is ready</AlertTitle>
          <AlertDescription className='text-koyo-button-primary-foreground/80'>
            Publish the updated round plan to notify mentors and candidates.
          </AlertDescription>
        </div>
        <div className='flex items-center gap-4'>
          <Button className='bg-koyo-button-primary-foreground/10 hover:bg-koyo-button-primary-foreground/20 focus-visible:bg-koyo-button-primary-foreground/20 text-koyo-button-primary-foreground h-7 cursor-pointer rounded-lg px-2'>
            Review later
          </Button>
          <Button variant='secondary' className='h-7 cursor-pointer rounded-lg px-2'>
            Publish now
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
