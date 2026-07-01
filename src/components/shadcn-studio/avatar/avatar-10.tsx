import { PlusCircleIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@newtonschool/koyo-ui/avatar'

const AvatarPlusDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-10'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Priya Mehta' />
        <AvatarFallback className='text-xs'>PM</AvatarFallback>
      </Avatar>
      <button className='focus-visible:border-koyo-button-primary focus-visible:ring-koyo-button-primary-ring absolute -right-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:outline-none'>
        <PlusCircleIcon className='fill-koyo-button-primary text-koyo-button-primary-foreground size-5' />
        <span className='sr-only'>Add mentor</span>
      </button>
    </div>
  )
}

export default AvatarPlusDemo
