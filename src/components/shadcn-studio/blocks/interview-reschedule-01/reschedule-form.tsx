'use client'

// React Imports
import type { FormEvent } from 'react'
import { useId, useRef, useState } from 'react'

// Third-party Imports
import { CircleAlertIcon, LaptopIcon, ShieldAlertIcon, WifiOffIcon } from 'lucide-react'

// Component Imports
import { Button } from '@newtonschool/koyo-ui/button'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle
} from '@newtonschool/koyo-ui/field'
import { RadioGroup, RadioGroupItem } from '@newtonschool/koyo-ui/radio-group'
import { Spinner } from '@newtonschool/koyo-ui/spinner'
import { Textarea } from '@newtonschool/koyo-ui/textarea'

// Util Imports
import { cn } from '@/lib/utils'

import type { InterviewDetails, ReasonId } from './reschedule-data'
import { EXPLANATION_MAX_LENGTH, formatDuration, formatDurationAdjective, reasons } from './reschedule-data'
import { useIsHandheld, useOnline } from './reschedule-hooks'
import { brandAction, Callout } from './reschedule-ui'

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
    title: 'We couldn’t create your new link',
    body: 'Something went wrong on our side. Your one-time request hasn’t been used, so please try again.'
  },
  'unknown-outcome': {
    title: 'We couldn’t confirm your request',
    body: 'Check your internet connection and try again. If your new link was already created, we’ll show it to you — you won’t get a second one.'
  }
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
  const legendId = `${id}-reason-legend`
  const reasonErrorId = `${id}-reason-error`
  const explanationId = `${id}-explanation`
  const explanationHintId = `${id}-explanation-hint`
  const blocked = submitting || !online

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
    <form noValidate onSubmit={handleSubmit} className='space-y-8'>
      <fieldset disabled={submitting} className='space-y-8'>
        <FieldSet>
          <div>
            <FieldLegend id={legendId} className='mb-1 text-lg font-semibold'>
              Why did you miss your interview?
            </FieldLegend>
            <FieldDescription>
              Choose the option that fits best. <span className='text-foreground font-medium'>Required</span>
            </FieldDescription>
          </div>

          <RadioGroup
            ref={reasonGroupRef}
            value={reason}
            onValueChange={value => {
              setReason(value as ReasonId)
              setShowReasonError(false)
            }}
            aria-labelledby={legendId}
            aria-required='true'
            aria-invalid={showReasonError || undefined}
            aria-describedby={showReasonError ? reasonErrorId : undefined}
            className='grid gap-3 sm:grid-cols-2 [&_[role=radio]]:scroll-mt-28'
          >
            {reasons.map(option => (
              <FieldLabel
                key={option.id}
                htmlFor={`${id}-${option.id}`}
                className={cn(
                  'bg-card hover:border-koyo-brand/50 cursor-pointer rounded-xl! transition-[color,box-shadow,border-color]',
                  'has-[[role=radio]:focus-visible]:border-koyo-brand has-[[role=radio]:focus-visible]:ring-koyo-brand-ring has-[[role=radio]:focus-visible]:ring-[3px]',
                  'has-[[role=radio]:disabled]:hover:border-border has-[[role=radio]:disabled]:cursor-not-allowed has-[[role=radio]:disabled]:opacity-60',
                  option.id === 'other' && 'sm:col-span-2',
                  showReasonError && 'border-destructive/60'
                )}
              >
                <Field orientation='horizontal' className='items-start gap-3'>
                  <span
                    className='bg-muted text-muted-foreground group-has-data-[state=checked]/field-label:bg-koyo-brand/10 group-has-data-[state=checked]/field-label:text-koyo-brand grid size-9 shrink-0 place-items-center rounded-lg transition-colors'
                    aria-hidden='true'
                  >
                    <option.icon className='size-4.5' />
                  </span>
                  <FieldContent>
                    <FieldTitle id={`${id}-${option.id}-label`} className='text-sm leading-snug'>
                      {option.label}
                    </FieldTitle>
                    <FieldDescription id={`${id}-${option.id}-hint`} className='text-[13px]'>
                      {option.hint}
                    </FieldDescription>
                  </FieldContent>
                  {/* Named explicitly: the Field wrapper is role="group", which stops Chrome deriving a name from the label. */}
                  <RadioGroupItem
                    value={option.id}
                    id={`${id}-${option.id}`}
                    aria-labelledby={`${id}-${option.id}-label`}
                    aria-describedby={`${id}-${option.id}-hint`}
                    className='border-muted-foreground mt-0.5'
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>

          {showReasonError && (
            <FieldError id={reasonErrorId} className='flex items-center gap-1.5'>
              <CircleAlertIcon className='size-4 shrink-0' aria-hidden='true' />
              Please choose a reason to continue.
            </FieldError>
          )}
        </FieldSet>

        <Field>
          <FieldLabel htmlFor={explanationId} className='text-base font-semibold'>
            Anything else you&apos;d like to share?
            <span className='text-muted-foreground text-sm font-normal'>(optional)</span>
          </FieldLabel>
          <Textarea
            id={explanationId}
            value={explanation}
            onChange={event => setExplanation(event.target.value)}
            maxLength={EXPLANATION_MAX_LENGTH}
            rows={3}
            aria-describedby={explanationHintId}
            placeholder='For example: I was travelling and didn’t have my laptop with me.'
            className='min-h-24 resize-y scroll-mt-28'
          />
          <div id={explanationHintId} className='flex items-start justify-between gap-4'>
            <FieldDescription>
              This helps us understand what went wrong. Your new link doesn&apos;t depend on it.
            </FieldDescription>
            <span className='text-muted-foreground shrink-0 text-xs tabular-nums'>
              {explanation.length}/{EXPLANATION_MAX_LENGTH}
            </span>
          </div>
        </Field>
      </fieldset>

      <div className='space-y-4'>
        {interview.kind === 'coding' && handheld && (
          <Callout tone='info' icon={LaptopIcon} title='You’ll need a laptop or desktop for this interview'>
            Coding interviews don&apos;t work on phones. You can request the link here, but make sure you can open it on
            a computer with Chrome within {interview.freshLinkValidityHours} hours.
          </Callout>
        )}

        <Callout tone='warning' icon={ShieldAlertIcon} title='This is a one-time request'>
          You can get a new link only once for this interview, and it can&apos;t be rescheduled again. Your{' '}
          {interview.freshLinkValidityHours} hours start the moment you tap Get New Interview Link, so ask for it when
          you can take the {formatDurationAdjective(interview.durationMinutes)} interview within that time.
        </Callout>

        {!online && (
          <Callout tone='neutral' icon={WifiOffIcon} title='You’re offline' role='alert'>
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
          variant='brand'
          size='xl'
          aria-disabled={blocked || undefined}
          className={cn(
            brandAction,
            'w-full scroll-mt-28 text-base aria-disabled:cursor-not-allowed aria-disabled:opacity-70'
          )}
        >
          {submitting ? (
            <>
              <Spinner aria-hidden='true' role='presentation' className='size-5' />
              Getting your new link…
            </>
          ) : (
            'Get New Interview Link'
          )}
        </Button>

        <p role='status' className='sr-only'>
          {submitting ? 'Getting your new link. Please keep this page open.' : ''}
        </p>

        <div className='text-muted-foreground space-y-1 text-center text-xs leading-relaxed text-balance sm:text-sm'>
          <p>
            <span className='text-foreground font-medium'>
              One-time request · valid only for {interview.freshLinkValidityHours} hours.
            </span>{' '}
            Before you start, make sure you have a stable internet connection and about{' '}
            {formatDuration(interview.durationMinutes)} free.
          </p>
          <p className='text-xs'>
            Not {interview.candidateFirstName}? Please don&apos;t use this link — contact the hiring team instead.
          </p>
        </div>
      </div>
    </form>
  )
}

export default RescheduleForm
