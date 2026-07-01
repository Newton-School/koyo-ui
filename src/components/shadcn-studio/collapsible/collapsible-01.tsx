import { ChevronsUpDownIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@newtonschool/koyo-ui/collapsible'

const CollapsibleDemo = () => {
  return (
    <Collapsible className='flex w-full max-w-[350px] flex-col gap-2'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <div className='text-sm font-semibold'>Aarav Mehta has 3 interview notes</div>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='icon-sm'>
            <ChevronsUpDownIcon />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='rounded-md border px-4 py-2 text-sm'>Screening scorecard</div>
      <CollapsibleContent className='flex flex-col gap-2'>
        <div className='rounded-md border px-4 py-2 text-sm'>Technical interview summary</div>
        <div className='rounded-md border px-4 py-2 text-sm'>Mentor follow-up</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleDemo
