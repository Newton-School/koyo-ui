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
import { Banner, primaryAction } from './reschedule-ui'
import { useNow } from './reschedule-hooks'
import InterviewSummary, { PageHeading } from './interview-summary'
import { InAppBrowserNotice } from './fresh-link-view'

type StatusContent = {
  tone: Tone
  icon: LucideIcon
  title: string
  message: ReactNode
  action?: ReactNode

  /** States whose only way forward is the hiring team show their contacts as the actions. */
  support?: SupportContact
}

/** The original HR/support contact, repeated as the screen's actions (PRD §5.4, §7.3). */
const SupportActions = ({ support }: { support: SupportContact }) => (
  <div id='help' className='flex scroll-mt-24 flex-col gap-3 sm:flex-row sm:flex-wrap'>
    {support.email && (
      <Button variant='outline' size='lg' className='h-11' asChild>
        <a href={`mailto:${support.email}`}>
          <MailIcon aria-hidden='true' />
          Email {support.name}
        </a>
      </Button>
    )}
    {support.phone && (
      <Button variant='outline' size='lg' className='h-11' asChild>
        <a href={`tel:${support.phone.replace(/\s/g, '')}`}>
          <PhoneIcon aria-hidden='true' />
          Call {support.phone}
        </a>
      </Button>
    )}
  </div>
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
      variant='blue'
      size='xl'
      className={cn(primaryAction, 'aria-disabled:pointer-events-none aria-disabled:opacity-60')}
      asChild
    >
      <a href={passed ? undefined : url} aria-disabled={passed || undefined}>
        <PlayIcon aria-hidden='true' className='fill-current' />
        Start Interview
      </a>
    </Button>
  )
}

const Strong = ({ children }: { children: ReactNode }) => <span className='font-semibold'>{children}</span>

const short = (iso: string) => formatIST(iso, { withYear: false })

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
        message: (
          <>
            You can still start your interview before <Strong>{short(status.interview.originalLinkExpiresAt)}</Strong>.
            Start now while you have time.
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
        message: (
          <>
            {status.startedAt ? (
              <>
                You started on <Strong>{short(status.startedAt)}</Strong>, so there&apos;s nothing to reschedule.
              </>
            ) : (
              <>You&apos;ve already started, so there&apos;s nothing to reschedule.</>
            )}{' '}
            You can continue under the usual interview rules.
          </>
        ),
        action: status.interviewUrl ? (
          <Button variant='blue' size='xl' className={primaryAction} asChild>
            <a href={status.interviewUrl}>
              Continue interview
              <ArrowRightIcon aria-hidden='true' className='size-5' />
            </a>
          </Button>
        ) : undefined
      }
    case 'interview-completed':
      return {
        tone: 'success',
        icon: BadgeCheckIcon,
        title: "You've completed this interview",
        message: (
          <>
            Thanks for completing your interview on <Strong>{short(status.completedAt)}</Strong>. There&apos;s nothing
            else you need to do on this page.
          </>
        )
      }
    case 'final-link-expired':
      return {
        tone: 'neutral',
        icon: CalendarX2Icon,
        title: 'Your interview link has expired',
        message: (
          <>
            Your new link expired on <Strong>{short(status.freshLink.expiresAt)}</Strong> before the interview was
            started. You&apos;ve already used your one-time reschedule, so it can&apos;t be rescheduled again.
          </>
        ),
        support: status.interview.support
      }
    case 'ineligible':
      return {
        tone: 'neutral',
        icon: BanIcon,
        title: 'Rescheduling isn’t available for this interview',
        message: (
          <>
            A new link can&apos;t be issued for this interview from this page. Please check your latest WhatsApp or
            email message from {status.interview.company.name}, or contact the hiring team.
          </>
        ),
        support: status.interview.support
      }
    case 'invalid-link':
      return {
        tone: 'neutral',
        icon: Link2OffIcon,
        title: 'This link isn’t working',
        message: (
          <>
            It may have expired, be incomplete, or belong to a different interview. Open the link from your latest
            WhatsApp or email message from us. If it still doesn&apos;t work, contact support.
          </>
        ),
        support: status.support
      }
  }
}

/** True when the screen shows the support contacts as its actions, so the page can skip its help line. */
export const showsSupportActions = (status: RescheduleStatus) =>
  status.state === 'final-link-expired' || status.state === 'ineligible' || status.state === 'invalid-link'

type StatusViewProps = DeadlineOptions & {
  status: Exclude<RescheduleStatus, { state: 'eligible' | 'fresh-link-active' }>
  headingRef?: Ref<HTMLHeadingElement>
}

export const StatusView = ({ status, headingRef, ...deadlineOptions }: StatusViewProps) => {
  const content = getContent(status, deadlineOptions)

  return (
    <div className='space-y-6'>
      <div className='space-y-5'>
        <PageHeading headingRef={headingRef}>{content.title}</PageHeading>
        {status.state !== 'invalid-link' && <InterviewSummary interview={status.interview} />}
      </div>

      <Banner tone={content.tone} icon={content.icon}>
        <p>{content.message}</p>
      </Banner>

      {status.state === 'original-link-active' && <InAppBrowserNotice />}

      {content.action}

      {content.support && <SupportActions support={content.support} />}
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
    <PageHeading headingRef={headingRef}>We couldn&apos;t load your interview details</PageHeading>
    <Banner tone='neutral' icon={WifiOffIcon}>
      <p>Check your internet connection and try again. If the problem continues, contact support.</p>
    </Banner>
    <Button variant='blue' size='xl' className={primaryAction} onClick={onRetry}>
      <RefreshCwIcon aria-hidden='true' />
      Try again
    </Button>
  </div>
)
