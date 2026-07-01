import { Label } from '@newtonschool/koyo-ui/label'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'

const RadioGroupSolidDemo = () => {
  return (
    <RadioGroup defaultValue='live'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='live'
          id='cohort-live'
          className='text-koyo-button-primary-foreground data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand! data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=checked]:[&_svg]:fill-koyo-button-primary-foreground'
        />
        <Label htmlFor='cohort-live'>Live cohort</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='practice'
          id='cohort-practice'
          className='text-koyo-button-primary-foreground data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand! data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=checked]:[&_svg]:fill-koyo-button-primary-foreground'
        />
        <Label htmlFor='cohort-practice'>Practice cohort</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='archived'
          id='cohort-archived'
          className='text-koyo-button-primary-foreground data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand! data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover data-[state=checked]:[&_svg]:fill-koyo-button-primary-foreground'
        />
        <Label htmlFor='cohort-archived'>Archived cohort</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupSolidDemo
