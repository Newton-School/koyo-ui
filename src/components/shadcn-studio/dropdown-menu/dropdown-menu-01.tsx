import { Button } from '@newtonschool/koyo-ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@newtonschool/koyo-ui/dropdown-menu'

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button>Cohort actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Koyo workspace</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='text-koyo-brand focus:text-koyo-brand'>View cohort</DropdownMenuItem>
          <DropdownMenuItem>
            Invite learner
            <DropdownMenuShortcut>Cmd+I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuCheckboxItem checked>Auto-invite mentors</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Assign mentor</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email invite</DropdownMenuItem>
                <DropdownMenuItem>Copy invite link</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More actions</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>Export roster</DropdownMenuItem>
          <DropdownMenuItem>Contact support</DropdownMenuItem>
          <DropdownMenuItem variant='destructive'>Archive cohort</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuDemo
