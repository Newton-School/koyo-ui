import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@newtonschool/koyo-ui/select'

const SelectDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Candidate stage</Label>
      <Select defaultValue='technical' defaultOpen>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Choose candidate stage' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='new'>New application</SelectItem>
          <SelectItem value='screening'>Screening review</SelectItem>
          <SelectItem value='technical'>Technical interview</SelectItem>
          <SelectItem value='offer'>Offer discussion</SelectItem>
          <SelectItem value='archived' disabled>
            Archived
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDemo
