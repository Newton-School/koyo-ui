import { Progress } from '@/components/ui/progress'

const milestones = [
  { label: 'Profile complete', value: 92 },
  { label: 'Practice sets', value: 64 },
  { label: 'Mock interviews', value: 38 }
]

const Progress02 = () => {
  return (
    <div className='bg-card text-card-foreground w-full max-w-sm space-y-4 rounded-lg border p-4 shadow-xs'>
      <div>
        <p className='text-sm font-medium'>Learner readiness</p>
        <p className='text-muted-foreground text-xs'>Cohort B2 assessment prep</p>
      </div>
      <div className='space-y-3'>
        {milestones.map(milestone => (
          <div key={milestone.label} className='space-y-1.5'>
            <div className='flex items-center justify-between text-xs'>
              <span className='text-muted-foreground'>{milestone.label}</span>
              <span className='font-medium'>{milestone.value}%</span>
            </div>
            <Progress value={milestone.value} aria-label={`${milestone.label} progress`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Progress02
