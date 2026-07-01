import { Skeleton } from '@newtonschool/koyo-ui/skeleton'

const Skeleton01 = () => {
  return (
    <div className='bg-card w-full max-w-sm space-y-4 rounded-lg border p-4 shadow-xs'>
      <div className='flex items-center gap-3'>
        <Skeleton className='size-10 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-32' />
          <Skeleton className='h-3 w-44' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <Skeleton className='h-14 rounded-lg' />
        <Skeleton className='h-14 rounded-lg' />
        <Skeleton className='h-14 rounded-lg' />
      </div>
    </div>
  )
}

export default Skeleton01
