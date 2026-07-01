import { Separator } from '@/components/ui/separator'

const Separator03 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm rounded-lg border p-4 shadow-xs'>
      <div className='space-y-3'>
        <div>
          <p className='text-sm font-medium'>Cohort handoff</p>
          <p className='text-muted-foreground text-xs'>Week 4 mentor review</p>
        </div>
        <Separator />
        <div className='grid gap-2 text-sm'>
          <div className='flex items-center justify-between'>
            <span className='text-muted-foreground'>Ready for mock</span>
            <span className='font-medium'>28 learners</span>
          </div>
          <Separator />
          <div className='flex items-center justify-between'>
            <span className='text-muted-foreground'>Needs practice</span>
            <span className='font-medium'>9 learners</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Separator03
