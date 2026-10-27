'use client'

// React Imports
import type { Ref } from 'react'
import { useEffect, useId, useRef, useState } from 'react'

// Third-party Imports
import {
  BellRingIcon,
  CheckIcon,
  CircleCheckBigIcon,
  CopyIcon,
  ExternalLinkIcon,
  HourglassIcon,
  InfoIcon,
  LaptopIcon,
  LinkIcon,
  PlayIcon,
  Share2Icon,
  ShieldAlertIcon,
  TimerIcon
} from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@newtonschool/koyo-ui/input-group'
import { Progress } from '@newtonschool/koyo-ui/progress'
import { Spinner } from '@newtonschool/koyo-ui/spinner'

// Util Imports
import { cn } from '@/lib/utils'

import type { FreshLink, InterviewDetails } from './reschedule-data'
import { formatDuration, formatIST, formatLocal, formatRemaining } from './reschedule-data'
import { useInAppBrowser, useIsHandheld, useLocalTimeZone, useNow } from './reschedule-hooks'
import { brandAction, brandText, Callout, IconTile, tint, toneStyle } from './reschedule-ui'
import InterviewSummary from './interview-summary'

const URGENT_MS = 3 * 3_600_000

const DeadlineCard = ({
  freshLink,
  validityHours,
  remaining
}: {
  freshLink: FreshLink
  validityHours: number
  remaining: number | null
}) => {
  // Hooks
  const localTimeZone = useLocalTimeZone()

  const issuedAt = new Date(freshLink.issuedAt).getTime()
  const expiresAt = new Date(freshLink.expiresAt).getTime()
  const percentLeft = remaining === null ? 100 : Math.max(0, Math.min(100, (remaining / (expiresAt - issuedAt)) * 100))
  const expired = remaining !== null && remaining <= 0
  const urgent = remaining !== null && !expired && remaining < URGENT_MS

  return (
    <div className='bg-card rounded-xl border p-4 sm:p-5'>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div className='space-y-1'>
          <p className='text-muted-foreground text-xs font-medium tracking-wide uppercase'>Start before</p>
          <p className='text-lg font-semibold sm:text-xl'>
            <time dateTime={freshLink.expiresAt}>{formatIST(freshLink.expiresAt)}</time>
          </p>
          {localTimeZone && (
            <p className='text-muted-foreground text-sm'>{formatLocal(freshLink.expiresAt, localTimeZone)} your time</p>
          )}
        </div>
        {remaining !== null && (
          <span
            style={expired ? undefined : toneStyle(urgent ? 'warning' : 'success')}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium tabular-nums',
              expired ? 'bg-muted text-muted-foreground border-border' : tint.chip
            )}
          >
            {expired ? (
              <Spinner className='size-3.5' aria-hidden='true' role='presentation' />
            ) : (
              <HourglassIcon className='size-3.5' aria-hidden='true' />
            )}
            {expired ? 'Checking…' : formatRemaining(remaining)}
          </span>
        )}
      </div>
      <Progress
        value={percentLeft}
        aria-label='Time left to start the interview'
        aria-valuenow={Math.round(percentLeft)}
        aria-valuetext={remaining === null ? undefined : formatRemaining(remaining)}
        className={cn('mt-4 h-1.5', urgent && '[&>[data-slot=progress-indicator]]:bg-koyo-color-amber-orange-500')}
      />
      <p className='text-muted-foreground mt-3 text-xs leading-relaxed'>
        You only need to <span className='text-foreground font-medium'>start</span> before this time — once you start,
        you can finish under the usual interview rules. Issued {formatIST(freshLink.issuedAt)} · valid for{' '}
        {validityHours} hours.
      </p>
    </div>
  )
}

const CopyLink = ({ url, showShare }: { url: string; showShare: boolean }) => {
  // States
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')
  const [canShare, setCanShare] = useState(false)

  // Refs
  const inputRef = useRef<HTMLInputElement>(null)

  // Hooks
  const inputId = useId()

  useEffect(() => {
    setCanShare(typeof navigator.share === 'function')
  }, [])

  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = setTimeout(() => setCopyState('idle'), 2500)

    return () => clearTimeout(timer)
  }, [copyState])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopyState('copied')
    } catch {
      // In-app browsers (WhatsApp, Instagram) often block the clipboard API — select the text instead.
      inputRef.current?.select()
      setCopyState(document.execCommand?.('copy') ? 'copied' : 'manual')
    }
  }

  const handleShare = async () => {
    try {
      await navigator.share({ title: 'My interview link', url })
    } catch {
      // The candidate closed the share sheet — nothing to do.
    }
  }

  return (
    <div className='space-y-2'>
      <label htmlFor={inputId} className='text-sm font-medium'>
        Or copy your interview link
      </label>
      <div className='flex gap-2'>
        <InputGroup className='h-11'>
          <InputGroupAddon>
            <LinkIcon aria-hidden='true' />
          </InputGroupAddon>
          <InputGroupInput
            ref={inputRef}
            id={inputId}
            readOnly
            value={url}
            onFocus={event => event.currentTarget.select()}
            className='font-mono text-sm'
          />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton
              size='sm'
              variant='orange-soft'
              className={brandText}
              onClick={handleCopy}
              aria-label='Copy interview link'
            >
              {copyState === 'copied' ? <CheckIcon aria-hidden='true' /> : <CopyIcon aria-hidden='true' />}
              {copyState === 'copied' ? 'Copied' : 'Copy'}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {showShare && canShare && (
          <Button variant='outline' size='icon-lg' className='size-11' onClick={handleShare} aria-label='Share link'>
            <Share2Icon aria-hidden='true' />
          </Button>
        )}
      </div>
      <p role='status' className={cn('text-muted-foreground text-xs', copyState === 'idle' && 'sr-only')}>
        {copyState === 'copied' && 'Link copied. Open it in Chrome to start your interview.'}
        {copyState === 'manual' && 'Couldn’t copy automatically. Press and hold the link above to copy it.'}
      </p>
    </div>
  )
}

/** Shown inside WhatsApp/Instagram-style in-app browsers, which often block the camera and microphone. */
export const InAppBrowserNotice = () => {
  const inApp = useInAppBrowser()

  if (!inApp) return null

  return (
    <Callout tone='info' icon={ExternalLinkIcon} title='Open this page in Chrome for your interview'>
      The browser inside apps like WhatsApp can block your camera and microphone. Copy the link and open it in Chrome
      before you start.
    </Callout>
  )
}

type Props = {
  interview: InterviewDetails
  freshLink: FreshLink
  justIssued: boolean
  alreadyUsedNotice?: boolean
  headingRef?: Ref<HTMLHeadingElement>

  /** Server time minus device time, in ms, so a wrong device clock can't end the countdown early. */
  clockOffset?: number

  /** The server re-checked this deadline and said the link still works; trust it over the local countdown. */
  deadlineConfirmed?: boolean

  /** Called when the countdown reaches zero, so the page can re-check the authoritative status. */
  onDeadlinePassed?: (deadline: string) => void
}

const FreshLinkView = ({
  interview,
  freshLink,
  justIssued,
  alreadyUsedNotice,
  headingRef,
  clockOffset = 0,
  deadlineConfirmed,
  onDeadlinePassed
}: Props) => {
  // Hooks
  const now = useNow()
  const handheld = useIsHandheld()

  const rawRemaining = now === null ? null : new Date(freshLink.expiresAt).getTime() - (now + clockOffset)

  // Once the server has confirmed the link still works, never show it as expired on this page.
  const remaining = rawRemaining !== null && deadlineConfirmed ? Math.max(rawRemaining, 30_000) : rawRemaining
  const expired = remaining !== null && remaining <= 0
  const urgent = remaining !== null && !expired && remaining < URGENT_MS
  const needsLaptop = interview.kind === 'coding' && handheld

  useEffect(() => {
    if (expired) onDeadlinePassed?.(freshLink.expiresAt)
  }, [expired, freshLink.expiresAt, onDeadlinePassed])

  const notes = [
    {
      icon: BellRingIcon,
      title: "We'll remind you before it expires",
      description: 'Reminders with this link will come on WhatsApp and email.'
    },
    {
      icon: TimerIcon,
      title: `Set aside about ${formatDuration(interview.durationMinutes)}`,
      description: 'Find a quiet place with a stable internet connection, and avoid interruptions once you start.'
    }
  ]

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <IconTile
          tone='success'
          icon={CircleCheckBigIcon}
          className='animate-in fade-in zoom-in-75 size-14 duration-500 motion-reduce:animate-none [&_svg]:size-7'
        />
        <div className='space-y-2'>
          <h1 ref={headingRef} tabIndex={-1} className='text-2xl font-semibold tracking-tight outline-none sm:text-3xl'>
            {justIssued ? 'Your new interview link is ready' : 'Your new interview link is still active'}
          </h1>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {justIssued ? `${interview.candidateFirstName}, start` : 'Start'} your interview any time before{' '}
            <span className='text-foreground font-medium'>{formatIST(freshLink.expiresAt)}</span>.
          </p>
        </div>
      </div>

      {alreadyUsedNotice && (
        <Callout tone='info' icon={InfoIcon} title='You already have a new link'>
          You&apos;ve already used your one-time reschedule, so we didn&apos;t create another link. Here&apos;s the one
          you already have.
        </Callout>
      )}

      <InterviewSummary interview={interview} />

      <DeadlineCard freshLink={freshLink} validityHours={interview.freshLinkValidityHours} remaining={remaining} />

      {urgent && (
        <Callout tone='warning' icon={HourglassIcon} title='Less than 3 hours left to start'>
          Start soon so you aren&apos;t rushed. You only need to start before {formatIST(freshLink.expiresAt)}.
        </Callout>
      )}

      {needsLaptop && (
        <Callout tone='info' icon={LaptopIcon} title='Open this link on a laptop or desktop'>
          Coding interviews need a full keyboard, so they don&apos;t work on phones. Copy or share the link below and
          open it in Chrome on your computer.
        </Callout>
      )}

      <InAppBrowserNotice />

      <div className='space-y-5'>
        <Button
          variant='brand'
          size='xl'
          className={cn(brandAction, 'w-full text-base aria-disabled:pointer-events-none aria-disabled:opacity-60')}
          asChild
        >
          <a href={expired ? undefined : freshLink.url} aria-disabled={expired || undefined}>
            <PlayIcon aria-hidden='true' className='fill-current' />
            Start Interview
          </a>
        </Button>
        <CopyLink url={freshLink.url} showShare={handheld} />
      </div>

      <ul className='space-y-4'>
        {notes.map(note => (
          <li key={note.title} className='flex gap-3'>
            <span className='bg-muted grid size-9 shrink-0 place-items-center rounded-lg' aria-hidden='true'>
              <note.icon className='text-muted-foreground size-4.5' />
            </span>
            <div className='space-y-0.5'>
              <p className='text-sm font-medium'>{note.title}</p>
              <p className='text-muted-foreground text-sm leading-relaxed'>{note.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <Callout tone='warning' icon={ShieldAlertIcon} title='No further rescheduling'>
        This was your one-time reschedule for this interview. If this link expires before you start, you won&apos;t be
        able to get another one.
      </Callout>
    </div>
  )
}

export default FreshLinkView
