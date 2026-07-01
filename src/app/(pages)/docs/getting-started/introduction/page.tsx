// Next Imports
import Link from 'next/link'
import type { Metadata } from 'next'

// Third-party Imports
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

// Component Imports
import { Accordion, AccordionContent, AccordionItem } from '@newtonschool/koyo-ui/accordion'
import DocsNavigation from '@/components/DocsNavigation'

// Data Imports
import { introFaqs } from '@/assets/data/faqs'

export const metadata: Metadata = {
  title: 'Introduction',
  description:
    'Koyo UI is a shadcn-based component system mapped to Koyo Figma components and tokens for building consistent product interfaces.',
  openGraph: {
    title: 'Introduction',
    description:
      'Koyo UI is a shadcn-based component system mapped to Koyo Figma components and tokens for building consistent product interfaces.',
    type: 'website',
    siteName: 'Koyo UI',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/introduction`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction',
    description:
      'Koyo UI is a shadcn-based component system mapped to Koyo Figma components and tokens for building consistent product interfaces.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/introduction`
  }
}

const DocsPage = () => {
  return (
    <div className='flex-1 space-y-6 p-4 sm:space-y-10 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Introduction</h1>
        <p className='text-muted-foreground'>
          Koyo UI is a shadcn-based component system for Koyo products. It maps reusable React components and blocks to
          Koyo-owned Figma components and tokens so design and implementation stay aligned.
        </p>
      </div>
      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>What is Koyo UI?</h2>
        <p className='text-foreground/80'>
          <strong className='text-foreground font-semibold'>
            Koyo UI is not a traditional install-and-forget component library
          </strong>
          . It is a catalog of source-owned components, blocks, and patterns that teams can preview, copy into their
          apps, and adapt to product needs.
        </p>
        <p className='text-foreground/80'>
          Built on the shadcn/ui approach, each entry is shaped around Koyo&apos;s design decisions: Figma tokens, CSS
          variables, spacing, radius, typography, and interaction patterns that should feel native across Koyo
          interfaces.
        </p>
        <p className='text-foreground/80'>
          The Figma file includes base/store components as implementation and reference context. The product-facing docs
          focus on Koyo-owned components: the variants and blocks teams should copy into Koyo apps.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Not a Standard Library, but a Component Catalog</h2>
        <p className='text-foreground/80'>
          Following the philosophy of shadcn/ui, Koyo UI keeps component code visible and editable. Instead of hiding UI
          behind an opaque package, it gives teams concrete starting points they can copy, modify, and keep close to the
          product code that uses them.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Why Use Koyo UI?</h2>
        <p className='text-foreground/80'>
          shadcn/ui provides a strong foundation for accessible, composable primitives. Koyo UI turns that foundation
          into Koyo-specific building blocks, with examples and defaults that match the way our product surfaces are
          designed.
        </p>

        <p className='text-foreground/80'>
          The goal is to reduce the translation gap between Figma and code. Teams can start from reviewed variants,
          apply the same token vocabulary used by designers, and still keep full ownership of the component source after
          copying it into an app.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h3 className='text-lg font-semibold sm:text-xl'>What Koyo UI Provides</h3>
        <p className='text-foreground/80'>
          Koyo UI is a practical shared catalog for product teams that need consistent interfaces without giving up
          local control. It documents what to copy, how variants are composed, and how each piece connects back to Koyo
          design tokens.
        </p>
        <ul className='text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-7/10'>
          <li>
            <span className='text-foreground font-semibold'>Copy-and-paste source:</span> Browse reusable{' '}
            <Link href='/docs/koyo' className='text-primary underline'>
              Koyo component catalog
            </Link>
            , inspect the implementation, and bring the code directly into the app that needs it.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Koyo Figma mapping:</span> Align Koyo-owned component
            variants with the color, typography, spacing, radius, and state tokens used in Koyo design files.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Product-ready blocks:</span> Use higher-level{' '}
            <Link href='/blocks' className='text-primary underline'>
              blocks
            </Link>{' '}
            as starting points for repeated product workflows instead of rebuilding the same layouts from scratch.
          </li>
          <li>
            <span className='text-foreground font-semibold'>shadcn-compatible patterns:</span> Keep the familiar Radix,
            Tailwind CSS, and variant composition patterns used across shadcn/ui projects.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Local ownership:</span> After copying a component, teams can
            adjust behavior, styling, and integration details without waiting on a shared package release.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Design-to-code consistency:</span> Use the same naming and
            token decisions across Figma, CSS variables, and component examples.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Clear source boundaries:</span> Treat base/store Figma
            pieces as reference context while keeping Koyo-owned components as the catalog output.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Upstream attribution:</span> Keep the shadcn/ui patterns and
            MIT-licensed Shadcn Studio origins visible without carrying upstream marketing into Koyo docs.
          </li>
        </ul>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Frequently Asked Questions</h2>
        <Accordion type='single' collapsible className='w-full'>
          {introFaqs.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionPrimitive.Header className='flex'>
                <AccordionPrimitive.Trigger className='text-foreground/80 flex flex-1 items-center justify-between py-3 text-start font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45'>
                  {question}
                  <PlusIcon className='text-muted-foreground size-5 shrink-0 transition-transform duration-200' />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className='text-muted-foreground'>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <DocsNavigation
        previousItem={null}
        nextItem={{
          name: 'Koyo Component Catalog',
          url: '/docs/koyo'
        }}
      />
    </div>
  )
}

export default DocsPage
