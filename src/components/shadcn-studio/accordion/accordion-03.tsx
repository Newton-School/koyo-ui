import { GraduationCapIcon, MessageSquareTextIcon, UserRoundCheckIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    icon: UserRoundCheckIcon,
    title: 'How do I review a candidate timeline?',
    content:
      'Open the candidate profile and use the interview timeline to scan stage changes, scorecard updates, and mentor notes from the most recent round.'
  },
  {
    icon: GraduationCapIcon,
    title: 'When should a learner be nudged?',
    content:
      'Nudge learners when cohort progress stalls, an assignment deadline is near, or a mentor flags repeated blockers during review.'
  },
  {
    icon: MessageSquareTextIcon,
    title: 'How do mentors share interview feedback?',
    content:
      'Mentors can submit structured feedback from the interview workspace. The summary is attached to the candidate profile for the hiring team.'
  }
]

const AccordionLeftIconDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className='justify-start [&>svg]:order-first'>
            <span className='flex items-center gap-4'>
              <item.icon className='text-muted-foreground size-4 shrink-0' />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionLeftIconDemo
