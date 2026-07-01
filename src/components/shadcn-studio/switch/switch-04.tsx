import { Switch } from '@newtonschool/koyo-ui/switch'

const SwitchColorsDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch aria-label='Primary Switch' defaultChecked />
      <Switch
        className='focus-visible:border-destructive focus-visible:ring-koyo-focus-error/30 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:hover:border-koyo-palette-error-hover data-[state=checked]:hover:bg-koyo-palette-error-hover'
        aria-label='Error Switch'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-koyo-palette-success focus-visible:ring-koyo-palette-success-ring data-[state=checked]:border-koyo-palette-success data-[state=checked]:bg-koyo-palette-success data-[state=checked]:hover:border-koyo-palette-success-hover data-[state=checked]:hover:bg-koyo-palette-success-hover'
        aria-label='Success Switch'
        defaultChecked
      />
      <Switch
        className='data-[state=checked]:border-koyo-brand data-[state=checked]:bg-background data-[state=checked]:[&_span]:bg-koyo-brand [&_span]:border'
        aria-label='Outline Switch'
        defaultChecked
      />
    </div>
  )
}

export default SwitchColorsDemo
