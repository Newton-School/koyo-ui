// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import CommandMenu from '@/components/layout/CommandMenu'
import Logo from '@/components/layout/logo'
import ModeToggle from '@/components/layout/ModeToggle'
import NavMenu from '@/components/layout/NavMenu'

const Header = ({ toggle }: { toggle: ReactNode }) => {
  return (
    <header className='bg-background/60 sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 items-center justify-center border-b border-dashed backdrop-blur-[8px]'>
      <div className='mx-auto flex h-full w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
        <div className='flex w-full items-center max-lg:gap-4'>
          <div className='flex items-center gap-3 ps-4 sm:ps-8'>
            {toggle}
            <Link href='/'>
              <Logo className='max-[425px]:[&_span]:hidden' />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className='text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium max-sm:hidden'>
                v0.1.0
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href='/docs/koyo' className='cursor-pointer'>
                      Koyo Component Catalog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='/docs/getting-started/introduction' className='cursor-pointer'>
                      Getting Started
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <nav className='flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8'>
            <NavMenu />
            <div className='flex items-center gap-2 md:gap-4'>
              <CommandMenu />
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
