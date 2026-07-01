import { Separator } from '@newtonschool/koyo-ui/separator'

const Separator01 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Candidate scorecard</p>
        <p className='text-muted-foreground text-xs'>Anika Rao · Frontend cohort</p>
      </div>
      <Separator className='my-4' />
      <div className='grid grid-cols-3 gap-3 text-center'>
        <div>
          <p className='text-lg font-semibold'>86</p>
          <p className='text-muted-foreground text-xs'>Code</p>
        </div>
        <div>
          <p className='text-lg font-semibold'>79</p>
          <p className='text-muted-foreground text-xs'>Debug</p>
        </div>
        <div>
          <p className='text-lg font-semibold'>92</p>
          <p className='text-muted-foreground text-xs'>Comms</p>
        </div>
      </div>
    </div>
  )
}

export default Separator01
