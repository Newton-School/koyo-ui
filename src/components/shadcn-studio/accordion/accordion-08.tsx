import { GraduationCapIcon, MessageSquareTextIcon, PlusIcon, UserRoundCheckIcon } from 'lucide-react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'

const items = [
  {
    icon: UserRoundCheckIcon,
    title: 'How do I review a candidate timeline?',
    subtitle: 'Candidate review',
    content:
      'Open the candidate profile and use the interview timeline to scan stage changes, scorecard updates, and mentor notes from the most recent round.'
  },
  {
    icon: GraduationCapIcon,
    title: 'When should a learner be nudged?',
    subtitle: 'Cohort progress',
    content:
      'Nudge learners when cohort progress stalls, an assignment deadline is near, or a mentor flags repeated blockers during review.'
  },
  {
    icon: MessageSquareTextIcon,
    title: 'How do mentors share interview feedback?',
    subtitle: 'Mentor notes',
    content:
      'Mentors can submit structured feedback from the interview workspace. The summary is attached to the candidate profile for the hiring team.'
  }
]

const AccordionIconSubtitleDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger
              data-slot='accordion-trigger'
              className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring hover:text-koyo-brand flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
            >
              <span className='flex items-center gap-4'>
                <span
                  className='border-koyo-brand bg-koyo-brand/10 text-koyo-brand flex size-10 shrink-0 items-center justify-center rounded-full border'
                  aria-hidden='true'
                >
                  <item.icon className='size-4' />
                </span>
                <span className='flex flex-col space-y-0.5'>
                  <span>{item.title}</span>
                  <span className='text-muted-foreground font-normal'>{item.subtitle}</span>
                </span>
              </span>
              <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionIconSubtitleDemo
