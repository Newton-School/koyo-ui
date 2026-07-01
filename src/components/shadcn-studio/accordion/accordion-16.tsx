import { PlusIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const items = [
  {
    category: 'Candidate review',
    faqs: [
      {
        title: 'How do I review a candidate timeline?',
        content:
          'Open the candidate profile and use the interview timeline to scan stage changes, scorecard updates, and mentor notes from the most recent round.',
        open: true
      },
      {
        title: 'Where do scorecards show up?',
        content:
          'Scorecards appear in the interview summary once the assigned mentor submits feedback for the round.'
      },
      {
        title: 'Can a candidate move cohorts?',
        content:
          'Candidates can be moved when the new cohort has capacity and the learning team confirms the updated start date.'
      }
    ]
  },
  {
    category: 'Learner progress',
    faqs: [
      {
        title: 'When should a learner be nudged?',
        content:
          'Nudge learners when cohort progress stalls, an assignment deadline is near, or a mentor flags repeated blockers during review.',
        open: true
      },
      {
        title: 'How are cohort risks flagged?',
        content:
          'Risk indicators combine attendance, assignment completion, and mentor feedback so coordinators can prioritize outreach.'
      },
      {
        title: 'Can mentors update learner notes?',
        content:
          'Mentors can update notes after every checkpoint. The latest note is shown first in the learner activity feed.'
      }
    ]
  },
  {
    category: 'Mentor feedback',
    faqs: [
      {
        title: 'How do mentors share interview feedback?',
        content:
          'Mentors can submit structured feedback from the interview workspace. The summary is attached to the candidate profile for the hiring team.',
        open: true
      },
      {
        title: 'Who sees private mentor notes?',
        content:
          'Private notes stay visible to the mentor group and program owners, while public feedback is shared with the learner or candidate.'
      },
      {
        title: 'How do I flag an interview issue?',
        content:
          'Use the issue flag from the interview workspace and include the round, candidate, and a short note for the operations team.'
      }
    ]
  }
]

const AccordionMultilevelIconDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full rounded-lg border' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className='has-focus-visible:border-koyo-brand has-focus-visible:ring-koyo-brand-ring outline-none first:rounded-t-lg last:rounded-b-lg has-focus-visible:z-10 has-focus-visible:ring-[3px]'
        >
          <AccordionTrigger className='px-5 outline-none focus-visible:ring-0'>{item.category}</AccordionTrigger>
          <AccordionContent className='pb-0'>
            {item.faqs.map((faq, index) => (
              <Collapsible key={index} className='bg-secondary border-t px-8' defaultOpen={faq.open}>
                <CollapsibleTrigger className='focus-visible:border-koyo-brand focus-visible:ring-koyo-brand-ring hover:text-koyo-brand flex w-full items-center gap-4 rounded-lg py-4 font-medium outline-none focus-visible:z-10 focus-visible:ring-[3px] [&>svg>path:last-child]:origin-center [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                  <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0' />
                  {faq.title}
                </CollapsibleTrigger>
                <CollapsibleContent className='text-muted-foreground overflow-hidden pb-4'>
                  {faq.content}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionMultilevelIconDemo
