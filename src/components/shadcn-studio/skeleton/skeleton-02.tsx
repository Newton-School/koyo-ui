import { Skeleton } from '@newtonschool/koyo-ui/skeleton'

const Skeleton02 = () => {
  return (
    <div className='bg-card w-full max-w-sm space-y-3 rounded-lg border p-4 shadow-xs'>
      <Skeleton className='h-4 w-40' />
      <div className='space-y-2'>
        <Skeleton className='h-3 w-full' />
        <Skeleton className='h-3 w-11/12' />
        <Skeleton className='h-3 w-3/4' />
      </div>
      <div className='flex gap-2 pt-1'>
        <Skeleton className='h-8 flex-1 rounded-lg' />
        <Skeleton className='h-8 flex-1 rounded-lg' />
      </div>
    </div>
  )
}

export default Skeleton02
