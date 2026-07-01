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

const AccordionTabsDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className='data-[state=open]:bg-koyo-brand/10 rounded-md border-none px-5 transition-colors duration-200'
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionTabsDemo
