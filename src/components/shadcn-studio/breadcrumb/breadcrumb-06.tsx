import { ChevronDownIcon, HomeIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@newtonschool/koyo-ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@newtonschool/koyo-ui/dropdown-menu'

const BreadcrumbWithDropdownDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground'>
              <HomeIcon className='size-3' />
              Workspace
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground'>
              Cohorts
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                Interview prep
                <ChevronDownIcon className='size-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuItem>Assignments</DropdownMenuItem>
                <DropdownMenuItem>Mentors</DropdownMenuItem>
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbWithDropdownDemo
