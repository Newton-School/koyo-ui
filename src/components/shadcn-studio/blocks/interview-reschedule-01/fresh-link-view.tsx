'use client'

// React Imports
import type { Ref } from 'react'
import { useEffect, useId, useRef, useState } from 'react'

// Third-party Imports
import {
  CheckIcon,
  CircleCheckBigIcon,
  CopyIcon,
  ExternalLinkIcon,
  HourglassIcon,
  InfoIcon,
  LaptopIcon,
  LinkIcon,
  PlayIcon,
  Share2Icon
} from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@newtonschool/koyo-ui/input-group'
import { Spinner } from '@newtonschool/koyo-ui/spinner'

// Util Imports
import { cn } from '@/lib/utils'

import type { FreshLink, InterviewDetails } from './reschedule-data'
import { formatDuration, formatIST, formatLocal, formatRemaining } from './reschedule-data'
import { useInAppBrowser, useIsHandheld, useLocalTimeZone, useNow } from './reschedule-hooks'
import { Banner, blueFocus, Callout, primaryAction } from './reschedule-ui'
import InterviewSummary, { PageHeading } from './interview-summary'

const URGENT_MS = 3 * 3_600_000

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
    <div className='space-y-1.5'>
      <label htmlFor={inputId} className='text-muted-foreground text-xs font-medium'>
        Or copy your interview link
      </label>
      <div className='flex gap-2'>
        <InputGroup className='has-[[data-slot=input-group-control]:focus-visible]:border-koyo-color-brand-500 h-10 has-[[data-slot=input-group-control]:focus-visible]:ring-[color-mix(in_oklab,var(--koyo-color-brand-500)_25%,transparent)]'>
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
              variant='ghost'
              className={cn(
                'text-[color-mix(in_oklab,var(--koyo-color-brand-500)_72%,var(--foreground))] hover:bg-[color-mix(in_oklab,var(--koyo-color-brand-500)_10%,var(--background))]',
                blueFocus
              )}
              onClick={handleCopy}
              aria-label='Copy interview link'
            >
              {copyState === 'copied' ? <CheckIcon aria-hidden='true' /> : <CopyIcon aria-hidden='true' />}
              {copyState === 'copied' ? 'Copied' : 'Copy'}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {showShare && canShare && (
          <Button variant='outline' size='icon-lg' onClick={handleShare} aria-label='Share link'>
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
    <Callout tone='info' icon={ExternalLinkIcon} title='Open this page in Chrome.'>
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
  const localTimeZone = useLocalTimeZone()

  const rawRemaining = now === null ? null : new Date(freshLink.expiresAt).getTime() - (now + clockOffset)

  // Once the server has confirmed the link still works, never show it as expired on this page.
  const remaining = rawRemaining !== null && deadlineConfirmed ? Math.max(rawRemaining, 30_000) : rawRemaining
  const expired = remaining !== null && remaining <= 0
  const urgent = remaining !== null && !expired && remaining < URGENT_MS
  const needsLaptop = interview.kind === 'coding' && handheld

  useEffect(() => {
    if (expired) onDeadlinePassed?.(freshLink.expiresAt)
  }, [expired, freshLink.expiresAt, onDeadlinePassed])

  return (
    <div className='space-y-6'>
      <div className='space-y-5'>
        <PageHeading headingRef={headingRef}>
          {justIssued ? 'Your new interview link is ready' : 'Your new interview link is still active'}
        </PageHeading>
        <InterviewSummary interview={interview} />
      </div>

      <Banner
        tone={expired ? 'neutral' : urgent ? 'warning' : 'success'}
        icon={urgent ? HourglassIcon : CircleCheckBigIcon}
      >
        <p className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5'>
          <span>
            {urgent ? 'Start soon — before ' : 'Start your interview before '}
            <time dateTime={freshLink.expiresAt} className='font-semibold'>
              {formatIST(freshLink.expiresAt, { withYear: false })}
            </time>
            {localTimeZone && (
              <span className='opacity-80'> ({formatLocal(freshLink.expiresAt, localTimeZone)} your time)</span>
            )}
          </span>
          {remaining !== null && (
            <span className='inline-flex items-center gap-1.5 font-semibold whitespace-nowrap tabular-nums'>
              {expired && <Spinner className='size-3.5' aria-hidden='true' role='presentation' />}
              {expired ? 'Checking…' : formatRemaining(remaining)}
            </span>
          )}
        </p>
        <p className='text-[13px] opacity-85'>
          No further rescheduling — this was your one-time reschedule for this interview.
        </p>
      </Banner>

      {alreadyUsedNotice && (
        <Callout tone='info' icon={InfoIcon} title='You already have a new link.'>
          You&apos;ve already used your one-time reschedule, so we didn&apos;t create another one. Here&apos;s the link
          you already have.
        </Callout>
      )}

      {needsLaptop && (
        <Callout tone='info' icon={LaptopIcon} title='Open this link on a laptop or desktop.'>
          Coding interviews need a full keyboard, so they don&apos;t work on phones. Copy or share the link below and
          open it in Chrome on your computer.
        </Callout>
      )}

      <InAppBrowserNotice />

      <div className='space-y-4'>
        <Button
          variant='blue'
          size='xl'
          className={cn(primaryAction, 'aria-disabled:pointer-events-none aria-disabled:opacity-60')}
          asChild
        >
          <a href={expired ? undefined : freshLink.url} aria-disabled={expired || undefined}>
            <PlayIcon aria-hidden='true' className='fill-current' />
            Start Interview
          </a>
        </Button>
        <CopyLink url={freshLink.url} showShare={handheld} />
      </div>

      <p className='text-muted-foreground text-xs leading-relaxed'>
        You only need to <span className='text-foreground font-medium'>start</span> before the deadline · takes about{' '}
        {formatDuration(interview.durationMinutes)} · we&apos;ll remind you on WhatsApp and email
      </p>
    </div>
  )
}

export default FreshLinkView
