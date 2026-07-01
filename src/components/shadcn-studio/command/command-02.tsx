import { CircleCheckIcon, ClockIcon, GraduationCapIcon, MessageSquareTextIcon } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from '@/components/ui/command'

const CommandDemo = () => {
  return (
    <Command className='border-border bg-background w-full max-w-sm rounded-lg border shadow-xs'>
      <CommandInput value='cohort' readOnly />
      <CommandList>
        <CommandEmpty>No cohort actions found.</CommandEmpty>
        <CommandGroup heading='Cohort actions'>
          <CommandItem>
            <GraduationCapIcon className='text-koyo-brand' />
            Launch July frontend cohort
            <CommandShortcut>24</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ClockIcon />
            Move overdue interviews
            <CommandShortcut>7</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MessageSquareTextIcon />
            Message shortlisted learners
            <CommandShortcut>18</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CircleCheckIcon />
            Mark cohort review complete
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default CommandDemo
