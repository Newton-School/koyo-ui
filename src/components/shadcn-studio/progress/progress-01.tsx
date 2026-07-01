import { Progress } from '@/components/ui/progress'

const Progress01 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-3 rounded-lg border p-4 shadow-xs'>
      <div className='flex items-center justify-between gap-4'>
        <div>
          <p className='text-sm font-medium'>Frontend interview loop</p>
          <p className='text-muted-foreground text-xs'>3 of 4 interviewers submitted feedback</p>
        </div>
        <span className='text-koyo-brand text-sm font-semibold'>75%</span>
      </div>
      <Progress value={75} aria-label='Frontend interview loop progress' />
    </div>
  )
}

export default Progress01
