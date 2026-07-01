import { BriefcaseBusinessIcon, CalendarCheckIcon, HomeIcon, InboxIcon, SettingsIcon, UsersIcon } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from '@newtonschool/koyo-ui/sidebar'

const items = [
  { title: 'Overview', icon: HomeIcon, active: true },
  { title: 'Candidates', icon: UsersIcon, badge: '18' },
  { title: 'Interviews', icon: CalendarCheckIcon, badge: '7' },
  { title: 'Roles', icon: BriefcaseBusinessIcon },
  { title: 'Messages', icon: InboxIcon, badge: '3' }
]

const SidebarDemo = () => {
  return (
    <div className='h-96 w-full max-w-md overflow-hidden rounded-lg border'>
      <SidebarProvider defaultOpen className='min-h-full'>
        <Sidebar collapsible='none' className='border-r'>
          <SidebarHeader>
            <div className='flex items-center gap-2 px-2 py-1.5'>
              <div className='bg-koyo-brand text-primary-foreground flex size-8 items-center justify-center rounded-md text-sm font-semibold'>
                K
              </div>
              <div className='grid gap-0.5'>
                <div className='text-sm font-semibold'>Koyo Hire</div>
                <div className='text-muted-foreground text-xs'>Workspace</div>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Recruiting</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.active}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SettingsIcon />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='bg-background flex min-w-0 flex-1 flex-col p-4'>
          <div className='text-sm font-semibold'>Frontend Alpha</div>
          <div className='text-muted-foreground text-xs'>42 candidates, 12 interviews today</div>
          <div className='mt-4 grid gap-2'>
            <div className='bg-secondary/50 rounded-md border p-3 text-sm'>Next interview: Aarav Mehta</div>
            <div className='bg-secondary/50 rounded-md border p-3 text-sm'>Pending reviews: 5</div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default SidebarDemo
