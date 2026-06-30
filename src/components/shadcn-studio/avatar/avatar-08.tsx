import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarStatusRingDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='ring-offset-background ring-primary ring-2 ring-offset-2'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <span className='bg-primary absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full'>
        <CheckIcon className='text-primary-foreground size-3' />
      </span>
    </div>
  )
}

export default AvatarStatusRingDemo
