// Third-party Imports
import { CalendarXIcon, LinkIcon, MailIcon, MessageCircleIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Label } from '@newtonschool/koyo-ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@newtonschool/koyo-ui/select'

// Util Imports
import { cn } from '@/lib/utils'

import type { MessageId } from './message-templates'
import { messageOrder, messages, sequence } from './message-templates'
import { TimingBadge } from './message-meta'

type Props = {
  selectedId: MessageId
  onSelect: (id: MessageId) => void
  panelId: string
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

/** Desktop: vertical timeline of events and selectable messages. */
export const MessageTimeline = ({ selectedId, onSelect, panelId }: Props) => {
  return (
    <nav aria-label='Message sequence'>
      <ol className='relative space-y-1'>
        <span className='bg-border absolute top-5 bottom-5 left-[25px] w-px' aria-hidden='true' />
        {sequence.map(item => {
          if (item.type === 'event') {
            const Icon = item.id === 'original-expired' ? CalendarXIcon : LinkIcon

            return (
              <li key={item.id} className='relative flex gap-3 px-3 py-3'>
                <span
                  className='bg-background text-muted-foreground z-1 grid size-7 shrink-0 place-items-center rounded-full border border-dashed'
                  aria-hidden='true'
                >
                  <Icon className='size-3.5' />
                </span>
                <div className='min-w-0 space-y-0.5 pt-0.5'>
                  <p className='text-muted-foreground text-xs font-semibold tracking-wide uppercase'>Event</p>
                  <p className='text-sm leading-snug font-medium'>{item.title}</p>
                  <p className='text-muted-foreground text-xs leading-relaxed'>
                    <time dateTime={item.time.iso}>{item.time.short}</time> · {item.description}
                  </p>
                </div>
              </li>
            )
          }

          const message = messages[item.id]
          const selected = item.id === selectedId

          return (
            <li key={item.id} className='relative'>
              <button
                type='button'
                onClick={() => onSelect(item.id)}
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
        })}
      </ol>
    </nav>
  )
}

/** Mobile/tablet: the same sequence as a select. */
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
          {messageOrder.map(id => (
            <SelectItem key={id} value={id}>
              <span className='text-muted-foreground font-mono text-xs'>{messages[id].code}</span>
              {messages[id].name}
              {messages[id].status === 'proposed' && <span className='text-muted-foreground text-xs'>(proposed)</span>}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
