import { Card, CardContent, CardHeader, CardTitle } from '@newtonschool/koyo-ui/card'

const CardOutlineDemo = () => {
  return (
    <Card className='border-koyo-brand max-w-md gap-0 bg-transparent shadow-none'>
      <CardHeader>
        <CardTitle>Mentor Sync</CardTitle>
      </CardHeader>
      <CardContent>
        Capture interview feedback, blocker notes, and next steps so the hiring team has one clean summary.
      </CardContent>
    </Card>
  )
}

export default CardOutlineDemo
