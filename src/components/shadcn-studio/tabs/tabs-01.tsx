import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Overview',
    value: 'overview',
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
    content: (
      <>
        Adjust <span className='text-foreground font-semibold'>program rules</span>, visibility, and notification
        defaults for this Koyo workspace.
      </>
    )
  }
]

const TabsDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='overview'>
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
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

export default TabsDemo
