import { MessageCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'

const PopoverFeedbackDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <MessageCircleIcon />
          <span className='sr-only'>Candidate note</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-2'>
          <div className='font-medium'>Candidate note</div>
          <Textarea placeholder='Add interview context for the mentor.' className='max-h-56' />
          <div className='grid w-full grid-cols-2 gap-2'>
            <Button size='sm'>Save note</Button>
            <Button variant='secondary' size='sm'>
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFeedbackDemo
