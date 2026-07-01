import { MailCheckIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'

const ButtonMessagesBadgeDemo = () => {
  return (
    <Button variant='outline'>
      <MailCheckIcon />
      Messages
      <Badge variant='destructive' className='px-1.5 py-px'>
        99+
      </Badge>
    </Button>
  )
}

export default ButtonMessagesBadgeDemo
