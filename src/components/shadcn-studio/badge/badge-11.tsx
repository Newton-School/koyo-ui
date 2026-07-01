import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'

const BadgeLinkDemo = () => {
  return (
    <Badge variant='koyo' asChild>
      <a href='#' className='focus-visible:ring-koyo-button-primary-ring focus-visible:ring-[3px] focus-visible:outline-0'>
        View candidate <ArrowRightIcon className='size-3' />
      </a>
    </Badge>
  )
}

export default BadgeLinkDemo
