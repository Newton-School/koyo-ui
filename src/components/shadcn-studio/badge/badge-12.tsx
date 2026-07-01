'use client'

import { useState } from 'react'

import { XIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'

const BadgeClosableDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Badge variant='koyo' shape='round'>
      Shortlisted
      <button
        className='focus-visible:border-koyo-button-primary focus-visible:ring-koyo-button-primary-ring text-koyo-button-primary-foreground/60 hover:text-koyo-button-primary-foreground -my-px -ms-px -me-1.5 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]'
        aria-label='Close'
        onClick={() => setIsActive(false)}
      >
        <XIcon className='size-3' aria-hidden='true' />
      </button>
    </Badge>
  )
}

export default BadgeClosableDemo
