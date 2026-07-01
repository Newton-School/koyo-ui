import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupSizesDemo = () => {
  return (
    <RadioGroup defaultValue='quick' className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='quick' id='interview-quick' />
        <Label htmlFor='interview-quick'>Quick</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='standard' id='interview-standard' className='size-5 [&_svg]:size-3' />
        <Label htmlFor='interview-standard'>Standard</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='deep-dive' id='interview-deep-dive' className='size-6 [&_svg]:size-3.5' />
        <Label htmlFor='interview-deep-dive'>Deep dive</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupSizesDemo
