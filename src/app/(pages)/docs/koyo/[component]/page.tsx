// Next Imports
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Third-party Imports
import { ArrowLeftIcon, InfoIcon } from 'lucide-react'

// Component Imports
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DocsNavigation from '@/components/DocsNavigation'

// Config Imports
import {
  getKoyoComponent,
  koyoComponents,
  koyoComponentStatusLabels,
  koyoFigmaRoleLabels,
  type KoyoCodeTarget
} from '@/config/koyo-components'

type Props = {
  params: Promise<{ component: string }>
}

const codeTargetPurposeLabels: Record<KoyoCodeTarget['purpose'], string> = {
  source: 'Source',
  metadata: 'Metadata',
  docs: 'Docs'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const component = getKoyoComponent((await params).component)

  if (!component) {
    return {}
  }

  return {
    title: `Koyo ${component.name}`,
    description: `${component.name} metadata, Figma role, token notes, variants, and code targets for the Koyo-owned component catalog.`,
    openGraph: {
      title: `Koyo ${component.name}`,
      description: `${component.name} metadata, Figma role, token notes, variants, and code targets for the Koyo-owned component catalog.`,
      type: 'website',
      siteName: 'Koyo UI',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/koyo/${component.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Koyo ${component.name}`,
      description: `${component.name} metadata, Figma role, token notes, variants, and code targets for the Koyo-owned component catalog.`
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/docs/koyo/${component.slug}`
    }
  }
}

export function generateStaticParams() {
  return koyoComponents.map(component => ({
    component: component.slug
  }))
}

const KoyoComponentPage = async ({ params }: Props) => {
  const component = getKoyoComponent((await params).component)

  if (!component) {
    notFound()
  }

  const componentIndex = koyoComponents.findIndex(item => item.slug === component.slug)
  const previousComponent = koyoComponents[componentIndex - 1] || null
  const nextComponent = koyoComponents[componentIndex + 1] || null

  return (
    <div className='flex flex-1 flex-col space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <Link
          href='/docs/koyo'
          className='text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm'
        >
          <ArrowLeftIcon className='size-4' />
          Koyo catalog
        </Link>
        <div className='flex flex-wrap items-center gap-3'>
          <h1 className='text-2xl font-bold sm:text-3xl'>{`Koyo ${component.name}`}</h1>
          <Badge variant='secondary'>{koyoComponentStatusLabels[component.status]}</Badge>
          <Badge variant='outline'>{koyoFigmaRoleLabels[component.figmaRole]}</Badge>
        </div>
        <p className='text-muted-foreground max-w-3xl'>{component.koyoTarget}</p>
      </div>

      <Alert className='border-accent-foreground/20 from-accent text-accent-foreground bg-gradient-to-b to-transparent to-60%'>
        <InfoIcon />
        <div className='flex flex-1 flex-col gap-1'>
          <AlertTitle>Reference scope</AlertTitle>
          <AlertDescription className='text-accent-foreground/70'>{component.baseReference}</AlertDescription>
        </div>
      </Alert>

      <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]'>
        <div className='space-y-4'>
          <Card className='shadow-none'>
            <CardHeader>
              <CardTitle>Variants</CardTitle>
              <CardDescription>
                Implemented variants and confirmed Figma notes; uncertain mapping details stay explicit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {component.variants.map(variant => (
                  <Badge key={variant} variant='outline'>
                    {variant}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className='shadow-none'>
            <CardHeader>
              <CardTitle>Token Notes</CardTitle>
              <CardDescription>Token decisions that should stay visible while the catalog is migrated.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='text-foreground/80 ml-5 list-disc space-y-2'>
                {component.tokenNotes.map(note => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className='shadow-none'>
            <CardHeader>
              <CardTitle>Code Targets</CardTitle>
              <CardDescription>Files the docs entry points at today, ready for later catalog linking.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='divide-border divide-y rounded-lg border'>
                {component.codeTargets.map(target => (
                  <li key={`${target.label}-${target.path}`} className='grid gap-2 p-4 sm:grid-cols-[8rem_1fr]'>
                    <div className='flex items-center gap-2'>
                      <Badge variant='secondary'>{codeTargetPurposeLabels[target.purpose]}</Badge>
                    </div>
                    <div className='min-w-0 space-y-1'>
                      <p className='font-medium'>{target.label}</p>
                      <code className='bg-muted text-muted-foreground block overflow-x-auto rounded-md px-2 py-1 text-xs'>
                        {target.path}
                      </code>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {component.figmaNodes && (
            <Card className='shadow-none'>
              <CardHeader>
                <CardTitle>Figma Mapping</CardTitle>
                <CardDescription>
                  Base/store nodes are reference only. The Koyo component is the docs and implementation target.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <dl className='grid gap-4 text-sm'>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Page</dt>
                    <dd className='font-medium'>{component.figmaNodes.page}</dd>
                  </div>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Base/store reference</dt>
                    <dd className='text-foreground/80'>{component.figmaNodes.baseReference}</dd>
                  </div>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Koyo-owned target</dt>
                    <dd className='text-foreground/80'>{component.figmaNodes.koyoComponent}</dd>
                  </div>
                  <div className='grid gap-1'>
                    <dt className='text-muted-foreground'>Confidence</dt>
                    <dd className='capitalize'>{component.figmaNodes.confidence}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          )}
        </div>

        <aside className='space-y-4'>
          <Card className='shadow-none'>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
              <CardDescription>Current migration state for this Koyo entry.</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className='space-y-4 text-sm'>
                <div className='space-y-1'>
                  <dt className='text-muted-foreground'>Slug</dt>
                  <dd className='font-mono'>{component.slug}</dd>
                </div>
                <div className='space-y-1'>
                  <dt className='text-muted-foreground'>Status</dt>
                  <dd>{koyoComponentStatusLabels[component.status]}</dd>
                </div>
                <div className='space-y-1'>
                  <dt className='text-muted-foreground'>Figma role</dt>
                  <dd>{koyoFigmaRoleLabels[component.figmaRole]}</dd>
                </div>
                <div className='space-y-1'>
                  <dt className='text-muted-foreground'>Koyo target</dt>
                  <dd className='text-foreground/80'>{component.koyoTarget}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </aside>
      </div>

      <DocsNavigation
        previousItem={
          previousComponent
            ? {
                name: `Koyo ${previousComponent.name}`,
                url: `/docs/koyo/${previousComponent.slug}`
              }
            : {
                name: 'Koyo Component Catalog',
                url: '/docs/koyo'
              }
        }
        nextItem={
          nextComponent
            ? {
                name: `Koyo ${nextComponent.name}`,
                url: `/docs/koyo/${nextComponent.slug}`
              }
            : null
        }
      />
    </div>
  )
}

export default KoyoComponentPage
