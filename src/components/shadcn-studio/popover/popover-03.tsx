import { DollarSignIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'

const PopoverPricingDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <DollarSignIcon />
          <span className='sr-only'>Pricing details</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-2.5'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-semibold'>Interview Pro</span>
            <span className='text-sm font-medium'>$49.99/month</span>
          </div>
          <p className='text-sm'>
            Unlock AI interview analytics, custom rubrics, priority review queues, and advanced mentor collaboration.
          </p>
          <div className='flex items-center gap-2'>
            <Badge variant='koyo' className='rounded-sm px-1.5 py-px text-xs'>
              Koyo offer
            </Badge>
            <span className='text-muted-foreground text-xs'>20% off annual interview plans</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverPricingDemo
