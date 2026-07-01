import { CircleHelpIcon, DollarSignIcon, ReceiptIcon, SettingsIcon, UserIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@newtonschool/koyo-ui/dropdown-menu'

const DropdownMenuItemIconDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu item with icon</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>User Profile</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReceiptIcon />
            Billing Plans
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DollarSignIcon />
            Pricing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleHelpIcon />
            FAQ
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemIconDemo
