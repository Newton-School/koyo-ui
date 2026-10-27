// React Imports
import type { ComponentProps, CSSProperties, ReactNode } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import { LifeBuoyIcon } from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'

// Util Imports
import { cn } from '@/lib/utils'

import type { SupportContact } from './reschedule-data'

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
const tint = {
  banner:
    'bg-[color-mix(in_oklab,var(--tone)_9%,var(--background))] text-[color-mix(in_oklab,var(--tone)_25%,var(--foreground))]',
  callout:
    'border-[color-mix(in_oklab,var(--tone)_30%,var(--background))] bg-[color-mix(in_oklab,var(--tone)_6%,var(--background))] text-[color-mix(in_oklab,var(--tone)_20%,var(--foreground))]',
  icon: 'text-[color-mix(in_oklab,var(--tone)_85%,var(--foreground))]'
}

const neutral = {
  banner: 'bg-muted text-foreground',
  callout: 'border-border bg-muted/50 text-foreground',
  icon: 'text-muted-foreground'
}

/** Soft blue fill and blue text for selected controls, readable in light and dark themes. */
export const blueSelected =
  'border-koyo-color-brand-500 bg-[color-mix(in_oklab,var(--koyo-color-brand-500)_10%,var(--background))] text-[color-mix(in_oklab,var(--koyo-color-brand-500)_72%,var(--foreground))]'

/** A strong, theme-independent focus ring in Koyo blue. */
export const blueFocus =
  'outline-none focus-visible:ring-2 focus-visible:ring-koyo-color-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/*
 * Primary actions use the Koyo `blue` button (white on #0673f9 ≈ 4.6:1). Its stock hover lightens to
 * #2989ff (≈ 3.4:1), so hover darkens instead and keeps the label at AA contrast.
 */
export const primaryAction = cn('w-full text-base hover:bg-koyo-color-brand-600', blueFocus)

/** A tinted strip carrying a screen's key message, like a reservation page's "We're holding this table…". */
export const Banner = ({
  tone = 'info',
  icon: Icon,
  children,
  className,
  ...props
}: ComponentProps<'div'> & { tone?: Tone; icon?: LucideIcon }) => {
  return (
    <div
      data-tone={tone}
      style={toneStyle(tone)}
      className={cn(
        'flex gap-3 rounded-lg px-4 py-3 text-sm leading-relaxed sm:text-[15px]',
        tone === 'neutral' ? neutral.banner : tint.banner,
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className={cn('mt-[3px] size-4.5 shrink-0', tone === 'neutral' ? neutral.icon : tint.icon)}
          aria-hidden='true'
        />
      )}
      <div className='min-w-0 flex-1 space-y-1'>{children}</div>
    </div>
  )
}

/** A compact notice: icon, a bold lead-in and one or two sentences. */
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
        'flex gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm leading-relaxed',
        tone === 'neutral' ? neutral.callout : tint.callout,
        className
      )}
      {...props}
    >
      <Icon
        className={cn('mt-[3px] size-4 shrink-0', tone === 'neutral' ? neutral.icon : tint.icon)}
        aria-hidden='true'
      />
      <p>
        {title && <span className='font-semibold'>{title} </span>}
        {children}
      </p>
    </div>
  )
}

const linkClassName =
  'text-foreground rounded-sm font-medium underline decoration-foreground/25 underline-offset-4 hover:decoration-current focus-visible:ring-2 focus-visible:ring-koyo-color-brand-500 focus-visible:outline-none'

/** One quiet line with the hiring team's contacts, e.g. "Need help? Urban Company Hiring Team · email · phone". */
export const NeedHelpLine = ({
  support,
  note,
  id = 'help',
  className
}: {
  support: SupportContact
  note?: ReactNode
  id?: string
  className?: string
}) => {
  return (
    <div id={id} className={cn('text-muted-foreground scroll-mt-24 space-y-1 text-sm leading-relaxed', className)}>
      <p>
        <span className='text-foreground font-medium'>Need help?</span> {support.name}
        {support.email && (
          <>
            {' · '}
            <a href={`mailto:${support.email}`} className={cn(linkClassName, 'break-all')}>
              {support.email}
            </a>
          </>
        )}
        {support.phone && (
          <>
            {' · '}
            <a href={`tel:${support.phone.replace(/\s/g, '')}`} className={cn(linkClassName, 'whitespace-nowrap')}>
              {support.phone}
            </a>
          </>
        )}
      </p>
      {note && <p className='text-xs'>{note}</p>}
    </div>
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
