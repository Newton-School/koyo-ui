import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxCardDemo = () => {
  return (
    <div className='space-y-2'>
      <Label className='hover:bg-secondary/60 border-border has-[[aria-checked=true]]:border-koyo-brand has-[[aria-checked=true]]:bg-koyo-button-primary-ring/20 flex items-start gap-2 rounded-lg border p-3'>
        <Checkbox defaultChecked />
        <div className='grid gap-1.5 font-normal'>
          <p className='text-sm leading-none font-medium'>Candidate profile sync</p>
          <p className='text-muted-foreground text-sm'>Update profile fields when a review is submitted.</p>
        </div>
      </Label>
      <Label className='hover:bg-secondary/60 border-border has-[[aria-checked=true]]:border-koyo-brand has-[[aria-checked=true]]:bg-koyo-button-primary-ring/20 flex items-start gap-2 rounded-lg border p-3'>
        <Checkbox />
        <div className='grid gap-1.5 font-normal'>
          <p className='text-sm leading-none font-medium'>Weekly hiring digest</p>
          <p className='text-muted-foreground text-sm'>Send a concise summary to hiring managers.</p>
        </div>
      </Label>
    </div>
  )
}

export default CheckboxCardDemo
