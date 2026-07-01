import { Code2Icon, MessageCircleIcon, SparklesIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@newtonschool/koyo-ui/toggle-group'

const ToggleGroup02 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-3 rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Scorecard signals</p>
        <p className='text-muted-foreground text-xs'>Highlight focus areas for mentors</p>
      </div>
      <ToggleGroup type='multiple' defaultValue={['code', 'communication']} spacing={2} aria-label='Scorecard signals'>
        <ToggleGroupItem value='code' aria-label='Code quality'>
          <Code2Icon />
          Code
        </ToggleGroupItem>
        <ToggleGroupItem value='communication' aria-label='Communication'>
          <MessageCircleIcon />
          Comms
        </ToggleGroupItem>
        <ToggleGroupItem value='potential' aria-label='Potential'>
          <SparklesIcon />
          Potential
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default ToggleGroup02
