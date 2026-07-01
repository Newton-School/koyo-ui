import { Switch } from '@/components/ui/switch'

const SwitchGradientDemo = () => {
  return (
    <Switch
      aria-label='Cohort progress switch'
      className='h-6 w-10 border-koyo-brand bg-secondary focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring data-[state=checked]:border-koyo-brand data-[state=checked]:bg-koyo-brand data-[state=checked]:hover:border-koyo-brand-hover data-[state=checked]:hover:bg-koyo-brand-hover [&_span]:size-5 [&_span]:!translate-x-0.25 data-[state=checked]:[&_span]:!translate-x-4.75 data-[state=checked]:[&_span]:rtl:!-translate-x-4.75'
    />
  )
}

export default SwitchGradientDemo
