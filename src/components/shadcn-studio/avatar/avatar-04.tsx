import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarSizeDemo = () => {
  return (
    <Avatar className='size-6'>
      <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Anika Rao' />
      <AvatarFallback className='text-[10px]'>AR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarSizeDemo
