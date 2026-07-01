import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'

const DatePickerDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='time-picker' className='px-1'>
        Time input
      </Label>
      <Input
        type='time'
        id='time-picker'
        step='1'
        defaultValue='08:30:00'
        className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
      />
    </div>
  )
}

export default DatePickerDemo
