import { Button } from '@newtonschool/koyo-ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@newtonschool/koyo-ui/tooltip'

const TooltipDemo = () => {
  return (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button size='sm'>Status help</Button>
      </TooltipTrigger>
      <TooltipContent className='max-w-56'>
        <p>Koyo status is visible to learners.</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipDemo
