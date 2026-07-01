'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'
import { type DateRange } from 'react-day-picker'

import { Button } from '@newtonschool/koyo-ui/button'
import { Calendar } from '@newtonschool/koyo-ui/calendar'
import { Label } from '@newtonschool/koyo-ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'

const DatePickerRangeDemo = () => {
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='dates' className='px-1'>
        Range date picker
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' id='dates' className='w-full justify-between font-normal'>
            {range?.from && range?.to
              ? `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
              : 'Pick a date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='range'
            selected={range}
            onSelect={range => {
              setRange(range)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePickerRangeDemo
