// Next Imports
import Link from 'next/link'
import type { Metadata } from 'next'

// Third-party Imports
import { ArrowRightIcon, InfoIcon } from 'lucide-react'

// Component Imports
import { Alert, AlertDescription, AlertTitle } from '@newtonschool/koyo-ui/alert'
import { Badge } from '@newtonschool/koyo-ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@newtonschool/koyo-ui/card'
import DocsNavigation from '@/components/DocsNavigation'

// Config Imports
import { koyoComponents, koyoComponentStatusLabels, koyoFigmaRoleLabels } from '@/config/koyo-components'

export const metadata: Metadata = {
  title: 'Koyo Component Catalog',
  description:
    'Browse the first Koyo-owned component docs entries and their Figma mapping notes for the Koyo UI catalog.',
  openGraph: {
    title: 'Koyo Component Catalog',
    description:
      'Browse the first Koyo-owned component docs entries and their Figma mapping notes for the Koyo UI catalog.',
    type: 'website',
    siteName: 'Koyo UI',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/koyo`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koyo Component Catalog',
    description:
      'Browse the first Koyo-owned component docs entries and their Figma mapping notes for the Koyo UI catalog.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/docs/koyo`
  }
}

const KoyoDocsPage = () => {
  return (
    <div className='flex-1 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-wrap items-center gap-2'>
          <Badge variant='outline'>Koyo-owned</Badge>
          <Badge variant='secondary'>{koyoComponents.length} entries</Badge>
        </div>
        <h1 className='text-2xl font-bold sm:text-3xl'>Koyo Component Catalog</h1>
        <p className='text-muted-foreground max-w-3xl'>
          Start of the Koyo docs scaffold for components that Koyo owns and documents. Base and store components remain
          reference material for Figma mapping and should not become standalone docs entries here.
        </p>
      </div>

      <Alert className='border-accent-foreground/20 from-accent text-accent-foreground bg-gradient-to-b to-transparent to-60%'>
        <InfoIcon />
        <div className='flex flex-1 flex-col gap-1'>
          <AlertTitle>Figma rule for this catalog</AlertTitle>
          <AlertDescription className='text-accent-foreground/70'>
            Document Koyo-owned targets first. Use base/store nodes only as reference inputs for anatomy, behavior, and
            token mapping.
          </AlertDescription>
        </div>
      </Alert>

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {koyoComponents.map(component => (
          <Link key={component.slug} href={`/docs/koyo/${component.slug}`} className='group block h-full'>
            <Card className='h-full gap-4 shadow-none transition-colors group-hover:border-primary/60'>
              <CardHeader className='gap-3'>
                <div className='flex items-start justify-between gap-3'>
                  <div className='min-w-0 space-y-2'>
                    <CardTitle className='text-lg'>{component.name}</CardTitle>
                    <CardDescription className='line-clamp-3'>{component.koyoTarget}</CardDescription>
                  </div>
                  <Badge variant='secondary' className='shrink-0'>
                    {koyoComponentStatusLabels[component.status]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='flex flex-1 flex-col gap-4'>
                <dl className='grid gap-3 text-sm'>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Figma role</dt>
                    <dd className='font-medium'>{koyoFigmaRoleLabels[component.figmaRole]}</dd>
                  </div>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Base reference</dt>
                    <dd className='text-foreground/80 line-clamp-2'>{component.baseReference}</dd>
                  </div>
                </dl>

                <div className='flex flex-wrap gap-2'>
                  {component.variants.slice(0, 4).map(variant => (
                    <Badge key={variant} variant='outline'>
                      {variant}
                    </Badge>
                  ))}
                  {component.variants.length > 4 && <Badge variant='ghost'>+{component.variants.length - 4}</Badge>}
                </div>

                <span className='text-primary mt-auto inline-flex items-center gap-2 text-sm font-medium'>
                  View details
                  <ArrowRightIcon className='size-4 transition-transform group-hover:translate-x-0.5' />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <DocsNavigation
        previousItem={{
          name: 'Getting Started - Introduction',
          url: '/docs/getting-started/introduction'
        }}
        nextItem={{
          name: `Koyo ${koyoComponents[0]?.name}`,
          url: `/docs/koyo/${koyoComponents[0]?.slug}`
        }}
      />
    </div>
  )
}

export default KoyoDocsPage
