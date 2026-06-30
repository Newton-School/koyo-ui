import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarRingDemo = () => {
  return (
    <Avatar className='ring-koyo-brand-ring ring-offset-background ring-2 ring-offset-2'>
      <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Anika Rao' />
      <AvatarFallback>AR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarRingDemo
