// Util Imports
import { cn } from '@/lib/utils'

import KoyoMark from '@/assets/svg/koyo-mark'
import AnimatedGradientPanel from '@/components/shadcn-studio/blocks/animated-gradient-panel'

const AuthBrandPanel = ({ className }: { className?: string }) => {
  return (
    <AnimatedGradientPanel className={cn('sticky top-0 hidden h-svh shrink-0 lg:flex lg:w-[46%]', className)}>
      <a href='#' data-reveal className='flex w-fit items-center gap-2 motion-safe:invisible'>
        <KoyoMark className='size-10' />
        <span className='text-koyo-brand text-[2rem] leading-none font-semibold tracking-tight'>Koyo</span>
      </a>

      <p
        data-reveal
        className='text-foreground text-4xl font-semibold tracking-tight motion-safe:invisible xl:text-5xl'
      >
        <span className='inline-block overflow-hidden pb-1 align-bottom'>
          <span data-word className='inline-block'>
            Make
          </span>
        </span>{' '}
        <span className='relative inline-block overflow-hidden px-1 pb-2 align-bottom'>
          <span data-word className='inline-block'>
            <span data-script className='font-kalam text-koyo-brand inline-block text-[1.15em] font-normal'>
              Hiring
            </span>
          </span>
          <svg
            aria-hidden
            viewBox='0 0 120 12'
            preserveAspectRatio='none'
            className='text-koyo-brand absolute bottom-0 left-1 h-2.5 w-[calc(100%-0.5rem)]'
          >
            <path
              data-squiggle
              d='M2 8C18 3 32 11 48 7S80 3 96 7 112 9 118 5'
              pathLength={1}
              stroke='currentColor'
              strokeWidth={3}
              strokeLinecap='round'
              strokeDasharray={1}
              fill='none'
            />
          </svg>
        </span>{' '}
        <span className='inline-block overflow-hidden pb-1 align-bottom'>
          <span data-word className='inline-block'>
            human
          </span>
        </span>
      </p>
    </AnimatedGradientPanel>
  )
}

export default AuthBrandPanel
