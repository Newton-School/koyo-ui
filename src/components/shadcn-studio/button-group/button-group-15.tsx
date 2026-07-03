import * as motion from 'motion/react-client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonGroupScaleDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button variant='outline' className='rounded-none rounded-l-md shadow-none transition-none focus-visible:z-10' asChild>
        <motion.button whileTap={{ scale: 0.9 }}>
          <ChevronLeftIcon />
          Previous
        </motion.button>
      </Button>
      <Button variant='outline' className='rounded-none rounded-r-md shadow-none transition-none focus-visible:z-10' asChild>
        <motion.button whileTap={{ scale: 0.9 }}>
          Next
          <ChevronRightIcon />
        </motion.button>
      </Button>
    </div>
  )
}

export default ButtonGroupScaleDemo
