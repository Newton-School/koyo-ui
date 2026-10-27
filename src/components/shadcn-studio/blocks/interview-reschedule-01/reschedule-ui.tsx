// React Imports
import type { ComponentProps, CSSProperties, ReactNode } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import { LifeBuoyIcon } from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'

// Util Imports
import { cn } from '@/lib/utils'

export type Tone = 'info' | 'warning' | 'success' | 'danger' | 'neutral'

const toneColors: Record<Exclude<Tone, 'neutral'>, string> = {
  info: 'var(--koyo-color-brand-500)',
  warning: 'var(--koyo-color-amber-orange-500)',
  success: 'var(--koyo-color-green-500)',
  danger: 'var(--koyo-color-red-500)'
}

/** Sets `--tone` for the tint classes below. */
export const toneStyle = (tone: Tone) =>
  tone === 'neutral' ? undefined : ({ '--tone': toneColors[tone] } as CSSProperties)

/*
 * Tints mix the tone with the page's own background and foreground, so they follow whichever theme
 * variables are active, with or without a `.dark` class.
 */
export const tint = {
  surface:
    'border-[color-mix(in_oklab,var(--tone)_35%,var(--background))] bg-[color-mix(in_oklab,var(--tone)_9%,var(--background))] text-[color-mix(in_oklab,var(--tone)_22%,var(--foreground))]',
  icon: 'text-[color-mix(in_oklab,var(--tone)_85%,var(--foreground))]',
  tile: 'bg-[color-mix(in_oklab,var(--tone)_12%,var(--background))] text-[color-mix(in_oklab,var(--tone)_85%,var(--foreground))]',
  chip: 'border-[color-mix(in_oklab,var(--tone)_35%,var(--background))] bg-[color-mix(in_oklab,var(--tone)_10%,var(--background))] text-[color-mix(in_oklab,var(--tone)_60%,var(--foreground))]'
}

/*
 * Koyo's brand orange with white text measures 3.7:1, below WCAG AA for button-sized text. Primary
 * actions here use a slightly deeper mix of the same orange (≈4.7:1) and darken on hover.
 */
export const brandAction =
  'bg-[color-mix(in_oklab,var(--koyo-brand)_86%,black)]! hover:bg-[color-mix(in_oklab,var(--koyo-brand)_76%,black)]!'

/** Small orange text (badges, link buttons) mixed toward the foreground so it stays readable on tints. */
export const brandText = 'text-[color-mix(in_oklab,var(--koyo-brand)_72%,var(--foreground))]!'

const neutral = {
  surface: 'border-border bg-muted/60 text-foreground',
  icon: 'text-muted-foreground',
  tile: 'bg-muted text-muted-foreground'
}

export const Callout = ({
  tone = 'info',
  icon: Icon,
  title,
  children,
  className,
  ...props
}: Omit<ComponentProps<'div'>, 'title'> & { tone?: Tone; icon: LucideIcon; title?: ReactNode }) => {
  return (
    <div
      data-tone={tone}
      style={toneStyle(tone)}
      className={cn(
        'flex gap-3 rounded-lg border px-4 py-3.5 text-sm',
        tone === 'neutral' ? neutral.surface : tint.surface,
        className
      )}
      {...props}
    >
      <Icon
        className={cn('mt-0.5 size-4.5 shrink-0', tone === 'neutral' ? neutral.icon : tint.icon)}
        aria-hidden='true'
      />
      <div className='space-y-1 leading-relaxed'>
        {title && <p className='font-semibold'>{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export const IconTile = ({
  tone = 'neutral',
  icon: Icon,
  className
}: {
  tone?: Tone
  icon: LucideIcon
  className?: string
}) => {
  return (
    <span
      style={toneStyle(tone)}
      className={cn(
        'grid size-12 shrink-0 place-items-center rounded-xl',
        tone === 'neutral' ? neutral.tile : tint.tile,
        className
      )}
      aria-hidden='true'
    >
      <Icon className='size-6' />
    </span>
  )
}

export const KoyoLogo = ({ className }: { className?: string }) => {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span className='bg-koyo-brand grid size-8 place-items-center rounded-lg' aria-hidden='true'>
        <svg viewBox='0 0 24 24' className='size-5 text-white' fill='none'>
          <rect x='7.5' y='3.5' width='9' height='2.6' rx='1.3' fill='currentColor' />
          <circle cx='12' cy='14.25' r='5' stroke='currentColor' strokeWidth='2.6' />
        </svg>
      </span>
      <span className='text-koyo-brand text-xl font-semibold tracking-tight'>Koyo</span>
    </span>
  )
}

export const RescheduleHeader = ({ helpHref }: { helpHref: string }) => {
  return (
    <header className='bg-background/85 sticky top-0 z-20 border-b backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <KoyoLogo />
          <span className='bg-border hidden h-6 w-px sm:block' aria-hidden='true' />
          <span className='text-muted-foreground hidden text-sm font-medium sm:block'>AI Interviews</span>
        </div>
        <Button variant='ghost' size='sm' asChild>
          <a href={helpHref}>
            <LifeBuoyIcon aria-hidden='true' />
            Help
          </a>
        </Button>
      </div>
    </header>
  )
}

export const RescheduleFooter = () => {
  return (
    <footer className='border-t'>
      <div className='text-muted-foreground mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
        <p>This page is personal to you. Please don&apos;t share your interview link.</p>
        <p>Powered by Koyo AI Interviews · All times in IST (UTC+5:30)</p>
      </div>
    </footer>
  )
}

export const SidebarCard = ({
  title,
  children,
  className,
  ...props
}: Omit<ComponentProps<'section'>, 'title'> & { title: ReactNode }) => {
  return (
    <section className={cn('bg-card rounded-xl border p-5 sm:p-6', className)} {...props}>
      <h2 className='mb-4 text-base font-semibold'>{title}</h2>
      {children}
    </section>
  )
}
