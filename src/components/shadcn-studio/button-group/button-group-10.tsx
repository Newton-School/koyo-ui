import { FlipHorizontalIcon, FlipVerticalIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonGroupDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button variant='outline' size='icon' className='rounded-none rounded-l-md shadow-none focus-visible:z-10'>
        <FlipHorizontalIcon />
        <span className='sr-only'>Flip Horizontal</span>
      </Button>
      <Button variant='outline' size='icon' className='rounded-none rounded-r-md shadow-none focus-visible:z-10'>
        <FlipVerticalIcon />
        <span className='sr-only'>Flip Vertical</span>
      </Button>
    </div>
  )
}

export default ButtonGroupDemo
