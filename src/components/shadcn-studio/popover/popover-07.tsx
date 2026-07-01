import { FileWarningIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverDeleteFileDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <FileWarningIcon />
          <span className='sr-only'>Archive candidate</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-koyo-color-red-0 flex aspect-square size-12 items-center justify-center rounded-full dark:bg-koyo-color-red-900/40'>
            <FileWarningIcon className='text-koyo-button-error size-6' />
          </div>
          <div className='space-y-2 text-center'>
            <div className='font-semibold text-balance'>Archive this candidate?</div>
            <p className='text-muted-foreground text-sm'>
              Archiving removes them from active interview queues while keeping their scorecards available.
            </p>
          </div>
          <div className='grid w-full grid-cols-2 gap-2'>
            <Button variant='secondary' size='sm'>
              Cancel
            </Button>
            <Button variant='error' size='sm'>
              Archive
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDeleteFileDemo
