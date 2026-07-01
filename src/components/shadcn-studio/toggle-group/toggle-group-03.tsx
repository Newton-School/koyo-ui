import { GraduationCapIcon, HandshakeIcon, TargetIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroup03 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-3 rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Learner milestone</p>
        <p className='text-muted-foreground text-xs'>Filter candidates by current stage</p>
      </div>
      <ToggleGroup type='single' defaultValue='interview' variant='outline' spacing={1} aria-label='Learner milestone'>
        <ToggleGroupItem value='learn' aria-label='Learning'>
          <GraduationCapIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='interview' aria-label='Interview ready'>
          <TargetIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='placed' aria-label='Placed'>
          <HandshakeIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default ToggleGroup03
