import { CircleFadingPlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardInviteCardDemo = () => {
  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>
        <CardTitle>Review panel</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 sm:grid-cols-2'>
        <div className='border-koyo-brand-ring bg-koyo-button-primary-ring/20 flex items-center gap-4 rounded-lg border border-dashed p-3'>
          <CircleFadingPlusIcon className='text-koyo-brand size-5' />
          <span className='text-sm font-semibold'>Invite reviewer</span>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Priya Shah' />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Priya Shah</span>
            <span className='text-muted-foreground text-sm'>Frontend lead</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png' alt='Arjun Mehta' />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Arjun Mehta</span>
            <span className='text-muted-foreground text-sm'>Hiring manager</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png' alt='Nisha Rao' />
            <AvatarFallback>NR</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Nisha Rao</span>
            <span className='text-muted-foreground text-sm'>People partner</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </CardContent>
    </Card>
  )
}

export default CardInviteCardDemo
