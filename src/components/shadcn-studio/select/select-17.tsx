import { useId } from 'react'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const SelectBackgroundColorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Interview language</Label>
      <Select defaultValue='hindi'>
        <SelectTrigger
          id={id}
          className='w-full border-koyo-brand bg-koyo-brand text-koyo-button-primary-foreground shadow-none hover:bg-koyo-brand-hover focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring [&_svg]:!text-koyo-button-primary-foreground'
        >
          <SelectValue placeholder='Choose interview language' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className='[&_div:focus]:bg-koyo-button-primary-ring/20 [&_div:focus]:text-foreground'>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value='hindi'>Hindi</SelectItem>
            <SelectItem value='english'>English</SelectItem>
            <SelectItem value='hinglish'>Hinglish</SelectItem>
            <SelectItem value='tamil'>Tamil</SelectItem>
            <SelectItem value='telugu'>Telugu</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectBackgroundColorDemo
