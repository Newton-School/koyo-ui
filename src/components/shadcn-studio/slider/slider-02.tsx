import { Slider } from '@newtonschool/koyo-ui/slider'

const Slider02 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-4 rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Shortlist score band</p>
        <p className='text-muted-foreground text-xs'>Show candidates between 72 and 92</p>
      </div>
      <Slider defaultValue={[72, 92]} max={100} step={1} aria-label='Shortlist score band' />
      <div className='text-muted-foreground flex justify-between text-xs'>
        <span>72 min</span>
        <span>92 max</span>
      </div>
    </div>
  )
}

export default Slider02
