const GITHUB_PAGES_BASE_PATH = '/koyo-ui'

const isExternalHref = (href: string) => /^[a-z][a-z\d+.-]*:/i.test(href)

export const normalizeInternalPathname = (pathname: string) => {
  if (!pathname || isExternalHref(pathname)) return ''

  const [pathWithoutQuery] = pathname.split('?')
  const [pathWithoutHash] = pathWithoutQuery.split('#')
  const pathWithLeadingSlash = pathWithoutHash.startsWith('/') ? pathWithoutHash : `/${pathWithoutHash}`

  const withoutBasePath =
    pathWithLeadingSlash === GITHUB_PAGES_BASE_PATH
      ? '/'
      : pathWithLeadingSlash.startsWith(`${GITHUB_PAGES_BASE_PATH}/`)
        ? pathWithLeadingSlash.slice(GITHUB_PAGES_BASE_PATH.length)
        : pathWithLeadingSlash

  return withoutBasePath.length > 1 ? withoutBasePath.replace(/\/+$/, '') : withoutBasePath
}

export const isInternalPathActive = (pathname: string, href: string, exact = false) => {
  if (!href || isExternalHref(href)) return false

  const currentPath = normalizeInternalPathname(pathname)
  const targetPath = normalizeInternalPathname(href)

  if (!currentPath || !targetPath) return false
  if (targetPath === '/') return currentPath === '/'

  return exact ? currentPath === targetPath : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}
