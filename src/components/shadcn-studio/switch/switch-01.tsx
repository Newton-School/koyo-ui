import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/switch'

const SwitchDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-3'>
      <div className='flex items-center justify-between gap-3'>
        <Label htmlFor='auto-publish-scorecards'>Auto-publish scorecards</Label>
        <Switch id='auto-publish-scorecards' defaultChecked />
      </div>
      <div className='flex items-center justify-between gap-3'>
        <Label htmlFor='missed-scorecard-alerts'>Reviewer escalation</Label>
        <Switch id='missed-scorecard-alerts' aria-invalid className='ring-[3px] ring-koyo-focus-error/30' />
      </div>
      <div className='flex items-center justify-between gap-3'>
        <Label htmlFor='locked-scorecard-routing' className='text-muted-foreground'>
          Locked routing
        </Label>
        <Switch id='locked-scorecard-routing' disabled />
      </div>
    </div>
  )
}

export default SwitchDemo
