import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/motion-switch'

const SwitchAnimatedDemo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated learner switch' size='sm' id='learner-switch' />
        <Label htmlFor='learner-switch'>Learner alerts</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated mentor switch' size='md' id='mentor-switch' />
        <Label htmlFor='mentor-switch'>Mentor alerts</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated cohort switch' size='lg' id='cohort-switch' />
        <Label htmlFor='cohort-switch'>Cohort alerts</Label>
      </div>
    </div>
  )
}

export default SwitchAnimatedDemo
