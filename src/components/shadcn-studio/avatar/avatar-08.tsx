import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@newtonschool/koyo-ui/avatar'

const AvatarStatusRingDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='ring-offset-background ring-koyo-brand ring-2 ring-offset-2'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Priya Mehta' />
        <AvatarFallback className='text-xs'>PM</AvatarFallback>
      </Avatar>
      <span className='bg-koyo-button-primary absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full'>
        <CheckIcon className='text-koyo-button-primary-foreground size-3' />
      </span>
    </div>
  )
}

export default AvatarStatusRingDemo
