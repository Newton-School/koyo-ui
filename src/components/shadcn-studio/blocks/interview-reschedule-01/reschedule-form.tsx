'use client'

// React Imports
import type { FormEvent, KeyboardEvent, RefObject } from 'react'
import { useId, useRef, useState } from 'react'

// Third-party Imports
import { ArrowRightIcon, CheckIcon, CircleAlertIcon, LaptopIcon, WifiOffIcon } from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'
import { Spinner } from '@newtonschool/koyo-ui/spinner'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

// Util Imports
import { cn } from '@/lib/utils'

import type { InterviewDetails, ReasonId } from './reschedule-data'
import {
  DEFAULT_EXPLANATION_PLACEHOLDER,
  EXPLANATION_MAX_LENGTH,
  formatDuration,
  formatIST,
  reasons
} from './reschedule-data'
import { useIsHandheld, useNow, useOnline } from './reschedule-hooks'
import { Banner, blueFocus, blueSelected, Callout, primaryAction } from './reschedule-ui'

export type RescheduleFormValues = { reason: ReasonId; explanation: string }

/**
 * `temporary-error`: the server said no link was created — safe to retry.
 * `unknown-outcome`: we couldn't reach the server, so we don't know yet — retrying replays the same request.
 */
export type SubmitFailure = 'temporary-error' | 'unknown-outcome'

type Props = {
  interview: InterviewDetails

  /** Resolves once the request is handled. Returning a failure keeps the form so the candidate can retry. */
  onSubmit: (values: RescheduleFormValues) => Promise<SubmitFailure | void>
}

const failureCopy: Record<SubmitFailure, { title: string; body: string }> = {
  'temporary-error': {
    title: 'We couldn’t create your new link.',
    body: 'Something went wrong on our side. Your one-time request hasn’t been used, so please try again.'
  },
  'unknown-outcome': {
    title: 'We couldn’t confirm your request.',
    body: 'Check your internet connection and try again. If your new link was already created, we’ll show it to you — you won’t get a second one.'
  }
}

/** On phones the action bar is pinned to the bottom, so focused fields keep clear of it. */
const clearOfActionBar = 'max-md:scroll-mb-40'

/**
 * The one-time rule and the deadline the candidate would get if they asked now (PRD §8). The deadline
 * needs the device clock, so it appears after mount; the server render shows only the 24 hours.
 */
export const OneTimeBanner = ({ interview }: { interview: InterviewDetails }) => {
  // Hooks
  const now = useNow()

  const hours = interview.freshLinkValidityHours
  const projectedExpiry = now === null ? null : new Date(now + hours * 3_600_000).toISOString()

  return (
    <Banner tone='info'>
      <p>
        This is a one-time request. Your new link will be valid for <span className='font-semibold'>{hours} hours</span>
        {projectedExpiry ? (
          <>
            {' '}
            — if you request now, start by{' '}
            <time dateTime={projectedExpiry} className='font-semibold'>
              {formatIST(projectedExpiry, { withYear: false })}
            </time>
            .
          </>
        ) : (
          ' from the moment you request it.'
        )}
      </p>
    </Banner>
  )
}

type ReasonPillsProps = {
  value: ReasonId | ''
  onChange: (value: ReasonId) => void
  invalid: boolean
  labelId: string
  errorId: string
  groupRef: RefObject<HTMLDivElement | null>
}

/** Single-choice pills that behave like a native radio group: one tab stop, arrow keys move and select. */
const ReasonPills = ({ value, onChange, invalid, labelId, errorId, groupRef }: ReasonPillsProps) => {
  const tabStop = Math.max(
    0,
    reasons.findIndex(reason => reason.id === value)
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = reasons.length - 1
    let next: number

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = index === last ? 0 : index + 1
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        next = index === 0 ? last : index - 1
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = last
        break
      default:
        return
    }

    event.preventDefault()
    onChange(reasons[next].id)
    groupRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next]?.focus()
  }

  return (
    <div
      ref={groupRef}
      role='radiogroup'
      aria-labelledby={labelId}
      aria-required='true'
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? errorId : undefined}
      className='flex flex-wrap gap-2 sm:gap-2.5'
    >
      {reasons.map((reason, index) => {
        const selected = reason.id === value

        // The check (14px + 4px gap) takes the place of 8px of padding on each side, so selecting a pill
        // never changes its width or reflows the rows.

        return (
          <button
            key={reason.id}
            type='button'
            role='radio'
            aria-checked={selected}
            tabIndex={index === tabStop ? 0 : -1}
            onClick={() => onChange(reason.id)}
            onKeyDown={event => handleKeyDown(event, index)}
            className={cn(
              'inline-flex min-h-11 max-w-full cursor-pointer items-center rounded-full border py-2 text-left text-sm leading-snug font-medium transition-[color,background-color,border-color,box-shadow] sm:min-h-10 sm:py-1.5 md:whitespace-nowrap',
              'disabled:cursor-not-allowed disabled:opacity-60',
              blueFocus,
              clearOfActionBar,
              selected
                ? cn('gap-1 pr-3 pl-2.5', blueSelected)
                : cn(
                    'bg-background text-foreground hover:bg-muted px-5 enabled:hover:border-[color-mix(in_oklab,var(--foreground)_30%,var(--background))]',
                    invalid ? 'border-destructive/70' : 'border-border'
                  )
            )}
          >
            {selected && <CheckIcon className='size-3.5 shrink-0' strokeWidth={3} aria-hidden='true' />}
            {reason.label}
          </button>
        )
      })}
    </div>
  )
}

const RescheduleForm = ({ interview, onSubmit }: Props) => {
  // States
  const [reason, setReason] = useState<ReasonId | ''>('')
  const [explanation, setExplanation] = useState('')
  const [showReasonError, setShowReasonError] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [failure, setFailure] = useState<SubmitFailure | null>(null)

  // Refs
  const reasonGroupRef = useRef<HTMLDivElement>(null)
  const submittingRef = useRef(false)

  // Hooks
  const id = useId()
  const online = useOnline()
  const handheld = useIsHandheld()
  const labelId = `${id}-reason-label`
  const reasonErrorId = `${id}-reason-error`
  const explanationId = `${id}-explanation`
  const explanationHintId = `${id}-explanation-hint`
  const blocked = submitting || !online
  const placeholder = reasons.find(option => option.id === reason)?.placeholder ?? DEFAULT_EXPLANATION_PLACEHOLDER

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Guards against double-clicks and Enter-key repeats while a request is in flight.
    if (submittingRef.current || !online) return

    if (!reason) {
      setShowReasonError(true)
      reasonGroupRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'center'
      })
      reasonGroupRef.current?.querySelector<HTMLButtonElement>('[role="radio"]')?.focus({ preventScroll: true })

      return
    }

    submittingRef.current = true
    setSubmitting(true)
    setFailure(null)

    const result = await onSubmit({ reason, explanation: explanation.trim() })

    // On success the parent swaps this form for the confirmation screen, so only failures land here.
    if (result) {
      submittingRef.current = false
      setSubmitting(false)
      setFailure(result)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className='space-y-6'>
      <fieldset disabled={submitting} className='space-y-6'>
        <div className='space-y-3'>
          <p id={labelId} className='text-base font-semibold'>
            Why did you miss your interview?
            <span className='text-koyo-color-brand-500 ml-0.5' aria-hidden='true'>
              *
            </span>
          </p>

          <ReasonPills
            value={reason}
            onChange={value => {
              setReason(value)
              setShowReasonError(false)
            }}
            invalid={showReasonError}
            labelId={labelId}
            errorId={reasonErrorId}
            groupRef={reasonGroupRef}
          />

          {showReasonError && (
            <p
              id={reasonErrorId}
              role='alert'
              className='text-destructive flex items-center gap-1.5 text-sm font-medium'
            >
              <CircleAlertIcon className='size-4 shrink-0' aria-hidden='true' />
              Please choose a reason to continue.
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <label htmlFor={explanationId} className='block text-sm font-semibold'>
            Anything else you&apos;d like to share?{' '}
            <span className='text-muted-foreground text-xs font-normal'>(optional)</span>
          </label>
          <Textarea
            id={explanationId}
            value={explanation}
            onChange={event => setExplanation(event.target.value)}
            maxLength={EXPLANATION_MAX_LENGTH}
            rows={2}
            aria-describedby={explanationHintId}
            placeholder={placeholder}
            className={cn(
              'min-h-[4.5rem] resize-y',
              'focus-visible:border-koyo-color-brand-500 focus-visible:ring-[color-mix(in_oklab,var(--koyo-color-brand-500)_25%,transparent)]',
              clearOfActionBar
            )}
          />
          <div id={explanationHintId} className='text-muted-foreground flex items-start justify-between gap-4 text-xs'>
            <p>This helps us understand what went wrong. Your new link doesn&apos;t depend on it.</p>
            <span className='shrink-0 tabular-nums'>
              {explanation.length}/{EXPLANATION_MAX_LENGTH}
            </span>
          </div>
        </div>
      </fieldset>

      {interview.kind === 'coding' && handheld && (
        <Callout tone='info' icon={LaptopIcon} title='You’ll need a laptop or desktop.'>
          Coding interviews don&apos;t work on phones. You can request the link here, but open it on a computer with
          Chrome within {interview.freshLinkValidityHours} hours.
        </Callout>
      )}

      {/* Pinned to the bottom of the screen on phones, so the action is always in reach. */}
      <div className='bg-background/95 space-y-3 max-md:sticky max-md:bottom-0 max-md:z-10 max-md:-mx-4 max-md:border-t max-md:px-4 max-md:pt-3 max-md:pb-[calc(0.75rem+env(safe-area-inset-bottom))] max-md:backdrop-blur-md sm:max-md:-mx-6 sm:max-md:px-6 md:bg-transparent'>
        {!online && (
          <Callout tone='neutral' icon={WifiOffIcon} title='You’re offline.' role='alert'>
            Reconnect to the internet to get your new link. Your answers on this page are kept.
          </Callout>
        )}

        {failure && online && (
          <Callout tone='danger' icon={CircleAlertIcon} title={failureCopy[failure].title} role='alert'>
            {failureCopy[failure].body}
          </Callout>
        )}

        <Button
          type='submit'
          variant='blue'
          size='xl'
          aria-disabled={blocked || undefined}
          className={cn(primaryAction, 'aria-disabled:cursor-not-allowed aria-disabled:opacity-70')}
        >
          {submitting ? (
            <>
              <Spinner aria-hidden='true' role='presentation' className='size-5' />
              Getting your new link…
            </>
          ) : (
            <>
              Get new interview link
              <ArrowRightIcon aria-hidden='true' className='size-5' />
            </>
          )}
        </Button>
      </div>

      <p role='status' className='sr-only'>
        {submitting ? 'Getting your new link. Please keep this page open.' : ''}
      </p>

      <p className='text-muted-foreground -mt-3 text-center text-xs leading-relaxed text-balance max-md:mt-0'>
        One-time request · valid for {interview.freshLinkValidityHours} hours · takes about{' '}
        {formatDuration(interview.durationMinutes)} · needs a stable internet connection
      </p>
    </form>
  )
}

export default RescheduleForm
