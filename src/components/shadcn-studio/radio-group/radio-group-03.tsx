import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupColorsDemo = () => {
  return (
    <RadioGroup defaultValue='koyo' className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='koyo' id='color-koyo' />
        <Label htmlFor='color-koyo'>Koyo</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='error'
          id='color-error'
          aria-invalid
          className='border-destructive text-destructive ring-[3px] ring-koyo-focus-error/30 focus-visible:border-destructive focus-visible:ring-koyo-focus-error/30 [&_svg]:fill-destructive'
        />
        <Label htmlFor='color-error'>Error</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='disabled' id='color-disabled' disabled />
        <Label htmlFor='color-disabled' className='text-muted-foreground'>
          Disabled
        </Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupColorsDemo
