import { Badge } from '@/components/ui/badge'

const BadgeDemo = () => {
  return (
    <div className='flex max-w-2xl flex-wrap items-center justify-center gap-3'>
      <Badge>Primary</Badge>
      <Badge variant='koyo'>Koyo Accent</Badge>
      <Badge variant='brand'>Brand</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='yellow'>Yellow</Badge>
      <Badge variant='purple'>Purple</Badge>
      <Badge variant='error'>Error</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='black'>Black</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='ghost'>Ghost</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge shape='round'>Round</Badge>
      <Badge variant='brand' shape='round'>
        Brand Round
      </Badge>
      <Badge className='ring-koyo-button-primary-ring ring-[3px]'>Focus</Badge>
      <Badge variant='koyo' className='ring-koyo-button-primary-ring ring-[3px]'>
        Koyo Focus
      </Badge>
    </div>
  )
}

export default BadgeDemo
