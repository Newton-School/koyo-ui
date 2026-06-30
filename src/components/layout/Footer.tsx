// Next Imports
import Link from 'next/link'

// Component Imports
import Logo from '@/components/layout/logo'

const Footer = () => {
  return (
    <footer className='w-full border-t border-dashed'>
      <div className='mx-auto flex w-full max-w-[1400px] flex-col gap-6 border-dashed px-4 py-8 min-[1400px]:border-x min-[1800px]:max-w-[1536px] sm:flex-row sm:items-center sm:justify-between sm:px-8'>
        <div className='flex flex-col gap-3'>
          <Link href='/'>
            <Logo />
          </Link>
          <p className='text-muted-foreground max-w-2xl text-sm'>
            Koyo UI is a shadcn-based component system mapped to Koyo-owned Figma components and tokens. Components stay
            copy-friendly while base/store pieces remain implementation reference context.
          </p>
        </div>
        <div className='text-muted-foreground flex gap-4 text-sm'>
          <Link href='/docs/koyo' className='hover:text-foreground'>
            Koyo Docs
          </Link>
          <Link href='/docs/getting-started/introduction' className='hover:text-foreground'>
            Getting Started
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
