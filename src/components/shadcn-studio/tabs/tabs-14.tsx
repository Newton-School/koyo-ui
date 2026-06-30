import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
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
    name: 'Interviews',
    value: 'interviews',
    content: (
      <>
        Monitor <span className='text-foreground font-semibold'>scheduled interviews</span>, live sessions, and review
        queues across programs.
      </>
    )
  },
  {
    name: 'Assignments',
    value: 'assignments',
    content: (
      <>
        Manage <span className='text-foreground font-semibold'>assignment windows</span>, unlock rules, and submission
        review status.
      </>
    )
  },
  {
    name: 'Mentors',
    value: 'mentors',
    content: (
      <>
        Coordinate <span className='text-foreground font-semibold'>mentor availability</span>, ownership, and learner
        coverage.
      </>
    )
  },
  {
    name: 'Reports',
    value: 'reports',
    content: (
      <>
        Compare <span className='text-foreground font-semibold'>cohort outcomes</span>, engagement, and completion
        signals.
      </>
    )
  },
  {
    name: 'Billing',
    value: 'billing',
    content: (
      <>
        Review <span className='text-foreground font-semibold'>plan limits</span>, invoices, and payment ownership for
        the workspace.
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
  },
  {
    name: 'Audit',
    value: 'audit',
    content: (
      <>
        Inspect <span className='text-foreground font-semibold'>recent changes</span>, admin actions, and sync status
        for sensitive updates.
      </>
    )
  }
]

const TabsOverflowDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='overview' className='gap-1'>
        <ScrollArea>
          <TabsList className='mb-3'>
            {tabs.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default TabsOverflowDemo
