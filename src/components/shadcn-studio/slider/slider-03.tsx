import { Slider } from '@newtonschool/koyo-ui/slider'

const Slider03 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm rounded-lg border p-4 shadow-xs'>
      <div className='mb-4'>
        <p className='text-sm font-medium'>Practice allocation</p>
        <p className='text-muted-foreground text-xs'>Daily learner time for coding drills</p>
      </div>
      <div className='flex items-center gap-4'>
        <Slider defaultValue={[45]} max={90} step={15} aria-label='Practice allocation minutes' />
        <span className='bg-koyo-brand/10 text-koyo-brand rounded-md px-2 py-1 text-sm font-medium'>45m</span>
      </div>
    </div>
  )
}

export default Slider03
