import { StarIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'

const BadgeWithIconDemo = () => {
  return (
    <Badge>
      <StarIcon className='size-3' />
      With Icon
    </Badge>
  )
}

export default BadgeWithIconDemo
