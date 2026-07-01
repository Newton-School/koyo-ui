import { ArchiveIcon, CalendarPlusIcon, DownloadIcon, FileTextIcon, SearchIcon, UserPlusIcon } from 'lucide-react'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'

const MenubarDemo = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Workspace</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SearchIcon />
            Search candidates
            <MenubarShortcut>Cmd K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <UserPlusIcon />
            Add candidate
            <MenubarShortcut>Cmd N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <DownloadIcon />
            Export shortlist
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Pipeline</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <CalendarPlusIcon />
            Schedule interviews
          </MenubarItem>
          <MenubarItem>
            <FileTextIcon />
            Open rubric builder
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant='destructive'>
            <ArchiveIcon />
            Archive stale applications
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenubarDemo
