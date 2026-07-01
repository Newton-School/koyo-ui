import { GraduationCapIcon, MessageSquareTextIcon, UserRoundCheckIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    icon: UserRoundCheckIcon,
    title: 'How do I review a candidate timeline?',
    content: 'Scan stage changes, scorecards, and mentor notes from the candidate profile.',
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-1.jpg?width=520&format=auto'
  },
  {
    icon: GraduationCapIcon,
    title: 'When should a learner be nudged?',
    content: 'Nudge learners when cohort progress stalls or a mentor flags repeated blockers.',
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-2.jpg?width=520&format=auto'
  },
  {
    icon: MessageSquareTextIcon,
    title: 'How do mentors share interview feedback?',
    content: 'Mentor feedback is attached to the candidate profile for the hiring team.',
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-3.jpg?width=520&format=auto'
  }
]

const AccordionMediaContentDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>
            <span className='flex items-center gap-4'>
              <item.icon className='size-4 shrink-0' />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className='space-y-4'>
            <p className='text-muted-foreground'>{item.content}</p>
            <img src={item.media} alt={item.title} className='w-full rounded-md' />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionMediaContentDemo
