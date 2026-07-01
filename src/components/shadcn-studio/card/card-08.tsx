import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardSoftDemo = () => {
  return (
    <Card className='bg-koyo-brand/10 max-w-md gap-0'>
      <CardHeader>
        <CardTitle>Cohort Health Check</CardTitle>
      </CardHeader>
      <CardContent>
        Review attendance, assignments, and mentor notes before sending the weekly learner progress update.
      </CardContent>
    </Card>
  )
}

export default CardSoftDemo
