'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusinessIcon,
  CalendarClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeXmlIcon,
  InfoIcon,
  LightbulbIcon,
  MailIcon,
  MessageCircleIcon
} from 'lucide-react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import { Label } from '@newtonschool/koyo-ui/label'
import { Switch } from '@newtonschool/koyo-ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@newtonschool/koyo-ui/toggle-group'

// Util Imports
import { cn } from '@/lib/utils'

import type { ExampleKind, MessageId } from './message-templates'
import { WHATSAPP_BODY_LIMIT, examples, getMessageChecks, messageOrder, messages } from './message-templates'
import type { TextContext } from './rich-text'
import { KoyoLogo } from './koyo-logo'
import { MessagePicker, MessageTimeline, ProposedBadge } from './message-sequence'
import MessageMeta, { TimingBadge } from './message-meta'
import WhatsAppPreview from './whatsapp-preview'
import EmailPreview from './email-preview'

const PANEL_ID = 'message-panel'

const isMessageId = (value: string | null): value is MessageId => messageOrder.some(id => id === value)

const Note = ({ tone, icon: Icon, children }: { tone: 'info' | 'warning'; icon: LucideIcon; children: ReactNode }) => (
  <div
    className={cn(
      'flex gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed',
      tone === 'info'
        ? 'border-koyo-color-brand-100 bg-koyo-color-brand-0/70 text-koyo-color-brand-900 dark:border-koyo-color-brand-800 dark:bg-koyo-color-brand-900/30 dark:text-koyo-color-brand-0'
        : 'border-koyo-color-amber-orange-200 bg-koyo-color-amber-orange-0/80 text-koyo-color-amber-orange-900 dark:border-koyo-color-amber-orange-800 dark:bg-koyo-color-amber-orange-900/30 dark:text-koyo-color-amber-orange-0'
    )}
  >
    <Icon
      className={cn(
        'mt-0.5 size-4 shrink-0',
        tone === 'info'
          ? 'text-koyo-color-brand-600 dark:text-koyo-color-brand-300'
          : 'text-koyo-color-amber-orange-600 dark:text-koyo-color-amber-orange-300'
      )}
      aria-hidden='true'
    />
    <p>{children}</p>
  </div>
)

const PreviewLabel = ({
  id,
  icon: Icon,
  title,
  meta
}: {
  id: string
  icon: LucideIcon
  title: string
  meta: string
}) => (
  <div className='flex items-center justify-between gap-3'>
    <h3 id={id} className='flex items-center gap-2 text-sm font-semibold'>
      <span className='bg-muted text-muted-foreground grid size-7 place-items-center rounded-md' aria-hidden='true'>
        <Icon className='size-4' />
      </span>
      {title}
    </h3>
    <p className='text-muted-foreground text-xs tabular-nums'>{meta}</p>
  </div>
)

const Legend = () => (
  <section aria-labelledby='legend-title' className='bg-muted/40 space-y-3 rounded-xl border p-4'>
    <h2 id='legend-title' className='text-xs font-semibold tracking-wide uppercase'>
      Timing rules
    </h2>
    <ul className='text-muted-foreground space-y-2.5 text-xs leading-relaxed'>
      <li className='space-y-1'>
        <TimingBadge timing='sane-hours' compact className='px-1.5 text-[11px]' />
        <p>Rescheduling invitation, follow-up and final expiry wait for 9 AM–8 PM IST (§5.2).</p>
      </li>
      <li className='space-y-1'>
        <TimingBadge timing='campaign' compact className='px-1.5 text-[11px]' />
        <p>Original and fresh-link reminders go out at the campaign&apos;s set times, day or night (§5.1, §5.3).</p>
      </li>
    </ul>
  </section>
)

/**
 * Review page for every candidate message on the AI-interview rescheduling path, rendered as
 * WhatsApp and email previews with the PRD timing, cancellation and length rules alongside.
 */
const InterviewRescheduleMessages = () => {
  // States
  const [selectedId, setSelectedId] = useState<MessageId>('d1')
  const [kind, setKind] = useState<ExampleKind>('operational')
  const [showVariables, setShowVariables] = useState(false)
  const [urlReady, setUrlReady] = useState(false)

  // Refs
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Deep links such as `?message=d6&kind=coding&vars=1` open a specific message.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const message = params.get('message')
    const kindParam = params.get('kind')

    if (isMessageId(message)) setSelectedId(message)
    if (kindParam === 'operational' || kindParam === 'coding') setKind(kindParam)
    if (params.get('vars') === '1') setShowVariables(true)
    setUrlReady(true)
  }, [])

  // Keep the URL in sync so a reviewer can share exactly what they are looking at.
  useEffect(() => {
    if (!urlReady) return

    const params = new URLSearchParams(window.location.search)

    params.set('message', selectedId)
    params.set('kind', kind)

    if (showVariables) params.set('vars', '1')
    else params.delete('vars')

    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`)
  }, [urlReady, selectedId, kind, showVariables])

  // The sequence is taller than the viewport, so the sticky sidebar scrolls on its own. Keep the
  // selected message in view there (deep links, previous/next) without moving the page.
  useEffect(() => {
    // Wait for the deep link, so the default D1 does not scroll the sidebar first.
    if (!urlReady) return

    const scroller = sidebarRef.current
    const item = scroller?.querySelector<HTMLElement>('[aria-current="true"]')

    if (!scroller || !item) return

    const view = scroller.getBoundingClientRect()
    const rect = item.getBoundingClientRect()
    const visibleBottom = Math.min(view.bottom, window.innerHeight)

    if (rect.top < view.top) scroller.scrollTop -= view.top - rect.top + 8
    else if (rect.bottom > visibleBottom) scroller.scrollTop += rect.bottom - visibleBottom + 8
  }, [urlReady, selectedId])

  const message = messages[selectedId]
  const example = examples[kind]
  const context: TextContext = { values: example.values, showVariables }
  const checks = getMessageChecks(message, example)
  const index = messageOrder.indexOf(selectedId)
  const previous = index > 0 ? messages[messageOrder[index - 1]] : null
  const next = index < messageOrder.length - 1 ? messages[messageOrder[index + 1]] : null
  const isExampleTiming = message.timing === 'campaign' || message.id === 'd2'

  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <header className='bg-background/85 sticky top-0 z-20 border-b backdrop-blur-md'>
        <div className='mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-3'>
            <KoyoLogo />
            <span className='bg-border hidden h-6 w-px sm:block' aria-hidden='true' />
            <span className='text-muted-foreground hidden text-sm font-medium sm:block'>AI Interviews</span>
          </div>
          <Badge variant='outline' shape='round' className='text-muted-foreground h-7 px-3'>
            Message review
          </Badge>
        </div>
      </header>

      <main className='flex-1'>
        <div className='mx-auto max-w-[1360px] space-y-8 px-4 py-8 sm:px-6 sm:py-10 lg:space-y-10 lg:px-8 lg:py-12'>
          {/* Title + controls */}
          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl space-y-2.5'>
              <p className='text-koyo-brand text-sm font-medium'>Reminders & rescheduling · Candidate messages</p>
              <h1 className='text-2xl font-semibold tracking-tight sm:text-3xl'>Rescheduling messages</h1>
              <p className='text-muted-foreground text-base leading-relaxed'>
                Every WhatsApp and email message a candidate can get while they have not started an AI interview: the
                original-link reminders, the one-time reschedule and the final expiry. In send order, with the PRD
                timing and cancellation rules next to the copy.
              </p>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6'>
              <div className='space-y-2'>
                <p id='example-label' className='text-muted-foreground text-xs font-medium'>
                  Example candidate
                </p>
                <ToggleGroup
                  type='single'
                  variant='outline'
                  aria-labelledby='example-label'
                  value={kind}
                  onValueChange={value => value && setKind(value as ExampleKind)}
                  className='bg-background w-full sm:w-auto'
                >
                  <ToggleGroupItem value='operational' className='h-10 flex-1 px-3.5 sm:flex-none'>
                    <BriefcaseBusinessIcon aria-hidden='true' />
                    Operational<span className='text-muted-foreground -ml-1 hidden sm:inline'> · Urban Company</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value='coding' className='h-10 flex-1 px-3.5 sm:flex-none'>
                    <CodeXmlIcon aria-hidden='true' />
                    Coding<span className='text-muted-foreground -ml-1 hidden sm:inline'> · Lumen Labs</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className='flex h-10 items-center gap-2.5'>
                <Switch
                  id='show-variables'
                  checked={showVariables}
                  onCheckedChange={setShowVariables}
                  aria-describedby='show-variables-hint'
                />
                <Label htmlFor='show-variables' className='cursor-pointer whitespace-nowrap'>
                  Show variables
                </Label>
                <span id='show-variables-hint' className='sr-only'>
                  Swaps the example values for highlighted template variables.
                </span>
              </div>
            </div>
          </div>

          <div className='grid gap-8 lg:grid-cols-[296px_minmax(0,1fr)] xl:gap-10'>
            <aside className='hidden lg:block'>
              <div className='sticky top-24 flex max-h-[calc(100dvh-7rem)] flex-col gap-4'>
                <p className='text-muted-foreground px-3 text-xs font-semibold tracking-wide uppercase'>
                  Send sequence
                </p>
                <div
                  ref={sidebarRef}
                  className='-mx-1 -mt-3 min-h-0 space-y-5 overflow-y-auto overscroll-contain [mask-image:linear-gradient(to_bottom,transparent,#000_12px,#000_calc(100%-12px),transparent)] px-1 py-3'
                >
                  <MessageTimeline selectedId={selectedId} onSelect={setSelectedId} panelId={PANEL_ID} />
                  <Legend />
                </div>
              </div>
            </aside>

            <div className='lg:hidden'>
              <MessagePicker selectedId={selectedId} onSelect={setSelectedId} panelId={PANEL_ID} />
            </div>

            <section id={PANEL_ID} aria-labelledby='message-title' className='min-w-0 space-y-8'>
              {/* Message header */}
              <div className='space-y-4'>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <Badge variant='outline' shape='round' className='h-7 px-2.5 font-mono'>
                      {message.code}
                    </Badge>
                    <span className='text-muted-foreground text-sm'>
                      Message {index + 1} of {messageOrder.length}
                    </span>
                    {message.status === 'proposed' ? (
                      <ProposedBadge long className='h-7 px-2.5' />
                    ) : (
                      <Badge
                        variant='outline'
                        shape='round'
                        className='border-koyo-brand/30 bg-koyo-brand/10 text-koyo-brand h-7 px-2.5'
                      >
                        PRD Appendix A
                      </Badge>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      aria-disabled={!previous}
                      onClick={() => previous && setSelectedId(previous.id)}
                      className='aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                      aria-label={previous ? `Previous message: ${previous.name}` : 'No previous message'}
                      aria-controls={PANEL_ID}
                    >
                      <ChevronLeftIcon aria-hidden='true' />
                    </Button>
                    <Button
                      variant='outline'
                      size='icon'
                      aria-disabled={!next}
                      onClick={() => next && setSelectedId(next.id)}
                      className='aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                      aria-label={next ? `Next message: ${next.name}` : 'No next message'}
                      aria-controls={PANEL_ID}
                    >
                      <ChevronRightIcon aria-hidden='true' />
                    </Button>
                  </div>
                </div>

                <div className='space-y-2'>
                  <h2
                    id='message-title'
                    aria-live='polite'
                    className='text-2xl font-semibold tracking-tight sm:text-[1.75rem]'
                  >
                    {message.name}
                  </h2>
                  <p className='text-muted-foreground max-w-3xl text-base leading-relaxed'>{message.summary}</p>
                </div>

                <div className='flex flex-wrap items-center gap-2'>
                  <Badge variant='outline' shape='round' className='bg-background h-7 gap-1.5 px-2.5'>
                    <CalendarClockIcon aria-hidden='true' className='text-muted-foreground' />
                    <time dateTime={message.send.iso}>{message.send.full}</time>
                  </Badge>
                  <TimingBadge timing={message.timing} className='h-7 gap-1.5 px-2.5' />
                  {isExampleTiming && (
                    <Badge variant='secondary' shape='round' className='h-7 px-2.5'>
                      Example campaign timing
                    </Badge>
                  )}
                </div>

                {message.status === 'proposed' && (
                  <Note tone='warning' icon={LightbulbIcon}>
                    <span className='font-semibold'>Proposed, not in PRD.</span> Appendix A sends nothing when the fresh
                    link is created, and reminder 1 may arrive hours later. This message puts the link in writing right
                    away. Needs a product decision before build.
                  </Note>
                )}
                {message.scenarioNote && (
                  <Note tone='info' icon={InfoIcon}>
                    {message.scenarioNote}
                  </Note>
                )}
              </div>

              {/* Previews */}
              <div className='grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)] xl:items-start'>
                <section aria-labelledby='whatsapp-title' className='space-y-3 xl:sticky xl:top-24'>
                  <PreviewLabel
                    id='whatsapp-title'
                    icon={MessageCircleIcon}
                    title='WhatsApp'
                    meta={`${checks.length} / ${WHATSAPP_BODY_LIMIT} characters`}
                  />
                  <WhatsAppPreview message={message} context={context} />
                </section>
                <section aria-labelledby='email-title' className='min-w-0 space-y-3'>
                  <PreviewLabel
                    id='email-title'
                    icon={MailIcon}
                    title='Email'
                    meta={message.email.button ? 'With button and plain-text link' : 'No button'}
                  />
                  <EmailPreview message={message} example={example} context={context} />
                </section>
              </div>

              <MessageMeta message={message} example={example} />
            </section>
          </div>
        </div>
      </main>

      <footer className='border-t'>
        <div className='text-muted-foreground mx-auto flex max-w-[1360px] flex-col gap-1 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p>Internal review page. Example people, companies and contacts are fictional.</p>
          <p>Koyo AI Interviews · All times in IST (UTC+5:30)</p>
        </div>
      </footer>
    </div>
  )
}

export default InterviewRescheduleMessages
