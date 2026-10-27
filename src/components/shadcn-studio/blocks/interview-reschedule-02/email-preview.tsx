// Third-party Imports
import { ArchiveIcon, ReplyIcon, StarIcon } from 'lucide-react'

// Component Imports
import { buttonVariants } from '@newtonschool/koyo-ui/button'

// Util Imports
import { cn } from '@/lib/utils'

import type { Example, MessageTemplate } from './message-templates'
import { SENDER_EMAIL, SENDER_NAME } from './message-templates'
import type { TextContext } from './rich-text'
import { EmailBlocks, renderVariables, toBlocks } from './rich-text'
import { KoyoLogo, KoyoMark } from './koyo-logo'

/** Email client mock: inbox row (shows the preheader), opened-message header and a single-column body. */
const EmailPreview = ({
  message,
  example,
  context
}: {
  message: MessageTemplate
  example: Example
  context: TextContext
}) => {
  const { email } = message
  const chunks = toBlocks(message.whatsapp.body)

  // The CTA sits before the closing support line, so "Need help?" and the sign-off stay last.
  const body = email.button ? chunks.slice(0, -1) : chunks
  const closing = email.button ? chunks.slice(-1) : []

  return (
    <div className='bg-card overflow-hidden rounded-xl border shadow-xs'>
      {/* Inbox row */}
      <div className='bg-muted/50 border-b px-4 py-3 sm:px-5'>
        <p className='text-muted-foreground mb-2 text-[11px] font-semibold tracking-wide uppercase'>Inbox preview</p>
        <div className='bg-background flex items-start gap-3 rounded-lg border px-3 py-2.5'>
          <KoyoMark className='mt-0.5 size-7 rounded-full' />
          <div className='min-w-0 flex-1'>
            <div className='flex items-baseline justify-between gap-3'>
              <p className='truncate text-sm font-semibold'>{SENDER_NAME}</p>
              <time dateTime={message.send.iso} className='text-muted-foreground shrink-0 text-xs'>
                {message.send.clock}
              </time>
            </div>
            <p className='truncate text-sm font-medium'>{renderVariables(email.subject, context)}</p>
            <p className='text-muted-foreground truncate text-sm'>{renderVariables(email.preheader, context)}</p>
          </div>
        </div>
      </div>

      {/* Opened message header */}
      <div className='space-y-4 border-b px-4 py-4 sm:px-6'>
        <div className='flex items-start justify-between gap-4'>
          <h4 className='text-lg leading-snug font-semibold text-balance'>{renderVariables(email.subject, context)}</h4>
          <span className='text-muted-foreground hidden shrink-0 items-center gap-3 pt-1 sm:flex' aria-hidden='true'>
            <ArchiveIcon className='size-4' />
            <StarIcon className='size-4' />
            <ReplyIcon className='size-4' />
          </span>
        </div>
        <dl className='grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm'>
          <dt className='text-muted-foreground'>From</dt>
          <dd className='break-words'>
            <span className='font-medium'>{SENDER_NAME}</span>{' '}
            <span className='text-muted-foreground'>&lt;{SENDER_EMAIL}&gt;</span>
          </dd>
          <dt className='text-muted-foreground'>To</dt>
          <dd className='break-words'>
            {renderVariables('{{candidate_name}}', context)}{' '}
            <span className='text-muted-foreground'>&lt;{example.candidateEmail}&gt;</span>
          </dd>
          <dt className='text-muted-foreground'>Sent</dt>
          <dd>
            <time dateTime={message.send.iso}>{message.send.full}</time>
          </dd>
          <dt className='text-muted-foreground'>Preheader</dt>
          <dd className='text-muted-foreground'>{renderVariables(email.preheader, context)}</dd>
        </dl>
      </div>

      {/* Body */}
      <div className='bg-muted/40 p-3 sm:p-6'>
        <article
          lang='en-IN'
          className='bg-background mx-auto max-w-[560px] space-y-6 rounded-lg border px-5 py-6 sm:px-8 sm:py-8'
        >
          <KoyoLogo size='sm' />
          <h5 className='text-xl leading-snug font-semibold tracking-tight'>
            {renderVariables(email.heading, context)}
          </h5>

          <div className='text-foreground/90 space-y-4 text-base leading-relaxed'>
            <EmailBlocks chunks={body} context={context} />
          </div>

          {email.howItWorks && (
            <div className='space-y-3'>
              <p className='text-base font-semibold'>How it works</p>
              <ol className='space-y-2.5'>
                {email.howItWorks.map((step, index) => (
                  <li key={step} className='flex gap-3 text-base leading-relaxed'>
                    <span className='bg-koyo-brand/10 text-koyo-brand mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold'>
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {email.button && (
            <div className='space-y-3'>
              <span
                className={cn(buttonVariants({ variant: 'brand', size: 'xl' }), 'pointer-events-none w-full sm:w-auto')}
              >
                {email.button.label}
              </span>
              <p className='text-muted-foreground text-sm leading-relaxed break-all'>
                Or open this link:{' '}
                <span className='text-koyo-brand'>{renderVariables(`{{${email.button.url}}}`, context)}</span>
              </p>
            </div>
          )}

          {closing.length > 0 && (
            <div className='text-foreground/90 space-y-4 text-base leading-relaxed'>
              <EmailBlocks chunks={closing} context={context} />
            </div>
          )}

          <p className='text-muted-foreground border-t pt-5 text-xs leading-relaxed'>
            Sent by {SENDER_NAME} on behalf of {renderVariables('{{company_name}}', context)}.
          </p>
        </article>
      </div>
    </div>
  )
}

export default EmailPreview
