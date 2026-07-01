import { LayoutDashboardIcon, SettingsIcon, UsersIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@newtonschool/koyo-ui/tabs'

const tabs = [
  {
    name: 'Overview',
    value: 'overview',
    icon: LayoutDashboardIcon,
    content: (
      <>
        Review <span className='text-foreground font-semibold'>active cohorts</span>, upcoming interviews, and learner
        progress before taking action.
      </>
    )
  },
  {
    name: 'Learners',
    value: 'learners',
    icon: UsersIcon,
    content: (
      <>
        Track <span className='text-foreground font-semibold'>learner activity</span>, pending submissions, and mentor
        follow-ups in one place.
      </>
    )
  },
  {
    name: 'Settings',
    value: 'settings',
    icon: SettingsIcon,
    content: (
      <>
        Adjust <span className='text-foreground font-semibold'>program rules</span>, visibility, and notification
        defaults for this Koyo workspace.
      </>
    )
  }
]

const TabsWithIconDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='overview' className='gap-4'>
        <TabsList>
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger key={value} value={value} className='flex items-center gap-1 px-2.5 sm:px-3'>
              <Icon />
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default TabsWithIconDemo
