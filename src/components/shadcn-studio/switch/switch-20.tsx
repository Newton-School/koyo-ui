import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/motion-switch'

const SwitchAnimatedGradientDemo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient small switch'
          size='sm'
          id='small-gradient-switch'
          className='border-koyo-brand bg-secondary focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='small-gradient-switch'>Learner alerts</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient medium switch'
          id='medium-gradient-switch'
          className='border-koyo-brand bg-secondary focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='medium-gradient-switch'>Mentor alerts</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient large switch'
          size='lg'
          id='large-gradient-switch'
          className='border-koyo-brand bg-secondary focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='large-gradient-switch'>Cohort alerts</Label>
      </div>
    </div>
  )
}

export default SwitchAnimatedGradientDemo
