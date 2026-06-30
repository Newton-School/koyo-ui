import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  output: isGithubPages ? 'export' : undefined,
  trailingSlash: isGithubPages ? true : undefined,
  redirects: isGithubPages
    ? undefined
    : async () => {
        return [
          {
            source: '/',
            destination: '/components',
            permanent: false
          },
          {
            source: '/theme-generator',
            destination: '/components',
            permanent: false
          },
          {
            source: '/theme-editor',
            destination: '/components',
            permanent: false
          },
          {
            source: '/docs',
            destination: '/docs/getting-started/introduction',
            permanent: true
          }
        ]
      },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
