'use client'

// React Imports
import { useCallback, useEffect, useRef, useState } from 'react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Skeleton } from '@newtonschool/koyo-ui/skeleton'

// Util Imports
import { cn } from '@/lib/utils'

import type { MockOptions, PrototypeScenario, RescheduleApi, RescheduleStatus } from './reschedule-data'
import { createMockRescheduleApi, formatIST, platformSupport, prototypeScenarios } from './reschedule-data'
import { brandText, RescheduleFooter, RescheduleHeader } from './reschedule-ui'
import { BeforeYouStart, NeedHelp, WhatHappensNext } from './reschedule-sidebar'
import type { RescheduleFormValues, SubmitFailure } from './reschedule-form'
import RescheduleForm from './reschedule-form'
import FreshLinkView from './fresh-link-view'
import { LoadErrorView, StatusView } from './status-view'
import InterviewSummary from './interview-summary'
import PrototypeControls from './prototype-controls'

type View =
  | { phase: 'loading' }
  | { phase: 'load-error' }
  | { phase: 'ready'; status: RescheduleStatus; justIssued?: boolean; alreadyUsedNotice?: boolean }

const createIdempotencyKey = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`

type PendingRequest = RescheduleFormValues & { idempotencyKey: string }

/** Compares two statuses while ignoring the server clock stamp, which changes on every response. */
const sameStatus = (a: RescheduleStatus, b: RescheduleStatus) =>
  JSON.stringify({ ...a, serverTime: undefined }) === JSON.stringify({ ...b, serverTime: undefined })

const LoadingView = () => (
  <div className='space-y-8' aria-hidden='true'>
    <div className='space-y-3'>
      <Skeleton className='h-5 w-32' />
      <Skeleton className='h-9 w-3/4' />
      <Skeleton className='h-5 w-full' />
    </div>
    <Skeleton className='h-36 w-full rounded-xl' />
    <div className='grid gap-3 sm:grid-cols-2'>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className='h-20 rounded-xl' />
      ))}
    </div>
    <Skeleton className='h-12 w-full' />
  </div>
)

/**
 * Candidate-facing rescheduling page for AI interviews. One page renders every state from the
 * PRD (§7): the reason form, the fresh-link confirmation and the shared status screens.
 * Pass an `api` backed by the platform's reschedule endpoints in production. Keep `api` stable
 * (create it once or memoise it): a new `api` reloads the page and clears the form.
 */
export const InterviewReschedule = ({ api }: { api: RescheduleApi }) => {
  // States
  const [view, setView] = useState<View>({ phase: 'loading' })
  const [clockOffset, setClockOffset] = useState(0)
  const [recheckedDeadline, setRecheckedDeadline] = useState<string | null>(null)

  // Refs
  const headingRef = useRef<HTMLHeadingElement>(null)
  const focusHeadingRef = useRef(false)
  const submittingRef = useRef(false)
  const phaseRef = useRef<View['phase']>('loading')

  // Every load, refresh and submit takes a ticket; only the latest one may update the view, so a slow
  // response can never take the page back to an older state (PRD §11: late or out-of-order status).
  const ticketRef = useRef(0)

  // The request awaiting an answer. While its outcome is unknown, retries resend it unchanged with the
  // same idempotency key, so the server can recognise it (PRD FR-09). A definite answer clears it.
  const pendingRequestRef = useRef<PendingRequest | null>(null)

  useEffect(() => {
    phaseRef.current = view.phase
  }, [view.phase])

  const showView = useCallback((next: View, { moveFocus = true } = {}) => {
    if (next.phase === 'ready' && next.status.serverTime) {
      setClockOffset(new Date(next.status.serverTime).getTime() - Date.now())
    }

    focusHeadingRef.current = moveFocus
    setView(next)
  }, [])

  const load = useCallback(
    async ({ moveFocus = false } = {}) => {
      const ticket = ++ticketRef.current

      phaseRef.current = 'loading'
      setView({ phase: 'loading' })

      try {
        const next = await api.getStatus()

        if (ticket === ticketRef.current) showView({ phase: 'ready', status: next }, { moveFocus })
      } catch {
        if (ticket === ticketRef.current) showView({ phase: 'load-error' }, { moveFocus })
      }
    },
    [api, showView]
  )

  useEffect(() => {
    load()
  }, [load])

  // Re-check quietly when the candidate comes back to the tab (they may have used the link elsewhere).
  useEffect(() => {
    const refresh = async () => {
      // Never cut in on a load or a submit that is already running.
      if (document.visibilityState !== 'visible' || submittingRef.current || phaseRef.current !== 'ready') return

      const ticket = ++ticketRef.current

      try {
        const next = await api.getStatus()

        if (ticket !== ticketRef.current) return

        if (next.serverTime) setClockOffset(new Date(next.serverTime).getTime() - Date.now())

        setView(current => {
          if (current.phase === 'ready' && sameStatus(current.status, next)) return current
          focusHeadingRef.current = current.phase !== 'ready' || current.status.state !== next.state

          return { phase: 'ready', status: next }
        })
      } catch {
        // Keep what's on screen; the next visit or action will try again.
      }
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) refresh()
    }

    document.addEventListener('visibilitychange', refresh)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      document.removeEventListener('visibilitychange', refresh)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [api])

  // Keep the tab title in step with the screen, so the state is clear from the tab bar and to screen readers.
  useEffect(() => {
    const heading = headingRef.current?.textContent

    if (heading) document.title = `${heading} · Koyo AI Interviews`
  }, [view])

  // Move focus to the new heading after a state change so screen readers announce it.
  useEffect(() => {
    if (!focusHeadingRef.current || view.phase === 'loading') return
    focusHeadingRef.current = false

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
    headingRef.current?.focus({ preventScroll: true })
  }, [view])

  // When a deadline passes on screen, ask the server once. If it says the link still works (the device
  // clock was ahead), trust it and don't ask again for the same deadline.
  const handleDeadlinePassed = useCallback(
    (deadline: string) => {
      if (recheckedDeadline === deadline) return
      setRecheckedDeadline(deadline)
      load({ moveFocus: true })
    },
    [recheckedDeadline, load]
  )

  const submit = async (values: RescheduleFormValues): Promise<SubmitFailure | void> => {
    const ticket = ++ticketRef.current
    const isCurrent = () => ticket === ticketRef.current
    const request = pendingRequestRef.current ?? { ...values, idempotencyKey: createIdempotencyKey() }

    pendingRequestRef.current = request

    try {
      const result = await api.submit(request)

      if (!result.ok && result.code === 'temporary') {
        // Nothing was created, so the next attempt is a new request (and may carry a different reason).
        pendingRequestRef.current = null

        return 'temporary-error'
      }

      pendingRequestRef.current = null

      if (result.ok) {
        showView({ phase: 'ready', status: result.status, justIssued: true })

        return
      }

      showView({ phase: 'ready', status: result.status, alreadyUsedNotice: result.code === 'already-used' })
    } catch {
      // The request may or may not have reached the server. Re-check before deciding — never show a false success.
      try {
        const next = await api.getStatus()

        if (next.state === 'eligible') return 'temporary-error'

        pendingRequestRef.current = null

        if (isCurrent()) showView({ phase: 'ready', status: next, justIssued: next.state === 'fresh-link-active' })
      } catch {
        return 'unknown-outcome'
      }
    }
  }

  const handleSubmit = async (values: RescheduleFormValues) => {
    submittingRef.current = true

    try {
      return await submit(values)
    } finally {
      submittingRef.current = false
    }
  }

  const status = view.phase === 'ready' ? view.status : null
  const interview = status && status.state !== 'invalid-link' ? status.interview : null

  let main

  if (view.phase === 'loading') {
    main = <LoadingView />
  } else if (view.phase === 'load-error') {
    main = <LoadErrorView headingRef={headingRef} onRetry={() => load({ moveFocus: true })} />
  } else if (view.status.state === 'eligible') {
    main = (
      <div className='space-y-8'>
        <div className='space-y-3'>
          <Badge variant='outline' shape='round' className={cn('border-koyo-brand/30 bg-koyo-brand/10', brandText)}>
            One-time reschedule
          </Badge>
          <h1 ref={headingRef} tabIndex={-1} className='text-2xl font-semibold tracking-tight outline-none sm:text-3xl'>
            Reschedule your interview
          </h1>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Hi {view.status.interview.candidateFirstName}, your interview link expired on{' '}
            <span className='text-foreground font-medium'>
              {formatIST(view.status.interview.originalLinkExpiresAt)}
            </span>{' '}
            before you could start. Tell us what happened and we&apos;ll give you a new link right away.
          </p>
        </div>
        <InterviewSummary interview={view.status.interview} showLinkComparison />
        <RescheduleForm interview={view.status.interview} onSubmit={handleSubmit} />
      </div>
    )
  } else if (view.status.state === 'fresh-link-active') {
    main = (
      <FreshLinkView
        interview={view.status.interview}
        freshLink={view.status.freshLink}
        justIssued={!!view.justIssued}
        alreadyUsedNotice={view.alreadyUsedNotice}
        headingRef={headingRef}
        clockOffset={clockOffset}
        deadlineConfirmed={recheckedDeadline === view.status.freshLink.expiresAt}
        onDeadlinePassed={handleDeadlinePassed}
      />
    )
  } else {
    main = (
      <StatusView
        status={view.status}
        headingRef={headingRef}
        clockOffset={clockOffset}
        deadlineConfirmed={
          view.status.state === 'original-link-active' &&
          recheckedDeadline === view.status.interview.originalLinkExpiresAt
        }
        onDeadlinePassed={handleDeadlinePassed}
      />
    )
  }

  const showReadiness = !!status && ['eligible', 'fresh-link-active', 'original-link-active'].includes(status.state)

  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <RescheduleHeader helpHref='#help' />

      {/* Lives outside the swapped content so screen readers hear it every time the page reloads its status. */}
      <p role='status' className='sr-only'>
        {view.phase === 'loading' ? 'Loading your interview details…' : ''}
      </p>

      <main className='flex-1'>
        <div className='mx-auto grid max-w-6xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:gap-14 lg:px-8 lg:py-14'>
          <div className='min-w-0 lg:max-w-2xl'>{main}</div>

          <aside aria-label='Interview help' className='space-y-4'>
            {view.phase === 'loading' ? (
              <>
                <Skeleton className='h-80 rounded-xl' aria-hidden='true' />
                <Skeleton className='h-40 rounded-xl' aria-hidden='true' />
              </>
            ) : (
              <>
                {showReadiness && interview && <BeforeYouStart interview={interview} />}
                {status?.state === 'eligible' && (
                  <WhatHappensNext validityHours={status.interview.freshLinkValidityHours} />
                )}
                <NeedHelp
                  support={interview?.support ?? (status?.state === 'invalid-link' ? status.support : platformSupport)}
                />
              </>
            )}
          </aside>
        </div>
      </main>

      <RescheduleFooter />
    </div>
  )
}

const isScenario = (value: string | null): value is PrototypeScenario =>
  prototypeScenarios.some(scenario => scenario.value === value)

/** Remounting this (new `key`) gives the prototype a fresh mock backend. */
const MockedReschedule = ({
  scenario,
  kind,
  getNetwork
}: Pick<MockOptions, 'scenario' | 'kind'> & {
  getNetwork: () => Pick<MockOptions, 'failFirstSubmit' | 'latencyMs'>
}) => {
  const [api] = useState(() => createMockRescheduleApi({ scenario, kind }, getNetwork))

  return <InterviewReschedule api={api} />
}

/** Block preview: the page wired to a mock API plus controls for walking through every state. */
const InterviewRescheduleDemo = () => {
  // States
  const [options, setOptions] = useState<MockOptions>({
    scenario: 'eligible',
    kind: 'operational',
    failFirstSubmit: false,
    latencyMs: 900
  })

  const [run, setRun] = useState(0)

  // Refs
  const networkRef = useRef({ failFirstSubmit: options.failFirstSubmit, latencyMs: options.latencyMs })

  useEffect(() => {
    networkRef.current = { failFirstSubmit: options.failFirstSubmit, latencyMs: options.latencyMs }
  }, [options.failFirstSubmit, options.latencyMs])

  // Deep links such as `?state=final-link-expired&kind=coding` open a specific state.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const state = params.get('state')
    const kind = params.get('kind')

    setOptions(current => ({
      ...current,
      scenario: isScenario(state) ? state : current.scenario,
      kind: kind === 'coding' || kind === 'operational' ? kind : current.kind
    }))
  }, [])

  const getNetwork = useCallback(() => networkRef.current, [])

  return (
    <>
      <MockedReschedule
        key={`${run}-${options.scenario}-${options.kind}`}
        scenario={options.scenario}
        kind={options.kind}
        getNetwork={getNetwork}
      />
      <PrototypeControls options={options} onChange={setOptions} onRestart={() => setRun(current => current + 1)} />
    </>
  )
}

export default InterviewRescheduleDemo
