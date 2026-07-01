import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@newtonschool/koyo-ui/tooltip'

const TooltipBadgeDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Badge
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className='flex items-center gap-2'>
          <p>Team plan: $99/month per user.</p>
          <Badge variant='secondary' className='px-1.5 py-px'>
            Trending
          </Badge>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipBadgeDemo
