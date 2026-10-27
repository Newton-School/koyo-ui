'use client'

// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import { CalendarX2Icon, CodeXmlIcon, LanguagesIcon, LinkIcon, MapPinIcon, TimerIcon, VideoIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@newtonschool/koyo-ui/badge'

// Util Imports
import { cn } from '@/lib/utils'

import type { InterviewDetails } from './reschedule-data'
import { formatDuration, formatIST } from './reschedule-data'
import { useNow } from './reschedule-hooks'
import { tint, toneStyle } from './reschedule-ui'

const MetaItem = ({ icon: Icon, children }: { icon: typeof TimerIcon; children: ReactNode }) => (
  <li className='flex items-center gap-1.5'>
    <Icon className='size-4 shrink-0' aria-hidden='true' />
    {children}
  </li>
)

export const CompanyTile = ({ interview, className }: { interview: InterviewDetails; className?: string }) => (
  <span
    className={cn(
      'ring-border grid size-14 shrink-0 place-items-center rounded-xl text-lg font-semibold tracking-tight ring-1',
      interview.company.tileClassName,
      className
    )}
    aria-hidden='true'
  >
    {interview.company.monogram}
  </span>
)

const InterviewSummary = ({
  interview,
  showLinkComparison = false
}: {
  interview: InterviewDetails
  showLinkComparison?: boolean
}) => {
  // Hooks
  const now = useNow(60_000)

  // A preview of the deadline before submitting (PRD §8); the confirmation shows the real one.
  const projectedExpiry =
    showLinkComparison && now !== null
      ? new Date(now + interview.freshLinkValidityHours * 3_600_000).toISOString()
      : null

  return (
    <section aria-label='Interview details' className='bg-card overflow-hidden rounded-xl border'>
      <div className='flex gap-4 p-4 sm:p-5'>
        <CompanyTile interview={interview} />
        <div className='min-w-0 space-y-2'>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>{interview.company.name}</p>
            <h2 className='text-lg leading-snug font-semibold sm:text-xl'>{interview.role}</h2>
          </div>
          <ul className='text-muted-foreground flex flex-wrap gap-x-4 gap-y-1.5 text-sm'>
            <MetaItem icon={interview.kind === 'coding' ? CodeXmlIcon : VideoIcon}>{interview.title}</MetaItem>
            <MetaItem icon={TimerIcon}>{formatDuration(interview.durationMinutes)}</MetaItem>
            <MetaItem icon={LanguagesIcon}>{interview.languages.join(', ')}</MetaItem>
            {interview.location && <MetaItem icon={MapPinIcon}>{interview.location}</MetaItem>}
          </ul>
        </div>
      </div>

      {showLinkComparison && (
        <dl className='bg-muted/40 grid border-t sm:grid-cols-2'>
          <div className='space-y-1.5 p-4 max-sm:border-b sm:border-r sm:p-5'>
            <dt className='text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-wide uppercase'>
              Original link
              <Badge
                variant='outline'
                shape='round'
                style={toneStyle('danger')}
                className={cn(tint.chip, 'normal-case')}
              >
                <CalendarX2Icon aria-hidden='true' />
                Expired
              </Badge>
            </dt>
            <dd className='text-sm'>
              <span className='text-muted-foreground'>Expired on </span>
              <time dateTime={interview.originalLinkExpiresAt} className='font-medium'>
                {formatIST(interview.originalLinkExpiresAt)}
              </time>
            </dd>
          </div>
          <div className='space-y-1.5 p-4 sm:p-5'>
            <dt className='text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-wide uppercase'>
              New link
              <Badge
                variant='outline'
                shape='round'
                style={toneStyle('success')}
                className={cn(tint.chip, 'normal-case')}
              >
                <LinkIcon aria-hidden='true' />
                One-time
              </Badge>
            </dt>
            <dd className='space-y-1 text-sm'>
              <p>
                <span className='font-medium'>Valid for {interview.freshLinkValidityHours} hours</span>
                <span className='text-muted-foreground'> after you request it</span>
              </p>
              {projectedExpiry && (
                <p className='text-muted-foreground text-xs'>
                  If you request now, start by{' '}
                  <time dateTime={projectedExpiry} className='text-foreground font-medium'>
                    {formatIST(projectedExpiry)}
                  </time>
                </p>
              )}
            </dd>
          </div>
        </dl>
      )}
    </section>
  )
}

export default InterviewSummary
