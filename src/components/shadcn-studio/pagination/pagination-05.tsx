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

const pages = [1, 2, 3]

const BorderedPaginationDemo = () => {
  return (
    <Pagination>
      <PaginationContent className='gap-0 divide-x overflow-hidden rounded-lg border'>
        <PaginationItem>
          <PaginationPrevious href='#' className='rounded-none' />
        </PaginationItem>
        {pages.map(page => {
          const isActive = page === 2

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`#${page}`}
                className={cn(
                  {
                    [buttonVariants({
                      variant: 'ghost',
                      className: 'text-koyo-brand bg-koyo-brand/10 hover:text-koyo-brand hover:bg-koyo-brand/10'
                    })]: isActive
                  },
                  'rounded-none border-none'
                )}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext href='#' className='rounded-none' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default BorderedPaginationDemo
