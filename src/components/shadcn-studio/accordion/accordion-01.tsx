import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    title: 'What changed in this cohort?',
    content:
      'Koyo keeps learner, mentor, and scheduling updates grouped in one place so your team can review what changed before publishing.'
  },
  {
    title: 'Can I notify learners automatically?',
    content:
      'Yes. Enable the notification step to send a branded update to every affected learner after the cohort changes are saved.'
  },
  {
    title: 'Who can approve edits?',
    content:
      'Workspace owners and cohort admins can approve edits. Mentors can draft changes, but they need approval before publishing.'
  }
]

const AccordionDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full rounded-lg border' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className='data-[state=open]:text-koyo-brand px-5'>{item.title}</AccordionTrigger>
          <AccordionContent className='text-muted-foreground px-5'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionDemo
