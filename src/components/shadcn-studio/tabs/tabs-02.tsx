import { Tabs, TabsContent, TabsList, TabsTrigger } from '@newtonschool/koyo-ui/tabs'

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

const TabsOutlinedDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='overview' className='gap-4'>
        <TabsList className='bg-background gap-1 border p-1'>
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='data-[state=active]:border-koyo-button-primary data-[state=active]:bg-koyo-button-primary data-[state=active]:text-koyo-button-primary-foreground data-[state=active]:hover:bg-koyo-button-primary-hover'
            >
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

export default TabsOutlinedDemo
