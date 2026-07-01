import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@newtonschool/koyo-ui/accordion'

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

const AccordionFilledDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full space-y-2' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`} className='rounded-lg border!'>
          <AccordionTrigger className='bg-secondary text-secondary-foreground px-5 data-[state=open]:rounded-b-none'>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground px-5 pt-4'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionFilledDemo
