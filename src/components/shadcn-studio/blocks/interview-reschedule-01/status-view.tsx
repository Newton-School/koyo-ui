'use client'

// React Imports
import type { ReactNode, Ref } from 'react'
import { useEffect } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BanIcon,
  CalendarClockIcon,
  CalendarX2Icon,
  CirclePlayIcon,
  Link2OffIcon,
  MailIcon,
  PhoneIcon,
  PlayIcon,
  RefreshCwIcon,
  WifiOffIcon
} from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'

// Util Imports
import { cn } from '@/lib/utils'

import type { RescheduleStatus, SupportContact } from './reschedule-data'
import { formatIST } from './reschedule-data'
import type { Tone } from './reschedule-ui'
import { brandAction, IconTile } from './reschedule-ui'
import { useNow } from './reschedule-hooks'
import InterviewSummary from './interview-summary'
import { InAppBrowserNotice } from './fresh-link-view'

type StatusContent = {
  tone: Tone
  icon: LucideIcon
  title: string
  description: ReactNode
  action?: ReactNode
  closing?: ReactNode
}

/** The original HR/support contact, repeated in the main column (PRD §5.4, §7.3). */
const SupportActions = ({ support }: { support: SupportContact }) => (
  <>
    {support.email && (
      <Button variant='outline' size='lg' asChild>
        <a href={`mailto:${support.email}`}>
          <MailIcon aria-hidden='true' />
          Email {support.name}
        </a>
      </Button>
    )}
    {support.phone && (
      <Button variant='outline' size='lg' asChild>
        <a href={`tel:${support.phone.replace(/\s/g, '')}`}>
          <PhoneIcon aria-hidden='true' />
          Call {support.phone}
        </a>
      </Button>
    )}
  </>
)

/** `clockOffset` is server time minus device time, in ms. */
type DeadlineOptions = {
  clockOffset?: number

  /** The server already re-checked this deadline and said the link still works. */
  deadlineConfirmed?: boolean

  /** Called once the deadline passes on screen, so the page can re-check the authoritative status. */
  onDeadlinePassed?: (deadline: string) => void
}

/** Start button for a link that is still active; it stops working the moment the deadline passes. */
const StartBeforeDeadline = ({
  url,
  deadline,
  clockOffset = 0,
  deadlineConfirmed,
  onDeadlinePassed
}: DeadlineOptions & { url: string; deadline: string }) => {
  const now = useNow()
  const passed = now !== null && !deadlineConfirmed && now + clockOffset >= new Date(deadline).getTime()

  useEffect(() => {
    if (passed) onDeadlinePassed?.(deadline)
  }, [passed, deadline, onDeadlinePassed])

  return (
    <Button
      variant='brand'
      size='xl'
      className={cn(
        brandAction,
        'w-full text-base aria-disabled:pointer-events-none aria-disabled:opacity-60 sm:w-auto'
      )}
      asChild
    >
      <a href={passed ? undefined : url} aria-disabled={passed || undefined}>
        <PlayIcon aria-hidden='true' className='fill-current' />
        Start Interview
      </a>
    </Button>
  )
}

const Strong = ({ children }: { children: ReactNode }) => (
  <span className='text-foreground font-medium'>{children}</span>
)

const getContent = (
  status: Exclude<RescheduleStatus, { state: 'eligible' | 'fresh-link-active' }>,
  deadlineOptions: DeadlineOptions
): StatusContent => {
  switch (status.state) {
    case 'original-link-active':
      return {
        tone: 'info',
        icon: CalendarClockIcon,
        title: 'Your interview link is still active',
        description: (
          <>
            You can still start your interview before{' '}
            <Strong>{formatIST(status.interview.originalLinkExpiresAt)}</Strong>. Start now while you have time.
          </>
        ),
        action: (
          <StartBeforeDeadline
            url={status.interviewUrl}
            deadline={status.interview.originalLinkExpiresAt}
            {...deadlineOptions}
          />
        )
      }
    case 'interview-started':
      return {
        tone: 'info',
        icon: CirclePlayIcon,
        title: "You've already started this interview",
        description: (
          <>
            {status.startedAt ? (
              <>
                You started on <Strong>{formatIST(status.startedAt)}</Strong>, so there&apos;s nothing to reschedule.
              </>
            ) : (
              <>You&apos;ve already started, so there&apos;s nothing to reschedule.</>
            )}{' '}
            You can continue under the usual interview rules.
          </>
        ),
        action: status.interviewUrl ? (
          <Button variant='brand' size='xl' className={cn(brandAction, 'w-full text-base sm:w-auto')} asChild>
            <a href={status.interviewUrl}>
              Continue interview
              <ArrowRightIcon aria-hidden='true' />
            </a>
          </Button>
        ) : undefined
      }
    case 'interview-completed':
      return {
        tone: 'success',
        icon: BadgeCheckIcon,
        title: "You've completed this interview",
        description: (
          <>
            Thanks for completing your interview on <Strong>{formatIST(status.completedAt)}</Strong>. There&apos;s
            nothing else you need to do on this page.
          </>
        )
      }
    case 'final-link-expired':
      return {
        tone: 'neutral',
        icon: CalendarX2Icon,
        title: 'Your interview link has expired',
        description: (
          <>
            Your new link expired on <Strong>{formatIST(status.freshLink.expiresAt)}</Strong> before the interview was
            started. You&apos;ve already used your one-time reschedule, so this interview can&apos;t be rescheduled
            again.
          </>
        ),
        action: <SupportActions support={status.interview.support} />,
        closing: `If you need help, please contact the ${status.interview.support.name}. Thank you.`
      }
    case 'ineligible':
      return {
        tone: 'neutral',
        icon: BanIcon,
        title: 'Rescheduling isn’t available for this interview',
        description: (
          <>
            A new link can&apos;t be issued for this interview from this page. Please check your latest WhatsApp or
            email message from {status.interview.company.name}, or contact the hiring team.
          </>
        ),
        action: <SupportActions support={status.interview.support} />
      }
    case 'invalid-link':
      return {
        tone: 'danger',
        icon: Link2OffIcon,
        title: 'This link isn’t working',
        description: (
          <>
            It may have expired, be incomplete, or belong to a different interview. Open the link from your latest
            WhatsApp or email message from us. If it still doesn&apos;t work, contact support.
          </>
        ),
        action: <SupportActions support={status.support} />
      }
  }
}

type StatusViewProps = DeadlineOptions & {
  status: Exclude<RescheduleStatus, { state: 'eligible' | 'fresh-link-active' }>
  headingRef?: Ref<HTMLHeadingElement>
}

export const StatusView = ({ status, headingRef, ...deadlineOptions }: StatusViewProps) => {
  const content = getContent(status, deadlineOptions)

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <IconTile tone={content.tone} icon={content.icon} className='size-14 [&_svg]:size-7' />
        <div className='space-y-2'>
          <h1 ref={headingRef} tabIndex={-1} className='text-2xl font-semibold tracking-tight outline-none sm:text-3xl'>
            {content.title}
          </h1>
          <p className='text-muted-foreground text-base leading-relaxed'>{content.description}</p>
        </div>
      </div>

      {status.state !== 'invalid-link' && <InterviewSummary interview={status.interview} />}

      {status.state === 'original-link-active' && <InAppBrowserNotice />}

      {content.action && <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>{content.action}</div>}

      {content.closing && <p className='text-muted-foreground text-sm leading-relaxed'>{content.closing}</p>}
    </div>
  )
}

export const LoadErrorView = ({
  onRetry,
  headingRef
}: {
  onRetry: () => void
  headingRef?: Ref<HTMLHeadingElement>
}) => (
  <div className='space-y-6'>
    <IconTile tone='neutral' icon={WifiOffIcon} className='size-14 [&_svg]:size-7' />
    <div className='space-y-2'>
      <h1 ref={headingRef} tabIndex={-1} className='text-2xl font-semibold tracking-tight outline-none sm:text-3xl'>
        We couldn&apos;t load your interview details
      </h1>
      <p className='text-muted-foreground text-base leading-relaxed'>
        Check your internet connection and try again. If the problem continues, contact support.
      </p>
    </div>
    <Button variant='brand' size='lg' className={brandAction} onClick={onRetry}>
      <RefreshCwIcon aria-hidden='true' />
      Try again
    </Button>
  </div>
)
