'use client'

import { useState, useEffect } from 'react'

import { UploadIcon, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const AlertFileUploadDemo = () => {
  const [isActive, setIsActive] = useState(true)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isActive) return null

  return (
    <Alert className='flex justify-between'>
      <UploadIcon />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>Uploading your &apos;Img-234.png&apos;</AlertTitle>
          <AlertDescription>Please wait while we upload your image.</AlertDescription>
        </div>
        <Progress value={progress} aria-label='Upload Progress' />
        <div className='flex items-center gap-4'>
          <Button variant='ghost' className='h-7 cursor-pointer rounded-lg px-2'>
            Cancel
          </Button>
          <Button
            variant='ghost'
            disabled
            className='text-primary hover:bg-secondary hover:text-secondary-foreground h-7 cursor-pointer rounded-lg px-2'
          >
            Upload another
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

export default AlertFileUploadDemo
