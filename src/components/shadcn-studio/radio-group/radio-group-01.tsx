import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue='screening-review'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='screening-review' id='screening-review' />
        <Label htmlFor='screening-review'>Screening review</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='technical-interview' id='technical-interview' />
        <Label htmlFor='technical-interview'>Technical interview</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='offer-discussion' id='offer-discussion' disabled />
        <Label htmlFor='offer-discussion'>Offer discussion</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDemo
