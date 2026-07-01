// Next Imports
import type { CSSProperties } from 'react'

import Link from 'next/link'
import type { Metadata } from 'next'

// Config Imports
import { categories } from '@/config/components'

// SVG Imports
import MoreComponents from '@/assets/svg/MoreComponents'

type PreviewAccentStyle = CSSProperties & {
  '--card': string
  '--card-foreground': string
  '--muted-foreground': string
  '--preview-bg': string
  '--preview-glow': string
  '--primary': string
  '--primary-foreground': string
}

const createPreviewAccentStyle = (
  accent: string,
  ring: string,
  foreground = '#ffffff',
  glowAmount = '9%'
): PreviewAccentStyle => ({
  '--card': 'var(--background)',
  '--card-foreground': 'var(--foreground)',
  '--muted-foreground': 'var(--muted-foreground)',
  '--preview-bg': `color-mix(in oklab, ${ring} 14%, var(--background))`,
  '--preview-glow': `color-mix(in oklab, ${accent} ${glowAmount}, transparent)`,
  '--primary': accent,
  '--primary-foreground': foreground
})

const previewAccentStyle = createPreviewAccentStyle(
  'color-mix(in oklab, var(--koyo-brand) 82%, var(--foreground) 18%)',
  'var(--koyo-brand-ring)',
  'var(--koyo-button-primary-foreground)'
)

const cardClassName =
  'group overflow-hidden rounded-xl border border-border bg-background shadow-xs transition-all duration-300 hover:border-koyo-brand/30 hover:shadow-[0_14px_34px_-28px_var(--foreground)] focus-within:border-koyo-brand/45 focus-within:ring-3 focus-within:ring-koyo-brand-ring/50'

const previewClassName =
  'relative flex h-52 items-center justify-center overflow-hidden border-b bg-[radial-gradient(circle_at_50%_38%,var(--preview-glow),transparent_58%),linear-gradient(180deg,var(--preview-bg),var(--background))] transition-colors duration-300 before:absolute before:inset-x-10 before:bottom-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-koyo-brand/18 before:to-transparent'

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
            <div key={category.slug} className={cardClassName} style={previewAccentStyle}>
              <Link href={`/docs/components/${category.slug}`} className='block outline-none'>
                <div className={previewClassName}>
                  <category.svg className='relative z-1 opacity-95 drop-shadow-sm transition-all duration-300 group-hover:scale-[1.04]' />
                  {category.badge && (
                    <span className='font-kalam bg-background/80 text-koyo-brand border-koyo-brand/20 absolute top-2 left-4 rounded-full border px-2 py-0.5 text-sm shadow-xs backdrop-blur'>
                      {category.badge}
                    </span>
                  )}
                </div>
                <div className='flex flex-col gap-0.5 p-4 text-center'>
                  <h2 className='text-foreground group-hover:text-koyo-brand text-lg font-semibold transition-colors duration-300'>
                    {category.name}
                  </h2>
                  <p className='text-muted-foreground group-hover:text-koyo-brand/80 text-sm transition-colors duration-300'>{`${category.components.length} ${category.components.length === 1 ? 'Component' : 'Components'}`}</p>
                </div>
              </Link>
            </div>
          ))}
        <div className={cardClassName} style={previewAccentStyle}>
          <div className={previewClassName}>
            <MoreComponents className='relative z-1 opacity-95 drop-shadow-sm transition-all duration-300 group-hover:scale-[1.04]' />
          </div>
          <div className='flex flex-col gap-0.5 p-4 text-center'>
            <h2 className='text-foreground group-hover:text-koyo-brand text-lg font-semibold transition-colors duration-300'>
              More Components
            </h2>
            <p className='text-muted-foreground text-sm'>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
