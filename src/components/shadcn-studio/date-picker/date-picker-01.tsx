'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Calendar } from '@newtonschool/koyo-ui/calendar'
import { Label } from '@newtonschool/koyo-ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'

const DatePickerDemo = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='date' className='px-1'>
        Date picker
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' id='date' className='w-full justify-between font-normal'>
            {date ? date.toLocaleDateString() : 'Pick a date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePickerDemo
