import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const cohorts = [
  {
    name: 'Frontend Alpha',
    stage: 'Live interviews',
    candidates: 42,
    conversion: '68%',
    accent: 'bg-koyo-brand'
  },
  {
    name: 'Data Cohort',
    stage: 'Screening',
    candidates: 31,
    conversion: '54%',
    accent: 'bg-emerald-500'
  },
  {
    name: 'Backend Sprint',
    stage: 'Final round',
    candidates: 18,
    conversion: '72%',
    accent: 'bg-amber-500'
  }
]

const CarouselDemo = () => {
  return (
    <Carousel opts={{ align: 'start', loop: true }} className='w-full max-w-sm px-10'>
      <CarouselContent>
        {cohorts.map(cohort => (
          <CarouselItem key={cohort.name}>
            <Card className='overflow-hidden py-0 shadow-none'>
              <CardContent className='p-0'>
                <div className={`${cohort.accent} h-1.5`} />
                <div className='grid gap-4 p-5'>
                  <div className='flex items-start justify-between gap-3'>
                    <div className='grid gap-1'>
                      <div className='text-lg font-semibold'>{cohort.name}</div>
                      <div className='text-muted-foreground text-sm'>{cohort.stage}</div>
                    </div>
                    <Badge variant='secondary' shape='round'>
                      {cohort.conversion}
                    </Badge>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-secondary/50 rounded-lg border p-3'>
                      <div className='text-muted-foreground text-xs'>Candidates</div>
                      <div className='text-xl font-semibold'>{cohort.candidates}</div>
                    </div>
                    <div className='bg-secondary/50 rounded-lg border p-3'>
                      <div className='text-muted-foreground text-xs'>Next sync</div>
                      <div className='text-sm font-medium'>Today</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0' />
      <CarouselNext className='right-0' />
    </Carousel>
  )
}

export default CarouselDemo
