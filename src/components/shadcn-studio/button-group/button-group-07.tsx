'use client'

import { useState } from 'react'

import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonGroupNumberDemo = () => {
  const [value, setValue] = useState(216)

  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button
        variant='outline'
        size='icon'
        className='rounded-none rounded-l-full shadow-none focus-visible:z-10'
        onClick={() => {
          setValue(value - 1)
        }}
      >
        <MinusIcon />
        <span className='sr-only'>Minus</span>
      </Button>
      <span className='bg-background inline-flex items-center border px-3 py-2 text-sm font-medium'>
        {`${value}px`}
      </span>
      <Button
        variant='outline'
        size='icon'
        className='rounded-none rounded-r-full shadow-none focus-visible:z-10'
        onClick={() => {
          setValue(value + 1)
        }}
      >
        <PlusIcon />
        <span className='sr-only'>Plus</span>
      </Button>
    </div>
  )
}

export default ButtonGroupNumberDemo
