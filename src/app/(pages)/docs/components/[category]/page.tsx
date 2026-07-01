// Next Imports
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Third-party Imports
import { InfoIcon } from 'lucide-react'

// Type Imports
import type { ProcessedComponentsData } from '@/types/components'

// Component Imports
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import ComponentsGrid from '@/components/ComponentsGrid'
import ComponentDetails from '@/components/ComponentDetails'
import ComponentCard from '@/components/ComponentCard'
import ComponentLoader from '@/components/ComponentLoader'
import DocsNavigation from '@/components/DocsNavigation'

// Config Imports
import { categories, getCategory } from '@/config/components'

// Util Imports
import { getCachedFileTree, getCachedComponentItem, getComponentsByNames } from '@/utils/components'
import { cn } from '@/lib/utils'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category)

  if (!category || category.isComingSoon) {
    return {}
  }

  const components = getComponentsByNames(category.components.map(item => item.name))
  const componentName = category.name.toLowerCase()
  const categoryUrl = `/docs/components/${category.slug}`
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ?? ''

  return {
    title: `Koyo ${category.name}`,
    description: `Browse ${components.length}+ Koyo-owned ${category.name} variants${category.hasAnimation ? ` including animated ${componentName}` : ''} mapped to Koyo Figma tokens and built with React and Tailwind CSS.`,
    openGraph: {
      title: `Koyo ${category.name}`,
      description: `Browse ${components.length}+ Koyo-owned ${category.name} variants${category.hasAnimation ? ` including animated ${componentName}` : ''} mapped to Koyo Figma tokens and built with React and Tailwind CSS.`,
      url: `${appUrl}${categoryUrl}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Koyo ${category.name}`,
      description: `Browse ${components.length}+ Koyo-owned ${category.name} variants${category.hasAnimation ? ` including animated ${componentName}` : ''} mapped to Koyo Figma tokens and built with React and Tailwind CSS.`
    },
    alternates: {
      canonical: `${appUrl}${categoryUrl}`
    }
  }
}

export async function generateStaticParams() {
  return categories
    .filter(category => !category.isComingSoon)
    .map(category => ({
      category: category.slug
    }))
}

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = getCategory((await params).category)

  if (!category || category.isComingSoon) {
    notFound()
  }

  const availableCategories = categories.filter(cat => !cat.isComingSoon)

  const categoryIndex = availableCategories.findIndex(cat => cat.slug === category.slug)
  const previousCategory = availableCategories[categoryIndex - 1] || null
  const nextCategory = availableCategories[categoryIndex + 1] || null

  const components = getComponentsByNames(category.components.map(item => item.name))

  // Prepare components data for the client component
  const componentsData: (ProcessedComponentsData | null)[] = await Promise.all(
    components.map(async comp => {
      const item = await getCachedComponentItem(comp.name)

      if (!item?.files) {
        return null
      }

      const tree = getCachedFileTree(item.files)

      return {
        component: {
          ...comp,
          files: item.files
        },
        tree
      }
    })
  )

  const validComponentsData = componentsData.filter(item => item !== null) as ProcessedComponentsData[]

  return (
    <div className='flex flex-1 flex-col space-y-4 p-4 sm:space-y-8 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>{`Koyo ${category.name}`}</h1>
        <p className='text-muted-foreground'>
          {`Explore Koyo-owned ${category.name} variants, featuring ${components.filter(component => !component?.meta?.isAnimated).length} ${category.name.toLowerCase()} examples mapped to shared Koyo tokens and built with React and Tailwind CSS.`}
        </p>
      </div>
      <Alert className='border-accent-foreground/20 from-accent text-accent-foreground flex justify-between bg-gradient-to-b to-transparent to-60%'>
        <InfoIcon />
        <div className='flex flex-1 flex-col gap-1'>
          <AlertTitle>Have any suggestions for {category.name} variants?</AlertTitle>
          <AlertDescription className='text-accent-foreground/60'>
            <p>
              <Link
                href='https://discord.com/invite/kBHkY7DekX'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary underline'
              >
                Share feedback
              </Link>{' '}
              and help us improve the Koyo-owned component variants.
            </p>
          </AlertDescription>
        </div>
      </Alert>
      {category.note}
      <ComponentsGrid {...category.breakpoints}>
        {components
          .filter(component => !component?.meta?.isAnimated)
          .map(component => (
            <ComponentCard
              key={component.name}
              componentName={component.name}
              componentTitle={component.title}
              className={component?.meta?.className}
            >
              <ComponentLoader componentName={component.name} category={category.slug} />
              <ComponentDetails
                componentsData={
                  validComponentsData.find(comp => comp.component.name === component.name) as ProcessedComponentsData
                }
              />
              {component?.meta?.badge && (
                <span
                  className={cn('font-kalam absolute top-3 left-4.5 group-hover/item:hidden', {
                    'left-17': component.meta?.isPro
                  })}
                >
                  {component?.meta?.badge}
                </span>
              )}
            </ComponentCard>
          ))}
      </ComponentsGrid>
      {category.hasAnimation && (
        <>
          <div id='animated-variants' className='flex flex-col space-y-3 pt-24'>
            <h2 className='text-2xl font-bold sm:text-3xl'>{`Koyo Animated ${category.name}`}</h2>
            <p className='text-muted-foreground'>
              {`Enhance your interface with ${components.filter(component => component?.meta?.isAnimated).length} Koyo-owned animated ${category.name.toLowerCase()} variants, crafted with React, Tailwind CSS, and Motion for smooth interactions.`}
            </p>
          </div>
          <ComponentsGrid {...category.animation?.breakpoints}>
            {components
              .filter(component => component?.meta?.isAnimated)
              .map(component => (
                <ComponentCard
                  key={component.name}
                  componentName={component.name}
                  componentTitle={component.title}
                  className={component?.meta?.className}
                >
                  <ComponentLoader componentName={component.name} category={category.slug} />
                  <ComponentDetails
                    componentsData={
                      validComponentsData.find(
                        comp => comp.component.name === component.name
                      ) as ProcessedComponentsData
                    }
                  />
                  {component?.meta?.badge && (
                    <span
                      className={cn('font-kalam absolute top-3 left-4.5 group-hover/item:hidden', {
                        'left-17': component.meta?.isPro
                      })}
                    >
                      {component?.meta?.badge}
                    </span>
                  )}
                </ComponentCard>
              ))}
          </ComponentsGrid>
        </>
      )}
      <DocsNavigation
        previousItem={
          previousCategory
            ? {
                name: `Koyo ${previousCategory.name}`,
                url: `/docs/components/${previousCategory.slug}`
              }
            : {
                name: 'Getting Started - Introduction',
                url: '/docs/getting-started/introduction'
              }
        }
        nextItem={
          nextCategory
            ? {
                name: `Koyo ${nextCategory.name}`,
                url: `/docs/components/${nextCategory.slug}`
              }
            : null
        }
      />
    </div>
  )
}

export default Page
