// React Imports
import { Fragment } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import { CalendarXIcon, LinkIcon, MailIcon, MessageCircleIcon, SendIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Label } from '@newtonschool/koyo-ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@newtonschool/koyo-ui/select'

// Util Imports
import { cn } from '@/lib/utils'

import type { MessageId, SequenceEvent, SequenceEventId } from './message-templates'
import { messages, messagesIn, sequence } from './message-templates'
import { TimingBadge } from './message-meta'

type Props = {
  selectedId: MessageId
  onSelect: (id: MessageId) => void
  panelId: string
}

const eventIcons: Record<SequenceEventId, LucideIcon> = {
  'original-invited': SendIcon,
  'original-expired': CalendarXIcon,
  'form-submitted': LinkIcon
}

export const ProposedBadge = ({ className, long }: { className?: string; long?: boolean }) => (
  <Badge
    variant='outline'
    shape='round'
    className={cn(
      'border-koyo-color-amber-orange-300 bg-koyo-color-amber-orange-0 text-koyo-color-amber-orange-800 dark:border-koyo-color-amber-orange-700 dark:bg-koyo-color-amber-orange-900/40 dark:text-koyo-color-amber-orange-200 border-dashed',
      className
    )}
  >
    {long ? 'Proposed — not in PRD' : 'Proposed'}
  </Badge>
)

const EventItem = ({ event }: { event: SequenceEvent }) => {
  const Icon = eventIcons[event.id]

  return (
    <li className='relative flex gap-3 px-3 py-3'>
      <span
        className='bg-background text-muted-foreground z-1 grid size-7 shrink-0 place-items-center rounded-full border border-dashed'
        aria-hidden='true'
      >
        <Icon className='size-3.5' />
      </span>
      <div className='min-w-0 space-y-0.5 pt-0.5'>
        <p className='text-muted-foreground text-xs font-semibold tracking-wide uppercase'>Event</p>
        <p className='text-sm leading-snug font-medium'>{event.title}</p>
        <p className='text-muted-foreground text-xs leading-relaxed'>
          <time dateTime={event.time.iso}>{event.time.short}</time> · {event.description}
        </p>
      </div>
    </li>
  )
}

const MessageItem = ({ id, selectedId, onSelect, panelId }: Props & { id: MessageId }) => {
  const message = messages[id]
  const selected = id === selectedId

  return (
    <li className='relative'>
      <button
        type='button'
        onClick={() => onSelect(id)}
        aria-current={selected ? 'true' : undefined}
        aria-controls={panelId}
        className={cn(
          'group focus-visible:ring-koyo-brand-ring flex w-full gap-3 rounded-xl border px-3 py-3 text-left transition-colors outline-none focus-visible:ring-[3px]',
          selected
            ? 'border-koyo-brand/40 bg-koyo-brand/10 dark:bg-koyo-brand/15'
            : 'hover:bg-muted/70 border-transparent'
        )}
      >
        <span
          className={cn(
            'z-1 grid size-7 shrink-0 place-items-center rounded-full border text-[11px] font-semibold tabular-nums transition-colors',
            selected
              ? 'border-koyo-brand bg-koyo-brand text-white'
              : 'bg-background text-foreground group-hover:border-koyo-brand/50',
            message.status === 'proposed' && !selected && 'border-dashed'
          )}
          aria-hidden='true'
        >
          {message.code}
        </span>
        <span className='min-w-0 flex-1 space-y-1.5'>
          <span className='flex items-start justify-between gap-2'>
            <span className='text-sm leading-snug font-medium'>
              <span className='sr-only'>{message.code}: </span>
              {message.name}
            </span>
            <span className='text-muted-foreground mt-0.5 flex shrink-0 items-center gap-1' aria-hidden='true'>
              <MessageCircleIcon className='size-3.5' />
              <MailIcon className='size-3.5' />
            </span>
          </span>
          <span className='text-muted-foreground block text-xs'>
            <time dateTime={message.send.iso}>{message.send.short}</time>
          </span>
          <span className='flex flex-wrap gap-1.5'>
            <TimingBadge timing={message.timing} compact className='px-1.5 text-[11px]' />
            {message.status === 'proposed' && <ProposedBadge className='px-1.5 text-[11px]' />}
          </span>
          <span className='sr-only'>WhatsApp and email.</span>
        </span>
      </button>
    </li>
  )
}

/** Desktop: vertical timeline of events and selectable messages, split at the original-link expiry. */
export const MessageTimeline = (props: Props) => {
  return (
    <nav aria-label='Message sequence' className='space-y-5'>
      {sequence.map(group => {
        const labelId = `sequence-${group.id}`

        return (
          <div key={group.id} className='space-y-1'>
            <p id={labelId} className='flex items-center gap-2 px-3 text-xs'>
              <span className='font-semibold'>{group.label}</span>
              <span className='text-muted-foreground'>· {group.description}</span>
              <span className='bg-border h-px min-w-4 flex-1' aria-hidden='true' />
            </p>
            <ol aria-labelledby={labelId} className='relative space-y-1'>
              <span className='bg-border absolute top-5 bottom-5 left-[25px] w-px' aria-hidden='true' />
              {group.items.map(item =>
                item.type === 'event' ? (
                  <EventItem key={item.id} event={item} />
                ) : (
                  <MessageItem key={item.id} id={item.id} {...props} />
                )
              )}
            </ol>
          </div>
        )
      })}
    </nav>
  )
}

/** Mobile/tablet: the same sequence as a select, grouped before and after the original-link expiry. */
export const MessagePicker = ({ selectedId, onSelect, panelId }: Props) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor='message-picker' className='text-sm'>
        Message
      </Label>
      <Select value={selectedId} onValueChange={value => onSelect(value as MessageId)}>
        <SelectTrigger id='message-picker' aria-controls={panelId} className='h-11 w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sequence.map((group, groupIndex) => (
            <Fragment key={group.id}>
              {groupIndex > 0 && <SelectSeparator />}
              <SelectGroup>
                <SelectLabel>
                  {group.label} · {group.description}
                </SelectLabel>
                {messagesIn(group).map(id => (
                  <SelectItem key={id} value={id}>
                    <span className='text-muted-foreground font-mono text-xs'>{messages[id].code}</span>
                    {messages[id].name}
                    {messages[id].status === 'proposed' && (
                      <span className='text-muted-foreground text-xs'>(proposed)</span>
                    )}
                  </SelectItem>
                ))}
              </SelectGroup>
            </Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
