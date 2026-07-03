'use client'

import { useState } from 'react'

import { CircleAlertIcon, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@newtonschool/koyo-ui/alert'
import { Button } from '@newtonschool/koyo-ui/button'

const AlertMultipleActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='flex justify-between'>
      <CircleAlertIcon />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>Interview automation is ready</AlertTitle>
          <AlertDescription>
            Publish the updated round plan to notify mentors and candidates.
          </AlertDescription>
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='outline' className='h-7 cursor-pointer rounded-lg px-2'>
            Review later
          </Button>
          <Button className='h-7 cursor-pointer rounded-lg px-2'>Publish now</Button>
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
