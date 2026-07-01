import { Badge } from '@/components/ui/badge'

const BadgeDotDemo = () => {
  return (
    <Badge variant='ghost'>
      <span className='bg-koyo-brand size-2 rounded-full' aria-hidden='true' />
      Interview Live
    </Badge>
  )
}

export default BadgeDotDemo
