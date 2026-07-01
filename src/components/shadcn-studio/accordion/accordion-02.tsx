import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    title: 'How do I review a candidate timeline?',
    content:
      'Open the candidate profile and use the interview timeline to scan stage changes, scorecard updates, and mentor notes from the most recent round.'
  },
  {
    title: 'When should a learner be nudged?',
    content:
      'Nudge learners when cohort progress stalls, an assignment deadline is near, or a mentor flags repeated blockers during review.'
  },
  {
    title: 'How do mentors share interview feedback?',
    content:
      'Mentors can submit structured feedback from the interview workspace. The summary is attached to the candidate profile for the hiring team.'
  }
]

const AccordionSplitDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full space-y-2' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className='bg-card rounded-md border-b-0 shadow-md data-[state=open]:shadow-lg'
        >
          <AccordionTrigger className='px-5 [&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-0'>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground px-5'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionSplitDemo
