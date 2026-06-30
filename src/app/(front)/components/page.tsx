// Next Imports
import Link from 'next/link'
import type { Metadata } from 'next'

// Config Imports
import { categories } from '@/config/components'

// SVG Imports
import MoreComponents from '@/assets/svg/MoreComponents'

export const metadata: Metadata = {
  title: 'Koyo Components',
  description:
    'Browse Koyo-owned components built from shadcn/ui primitives and mapped to Koyo Figma components and tokens.',
  openGraph: {
    title: 'Koyo Components',
    description:
      'Browse Koyo-owned components built from shadcn/ui primitives and mapped to Koyo Figma components and tokens.',
    type: 'website',
    siteName: 'Koyo UI',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/components`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koyo Components',
    description:
      'Browse Koyo-owned components built from shadcn/ui primitives and mapped to Koyo Figma components and tokens.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/components`
  }
}

const Page = () => {
  return (
    <div className='flex flex-col items-start justify-center space-y-4 p-4 sm:space-y-8 sm:p-8'>
      <div className='flex flex-col space-y-3'>
        <div className='border-border bg-secondary text-secondary-foreground w-fit rounded-full border px-3 py-1 text-sm font-medium'>
          Koyo-owned outputs
        </div>
        <h1 className='text-2xl font-bold sm:text-3xl'>Koyo Components</h1>
        <p className='text-muted-foreground'>
          A shadcn-based component catalog using copy-friendly previews and docs mapped to Koyo Figma components and
          design tokens. Base/store components stay as reference context; these categories are the Koyo-owned outputs.
        </p>
      </div>
      <div className='grid w-full gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4'>
        {categories
          .filter(category => !category.isComingSoon)
          .map(category => (
            <div key={category.slug} className='group overflow-hidden rounded-xl border'>
              <Link href={`/docs/components/${category.slug}`}>
                <div className='bg-primary/[0.045] relative flex h-52 items-center justify-center border-b dark:bg-transparent'>
                  <category.svg className='transition-all duration-300 group-hover:scale-110' />
                  {category.badge && <span className='font-kalam absolute top-2 left-4'>{category.badge}</span>}
                </div>
                <div className='flex flex-col gap-0.5 p-4 text-center'>
                  <h2 className='text-lg font-medium'>{category.name}</h2>
                  <p className='text-muted-foreground text-sm'>{`${category.components.length} ${category.components.length === 1 ? 'Component' : 'Components'}`}</p>
                </div>
              </Link>
            </div>
          ))}
        <div className='group overflow-hidden rounded-xl border'>
          <div className='bg-primary/[0.045] flex h-52 items-center justify-center border-b dark:bg-transparent'>
            <MoreComponents className='transition-all duration-300 group-hover:scale-110' />
          </div>
          <div className='flex flex-col gap-0.5 p-4 text-center'>
            <h2 className='text-lg font-medium'>More Components</h2>
            <p className='text-muted-foreground text-sm'>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
