// Util Imports
import { cn } from '@/lib/utils'

/** Koyo app mark: orange rounded square with the white "ō" glyph. */
export const KoyoMark = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn('bg-koyo-brand grid size-8 shrink-0 place-items-center rounded-lg', className)}
      aria-hidden='true'
    >
      <svg viewBox='0 0 24 24' className='size-[62%] text-white' fill='none'>
        <rect x='7.5' y='3.5' width='9' height='2.6' rx='1.3' fill='currentColor' />
        <circle cx='12' cy='14.25' r='5' stroke='currentColor' strokeWidth='2.6' />
      </svg>
    </span>
  )
}

export const KoyoLogo = ({ className, size = 'default' }: { className?: string; size?: 'default' | 'sm' }) => {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <KoyoMark className={size === 'sm' ? 'size-7 rounded-md' : undefined} />
      <span className={cn('text-koyo-brand font-semibold tracking-tight', size === 'sm' ? 'text-lg' : 'text-xl')}>
        Koyo
      </span>
    </span>
  )
}
