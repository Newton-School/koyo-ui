import { Badge } from '@/components/ui/badge'

const BadgeBlockedDemo = () => {
  return (
    <Badge className='bg-koyo-button-error/10 [a&]:hover:bg-koyo-button-error/5 focus-visible:ring-koyo-focus-error/30 text-koyo-button-error border-none focus-visible:outline-none'>
      <span className='bg-koyo-button-error size-1.5 rounded-full' aria-hidden='true' />
      Blocked
    </Badge>
  )
}

export default BadgeBlockedDemo
