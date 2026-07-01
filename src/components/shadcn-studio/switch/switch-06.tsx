import { Switch } from '@newtonschool/koyo-ui/switch'

const SwitchOutlineDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-transparent data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-koyo-brand [&_span]:border'
        aria-label='Outline mentor toggle'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-destructive focus-visible:ring-koyo-focus-error/30 data-[state=checked]:border-destructive data-[state=checked]:bg-transparent data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-destructive [&_span]:border'
        aria-label='Escalation toggle'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-transparent data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-koyo-brand [&_span]:border'
        aria-label='Completion toggle'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-transparent data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-koyo-brand [&_span]:border'
        aria-label='Candidate note toggle'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-transparent data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-koyo-brand [&_span]:border'
        aria-label='Reminder toggle'
        defaultChecked
      />
    </div>
  )
}

export default SwitchOutlineDemo
