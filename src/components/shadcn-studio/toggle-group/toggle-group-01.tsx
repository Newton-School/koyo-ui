import { CalendarDaysIcon, ListChecksIcon, UsersIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroup01 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-3 rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Cohort view</p>
        <p className='text-muted-foreground text-xs'>Choose the planning lens</p>
      </div>
      <ToggleGroup type='single' defaultValue='learners' variant='outline' aria-label='Cohort view'>
        <ToggleGroupItem value='learners' aria-label='Learners'>
          <UsersIcon />
          Learners
        </ToggleGroupItem>
        <ToggleGroupItem value='tasks' aria-label='Tasks'>
          <ListChecksIcon />
          Tasks
        </ToggleGroupItem>
        <ToggleGroupItem value='schedule' aria-label='Schedule'>
          <CalendarDaysIcon />
          Schedule
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default ToggleGroup01
