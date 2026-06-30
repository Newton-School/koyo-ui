import { Badge } from '@/components/ui/badge'

const BadgeDotDemo = () => {
  return (
    <Badge variant='ghost'>
      <span className='bg-primary size-2 rounded-full' aria-hidden='true' />
      Dot Badge
    </Badge>
  )
}

export default BadgeDotDemo
