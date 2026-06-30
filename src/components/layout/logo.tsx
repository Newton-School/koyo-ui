// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className='bg-primary text-primary-foreground grid size-8.5 place-items-center rounded-lg text-sm font-semibold'>
        K
      </span>
      <span className='text-xl font-semibold'>Koyo UI</span>
    </div>
  )
}

export default Logo
