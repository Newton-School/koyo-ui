import { Skeleton } from '@newtonschool/koyo-ui/skeleton'

const Skeleton03 = () => {
  return (
    <div className='bg-card w-full max-w-sm space-y-4 rounded-lg border p-4 shadow-xs'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-4 w-28' />
        <Skeleton className='h-6 w-16 rounded-full' />
      </div>
      <div className='space-y-3'>
        <Skeleton className='h-2 w-full rounded-full' />
        <Skeleton className='h-2 w-4/5 rounded-full' />
        <Skeleton className='h-2 w-3/5 rounded-full' />
      </div>
    </div>
  )
}

export default Skeleton03
