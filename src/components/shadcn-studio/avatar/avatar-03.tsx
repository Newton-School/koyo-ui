import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarRoundedDemo = () => {
  return (
    <Avatar className='rounded-lg'>
      <AvatarImage
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
        alt='Anika Rao'
        className='rounded-lg'
      />
      <AvatarFallback>AR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarRoundedDemo
