// Third-party Imports
import { ClockIcon, MailIcon, PhoneIcon } from 'lucide-react'

// Component Imports
import { Separator } from '@newtonschool/koyo-ui/separator'

import type { InterviewDetails, SupportContact } from './reschedule-data'
import { getReadinessItems } from './reschedule-data'
import { SidebarCard } from './reschedule-ui'

export const BeforeYouStart = ({ interview }: { interview: InterviewDetails }) => {
  const items = getReadinessItems(interview)

  return (
    <SidebarCard title='What to know before you start'>
      <ul className='space-y-4'>
        {items.map(item => (
          <li key={item.title} className='flex gap-3'>
            <span
              className='bg-koyo-brand/10 text-koyo-brand grid size-9 shrink-0 place-items-center rounded-lg'
              aria-hidden='true'
            >
              <item.icon className='size-4.5' />
            </span>
            <div className='space-y-0.5'>
              <p className='text-sm font-medium'>{item.title}</p>
              <p className='text-muted-foreground text-sm leading-relaxed'>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SidebarCard>
  )
}

export const WhatHappensNext = ({ validityHours }: { validityHours: number }) => {
  const steps = [
    { title: 'Tell us why you missed it', description: 'Pick one reason. It takes under a minute.' },
    { title: 'Get your new link instantly', description: 'It appears on this page as soon as you submit.' },
    {
      title: `Start within ${validityHours} hours`,
      description: "We'll remind you on WhatsApp and email before the link expires."
    }
  ]

  return (
    <SidebarCard title='What happens next'>
      <ol className='relative space-y-5'>
        <span className='bg-border absolute top-3 bottom-3 left-[13px] w-px' aria-hidden='true' />
        {steps.map((step, index) => (
          <li key={step.title} className='relative flex gap-3'>
            <span className='bg-background text-foreground z-1 grid size-7 shrink-0 place-items-center rounded-full border text-xs font-semibold'>
              {index + 1}
            </span>
            <div className='space-y-0.5 pt-0.5'>
              <p className='text-sm font-medium'>{step.title}</p>
              <p className='text-muted-foreground text-sm leading-relaxed'>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SidebarCard>
  )
}

export const NeedHelp = ({ support, id = 'help' }: { support: SupportContact; id?: string }) => {
  return (
    <SidebarCard id={id} title='Need help?' className='scroll-mt-24'>
      <p className='text-muted-foreground text-sm leading-relaxed'>
        For questions about this interview, or if you need help with accessibility or language, contact{' '}
        <span className='text-foreground font-medium'>{support.name}</span>.
      </p>
      <Separator className='my-4' />
      <ul className='space-y-2.5 text-sm'>
        {support.email && (
          <li className='flex items-center gap-2.5'>
            <MailIcon className='text-muted-foreground size-4 shrink-0' aria-hidden='true' />
            <a
              href={`mailto:${support.email}`}
              className='hover:text-koyo-brand focus-visible:ring-koyo-brand-ring rounded-sm font-medium break-all underline-offset-4 outline-none hover:underline focus-visible:ring-[3px]'
            >
              {support.email}
            </a>
          </li>
        )}
        {support.phone && (
          <li className='flex items-center gap-2.5'>
            <PhoneIcon className='text-muted-foreground size-4 shrink-0' aria-hidden='true' />
            <a
              href={`tel:${support.phone.replace(/\s/g, '')}`}
              className='hover:text-koyo-brand focus-visible:ring-koyo-brand-ring rounded-sm font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-[3px]'
            >
              {support.phone}
            </a>
          </li>
        )}
        {support.hours && (
          <li className='text-muted-foreground flex items-center gap-2.5'>
            <ClockIcon className='size-4 shrink-0' aria-hidden='true' />
            {support.hours}
          </li>
        )}
      </ul>
    </SidebarCard>
  )
}
