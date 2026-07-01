import { CheckCircle2Icon, Columns3Icon, EyeIcon, FilterIcon, Rows3Icon } from 'lucide-react'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

const ContextMenuDemo = () => {
  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger className='border-border bg-background w-full max-w-md rounded-lg border shadow-xs'>
        <div className='grid grid-cols-[1.25fr_0.8fr_0.8fr] border-b px-4 py-2 text-xs font-medium'>
          <span>Candidate</span>
          <span>Stage</span>
          <span>Signal</span>
        </div>
        <div className='grid grid-cols-[1.25fr_0.8fr_0.8fr] items-center px-4 py-3 text-sm'>
          <span className='font-medium'>Kabir Mehta</span>
          <span className='text-muted-foreground'>Screening</span>
          <span className='text-koyo-brand font-medium'>Strong</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-60'>
        <ContextMenuLabel>Table view</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>
          <EyeIcon />
          Show score column
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked>
          <CheckCircle2Icon />
          Show reviewer status
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value='compact'>
          <ContextMenuRadioItem value='comfortable'>
            <Rows3Icon />
            Comfortable rows
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value='compact'>
            <Columns3Icon />
            Compact rows
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <FilterIcon />
          Filter to this cohort
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ContextMenuDemo
