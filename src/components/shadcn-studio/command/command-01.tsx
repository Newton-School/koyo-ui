import {
  BriefcaseBusinessIcon,
  CalendarPlusIcon,
  ClipboardCheckIcon,
  SearchIcon,
  UserRoundSearchIcon
} from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@newtonschool/koyo-ui/command'

const CommandDemo = () => {
  return (
    <Command className='border-border bg-background w-full max-w-md rounded-lg border shadow-xs'>
      <CommandInput placeholder='Search candidates, cohorts, or actions...' />
      <CommandList>
        <CommandEmpty>No Koyo results found.</CommandEmpty>
        <CommandGroup heading='Candidates'>
          <CommandItem>
            <UserRoundSearchIcon />
            Open Anika Rao profile
            <CommandShortcut>Cmd A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ClipboardCheckIcon />
            Review pending scorecards
            <CommandShortcut>Cmd R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Workspace'>
          <CommandItem>
            <CalendarPlusIcon />
            Schedule cohort interviews
          </CommandItem>
          <CommandItem>
            <BriefcaseBusinessIcon />
            Open frontend hiring pipeline
          </CommandItem>
          <CommandItem disabled>
            <SearchIcon />
            Import legacy ATS search
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default CommandDemo
