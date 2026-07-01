import { useId } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@newtonschool/koyo-ui/select'

const SelectInvalidState = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Program status</Label>
      <Select defaultValue='archived'>
        <SelectTrigger id={id} aria-invalid className='w-full ring-[3px] ring-koyo-focus-error/30'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='draft'>Draft</SelectItem>
          <SelectItem value='live'>Live</SelectItem>
          <SelectItem value='paused'>Paused</SelectItem>
          <SelectItem value='archived'>Archived</SelectItem>
        </SelectContent>
      </Select>
      <p className='text-destructive mt-2 text-xs' role='alert' aria-live='polite'>
        Archived programs cannot be assigned to a cohort.
      </p>
    </div>
  )
}

export default SelectInvalidState
