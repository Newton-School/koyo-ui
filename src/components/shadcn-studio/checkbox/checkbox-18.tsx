import { useId } from 'react'

import { Checkbox } from '@newtonschool/koyo-ui/motion-checkbox'
import { Label } from '@newtonschool/koyo-ui/label'

const CheckboxAnimatedTodoListDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        id={id}
        defaultChecked
        className='rounded-full focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand! data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover dark:text-white'
      />
      <Label
        htmlFor={id}
        className='after:bg-koyo-brand peer-data-[state=checked]:text-koyo-brand relative after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100'
      >
        Complete learner follow-up
      </Label>
    </div>
  )
}

export default CheckboxAnimatedTodoListDemo
