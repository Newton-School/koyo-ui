// React Imports
import type { ReactNode, Ref } from 'react'

// Third-party Imports
import type { LucideIcon } from 'lucide-react'
import { BriefcaseBusinessIcon, ClockIcon, CodeXmlIcon, VideoIcon } from 'lucide-react'

// Util Imports
import { cn } from '@/lib/utils'

import type { InterviewDetails } from './reschedule-data'
import { formatDurationShort } from './reschedule-data'

/** The screen's small title, like "Modify your reservation". Focus moves here when the state changes. */
export const PageHeading = ({
  headingRef,
  children
}: {
  headingRef?: Ref<HTMLHeadingElement>
  children: ReactNode
}) => (
  <h1 ref={headingRef} tabIndex={-1} className='text-lg font-semibold tracking-tight outline-none'>
    {children}
  </h1>
)

export const CompanyTile = ({ interview, className }: { interview: InterviewDetails; className?: string }) => (
  <span
    className={cn(
      'ring-border grid aspect-square size-14 shrink-0 place-items-center rounded-2xl text-xl font-bold tracking-tight ring-1 sm:size-20 sm:text-2xl',
      interview.company.tileClassName,
      className
    )}
    aria-hidden='true'
  >
    {interview.company.monogram}
  </span>
)

export type MetaDetail = { icon: LucideIcon; label: ReactNode }

const MetaItem = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => (
  <li className='flex items-center gap-1.5'>
    <Icon className='size-4 shrink-0' aria-hidden='true' />
    <span>{children}</span>
  </li>
)

/**
 * Company logo, role and one meta row: company · duration · a state detail such as the expiry, or else
 * the interview title (e.g. the round), so every state opens with the same summary of the invitation.
 */
const InterviewSummary = ({ interview, detail }: { interview: InterviewDetails; detail?: MetaDetail }) => (
  <section
    aria-label='Interview details'
    className='grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-1.5'
  >
    <CompanyTile interview={interview} className='sm:row-span-2' />
    <h2 className='text-2xl leading-tight font-semibold tracking-tight sm:self-end sm:text-3xl'>{interview.role}</h2>
    <ul className='text-muted-foreground col-span-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm sm:col-span-1 sm:col-start-2 sm:self-start sm:text-[15px]'>
      <MetaItem icon={BriefcaseBusinessIcon}>{interview.company.name}</MetaItem>
      <MetaItem icon={ClockIcon}>{formatDurationShort(interview.durationMinutes)}</MetaItem>
      {detail ? (
        <MetaItem icon={detail.icon}>{detail.label}</MetaItem>
      ) : (
        <MetaItem icon={interview.kind === 'coding' ? CodeXmlIcon : VideoIcon}>{interview.title}</MetaItem>
      )}
    </ul>
  </section>
)

export default InterviewSummary
