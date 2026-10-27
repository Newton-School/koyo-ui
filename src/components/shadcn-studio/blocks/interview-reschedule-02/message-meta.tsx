// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import { BanIcon, BookOpenIcon, CircleCheckIcon, CircleXIcon, ClockIcon, SunIcon, ZapIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Progress } from '@newtonschool/koyo-ui/progress'

// Util Imports
import { cn } from '@/lib/utils'

import type { Example, MessageTemplate, TimingRule } from './message-templates'
import {
  WHATSAPP_BODY_LIMIT,
  WHATSAPP_BUTTON_LIMIT,
  getMessageChecks,
  timingRules,
  variableLabels,
  variablesIn
} from './message-templates'
import { VariableChip } from './rich-text'

const timingStyles: Record<TimingRule, string> = {
  'sane-hours':
    'border-koyo-color-green-200 bg-koyo-color-green-0 text-koyo-color-green-800 dark:border-koyo-color-green-800 dark:bg-koyo-color-green-900/40 dark:text-koyo-color-green-200',
  campaign:
    'border-koyo-color-brand-200 bg-koyo-color-brand-0 text-koyo-color-brand-800 dark:border-koyo-color-brand-800 dark:bg-koyo-color-brand-900/40 dark:text-koyo-color-brand-200',
  immediate:
    'border-koyo-color-amber-orange-200 bg-koyo-color-amber-orange-0 text-koyo-color-amber-orange-800 dark:border-koyo-color-amber-orange-800 dark:bg-koyo-color-amber-orange-900/40 dark:text-koyo-color-amber-orange-200'
}

export const TimingBadge = ({
  timing,
  compact,
  className
}: {
  timing: TimingRule
  compact?: boolean
  className?: string
}) => {
  const rule = timingRules[timing]
  const Icon = timing === 'sane-hours' ? SunIcon : timing === 'campaign' ? ClockIcon : ZapIcon

  return (
    <Badge variant='outline' shape='round' className={cn(timingStyles[timing], 'font-medium', className)}>
      <Icon aria-hidden='true' />
      {compact ? rule.short : rule.label}
    </Badge>
  )
}

const preSendChecks = ['Interview-start status', 'Actual link expiry', 'Eligibility', 'Not already sent (FR-14)']

const Row = ({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) => (
  <div className='flex gap-3'>
    <span
      className='bg-koyo-brand/10 text-koyo-brand grid size-8 shrink-0 place-items-center rounded-lg'
      aria-hidden='true'
    >
      <Icon className='size-4' />
    </span>
    <div className='min-w-0 flex-1 space-y-1'>
      <dt className='text-muted-foreground text-xs font-medium tracking-wide uppercase'>{label}</dt>
      <dd className='text-sm leading-relaxed'>{children}</dd>
    </div>
  </div>
)

const Check = ({ ok, children }: { ok: boolean; children: ReactNode }) => (
  <li className='flex items-start gap-2 text-sm'>
    {ok ? (
      <CircleCheckIcon
        className='text-koyo-color-green-600 dark:text-koyo-color-green-300 mt-0.5 size-4 shrink-0'
        aria-hidden='true'
      />
    ) : (
      <CircleXIcon
        className='text-koyo-color-red-600 dark:text-koyo-color-red-300 mt-0.5 size-4 shrink-0'
        aria-hidden='true'
      />
    )}
    <span>
      <span className='sr-only'>{ok ? 'Pass: ' : 'Fail: '}</span>
      {children}
    </span>
  </li>
)

/** Rules for the selected message: trigger, timing, cancellation, PRD refs and WhatsApp limits. */
const MessageMeta = ({ message, example }: { message: MessageTemplate; example: Example }) => {
  const checks = getMessageChecks(message, example)
  const percent = Math.min(100, (checks.length / WHATSAPP_BODY_LIMIT) * 100)

  const variables = variablesIn(
    message.whatsapp.body,
    message.email.subject,
    message.email.preheader,
    message.email.heading,
    message.whatsapp.button ? `{{${message.whatsapp.button.url}}}` : ''
  )

  return (
    <section aria-labelledby='message-rules-title' className='bg-card rounded-xl border'>
      <div className='flex flex-wrap items-center justify-between gap-2 border-b px-5 py-4 sm:px-6'>
        <h3 id='message-rules-title' className='text-base font-semibold'>
          Rules for this message
        </h3>
        <p className='text-muted-foreground text-xs'>From PRD v1.0 · 26 Oct 2026</p>
      </div>

      <div className='grid gap-6 p-5 sm:p-6 md:grid-cols-2 md:gap-8'>
        <dl className='space-y-5'>
          <Row icon={ZapIcon} label='Trigger'>
            {message.trigger}
          </Row>
          <Row icon={ClockIcon} label='When it is sent'>
            <span className='mb-2 flex flex-wrap gap-1.5'>
              <TimingBadge timing={message.timing} />
            </span>
            <span className='block'>
              <time dateTime={message.send.iso} className='font-medium'>
                {message.send.full}
              </time>
              <span className='text-muted-foreground'> · {message.send.note}</span>
            </span>
          </Row>
          <Row icon={BanIcon} label={message.status === 'proposed' ? 'Status' : 'Cancelled or skipped when'}>
            {message.cancellation}
          </Row>
          <Row icon={BookOpenIcon} label='PRD references'>
            <span className='flex flex-wrap gap-1.5'>
              {message.prdRefs.map(ref => (
                <Badge key={ref} variant='secondary' className='font-mono text-[11px]'>
                  {ref}
                </Badge>
              ))}
            </span>
          </Row>
        </dl>

        <div className='space-y-4'>
          <div className='bg-muted/40 space-y-3 rounded-lg border p-4'>
            <div className='flex items-baseline justify-between gap-3'>
              <p className='text-sm font-medium'>WhatsApp body length</p>
              <p className='text-sm tabular-nums'>
                <span className='font-semibold'>{checks.length.toLocaleString('en-IN')}</span>
                <span className='text-muted-foreground'> / {WHATSAPP_BODY_LIMIT.toLocaleString('en-IN')}</span>
              </p>
            </div>
            <Progress
              value={percent}
              aria-label={`WhatsApp body uses ${checks.length} of ${WHATSAPP_BODY_LIMIT} characters`}
              className={cn(
                'bg-border h-1.5',
                !checks.withinLimit && '[&>[data-slot=progress-indicator]]:bg-koyo-color-red-500'
              )}
            />
            <p className='text-muted-foreground text-xs leading-relaxed'>
              Filled {example.shortLabel.toLowerCase()} example · {checks.remaining.toLocaleString('en-IN')} characters
              left · template with variables is {checks.templateLength.toLocaleString('en-IN')}
            </p>
            <ul className='space-y-1.5 pt-1'>
              <Check ok={checks.withinLimit}>Body is within the {WHATSAPP_BODY_LIMIT}-character limit</Check>
              {checks.buttonLength !== null && (
                <Check ok={checks.buttonWithinLimit}>
                  Button label is {checks.buttonLength}/{WHATSAPP_BUTTON_LIMIT} characters
                </Check>
              )}
              <Check ok={!checks.edgeVariable}>No variable at the very start or end</Check>
              {!message.whatsapp.button && <Check ok>No button: this message has no next step to offer</Check>}
            </ul>
          </div>

          <div className='space-y-3 rounded-lg border p-4'>
            <p className='text-sm font-medium'>Checked right before sending (FR-04)</p>
            <ul className='text-muted-foreground grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-2'>
              {preSendChecks.map(item => (
                <li key={item} className='flex items-center gap-2'>
                  <span className='bg-koyo-brand size-1.5 shrink-0 rounded-full' aria-hidden='true' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='space-y-3 border-t px-5 py-5 sm:px-6'>
        <div className='flex flex-wrap items-baseline justify-between gap-2'>
          <h4 className='text-sm font-semibold'>Variables in this message</h4>
          <p className='text-muted-foreground text-xs'>Values from the {example.shortLabel.toLowerCase()} example</p>
        </div>
        <ul className='grid gap-2 sm:grid-cols-2 xl:grid-cols-3'>
          {variables.map(name => (
            <li key={name} className='bg-muted/30 space-y-1.5 rounded-lg border px-3 py-2.5'>
              <div className='space-y-1'>
                <VariableChip name={name} className='text-xs' />
                <p className='text-muted-foreground text-xs'>{variableLabels[name]}</p>
              </div>
              <p className='text-sm leading-relaxed [overflow-wrap:anywhere]'>{example.values[name]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MessageMeta
