import { CalendarClockIcon, MailIcon, StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

const DrawerDemo = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open candidate</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className='flex items-center gap-3'>
            <Avatar className='size-11'>
              <AvatarFallback className='bg-koyo-brand/10 text-koyo-brand'>AR</AvatarFallback>
            </Avatar>
            <div className='grid gap-0.5'>
              <DrawerTitle>Anika Rao</DrawerTitle>
              <DrawerDescription>Senior frontend candidate</DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className='grid gap-4 px-4'>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='success' shape='round'>
              Strong hire
            </Badge>
            <Badge variant='secondary' shape='round'>
              React
            </Badge>
            <Badge variant='secondary' shape='round'>
              6 yrs
            </Badge>
          </div>
          <div className='grid gap-3 rounded-lg border p-3 text-sm'>
            <div className='flex items-center gap-2'>
              <StarIcon className='text-koyo-brand size-4' />
              <span className='font-medium'>Interview score</span>
              <span className='ml-auto font-semibold'>84%</span>
            </div>
            <Separator />
            <div className='flex items-center gap-2'>
              <CalendarClockIcon className='text-muted-foreground size-4' />
              <span>Next round</span>
              <span className='text-muted-foreground ml-auto'>Today, 4:30 PM</span>
            </div>
            <div className='flex items-center gap-2'>
              <MailIcon className='text-muted-foreground size-4' />
              <span>Owner</span>
              <span className='text-muted-foreground ml-auto'>priya@koyo</span>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Schedule debrief</Button>
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerDemo
