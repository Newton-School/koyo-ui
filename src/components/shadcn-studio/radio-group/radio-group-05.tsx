import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupDashedDemo = () => {
  return (
    <RadioGroup defaultValue='standard'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='screening'
          id='screening'
          className='border-koyo-brand border-dashed focus-visible:border-koyo-brand'
        />
        <Label htmlFor='screening'>Screening round</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='technical'
          id='technical'
          className='border-koyo-brand border-dashed focus-visible:border-koyo-brand'
        />
        <Label htmlFor='technical'>Technical interview</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='mentor'
          id='mentor'
          className='border-koyo-brand border-dashed focus-visible:border-koyo-brand'
        />
        <Label htmlFor='mentor'>Mentor review</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDashedDemo
