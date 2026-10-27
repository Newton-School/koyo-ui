'use client'

// Third-party Imports
import { RotateCcwIcon, SlidersHorizontalIcon } from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'
import { Label } from '@newtonschool/koyo-ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@newtonschool/koyo-ui/select'
import { Switch } from '@newtonschool/koyo-ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@newtonschool/koyo-ui/toggle-group'

import type { InterviewKind, MockOptions, PrototypeScenario } from './reschedule-data'
import { prototypeScenarios } from './reschedule-data'

type Props = {
  options: MockOptions
  onChange: (options: MockOptions) => void
  onRestart: () => void
}

/** Preview-only panel for walking through every PRD state. Not part of the candidate experience. */
const PrototypeControls = ({ options, onChange, onRestart }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='black'
          shape='round'
          className='fixed right-4 bottom-4 z-50 h-10 px-4 shadow-lg sm:right-6 sm:bottom-6'
          aria-label='Open prototype controls'
        >
          <SlidersHorizontalIcon aria-hidden='true' />
          Prototype
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' side='top' sideOffset={10} className='w-80 space-y-5 p-5'>
        <div className='space-y-1'>
          <p className='text-sm font-semibold'>Prototype controls</p>
          <p className='text-muted-foreground text-xs'>Preview every candidate state from the PRD.</p>
        </div>

        <div className='space-y-2'>
          <Label className='text-xs'>Interview type</Label>
          <ToggleGroup
            type='single'
            variant='outline'
            value={options.kind}
            onValueChange={value => value && onChange({ ...options, kind: value as InterviewKind })}
            className='w-full'
          >
            <ToggleGroupItem value='operational' className='flex-1 text-xs'>
              Operational · UC
            </ToggleGroupItem>
            <ToggleGroupItem value='coding' className='flex-1 text-xs'>
              Coding
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='prototype-scenario' className='text-xs'>
            Candidate state
          </Label>
          <Select
            value={options.scenario}
            onValueChange={value => onChange({ ...options, scenario: value as PrototypeScenario })}
          >
            <SelectTrigger id='prototype-scenario' className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {prototypeScenarios.map(scenario => (
                <SelectItem key={scenario.value} value={scenario.value}>
                  {scenario.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-3'>
          <div className='flex items-center justify-between gap-3'>
            <Label htmlFor='prototype-fail' className='text-xs font-normal'>
              Fail first submit (temporary error)
            </Label>
            <Switch
              id='prototype-fail'
              checked={options.failFirstSubmit}
              onCheckedChange={checked => onChange({ ...options, failFirstSubmit: checked })}
            />
          </div>
          <div className='flex items-center justify-between gap-3'>
            <Label htmlFor='prototype-slow' className='text-xs font-normal'>
              Slow network (3 s)
            </Label>
            <Switch
              id='prototype-slow'
              checked={options.latencyMs === 3000}
              onCheckedChange={checked => onChange({ ...options, latencyMs: checked ? 3000 : 900 })}
            />
          </div>
        </div>

        <Button variant='outline' size='sm' className='w-full' onClick={onRestart}>
          <RotateCcwIcon aria-hidden='true' />
          Restart flow
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default PrototypeControls
