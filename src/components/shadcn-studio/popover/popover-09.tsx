'use client'

import { useState } from 'react'

import { FunnelPlusIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Label } from '@newtonschool/koyo-ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'
import { Slider } from '@newtonschool/koyo-ui/slider'

const filters = ['Needs review', 'Highest score', 'Newest', 'Mentor assigned']

const PopoverFilterDemo = () => {
  const [selected, setSelected] = useState(['Needs review', 'Newest'])
  const [price, setPrice] = useState([450])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <FunnelPlusIcon />
          <span className='sr-only'>Filter candidates</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='grid gap-4'>
          <div className='flex items-center justify-between gap-2'>
            <span className='font-medium'>Filter candidates</span>
            <Button
              variant='secondary'
              className='h-7 rounded-full px-2 py-1 text-xs'
              onClick={() => {
                setSelected(['Needs review', 'Newest'])
                setPrice([450])
              }}
            >
              Reset all
            </Button>
          </div>
          <div className='flex flex-col gap-2'>
            {filters.map((label, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Checkbox
                  id={`filter-${index + 1}`}
                  checked={selected.includes(label)}
                  onCheckedChange={checked =>
                    setSelected(checked ? [...selected, label] : selected.filter(item => item !== label))
                  }
                />
                <Label htmlFor={`filter-${index + 1}`}>{label}</Label>
              </div>
            ))}
          </div>
          <div className='grid gap-3'>
            <Label>Score range</Label>
            <div className='space-y-2'>
              <Slider value={price} onValueChange={setPrice} step={50} max={1000} aria-label='Score range' />
              <span className='text-muted-foreground flex w-full items-center justify-between gap-1 text-xs font-medium'>
                <span>0</span>
                <span>500</span>
                <span>1000</span>
              </span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFilterDemo
