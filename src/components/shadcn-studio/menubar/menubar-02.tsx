import { BellIcon, LayoutPanelTopIcon, ListFilterIcon, Table2Icon } from 'lucide-react'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger
} from '@newtonschool/koyo-ui/menubar'

const MenubarDemo = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            <LayoutPanelTopIcon />
            Hiring summary
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            <BellIcon />
            Interview alerts
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value='table'>
            <MenubarRadioItem value='table'>
              <Table2Icon />
              Candidate table
            </MenubarRadioItem>
            <MenubarRadioItem value='filters'>
              <ListFilterIcon />
              Filter builder
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Sync assessment scores</MenubarItem>
          <MenubarItem>Refresh cohort metrics</MenubarItem>
          <MenubarItem disabled>Bulk invite alumni</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenubarDemo
