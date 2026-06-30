// Next Imports
import type { Metadata } from 'next'

// Component Imports
import BlocksIndexContent from './BlocksIndexContent'

export const metadata: Metadata = {
  title: 'Koyo Blocks',
  description:
    'Explore Koyo-ready blocks built on shadcn patterns and Koyo UI tokens.',
  openGraph: {
    title: 'Koyo Blocks',
    description:
      'Explore Koyo-ready blocks built on shadcn patterns and Koyo UI tokens.',
    type: 'website',
    siteName: 'Koyo UI',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`,
    images: [
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Koyo UI blocks'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koyo Blocks',
    description: 'Explore Koyo-ready blocks built on shadcn patterns and Koyo UI tokens.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`
  }
}

const BlocksPage = async () => {
  return <BlocksIndexContent />
}

export default BlocksPage
