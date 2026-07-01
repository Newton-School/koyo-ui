import { Button } from '@newtonschool/koyo-ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@newtonschool/koyo-ui/tooltip'

const TooltipErrorDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Error state
        </Button>
      </TooltipTrigger>
      <TooltipContent className='bg-destructive [&_svg]:bg-destructive [&_svg]:fill-destructive text-white'>
        <p>This cohort cannot be archived while interviews are active.</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipErrorDemo
