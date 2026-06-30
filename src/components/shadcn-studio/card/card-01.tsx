import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CardDemo = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Candidate review</CardTitle>
        <CardDescription>Shortlist signal for the senior frontend role.</CardDescription>
        <CardAction>
          <Badge variant='success' shape='round'>
            Ready
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-2 gap-3'>
              <div className='border-border bg-secondary/50 rounded-lg border p-3'>
                <div className='text-muted-foreground text-xs'>Score</div>
                <div className='text-lg font-semibold'>84%</div>
              </div>
              <div className='border-border bg-secondary/50 rounded-lg border p-3'>
                <div className='text-muted-foreground text-xs'>Stage</div>
                <div className='text-sm font-medium'>Technical screen</div>
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='candidate'>Candidate</Label>
              <Input id='candidate' defaultValue='Anika Rao' />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='reviewer'>Reviewer</Label>
                <a href='#' className='text-koyo-brand ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                  View scorecard
                </a>
              </div>
              <Input id='reviewer' defaultValue='Priya Shah' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <Button type='submit' className='w-full'>
          Send review invite
        </Button>
        <Button variant='outline' className='w-full'>
          Open candidate profile
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardDemo
