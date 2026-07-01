import { Card, CardContent } from '@newtonschool/koyo-ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@newtonschool/koyo-ui/tabs'

const tabs = [
  {
    name: 'Candidate',
    value: 'candidate',
    content:
      'Review the candidate summary, active stage, and the most recent interview signal before moving the profile forward.'
  },
  {
    name: 'Cohort',
    value: 'cohort',
    content:
      'Scan learner progress, mentor coverage, and pending assignments for the selected cohort.'
  },
  {
    name: 'Mentors',
    value: 'mentors',
    content:
      'Coordinate mentor notes, availability, and review ownership from the same workspace.'
  }
]

const CardWithTabsDemo = () => {
  return (
    <Card className='w-max'>
      <CardContent>
        <Tabs defaultValue={tabs[0].value} className='w-full max-w-sm'>
          <TabsList className='bg-background w-full justify-start rounded-none border-b p-0'>
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='bg-background data-[state=active]:border-b-koyo-brand data-[state=active]:text-koyo-brand h-full rounded-none border-b-2 border-transparent data-[state=active]:shadow-none'
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <p className='text-muted-foreground p-4 text-sm'>{tab.content}</p>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default CardWithTabsDemo
