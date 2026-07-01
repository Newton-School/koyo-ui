'use client'

import { useState } from 'react'

import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/switch'

const SwitchToggleLabelDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className='inline-flex items-center gap-2'>
      <Switch id='toggle-label' checked={checked} onCheckedChange={setChecked} aria-label='Toggle switch label' />
      <Label htmlFor='toggle-label' className='text-sm font-medium'>
        {checked ? 'Yes' : 'No'}
      </Label>
    </div>
  )
}

export default SwitchToggleLabelDemo
