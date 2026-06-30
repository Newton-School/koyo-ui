import { UserRoundIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const AvatarIconDemo = () => {
  return (
    <Avatar>
      <AvatarFallback>
        <UserRoundIcon className='size-4' />
      </AvatarFallback>
    </Avatar>
  )
}

export default AvatarIconDemo
