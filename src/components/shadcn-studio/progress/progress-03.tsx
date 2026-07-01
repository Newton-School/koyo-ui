import { Progress } from '@newtonschool/koyo-ui/progress'

const Progress03 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm rounded-lg border p-4 shadow-xs'>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium'>Mentor review queue</p>
          <p className='text-muted-foreground text-xs'>Scorecards reviewed before noon</p>
        </div>
        <div className='bg-koyo-brand/10 text-koyo-brand rounded-full px-2 py-1 text-xs font-medium'>18 / 24</div>
      </div>
      <Progress value={72} className='h-3' aria-label='Mentor review queue progress' />
    </div>
  )
}

export default Progress03
