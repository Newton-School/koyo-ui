'use client'

import { useState } from 'react'

import { ChevronsRightIcon, FolderIcon, FolderOpenIcon, HomeIcon } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const BreadcrumbWithIconDemo = () => {
  const [open, setOpen] = useState(false)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <HomeIcon className='size-4' />
            <span className='sr-only'>Workspace</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRightIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem className='flex items-center gap-2'>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className='flex cursor-pointer items-center gap-1'>
              {open ? <FolderOpenIcon className='size-4' /> : <FolderIcon className='size-4' />}
              <span className='sr-only'>{open ? 'Open' : 'Close'}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
              <DropdownMenuItem>Cohorts</DropdownMenuItem>
              <DropdownMenuItem>Mentors</DropdownMenuItem>
              <DropdownMenuItem>Reports</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRightIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Interview prep</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbWithIconDemo
