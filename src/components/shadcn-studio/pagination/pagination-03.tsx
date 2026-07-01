import { buttonVariants } from '@newtonschool/koyo-ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@newtonschool/koyo-ui/pagination'

import { cn } from '@/lib/utils'

const PaginationWithPrimaryButtonDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href='#'
            isActive
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'icon'
              }),
              'hover:!text-koyo-button-primary-foreground !shadow-none dark:border-transparent'
            )}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithPrimaryButtonDemo
