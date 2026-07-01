import { Button } from '@newtonschool/koyo-ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@newtonschool/koyo-ui/tooltip'

const TooltipLightDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Secondary
        </Button>
      </TooltipTrigger>
      <TooltipContent className='bg-secondary text-secondary-foreground [&_svg]:bg-secondary [&_svg]:fill-secondary'>
        <p>Uses the Koyo secondary surface token.</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipLightDemo
