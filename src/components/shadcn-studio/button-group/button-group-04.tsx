import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@newtonschool/koyo-ui/tooltip'

const ButtonGroupRoundedDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-full shadow-xs rtl:space-x-reverse'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' className='rounded-none rounded-l-full shadow-none focus-visible:z-10'>
            <SkipBackIcon />
            <span className='sr-only'>Skip Back</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Skip Back</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' className='rounded-none shadow-none focus-visible:z-10'>
            <PlayIcon />
            <span className='sr-only'>Play</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Play</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' className='rounded-none shadow-none focus-visible:z-10'>
            <PauseIcon />
            <span className='sr-only'>Pause</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Pause</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' className='rounded-none rounded-r-full shadow-none focus-visible:z-10'>
            <SkipForwardIcon />
            <span className='sr-only'>Skip Forward</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Skip Forward</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default ButtonGroupRoundedDemo
