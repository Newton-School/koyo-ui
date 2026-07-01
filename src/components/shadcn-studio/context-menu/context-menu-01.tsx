import { ArchiveIcon, CalendarPlusIcon, ClipboardCheckIcon, MailIcon, UserRoundIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

const ContextMenuDemo = () => {
  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger className='border-border bg-background flex w-full max-w-sm items-center justify-between rounded-lg border p-4 shadow-xs'>
        <div className='space-y-1'>
          <div className='font-medium'>Anika Rao</div>
          <div className='text-muted-foreground text-sm'>Frontend cohort · Interview ready</div>
        </div>
        <Badge variant='success' shape='round'>
          84%
        </Badge>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-56'>
        <ContextMenuLabel>Candidate actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <UserRoundIcon />
          Open profile
          <ContextMenuShortcut>Cmd O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardCheckIcon />
          View scorecard
        </ContextMenuItem>
        <ContextMenuItem>
          <CalendarPlusIcon />
          Schedule interview
        </ContextMenuItem>
        <ContextMenuItem>
          <MailIcon />
          Send update
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant='destructive'>
          <ArchiveIcon />
          Archive candidate
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ContextMenuDemo
