'use client'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Util Imports
import { cn } from '@/lib/utils'
import { isInternalPathActive } from '@/utils/pathname'

const NavMenu = () => {
  // Hooks
  const pathname = usePathname()

  return (
    <div className='flex items-center gap-5 max-lg:hidden'>
      <Link
        href='/docs/koyo'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': isInternalPathActive(pathname, '/docs/koyo')
        })}
      >
        Koyo Docs
      </Link>
      <Link
        href='/docs/getting-started/introduction'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': isInternalPathActive(
            pathname,
            '/docs/getting-started/introduction'
          )
        })}
      >
        Getting Started
      </Link>
      <Link
        href='/blocks'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': isInternalPathActive(pathname, '/blocks')
        })}
      >
        Blocks
      </Link>
    </div>
  )
}

export default NavMenu
