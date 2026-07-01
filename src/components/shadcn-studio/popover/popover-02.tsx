import { PencilRulerIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverCohortSettingsDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <PencilRulerIcon />
          <span className='sr-only'>Cohort settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='leading-none font-medium'>Cohort settings</h4>
            <p className='text-muted-foreground text-sm'>Tune the visible limits for this learner cohort.</p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>Seats</Label>
              <Input id='width' defaultValue='120' className='col-span-2 h-8' />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>Waitlist</Label>
              <Input id='maxWidth' defaultValue='30' className='col-span-2 h-8' />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>Mentors</Label>
              <Input id='height' defaultValue='12' className='col-span-2 h-8' />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>Review SLA</Label>
              <Input id='maxHeight' defaultValue='24h' className='col-span-2 h-8' />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverCohortSettingsDemo
