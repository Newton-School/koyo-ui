import { Slider } from '@newtonschool/koyo-ui/slider'

const Slider01 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-4 rounded-lg border p-4 shadow-xs'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium'>Interview difficulty</p>
          <p className='text-muted-foreground text-xs'>Calibrated for React fundamentals</p>
        </div>
        <span className='text-koyo-brand text-sm font-semibold'>70</span>
      </div>
      <Slider defaultValue={[70]} max={100} step={5} aria-label='Interview difficulty' />
    </div>
  )
}

export default Slider01
