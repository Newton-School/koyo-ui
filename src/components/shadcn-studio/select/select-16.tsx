import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithColorBorderAndRingDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Cohort track</Label>
      <Select defaultValue='interview-prep'>
        <SelectTrigger id={id} className='w-full border-koyo-brand ring-[3px] ring-koyo-brand-ring'>
          <SelectValue placeholder='Choose cohort track' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='foundation'>Foundation</SelectItem>
          <SelectItem value='interview-prep'>Interview Prep</SelectItem>
          <SelectItem value='full-stack'>Full Stack</SelectItem>
          <SelectItem value='data-analytics'>Data Analytics</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithColorBorderAndRingDemo
